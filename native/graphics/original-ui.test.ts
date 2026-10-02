// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { originalTownUiMask, isOriginalTownUiPixel } from './original-ui.js';
import { decodeBytes } from './bytes.js';
import type { HdDrawOp, NativeAssetManifest } from './types.js';
const assets = JSON.parse(readFileSync(new URL('../public/assets/manifest.json', import.meta.url), 'utf8')) as NativeAssetManifest;
const pic = assets.pics[11], pixels = decodeBytes(pic.pixels), mask = originalTownUiMask(pic);

test('original town UI retains both cream shades and the border without cutting lower building artwork', () => {
  const original = JSON.stringify(pic), colors = new Set<string>();
  let protectedPixels = 0, lowerArtworkPixels = 0;
  for (let y = 44; y < 155; y++) for (let x = 68; x < 251; x++) {
    const at = y * 320 + x;
    if (mask[at]) { colors.add(pic.palette[pixels[at]].join(',')); protectedPixels++; }
    else if (y >= 138) lowerArtworkPixels++;
  }
  assert.deepEqual([...colors].sort(), ['0,0,0', '248,248,224', '248,248,240']);
  assert.equal(protectedPixels, 19703, 'Pinned original panel/background pixel count');
  assert(lowerArtworkPixels > 500, 'Protruding roof/building pixels retain HD artwork');
  assert.equal(mask[44 * 320 + 68], 1, 'Original black top-left frame');
  assert.equal(mask[100 * 320 + 160], 1, 'Original cream menu background');
  assert.equal(mask[20 * 320 + 160], 0, 'Town buildings outside the UI remain paintable');
  assert.equal(JSON.stringify(pic), original, 'Mask creation never changes original resources');
});

test('town UI protection follows original source coordinates and mirrored/translated placement', () => {
  const op = { kind: 'pic', pic: 11, mirror: false,
    dest: { left: 10, top: -5, right: 330, bottom: 195 },
    source: { left: 0, top: 0, right: 320, bottom: 200 } } as Extract<HdDrawOp, { kind: 'pic' }>;
  assert.equal(isOriginalTownUiPixel(mask, 320, op, 78, 39), true);
  assert.equal(isOriginalTownUiPixel(mask, 320, op, 77, 39), false);
  assert.equal(isOriginalTownUiPixel(mask, 320, op, 330, 39), false);
  op.mirror = true;
  assert.equal(isOriginalTownUiPixel(mask, 320, op, 261, 39), true);
  assert.equal(isOriginalTownUiPixel(mask, 320, op, 262, 39), false);
  assert.equal(isOriginalTownUiPixel(originalTownUiMask(undefined), 320, op, 261, 39), false);
});
