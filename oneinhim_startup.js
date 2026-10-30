/* Optional network integrations must not prevent the learner interface opening. */
(() => {
  function recover() {
    if (!document.documentElement.classList.contains('app-booting')) return;
    const message = document.getElementById('appStartupMessage');
    if (message) message.textContent = 'The app is taking longer to open. Check your connection and reload. Your saved progress has not been cleared.';
    const retry = document.getElementById('appStartupRetry');
    if (retry) retry.hidden = false;
  }
  window.setTimeout(recover, 12000);
  window.addEventListener('error', recover);
  window.addEventListener('unhandledrejection', recover);
  window.addEventListener('oih-auth-ready', () => {
    if (document.documentElement.classList.contains('app-booting')) return;
    Promise.resolve(window.OIHLearnerAccounts?.init()).catch(error => console.warn('Account connection unavailable.', error));
  });
})();
