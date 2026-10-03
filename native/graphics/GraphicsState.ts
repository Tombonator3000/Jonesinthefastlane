// SPDX-License-Identifier: GPL-3.0-or-later
// Native indexed-pixel graphics; no SCI bytecode, interpreter, canvas or DOM.
import { decodeBytes, encodeBytes } from './bytes.js';
import { decodeOwners, encodeOwners } from './provenance.js';
import type { CelAsset, CursorState, FontAsset, FontGlyph, GraphicsCommand, GraphicsFrame, GraphicsSave, HdDrawContext, HdDrawOp, HdGlyph, HdTextShadow, NativeAssetManifest, Point, Port, Rect, RGB, TextMetrics, TextOptions } from './types.js';

const screenRect = (): Rect => ({ left: 0, top: 0, right: 320, bottom: 200 });
const cloneRect = (r: Rect): Rect => ({ ...r });
const intersection = (a: Rect, b: Rect): Rect => ({ left: Math.max(a.left, b.left), top: Math.max(a.top, b.top), right: Math.min(a.right, b.right), bottom: Math.min(a.bottom, b.bottom) });
const normal = (r: Rect): Rect => ({ left: Math.min(r.left, r.right) | 0, top: Math.min(r.top, r.bottom) | 0, right: Math.max(r.left, r.right) | 0, bottom: Math.max(r.top, r.bottom) | 0 });
const empty = (r: Rect): boolean => r.right <= r.left || r.bottom <= r.top;
interface SavedBits { rect: Rect; mask: number; visual: Uint8Array; priority: Uint8Array; control: Uint8Array; owners: Uint32Array }
type NewHdOp = HdDrawOp extends infer T ? T extends HdDrawOp ? Omit<T, 'id'> : never : never;

export class GraphicsState {
  readonly width = 320;
  readonly height = 200;
  readonly visual = new Uint8Array(64000);
  readonly presented = new Uint8Array(64000);
  readonly priority = new Uint8Array(64000);
  readonly control = new Uint8Array(64000);
  private hdVisual = new Uint32Array(64000);
  private hdPresented = new Uint32Array(64000);
  private hdOps = new Map<number, HdDrawOp>();
  private hdKeys = new Map<string, number>();
  private nextHdId = 1;
  private hdRegistrations = 0;
  readonly ports = new Map<number, Port>();
  palette: RGB[];
  intensity = Array<number>(256).fill(100);
  paletteFlags = new Uint8Array(256);
  currentPort = 2;
  revision = 0;
  picNotValid = 0;
  cursor: CursorState = { id: 999, visible: true, x: 160, y: 100 };
  private commands: GraphicsCommand[] = [];
  private cache = new Map<string, Uint8Array>();
  private charCodes = new Map<string, number>();
  private savedBits = new Map<number, SavedBits>();
  private windows = new Map<number, { saved: number; previousPort: number }>();
  private nextHandle = 1;
  private nextPort = 3;
  private animationBase?: { visual: Uint8Array; priority: Uint8Array; control: Uint8Array; owners: Uint32Array };
  private priorityTop = 42;
  private priorityBottom = 190;
  private customPriorityBands?: number[];
  private paletteEpoch = 1;
  private paletteClock = 1;
  private paletteMaps = new Map<number, { epoch: number; map: number[] }>();

