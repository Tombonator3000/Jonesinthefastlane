// SPDX-License-Identifier: GPL-3.0-or-later
export type RGB = [number, number, number];
export interface Rect { left: number; top: number; right: number; bottom: number }
export interface Point { x: number; y: number }
export interface CelAsset { width: number; height: number; dx: number; dy: number; clear: number; mirrored: boolean; png: string; pixels: string }
export interface FontGlyph { code: number; width: number; height: number; advance: number; bits: string; atlasX: number; atlasY: number }
export interface FontAsset { id: number; lineHeight: number; charCount: number; chars: FontGlyph[]; png: string }
export interface ViewAsset { id: number; loops: { cels: CelAsset[] }[]; paletteUpdates: number[][] }
export interface PicAsset { id: number; width: number; height: number; pixels: string; priority: string; control: string; palette: RGB[]; paletteUpdates?: number[][]; priorityBands?: number[]; png: string }
export interface CursorAsset { id: number; width: number; height: number; hotspotX: number; hotspotY: number; clear: number; pixels: string; png: string }
export interface NativeAssetManifest {
  schema: number; width: number; height: number; defaultPortTop: number; codePage: string[];
  palette: RGB[]; palettes: Record<string, { colors: RGB[]; updates: number[][] }>;
  pics: Record<string, PicAsset>; views: Record<string, ViewAsset>; fonts: Record<string, FontAsset>;
  cursors: Record<string, CursorAsset>; texts: Record<string, string[]>;
}
export interface Port {
  id: number; left: number; top: number; rect: Rect; penX: number; penY: number;
  font: number; color: number; backColor: number; penMode: number; greyed: boolean;
}
export interface TextOptions { font?: number; color?: number; backColor?: number; maxWidth?: number; align?: 'left' | 'center' | 'right' | number; greyed?: boolean }
export interface TextMetrics { width: number; height: number; lineHeight: number; lines: { text: string; width: number }[] }
export interface GraphicsCommand { op: string; args: unknown[] }
export interface CursorState { id: number; visible: boolean; x: number; y: number }
/** Exact source coordinates; cel PNGs already include their exported mirroring. */
export interface HdDrawContext { port: Port; clip: Rect; dest: Rect; source: Rect }
export interface HdGlyph {
  char: string; code: number; x: number; y: number; width: number; height: number; advance: number;
  /** Uniform original background of the full glyph cell, or null for raster fallback. */
  background: number | null;
}
/** Exact original WButton two-pass shadow, with no recursive draw history. */
export interface HdTextShadow { color: number; offsetX: 1; offsetY: 1 }
export type HdDrawOp = HdDrawContext & { id: number } & (
  { kind: 'pic'; pic: number; mirror: boolean; addTo: boolean } |
  { kind: 'cel'; view: number; loop: number; cel: number; mirrored: boolean; priority: number } |
  { kind: 'text'; text: string; font: number; color: number; greyed: boolean; glyphs: HdGlyph[]; shadow?: HdTextShadow }
);
/** Complete scene, not a command replay. owners is base64 RLE [count,id] uint32 LE.
 * Exactly width*height owners; zero retains the original raster at that pixel.
 * Every nonzero owner has an op in this frame, including after reconnect. */
export interface HdFrame { version: 1; owners: string; ops: HdDrawOp[]; intensity?: number[] }
export interface HdGraphicsSave {
  version: 1; visual: string; presented: string; ops: HdDrawOp[];
  savedBits: { id: number; owners: string }[];
}
/** Complete visual snapshot, also valid after an online client joins mid-frame. */
export interface GraphicsFrame {
  width: number; height: number; revision: number; pixels: string; palette: RGB[];
  cursor: CursorState; commands: GraphicsCommand[];
  hd?: HdFrame;
}
export interface GraphicsSave {
  visual: string; presented?: string; priority: string; control: string; palette: RGB[]; intensity: number[]; paletteFlags?: number[]; priorityBands?: number[];
  paletteTimestamp?: number; paletteMappings?: { view: number; epoch: number; map: number[] }[];
  ports: Port[]; currentPort: number; cursor: CursorState; nextHandle: number;
  savedBits: { id: number; rect: Rect; mask: number; visual: string; priority: string; control: string }[];
  windows: { id: number; saved: number; previousPort: number }[];
  /** Optional so saves created before HD provenance retain their original raster. */
  hd?: HdGraphicsSave;
}
