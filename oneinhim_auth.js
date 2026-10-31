/* Finish email verification before the learner app can rewrite its route. */
(() => {
  const params = new URLSearchParams(location.hash.slice(1));
  const recovery = params.get('type') === 'recovery';
  let started = false, finished = false;
  const fail = () => {
    if (finished) return;
    finished = true;
    document.getElementById('authCallbackStatus').textContent = 'This link could not be confirmed. Return to Account to sign in or request a new link. / Deze link kon niet worden bevestigd. Ga terug om in te loggen of een nieuwe link aan te vragen.';
    document.getElementById('authCallbackReturn').hidden = false;
    history.replaceState(null, '', location.pathname);
  };
  const timer = window.setTimeout(fail, 15000);
  async function complete() {
    if (started || !window.supabase?.createClient) return;
    started = true;
    try {
      if (params.has('error') || params.has('error_description')) throw new Error('invalid_link');
      const cfg = window.ONEINHIM_TEAM_SYNC;
      const api = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
      const { data, error } = await api.auth.getSession();
      if (finished) return;
      if (error || !data?.session?.user) throw new Error('missing_session');
      finished = true;
      window.clearTimeout(timer);
      const target = new URL('oneinhim_learner_app.html', location.href);
      target.hash = recovery ? 'view=accountView&type=recovery' : 'view=accountView';
      location.replace(target.href);
    } catch (_) { window.clearTimeout(timer); fail(); }
  }
  window.addEventListener('oih-callback-sdk-ready', complete);
  complete();
})();
