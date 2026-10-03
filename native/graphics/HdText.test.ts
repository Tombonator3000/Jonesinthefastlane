// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { decodeBytes, encodeBytes } from './bytes.js';
import { decodeOwners } from './provenance.js';
import { GraphicsState } from './GraphicsState.js';
import { createHdTextCanvas, fitHdTextInk, getHdGlyphInkBounds, getHdTextFont, getHdTextLayout,
  hdTextFontsReady, loadHdTextFonts, type HdTextOp } from './HdText.js';
import type { NativeAssetManifest } from './types.js';
const assets = JSON.parse(readFileSync(new URL('../public/assets/manifest.json', import.meta.url), 'utf8')) as NativeAssetManifest;

function opFor(text = 'g., H', font = 1, x = 20, y = 30): HdTextOp {
  let left = x;
  const f = assets.fonts[font], glyphs = [...text].map(char => {
    const code = char.charCodeAt(0), g = f.chars[code], result = { char, code, x: left, y, width: g.advance, height: f.lineHeight, advance: g.advance, background: 255 };
    left += g.advance; return result;
  });
  const clip = { left: 0, top: 0, right: 320, bottom: 200 };
  return { id: 7, kind: 'text', text, font, color: 0, greyed: false, glyphs,
    clip, dest: { left: x, top: y, right: left, bottom: y + f.lineHeight }, source: { left: 0, top: 0, right: left - x, bottom: f.lineHeight },
    port: { id: 2, left: 0, top: 0, rect: { ...clip }, penX: 0, penY: 0, font, color: 0, backColor: 255, penMode: 0, greyed: false } };
}

test('HD text matches inspected original serif and block font families, never substitutes an unknown font', () => {
  assert.deepEqual(getHdTextFont(1), { family: 'Jones HD Serif', weight: 400 });
  assert.deepEqual(getHdTextFont(8), { family: 'Jones HD Serif', weight: 700 });
  for (const id of [0, 3, 4, 10, 14, 999]) assert.deepEqual(getHdTextFont(id), { family: 'Jones HD Mono', weight: 700 });
  assert.equal(getHdTextFont(9), null);
});

test('per-character layout keeps punctuation at its original baseline, descenders and exact advances', () => {
  const op = opFor(), before = JSON.stringify(op), layout = getHdTextLayout(op, assets)!;
  assert.equal(layout.glyphs.map(g => g.char).join(''), 'g., H');
  assert.deepEqual(getHdGlyphInkBounds(assets.fonts[1].chars[46]), { left: 1, top: 7, right: 2, bottom: 8 });
  assert.deepEqual(layout.glyphs[1].ink, { left: 7, top: 7, right: 8, bottom: 8 });
  assert.deepEqual(layout.glyphs[2].ink, { left: 11, top: 6, right: 13, bottom: 9 });
  assert.equal(layout.glyphs[0].ink!.bottom, 10, 'Descender retains its lower original ink bound');
  assert.equal(layout.glyphs[3].ink, null, 'Space keeps its advance without fabricated ink');
  assert.deepEqual(layout.glyphs.map(g => g.cell.left), op.glyphs.map(g => g.x - op.dest.left));
  assert.equal(layout.width, op.dest.right - op.dest.left);
  assert.equal(JSON.stringify(op), before);
  const fit = fitHdTextInk({ actualBoundingBoxLeft: -3, actualBoundingBoxRight: 10, actualBoundingBoxAscent: -2, actualBoundingBoxDescent: 12 }, layout.glyphs[1].ink!);
  assert.deepEqual(fit, { scaleX: 1 / 7, scaleY: .1, baselineX: -3, baselineY: -2 }, 'Fit uses actual outline ink, including signed bearings');
  assert.equal(fitHdTextInk({ actualBoundingBoxLeft: 0, actualBoundingBoxRight: 0, actualBoundingBoxAscent: 0, actualBoundingBoxDescent: 0 }, layout.glyphs[1].ink!), null);
});

test('nonuniform cells and original control-code icons remain transparent; clipping never causes reflow', () => {
  const op = opFor('A\x01B', 0, -5, 10); op.glyphs[2].background = null;
  const layout = getHdTextLayout(op, assets)!;
  assert.deepEqual(layout.glyphs.map(g => g.char), ['A']);
  assert.equal(layout.glyphs[0].cell.left, 0);
  assert.equal(layout.clip.left, 5, 'Canvas preserves original destination while clipping offscreen ink');
  op.glyphs[0].background = null;
  assert.equal(getHdTextLayout(op, assets), null, 'All unsafe cells use the original raster');
});

