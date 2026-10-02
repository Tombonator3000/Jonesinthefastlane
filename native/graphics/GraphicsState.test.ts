// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { GraphicsState } from './GraphicsState.js';
import { decodeBytes, encodeBytes } from './bytes.js';
import type { NativeAssetManifest } from './types.js';
import { Runtime } from '../runtime/runtime.js';
import { menuModel, getMenuAttribute, setMenuAttribute, selectMenu } from './menus.js';

const assets: NativeAssetManifest = JSON.parse(readFileSync(new URL('../public/assets/manifest.json', import.meta.url), 'utf8'));
const rect = (left: number, top: number, right: number, bottom: number) => ({ left, top, right, bottom });
const at = (g: GraphicsState, x: number, y: number) => g.visual[y * 320 + x];
function runtime() {
  const graphics = new GraphicsState(assets), rt = new Runtime({ graphics, manifest: assets });
  rt.defineScript(0, { name: 'graphics-test', locals: [], exports: {}, procedures: {}, objects: [
    { name: 'event', properties: { type: 4, message: 27, modifiers: 0, claimed: 0, x: 0, y: 0 }, methods: {} },
    { name: 'piggyBank', properties: { view: 704, loop: 6 }, methods: {} },
    { name: 'edit', properties: { type: 3, text: rt.ref('array', new Array(40).fill(0)), cursor: 0, state: 9, max: 12, font: 0, nsLeft: 20, nsTop: 20, nsRight: 100, nsBottom: 28 }, methods: {} }
  ] });
  rt.menus = [[' Game ', 'Save Game`#5:Set Save Directory `^Y:Restore Game`#7:--!:Quit `^Q'], [' Status ', 'Statistics`#4:Goals`#6']];
  return rt;
}
async function tick(rt: Runtime) { rt.tick(); await new Promise(resolve => setImmediate(resolve)); }

test('every original PIC exports the exact indexed visual, priority and control planes', () => {
  const g = new GraphicsState(assets);
  for (const pic of Object.values(assets.pics)) {
    g.drawPic(pic.id);
    assert.deepEqual(g.visual, decodeBytes(pic.pixels), `picture ${pic.id}`);
    assert.deepEqual(g.presented, g.visual);
    assert.deepEqual(g.priority, decodeBytes(pic.priority));
    assert.deepEqual(g.control, decodeBytes(pic.control));
  }
});

test('original glyph masks, width and port clipping survive native drawing', () => {
  const g = new GraphicsState(assets), font = assets.fonts[0], glyph = font.chars[65];
  g.fillRect(rect(0, 0, 320, 200), 255);
  g.drawText('A', 30, 40, { font: 0, color: 0 });
  const bits = decodeBytes(glyph.bits);
  for (let y = 0; y < glyph.height; y++) for (let x = 0; x < glyph.width; x++)
    assert.equal(at(g, x + 30, y + 40), bits[y * glyph.width + x] ? 0 : 255);
  assert.equal(g.measureText('AAA', 0, -1).width, glyph.width * 3);
  assert.equal(g.measureText('', 0).height, 0);
  g.setPicPort(rect(0, 0, 8, 8), 100, 120);
  g.fillRect(rect(-2, -2, 12, 12), 5, 3, 7);
  assert.equal(at(g, 120, 100), 5); assert.equal(at(g, 127, 107), 5);
  assert.equal(at(g, 128, 107), 255); assert.equal(at(g, 119, 100), 255);
  assert.deepEqual(g.localToGlobal(2, 3), { x: 122, y: 103 });
  assert.deepEqual(g.globalToLocal(122, 103), { x: 2, y: 3 });
  assert.equal(g.onControl(rect(0, 0, 8, 8)), 1 << 7);
});

test('saved regions include requested planes and retain pixels outside their rectangle', () => {
  const g = new GraphicsState(assets);
  g.fillRect(rect(0, 0, 320, 200), 2, 3, 4);
  const saved = g.saveBits(rect(20, 30, 25, 35), 7);
  g.fillRect(rect(0, 0, 320, 200), 10, 11, 12);
  g.restoreBits(saved);
  assert.equal(at(g, 20, 30), 2); assert.equal(at(g, 25, 35), 10);
  assert.equal(g.priority[30 * 320 + 20], 3); assert.equal(g.control[30 * 320 + 20], 4);
  assert.equal(g.presented[30 * 320 + 20], 2);
  assert.throws(() => g.restoreBits(saved), /Unknown saved bitmap/);
});

