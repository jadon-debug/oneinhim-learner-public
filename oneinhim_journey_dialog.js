/* Keyboard/focus behavior for the phone Journey detail sheet. */
(() => {
  const root = document.getElementById('stageSectionList');
  if (!root) return;
  let active = null, returnKey = '';
  const isPhone = () => window.matchMedia('(max-width: 760px)').matches;
  const refresh = () => {
    const panel = root.querySelector('.duo-node-popout');
    if (panel === active) return;
    const previous = active;
    active = panel;
    if (panel && isPhone()) {
      returnKey = panel.closest('.duo-path-node')?.querySelector('.duo-node-button')?.dataset.duoNodeSelect || '';
      panel.setAttribute('role', 'dialog');
      panel.setAttribute('aria-modal', 'true');
      panel.setAttribute('aria-label', panel.querySelector('h3')?.textContent || 'Unit details');
      panel.querySelector('.journey-panel-close')?.focus({ preventScroll: true });
    } else if (previous && !panel && isPhone()) {
      const button = [...root.querySelectorAll('.duo-node-button')].find(button => button.dataset.duoNodeSelect === returnKey);
      button?.focus({ preventScroll: true });
    }
  };
  new MutationObserver(refresh).observe(root, { childList: true, subtree: true });
  document.addEventListener('keydown', event => {
    if (!active || !isPhone()) return;
    if (event.key === 'Escape') { event.preventDefault(); active.querySelector('.journey-panel-close')?.click(); }
    if (event.key !== 'Tab') return;
    const controls = [...active.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')].filter(el => getComputedStyle(el).display !== 'none');
    const first = controls[0], last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  });
  refresh();
})();
