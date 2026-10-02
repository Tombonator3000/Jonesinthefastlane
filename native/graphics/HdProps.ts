// SPDX-License-Identifier: GPL-3.0-or-later
// Presentation-only technical props. All timing, money and movement come from
// the unchanged SCI draw operations; these canvases never read or update a game.
import { decodeBytes } from './bytes.js';
import type { CelAsset, HdDrawOp, NativeAssetManifest, Rect, RGB } from './types.js';

export const HD_PROP_SCALE = 8;
/** room1.sc: timeKeep x159,y180; 17x15 cels => DrawCel at151,166. */
export const HD_CLOCK_SECTOR_RECT: Readonly<Rect> = Object.freeze({ left: 151, top: 166, right: 168, bottom: 181 });
/** The static face is part of pic11, not view270. Use only where that original
 * picture owns the pixels. In particular a transparent 270:0:0 is NOT a mask. */
export const HD_CLOCK_FACE_RECT: Readonly<Rect> = Object.freeze({ left: 147, top: 162, right: 173, bottom: 185 });
/** The original pic11 hour ticks can reject opaque view270 pixels through SCI
 * priority. Replacing that exact dial permits replacing those ticks as well;
 * the general actor silhouette rule must continue to protect priority occlusion.
 * Only the detached presentation plane is changed, never original ownership. */
export function expandHdClockDialOwners(op: HdDrawOp, background: HdDrawOp, original: Uint32Array, presentation: Uint32Array): void {
  const validRect = (r: Rect) => r && [r.left, r.top, r.right, r.bottom].every(Number.isSafeInteger) && r.right > r.left && r.bottom > r.top;
  const exactRect = (r: Rect, left: number, top: number, right: number, bottom: number) =>
    r.left === left && r.top === top && r.right === right && r.bottom === bottom;
  if (op.kind !== 'cel' || op.view !== 270 || background.kind !== 'pic' || background.pic !== 11 ||
      ![op.id, background.id].every(id => Number.isSafeInteger(id) && id > 0 && id <= 0xffffffff) || op.id === background.id ||
      !Number.isSafeInteger(op.loop) || !Number.isSafeInteger(op.cel) || op.loop < 0 || op.loop > 6 || op.cel < 0 || op.cel > 9 || op.loop * 10 + op.cel > 60 ||
      original.length !== 320 * 200 || presentation.length !== original.length ||
      (original.buffer === presentation.buffer && original.byteOffset < presentation.byteOffset + presentation.byteLength &&
        presentation.byteOffset < original.byteOffset + original.byteLength) ||
      ![op.dest, op.source, op.clip, background.dest, background.source, background.clip].every(validRect) ||
      !exactRect(op.source, 0, 0, 17, 15) || !exactRect(background.source, 0, 0, 320, 200) ||
      background.dest.right - background.dest.left !== 320 || background.dest.bottom - background.dest.top !== 200) return;
  const r = HD_CLOCK_SECTOR_RECT;
  const left = background.dest.left + (background.mirror ? 320 - r.right : r.left), top = background.dest.top + r.top;
  if (!exactRect(op.dest, left, top, left + 17, top + 15)) return;
  const x0 = Math.max(0, left, op.clip.left, background.clip.left), y0 = Math.max(0, top, op.clip.top, background.clip.top);
  const x1 = Math.min(320, left + 17, op.clip.right, background.clip.right), y1 = Math.min(200, top + 15, op.clip.bottom, background.clip.bottom);
  for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
    const at = y * 320 + x;
    // Keep raw fills, text, other original owners and already expanded actors.
    if (original[at] === background.id && (presentation[at] === background.id || presentation[at] === op.id)) presentation[at] = op.id;
  }
}
/** Source cel 0:4:0: the keys are decorative and have no numerical labels.
 * Their rectangles do not create hit targets or calculator functionality. */
export const HD_CALCULATOR_KEYS: readonly Readonly<Rect>[] = Object.freeze(
  [17, 22, 27].flatMap(top => [4, 14, 23, 32, 41, 50].map((left, column) =>
    Object.freeze({ left, top, right: left + (column === 0 ? 8 : 7), bottom: top + 4 }))),
);
/** Keep the fixed original dollar glyph and dynamic original font14 field.
 * Root compositor must exclude these regions from its HD owner mask. */
export const HD_CALCULATOR_ORIGINAL_REGIONS: readonly Readonly<Rect>[] = Object.freeze([
  Object.freeze({ left: 11, top: 5, right: 16, bottom: 14 }),
  Object.freeze({ left: 21, top: 5, right: 57, bottom: 14 }),
]);

