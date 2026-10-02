// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { glyphInkBounds } from './glyph-bounds.js';
import type { NativeAssetManifest } from './types.js';
const assets = JSON.parse(readFileSync(new URL('../public/assets/manifest.json', import.meta.url), 'utf8')) as NativeAssetManifest;

test('original speech punctuation retains its small ink bounds and baseline', () => {
  const font = assets.fonts[1];
  assert.deepEqual(glyphInkBounds(font.chars[46]), { left: 1, top: 7, right: 2, bottom: 8 });
  assert.deepEqual(glyphInkBounds(font.chars[45]), { left: 1, top: 3, right: 6, bottom: 4 });
  const letter = glyphInkBounds(font.chars[85])!;
  assert(letter.bottom - letter.top > 1, 'Letters retain their full ink height');
});
test('spaces do not acquire an artificial HD glyph in any original font', () => {
  for (const font of Object.values(assets.fonts)) assert.equal(glyphInkBounds(font.chars[32]), null);
});
