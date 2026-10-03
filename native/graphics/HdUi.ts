// SPDX-License-Identifier: GPL-3.0-or-later
// Presentation only. Labels and geometry come from the original exported cels;
// interaction, SCI controls, bounds, palettes and pressed ownership stay original.
import { decodeBytes } from './bytes.js';
import type { NativeAssetManifest, RGB, Rect } from './types.js';

type Family = 'Jones HD Mono' | 'Jones HD Serif';
interface Lettering {
  text: string; area: Rect; ink: number[]; face: number;
  family?: Family; italic?: boolean; outline?: number; shadow?: number;
  /** Repaint this exact flat label face, preserving the surrounding source frame. */
  erase?: Rect;
}
interface UiDefinition {
  view: number; loop: number; cel: number; width: number; height: number;
  letters: Lettering[]; overlay?: boolean; regions?: Rect[]; replaceInk?: boolean;
}
export interface HdUiSpec { key: string; width: number; height: number; overlay: boolean; regions?: Rect[]; replaceInk?: boolean }
const rect = (left: number, top: number, right: number, bottom: number): Rect => ({ left, top, right, bottom });
const smallLabels = ['DONE', 'WORK', 'DONE', 'RELAX', 'BUY', 'SELL', 'PAWN', 'SELECT', 'NEXT', '?', 'ENROLL', 'PLAY', 'RETIRE', 'EXIT'];

/** Exact labels in view250 and select1/2/3 view10. The duplicate DONE is a
 * distinct original cel. Lowercase and question marks on red choices are original. */
export const HD_UI_BUTTONS = [
  ...['PLAY GAME', 'WATCH DEMO', 'RESTORE GAME'].map((label, cel) =>
    ({ view: 10, loop: 1, cel, label, width: 133, height: 20, face: 146, ink: 0, family: 'Jones HD Serif' as Family, italic: false })),
  ...['take it easy?', 'play fair?', 'go for broke?'].map((label, cel) =>
    ({ view: 10, loop: 2, cel, label, width: 111, height: 14, face: 145, ink: 0, family: 'Jones HD Serif' as Family, italic: true })),
  ...['yes', 'no'].map((label, cel) =>
    ({ view: 10, loop: 3, cel, label, width: 89, height: 16, face: 145, ink: 0, family: 'Jones HD Serif' as Family, italic: true })),
  ...smallLabels.map((label, loop) =>
    ({ view: 250, loop, cel: 0, label, width: loop === 7 ? 34 : loop === 9 ? 16 : loop === 10 ? 40 : 32,
      height: 9, face: 47, ink: 130, family: 'Jones HD Mono' as Family, italic: false })),
];
const definitions: UiDefinition[] = HD_UI_BUTTONS.map(b => ({ ...b, letters: [{ text: b.label,
  area: rect(2, 2, b.width - 2, b.height - 2), face: b.face, ink: b.view === 10 && b.loop === 2 ? [0, 1, 16] : [b.ink],
  family: b.family, italic: b.italic }] }));

// Player-count tiles only: cel4 is a Jones portrait and deliberately remains art.
for (let cel = 0; cel < 4; cel++) definitions.push({ view: 0, loop: 3, cel, width: 25, height: 24,
  letters: [{ text: String(cel + 1), area: rect(3, 3, 22, 21), erase: rect(2, 2, 23, 22),
    face: [67, 48, 68, 107][cel], ink: [[136, 139], [107, 133], [136, 139], [67, 106]][cel],
    family: 'Jones HD Serif', outline: [104, 88, 104, 35][cel], shadow: [59, 58, 37, 58][cel] }] });