test('animated actors remain visible while background restoration preserves a later dialog', () => {
  const g = new GraphicsState(assets);
  g.fillRect(rect(0, 0, 320, 200), 3);
  g.beginAnimation(); g.fillRect(rect(10, 10, 20, 20), 8); g.endAnimation();
  assert.equal(at(g, 12, 12), 3); assert.equal(g.presented[12 * 320 + 12], 8);
  g.fillRect(rect(11, 11, 14, 14), 255);
  g.beginAnimation(); g.fillRect(rect(25, 25, 30, 30), 8); g.endAnimation();
  assert.equal(g.presented[12 * 320 + 12], 255);
  assert.equal(g.presented[10 * 320 + 10], 3);
  assert.equal(g.presented[26 * 320 + 26], 8);
});

test('StopUpdate actors become static and do not repaint later text until requested', async () => {
  const rt = runtime(), g = rt.graphics as GraphicsState, actor = rt.object(0, 'piggyBank');
  for (const [key, value] of Object.entries({ view: 704, loop: 0, cel: 0, x: 50, y: 50, z: 0, priority: 14, signal: 0x4111 })) rt.set(actor, key, value);
  const list = { first: { value: actor, next: null } };
  g.fillRect(rect(0, 0, 320, 200), 3);
  await rt.kernel('Animate', [list, 0]);
  assert.ok(rt.get(actor, 'signal') & 4); assert.ok(rt.get(actor, 'underBits'));
  assert.notEqual(encodeBytes(g.visual), encodeBytes(new Uint8Array(64000).fill(3)));
  g.fillRect(rect(46, 43, 54, 51), 255);
  await rt.kernel('Animate', [list, 0]);
  assert.equal(at(g, 49, 47), 255);
  rt.set(actor, 'signal', rt.get(actor, 'signal') | 8);
  await rt.kernel('Animate', [list, 0]);
  assert.equal(at(g, 49, 47), 3); assert.ok(rt.get(actor, 'signal') & 128);
});

test('graphics serialization preserves separate displayed actors, windows and saved regions', () => {
  const g = new GraphicsState(assets);
  g.drawPic(11);
  const old = g.snapshot().pixels;
  const window = g.newWindow(rect(30, 40, 120, 100), 'Jones', 4);
  g.drawText('Native', 3, 3, { font: 0 });
  g.setPort(2); g.beginAnimation(); g.fillRect(rect(140, 80, 150, 90), 255); g.endAnimation();
  const saved = JSON.parse(JSON.stringify(g.saveState()));
  const fresh = new GraphicsState(assets); fresh.loadState(saved);
  assert.equal(fresh.snapshot().pixels, g.snapshot().pixels);
  assert.deepEqual(fresh.palette, g.palette);
  assert.deepEqual(fresh.visual, g.visual);
  fresh.disposeWindow(window);
  assert.equal(encodeBytes(fresh.visual), old);
});

test('disposing a transparent original bubble preserves the script-restored action labels', () => {
  const g = new GraphicsState(assets);
  g.fillRect(rect(0, 0, 320, 200), 255);
  g.drawText('Deposit $100', 97, 35, { font: 10 });
  const before = g.snapshot().pixels, bits = g.saveBits(rect(80, 20, 180, 80), 3);
  g.fillRect(rect(80, 20, 180, 80), 119, 15);
  const window = g.newWindow(rect(80, 20, 180, 80), '', 129, 15, 26, 119);
  g.drawText('Welcome', 4, 4, { font: 1 });
  g.setPort(1); g.restoreBits(bits); g.disposeWindow(window);
  assert.equal(g.snapshot().pixels, before);
});

