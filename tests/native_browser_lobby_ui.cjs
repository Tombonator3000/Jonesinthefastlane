// SPDX-License-Identifier: GPL-3.0-or-later
// Real production UI and original pointer/keyboard controls. Diagnostics are read-only.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { chromium } = require('playwright');
const { startPeerFixture } = require('./native_peer_signaling.cjs');

const ROOT = path.resolve(__dirname, '..');
const REMOTE = process.env.JONES_NATIVE_URL;
const OUTPUT = path.resolve(ROOT, process.env.JONES_LOBBY_OUTPUT || 'build/native-lobby-ui-evidence');
const report = { started: new Date().toISOString(), checks: [], screenshots: [], errors: [], resourceErrors: [], loadedScripts: [], ok: false };
const pages = [], scriptReads = [];
let browser, fixture, deadline, target;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const safeUrl = value => { const url = new URL(value); return url.origin + url.pathname; };

async function check(name, run) {
  const start = Date.now();
  try { const details = await run(); report.checks.push({ name, ok: true, milliseconds: Date.now() - start, details }); console.log('PASS', name); }
  catch (error) { report.checks.push({ name, ok: false, milliseconds: Date.now() - start }); throw error; }
}
async function snapshot(page) {
  return page.evaluate(() => { const d = window.jonesNative; return d ? { state: d.getState(), hasRuntime: d.runtime !== undefined, room: d.getRoom(), transport: d.getTransport() } : null; });
}
async function wait(page, predicate, label, timeout = 20000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { const s = await snapshot(page); assert(!s?.state?.error, s?.state?.error); if (s && predicate(s)) return s; await delay(80); }
  const s = await snapshot(page);
  throw new Error(`${label}: ${JSON.stringify({ dialog: s?.state?.dialog, trace: s?.state?.trace, error: s?.state?.error, hasRuntime: s?.hasRuntime, roomStatus: s?.room?.status })}`);
}
async function capture(page, name) {
  const file = path.join(OUTPUT, name + '.png');
  await page.screenshot({ path: file, mask: [page.locator('#invite-link'), page.locator('#invitation')] });
  report.screenshots.push(path.relative(ROOT, file));
}
async function newPage(viewport = { width: 1280, height: 800 }, url = target) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage(); pages.push(page);
  page.on('pageerror', error => report.errors.push(error.message));
  page.on('response', response => {
    if (response.status() >= 400 && new URL(response.url()).origin === new URL(target).origin)
      report.resourceErrors.push({ path: new URL(response.url()).pathname, status: response.status() });
    if (response.ok() && response.request().resourceType() === 'script')
      scriptReads.push(response.body().then(bytes => report.loadedScripts.push({ url: safeUrl(response.url()), sha256: createHash('sha256').update(bytes).digest('hex') })).catch(() => {}));
  });
  await page.goto(url); await page.waitForFunction(() => window.jonesNative && !document.querySelector('#online').disabled);
  return page;
}
async function clickGame(page, x, y) {
  const b = await page.locator('#game').boundingBox(); assert(b);
  await page.mouse.click(b.x + x * b.width / 320, b.y + y * b.height / 200, { delay: 90 });
}
async function originalMenu(page) {
  await page.locator('#play').click();
  for (let n = 0; n < 8; n++) {
    if ((await snapshot(page)).state?.dialog === 'select1') break;
    await clickGame(page, 160, 100); await delay(600);
  }
  await wait(page, s => s.state?.dialog === 'select1' && s.state.trace.at(-1) === '233:select1.doit', 'original three-button menu');
  await page.waitForFunction(() => !document.querySelector('#menu-online').hidden);
}
async function bounds(page) {
  const result = await page.evaluate(() => {
    const rect = selector => { const r = document.querySelector(selector).getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height, right: r.right, bottom: r.bottom }; };
    const dialog = document.querySelector('#network');
    return { game: rect('#game'), dialog: rect('#network'), viewport: { width: innerWidth, height: innerHeight }, pageWidth: document.documentElement.scrollWidth, dialogWidth: dialog.scrollWidth, dialogClientWidth: dialog.clientWidth };
  });
  assert(Math.abs(result.game.width / result.game.height - 1.6) < .01, 'Original game keeps its 8:5 input surface');
  assert(result.pageWidth <= result.viewport.width + 1, 'No horizontal document overflow');
  assert(result.dialog.x >= -1 && result.dialog.y >= -1 && result.dialog.right <= result.viewport.width + 1 && result.dialog.bottom <= result.viewport.height + 1, 'Dialog stays within the visible viewport');
  assert(result.dialogWidth <= result.dialogClientWidth + 1, 'Dialog never requires horizontal scrolling');
  return result;
}
async function reachable(page, selector) {
  const control = page.locator(selector); assert(await control.isVisible(), selector + ' is visible');
  await control.scrollIntoViewIfNeeded(); await control.focus();
  const hit = await control.evaluate(element => {
    const r = element.getBoundingClientRect(); const x = r.x + r.width / 2, y = r.y + r.height / 2;
    const top = document.elementFromPoint(x, y);
    return x >= 0 && y >= 0 && x < innerWidth && y < innerHeight && (top === element || element.contains(top));
  });
  assert(hit, selector + ' is reachable inside the scrolling dialog');
}
async function visibleHeading(page) {
  // A fullscreen element can cover a top-layer dialog while DOM visibility still passes.
  // Inspect the actual composited screenshot, never a synthetic DOM render.
  let pixels;
  const end = Date.now() + 2000;
  while (Date.now() < end) {
    const box = await page.locator('#network-title').boundingBox(); assert(box);
    const png = await page.screenshot({ clip: box });
    pixels = await page.evaluate(async base64 => {
      const image = new Image(); image.src = 'data:image/png;base64,' + base64; await image.decode();
      const canvas = document.createElement('canvas'); canvas.width = image.width; canvas.height = image.height;
      const ctx = canvas.getContext('2d'); ctx.drawImage(image, 0, 0);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data; let aqua = 0, ink = 0;
      for (let i = 0; i < data.length; i += 4) {
        if (Math.abs(data[i] - 64) < 8 && Math.abs(data[i + 1] - 208) < 8 && Math.abs(data[i + 2] - 208) < 8) aqua++;
        if (data[i] < 32 && data[i + 1] < 32 && data[i + 2] < 32) ink++;
      }
      return { aquaRatio: aqua / (data.length / 4), inkRatio: ink / (data.length / 4) };
    }, png.toString('base64'));
    if (pixels.aquaRatio > .4 && pixels.inkRatio > .015) return pixels;
    await delay(80);
  }
  assert.fail('The actual screenshot must show the turquoise dialog heading and dark text: ' + JSON.stringify(pixels));
}
async function originalText(page) {
  return page.evaluate(() => (window.jonesNative.getFrame()?.hd?.ops || []).filter(op => op.kind === 'text').map(op => op.text).join(' '));
}