// Pure title cels and panels. Mixed selection cel500 is a transparent UI overlay
// above its independently authored photographic body; never replace that body.
definitions.push(
  { view: 500, loop: 0, cel: 0, width: 183, height: 112, overlay: true, regions: [rect(0, 0, 183, 14)], letters: [
    { text: 'PLAYER', area: rect(2, 1, 40, 12), erase: rect(1, 1, 40, 13), face: 137, ink: [148], family: 'Jones HD Mono' },
    { text: 'SELECT YOUR CHARACTER', area: rect(57, 1, 182, 12), erase: rect(55, 1, 182, 13), face: 137, ink: [148], family: 'Jones HD Mono' },
  ] },
  { view: 501, loop: 0, cel: 0, width: 135, height: 24, letters: [
    { text: 'GOALS', area: rect(2, 2, 133, 22), face: 136, ink: [59], family: 'Jones HD Serif', outline: 117 },
  ] },
  ...['WEALTH', 'HAPPINESS', 'EDUCATION', 'CAREER'].map((text, cel): UiDefinition => ({ view: 501, loop: 5, cel, width: 102, height: 16,
    letters: [{ text, area: rect(0, 0, 102, 16), face: 136, ink: [59], family: 'Jones HD Serif', outline: 117 }] })),
  { view: 505, loop: 0, cel: 0, width: 183, height: 112, letters: [
    { text: "WHO'S WINNING", area: rect(2, 1, 181, 18), erase: rect(1, 1, 182, 18), face: 136, ink: [59], family: 'Jones HD Serif', outline: 117 },
  ] },
  { view: 505, loop: 4, cel: 0, width: 183, height: 112, letters: [
    { text: 'STATISTICS', area: rect(15, 1, 169, 17), erase: rect(15, 1, 169, 17), face: 142, ink: [49, 55], family: 'Jones HD Mono' },
  ] },
);

// Original branded shop-header compositions. Backgrounds, frame edges, wires,
// plaque ornaments and patterned strips remain source-derived. Only the known
// flat lettering faces below are repainted; no generic artwork smoothing.
definitions.push(
  { view: 803, loop: 0, cel: 0, width: 183, height: 112, letters: [
    { text: "Black's", area: rect(3, 1, 96, 13), erase: rect(1, 1, 114, 13), face: 37, ink: [63, 75], italic: true, outline: 27, shadow: 16 },
    { text: 'Market', area: rect(8, 12, 114, 25), erase: rect(1, 13, 114, 25), face: 37, ink: [63, 75], italic: true, outline: 27, shadow: 16 },
  ] },
  { view: 804, loop: 0, cel: 0, width: 183, height: 112, letters: [
    { text: 'BANK', area: rect(78, 4, 171, 22), erase: rect(78, 4, 171, 23), face: 51, ink: [133, 141], family: 'Jones HD Serif', outline: 107, shadow: 92 },
  ] },
  { view: 807, loop: 0, cel: 0, width: 183, height: 112, letters: [
    { text: 'HI-TECH UNIVERSITY', area: rect(68, 2, 181, 25), erase: rect(68, 1, 182, 26), face: 59, ink: [144, 128, 116], family: 'Jones HD Serif', outline: 88, shadow: 22 },
  ] },
  { view: 808, loop: 0, cel: 0, width: 183, height: 112, letters: [
    { text: 'Socket City', area: rect(80, 1, 180, 18), erase: rect(80, 1, 181, 18), face: 99, ink: [63, 75], family: 'Jones HD Serif', outline: 97 },
    { text: 'APPLIANCE STORE', area: rect(80, 20, 179, 25), erase: rect(80, 20, 181, 26), face: 99, ink: [7, 139, 142], family: 'Jones HD Mono' },
  ] },
  { view: 809, loop: 0, cel: 0, width: 183, height: 112, letters: [
    { text: 'QT CLOTHING', area: rect(1, 21, 114, 36), erase: rect(1, 20, 115, 37), face: 16, ink: [56, 66, 106], family: 'Jones HD Serif', italic: true, outline: 117 },
  ] },
  { view: 810, loop: 0, cel: 0, width: 183, height: 112, letters: [
    { text: 'Monolith', area: rect(4, 3, 113, 18), erase: rect(1, 1, 114, 28), face: 52, ink: [90, 75], family: 'Jones HD Serif', outline: 9 },
    { text: 'Burgers', area: rect(15, 18, 106, 27), erase: rect(14, 18, 108, 28), face: 52, ink: [107], family: 'Jones HD Mono' },
  ] },
  { view: 811, loop: 0, cel: 0, width: 183, height: 112, letters: [
    { text: 'Z-', area: rect(3, 2, 48, 23), erase: rect(1, 1, 115, 25), face: 142, ink: [75, 63], family: 'Jones HD Serif', italic: true, outline: 6 },
    { text: 'Mart', area: rect(42, 1, 115, 18), erase: rect(1, 1, 115, 25), face: 142, ink: [59, 89], family: 'Jones HD Serif', italic: true, outline: 132 },
    { text: 'DISCOUNT STORE', area: rect(53, 19, 107, 24), erase: rect(1, 1, 115, 25), face: 142, ink: [59], family: 'Jones HD Mono', italic: true },
  ] },
);

