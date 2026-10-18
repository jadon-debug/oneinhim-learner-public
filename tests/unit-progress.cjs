const { app, storage } = require('./app-regression.cjs');
const assert = require('node:assert/strict');
(async () => {
  storage.clear();
  const a = await app();
  const info = code => a.run(code);
  const percent = () => info('stageSectionGroups(pathOptions[0])[0].progress');
  assert.equal(info('stageSectionGroups(pathOptions[0])[0].modules.length'), 5);
  assert.deepEqual(Array.from(info('packageModulesForStage(pathOptions[0]).map(r=>r.primaryMedium)')), ['watch','read','listen','read','watch']);
  assert.equal(info('packageModulesForStage(pathOptions[0]).filter(r=>r.primaryMedium==="read").every(r=>r.readBody.every(p=>!p.includes("Answers in the back")))'),true,'Question pages are not counted as written modules');
  assert.equal(info('packageModulesForStage(pathOptions[0]).filter(r=>r.primaryMedium==="read").reduce((n,r)=>n+r.readBody.length,0)'),6,'All six teaching paragraphs are used once');
  info('state.completedPracticals.add("exploreJesus:0"); state.completedReviews.add("exploreJesus:0")');
  assert.equal(percent(),0,'Practice and questions cannot inflate content progress');
  info('handleGatewayNav("journey")');
  const ring = () => a.window.document.querySelector('[data-duo-node-select="content:exploreJesus:0"]').parentElement.querySelector('[role="progressbar"]');
  assert.equal(ring().getAttribute('aria-valuenow'),'0');
  for(let i=0;i<5;i++) {
    info(`state.activeStageId="exploreJesus";state.activeModuleIndex=${i};state.moduleMode=preferredModeForResource(moduleResourceFor(activeStage(),${i}));state.sectionReview=null;state.practicalUse=false;renderModuleDetail();setView("moduleDetailView");bindDynamicActions()`);
    if(i===2) {
      const player=a.window.document.querySelector('#modulePlayer mux-player');
      assert.ok(player.hasAttribute('audio'),'Audio segment must render an audio player');
      assert.equal(player.getAttribute('asset-start-time'),'360');
      assert.equal(player.getAttribute('asset-end-time'),'720');
    }
    a.window.document.getElementById('moduleNextStep').click();
    assert.equal(percent(),(i+1)*20,'Completing content advances by exactly one fifth before answering questions');
    const before=percent();
    a.window.document.querySelector('[data-quiz-choice="knowing_god"]').click();
    // A question screen never creates an extra content completion.
    a.window.document.getElementById('quizCheck').click();
    assert.equal(percent(),before);
    info('renderStageDetail()');
    assert.equal(ring().getAttribute('aria-valuenow'),String(before));
    assert.equal(ring().querySelector('.duo-unit-fill').getAttribute('stroke-dasharray'),`${before} 100`);
  }
  const b=await app();
  assert.equal(b.run('stageSectionGroups(pathOptions[0])[0].progress'),100,'Completion persists after reload');
  storage.clear();
  storage.set('oneinhim.learning.progress.v1',JSON.stringify({completed:[],completedPieces:['exploreJesus:0'],completedPracticals:[],completedReviews:[]}));
  const c=await app();
  assert.equal(c.run('stageSectionGroups(pathOptions[0])[0].progress'),20,'Legacy first-unit completion maps only to the original first segment');
  c.run('state.activeStageId="exploreJesus";openSectionPicker(0)');
  assert.equal(c.run('state.activeModuleIndex'),1,'Resume opens the first incomplete segment');
  c.run('state.activeModuleIndex=0;markCurrentLearningStepComplete()');
  assert.equal(c.run('state.completedPieces.size'),1,'Revisiting a legacy completion does not double-count it');
  console.log('PASS: five sourced mixed-format modules, content-only 20% increments, accessible ring, audio player, resume, reload and legacy progress.');
})().catch(error=>{console.error(error);process.exitCode=1;});
