// SPDX-License-Identifier: GPL-3.0-or-later
// Optional presentation effects over the untouched ScummVM canvas. The original
// canvas owns input and remains the fallback whenever copying is unavailable.
const VERTEX = `attribute vec2 position; varying vec2 uv;
void main(){uv=position*.5+.5;gl_Position=vec4(position,0.,1.);}`;
const FRAGMENT = `precision mediump float;
uniform sampler2D scene; uniform vec2 texel; uniform float rows;
uniform float mode; uniform float strength; varying vec2 uv;
void main(){
 vec4 pixel=texture2D(scene,uv); vec3 color=pixel.rgb;
 if(mode<.5){
   vec3 blur=texture2D(scene,uv+vec2(texel.x,0.)).rgb;
   blur+=texture2D(scene,uv-vec2(texel.x,0.)).rgb;
   blur+=texture2D(scene,uv+vec2(0.,texel.y)).rgb;
   blur+=texture2D(scene,uv-vec2(0.,texel.y)).rgb;
   float luminance=dot(color,vec3(.299,.587,.114));
   vec3 enhanced=mix(vec3(luminance),color,1.055);
   enhanced=(enhanced-.5)*1.025+.5;
   enhanced+=max(blur*.25-vec3(.7),vec3(0.))*.12;
   color=mix(color,enhanced,strength);
 }else{
   float scan=.955+.045*cos(uv.y*rows*6.2831853);
   vec2 center=uv*2.-1.;
   float vignette=1.-.12*dot(center,center);
   color*=mix(1.,scan*vignette,strength);
 }
 gl_FragColor=vec4(clamp(color,0.,1.),pixel.a);
}`;
const MODES = ['classic', 'smooth', 'modern', 'crt'];
const RESOLUTIONS = ['auto', '720', '1080', '1440', '2160'];

/**
 * Display(sourceCanvas, outputCanvas, {onStatus(info)})
 * setSettings({mode, resolution, intensity, fps}), resize(), start(), stop(),
 * destroy(), info. Call start() when the runtime has begun rendering.
 * Classic/smooth always present ScummVM directly; modern/CRT are optional.
 * Both canvases must occupy the same CSS rectangle with no border or padding.
 */
export class Display {
  constructor(sourceCanvas, outputCanvas, { onStatus = () => {} } = {}) {
    if (!sourceCanvas || !outputCanvas || sourceCanvas === outputCanvas) {
      throw new TypeError('Display requires separate source and output canvases.');
    }
    this.source = sourceCanvas;
    this.output = outputCanvas;
    this._notifyCallback = typeof onStatus === 'function' ? onStatus : () => {};
    this._settings = { mode: 'classic', resolution: 'auto', intensity: 0.45, fps: 30 };
    this._originalOpacity = sourceCanvas.style.opacity;
    this._originalImageRendering = sourceCanvas.style.imageRendering;
    this._running = false;
    this._destroyed = false;
    this._active = false;
    this._lost = false;
    this._gl = null;
    this._resources = null;
    this._frame = null;
    this._lastFrame = -Infinity;
    this._lastStatus = '';
    this._message = '';
    // Construct Display from Module.onRuntimeInitialized, before SDL requests
    // its graphics context. The original context needs a retained drawing
    // buffer for optional post-processing between native render ticks. This
    // changes presentation storage only; SDL keeps its canvas and input paths.
    this._originalGetContext = sourceCanvas.getContext;
    this._hadOwnGetContext = Object.hasOwn(sourceCanvas, 'getContext');
    this._captureGetContext = function (type, attributes, ...extra) {
      const options = ['webgl', 'webgl2', 'experimental-webgl'].includes(type)
        ? { ...attributes, preserveDrawingBuffer: true } : attributes;
      return sourceCanvas === this
        ? originalGetContext.call(this, type, options, ...extra)
        : originalGetContext.call(this, type, attributes, ...extra);
    };
    const originalGetContext = this._originalGetContext;
    sourceCanvas.getContext = this._captureGetContext;
    this._sampleCanvas = document.createElement('canvas');
    this._sampleCanvas.width = this._sampleCanvas.height = 16;
    this._sample = this._sampleCanvas.getContext('2d', { willReadFrequently: true });
    outputCanvas.style.pointerEvents = 'none';
    outputCanvas.setAttribute('aria-hidden', 'true');
    this._fallback();
    this._resize = () => this.resize();
    this._visibility = () => {
      if (document.hidden) this._cancelFrame();
      else { this._lastFrame = -Infinity; this._schedule(); }
    };
    this._fullscreen = () => {
      // ScummVM's own fullscreen command targets #canvas, excluding its sibling
      // overlay. Keep that native fullscreen canvas visible and interactive.
      if (document.fullscreenElement === this.source) {
        this._cancelFrame();
        this._fallback();
      } else {
        this.resize();
        this._schedule();
      }
    };
    this._contextLost = event => {
      event.preventDefault();
      this._lost = true;
      this._resources = null;
      this._fallback('Effects paused: graphics context lost. The original game remains visible.');
    };
    this._contextRestored = () => {
      this._lost = false;
      this._initialize();
      this._lastFrame = -Infinity;
      this._schedule();
    };
    outputCanvas.addEventListener('webglcontextlost', this._contextLost);
    outputCanvas.addEventListener('webglcontextrestored', this._contextRestored);
    window.addEventListener('resize', this._resize);
    document.addEventListener('visibilitychange', this._visibility);
    document.addEventListener('fullscreenchange', this._fullscreen);
    if (typeof ResizeObserver !== 'undefined') {
      this._observer = new ResizeObserver(this._resize);
      this._observer.observe(sourceCanvas);
    }
    this.setSettings(this._settings);
  }