// Common original setup/office panels. These are separate resources from the
// generic GOALS title and store artwork; select3.sc switches to view506 when
// configuring the human/Jones goals. Their original choices remain individual cels.
definitions.push(
  ...['SET YOUR GOALS', 'JONES GOALS'].map((text, cel): UiDefinition => ({ view: 506, loop: 0, cel, width: 135, height: 24,
    letters: [{ text, area: rect(2, 2, 133, 22), face: 136, ink: [59], family: 'Jones HD Serif', outline: 117 }] })),
  { view: 696, loop: 0, cel: 0, width: 183, height: 112, letters: [
    { text: 'INVESTMENTS', area: rect(15, 10, 97, 19), erase: rect(14, 10, 100, 19), face: 107, ink: [27], family: 'Jones HD Mono', shadow: 48 },
  ] },
  ...['T-BILLS', 'GOLD', 'SILVER', 'PORK BELLIES', 'BLUE CHIP STOCKS', 'PENNY STOCKS'].map((text, cel): UiDefinition => ({ view: 696, loop: 1, cel, width: 99, height: 11,
    letters: [{ text, area: rect(1, 1, 98, 10), face: 115, ink: [27, 48], family: 'Jones HD Mono' }] })),
  { view: 701, loop: 0, cel: 0, width: 49, height: 30, letters: [
    { text: 'RENT', area: rect(2, 2, 47, 15), face: 63, ink: [107], family: 'Jones HD Serif', shadow: 29 },
    { text: 'OFFICE', area: rect(2, 15, 47, 28), face: 63, ink: [107], family: 'Jones HD Serif', shadow: 29 },
  ] },
  { view: 701, loop: 0, cel: 1, width: 116, height: 16, letters: [
    { text: 'RENT OFFICE', area: rect(2, 2, 114, 14), face: 107, ink: [63], family: 'Jones HD Serif', outline: 133, shadow: 26 },
  ] },
  ...[0, 1].map((cel): UiDefinition => ({ view: 706, loop: 0, cel, width: 183, height: 112, letters: [
    { text: 'EMPLOYMENT OFFICE', area: rect(4, 4, 179, 13), erase: rect(3, 3, 180, 13), face: 30, ink: [128, 116, 92], family: 'Jones HD Mono' },
    ...(cel === 0 ? [{ text: 'EMPLOYERS', area: rect(20, 24, 97, 30), erase: rect(20, 24, 97, 30), face: 30, ink: [128, 116, 92], family: 'Jones HD Mono' as Family }] : []),
  ] })),
  { view: 712, loop: 0, cel: 0, width: 183, height: 112, letters: [
    { text: 'PAWNSHOP', area: rect(69, 2, 181, 20), erase: rect(68, 1, 182, 21), face: 17, ink: [99], family: 'Jones HD Mono', outline: 115, shadow: 76 },
  ] },
  ...['PAWN', 'REDEEM', 'BUY'].map((text, cel): UiDefinition => ({ view: 712, loop: 1, cel, width: 99, height: 11,
    letters: [{ text, area: rect(2, 2, 97, 9), erase: rect(2, 2, 97, 9), face: 52, ink: [0, 1], family: 'Jones HD Mono' }] })),
);

