/* Learner accounts: no mail credentials or privileged keys belong in this file. */
window.OIHLearnerAccounts = (() => {
  let user = null, profile = null, owner = '', ready = false, busy = false;
  const initialAuthParams = new URLSearchParams(location.hash.slice(1));
  let recovery = initialAuthParams.get('type') === 'recovery', mode = 'signup', notice = '', syncTimer, syncInFlight = false, syncAgain = false;
  let revision = 0;
  const config = () => window.ONEINHIM_LEARNER_CONFIG || {};
  const text = (en, nl) => state.language === 'nl' ? nl : en;
  const client = () => getSupabaseAuthClient();
  const route = () => location.hash.startsWith('#view=') ? location.hash : '#view=stageDetailView&stage=startFollowing';
  const destination = () => new URL('oneinhim_learner_app.html', location.href).href + '#view=accountView';
  const progress = () => Object.fromEntries(PROGRESS_FIELDS.map(key => [key, [...state[key]]]));
  const key = () => owner ? `${LEARNING_PROGRESS_KEY}.${owner}` : LEARNING_PROGRESS_KEY;
  function status(message) { notice = message; const el = document.getElementById('learnerAuthStatus'); if (el) el.textContent = message; }
  function render() {
    const host = document.getElementById('learnerAccountControls');
    if (!host) return;
    const signup = mode === 'signup';
    const disabled = !config().signupEnabled;
    host.innerHTML = user ? `
      <div class="learner-identity"><strong>${esc(profile?.first_name || user.email)}</strong><span>${esc(user.email)}</span></div>
      <p>${text('Your completed lessons sync across devices. Personal notes stay in this browser.', 'Je voltooide lessen worden tussen apparaten gesynchroniseerd. Persoonlijke notities blijven in deze browser.')}</p>
      <form id="learnerPreferences" class="learner-form">
        <label>${text('First name (optional)', 'Voornaam (optioneel)')}<input name="first_name" maxlength="80" autocomplete="given-name" value="${esc(profile?.first_name || '')}"></label>
        <label>${text('How do you like to learn?', 'Hoe leer je het liefst?')}<select name="preferred_medium">${[['read','Read','Lezen'],['watch','Watch','Kijken'],['listen','Listen','Luisteren']].map(([v,en,nl])=>`<option value="${v}" ${profile?.preferred_medium === v ? 'selected' : ''}>${text(en,nl)}</option>`).join('')}</select></label>
        <label class="learner-check"><input type="checkbox" name="onboarding_emails" ${profile?.onboarding_emails ? 'checked' : ''}>${text('Send me a few helpful emails as I get started.', 'Stuur mij een paar behulpzame e-mails om op weg te komen.')}</label>
        <p class="learner-small">${text('Optional. You can unsubscribe at any time. Account and security emails are separate.', 'Optioneel. Je kunt je altijd afmelden. Account- en beveiligingsmails staan hier los van.')}</p>
        <button class="soft-btn" type="submit">${text('Save preferences', 'Voorkeuren opslaan')}</button>
      </form>
      <div class="learner-actions"><button class="soft-btn" id="learnerImport" type="button">${text('Add guest progress from this device', 'Gastvoortgang van dit apparaat toevoegen')}</button><button class="soft-btn" id="learnerSignout" type="button">${text('Sign out', 'Uitloggen')}</button></div>
      ${recovery ? passwordForm() : ''}
      <p id="learnerAuthStatus" role="status" aria-live="polite">${esc(notice)}</p>` : `
      <h3>${text('Keep your place, wherever you learn', 'Ga verder waar je gebleven bent')}</h3>
      <p>${text('Create a free account to save completed lessons across devices. You can also keep exploring as a guest.', 'Maak een gratis account om voltooide lessen op meerdere apparaten te bewaren. Je kunt ook als gast verdergaan.')}</p>
      ${disabled && signup ? `<p class="learner-callout">${text('Account registration is being prepared. You can use the free journey now; your progress stays on this device.', 'We bereiden registratie voor. Je kunt de gratis reis nu gebruiken; je voortgang blijft op dit apparaat.')}</p>` : ''}
      <div class="learner-tabs"><button type="button" data-auth-mode="signup" aria-pressed="${signup}">${text('Create account', 'Account maken')}</button><button type="button" data-auth-mode="signin" aria-pressed="${!signup}">${text('Sign in', 'Inloggen')}</button></div>
      <form id="learnerAuthForm" class="learner-form">
        ${signup ? `<label>${text('First name (optional)', 'Voornaam (optioneel)')}<input name="first_name" maxlength="80" autocomplete="given-name"></label>` : ''}
        <label>${text('Email address', 'E-mailadres')}<input name="email" type="email" required maxlength="254" autocomplete="username" inputmode="email"></label>
        <label>${text('Password', 'Wachtwoord')}<input name="password" type="password" required minlength="${signup ? 10 : 1}" autocomplete="${signup ? 'new-password' : 'current-password'}"></label>
        ${signup ? `<p class="learner-small">${text('Use at least 10 characters.', 'Gebruik minimaal 10 tekens.')}</p><label class="learner-check"><input type="checkbox" name="onboarding_emails">${text('Email me helpful starting ideas and reminders (optional).', 'Mail mij tips en herinneringen om op weg te komen (optioneel).')}</label>` : ''}
        <button class="primary-btn" type="submit" ${signup && disabled ? 'disabled' : ''}>${signup ? text('Create free account', 'Gratis account maken') : text('Sign in', 'Inloggen')}</button>
        <button class="learner-text-button" id="learnerReset" type="button">${text('Forgot your password?', 'Wachtwoord vergeten?')}</button>
        ${signup ? `<button class="learner-text-button" id="learnerResend" type="button">${text('Resend confirmation email', 'Bevestigingsmail opnieuw sturen')}</button>` : ''}
      </form><p id="learnerAuthStatus" role="status" aria-live="polite">${esc(notice)}</p>`;
    host.querySelectorAll('[data-auth-mode]').forEach(button => button.onclick = () => { mode = button.dataset.authMode; notice = ''; render(); });
    host.querySelector('#learnerAuthForm')?.addEventListener('submit', authSubmit);
    host.querySelector('#learnerReset')?.addEventListener('click', () => emailAction('reset'));
    host.querySelector('#learnerResend')?.addEventListener('click', () => emailAction('resend'));
    host.querySelector('#learnerPreferences')?.addEventListener('submit', savePreferences);
    host.querySelector('#learnerPasswordForm')?.addEventListener('submit', updatePassword);
    host.querySelector('#learnerSignout')?.addEventListener('click', signout);
    host.querySelector('#learnerImport')?.addEventListener('click', importGuest);
    host.querySelectorAll('button[type="submit"]').forEach(button => { if (busy) button.disabled = true; });
    const copy = document.querySelector('[data-i18n="account.learnerCopy"]');
    if (copy) copy.textContent = user ? text('Learn at your own pace. Your completed lessons are connected to your account.', 'Leer in je eigen tempo. Je voltooide lessen zijn gekoppeld aan je account.') : t('account.learnerCopy');
    const device = document.querySelector('[data-i18n="account.deviceNote"]');
    if (device) device.textContent = text('Guest progress and personal notes are saved in this browser. Clearing browser data removes them.', 'Gastvoortgang en persoonlijke notities worden in deze browser bewaard. Ze verdwijnen als je browsergegevens wist.');
  }
  function passwordForm() { return `<form id="learnerPasswordForm" class="learner-form"><label>${text('New password', 'Nieuw wachtwoord')}<input name="password" type="password" minlength="10" required autocomplete="new-password"></label><button class="primary-btn" type="submit">${text('Update password', 'Wachtwoord bijwerken')}</button></form>`; }
  async function guarded(action) {
    if (busy) return;
    busy = true; status(text('Please wait…', 'Even wachten…')); render();
    try { await action(); } catch (error) { status(text('We could not complete that. Check your connection and try again.', 'Dat is niet gelukt. Controleer je verbinding en probeer het opnieuw.')); }
    finally { busy = false; render(); }
  }
  async function authSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value;
    const firstName = form.elements.first_name?.value.trim() || '';
    const consent = Boolean(form.elements.onboarding_emails?.checked);
    await guarded(async () => {
      const api = client();
      if (!api || (mode === 'signup' && !config().signupEnabled)) throw new Error('unavailable');
      if (!sessionStorage.getItem('oih.auth.return')) sessionStorage.setItem('oih.auth.return', route());
      const result = mode === 'signup'
        ? await api.auth.signUp({ email, password, options: { emailRedirectTo: destination(), data: { first_name: firstName, language: state.language, onboarding_emails: consent, consent_version: 'onboarding-v1' } } })
        : await api.auth.signInWithPassword({ email, password });
      if (result.error) { status(text('Unable to sign in or register. Check your details, confirm your email, or try resetting your password.', 'Inloggen of registreren is niet gelukt. Controleer je gegevens, bevestig je e-mail of herstel je wachtwoord.')); return; }
      if (result.data?.session) { await changeUser(result.data.session.user); continueLearning(); }
      else status(text('Check your inbox for a confirmation link. If you already have an account, sign in or reset your password.', 'Controleer je inbox voor de bevestigingslink. Heb je al een account? Log in of herstel je wachtwoord.'));
    });
  }
  async function emailAction(action) {
    const form = document.getElementById('learnerAuthForm');
    const input = form?.elements.email;
    if (!input?.value || !input.checkValidity()) { input?.reportValidity(); return; }
    const email = input.value.trim();
    await guarded(async () => {
      if (!client() || !config().signupEnabled) { status(text('Email delivery is not available yet. Please continue as a guest.', 'E-mail is nog niet beschikbaar. Ga voorlopig verder als gast.')); return; }
      const result = action === 'reset' ? await client().auth.resetPasswordForEmail(email, { redirectTo: destination() }) : await client().auth.resend({ type: 'signup', email, options: { emailRedirectTo: destination() } });
      status(result.error ? text('Unable to send. Please wait a moment and try again.', 'Versturen is niet gelukt. Wacht even en probeer opnieuw.') : text('If that address is eligible, an email is on its way. Check spam too.', 'Als dit adres in aanmerking komt, ontvang je een e-mail. Controleer ook je spam.'));
    });
  }
  async function updatePassword(event) {
    event.preventDefault(); const password = event.currentTarget.elements.password.value;
    await guarded(async () => { const { error } = await client().auth.updateUser({ password }); if (error) throw error; recovery = false; status(text('Password updated.', 'Wachtwoord bijgewerkt.')); });
  }
  async function savePreferences(event) {
    event.preventDefault(); const form = event.currentTarget;
    const values = { first_name: form.elements.first_name.value.trim(), language: state.language, preferred_medium: form.elements.preferred_medium.value, onboarding_emails: form.elements.onboarding_emails.checked, consent_version: 'onboarding-v1' };
    await guarded(async () => { const { error } = await client().from('oih_learner_profiles').update(values).eq('id', user.id); if (error) throw error; profile = { ...profile, ...values }; status(text('Preferences saved.', 'Voorkeuren opgeslagen.')); });
  }
  function continueLearning() {
    const savedRoute = sessionStorage.getItem('oih.auth.return');
    sessionStorage.removeItem('oih.auth.return');
    if (savedRoute?.startsWith('#view=') && !savedRoute.includes('view=accountView')) { history.replaceState(null, '', savedRoute); restoreAppRoute(); }
    else handleGatewayNav('journey');
  }
  async function changeUser(nextUser) {
    if ((nextUser?.id || '') === owner && ready) return;
    revision++; const currentRevision = revision;
    clearTimeout(syncTimer); user = nextUser; owner = user?.id || ''; profile = null; ready = false;
    loadLearningProgress();
    if (!user) { ready = true; renderLearnerAccount(); renderStageDetail(); return; }
    try {
      const [{ data: p, error: pe }, { data: saved, error: se }] = await Promise.all([
        client().from('oih_learner_profiles').select('first_name,language,preferred_medium,onboarding_emails').eq('id', user.id).single(),
        client().from('oih_learner_progress').select('progress,last_route').eq('user_id', user.id).maybeSingle()
      ]);
      if (currentRevision !== revision) return;
      if (pe || se) throw pe || se;
      profile = p;
      for (const field of PROGRESS_FIELDS) state[field] = new Set([...(saved?.progress?.[field] || []), ...state[field]]);
      writeLocalJson(key(), progress()); ready = true;
      status(text('Progress synced.', 'Voortgang gesynchroniseerd.'));
      if (p?.language) applyLanguage(p.language);
      renderLearnerAccount(); renderStageDetail();
      if (!recovery && !sessionStorage.getItem('oih.auth.return') && saved?.last_route && location.hash.includes('view=accountView')) sessionStorage.setItem('oih.auth.return', saved.last_route);
    } catch (_) { if (currentRevision !== revision) return; status(text('Saved on this device. Cloud sync is unavailable; sign in again to retry.', 'Bewaard op dit apparaat. Synchronisatie is niet beschikbaar; log opnieuw in om te proberen.')); render(); }
  }
  function scheduleSync() {
    if (!user || !ready) return;
    clearTimeout(syncTimer); syncTimer = setTimeout(sync, 400);
  }
  async function sync() {
    if (!user || !ready) return;
    if (syncInFlight) { syncAgain = true; return; }
    const currentRevision = revision;
    syncInFlight = true;
    try {
      const { data, error } = await client().rpc('oih_save_learning_progress', { incoming: progress(), return_route: route(), has_started: ['moduleDetailView','moduleQuizView'].includes(state.activeView) });
      if (currentRevision !== revision) return;
      if (error) throw error;
      for (const field of PROGRESS_FIELDS) for (const value of data?.[field] || []) state[field].add(value);
      writeLocalJson(key(), progress()); status(text('Progress synced.', 'Voortgang gesynchroniseerd.'));
    } catch (_) { if (currentRevision === revision) status(text('Saved on this device. Sync will retry when you reconnect.', 'Op dit apparaat bewaard. Synchronisatie probeert opnieuw zodra je verbinding hebt.')); }
    finally { syncInFlight = false; if (syncAgain) { syncAgain = false; scheduleSync(); } }
  }
  async function importGuest() {
    const guest = readLocalJson(LEARNING_PROGRESS_KEY, {});
    for (const field of PROGRESS_FIELDS) for (const value of guest[field] || []) if (typeof value === 'string') state[field].add(value);
    saveLearningProgress(); await sync(); renderLearnerAccount(); renderStageDetail();
  }
  async function signout() {
    await guarded(async () => { await sync(); const { error } = await client().auth.signOut(); if (error) throw error; await changeUser(null); recovery = false; status(text('Signed out. Guest progress is separate from your account.', 'Uitgelogd. Gastvoortgang staat los van je account.')); });
  }
  async function init() {
    const api = client();
    const params = initialAuthParams;
    if (params.has('error_description')) { notice = text('That link has expired or is invalid. Request another confirmation or password reset.', 'Deze link is verlopen of ongeldig. Vraag een nieuwe bevestiging of wachtwoordherstel aan.'); history.replaceState(null, '', '#view=accountView'); }
    if (!api) { ready = true; render(); return; }
    api.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') recovery = true;
      // Defer Supabase calls until the auth callback has released its lock.
      setTimeout(async () => { await changeUser(session?.user || null); if (recovery) { setView('accountView'); render(); } else if (event === 'SIGNED_IN' && sessionStorage.getItem('oih.auth.return')) continueLearning(); }, 0);
    });
    const { data, error } = await api.auth.getSession();
    if (error) status(text('Your sign-in link could not be opened. Try signing in again.', 'Je inloglink kon niet worden geopend. Probeer opnieuw in te loggen.'));
    await changeUser(data?.session?.user || null);
    window.addEventListener('online', scheduleSync);
    if (recovery) setView('accountView');
    scheduleSync();
    render();
  }
  function promptSave() {
    const view = document.getElementById('moduleQuizView');
    if (!view) return;
    let prompt = document.getElementById('learnerSavePrompt');
    const visible = config().signupEnabled && !user && state.quizChecked && state.completedPieces.size > 0;
    if (!visible) { if (prompt) prompt.hidden = true; return; }
    if (!prompt) { prompt = document.createElement('aside'); prompt.id = 'learnerSavePrompt'; prompt.className = 'learner-save-prompt'; view.appendChild(prompt); }
    prompt.hidden = false;
    prompt.innerHTML = `<h3>${text('Keep this step with you', 'Neem deze stap met je mee')}</h3><p>${text('Your step is saved on this device. A free account lets you keep completed lessons across devices. You can add this guest progress after signing in.', 'Deze stap is bewaard op dit apparaat. Met een gratis account bewaar je voltooide lessen op meerdere apparaten. Na het inloggen kun je deze gastvoortgang toevoegen.')}</p><button class="soft-btn" type="button">${text('Create free account', 'Gratis account maken')}</button>`;
    prompt.querySelector('button').onclick = () => { mode = 'signup'; setView('accountView'); };
  }
  return { init, render, promptSave, scheduleSync, key, owner: () => owner, user: () => user, sync, changeUser };
})();
