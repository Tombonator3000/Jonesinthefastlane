// SPDX-License-Identifier: GPL-3.0-or-later
// Optional local artwork. The authoritative 320x200 raster still owns every hit target.
import * as THREE from 'three';
import { decodeOwners } from './provenance.js';
import { originalTownUiMask, isOriginalTownUiPixel } from './original-ui.js';
import type { GraphicsFrame, HdDrawOp, NativeAssetManifest, Rect } from './types.js';

interface ArtAsset {
  src: string; width: number; height: number;
  crop?: { left: number; top: number; width: number; height: number };
  regions?: Rect[];
}
interface ArtManifest { schema: 1; title?: string; pics: Record<string, ArtAsset>; cels: Record<string, ArtAsset> }
interface Layer { mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>; texture: THREE.Texture; key: string }
export interface HdOptions { enabled: boolean; lighting: boolean; intensity: number; effect?: number }

const vertex = `varying vec2 artUv;
void main(){artUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const fragment = `precision highp float;
uniform sampler2D art;
uniform sampler2D owners;
uniform sampler2D fade;
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
varying vec2 artUv;
void main(){
  vec2 local=vec2(artUv.x,1.-artUv.y)*dest.zw;
  vec2 logical=dest.xy+local;
  vec2 cell=(floor(logical)+.5)/vec2(320.,200.);
  if(any(greaterThan(abs(texture2D(owners,cell)-owner),vec4(.001)))) discard;
  vec2 assetPoint=vec2(mirror>.5?dest.z-local.x:local.x,local.y);
  bool allowed=regionCount==0;
  for(int i=0;i<12;i++){
    if(i>=regionCount) break;
    vec4 r=regions[i];
    if(assetPoint.x>=r.x&&assetPoint.y>=r.y&&assetPoint.x<r.z&&assetPoint.y<r.w) allowed=true;
  }
  if(!allowed) discard;
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
  color.rgb*=texture2D(fade,cell).r;
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
  private layers = new Map<number, Layer>();
  private textures = new Map<string, THREE.Texture>();
  private manifest?: ArtManifest;
  private loading?: Promise<void>;
  private disposed = false;
  private failed = false;
  private options: HdOptions = { enabled: false, lighting: false, intensity: .4 };
  private lastFrame?: GraphicsFrame;
  private lastOwners?: Uint32Array;
  private activeCount = 0;
  private readonly townUiMask: Uint8Array;
  private readonly townWidth: number;

  constructor(assets: NativeAssetManifest, private readonly changed: () => void,
    private readonly status: (message: string) => void) {
    this.townUiMask = originalTownUiMask(assets.pics[11]); this.townWidth = assets.pics[11]?.width || 320;
    for (const t of [this.mask, this.fade]) {
      t.minFilter = t.magFilter = THREE.NearestFilter; t.generateMipmaps = false; t.colorSpace = THREE.NoColorSpace;
    }
    this.group.visible = false;
  }
  get diagnostics() { return { requested: this.options.enabled, ready: !!this.manifest, failed: this.failed, layers: this.activeCount, fonts: false, ui: 'original' }; }
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
    const assets = [...Object.values(manifest.pics), ...Object.values(manifest.cels)];
    if (assets.length > 1024) throw new Error('HD pack is too large');
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
    return op.kind === 'pic' ? this.manifest?.pics[op.pic] : op.kind === 'cel' ? this.manifest?.cels[`${op.view}:${op.loop}:${op.cel}`] : undefined;
  }
  private makeLayer(op: HdDrawOp, key: string): Layer | null {
    // Text, controls and their pressed states always come from the original raster.
    // The optional manifest maps illustrations only; it never replaces game UI.
    if (op.kind === 'text') return null;
    const asset = this.asset(op);
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
    const id = op.id;
    const material = new THREE.ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment,
      uniforms: { art: { value: texture }, owners: { value: this.mask }, fade: { value: this.fade },
        owner: { value: new THREE.Vector4((id & 255) / 255, ((id >>> 8) & 255) / 255, ((id >>> 16) & 255) / 255, (id >>> 24) / 255) },
        dest: { value: new THREE.Vector4(op.dest.left, op.dest.top, w, h) }, crop: { value: crop },
        mirror: { value: op.kind === 'pic' && op.mirror ? 1 : 0 }, lighting: { value: 0 }, strength: { value: 0 }, effect: { value: 0 },
        isTown: { value: op.kind === 'pic' && op.pic === 11 ? 1 : 0 },
        regionCount: { value: Math.min(12, asset?.regions?.length || 0) }, regions: { value: regions } },
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
      if (this.lastFrame !== frame) {
        this.lastOwners = decodeOwners(frame.hd.owners);
        this.lastFrame = frame;
      }
      const owners = this.lastOwners!;
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
      const live = new Set<number>();
      for (const op of frame.hd.ops) {
        if (!op || !Number.isSafeInteger(op.id) || op.id <= 0 || !op.dest) throw new Error('Invalid HD operation');
        live.add(op.id);
        // IDs are local to a session/save; a restored snapshot may reuse an ID.
        const key = JSON.stringify(op);
        let layer = this.layers.get(op.id);
        if (layer && layer.key !== key) { this.remove(op.id, layer); layer = undefined; }
        if (!layer) { layer = this.makeLayer(op, key) || undefined; if (layer) this.layers.set(op.id, layer); }
        if (layer) {
          layer.mesh.material.uniforms.lighting.value = this.options.lighting ? 1 : 0;
          layer.mesh.material.uniforms.strength.value = Math.max(0, Math.min(1, this.options.intensity));
          layer.mesh.material.uniforms.effect.value = this.options.effect || 0;
        }
      }
      for (const [id, layer] of this.layers) if (!live.has(id)) this.remove(id, layer);
      this.activeCount = this.layers.size; this.group.visible = true;
    } catch {
      this.group.visible = false;
      this.status('This screen is using original pixels; HD data could not be displayed.');
    }
  }
  private remove(id: number, layer: Layer) {
    this.group.remove(layer.mesh); layer.mesh.material.dispose(); this.layers.delete(id);
  }
  dispose() {
    this.disposed = true;
    for (const [id, layer] of this.layers) this.remove(id, layer);
    for (const texture of this.textures.values()) texture.dispose();
    this.geometry.dispose(); this.mask.dispose(); this.fade.dispose(); this.group.clear();
  }
}