  get info() {
    return Object.freeze({
      mode: this._settings.mode,
      effectiveMode: this._active ? this._settings.mode
        : this._settings.mode === 'classic' ? 'classic' : 'smooth',
      renderer: this._active ? 'WebGL effects' : 'Original ScummVM canvas',
      active: this._active,
      running: this._running,
      resolution: this._settings.resolution,
      intensity: this._settings.intensity,
      fps: this._settings.fps,
      width: this._active ? this.output.width : this.source.width,
      height: this._active ? this.output.height : this.source.height,
      sourceWidth: this.source.width,
      sourceHeight: this.source.height,
      contextLost: this._lost,
      message: this._message,
    });
  }

  setSettings(settings = {}) {
    if (this._destroyed) return;
    if (MODES.includes(settings.mode)) this._settings.mode = settings.mode;
    if (RESOLUTIONS.includes(settings.resolution)) this._settings.resolution = settings.resolution;
    if (Number.isFinite(settings.intensity)) this._settings.intensity = Math.min(1, Math.max(0, settings.intensity));
    if ([30, 60].includes(settings.fps)) this._settings.fps = settings.fps;
    this.source.style.imageRendering = this._settings.mode === 'classic' ? 'pixelated' : 'auto';
    if (this._enhanced()) {
      if (!this._gl && !this._lost) this._initialize();
    } else {
      this._cancelFrame();
      this._fallback();
    }
    this._lastFrame = -Infinity;
    this.resize();
    this._schedule();
  }

  resize() {
    if (this._destroyed) return;
    const bounds = this.source.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    let height = this._settings.resolution === 'auto'
      ? bounds.height * Math.min(2, window.devicePixelRatio || 1) : Number(this._settings.resolution);
    let width = height * bounds.width / bounds.height;
    const limit = this._gl?.getParameter(this._gl.MAX_RENDERBUFFER_SIZE) || 4096;
    const scale = Math.min(1, Math.min(3840, limit) / width, Math.min(2160, limit) / height);
    width = Math.max(1, Math.floor(width * scale)); height = Math.max(1, Math.floor(height * scale));
    if (this.output.width !== width) this.output.width = width;
    if (this.output.height !== height) this.output.height = height;
    this._lastFrame = -Infinity;
    this._notify();
  }

  start() {
    if (this._destroyed) return;
    this._running = true;
    this.resize();
    this._schedule();
    this._notify();
  }

  stop() {
    this._running = false;
    this._cancelFrame();
    this._fallback();
  }

  destroy() {
    if (this._destroyed) return;
    this.stop();
    this._destroyed = true;
    this._observer?.disconnect();
    window.removeEventListener('resize', this._resize);
    document.removeEventListener('visibilitychange', this._visibility);
    document.removeEventListener('fullscreenchange', this._fullscreen);
    this.output.removeEventListener('webglcontextlost', this._contextLost);
    this.output.removeEventListener('webglcontextrestored', this._contextRestored);
    this._dispose();
    this._gl?.getExtension('WEBGL_lose_context')?.loseContext();
    this.source.style.imageRendering = this._originalImageRendering;
    if (this.source.getContext === this._captureGetContext) {
      if (this._hadOwnGetContext) this.source.getContext = this._originalGetContext;
      else delete this.source.getContext;
    }
    this._gl = null;
  }

  _enhanced() { return ['modern', 'crt'].includes(this._settings.mode); }

  _fallback(message = '') {
    this._active = false;
    this._message = message;
    this.output.hidden = true;
    this.output.style.display = 'none';
    this.source.style.opacity = this._originalOpacity;
    this._notify();
  }

  _notify() {
    const info = this.info;
    const signature = JSON.stringify(info);
    if (signature === this._lastStatus) return;
    this._lastStatus = signature;
    try { this._notifyCallback(info); } catch (error) { console.error('Display status callback:', error); }
  }