// Photographic factory plate: replace only its old printed glyphs. The
// compositor may release the source-ink mask only after this font layer exists.
// This canvas intentionally contains no bitmap base or painted label face.
definitions.push({ view: 705, loop: 0, cel: 0, width: 183, height: 112, overlay: true, replaceInk: true,
  regions: [rect(25, 11, 153, 26)], letters: [
    { text: 'THE FACTORY', area: rect(25, 11, 153, 26), face: 41, ink: [5, 49, 85], family: 'Jones HD Mono' },
  ] });

export const HD_UI_CEL_KEYS = definitions.map(d => `${d.view}:${d.loop}:${d.cel}`);
const byKey = new Map(definitions.map(d => [`${d.view}:${d.loop}:${d.cel}`, d]));

/** Metadata is DOM-free and safe to query from server-side frame processing.
 * An overlay canvas contains only regions[], with everything else transparent. */
export function getHdUiSpec(view: number, loop: number, cel: number, assets: NativeAssetManifest): HdUiSpec | null {
  const key = `${view}:${loop}:${cel}`, definition = byKey.get(key), source = assets.views[view]?.loops[loop]?.cels[cel];
  if (!definition || !source || source.width !== definition.width || source.height !== definition.height) return null;
  return { key, width: source.width, height: source.height, overlay: !!definition.overlay,
    ...(definition.regions ? { regions: definition.regions.map(r => ({ ...r })) } : {}),
    ...(definition.replaceInk ? { replaceInk: true } : {}) };
}

/** Exact source ink bounds, separate from the repaint face. Color indices refer
 * to this view's local palette, before runtime palette allocation. */
export function getHdUiTextBounds(view: number, loop: number, cel: number, assets: NativeAssetManifest): Rect[] | null {
  const spec = getHdUiSpec(view, loop, cel, assets);
  if (!spec) return null;
  const d = byKey.get(spec.key)!, pixels = decodeBytes(assets.views[view].loops[loop].cels[cel].pixels);
  if (pixels.length !== spec.width * spec.height) return null;
  return d.letters.map(field => {
    let left = spec.width, top = spec.height, right = 0, bottom = 0;
    for (let y = field.area.top; y < field.area.bottom; y++) for (let x = field.area.left; x < field.area.right; x++)
      if (field.ink.includes(pixels[y * spec.width + x])) { left = Math.min(left, x); top = Math.min(top, y); right = Math.max(right, x + 1); bottom = Math.max(bottom, y + 1); }
    return rect(left, top, right, bottom);
  });
}

/** Call after the two bundled Jones HD fonts load. Ownership/clip masks must
 * remain authoritative: inverted/pressed SCI pixels fall back to original. */
