// SPDX-License-Identifier: GPL-3.0-or-later
// Optional local artwork. The authoritative 320x200 raster still owns every hit target.
import * as THREE from 'three';
import { decodeOwners } from './provenance.js';
import { decodeBytes } from './bytes.js';
import { createHdTextCanvas, loadHdTextFonts, hdTextFontsReady } from './HdText.js';
import { createHdUiCanvas, getHdUiSpec } from './HdUi.js';
import { createHdIntroCanvas, getHdIntroSpec } from './HdIntro.js';
import { planHdSilhouettes, type HdSilhouettePlan } from './hd-silhouette.js';
import { originalTownUiMask, isOriginalTownUiPixel } from './original-ui.js';
import { createHdPropCanvas, getHdPropSpec, createHdClockFaceCanvas, expandHdClockDialOwners, HD_CLOCK_FACE_RECT } from './HdProps.js';
import type { GraphicsFrame, HdDrawOp, NativeAssetManifest, Rect } from './types.js';

interface ArtAsset {
  src: string; width: number; height: number;
  crop?: { left: number; top: number; width: number; height: number };
  regions?: Rect[];
  originalRegions?: readonly Readonly<Rect>[];
  mirrorX?: boolean;
  generatedAlpha?: boolean;
  preserveSourceColors?: number[];
  preserveSourceColorRegions?: Rect[];
  noFade?: boolean;
}
interface ArtOverlay extends ArtAsset { pic: number; dest: Rect }
interface ArtManifest { schema: 1; title?: string; pics: Record<string, ArtAsset>; cels: Record<string, ArtAsset>; overlays?: ArtOverlay[] }
interface Layer { mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>; texture: THREE.Texture; key: string }
export interface HdOptions { enabled: boolean; lighting: boolean; intensity: number; effect?: number }

