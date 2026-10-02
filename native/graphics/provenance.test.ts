// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { GraphicsState } from './GraphicsState.js';
import { decodeBytes, encodeBytes } from './bytes.js';
import { decodeOwners, encodeOwners } from './provenance.js';
import type { GraphicsFrame, NativeAssetManifest, Rect, RGB } from './types.js';

const rect = (left: number, top: number, right: number, bottom: number): Rect => ({ left, top, right, bottom });
const palette = Array.from({ length: 256 }, (_, i) => [i, i, i] as RGB);
const pixels = new Uint8Array(64000).fill(3), priorities = new Uint8Array(64000), controls = new Uint8Array(64000);
const assets: NativeAssetManifest = {
  schema: 1, width: 320, height: 200, defaultPortTop: 0, codePage: Array.from({ length: 256 }, (_, i) => String.fromCharCode(i)), palette, palettes: {},
  pics: { 1: { id: 1, width: 320, height: 200, pixels: encodeBytes(pixels), priority: encodeBytes(priorities), control: encodeBytes(controls), palette, png: 'pic1.png' } },
  views: { 2: { id: 2, paletteUpdates: [], loops: [{ cels: [{ width: 3, height: 2, dx: 0, dy: 0, clear: 255, mirrored: true, png: 'view2.png', pixels: encodeBytes(new Uint8Array([4, 255, 5, 6, 7, 255])) }] }] } },
  fonts: { 0: { id: 0, lineHeight: 3, charCount: 256, png: 'font.png', chars: Array.from({ length: 256 }, (_, code) => ({ code, width: 2, height: 2, advance: 2, bits: encodeBytes(new Uint8Array(code === 32 ? [0, 0, 0, 0] : [1, 0, 1, 1])), atlasX: 0, atlasY: 0 })) } },
  cursors: {}, texts: {},
};
function scene(g: GraphicsState) {
  const frame = g.snapshot(), owners = decodeOwners(frame.hd!.owners), ops = new Map(frame.hd!.ops.map(op => [op.id, op]));
  for (const id of owners) if (id) assert.ok(ops.has(id), 'Every live owner must resolve from this self-contained frame');
  for (const id of ops.keys()) assert.ok(owners.includes(id), 'A network frame must not carry historical or hidden operations');
  return { frame, owners, ops, owner: (x: number, y: number) => owners[y * 320 + x] };
}
function visible(frame: GraphicsFrame) { return { pixels: frame.pixels, hd: frame.hd }; }

test('ownership RLE is lossless, endian-stable and rejects malformed or oversized masks', () => {
  const owners = new Uint32Array([1, 1, 0, 0xffffffff, 0xffffffff]);
  assert.deepEqual(decodeOwners(encodeOwners(owners), 5), owners);
  assert.deepEqual([...decodeBytes(encodeOwners(new Uint32Array([0x01020304])))], [1, 0, 0, 0, 4, 3, 2, 1]);
  assert.equal(encodeOwners(new Uint32Array()), '');
  assert.deepEqual(decodeOwners('', 0), new Uint32Array());
  assert.throws(() => decodeOwners('', 1), /Incomplete/);
  assert.throws(() => decodeOwners(encodeBytes(new Uint8Array(8)), 1), /run length/);
  assert.throws(() => decodeOwners(encodeOwners(new Uint32Array(2)), 1), /run length/);
  assert.throws(() => decodeOwners('!!!!', 1), /base64/);
  assert.throws(() => decodeOwners('A'.repeat(33), 1), /ownership data/);
});