  _cancelFrame() {
    if (this._frame !== null) cancelAnimationFrame(this._frame);
    this._frame = null;
  }

  _schedule() {
    if (!this._running || this._destroyed || !this._enhanced() || document.hidden || this._frame !== null || document.fullscreenElement === this.source) return;
    this._frame = requestAnimationFrame(time => {
      this._frame = null;
      if (time - this._lastFrame >= 1000 / this._settings.fps - 0.5) {
        this._lastFrame = time;
        this._draw();
      }
      this._schedule();
    });
  }

  _initialize() {
    const gl = this._gl || this.output.getContext('webgl', {
      alpha: false, antialias: false, depth: false, stencil: false,
      powerPreference: 'low-power', preserveDrawingBuffer: false,
    });
    this._gl = gl;
    if (!gl) { this._fallback('WebGL effects are unavailable. The original game remains visible.'); return; }
    let vertex, fragment, program, buffer, texture;
    try {
      this._dispose();
      const compile = (type, source) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source); gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          const error = gl.getShaderInfoLog(shader); gl.deleteShader(shader); throw new Error(error);
        }
        return shader;
      };
      vertex = compile(gl.VERTEX_SHADER, VERTEX); fragment = compile(gl.FRAGMENT_SHADER, FRAGMENT);
      program = gl.createProgram(); gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
      buffer = gl.createBuffer(); texture = gl.createTexture();
      if (!buffer || !texture) throw new Error('Insufficient graphics memory.');
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      for (const parameter of [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T]) gl.texParameteri(gl.TEXTURE_2D, parameter, gl.CLAMP_TO_EDGE);
      for (const parameter of [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER]) gl.texParameteri(gl.TEXTURE_2D, parameter, gl.LINEAR);
      this._resources = { program, buffer, texture, position: gl.getAttribLocation(program, 'position'),
        ...Object.fromEntries(['scene', 'texel', 'rows', 'mode', 'strength'].map(name => [name, gl.getUniformLocation(program, name)])) };
      this._message = '';
    } catch (error) {
      if (program) gl.deleteProgram(program); if (buffer) gl.deleteBuffer(buffer); if (texture) gl.deleteTexture(texture);
      this._resources = null;
      this._fallback(`Effects unavailable: ${error.message}`);
    } finally {
      if (vertex) gl.deleteShader(vertex); if (fragment) gl.deleteShader(fragment);
    }
  }

  _dispose() {
    if (this._gl && this._resources && !this._lost) {
      this._gl.deleteTexture(this._resources.texture);
      this._gl.deleteBuffer(this._resources.buffer);
      this._gl.deleteProgram(this._resources.program);
    }
    this._resources = null;
  }

  _draw() {
    const gl = this._gl, resource = this._resources;
    if (!gl || !resource || this._lost || !this.source.width || !this.source.height) return;
    try {
      // SDL/WebGL may discard its drawing buffer after presenting. A discarded
      // or unreadable source must never cover the original with a black frame.
      this._sample.clearRect(0, 0, 16, 16);
      this._sample.drawImage(this.source, 0, 0, 16, 16);
      const pixels = this._sample.getImageData(0, 0, 16, 16).data;
      let visible = false;
      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] > 0 && pixels[i] + pixels[i + 1] + pixels[i + 2] > 3) { visible = true; break; }
      }
      if (!visible) { this._fallback('Original display active while the runtime frame is unavailable.'); return; }
      const maxTexture = gl.getParameter(gl.MAX_TEXTURE_SIZE);
      if (this.source.width > maxTexture || this.source.height > maxTexture) throw new Error('Source exceeds the graphics texture limit.');
      gl.viewport(0, 0, this.output.width, this.output.height);
      gl.useProgram(resource.program); gl.bindBuffer(gl.ARRAY_BUFFER, resource.buffer);
      gl.enableVertexAttribArray(resource.position); gl.vertexAttribPointer(resource.position, 2, gl.FLOAT, false, 0, 0);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, resource.texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.source);
      gl.uniform1i(resource.scene, 0); gl.uniform2f(resource.texel, 1 / this.source.width, 1 / this.source.height);
      gl.uniform1f(resource.rows, Math.min(this.source.height, 480));
      gl.uniform1f(resource.mode, this._settings.mode === 'modern' ? 0 : 1);
      gl.uniform1f(resource.strength, this._settings.intensity); gl.drawArrays(gl.TRIANGLES, 0, 6);
      if (gl.isContextLost() || gl.getError() !== gl.NO_ERROR) throw new Error('Graphics context unavailable.');
      this.output.hidden = false;
      this.output.style.display = 'block';
      this.source.style.opacity = '0';
      this._active = true;
      this._message = '';
      this._notify();
    } catch (error) {
      this._fallback(`Original display active: ${error.message}`);
    }
  }
}

export default Display;