export function createHdUiCanvas(view: number, loop: number, cel: number, assets: NativeAssetManifest): HTMLCanvasElement | null {
  const spec = getHdUiSpec(view, loop, cel, assets), bounds = getHdUiTextBounds(view, loop, cel, assets);
  if (!spec || !bounds || bounds.some(r => r.right <= r.left || r.bottom <= r.top)) return null;
  const definition = byKey.get(spec.key)!, source = assets.views[view], bitmap = source.loops[loop].cels[cel], pixels = decodeBytes(bitmap.pixels);
  const colors = assets.palette.map(c => [...c] as RGB);
  for (const [index, r, g, b, used = 1] of source.paletteUpdates) if (used && index > 0 && index < 255) colors[index] = [r, g, b];
  colors[0] = [0, 0, 0]; colors[255] = [255, 255, 255];
  const color = (index: number) => `rgb(${colors[index].join(',')})`;
  const scale = 8, canvas = document.createElement('canvas'); canvas.width = spec.width * scale; canvas.height = spec.height * scale;
  const ctx = canvas.getContext('2d'); if (!ctx) return null;
  ctx.scale(scale, scale);
  const inside = (x: number, y: number) => !definition.overlay || definition.regions!.some(r => x >= r.left && x < r.right && y >= r.top && y < r.bottom);
  // Source-derived flat frames/decorations, drawn as exact rectangle runs.
  // This base preserves alpha and details outside our explicitly authored type.
  if (!definition.replaceInk) for (let y = 0; y < spec.height; y++) for (let x = 0; x < spec.width;) {
    if (!inside(x, y) || pixels[y * spec.width + x] === bitmap.clear) { x++; continue; }
    const start = x, index = pixels[y * spec.width + x];
    while (++x < spec.width && pixels[y * spec.width + x] === index && inside(x, y)) { /* flat run */ }
    ctx.fillStyle = color(index); ctx.fillRect(start, y, x - start, 1);
  }
  // Erase every old label before drawing any new lettering: neighboring logo
  // lines can overlap, and must never erase one another's fresh font outlines.
  if (!definition.replaceInk) for (const field of definition.letters) { const r = field.erase ?? field.area; ctx.fillStyle = color(field.face); ctx.fillRect(r.left, r.top, r.right - r.left, r.bottom - r.top); }
  if (view === 712 && loop === 0) {
    ctx.fillStyle = color(107); ctx.fillRect(68, 14, 114, 1);
    ctx.fillStyle = color(92); ctx.fillRect(68, 15, 114, 1);
    ctx.fillStyle = color(34); ctx.fillRect(68, 16, 114, 1);
  }
  for (const [i, field] of definition.letters.entries()) {
    const b = bounds[i], family = field.family ?? 'Jones HD Serif';
    ctx.font = `${field.italic ? 'italic ' : ''}bold 64px "${family}"`;
    ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left';
    const metrics = ctx.measureText(field.text), inkWidth = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight,
      inkHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    if (!(inkWidth > 0 && inkHeight > 0)) return null;
    ctx.save(); const clip = field.erase ?? field.area;
    ctx.beginPath(); ctx.rect(clip.left, clip.top, clip.right - clip.left, clip.bottom - clip.top); ctx.clip();
    ctx.translate(b.left, b.top); ctx.scale((b.right - b.left) / inkWidth, (b.bottom - b.top) / inkHeight);
    const x = metrics.actualBoundingBoxLeft, y = metrics.actualBoundingBoxAscent;
    if (field.shadow !== undefined) { ctx.fillStyle = color(field.shadow); ctx.fillText(field.text, x + 2, y + 2); }
    if (field.outline !== undefined) { ctx.strokeStyle = color(field.outline); ctx.lineJoin = 'round'; ctx.lineWidth = 2; ctx.strokeText(field.text, x, y); }
    ctx.fillStyle = color(field.ink[0]); ctx.fillText(field.text, x, y); ctx.restore();
  }
  if (view === 809) {
    ctx.fillStyle = color(120); ctx.fillRect(1, 27, 114, 1);
    ctx.fillStyle = color(99); ctx.fillRect(1, 28, 114, 2);
    ctx.fillStyle = color(43); ctx.fillRect(1, 30, 114, 1);
  }
  // A source transparent pixel must remain transparent even when a label face
  // crosses it. Photographic regions are never copied into a mixed UI overlay.
  for (let y = 0; y < spec.height; y++) for (let x = 0; x < spec.width; x++)
    if (pixels[y * spec.width + x] === bitmap.clear || !inside(x, y)) ctx.clearRect(x, y, 1, 1);
  return canvas;
}
