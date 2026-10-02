// SPDX-License-Identifier: GPL-3.0-or-later
import { decodeBytes } from './bytes.js';
import type { GraphicsFrame, HdDrawOp, NativeAssetManifest, Rect, RGB } from './types.js';

export interface HdSilhouetteBackdrop {
  backgroundOp?: HdDrawOp;
  /** The visible, already palette-adjusted color; do not apply the palette twice. */
  color?: RGB;
}
export interface HdSilhouettePlan {
  owners: Uint32Array;
  backdrops: Map<number, HdSilhouetteBackdrop>;
}

const validRect = (r: Rect | undefined): r is Rect => !!r &&
  [r.left, r.top, r.right, r.bottom].every(Number.isFinite) && r.right > r.left && r.bottom > r.top;
const contains = (outer: Rect, inner: Rect) => outer.left <= inner.left && outer.top <= inner.top &&
  outer.right >= inner.right && outer.bottom >= inner.bottom;
const rgbKey = (c: RGB | undefined): string | undefined => c && c.length === 3 && c.every(Number.isFinite) ? c.join(',') : undefined;

/** Presentation-only silhouette expansion for explicitly opted-in generated-alpha cels.
 *
 * The original clear pixels provide evidence of the backdrop. A containing image
 * needs a strict majority of at least four samples; a solid fallback needs 95% of
 * the eligible samples to match. Other foreground owners are never reclaimed.
 * Pass paintableBackgroundIds when only some original ops have HD replacements:
 * an unavailable nonuniform backdrop then leaves the original ownership intact.
 * No authoritative frame, source pixels, palette, or input array is modified.
 */
export function planHdSilhouettes(
  assets: NativeAssetManifest, frame: GraphicsFrame, owners: Uint32Array, pixels: Uint8Array,
  candidateIds: ReadonlySet<number>, paintableBackgroundIds?: ReadonlySet<number>,
): HdSilhouettePlan {
  const result: HdSilhouettePlan = { owners: owners.slice(), backdrops: new Map() };
  const { width, height } = frame;
  if (!frame.hd || frame.hd.version !== 1 || !Number.isSafeInteger(width) || !Number.isSafeInteger(height) ||
      width < 1 || height < 1 || width * height !== owners.length || pixels.length !== owners.length) return result;
  const ops = new Map(frame.hd.ops.map(op => [op.id, op]));
  for (const id of candidateIds) {
    const op = ops.get(id);
    if (!op || op.kind !== 'cel' || !validRect(op.dest) || !validRect(op.source) || !validRect(op.clip)) continue;
    const cel = assets.views[op.view]?.loops[op.loop]?.cels[op.cel];
    if (!cel || !Number.isSafeInteger(cel.width) || !Number.isSafeInteger(cel.height) ||
        cel.width < 1 || cel.height < 1 || cel.width * cel.height > 1_048_576) continue;
    let source: Uint8Array;
    try { source = decodeBytes(cel.pixels); } catch { continue; }
    if (source.length !== cel.width * cel.height || op.source.left < 0 || op.source.top < 0 ||
        op.source.right > cel.width || op.source.bottom > cel.height) continue;
    const bounds: Rect = {
      left: Math.max(0, Math.ceil(op.dest.left), Math.ceil(op.clip.left)),
      top: Math.max(0, Math.ceil(op.dest.top), Math.ceil(op.clip.top)),
      right: Math.min(width, Math.floor(op.dest.right), Math.floor(op.clip.right)),
      bottom: Math.min(height, Math.floor(op.dest.bottom), Math.floor(op.clip.bottom)),
    };
    if (!validRect(bounds)) continue;
    const eligibleBackgrounds = new Map<number, HdDrawOp>();
    const clearPixels: number[] = [], ownerCounts = new Map<number, number>(), colorCounts = new Map<string, number>();
    let visibleBody = 0, sampleCount = 0;
    for (let y = bounds.top; y < bounds.bottom; y++) for (let x = bounds.left; x < bounds.right; x++) {
      const at = y * width + x, owner = owners[at];
      // Exported original cels already include their SCI mirroring.
      const sx = Math.floor(op.source.left + (x + .5 - op.dest.left) *
        (op.source.right - op.source.left) / (op.dest.right - op.dest.left));
      const sy = Math.floor(op.source.top + (y + .5 - op.dest.top) *
        (op.source.bottom - op.source.top) / (op.dest.bottom - op.dest.top));
      if (source[sy * cel.width + sx] !== cel.clear) {
        if (owner === id) visibleBody++;
        continue;
      }
      // An opaque original body pixel currently owned by its backdrop may be
      // hidden by SCI priority. Only originally clear pixels may be expanded.
      if (owner === id || candidateIds.has(owner)) continue;
      if (owner !== 0) {
        const background = ops.get(owner);
        if (!background || background.kind === 'text' || !validRect(background.dest) ||
            !validRect(background.clip) || !contains(background.dest, op.dest) || !contains(background.clip, bounds)) continue;
        eligibleBackgrounds.set(owner, background);
      }
      const color = rgbKey(frame.palette[pixels[at]]);
      if (color === undefined) continue;
      clearPixels.push(at); sampleCount++;
      ownerCounts.set(owner, (ownerCounts.get(owner) || 0) + 1);
      colorCounts.set(color, (colorCounts.get(color) || 0) + 1);
    }
    if (visibleBody === 0 || sampleCount < 4) continue;
    const dominant = [...ownerCounts].sort((a, b) => b[1] - a[1] || a[0] - b[0])[0];
    const colorSample = [...colorCounts].sort((a, b) => b[1] - a[1])[0];
    const uniform = colorSample && colorSample[1] >= 4 && colorSample[1] / sampleCount >= .95 ? colorSample[0] : undefined;
    const background = dominant[0] !== 0 && dominant[1] >= 4 && dominant[1] > sampleCount / 2 ?
      eligibleBackgrounds.get(dominant[0]) : undefined;
    const image = background && (!paintableBackgroundIds || paintableBackgroundIds.has(background.id)) ? background : undefined;
    if (!image && !uniform) continue;
    const plan: HdSilhouetteBackdrop = {};
    if (image) plan.backgroundOp = structuredClone(image);
    if (uniform) plan.color = uniform.split(',').map(Number) as RGB;
    result.backdrops.set(id, plan);
    for (const at of clearPixels) {
      const owner = owners[at];
      // Earlier candidates can already own an expanded portion of this area.
      if (candidateIds.has(result.owners[at])) continue;
      if (owner === 0) {
        if (uniform && rgbKey(frame.palette[pixels[at]]) === uniform) result.owners[at] = id;
      } else if (background && owner === background.id &&
          (image || (uniform && rgbKey(frame.palette[pixels[at]]) === uniform))) {
        result.owners[at] = id;
      }
    }
  }
  return result;
}
