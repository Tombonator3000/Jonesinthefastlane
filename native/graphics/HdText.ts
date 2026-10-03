// SPDX-License-Identifier: GPL-3.0-or-later
// Presentation only. SCI supplies every character, cell, color and disabled
// state. There is no reflow, text substitution, input handling or game state.
import { decodeBytes } from './bytes.js';
import type { FontGlyph, HdDrawOp, HdTextShadow, NativeAssetManifest, Rect, RGB } from './types.js';

export const HD_TEXT_SCALE = 8;
export type HdTextOp = Extract<HdDrawOp, { kind: 'text' }>;
export interface HdTextFont { family: 'Jones HD Mono' | 'Jones HD Serif'; weight: 400 | 700 }
export interface HdTextGlyphLayout {
  char: string;
  code: number;
  /** Cell and ink rectangles are relative to op.dest, in original pixels. */
  cell: Rect;
  ink: Rect | null;
  background: number;
  /** Original Item greyed checkerboard uses glyph-local x and port-local y. */
  stipplePhase: 0 | 1 | null;
}
export interface HdTextLayout { width: number; height: number; clip: Rect; font: HdTextFont; glyphs: HdTextGlyphLayout[]; shadow?: HdTextShadow }
export interface HdTextInkMetrics {
  actualBoundingBoxLeft: number;
  actualBoundingBoxRight: number;
  actualBoundingBoxAscent: number;
  actualBoundingBoxDescent: number;
}

const validRect = (r: Rect | undefined): r is Rect => !!r &&
  [r.left, r.top, r.right, r.bottom].every(v => Number.isSafeInteger(v) && v >= -32768 && v <= 32767) &&
  r.right > r.left && r.bottom > r.top;
const intersect = (a: Rect, b: Rect): Rect => ({ left: Math.max(a.left, b.left), top: Math.max(a.top, b.top), right: Math.min(a.right, b.right), bottom: Math.min(a.bottom, b.bottom) });
const offset = (r: Rect, x: number, y: number): Rect => ({ left: r.left + x, top: r.top + y, right: r.right + x, bottom: r.bottom + y });
const paletteIndex = (v: number) => Number.isInteger(v) && v >= 0 && v < 256;
const glyphBounds = new WeakMap<FontGlyph, { signature: string; valid: boolean; ink: Rect | null }>();

/** The shipped font atlases were inspected: font1 is a light serif and font8
 * a heavy display serif; the remaining supported fonts are compact block faces.
 * Per-glyph fitting preserves their original advances rather than the new font's.
 */
export function getHdTextFont(font: number): HdTextFont | null {
  if (font === 1) return { family: 'Jones HD Serif', weight: 400 };
  if (font === 8) return { family: 'Jones HD Serif', weight: 700 };
  if ([0, 3, 4, 10, 14, 999].includes(font)) return { family: 'Jones HD Mono', weight: 700 };
  return null;
}

function inspectGlyph(glyph: FontGlyph): { valid: boolean; ink: Rect | null } {
  if (!glyph || !Number.isSafeInteger(glyph.width) || !Number.isSafeInteger(glyph.height) ||
      glyph.width < 0 || glyph.height < 0 || glyph.width > 64 || glyph.height > 64 || typeof glyph.bits !== 'string' || glyph.bits.length > 5464)
    return { valid: false, ink: null };
  const signature = `${glyph.width}:${glyph.height}:${glyph.bits}`, prior = glyphBounds.get(glyph);
  if (prior?.signature === signature) return prior;
  let ink: Rect | null = null;
  try {
    const bits = decodeBytes(glyph.bits);
    if (bits.length !== glyph.width * glyph.height) return { valid: false, ink: null };
    for (let y = 0; y < glyph.height; y++) for (let x = 0; x < glyph.width; x++) if (bits[y * glyph.width + x]) {
      if (!ink) ink = { left: x, top: y, right: x + 1, bottom: y + 1 };
      else { ink.left = Math.min(ink.left, x); ink.top = Math.min(ink.top, y); ink.right = Math.max(ink.right, x + 1); ink.bottom = Math.max(ink.bottom, y + 1); }
    }
  } catch { return { valid: false, ink: null }; }
  const result = { signature, valid: true, ink }; glyphBounds.set(glyph, result); return result;
}

/** Null means no ink (or invalid source); layout separately rejects invalid data.
 * In particular a period uses its own tiny baseline bounds, not the whole cell.
 */
export function getHdGlyphInkBounds(glyph: FontGlyph): Rect | null {
  const { ink } = inspectGlyph(glyph); return ink ? { ...ink } : null;
}

/** Bounded, DOM-free layout. Mixed operations leave unsupported/nonuniform cells
 * transparent so the authoritative original raster remains visible underneath.
 */