test('disabled stipple phase follows glyph-local x and original port-local y', () => {
  const op = opFor('AA', 0, 101, 33); op.greyed = true; op.port.top = 10;
  const a = getHdTextLayout(op, assets)!;
  assert.deepEqual(a.glyphs.map(g => g.stipplePhase), [1, 1], 'Different absolute x must not shift original stipple phase');
  op.port.top = 11;
  assert.deepEqual(getHdTextLayout(op, assets)!.glyphs.map(g => g.stipplePhase), [0, 0]);
});

test('text layout bounds allocations and safely rejects malformed source or coordinate data', () => {
  for (const change of [
    (op: HdTextOp) => { op.dest.right = op.dest.left + 321; op.source.right = 321; },
    (op: HdTextOp) => { op.dest.bottom = op.dest.top + 201; op.source.bottom = 201; },
    (op: HdTextOp) => { op.dest.left = NaN; },
    (op: HdTextOp) => { op.source.left = 1; },
    (op: HdTextOp) => { op.color = -1; },
    (op: HdTextOp) => { op.glyphs[0].background = 256; },
    (op: HdTextOp) => { op.glyphs[0].advance++; },
    (op: HdTextOp) => { op.text = 'x'.repeat(4097); },
    (op: HdTextOp) => { op.glyphs = Array(2049).fill(op.glyphs[0]); },
    (op: HdTextOp) => { op.glyphs[0].x = Infinity; },
  ]) { const op = opFor(); change(op); assert.equal(getHdTextLayout(op, assets), null); }
  const changed = { ...assets, fonts: { ...assets.fonts, 1: { ...assets.fonts[1], chars: assets.fonts[1].chars.slice() } } };
  changed.fonts[1].chars[103] = { ...changed.fonts[1].chars[103], bits: 'bad!' };
  assert.equal(getHdTextLayout(opFor(), changed), null);
  assert.equal(getHdGlyphInkBounds(changed.fonts[1].chars[103]), null);
});

test('padded original glyphs gain safe full cells while original pixels and control/priority remain byte-identical', () => {
  const source = assets.fonts[0].chars[72];
  assert.equal(source.height, 9); assert.equal(assets.fonts[0].lineHeight, 8);
  assert.equal(getHdGlyphInkBounds(source)!.bottom, 7);
  const trimmed = { ...assets, fonts: { ...assets.fonts, 0: { ...assets.fonts[0], chars: assets.fonts[0].chars.slice() } } };
  trimmed.fonts[0].chars[72] = { ...source, height: 8, bits: encodeBytes(decodeBytes(source.bits).slice(0, source.width * 8)) };
  const draw = (manifest: NativeAssetManifest) => { const g = new GraphicsState(manifest); g.fillRect({ left: 0, top: 0, right: 320, bottom: 200 }, 255); g.drawText('H.', 10, 20, { font: 0, color: 0 }); return g; };
  const padded = draw(assets), flat = draw(trimmed), frame = padded.snapshot();
  assert.deepEqual(padded.visual, flat.visual); assert.deepEqual(padded.presented, flat.presented);
  assert.deepEqual(padded.priority, flat.priority); assert.deepEqual(padded.control, flat.control);
  const text = frame.hd!.ops.find(op => op.kind === 'text') as HdTextOp;
  assert.deepEqual(text.glyphs.map(g => g.background), [255, 255]);
  assert.equal(decodeOwners(frame.hd!.owners)[27 * 320 + 10], text.id, 'Safe padded row is part of the HD cell');
  assert.equal(getHdTextLayout(text, assets)!.glyphs[0].ink!.bottom, 7);
});

test('real horizontal or vertical ink overflow remains raster-only without clipping original ink', () => {
  for (const direction of ['right', 'bottom']) {
    const source = assets.fonts[0].chars[72], glyph = { ...source };
    if (direction === 'right') glyph.advance = 7;
    else { const bits = decodeBytes(glyph.bits); bits[8 * glyph.width + 1] = 1; glyph.bits = encodeBytes(bits); }
    const changed = { ...assets, fonts: { ...assets.fonts, 0: { ...assets.fonts[0], chars: assets.fonts[0].chars.slice() } } }; changed.fonts[0].chars[72] = glyph;
    const g = new GraphicsState(changed); g.fillRect({ left: 0, top: 0, right: 320, bottom: 200 }, 255); g.drawText('H.', 10, 20, { font: 0, color: 0 });
    const frame = g.snapshot(), text = frame.hd!.ops.find(op => op.kind === 'text') as HdTextOp;
    assert.equal(text.glyphs[0].background, null, direction);
    assert.equal(decodeOwners(frame.hd!.owners)[20 * 320 + 11], 0, 'Overflow glyph ink stays outside HD ownership');
    if (direction === 'bottom') assert.equal(g.presented[28 * 320 + 11], 0, 'Real descender outside lineHeight is still drawn');
    assert.deepEqual(getHdTextLayout(text, changed)!.glyphs.map(g => g.char), ['.']);
  }
});