  constructor(readonly assets: NativeAssetManifest) {
    if (assets.width !== 320 || assets.height !== 200 || assets.schema !== 1) throw new Error('Unsupported native asset manifest');
    this.palette = assets.palette.map(c => [...c] as RGB);
    // SCI1 reserves these two system colors even when resource palette entries differ.
    this.palette[0] = [0, 0, 0]; this.palette[255] = [255, 255, 255];
    for (const [index, , , , used] of assets.palettes[999]?.updates || []) this.paletteFlags[index] = used ?? 1;
    this.paletteFlags[0] = this.paletteFlags[255] = 1;
    assets.codePage.forEach((char, code) => this.charCodes.set(char, code));
    // Jones uses interpreter -Nw 0 0 200 320: unlike most SCI games, no 10px top offset.
    for (const id of [1, 2, 65535]) this.ports.set(id, this.makePort(id));
  }
  private makePort(id: number): Port {
    return { id, left: 0, top: 0, rect: screenRect(), penX: 0, penY: 0, font: 0, color: 0, backColor: 255, penMode: 0, greyed: false };
  }
  private record(op: string, ...args: unknown[]): void {
    this.revision++;
    // Frame pixels are authoritative; bound optional diagnostic command history.
    if (this.commands.length < 2048) this.commands.push({ op, args });
  }
  private bytes(value: string): Uint8Array {
    let result = this.cache.get(value);
    if (!result) { result = decodeBytes(value); this.cache.set(value, result); }
    return result;
  }
  private hdContext(dest: Rect, source: Rect): HdDrawContext {
    const p = this.port, point = this.localToGlobal(dest.left, dest.top);
    return { port: { ...p, rect: cloneRect(p.rect) }, clip: this.clipRect(p.rect),
      dest: { left: point.x, top: point.y, right: point.x + dest.right - dest.left, bottom: point.y + dest.bottom - dest.top }, source: cloneRect(source) };
  }
  private addHd(op: NewHdOp): number {
    // Draws without a following snapshot still cannot accumulate an unbounded
    // history. Only ownership in live planes/saved regions keeps an op alive.
    if (++this.hdRegistrations >= 128) { this.pruneHd(); this.hdRegistrations = 0; }
    const key = JSON.stringify(op), previous = this.hdKeys.get(key);
    if (previous !== undefined) return previous;
    while (this.hdOps.has(this.nextHdId)) this.nextHdId = this.nextHdId === 0xffffffff ? 1 : this.nextHdId + 1;
    const id = this.nextHdId; this.nextHdId = id === 0xffffffff ? 1 : id + 1;
    this.hdOps.set(id, { ...op, id } as HdDrawOp); this.hdKeys.set(key, id);
    return id;
  }
  private pruneHd(): void {
    const live = new Set<number>();
    const visit = (owners: Uint32Array) => { for (const id of owners) if (id) live.add(id); };
    visit(this.hdVisual); visit(this.hdPresented);
    if (this.animationBase) visit(this.animationBase.owners);
    for (const bits of this.savedBits.values()) visit(bits.owners);
    for (const id of this.hdOps.keys()) if (!live.has(id)) this.hdOps.delete(id);
    for (const [key, id] of this.hdKeys) if (!live.has(id)) this.hdKeys.delete(key);
  }
  private visibleHdOps(owners: Uint32Array): HdDrawOp[] {
    const ids = new Set(owners); ids.delete(0);
    return [...ids].sort((a, b) => a - b).map(id => this.hdOps.get(id)!).filter(Boolean).map(op => structuredClone(op));
  }
  private ownHdRect(rect: Rect, id: number): void {
    const r = this.clipRect(rect);
    for (let y = r.top; y < r.bottom; y++) {
      this.hdVisual.fill(id, y * 320 + r.left, y * 320 + r.right);
      this.hdPresented.fill(id, y * 320 + r.left, y * 320 + r.right);
    }
  }
  private uniformHdBackground(rect: Rect): number | null {
    const r = this.clipRect(rect);
    if (empty(r)) return null;
    const color = this.visual[r.top * 320 + r.left];
    for (let y = r.top; y < r.bottom; y++) for (let x = r.left; x < r.right; x++) {
      const i = y * 320 + x;
      if (this.visual[i] !== color || this.presented[i] !== color) return null;
    }
    return color;
  }
  private hdExistingButton(text: string, font: FontAsset, color: number, greyed: boolean, glyphs: HdGlyph[], foreground: boolean): { background: number; shadow: HdTextShadow } | undefined {
    if (!glyphs.length || glyphs.length > 1024 || glyphs.some(g => !this.glyphInkFitsCell(font.chars[g.code], font.lineHeight))) return;
    const clip = this.clipRect(this.port.rect);
    type TextOp = Extract<HdDrawOp, { kind: 'text' }>;
    const matches = (op: HdDrawOp | undefined, offset: number): op is TextOp => !!op && op.kind === 'text' &&
      op.text === text && op.font === font.id && op.greyed === greyed && op.port.top === this.port.top &&
      op.clip.left === clip.left && op.clip.top === clip.top && op.clip.right === clip.right && op.clip.bottom === clip.bottom &&
      op.glyphs.length === glyphs.length && op.glyphs.every((s, i) => {
        const g = glyphs[i]; return s.char === g.char && s.code === g.code && s.x === g.x + offset && s.y === g.y + offset &&
          s.width === g.width && s.height === g.height && s.advance === g.advance;
      });
    for (const prior of [...this.hdOps.values()].reverse()) {
      if (!matches(prior, foreground ? 0 : -1) || !prior.shadow || (!foreground && prior.shadow.color !== color)) continue;
      const base = prior.glyphs[0].background;
      if (base === null || prior.glyphs.some(g => g.background !== base)) continue;
      const shadowGlyphs = foreground ? glyphs.map(g => ({ ...g, x: g.x + 1, y: g.y + 1 })) : glyphs;
      const expected = new Map<number, number>(), foregroundCells = new Set<number>(), shadowInk = new Set<number>();
      for (const [gs, isForeground] of [[shadowGlyphs, false], [prior.glyphs, true]] as const) for (const g of gs) {
        const r = intersection({ left: g.x, top: g.y, right: g.x + g.width, bottom: g.y + g.height }, clip);
        for (let y = r.top; y < r.bottom; y++) for (let x = r.left; x < r.right; x++) {
          const i = y * 320 + x; expected.set(i, base); if (isForeground) foregroundCells.add(i);
        }
      }
      for (const [gs, inkColor] of [[shadowGlyphs, prior.shadow.color], [prior.glyphs, prior.color]] as const) for (const g of gs) {
        const source = font.chars[g.code], bits = this.bytes(source.bits);
        for (let y = 0; y < source.height; y++) for (let x = 0; x < source.width; x++) {
          const gx = g.x + x, gy = g.y + y;
          if (bits[y * source.width + x] && (!greyed || ((x + gy - this.port.top) & 1) === 1) &&
              gx >= clip.left && gx < clip.right && gy >= clip.top && gy < clip.bottom) {
            const i = gy * 320 + gx; expected.set(i, inkColor); if (gs === shadowGlyphs) shadowInk.add(i);
          }
        }
      }
      let valid = true;
      for (const [i, pixel] of expected) {
        const owner = this.hdVisual[i];
        if (owner !== this.hdPresented[i] || this.visual[i] !== pixel || this.presented[i] !== pixel) { valid = false; break; }
        if (foregroundCells.has(i)) { if (owner !== prior.id) { valid = false; break; } }
        else {
          const fringe = this.hdOps.get(owner);
          if (!matches(fringe, foreground ? 1 : 0) || fringe.shadow || fringe.color !== prior.shadow.color ||
              fringe.glyphs.some(g => g.background !== null && g.background !== base) ||
              (!shadowInk.has(i) && !fringe.glyphs.some(g => g.background === base && i % 320 >= g.x && i % 320 < g.x + g.width && Math.floor(i / 320) >= g.y && Math.floor(i / 320) < g.y + g.height))) { valid = false; break; }
        }
      }
      if (valid) return { background: base, shadow: { ...prior.shadow } };
    }
  }
  private hdButtonShadow(text: string, font: FontAsset, color: number, greyed: boolean, glyphs: HdGlyph[]): HdTextShadow | undefined {
    if (!glyphs.length || glyphs.length > 1024 || glyphs.some(g => !this.glyphInkFitsCell(font.chars[g.code], font.lineHeight))) return;
    // WButton.draw paints the same string at(+1,+1), then its foreground.
    // Recognize only that exact pair; never infer a shadow from pixel colors.
    const candidates = [...this.hdOps.values()].reverse();
    type TextOp = Extract<HdDrawOp, { kind: 'text' }>;
    const clip = this.clipRect(this.port.rect);
    const sameLayout = (op: HdDrawOp | undefined, dx: number, dy: number): op is TextOp => !!op && op.kind === 'text' &&
      op.text === text && op.font === font.id && op.greyed === greyed && op.port.top === this.port.top &&
      op.clip.left === clip.left && op.clip.top === clip.top && op.clip.right === clip.right && op.clip.bottom === clip.bottom &&
      op.glyphs.length === glyphs.length && op.glyphs.every((s, i) => {
        const g = glyphs[i]; return s.char === g.char && s.code === g.code && s.x === g.x + dx && s.y === g.y + dy &&
          s.width === g.width && s.height === g.height && s.advance === g.advance;
      });
    const cells = (gs: HdGlyph[], onlyUniform = false): Set<number> => {
      const covered = new Set<number>();
      for (const g of gs) {
        if (onlyUniform && g.background === null) continue;
        const r = intersection({ left: g.x, top: g.y, right: g.x + g.width, bottom: g.y + g.height }, clip);
        for (let y = r.top; y < r.bottom; y++) for (let x = r.left; x < r.right; x++) covered.add(y * 320 + x);
      }
      return covered;
    };
    // Reconstruct source ink, including SCI's disabled stipple, without writing
    // any gameplay pixels. This also rejects a changed source glyph bitmap.
    const ink = (gs: HdGlyph[]): Set<number> => {
      const painted = new Set<number>();
      for (const g of gs) {
        const source = font.chars[g.code], bits = this.bytes(source.bits);
        for (let y = 0; y < source.height; y++) for (let x = 0; x < source.width; x++) {
          const gx = g.x + x, gy = g.y + y;
          if (bits[y * source.width + x] && (!greyed || ((x + gy - this.port.top) & 1) === 1) &&
              gx >= clip.left && gx < clip.right && gy >= clip.top && gy < clip.bottom) painted.add(gy * 320 + gx);
        }
      }
      return painted;
    };
    const foregroundCells = cells(glyphs), foregroundInk = ink(glyphs);
    for (const shadow of candidates) {
      if (!sameLayout(shadow, 1, 1) || shadow.shadow) continue;
      const shadowCells = cells(shadow.glyphs), shadowInk = ink(shadow.glyphs), background = shadow.glyphs[0].background;
      const accept = (base: number): HdTextShadow => {
        for (const g of glyphs) g.background = base;
        return { color: shadow.color, offsetX: 1, offsetY: 1 };
      };
      // First draw: every shadow cell was demonstrably flat before its ink.
      if (background !== null && shadow.glyphs.every(g => g.background === background)) {
        let valid = true;
        for (const i of foregroundCells) {
          const owner = this.hdVisual[i], expected = shadowInk.has(i) ? shadow.color : background;
          if (owner !== this.hdPresented[i] || this.visual[i] !== expected || this.presented[i] !== expected ||
              (shadowCells.has(i) ? owner !== shadow.id : this.hdOps.get(owner)?.kind === 'text')) { valid = false; break; }
        }
        if (valid) return accept(background);
      }
      // WButton redraws the same pair over its own previous raster. Recover
      // only a formerly validated identical pair, not arbitrary mixed pixels.
      // The new shadow owns only actual ink in mixed cells; unchanged pixels
      // must still belong to that prior foreground or its proven shadow fringe.
      const newShadowOwned = cells(shadow.glyphs, true);
      for (const i of shadowInk) newShadowOwned.add(i);
      for (const prior of candidates) {
        if (!sameLayout(prior, 0, 0) || !prior.shadow || prior.color !== color || prior.shadow.color !== shadow.color) continue;
        const base = prior.glyphs[0].background;
        if (base === null || prior.glyphs.some(g => g.background !== base)) continue;
        let valid = true;
        for (const i of new Set([...foregroundCells, ...shadowCells])) {
          const owner = this.hdVisual[i];
          // Painting the new shadow last can temporarily cover old foreground
          // ink. The following original foreground draw restores that ink.
          const expected = shadowInk.has(i) ? shadow.color : foregroundInk.has(i) ? prior.color : base;
          if (owner !== this.hdPresented[i] || this.visual[i] !== expected || this.presented[i] !== expected) { valid = false; break; }
          if (newShadowOwned.has(i)) {
            if (owner !== shadow.id) { valid = false; break; }
          } else if (foregroundCells.has(i)) {
            if (owner !== prior.id) { valid = false; break; }
          } else {
            const fringe = this.hdOps.get(owner);
            if (!sameLayout(fringe, 1, 1) || fringe.shadow || fringe.color !== shadow.color ||
                fringe.glyphs.some(g => g.background !== null && g.background !== base) ||
                (!shadowInk.has(i) && !fringe.glyphs.some(g => g.background === base && i % 320 >= g.x && i % 320 < g.x + g.width && Math.floor(i / 320) >= g.y && Math.floor(i / 320) < g.y + g.height))) { valid = false; break; }
          }
        }
        if (valid) return accept(base);
      }
    }
  }
  get port(): Port { return this.ports.get(this.currentPort)!; }
  setTick(tick: number): void { this.paletteClock = Math.max(1, tick + 1); }
  getPort(): number { return this.currentPort; }
  setPort(id: number): number {
    const previous = this.currentPort;
    id = id === 0 ? 1 : id & 0xffff;
    if (!this.ports.has(id)) throw new Error(`Unknown graphics port ${id}`);
    this.currentPort = id;
    return previous;
  }
  setPicPort(rect: Rect, top = 0, left = 0): void {
    const p = this.ports.get(2)!;
    p.rect = normal(rect); p.top = top | 0; p.left = left | 0;
  }
  localToGlobal(x: number, y: number, portId = this.currentPort): Point {
    const p = this.ports.get(portId === 0 ? 1 : portId);
    if (!p) throw new Error(`Unknown graphics port ${portId}`);
    return { x: (x + p.left) | 0, y: (y + p.top) | 0 };
  }
  globalToLocal(x: number, y: number, portId = this.currentPort): Point {
    const p = this.ports.get(portId === 0 ? 1 : portId);
    if (!p) throw new Error(`Unknown graphics port ${portId}`);
    return { x: (x - p.left) | 0, y: (y - p.top) | 0 };
  }
  private clipRect(r: Rect): Rect {
    r = intersection(normal(r), this.port.rect);
    return intersection({ left: r.left + this.port.left, top: r.top + this.port.top, right: r.right + this.port.left, bottom: r.bottom + this.port.top }, screenRect());
  }
  private putPixel(x: number, y: number, color: number, priority = -1, control = -1, owner = 0): void {
    const p = this.port;
    if (x < p.rect.left || x >= p.rect.right || y < p.rect.top || y >= p.rect.bottom) return;
    x = (x + p.left) | 0; y = (y + p.top) | 0;
    if (x < 0 || y < 0 || x >= 320 || y >= 200) return;
    const index = y * 320 + x;
    if (color >= 0) {
      this.presented[index] = this.visual[index] = color & 255;
      this.hdPresented[index] = this.hdVisual[index] = owner;
    }
    if (priority >= 0) this.priority[index] = priority & 15;
    if (control >= 0) this.control[index] = control & 15;
  }
  setPalette(colors: RGB[], start = 0): void {
    for (let i = 0; i < colors.length && i + start < 256; i++) this.palette[i + start] = [...colors[i]] as RGB;
    this.record('palette', start, colors);
    this.paletteEpoch++;
  }
  loadPalette(id: number): void {
    const entry = this.assets.palettes[id];
    if (!entry) throw new Error(`Missing palette ${id}`);
    this.mergePalette(entry.updates, true);
    this.record('paletteLoad', id);
  }
  setPaletteFlags(first: number, last: number, flags: number, enabled: boolean): void {
    // SCI ranges are start inclusive, end exclusive.
    for (let i = Math.max(0, first); i < Math.min(256, last); i++) this.paletteFlags[i] = enabled ? this.paletteFlags[i] | flags : this.paletteFlags[i] & ~flags;
    // Unsetting a palette reservation does not invalidate cached view mappings.
    this.record('paletteFlags', first, last, flags, enabled);
  }
  findColor(r: number, g: number, b: number): number {
    let best = 255, distance = Infinity;
    for (let i = 0; i < 256; i++) if (this.paletteFlags[i]) {
      const c = this.palette[i], d = Math.abs(c[0] - r) + Math.abs(c[1] - g) + Math.abs(c[2] - b);
      if (d <= distance) { best = i; distance = d; }
    }
    return best;
  }
  private mergePalette(updates: number[][], force = false): number[] {
    const map = Array.from({ length: 256 }, (_, i) => i);
    if (!updates.length) return map;
    for (const [index, r, g, b, used = 1] of updates) {
      if (index === 0 || index === 255 || !used) continue;
      const old = this.palette[index];
      if (force || !this.paletteFlags[index]) {
        this.palette[index] = [r, g, b]; this.paletteFlags[index] = used;
      } else if (old[0] !== r || old[1] !== g || old[2] !== b) {
        const nearest = this.findColor(r, g, b), match = this.palette[nearest];
        // The pinned original-runtime reference's matchColor() PERFECT flag
        // uses its final used-slot comparison, rather than the best distance.
        // Keep that allocation behavior: deduplicating every exact RGB match
        // frees extra slots and visibly changes Jones's later portrait colors.
        let lastUsed = 255; while (lastUsed >= 0 && !this.paletteFlags[lastUsed]) lastUsed--;
        const last = this.palette[lastUsed], perfect = last && last[0] === r && last[1] === g && last[2] === b;
        if (perfect && match[0] === r && match[1] === g && match[2] === b) map[index] = nearest;
        else {
          let free = 1; while (free < 255 && this.paletteFlags[free]) free++;
          if (free < 255) { this.palette[free] = [r, g, b]; this.paletteFlags[free] = used; map[index] = free; }
          else { map[index] = nearest; this.paletteFlags[nearest] |= 0x10; }
        }
      }
    }
    // SCI stamps all palettes merged in the same 60 Hz tick alike. A simple
    // increment per cel would re-merge alternating views forever and consume
    // the reserved slots with duplicates, changing portrait colors.
    this.paletteEpoch = this.paletteClock;
    return map;
  }
  setIntensity(first: number, last: number, percent: number): void {
    for (let i = Math.max(0, first); i < Math.min(256, last); i++) this.intensity[i] = Math.max(0, Math.min(100, percent));
    this.record('paletteIntensity', first, last, percent);
  }
  rotatePalette(first: number, last: number, direction = 1): void {
    first = Math.max(0, first); last = Math.min(255, last);
    if (last <= first) return;
    const colors = this.palette.slice(first, last + 1);
    if (direction >= 0) colors.unshift(colors.pop()!); else colors.push(colors.shift()!);
    for (let i = 0; i < colors.length; i++) this.palette[first + i] = colors[i];
    this.record('paletteRotate', first, last, direction);
  }
  effectivePalette(): RGB[] { return this.palette.map((c, i) => c.map(v => Math.floor(v * this.intensity[i] / 100)) as RGB); }
  drawPic(id: number, mirror = false, addTo = false): void {
    const pic = this.assets.pics[id];
    if (!pic) throw new Error(`Missing picture ${id}`);
    const pixels = this.bytes(pic.pixels), priorities = this.bytes(pic.priority), controls = this.bytes(pic.control);
    if (!addTo) { this.visual.fill(255); this.presented.fill(255); this.priority.fill(0); this.control.fill(0); this.hdVisual.fill(0); this.hdPresented.fill(0); }
    // Picture drawing addresses the picture port regardless of a current dialog port.
    const old = this.setPort(2);
    const rect = { left: 0, top: 0, right: pic.width, bottom: pic.height };
    const owner = this.addHd({ kind: 'pic', pic: id, mirror, addTo, ...this.hdContext(rect, rect) });
    for (let y = 0; y < pic.height; y++) for (let x = 0; x < pic.width; x++) {
      const i = y * pic.width + (mirror ? pic.width - 1 - x : x);
      if (!addTo || pixels[i] !== 255) this.putPixel(x, y, pixels[i], priorities[i], controls[i], owner);
    }
    this.currentPort = old;
    // A picture replaces only its declared palette colors. In particular Jones
    // picture 0 sets the shared grey ramps retained by its later town pictures.
    this.mergePalette(pic.paletteUpdates || [], true);
    this.customPriorityBands = pic.priorityBands?.length === 14 ? pic.priorityBands.slice() : undefined;
    if (pic.priorityBands?.length === 2) this.adjustPriority(pic.priorityBands[0], pic.priorityBands[1]);
    this.picNotValid = 1;
    this.record('pic', id, mirror, addTo);
  }
  getCel(viewId: number, loop: number, cel: number): CelAsset {
    const view = this.assets.views[viewId];
    if (!view) throw new Error(`Missing view ${viewId}`);
    // SCI clips overlarge indices to the last available loop/cel.
    const selected = view.loops[Math.max(0, Math.min(view.loops.length - 1, loop | 0))];
    if (!selected?.cels.length) throw new Error(`View ${viewId} has no cels`);
    return selected.cels[Math.max(0, Math.min(selected.cels.length - 1, cel | 0))];
  }
  getCelCount(viewId: number, loop: number): number {
    const view = this.assets.views[viewId];
    if (!view?.loops.length) throw new Error(`Missing view ${viewId}`);
    // GfxView::getCelCount uses the same signed loop clipping as getCelInfo.
    return view.loops[Math.max(0, Math.min(view.loops.length - 1, loop | 0))].cels.length;
  }
  getCelRect(view: number, loop: number, cel: number, x: number, y: number, z = 0): Rect {
    const c = this.getCel(view, loop, cel);
    const left = x + c.dx - (c.width >> 1), bottom = y + c.dy - z + 1;
    return { left, top: bottom - c.height, right: left + c.width, bottom };
  }
  drawCel(view: number, loop: number, cel: number, left: number, top: number, priority = -1): Rect {
    const asset = this.assets.views[view], c = this.getCel(view, loop, cel), pixels = this.bytes(c.pixels);
    const actualLoop = Math.max(0, Math.min(asset.loops.length - 1, loop | 0));
    const actualCel = Math.max(0, Math.min(asset.loops[actualLoop].cels.length - 1, cel | 0));
    const owner = this.addHd({ kind: 'cel', view, loop: actualLoop, cel: actualCel, mirrored: c.mirrored, priority,
      ...this.hdContext({ left, top, right: left + c.width, bottom: top + c.height }, { left: 0, top: 0, right: c.width, bottom: c.height }) });
    let paletteMap = this.paletteMaps.get(view);
    if (!paletteMap || paletteMap.epoch !== this.paletteEpoch) {
      const map = this.mergePalette(asset.paletteUpdates);
      paletteMap = { epoch: this.paletteEpoch, map }; this.paletteMaps.set(view, paletteMap);
    }
    for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) {
      const color = pixels[y * c.width + x];
      if (color === c.clear) continue;
      const p = this.localToGlobal(left + x, top + y);
      if (priority >= 0 && p.x >= 0 && p.y >= 0 && p.x < 320 && p.y < 200 && this.priority[p.y * 320 + p.x] > priority) continue;
      this.putPixel(left + x, top + y, paletteMap.map[color], priority, -1, owner);
    }
    this.record('cel', view, loop, cel, left, top, priority);
    return { left, top, right: left + c.width, bottom: top + c.height };
  }
  drawActor(view: number, loop: number, cel: number, x: number, y: number, z = 0, priority = -1): Rect {
    const rect = this.getCelRect(view, loop, cel, x, y, z);
    this.drawCel(view, loop, cel, rect.left, rect.top, priority);
    return rect;
  }
  fillRect(rect: Rect, color = this.port.color, priority = -1, control = -1): void {
    const r = this.clipRect(rect);
    for (let y = r.top; y < r.bottom; y++) {
      const start = y * 320 + r.left, end = y * 320 + r.right;
      if (color >= 0) this.visual.fill(color & 255, start, end);
      if (color >= 0) this.presented.fill(color & 255, start, end);
      if (color >= 0) { this.hdVisual.fill(0, start, end); this.hdPresented.fill(0, start, end); }
      if (priority >= 0) this.priority.fill(priority & 15, start, end);
      if (control >= 0) this.control.fill(control & 15, start, end);
    }
    this.record('fill', rect, color, priority, control);
  }
  frameRect(rect: Rect, color = this.port.color): void {
    const r = normal(rect);
    this.drawLine(r.left, r.top, r.right - 1, r.top, color);
    this.drawLine(r.left, r.bottom - 1, r.right - 1, r.bottom - 1, color);
    this.drawLine(r.left, r.top, r.left, r.bottom - 1, color);
    this.drawLine(r.right - 1, r.top, r.right - 1, r.bottom - 1, color);
  }
  invertRect(rect: Rect, fore = this.port.color, back = this.port.backColor): void {
    const r = this.clipRect(rect);
    for (let y = r.top; y < r.bottom; y++) for (let x = r.left; x < r.right; x++) {
      const i = y * 320 + x, v = this.visual[i];
      if (v === fore) this.visual[i] = back; else if (v === back) this.visual[i] = fore;
      this.presented[i] = this.visual[i];
      this.hdVisual[i] = this.hdPresented[i] = 0;
    }
    this.record('invert', rect, fore, back);
  }
  drawLine(x: number, y: number, endX: number, endY: number, color = this.port.color, priority = -1, control = -1): void {
    x |= 0; y |= 0; endX |= 0; endY |= 0;
    const dx = Math.abs(endX - x) * 2, dy = Math.abs(endY - y) * 2;
    const sx = endX >= x ? 1 : -1, sy = endY >= y ? 1 : -1;
    this.putPixel(x, y, color, priority, control);
    if (dx > dy) {
      let fraction = dy - (dx >> 1);
      while (x !== endX) { if (fraction >= 0) { y += sy; fraction -= dx; } x += sx; fraction += dy; this.putPixel(x, y, color, priority, control); }
    } else {
      let fraction = dx - (dy >> 1);
      while (y !== endY) { if (fraction >= 0) { x += sx; fraction -= dy; } y += sy; fraction += dx; this.putPixel(x, y, color, priority, control); }
    }
    this.record('line', x, y, endX, endY, color, priority, control);
  }
  onControl(rect: Rect, map = 4): number {
    const r = this.clipRect(rect), plane = map & 4 ? this.control : map & 2 ? this.priority : this.visual;
    let mask = 0;
    for (let y = r.top; y < r.bottom; y++) for (let x = r.left; x < r.right; x++) mask |= 1 << plane[y * 320 + x];
    return mask & 0xffff;
  }
  private font(id = this.port.font): FontAsset {
    if (id === -1) id = this.port.font;
    const f = this.assets.fonts[id & 0x7ff];
    if (!f) throw new Error(`Missing font ${id}`);
    return f;
  }
  private glyphInkFitsCell(glyph: FontGlyph, lineHeight: number): boolean {
    if (![glyph.width, glyph.height, glyph.advance, lineHeight].every(Number.isSafeInteger) ||
        glyph.width < 0 || glyph.height < 0 || glyph.advance <= 0 || lineHeight <= 0) return false;
    const bits = this.bytes(glyph.bits);
    if (bits.length !== glyph.width * glyph.height) return false;
    // Several original fonts pad a9-row bitmap although all ink fits an8-row
    // cell. Empty padding must not disable HD; real overhang still uses raster.
    for (let y = 0; y < glyph.height; y++) for (let x = 0; x < glyph.width; x++)
      if (bits[y * glyph.width + x] && (x >= glyph.advance || y >= lineHeight)) return false;
    return true;
  }
  adjustPriority(top: number, bottom: number): void { this.priorityTop = top; this.priorityBottom = bottom; this.customPriorityBands = undefined; }
  coordinatePriority(y: number): number {
    if (this.customPriorityBands) { let band = 0; while (band < 14 && y >= this.customPriorityBands[band]) band++; return band; }
    if (y < this.priorityTop) return 0;
    if (y >= this.priorityBottom) return 14;
    const bandSize = Math.floor((this.priorityBottom - this.priorityTop) * 2000 / 14);
    return 1 + Math.floor((y - this.priorityTop) * 2000 / Math.max(1, bandSize));
  }
  priorityCoordinate(priority: number): number {
    for (let y = 0; y <= this.priorityBottom; y++) if (this.coordinatePriority(y) === priority) return y;
    return this.priorityBottom;
  }
  /** SCI presents moving actors, then restores its offscreen background immediately. */
  beginAnimation(): void {
    if (this.animationBase) throw new Error('Nested animation rendering');
    this.animationBase = { visual: this.visual.slice(), priority: this.priority.slice(), control: this.control.slice(), owners: this.hdVisual.slice() };
    this.presented.set(this.visual);
    this.hdPresented.set(this.hdVisual);
  }
  endAnimation(): void {
    if (!this.animationBase) throw new Error('Animation rendering not started');
    this.visual.set(this.animationBase.visual); this.priority.set(this.animationBase.priority); this.control.set(this.animationBase.control);
    this.hdVisual.set(this.animationBase.owners);
    this.animationBase = undefined; this.picNotValid = 0;
    this.record('animate');
  }
  showRect(rect: Rect): void {
    const r = this.clipRect(rect);
    for (let y = r.top; y < r.bottom; y++) this.presented.set(this.visual.subarray(y * 320 + r.left, y * 320 + r.right), y * 320 + r.left);
    for (let y = r.top; y < r.bottom; y++) this.hdPresented.set(this.hdVisual.subarray(y * 320 + r.left, y * 320 + r.right), y * 320 + r.left);
    this.record('show', rect);
  }
  private charCode(char: string): number { return this.charCodes.get(char) ?? (char.charCodeAt(0) < 256 ? char.charCodeAt(0) : 63); }
  measureText(text: string, fontId = this.port.font, maxWidth = 0): TextMetrics {
    const font = this.font(fontId);
    const width = (s: string): number => Array.from(s).reduce((n, c) => n + (font.chars[this.charCode(c)]?.advance || 0), 0);
    const lines: { text: string; width: number }[] = [];
    if (!text) return { width: 0, height: 0, lineHeight: font.lineHeight, lines };
    for (const paragraph of text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n')) {
      if (!(maxWidth > 0)) { lines.push({ text: paragraph, width: width(paragraph) }); continue; }
      let rest = paragraph;
      if (!rest.length) lines.push({ text: '', width: 0 });
      while (rest.length) {
        let chars = 0, px = 0, lastSpace = -1;
        for (; chars < rest.length; chars++) {
          const advance = font.chars[this.charCode(rest[chars])]?.advance || 0;
          if (px + advance > maxWidth && chars > 0) break;
          px += advance;
          if (rest[chars] === ' ') lastSpace = chars;
        }
        if (chars < rest.length && lastSpace > 0) chars = lastSpace;
        chars = Math.max(1, chars);
        const line = rest.slice(0, chars);
        lines.push({ text: line, width: width(line) });
        rest = rest.slice(chars);
        if (rest[0] === ' ') rest = rest.slice(1);
      }
    }
    return { width: Math.max(0, ...lines.map(l => l.width)), height: lines.length * font.lineHeight, lineHeight: font.lineHeight, lines };
  }
  drawText(text: string, x = this.port.penX, y = this.port.penY, options: TextOptions = {}): Rect {
    const fontId = options.font ?? this.port.font, font = this.font(fontId);
    const metrics = this.measureText(text, fontId, options.maxWidth || 0);
    const color = options.color ?? this.port.color;
    const greyed = options.greyed ?? this.port.greyed;
    let lastX = x, lastY = y;
    const boxWidth = options.maxWidth && options.maxWidth > 0 ? options.maxWidth : metrics.width;
    if (options.backColor !== undefined && options.backColor >= 0) this.fillRect({ left: x, top: y, right: x + boxWidth, bottom: y + metrics.height }, options.backColor);
    const glyphs: HdGlyph[] = [];
    for (let lineIndex = 0; lineIndex < metrics.lines.length; lineIndex++) {
      const line = metrics.lines[lineIndex], align = options.align ?? 'left';
      let left = x + (align === 'center' || align === 1 ? Math.floor((boxWidth - line.width) / 2) : align === 'right' || align === -1 || align === 2 ? boxWidth - line.width : 0);
      const top = y + lineIndex * font.lineHeight;
      for (const char of line.text) {
        const code = this.charCode(char), glyph = font.chars[code];
        if (!glyph) continue;
        const point = this.localToGlobal(left, top), cell = { left, top, right: left + glyph.advance, bottom: top + font.lineHeight };
        // Replacing a full cell permits a true HD glyph shape. It is safe only
        // on a uniform background in BOTH planes (an actor may be presented
        // above an otherwise flat offscreen background). Complex cells keep
        // original ink pixels and their original untouched surroundings.
        const background = color >= 0 && this.glyphInkFitsCell(glyph, font.lineHeight) ? this.uniformHdBackground(cell) : null;
        glyphs.push({ char, code, x: point.x, y: point.y, width: glyph.advance, height: font.lineHeight, advance: glyph.advance, background });
        left += glyph.advance;
      }
    }
    // WButton.hiliteControl is a foreground-only Display, color100 then0 in
    // the real bank interaction. A proven intact prior pair can retain its
    // background/shadow while changing only that requested foreground color.
    // Invert/erase/foreign owners fail this same exact-raster check.
    const previousButton = color >= 0 ? this.hdExistingButton(text, font, color, greyed, glyphs, true) : undefined;
    const replayedShadowInk = color >= 0 && !!this.hdExistingButton(text, font, color, greyed, glyphs, false);
    if (previousButton) for (const g of glyphs) g.background = previousButton.background;
    const shadow = previousButton?.shadow ?? (color >= 0 ? this.hdButtonShadow(text, font, color, greyed, glyphs) : undefined);
    const owner = this.addHd({ kind: 'text', text, font: font.id, color, greyed, glyphs, ...(shadow ? { shadow } : {}),
      ...this.hdContext({ left: x, top: y, right: x + boxWidth, bottom: y + metrics.height }, { left: 0, top: 0, right: boxWidth, bottom: metrics.height }) });
    let glyphIndex = 0;
    for (let lineIndex = 0; lineIndex < metrics.lines.length; lineIndex++) {
      const line = metrics.lines[lineIndex];
      const align = options.align ?? 'left';
      let left = x + (align === 'center' || align === 1 ? Math.floor((boxWidth - line.width) / 2) : align === 'right' || align === -1 || align === 2 ? boxWidth - line.width : 0);
      const top = y + lineIndex * font.lineHeight;
      for (const char of line.text) {
        const glyph = font.chars[this.charCode(char)];
        if (!glyph) continue;
        const hdGlyph = glyphs[glyphIndex++], glyphOwner = hdGlyph.background === null ? 0 : owner;
        if (glyphOwner) this.ownHdRect({ left, top, right: left + glyph.advance, bottom: top + font.lineHeight }, glyphOwner);
        const bits = this.bytes(glyph.bits);
        for (let gy = 0; gy < glyph.height; gy++) for (let gx = 0; gx < glyph.width; gx++) {
          // Only a proven replay of a validated WButton shadow may identify its
          // ink in mixed cells. It still renders as original(background:null).
          // Every other unsafe or overflowing glyph retains owner0 fallback.
          if (bits[gy * glyph.width + gx] && (!greyed || ((gx + top + gy) & 1) === 1)) this.putPixel(left + gx, top + gy, color, -1, -1, glyphOwner || (replayedShadowInk ? owner : 0));
        }
        left += glyph.advance;
      }
      lastX = left; lastY = top;
    }
    this.port.penX = lastX; this.port.penY = lastY;
    this.record('text', text, x, y, options);
    return { left: x, top: y, right: x + boxWidth, bottom: y + metrics.height };
  }
  saveBits(rect: Rect, mask = 1): number {
    const r = this.clipRect(rect), width = Math.max(0, r.right - r.left), height = Math.max(0, r.bottom - r.top);
    const copy = (source: Uint8Array): Uint8Array => {
      const result = new Uint8Array(width * height);
      for (let y = 0; y < height; y++) result.set(source.subarray((r.top + y) * 320 + r.left, (r.top + y) * 320 + r.right), y * width);
      return result;
    };
    const owners = new Uint32Array(mask & 1 ? width * height : 0);
    if (mask & 1) for (let y = 0; y < height; y++) owners.set(this.hdVisual.subarray((r.top + y) * 320 + r.left, (r.top + y) * 320 + r.right), y * width);
    const id = this.nextHandle++;
    this.savedBits.set(id, { rect: r, mask, visual: mask & 1 ? copy(this.visual) : new Uint8Array(), priority: mask & 2 ? copy(this.priority) : new Uint8Array(), control: mask & 4 ? copy(this.control) : new Uint8Array(), owners });
    return id;
  }
  freeBits(id: number): void { this.savedBits.delete(id); }
  hasBits(id: number): boolean { return this.savedBits.has(id); }
  restoreBits(id: number, dispose = true): void {
    const saved = this.savedBits.get(id);
    if (!saved) throw new Error(`Unknown saved bitmap ${id}`);
    const r = saved.rect, width = r.right - r.left;
    const restore = (target: Uint8Array, source: Uint8Array): void => {
      for (let y = r.top; y < r.bottom; y++) target.set(source.subarray((y - r.top) * width, (y - r.top + 1) * width), y * 320 + r.left);
    };
    if (saved.mask & 1) restore(this.visual, saved.visual);
    if (saved.mask & 1) restore(this.presented, saved.visual);
    if (saved.mask & 1) for (let y = r.top; y < r.bottom; y++) {
      const row = saved.owners.subarray((y - r.top) * width, (y - r.top + 1) * width);
      this.hdVisual.set(row, y * 320 + r.left); this.hdPresented.set(row, y * 320 + r.left);
    }
    if (saved.mask & 2) restore(this.priority, saved.priority);
    if (saved.mask & 4) restore(this.control, saved.control);
    if (dispose) this.savedBits.delete(id);
    this.record('restoreBits', id);
  }
  newWindow(rect: Rect, title = '', style = 0, priority = -1, color = 0, backColor = 255): number {
    rect = normal(rect);
    rect.left &= ~1; // Original SCI window manager retained EGA byte alignment in VGA.
    const previousPort = this.currentPort;
    this.setPort(1);
    const outer = { left: rect.left - (style & 2 ? 0 : 1), top: rect.top - (style & 2 ? 0 : 1) - (style & 4 ? 10 : 0), right: rect.right + (style & 2 ? 0 : 2), bottom: rect.bottom + (style & 2 ? 0 : 2) };
    // Transparent/user windows are drawn and restored by the original scripts.
    // Saving them here would repaint an empty speech bubble after its script
    // has already restored the action labels underneath (Jones bank, shops).
    const saved = style & 1 ? 0 : this.saveBits(outer, priority === -1 ? 1 : 3);
    if (!(style & 1)) this.fillRect(rect, backColor, priority);
    if (!(style & 2) && !(style & 128)) {
      this.frameRect({ left: rect.left - 1, top: rect.top - 1, right: rect.right + 1, bottom: rect.bottom + 1 }, color);
      this.drawLine(rect.right + 1, rect.top, rect.right + 1, rect.bottom + 1, color);
      this.drawLine(rect.left, rect.bottom + 1, rect.right + 1, rect.bottom + 1, color);
    }
    if (style & 4) {
      this.fillRect({ left: rect.left, top: rect.top - 10, right: rect.right, bottom: rect.top }, color);
      this.drawText(title, rect.left, rect.top - 9, { font: 0, color: backColor, maxWidth: rect.right - rect.left, align: 'center' });
    }
    const id = this.nextPort++, point = this.localToGlobal(rect.left, rect.top);
    this.ports.set(id, { ...this.makePort(id), left: point.x, top: point.y, color, backColor, rect: { left: 0, top: 0, right: rect.right - rect.left, bottom: rect.bottom - rect.top } });
    this.windows.set(id, { saved, previousPort });
    this.currentPort = id;
    this.record('newWindow', id, rect, title, style);
    return id;
  }
  disposeWindow(id: number): void {
    const window = this.windows.get(id);
    if (!window) return;
    if (window.saved) this.restoreBits(window.saved);
    this.windows.delete(id); this.ports.delete(id);
    if (this.currentPort === id) this.currentPort = this.ports.has(window.previousPort) ? window.previousPort : 2;
    this.record('disposeWindow', id);
  }
  setCursor(id: number, visible = true, x?: number, y?: number): void {
    if (id >= 0 && !this.assets.cursors[id]) throw new Error(`Missing cursor ${id}`);
    if (id >= 0) this.cursor.id = id;
    this.cursor.visible = visible && id !== -1;
    if (x !== undefined) this.cursor.x = Math.max(0, Math.min(319, x | 0));
    if (y !== undefined) this.cursor.y = Math.max(0, Math.min(199, y | 0));
    this.record('cursor', { ...this.cursor });
  }
  snapshot(): GraphicsFrame {
    this.pruneHd();
    return { width: 320, height: 200, revision: this.revision, pixels: encodeBytes(this.presented), palette: this.effectivePalette(), cursor: { ...this.cursor }, commands: this.commands.slice(),
      hd: { version: 1, owners: encodeOwners(this.hdPresented), ops: this.visibleHdOps(this.hdPresented), intensity: this.intensity.slice() } };
  }
  drainFrame(): GraphicsFrame { const result = this.snapshot(); this.commands = []; return result; }
  toRGBA(includeCursor = false): Uint8ClampedArray {
    const result = new Uint8ClampedArray(64000 * 4), colors = this.effectivePalette();
    for (let i = 0; i < 64000; i++) { const c = colors[this.presented[i]]; result.set([c[0], c[1], c[2], 255], i * 4); }
    if (includeCursor && this.cursor.visible) {
      const cursor = this.assets.cursors[this.cursor.id];
      if (cursor) {
        const pixels = this.bytes(cursor.pixels);
        for (let y = 0; y < cursor.height; y++) for (let x = 0; x < cursor.width; x++) {
          const color = pixels[y * cursor.width + x], px = this.cursor.x + x - cursor.hotspotX, py = this.cursor.y + y - cursor.hotspotY;
          if (color === cursor.clear || px < 0 || py < 0 || px >= 320 || py >= 200) continue;
          const v = color === 255 ? 255 : color === 7 ? 170 : 0;
          result.set([v, v, v, 255], (py * 320 + px) * 4);
        }
      }
    }
    return result;
  }
  saveState(): GraphicsSave {
    this.pruneHd();
    return { visual: encodeBytes(this.visual), presented: encodeBytes(this.presented), priority: encodeBytes(this.priority), control: encodeBytes(this.control), palette: this.palette.map(c => [...c] as RGB), intensity: this.intensity.slice(), paletteFlags: Array.from(this.paletteFlags), paletteTimestamp: this.paletteEpoch, paletteMappings: [...this.paletteMaps].map(([view, entry]) => ({ view, epoch: entry.epoch, map: entry.map.slice() })), priorityBands: this.customPriorityBands?.slice() || [this.priorityTop, this.priorityBottom], ports: [...this.ports.values()].map(p => ({ ...p, rect: cloneRect(p.rect) })), currentPort: this.currentPort, cursor: { ...this.cursor }, nextHandle: this.nextHandle, savedBits: [...this.savedBits].map(([id, b]) => ({ id, rect: cloneRect(b.rect), mask: b.mask, visual: encodeBytes(b.visual), priority: encodeBytes(b.priority), control: encodeBytes(b.control) })), windows: [...this.windows].map(([id, w]) => ({ id, ...w })),
      hd: { version: 1, visual: encodeOwners(this.hdVisual), presented: encodeOwners(this.hdPresented), ops: [...this.hdOps.values()].map(op => structuredClone(op)),
        savedBits: [...this.savedBits].map(([id, b]) => ({ id, owners: encodeOwners(b.owners) })) } };
  }
  loadState(state: GraphicsSave): void {
    for (const [key, target] of [['visual', this.visual], ['priority', this.priority], ['control', this.control]] as const) {
      const bytes = decodeBytes(state[key]); if (bytes.length !== 64000) throw new Error('Invalid saved graphics plane'); target.set(bytes);
    }
    this.palette = state.palette.map(c => [...c] as RGB); this.intensity = state.intensity.slice();
    this.presented.set(state.presented ? decodeBytes(state.presented) : this.visual);
    if (state.paletteFlags) this.paletteFlags.set(state.paletteFlags);
    if (state.priorityBands?.length === 2) this.adjustPriority(state.priorityBands[0], state.priorityBands[1]);
    else this.customPriorityBands = state.priorityBands?.slice();
    this.paletteEpoch = state.paletteTimestamp ?? this.paletteEpoch + 1;
    this.paletteMaps.clear();
    for (const entry of state.paletteMappings || []) this.paletteMaps.set(entry.view, { epoch: entry.epoch, map: entry.map.slice() });
    this.ports.clear(); for (const p of state.ports) this.ports.set(p.id, { ...p, rect: cloneRect(p.rect) });
    this.currentPort = state.currentPort; this.cursor = { ...state.cursor }; this.nextHandle = state.nextHandle;
    this.nextPort = Math.max(3, ...state.ports.filter(p => p.id < 65535).map(p => p.id + 1));
    this.savedBits.clear(); for (const b of state.savedBits) this.savedBits.set(b.id, { rect: cloneRect(b.rect), mask: b.mask, visual: decodeBytes(b.visual), priority: decodeBytes(b.priority), control: decodeBytes(b.control), owners: new Uint32Array(b.mask & 1 ? Math.max(0, b.rect.right - b.rect.left) * Math.max(0, b.rect.bottom - b.rect.top) : 0) });
    this.windows.clear(); for (const w of state.windows) this.windows.set(w.id, { saved: w.saved, previousPort: w.previousPort });
    this.loadHd(state);
    this.record('loadState');
  }
  private loadHd(state: GraphicsSave): void {
    this.hdVisual.fill(0); this.hdPresented.fill(0); this.hdOps.clear(); this.hdKeys.clear(); this.nextHdId = 1; this.hdRegistrations = 0;
    // Old saves intentionally restore with raster fallback until fresh draw
    // calls establish provenance. Never invent an HD scene from diagnostics.
    if (!state.hd) return;
    try {
      const hd = state.hd;
      if (hd.version !== 1 || !Array.isArray(hd.ops) || !Array.isArray(hd.savedBits)) throw new Error('Unknown HD save');
      const ops = new Map<number, HdDrawOp>();
      const rect = (r: Rect) => r && [r.left, r.top, r.right, r.bottom].every(Number.isFinite);
      for (const op of hd.ops) {
        if (!op || !Number.isInteger(op.id) || op.id < 1 || op.id > 0xffffffff || ops.has(op.id) || !rect(op.dest) || !rect(op.source) || !rect(op.clip) || !op.port || !rect(op.port.rect)) throw new Error('Invalid HD source');
        if (op.kind === 'pic') { if (!this.assets.pics[op.pic] || typeof op.mirror !== 'boolean') throw new Error('Invalid HD picture'); }
        else if (op.kind === 'cel') { if (!this.assets.views[op.view]?.loops[op.loop]?.cels[op.cel]) throw new Error('Invalid HD cel'); }
        else if (op.kind === 'text') {
          if (!this.assets.fonts[op.font] || !Number.isFinite(op.color) || !Array.isArray(op.glyphs) || op.glyphs.some(g => !g || typeof g.char !== 'string' || ![g.code, g.x, g.y, g.width, g.height, g.advance].every(Number.isFinite) || (g.background !== null && (!Number.isInteger(g.background) || g.background < 0 || g.background > 255)))) throw new Error('Invalid HD text');
          if (op.shadow && (!Number.isInteger(op.shadow.color) || op.shadow.color < 0 || op.shadow.color > 255 || op.shadow.offsetX !== 1 || op.shadow.offsetY !== 1)) throw new Error('Invalid HD text shadow');
        } else throw new Error('Invalid HD operation');
        ops.set(op.id, structuredClone(op));
      }
      const decode = (encoded: string, length = 64000) => {
        const owners = decodeOwners(encoded, length);
        for (const id of owners) if (id && !ops.has(id)) throw new Error('Unknown HD owner');
        return owners;
      };
      const visual = decode(hd.visual), presented = decode(hd.presented), bits = new Map<number, Uint32Array>();
      for (const saved of hd.savedBits) {
        const target = this.savedBits.get(saved.id);
        if (!target || bits.has(saved.id)) throw new Error('Invalid HD saved region');
        bits.set(saved.id, decode(saved.owners, target.owners.length));
      }
      if (bits.size !== this.savedBits.size) throw new Error('Incomplete HD saved regions');
      this.hdVisual.set(visual); this.hdPresented.set(presented); this.hdOps = ops;
      for (const [id, owners] of bits) this.savedBits.get(id)!.owners.set(owners);
      this.pruneHd();
    } catch {
      // Optional HD metadata must not prevent an otherwise valid original save
      // from loading. All planes stay unclaimed, including future RestoreBits.
      this.hdVisual.fill(0); this.hdPresented.fill(0); this.hdOps.clear();
      for (const bits of this.savedBits.values()) bits.owners.fill(0);
    }
  }
}
