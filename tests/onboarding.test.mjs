import test from 'node:test';
import assert from 'node:assert/strict';
import { decideMessage, renderMessage } from '../supabase/functions/oih-onboarding/messages.mjs';
const profile = { onboarding_emails: true, email_suppressed: false };
test('reminders follow activity and stop after opt-out or suppression', () => {
  assert.equal(decideMessage('welcome', { onboarding_emails: false }, null), 'welcome');
  assert.equal(decideMessage('day2', profile, null), 'begin');
  assert.equal(decideMessage('day2', profile, { first_started_at: '2026-10-01' }), null);
  assert.equal(decideMessage('day4', profile, { first_started_at: '2026-10-01' }), 'resume');
  assert.equal(decideMessage('day4', profile, { first_completed_at: '2026-10-01' }), 'next');
  assert.equal(decideMessage('day7', profile, { last_active_at: new Date().toISOString() }), null);
  for (const step of ['day2','day4','day7']) assert.equal(decideMessage(step, { onboarding_emails: false }, null), null);
  for (const step of ['welcome','day2','day4','day7']) assert.equal(decideMessage(step, { ...profile, email_suppressed: true }, null), null);
});
test('all emails have bilingual HTML and plain text, one main action and escaped personal data', () => {
  for (const language of ['en','nl']) for (const kind of ['welcome','begin','resume','next','help']) {
    const message = renderMessage(kind, { language, firstName: '<script>x</script>', actionUrl: 'https://example.test/lesson', preferencesUrl: 'https://example.test/account', unsubscribeUrl: 'https://example.test/unsubscribe' });
    assert.ok(message.subject);
    assert.ok(message.textContent.includes('https://example.test/lesson'));
    assert.ok(message.htmlContent.includes(`lang="${language}"`));
    assert.ok(!message.htmlContent.includes('<script>'));
    assert.equal(message.htmlContent.split('https://example.test/lesson').length - 1, 1);
    assert.equal(message.textContent.includes('https://example.test/unsubscribe'), kind !== 'welcome');
  }
});
