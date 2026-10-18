const {app,storage}=require('../tests/app-regression.cjs');
const fs=require('node:fs');
const esc=value=>value.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
(async()=>{
 storage.clear();const a=await app();const css=fs.readFileSync('oneinhim_learner_styles.css','utf8');
 const frames=[0,1,3,5].map(count=>{
  a.run('state.completedPieces.clear();state.completed.clear()');
  for(let i=0;i<count;i++)a.run(`state.activeStageId="exploreJesus";state.activeModuleIndex=${i};markCurrentLearningStepComplete()`);
  a.run('handleGatewayNav("journey");state.selectedPathNode="";renderStageDetail()');
  const doc=`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><base href="https://jadon-debug.github.io/oneinhim-learner-public/"><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet"><style>/*APP_STYLES*/</style><body class="${a.window.document.body.className}"><div class="app-shell"><main class="main">${a.window.document.querySelector('.gateway-header.app-top-chrome').outerHTML}${a.window.document.getElementById('stageDetailView').outerHTML}</main></div>`;
  return `<section><h2>${count}/5 modules · ${count*20}%</h2><iframe title="Unit 1 at ${count*20}%" data-screen="${esc(doc)}" sandbox="allow-same-origin"></iframe></section>`;
 }).join('');
 const html=`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Unit 1 · Five modules and completion ring</title><style>body{margin:0;padding:20px;background:#edf0e9;color:#28382b;font:15px/1.5 system-ui}h1{font-size:22px;margin:0}p{margin:8px 0 24px}.frames{display:flex;justify-content:center;gap:18px;flex-wrap:wrap}section{width:390px;max-width:100%}h2{font-size:14px}iframe{width:100%;height:680px;border:1px solid #cad1c5;border-radius:16px;background:white;display:block}</style><h1>Unit 1 · Five modules</h1><p>Static phone-width snapshots. The orange ring measures completed content only; questions and practice are separate. Controls are inactive.</p><main class="frames">${frames}</main><script type="application/json" id="styles">${JSON.stringify(css).replace(/</g,'\\u003c')}</script><script>const css=JSON.parse(document.getElementById('styles').textContent);document.querySelectorAll('iframe').forEach(frame=>{frame.srcdoc=frame.dataset.screen.replace('/*APP_STYLES*/',css);frame.removeAttribute('data-screen');});</script></html>`;
 fs.writeFileSync('docs/unit-progress-review.html',html);
})();
