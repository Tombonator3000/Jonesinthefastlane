// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/DCIcon.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 75d11bad5d5eb4f324ebb8f30b8e6aa2123c73df36555dd22da983dd4e538868
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(967, {
    name: "DCIcon",
    uses: [255],
    locals: [],
    objects: [
      {
        name: "DCIcon",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: true,
        properties: {"cycler": 0, "cycleSpeed": 6, "signal": 0, "ticksToDo": 0},
        methods: {
          // SCI DCIcon.sc: DCIcon.cycle
          "cycle": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "cycler");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "cel");
              acc = _v3;
              const _v4: any = (temps[0] = _v3);
              acc = _v4;
              _v1 = _v4;
              const _v5: any = rt.get(this, "loop");
              acc = _v5;
              const _v6: any = (temps[1] = _v5);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = rt.get(this, "cycler");
              acc = _v7;
              const _v8: any = await rt.send(_v7, "doit", []);
              acc = _v8;
              _v1 = _v8;
              let _v9: any = acc;
              let _v10: any = 0;
              if (!rt.truth(_v10)) {
                const _v11: any = rt.get(this, "cel");
                acc = _v11;
                const _v12: any = (temps[0] ?? 0);
                acc = _v12;
                const _v13: any = rt.op("!=", ...[_v11, _v12]);
                acc = _v13;
                _v10 = _v13;
              }
              if (!rt.truth(_v10)) {
                const _v14: any = rt.get(this, "loop");
                acc = _v14;
                const _v15: any = (temps[1] ?? 0);
                acc = _v15;
                const _v16: any = rt.op("!=", ...[_v14, _v15]);
                acc = _v16;
                _v10 = _v16;
              }
              acc = _v10;
              _v9 = _v10;
              if (rt.truth(_v10)) {
                const _v17: any = this;
                acc = _v17;
                const _v18: any = await rt.send(_v17, "draw", []);
                acc = _v18;
                _v9 = _v18;
              }
              acc = _v9;
              _v1 = _v9;
            }
            acc = _v1;
            return acc;
          },
          // SCI DCIcon.sc: DCIcon.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
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
              const _v5: any = 0;
              acc = _v5;
              const _v6: any = rt.set(this, "cycler", _v5);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            const _v7: any = await rt.superSend(this, {"script": 967, "name": "DCIcon"}, "dispose", []);
            acc = _v7;
            return acc;
          },
          // SCI DCIcon.sc: DCIcon.lastCel
          "lastCel": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.call(967, "NumCels", [_v1], this);
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = rt.op("-", ...[_v2, _v3]);
            acc = _v4;
            return _v4;
            return acc;
          },
          // SCI DCIcon.sc: DCIcon.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.call(967, "DrawControl", [_v3], this);
            acc = _v4;
            const _v5: any = this;
            acc = _v5;
            const _v6: any = await rt.send(_v5, "resetPort", []);
            acc = _v6;
            return acc;
          },
          // SCI DCIcon.sc: DCIcon.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI DCIcon.sc: DCIcon.setCycle
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
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = rt.set(this, "cycler", _v5);
            acc = _v6;
            let _v7: any = acc;
            const _v8: any = (args[0] ?? 0);
            acc = _v8;
            _v7 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = (args[0] ?? 0);
              acc = _v9;
              const _v10: any = await rt.send(_v9, "new", []);
              acc = _v10;
              const _v11: any = rt.set(this, "cycler", _v10);
              acc = _v11;
              _v7 = _v11;
              const _v12: any = this;
              acc = _v12;
              const _v13: any = (args[1] ?? 0);
              acc = _v13;
              const _v14: any = args.slice(2, argc);
              acc = _v14;
              const _v15: any = rt.get(this, "cycler");
              acc = _v15;
              const _v16: any = await rt.send(_v15, "init", [_v12, _v13, ..._v14]);
              acc = _v16;
              _v7 = _v16;
            }
            acc = _v7;
            return acc;
          },
          // SCI DCIcon.sc: DCIcon.motionCue
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
    ],
    procedures: {
    },
    exports: {"0": "DCIcon"},
  });
}
