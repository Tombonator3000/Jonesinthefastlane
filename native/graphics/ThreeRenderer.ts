// SPDX-License-Identifier: GPL-3.0-or-later
// Browser-only presentation of the native, serializable indexed graphics frame.
import * as THREE from 'three';
import { decodeBytes } from './bytes.js';
import { HdPresentation } from './HdPresentation.js';
import type { GraphicsFrame, NativeAssetManifest, Point } from './types.js';

export type DisplayMode = 'original' | 'smooth' | 'modern' | 'crt';
export interface ThreeRendererOptions {
  mode?: DisplayMode; resolutionHeight?: number; intensity?: number; drawCursor?: boolean;
  pack?: 'original' | 'hd'; lighting?: boolean;
  onStatus?: (status: { backend: 'three' | 'canvas'; message?: string; width: number; height: number }) => void;
}
const vertex = `varying vec2 frameUv;
void main() { frameUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`;
const fragment = `precision highp float;
uniform sampler2D source;
uniform vec2 outputSize;
uniform float effect;
uniform float intensity;
varying vec2 frameUv;
void main() {
  vec3 rgb=texture2D(source,frameUv).rgb;
  if (effect>1.5) {
    // Pixel-aligned scanlines; output resolution never changes game coordinates.
    float scan=0.90+0.10*cos(frameUv.y*200.0*6.28318530718);
    float vignette=1.0-0.22*dot(frameUv-0.5,frameUv-0.5);
    vec3 crt=rgb*scan*vignette;
    float stripe=mod(floor(gl_FragCoord.x),3.0);
    crt*=vec3(stripe<0.5?1.04:0.98,stripe>0.5&&stripe<1.5?1.04:0.98,stripe>1.5?1.04:0.98);
    rgb=mix(rgb,crt,intensity);
  } else if (effect>0.5) {
    vec2 px=vec2(1.0/320.0,1.0/200.0);
    vec3 blur=(texture2D(source,frameUv+vec2(px.x,0.)).rgb+texture2D(source,frameUv-vec2(px.x,0.)).rgb+
      texture2D(source,frameUv+vec2(0.,px.y)).rgb+texture2D(source,frameUv-vec2(0.,px.y)).rgb)*.25;
    vec3 modern=clamp(rgb+(rgb-blur)*.18,0.,1.);
    rgb=mix(rgb,modern,intensity);
  }
  gl_FragColor=vec4(rgb,1.0);
}`;

export class ThreeRenderer {
  readonly logicalCanvas = document.createElement('canvas');
  readonly renderer: THREE.WebGLRenderer | null;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.OrthographicCamera(-160, 160, 100, -100, .1, 10);
  readonly texture: THREE.CanvasTexture;
  readonly material: THREE.ShaderMaterial;
  private readonly context: CanvasRenderingContext2D;
  private readonly fallback = document.createElement('canvas');
  private readonly fallbackContext: CanvasRenderingContext2D;
  private readonly geometry = new THREE.PlaneGeometry(320, 200);
  private readonly resizeObserver: ResizeObserver;
  private options: ThreeRendererOptions;
  private currentFrame?: GraphicsFrame;
  private pixels?: Uint8Array;
  private localPointer?: Point;
  private cursorCache = new Map<number, Uint8Array>();
  private contextLost = false;
  private disposed = false;
  private readonly hd: HdPresentation;

  get hdStatus() { return this.hd.diagnostics; }

