// SPDX-License-Identifier: GPL-3.0-or-later
// Complete resource accounting, not a claim of exhaustive gameplay coverage.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { getHdPropSpec } from '../native/graphics/HdProps.js';
import { getHdIntroSpec } from '../native/graphics/HdIntro.js';
import { getHdUiSpec } from '../native/graphics/HdUi.js';
import { decodeBytes } from '../native/graphics/bytes.js';
import type { NativeAssetManifest } from '../native/graphics/types.js';
const base = new URL('../native/public/', import.meta.url);
const assets = JSON.parse(readFileSync(new URL('assets/manifest.json', base), 'utf8')) as NativeAssetManifest;
const hd = JSON.parse(readFileSync(new URL('hd/manifest.json', base), 'utf8'));
const entries: { key: string; status: string; reason: string; src?: string; uiOverlay?: boolean }[] = [];
function preserved(view: number, loop: number): string | null {
  if (view === 0 && loop === 0) return 'Original flat menu panel and frame';
  if (view === 0 && loop === 3) return 'Original numbered player selection controls';
  if (view === 0 && loop >= 5 && loop <= 12) return 'Original speech-window borders and tails';
  if (view >= 1 && view <= 5) return 'Original intro text and title overlays';
  if ([10, 250, 499, 501, 505, 506].includes(view)) return 'Original interactive selection/goal controls, labels or highlights';
  if (view === 603 && loop === 1) return 'Original flat backing behind opened newspaper';
  if (view === 607 && loop === 1) return 'Original flat backing behind diploma';
  if (view === 608 && loop === 0) return 'Original weekend label and checkerboard panel';
  if ([696, 701, 706, 712].includes(view)) return 'Original location label, action panel or financial control';
  if (view === 707 && loop === 2) return 'Original course names';
  if (view === 710 && loop === 0) return 'Preserved legacy Monolith header; current runtime uses view810';
  if ([803, 804, 807, 808, 809, 810, 811].includes(view)) return 'Original English store branding and flat menu backing';
  return null;
}
for (const [viewId, view] of Object.entries(assets.views)) for (const [loop, l] of view.loops.entries()) for (const [cel, source] of l.cels.entries()) {
  const viewNumber = Number(viewId), key = `${viewId}:${loop}:${cel}`, mapped = hd.cels[key];
  const technical = getHdPropSpec(viewNumber, loop, cel, assets);
  const ui = getHdUiSpec(viewNumber, loop, cel, assets);
  if (technical && mapped) throw new Error(`Double-counted resource ${key}`);
  if (ui && !ui.overlay && (technical || mapped)) throw new Error(`Double-counted UI resource ${key}`);
  if (mapped) { entries.push({ key, status: 'artwork', reason: 'Photographic replacement, with original ink/regions preserved where specified', src: mapped.src,
    ...(ui?.overlay ? { uiOverlay: true } : {}) }); continue; }
  if (technical) { entries.push({ key, status: 'technical', reason: technical.kind, src: 'native/graphics/HdProps.ts' }); continue; }
  if (ui) { entries.push({ key, status: 'ui', reason: 'HD panel/control drawing retains original wording, logical bounds and hit targets', src: 'native/graphics/HdUi.ts' }); continue; }
  const values = new Set(decodeBytes(source.pixels));
  const blank = values.size === 1 || (viewNumber === 708 && loop === 1 && cel === 13 && values.size <= 2);
  const reason = blank ? 'Original blank/clearing cel; no illustration to replace' : preserved(viewNumber, loop);
  entries.push({ key, status: reason ? 'preserved' : 'missing', reason: reason || 'Unclassified original artwork' });
}
const pictures = Object.keys(assets.pics).map(pic => ({ key: `pic:${pic}`, status: hd.pics[pic] ? 'artwork' : getHdIntroSpec(Number(pic), assets) ? 'technical' : 'missing',
  reason: hd.pics[pic] ? 'Photographic town' : 'Original intro pattern with smooth dots; original title/attribution protected' }));
const counts = { artworkCels: 0, technicalCels: 0, uiCels: 0, uiOverlayCels: 0, preservedCels: 0, missingCels: 0, artworkPics: 0, technicalPics: 0, missingPics: 0 };
for (const e of entries) counts[`${e.status}Cels` as keyof typeof counts]++;
counts.uiOverlayCels = entries.filter(e => e.uiOverlay).length;
for (const e of pictures) counts[`${e.status}Pics` as keyof typeof counts]++;
const report = { schema: 1, scope: 'All 752 original cels and seven pictures; static coverage, not exhaustive gameplay or animation parity', counts, pictures, entries };
const at = process.argv.indexOf('--write');
if (at >= 0) {
  if (!process.argv[at + 1]) throw new Error('--write requires an output path');
  writeFileSync(process.argv[at + 1], JSON.stringify(report, null, 2) + '\n');
}
console.log(JSON.stringify(counts));
if (counts.missingCels || counts.missingPics) { console.error(entries.filter(e => e.status === 'missing')); process.exitCode = 1; }
if (hd.coverage.cels !== counts.artworkCels || hd.coverage.technicalCels !== counts.technicalCels || hd.coverage.uiCels !== counts.uiCels ||
    hd.coverage.uiOverlayCels !== counts.uiOverlayCels || hd.coverage.preservedCels !== counts.preservedCels || hd.coverage.technicalPics !== counts.technicalPics)
  throw new Error(`Manifest coverage is stale: ${fileURLToPath(new URL('hd/manifest.json', base))}`);
