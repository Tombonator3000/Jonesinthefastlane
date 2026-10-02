// SPDX-License-Identifier: GPL-3.0-or-later
// Original SCI runtime smoke test: real input, read-only canvas/FS evidence.
// Requires the built distribution and Playwright Chromium. JONES_TEST_URL may
// point at a deployed subpath; JONES_WEB_ROOT overrides the local build root.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const http = require('node:http');
const crypto = require('node:crypto');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const WEB = path.resolve(process.env.JONES_WEB_ROOT || path.join(ROOT, 'build/browser'));
const REPORTS = path.resolve(process.env.JONES_TEST_REPORT_DIR || path.join(ROOT, 'reports/browser-local'));
const sha256 = data => crypto.createHash('sha256').update(data).digest('hex');
const report = {
  started: new Date().toISOString(), ok: false,
  subject: 'Unmodified Jones DOS 1.000.060 in source-built ScummVM WebAssembly with documented browser and Jones save compatibility patches',
  checks: [], screenshots: [], console: [], pageErrors: [], failedRequests: [], externalRequests: [],
  limitations: ['Automated pixels and resource hashes supplement human screenshot inspection; they do not prove every original rule or audio playback.'],
};
let server, browser, lastPage;
const templates = new Map();

async function serve() {
  const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.wasm': 'application/wasm', '.png': 'image/png' };
  await fs.access(path.join(WEB, 'vendor/scummvm.wasm'));
  server = http.createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      const filename = path.resolve(WEB, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
      if (!filename.startsWith(WEB + path.sep)) { response.writeHead(403).end(); return; }
      const bytes = await fs.readFile(filename);
      response.writeHead(200, { 'Content-Type': mime[path.extname(filename)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      response.end(bytes);
    } catch { if (!response.headersSent) response.writeHead(404); response.end('Not found'); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return `http://127.0.0.1:${server.address().port}/`;
}
async function check(name, run, continueOnFailure = false) {
  const started = Date.now();
  try { const detail = await run(); report.checks.push({ name, ok: true, elapsedMs: Date.now() - started, ...(detail === undefined ? {} : { detail }) }); console.log(`PASS ${name}`); }
  catch (error) {
    report.checks.push({ name, ok: false, elapsedMs: Date.now() - started, error: error.stack || error.message });
    if (!continueOnFailure) throw error;
    console.error(`FAIL ${name}: ${error.message}`); return false;
  }
}
function monitor(page, label) {
  lastPage = page; page.setDefaultTimeout(20000);
  page.on('pageerror', error => report.pageErrors.push({ page: label, error: error.message }));
  page.on('console', message => { if (['error', 'warning', 'warn'].includes(message.type()) || message.text().includes('[ScummVM]')) report.console.push({ page: label, type: message.type(), text: message.text().slice(0, 1500) }); });
  page.on('requestfailed', request => report.failedRequests.push({ page: label, url: request.url(), error: request.failure()?.errorText }));
  page.on('response', response => { if (response.status() >= 400) report.failedRequests.push({ page: label, url: response.url(), status: response.status() }); });
}
async function context(url, viewport = { width: 1280, height: 800 }) {
  const result = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  await result.addInitScript(() => {
    const exit = document.exitFullscreen.bind(document);
    document.exitFullscreen = (...args) => { console.warn('FULLSCREEN_EXIT_TRACE', new Error().stack); return exit(...args); };
  });
  const origin = new URL(url).origin;
  await result.route('**/*', route => {
    const address = route.request().url();
    if (/^https?:/.test(address) && new URL(address).origin !== origin) { report.externalRequests.push(address); return route.abort('blockedbyclient'); }
    return route.continue();
  });
  return result;
}
async function canvasBytes(page, crop) {
  const imageUri = 'data:image/png;base64,' + (await page.locator('#canvas').screenshot({ animations: 'disabled' })).toString('base64');
  return page.evaluate(async ({ crop, imageUri }) => {
    const source = new Image(); source.src = imageUri; await source.decode();
    const copy = document.createElement('canvas'); copy.width = 320; copy.height = 200;
    const ctx = copy.getContext('2d', { willReadFrequently: true }); ctx.imageSmoothingEnabled = false;
    ctx.drawImage(source, 0, 0, 320, 200);
    return Array.from(ctx.getImageData(...(crop || [0, 0, 320, 200])).data);
  }, { crop, imageUri });
}
async function pixels(page, crop) { return sha256(Buffer.from(await canvasBytes(page, crop))); }
async function capture(page, name) {
  await page.mouse.move(1, 1);
  const filename = path.join(REPORTS, name + '.png');
  await page.screenshot({ path: filename, fullPage: false, animations: 'disabled' });
  const canvasFile = path.join(REPORTS, name + '-canvas.png');
  await page.locator('#canvas').screenshot({ path: canvasFile, animations: 'disabled' });
  const display = await page.evaluate(() => {
    const canvas = document.getElementById('canvas'), box = canvas.getBoundingClientRect();
    return { fullscreen: document.fullscreenElement?.id || null, buffer: [canvas.width, canvas.height], bounds: [box.x, box.y, box.width, box.height] };
  });
  const entry = { name, page: path.relative(ROOT, filename), canvas: path.relative(ROOT, canvasFile), logicalPixelSha256: await pixels(page), display };
  report.screenshots.push(entry); return entry;
}
async function click(page, x, y) {
  const box = await page.locator('#canvas').boundingBox(); assert(box && box.width > 0 && box.height > 0, 'Original canvas is not visible');
  // SCI WButton.track peeks the live pointer until button release. Keep a
  // human-length press and let the engine consume it before moving off.
  await page.mouse.click(box.x + x / 320 * box.width, box.y + y / 200 * box.height, { delay: 90 });
  await page.waitForTimeout(140);
}
async function moveOff(page) {
  const box = await page.locator('#canvas').boundingBox();
  await page.mouse.move(box.x + 318 / 320 * box.width, box.y + 198 / 200 * box.height);
}
// The original runtime applies scene palettes and may render at noninteger CSS
// scales. A mean RGB error <=30 accepts the visually checked original PLAY
// button (~23 before viewport normalization); unrelated startup screens >94.
async function template(page, file, { crop = null, search = [65, 40, 190, 130], threshold = 30 } = {}) {
  if (!templates.has(file)) templates.set(file, 'data:image/png;base64,' + (await fs.readFile(path.join(ROOT, 'graphics/views', file))).toString('base64'));
  const imageUri = 'data:image/png;base64,' + (await page.locator('#canvas').screenshot({ animations: 'disabled' })).toString('base64');
  const result = await page.evaluate(async ({ uri, crop, search, imageUri }) => {
    const image = new Image(); image.src = uri; await image.decode();
    const frame = new Image(); frame.src = imageUri; await frame.decode();
    const source = document.createElement('canvas'); source.width = 320; source.height = 200;
    const ctx = source.getContext('2d', { willReadFrequently: true }); ctx.imageSmoothingEnabled = false;
    ctx.drawImage(frame, 0, 0, 320, 200);
    const actual = ctx.getImageData(0, 0, 320, 200).data;
    const [sx, sy, width, height] = crop || [0, 0, image.width, image.height];
    const sample = document.createElement('canvas'); sample.width = width; sample.height = height;
    const tc = sample.getContext('2d'); tc.drawImage(image, sx, sy, width, height, 0, 0, width, height);
    const expected = tc.getImageData(0, 0, width, height).data;
    const points = [];
    for (let y = 0; y < height; y += 2) for (let x = 0; x < width; x += 2) {
      const index = (y * width + x) * 4;
      if (expected[index + 3] >= 200) points.push([x, y, expected[index], expected[index + 1], expected[index + 2]]);
    }
    let best = { error: Infinity, x: 0, y: 0 };
    for (let y = search[1]; y < Math.min(search[1] + search[3], 201 - height); y++) {
      for (let x = search[0]; x < Math.min(search[0] + search[2], 321 - width); x++) {
        let total = 0;
        for (const [dx, dy, r, g, b] of points) {
          const i = ((y + dy) * 320 + x + dx) * 4;
          total += Math.abs(actual[i] - r) + Math.abs(actual[i + 1] - g) + Math.abs(actual[i + 2] - b);
          if (total > best.error * points.length * 3) break;
        }
        const error = total / (points.length * 3);
        if (error < best.error) best = { error, x, y };
      }
    }
    return { ...best, width, height, samples: points.length };
  }, { uri: templates.get(file), crop, search, imageUri });
  return { ...result, matches: result.error <= threshold };
}
async function waitTemplate(page, file, options = {}, timeout = 15000) {
  const until = Date.now() + timeout; let result;
  while (Date.now() < until) {
    result = await template(page, file, options); if (result.matches) return result;
    await page.waitForTimeout(300);
  }
  throw new Error(`Original image ${file} not found: ${JSON.stringify(result)}`);
}
async function clickTemplate(page, file, options) {
  const found = await waitTemplate(page, file, options);
  await click(page, found.x + found.width / 2, found.y + found.height / 2);
  return found;
}
async function done(page) { return clickTemplate(page, 'view_0250/loop_00_cel_00.png', { search: [205, 145, 35, 25] }); }
const playTemplate = 'view_0010/loop_01_cel_00.png';
const selectTemplate = 'view_0250/loop_07_cel_00.png';
const goalTemplate = 'view_0506/loop_00_cel_00.png';
const bankTemplate = 'view_0804/loop_00_cel_00.png';
const bankOptions = { crop: [67, 0, 116, 29], search: [130, 40, 20, 20] };
const cashCrop = [273, 163, 40, 17];

async function start(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  assert.equal(await page.locator('#goals, #actions, #destinations, .location-panel').count(), 0, 'Prototype interface still present');
  await page.locator('#start').click();
  await page.waitForFunction(() => document.body.classList.contains('playing') && window.Module?.FS, null, { timeout: 120000 });
  await page.waitForFunction(() => document.getElementById('canvas').width >= 320 && document.getElementById('launch').hidden, null, { timeout: 30000 });
  await page.waitForTimeout(1500); // Runtime initialization callback precedes the first SCI picture.
  return page.evaluate(() => ({ fullscreen: document.fullscreenElement?.id || null, canvas: [document.getElementById('canvas').width, document.getElementById('canvas').height], arguments: window.Module.arguments }));
}
async function geometry(page) {
  await page.waitForTimeout(700);
  const result = await page.evaluate(() => {
    const canvas = document.getElementById('canvas'), box = canvas.getBoundingClientRect();
    return { fullscreen: document.fullscreenElement?.id || null, backing: [canvas.width, canvas.height], box: { x: box.x, y: box.y, width: box.width, height: box.height }, viewport: [innerWidth, innerHeight] };
  });
  assert(Math.abs(result.box.width / result.box.height - 1.6) < .01, JSON.stringify(result));
  assert(Math.abs(result.backing[0] / result.backing[1] - 1.6) < .01, JSON.stringify(result));
  const fittedWidth = Math.min(result.viewport[0], result.viewport[1] * 1.6);
  assert(Math.abs(result.box.width - fittedWidth) <= 1 && Math.abs(result.box.height - fittedWidth / 1.6) <= 1, 'Original screen does not fill the available area: ' + JSON.stringify(result));
  assert(result.box.x >= -1 && result.box.y >= -1 && result.box.x + result.box.width <= result.viewport[0] + 1 && result.box.y + result.box.height <= result.viewport[1] + 1, JSON.stringify(result));
  return result;
}
async function mainMenu(page) {
  for (let i = 0; i < 8; i++) {
    const candidate = await template(page, playTemplate, { search: [85, 50, 25, 35] });
    if (candidate.matches) return;
    await click(page, 160, 100); await page.waitForTimeout(1300);
  }
  await waitTemplate(page, playTemplate, { search: [85, 50, 25, 35] });
}
async function onePlayer(page, { prefix = '', challengeJones = false } = {}) {
  await clickTemplate(page, playTemplate, { search: [85, 50, 25, 35] }); await page.waitForTimeout(500); await capture(page, prefix + '02-player-count');
  await clickTemplate(page, 'view_0000/loop_03_cel_00.png', { search: [80, 90, 30, 35] }); await waitTemplate(page, selectTemplate, { search: [65, 140, 35, 30] });
  await capture(page, prefix + '03-character-selection'); await clickTemplate(page, selectTemplate, { search: [65, 140, 35, 30] });
  await waitTemplate(page, goalTemplate, { search: [90, 40, 20, 20] });
  await capture(page, prefix + '04-original-goals'); await clickTemplate(page, 'view_0250/loop_11_cel_00.png', { search: [205, 145, 35, 25] }); await page.waitForTimeout(500);
  await capture(page, prefix + '05-challenge-jones');
  await clickTemplate(page, `view_0010/loop_03_cel_0${challengeJones ? '0' : '1'}.png`, { search: [140, challengeJones ? 100 : 120, 30, 30] }); await page.waitForTimeout(2200);
  await capture(page, prefix + (challengeJones ? '06-jones-difficulty' : '06-week-one'));
}
async function resourceHashes(page) {
  const actual = await page.evaluate(async () => {
    const rows = [];
    for (const name of ['resource.map', 'resource.001', 'resource.002', 'version']) {
      const data = window.Module.FS.readFile('/games/jones/' + name);
      const digest = await crypto.subtle.digest('SHA-256', data);
      rows.push({ name, bytes: data.length, sha256: Array.from(new Uint8Array(digest), n => n.toString(16).padStart(2, '0')).join('') });
    }
    return rows;
  });
  for (const row of actual) { const expected = await fs.readFile(path.join(ROOT, 'original', row.name)); assert.equal(row.sha256, sha256(expected), `Modified original: ${row.name}`); assert.equal(row.bytes, expected.length); }
  return actual;
}
async function saves(page) {
  return page.evaluate(async () => {
    const rows = [], FS = window.Module.FS;
    async function visit(directory) {
      for (const name of FS.readdir(directory).filter(name => name !== '.' && name !== '..')) {
        const filename = directory + '/' + name, info = FS.stat(filename);
        if ((info.mode & 0xf000) === 0x4000) { await visit(filename); continue; }
        if (!/^jones[^/]*\.\d{3}$/i.test(name)) continue;
        const data = FS.readFile(filename), digest = await crypto.subtle.digest('SHA-256', data);
        rows.push({ path: filename, bytes: data.length, sha256: Array.from(new Uint8Array(digest), n => n.toString(16).padStart(2, '0')).join('') });
      }
    }
    await visit('/home/web_user'); return rows;
  });
}
async function waitSave(page, timeout = 15000) {
  const until = Date.now() + timeout;
  while (Date.now() < until) { const found = await saves(page); if (found.length) return found; await page.waitForTimeout(300); }
  throw new Error('Original save command did not create a Jones save file');
}
async function waitHash(page, crop, expected, same, timeout = 12000) {
  const until = Date.now() + timeout;
  while (Date.now() < until) { const value = await pixels(page, crop); if ((value === expected) === same) return value; await page.waitForTimeout(250); }
  throw new Error(`Canvas region did not ${same ? 'return to' : 'change from'} the recorded checkpoint`);
}
async function main() {
  await fs.mkdir(REPORTS, { recursive: true });
  const url = process.env.JONES_TEST_URL || await serve(); report.url = url; report.webRoot = path.relative(ROOT, WEB);
  browser = await chromium.launch({ headless: true, executablePath: process.env.JONES_BROWSER_EXECUTABLE || chromium.executablePath(), args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  report.browserVersion = browser.version();
  const desktop = await context(url); let page = await desktop.newPage(); monitor(page, 'desktop');
  let startup;
  await check('Original engine starts in English, with no replacement panels', async () => {
    startup = await start(page, url); await capture(page, '00-original-startup');
    report.distribution = await page.evaluate(async () => (await fetch('build-manifest.json')).json()); return startup;
  });
  await check('Mounted original resource files are byte-identical to the supplied game', () => resourceHashes(page));
  await check('Host fullscreen toggles and original 8:5 canvas fits desktop and portrait viewports', async () => {
    assert.equal(startup.fullscreen, 'screen');
    const sizes = [await geometry(page)];
    await page.locator('#fullscreen').click(); await page.waitForFunction(() => !document.fullscreenElement);
    sizes.push(await geometry(page));
    await page.locator('#fullscreen').click(); await page.waitForFunction(() => document.fullscreenElement?.id === 'screen');
    for (const viewport of [{ width: 1280, height: 720 }, { width: 390, height: 844 }, { width: 1280, height: 800 }]) {
      await page.setViewportSize(viewport); const current = await geometry(page); assert.equal(current.fullscreen, 'screen'); sizes.push(current);
    }
    return sizes;
  });
  await check('Original main menu and one-player setup', async () => { await mainMenu(page); await capture(page, '01-main-menu'); await onePlayer(page); });
  let savedFiles, savedCash;
  await check('Original bank deposit changes its own cash display', async () => {
    await click(page, 37, 139); await waitTemplate(page, bankTemplate, bankOptions); await page.waitForTimeout(5000); await moveOff(page);
    const before = await pixels(page, cashCrop); await capture(page, '07-bank-before');
    await click(page, 199, 82); await moveOff(page); await waitHash(page, cashCrop, before, false);
    await page.waitForTimeout(5000); savedCash = await pixels(page, cashCrop); await capture(page, '08-bank-deposit');
    return { beforeCashPixels: before, afterCashPixels: savedCash, assertion: 'Cash glyph pixels changed after Deposit; screenshot inspection confirms the amounts.' };
  });
  await check('Original withdrawal, F5 save and a subsequent deposit alter real SCI state', async () => {
    // Deposit, withdraw, save, then deposit again: Restore must undo a real
    // original transaction, not just redraw the same unchanged screen.
    await click(page, 199, 97); await moveOff(page); await waitHash(page, cashCrop, savedCash, false);
    await page.waitForTimeout(5000); savedCash = await pixels(page, cashCrop); await capture(page, '08a-bank-withdraw-before-save');
    await page.locator('#canvas').focus(); await page.keyboard.press('F5'); await page.waitForTimeout(400); await capture(page, '09-original-save-dialog');
    await click(page, 199, 119); savedFiles = await waitSave(page); await page.waitForTimeout(5000); await capture(page, '10-original-saved');
    await click(page, 199, 82); await moveOff(page); await waitHash(page, cashCrop, savedCash, false); await page.waitForTimeout(5000); await capture(page, '11-bank-after-save-deposit');
    return savedFiles;
  });
  const restored = await check('Original F7 restore returns the recorded bank cash display', async () => {
    await page.keyboard.press('F7'); await page.waitForTimeout(500); await capture(page, '12-original-restore-dialog');
    // The original Print dialog is centered, with YES on the left.
    await click(page, 182, 103); await page.waitForTimeout(1800); await moveOff(page);
    await waitHash(page, cashCrop, savedCash, true); await waitTemplate(page, bankTemplate, bankOptions); await capture(page, '13-restored-bank');
  }, true);
  if (restored === false) {
    await capture(page, '13-original-restore-failed');
  }
  await check('Independent original new game preserves the bank save for later restoration', async () => {
    // Bank entry can legitimately schedule a random mugging in the original.
    // Start another original game for the fixed spending walkthrough, while
    // retaining the save in the same browser context's persistent filesystem.
    await page.close(); page = await desktop.newPage(); monitor(page, 'new-game');
    await start(page, url); assert.deepEqual(await waitSave(page), savedFiles);
    await mainMenu(page); await onePlayer(page, { prefix: 'fresh-' });
  });
  await check('Original employment, Cook application and two real work shifts', async () => {
    await click(page, 98, 182); await page.waitForTimeout(6000); await capture(page, '14-employment');
    await click(page, 125, 92); await page.waitForTimeout(500); await capture(page, '15-monolith-jobs');
    await click(page, 150, 97); await page.waitForTimeout(5000); await capture(page, '16-job-application-result');
    await done(page); await click(page, 281, 64); await page.waitForTimeout(6000);
    const work = await waitTemplate(page, 'view_0250/loop_01_cel_00.png', { search: [135, 145, 40, 25] });
    await moveOff(page); const before = await pixels(page, cashCrop);
    await click(page, work.x + work.width / 2, work.y + work.height / 2); await moveOff(page);
    await waitHash(page, cashCrop, before, false); await page.waitForTimeout(2200);
    const firstShift = await pixels(page, cashCrop);
    await click(page, work.x + work.width / 2, work.y + work.height / 2); await moveOff(page);
    await waitHash(page, cashCrop, firstShift, false); await page.waitForTimeout(2200);
    const after = await pixels(page, cashCrop); await capture(page, '17-work-completed');
    return { beforeCashPixels: before, afterCashPixels: after, workButton: work };
  });
  await check('Original Monolith food purchase uses the displayed price and cash', async () => {
    await page.waitForTimeout(4000); await moveOff(page); const before = await pixels(page, cashCrop);
    await capture(page, '17a-food-before'); await click(page, 110, 80); await moveOff(page);
    await waitHash(page, cashCrop, before, false); await page.waitForTimeout(5000);
    const after = await pixels(page, cashCrop); await capture(page, '17b-food-purchased');
    return { beforeCashPixels: before, afterCashPixels: after };
  });
  await check('Original Hi-Tech U enrollment and first Trade School lesson', async () => {
    await done(page); await click(page, 229, 182); await page.waitForTimeout(6000); await capture(page, '17c-university');
    const tuitionCash = await pixels(page, cashCrop);
    await clickTemplate(page, 'view_0250/loop_10_cel_00.png', { search: [165, 145, 35, 25] });
    await page.waitForTimeout(500); await capture(page, '17d-enrollment-confirmation');
    await click(page, 205, 117); await moveOff(page); await waitHash(page, cashCrop, tuitionCash, false);
    await page.waitForTimeout(6000); await capture(page, '17e-enrolled');
    // The original thank-you bubble waits for input; click the portrait to
    // dismiss it before selecting a course, without activating another item.
    await click(page, 100, 70); await page.waitForTimeout(400);
    const before = await pixels(page, [218, 123, 16, 23]);
    await click(page, 181, 129); await page.waitForTimeout(6000); await moveOff(page);
    const after = await waitHash(page, [218, 123, 16, 23], before, false); await capture(page, '17f-first-lesson');
    return { beforeCoursePixels: before, afterCoursePixels: after };
  });
  await check('Original full-week progression through home relaxation', async () => {
    await done(page); await click(page, 160, 25); await page.waitForTimeout(2000); await capture(page, '18-home');
    const relax = await waitTemplate(page, 'view_0250/loop_03_cel_00.png', { search: [70, 145, 50, 25] });
    const oldWeek = await pixels(page, [137, 183, 47, 12]);
    for (let i = 0; i < 10; i++) { await click(page, relax.x + relax.width / 2, relax.y + relax.height / 2); await page.waitForTimeout(700); }
    await page.waitForTimeout(6000); await done(page); await page.waitForTimeout(600);
    // At zero time the original RELAX warning can consume the first click.
    if ((await template(page, 'view_0250/loop_00_cel_00.png', { search: [205, 145, 35, 25] })).matches) await done(page);
    await page.waitForTimeout(9000); await moveOff(page);
    const newWeek = await waitHash(page, [137, 183, 47, 12], oldWeek, false, 15000); await capture(page, '19-next-week');
    return { oldWeekPixels: oldWeek, newWeekPixels: newWeek, assertion: 'Original week-label pixels changed; inspect screenshot to confirm Week #2 and any original event.' };
  });
  await check('Original resources remain unchanged after gameplay', () => resourceHashes(page));
  await check('SCI save survives page closure and reload via engine IndexedDB persistence', async () => {
    await page.waitForTimeout(2500); await page.close();
    const resumed = await desktop.newPage(); monitor(resumed, 'reload'); await start(resumed, url);
    const loadedFiles = await waitSave(resumed); assert.deepEqual(loadedFiles, savedFiles);
    await mainMenu(resumed); await click(resumed, 160, 100); await resumed.waitForTimeout(2500); await moveOff(resumed);
    await waitTemplate(resumed, bankTemplate, bankOptions); await waitHash(resumed, cashCrop, savedCash, true);
    await capture(resumed, '20-persisted-original-save');
    return { saves: loadedFiles, databases: await resumed.evaluate(async () => typeof indexedDB.databases === 'function' ? await indexedDB.databases() : 'API unavailable') };
  });
  await check('Original four-player setup remains available', async () => {
    const separate = await context(url); const multi = await separate.newPage(); monitor(multi, 'four-players');
    await start(multi, url); await mainMenu(multi); await clickTemplate(multi, playTemplate, { search: [85, 50, 25, 35] }); await pageDelay(multi, 400);
    await clickTemplate(multi, 'view_0000/loop_03_cel_03.png', { search: [205, 90, 35, 35] });
    for (let i = 0; i < 4; i++) {
      await clickTemplate(multi, selectTemplate, { search: [65 + i * 46, 140, 35, 30] });
      await waitTemplate(multi, goalTemplate, { search: [90, 40, 20, 20] });
      await capture(multi, `21-player-${i + 1}-goals`);
      await clickTemplate(multi, `view_0250/loop_${i === 3 ? '11' : '08'}_cel_00.png`, { search: [205, 145, 35, 25] }); await pageDelay(multi, 400);
    }
    await pageDelay(multi, 2000); await capture(multi, '21-four-player-game'); await separate.close();
  });
  await check('Original challenge Jones and all three difficulty choices remain available', async () => {
    const separate = await context(url), opponent = await separate.newPage(); monitor(opponent, 'jones-opponent');
    await start(opponent, url); await mainMenu(opponent); await onePlayer(opponent, { prefix: '22-jones-', challengeJones: true });
    const choices = [];
    for (let i = 0; i < 3; i++) choices.push(await waitTemplate(opponent, `view_0010/loop_02_cel_0${i}.png`, { search: [125, 95 + i * 17, 25, 20] }));
    await capture(opponent, '23-original-jones-difficulty');
    const fair = choices[1]; await click(opponent, fair.x + fair.width / 2, fair.y + fair.height / 2); await pageDelay(opponent, 2200);
    await capture(opponent, '24-original-jones-goals-or-start'); await separate.close(); return choices;
  });
  await check('Play in fullscreen remains fullscreen after the engine initializes', async () => { assert.equal(startup.fullscreen, 'screen'); return startup.fullscreen; });
  assert.equal(report.pageErrors.length, 0, JSON.stringify(report.pageErrors));
  assert.equal(report.externalRequests.length, 0, JSON.stringify(report.externalRequests));
  assert.equal(report.failedRequests.length, 0, JSON.stringify(report.failedRequests));
  assert.equal(report.console.filter(entry => entry.text.includes('FULLSCREEN_EXIT_TRACE') && !entry.text.includes('HTMLButtonElement.fullscreen')).length, 0, 'The engine unexpectedly exited host-managed fullscreen');
  assert.equal(report.console.filter(entry => /Aborted\(|RuntimeError|unreachable|out of bounds|fatal error|assertion failed/i.test(entry.text)).length, 0, 'Fatal runtime message was logged');
  assert.equal(report.checks.filter(entry => !entry.ok).length, 0, 'One or more original-runtime checks failed; see preserved evidence.');
  report.ok = true;
}
const pageDelay = (page, ms) => page.waitForTimeout(ms);
main().catch(async error => {
  report.error = error.stack || error.message;
  console.error(report.error);
  if (lastPage && !lastPage.isClosed()) { try { await capture(lastPage, 'failure'); } catch {} }
  process.exitCode = 1;
}).finally(async () => {
  report.finished = new Date().toISOString();
  await fs.mkdir(REPORTS, { recursive: true });
  await fs.writeFile(path.join(REPORTS, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  if (browser) await browser.close();
  if (server) await new Promise(resolve => server.close(resolve));
});