test('view queries clip indices exactly as SCI, including Jones bank loop 6', async () => {
  const rt = runtime(), g = rt.graphics as GraphicsState;
  assert.equal(g.getCelCount(704, 6), 5);
  assert.equal(g.getCelCount(704, -1), 1);
  assert.equal(g.getCel(704, 6, 999), assets.views[704].loops[1].cels[4]);
  assert.equal(await rt.kernel('NumCels', [rt.object(0, 'piggyBank')]), 5);
});

test('palette intensity ranges are exclusive and serialized flags determine nearest color', () => {
  const g = new GraphicsState(assets);
  g.paletteFlags.fill(0); g.setPalette([[10, 20, 30], [10, 20, 30]], 10);
  g.setPaletteFlags(10, 11, 1, true);
  assert.equal(g.findColor(10, 20, 30), 10);
  g.setPaletteFlags(11, 12, 1, true);
  assert.equal(g.findColor(10, 20, 30), 11);
  g.setIntensity(10, 11, 50);
  assert.deepEqual(g.effectivePalette()[10], [5, 10, 15]);
  assert.deepEqual(g.effectivePalette()[11], [10, 20, 30]);
  const fresh = new GraphicsState(assets); fresh.loadState(g.saveState());
  assert.equal(fresh.findColor(10, 20, 30), 11);
});

test('Jones town retains the intro grey ramp and SCI black/white reserved colors', () => {
  const g = new GraphicsState(assets);
  g.drawPic(0);
  assert.deepEqual(g.palette[6], [187, 187, 187]);
  g.drawPic(11);
  assert.deepEqual(g.palette[6], [187, 187, 187]);
  assert.deepEqual(g.palette[0], [0, 0, 0]);
  assert.deepEqual(g.palette[255], [255, 255, 255]);
});

test('palette allocation retains the pinned original-runtime exact-match flag behavior', () => {
  const manifest = { ...assets, views: { ...assets.views, 9999: { id: 9999, paletteUpdates: [[10, 30, 40, 50, 1]], loops: [{ cels: [{ width: 1, height: 1, dx: 0, dy: 0, clear: 255, mirrored: false, png: '', pixels: encodeBytes(new Uint8Array([10])) }] }] } } };
  const g = new GraphicsState(manifest);
  g.paletteFlags.fill(0); for (const index of [0, 10, 20, 255]) g.paletteFlags[index] = 1;
  g.setPalette([[1, 2, 3]], 10); g.setPalette([[30, 40, 50]], 20);
  g.drawCel(9999, 0, 0, 0, 0);
  // The reference allocates the first free slot instead of reusing slot 20.
  assert.equal(g.visual[0], 1); assert.deepEqual(g.palette[1], [30, 40, 50]);
});

test('alternating views within one SCI tick reuse their palette mappings', () => {
  const make = (id: number, index: number, color: number[]) => ({ id, paletteUpdates: [[index, ...color, 1]], loops: [{ cels: [{ width: 1, height: 1, dx: 0, dy: 0, clear: 255, mirrored: false, png: '', pixels: encodeBytes(new Uint8Array([index])) }] }] });
  const g = new GraphicsState({ ...assets, views: { ...assets.views, 9998: make(9998, 10, [30, 40, 50]), 9999: make(9999, 11, [60, 70, 80]) } });
  g.paletteFlags.fill(0); for (const index of [0, 10, 11, 255]) g.paletteFlags[index] = 1;
  g.setTick(100);
  g.drawCel(9998, 0, 0, 0, 0); g.drawCel(9999, 0, 0, 1, 0);
  const used = g.paletteFlags.slice();
  for (let i = 0; i < 10; i++) { g.drawCel(9998, 0, 0, 0, 0); g.drawCel(9999, 0, 0, 1, 0); }
  assert.deepEqual(g.paletteFlags, used);
  assert.equal(g.visual[0], 1); assert.equal(g.visual[1], 2);
  const snapshot = g.saveState(); g.loadState(snapshot); g.setTick(110);
  g.drawCel(9998, 0, 0, 0, 0); g.drawCel(9999, 0, 0, 1, 0);
  assert.deepEqual(g.paletteFlags, used, 'restoring a menu/save must not reallocate cached view colors');
});