  constructor(readonly canvas: HTMLCanvasElement, readonly assets: NativeAssetManifest, options: ThreeRendererOptions = {}) {
    this.options = { mode: 'original', pack: 'original', lighting: false, intensity: .4, resolutionHeight: 0, drawCursor: true, ...options };
    this.logicalCanvas.width = 320; this.logicalCanvas.height = 200;
    const context = this.logicalCanvas.getContext('2d', { alpha: false });
    const fallbackContext = this.fallback.getContext('2d', { alpha: false });
    if (!context || !fallbackContext) throw new Error('Canvas graphics are unavailable');
    this.context = context; this.fallbackContext = fallbackContext;
    this.texture = new THREE.CanvasTexture(this.logicalCanvas);
    this.texture.minFilter = this.texture.magFilter = THREE.NearestFilter;
    this.texture.generateMipmaps = false;
    // Keep original palette bytes exact; optional effects are explicitly opt-in.
    this.texture.colorSpace = THREE.NoColorSpace;
    this.material = new THREE.ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment, uniforms: {
      source: { value: this.texture }, outputSize: { value: new THREE.Vector2(320, 200) },
      effect: { value: 0 }, intensity: { value: this.options.intensity }
    }, depthTest: false, depthWrite: false, toneMapped: false });
    this.scene.add(new THREE.Mesh(this.geometry, this.material)); this.camera.position.z = 1;
    this.hd = new HdPresentation(assets, () => { if (this.currentFrame) this.paintFrame(); }, message => {
      this.options.onStatus?.({ backend: this.renderer && !this.contextLost ? 'three' : 'canvas', message, width: this.canvas.width, height: this.canvas.height });
    });
    this.scene.add(this.hd.group);
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, preserveDrawingBuffer: true, powerPreference: 'low-power' });
      renderer.setClearColor(0x000000, 1);
      renderer.debug.onShaderError = () => {
        this.contextLost = true;
        this.showFallback('Graphics effects are unavailable; original pixels remain active.');
      };
    } catch { /* Native game rasterization continues via Canvas fallback. */ }
    this.renderer = renderer;
    this.fallback.className = canvas.className;
    this.fallback.setAttribute('aria-hidden', 'true');
    this.fallback.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;image-rendering:pixelated;display:none';
    canvas.parentElement?.append(this.fallback);
    canvas.addEventListener('webglcontextlost', this.onLost);
    canvas.addEventListener('webglcontextrestored', this.onRestored);
    this.resizeObserver = new ResizeObserver(() => this.resize()); this.resizeObserver.observe(canvas);
    this.setOptions(this.options); this.resize();
    if (!renderer) this.showFallback('WebGL is unavailable; original pixels remain active.');
  }
  private onLost = (event: Event): void => { event.preventDefault(); this.contextLost = true; this.showFallback('Graphics effects paused; original pixels remain active.'); };
  private onRestored = (): void => { this.contextLost = false; this.fallback.style.display = 'none'; this.texture.needsUpdate = true; this.render(); };
  private showFallback(message: string): void {
    this.fallback.style.display = 'block'; this.renderFallback();
    this.options.onStatus?.({ backend: 'canvas', message, width: this.fallback.width, height: this.fallback.height });
  }
  setOptions(options: Partial<ThreeRendererOptions>): void {
    this.options = { ...this.options, ...options };
    const mode = this.options.mode || 'original';
    this.texture.minFilter = this.texture.magFilter = mode === 'smooth' ? THREE.LinearFilter : THREE.NearestFilter;
    this.material.uniforms.effect.value = mode === 'modern' ? 1 : mode === 'crt' ? 2 : 0;
    this.material.uniforms.intensity.value = Math.max(0, Math.min(1, this.options.intensity ?? .4));
    this.hd.configure({ enabled: this.options.pack === 'hd' && !!this.renderer, lighting: !!this.options.lighting, intensity: this.options.intensity ?? .4, effect: this.material.uniforms.effect.value });
    this.texture.needsUpdate = true; this.resize();
    if (this.currentFrame) this.paintFrame();
  }
  resize(): void {
    if (this.disposed) return;
    const box = this.canvas.getBoundingClientRect();
    const width = Math.max(1, Math.round(box.width)), height = Math.max(1, Math.round(box.height));
    const desired = this.options.resolutionHeight || Math.round(height * Math.min(devicePixelRatio || 1, 3));
    const cap = this.renderer?.capabilities.maxTextureSize || 4096;
    const outputHeight = Math.min(cap, Math.max(1, desired)), outputWidth = Math.min(cap, Math.max(1, Math.round(outputHeight * width / height)));
    this.renderer?.setSize(outputWidth, outputHeight, false);
    this.fallback.width = outputWidth; this.fallback.height = outputHeight;
    this.material.uniforms.outputSize.value.set(outputWidth, outputHeight);
    this.options.onStatus?.({ backend: this.renderer && !this.contextLost ? 'three' : 'canvas', width: outputWidth, height: outputHeight });
    this.render();
  }
  /** Map client pointer positions through exactly the displayed 8:5 letterbox. */
  clientToGame(clientX: number, clientY: number): Point | null {
    const box = this.canvas.getBoundingClientRect();
    const width = Math.min(box.width, box.height * 1.6), height = width / 1.6;
    const x = (clientX - box.left - (box.width - width) / 2) * 320 / width;
    const y = (clientY - box.top - (box.height - height) / 2) * 200 / height;
    if (x < 0 || y < 0 || x >= 320 || y >= 200) return null;
    return { x: Math.floor(x), y: Math.floor(y) };
  }
  setPointer(point?: Point): void { this.localPointer = point; if (this.currentFrame) this.paintFrame(); }
  applyFrame(frame: GraphicsFrame): void {
    if (frame.width !== 320 || frame.height !== 200 || frame.palette.length !== 256) throw new Error('Invalid native graphics frame');
    const pixels = decodeBytes(frame.pixels);
    if (pixels.length !== 64000) throw new Error('Invalid native frame pixel length');
    this.currentFrame = frame; this.pixels = pixels; this.paintFrame();
  }
  private paintFrame(): void {
    const frame = this.currentFrame!, pixels = this.pixels!;
    const cursorPixels: number[] = [];
    const image = this.context.createImageData(320, 200);
    for (let i = 0; i < pixels.length; i++) {
      const c = frame.palette[pixels[i]], offset = i * 4;
      image.data[offset] = c[0]; image.data[offset + 1] = c[1]; image.data[offset + 2] = c[2]; image.data[offset + 3] = 255;
    }
    if (this.options.drawCursor && frame.cursor.visible) {
      const c = this.assets.cursors[frame.cursor.id];
      if (c) {
        let bitmap = this.cursorCache.get(c.id);
        if (!bitmap) { bitmap = decodeBytes(c.pixels); this.cursorCache.set(c.id, bitmap); }
        const pointer = this.localPointer || frame.cursor;
        for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) {
          const index = bitmap[y * c.width + x], px = pointer.x + x - c.hotspotX, py = pointer.y + y - c.hotspotY;
          if (index === c.clear || px < 0 || py < 0 || px >= 320 || py >= 200) continue;
          const value = index === 255 ? 255 : index === 7 ? 170 : 0, offset = (py * 320 + px) * 4;
          image.data[offset] = image.data[offset + 1] = image.data[offset + 2] = value;
          cursorPixels.push(py * 320 + px);
        }
      }
    }
    this.context.putImageData(image, 0, 0); this.texture.needsUpdate = true;
    this.hd.update(frame, pixels, cursorPixels); this.render();
  }
  private renderFallback(): void {
    const ctx = this.fallbackContext, w = this.fallback.width, h = this.fallback.height;
    const width = Math.min(w, h * 1.6), height = width / 1.6;
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h); ctx.imageSmoothingEnabled = this.options.mode === 'smooth';
    ctx.drawImage(this.logicalCanvas, (w - width) / 2, (h - height) / 2, width, height);
  }
  render(): void {
    if (this.disposed) return;
    if (!this.renderer || this.contextLost) { this.renderFallback(); return; }
    const w = this.canvas.width, h = this.canvas.height, width = Math.min(w, h * 1.6), height = width / 1.6;
    this.renderer.setViewport(0, 0, w, h); this.renderer.clear();
    this.renderer.setViewport((w - width) / 2, (h - height) / 2, width, height);
    this.renderer.render(this.scene, this.camera);
  }
  dispose(): void {
    if (this.disposed) return;
    this.disposed = true; this.resizeObserver.disconnect();
    this.canvas.removeEventListener('webglcontextlost', this.onLost); this.canvas.removeEventListener('webglcontextrestored', this.onRestored);
    this.hd.dispose(); this.texture.dispose(); this.material.dispose(); this.geometry.dispose(); this.renderer?.dispose(); this.fallback.remove();
  }
}
