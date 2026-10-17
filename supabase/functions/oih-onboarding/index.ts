import { createClient } from 'npm:@supabase/supabase-js@2.118.0';
import { decideMessage, renderMessage, escapeHtml } from './messages.mjs';

const env = (key: string) => Deno.env.get(key) || '';
const json = (value: unknown, status = 200) => Response.json(value, { status });
const appUrl = 'https://jadon-debug.github.io/oneinhim-learner-public/oneinhim_learner_app.html';
const db = () => createClient(env('SUPABASE_URL'), env('SUPABASE_SERVICE_ROLE_KEY'), { auth: { persistSession: false, autoRefreshToken: false } });
const safeRoute = (route: string) => /^#view=(moduleDetailView|moduleQuizView|stageDetailView|discoveryDetailView|gatewayView)(&[a-zA-Z]+=[a-zA-Z0-9_%.-]*)*$/.test(route || '') ? route : '#view=stageDetailView&stage=startFollowing';

Deno.serve(async (request: Request) => {
  const url = new URL(request.url);
  // An opaque per-user token authorizes only opt-out. GET never changes a preference.
  if (url.searchParams.has('unsubscribe')) {
    const token = url.searchParams.get('unsubscribe') || '';
    if (!/^[0-9a-f-]{36}$/i.test(token)) return json({ error: 'Invalid link' }, 400);
    const client = db();
    const { data: person, error } = await client.from('oih_learner_profiles').select('id,language').eq('unsubscribe_token', token).maybeSingle();
    if (error || !person) return json({ error: 'Invalid link' }, 400);
    const nl = person.language === 'nl';
    if (request.method === 'POST') {
      const result = await client.from('oih_learner_profiles').update({ onboarding_emails: false }).eq('id', person.id);
      return result.error ? json({ error: 'Please try again' }, 503) : new Response(nl ? 'Je bent afgemeld voor starttips. Accountmails blijven beschikbaar.' : 'You are unsubscribed from starting tips. Account emails remain available.', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
    if (request.method !== 'GET') return json({ error: 'Method not allowed' }, 405);
    return new Response(`<!doctype html><html lang="${nl ? 'nl' : 'en'}"><meta name="viewport" content="width=device-width,initial-scale=1"><meta charset="utf-8"><title>One In Him</title><body style="font:18px/1.6 Arial;background:#f5f3ee;padding:24px"><main style="max-width:560px;margin:40px auto"><h1>${nl ? 'Starttips stopzetten?' : 'Stop starting tips?'}</h1><p>${nl ? 'Je account en voortgang blijven beschikbaar.' : 'Your account and progress will remain available.'}</p><form method="post"><button style="font:inherit;padding:14px 20px">${nl ? 'Afmelden' : 'Unsubscribe'}</button></form><p><a href="${escapeHtml(appUrl + '#view=accountView')}">${nl ? 'Terug naar je account' : 'Return to your account'}</a></p></main></body></html>`, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer', 'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'" } });
  }
  const secret = env(url.searchParams.has('event') ? 'OIH_EMAIL_WEBHOOK_SECRET' : 'OIH_EMAIL_WORKER_SECRET');
  if (!secret || request.headers.get('x-oih-secret') !== secret) return json({ error: 'Unauthorized' }, 401);
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  const enabled = env('OIH_EMAIL_ENABLED') === 'true' && env('BREVO_API_KEY') && env('OIH_EMAIL_FROM') && env('OIH_EMAIL_REPLY_TO');
  if (!url.searchParams.has('event') && !enabled) return json({ enabled: false, sent: 0 }, 503);
  const client = db();
  if (url.searchParams.has('event')) {
    const payload = await request.json().catch(() => null);
    if (!payload) return json({ error: 'Invalid event' }, 400);
    if (['hard_bounce','spam','unsubscribed','blocked'].includes(payload.event)) {
      const messageId = String(payload['message-id'] || '');
      const { data: job, error } = await client.from('oih_email_jobs').select('user_id').eq('provider_id', messageId).maybeSingle();
      if (error) return json({ error: 'Lookup failed' }, 503);
      if (job) { const result = await client.from('oih_learner_profiles').update({ email_suppressed: true, onboarding_emails: false }).eq('id', job.user_id); if (result.error) return json({ error: 'Update failed' }, 503); }
    }
    return json({ accepted: true });
  }
  // Fail closed: deployment alone cannot send an email.
  const { data: jobs, error } = await client.rpc('oih_claim_onboarding_jobs', { batch_limit: 20 });
  if (error) return json({ error: 'Unable to claim jobs' }, 503);
  let sent = 0;
  for (const job of jobs || []) {
    let deliveryAttempted = false;
    try {
      const [p, progress, account] = await Promise.all([
        client.from('oih_learner_profiles').select('*').eq('id', job.user_id).single(),
        client.from('oih_learner_progress').select('*').eq('user_id', job.user_id).maybeSingle(),
        client.auth.admin.getUserById(job.user_id)
      ]);
      if (p.error || progress.error || account.error) throw new Error('recipient_lookup_failed');
      const kind = decideMessage(job.step, p.data, progress.data);
      if (!kind || !account.data.user?.email_confirmed_at || !account.data.user.email) { await client.from('oih_email_jobs').update({ status: 'skipped' }).eq('id',job.id); continue; }
      const journeyStage = new URLSearchParams((progress.data?.last_route || '').replace(/^#/, '')).get('stage');
      const stage = ['exploreJesus','startFollowing','growRoots','liveMission','leadMultiply'].includes(journeyStage || '') ? journeyStage : 'startFollowing';
      const returnRoute = kind === 'begin' ? '#view=moduleDetailView&stage=startFollowing&module=0&medium=' + (p.data.preferred_medium === 'watch' ? 'watch' : 'read') : kind === 'resume' || kind === 'welcome' ? safeRoute(progress.data?.last_route) : '#view=stageDetailView&stage=' + stage;
      const unsubscribeUrl = `${env('SUPABASE_URL')}/functions/v1/oih-onboarding?unsubscribe=${p.data.unsubscribe_token}`;
      const message = renderMessage(kind, { language: p.data.language, firstName: p.data.first_name, actionUrl: appUrl + returnRoute, preferencesUrl: appUrl + '#view=accountView', unsubscribeUrl });
      // A second consent check immediately before delivery catches queued opt-outs.
      const { data: latest, error: latestError } = await client.from('oih_learner_profiles').select('onboarding_emails,email_suppressed').eq('id', job.user_id).single();
      if (latestError) throw new Error('consent_lookup_failed');
      if (latest.email_suppressed || (job.step !== 'welcome' && !latest.onboarding_emails)) { await client.from('oih_email_jobs').update({ status: 'skipped' }).eq('id',job.id); continue; }
      deliveryAttempted = true;
      const result = await fetch('https://api.brevo.com/v3/smtp/email', { method: 'POST', signal: AbortSignal.timeout(15000), headers: { 'api-key': env('BREVO_API_KEY'), 'Content-Type': 'application/json', accept: 'application/json' }, body: JSON.stringify({ sender: { name: 'One In Him', email: env('OIH_EMAIL_FROM') }, replyTo: { name: 'One In Him team', email: env('OIH_EMAIL_REPLY_TO') }, to: [{ email: account.data.user.email }], ...message, tags: ['oih-onboarding-v1'], headers: { IdempotencyKey: job.id } }) });
      if (!result.ok) {
        await client.from('oih_email_jobs').update({ status: result.status >= 500 ? 'uncertain' : 'failed', error_code: `provider_${result.status}` }).eq('id', job.id);
        continue;
      }
      const receipt = await result.json();
      const { error: receiptError } = await client.from('oih_email_jobs').update({ status: 'sent', sent_at: new Date().toISOString(), provider_id: receipt.messageId }).eq('id', job.id);
      if (receiptError) throw new Error('receipt_write_failed');
      sent++;
    } catch (_) {
      await client.from('oih_email_jobs').update({ status: deliveryAttempted ? 'uncertain' : 'failed', error_code: deliveryAttempted ? 'check_provider_before_retry' : 'prepare_failed' }).eq('id', job.id);
    }
  }
  return json({ enabled: true, sent, processed: jobs?.length || 0 });
});