async function withDocument<T>(failFont: boolean, run: (mock: { faces: any[]; calls: any[][]; added: Set<any> }) => Promise<T>, origin = 'https://example.test/native/') {
  const savedDoc = Object.getOwnPropertyDescriptor(globalThis, 'document'), savedFace = Object.getOwnPropertyDescriptor(globalThis, 'FontFace');
  const faces: any[] = [], calls: any[][] = [], added = new Set<any>();
  const ctx = new Proxy({ fillStyle: '', font: '' }, { get(target, key) {
    if (key === 'measureText') return (char: string) => ({ actualBoundingBoxLeft: 1, actualBoundingBoxRight: char === '.' ? 4 : 30, actualBoundingBoxAscent: char === '.' ? -20 : 40, actualBoundingBoxDescent: char === '.' ? 26 : 8 });
    if (key === 'fillText') return (...args: any[]) => { calls.push([key, ...args, target.fillStyle, target.font]); };
    if (key in target) return (target as any)[key];
    return (...args: any[]) => { calls.push([key, ...args]); };
  }, set(target, key, value) { (target as any)[key] = value; return true; } });
  const doc = { URL: 'https://example.test/native/', baseURI: origin, fonts: { add: (f: any) => added.add(f), has: (f: any) => added.has(f) },
    createElement: () => ({ width: 0, height: 0, getContext: () => ctx }) };
  class Face {
    status = 'unloaded';
    constructor(readonly family: string, readonly source: string, readonly descriptors: any) { faces.push(this); }
    async load() { if (failFont) { this.status = 'error'; throw Error('Font unavailable'); } this.status = 'loaded'; return this; }
  }
  Object.defineProperty(globalThis, 'document', { configurable: true, value: doc });
  Object.defineProperty(globalThis, 'FontFace', { configurable: true, value: Face });
  try { return await run({ faces, calls, added }); }
  finally {
    if (savedDoc) Object.defineProperty(globalThis, 'document', savedDoc); else Reflect.deleteProperty(globalThis, 'document');
    if (savedFace) Object.defineProperty(globalThis, 'FontFace', savedFace); else Reflect.deleteProperty(globalThis, 'FontFace');
  }
}

test('bundled fonts load once at the page subpath; text draws separate vector glyphs only after successful loading', async () => {
  await withDocument(false, async ({ faces, calls, added }) => {
    const op = opFor('H. '), before = JSON.stringify({ op, font: assets.fonts[1] });
    assert.equal(createHdTextCanvas(op, assets, assets.palette), null);
    const a = loadHdTextFonts(), b = loadHdTextFonts(); assert.equal(a, b); assert.equal(await a, true);
    assert.equal(faces.length, 3); assert.equal(added.size, 3); assert.equal(hdTextFontsReady(), true);
    assert(faces.every(face => face.source.startsWith('url("https://example.test/native/fonts/Liberation')));
    const canvas = createHdTextCanvas(op, assets, assets.palette)!;
    assert.deepEqual([canvas.width, canvas.height], [(op.dest.right - op.dest.left) * 8, 96]);
    assert.deepEqual(calls.filter(c => c[0] === 'fillText').map(c => c[1]), ['H', '.'], 'Words are not reflowed or painted as one stretched string');
    assert.equal(JSON.stringify({ op, font: assets.fonts[1] }), before);
    faces[0].status = 'error'; assert.equal(createHdTextCanvas(op, assets, assets.palette), null);
  });
});

test('font failure or a foreign base URL preserves original text instead of silently using system fonts', async () => {
  await withDocument(true, async ({ added, calls }) => {
    assert.equal(await loadHdTextFonts(), false); assert.equal(hdTextFontsReady(), false); assert.equal(added.size, 0);
    assert.equal(createHdTextCanvas(opFor(), assets, assets.palette), null); assert.equal(calls.length, 0);
  });
  await withDocument(false, async ({ faces }) => { assert.equal(await loadHdTextFonts(), false); assert.equal(faces.length, 0); }, 'https://foreign.test/');
});

