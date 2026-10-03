// SPDX-License-Identifier: GPL-3.0-or-later
// Actual ThreeRenderer fixtures only; no running game/session or input injection.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { chromium } = require('playwright');
const { build } = require(require.resolve('esbuild', { paths: [path.dirname(require.resolve('vite'))] }));
const root = path.resolve(__dirname, '..');
const out = path.resolve(root, process.env.JONES_HD_INTERFACE_OUTPUT || 'build/hd-interface-evidence');
const fixture = path.join(root, 'build/native/__ui-review');
const base = process.env.JONES_NATIVE_URL || 'http://127.0.0.1:8798/';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const report = { scope: 'Isolated actual ThreeRenderer and GraphicsState. Test bundle compiled from current source and served beside production assets. Not a gameplay, input or multiplayer journey.',
  url: base, checks: [], screenshots: [], errors: [], consoleErrors: [], resourceErrors: [], loadedScripts: [], ok: false };
let browser, page, ownFixture = false;
(async () => {
  await fs.mkdir(out, { recursive: true });
  try {
    // Never remove another test's fixture, including after a setup failure.
    await fs.mkdir(fixture); ownFixture = true;
    await build({ entryPoints: [path.join(__dirname, 'fixtures/hd_interface.ts')], bundle: true, format: 'esm', outfile: path.join(fixture, 'bundle.js') });
    report.fixtureSha256 = sha(await fs.readFile(path.join(fixture, 'bundle.js')));
    report.originalAssetsSha256 = sha(await fs.readFile(path.join(root, 'build/native/assets/manifest.json')));
    report.hdManifestSha256 = sha(await fs.readFile(path.join(root, 'build/native/hd/manifest.json')));
    await fs.writeFile(path.join(fixture, 'index.html'), '<!doctype html><meta charset="utf-8"><base href="../"><link rel="icon" href="data:,"><style>body{margin:0;background:#000}canvas{display:block;width:1600px;height:1000px}</style><canvas></canvas><script type="module" src="__ui-review/bundle.js"></script>');
    browser = await chromium.launch({ headless: true, executablePath: process.env.JONES_BROWSER_EXECUTABLE || chromium.executablePath(), args: ['--no-sandbox'] });
    report.browser = browser.version();
    page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
    page.on('pageerror', error => report.errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') report.consoleErrors.push(message.text()); });
    const reads = [];
    page.on('response', response => {
      if (response.status() >= 400) report.resourceErrors.push({ url: response.url(), status: response.status() });
      if (response.url().endsWith('/__ui-review/bundle.js')) reads.push(response.body().then(bytes => report.loadedScripts.push({ url: response.url(), sha256: sha(bytes) })));
    });
    await page.goto(new URL('__ui-review/index.html', base).href);
    await page.waitForFunction(() => window.hdInterfaceReady, {}, { timeout: 70000 });
    const keys = await page.evaluate(() => window.hdInterface.keys);
    assert.equal(keys.length, 59, 'Explicit UI coverage'); assert.equal(new Set(keys).size, 59);
    const captures = new Set(['10:1:0','10:2:0','10:3:0','250:1:0','0:3:3','500:0:0','501:0:0','505:4:0','803:0:0','804:0:0','807:0:0','808:0:0','809:0:0','810:0:0','811:0:0','506:0:0','506:0:1','696:0:0','696:1:4','701:0:0','701:0:1','706:0:0','706:0:1','712:0:0','712:1:1','705:0:0']);
    async function check(key, variant = 'normal') {
      const result = await page.evaluate(({key,variant}) => window.hdInterface.inspect(key,variant), {key,variant});
      report.checks.push(result);
      assert(result.unchanged, `${key}/${variant}: authoritative frame changed`);
      assert.equal(result.originalSourceDifferences, 0, `${key}/${variant}: Original differs from indexed raster`);
      assert.equal(result.backDifferences, 0, `${key}/${variant}: switching back changed Original`);
      assert.equal(result.protectedDifferences, 0, `${key}/${variant}: HD painted protected pixels`);
      assert.equal(result.originalSubpixelCells, 0, `${key}/${variant}: Original pixels were interpolated`);
      assert(result.generatedUiLayerCount > 0, `${key}/${variant}: missing authored UI canvas layer`);
      if (variant !== 'pressed') {
        assert(result.subpixelCells > 0, `${key}/${variant}: no real subpixel letter detail`);
        assert(result.changedTextCells > 0, `${key}/${variant}: lettering remained unchanged`);
      }
      if (result.replaceInk) {
        assert(result.inkOnlyLayer?.paintedPixels > 0, `${key}: factory font layer is empty`);
        assert(result.inkOnlyLayer.transparentTitlePixels > result.inkOnlyLayer.paintedPixels, `${key}: factory layer must not paint an opaque title face`);
        assert.equal(result.inkOnlyLayer.paintedOutsideTitle,0,`${key}: factory overlay painted outside its title`);
      }
      if (variant !== 'normal') assert(result.protectedPixels > 0, `${key}/${variant}: protection fixture exercised no pixels`);
      if (variant === 'pressed' || variant === 'occluded') assert(result.changedRaster > 0, `${key}/${variant}: original operation changed no pixels`);
      if (captures.has(key) || variant !== 'normal') {
        const name = `${key.replaceAll(':','-')}-${variant}.png`;
        await page.screenshot({path:path.join(out,name),clip:result.crop}); report.screenshots.push(name);
      }
      console.log('PASS', key, variant, 'subpixel letters', result.subpixelCells);
    }
    for (const key of keys) await check(key);
    await check('10:1:0', 'clipped');
    await check('250:1:0', 'pressed');
    await check('10:1:0', 'occluded');
    await Promise.all(reads);
    assert(report.loadedScripts.some(s => s.sha256 === report.fixtureSha256), 'Browser must load exact fixture bundle');
    assert.deepEqual(report.errors, []); assert.deepEqual(report.consoleErrors, []); assert.deepEqual(report.resourceErrors, []);
    report.sourceClearUiCells = report.checks.filter(c => c.variant === 'normal' && c.sourceClearPixels > 0).map(c => c.key);
    report.ok = true;
  } catch (error) {
    report.failure = String(error.stack || error);
    if (page && !page.isClosed()) await page.screenshot({path:path.join(out,'failure.png')}).catch(() => {});
    throw error;
  } finally {
    await browser?.close();
    await fs.writeFile(path.join(out,'report.json'), JSON.stringify(report,null,2)+'\n');
    if (ownFixture) await fs.rm(fixture,{recursive:true,force:true});
  }
})().catch(error => { console.error(error); process.exitCode=1; });