test('HD source coordinates preserve original transparency, port clipping and priority pixels', () => {
  const g = new GraphicsState(assets); g.drawPic(1);
  const original = g.visual.slice();
  g.setPicPort(rect(0, 0, 2, 2), 20, 10);
  g.fillRect(rect(0, 1, 1, 2), -1, 9, 3);
  g.drawCel(2, 999, 999, 0, 0, 5);
  original[20 * 320 + 10] = 4; original[21 * 320 + 11] = 7;
  assert.deepEqual(g.visual, original, 'Provenance must not alter a single original raster pixel');
  const s = scene(g), op = s.ops.get(s.owner(10, 20))!;
  assert.equal(op.kind, 'cel');
  if (op.kind !== 'cel') return;
  assert.equal(op.loop, 0); assert.equal(op.cel, 0); assert.equal(op.mirrored, true);
  assert.deepEqual(op.dest, rect(10, 20, 13, 22)); assert.deepEqual(op.source, rect(0, 0, 3, 2));
  assert.deepEqual(op.clip, rect(10, 20, 12, 22));
  assert.equal(s.ops.get(s.owner(11, 20))!.kind, 'pic', 'Transparent source preserves prior ownership');
  assert.equal(s.ops.get(s.owner(10, 21))!.kind, 'pic', 'Priority-occluded source preserves prior ownership');
  assert.equal(s.ops.get(s.owner(12, 20))!.kind, 'pic', 'Outside-port source preserves prior ownership');
  assert.equal(g.priority[21 * 320 + 10], 9); assert.equal(g.control[21 * 320 + 10], 3);
});

test('presentation retains animated owners while saved regions restore the actual offscreen background', () => {
  const g = new GraphicsState(assets); g.drawPic(1);
  g.beginAnimation(); g.drawCel(2, 0, 0, 10, 20); g.endAnimation();
  const before = scene(g);
  assert.equal(before.ops.get(before.owner(10, 20))!.kind, 'cel');
  assert.equal(g.visual[20 * 320 + 10], 3); assert.equal(g.presented[20 * 320 + 10], 4);
  const bits = g.saveBits(rect(9, 19, 15, 24), 1);
  g.fillRect(rect(9, 19, 15, 24), 255); g.restoreBits(bits);
  const after = scene(g);
  assert.equal(after.ops.get(after.owner(10, 20))!.kind, 'pic');
  assert.equal(g.presented[20 * 320 + 10], 3);
  g.beginAnimation(); g.drawCel(2, 0, 0, 30, 40); g.endAnimation();
  g.showRect(rect(30, 40, 33, 42));
  assert.equal(scene(g).ops.get(scene(g).owner(30, 40))!.kind, 'pic');
});

test('nested dialogs, their text and hidden background survive save/load and close in order', () => {
  const g = new GraphicsState(assets); g.drawPic(1);
  const before = visible(g.snapshot());
  const first = g.newWindow(rect(20, 30, 100, 80)); g.drawText('First', 2, 2);
  const firstScene = visible(g.snapshot());
  const second = g.newWindow(rect(30, 40, 90, 70)); g.drawText('Second', 2, 2); g.drawCel(2, 0, 0, 12, 12);
  const lastScene = visible(g.snapshot());
  const fresh = new GraphicsState(assets); fresh.loadState(JSON.parse(JSON.stringify(g.saveState())));
  assert.deepEqual(visible(fresh.snapshot()), lastScene, 'Reconnect/save uses a complete scene, never earlier diagnostic commands');
  fresh.disposeWindow(second); assert.deepEqual(visible(fresh.snapshot()), firstScene);
  fresh.disposeWindow(first); assert.deepEqual(visible(fresh.snapshot()), before);
});

test('flat text cells own their backgrounds for new fonts without modifying the original glyph raster', () => {
  const g = new GraphicsState(assets); g.drawPic(1); g.drawText('A ', 10, 20, { color: 0 });
  const s = scene(g), op = s.ops.get(s.owner(11, 22))!;
  assert.equal(op.kind, 'text');
  if (op.kind !== 'text') return;
  assert.deepEqual(op.glyphs.map(({ char, x, y, width, height, background }) => ({ char, x, y, width, height, background })), [
    { char: 'A', x: 10, y: 20, width: 2, height: 3, background: 3 },
    { char: ' ', x: 12, y: 20, width: 2, height: 3, background: 3 },
  ]);
  const expected = pixels.slice(); for (const [x, y] of [[10, 20], [10, 21], [11, 21]]) expected[y * 320 + x] = 0;
  assert.deepEqual(g.presented, expected, 'The untouched glyph background must remain byte-identical');
  assert.equal(s.owner(12, 22), op.id, 'Even a blank space has a safe flat HD cell');
});