test('greyed high-resolution outlines retain original checkerboard holes instead of becoming solid or translucent text', async () => {
  await withDocument(false, async ({ calls }) => {
    await loadHdTextFonts(); const op = opFor('A', 0, 20, 21); op.greyed = true; op.port.top = 10;
    assert(createHdTextCanvas(op, assets, assets.palette));
    const cells = calls.filter(c => c[0] === 'rect' && c[3] === 1 && c[4] === 1).map(c => [c[1], c[2]]);
    assert.equal(cells.length, op.glyphs[0].width * op.glyphs[0].height / 2);
    assert(cells.every(([x, y]) => ((x + y + 11) & 1) === 1));
    assert(calls.some(c => c[0] === 'fillText' && c[1] === 'A'));
  });
});

function shadowFixture() {
  const source = { ...assets, views: { ...assets.views, 1234: { id: 1234, paletteUpdates: [], loops: [{ cels: [{ width: 1, height: 1, dx: 0, dy: 0, clear: 0, mirrored: false, png: '', pixels: encodeBytes(new Uint8Array([255])) }] }] } } };
  const graphics = new GraphicsState(source);
  graphics.fillRect({ left: 0, top: 0, right: 320, bottom: 200 }, 255);
  graphics.drawText('H. $100', 41, 61, { font: 0, color: 116 });
  return { graphics, source, foreground: () => graphics.drawText('H. $100', 40, 60, { font: 0, color: 0 }) };
}

test('the exact WButton shadow pair captures sharp black foreground and survives serialization without raster changes', async () => {
  const f = shadowFixture(); f.foreground();
  const frame = f.graphics.snapshot(), foreground = frame.hd!.ops.find(op => op.kind === 'text' && op.color === 0) as HdTextOp;
  assert.deepEqual(foreground.shadow, { color: 116, offsetX: 1, offsetY: 1 });
  assert(foreground.glyphs.every(g => g.background === 255), 'Foreground over known shadow is safe, not a partial HD shadow-only substitution');
  const expected = new Uint8Array(64000).fill(255);
  for (const [startX, startY, color] of [[41, 61, 116], [40, 60, 0]]) {
    let x = startX;
    for (const char of 'H. $100') {
      const g = assets.fonts[0].chars[char.charCodeAt(0)], bits = decodeBytes(g.bits);
      for (let gy = 0; gy < g.height; gy++) for (let gx = 0; gx < g.width; gx++) if (bits[gy * g.width + gx]) expected[(startY + gy) * 320 + x + gx] = color;
      x += g.advance;
    }
  }
  assert.deepEqual(f.graphics.visual, expected); assert.deepEqual(f.graphics.presented, expected);
  const saved = JSON.parse(JSON.stringify(f.graphics.saveState())), restored = new GraphicsState(f.source); restored.loadState(saved);
  assert.deepEqual(restored.snapshot().hd, frame.hd); assert.deepEqual(restored.presented, expected);
  await withDocument(false, async ({ calls }) => {
    await loadHdTextFonts(); assert(createHdTextCanvas(foreground, f.source, assets.palette));
    const draws = calls.filter(c => c[0] === 'fillText'), chars = [...'H. $100'].filter(c => c !== ' ');
    assert.deepEqual(draws.map(c => c[1]), [...chars, ...chars]);
    assert(draws.slice(0, chars.length).every(c => c[4] === `rgb(${assets.palette[116].join(',')})`));
    assert(draws.slice(chars.length).every(c => c[4] === `rgb(${assets.palette[0].join(',')})` && c[5].includes('Jones HD Mono')),
      'Black foreground is actually drawn with high-resolution font outlines after the shadow');
    assert(calls.map(c => c[0]).lastIndexOf('fillRect') < calls.findIndex(c => c[0] === 'fillText'), 'Later cell backgrounds cannot cut off earlier shadow ink');
  });
});

