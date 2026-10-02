// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { encodeBytes } from './bytes.js';
import { planHdSilhouettes } from './hd-silhouette.js';
import type { GraphicsFrame, HdDrawOp, NativeAssetManifest, Rect } from './types.js';

const rect = (left: number, top: number, right: number, bottom: number): Rect => ({ left, top, right, bottom });
function fixture(raw = false) {
  const full = rect(0, 0, 12, 12), dest = rect(3, 3, 9, 9);
  const context = { dest: full, source: full, clip: full, port: { id: 1, left: 0, top: 0, rect: full,
    penX: 0, penY: 0, font: 0, color: 0, backColor: 0, penMode: 0, greyed: false } };
  const background: HdDrawOp = { ...context, id: 1, kind: 'pic', pic: 11, mirror: false, addTo: false };
  const body: HdDrawOp = { ...context, id: 2, kind: 'cel', view: 280, loop: 0, cel: 0,
    mirrored: false, priority: 8, dest, source: rect(0, 0, 6, 6) };
  const source = new Uint8Array(36).fill(255), owners = new Uint32Array(144).fill(raw ? 0 : 1), pixels = new Uint8Array(144).fill(1);
  for (let y = 1; y < 5; y++) for (let x = 2; x < 4; x++) {
    source[y * 6 + x] = 2; owners[(y + 3) * 12 + x + 3] = 2; pixels[(y + 3) * 12 + x + 3] = 2;
  }
  const assets = { views: { 280: { loops: [{ cels: [{ width: 6, height: 6, clear: 255,
    pixels: encodeBytes(source), mirrored: false, dx: 0, dy: 0, png: '' }] }] } } } as unknown as NativeAssetManifest;
  const frame: GraphicsFrame = { width: 12, height: 12, revision: 1, pixels: encodeBytes(pixels),
    palette: [[0, 0, 0], [200, 210, 220], [150, 80, 70], [40, 90, 10]], commands: [],
    cursor: { id: 0, visible: false, x: 0, y: 0 }, hd: { version: 1, owners: '', ops: [background, body] } };
  return { assets, frame, owners, pixels, background, body, source };
}
const candidates = new Set([2]);

test('generated alpha can replace the old silhouette and restore its backdrop without touching authoritative state', () => {
  const f = fixture(), before = JSON.stringify({ assets: f.assets, frame: f.frame }), oldOwners = f.owners.slice(), oldPixels = f.pixels.slice();
  const plan = planHdSilhouettes(f.assets, f.frame, f.owners, f.pixels, candidates, new Set([1]));
  assert.notEqual(plan.owners, f.owners);
  assert.equal(plan.backdrops.get(2)?.backgroundOp?.id, 1);
  assert.deepEqual(plan.backdrops.get(2)?.color, [200, 210, 220]);
  for (let y = 0; y < 12; y++) for (let x = 0; x < 12; x++)
    assert.equal(plan.owners[y * 12 + x], x >= 3 && x < 9 && y >= 3 && y < 9 ? 2 : 1);
  assert.deepEqual(f.owners, oldOwners); assert.deepEqual(f.pixels, oldPixels);
  assert.equal(JSON.stringify({ assets: f.assets, frame: f.frame }), before);
  assert.notEqual(plan.backdrops.get(2)?.backgroundOp, f.background, 'Backdrops are detached plans, not mutable frame references');
});

test('dialog, text, other generated actors, priority-hidden body pixels and unmatched raw fills stay in front', () => {
  const f = fixture();
  const text = { ...f.background, id: 3, kind: 'text', text: 'Original dialog', font: 0, color: 0, greyed: false, glyphs: [] } as HdDrawOp;
  const actor = { ...f.body, id: 4, dest: rect(3, 3, 5, 5) } as HdDrawOp;
  const dialog = { ...f.body, id: 5, view: 500, dest: rect(7, 3, 9, 5) } as HdDrawOp;
  f.frame.hd!.ops.push(text, actor, dialog);
  const keep = [[3 * 12 + 3, 3], [3 * 12 + 4, 4], [3 * 12 + 8, 5], [4 * 12 + 5, 1], [8 * 12 + 8, 0]];
  for (const [at, owner] of keep) { f.owners[at] = owner; f.pixels[at] = 3; }
  const plan = planHdSilhouettes(f.assets, f.frame, f.owners, f.pixels, new Set([2, 4]), new Set([1]));
  assert(plan.backdrops.has(2));
  for (const [at, owner] of keep) assert.equal(plan.owners[at], owner, `Foreground ${at} remains unchanged`);
  assert.equal(plan.owners[3 * 12 + 5], 2, 'Visible empty source area can expand');
});

test('nonuniform scenery expands only with an available image backdrop, never an invented flat color', () => {
  const f = fixture();
  for (let i = 0; i < f.pixels.length; i++) if (f.owners[i] === 1) f.pixels[i] = i % 2 ? 1 : 3;
  const drawable = planHdSilhouettes(f.assets, f.frame, f.owners, f.pixels, candidates, new Set([1]));
  assert.equal(drawable.backdrops.get(2)?.backgroundOp?.id, 1); assert.equal(drawable.backdrops.get(2)?.color, undefined);
  assert.equal(drawable.owners[3 * 12 + 3], 2);
  const unavailable = planHdSilhouettes(f.assets, f.frame, f.owners, f.pixels, candidates, new Set());
  assert.equal(unavailable.backdrops.size, 0); assert.deepEqual(unavailable.owners, f.owners);
});