test('native menus use original shortcut strings, disabled state and mutable labels', async () => {
  const rt = runtime(), event = rt.object(0, 'event');
  const menus = menuModel(rt);
  assert.equal(menus[0].items[0].key, 0x3f00);
  assert.equal(menus[0].items[1].key, 121);
  assert.equal(menus[0].items[1].modifiers, 4);
  assert.equal(menus[0].items[3].separator, true);
  rt.set(event, 'message', 0x3f00);
  assert.equal(await selectMenu(rt, event), 257);
  rt.set(event, 'claimed', 0); setMenuAttribute(rt, 257, 112, 0);
  assert.equal(await selectMenu(rt, event), 0);
  rt.set(event, 'message', 25); rt.set(event, 'modifiers', 4);
  assert.equal(await selectMenu(rt, event), 258);
  setMenuAttribute(rt, 258, 110, 'Set Save Directory');
  assert.equal(getMenuAttribute(rt, 258, 110), 'Set Save Directory');
  assert.equal(getMenuAttribute(rt, 257, 112), 0);
});

test('keyboard menu restores displayed scene and selects original item ID', async () => {
  const rt = runtime(), g = rt.graphics as GraphicsState;
  g.drawPic(1); const before = g.snapshot().pixels;
  const selected = selectMenu(rt, rt.object(0, 'event'));
  assert.notEqual(g.snapshot().pixels, before);
  rt.input({ type: 'key', action: 'down', key: 'ArrowDown' }); await tick(rt);
  rt.input({ type: 'key', action: 'down', key: 'Enter' }); await tick(rt);
  assert.equal(await selected, 258);
  assert.equal(g.snapshot().pixels, before);
});

test('mouse menu drag uses original font rows and restores scene after selection', async () => {
  const rt = runtime(), g = rt.graphics as GraphicsState, event = rt.object(0, 'event');
  g.drawPic(11); const before = g.snapshot().pixels;
  rt.set(event, 'type', 1); rt.set(event, 'x', 14); rt.set(event, 'y', 5);
  rt.pointer = { x: 14, y: 5, down: true };
  const selected = selectMenu(rt, event);
  const y = 10 + assets.fonts[0].lineHeight * 2 + 2;
  rt.input({ type: 'pointer', action: 'move', x: 30, y }); await tick(rt);
  rt.input({ type: 'pointer', action: 'up', x: 30, y }); await tick(rt);
  assert.equal(await selected, 259);
  assert.equal(g.snapshot().pixels, before);
});

test('original editable line handles insertion, deletion, cursor movement, clear and blink', async () => {
  const rt = runtime(), g = rt.graphics as GraphicsState, control = rt.object(0, 'edit'), event = rt.object(0, 'event');
  const reference = rt.get(control, 'text'); rt.writeText(reference, 'Jones');
  rt.set(control, 'cursor', 5); await rt.kernel('DrawControl', [control]);
  const key = async (message: number, modifiers = 0) => { rt.set(event, 'message', message); rt.set(event, 'modifiers', modifiers); await rt.kernel('EditControl', [control, event]); };
  await key(0x4700); await key(65);
  assert.equal(rt.text(reference), 'AJones'); assert.equal(rt.get(control, 'cursor'), 1);
  await key(0x5300); assert.equal(rt.text(reference), 'Aones');
  await key(0x4f00); await key(8); assert.equal(rt.text(reference), 'Aone');
  await key(99, 4); assert.equal(rt.text(reference), ''); assert.equal(rt.get(control, 'cursor'), 0);
  const before = g.snapshot().pixels;
  rt.ticks += 30; await rt.kernel('EditControl', [control, 0]);
  assert.notEqual(g.snapshot().pixels, before);
  rt.ticks += 30; await rt.kernel('EditControl', [control, 0]);
  assert.equal(g.snapshot().pixels, before);
});

test('OnControl supports both original optional-mask rectangle signatures', async () => {
  const rt = runtime(); rt.graphics.fillRect(rect(10, 20, 15, 25), -1, 9, 4);
  assert.equal(await rt.kernel('OnControl', [10, 20, 15, 25]), 1 << 4);
  assert.equal(await rt.kernel('OnControl', [2, 10, 20, 15, 25]), 1 << 9);
  assert.equal(await rt.kernel('OnControl', [10, 20]), 1 << 4);
});
