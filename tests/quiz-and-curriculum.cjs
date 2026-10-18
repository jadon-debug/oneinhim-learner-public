const {app,storage} = require('./app-regression.cjs');
const assert = require('node:assert/strict');
(async()=>{
  storage.clear(); const a=await app(); const run=code=>a.run(code); const doc=a.window.document;
  const inventory=run(`pathOptions.map(stage=>({stage:stage.choice,units:stageSectionGroups(stage).map(group=>({number:group.unitNumber,modules:group.modules.length})),sources:rawPackageModulesForStage(stage).map(r=>r.curriculumSourceId||r.id)}))`);
  assert.equal(inventory.reduce((n,s)=>n+s.units.length,0),18);
  for(const stage of inventory) {
    assert.ok(stage.units.length);
    stage.units.forEach((unit,index)=>{assert.equal(unit.number,index+1);assert.equal(unit.modules,5,`${stage.stage}: every unit must contain five real modules`);});
  }
  // Every original published lesson is retained, including the sixth items formerly dropped by slice(0,5).
  assert.equal(run(`pathOptions.slice(1).every(stage=>resources.filter(r=>r.seriesId===stageChoiceModuleId(stage)&&r.showInJourney!==false).every(source=>packageModulesForStage(stage).some(r=>r.curriculumSourceId===source.id)))`),true);
  assert.equal(run(`pathOptions.every(stage=>packageModulesForStage(stage).filter(r=>r.primaryMedium==="read").every(r=>r.readBody.length>0&&!r.readBody.join(" ").match(/\bQUESTIONS\b|Answers in the back of the study guide/)))`),true);
  // Split readings cover the supplied teaching exactly once, in source order.
  assert.equal(run(`pathOptions.every(stage=>{
    const split=packageModulesForStage(stage).filter(r=>r.sourceParagraphRange);
    return [...new Set(split.map(r=>r.curriculumSourceId))].every(id=>split.filter(r=>r.curriculumSourceId===id).flatMap(r=>r.readBody).join(" ")===teachingParagraphs(resources.find(r=>r.id===id)).join(" "));
  })`),true);
  assert.equal(run('new Set(packageModulesForStage(pathOptions[0]).slice(0,5).map(r=>r.quickCheck.question)).size'),5,'Opening modules must not repeat the same question five times');
  // All 90 modules increment their own unit by exactly 20%; no questions required.
  run('state.completed.clear();state.completedPieces.clear();state.completedReviews.clear();state.completedPracticals.clear()');
  for(const stage of inventory) for(let unit=0;unit<stage.units.length;unit++) {
    for(let piece=0;piece<5;piece++) {
      run(`state.activeStageId=${JSON.stringify(stage.stage)};state.activeModuleIndex=${unit*5+piece};state.sectionReview=null;state.practicalUse=false;markCurrentLearningStepComplete()`);
      assert.equal(run(`stageSectionGroups(activeStage())[${unit}].progress`),(piece+1)*20);
    }
  }
  // Exercise every option of every module through the real Check button.
  run('state.completedReviews.clear();state.completedPracticals.clear()');
  let incorrectCount=0,correctCount=0;
  for(const stage of inventory) for(let index=0;index<stage.units.length*5;index++) {
    run(`state.activeStageId=${JSON.stringify(stage.stage)};state.activeModuleIndex=${index};state.moduleMode=preferredModeForResource(moduleResourceFor(activeStage(),${index}));state.sectionReview=null;state.practicalUse=false;state.quizChoice="";state.quizChecked=false;renderModuleQuiz();setView("moduleQuizView");bindDynamicActions()`);
    const quiz=run('currentLearningQuiz()');
    assert.equal(quiz.options.filter(o=>o.id===quiz.answer).length,1,'Each knowledge check has exactly one correct answer');
    for(const option of quiz.options) {
      doc.querySelector(`[data-quiz-choice="${option.id}"]`).click();doc.getElementById('quizCheck').click();
      const correct=option.id===quiz.answer;
      assert.equal(doc.body.classList.contains('quiz-result-correct'),correct);
      assert.equal(doc.body.classList.contains('quiz-result-incorrect'),!correct);
      assert.equal(doc.getElementById('quizCheck').textContent,correct?'Continue':'Try again');
      if(correct){correctCount++;assert.match(doc.getElementById('quizFeedback').textContent,/^Correct\./);}
      else {incorrectCount++;assert.match(doc.getElementById('quizFeedback').textContent,/^Not quite\./);assert.equal(doc.querySelectorAll('.quiz-option:not(.selected) .quiz-option-detail').length,0,'A retry must not reveal the correct option');assert.equal(doc.querySelectorAll('.quiz-option.correct').length,0);}
    }
  }
  // A retry never moves to another module or grants review completion.
  run('state.activeStageId="exploreJesus";state.activeModuleIndex=0;state.sectionReview={...stageSectionGroups(activeStage())[0],groupIndex:0};state.quizKey="";renderModuleQuiz();bindDynamicActions()');
  let quiz=run('currentLearningQuiz()'); const wrong=quiz.options.find(o=>o.id!==quiz.answer).id;
  doc.querySelector(`[data-quiz-choice="${wrong}"]`).click(); doc.getElementById('quizCheck').click();
  assert.equal(run('state.completedReviews.size'),0);
  doc.getElementById('quizCheck').click(); assert.equal(run('state.activeModuleIndex'),0);assert.equal(run('state.quizChecked'),false);
  quiz=run('currentLearningQuiz()');doc.querySelector(`[data-quiz-choice="${quiz.answer}"]`).click();doc.getElementById('quizCheck').click();assert.equal(run('state.completedReviews.size'),1);
  // Practical actions are choices, not fake right/wrong knowledge answers.
  run('state.sectionReview=null;state.practicalUse=true;state.quizKey="";renderModuleQuiz();bindDynamicActions()');
  for(const option of run('currentLearningQuiz().options')) {
    doc.querySelector(`[data-quiz-choice="${option.id}"]`).click();assert.equal(doc.getElementById('quizCheck').textContent,'Choose this step');doc.getElementById('quizCheck').click();
    assert.equal(doc.body.classList.contains('quiz-result-reflection'),true);assert.equal(doc.body.classList.contains('quiz-reflection'),false,'Outcome classes must not reuse a hidden content component class');assert.equal(doc.body.classList.contains('quiz-result-correct'),false);assert.equal(doc.querySelectorAll('.quiz-option.correct').length,0);
    assert.match(doc.getElementById('quizFeedback').textContent,/^Your choice:/);
  }
  // Reordered v231 completions and notes remain on their source, never a new numeric neighbour.
  storage.clear();storage.set('oneinhim.learning.progress.v1',JSON.stringify({completed:[],completedPieces:['growRoots:12'],completedReviews:[],completedPracticals:[]}));
  storage.set('oneinhim.moduleNotes.guest.growRoots.12','Old identity note');const b=await app();
  const target=b.run('packageModulesForStage(pathOptions[2]).findIndex(r=>r.id==="book_one_basics_2_9_as_he_is")');
  assert.notEqual(target,12);assert.equal(b.run(`learningPieceComplete(pathOptions[2],${target})`),true);assert.equal(b.run('learningPieceComplete(pathOptions[2],12)'),false);
  assert.equal(b.run(`getModuleNote(pathOptions[2],${target})`),'Old identity note');assert.equal(b.run('getModuleNote(pathOptions[2],12)'),'');
  assert.equal(b.run('stageSectionGroups(pathOptions[2])[1].progress'),20);
  // Full completed readings that are now split retain their real completion across all parts.
  storage.clear();storage.set('oneinhim.learning.progress.v1',JSON.stringify({completed:[],completedPieces:['startFollowing:15'],completedReviews:[],completedPracticals:[]}));const c=await app();
  assert.equal(c.run('packageModulesForStage(pathOptions[1]).filter(r=>r.curriculumSourceId==="book_one_basics_1_16_praying_to_god").every(r=>learningPieceComplete(pathOptions[1],packageModulesForStage(pathOptions[1]).indexOf(r)))'),true);
  assert.equal(c.run('stageSectionGroups(pathOptions[1])[3].progress'),60);
  console.log(`PASS: 18 units / 90 real modules; ${correctCount} correct and ${incorrectCount} incorrect answer paths; retries, review gating, ungraded practical choices, source coverage and legacy notes/progress.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