const vertex = `varying vec2 artUv;
void main(){artUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const fragment = `precision highp float;
uniform sampler2D art;
uniform sampler2D owners;
uniform sampler2D fade;
uniform sampler2D originalInk;
uniform float hasOriginalInk;
uniform float applyFade;
uniform vec4 owner;
uniform vec4 dest;
uniform vec4 crop;
uniform float mirror;
uniform float lighting;
uniform float isTown;
uniform float strength;
uniform float effect;
uniform int regionCount;
uniform vec4 regions[12];
uniform int originalRegionCount;
uniform vec4 originalRegions[12];
varying vec2 artUv;
void main(){
  vec2 local=vec2(artUv.x,1.-artUv.y)*dest.zw;
  vec2 logical=dest.xy+local;
  vec2 cell=(floor(logical)+.5)/vec2(320.,200.);
  if(any(greaterThan(abs(texture2D(owners,cell)-owner),vec4(.001)))) discard;
  vec2 assetPoint=vec2(mirror>.5?dest.z-local.x:local.x,local.y);
  if(hasOriginalInk>.5&&texture2D(originalInk,vec2(local.x/dest.z,1.-local.y/dest.w)).r>.5) discard;
  bool allowed=regionCount==0;
  for(int i=0;i<12;i++){
    if(i>=regionCount) break;
    vec4 r=regions[i];
    if(assetPoint.x>=r.x&&assetPoint.y>=r.y&&assetPoint.x<r.z&&assetPoint.y<r.w) allowed=true;
  }
  if(!allowed) discard;
  for(int i=0;i<12;i++){
    if(i>=originalRegionCount) break;
    vec4 r=originalRegions[i];
    if(assetPoint.x>=r.x&&assetPoint.y>=r.y&&assetPoint.x<r.z&&assetPoint.y<r.w) discard;
  }
  vec2 uv=vec2(mirror>.5?1.-artUv.x:artUv.x,artUv.y);
  vec4 color=texture2D(art,crop.xy+uv*crop.zw);
  if(color.a<.01) discard;
  // Decorative light is restricted to authored town artwork, never dialogue or text.
  if(lighting>.5&&isTown>.5){
    vec3 glow=vec3(0.);
    glow+=vec3(1.,.28,.08)*exp(-dot((logical-vec2(281.,13.))/vec2(18.,7.),(logical-vec2(281.,13.))/vec2(18.,7.)))*.24;
    glow+=vec3(.15,.45,1.)*exp(-dot((logical-vec2(281.,153.))/vec2(20.,9.),(logical-vec2(281.,153.))/vec2(20.,9.)))*.17;
    glow+=vec3(1.,.64,.2)*exp(-dot((logical-vec2(97.,158.))/vec2(23.,6.),(logical-vec2(97.,158.))/vec2(23.,6.)))*.17;
    float edge=clamp(dot((logical-vec2(160.,100.))/vec2(210.,170.),(logical-vec2(160.,100.))/vec2(210.,170.)),0.,1.);
    color.rgb=color.rgb*(1.-.08*edge*strength)+glow*strength;
  }
  if(applyFade>.5) color.rgb*=texture2D(fade,cell).r;
  if(effect>1.5){
    float scan=.90+.10*cos(logical.y*6.28318530718);
    float vignette=1.-.22*dot(logical/vec2(320.,200.)-.5,logical/vec2(320.,200.)-.5);
    color.rgb=mix(color.rgb,color.rgb*scan*vignette,strength);
  }else if(effect>.5){
    color.rgb=mix(color.rgb,clamp((color.rgb-.5)*1.04+.5,0.,1.),strength);
  }
  gl_FragColor=color;
}`;

/** Complete independent rendering of each received snapshot; no replay or local game logic. */
export class HdPresentation {
  readonly group = new THREE.Group();
  private maskBytes = new Uint8Array(64000 * 4);
  private fadeBytes = new Uint8Array(64000 * 4).fill(255);
  private mask = new THREE.DataTexture(this.maskBytes, 320, 200, THREE.RGBAFormat);
  private fade = new THREE.DataTexture(this.fadeBytes, 320, 200, THREE.RGBAFormat);
  private geometry = new THREE.PlaneGeometry(1, 1);
  private layers = new Map<string, Layer>();
  private textures = new Map<string, THREE.Texture>();
  private inkMasks = new Map<string, THREE.DataTexture>();
  private introSpecs = new Map<number, ReturnType<typeof getHdIntroSpec>>();
  private emptyInk = new THREE.DataTexture(new Uint8Array(4), 1, 1, THREE.RGBAFormat);
  private manifest?: ArtManifest;
  private loading?: Promise<void>;
  private disposed = false;
  private failed = false;
  private options: HdOptions = { enabled: false, lighting: false, intensity: .4 };
  private lastFrame?: GraphicsFrame;
  private lastPlan?: HdSilhouettePlan;
  private activeCount = 0;
  private palette: GraphicsFrame['palette'];
  private readonly townUiMask: Uint8Array;
  private readonly townWidth: number;

  constructor(private readonly assets: NativeAssetManifest, private readonly changed: () => void,
    private readonly status: (message: string) => void) {
    this.palette = assets.palette;
    this.townUiMask = originalTownUiMask(assets.pics[11]); this.townWidth = assets.pics[11]?.width || 320;
    for (const t of [this.mask, this.fade]) {
      t.minFilter = t.magFilter = THREE.NearestFilter; t.generateMipmaps = false; t.colorSpace = THREE.NoColorSpace;
    }
    this.group.visible = false;
    this.emptyInk.needsUpdate = true;
  }
  get diagnostics() { return { requested: this.options.enabled, ready: !!this.manifest, failed: this.failed, layers: this.activeCount, fonts: hdTextFontsReady(), ui: hdTextFontsReady() ? 'hd' : 'original' }; }
  configure(options: HdOptions) {
    this.options = options; this.group.visible = options.enabled && !this.failed;
    if (options.enabled && !this.loading) {
      this.status('Loading HD artwork…');
      this.loading = this.load().then(() => {
        if (!this.disposed) { this.status('HD artwork ready. Unavailable artwork uses original pixels.'); this.changed(); }
      }).catch(() => {
        if (!this.disposed) { this.failed = true; this.group.visible = false; this.status('HD artwork is unavailable; original pixels remain active.'); this.changed(); }
      });
    }
  }
  private async load() {
    const base = new URL('hd/', document.baseURI);
    // Pages caches this stable URL: revalidate when a new pack is deployed.
    const response = await fetch(new URL('manifest.json', base), { cache: 'no-cache' });
    if (!response.ok) throw new Error('HD manifest unavailable');
    const manifest = await response.json() as ArtManifest;
    if (manifest.schema !== 1 || !manifest.pics || !manifest.cels) throw new Error('Unsupported HD pack');
    const assets = [...Object.values(manifest.pics), ...Object.values(manifest.cels), ...(manifest.overlays || [])];
    if (assets.length > 1024) throw new Error('HD pack is too large');
    // Fonts are optional independently of the photographic pack. A font outage
    // keeps original UI readable while other HD artwork still loads.
    await loadHdTextFonts();
    const loader = new THREE.TextureLoader();
    await Promise.all([...new Set(assets.map(asset => asset.src))].map(async src => {
      const url = new URL(src, base);
      if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) throw new Error('Invalid HD path');
      const texture = await loader.loadAsync(url.href);
      texture.colorSpace = THREE.NoColorSpace; texture.minFilter = texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      if (this.disposed) texture.dispose(); else this.textures.set(src, texture);
    }));
    if (!this.disposed) this.manifest = manifest;
  }
  private asset(op: HdDrawOp): ArtAsset | undefined {
    if (op.kind === 'pic') {
      if (!this.introSpecs.has(op.pic)) this.introSpecs.set(op.pic, getHdIntroSpec(op.pic, this.assets));
      const spec = this.introSpecs.get(op.pic);
      if (spec) {
        const src = `@intro/${spec.key}`;
        if (!this.textures.has(src)) {
          const canvas = createHdIntroCanvas(spec);
          if (canvas) this.textures.set(src, this.canvasTexture(canvas));
        }
        return { src, width: spec.width, height: spec.height, originalRegions: spec.originalRegions };
      }
    }
    if (op.kind === 'text') {
      if (!hdTextFontsReady()) return undefined;
      const colors = [...new Set([op.color, ...(op.shadow ? [op.shadow.color] : []), ...op.glyphs.map(g => g.background).filter((c): c is number => c !== null)])];
      const src = `@text/${JSON.stringify([op, colors.map(c => this.palette[c])])}`;
      if (!this.textures.has(src)) {
        const canvas = createHdTextCanvas(op, this.assets, this.palette);
        if (!canvas) return undefined;
        this.textures.set(src, this.canvasTexture(canvas));
      }
      return { src, width: op.dest.right - op.dest.left, height: op.dest.bottom - op.dest.top, noFade: true };
    }
    if (op.kind === 'cel') {
      const ui = this.uiAsset(op);
      if (ui && !getHdUiSpec(op.view, op.loop, op.cel, this.assets)?.overlay) return ui;
      const spec = getHdPropSpec(op.view, op.loop, op.cel, this.assets);
      if (spec) {
        const src = `@prop/${spec.key}`;
        if (!this.textures.has(src)) {
          const canvas = createHdPropCanvas(op.view, op.loop, op.cel, this.assets);
          if (canvas) this.textures.set(src, this.canvasTexture(canvas));
        }
        return { src, width: spec.width, height: spec.height, originalRegions: spec.originalRegions, generatedAlpha: spec.kind === 'clock-sector' };
      }
    }
    return op.kind === 'pic' ? this.manifest?.pics[op.pic] : op.kind === 'cel' ? this.manifest?.cels[`${op.view}:${op.loop}:${op.cel}`] : undefined;
  }
  private uiAsset(op: Extract<HdDrawOp, { kind: 'cel' }>): ArtAsset | undefined {
    if (!hdTextFontsReady()) return undefined;
    const spec = getHdUiSpec(op.view, op.loop, op.cel, this.assets);
    if (!spec) return undefined;
    const src = `@ui/${spec.key}`;
    if (!this.textures.has(src)) {
      const canvas = createHdUiCanvas(op.view, op.loop, op.cel, this.assets);
      if (!canvas) return undefined;
      this.textures.set(src, this.canvasTexture(canvas));
    }
    return { src, width: spec.width, height: spec.height };
  }
  private canvasTexture(canvas: HTMLCanvasElement): THREE.CanvasTexture {
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.NoColorSpace; texture.minFilter = texture.magFilter = THREE.LinearFilter; texture.generateMipmaps = false;
    return texture;
  }
  private inkMask(op: HdDrawOp, asset?: ArtAsset): THREE.DataTexture {
    if (op.kind !== 'cel' || !asset?.preserveSourceColors?.length) return this.emptyInk;
    const key = `${op.view}:${op.loop}:${op.cel}:${asset.preserveSourceColors.join(',')}:${JSON.stringify(asset.preserveSourceColorRegions || [])}`;
    const previous = this.inkMasks.get(key); if (previous) return previous;
    const cel = this.assets.views[op.view]?.loops[op.loop]?.cels[op.cel];
    if (!cel) return this.emptyInk;
    const pixels = decodeBytes(cel.pixels), bytes = new Uint8Array(cel.width * cel.height * 4), colors = new Set(asset.preserveSourceColors);
    // Flip rows to match conventional bottom-left texture UVs.
    for (let y = 0; y < cel.height; y++) for (let x = 0; x < cel.width; x++) {
      const offset = ((cel.height - 1 - y) * cel.width + x) * 4;
      const inside = !asset.preserveSourceColorRegions?.length || asset.preserveSourceColorRegions.some(r =>
        x >= r.left && x < r.right && y >= r.top && y < r.bottom);
      bytes[offset] = inside && colors.has(pixels[y * cel.width + x]) ? 255 : 0; bytes[offset + 3] = 255;
    }
    const texture = new THREE.DataTexture(bytes, cel.width, cel.height, THREE.RGBAFormat);
    texture.minFilter = texture.magFilter = THREE.NearestFilter; texture.generateMipmaps = false; texture.needsUpdate = true;
    this.inkMasks.set(key, texture); return texture;
  }
  private makeLayer(op: HdDrawOp, key: string, replacement?: ArtAsset): Layer | null {
    // Original ownership protects clipping, foregrounds, pressed states and input.
    // HD text replaces only recorded uniform glyph cells, never reflows text.
    const asset = replacement || this.asset(op);
    const texture = asset && this.textures.get(asset.src);
    if (!texture) return null;
    const w = op.dest.right - op.dest.left, h = op.dest.bottom - op.dest.top;
    if (!(w > 0 && h > 0)) return null;
    const crop = new THREE.Vector4(0, 0, 1, 1);
    if (asset?.crop) {
      const image = texture.image as HTMLImageElement, c = asset.crop;
      crop.set(c.left / image.width, 1 - (c.top + c.height) / image.height, c.width / image.width, c.height / image.height);
    }
    const regions = Array.from({ length: 12 }, () => new THREE.Vector4());
    asset?.regions?.slice(0, 12).forEach((r, i) => regions[i].set(r.left, r.top, r.right, r.bottom));
    const originalRegions = Array.from({ length: 12 }, () => new THREE.Vector4());
    asset?.originalRegions?.slice(0, 12).forEach((r, i) => originalRegions[i].set(r.left, r.top, r.right, r.bottom));
    const id = op.id;
    const redrawInk = op.kind === 'cel' && hdTextFontsReady() && getHdUiSpec(op.view, op.loop, op.cel, this.assets)?.replaceInk;
    const material = new THREE.ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment,
      uniforms: { art: { value: texture }, owners: { value: this.mask }, fade: { value: this.fade },
        applyFade: { value: asset?.noFade ? 0 : 1 }, originalInk: { value: this.inkMask(op, asset) }, hasOriginalInk: { value: !redrawInk && asset?.preserveSourceColors?.length ? 1 : 0 },
        owner: { value: new THREE.Vector4((id & 255) / 255, ((id >>> 8) & 255) / 255, ((id >>> 16) & 255) / 255, (id >>> 24) / 255) },
        dest: { value: new THREE.Vector4(op.dest.left, op.dest.top, w, h) }, crop: { value: crop },
        mirror: { value: (op.kind === 'pic' && op.mirror) !== !!asset?.mirrorX ? 1 : 0 }, lighting: { value: 0 }, strength: { value: 0 }, effect: { value: 0 },
        isTown: { value: op.kind === 'pic' && op.pic === 11 ? 1 : 0 },
        regionCount: { value: Math.min(12, asset?.regions?.length || 0) }, regions: { value: regions },
        originalRegionCount: { value: Math.min(12, asset?.originalRegions?.length || 0) }, originalRegions: { value: originalRegions } },
      transparent: true, depthTest: false, depthWrite: false, toneMapped: false });
    const mesh = new THREE.Mesh(this.geometry, material);
    mesh.position.set(op.dest.left + w / 2 - 160, 100 - op.dest.top - h / 2, .01);
    mesh.scale.set(w, h, 1); mesh.renderOrder = 10;
    this.group.add(mesh);
    return { mesh, texture, key };
  }
  update(frame: GraphicsFrame, pixels: Uint8Array, cursorPixels: number[] = []) {
    if (!this.options.enabled || !this.manifest || this.failed) { this.group.visible = false; return; }
    try {
      if (!frame.hd || frame.hd.version !== 1) { this.group.visible = false; return; }
      this.palette = frame.palette;
      if (this.lastFrame !== frame) {
        const originalOwners = decodeOwners(frame.hd.owners);
        const candidates = new Set<number>(), backgrounds = new Set<number>();
        for (const op of frame.hd.ops) {
          const art = this.asset(op);
          if (art && this.textures.has(art.src)) {
            if (art.generatedAlpha) candidates.add(op.id); else backgrounds.add(op.id);
          }
        }
        this.lastPlan = planHdSilhouettes(this.assets, frame, originalOwners, pixels, candidates, backgrounds);
        for (const op of frame.hd.ops) {
          const background = this.lastPlan.backdrops.get(op.id)?.backgroundOp;
          if (background) expandHdClockDialOwners(op, background, originalOwners, this.lastPlan.owners);
        }
        this.lastFrame = frame;
      }
      const owners = this.lastPlan!.owners;
      const towns = new Map(frame.hd.ops.filter((op): op is Extract<HdDrawOp, { kind: 'pic' }> => op.kind === 'pic' && op.pic === 11).map(op => [op.id, op]));
      for (let i = 0; i < 64000; i++) {
        const town = towns.get(owners[i]);
        const id = town && isOriginalTownUiPixel(this.townUiMask, this.townWidth, town, i % 320, Math.floor(i / 320)) ? 0 : owners[i], p = i * 4;
        this.maskBytes[p] = id & 255; this.maskBytes[p + 1] = (id >>> 8) & 255;
        this.maskBytes[p + 2] = (id >>> 16) & 255; this.maskBytes[p + 3] = id >>> 24;
        const fade = Math.round(255 * Math.max(0, Math.min(100, frame.hd.intensity?.[pixels[i]] ?? 100)) / 100);
        this.fadeBytes[p] = this.fadeBytes[p + 1] = this.fadeBytes[p + 2] = fade;
      }
      // The original cursor is painted above the artwork, with its exact original hotspot.
      for (const i of cursorPixels) this.maskBytes.fill(0, i * 4, i * 4 + 4);
      this.mask.needsUpdate = true; this.fade.needsUpdate = true;
      const live = new Set<string>();
      for (const op of frame.hd.ops) {
        if (!op || !Number.isSafeInteger(op.id) || op.id <= 0 || !op.dest) throw new Error('Invalid HD operation');
        const layerId = `op:${op.id}`;
        live.add(layerId);
        // IDs are local to a session/save; a restored snapshot may reuse an ID.
        const key = JSON.stringify(op) + (op.kind === 'text' ? JSON.stringify(this.palette) : '');
        let layer = this.layers.get(layerId);
        if (layer && layer.key !== key) { this.remove(layerId, layer); layer = undefined; }
        if (!layer) { layer = this.makeLayer(op, key) || undefined; if (layer) this.layers.set(layerId, layer); }
        const backdrop = this.lastPlan!.backdrops.get(op.id);
        if (backdrop && layer) {
          // Erase the old silhouette before painting the smooth, generated alpha.
          // Both layers use a presentation-only owner; foreground text stays above them.
          const underId = `backdrop:${op.id}`, underKey = `${key}:${JSON.stringify(backdrop)}`;
          live.add(underId);
          let under = this.layers.get(underId);
          if (under && under.key !== underKey) { this.remove(underId, under); under = undefined; }
          if (!under) {
            if (op.kind === 'cel' && op.view === 270 && backdrop.backgroundOp?.kind === 'pic' && backdrop.backgroundOp.pic === 11) {
              // The timer overlays an authored dial, not the town photograph.
              // Reconstruct that dial beneath its smooth sector, including the
              // original clear holes around the old pixel-sized hour markers.
              const background = backdrop.backgroundOp, r = HD_CLOCK_FACE_RECT, src = '@prop/clock-face';
              if (!this.textures.has(src)) {
                const canvas = createHdClockFaceCanvas(this.assets);
                if (canvas) this.textures.set(src, this.canvasTexture(canvas));
              }
              const left = background.dest.left + (background.mirror ? 320 - r.right : r.left), top = background.dest.top + r.top;
              under = this.makeLayer({ ...background, id: op.id, dest: { left, top, right: left + r.right - r.left, bottom: top + r.bottom - r.top } }, underKey,
                { src, width: r.right - r.left, height: r.bottom - r.top }) || undefined;
              if (under) under.mesh.material.uniforms.isTown.value = 0;
            } else if (backdrop.backgroundOp) {
              under = this.makeLayer({ ...backdrop.backgroundOp, id: op.id }, underKey) || undefined;
            } else if (backdrop.color) {
              const src = `@solid/${backdrop.color.join(',')}`;
              if (!this.textures.has(src)) {
                const texture = new THREE.DataTexture(new Uint8Array([...backdrop.color, 255]), 1, 1, THREE.RGBAFormat);
                texture.colorSpace = THREE.NoColorSpace; texture.needsUpdate = true;
                this.textures.set(src, texture);
              }
              under = this.makeLayer(op, underKey, { src, width: 1, height: 1 }) || undefined;
              if (under) under.mesh.material.uniforms.applyFade.value = 0;
            }
            if (under) { under.mesh.renderOrder = 9; this.layers.set(underId, under); }
          }
          if (under) {
            under.mesh.material.uniforms.lighting.value = this.options.lighting ? 1 : 0;
            under.mesh.material.uniforms.strength.value = Math.max(0, Math.min(1, this.options.intensity));
            under.mesh.material.uniforms.effect.value = this.options.effect || 0;
          }
        }
        if (layer) {
          layer.mesh.material.uniforms.lighting.value = this.options.lighting ? 1 : 0;
          layer.mesh.material.uniforms.strength.value = Math.max(0, Math.min(1, this.options.intensity));
          layer.mesh.material.uniforms.effect.value = this.options.effect || 0;
        }
        if (op.kind === 'cel' && getHdUiSpec(op.view, op.loop, op.cel, this.assets)?.overlay) {
          const uiId = `ui:${op.id}`;
          live.add(uiId);
          let ui = this.layers.get(uiId);
          if (ui && ui.key !== key) { this.remove(uiId, ui); ui = undefined; }
          if (!ui) {
            const art = this.uiAsset(op);
            ui = art ? this.makeLayer(op, key, art) || undefined : undefined;
            if (ui) { ui.mesh.renderOrder = 13; this.layers.set(uiId, ui); }
          }
          if (ui) {
            ui.mesh.material.uniforms.strength.value = Math.max(0, Math.min(1, this.options.intensity));
            ui.mesh.material.uniforms.effect.value = this.options.effect || 0;
          }
        }
        if (op.kind === 'pic' && op.pic === 11) {
          const overlays = (this.manifest.overlays || []).filter(overlay => overlay.pic === op.pic);
          for (let index = 0; index < overlays.length; index++) {
            const overlay = overlays[index], overlayId = `overlay:${op.id}:${index}`, overlayKey = `${key}:overlay:${index}`;
            live.add(overlayId);
            let patch = this.layers.get(overlayId);
            if (patch && patch.key !== overlayKey) { this.remove(overlayId, patch); patch = undefined; }
            if (!patch) {
              const r = overlay.dest, left = op.dest.left + (op.mirror ? 320 - r.right : r.left), top = op.dest.top + r.top;
              patch = this.makeLayer({ ...op, dest: { left, top, right: left + r.right - r.left, bottom: top + r.bottom - r.top } }, overlayKey, overlay) || undefined;
              if (patch) { patch.mesh.renderOrder = 11; this.layers.set(overlayId, patch); }
            }
            if (patch) {
              patch.mesh.material.uniforms.lighting.value = this.options.lighting ? 1 : 0;
              patch.mesh.material.uniforms.strength.value = Math.max(0, Math.min(1, this.options.intensity));
              patch.mesh.material.uniforms.effect.value = this.options.effect || 0;
            }
          }
          const faceId = `clock:${op.id}`, faceKey = `${key}:clock-face`, src = '@prop/clock-face';
          live.add(faceId);
          let face = this.layers.get(faceId);
          if (face && face.key !== faceKey) { this.remove(faceId, face); face = undefined; }
          if (!this.textures.has(src)) {
            const canvas = createHdClockFaceCanvas(this.assets);
            if (canvas) this.textures.set(src, this.canvasTexture(canvas));
          }
          if (!face) {
            const r = HD_CLOCK_FACE_RECT;
            const left = op.dest.left + (op.mirror ? 320 - r.right : r.left), top = op.dest.top + r.top;
            face = this.makeLayer({ ...op, dest: { left, top, right: left + r.right - r.left, bottom: top + r.bottom - r.top } }, faceKey,
              { src, width: r.right - r.left, height: r.bottom - r.top }) || undefined;
            if (face) { face.mesh.renderOrder = 12; this.layers.set(faceId, face); }
          }
          if (face) {
            face.mesh.material.uniforms.isTown.value = 0;
            face.mesh.material.uniforms.strength.value = Math.max(0, Math.min(1, this.options.intensity));
            face.mesh.material.uniforms.effect.value = this.options.effect || 0;
          }
        }
      }
      for (const [id, layer] of this.layers) if (!live.has(id)) this.remove(id, layer);
      // Text changes with money, prices, turn notices and saves; discard obsolete
      // textures instead of retaining every historical line during long games.
      const liveTextures = new Set([...this.layers.values()].map(layer => layer.texture));
      for (const [key, texture] of this.textures) if (key.startsWith('@text/') && !liveTextures.has(texture)) {
        texture.dispose(); this.textures.delete(key);
      }
      this.activeCount = this.layers.size; this.group.visible = true;
    } catch {
      this.group.visible = false;
      this.status('This screen is using original pixels; HD data could not be displayed.');
    }
  }
  private remove(id: string, layer: Layer) {
    this.group.remove(layer.mesh); layer.mesh.material.dispose(); this.layers.delete(id);
  }
  dispose() {
    this.disposed = true;
    for (const [id, layer] of this.layers) this.remove(id, layer);
    for (const texture of this.textures.values()) texture.dispose();
    for (const texture of this.inkMasks.values()) texture.dispose();
    this.emptyInk.dispose();
    this.geometry.dispose(); this.mask.dispose(); this.fade.dispose(); this.group.clear();
  }
}
