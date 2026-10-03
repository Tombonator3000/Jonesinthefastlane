// SPDX-License-Identifier: GPL-3.0-or-later
// Real original inputs; no game-state injection. HD is a local presentation choice.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.resolve(ROOT, process.env.JONES_HD_OUTPUT || 'build/native-hd-evidence');
const BASE_URL = process.env.JONES_NATIVE_URL || 'http://127.0.0.1:8767/';
const report = { started: new Date().toISOString(), checks: [], screenshots: [], loadedScripts: [], errors: [], ok: false };
const scriptReads = [];
let browser, page;
async function check(name, fn) { const t = Date.now(); const detail = await fn(); report.checks.push({ name, ok: true, milliseconds: Date.now() - t, detail }); console.log('PASS', name); }
const state = () => page.evaluate(() => window.jonesNative.getState());
async function wait(predicate, timeout = 25000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { const s = await state(); assert.equal(s.error, null); if (predicate(s)) return s; await page.waitForTimeout(100); }
  throw new Error('State timeout: ' + JSON.stringify(await state()));
}
async function click(x, y) { const b = await page.locator('#game').boundingBox(); await page.mouse.click(b.x + x * b.width / 320, b.y + y * b.height / 200, { delay: 80 }); await page.waitForTimeout(200); }
async function parkCursor(target = page) {
  // The persistent toolbar/letterbox can occupy viewport(0,0). Move inside
  // the canvas so its pointer handler actually clears the measured controls.
  const b = await target.locator('#game').boundingBox();
  await target.mouse.move(b.x + .1, b.y + .1);
}
async function capture(name) { await parkCursor(); const file = path.join(OUTPUT, name + '.png'); await page.screenshot({ path: file }); report.screenshots.push(path.relative(ROOT, file)); }
async function settings(pack, lighting = false, resolution = '1080') {
  await page.locator('#settings').click(); await page.locator('#graphics-pack').selectOption(pack);
  await page.locator('#mode').selectOption('original'); await page.locator('#lighting').setChecked(lighting); await page.locator('#resolution').selectOption(resolution);
  await page.locator('#display button').click();
}
// Observe the real button event before/after its handler in the same browser task.
// Ticks continue normally; the test never pauses or mutates the game session.
async function toggle(pack) {
  await page.locator('#graphics-toggle').evaluate(button => {
    window.__graphicsToggleObservation = null;
    button.addEventListener('click', () => {
      const before = { frame: JSON.stringify(window.jonesNative.getFrame()), state: JSON.stringify(window.jonesNative.getState()) };
      document.addEventListener('click', () => {
        window.__graphicsToggleObservation = {
          frameUnchanged: before.frame === JSON.stringify(window.jonesNative.getFrame()),
          stateUnchanged: before.state === JSON.stringify(window.jonesNative.getState()),
        };
      }, { once: true });
    }, { capture: true, once: true });
  });
  await page.getByRole('button', { name: 'HD artwork', exact: true }).click();
  assert.deepEqual(await page.evaluate(() => window.__graphicsToggleObservation), { frameUnchanged: true, stateUnchanged: true });
  assert.equal(await page.evaluate(() => document.activeElement?.id), 'game', 'Original keyboard controls retain canvas focus after a graphics toggle');
  assert.equal(await page.locator('#graphics-toggle').getAttribute('aria-pressed'), String(pack === 'hd'));
  assert.equal(await page.locator('#graphics-toggle').textContent(), `HD: ${pack === 'hd' ? 'On' : 'Off'}`);
  assert.equal(await page.locator('#graphics-pack').inputValue(), pack);
  assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('jones-display-v1')).pack), pack);
  if (pack === 'hd') await page.waitForFunction(() => window.jonesNative.getDisplay().hd.ready && window.jonesNative.getDisplay().hd.layers > 0);
}
async function originalUi(label, regions, exact = true, target = page) {
  await parkCursor(target);
  await target.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  const sample = await target.evaluate(async regions => {
    const frame = window.jonesNative.getFrame(), pixels = Uint8Array.from(atob(frame.pixels), c => c.charCodeAt(0));
    const canvas = document.querySelector('#game'), copy = document.createElement('canvas');
    copy.width = canvas.width; copy.height = canvas.height;
    const ctx = copy.getContext('2d'); ctx.drawImage(canvas, 0, 0);
    const rgba = ctx.getImageData(0, 0, copy.width, copy.height).data;
    const width = Math.min(copy.width, copy.height * 1.6), scale = width / 320;
    const left = (copy.width - width) / 2, top = (copy.height - width / 1.6) / 2;
    const output = [], examples = []; let compared = 0, different = 0;
    for (const [x0, y0, x1, y1] of regions) {
      for (let y = Math.ceil(top + y0 * scale); y < Math.floor(top + y1 * scale); y++) {
        for (let x = Math.ceil(left + x0 * scale); x < Math.floor(left + x1 * scale); x++) {
          const gx = Math.floor((x + .5 - left) / scale), gy = Math.floor((y + .5 - top) / scale);
          const expected = frame.palette[pixels[gy * 320 + gx]], i = (y * copy.width + x) * 4;
          const actual = [...rgba.slice(i, i + 3)]; output.push(...actual); compared++;
          if (actual.some((v, c) => v !== expected[c])) {
            different++; if (examples.length < 4) examples.push({ x: gx, y: gy, expected, actual });
          }
        }
      }
    }
    const digest = await crypto.subtle.digest('SHA-256', new Uint8Array(output));
    return { compared, different, examples, sha256: [...new Uint8Array(digest)].map(v => v.toString(16).padStart(2, '0')).join('') };
  }, regions);
  (report.uiSamples ??= []).push({ label, ...sample });
  assert(sample.compared > 1000, `${label}: compare the actual rendered UI, not a single glyph point`);
  if (exact) assert.equal(sample.different, 0, `${label}: original UI pixels differ: ${JSON.stringify(sample.examples)}`);
  else assert(sample.different > 100, `${label}: HD interface must visibly redraw the sampled text and controls`);
  return sample;
}
async function uiRoundtrip(label, regions) {
  const original = await originalUi(`${label}: Original`, regions);
  await toggle('hd');
  const hd = await originalUi(`${label}: HD`, regions, false);
  assert.notEqual(hd.sha256, original.sha256, `${label}: HD glyphs must add detail while retaining original input geometry`);
  await toggle('original');
  const restored = await originalUi(`${label}: Original again`, regions);
  assert.equal(restored.sha256, original.sha256, `${label}: toggling back must restore the identical original UI`);
  await toggle('hd');
  return { pixels: original.compared, originalSha256: original.sha256, hdSha256: hd.sha256, hdChangedPixels: hd.different, frameAndStateUnchanged: true };
}
async function start() {
  await page.goto(BASE_URL); await page.locator('#play').click();
  for (let i = 0; i < 8; i++) { if ((await state()).dialog === 'select1') break; await click(160, 100); await page.waitForTimeout(600); }
  await wait(s => s.dialog === 'select1');
}
(async () => {
  await fs.mkdir(OUTPUT, { recursive: true });
  browser = await chromium.launch({ headless: true, executablePath: process.env.JONES_BROWSER_EXECUTABLE || chromium.executablePath(), args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  page = await context.newPage();
  page.on('response', response => {
    if (response.ok() && response.request().resourceType() === 'script') scriptReads.push(response.body().then(bytes => report.loadedScripts.push({ path: new URL(response.url()).pathname, sha256: createHash('sha256').update(bytes).digest('hex') })));
  });
  page.on('pageerror', e => report.errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') report.errors.push(m.text()); });
  await start();
  await check('Original remains the default; HD changes no original game pixels or rules', async () => {
    assert.equal(await page.locator('#graphics-pack').inputValue(), 'original');
    assert.equal(await page.locator('#graphics-toggle').getAttribute('aria-pressed'), 'false');
    await settings('original'); await capture('01-original-menu');
    // Original tree/roof pixels cross the left edge at x68..69,y63..68. They
    // are artwork, not the cream panel or black UI frame being compared here.
    const ui = await uiRoundtrip('Main menu including text, button edges and panel', [[68, 44, 251, 63], [70, 63, 251, 69], [68, 69, 251, 137], [95, 121, 228, 141]]);
    const display = await page.evaluate(() => window.jonesNative.getDisplay());
    assert.equal(display.hd.ui, 'hd'); assert.equal(display.hd.fonts, true);
    await capture('02-hd-menu'); return { ...display, ui };
  });
  await check('HD artwork contains detail within original pixel cells and optional lighting changes output', async () => {
    // Read actual rendered canvas, excluding browser scaling and the original game raster.
    const detail = await page.evaluate(() => {
      const canvas = document.querySelector('#game'), copy = document.createElement('canvas');
      copy.width = canvas.width; copy.height = canvas.height; const ctx = copy.getContext('2d'); ctx.drawImage(canvas, 0, 0);
      const image = ctx.getImageData(0, 0, copy.width, copy.height).data;
      const areaWidth = Math.min(copy.width, copy.height * 1.6), scale = areaWidth / 320, left = (copy.width - areaWidth) / 2;
      let detailed = 0;
      for (let y = 5; y < 35; y++) for (let x = 5; x < 310; x++) {
        const a = (Math.floor((y + .2) * scale) * copy.width + Math.floor(left + (x + .2) * scale)) * 4;
        const b = (Math.floor((y + .7) * scale) * copy.width + Math.floor(left + (x + .7) * scale)) * 4;
        if (Math.abs(image[a] - image[b]) + Math.abs(image[a + 1] - image[b + 1]) + Math.abs(image[a + 2] - image[b + 2]) > 15) detailed++;
      }
      return { detailedOriginalCells: detailed, width: copy.width, height: copy.height, canvas: canvas.toDataURL() };
    });
    assert(detail.detailedOriginalCells > 300, 'HD must add visible subpixel artwork detail, not nearest-neighbour enlargement');
    await settings('hd', true); const lit = await page.locator('#game').evaluate(c => c.toDataURL());
    assert.notEqual(lit, detail.canvas); await capture('03-hd-lights'); delete detail.canvas; return detail;
  });
  await check('Original character selection and goals remain operable with HD artwork', async () => {
    await click(165, 75); await wait(s => s.dialog === 'select1b'); await click(104, 115); await wait(s => s.dialog === 'select2');
    await capture('04-hd-characters');
    assert((await page.evaluate(() => window.jonesNative.getFrame().hd.ops)).some(op => op.kind === 'cel' && op.view === 500));
    await click(94, 161); await wait(s => s.dialog === 'select3'); await capture('05-hd-goals');
    await click(231, 161); await wait(s => s.dialog === 'select4'); await click(196, 143);
    await wait(s => s.currentPlayer === 'player1' && s.dialog === null && s.locationInputEnabled && !s.turnTransitionActive);
    await capture('06-hd-week-one');
  });
  await check('Original bank actions and Save/Restore retain the complete HD scene', async () => {
    await click(37, 139); await wait(s => s.dialog === 'bank' && s.trace.at(-1) === '204:bank.doit');
    await settings('original', false);
    // The new HD interface redraws labels and live cash in their recorded original
    // glyph cells. Toggling back still restores exact source pixels.
    // DONE is exactly32×9; neighbouring town-roof pixels are HD artwork.
    const ui = await uiRoundtrip('Bank title, action text, DONE, dollar and live cash digits', [[136, 45, 250, 152], [212, 152, 244, 161], [263, 165, 268, 174], [273, 165, 309, 174]]);
    await capture('07-hd-bank');
    await click(199, 82); await wait(s => s.cash === 100 && s.trace.at(-1) === '204:bank.doit');
    await page.keyboard.press('F5'); await page.waitForTimeout(400); await click(199, 119);
    await page.waitForFunction(() => !!localStorage.getItem('jones-native-save-v1'));
    await wait(s => s.dialog === 'bank' && s.trace.at(-1) === '204:bank.doit');
    await click(199, 97); await wait(s => s.cash === 200 && s.trace.at(-1) === '204:bank.doit');
    await page.keyboard.press('F7'); await page.waitForTimeout(400); await click(182, 103);
    await wait(s => s.cash === 100 && s.dialog === 'bank' && s.trace.at(-1) === '204:bank.doit');
    const hd = await page.evaluate(() => window.jonesNative.getFrame().hd);
    assert(hd.owners.length > 0 && hd.ops.some(op => op.kind === 'pic' && op.pic === 11));
    await capture('08-hd-restored-bank'); return { operations: hd.ops.length, ownershipBytes: hd.owners.length, ui };
  });
  await check('2160p and portrait aspect preserve original input coordinates', async () => {
    await settings('hd', true, '2160'); await capture('09-hd-2160p');
    assert.equal(await page.locator('#game').evaluate(c => c.height), 2160);
    await page.setViewportSize({ width: 390, height: 844 }); await page.waitForTimeout(300);
    const b = await page.locator('#game').boundingBox(); assert(Math.abs(b.width / b.height - 1.6) < .01);
    await settings('hd', false, '720'); await click(199, 97); await wait(s => s.cash === 200 && s.trace.at(-1) === '204:bank.doit');
    await capture('10-hd-portrait'); await page.setViewportSize({ width: 1280, height: 800 });
  });
  await check('Display choice persists independently of the original save', async () => {
    await page.reload(); await page.locator('#play').click();
    await page.waitForFunction(() => window.jonesNative.getDisplay().hd.ready);
    assert.equal(await page.locator('#graphics-pack').inputValue(), 'hd');
    assert.equal(await page.locator('#graphics-toggle').getAttribute('aria-pressed'), 'true');
    assert.equal((await page.evaluate(() => JSON.parse(localStorage.getItem('jones-display-v1')))).resolutionHeight, 720);
    for (let i = 0; i < 8; i++) { if ((await state()).dialog === 'select1') break; await click(160, 100); await page.waitForTimeout(600); }
    await wait(s => s.dialog === 'select1'); await click(165, 105); await wait(s => s.dialog === 'bank' && s.cash === 100);
    await capture('11-hd-restored-after-reload');
  });
  await check('Original speech punctuation keeps its small ink size in HD', async () => {
    await wait(s => s.dialog === 'bank' && s.trace.at(-1) === '204:bank.doit');
    await click(229, 157); await wait(s => s.dialog === null); await click(229, 182);
    await wait(s => s.dialog === 'university' && s.trace.at(-1) === '207:university.doit');
    await click(180, 153);
    await page.waitForFunction(() => window.jonesNative.getFrame()?.hd?.ops.some(op => op.kind === 'text' && op.font === 1 && op.glyphs.some(g => g.char === '.' && g.background !== null)));
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const sample = await page.evaluate(() => {
      const f = window.jonesNative.getFrame();
      const op = f.hd.ops.find(op => op.kind === 'text' && op.font === 1 && op.glyphs.some(g => g.char === '.' && g.background !== null));
      const dot = op.glyphs.find(g => g.char === '.' && g.background !== null);
      const canvas = document.querySelector('#game'), copy = document.createElement('canvas');
      copy.width = canvas.width; copy.height = canvas.height; const ctx = copy.getContext('2d'); ctx.drawImage(canvas, 0, 0);
      const width = Math.min(copy.width, copy.height * 1.6), scale = width / 320, left = (copy.width - width) / 2, top = (copy.height - width / 1.6) / 2;
      const rgb = [...ctx.getImageData(Math.floor(left + (dot.x + 1.5) * scale), Math.floor(top + (dot.y + 2.5) * scale), 1, 1).data].slice(0, 3);
      return { rgb, background: f.palette[dot.background], ink: f.palette[op.color], font: op.font, character: dot.char };
    });
    report.speechPunctuationSample = sample;
    assert(sample.rgb.every((v, i) => Math.abs(v - sample.background[i]) <= 3), 'Upper period cell stays blank, not stretched to a full-height oval');
    await capture('11b-hd-speech-punctuation'); return sample;
  });
  await check('WebGL loss falls back to the original visible game', async () => {
    const supported = await page.locator('#game').evaluate(c => { const gl = c.getContext('webgl2'); const ext = gl?.getExtension('WEBGL_lose_context'); ext?.loseContext(); return !!ext; });
    assert(supported, 'Context-loss fixture must actually lose the WebGL context');
    await page.waitForTimeout(300);
    assert.equal(await page.evaluate(() => [...document.querySelectorAll('canvas')].some(c => c !== document.querySelector('#game') && getComputedStyle(c).display !== 'none' && c.width > 0)), true);
    await capture('12-original-fallback'); assert.equal((await state()).error, null);
  });
  await check('Unavailable HD fonts preserve original controls while photographic artwork still loads', async () => {
    const fallbackContext = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const fallback = await fallbackContext.newPage(), errors = [];
    fallback.on('pageerror', e => errors.push(e.message));
    await fallback.route('**/fonts/*.ttf', route => route.fulfill({ status: 503, body: 'Deliberate optional font outage fixture' }));
    try {
      await fallback.goto(BASE_URL); await fallback.locator('#play').click();
      await fallback.locator('#graphics-toggle').click();
      await fallback.waitForFunction(() => window.jonesNative.getDisplay().hd.ready);
      for (let i = 0; i < 8; i++) {
        if (await fallback.evaluate(() => window.jonesNative.getState()?.dialog === 'select1')) break;
        const b = await fallback.locator('#game').boundingBox();
        await fallback.mouse.click(b.x + b.width / 2, b.y + b.height / 2); await fallback.waitForTimeout(650);
      }
      await fallback.waitForFunction(() => window.jonesNative.getState()?.dialog === 'select1');
      const status = await fallback.evaluate(() => window.jonesNative.getDisplay().hd);
      assert.equal(status.fonts, false); assert.equal(status.ui, 'original'); assert.equal(status.failed, false); assert(status.layers > 0);
      const pixels = await originalUi('Font outage: original Play Game control', [[96, 62, 227, 80]], true, fallback);
      assert.deepEqual(errors, []); return { status, pixels };
    } finally { await fallbackContext.close(); }
  });
  await check('An unavailable optional HD pack leaves the original game playable', async () => {
    const fallbackContext = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const fallback = await fallbackContext.newPage(), errors = [];
    fallback.on('pageerror', e => errors.push(e.message));
    await fallback.route('**/hd/manifest.json', route => route.fulfill({ status: 503, body: 'Deliberate optional-art outage fixture' }));
    await fallback.goto(BASE_URL); await fallback.locator('#play').click();
    await fallback.locator('#settings').click(); await fallback.locator('#graphics-pack').selectOption('hd');
    await fallback.waitForFunction(() => window.jonesNative.getDisplay().hd.failed);
    assert.match(await fallback.locator('#graphics-status').textContent(), /original pixels remain active/i);
    await fallback.locator('#display button').click();
    for (let i = 0; i < 8; i++) {
      if (await fallback.evaluate(() => window.jonesNative.getState()?.dialog === 'select1')) break;
      const b = await fallback.locator('#game').boundingBox(); await fallback.mouse.click(b.x + b.width / 2, b.y + b.height / 2); await fallback.waitForTimeout(650);
    }
    await fallback.waitForFunction(() => window.jonesNative.getState()?.dialog === 'select1');
    const b = await fallback.locator('#game').boundingBox(); await fallback.mouse.click(b.x + b.width * 165 / 320, b.y + b.height * 75 / 200);
    await fallback.waitForFunction(() => window.jonesNative.getState()?.dialog === 'select1b');
    assert.equal(await fallback.locator('#failure').isVisible(), false); assert.deepEqual(errors, []);
    const file = path.join(OUTPUT, '13-missing-pack-fallback.png'); await fallback.screenshot({ path: file }); report.screenshots.push(path.relative(ROOT, file));
    await fallbackContext.close(); return { deliberatelyUnavailable: 'hd/manifest.json', originalPlayerCountReached: true };
  });
  await check('Touch display controls stay visible outside the original game in portrait, landscape and fullscreen', async () => {
    const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 1 });
    const mobile = await mobileContext.newPage(), layouts = [], toggles = [];
    mobile.on('pageerror', e => report.errors.push(e.message));
    mobile.on('console', m => { if (m.type() === 'error') report.errors.push(m.text()); });
    mobile.on('response', response => {
      if (response.ok() && response.request().resourceType() === 'script') scriptReads.push(response.body().then(bytes => report.loadedScripts.push({ path: new URL(response.url()).pathname, sha256: createHash('sha256').update(bytes).digest('hex') })));
    });
    async function touchCapture(name) {
      // No mouse movement or focus: visibility must not depend on hover.
      const file = path.join(OUTPUT, name + '.png'); await mobile.screenshot({ path: file }); report.screenshots.push(path.relative(ROOT, file));
    }
    async function layout(target, label) {
      await target.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      const result = await target.evaluate(() => {
        const box = element => { const r = element.getBoundingClientRect(); return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: r.width, height: r.height }; };
        const toolbar = document.querySelector('#display-controls'), canvas = document.querySelector('#game');
        const buttons = [...toolbar.querySelectorAll('button')].filter(button => !button.hidden).map(button => {
          let opacity = 1, visible = true;
          for (let node = button; node; node = node.parentElement) { const style = getComputedStyle(node); opacity *= Number(style.opacity); visible &&= style.visibility === 'visible' && style.display !== 'none'; }
          const rect = box(button), hit = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
          return { id: button.id, rect, opacity, visible, reachable: hit === button || button.contains(hit), overflow: button.scrollWidth - button.clientWidth };
        });
        return { toolbar: box(toolbar), game: box(canvas), buffer: { width: canvas.width, height: canvas.height }, buttons,
          viewport: { width: innerWidth, height: innerHeight }, pageWidth: document.documentElement.scrollWidth,
          noHover: matchMedia('(hover: none)').matches, touchPoints: navigator.maxTouchPoints, fullscreen: document.fullscreenElement?.id ?? null };
      });
      const { toolbar, game, viewport } = result;
      assert(Math.abs(game.width / game.height - 1.6) < .01, label + ': CSS game keeps 8:5');
      assert(Math.abs(result.buffer.width / result.buffer.height - 1.6) < .01, label + ': backing canvas keeps 8:5');
      assert(game.left >= -1 && game.top >= -1 && game.right <= viewport.width + 1 && game.bottom <= viewport.height + 1, label + ': full game stays in viewport');
      assert(toolbar.right <= game.left + .5 || toolbar.left >= game.right - .5 || toolbar.bottom <= game.top + .5 || toolbar.top >= game.bottom - .5, label + ': toolbar must not cover canvas');
      assert(result.pageWidth <= viewport.width + 1, label + ': no horizontal page overflow');
      for (const button of result.buttons) {
        assert(button.visible && button.opacity === 1 && button.reachable, label + ': ' + button.id + ' visible and reachable without hover');
        assert(button.rect.width >= 44 && button.rect.height >= 44, label + ': ' + button.id + ' has a 44px touch target');
        assert(button.rect.left >= 0 && button.rect.top >= 0 && button.rect.right <= viewport.width + 1 && button.rect.bottom <= viewport.height + 1, label + ': button within viewport');
        assert(button.overflow <= 1, label + ': button text fits');
      }
      layouts.push({ label, ...result }); return result;
    }
    async function touchToggle(pack) {
      await mobile.locator('#graphics-toggle').evaluate(button => {
        button.addEventListener('click', () => {
          const frame = JSON.stringify(window.jonesNative.getFrame()), state = JSON.stringify(window.jonesNative.getState());
          document.addEventListener('click', () => { window.__touchToggle = { frameUnchanged: frame === JSON.stringify(window.jonesNative.getFrame()), stateUnchanged: state === JSON.stringify(window.jonesNative.getState()) }; }, { once: true });
        }, { capture: true, once: true });
      });
      await mobile.locator('#graphics-toggle').tap();
      const observed = await mobile.evaluate(() => window.__touchToggle);
      assert.deepEqual(observed, { frameUnchanged: true, stateUnchanged: true });
      assert.equal(await mobile.locator('#graphics-toggle').getAttribute('aria-pressed'), String(pack === 'hd'));
      assert.equal(await mobile.locator('#graphics-toggle').textContent(), `HD: ${pack === 'hd' ? 'On' : 'Off'}`);
      assert.equal(await mobile.locator('#graphics-pack').inputValue(), pack);
      if (pack === 'hd') await mobile.waitForFunction(() => window.jonesNative.getDisplay().hd.ready && window.jonesNative.getDisplay().hd.layers > 0);
      toggles.push({ pack, ...observed });
    }
    async function tapGame(x, y) {
      const b = await mobile.locator('#game').boundingBox();
      await mobile.touchscreen.tap(b.x + x * b.width / 320, b.y + y * b.height / 200);
    }
    try {
      await mobile.goto(BASE_URL); await mobile.waitForFunction(() => window.jonesNative && !document.querySelector('#graphics-toggle').disabled);
      const first = await layout(mobile, '390x844 before any touch'); assert(first.noHover && first.touchPoints > 0, 'This must be a real touch/no-hover browser context');
      await touchCapture('14-touch-visible-without-hover'); await touchToggle('hd'); await touchToggle('original');
      await mobile.locator('#play').tap(); await mobile.waitForFunction(() => document.fullscreenElement?.id === 'screen');
      for (let i = 0; i < 8; i++) {
        if (await mobile.evaluate(() => window.jonesNative.getState()?.dialog === 'select1')) break;
        await tapGame(160, 100); await mobile.waitForTimeout(650);
      }
      await mobile.waitForFunction(() => window.jonesNative.getState()?.dialog === 'select1' && window.jonesNative.getState().trace.at(-1) === '233:select1.doit');
      await touchToggle('hd'); await touchToggle('original');
      assert.equal(await mobile.evaluate(() => document.activeElement?.id), 'game', 'Touch toggle restores original keyboard focus');
      await layout(mobile, '390x844 original menu fullscreen'); await touchCapture('15-touch-fullscreen-menu');
      await mobile.setViewportSize({ width: 844, height: 390 }); await layout(mobile, '844x390 landscape fullscreen'); await touchCapture('16-touch-landscape');
      await mobile.setViewportSize({ width: 320, height: 740 }); await layout(mobile, '320px narrow fullscreen');
      // Layout-only fixture for the fourth toolbar button. No room/peer/game data is changed.
      const connectionWasHidden = await mobile.locator('#connection-settings').evaluate(button => { const hidden = button.hidden; button.hidden = false; return hidden; });
      try { await layout(mobile, '320px Connection button layout fixture'); await touchCapture('17-touch-narrow-four-buttons-layout-fixture'); }
      finally { await mobile.locator('#connection-settings').evaluate((button, hidden) => { button.hidden = hidden; }, connectionWasHidden); }
      await mobile.setViewportSize({ width: 844, height: 390 }); await layout(mobile, '844x390 restored original menu');
      assert.equal(await mobile.locator('#game').evaluate(canvas => { const b = canvas.getBoundingClientRect(); return document.elementFromPoint(b.x + b.width * 165 / 320, b.y + b.height * 75 / 200) === canvas; }), true, 'Original Play Game target remains the canvas');
      await tapGame(165, 75); await mobile.waitForFunction(() => window.jonesNative.getState()?.dialog === 'select1b');
      await mobile.locator('#fullscreen').tap(); await mobile.waitForFunction(() => !document.fullscreenElement); await layout(mobile, '844x390 fullscreen exited');
      await mobile.locator('#fullscreen').tap(); await mobile.waitForFunction(() => document.fullscreenElement?.id === 'screen'); await layout(mobile, '844x390 fullscreen reentered');
      await page.setViewportSize({ width: 1280, height: 800 }); await layout(page, '1280x800 desktop with original WebGL-loss fallback');
      assert.equal(await mobile.evaluate(() => window.jonesNative.getState().error), null);
      return { layouts, toggles, originalPlayGameReached: 'select1b', connectionButtonScope: 'DOM layout only; no multiplayer claim' };
    } catch (error) { await touchCapture('failure-touch-toolbar').catch(() => {}); throw error; }
    finally { await mobileContext.close(); }
  });
  await Promise.all(scriptReads); assert.deepEqual(report.errors, []); report.ok = true;
})().catch(async error => { report.failure = error.stack; console.error(error); if (page) try { await capture('failure'); } catch {} process.exitCode = 1; })
  .finally(async () => { report.finished = new Date().toISOString(); await fs.mkdir(OUTPUT, { recursive: true }); await fs.writeFile(path.join(OUTPUT, 'report.json'), JSON.stringify(report, null, 2)); await browser?.close(); });