interface PropBase { key: string; width: number; height: number; originalRegions: readonly Readonly<Rect>[] }
export type HdPropSpec = PropBase & (
  { kind: 'calculator'; keys: typeof HD_CALCULATOR_KEYS } |
  { kind: 'clock-sector'; elapsed: number; total: 60; startAngle: number; endAngle: number } |
  { kind: 'player-token'; player: number; color: RGB } |
  { kind: 'goal-icon'; goal: number } |
  { kind: 'podium' } |
  { kind: 'victory-star'; color: RGB } |
  { kind: 'confetti'; frame: number; ribbons: { color: RGB; points: { x: number; y: number }[] }[] } |
  { kind: 'books'; count: number; colors: RGB[] } |
  { kind: 'time-clock'; frame: number; cardTop: number; crank: { x: number; y: number } } |
  { kind: 'door'; frame: number; material: 'wood' | 'glass'; color: RGB; aperture: { rect: Rect; color: RGB }[] }
);
const noRegions: readonly Readonly<Rect>[] = Object.freeze([]);
function bitmap(assets: NativeAssetManifest, view: number, loop: number, cel: number): CelAsset | undefined {
  return assets.views[view]?.loops[loop]?.cels[cel];
}
function colors(assets: NativeAssetManifest, view: number): RGB[] {
  const palette = assets.palette.map(c => [...c] as RGB);
  for (const [index, r, g, b, used = 1] of assets.views[view]?.paletteUpdates || [])
    if (used && index >= 0 && index < 256) palette[index] = [r, g, b];
  return palette;
}
const css = (color: RGB) => `rgb(${color.join(',')})`;
/** Original resources are checked instead of accepting arbitrary future cels. */
export function getHdPropSpec(view: number, loop: number, cel: number, assets: NativeAssetManifest): HdPropSpec | null {
  if (![view, loop, cel].every(Number.isSafeInteger) || loop < 0 || cel < 0) return null;
  const source = bitmap(assets, view, loop, cel);
  if (!source || decodeBytes(source.pixels).length !== source.width * source.height) return null;
  const base = { key: `${view}:${loop}:${cel}`, width: source.width, height: source.height, originalRegions: noRegions };
  if (view === 0 && loop === 4 && cel === 0 && source.width === 61 && source.height === 34)
    return { ...base, kind: 'calculator', keys: HD_CALCULATOR_KEYS, originalRegions: HD_CALCULATOR_ORIGINAL_REGIONS };
  // The only final loop cel is 6:0: the original caps global323 at 60.
  if (view === 270 && loop <= 6 && cel < 10 && loop * 10 + cel <= 60 && source.width === 17 && source.height === 15) {
    const elapsed = loop * 10 + cel;
    return { ...base, kind: 'clock-sector', elapsed, total: 60, startAngle: -Math.PI / 2, endAngle: -Math.PI / 2 + elapsed * Math.PI / 30 };
  }
  if (view === 0 && loop === 2 && cel < 5 && source.width === 9 && source.height === 8) {
    // These source-palette swatches are the five original green/red/blue/gold/
    // silver body colors (the fifth is Jones); they are not player turn logic.
    const indices = [56, 75, 87, 88, 132];
    return { ...base, kind: 'player-token', player: cel, color: [...colors(assets, view)[indices[cel]]] as RGB };
  }
  if (view === 609 && loop === 0 && cel === 0 && source.width === 60 && source.height === 11)
    return { ...base, kind: 'podium' };
  if (view === 609 && loop === 1 && cel < 5 && source.width === 7 && source.height === 6)
    return { ...base, kind: 'victory-star', color: [...colors(assets, view)[[75, 100, 92, 56, 70][cel]]] as RGB };
  if (view === 609 && (loop === 4 || loop === 5) && cel < 12 && source.width === 46 && source.height === 64)
    return { ...base, kind: 'confetti', frame: cel, ribbons: confettiRibbons(source, colors(assets, view)) };
  // university.sc books.loop=1; loop2 contains the untouched course names.
  if (view === 707 && loop === 1 && cel < 4 && source.width === 111 && source.height === 21 + cel * 14)
    return { ...base, kind: 'books', count: cel + 1, colors: [56, 87, 75, 98].slice(0, cel + 1).map(index => [...colors(assets, view)[index]] as RGB) };
  if (view === 501 && loop === 6 && cel < 4 && source.width === 36 && source.height === 24)
    return { ...base, kind: 'goal-icon', goal: cel, originalRegions: [
      { left: 0, top: 0, right: 36, bottom: 2 }, { left: 0, top: 22, right: 36, bottom: 24 },
      { left: 0, top: 2, right: 2, bottom: 22 }, { left: 34, top: 2, right: 36, bottom: 22 },
    ] };
  if (view === 750 && loop === 0 && cel < 4 && source.width === 68 && source.height === 55)
    return { ...base, kind: 'time-clock', frame: cel, cardTop: [3, 4, 5, 6][cel],
      crank: [{ x: 50.5, y: 21.5 }, { x: 53, y: 26.5 }, { x: 55, y: 33.5 }, { x: 56.5, y: 39 }][cel] };
  const doorSizes = [[8, 8], [7, 11], [12, 12], [14, 14], [9, 12], [10, 11], [10, 13], [10, 12], [14, 14], [9, 11], [14, 10], [25, 11], [10, 12]];
  if (view === 751 && loop < 13 && cel < 4 && source.width === doorSizes[loop][0] && source.height === doorSizes[loop][1]) {
    const palette = colors(assets, view), closed = bitmap(assets, view, loop, 0)!, pixels = decodeBytes(closed.pixels);
    const rgb = [0, 0, 0], count = pixels.filter(p => p !== closed.clear).length;
    for (const index of pixels) if (index !== closed.clear) for (let c = 0; c < 3; c++) rgb[c] += palette[index][c];
    return { ...base, kind: 'door', frame: cel, material: [0, 1, 5, 7].includes(loop) ? 'wood' : 'glass',
      color: rgb.map(v => Math.round(v / count)) as RGB,
      aperture: cel === 0 ? [] : doorAperture(source, bitmap(assets, view, loop, 3)!, palette) };
  }
  return null;
}
/** Door apertures are the original contiguous interior bands. Their exact row
 * endpoints come from the current cel, including different hinged/sliding doors;
 * never infer an opening fraction from cel/3. room1.Place.openDoor owns timing. */
function doorAperture(source: CelAsset, fullyOpen: CelAsset, palette: RGB[]): { rect: Rect; color: RGB }[] {
  const current = decodeBytes(source.pixels), full = decodeBytes(fullyOpen.pixels), width = source.width;
  const interiorColors = new Set([16, 29, 42, 27, 48]), result: { rect: Rect; color: RGB }[] = [];
  for (let y = 0; y < source.height; y++) {
    const center = Math.floor(width / 2), index = full[y * width + center];
    if (!interiorColors.has(index)) continue;
    let left = center, right = center + 1;
    while (left > 0 && full[y * width + left - 1] === index) left--;
    while (right < width && full[y * width + right] === index) right++;
    for (let x = left; x < right;) {
      if (current[y * width + x] !== index) { x++; continue; }
      const start = x;
      while (++x < right && current[y * width + x] === index) { /* original flat interior run */ }
      result.push({ rect: { left: start, top: y, right: x, bottom: y + 1 }, color: [...palette[index]] as RGB });
    }
  }
  return result;
}
/** Extract the original streamer locations, not new particles or a local clock.
 * Palette pairs identify each colored ribbon; contiguous source components
 * become independent smooth strips. Mirrored loop5 pixels are already exported. */
