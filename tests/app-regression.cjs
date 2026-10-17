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
    sessionStorage: { getItem: () => null, setItem() {} },
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
  storage.set('oneinhim.appReleaseVersion', '228');
  // Version checks are isolated from the navigation and learning regressions.
  const context = vm.createContext(window);
  vm.runInContext(readFileSync(path.join(root,'oneinhim_home_layout.js'),'utf8'), context);
  vm.runInContext(readFileSync(path.join(root,'oneinhim_journey_layout.js'),'utf8'), context);
  vm.runInContext(source, context);
  vm.runInContext('ensureFreshAppVersion = async () => {};', context);
  await vm.runInContext('boot()', context);
  return { window, context, historyCalls, run: code => vm.runInContext(code, context) };
}
(async () => {
  const a = await app();
  assert.equal(a.window.document.querySelectorAll('#accountView .team-account-details #adminEmail').length, 1, 'Team login remains inside its disclosure');
  assert.equal(a.run('t("account.learnerTitle")'), 'Your journey');
  a.run('handleGatewayNav("journey")');
  assert.equal(a.window.document.querySelector('.view.active').id,'stageDetailView');
  assert.match(a.window.document.getElementById('stageStatusRow').textContent,/0% complete/, 'New learners must start at zero');
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
  const d = await app();
  assert.match(d.run('homeResolvedItemDisplay(readHomeContent().shelves[0].items[2]).artwork'),/outoftheshadows/,'Published documentary artwork must be preserved');
  d.run('applyLanguage("en"); handleGatewayNav("feed"); els.feedComposer.value="Test reflection"; handleFeedSubmit()');
  assert.match(d.window.document.getElementById('feedStatus').textContent,/not a public post/);
  assert.equal(d.window.document.querySelector('[data-feed-post^="local_"] .feed-liked').hasAttribute('hidden'), true,'Local notes must not invent likes from other people');
  console.log('PASS: journey navigation, honest progress, completion persistence, sharing cancellation, deep links, Back restoration, bilingual learner account, artwork and local-feed disclosure.');
})().catch(error => { console.error(error); process.exitCode=1; });