test('unknown overlapping artwork, erased shadows, presented actors and inexact text pairs cannot gain shadow provenance', () => {
  for (const change of [
    (f: ReturnType<typeof shadowFixture>) => f.graphics.drawCel(1234, 0, 0, 42, 62),
    (f: ReturnType<typeof shadowFixture>) => { f.graphics.beginAnimation(); f.graphics.drawCel(1234, 0, 0, 42, 62); f.graphics.endAnimation(); },
    (f: ReturnType<typeof shadowFixture>) => f.graphics.fillRect({ left: 42, top: 62, right: 43, bottom: 63 }, 255),
  ]) {
    const f = shadowFixture(); change(f); f.foreground();
    const fg = f.graphics.snapshot().hd!.ops.find(op => op.kind === 'text' && op.color === 0) as HdTextOp | undefined;
    assert(!fg?.shadow); if (fg) assert.equal(fg.glyphs[0].background, null, 'Opaque foreign owner keeps mixed original cell fallback');
  }
  for (const [text, x, y] of [['H. $101', 40, 60], ['H. $100', 39, 60], ['H. $100', 40, 59]] as const) {
    const f = shadowFixture(); f.graphics.drawText(text, x, y, { font: 0, color: 0 });
    assert(f.graphics.snapshot().hd!.ops.every(op => op.kind !== 'text' || !op.shadow));
  }
});

function foregroundAt(graphics: GraphicsState): HdTextOp | undefined {
  const glyph = graphics.assets.fonts[0].chars[72], bits = decodeBytes(glyph.bits), at = bits.findIndex(Boolean);
  const frame = graphics.snapshot(), owner = decodeOwners(frame.hd!.owners)[(60 + Math.floor(at / glyph.width)) * 320 + 40 + at % glyph.width];
  const op = frame.hd!.ops.find(op => op.id === owner);
  if (!op) return undefined;
  assert(op.kind === 'text' && op.color === 0, 'The latest foreground ink has its own recorded source'); return op;
}

test('identical WButton redraw pairs remain HD across repeated snapshots and save/load without changing the original raster', async () => {
  const f = shadowFixture(); f.foreground();
  const pixels = f.graphics.visual.slice(), priority = f.graphics.priority.slice(), control = f.graphics.control.slice();
  let graphics = f.graphics;
  for (let repeat = 0; repeat < 4; repeat++) {
    if (repeat === 2) { const saved = JSON.parse(JSON.stringify(graphics.saveState())); graphics = new GraphicsState(f.source); graphics.loadState(saved); }
    graphics.drawText('H. $100', 41, 61, { font: 0, color: 116 });
    graphics.snapshot(); // Pruning between the two original Display calls must be safe.
    graphics.drawText('H. $100', 40, 60, { font: 0, color: 0 });
    const op = foregroundAt(graphics);
    assert(op, `Validated foreground remains recorded after redraw ${repeat}`);
    assert.deepEqual(op.shadow, { color: 116, offsetX: 1, offsetY: 1 });
    assert(op.glyphs.every(g => g.background === 255));
    assert.deepEqual(graphics.visual, pixels); assert.deepEqual(graphics.presented, pixels);
    assert.deepEqual(graphics.priority, priority); assert.deepEqual(graphics.control, control);
    await withDocument(false, async () => { await loadHdTextFonts(); assert(createHdTextCanvas(op, f.source, assets.palette)); });
  }
});

test('redraw recovery rejects same-color foreign owners, altered pixels, actors and inverted controls', () => {
  for (const change of [
    (g: GraphicsState) => g.drawCel(1234, 0, 0, 40, 60),
    (g: GraphicsState) => { g.beginAnimation(); g.drawCel(1234, 0, 0, 40, 60); g.endAnimation(); },
    (g: GraphicsState) => g.fillRect({ left: 40, top: 60, right: 41, bottom: 61 }, 255),
    (g: GraphicsState) => g.invertRect({ left: 40, top: 60, right: 48, bottom: 68 }),
    (g: GraphicsState) => { g.visual[60 * 320 + 40] = 17; g.presented[60 * 320 + 40] = 17; },
  ]) {
    const f = shadowFixture(); f.foreground(); f.graphics.snapshot(); change(f.graphics);
    f.graphics.drawText('H. $100', 41, 61, { font: 0, color: 116 });
    f.foreground();
    assert.equal(foregroundAt(f.graphics)?.shadow, undefined, 'Only the intact, proven previous label may supply a background');
  }
});