function confettiRibbons(source: CelAsset, palette: RGB[]): { color: RGB; points: { x: number; y: number }[] }[] {
  const pixels = decodeBytes(source.pixels), visited = new Uint8Array(pixels.length), ribbons = [];
  const family: Record<number, number> = { 75: 75, 48: 75, 94: 75, 107: 107, 100: 100, 68: 100, 67: 67, 35: 67 };
  for (let start = 0; start < pixels.length; start++) {
    const ink = family[pixels[start]];
    if (visited[start] || pixels[start] === source.clear || ink === undefined) continue;
    const pending = [start], rows = new Map<number, number[]>(); visited[start] = 1;
    while (pending.length) {
      const at = pending.pop()!, x = at % source.width, y = Math.floor(at / source.width);
      const row = rows.get(y) || []; row.push(x); rows.set(y, row);
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        const nx = x + dx, ny = y + dy, next = ny * source.width + nx;
        if (nx >= 0 && nx < source.width && ny >= 0 && ny < source.height && !visited[next] && family[pixels[next]] === ink) { visited[next] = 1; pending.push(next); }
      }
    }
    const points = rows.size === 1 ? [...rows].flatMap(([y, xs]) => xs.sort((a, b) => a - b).map(x => ({ x: x + .5, y: y + .5 }))) :
      [...rows].sort(([a], [b]) => a - b).map(([y, xs]) => ({ x: xs.reduce((sum, x) => sum + x, 0) / xs.length + .5, y: y + .5 }));
    ribbons.push({ color: [...palette[ink]] as RGB, points });
  }
  return ribbons;
}
function surface(width: number, height: number): [HTMLCanvasElement, CanvasRenderingContext2D] | null {
  const canvas = document.createElement('canvas'); canvas.width = width * HD_PROP_SCALE; canvas.height = height * HD_PROP_SCALE;
  const ctx = canvas.getContext('2d'); if (!ctx) return null;
  ctx.scale(HD_PROP_SCALE, HD_PROP_SCALE);
  return [canvas, ctx];
}
function rounded(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath(); ctx.roundRect(x, y, w, h, r);
}
function linear(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, stops: [number, string][]) {
  const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  for (const [at, color] of stops) gradient.addColorStop(at, color);
  return gradient;
}
function radial(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, stops: [number, string][]) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  for (const [at, color] of stops) gradient.addColorStop(at, color);
  return gradient;
}
/** Copy only semantic original regions, not a scaled replacement font. The
 * compositor also retains live raster pixels here, including negative cash. */
