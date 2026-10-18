/* DOM-level regressions for the static learner app. Run with:
   NODE_PATH=/tmp/oih-test-env/node_modules node tests/app-regression.cjs */
const { parseHTML } = require('linkedom');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const source = readFileSync(path.join(root, 'oneinhim_learner_runtime.js'), 'utf8').replace(/boot\(\);\s*$/, '');
const storage = new Map();
async function app(hash = '') {
  const { window } = parseHTML(readFileSync(path.join(root, 'oneinhim_learner_app.html'), 'utf8'));
  const location = new URL('https://example.test/oneinhim_learner_app.html' + hash);
  const historyCalls = [];
  Object.assign(window, {
    console, URL, URLSearchParams, AbortController,
    location,
    localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) },
    sessionStorage: { getItem: () => null, setItem() {}, removeItem() {} },
    history: Object.fromEntries(['pushState', 'replaceState'].map(method => [method, (state, _, url) => { historyCalls.push(method); location.href = url; }])),
    innerWidth: 1363, innerHeight: 936, scrollY: 0, scrollX: 0,
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    scrollTo() {}, requestAnimationFrame: () => 1, cancelAnimationFrame() {},
    setTimeout: () => 1, clearTimeout() {},
    getComputedStyle: () => ({ getPropertyValue: () => '0', display: 'block', overflowX: 'auto', position: 'static' }),
    fetch: async (url) => {
      const name = String(url).split('?')[0].split('/').pop();
      if (String(url).includes('supabase.co')) return { ok: true, json: async () => [] };
      try { const body = readFileSync(path.join(root, name),'utf8'); return { ok: true, json: async () => JSON.parse(body) }; }
      catch { return { ok: false, json: async () => ({}) }; }
    }
  });
  const querySelector = window.document.querySelector.bind(window.document);
  window.document.querySelector = selector => /:focus-within|:hover/.test(selector) ? null : querySelector(selector);
  window.HTMLElement.prototype.getBoundingClientRect = () => ({top:0,left:0,right:400,bottom:300,width:400,height:300});
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.HTMLElement.prototype.scrollBy = () => {};
  window.HTMLElement.prototype.pause = () => {};
  window.HTMLElement.prototype.load = () => {};
  storage.set('oneinhim.appReleaseVersion', '230');
  // Version checks are isolated from the navigation and learning regressions.
  const context = vm.createContext(window);
  vm.runInContext(readFileSync(path.join(root,'oneinhim_home_layout.js'),'utf8'), context);
  vm.runInContext(readFileSync(path.join(root,'oneinhim_journey_layout.js'),'utf8'), context);
  vm.runInContext(readFileSync(path.join(root,'oneinhim_learner_accounts.js'),'utf8'), context);
  vm.runInContext(source, context);
  vm.runInContext('ensureFreshAppVersion = async () => {};', context);
  await vm.runInContext('boot()', context);
  return { window, context, historyCalls, run: code => vm.runInContext(code, context) };
}
if (require.main === module) (async () => {
  const a = await app();
  assert.equal(a.window.document.querySelectorAll('#accountView .team-account-details #adminEmail').length, 1, 'Team login remains inside its disclosure');
  assert.equal(a.run('t("account.learnerTitle")'), 'Your journey');
  a.run('handleGatewayNav("journey")');
  assert.equal(a.window.document.querySelector('.view.active').id,'stageDetailView');
  assert.match(a.window.document.getElementById('stageStatusRow').textContent,/0% complete/, 'New learners must start at zero');
  a.window.document.querySelector('[data-section-node-start="exploreJesus:0"]').click();
  assert.equal(a.run('state.activeView'), 'moduleDetailView', 'The visible Start unit button must work at zero progress');
  a.run('handleGatewayNav("journey"); state.selectedPathNode="content:exploreJesus:1"; renderStageDetail(); bindDynamicActions()');
  assert.equal(a.window.document.querySelector('[data-section-node-start="exploreJesus:1"]'), null, 'A later locked unit does not offer Start');
  a.window.document.querySelector('[data-i18n="journey.viewProgress"]').click();
  assert.equal(a.run('state.activeView'), 'accountView', 'View my progress opens Account rather than sharing a lesson');
  a.run('state.activeStageId="startFollowing"; state.activeModuleIndex=0; markCurrentLearningStepComplete();');
  assert.equal(a.run('state.completedPieces.size'),1);
  const b = await app();
  assert.equal(b.run('state.completedPieces.size'),1,'Completed lessons survive reload');
  b.run('state.activeStageId="startFollowing"; renderStageDetail();');
  assert.ok(b.run('stageSectionGroups(activeStage())[0].progress') > 0,'Saved completion drives visible progress');
  b.run('handleGatewayNav("watch"); setDiscoveryResource("mux_one_basics_1_1_full_video")');
  assert.equal(b.window.document.querySelector('.view.active').id,'discoveryDetailView');
  assert.ok(b.window.document.querySelector('.discover-watch-buttons [data-share]'), 'Share is not a home-navigation button');
  b.window.document.getElementById('discoverJoinJourney').click();
  assert.equal(b.window.document.querySelector('.view.active').id,'moduleDetailView','Start lesson must open the lesson flow');
  b.run('setDiscoveryResource("mux_one_basics_1_1_full_video")');
  const cancel = b.run('state.seeds');
  b.window.navigator.share = async () => { throw Object.assign(new Error('Cancelled'),{name:'AbortError'}); };
  await b.run('shareResource(activeResource())');
  assert.equal(b.run('state.seeds'),cancel,'Cancelled sharing must not award Seeds');
  const c = await app('#mux_one_basics_1_1_full_video');
  assert.equal(c.window.document.querySelector('.view.active').id,'discoveryDetailView','Shared links must open the resource');
  const before = c.historyCalls.length;
  c.run('restoreAppRoute()');
  assert.equal(c.historyCalls.length,before,'History restoration must not add history entries');
  c.run('handleGatewayNav("account")');
  assert.match(c.window.document.getElementById('learnerProgressSummary').textContent,/1 lesson completed/);
  c.run('applyLanguage("nl"); renderLearnerAccount()');
  assert.equal(c.window.document.querySelector('[data-i18n="account.learnerTitle"]').textContent,'Jouw reis');
  assert.match(c.window.document.querySelector('[data-i18n="feed.preview"]').textContent,/Voorbeeldfeed/);
  c.run('applyLanguage("en"); setDiscoveryResource("mux_oneevent_ps_duane_friday")');
  assert.equal(c.window.document.getElementById('discoverJoinJourney').textContent, 'Watch message');
  assert.ok(c.window.document.getElementById('discoverExploreJourney'));
  c.window.document.getElementById('discoverJoinJourney').click();
  assert.equal(c.run('state.activeView'), 'discoveryDetailView', 'An unlinked sermon never opens an unrelated lesson');
  c.window.document.getElementById('discoverExploreJourney').click();
  assert.equal(c.run('state.activeView'), 'stageDetailView');
  c.run('handleGatewayNav("account")');
  assert.equal(c.window.document.querySelector('#learnerAuthForm'), null, 'Closed registration does not ask learners to fill an unusable form');
  c.window.document.querySelector('[data-auth-mode="signin"]').click();
  assert.ok(c.window.document.querySelector('#learnerAuthForm input[name="email"]'), 'Existing learners can still sign in');
  c.run('window.ONEINHIM_LEARNER_CONFIG={signupEnabled:true}');
  c.window.document.querySelector('[data-auth-mode="signup"]').click();
  assert.equal(c.window.document.querySelector('#learnerAuthForm input[name="onboarding_emails"]').checked, undefined, 'Email consent is not preselected');
  c.run('applyLanguage("nl"); renderLearnerAccount()');
  assert.match(c.window.document.getElementById('learnerAccountControls').textContent, /Gratis account maken/);
  // Stub only the backend transport; exercise real account switching and progress logic.
  await c.run(`(() => {
    const saved = { A: {completed: ['a'], completedPieces: ['a'], completedPracticals: [], completedReviews: []}, B: {completed: ['b'], completedPieces: ['b'], completedPracticals: [], completedReviews: []} };
    getSupabaseAuthClient = () => ({ from: table => ({ select() { return this; }, eq(_, id) { this.id = id; return this; }, single() { return Promise.resolve({data:{first_name:this.id,language:'en',onboarding_emails:false}}); }, maybeSingle() { return Promise.resolve({data:{progress:saved[this.id]}}); } }) });
    return OIHLearnerAccounts.changeUser({id:'A',email:'a@example.test'});
  })()`);
  assert.equal(c.run('state.completed.has("a")'), true);
  assert.equal(c.run('state.completed.has("b")'), false);
  c.run('saveModuleNote(activeStage(), 0, "Private A note")');
  await c.run('OIHLearnerAccounts.changeUser({id:"B",email:"b@example.test"})');
  assert.equal(c.run('state.completed.has("a")'), false, 'Account A progress never merges into account B');
  assert.equal(c.run('state.completed.has("b")'), true);
  assert.equal(c.run('getModuleNote(activeStage(),0)'), '', 'Another account cannot see local personal notes');
  await c.run('OIHLearnerAccounts.changeUser(null)');
  assert.equal(c.run('state.completed.has("a")'), false, 'Signout restores guest storage');
  storage.clear();
  const d = await app();
  d.run('handleGatewayNav("account")');
  assert.equal(d.window.document.querySelector('[data-i18n="account.continue"]').textContent,'Start your journey');
  assert.match(d.run('homeResolvedItemDisplay(readHomeContent().shelves[0].items[2]).artwork'),/outoftheshadows/,'Published documentary artwork must be preserved');
  d.run('applyLanguage("en"); handleGatewayNav("feed"); els.feedComposer.value="Test reflection"; handleFeedSubmit()');
  assert.match(d.window.document.getElementById('feedStatus').textContent,/not a public post/);
  assert.equal(d.window.document.querySelector('[data-feed-post^="local_"] .feed-liked').hasAttribute('hidden'), true,'Local notes must not invent likes from other people');
  console.log('PASS: journey navigation, honest progress, completion persistence, sharing cancellation, deep links, Back restoration, bilingual learner account, artwork and local-feed disclosure.');
})().catch(error => { console.error(error); process.exitCode=1; });

module.exports = { app, storage };
