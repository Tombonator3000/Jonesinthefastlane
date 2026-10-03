// SPDX-License-Identifier: GPL-3.0-or-later
// Real original input journey. Frame/state observations never modify the game.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.resolve(ROOT, process.env.JONES_HD_PROPS_OUTPUT || 'build/native-hd-props-evidence');
const BASE = process.env.JONES_NATIVE_URL || 'http://127.0.0.1:8798/';
const report = { started: new Date().toISOString(), url: BASE, checks: [], screenshots: [], loadedScripts: [], errors: [], resourceErrors: [], ok: false };
const reads = [];
let browser, page;
const state = () => page.evaluate(() => window.jonesNative.getState());
async function healthy() { const s = await state(); assert.equal(s.error, null, JSON.stringify(s)); return s; }
async function wait(predicate, timeout = 25000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { const s = await healthy(); if (predicate(s)) return s; await page.waitForTimeout(80); }
  throw new Error('Original state timeout: ' + JSON.stringify(await state()));
}
async function check(name, fn) { const start = Date.now(); const detail = await fn(); report.checks.push({ name, ok: true, milliseconds: Date.now() - start, detail }); console.log('PASS', name); }
async function click(x, y, delay = 100) {
  const bounds = await page.locator('#game').boundingBox(); assert(bounds);
  assert(Math.abs(bounds.width / bounds.height - 1.6) < .01, 'Original320x200 input mapping');
  await page.mouse.click(bounds.x + x * bounds.width / 320, bounds.y + y * bounds.height / 200, { delay });
  // SCI Item.track keeps checking the live pointer until it consumes release.
  // Leave the pointer on the control until the caller observes its result.
  await page.waitForTimeout(140); await healthy();
}
async function travel(x, y, dialog) {
  assert.equal((await state()).dialog, null);
  const before = await page.evaluate(() => JSON.stringify(window.jonesNative.getFrame().hd.ops
    .filter(op => op.kind === 'cel' && op.view === 0 && op.loop === 2).map(op => op.dest)));
  await click(x, y);
  // Move off the tiny door only after the original Place has accepted travel,
  // evidenced by actual marble movement (or arrival), never a fixed delay.
  await page.waitForFunction(({ before, dialog }) => window.jonesNative.getState().dialog === dialog ||
    JSON.stringify(window.jonesNative.getFrame().hd.ops.filter(op => op.kind === 'cel' && op.view === 0 && op.loop === 2).map(op => op.dest)) !== before,
    { before, dialog }, { timeout: 25000 });
  await page.mouse.move(0, 0); await ready(dialog);
}
async function clickCel(view, loop) {
  const dest = await page.evaluate(({ view, loop }) => window.jonesNative.getFrame().hd.ops.filter(op => op.kind === 'cel' && op.view === view && op.loop === loop).at(-1)?.dest, { view, loop });
  assert(dest, `Original control ${view}:${loop} must actually be displayed`);
  await click((dest.left + dest.right) / 2, (dest.top + dest.bottom) / 2);
}
async function screenshot(name) {
  await page.mouse.move(0, 0); const file = path.join(OUTPUT, `${name}.png`);
  await page.screenshot({ path: file }); report.screenshots.push({ name, path: path.relative(ROOT, file), state: await state() });
}
async function ready(dialog) { return wait(s => s.dialog === dialog && s.trace.at(-1) === ({ employment: '206:employment.doit', fastFood: '210:fastFood.doit', bank: '204:bank.doit', lowcost: '200:lowcost.doit' }[dialog])); }
async function observe() {
  await page.evaluate(() => {
    const seen = new Map(), captures = [], counts = {}, positions = new Set();
    let stopped = false, lastRevision = -1;
    window.__hdProps = { summary: () => ({ observed: [...seen.values()], captureCount: captures.length, positions: [...positions] }), captures, stop: () => { stopped = true; } };
    function sample() {
      if (stopped) return;
      const api = window.jonesNative, frame = api.getFrame();
      if (frame?.hd && frame.revision !== lastRevision && api.getDisplay().hd.ready) {
        lastRevision = frame.revision;
        for (const op of frame.hd.ops) {
          if (op.kind !== 'cel') continue;
          const kind = op.view >= 280 && op.view <= 297 ? 'body' : op.view === 751 ? 'door' : op.view === 750 ? 'work-clock' : op.view === 270 ? 'time-sector' : op.view === 0 && op.loop === 2 ? 'marble' : op.view === 0 && op.loop === 4 ? 'calculator' : op.view === 0 && op.loop === 1 ? 'pic-patch' : op.view === 501 && op.loop === 6 ? 'goal-icon' : null;
          if (!kind) continue;
          const key = `${op.view}:${op.loop}:${op.cel}`, at = `${op.dest.left},${op.dest.top}`;
          if (kind === 'marble' && positions.size < 256) positions.add(at);
          const unique = kind === 'marble' ? `${key}@${at}` : key;
          if (seen.has(unique) || seen.size >= 512) continue;
          // getFrame().hd.ops contains only live presented owners. Read-only
          // observation catches short original cel transitions between clicks.
          const detail = { kind, key, view: op.view, loop: op.loop, cel: op.cel, dest: op.dest, source: op.source,
            revision: frame.revision, tick: api.getState().ticks, week: api.getState().week };
          seen.set(unique, detail);
          const max = kind === 'body' ? 3 : kind === 'door' || kind === 'work-clock' || kind === 'goal-icon' ? 4 : kind === 'marble' ? 2 : kind === 'pic-patch' || kind === 'calculator' ? 1 : 0;
          if ((counts[kind] || 0) < max) {
            const canvas = document.querySelector('#game'), copy = document.createElement('canvas');
            copy.width = canvas.width; copy.height = canvas.height; const ctx = copy.getContext('2d'); ctx.drawImage(canvas, 0, 0);
            const rgba = ctx.getImageData(0, 0, copy.width, copy.height).data, scale = Math.min(copy.width / 320, copy.height / 200);
            const offsetX = (copy.width - 320 * scale) / 2, offsetY = (copy.height - 200 * scale) / 2;
            const packed = Uint8Array.from(atob(frame.hd.owners), c => c.charCodeAt(0)), data = new DataView(packed.buffer), owners = new Uint32Array(64000);
            for (let at = 0, out = 0; at < packed.length; at += 8) { const length = data.getUint32(at, true); owners.fill(data.getUint32(at + 4, true), out, out + length); out += length; }
            let subpixelCells = 0, sampledCells = 0;
            for (let y = Math.max(0, Math.ceil(op.dest.top)); y < Math.min(200, op.dest.bottom); y++) for (let x = Math.max(0, Math.ceil(op.dest.left)); x < Math.min(320, op.dest.right); x++) {
              if (owners[y * 320 + x] !== op.id || (Math.abs(x - frame.cursor.x) < 12 && Math.abs(y - frame.cursor.y) < 12)) continue;
              const a = (Math.floor(offsetY + (y + .22) * scale) * copy.width + Math.floor(offsetX + (x + .22) * scale)) * 4;
              const b = (Math.floor(offsetY + (y + .78) * scale) * copy.width + Math.floor(offsetX + (x + .78) * scale)) * 4;
              sampledCells++; if (Math.abs(rgba[a] - rgba[b]) + Math.abs(rgba[a + 1] - rgba[b + 1]) + Math.abs(rgba[a + 2] - rgba[b + 2]) > 8) subpixelCells++;
            }
            Object.assign(detail, { sampledCells, subpixelCells });
            const png = canvas.toDataURL('image/png');
            if (png.length <= 12000000) { captures.push({ ...detail, png }); counts[kind] = (counts[kind] || 0) + 1; }
          }
        }
      }
      setTimeout(sample, 40);
    }
    sample();
  });
}
async function saveObservations() {
  if (!page || page.isClosed()) return;
  const data = await page.evaluate(() => {
    if (!window.__hdProps) return null;
    window.__hdProps.stop(); return { ...window.__hdProps.summary(), captures: window.__hdProps.captures };
  });
  if (!data) return;
  report.observation = { observed: data.observed, marblePositions: data.positions };
  for (let i = 0; i < data.captures.length; i++) {
    const { png, ...detail } = data.captures[i], name = `observed-${String(i + 1).padStart(2, '0')}-${detail.kind}-${detail.key.replaceAll(':', '-')}.png`;
    await fs.writeFile(path.join(OUTPUT, name), Buffer.from(png.split(',')[1], 'base64'));
    report.screenshots.push({ ...detail, path: path.relative(ROOT, path.join(OUTPUT, name)), capture: 'Actual visible WebGL canvas during original animation' });
  }
}
async function cashPixels(label) {
  await page.mouse.move(0, 0);
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  const result = await page.evaluate(() => {
    const frame = window.jonesNative.getFrame(), data = Uint8Array.from(atob(frame.pixels), c => c.charCodeAt(0));
    const canvas = document.querySelector('#game'), copy = document.createElement('canvas');
    copy.width = canvas.width; copy.height = canvas.height; const ctx = copy.getContext('2d'); ctx.drawImage(canvas, 0, 0);
    const rgb = ctx.getImageData(0, 0, copy.width, copy.height).data, scale = Math.min(copy.width / 320, copy.height / 200);
    const left = (copy.width - 320 * scale) / 2, top = (copy.height - 200 * scale) / 2;
    let compared = 0, differences = 0; const examples = [];
    for (const [x0, y0, x1, y1] of [[263, 165, 268, 174], [273, 165, 309, 174]]) {
      for (let y = Math.ceil(top + y0 * scale); y < Math.floor(top + y1 * scale); y++) for (let x = Math.ceil(left + x0 * scale); x < Math.floor(left + x1 * scale); x++) {
        const gx = Math.floor((x + .5 - left) / scale), gy = Math.floor((y + .5 - top) / scale), expected = frame.palette[data[gy * 320 + gx]], i = (y * copy.width + x) * 4;
        const actual = [...rgb.slice(i, i + 3)]; compared++;
        if (actual.some((v, c) => v !== expected[c])) { differences++; if (examples.length < 4) examples.push({ gx, gy, expected, actual }); }
      }
    }
    const cash = window.jonesNative.getState().cash;
    // Old draw operations can remain live for a few border pixels after a
    // shorter value. Use the owner of the current right-aligned cash glyphs,
    // not concatenated historical full strings from every visible operation.
    const packed = Uint8Array.from(atob(frame.hd.owners), c => c.charCodeAt(0)), runs = new DataView(packed.buffer), owners = new Uint32Array(64000);
    for (let at = 0, out = 0; at < packed.length; at += 8) { const count = runs.getUint32(at, true); owners.fill(runs.getUint32(at + 4, true), out, out + count); out += count; }
    const candidates = frame.hd.ops.filter(op => op.kind === 'text' && /^\s*\d+\s*$/.test(op.text) && op.glyphs.some(g =>
      g.x >= 273 && g.y >= 165 && g.y < 174 && /\d/.test(g.char) && owners[(g.y + 3) * 320 + g.x + 2] === op.id));
    const cashText = candidates.at(-1)?.text ?? '';

    return { compared, differences, examples, cash, cashText, pack: window.jonesNative.getDisplay().preferences.pack };

  });
  assert(result.compared > 1000);
  assert.equal(Number(result.cashText.trim()), result.cash, `${label}: displayed original cash string must equal the game balance`);
  if (await page.locator('#graphics-pack').inputValue() === 'original') assert.equal(result.differences, 0, `${label}: ${JSON.stringify(result.examples)}`);
  else assert(result.differences > 25, `${label}: HD cash must render sharper glyph outlines`);
  return { label, ...result };
}
async function toggle(pack) {
  await page.locator('#graphics-toggle').evaluate(button => {
    button.addEventListener('click', () => {
      const frame = JSON.stringify(window.jonesNative.getFrame()), state = JSON.stringify(window.jonesNative.getState());
      document.addEventListener('click', () => { window.__propToggle = { frame: frame === JSON.stringify(window.jonesNative.getFrame()), state: state === JSON.stringify(window.jonesNative.getState()) }; }, { once: true });
    }, { capture: true, once: true });
  });
  await page.locator('#graphics-toggle').click();
  assert.deepEqual(await page.evaluate(() => window.__propToggle), { frame: true, state: true });
  assert.equal(await page.locator('#graphics-toggle').getAttribute('aria-pressed'), String(pack === 'hd'));
  assert.equal(await page.evaluate(() => document.activeElement?.id), 'game');
}
async function depositLabel() {
  await page.mouse.move(0, 0);
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  const sample = await page.evaluate(() => {
    const frame = window.jonesNative.getFrame();
    const packed = Uint8Array.from(atob(frame.hd.owners), c => c.charCodeAt(0)), runs = new DataView(packed.buffer), owners = new Uint32Array(64000);
    for (let at = 0, out = 0; at < packed.length; at += 8) { const count = runs.getUint32(at, true); owners.fill(runs.getUint32(at + 4, true), out, out + count); out += count; }
    // This is the first actual ink pixel of the original font10 Deposit D.
    // Looking up its owner rejects stale text records left behind by a flash.
    const op = frame.hd.ops.find(op => op.id === owners[79 * 320 + 165]);
    const canvas = document.querySelector('#game'), copy = document.createElement('canvas');
    copy.width = canvas.width; copy.height = canvas.height;
    const ctx = copy.getContext('2d'); ctx.drawImage(canvas, 0, 0);
    const rgb = ctx.getImageData(0, 0, copy.width, copy.height).data, scale = Math.min(copy.width / 320, copy.height / 200);
    const left = (copy.width - 320 * scale) / 2, top = (copy.height - 200 * scale) / 2;
    let detailCells = 0;
    for (let y = 79; y < 85; y++) for (let x = 165; x < 226; x++) {
      const a = (Math.floor(top + (y + .22) * scale) * copy.width + Math.floor(left + (x + .22) * scale)) * 4;
      const b = (Math.floor(top + (y + .78) * scale) * copy.width + Math.floor(left + (x + .78) * scale)) * 4;
      if ([0, 1, 2].some(c => Math.abs(rgb[a + c] - rgb[b + c]) > 8)) detailCells++;
    }
    return { op, detailCells };
  });
  assert.equal(sample.op?.kind, 'text', 'Current Deposit ink must retain its HD text owner after the original highlight');
  assert.equal(sample.op.text, 'Deposit  $100'); assert.equal(sample.op.font, 10); assert.equal(sample.op.color, 0);
  assert.deepEqual(sample.op.shadow, { color: 6, offsetX: 1, offsetY: 1 });
  assert(sample.op.glyphs.every(g => g.background === 101));
  assert(sample.detailCells > 20, 'Deposit label must still display smooth subpixel glyphs after a real deposit');
  return { text: sample.op.text, shadow: sample.op.shadow, detailCells: sample.detailCells };
}
(async () => {
  await fs.mkdir(OUTPUT, { recursive: true });
  browser = await chromium.launch({ headless: true, executablePath: process.env.JONES_BROWSER_EXECUTABLE || chromium.executablePath(), args: ['--no-sandbox'] });
  report.browser = browser.version();
  page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  page.on('pageerror', e => report.errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') report.errors.push(m.text()); });
  page.on('requestfailed', r => { if (!r.failure()?.errorText?.includes('ERR_ABORTED')) report.resourceErrors.push({ path: new URL(r.url()).pathname, error: r.failure()?.errorText }); });
  page.on('response', r => {
    if (r.status() >= 400) report.resourceErrors.push({ path: new URL(r.url()).pathname, status: r.status() });
    if (r.ok() && r.request().resourceType() === 'script') reads.push(r.body().then(b => report.loadedScripts.push({ path: new URL(r.url()).pathname, sha256: createHash('sha256').update(b).digest('hex') })));
    if (r.ok() && new URL(r.url()).pathname.endsWith('/hd/manifest.json')) reads.push(r.body().then(b => { report.hdManifest = { sha256: createHash('sha256').update(b).digest('hex'), data: JSON.parse(b.toString()) }; }));
  });
  await page.goto(BASE); await page.locator('#play').click();
  for (let i = 0; i < 8; i++) { if ((await healthy()).dialog === 'select1') break; await click(160, 100); await page.waitForTimeout(600); }
  await wait(s => s.dialog === 'select1');
  await page.locator('#settings').click(); await page.locator('#graphics-pack').selectOption('hd');
  await page.locator('#mode').selectOption('original'); await page.locator('#lighting').setChecked(false); await page.locator('#resolution').selectOption('1080');
  await page.locator('#display button').click();
  await page.waitForFunction(() => window.jonesNative.getDisplay().hd.ready && window.jonesNative.getDisplay().hd.layers > 0);
  await page.waitForFunction(() => !document.querySelector('dialog[open]') && document.activeElement?.id === 'game' &&
    document.fullscreenElement?.id === 'screen' && window.jonesNative.getState().trace.at(-1) === '233:select1.doit');
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  await observe();
  await check('Original one-player setup and first animated player remain unchanged with HD', async () => {
    await click(165, 75); await wait(s => s.dialog === 'select1b'); await click(104, 115); await wait(s => s.dialog === 'select2');
    await click(94, 161); await wait(s => s.dialog === 'select3');
    await clickCel(250, 9); await wait(s => s.dialog === 'goalsDefine');
    for (let goal = 0; goal < 4; goal++) {
      await page.waitForFunction(cel => window.jonesNative.getFrame().hd.ops.some(op => op.kind === 'cel' && op.view === 501 && op.loop === 6 && op.cel === cel), goal);
      await screenshot(`00-goal-definition-${goal}`); if (goal < 3) await clickCel(250, 8);
    }
    await clickCel(250, 2); await wait(s => s.dialog === 'select3'); await click(231, 161); await wait(s => s.dialog === 'select4'); await click(196, 143);
    const s = await wait(s => s.currentPlayer === 'player1' && s.dialog === null && s.locationInputEnabled && !s.turnTransitionActive);
    assert.equal(s.cash, 200); assert.equal(await page.evaluate(() => document.fullscreenElement?.id), 'screen');
    await screenshot('01-hd-first-turn');
    return { player: s.currentPlayer, cash: s.cash, week: s.week };
  });
  await check('Original travel, door animation and job application use original hit coordinates', async () => {
    await travel(98, 182, 'employment'); await screenshot('02-hd-employment');
    await click(125, 92); await page.waitForTimeout(500); await click(150, 97);
    await wait(s => s.dialog === 'employment' && s.trace.at(-1) === '255:Dialog.doit');
    await screenshot('03-hd-job-result'); await click(160, 100); await ready('employment'); await click(229, 157); await wait(s => s.dialog === null);
    await travel(281, 64, 'fastFood'); await screenshot('04-hd-monolith');
    return { dialog: (await state()).dialog };
  });
  await check('Original work animates the time clock, advances time and updates HD cash digits from the original balance', async () => {
    const before = await state(), first = await cashPixels('before work');
    const elapsedBefore = await page.evaluate(() => window.jonesNative.runtime.global(323));
    await click(159, 157); await wait(s => s.cash > before.cash); await ready('fastFood'); await page.waitForTimeout(700);
    const after = await state(), last = await cashPixels('after work');
    const elapsedAfter = await page.evaluate(() => window.jonesNative.runtime.global(323));
    assert(elapsedAfter > elapsedBefore, 'Original timeKeep must advance through the actual work action');
    await screenshot('05-hd-after-work');
    await toggle('original'); const original = await cashPixels('Original after work'); await screenshot('06-original-after-work');
    await toggle('hd'); const restored = await cashPixels('HD again after work');
    assert.equal((await state()).cash, after.cash);
    return { pay: after.cash - before.cash, elapsedBefore, elapsedAfter, samples: [first, last, original, restored], toggleChangesState: false };
  });
  await check('Original purchase and bank controls stay aligned with the HD calculator', async () => {
    const before = (await state()).cash; await click(110, 80); await wait(s => s.cash < before);
    await page.waitForTimeout(500); if ((await state()).trace.at(-1) === '255:Dialog.doit') await click(160, 100); await ready('fastFood');
    const afterMeal = (await state()).cash; await screenshot('07-hd-meal');
    // Original economic prices vary. Earn any shortfall through the same Work
    // control instead of assuming one shift always leaves $100 after a meal.
    const extraWork = [];
    for (let shift = 0; shift < 3 && (await state()).cash < 100; shift++) {
      await ready('fastFood'); const cashBefore = (await state()).cash;
      await click(159, 157); await wait(s => s.cash > cashBefore); await ready('fastFood');
      extraWork.push({ cashBefore, cashAfter: (await state()).cash });
    }
    assert((await state()).cash >= 100, 'Original work must fund the $100 bank deposit within three extra shifts');
    await click(229, 157); await wait(s => s.dialog === null); await travel(37, 139, 'bank');
    const bank = (await state()).cash; assert(bank >= 100); await click(199, 82); await wait(s => s.cash === bank - 100); await ready('bank');
    // Observe the original deposit after its foreground-only highlight returns.
    await page.waitForFunction(() => !window.jonesNative.getFrame().hd.ops.some(op => op.kind === 'cel' && op.view === 340 && op.loop === 0), {}, { timeout: 15000 });
    await ready('bank');
    const label = await depositLabel(), sample = await cashPixels('bank deposit'); await screenshot('08-hd-bank-deposit');
    return { mealCost: before - afterMeal, extraWork, bankCashBefore: bank, bankDeposit: 100, label, sample };
  });
  await check('Live original frames contain distinct moving, opening and work poses with complete HD assets', async () => {
    const observed = await page.evaluate(() => window.__hdProps.summary());
    const byKind = kind => observed.observed.filter(o => o.kind === kind);
    assert(observed.positions.length >= 3, 'Moving player marble must traverse at least three actual positions');
    assert(byKind('body').length >= 1, 'Capture an actual original player body before turn animation is over');
    const doors = new Map(); for (const d of byKind('door')) { const set = doors.get(d.loop) || new Set(); set.add(d.cel); doors.set(d.loop, set); }
    assert([...doors.values()].some(cels => [0, 1, 2, 3].every(c => cels.has(c))), 'At least one door must visibly traverse all four original poses');
    assert.deepEqual([...new Set(byKind('work-clock').map(o => o.cel))].sort(), [0, 1, 2, 3], 'Real work must show all four original time-clock cels');
    assert(new Set(byKind('time-sector').map(o => o.loop * 10 + o.cel)).size >= 2);
    for (const kind of ['body', 'work-clock', 'door', 'calculator', 'marble', 'goal-icon'])
      assert(byKind(kind).some(o => o.subpixelCells >= (kind === 'marble' ? 2 : 8)), `${kind} must render actual high-resolution detail inside original logical pixels, not only emit a cel operation`);
    assert.deepEqual([...new Set(byKind('goal-icon').map(o => o.cel))].sort(), [0, 1, 2, 3]);
    await Promise.all(reads); assert(report.hdManifest);
    for (const body of byKind('body')) assert(report.hdManifest.data.cels[body.key], `Active original body ${body.key} needs a supplied HD atlas entry`);
    return { marblePositions: observed.positions.length, bodies: byKind('body').map(o => o.key), doorLoops: [...doors].map(([loop, cels]) => ({ loop, cels: [...cels].sort() })), workCels: byKind('work-clock').map(o => o.cel), clockSteps: byKind('time-sector').map(o => o.loop * 10 + o.cel) };
  });
  assert.deepEqual(report.errors, []); assert.deepEqual(report.resourceErrors, []); assert(report.loadedScripts.some(s => /\/assets\/index-.*\.js$/.test(s.path)));
  report.ok = true;
})().catch(async error => { report.failure = error.stack; console.error(error); if (page) try { await screenshot('failure'); } catch {} process.exitCode = 1; })
  .finally(async () => {
    await Promise.allSettled(reads); if (page) try { await saveObservations(); } catch (e) { report.observationFailure = String(e); process.exitCode = 1; report.ok = false; }
    if (report.hdManifest) { const { data, ...info } = report.hdManifest; report.hdManifest = { ...info, id: data.id, title: data.title, pics: Object.keys(data.pics).length, cels: Object.keys(data.cels).length }; }
    report.finished = new Date().toISOString(); await fs.mkdir(OUTPUT, { recursive: true }); await fs.writeFile(path.join(OUTPUT, 'report.json'), JSON.stringify(report, null, 2)); await browser?.close();
  });