function originalRegions(ctx: CanvasRenderingContext2D, source: CelAsset, palette: RGB[], regions: readonly Readonly<Rect>[]) {
  const pixels = decodeBytes(source.pixels);
  for (const r of regions) for (let y = r.top; y < r.bottom; y++) for (let x = r.left; x < r.right; x++) {
    const index = pixels[y * source.width + x]; if (index === source.clear) continue;
    ctx.fillStyle = css(palette[index]); ctx.fillRect(x, y, 1, 1);
  }
}
function calculator(ctx: CanvasRenderingContext2D, source: CelAsset, palette: RGB[]) {
  // A red rim and machined graphite case retain every original outer bound.
  ctx.fillStyle = '#e03838'; ctx.fillRect(0, 0, 61, 34);
  rounded(ctx, 1, 1, 59, 32, .8);
  ctx.fillStyle = linear(ctx, 0, 1, 0, 33, [[0, '#bdc6cc'], [.035, '#67737e'], [.08, '#353841'], [.91, '#252830'], [1, '#11151b']]); ctx.fill();
  rounded(ctx, 2.2, 2.2, 56.6, 29.6, .4); ctx.fillStyle = css(palette[32]); ctx.fill(); ctx.strokeStyle = '#676b75'; ctx.lineWidth = .14; ctx.stroke();
  // Recessed LCD glass. The live digits remain owned by the original raster.
  rounded(ctx, 17.7, 2.9, 39.6, 11.9, .4);
  ctx.fillStyle = linear(ctx, 18, 3, 57, 15, [[0, '#080d12'], [.35, '#222b31'], [.8, '#a1b1b8'], [1, '#f0f8f8']]); ctx.fill();
  ctx.fillStyle = css(palette[101]); ctx.fillRect(19, 4.3, 37.1, 9.2);
  ctx.fillStyle = linear(ctx, 20, 4.3, 20, 5.6, [[0, '#697e86'], [1, css(palette[101])]]); ctx.fillRect(19, 4.3, 37.1, 1.3);
  rounded(ctx, 3.8, 6.7, 6.2, 5.2, .55); ctx.fillStyle = '#23191c'; ctx.fill();
  rounded(ctx, 4.1, 6.85, 5.65, 4.6, .5); ctx.fillStyle = linear(ctx, 4, 7, 8, 12, [[0, '#fb6962'], [.3, '#c62d32'], [.7, '#862b28'], [1, '#4c2328']]); ctx.fill();
  rounded(ctx, 5.45, 8.55, 2.5, 1, .22); ctx.fillStyle = '#252a2c'; ctx.fill();
  for (const key of HD_CALCULATOR_KEYS) {
    const w = key.right - key.left, h = key.bottom - key.top;
    rounded(ctx, key.left + .2, key.top + .65, w + .2, h + .2, .45); ctx.fillStyle = '#15171c'; ctx.fill();
    rounded(ctx, key.left, key.top, w, h, .4);
    ctx.fillStyle = linear(ctx, key.left, key.top, key.right, key.bottom,
      [[0, '#e1e6ec'], [.14, '#a5b1c0'], [.4, '#7c8790'], [.68, '#697680'], [.87, '#b2c4d0'], [1, '#5f7280']]); ctx.fill();
    rounded(ctx, key.left + .8, key.top + .5, w - 1.6, h - 1.4, .3);
    ctx.fillStyle = linear(ctx, key.left, key.top + .6, key.left, key.bottom - .8, [[0, '#747e84'], [.45, '#505e66'], [1, '#94a1a8']]); ctx.fill();
    ctx.strokeStyle = 'rgba(235,244,250,.34)'; ctx.lineWidth = .12;
    ctx.beginPath(); ctx.moveTo(key.left + .6, key.top + .4); ctx.lineTo(key.right - .5, key.top + .4); ctx.stroke();
  }
  originalRegions(ctx, source, palette, HD_CALCULATOR_ORIGINAL_REGIONS);
}
function clockMarkers(ctx: CanvasRenderingContext2D, cx: number, cy: number) {
  ctx.fillStyle = '#31271f';
  for (let hour = 0; hour < 12; hour++) {
    const angle = hour * Math.PI / 6 - Math.PI / 2;
    ctx.beginPath(); ctx.ellipse(cx + Math.cos(angle) * 7.15, cy + Math.sin(angle) * 6.1, .46, .43, 0, 0, Math.PI * 2); ctx.fill();
  }
  ctx.beginPath(); ctx.arc(cx, cy, .52, 0, Math.PI * 2); ctx.fill();
}
function clockSector(ctx: CanvasRenderingContext2D, spec: Extract<HdPropSpec, { kind: 'clock-sector' }>) {
  if (spec.elapsed === 0) return;
  ctx.save(); ctx.translate(8.5, 7.5); ctx.scale(8.5, 7.5);
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 1, spec.startAngle, spec.endAngle); ctx.closePath();
  ctx.fillStyle = radial(ctx, -.3, -.35, 1.7, [[0, '#f67563'], [.45, '#e03838'], [.85, '#a61c2b'], [1, '#771a28']]); ctx.fill();
  ctx.clip();
  // The boundary follows the same original six-degree step as the red wedge.
  // It is not a separately animated or independently timed clock hand.
  if (spec.elapsed < 60) {
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(spec.endAngle) * .96, Math.sin(spec.endAngle) * .96);
    ctx.strokeStyle = '#8b1725'; ctx.lineWidth = .045; ctx.stroke();
  }
  // Restore logical-pixel scale while retaining the wedge clip. The shared
  // markers align with pic11's face at global159.5,173.5 and add no background.
  ctx.scale(1 / 8.5, 1 / 7.5); clockMarkers(ctx, 0, 0);
  ctx.restore();
}
function token(ctx: CanvasRenderingContext2D, spec: Extract<HdPropSpec, { kind: 'player-token' }>) {
  ctx.save(); ctx.beginPath(); ctx.ellipse(4.5, 4, 4.5, 4, 0, 0, Math.PI * 2); ctx.clip();
  ctx.fillStyle = radial(ctx, 3, 2, 6.7, [[0, '#f6f8ef'], [.17, '#d6e6e7'], [.32, css(spec.color)], [.68, css(spec.color.map(v => Math.round(v * .53)) as RGB)], [1, '#111b29']]); ctx.fillRect(0, 0, 9, 8);
  // The source marbles have a dark equatorial band and a smaller lower rim.
  ctx.fillStyle = linear(ctx, 0, 3.2, 0, 4.9, [[0, '#18282b'], [.26, '#48575c'], [.53, '#253139'], [1, '#142123']]); ctx.fillRect(0, 3.2, 9, 1.6);
  ctx.strokeStyle = 'rgba(214,241,246,.65)'; ctx.lineWidth = .16;
  ctx.beginPath(); ctx.ellipse(4.5, 3.5, 4.2, .34, 0, Math.PI, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = 'rgba(229,239,243,.38)'; ctx.lineWidth = .23;
  ctx.beginPath(); ctx.ellipse(4.5, 6.25, 3.1, .36, 0, 0, Math.PI); ctx.stroke();
  ctx.fillStyle = radial(ctx, 2.9, 1.65, 1.55, [[0, 'rgba(255,255,248,.9)'], [1, 'rgba(255,255,248,0)']]); ctx.fillRect(1.3, .2, 3.2, 3);
  ctx.restore();
}
/** Stateless 8× canvas. Keep the original cel silhouette/ownership and clip,
 * including animation, saved regions, dialog occlusion and restored frames. */
export function createHdPropCanvas(view: number, loop: number, cel: number, assets: NativeAssetManifest): HTMLCanvasElement | null {
  const spec = getHdPropSpec(view, loop, cel, assets); if (!spec) return null;
  const target = surface(spec.width, spec.height); if (!target) return null;
  const [canvas, ctx] = target;
  if (spec.kind === 'calculator') calculator(ctx, bitmap(assets, view, loop, cel)!, colors(assets, view));
  else if (spec.kind === 'clock-sector') clockSector(ctx, spec);
  else if (spec.kind === 'player-token') token(ctx, spec);
  else if (spec.kind === 'podium') podium(ctx);
  else if (spec.kind === 'victory-star') victoryStar(ctx, spec.color);
  else if (spec.kind === 'confetti') confetti(ctx, spec);
  else if (spec.kind === 'books') books(ctx, spec);
  else if (spec.kind === 'goal-icon') goalIcon(ctx, spec, bitmap(assets, view, loop, cel)!, colors(assets, view));
  else if (spec.kind === 'time-clock') timeClock(ctx, spec, bitmap(assets, view, loop, cel)!, colors(assets, view));
  else door(ctx, spec, bitmap(assets, view, loop, cel)!);
  ctx.resetTransform();
  return canvas;
}
/** Static pic11 face. The original has 12 dot markers, a central hub and NO
 * independent hands; elapsed time is the separately owned view270 red sector.
 * The compositor must exclude newer owners (including dialogs and tokens).
 * No extra time input is accepted, so save/reconnect cannot desynchronize it. */
export function createHdClockFaceCanvas(assets: NativeAssetManifest): HTMLCanvasElement | null {
  if (assets.pics[11]?.width !== 320 || assets.pics[11]?.height !== 200) return null;
  const target = surface(26, 23); if (!target) return null;
  const [canvas, ctx] = target;
  const cx = 12.5, cy = 11.5;
  ctx.fillStyle = radial(ctx, cx, cy + 1, 13, [[0, 'rgba(10,12,17,.7)'], [.82, 'rgba(10,12,17,.4)'], [1, 'rgba(10,12,17,0)']]);
  ctx.beginPath(); ctx.ellipse(cx, cy + .8, 12.3, 10.7, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx, cy, 11.3, 10.3, 0, 0, Math.PI * 2);
  ctx.fillStyle = linear(ctx, 4, 1, 20, 22, [[0, '#35281e'], [.2, '#fff1c7'], [.29, '#c89a43'], [.46, '#825222'], [.67, '#ffdea0'], [.8, '#937039'], [1, '#3d291b']]); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx, cy, 10.4, 9.4, 0, 0, Math.PI * 2); ctx.strokeStyle = '#e8c684'; ctx.lineWidth = .24; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(cx, cy, 9.5, 8.5, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#614823'; ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx, cy, 9.15, 8.15, 0, 0, Math.PI * 2);
  ctx.fillStyle = radial(ctx, cx - 2.3, cy - 3.6, 14, [[0, '#fffce3'], [.5, '#f8f0af'], [1, '#ddc57a']]); ctx.fill();
  clockMarkers(ctx, cx, cy);
  ctx.beginPath(); ctx.ellipse(cx - 1.5, cy - 1.5, 9.5, 8.3, -.12, Math.PI * 1.06, Math.PI * 1.53);
  ctx.strokeStyle = 'rgba(255,255,241,.55)'; ctx.lineWidth = .28; ctx.stroke();
  ctx.resetTransform();
  return canvas;
}

function polygon(ctx: CanvasRenderingContext2D, points: number[][]) {
  ctx.beginPath(); points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath();
}
function goalIcon(ctx: CanvasRenderingContext2D, spec: Extract<HdPropSpec, { kind: 'goal-icon' }>, source: CelAsset, palette: RGB[]) {
  // goalsDefine.sc corner1..4 uses these four illustrations. The black frame,
  // colored mat and dimensions stay original; there are no substituted labels.
  originalRegions(ctx, source, palette, [{ left: 0, top: 0, right: 36, bottom: 24 }]);
  const pixels = decodeBytes(source.pixels); ctx.fillStyle = css(palette[pixels[2 * 36 + 2]]); ctx.fillRect(2, 2, 32, 20);
  ctx.save(); ctx.beginPath(); ctx.rect(2, 2, 32, 20); ctx.clip();
  if (spec.goal === 0) {
    ctx.fillStyle = '#3d665e'; polygon(ctx, [[5, 17], [12, 9], [29, 9], [33, 18]]); ctx.fill();
    for (const offset of [0, 11]) {
      polygon(ctx, [[5 + offset, 16.8], [11 + offset, 9], [19 + offset, 9], [21 + offset, 16.8]]);
      ctx.fillStyle = linear(ctx, 0, 9, 0, 18, [[0, '#dce5c0'], [.5, '#c8d9b1'], [1, '#789b77']]); ctx.fill(); ctx.strokeStyle = '#65816e'; ctx.lineWidth = .45; ctx.stroke();
      polygon(ctx, [[7 + offset, 15.4], [11.5 + offset, 10.1], [18 + offset, 10.1], [19.2 + offset, 15.4]]);
      ctx.strokeStyle = '#749676'; ctx.lineWidth = .24; ctx.stroke();
      ctx.beginPath(); ctx.ellipse(14 + offset, 12.6, 1.65, 1.9, .3, 0, Math.PI * 2); ctx.fillStyle = '#8aa582'; ctx.fill();
      ctx.strokeStyle = '#537b62'; ctx.lineWidth = .18;
      for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(8.2 + offset + i * .35, 14.2 - i * .65); ctx.lineTo(10.3 + offset + i * .35, 14.2 - i * .65); ctx.stroke(); }
    }
  } else if (spec.goal === 1) {
    ctx.beginPath(); ctx.ellipse(18, 12.2, 10.3, 8.1, 0, 0, Math.PI * 2); ctx.fillStyle = '#c78235'; ctx.fill();
    ctx.beginPath(); ctx.ellipse(17.6, 11.7, 9.5, 7.5, 0, 0, Math.PI * 2);
    ctx.fillStyle = radial(ctx, 14.5, 7, 16, [[0, '#fff1a0'], [.45, '#f6cb69'], [1, '#bd742c']]); ctx.fill();
    ctx.strokeStyle = '#fff3ac'; ctx.lineWidth = .3; ctx.stroke();
    ctx.fillStyle = '#79502a';
    for (const x of [14.1, 21.3]) { ctx.beginPath(); ctx.ellipse(x, 10.2, .8, 1.05, 0, 0, Math.PI * 2); ctx.fill(); }
    ctx.beginPath(); ctx.ellipse(17.8, 12.9, 4.75, 2.5, 0, .15, Math.PI - .15); ctx.strokeStyle = '#8c592b'; ctx.lineWidth = .85; ctx.stroke();
    ctx.fillStyle = 'rgba(255,245,172,.55)'; ctx.beginPath(); ctx.ellipse(14.4, 6.9, 3, .75, -.25, 0, Math.PI * 2); ctx.fill();
  } else if (spec.goal === 2) {
    rounded(ctx, 4.5, 12, 28, 7.5, 2.8); ctx.fillStyle = '#528d79'; ctx.fill();
    rounded(ctx, 4, 11.5, 28, 6.5, 2.5);
    ctx.fillStyle = linear(ctx, 0, 11.5, 0, 18, [[0, '#f9ffff'], [.35, '#eef7f5'], [.75, '#bcced0'], [1, '#819ba5']]); ctx.fill();
    ctx.beginPath(); ctx.ellipse(6.2, 14.5, 1.7, 2.8, 0, 0, Math.PI * 2); ctx.strokeStyle = '#71909b'; ctx.lineWidth = .3; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(6.2, 14.5, .8, 1.7, 0, 0, Math.PI * 2); ctx.stroke();
    polygon(ctx, [[16, 12], [14, 6.5], [15, 5.5], [19, 9.5], [22, 6.5], [24, 7.5], [21, 12.5], [25, 18], [21, 17], [18.5, 13], [16.5, 18], [13, 17]]);
    ctx.fillStyle = linear(ctx, 14, 6, 23, 18, [[0, '#aed9e6'], [.35, '#70b4ca'], [.6, '#307b9a'], [1, '#a1d6df']]); ctx.fill();
    rounded(ctx, 17.4, 10.4, 3, 3, .6); ctx.fillStyle = '#4795b3'; ctx.fill(); ctx.strokeStyle = '#bdedf2'; ctx.lineWidth = .25; ctx.stroke();
  } else {
    rounded(ctx, 13, 6.1, 10, 5, 1); ctx.strokeStyle = '#755633'; ctx.lineWidth = 1.7; ctx.stroke();
    rounded(ctx, 4, 9, 28, 11, 1);
    ctx.fillStyle = linear(ctx, 0, 9, 0, 20, [[0, '#ab8c4e'], [.16, '#806033'], [.23, '#543b27'], [1, '#735434']]); ctx.fill();
    ctx.strokeStyle = '#482f21'; ctx.lineWidth = .4; ctx.stroke();
    rounded(ctx, 4.5, 9.4, 27, 3.8, .6); ctx.fillStyle = linear(ctx, 0, 9.4, 0, 13, [[0, '#b39351'], [1, '#765330']]); ctx.fill();
    ctx.strokeStyle = '#c6a873'; ctx.lineWidth = .18; ctx.stroke();
    for (const x of [9.5, 25]) { rounded(ctx, x, 12, 1.8, 2.5, .25); ctx.fillStyle = '#d5bd78'; ctx.fill(); ctx.fillStyle = '#786740'; ctx.fillRect(x + .55, 12.8, .7, .8); }
    ctx.strokeStyle = 'rgba(214,178,117,.35)'; ctx.lineWidth = .15; ctx.strokeRect(5.2, 14.2, 25.6, 4.7);
  }
  ctx.restore();
  originalRegions(ctx, source, palette, spec.originalRegions);
}
function timeClock(ctx: CanvasRenderingContext2D, spec: Extract<HdPropSpec, { kind: 'time-clock' }>, source: CelAsset, palette: RGB[]) {
  // WButton.TimeClock cycles these cels after work. The hands remain fixed in
  // all original frames; card/crank geometry follows the four drawn poses.
  originalRegions(ctx, source, palette, [{ left: 0, top: 0, right: 68, bottom: 55 }]);
  ctx.fillStyle = css(palette[decodeBytes(source.pixels)[2 * 68 + 2]]); ctx.fillRect(13, 2, 49, 51);
  polygon(ctx, [[14, 50], [18, 12], [21, 10], [43, 10], [47, 13], [48, 51]]);
  ctx.fillStyle = linear(ctx, 14, 0, 48, 0, [[0, '#3d5364'], [.17, '#7d8e9d'], [.27, '#b8c4ce'], [.79, '#838f9a'], [1, '#394d5c']]); ctx.fill();
  rounded(ctx, 19, 12.5, 27, 37, 1); ctx.fillStyle = linear(ctx, 0, 13, 0, 50, [[0, '#9eaeb9'], [.4, '#798996'], [1, '#536875']]); ctx.fill();
  ctx.strokeStyle = '#bbc8d0'; ctx.lineWidth = .35; ctx.stroke();
  for (let y = 36; y < 43; y += 1.2) { ctx.strokeStyle = 'rgba(24,40,51,.17)'; ctx.lineWidth = .18; ctx.beginPath(); ctx.moveTo(20, y); ctx.lineTo(45, y); ctx.stroke(); }
  rounded(ctx, 22, 10.3, 19, 1.5, .4); ctx.fillStyle = '#243641'; ctx.fill();
  ctx.fillStyle = linear(ctx, 0, spec.cardTop, 0, 12, [[0, '#d6e7f3'], [1, '#f2f9fc']]); ctx.fillRect(25, spec.cardTop, 14, 12 - spec.cardTop);
  ctx.strokeStyle = '#a7c4d5'; ctx.lineWidth = .25;
  for (let y = spec.cardTop + 1.2; y < 11; y += 1.7) { ctx.beginPath(); ctx.moveTo(26, y); ctx.lineTo(38, y); ctx.stroke(); }
  const cx = 31.5, cy = 25, rx = 12, ry = 10.5;
  ctx.beginPath(); ctx.ellipse(cx, cy, rx + .9, ry + .9, 0, 0, Math.PI * 2);
  ctx.fillStyle = linear(ctx, 20, 15, 43, 36, [[0, '#e7edf0'], [.25, '#95a5b0'], [.6, '#657681'], [1, '#e0e9ec']]); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.fillStyle = '#f0f6f8'; ctx.fill();
  for (let tick = 0; tick < 12; tick++) {
    const a = tick * Math.PI / 6 - Math.PI / 2;
    ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * 10.5, cy + Math.sin(a) * 9);
    ctx.lineTo(cx + Math.cos(a) * 9.6, cy + Math.sin(a) * 8.2); ctx.lineWidth = .5; ctx.strokeStyle = '#667580'; ctx.stroke();
  }
  ctx.beginPath(); ctx.moveTo(cx, cy - 7.7); ctx.lineTo(cx, cy); ctx.lineTo(cx + 5.7, cy + 6.2);
  ctx.strokeStyle = '#536f85'; ctx.lineWidth = .85; ctx.lineCap = 'round'; ctx.stroke();
  ctx.beginPath(); ctx.arc(cx, cy, .8, 0, Math.PI * 2); ctx.fillStyle = '#728999'; ctx.fill();
  rounded(ctx, 23, 42, 18, 4.8, .4); ctx.fillStyle = '#bccbd3'; ctx.fill();
  rounded(ctx, 24, 42.9, 16, 2.8, .25); ctx.fillStyle = '#647782'; ctx.fill();
  for (const [x, y] of [[20.5, 38], [43.8, 38], [20.5, 48], [43.8, 48]]) {
    ctx.beginPath(); ctx.arc(x, y, .48, 0, Math.PI * 2); ctx.fillStyle = '#cbd5da'; ctx.fill();
    ctx.strokeStyle = '#5a6d77'; ctx.lineWidth = .15; ctx.beginPath(); ctx.moveTo(x - .25, y + .2); ctx.lineTo(x + .25, y - .2); ctx.stroke();
  }
  ctx.beginPath(); ctx.moveTo(46, 43); ctx.lineTo(49.5, 41); ctx.lineTo(spec.crank.x, spec.crank.y);
  ctx.strokeStyle = '#344d5d'; ctx.lineWidth = 2.2; ctx.stroke();
  ctx.strokeStyle = '#bfd1d8'; ctx.lineWidth = .8; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(spec.crank.x, spec.crank.y, 2.6, spec.frame === 0 ? 4.7 : 2.7, 0, 0, Math.PI * 2);
  ctx.fillStyle = radial(ctx, spec.crank.x - .8, spec.crank.y - .8, 4, [[0, '#9eb4bf'], [.35, '#647985'], [1, '#243c4b']]); ctx.fill();
  ctx.strokeStyle = '#304958'; ctx.lineWidth = .4; ctx.stroke();
}
function door(ctx: CanvasRenderingContext2D, spec: Extract<HdPropSpec, { kind: 'door' }>, source: CelAsset) {
  // Exact original alpha silhouette, including projected leaves at the bottom.
  const pixels = decodeBytes(source.pixels), w = spec.width, h = spec.height;
  ctx.save(); ctx.beginPath();
  for (let y = 0; y < h; y++) for (let x = 0; x < w;) {
    if (pixels[y * w + x] === source.clear) { x++; continue; }
    const left = x; while (++x < w && pixels[y * w + x] !== source.clear) { /* opaque source run */ }
    ctx.rect(left, y, x - left, 1);
  }
  ctx.clip();
  const darker = (factor: number) => css(spec.color.map(v => Math.max(0, Math.min(255, Math.round(v * factor)))) as RGB);
  ctx.fillStyle = linear(ctx, 0, 0, w, h, [[0, darker(1.3)], [.17, darker(.83)], [.46, darker(1.05)], [.75, darker(.72)], [1, darker(1.15)]]); ctx.fillRect(0, 0, w, h);
  const frame = Math.max(.55, w * .075);
  for (const side of [0, 1]) {
    const left = side ? w / 2 + .13 : frame, right = side ? w - frame : w / 2 - .13;
    const leafW = right - left;
    if (spec.material === 'wood') {
      rounded(ctx, left + .2, 1, Math.max(.3, leafW - .4), h - 2.2, .14);
      ctx.strokeStyle = darker(.57); ctx.lineWidth = .25; ctx.stroke();
      for (let grain = 1; grain < 4; grain++) {
        const x = left + leafW * grain / 4;
        ctx.beginPath(); ctx.moveTo(x, 1); ctx.bezierCurveTo(x - .2, h * .35, x + .25, h * .65, x, h - 1);
        ctx.strokeStyle = grain % 2 ? darker(.78) : darker(1.15); ctx.lineWidth = .10; ctx.stroke();
      }
      ctx.strokeStyle = darker(.62); ctx.lineWidth = .16; ctx.strokeRect(left + .45, h * .52, Math.max(.2, leafW - .9), h * .30);
    } else {
      ctx.fillStyle = linear(ctx, left, 0, right, h, [[0, darker(.75)], [.36, darker(1.38)], [.4, darker(.91)], [.70, darker(1.18)], [1, darker(.7)]]);
      ctx.fillRect(left, .85, leafW, h - 2.3);
      ctx.strokeStyle = 'rgba(224,244,254,.5)'; ctx.lineWidth = .17;
      ctx.beginPath(); ctx.moveTo(left + .2, h * .41); ctx.lineTo(right - .2, h * .15); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(left + .2, h * .8); ctx.lineTo(right - .2, h * .56); ctx.stroke();
      ctx.fillStyle = darker(.72); ctx.fillRect(left, h * .5, leafW, .45);
    }
  }
  ctx.strokeStyle = darker(1.6); ctx.lineWidth = .17;
  ctx.beginPath(); ctx.moveTo(frame / 2, .3); ctx.lineTo(frame / 2, h); ctx.moveTo(w - frame / 2, .3); ctx.lineTo(w - frame / 2, h); ctx.stroke();
  // The exact interior runs override the leaves; material detail never changes
  // the aperture, carpet level, original silhouette, cadence or destination.
  for (const { rect: r, color } of spec.aperture) {
    ctx.fillStyle = linear(ctx, r.left, 0, r.right, 0, [[0, css(color.map(v => Math.round(v * .8)) as RGB)], [.5, css(color)], [1, css(color.map(v => Math.round(v * .78)) as RGB)]]);
    ctx.fillRect(r.left, r.top, r.right - r.left, 1);
  }
  ctx.restore();
}