async function run() {
  await fs.mkdir(OUTPUT, { recursive: true });
  if (REMOTE) {
    const url = new URL(REMOTE); assert(['http:', 'https:'].includes(url.protocol) && !url.username && !url.password && !url.hash, 'Use a plain HTTP(S) page URL, not an invitation'); target = url.href;
  } else { fixture = await startPeerFixture(path.join(ROOT, 'build/native')); target = fixture.url; }
  report.source = { kind: REMOTE ? 'published/static URL' : 'isolated production static fixture', url: safeUrl(target), gameServerStarted: false };
  browser = await chromium.launch({ executablePath: process.env.JONES_BROWSER_EXECUTABLE || chromium.executablePath(), headless: true, args: ['--no-sandbox'] });
  const desktop = await newPage();

  await check('Launch shows the original town without starting a game session', async () => {
    const s = await snapshot(desktop); assert.equal(s.hasRuntime, false); assert.equal(s.state, null); assert(!s.room);
    assert.equal(await desktop.locator('#menu-online').isVisible(), false);
    const pixels = await desktop.locator('#game').evaluate(canvas => {
      const copy = document.createElement('canvas'); copy.width = 320; copy.height = 200;
      const ctx = copy.getContext('2d'); ctx.drawImage(canvas, 0, 0, 320, 200); const data = ctx.getImageData(0, 0, 320, 200).data;
      const colors = new Set(); for (let i = 0; i < data.length; i += 16) colors.add(`${data[i]},${data[i + 1]},${data[i + 2]}`); return colors.size;
    });
    assert(pixels > 20, 'Actual town canvas contains original color detail before Play');
    await capture(desktop, '01-town-launch'); return { sampledColors: pixels, localRuntime: false };
  });
  await check('Play online opens a themed fullscreen dialog without moving the game surface', async () => {
    const before = await desktop.locator('#game').boundingBox(); await desktop.locator('#online').click();
    await desktop.waitForFunction(() => !!document.fullscreenElement && document.querySelector('#network').open);
    assert.equal(await desktop.locator('#network').getAttribute('data-view'), 'home');
    assert.equal(await desktop.getByRole('dialog', { name: 'Play online', exact: true }).count(), 1);
    const b = await bounds(desktop); for (const key of ['x', 'y', 'width', 'height']) assert(Math.abs(before[key] - b.game[key]) <= 1, 'Opening the online dialog preserves game ' + key);
    assert.equal((await snapshot(desktop)).hasRuntime, false);
    const headingPixels = await visibleHeading(desktop);
    const theme = await desktop.locator('#network').evaluate(element => ({ font: getComputedStyle(element).fontFamily, background: getComputedStyle(element).backgroundColor, border: getComputedStyle(element).borderStyle }));
    await capture(desktop, '02-desktop-online'); return { bounds: b, theme, headingPixels };
  });
  await check('Find games uses its own view; Back and Escape restore navigation and focus', async () => {
    await desktop.locator('#find-games').click(); await desktop.waitForFunction(() => document.querySelector('#network').dataset.view === 'games');
    assert(await desktop.locator('#public-browser').isVisible()); await visibleHeading(desktop);
    for (const selector of ['#players', '#create', '#join']) assert.equal(await desktop.locator(selector).isVisible(), false, selector + ' is outside the list view');
    await desktop.locator('#room-search').fill('Jones'); await reachable(desktop, '#refresh-games'); await bounds(desktop);
    await capture(desktop, '03-desktop-find-games'); await desktop.locator('#close-games').click();
    assert.equal(await desktop.locator('#network').getAttribute('data-view'), 'home'); assert(await desktop.locator('#create').isVisible());
    await desktop.keyboard.press('Escape'); await desktop.waitForFunction(() => !document.querySelector('#network').open && document.activeElement.id === 'online', undefined, { timeout: 2000 });
    assert.equal(await desktop.evaluate(() => document.activeElement.id), 'online'); assert.equal((await snapshot(desktop)).hasRuntime, false);
  });
  await check('The original menu adds online in its free header and resumes original controls after Escape', async () => {
    await originalMenu(desktop);
    const button = await desktop.locator('#menu-online').boundingBox(), game = await desktop.locator('#game').boundingBox();
    const logical = { x: (button.x - game.x) * 320 / game.width, y: (button.y - game.y) * 200 / game.height, width: button.width * 320 / game.width, height: button.height * 200 / game.height };
    for (const [key, expected] of Object.entries({ x: 105, y: 46, width: 110, height: 12 })) assert(Math.abs(logical[key] - expected) <= .6, 'Online header preserves original button space: ' + key);
    await capture(desktop, '04-original-menu-online'); await desktop.locator('#menu-online').click();
    assert(await desktop.locator('#network').isVisible()); assert.equal((await snapshot(desktop)).state.dialog, 'select1');
    await desktop.locator('#invitation').fill('keyboard input stays in this dialog'); await desktop.keyboard.press('ArrowDown');
    assert.equal((await snapshot(desktop)).state.dialog, 'select1'); await desktop.keyboard.press('Escape');
    await desktop.waitForFunction(() => !document.querySelector('#network').open && document.activeElement.id === 'game');
    const s = await snapshot(desktop); assert.equal(s.state.dialog, 'select1'); assert.equal(s.state.trace.at(-1), '233:select1.doit');
    return { logicalButton: logical, restoredFocus: 'game' };
  });
  await check('All three original menu buttons retain their original click positions and behavior', async () => {
    await clickGame(desktop, 165, 75); await wait(desktop, s => s.state?.dialog === 'select1b', 'original Play Game');
    assert.equal(await desktop.locator('#menu-online').isVisible(), false);
    const restore = await newPage(); await originalMenu(restore); await clickGame(restore, 165, 105);
    await restore.waitForFunction(() => (window.jonesNative.getFrame()?.hd?.ops || []).filter(op => op.kind === 'text').map(op => op.text).join(' ').includes('No previously saved'));
    assert.match(await originalText(restore), /Can't Restore|No previously saved/); await capture(restore, '05-original-restore-response');
    const demo = await newPage(); await originalMenu(demo); await clickGame(demo, 165, 135);
    await wait(demo, s => s.state?.dialog !== 'select1' && s.state?.currentPlayer === 'player1', 'original Demonstration starts');
    assert.equal(await demo.evaluate(() => { const rt = window.jonesNative.runtime; return rt.get(rt.global(302), 'playing'); }), 29, 'Original demonstration selects the original computer player');
    assert.equal(await demo.locator('#menu-online').isVisible(), false); await capture(demo, '06-original-demonstration');
    await restore.context().close(); await demo.context().close();
    return { originalButtons: ['Play Game', 'Restore Game', 'Demonstration'] };
  });
  await check('Creating a private waiting room uses the room view and does not start a local game', async () => {
    const host = await newPage(); await host.locator('#online').click(); await host.locator('#players').selectOption('2');
    assert.equal(await host.locator('#public-room').isChecked(), false); await host.locator('#create').click();
    await wait(host, s => s.room?.status === 'waiting' && s.room.seats.length === 1, 'real private waiting room');
    assert.equal(await host.locator('#network').getAttribute('data-view'), 'room'); assert.equal((await snapshot(host)).hasRuntime, false);
    assert(await host.locator('#invite-link').isVisible()); assert(await host.locator('#start-online').isDisabled());
    await reachable(host, '#copy-invite'); await reachable(host, '#leave-online'); await bounds(host); await visibleHeading(host); await capture(host, '07-private-room');
    const invitation = await host.locator('#invite-link').inputValue();
    const guest = await newPage(undefined, invitation);
    await guest.waitForFunction(() => document.querySelector('#network').open);
    assert.equal(await guest.evaluate(() => !!document.fullscreenElement), false, 'A loaded invitation opens without forcing fullscreen');
    await visibleHeading(guest); await guest.locator('#join').click();
    await wait(guest, s => s.room?.status === 'waiting' && s.room.seats.length === 2, 'invited guest joins the real room');
    await guest.waitForFunction(() => !!document.fullscreenElement && document.querySelector('#network').open);
    assert.equal(await guest.locator('#network').getAttribute('data-view'), 'room');
    assert.equal((await snapshot(guest)).hasRuntime, false); await visibleHeading(guest); await bounds(guest);
    await capture(guest, '07b-invited-guest-fullscreen'); await guest.context().close();
    host.once('dialog', dialog => dialog.accept()); await host.locator('#leave-online').click(); await wait(host, s => !s.room && !s.hasRuntime, 'leave private room'); await host.context().close();
  });
  const phone = await newPage({ width: 390, height: 844 });
  await check('Portrait phone layout keeps online controls reachable without horizontal overflow', async () => {
    await phone.locator('#online').click(); await phone.waitForFunction(() => document.querySelector('#network').open);
    const b = await bounds(phone); await visibleHeading(phone);
    for (const selector of ['#players', '#public-room', '#create', '#find-games', '#invitation', '#join', '#close-online']) await reachable(phone, selector);
    await phone.locator('#public-room').check(); await reachable(phone, '#room-name'); await phone.locator('#room-name').fill('Phone game');
    await bounds(phone); await capture(phone, '08-phone-online');
    await phone.locator('#find-games').click(); await reachable(phone, '#room-search'); await reachable(phone, '#close-games'); await bounds(phone); await capture(phone, '09-phone-games');
    await phone.locator('#close-games').click(); await phone.keyboard.press('Escape'); await phone.waitForFunction(() => !document.querySelector('#network').open && document.activeElement.id === 'online', undefined, { timeout: 2000 });
    assert.equal(await phone.evaluate(() => document.activeElement.id), 'online'); return b;
  });
  await check('Short landscape layout scrolls inside the dialog and returns to the original game', async () => {
    await phone.setViewportSize({ width: 844, height: 390 }); await phone.locator('#online').click();
    const b = await bounds(phone); await visibleHeading(phone); await phone.locator('#advanced-network summary').click();
    await phone.locator('#connection-mode').selectOption('server'); await reachable(phone, '#server');
    for (const selector of ['#players', '#create', '#invitation', '#join', '#close-online']) await reachable(phone, selector);
    await bounds(phone); await capture(phone, '10-landscape-online'); await phone.locator('#close-online').click();
    await phone.waitForFunction(() => !document.querySelector('#network').open && document.activeElement.id === 'online', undefined, { timeout: 2000 });
    assert.equal(await phone.evaluate(() => document.activeElement.id), 'online');
    await originalMenu(phone); await phone.locator('#menu-online').click(); await bounds(phone); await phone.keyboard.press('Escape');
    await phone.waitForFunction(() => !document.querySelector('#network').open && document.activeElement.id === 'game');
    await clickGame(phone, 165, 75); await wait(phone, s => s.state?.dialog === 'select1b', 'landscape original Play');
    return b;
  });
  await Promise.all(scriptReads); assert.deepEqual(report.errors, []); assert.deepEqual(report.resourceErrors, []); report.ok = true;
}
Promise.race([run(), new Promise((_, reject) => { deadline = setTimeout(() => reject(new Error('Lobby UI journey exceeded its 150-second budget')), 150000); })])
  .catch(async error => { report.failure = error.stack; console.error(error); process.exitCode = 1; for (let n = 0; n < pages.length; n++) if (!pages[n].isClosed()) try { await capture(pages[n], `failure-${n}`); } catch {} })
  .finally(async () => { clearTimeout(deadline); report.finished = new Date().toISOString(); await fs.mkdir(OUTPUT, { recursive: true }); await fs.writeFile(path.join(OUTPUT, 'report.json'), JSON.stringify(report, null, 2)); await browser?.close(); await fixture?.close(); });
