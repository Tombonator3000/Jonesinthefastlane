// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { decodeBytes } from './bytes.js';
import { HD_CALCULATOR_KEYS, HD_CALCULATOR_ORIGINAL_REGIONS, HD_CLOCK_FACE_RECT, HD_CLOCK_SECTOR_RECT,
  createHdClockFaceCanvas, createHdPropCanvas, expandHdClockDialOwners, getHdPropSpec } from './HdProps.js';
import type { HdDrawOp, NativeAssetManifest } from './types.js';
const assets = JSON.parse(readFileSync(new URL('../public/assets/manifest.json', import.meta.url), 'utf8')) as NativeAssetManifest;

function dialFixture(mirror = false, dx = 0, dy = 0) {
  const full = { left: 0, top: 0, right: 320, bottom: 200 };
  const context = { clip: { ...full }, source: { ...full }, dest: { left: dx, top: dy, right: dx + 320, bottom: dy + 200 },
    port: { id: 2, left: dx, top: dy, rect: { ...full }, penX: 0, penY: 0, font: 0, color: 0, backColor: 0, penMode: 0, greyed: false } };
  const background: HdDrawOp = { ...context, id: 1, kind: 'pic', pic: 11, mirror, addTo: false };
  const left = dx + (mirror ? 152 : 151), top = dy + 166;
  const op: HdDrawOp = { ...context, clip: { ...full }, id: 2, kind: 'cel', view: 270, loop: 3, cel: 0, mirrored: false, priority: 0,
    source: { left: 0, top: 0, right: 17, bottom: 15 }, dest: { left, top, right: left + 17, bottom: top + 15 } };
  const original = new Uint32Array(64000).fill(1);
  return { background, op, original, presentation: original.slice() };
}

test('clock dial expansion replaces priority-preserved pic11 ticks but never foreground or authoritative owners', () => {
  const f = dialFixture(), at = 170 * 320 + 158;
  for (const [offset, owner] of [[0, 0], [1, 3], [2, 4], [3, 2]]) f.original[at + offset] = f.presentation[at + offset] = owner;
  f.presentation[at + 4] = 5; // Another generated actor already expanded here.
  const before = f.original.slice(), geometry = JSON.stringify([f.op, f.background]);
  expandHdClockDialOwners(f.op, f.background, f.original, f.presentation);
  for (let y = 0; y < 200; y++) for (let x = 0; x < 320; x++) {
    const i = y * 320 + x, inDial = x >= 151 && x < 168 && y >= 166 && y < 181;
    const expected = i === at + 4 ? 5 : inDial && before[i] === 1 ? 2 : before[i];
    assert.equal(f.presentation[i], expected, `Safe dial ownership at ${x},${y}`);
  }
  assert.deepEqual(f.original, before);
  assert.equal(JSON.stringify([f.op, f.background]), geometry);
});

test('clock dial expansion follows the exact mirrored picture position and both clips within the 320x200 frame', () => {
  const f = dialFixture(true, 161, 27); // Mirrored dial at313,193, partially off screen.
  f.op.clip = { left: 315, top: 194, right: 400, bottom: 210 };
  f.background.clip = { left: 0, top: 0, right: 318, bottom: 198 };
  expandHdClockDialOwners(f.op, f.background, f.original, f.presentation);
  for (let y = 0; y < 200; y++) for (let x = 0; x < 320; x++)
    assert.equal(f.presentation[y * 320 + x], x >= 315 && x < 318 && y >= 194 && y < 198 ? 2 : 1);
});

test('clock dial expansion rejects unrelated, moved, resized, malformed and aliased inputs', () => {
  const changes: ((f: ReturnType<typeof dialFixture>) => void)[] = [
    f => { f.op.view = 750; },
    f => { f.background.pic = 0; },
    f => { f.op.loop = 6; f.op.cel = 1; },
    f => { f.op.id = 0; }, f => { f.background.id = f.op.id; },
    f => { f.op.dest.left++; f.op.dest.right++; },
    f => { f.op.dest.right++; }, f => { f.background.dest.right++; },
    f => { f.op.source.right--; }, f => { f.background.source.left++; },
    f => { f.op.clip.left = Number.NaN; }, f => { f.background.clip.right = 0; },
    f => { f.original = new Uint32Array(63999); }, f => { f.presentation = new Uint32Array(63999); },
    f => { f.presentation = f.original; },
    f => { const shared = new ArrayBuffer(64001 * 4); f.original = new Uint32Array(shared, 0, 64000).fill(1); f.presentation = new Uint32Array(shared, 4, 64000); },
  ];
  for (const change of changes) {
    const f = dialFixture(); change(f); const before = f.presentation.slice(), original = f.original.slice();
    expandHdClockDialOwners(f.op, f.background, f.original, f.presentation);
    assert.deepEqual(f.presentation, before); assert.deepEqual(f.original, original);
  }
});