export function getHdTextLayout(op: HdTextOp, assets: NativeAssetManifest): HdTextLayout | null {
  if (!op || op.kind !== 'text' || !validRect(op.dest) || !validRect(op.source) || !validRect(op.clip) ||
      !op.port || !Number.isSafeInteger(op.port.top) || !paletteIndex(op.color) || typeof op.greyed !== 'boolean' ||
      typeof op.text !== 'string' || op.text.length > 4096 || !Array.isArray(op.glyphs) || op.glyphs.length > 2048 ||
      (op.shadow && (!paletteIndex(op.shadow.color) || op.shadow.offsetX !== 1 || op.shadow.offsetY !== 1))) return null;
  const width = op.dest.right - op.dest.left, height = op.dest.bottom - op.dest.top;
  // Keep allocation at most one original screen (2560x1600 at8x). Unusually
  // large or malformed clipped DrawText rectangles safely use the raster.
  if (width > 320 || height > 200 || op.source.left !== 0 || op.source.top !== 0 || op.source.right !== width || op.source.bottom !== height) return null;
  const screenClip = intersect(intersect(op.dest, op.clip), { left: 0, top: 0, right: 320, bottom: 200 });
  const font = getHdTextFont(op.font), sourceFont = assets?.fonts?.[op.font];
  if (!font || !sourceFont || !validRect(screenClip)) return null;
  const glyphs: HdTextGlyphLayout[] = [];
  for (const glyph of op.glyphs) {
    if (!glyph || typeof glyph.char !== 'string' || ![glyph.code, glyph.x, glyph.y, glyph.width, glyph.height, glyph.advance].every(Number.isSafeInteger) ||
        glyph.width < 0 || glyph.height < 0 || glyph.width > 64 || glyph.height > 64 || glyph.advance !== glyph.width ||
        glyph.height !== sourceFont.lineHeight || Math.abs(glyph.x) > 32768 || Math.abs(glyph.y) > 32768 ||
        (glyph.background !== null && !paletteIndex(glyph.background))) return null;
    // Control-character cells contain original icons, not equivalent Unicode
    // letters. Never erase them with a font substitution or a blank background.
    if (glyph.background === null || glyph.code < 32 || glyph.code > 126 || glyph.char !== String.fromCharCode(glyph.code)) continue;
    const source = sourceFont.chars[glyph.code];
    if (!source || source.code !== glyph.code || source.advance !== glyph.advance) return null;
    const inspected = inspectGlyph(source);
    if (!inspected.valid) return null;
    if (inspected.ink && (inspected.ink.right > glyph.width || inspected.ink.bottom > glyph.height)) continue;
    const cell = { left: glyph.x, top: glyph.y, right: glyph.x + glyph.width, bottom: glyph.y + glyph.height };
    if (!validRect(intersect(cell, screenClip))) continue;
    const x = glyph.x - op.dest.left, y = glyph.y - op.dest.top;
    glyphs.push({ char: glyph.char, code: glyph.code, cell: offset(cell, -op.dest.left, -op.dest.top),
      ink: inspected.ink && offset(inspected.ink, x, y), background: glyph.background,
      stipplePhase: op.greyed ? ((glyph.y - op.port.top) & 1) as 0 | 1 : null });
  }
  return glyphs.length ? { width, height, clip: offset(screenClip, -op.dest.left, -op.dest.top), font, glyphs, ...(op.shadow ? { shadow: { ...op.shadow } } : {}) } : null;
}

/** Fit new vector outlines to an individual source glyph's ink rectangle. */
export function fitHdTextInk(metrics: HdTextInkMetrics, ink: Rect): { scaleX: number; scaleY: number; baselineX: number; baselineY: number } | null {
  const { actualBoundingBoxLeft: left, actualBoundingBoxRight: right, actualBoundingBoxAscent: ascent, actualBoundingBoxDescent: descent } = metrics;
  if (![left, right, ascent, descent].every(Number.isFinite) || left + right <= 0 || ascent + descent <= 0 || !validRect(ink)) return null;
  return { scaleX: (ink.right - ink.left) / (left + right), scaleY: (ink.bottom - ink.top) / (ascent + descent), baselineX: left, baselineY: ascent };
}

const fontLoads = new WeakMap<Document, { promise: Promise<boolean>; faces: FontFace[]; ready: boolean }>();
// Some TypeScript DOM bundles omit the setlike FontFaceSet methods even though
// browsers implement them. Keep the narrow web API contract explicit here.
type DocumentFontSet = FontFaceSet & { add(face: FontFace): FontFaceSet; has(face: FontFace): boolean };
const fontFiles = [
  { family: 'Jones HD Mono', weight: '700', file: 'LiberationMono-Bold.ttf' },
  { family: 'Jones HD Serif', weight: '400', file: 'LiberationSerif-Regular.ttf' },
  { family: 'Jones HD Serif', weight: '700', file: 'LiberationSerif-Bold.ttf' },
] as const;

export function hdTextFontsReady(): boolean {
  if (typeof document === 'undefined') return false;
  const state = fontLoads.get(document);
  const fonts = document.fonts as DocumentFontSet;
  return !!state?.ready && typeof fonts?.has === 'function' && state.faces.every(face => face.status === 'loaded' && fonts.has(face));
}