test('text above nonuniform or separately presented pixels falls back without erasing surrounding art', () => {
  for (const animated of [false, true]) {
    const g = new GraphicsState(assets); g.drawPic(1);
    if (animated) g.beginAnimation();
    g.drawCel(2, 0, 0, 10, 20);
    if (animated) g.endAnimation();
    g.drawText('A', 10, 20, { color: 0 });
    const s = scene(g);
    assert.equal(s.owner(10, 20), 0, 'Original ink must not be painted over by the underlying HD source');
    assert.equal(s.ops.get(s.owner(12, 20))!.kind, 'cel', 'Adjacent original actor art remains owned');
    assert.equal(s.ops.get(s.owner(11, 22))!.kind, 'pic', 'Nonuniform glyph background is not claimed');
    assert.equal(g.presented[20 * 320 + 12], 5);
  }
});

test('unsupported writes clear only visual ownership, while control and priority updates preserve it', () => {
  const g = new GraphicsState(assets); g.drawPic(1);
  g.fillRect(rect(5, 5, 7, 7), -1, 8, 4);
  assert.notEqual(scene(g).owner(5, 5), 0);
  g.fillRect(rect(5, 5, 6, 6), 7); g.drawLine(8, 8, 9, 8, 9); g.invertRect(rect(12, 12, 14, 14), 3, 4);
  const s = scene(g);
  assert.equal(s.owner(5, 5), 0); assert.equal(s.owner(8, 8), 0); assert.equal(s.owner(13, 13), 0);
  assert.notEqual(s.owner(6, 6), 0); assert.notEqual(s.owner(7, 8), 0);
});

test('operation history is bounded by live scenes and saved regions, including without frame drains', () => {
  const g = new GraphicsState(assets); g.drawPic(1);
  const bits = g.saveBits(rect(10, 20, 20, 30));
  for (let i = 0; i < 600; i++) { g.fillRect(rect(0, 0, 320, 200), 255); g.drawCel(2, 0, 0, i % 300, Math.floor(i / 300)); }
  assert.ok((g as any).hdOps.size <= 130, 'Dead draws must be pruned even before a snapshot');
  assert.equal(scene(g).ops.size, 1, 'Only the last visible cel belongs in the transmitted frame');
  assert.equal(g.saveState().hd!.ops.length, 2, 'Saved offscreen picture remains available for restoration');
  g.restoreBits(bits); assert.equal(scene(g).ops.get(scene(g).owner(10, 20))!.kind, 'pic');
  g.fillRect(rect(0, 0, 320, 200), 255);
  assert.deepEqual(g.saveState().hd!.ops, [], 'Released saved bits must not retain old operations');
});

test('old saves and malformed optional provenance load with safe raster fallback', () => {
  const original = new GraphicsState(assets); original.drawPic(1);
  const bits = original.saveBits(rect(5, 5, 10, 10)); original.drawCel(2, 0, 0, 10, 20);
  for (const malformed of [false, true]) {
    const save = original.saveState();
    if (malformed) save.hd!.ops = []; else delete save.hd;
    const fresh = new GraphicsState(assets); fresh.loadState(save);
    assert.equal(fresh.snapshot().pixels, original.snapshot().pixels);
    assert.equal(scene(fresh).ops.size, 0); assert.ok(scene(fresh).owners.every(id => id === 0));
    fresh.restoreBits(bits); assert.equal(scene(fresh).owner(5, 5), 0);
    fresh.drawCel(2, 0, 0, 30, 40); assert.equal(scene(fresh).ops.size, 1, 'Future real drawing repopulates provenance normally');
  }
});

test('presented actor ownership, clipping and palette fades survive serialization without shared mutable snapshots', () => {
  const g = new GraphicsState(assets); g.drawPic(1);
  g.beginAnimation(); g.drawCel(2, 0, 0, 30, 40); g.endAnimation(); g.setIntensity(3, 8, 25);
  const frame = g.snapshot(), fresh = new GraphicsState(assets); fresh.loadState(g.saveState());
  assert.deepEqual(visible(fresh.snapshot()), visible(frame));
  frame.hd!.intensity![3] = 99; frame.hd!.ops[0].dest.left = 999;
  assert.equal(g.snapshot().hd!.intensity![3], 25); assert.notEqual(g.snapshot().hd!.ops[0].dest.left, 999);
  assert.equal(fresh.visual[40 * 320 + 30], 3); assert.equal(fresh.presented[40 * 320 + 30], 4);
});