test('HD clock uses all 61 original elapsed states, including transparent zero and full final sector', () => {
  const before = JSON.stringify(assets.views[270]);
  let states = 0;
  for (const [loop, l] of assets.views[270].loops.entries()) for (const [cel, source] of l.cels.entries()) {
    const spec = getHdPropSpec(270, loop, cel, assets);
    assert(spec?.kind === 'clock-sector');
    assert.equal(spec.elapsed, states++);
    assert.equal(spec.total, 60);
    assert.equal(spec.width, 17); assert.equal(spec.height, 15);
    assert(Math.abs(spec.endAngle - spec.startAngle - spec.elapsed * Math.PI / 30) < 1e-12);
    const pixels = decodeBytes(source.pixels);
    if (spec.elapsed === 0) assert(pixels.every(p => p === source.clear), 'Initial cel is transparent, not a static dial');
    if (spec.elapsed === 15) {
      assert.notEqual(pixels[2 * 17 + 13], source.clear, 'Original quarter-sector fills upper right');
      assert.equal(pixels[12 * 17 + 4], source.clear, 'Original lower left remains unfilled');
    }
    if (spec.elapsed === 60) assert.notEqual(pixels[7 * 17 + 8], source.clear, 'Final full sector includes centre');
  }
  assert.equal(states, 61);
  assert.equal(getHdPropSpec(270, 6, 1, assets), null);
  assert.equal(getHdPropSpec(270, 7, 0, assets), null);
  assert.equal(JSON.stringify(assets.views[270]), before);
  assert.deepEqual(HD_CLOCK_SECTOR_RECT, { left: 151, top: 166, right: 168, bottom: 181 });
  assert.equal((HD_CLOCK_SECTOR_RECT.left + HD_CLOCK_SECTOR_RECT.right) / 2, 159.5);
  assert(HD_CLOCK_FACE_RECT.left < HD_CLOCK_SECTOR_RECT.left && HD_CLOCK_FACE_RECT.right > HD_CLOCK_SECTOR_RECT.right);
});

test('calculator keeps original decorative key positions, dollar glyph and numeric field separate', () => {
  const spec = getHdPropSpec(0, 4, 0, assets);
  assert(spec?.kind === 'calculator');
  assert.deepEqual([spec.width, spec.height], [61, 34]);
  assert.equal(HD_CALCULATOR_KEYS.length, 18);
  assert.deepEqual(HD_CALCULATOR_KEYS.map(r => [r.left, r.top]),
    [17, 22, 27].flatMap(y => [4, 14, 23, 32, 41, 50].map(x => [x, y])));
  const source = assets.views[0].loops[4].cels[0], pixels = decodeBytes(source.pixels);
  for (const key of HD_CALCULATOR_KEYS) {
    assert.equal(pixels[key.top * 61 + key.left], 112, 'Key begins at the original metal highlight');
    assert(key.bottom <= 31 && key.right <= 57);
    for (const r of HD_CALCULATOR_ORIGINAL_REGIONS) assert(key.top >= r.bottom);
  }
  const [dollar, money] = spec.originalRegions;
  assert(dollar.left <= 12 && dollar.right >= 16 && dollar.top <= 6 && dollar.bottom >= 13);
  assert(money.left <= 22 && money.top <= 6 && money.right >= 56 && money.bottom >= 13,
    'Preserved region covers original Display x=nsLeft+22,y=nsTop+6, six-place font14 cash');
  assert.equal(getHdPropSpec(0, 4, 1, assets), null);
});

test('the five moving marbles retain their original green, red, blue, gold and Jones silver palette', () => {
  const expected = [[56, 176, 56], [224, 56, 56], [96, 112, 200], [224, 128, 64], [208, 216, 224]];
  for (let cel = 0; cel < 5; cel++) {
    const spec = getHdPropSpec(0, 2, cel, assets);
    assert(spec?.kind === 'player-token');
    assert.equal(spec.player, cel); assert.deepEqual(spec.color, expected[cel]);
    assert.deepEqual([spec.width, spec.height], [9, 8]);
    const originalColors = new Set(assets.views[0].paletteUpdates.filter(u => u[4] !== 0).map(u => u.slice(1, 4).join(',')));
    assert(originalColors.has(spec.color.join(',')));
  }
  assert.equal(getHdPropSpec(0, 2, 5, assets), null);
  assert.equal(getHdPropSpec(752, 0, 0, assets), null, 'Other view animations are not accidentally substituted');
  assert.equal(getHdPropSpec(501, 2, 0, assets), null, 'Goal sliders remain original controls');
});

