// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/Actor.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 4799b4e95f3ed867f5de4332f604a9004e4fe834d4101a89e055d978eee93b9b
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(998, {
    name: "Actor",
    uses: [0, 992, 999],
    locals: [],
    objects: [
      {
        name: "Feature",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"y": 0, "x": 0, "z": 0, "heading": 0},
        methods: {
          // SCI Actor.sc: Feature.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 998, "name": "Feature"}, "dispose", []);
            acc = _v1;
            return acc;
          },
          // SCI Actor.sc: Feature.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = await rt.send(_v1, "claimed", []);
            acc = _v2;
            return acc;
          },
        },
      },
      {
        name: "View",
        className: "Feature",
        parent: {"script": 998, "name": "Feature"},
        isClass: true,
        properties: {"yStep": 2, "view": 0, "loop": 0, "cel": 0, "priority": 0, "underBits": 0, "signal": 257, "nsTop": 0, "nsLeft": 0, "nsBottom": 0, "nsRight": 0, "lsTop": 0, "lsLeft": 0, "lsBottom": 0, "lsRight": 0, "brTop": 0, "brLeft": 0, "brBottom": 0, "brRight": 0},
        methods: {
          // SCI Actor.sc: View.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 32767;
            acc = _v1;
            const _v2: any = rt.set(this, "signal", rt.op("&", rt.get(this, "signal"), _v1));
            acc = _v2;
            const _v3: any = 16384;
            acc = _v3;
            const _v4: any = rt.set(this, "signal", rt.op("|", rt.get(this, "signal"), _v3));
            acc = _v4;
            let _v5: any = acc;
            const _v6: any = this;
            acc = _v6;
            const _v7: any = rt.global(5);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "contains", [_v6]);
            acc = _v8;
            const _v9: any = rt.op("not", ...[_v8]);
            acc = _v9;
            _v5 = _v9;
            if (rt.truth(_v9)) {
              const _v10: any = 0;
              acc = _v10;
              const _v11: any = rt.set(this, "lsRight", _v10);
              acc = _v11;
              const _v12: any = rt.set(this, "lsBottom", _v11);
              acc = _v12;
              const _v13: any = rt.set(this, "lsLeft", _v12);
              acc = _v13;
              const _v14: any = rt.set(this, "lsTop", _v13);
              acc = _v14;
              _v5 = _v14;
              const _v15: any = 65399;
              acc = _v15;
              const _v16: any = rt.set(this, "signal", rt.op("&", rt.get(this, "signal"), _v15));
              acc = _v16;
              _v5 = _v16;
            }
            acc = _v5;
            const _v17: any = this;
            acc = _v17;
            const _v18: any = rt.global(5);
            acc = _v18;
            const _v19: any = await rt.send(_v18, "add", [_v17]);
            acc = _v19;
            return acc;
          },
          // SCI Actor.sc: View.posn
          "posn": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = argc;
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = rt.op(">=", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = rt.set(this, "x", _v5);
              acc = _v6;
              _v1 = _v6;
              let _v7: any = acc;
              const _v8: any = argc;
              acc = _v8;
              const _v9: any = 2;
              acc = _v9;
              const _v10: any = rt.op(">=", ...[_v8, _v9]);
              acc = _v10;
              _v7 = _v10;
              if (rt.truth(_v10)) {
                const _v11: any = (args[1] ?? 0);
                acc = _v11;
                const _v12: any = rt.set(this, "y", _v11);
                acc = _v12;
                _v7 = _v12;
                let _v13: any = acc;
                const _v14: any = argc;
                acc = _v14;
                const _v15: any = 3;
                acc = _v15;
                const _v16: any = rt.op(">=", ...[_v14, _v15]);
                acc = _v16;
                _v13 = _v16;
                if (rt.truth(_v16)) {
                  const _v17: any = (args[2] ?? 0);
                  acc = _v17;
                  const _v18: any = rt.set(this, "z", _v17);
                  acc = _v18;
                  _v13 = _v18;
                }
                acc = _v13;
                _v7 = _v13;
              }
              acc = _v7;
              _v1 = _v7;
            }
            acc = _v1;
            const _v19: any = this;
            acc = _v19;
            const _v20: any = await rt.send(_v19, "forceUpd", []);
            acc = _v20;
            return acc;
          },
          // SCI Actor.sc: View.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "startUpd", []);
            acc = _v2;
            const _v3: any = await rt.send(_v1, "hide", []);
            acc = _v3;
            const _v4: any = 32768;
            acc = _v4;
            const _v5: any = rt.set(this, "signal", rt.op("|", rt.get(this, "signal"), _v4));
            acc = _v5;
            return acc;
          },
          // SCI Actor.sc: View.hide
          "hide": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 8;
            acc = _v1;
            const _v2: any = rt.set(this, "signal", rt.op("|", rt.get(this, "signal"), _v1));
            acc = _v2;
            return acc;
          },
          // SCI Actor.sc: View.show
          "show": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 65527;
            acc = _v1;
            const _v2: any = rt.set(this, "signal", rt.op("&", rt.get(this, "signal"), _v1));
            acc = _v2;
            return acc;
          },
          // SCI Actor.sc: View.delete
          "delete": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "signal");
            acc = _v2;
            const _v3: any = 32768;
            acc = _v3;
            const _v4: any = rt.op("&", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = 32767;
              acc = _v5;
              const _v6: any = rt.set(this, "signal", rt.op("&", rt.get(this, "signal"), _v5));
              acc = _v6;
              _v1 = _v6;
              const _v7: any = this;
              acc = _v7;
              const _v8: any = rt.global(5);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "delete", [_v7]);
              acc = _v9;
              _v1 = _v9;
              let _v10: any = acc;
              const _v11: any = rt.get(this, "underBits");
              acc = _v11;
              _v10 = _v11;
              if (rt.truth(_v11)) {
                const _v12: any = 133;
                acc = _v12;
                const _v13: any = rt.get(this, "underBits");
                acc = _v13;
                const _v14: any = await rt.call(998, "UnLoad", [_v12, _v13], this);
                acc = _v14;
                _v10 = _v14;
                const _v15: any = 0;
                acc = _v15;
                const _v16: any = rt.set(this, "underBits", _v15);
                acc = _v16;
                _v10 = _v16;
              }
              acc = _v10;
              _v1 = _v10;
              const _v17: any = await rt.superSend(this, {"script": 998, "name": "View"}, "dispose", []);
              acc = _v17;
              _v1 = _v17;
            }
            acc = _v1;
            return acc;
          },
          // SCI Actor.sc: View.stopUpd
          "stopUpd": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 1;
            acc = _v1;
            const _v2: any = rt.set(this, "signal", rt.op("|", rt.get(this, "signal"), _v1));
            acc = _v2;
            const _v3: any = 65533;
            acc = _v3;
            const _v4: any = rt.set(this, "signal", rt.op("&", rt.get(this, "signal"), _v3));
            acc = _v4;
            return acc;
          },
          // SCI Actor.sc: View.forceUpd
          "forceUpd": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 64;
            acc = _v1;
            const _v2: any = rt.set(this, "signal", rt.op("|", rt.get(this, "signal"), _v1));
            acc = _v2;
            return acc;
          },
          // SCI Actor.sc: View.startUpd
          "startUpd": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 2;
            acc = _v1;
            const _v2: any = rt.set(this, "signal", rt.op("|", rt.get(this, "signal"), _v1));
            acc = _v2;
            const _v3: any = 65534;
            acc = _v3;
            const _v4: any = rt.set(this, "signal", rt.op("&", rt.get(this, "signal"), _v3));
            acc = _v4;
            return acc;
          },
          // SCI Actor.sc: View.setPri
          "setPri": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            _branch2: {
              const _v3: any = argc;
              acc = _v3;
              const _v4: any = 0;
              acc = _v4;
              const _v5: any = rt.op("==", ...[_v3, _v4]);
              acc = _v5;
              _v1 = _v5;
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v6: any = 16;
                acc = _v6;
                const _v7: any = rt.set(this, "signal", rt.op("|", rt.get(this, "signal"), _v6));
                acc = _v7;
                _v1 = _v7;
                break _branch2;
              }
              const _v8: any = (args[0] ?? 0);
              acc = _v8;
              const _v9: any = -1;
              acc = _v9;
              const _v10: any = rt.op("==", ...[_v8, _v9]);
              acc = _v10;
              _v1 = _v10;
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v11: any = 65519;
                acc = _v11;
                const _v12: any = rt.set(this, "signal", rt.op("&", rt.get(this, "signal"), _v11));
                acc = _v12;
                _v1 = _v12;
                break _branch2;
              }
              const _v13: any = (args[0] ?? 0);
              acc = _v13;
              const _v14: any = rt.set(this, "priority", _v13);
              acc = _v14;
              _v1 = _v14;
              const _v15: any = 16;
              acc = _v15;
              const _v16: any = rt.set(this, "signal", rt.op("|", rt.get(this, "signal"), _v15));
              acc = _v16;
              _v1 = _v16;
              break _branch2;
            }
            acc = _v1;
            const _v17: any = this;
            acc = _v17;
            const _v18: any = await rt.send(_v17, "forceUpd", []);
            acc = _v18;
            return acc;
          },
          // SCI Actor.sc: View.setLoop
          "setLoop": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            _branch2: {
              const _v3: any = argc;
              acc = _v3;
              const _v4: any = 0;
              acc = _v4;
              const _v5: any = rt.op("==", ...[_v3, _v4]);
              acc = _v5;
              _v1 = _v5;
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v6: any = 2048;
                acc = _v6;
                const _v7: any = rt.set(this, "signal", rt.op("|", rt.get(this, "signal"), _v6));
                acc = _v7;
                _v1 = _v7;
                break _branch2;
              }
              const _v8: any = (args[0] ?? 0);
              acc = _v8;
              const _v9: any = -1;
              acc = _v9;
              const _v10: any = rt.op("==", ...[_v8, _v9]);
              acc = _v10;
              _v1 = _v10;
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v11: any = 63487;
                acc = _v11;
                const _v12: any = rt.set(this, "signal", rt.op("&", rt.get(this, "signal"), _v11));
                acc = _v12;
                _v1 = _v12;
                break _branch2;
              }
              const _v13: any = (args[0] ?? 0);
              acc = _v13;
              const _v14: any = rt.set(this, "loop", _v13);
              acc = _v14;
              _v1 = _v14;
              const _v15: any = 2048;
              acc = _v15;
              const _v16: any = rt.set(this, "signal", rt.op("|", rt.get(this, "signal"), _v15));
              acc = _v16;
              _v1 = _v16;
              break _branch2;
            }
            acc = _v1;
            const _v17: any = this;
            acc = _v17;
            const _v18: any = await rt.send(_v17, "forceUpd", []);
            acc = _v18;
            return acc;
          },
          // SCI Actor.sc: View.setCel
          "setCel": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            _branch2: {
              const _v3: any = argc;
              acc = _v3;
              const _v4: any = 0;
              acc = _v4;
              const _v5: any = rt.op("==", ...[_v3, _v4]);
              acc = _v5;
              _v1 = _v5;
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v6: any = 4096;
                acc = _v6;
                const _v7: any = rt.set(this, "signal", rt.op("|", rt.get(this, "signal"), _v6));
                acc = _v7;
                _v1 = _v7;
                break _branch2;
              }
              const _v8: any = (args[0] ?? 0);
              acc = _v8;
              const _v9: any = -1;
              acc = _v9;
              const _v10: any = rt.op("==", ...[_v8, _v9]);
              acc = _v10;
              _v1 = _v10;
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v11: any = 61439;
                acc = _v11;
                const _v12: any = rt.set(this, "signal", rt.op("&", rt.get(this, "signal"), _v11));
                acc = _v12;
                _v1 = _v12;
                break _branch2;
              }
              const _v13: any = 4096;
              acc = _v13;
              const _v14: any = rt.set(this, "signal", rt.op("|", rt.get(this, "signal"), _v13));
              acc = _v14;
              _v1 = _v14;
              let _v15: any = acc;
              const _v16: any = (args[0] ?? 0);
              acc = _v16;
              const _v17: any = this;
              acc = _v17;
              const _v18: any = await rt.send(_v17, "lastCel", []);
              acc = _v18;
              const _v19: any = rt.op(">=", ...[_v16, _v18]);
              acc = _v19;
              _v15 = _v19;
              if (rt.truth(_v19)) {
                const _v20: any = this;
                acc = _v20;
                const _v21: any = await rt.send(_v20, "lastCel", []);
                acc = _v21;
                _v15 = _v21;
              } else {
                const _v22: any = (args[0] ?? 0);
                acc = _v22;
                _v15 = _v22;
              }
              acc = _v15;
              const _v23: any = rt.set(this, "cel", _v15);
              acc = _v23;
              _v1 = _v23;
              break _branch2;
            }
            acc = _v1;
            const _v24: any = this;
            acc = _v24;
            const _v25: any = await rt.send(_v24, "forceUpd", []);
            acc = _v25;
            return acc;
          },
          // SCI Actor.sc: View.ignoreActors
          "ignoreActors": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Actor.sc: View.addToPic
          "addToPic": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = rt.global(5);
            acc = _v3;
            const _v4: any = await rt.send(_v3, "contains", [_v2]);
            acc = _v4;
            const _v5: any = rt.op("not", ...[_v4]);
            acc = _v5;
            _v1 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = this;
              acc = _v6;
              const _v7: any = await rt.send(_v6, "init", []);
              acc = _v7;
              _v1 = _v7;
            }
            acc = _v1;
            const _v8: any = rt.get(this, "signal");
            acc = _v8;
            const _v9: any = 32801;
            acc = _v9;
            const _v10: any = rt.op("|", ...[_v8, _v9]);
            acc = _v10;
            const _v11: any = this;
            acc = _v11;
            const _v12: any = await rt.send(_v11, "signal", [_v10]);
            acc = _v12;
            return acc;
          },
          // SCI Actor.sc: View.lastCel
          "lastCel": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.call(998, "NumCels", [_v1], this);
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = rt.op("-", ...[_v2, _v3]);
            acc = _v4;
            return _v4;
            return acc;
          },
          // SCI Actor.sc: View.showSelf
          "showSelf": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Actor.sc: View.isExtra
          "isExtra": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 1;
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI Actor.sc: View.motionCue
          "motionCue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
        },
      },
      {
        name: "Prop",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: true,
        properties: {"signal": 0, "cycleSpeed": 0, "script": 0, "cycler": 0, "timer": 0, "ticksToDo": 0},
        methods: {
          // SCI Actor.sc: Prop.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "signal");
            acc = _v2;
            const _v3: any = 32768;
            acc = _v3;
            const _v4: any = rt.op("&", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              return acc;
              _v1 = acc;
            }
            acc = _v1;
            let _v5: any = acc;
            const _v6: any = rt.get(this, "script");
            acc = _v6;
            _v5 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = rt.get(this, "script");
              acc = _v7;
              const _v8: any = await rt.send(_v7, "doit", []);
              acc = _v8;
              _v5 = _v8;
            }
            acc = _v5;
            let _v9: any = acc;
            let _v10: any = 1;
            if (rt.truth(_v10)) {
              const _v11: any = rt.get(this, "signal");
              acc = _v11;
              const _v12: any = 4;
              acc = _v12;
              const _v13: any = rt.op("&", ...[_v11, _v12]);
              acc = _v13;
              _v10 = _v13;
            }
            if (rt.truth(_v10)) {
              const _v14: any = rt.get(this, "signal");
              acc = _v14;
              const _v15: any = 2;
              acc = _v15;
              const _v16: any = rt.op("&", ...[_v14, _v15]);
              acc = _v16;
              const _v17: any = rt.op("not", ...[_v16]);
              acc = _v17;
              _v10 = _v17;
            }
            acc = _v10;
            _v9 = _v10;
            if (rt.truth(_v10)) {
              return acc;
              _v9 = acc;
            }
            acc = _v9;
            let _v18: any = acc;
            const _v19: any = rt.get(this, "cycler");
            acc = _v19;
            _v18 = _v19;
            if (rt.truth(_v19)) {
              const _v20: any = rt.get(this, "cycler");
              acc = _v20;
              const _v21: any = await rt.send(_v20, "doit", []);
              acc = _v21;
              _v18 = _v21;
            }
            acc = _v18;
            return acc;
          },
          // SCI Actor.sc: Prop.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              const _v4: any = rt.get(this, "script");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "handleEvent", [_v3]);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            const _v6: any = (args[0] ?? 0);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "claimed", []);
            acc = _v7;
            return acc;
          },
          // SCI Actor.sc: Prop.setCycle
          "setCycle": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "cycler");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "cycler");
              acc = _v3;
              const _v4: any = await rt.send(_v3, "dispose", []);
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            let _v5: any = acc;
            const _v6: any = (args[0] ?? 0);
            acc = _v6;
            _v5 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = 61439;
              acc = _v7;
              const _v8: any = rt.set(this, "signal", rt.op("&", rt.get(this, "signal"), _v7));
              acc = _v8;
              _v5 = _v8;
              const _v9: any = this;
              acc = _v9;
              const _v10: any = await rt.send(_v9, "startUpd", []);
              acc = _v10;
              _v5 = _v10;
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = await rt.send(_v11, "new", []);
              acc = _v12;
              const _v13: any = rt.set(this, "cycler", _v12);
              acc = _v13;
              _v5 = _v13;
              const _v14: any = this;
              acc = _v14;
              const _v15: any = args.slice(1, argc);
              acc = _v15;
              const _v16: any = rt.get(this, "cycler");
              acc = _v16;
              const _v17: any = await rt.send(_v16, "init", [_v14, ..._v15]);
              acc = _v17;
              _v5 = _v17;
            } else {
              const _v18: any = 0;
              acc = _v18;
              const _v19: any = rt.set(this, "cycler", _v18);
              acc = _v19;
              _v5 = _v19;
            }
            acc = _v5;
            return acc;
          },
          // SCI Actor.sc: Prop.delete
          "delete": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "signal");
            acc = _v2;
            const _v3: any = 32768;
            acc = _v3;
            const _v4: any = rt.op("&", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = 0;
              acc = _v5;
              const _v6: any = 0;
              acc = _v6;
              const _v7: any = this;
              acc = _v7;
              const _v8: any = await rt.send(_v7, "setScript", [_v5]);
              acc = _v8;
              const _v9: any = await rt.send(_v7, "setCycle", [_v6]);
              acc = _v9;
              _v1 = _v9;
              let _v10: any = acc;
              const _v11: any = rt.get(this, "timer");
              acc = _v11;
              _v10 = _v11;
              if (rt.truth(_v11)) {
                const _v12: any = rt.get(this, "timer");
                acc = _v12;
                const _v13: any = await rt.send(_v12, "dispose", []);
                acc = _v13;
                _v10 = _v13;
              }
              acc = _v10;
              _v1 = _v10;
              const _v14: any = await rt.superSend(this, {"script": 998, "name": "Prop"}, "delete", []);
              acc = _v14;
              _v1 = _v14;
            }
            acc = _v1;
            return acc;
          },
          // SCI Actor.sc: Prop.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "script");
              acc = _v3;
              const _v4: any = await rt.send(_v3, "cue", []);
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            return acc;
          },
          // SCI Actor.sc: Prop.setScript
          "setScript": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            const _v3: any = await rt.call(998, "IsObject", [_v2], this);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = rt.get(this, "script");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "dispose", []);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            let _v6: any = acc;
            const _v7: any = (args[0] ?? 0);
            acc = _v7;
            const _v8: any = rt.set(this, "script", _v7);
            acc = _v8;
            _v6 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = this;
              acc = _v9;
              const _v10: any = args.slice(1, argc);
              acc = _v10;
              const _v11: any = rt.get(this, "script");
              acc = _v11;
              const _v12: any = await rt.send(_v11, "init", [_v9, ..._v10]);
              acc = _v12;
              _v6 = _v12;
            }
            acc = _v6;
            return acc;
          },
          // SCI Actor.sc: Prop.motionCue
          "motionCue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "cycler");
              acc = _v3;
              _v2 = _v3;
            }
            if (rt.truth(_v2)) {
              const _v4: any = rt.get(this, "cycler");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "completed", []);
              acc = _v5;
              _v2 = _v5;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v6: any = rt.get(this, "cycler");
              acc = _v6;
              const _v7: any = await rt.send(_v6, "motionCue", []);
              acc = _v7;
              _v1 = _v7;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "Act",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: true,
        properties: {"illegalBits": 32768, "xLast": 0, "yLast": 0, "xStep": 3, "moveSpeed": 0, "blocks": 0, "baseSetter": 0, "mover": 0, "looper": 0, "viewer": 0, "avoider": 0},
        methods: {
          // SCI Actor.sc: Act.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 998, "name": "Act"}, "init", []);
            acc = _v1;
            const _v2: any = rt.get(this, "x");
            acc = _v2;
            const _v3: any = rt.set(this, "xLast", _v2);
            acc = _v3;
            const _v4: any = rt.get(this, "y");
            acc = _v4;
            const _v5: any = rt.set(this, "yLast", _v4);
            acc = _v5;
            return acc;
          },
          // SCI Actor.sc: Act.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "signal");
            acc = _v2;
            const _v3: any = 32768;
            acc = _v3;
            const _v4: any = rt.op("&", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              return acc;
              _v1 = acc;
            }
            acc = _v1;
            const _v5: any = 64511;
            acc = _v5;
            const _v6: any = rt.set(this, "signal", rt.op("&", rt.get(this, "signal"), _v5));
            acc = _v6;
            let _v7: any = acc;
            const _v8: any = rt.get(this, "script");
            acc = _v8;
            _v7 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = rt.get(this, "script");
              acc = _v9;
              const _v10: any = await rt.send(_v9, "doit", []);
              acc = _v10;
              _v7 = _v10;
            }
            acc = _v7;
            let _v11: any = acc;
            let _v12: any = 1;
            if (rt.truth(_v12)) {
              const _v13: any = rt.get(this, "signal");
              acc = _v13;
              const _v14: any = 4;
              acc = _v14;
              const _v15: any = rt.op("&", ...[_v13, _v14]);
              acc = _v15;
              _v12 = _v15;
            }
            if (rt.truth(_v12)) {
              const _v16: any = rt.get(this, "signal");
              acc = _v16;
              const _v17: any = 2;
              acc = _v17;
              const _v18: any = rt.op("&", ...[_v16, _v17]);
              acc = _v18;
              const _v19: any = rt.op("not", ...[_v18]);
              acc = _v19;
              _v12 = _v19;
            }
            acc = _v12;
            _v11 = _v12;
            if (rt.truth(_v12)) {
              return acc;
              _v11 = acc;
            }
            acc = _v11;
            let _v20: any = acc;
            const _v21: any = rt.get(this, "viewer");
            acc = _v21;
            _v20 = _v21;
            if (rt.truth(_v21)) {
              const _v22: any = this;
              acc = _v22;
              const _v23: any = rt.get(this, "viewer");
              acc = _v23;
              const _v24: any = await rt.send(_v23, "doit", [_v22]);
              acc = _v24;
              _v20 = _v24;
            }
            acc = _v20;
            let _v25: any = acc;
            const _v26: any = rt.get(this, "mover");
            acc = _v26;
            _v25 = _v26;
            if (rt.truth(_v26)) {
              const _v27: any = rt.get(this, "mover");
              acc = _v27;
              const _v28: any = await rt.send(_v27, "doit", []);
              acc = _v28;
              _v25 = _v28;
            }
            acc = _v25;
            let _v29: any = acc;
            const _v30: any = rt.get(this, "cycler");
            acc = _v30;
            _v29 = _v30;
            if (rt.truth(_v30)) {
              const _v31: any = rt.get(this, "brLeft");
              acc = _v31;
              const _v32: any = (temps[1] = _v31);
              acc = _v32;
              _v29 = _v32;
              const _v33: any = rt.get(this, "brRight");
              acc = _v33;
              const _v34: any = (temps[2] = _v33);
              acc = _v34;
              _v29 = _v34;
              const _v35: any = rt.get(this, "cycler");
              acc = _v35;
              const _v36: any = await rt.send(_v35, "doit", []);
              acc = _v36;
              _v29 = _v36;
            }
            acc = _v29;
            const _v37: any = rt.get(this, "x");
            acc = _v37;
            const _v38: any = rt.set(this, "xLast", _v37);
            acc = _v38;
            const _v39: any = rt.get(this, "y");
            acc = _v39;
            const _v40: any = rt.set(this, "yLast", _v39);
            acc = _v40;
            return acc;
          },
          // SCI Actor.sc: Act.posn
          "posn": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = (args[1] ?? 0);
            acc = _v2;
            const _v3: any = args.slice(2, argc);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 998, "name": "Act"}, "posn", [_v1, _v2, ..._v3]);
            acc = _v4;
            const _v5: any = (args[0] ?? 0);
            acc = _v5;
            const _v6: any = rt.set(this, "xLast", _v5);
            acc = _v6;
            const _v7: any = (args[1] ?? 0);
            acc = _v7;
            const _v8: any = rt.set(this, "yLast", _v7);
            acc = _v8;
            return acc;
          },
          // SCI Actor.sc: Act.setMotion
          "setMotion": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "mover");
              acc = _v3;
              _v2 = _v3;
            }
            if (rt.truth(_v2)) {
              const _v4: any = rt.get(this, "mover");
              acc = _v4;
              const _v5: any = -1;
              acc = _v5;
              const _v6: any = rt.op("!=", ...[_v4, _v5]);
              acc = _v6;
              _v2 = _v6;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v7: any = rt.get(this, "mover");
              acc = _v7;
              const _v8: any = await rt.send(_v7, "dispose", []);
              acc = _v8;
              _v1 = _v8;
            }
            acc = _v1;
            let _v9: any = acc;
            const _v10: any = (args[0] ?? 0);
            acc = _v10;
            _v9 = _v10;
            if (rt.truth(_v10)) {
              const _v11: any = this;
              acc = _v11;
              const _v12: any = await rt.send(_v11, "startUpd", []);
              acc = _v12;
              _v9 = _v12;
              let _v13: any = acc;
              const _v14: any = (args[0] ?? 0);
              acc = _v14;
              const _v15: any = await rt.send(_v14, "-info-", []);
              acc = _v15;
              const _v16: any = 32768;
              acc = _v16;
              const _v17: any = rt.op("&", ...[_v15, _v16]);
              acc = _v17;
              _v13 = _v17;
              if (rt.truth(_v17)) {
                const _v18: any = (args[0] ?? 0);
                acc = _v18;
                const _v19: any = await rt.send(_v18, "new", []);
                acc = _v19;
                _v13 = _v19;
              } else {
                const _v20: any = (args[0] ?? 0);
                acc = _v20;
                _v13 = _v20;
              }
              acc = _v13;
              const _v21: any = rt.set(this, "mover", _v13);
              acc = _v21;
              _v9 = _v21;
              const _v22: any = this;
              acc = _v22;
              const _v23: any = args.slice(1, argc);
              acc = _v23;
              const _v24: any = rt.get(this, "mover");
              acc = _v24;
              const _v25: any = await rt.send(_v24, "init", [_v22, ..._v23]);
              acc = _v25;
              _v9 = _v25;
            } else {
              const _v26: any = 0;
              acc = _v26;
              const _v27: any = rt.set(this, "mover", _v26);
              acc = _v27;
              _v9 = _v27;
            }
            acc = _v9;
            return acc;
          },
          // SCI Actor.sc: Act.setAvoider
          "setAvoider": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Actor.sc: Act.isStopped
          "isStopped": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = 0;
            if (!rt.truth(_v1)) {
              const _v2: any = rt.get(this, "mover");
              acc = _v2;
              const _v3: any = await rt.call(998, "IsObject", [_v2], this);
              acc = _v3;
              const _v4: any = rt.op("not", ...[_v3]);
              acc = _v4;
              _v1 = _v4;
            }
            if (!rt.truth(_v1)) {
              let _v5: any = 1;
              if (rt.truth(_v5)) {
                const _v6: any = rt.get(this, "x");
                acc = _v6;
                const _v7: any = rt.get(this, "xLast");
                acc = _v7;
                const _v8: any = rt.op("==", ...[_v6, _v7]);
                acc = _v8;
                _v5 = _v8;
              }
              if (rt.truth(_v5)) {
                const _v9: any = rt.get(this, "y");
                acc = _v9;
                const _v10: any = rt.get(this, "yLast");
                acc = _v10;
                const _v11: any = rt.op("==", ...[_v9, _v10]);
                acc = _v11;
                _v5 = _v11;
              }
              if (rt.truth(_v5)) {
                const _v12: any = rt.get(this, "mover");
                acc = _v12;
                const _v13: any = await rt.send(_v12, "triedToMove", []);
                acc = _v13;
                _v5 = _v13;
              }
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI Actor.sc: Act.isBlocked
          "isBlocked": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "signal");
            acc = _v1;
            const _v2: any = 1024;
            acc = _v2;
            const _v3: any = rt.op("&", ...[_v1, _v2]);
            acc = _v3;
            return _v3;
            return acc;
          },
          // SCI Actor.sc: Act.delete
          "delete": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "signal");
            acc = _v2;
            const _v3: any = 32768;
            acc = _v3;
            const _v4: any = rt.op("&", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              let _v5: any = acc;
              const _v6: any = rt.get(this, "mover");
              acc = _v6;
              const _v7: any = -1;
              acc = _v7;
              const _v8: any = rt.op("!=", ...[_v6, _v7]);
              acc = _v8;
              _v5 = _v8;
              if (rt.truth(_v8)) {
                const _v9: any = 0;
                acc = _v9;
                const _v10: any = this;
                acc = _v10;
                const _v11: any = await rt.send(_v10, "setMotion", [_v9]);
                acc = _v11;
                _v5 = _v11;
              }
              acc = _v5;
              _v1 = _v5;
              let _v12: any = acc;
              const _v13: any = rt.get(this, "looper");
              acc = _v13;
              _v12 = _v13;
              if (rt.truth(_v13)) {
                const _v14: any = rt.get(this, "looper");
                acc = _v14;
                const _v15: any = await rt.send(_v14, "dispose", []);
                acc = _v15;
                _v12 = _v15;
                const _v16: any = 0;
                acc = _v16;
                const _v17: any = rt.set(this, "looper", _v16);
                acc = _v17;
                _v12 = _v17;
              }
              acc = _v12;
              _v1 = _v12;
              let _v18: any = acc;
              const _v19: any = rt.get(this, "viewer");
              acc = _v19;
              _v18 = _v19;
              if (rt.truth(_v19)) {
                const _v20: any = rt.get(this, "viewer");
                acc = _v20;
                const _v21: any = await rt.send(_v20, "dispose", []);
                acc = _v21;
                _v18 = _v21;
                const _v22: any = 0;
                acc = _v22;
                const _v23: any = rt.set(this, "viewer", _v22);
                acc = _v23;
                _v18 = _v23;
              }
              acc = _v18;
              _v1 = _v18;
              const _v24: any = await rt.superSend(this, {"script": 998, "name": "Act"}, "delete", []);
              acc = _v24;
              _v1 = _v24;
            }
            acc = _v1;
            return acc;
          },
          // SCI Actor.sc: Act.ignoreHorizon
          "ignoreHorizon": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Actor.sc: Act.observeControl
          "observeControl": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            return acc;
          },
          // SCI Actor.sc: Act.ignoreControl
          "ignoreControl": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            return acc;
          },
          // SCI Actor.sc: Act.observeBlocks
          "observeBlocks": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Actor.sc: Act.ignoreBlocks
          "ignoreBlocks": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Actor.sc: Act.distanceTo
          "distanceTo": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "x");
            acc = _v1;
            const _v2: any = rt.get(this, "y");
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            const _v4: any = await rt.send(_v3, "x", []);
            acc = _v4;
            const _v5: any = (args[0] ?? 0);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "y", []);
            acc = _v6;
            const _v7: any = rt.global(51);
            acc = _v7;
            const _v8: any = await rt.call(998, "GetDistance", [_v1, _v2, _v4, _v6, _v7], this);
            acc = _v8;
            return acc;
          },
          // SCI Actor.sc: Act.canBeHere
          "canBeHere": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 1;
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI Actor.sc: Act.findPosn
          "findPosn": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0];
            return acc;
          },
          // SCI Actor.sc: Act.inRect
          "inRect": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = 1;
            if (rt.truth(_v1)) {
              const _v2: any = (args[0] ?? 0);
              acc = _v2;
              const _v3: any = rt.get(this, "x");
              acc = _v3;
              const _v4: any = rt.op("<=", ...[_v2, _v3]);
              acc = _v4;
              _v1 = _v4;
            }
            if (rt.truth(_v1)) {
              const _v5: any = rt.get(this, "x");
              acc = _v5;
              const _v6: any = (args[2] ?? 0);
              acc = _v6;
              const _v7: any = rt.op("<", ...[_v5, _v6]);
              acc = _v7;
              _v1 = _v7;
            }
            if (rt.truth(_v1)) {
              const _v8: any = (args[1] ?? 0);
              acc = _v8;
              const _v9: any = rt.get(this, "y");
              acc = _v9;
              const _v10: any = rt.op("<=", ...[_v8, _v9]);
              acc = _v10;
              _v1 = _v10;
            }
            if (rt.truth(_v1)) {
              const _v11: any = rt.get(this, "y");
              acc = _v11;
              const _v12: any = (args[3] ?? 0);
              acc = _v12;
              const _v13: any = rt.op("<", ...[_v11, _v12]);
              acc = _v13;
              _v1 = _v13;
            }
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI Actor.sc: Act.onControl
          "onControl": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
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
              _v2 = _v4;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v5: any = 4;
              acc = _v5;
              const _v6: any = rt.get(this, "x");
              acc = _v6;
              const _v7: any = rt.get(this, "y");
              acc = _v7;
              const _v8: any = await rt.call(998, "OnControl", [_v5, _v6, _v7], this);
              acc = _v8;
              _v1 = _v8;
            } else {
              const _v9: any = 4;
              acc = _v9;
              const _v10: any = rt.get(this, "brLeft");
              acc = _v10;
              const _v11: any = rt.get(this, "brTop");
              acc = _v11;
              const _v12: any = rt.get(this, "brRight");
              acc = _v12;
              const _v13: any = rt.get(this, "brBottom");
              acc = _v13;
              const _v14: any = await rt.call(998, "OnControl", [_v9, _v10, _v11, _v12, _v13], this);
              acc = _v14;
              _v1 = _v14;
            }
            acc = _v1;
            return acc;
          },
          // SCI Actor.sc: Act.setStep
          "setStep": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = argc;
              acc = _v3;
              const _v4: any = 1;
              acc = _v4;
              const _v5: any = rt.op(">=", ...[_v3, _v4]);
              acc = _v5;
              _v2 = _v5;
            }
            if (rt.truth(_v2)) {
              const _v6: any = (args[0] ?? 0);
              acc = _v6;
              const _v7: any = -1;
              acc = _v7;
              const _v8: any = rt.op("!=", ...[_v6, _v7]);
              acc = _v8;
              _v2 = _v8;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v9: any = (args[0] ?? 0);
              acc = _v9;
              const _v10: any = rt.set(this, "xStep", _v9);
              acc = _v10;
              _v1 = _v10;
            }
            acc = _v1;
            let _v11: any = acc;
            let _v12: any = 1;
            if (rt.truth(_v12)) {
              const _v13: any = argc;
              acc = _v13;
              const _v14: any = 2;
              acc = _v14;
              const _v15: any = rt.op(">=", ...[_v13, _v14]);
              acc = _v15;
              _v12 = _v15;
            }
            if (rt.truth(_v12)) {
              const _v16: any = (args[1] ?? 0);
              acc = _v16;
              const _v17: any = -1;
              acc = _v17;
              const _v18: any = rt.op("!=", ...[_v16, _v17]);
              acc = _v18;
              _v12 = _v18;
            }
            acc = _v12;
            _v11 = _v12;
            if (rt.truth(_v12)) {
              const _v19: any = (args[1] ?? 0);
              acc = _v19;
              const _v20: any = rt.set(this, "yStep", _v19);
              acc = _v20;
              _v11 = _v20;
            }
            acc = _v11;
            let _v21: any = acc;
            let _v22: any = 1;
            if (rt.truth(_v22)) {
              const _v23: any = rt.get(this, "mover");
              acc = _v23;
              _v22 = _v23;
            }
            if (rt.truth(_v22)) {
              const _v24: any = -1;
              acc = _v24;
              const _v25: any = rt.get(this, "mover");
              acc = _v25;
              const _v26: any = rt.op("!=", ...[_v24, _v25]);
              acc = _v26;
              _v22 = _v26;
            }
            if (rt.truth(_v22)) {
              const _v27: any = rt.object(992, "MoveTo");
              acc = _v27;
              const _v28: any = rt.get(this, "mover");
              acc = _v28;
              const _v29: any = await rt.send(_v28, "isMemberOf", [_v27]);
              acc = _v29;
              _v22 = _v29;
            }
            acc = _v22;
            _v21 = _v22;
            if (rt.truth(_v22)) {
              const _v30: any = rt.object(992, "MoveTo");
              acc = _v30;
              const _v31: any = rt.get(this, "mover");
              acc = _v31;
              const _v32: any = await rt.send(_v31, "x", []);
              acc = _v32;
              const _v33: any = rt.get(this, "mover");
              acc = _v33;
              const _v34: any = await rt.send(_v33, "y", []);
              acc = _v34;
              const _v35: any = rt.get(this, "mover");
              acc = _v35;
              const _v36: any = await rt.send(_v35, "client", []);
              acc = _v36;
              const _v37: any = this;
              acc = _v37;
              const _v38: any = await rt.send(_v37, "setMotion", [_v30, _v32, _v34, _v36]);
              acc = _v38;
              _v21 = _v38;
            }
            acc = _v21;
            return acc;
          },
          // SCI Actor.sc: Act.setDirection
          "setDirection": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            return acc;
          },
          // SCI Actor.sc: Act.motionCue
          "motionCue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "mover");
              acc = _v3;
              _v2 = _v3;
            }
            if (rt.truth(_v2)) {
              const _v4: any = rt.get(this, "mover");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "completed", []);
              acc = _v5;
              _v2 = _v5;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v6: any = rt.get(this, "mover");
              acc = _v6;
              const _v7: any = await rt.send(_v6, "motionCue", []);
              acc = _v7;
              _v1 = _v7;
            }
            acc = _v1;
            const _v8: any = await rt.superSend(this, {"script": 998, "name": "Act"}, "motionCue", []);
            acc = _v8;
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
