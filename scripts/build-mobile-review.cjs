// Static review snapshots from the real app DOM and full stylesheet. No mail/auth calls.
const { app } = require('../tests/app-regression.cjs');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const escape = value => value.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
(async () => {
  const a = await app();
  const css = fs.readFileSync(path.join(root,'oneinhim_learner_styles.css'),'utf8');
  const states = [['Account','handleGatewayNav("account")','accountView'],['Feed','handleGatewayNav("feed")','feedView'],['Podcast Shows','openBrowseShelf("podcast-shows")','shelfDetailView'],['Your starting point','setView("onboardingView");renderOnboarding()','onboardingView']];
  const frames = states.map(([title, action, id]) => {
    a.run(action);
    const chrome = a.window.document.querySelector('.gateway-header.app-top-chrome').outerHTML;
    const screen = a.window.document.getElementById(id).outerHTML;
    const document = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="https://jadon-debug.github.io/oneinhim-learner-public/"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"><style>/*APP_STYLES*/</style></head><body class="${a.window.document.body.className}"><div class="app-shell"><main class="main">${chrome}${screen}</main></div></body></html>`;
    return `<section><h2>${title}</h2><iframe title="${title}" data-screen="${escape(document)}" sandbox="allow-same-origin"></iframe></section>`;
  }).join('');
  const sharedStyles = JSON.stringify(css).replace(/</g, '\\u003c');
  fs.writeFileSync(path.join(root,'docs/mobile-ui-review.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>One In Him · Mobile UI review</title><style>*{box-sizing:border-box}body{margin:0;padding:16px;background:#e9ebe5;color:#233027;font:14px/1.5 system-ui,sans-serif}header{max-width:828px;margin:0 auto 16px}h1{font-size:20px;margin:0}p{margin:4px 0;color:#5b665c}.screens{display:flex;justify-content:center;gap:24px;flex-wrap:wrap}section{width:390px;max-width:100%}h2{font-size:13px;margin:0 0 8px}iframe{width:100%;height:844px;display:block;border:1px solid #cbd1c6;border-radius:18px;background:#fff}</style></head><body><header><h1>One In Him · Mobile UI review</h1><p>Static snapshots of the updated app markup and styles. Controls are inactive here; the code review contains the working flows.</p></header><main class="screens">${frames}</main><script type="application/json" id="appStyles">${sharedStyles}</script><script>const css=JSON.parse(document.getElementById('appStyles').textContent);document.querySelectorAll('iframe[data-screen]').forEach(frame=>{frame.srcdoc=frame.dataset.screen.replace('/*APP_STYLES*/',css);frame.removeAttribute('data-screen');});</script></body></html>`);
})();