test('technical canvases keep exact 8x source sizes and require no font, time, session or money input', () => {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'document');
  let painted = 0;
  const gradient = { addColorStop() {} };
  const ctx = new Proxy({}, { get(_target, key) {
    if (key === 'createLinearGradient' || key === 'createRadialGradient') return () => gradient;
    if (key === 'fillText' || key === 'strokeText') return () => assert.fail('Original text must never be replaced');
    return (...args: unknown[]) => {
      for (const value of args) if (typeof value === 'number') assert(Number.isFinite(value));
      if (key === 'fill' || key === 'fillRect' || key === 'stroke') painted++;
    };
  }, set() { return true; } });
  Object.defineProperty(globalThis, 'document', { configurable: true, value: {
    createElement(tag: string) { assert.equal(tag, 'canvas'); return { width: 0, height: 0, getContext: () => ctx }; },
  } });
  const original = JSON.stringify(assets);
  try {
    for (const [view, loop, cel, w, h] of [[0, 4, 0, 61, 34], [0, 2, 4, 9, 8], [270, 0, 0, 17, 15], [270, 3, 0, 17, 15], [270, 6, 0, 17, 15], [501, 6, 0, 36, 24], [501, 6, 1, 36, 24], [501, 6, 2, 36, 24], [501, 6, 3, 36, 24], [750, 0, 0, 68, 55], [750, 0, 3, 68, 55], [751, 0, 0, 8, 8], [751, 11, 3, 25, 11], [609, 0, 0, 60, 11], [609, 1, 4, 7, 6], [609, 4, 0, 46, 64], [609, 5, 11, 46, 64], [707, 1, 3, 111, 63]]) {
      const canvas = createHdPropCanvas(view, loop, cel, assets);
      assert(canvas); assert.deepEqual([canvas.width, canvas.height], [w * 8, h * 8]);
    }
    const face = createHdClockFaceCanvas(assets);
    assert(face); assert.deepEqual([face.width, face.height], [26 * 8, 23 * 8]);
    assert(painted > 50, 'Procedural material geometry is drawn');
    assert.equal(createHdPropCanvas(10, 1, 0, assets), null, 'Main menu and other UI retain original pixels');
    assert.equal(createHdClockFaceCanvas({ ...assets, pics: {} }), null);
    assert.equal(getHdPropSpec(270, Number.NaN, 0, assets), null);
    assert.equal(JSON.stringify(assets), original, 'Presentation never changes source assets');
  } finally {
    if (descriptor) Object.defineProperty(globalThis, 'document', descriptor);
    else Reflect.deleteProperty(globalThis, 'document');
  }
});

test('four goal illustrations retain source frames and never replace sliders or labels', () => {
  for (let cel = 0; cel < 4; cel++) {
    const spec = getHdPropSpec(501, 6, cel, assets);
    assert(spec?.kind === 'goal-icon'); assert.equal(spec.goal, cel);
    assert.deepEqual([spec.width, spec.height], [36, 24]);
    assert(spec.originalRegions.some(r => r.left === 0 && r.right === 36 && r.top === 0));
    assert(spec.originalRegions.some(r => r.left === 0 && r.right === 36 && r.bottom === 24));
  }
  for (const loop of [0, 1, 2, 3, 4, 5]) assert.equal(getHdPropSpec(501, loop, 0, assets), null);
});

test('the work time clock follows the four original card/crank poses, never wall time', () => {
  const tops: number[] = [], crankY: number[] = [];
  for (let cel = 0; cel < 4; cel++) {
    const spec = getHdPropSpec(750, 0, cel, assets);
    assert(spec?.kind === 'time-clock'); assert.equal(spec.frame, cel);
    assert.deepEqual([spec.width, spec.height], [68, 55]);
    tops.push(spec.cardTop); crankY.push(spec.crank.y);
    const source = assets.views[750].loops[0].cels[cel], pixels = decodeBytes(source.pixels);
    // The original crank head actually occupies these columns/rows; metadata
    // cannot silently substitute another pose while keeping the same cel key.
    const cx = Math.floor(spec.crank.x), cy = Math.floor(spec.crank.y);
    assert.notEqual(pixels[cy * 68 + cx], pixels[2 * 68 + 2]);
  }
  assert.deepEqual(tops, [3, 4, 5, 6]);
  assert(crankY.every((value, i) => !i || value > crankY[i - 1]));
  assert.equal(getHdPropSpec(750, 0, 4, assets), null);
});

