// SPDX-License-Identifier: GPL-3.0-or-later
// Real WebGL compositor fixtures; normal-input gameplay remains a separate test.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');
const { build } = require(require.resolve('esbuild', { paths: [path.dirname(require.resolve('vite'))] }));
const root = path.resolve(__dirname, '..'), out = path.join(root, 'build/hd-completion-evidence');
const fixture = path.join(root, 'build/native/__hd-review');
const base = process.env.JONES_NATIVE_URL || 'http://127.0.0.1:8767/';
(async () => {
  await fs.mkdir(out,{recursive:true});
  let browser, ownFixture = false;
  const report={scope:'Isolated actual WebGL compositor fixtures, not gameplay reachability',checks:[],errors:[],ok:false};
  try {
    await fs.mkdir(fixture); ownFixture = true;
    await build({entryPoints:[path.join(__dirname,'fixtures/hd_completion.ts')],bundle:true,format:'esm',outfile:path.join(fixture,'bundle.js')});
    await fs.writeFile(path.join(fixture,'index.html'),'<base href="../"><style>body{margin:0;background:#f8f8e0}canvas{width:1600px;height:1000px}</style><canvas></canvas><script type="module" src="__hd-review/bundle.js"></script>');
    browser = await chromium.launch({headless:true,executablePath:process.env.JONES_BROWSER_EXECUTABLE||chromium.executablePath(),args:['--no-sandbox']});
    report.browser = browser.version();
    const page=await browser.newPage({viewport:{width:1600,height:1000}});
    page.on('pageerror',e=>report.errors.push(e.message));
    await page.goto(new URL('__hd-review/index.html',base).href);
    await page.waitForFunction(()=>window.hdCompletionReady,{},{timeout:60000});
    const keys=[...Array.from({length:13},(_,i)=>`${310+i}:0:0`),'340:1:0','705:0:0','603:1:0',...Array.from({length:4},(_,i)=>`293:1:${i}`),...Array.from({length:6},(_,i)=>`pic:${i}`)];
    for(const key of keys){
      const r=await page.evaluate(k=>window.hdCompletion(k),key);
      assert(r.unchanged,`${key}: authoritative frame changed`); assert.equal(r.differences,0,`${key}: original ink/title changed`);
      assert(r.detailPixels>0,`${key}: no higher-resolution detail`); assert(r.status.layers>0);
      const clip={x:Math.max(0,r.crop.x),y:Math.max(0,r.crop.y),width:r.crop.width,height:r.crop.height};
      await page.screenshot({path:path.join(out,key.replaceAll(':','-')+'.png'),clip});report.checks.push(r); console.log('PASS',key);
    }
    assert.deepEqual(report.errors,[]);report.ok=true;
  } catch(error) { report.failure = String(error.stack || error); throw error; }
  finally {await browser?.close();await fs.writeFile(path.join(out,'report.json'),JSON.stringify(report,null,2)+'\n');if(ownFixture) await fs.rm(fixture,{recursive:true,force:true});}
})().catch(e=>{console.error(e);process.exitCode=1;});
