// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/Sound.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 2d778d588d7eb000b27227b0ff2c3e26268c7271d07dc5ff0dd53042a496116e
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(989, {
    name: "Sound",
    uses: [0, 999],
    locals: [],
    objects: [
      {
        name: "Sound",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"nodePtr": 0, "handle": 0, "number": 0, "vol": 127, "priority": 0, "loop": 1, "signal": 0, "prevSignal": 0, "dataInc": 0, "min": 0, "sec": 0, "frame": 0, "client": 0, "owner": 0, "soundOn": 1, "nextNumber": 0, "nextLoop": -1},
        methods: {
          // SCI Sound.sc: Sound.new
          "new": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = argc;
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              _v1 = _v3;
            } else {
              const _v4: any = 0;
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            const _v5: any = await rt.superSend(this, {"script": 989, "name": "Sound"}, "new", []);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "owner", [_v1]);
            acc = _v6;
            const _v7: any = await rt.send(_v5, "yourself", []);
            acc = _v7;
            return acc;
          },
          // SCI Sound.sc: Sound.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.set(this, "signal", _v1);
            acc = _v2;
            const _v3: any = rt.set(this, "prevSignal", _v2);
            acc = _v3;
            const _v4: any = this;
            acc = _v4;
            const _v5: any = rt.global(8);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "add", [_v4]);
            acc = _v6;
            const _v7: any = 5;
            acc = _v7;
            const _v8: any = this;
            acc = _v8;
            const _v9: any = await rt.call(989, "DoSound", [_v7, _v8], this);
            acc = _v9;
            return acc;
          },
          // SCI Sound.sc: Sound.play
          "play": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = argc;
            acc = _v2;
            const _v3: any = 3;
            acc = _v3;
            const _v4: any = rt.op(">=", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[2] ?? 0);
              acc = _v5;
              _v1 = _v5;
            } else {
              const _v6: any = 0;
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            const _v7: any = rt.set(this, "nextNumber", _v1);
            acc = _v7;
            let _v8: any = acc;
            const _v9: any = argc;
            acc = _v9;
            const _v10: any = 4;
            acc = _v10;
            const _v11: any = rt.op(">=", ...[_v9, _v10]);
            acc = _v11;
            _v8 = _v11;
            if (rt.truth(_v11)) {
              const _v12: any = (args[3] ?? 0);
              acc = _v12;
              _v8 = _v12;
            } else {
              const _v13: any = -1;
              acc = _v13;
              _v8 = _v13;
            }
            acc = _v8;
            const _v14: any = rt.set(this, "nextLoop", _v8);
            acc = _v14;
            let _v15: any = acc;
            let _v16: any = 1;
            if (rt.truth(_v16)) {
              const _v17: any = argc;
              acc = _v17;
              const _v18: any = 1;
              acc = _v18;
              const _v19: any = rt.op(">=", ...[_v17, _v18]);
              acc = _v19;
              _v16 = _v19;
            }
            if (rt.truth(_v16)) {
              const _v20: any = (args[0] ?? 0);
              acc = _v20;
              const _v21: any = 0;
              acc = _v21;
              const _v22: any = rt.op(">=", ...[_v20, _v21]);
              acc = _v22;
              _v16 = _v22;
            }
            acc = _v16;
            _v15 = _v16;
            if (rt.truth(_v16)) {
              const _v23: any = (args[0] ?? 0);
              acc = _v23;
              const _v24: any = rt.set(this, "number", _v23);
              acc = _v24;
              _v15 = _v24;
            }
            acc = _v15;
            let _v25: any = acc;
            const _v26: any = rt.get(this, "loop");
            acc = _v26;
            const _v27: any = rt.op("not", ...[_v26]);
            acc = _v27;
            _v25 = _v27;
            if (rt.truth(_v27)) {
              const _v28: any = 1;
              acc = _v28;
              const _v29: any = rt.set(this, "loop", _v28);
              acc = _v29;
              _v25 = _v29;
            }
            acc = _v25;
            let _v30: any = acc;
            const _v31: any = argc;
            acc = _v31;
            const _v32: any = 2;
            acc = _v32;
            const _v33: any = rt.op(">=", ...[_v31, _v32]);
            acc = _v33;
            _v30 = _v33;
            if (rt.truth(_v33)) {
              const _v34: any = (args[1] ?? 0);
              acc = _v34;
              _v30 = _v34;
            } else {
              const _v35: any = 0;
              acc = _v35;
              _v30 = _v35;
            }
            acc = _v30;
            const _v36: any = rt.set(this, "client", _v30);
            acc = _v36;
            const _v37: any = this;
            acc = _v37;
            const _v38: any = await rt.send(_v37, "init", []);
            acc = _v38;
            let _v39: any = acc;
            const _v40: any = rt.get(this, "soundOn");
            acc = _v40;
            _v39 = _v40;
            if (rt.truth(_v40)) {
              const _v41: any = 7;
              acc = _v41;
              const _v42: any = this;
              acc = _v42;
              const _v43: any = 0;
              acc = _v43;
              const _v44: any = await rt.call(989, "DoSound", [_v41, _v42, _v43], this);
              acc = _v44;
              _v39 = _v44;
            }
            acc = _v39;
            return acc;
          },
          // SCI Sound.sc: Sound.playBed
          "playBed": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = argc;
            acc = _v2;
            const _v3: any = 3;
            acc = _v3;
            const _v4: any = rt.op(">=", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[2] ?? 0);
              acc = _v5;
              _v1 = _v5;
            } else {
              const _v6: any = 0;
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            const _v7: any = rt.set(this, "nextNumber", _v1);
            acc = _v7;
            let _v8: any = acc;
            const _v9: any = argc;
            acc = _v9;
            const _v10: any = 4;
            acc = _v10;
            const _v11: any = rt.op(">=", ...[_v9, _v10]);
            acc = _v11;
            _v8 = _v11;
            if (rt.truth(_v11)) {
              const _v12: any = (args[3] ?? 0);
              acc = _v12;
              _v8 = _v12;
            } else {
              const _v13: any = -1;
              acc = _v13;
              _v8 = _v13;
            }
            acc = _v8;
            const _v14: any = rt.set(this, "nextLoop", _v8);
            acc = _v14;
            let _v15: any = acc;
            let _v16: any = 1;
            if (rt.truth(_v16)) {
              const _v17: any = argc;
              acc = _v17;
              const _v18: any = 1;
              acc = _v18;
              const _v19: any = rt.op(">=", ...[_v17, _v18]);
              acc = _v19;
              _v16 = _v19;
            }
            if (rt.truth(_v16)) {
              const _v20: any = (args[0] ?? 0);
              acc = _v20;
              const _v21: any = 0;
              acc = _v21;
              const _v22: any = rt.op(">=", ...[_v20, _v21]);
              acc = _v22;
              _v16 = _v22;
            }
            acc = _v16;
            _v15 = _v16;
            if (rt.truth(_v16)) {
              const _v23: any = (args[0] ?? 0);
              acc = _v23;
              const _v24: any = rt.set(this, "number", _v23);
              acc = _v24;
              _v15 = _v24;
            }
            acc = _v15;
            let _v25: any = acc;
            const _v26: any = rt.get(this, "loop");
            acc = _v26;
            const _v27: any = rt.op("not", ...[_v26]);
            acc = _v27;
            _v25 = _v27;
            if (rt.truth(_v27)) {
              const _v28: any = 1;
              acc = _v28;
              const _v29: any = rt.set(this, "loop", _v28);
              acc = _v29;
              _v25 = _v29;
            }
            acc = _v25;
            let _v30: any = acc;
            const _v31: any = argc;
            acc = _v31;
            const _v32: any = 2;
            acc = _v32;
            const _v33: any = rt.op(">=", ...[_v31, _v32]);
            acc = _v33;
            _v30 = _v33;
            if (rt.truth(_v33)) {
              const _v34: any = (args[1] ?? 0);
              acc = _v34;
              _v30 = _v34;
            } else {
              const _v35: any = 0;
              acc = _v35;
              _v30 = _v35;
            }
            acc = _v30;
            const _v36: any = rt.set(this, "client", _v30);
            acc = _v36;
            const _v37: any = this;
            acc = _v37;
            const _v38: any = await rt.send(_v37, "init", []);
            acc = _v38;
            let _v39: any = acc;
            const _v40: any = rt.get(this, "soundOn");
            acc = _v40;
            _v39 = _v40;
            if (rt.truth(_v40)) {
              const _v41: any = 7;
              acc = _v41;
              const _v42: any = this;
              acc = _v42;
              const _v43: any = 1;
              acc = _v43;
              const _v44: any = await rt.call(989, "DoSound", [_v41, _v42, _v43], this);
              acc = _v44;
              _v39 = _v44;
            }
            acc = _v39;
            return acc;
          },
          // SCI Sound.sc: Sound.stop
          "stop": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.set(this, "nextNumber", _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = argc;
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = (args[0] ?? 0);
              acc = _v6;
              const _v7: any = rt.op("not", ...[_v6]);
              acc = _v7;
              _v4 = _v7;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v8: any = 0;
              acc = _v8;
              const _v9: any = rt.set(this, "client", _v8);
              acc = _v9;
              _v3 = _v9;
            }
            acc = _v3;
            let _v10: any = acc;
            const _v11: any = rt.get(this, "nodePtr");
            acc = _v11;
            _v10 = _v11;
            if (rt.truth(_v11)) {
              const _v12: any = 8;
              acc = _v12;
              const _v13: any = this;
              acc = _v13;
              const _v14: any = await rt.call(989, "DoSound", [_v12, _v13], this);
              acc = _v14;
              _v10 = _v14;
            }
            acc = _v10;
            return acc;
          },
          // SCI Sound.sc: Sound.pause
          "pause": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = argc;
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = 1;
              acc = _v4;
              const _v5: any = (args[0] = _v4);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            const _v6: any = 9;
            acc = _v6;
            let _v7: any = acc;
            const _v8: any = rt.object(989, "Sound");
            acc = _v8;
            const _v9: any = this;
            acc = _v9;
            const _v10: any = await rt.send(_v9, "isMemberOf", [_v8]);
            acc = _v10;
            _v7 = _v10;
            if (rt.truth(_v10)) {
              const _v11: any = this;
              acc = _v11;
              _v7 = _v11;
            } else {
              const _v12: any = 0;
              acc = _v12;
              _v7 = _v12;
            }
            acc = _v7;
            const _v13: any = (args[0] ?? 0);
            acc = _v13;
            const _v14: any = await rt.call(989, "DoSound", [_v6, _v7, _v13], this);
            acc = _v14;
            return acc;
          },
          // SCI Sound.sc: Sound.fade
          "fade": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.set(this, "nextNumber", _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = argc;
              acc = _v5;
              const _v6: any = 4;
              acc = _v6;
              const _v7: any = rt.op(">", ...[_v5, _v6]);
              acc = _v7;
              _v4 = _v7;
            }
            if (rt.truth(_v4)) {
              const _v8: any = (args[4] ?? 0);
              acc = _v8;
              _v4 = _v8;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v9: any = 0;
              acc = _v9;
              const _v10: any = rt.set(this, "client", _v9);
              acc = _v10;
              _v3 = _v10;
            }
            acc = _v3;
            let _v11: any = acc;
            const _v12: any = argc;
            acc = _v12;
            _v11 = _v12;
            if (rt.truth(_v12)) {
              const _v13: any = 10;
              acc = _v13;
              const _v14: any = this;
              acc = _v14;
              const _v15: any = (args[0] ?? 0);
              acc = _v15;
              const _v16: any = (args[1] ?? 0);
              acc = _v16;
              const _v17: any = (args[2] ?? 0);
              acc = _v17;
              const _v18: any = (args[3] ?? 0);
              acc = _v18;
              const _v19: any = await rt.call(989, "DoSound", [_v13, _v14, _v15, _v16, _v17, _v18], this);
              acc = _v19;
              _v11 = _v19;
            } else {
              const _v20: any = 10;
              acc = _v20;
              const _v21: any = this;
              acc = _v21;
              const _v22: any = 15;
              acc = _v22;
              const _v23: any = 20;
              acc = _v23;
              const _v24: any = 10;
              acc = _v24;
              const _v25: any = 1;
              acc = _v25;
              const _v26: any = await rt.call(989, "DoSound", [_v20, _v21, _v22, _v23, _v24, _v25], this);
              acc = _v26;
              _v11 = _v26;
            }
            acc = _v11;
            return acc;
          },
          // SCI Sound.sc: Sound.send
          "send": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = 1;
            acc = _v2;
            let _v3: any = _v2;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              _v4 = rt.op("<=", _v3, _v5);
              _v3 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = 15;
              acc = _v6;
              _v4 = rt.op("<=", _v3, _v6);
              _v3 = _v6;
            }
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v7: any = 12;
              acc = _v7;
              const _v8: any = this;
              acc = _v8;
              const _v9: any = (args[0] ?? 0);
              acc = _v9;
              const _v10: any = (args[1] ?? 0);
              acc = _v10;
              const _v11: any = (args[2] ?? 0);
              acc = _v11;
              const _v12: any = await rt.call(989, "DoSound", [_v7, _v8, _v9, _v10, _v11], this);
              acc = _v12;
              _v1 = _v12;
            }
            acc = _v1;
            return acc;
          },
          // SCI Sound.sc: Sound.changeState
          "changeState": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 4;
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.call(989, "DoSound", [_v1, _v2], this);
            acc = _v3;
            return acc;
          },
          // SCI Sound.sc: Sound.check
          "check": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 11;
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.call(989, "DoSound", [_v1, _v2], this);
            acc = _v3;
            let _v4: any = acc;
            const _v5: any = rt.get(this, "signal");
            acc = _v5;
            _v4 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = rt.get(this, "signal");
              acc = _v6;
              const _v7: any = rt.set(this, "prevSignal", _v6);
              acc = _v7;
              _v4 = _v7;
              const _v8: any = 0;
              acc = _v8;
              const _v9: any = rt.set(this, "signal", _v8);
              acc = _v9;
              _v4 = _v9;
              let _v10: any = acc;
              const _v11: any = rt.get(this, "client");
              acc = _v11;
              const _v12: any = await rt.call(989, "IsObject", [_v11], this);
              acc = _v12;
              _v10 = _v12;
              if (rt.truth(_v12)) {
                const _v13: any = this;
                acc = _v13;
                const _v14: any = rt.get(this, "nextNumber");
                acc = _v14;
                const _v15: any = rt.get(this, "nextLoop");
                acc = _v15;
                const _v16: any = rt.get(this, "client");
                acc = _v16;
                const _v17: any = await rt.send(_v16, "cue", [_v13, _v14, _v15]);
                acc = _v17;
                _v10 = _v17;
              }
              acc = _v10;
              _v4 = _v10;
            }
            acc = _v4;
            return acc;
          },
          // SCI Sound.sc: Sound.clean
          "clean": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 0;
            if (!rt.truth(_v2)) {
              const _v3: any = rt.get(this, "owner");
              acc = _v3;
              const _v4: any = rt.op("not", ...[_v3]);
              acc = _v4;
              _v2 = _v4;
            }
            if (!rt.truth(_v2)) {
              const _v5: any = rt.get(this, "owner");
              acc = _v5;
              const _v6: any = (args[0] ?? 0);
              acc = _v6;
              const _v7: any = rt.op("==", ...[_v5, _v6]);
              acc = _v7;
              _v2 = _v7;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v8: any = this;
              acc = _v8;
              const _v9: any = await rt.send(_v8, "dispose", []);
              acc = _v9;
              _v1 = _v9;
            }
            acc = _v1;
            return acc;
          },
          // SCI Sound.sc: Sound.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = argc;
              acc = _v3;
              _v2 = _v3;
            }
            if (rt.truth(_v2)) {
              const _v4: any = (args[0] ?? 0);
              acc = _v4;
              const _v5: any = rt.op("not", ...[_v4]);
              acc = _v5;
              _v2 = _v5;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v6: any = 0;
              acc = _v6;
              const _v7: any = rt.set(this, "client", _v6);
              acc = _v7;
              _v1 = _v7;
            }
            acc = _v1;
            const _v8: any = this;
            acc = _v8;
            const _v9: any = rt.global(8);
            acc = _v9;
            const _v10: any = await rt.send(_v9, "delete", [_v8]);
            acc = _v10;
            let _v11: any = acc;
            const _v12: any = rt.get(this, "nodePtr");
            acc = _v12;
            _v11 = _v12;
            if (rt.truth(_v12)) {
              const _v13: any = 6;
              acc = _v13;
              const _v14: any = this;
              acc = _v14;
              const _v15: any = await rt.call(989, "DoSound", [_v13, _v14], this);
              acc = _v15;
              _v11 = _v15;
              const _v16: any = 0;
              acc = _v16;
              const _v17: any = rt.set(this, "nodePtr", _v16);
              acc = _v17;
              _v11 = _v17;
            }
            acc = _v11;
            const _v18: any = await rt.superSend(this, {"script": 989, "name": "Sound"}, "dispose", []);
            acc = _v18;
            return acc;
          },
          // SCI Sound.sc: Sound.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Sound.sc: Sound.toggle
          "toggle": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {},
  });
}