test('all 52 door poses keep exact original interior bands and monotonically opening apertures', () => {
  const palette = assets.palette.map(c => [...c]);
  for (const [i, r, g, b, used = 1] of assets.views[751].paletteUpdates) if (used) palette[i] = [r, g, b];
  let poses = 0;
  for (let loop = 0; loop < 13; loop++) {
    let previousArea = 0;
    for (let cel = 0; cel < 4; cel++) {
      const source = assets.views[751].loops[loop].cels[cel], pixels = decodeBytes(source.pixels);
      const spec = getHdPropSpec(751, loop, cel, assets);
      assert(spec?.kind === 'door'); assert.equal(spec.frame, cel); poses++;
      assert.deepEqual([spec.width, spec.height], [source.width, source.height]);
      let area = 0;
      for (const { rect, color } of spec.aperture) {
        assert.equal(rect.bottom - rect.top, 1);
        for (let x = rect.left; x < rect.right; x++) {
          assert.deepEqual(color, palette[pixels[rect.top * source.width + x]], `Door ${loop}:${cel} interior must originate from this exact cel`);
          area++;
        }
      }
      if (cel === 0) assert.equal(area, 0, 'Closed door never reveals an invented aperture');
      else assert(area > previousArea, `Door ${loop}:${cel} opens farther than the previous source pose`);
      previousArea = area;
    }
  }
  assert.equal(poses, 52);
  assert.equal(getHdPropSpec(751, 13, 0, assets), null);
});

test('victory decoration maps only the original podium, five stars and 24 mirrored confetti poses', () => {
  assert.equal(getHdPropSpec(609, 0, 0, assets)?.kind, 'podium');
  for (let cel = 0; cel < 5; cel++) {
    const spec = getHdPropSpec(609, 1, cel, assets); assert(spec?.kind === 'victory-star');
    assert.deepEqual([spec.width, spec.height], [7, 6]);
  }
  let count = 0;
  for (const loop of [4, 5]) for (let cel = 0; cel < 12; cel++) {
    const spec = getHdPropSpec(609, loop, cel, assets); assert(spec?.kind === 'confetti');
    assert.equal(spec.frame, cel); assert.deepEqual([spec.width, spec.height], [46, 64]);
    assert(spec.ribbons.length > 0 && spec.ribbons.length < 100);
    for (const ribbon of spec.ribbons) for (const p of ribbon.points) assert(p.x >= 0 && p.x < 46 && p.y >= 0 && p.y < 64);
    count++;
  }
  assert.equal(count, 24);
  // Source loop5 already mirrors loop4. Reversing these again in presentation
  // would make confetti spray back at the winner instead of following Jones.
  for (let cel = 0; cel < 12; cel++) {
    const a = getHdPropSpec(609, 4, cel, assets), b = getHdPropSpec(609, 5, cel, assets);
    assert(a?.kind === 'confetti' && b?.kind === 'confetti');
    const points = (spec: typeof a, mirror: boolean) => spec.ribbons.flatMap(r => r.points.map(p => `${r.color}:${(mirror ? 46 - p.x : p.x).toFixed(6)},${p.y.toFixed(6)}`)).sort();
    assert.deepEqual(points(a, true), points(b, false), `Original mirrored confetti frame ${cel}`);
  }
  for (const loop of [2, 3]) assert.equal(getHdPropSpec(609, loop, 0, assets), null, 'Dancing Jones remains in the authored actor atlas');
});

test('university books use loop1 with one to four piles, leaving every course-name cel original', () => {
  for (let cel = 0; cel < 4; cel++) {
    const spec = getHdPropSpec(707, 1, cel, assets); assert(spec?.kind === 'books');
    assert.equal(spec.count, cel + 1); assert.deepEqual([spec.width, spec.height], [111, 21 + cel * 14]);
    assert.equal(spec.colors.length, spec.count); assert.deepEqual(spec.colors[0], [56, 176, 56]);
  }
  assert.equal(getHdPropSpec(707, 0, 0, assets), null, 'The small background tile is not a book');
  for (let cel = 0; cel < assets.views[707].loops[2].cels.length; cel++)
    assert.equal(getHdPropSpec(707, 2, cel, assets), null, 'Original printed course label stays untouched');
});