function podium(ctx: CanvasRenderingContext2D) {
  // winnerScript.sc pedistal: the original low blue dais with its red top rim.
  polygon(ctx, [[4, .5], [56, .5], [59.8, 10.7], [.2, 10.7]]);
  ctx.fillStyle = linear(ctx, 0, 0, 60, 0, [[0, '#244d74'], [.15, '#628bab'], [.5, '#c4e0f2'], [.83, '#628bab'], [1, '#244d74']]); ctx.fill();
  ctx.strokeStyle = '#315b7a'; ctx.lineWidth = .45; ctx.stroke();
  polygon(ctx, [[4.5, .6], [55.5, .6], [56.5, 2.5], [3.5, 2.5]]);
  ctx.fillStyle = linear(ctx, 0, 0, 60, 0, [[0, '#933142'], [.18, '#ea5b63'], [.5, '#ffbcb3'], [.82, '#e25058'], [1, '#8c3448']]); ctx.fill();
  ctx.strokeStyle = 'rgba(223,242,255,.65)'; ctx.lineWidth = .2;
  for (const x of [5, 11, 19, 29, 40, 49, 55]) { ctx.beginPath(); ctx.moveTo(x, 3.4); ctx.lineTo(30 + (x - 30) * 1.08, 9.5); ctx.stroke(); }
  ctx.strokeStyle = '#284d68'; ctx.lineWidth = .5; ctx.beginPath(); ctx.moveTo(.5, 10.3); ctx.lineTo(59.5, 10.3); ctx.stroke();
}
function victoryStar(ctx: CanvasRenderingContext2D, color: RGB) {
  const vertices = Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + i * Math.PI / 5, radius = i % 2 ? .43 : 1;
    return [3.5 + Math.cos(a) * 3.45 * radius, 3 + Math.sin(a) * 3 * radius];
  });
  polygon(ctx, vertices);
  ctx.fillStyle = linear(ctx, 1, 0, 6, 6, [[0, '#fff6e1'], [.22, css(color)], [.73, css(color.map(v => Math.round(v * .83)) as RGB)], [1, css(color.map(v => Math.round(v * .52)) as RGB)]]); ctx.fill();
  for (let i = 0; i < 10; i += 2) {
    polygon(ctx, [[3.5, 3], vertices[i], vertices[(i + 1) % 10]]);
    ctx.fillStyle = i % 4 ? 'rgba(0,0,0,.1)' : 'rgba(255,255,238,.3)'; ctx.fill();
  }
}
function confetti(ctx: CanvasRenderingContext2D, spec: Extract<HdPropSpec, { kind: 'confetti' }>) {
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (const { color, points } of spec.ribbons) {
    if (!points.length) continue;
    if (points.length === 1) {
      ctx.beginPath(); ctx.ellipse(points[0].x, points[0].y, .48, .34, -.35, 0, Math.PI * 2);
      ctx.fillStyle = css(color); ctx.fill(); continue;
    }
    const trace = () => {
      ctx.beginPath(); ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 1; i++) ctx.quadraticCurveTo(points[i].x, points[i].y, (points[i].x + points[i + 1].x) / 2, (points[i].y + points[i + 1].y) / 2);
      ctx.lineTo(points.at(-1)!.x, points.at(-1)!.y);
    };
    trace(); ctx.strokeStyle = css(color.map(v => Math.round(v * .55)) as RGB); ctx.lineWidth = .98; ctx.stroke();
    trace(); ctx.strokeStyle = css(color); ctx.lineWidth = .63; ctx.stroke();
    trace(); ctx.strokeStyle = 'rgba(255,249,221,.38)'; ctx.lineWidth = .14; ctx.stroke();
  }
}
function books(ctx: CanvasRenderingContext2D, spec: Extract<HdPropSpec, { kind: 'books' }>) {
  // Original order: green, blue, red, grey. Each additional course pile raises
  // the cel by14 pixels. Course names are separate original view707 loop2 cels.
  for (let book = 0; book < spec.count; book++) {
    const top = spec.height - 21 - book * 14, color = spec.colors[book];
    const shade = (factor: number) => css(color.map(v => Math.min(255, Math.round(v * factor))) as RGB);
    polygon(ctx, [[2, top + 9], [96, top + 9], [110, top + 1], [110, top + 13], [96, top + 20], [2, top + 20]]);
    ctx.fillStyle = '#c9d4d5'; ctx.fill();
    polygon(ctx, [[96, top + 10], [109, top + 3], [109, top + 12.5], [96, top + 19]]);
    ctx.fillStyle = linear(ctx, 96, top, 110, top + 20, [[0, '#f7f5df'], [.5, '#dfe4d8'], [1, '#8dadae']]); ctx.fill();
    ctx.strokeStyle = 'rgba(70,102,105,.42)'; ctx.lineWidth = .22;
    for (let row = 0; row < 5; row++) { ctx.beginPath(); ctx.moveTo(96.5, top + 11 + row * 1.45); ctx.lineTo(109, top + 4.3 + row * 1.45); ctx.stroke(); }
    rounded(ctx, .8, top + 8.6, 95.5, 11.7, 1.8);
    ctx.fillStyle = linear(ctx, 0, top + 8, 0, top + 21, [[0, shade(1.15)], [.18, shade(1)], [.7, shade(.79)], [1, shade(.58)]]); ctx.fill();
    ctx.strokeStyle = shade(.6); ctx.lineWidth = .3; ctx.stroke();
    polygon(ctx, [[2, top + 8.8], [17, top + .65], [110, top + .65], [96, top + 8.8]]);
    ctx.fillStyle = linear(ctx, 0, top, 0, top + 9, [[0, shade(1.4)], [1, shade(1.07)]]); ctx.fill();
    ctx.strokeStyle = shade(.8); ctx.lineWidth = .22; ctx.stroke();
    polygon(ctx, [[11, top + 7], [21, top + 2], [103, top + 2], [94, top + 7]]);
    ctx.strokeStyle = 'rgba(238,246,223,.38)'; ctx.lineWidth = .22; ctx.stroke();
    ctx.strokeStyle = shade(1.6); ctx.lineWidth = .23; ctx.beginPath(); ctx.moveTo(3.5, top + 9.2); ctx.lineTo(94, top + 9.2); ctx.stroke();
    ctx.strokeStyle = shade(.67); ctx.lineWidth = .22;
    for (const x of [4, 89, 92]) { ctx.beginPath(); ctx.moveTo(x, top + 10.2); ctx.lineTo(x, top + 18.8); ctx.stroke(); }
  }
}
