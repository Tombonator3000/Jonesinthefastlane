// SPDX-License-Identifier: GPL-3.0-or-later
import { decodeBytes } from './bytes.js';
import type { FontGlyph, Rect } from './types.js';

/** SCI glyph dimensions include padding; only the actual ink may be fitted. */
export function glyphInkBounds(glyph: FontGlyph): Rect | null {
  const bits = decodeBytes(glyph.bits);
  if (bits.length !== glyph.width * glyph.height) return null;
  let left = glyph.width, top = glyph.height, right = 0, bottom = 0;
  for (let y = 0; y < glyph.height; y++) for (let x = 0; x < glyph.width; x++) if (bits[y * glyph.width + x]) {
    left = Math.min(left, x); top = Math.min(top, y); right = Math.max(right, x + 1); bottom = Math.max(bottom, y + 1);
  }
  return right > left && bottom > top ? { left, top, right, bottom } : null;
}
