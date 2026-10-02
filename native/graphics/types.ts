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
/** Complete visual snapshot, also valid after an online client joins mid-frame. */
export interface GraphicsFrame {
  width: number; height: number; revision: number; pixels: string; palette: RGB[];
  cursor: CursorState; commands: GraphicsCommand[];
}
export interface GraphicsSave {
  visual: string; presented?: string; priority: string; control: string; palette: RGB[]; intensity: number[]; paletteFlags?: number[]; priorityBands?: number[];
  paletteTimestamp?: number; paletteMappings?: { view: number; epoch: number; map: number[] }[];
  ports: Port[]; currentPort: number; cursor: CursorState; nextHandle: number;
  savedBits: { id: number; rect: Rect; mask: number; visual: string; priority: string; control: string }[];
  windows: { id: number; saved: number; previousPort: number }[];
}