/** Load only bundled fonts from this page's origin, preserving a /native/ or
 * other deployment subpath. Failure is a raster fallback, never a system font.
 */
export function loadHdTextFonts(): Promise<boolean> {
  if (typeof document === 'undefined' || typeof FontFace === 'undefined' || !document.fonts) return Promise.resolve(false);
  const prior = fontLoads.get(document); if (prior) return prior.promise;
  const doc = document, state = { promise: Promise.resolve(false), faces: [] as FontFace[], ready: false };
  fontLoads.set(doc, state);
  state.promise = (async () => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    try {
      const base = new URL('fonts/', doc.baseURI);
      if (!['http:', 'https:'].includes(base.protocol) || base.origin !== new URL(doc.URL).origin) return false;
      state.faces = fontFiles.map(font => new FontFace(font.family, `url(${JSON.stringify(new URL(font.file, base).href)})`, { weight: font.weight, style: 'normal' }));
      const loaded = await Promise.race([
        Promise.all(state.faces.map(face => face.load())).then(() => true),
        new Promise<boolean>(resolve => { timeout = setTimeout(() => resolve(false), 15000); }),
      ]);
      if (!loaded || state.faces.some(face => face.status !== 'loaded')) return false;
      for (const face of state.faces) (doc.fonts as DocumentFontSet).add(face);
      state.ready = true; return true;
    } catch { return false; }
    finally { if (timeout !== undefined) clearTimeout(timeout); }
  })();
  return state.promise;
}

/** Canvas covers exactly op.dest at8x; retain the original operation's owner
 * mask/clip when compositing. Transparent cells deliberately show original text.
 */
export function createHdTextCanvas(op: HdTextOp, assets: NativeAssetManifest, palette: RGB[]): HTMLCanvasElement | null {
  if (!hdTextFontsReady()) return null;
  const layout = getHdTextLayout(op, assets); if (!layout) return null;
  const color = (index: number): string | null => {
    const rgb = palette?.[index]; return rgb?.length === 3 && rgb.every(v => Number.isInteger(v) && v >= 0 && v <= 255) ? `rgb(${rgb.join(',')})` : null;
  };
  const inkColor = color(op.color);
  if (!inkColor || layout.glyphs.some(g => !color(g.background)) || (layout.shadow && !color(layout.shadow.color))) return null;
  try {
    const canvas = document.createElement('canvas'); canvas.width = layout.width * HD_TEXT_SCALE; canvas.height = layout.height * HD_TEXT_SCALE;
    const ctx = canvas.getContext('2d'); if (!ctx) return null;
    ctx.scale(HD_TEXT_SCALE, HD_TEXT_SCALE); ctx.font = `${layout.font.weight} 64px "${layout.font.family}"`;
    ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left'; ctx.direction = 'ltr';
    ctx.beginPath(); ctx.rect(layout.clip.left, layout.clip.top, layout.clip.right - layout.clip.left, layout.clip.bottom - layout.clip.top); ctx.clip();
    // Clear all safe cells before either text pass, so a following cell cannot
    // erase the preceding glyph's original(+1,+1) shadow across their boundary.
    ctx.beginPath();
    for (const glyph of layout.glyphs) {
      const c = glyph.cell;
      ctx.fillStyle = color(glyph.background)!; ctx.fillRect(c.left, c.top, c.right - c.left, c.bottom - c.top);
      ctx.rect(c.left, c.top, c.right - c.left, c.bottom - c.top);
    }
    ctx.clip();
    const drawGlyph = (glyph: HdTextGlyphLayout, dx: number, dy: number, fill: string): boolean => {
      const fit = glyph.ink && fitHdTextInk(ctx.measureText(glyph.char), glyph.ink);
      if (glyph.ink && !fit) return false;
      if (glyph.ink && fit) {
        ctx.save(); const c = offset(glyph.cell, dx, dy);
        if (glyph.stipplePhase !== null) {
          ctx.beginPath();
          for (let y = 0; y < c.bottom - c.top; y++) for (let x = 0; x < c.right - c.left; x++)
            if (((x + y + glyph.stipplePhase + dy) & 1) === 1) ctx.rect(c.left + x, c.top + y, 1, 1);
          ctx.clip();
        }
        ctx.translate(glyph.ink.left + dx, glyph.ink.top + dy); ctx.scale(fit.scaleX, fit.scaleY);
        ctx.fillStyle = fill; ctx.fillText(glyph.char, fit.baselineX, fit.baselineY); ctx.restore();
      }
      return true;
    };
    if (layout.shadow) for (const glyph of layout.glyphs)
      if (!drawGlyph(glyph, 1, 1, color(layout.shadow.color)!)) return null;
    for (const glyph of layout.glyphs) if (!drawGlyph(glyph, 0, 0, inkColor)) return null;
    ctx.resetTransform(); return canvas;
  } catch { return null; }
}