test('uniform raw fills and unmapped flat panels support color fallback; insufficient or mixed samples do not', () => {
  for (const raw of [true, false]) {
    const f = fixture(raw), plan = planHdSilhouettes(f.assets, f.frame, f.owners, f.pixels, candidates, new Set());
    assert.equal(plan.backdrops.get(2)?.backgroundOp, undefined);
    assert.deepEqual(plan.backdrops.get(2)?.color, [200, 210, 220]); assert.equal(plan.owners[3 * 12 + 3], 2);
  }
  const mixed = fixture(true);
  for (let i = 0; i < mixed.pixels.length; i++) if (mixed.owners[i] === 0) mixed.pixels[i] = i % 2 ? 1 : 3;
  assert.equal(planHdSilhouettes(mixed.assets, mixed.frame, mixed.owners, mixed.pixels, candidates).backdrops.size, 0);
  const small = fixture(true); small.body.clip = rect(5, 3, 7, 5);
  assert.equal(planHdSilhouettes(small.assets, small.frame, small.owners, small.pixels, candidates).backdrops.size, 0);
});

test('the 95% fallback threshold preserves isolated foreground-colored raw pixels', () => {
  const f = fixture(true), first = 3 * 12 + 3, second = first + 1;
  f.pixels[first] = 3; // 27 of28 visible clear samples still have the background color.
  const safe = planHdSilhouettes(f.assets, f.frame, f.owners, f.pixels, candidates);
  assert.deepEqual(safe.backdrops.get(2)?.color, [200, 210, 220]);
  assert.equal(safe.owners[first], 0); assert.equal(safe.owners[second], 2);
  f.pixels[second] = 3; // 26 of28 is below95%: no trustworthy solid backdrop.
  const unsafe = planHdSilhouettes(f.assets, f.frame, f.owners, f.pixels, candidates);
  assert.equal(unsafe.backdrops.size, 0); assert.deepEqual(unsafe.owners, f.owners);
});

test('missing assets, invalid source data, invisible bodies and unknown candidates preserve the original ownership', () => {
  for (const change of [
    (f: ReturnType<typeof fixture>) => { f.assets.views = {}; },
    (f: ReturnType<typeof fixture>) => { f.assets.views[280].loops[0].cels[0].pixels = 'broken'; },
    (f: ReturnType<typeof fixture>) => { f.owners.fill(1); },
    (f: ReturnType<typeof fixture>) => { f.body.source.right = 7; },
  ]) {
    const f = fixture(); change(f);
    const plan = planHdSilhouettes(f.assets, f.frame, f.owners, f.pixels, new Set([2, 999]));
    assert.equal(plan.backdrops.size, 0); assert.deepEqual(plan.owners, f.owners);
  }
});

test('expansion respects the original clip and exported mirroring without applying a second mirror', () => {
  const f = fixture(); f.body.clip = rect(4, 4, 9, 8); f.body.mirrored = true;
  const plan = planHdSilhouettes(f.assets, f.frame, f.owners, f.pixels, candidates);
  assert.equal(plan.owners[3 * 12 + 4], 1); assert.equal(plan.owners[4 * 12 + 3], 1);
  assert.equal(plan.owners[4 * 12 + 4], 2); assert.equal(plan.owners[8 * 12 + 4], 1);
  // An asymmetric source-clear shape makes accidental double mirroring visible.
  f.source.fill(2); for (let y = 0; y < 6; y++) f.source[y * 6] = 255;
  f.assets.views[280].loops[0].cels[0].pixels = encodeBytes(f.source);
  f.body.clip = rect(0, 0, 12, 12); f.owners.fill(1);
  for (let y = 3; y < 9; y++) for (let x = 4; x < 9; x++) f.owners[y * 12 + x] = 2;
  const mirrored = planHdSilhouettes(f.assets, f.frame, f.owners, f.pixels, candidates);
  assert(mirrored.backdrops.has(2)); assert.equal(mirrored.owners[3 * 12 + 3], 2);
});

test('source offsets address the original clear bitmap independently of destination placement', () => {
  const f = fixture(), padded = new Uint8Array(80).fill(2);
  for (let y = 0; y < 6; y++) padded.set(f.source.subarray(y * 6, y * 6 + 6), (y + 1) * 10 + 2);
  Object.assign(f.assets.views[280].loops[0].cels[0], { width: 10, height: 8, pixels: encodeBytes(padded) });
  f.body.source = rect(2, 1, 8, 7);
  const plan = planHdSilhouettes(f.assets, f.frame, f.owners, f.pixels, candidates);
  assert(plan.backdrops.has(2));
  for (let y = 3; y < 9; y++) for (let x = 3; x < 9; x++) assert.equal(plan.owners[y * 12 + x], 2);
});