test('changed words or source glyph ink cannot reuse an old validated WButton background', () => {
  const f = shadowFixture(); f.foreground();
  f.graphics.drawText('H. $101', 41, 61, { font: 0, color: 116 });
  f.graphics.drawText('H. $101', 40, 60, { font: 0, color: 0 });
  assert.equal(foregroundAt(f.graphics)?.shadow, undefined);

  const source = structuredClone(assets), graphics = new GraphicsState(source);
  graphics.fillRect({ left: 0, top: 0, right: 320, bottom: 200 }, 255);
  graphics.drawText('H. $100', 41, 61, { font: 0, color: 116 }); graphics.drawText('H. $100', 40, 60, { font: 0, color: 0 });
  const h = source.fonts[0].chars[72], bits = decodeBytes(h.bits);
  // Removing old foreground ink leaves an observable orphaned original pixel.
  bits[bits.findIndex(Boolean)] = 0; h.bits = encodeBytes(bits);
  graphics.drawText('H. $100', 41, 61, { font: 0, color: 116 }); graphics.drawText('H. $100', 40, 60, { font: 0, color: 0 });
  assert.equal(foregroundAt(graphics)?.shadow, undefined);
});

test('original WButton foreground-only flash and release retain sharp text and the exact existing shadow', () => {
  const graphics = new GraphicsState(assets), text = 'Deposit  $100';
  graphics.fillRect({ left: 0, top: 0, right: 320, bottom: 200 }, 101);
  graphics.setPicPort({ left: 0, top: 0, right: 185, bottom: 119 }, 44, 68);
  graphics.drawText(text, 98, 36, { font: 10, color: 6, backColor: -1 });
  graphics.drawText(text, 97, 35, { font: 10, color: 0, backColor: -1 });
  const original = graphics.visual.slice(), priority = graphics.priority.slice(), control = graphics.control.slice();
  // Recorded real bank hiliteControl sequence: Display same formatted label,
  // font10, same coordinates, color100 then0, backColor-1, no shadow redraw.
  for (const color of [100, 0, 100, 0]) {
    graphics.drawText(text, 97, 35, { font: 10, color, backColor: -1 });
    const frame = graphics.snapshot();
    const glyph = assets.fonts[10].chars[68], bit = decodeBytes(glyph.bits).findIndex(Boolean);
    const owner = decodeOwners(frame.hd!.owners)[(79 + Math.floor(bit / glyph.width)) * 320 + 165 + bit % glyph.width];
    const op = frame.hd!.ops.find(op => op.id === owner) as HdTextOp;
    assert.equal(op.color, color); assert.deepEqual(op.shadow, { color: 6, offsetX: 1, offsetY: 1 });
    assert(op.glyphs.every(g => g.background === 101));
    const expected = original.slice(); let left = 165;
    for (const char of text) {
      const g = assets.fonts[10].chars[char.charCodeAt(0)], bits = decodeBytes(g.bits);
      for (let y = 0; y < g.height; y++) for (let x = 0; x < g.width; x++) if (bits[y * g.width + x]) expected[(79 + y) * 320 + left + x] = color;
      left += g.advance;
    }
    assert.deepEqual(graphics.visual, expected); assert.deepEqual(graphics.presented, expected);
    assert.deepEqual(graphics.priority, priority); assert.deepEqual(graphics.control, control);
  }
  assert.deepEqual(graphics.visual, original, 'Button release restores byte-identical original raster');
});

test('foreground-only recovery refuses a foreign same-color cel or original inverted button', () => {
  for (const change of [
    (g: GraphicsState) => g.drawCel(1234, 0, 0, 40, 60),
    (g: GraphicsState) => g.invertRect({ left: 40, top: 60, right: 48, bottom: 68 }),
    (g: GraphicsState) => { g.beginAnimation(); g.drawCel(1234, 0, 0, 40, 60); g.endAnimation(); },
  ]) {
    const f = shadowFixture(); f.foreground(); change(f.graphics);
    f.graphics.drawText('H. $100', 40, 60, { font: 0, color: 100, backColor: -1 }); f.foreground();
    assert.equal(foregroundAt(f.graphics)?.shadow, undefined);
  }
});

test('malformed shadow metadata falls back safely when loading a saved frame or creating text artwork', () => {
  const f = shadowFixture(); f.foreground(); const save = f.graphics.saveState();
  const fg = save.hd!.ops.find(op => op.kind === 'text' && op.color === 0) as HdTextOp;
  (fg.shadow as any).offsetX = 2;
  assert.equal(getHdTextLayout(fg, f.source), null);
  const restored = new GraphicsState(f.source); restored.loadState(save);
  assert.deepEqual(restored.snapshot().hd!.ops, []); assert.deepEqual(restored.presented, f.graphics.presented);
});
