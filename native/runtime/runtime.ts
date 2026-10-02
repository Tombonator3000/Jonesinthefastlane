// SPDX-License-Identifier: GPL-3.0-or-later
// Support for translated SCI source. Game rules live in generated TypeScript.
import { kernel } from './kernels.js';

export type Value = any;
export type Method = (this: any, rt: Runtime, args: any[]) => Promise<any>;
export interface ObjectDef {
  name: string; className?: string; parent?: any; isClass?: boolean;
  properties: Record<string, any>; methods: Record<string, Method>;
}
export interface ScriptDef {
  name: string; uses?: number[]; locals: any[]; objects: ObjectDef[];
  procedures: Record<string, (rt: Runtime, args: any[]) => Promise<any>>;
  exports: Record<string, string>;
}
export interface SciObject {
  kind: 'object'; id: number; script: number; name: string; def: ObjectDef;
  props: Record<string, any>; parent: SciObject | null; initialized: boolean;
  clone?: boolean; disposed?: boolean;
}
export interface Ref {kind: 'ref'; owner: any[]; index: number; byte: number}
export class RestoreSignal extends Error {}
export class RestartSignal extends Error {}
export class StopSignal extends Error {}

export class Runtime {
  scripts = new Map<number, ScriptDef>();
  locals = new Map<number, any[]>();
  objects = new Map<string, SciObject>();
  heap = new Map<number, any>();
  classes = new Map<string, {script: number; name: string}>();
  nextId = 4096;
  selectors: string[] = [];
  graphics: any;
  manifest: any;
  ticks = 0;
  seed: number;
  stopped = false;
  restarting = false;
  queue: any[] = [];
  // Optional host policy, evaluated when the original game reads an event.
  filterEvent?: (event: any) => boolean;
  pointer = {x: 160, y: 100, down: false};
  cursor = {number: 999, visible: true};
  waits: {tick: number; resolve: () => void}[] = [];
  lastEventTick = -1;
  lastWaitTick = 0;
  modifiers = 0;
  saved: string | null = null;
  onSave?: (save: string) => void;
  onFrame?: () => void;
  trace: string[] = [];
  warnings = new Set<string>();
  menus: any[] = [];
  soundState = new Map<number, any>();
  constructor(options: {seed?: number; graphics?: any; manifest?: any; selectors?: string[]} = {}) {
    this.seed = (options.seed ?? 1) >>> 0;
    this.graphics = options.graphics;
    this.manifest = options.manifest;
    this.selectors = options.selectors ?? [];
  }
  defineScript(id: number, def: ScriptDef) {
    this.scripts.set(id, def); this.locals.set(id, [...def.locals]);
    for (const d of def.objects) {
      if (d.isClass) this.classes.set(d.name, {script:id, name:d.name});
      const o = this.object(id, d.name);
      o.def = d;
    }
  }
  object(script: number, name: string): SciObject {
    this.loadScript(script);
    const key = `${script}:${name}`;
    let o = this.objects.get(key);
    if (!o) {
      o = {kind:'object', id:this.nextId++, script, name, def:this.scripts.get(script)?.objects.find(d=>d.name===name)!, props:{}, parent:null, initialized:false};
      this.objects.set(key,o); this.heap.set(o.id,o);
    }
    return o;
  }
  loadScript(script:number) {
    if(!this.locals.has(script)) {
      const def=this.scripts.get(script);
      if(!def)throw new Error(`Missing script ${script}`);
      this.locals.set(script,[...def.locals]);
    }
  }
  disposeScript(script:number) {
    // Original shops release their script on exit. The next reference loads
    // fresh locals and instances; current method frames can finish unwinding.
    this.locals.delete(script);
    for(const [key,object] of this.objects)if(object.script===script) {
      this.objects.delete(key);this.heap.delete(object.id);
    }
  }
  initialize(o: SciObject) {
    if (o.initialized) return;
    o.initialized = true;
    const d = o.def;
    if (!d) throw new Error(`Undefined object ${o.script}:${o.name}`);
    const p = d.parent ?? d.className;
    let parent: any = null;
    if (p && typeof p === 'string') {
      const entry = this.classes.get(p);
      if (!entry) throw new Error(`Missing class ${p} for ${o.name}`);
      parent = this.object(entry.script,entry.name);
    } else if (p?.kind === 'object') parent = p;
    else if (p?.name) parent = this.object(p.script,p.name);
    if (parent === o) parent = null;
    if (parent) { this.initialize(parent); o.props = {...parent.props}; }
    o.parent = parent;
    const props = typeof d.properties === 'function' ? (d.properties as any)(this) : d.properties;
    Object.assign(o.props, props);
    o.props.name = Object.hasOwn(props,'name') ? props.name : o.name;
    o.props.species = d.isClass ? o : parent;
    o.props.superClass = parent ?? 0;
    o.props['-info-'] = d.isClass ? 0x8000 : 0;
  }
  global(index: number) { return this.local(0,index); }
  setGlobal(index: number,v: any) { return this.setLocal(0,index,v); }
  local(script: number,index: number) { this.loadScript(script);return this.locals.get(script)?.[index] ?? 0; }
  setLocal(script: number,index: number,v: any) {
    this.loadScript(script);
    this.locals.get(script)![index] = v; return v;
  }
  selector(value: any) { return typeof value === 'number' ? this.selectors[value & 65535] ?? `selector_${value}` : value; }
  selectorId(name: string) { const n=this.selectors.indexOf(name); if(n<0)throw new Error(`Unknown selector ${name}`);return n; }
  get(o: any, p: any): any {
    if (!o || o.kind !== 'object') throw new Error(`Read ${p} from nonobject ${String(o)}`);
    this.initialize(o); return o.props[this.selector(p)] ?? 0;
  }
  set(o: any, p: any, value: any): any {
    if (!o || o.kind !== 'object') throw new Error(`Write ${p} on nonobject ${String(o)}`);
    this.initialize(o); o.props[this.selector(p)] = value; return value;
  }
  lookup(o: SciObject, selector: string): Method | undefined {
    this.initialize(o);
    return o.def.methods[selector] ?? (o.parent ? this.lookup(o.parent,selector) : undefined);
  }
  async send(o: any, selector: any, args: any[] = []): Promise<any> {
    if(this.stopped) throw new StopSignal();
    if(!o || o.kind!=='object') throw new Error(`Send ${this.selector(selector)} to ${String(o)}`);
    const s = this.selector(selector);
    this.initialize(o);
    // SCI property selectors take precedence over methods.
    if (Object.hasOwn(o.props,s)) return args.length ? this.set(o,s,args[0]) : this.get(o,s);
    const fn = this.lookup(o,s);
    if (!fn) throw new Error(`Missing method ${o.script}:${o.name}.${s}`);
    this.trace.push(`${o.script}:${o.name}.${s}`);
    try { return (await fn.call(o,this,args)) ?? 0; }
    catch(e) { if(e instanceof Error && !(e as any).sciTrace) (e as any).sciTrace = this.trace.slice(-25); throw e; }
    finally { this.trace.pop(); }
  }
  async superSend(o: any, from: {script:number;name:string}, selector:any,args:any[]) {
    const cls=this.object(from.script,from.name);this.initialize(cls);
    const s=this.selector(selector), p=cls.parent;
    if (!p) throw new Error(`No superclass of ${from.name}`);
    const fn=this.lookup(p,s);
    if(!fn) throw new Error(`Missing superclass method ${from.name}.${s}`);
    return (await fn.call(o,this,args)) ?? 0;
  }
  async call(script: number, name: string, args: any[], self?: any): Promise<any> {
    if(this.stopped) throw new StopSignal();
    const fn=this.scripts.get(script)?.procedures[name];
    if(fn) {this.loadScript(script);return (await fn.call(self,this,args)) ?? 0;}
    return kernel(this,name,args);
  }
  async kernel(name: string,args: any[]) { return kernel(this,name,args); }
  truth(value:any) { return value !== 0 && value !== false && value != null; }
  word(n:number) {return (Number(n)<<16)>>16;}
  numeric(v:any):number {
    if(typeof v==='number')return v;
    if(v===true)return 1;if(!v)return 0;
    if(v?.id)return v.id;
    // Pointer values live outside the small immediate resource/selector range.
    return 16384;
  }
  op(op:string,...a:any[]):any {
    const equal=(x:any,y:any)=>x?.kind==='ref'&&y?.kind==='ref'?x.owner===y.owner&&x.index*2+x.byte===y.index*2+y.byte:x===y;
    if(op==='==')return +(a.every(v=>equal(v,a[0])));
    if(op==='!=')return +a.slice(1).every((v,i)=>!equal(a[i],v));
    if(op==='not'||op==='!')return +!this.truth(a[0]);
    if(op==='and')return +a.every(v=>this.truth(v));
    if(op==='or')return +a.some(v=>this.truth(v));
    if((op==='+'||op==='-') && a[0]?.kind==='ref')return {...a[0],byte:a[0].byte+(op==='+'?1:-1)*Number(a[1])};
    const ns=a.map(v=>this.numeric(v));
    if(['<','<=','>','>=','u<','u<=','u>','u>='].includes(op)) {
      const cmp=op.replace('u',''); const vals=ns.map(n=>op.startsWith('u')?n&65535:this.word(n));
      return +vals.slice(1).every((v,i)=>cmp==='<'?vals[i]<v:cmp==='<='?vals[i]<=v:cmp==='>'?vals[i]>v:vals[i]>=v);
    }
    let r=ns[0]??0;
    if(op==='-'&&ns.length===1)return this.word(-r);
    if(op==='~')return this.word(~r);
    for(const n of ns.slice(1)) {
      switch(op) {
        case '+':r+=n;break;case '-':r-=n;break;case '*':r*=n;break;
        case '/':if(!n)throw new Error('SCI division by zero');r=Math.trunc(r/n);break;
        case 'mod':case '%':r%=n;break;case '&':r&=n;break;case '|':r|=n;break;
        case '^':r^=n;break;case '<<':r<<=n;break;case '>>':r=(r&65535)>>>n;break;
        default:throw new Error(`Unsupported operator ${op}`);
      }
      r=this.word(r);
    }
    return this.word(r);
  }
  ref(kind:string,owner:any,index:number=0):Ref {
    if(kind==='global'||kind==='local')this.loadScript(kind==='global'?0:owner);
    const array=kind==='global'?this.locals.get(0)!:kind==='local'?this.locals.get(owner)!:owner;
    return {kind:'ref',owner:array,index,byte:0};
  }
  readRef(ref:Ref,offset=0) {return ref.owner[ref.index+Math.floor(ref.byte/2)+offset]??0;}
  refSet(ref:Ref,value:any,offset=0) {ref.owner[ref.index+Math.floor(ref.byte/2)+offset]=value;return value;}
  text(value:any):string {
    if(typeof value==='string')return value;
    if(!value)return '';
    if(value?.kind==='ref') {
      let result='';
      for(let i=0;i<16384;i++) {
        const pos=value.byte+i, v=value.owner[value.index+Math.floor(pos/2)]??0;
        if(typeof v==='string')return v;
        const b=(v >>> ((pos&1)*8))&255;
        if(!b)break;result+=this.manifest?.codePage?.[b]??String.fromCharCode(b);
      }
      return result;
    }
    return String(value);
  }
  writeText(ref:Ref,text:string) {
    if(ref?.kind!=='ref')throw new Error('String destination is not an address');
    for(let i=0;i<=text.length;i++) {
      const pos=ref.byte+i, j=ref.index+Math.floor(pos/2), shift=(pos&1)*8;
      const code=i<text.length?(this.manifest?.codePage?.indexOf(text[i])??text.charCodeAt(i)):0;
      ref.owner[j]=((Number(ref.owner[j])||0)&~(255<<shift))|((code<0?63:code&255)<<shift);
    }
    return ref;
  }
  allocate(value:any) {const id=this.nextId++;value.id=id;this.heap.set(id,value);return value;}
  clone(o:SciObject) {
    this.initialize(o);
    const clone:SciObject={...o,id:0,props:{...o.props,'-info-':0},clone:true,disposed:false};
    return this.allocate(clone);
  }
  random(min:number,max:number) {
    this.seed=(Math.imul(this.seed,1664525)+1013904223)>>>0;
    return min+(this.seed % (max-min+1));
  }
  async wait(ticks=1) {
    if(this.stopped)throw new StopSignal();
    const start=this.ticks;
    await new Promise<void>(resolve=>this.waits.push({tick:this.ticks+Math.max(1,ticks),resolve}));
    if(this.stopped)throw new StopSignal();return this.ticks-start;
  }
  tick() {
    if(this.stopped)return;
    this.ticks++;
    const ready=this.waits.filter(w=>w.tick<=this.ticks);
    this.waits=this.waits.filter(w=>w.tick>this.ticks);
    ready.forEach(w=>w.resolve());
    this.onFrame?.();
  }
  stop() {this.stopped=true;this.waits.splice(0).forEach(w=>w.resolve());}
  input(input:any) {
    const modifier = input.type==='key' ? ({Control:4,Alt:8,Shift:3} as any)[input.key] : 0;
    if(modifier){this.modifiers=input.action==='down'?this.modifiers|modifier:this.modifiers&~modifier;return;}
    if(input.type==='pointer') {
      this.pointer.x=input.x;this.pointer.y=input.y;
      if(input.action==='move')return;
      this.pointer.down=input.action==='down';
      this.queue.push({type:input.action==='down'?1:2,message:0,modifiers:this.modifiers|(input.button===2?3:0),x:input.x,y:input.y});
    } else if(input.action==='down') {
      const keys:Record<string,number>={Enter:13,Escape:27,' ':32,Tab:9,Backspace:8,Delete:0x5300,Insert:0x5200,PageUp:0x4900,PageDown:0x5100,ArrowUp:0x4800,ArrowDown:0x5000,ArrowLeft:0x4b00,ArrowRight:0x4d00,Home:0x4700,End:0x4f00};
      const f=/^F(\d+)$/.exec(input.key);
      const message=f ? (58+Number(f[1]))*256 : keys[input.key]??(input.key.length===1?input.key.charCodeAt(0):0);
      if(message)this.queue.push({type:4,message,modifiers:this.modifiers,x:this.pointer.x,y:this.pointer.y});
    }
    if(this.queue.length>512)this.queue.splice(0,this.queue.length-512);
  }
  snapshotState() {
    const player=this.global(302);
    return {ticks:this.ticks,seed:this.seed,week:this.global(372),currentPlayer:player?.name??null,
      cash:player?.kind==='object'?this.get(player,'cash')+32767*this.get(player,'cashHi'):null,
      // Read-only original flags: the next player is selected before turn setup finishes.
      locationInputEnabled:!!this.global(474),turnTransitionActive:!!this.global(460),turnStartCount:this.global(481),
      dialog:this.global(502)?.name??null,trace:this.trace.slice(-8),warnings:[...this.warnings]};
  }
  serialize():string {
    const ids=new Map<any,number>(),nodes:any[]=[];
    const encode=(value:any):any=>{
      if(value===undefined)return null;
      if(value===null||typeof value!=='object')return value;
      if(ids.has(value))return {$:ids.get(value)};
      const id=nodes.length;ids.set(value,id);nodes.push(null);
      if(Array.isArray(value))nodes[id]={array:value.map(encode)};
      else if(value instanceof Map)nodes[id]={map:[...value].map(([k,v])=>[encode(k),encode(v)])};
      else {
        const obj:any={};
        for(const [key,v] of Object.entries(value)) {
          if(key==='def'&&value.kind==='object')obj.defKey=[value.script,value.name];
          else if(typeof v!=='function')obj[key]=encode(v);
        }
        nodes[id]={object:obj};
      }
      return {$:id};
    };
    const root=encode({locals:this.locals,objects:this.objects,heap:this.heap,nextId:this.nextId,ticks:this.ticks,seed:this.seed,
      pointer:this.pointer,cursor:this.cursor,graphics:this.graphics.saveState(),soundState:this.soundState,
      actorBits:(this as any).actorBits??[],menuValues:(this as any).menuValues??{}});
    return JSON.stringify({format:'jones-native',version:1,root,nodes});
  }
  restore(save:string) {
    const data=JSON.parse(save);
    if(data.format!=='jones-native'||data.version!==1||!Array.isArray(data.nodes))throw new Error('Incompatible native save');
    const values=data.nodes.map((n:any)=>n.array?[]:n.map?new Map():{});
    const decode=(v:any):any=>v&&typeof v==='object'&&Object.hasOwn(v,'$')?values[v.$]:v;
    data.nodes.forEach((n:any,i:number)=>{
      const target=values[i];
      if(n.array)n.array.forEach((v:any)=>target.push(decode(v)));
      else if(n.map)n.map.forEach(([k,v]:any[])=>target.set(decode(k),decode(v)));
      else for(const [k,v] of Object.entries(n.object)) {
        if(k==='defKey') {const [script,name]=v as any[];target.def=this.scripts.get(script)?.objects.find(o=>o.name===name);if(!target.def)throw new Error('Unknown object in save');}
        else target[k]=decode(v);
      }
    });
    const root=decode(data.root);
    for(const key of ['locals','objects','heap','nextId','ticks','seed','pointer','cursor','soundState','actorBits','menuValues'])(this as any)[key]=root[key];
    this.graphics.loadState(root.graphics);this.queue=[];this.trace=[];this.restarting=false;
  }
}
