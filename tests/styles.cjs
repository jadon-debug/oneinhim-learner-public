const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const postcss = require('postcss');
const root = path.join(__dirname, '..');
for(const file of fs.readdirSync(root).filter(file=>file.endsWith('.css'))) {
  const css = postcss.parse(fs.readFileSync(path.join(root,file),'utf8'),{from:file});
  if(!['oneinhim_app_chrome.css','oneinhim_journey_ux.css'].includes(file))continue;
  const rules = new Set();
  css.walkRules(rule=>{
    const context=[];
    for(let parent=rule.parent;parent;parent=parent.parent)if(parent.type==='atrule')context.unshift(parent.name+' '+parent.params);
    const key=context.join('|')+'::'+rule.selector.replace(/\s+/g,' ').trim();
    assert.ok(!rules.has(key), `${file}: repeated selector at the same breakpoint: ${key}`);
    rules.add(key);
    const props=new Set();
    rule.walkDecls(decl=>{
      assert.ok(!props.has(decl.prop),`${file}: repeated property ${decl.prop} in ${key}`);
      props.add(decl.prop);
    });
  });
}
for(const file of ['oneinhim_media_home.css','oneinhim_journey_ux.css']) {
  postcss.parse(fs.readFileSync(path.join(root,file),'utf8')).walkRules(rule=>{
    assert.ok(!/\.app-top-chrome|\.gateway-header/.test(rule.selector),`${file}: header belongs in oneinhim_app_chrome.css`);
  });
}
const html=fs.readFileSync(path.join(root,'oneinhim_learner_app.html'),'utf8');
const files=['oneinhim_learner_styles.css','oneinhim_media_home.css','oneinhim_app_chrome.css','oneinhim_journey_ux.css'];
for(let i=1;i<files.length;i++)assert.ok(html.indexOf(files[i-1])<html.indexOf(files[i]),'Stylesheet ownership requires the documented load order');
console.log('PASS: stylesheet syntax, component ownership, unique declarations and responsive rules.');
