// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/FwdCount.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: e0d3ab7de63fcbbc3cca9838f3abc04fa140dd9c17529016a92ea0822f1404f3
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(103, {
    name: "FwdCount",
    uses: [992],
    locals: [],
    objects: [
      {
        name: "FwdCount",
        className: "Cycle",
        parent: {"script": 992, "name": "Cycle"},
        isClass: true,
        properties: {"count": 0},
        methods: {
          // SCI FwdCount.sc: FwdCount.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 103, "name": "FwdCount"}, "init", [_v1]);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = argc;
            acc = _v4;
            const _v5: any = 2;
            acc = _v5;
            const _v6: any = rt.op(">=", ...[_v4, _v5]);
            acc = _v6;
            _v3 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = (args[1] ?? 0);
              acc = _v7;
              const _v8: any = rt.set(this, "caller", _v7);
              acc = _v8;
              _v3 = _v8;
              let _v9: any = acc;
              const _v10: any = argc;
              acc = _v10;
              const _v11: any = 3;
              acc = _v11;
              const _v12: any = rt.op(">=", ...[_v10, _v11]);
              acc = _v12;
              _v9 = _v12;
              if (rt.truth(_v12)) {
                const _v13: any = (args[2] ?? 0);
                acc = _v13;
                _v9 = _v13;
              } else {
                const _v14: any = 0;
                acc = _v14;
                _v9 = _v14;
              }
              acc = _v9;
              const _v15: any = rt.set(this, "count", _v9);
              acc = _v15;
              _v3 = _v15;
            }
            acc = _v3;
            return acc;
          },
          // SCI FwdCount.sc: FwdCount.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "nextCel", []);
            acc = _v3;
            const _v4: any = (temps[0] = _v3);
            acc = _v4;
            const _v5: any = rt.get(this, "client");
            acc = _v5;
            const _v6: any = await rt.send(_v5, "lastCel", []);
            acc = _v6;
            const _v7: any = rt.op(">", ...[_v4, _v6]);
            acc = _v7;
            _v1 = _v7;
            if (rt.truth(_v7)) {
              const _v8: any = this;
              acc = _v8;
              const _v9: any = await rt.send(_v8, "cycleDone", []);
              acc = _v9;
              _v1 = _v9;
            } else {
              const _v10: any = (temps[0] ?? 0);
              acc = _v10;
              const _v11: any = rt.get(this, "client");
              acc = _v11;
              const _v12: any = await rt.send(_v11, "cel", [_v10]);
              acc = _v12;
              _v1 = _v12;
            }
            acc = _v1;
            return acc;
          },
          // SCI FwdCount.sc: FwdCount.cycleDone
          "cycleDone": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.get(this, "client");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "cel", [_v1]);
            acc = _v3;
            let _v4: any = acc;
            let _v5: any = 1;
            if (rt.truth(_v5)) {
              const _v6: any = rt.get(this, "count");
              acc = _v6;
              _v5 = _v6;
            }
            if (rt.truth(_v5)) {
              const _v7: any = rt.set(this, "count", rt.op("-", rt.get(this, "count"), 1));
              acc = _v7;
              const _v8: any = rt.op("not", ...[_v7]);
              acc = _v8;
              _v5 = _v8;
            }
            acc = _v5;
            _v4 = _v5;
            if (rt.truth(_v5)) {
              const _v9: any = 1;
              acc = _v9;
              const _v10: any = rt.set(this, "completed", _v9);
              acc = _v10;
              _v4 = _v10;
              const _v11: any = this;
              acc = _v11;
              const _v12: any = await rt.send(_v11, "motionCue", []);
              acc = _v12;
              _v4 = _v12;
            }
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "RdmC",
        className: "FwdCount",
        parent: {"script": 103, "name": "FwdCount"},
        isClass: true,
        properties: {"prevCel": -1},
        methods: {
          // SCI FwdCount.sc: RdmC.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "nextCel", []);
            acc = _v2;
            const _v3: any = (temps[0] = _v2);
            acc = _v3;
            let _v4: any = acc;
            const _v5: any = rt.get(this, "count");
            acc = _v5;
            const _v6: any = 0;
            acc = _v6;
            const _v7: any = rt.op("<", ...[_v5, _v6]);
            acc = _v7;
            _v4 = _v7;
            if (rt.truth(_v7)) {
              const _v8: any = this;
              acc = _v8;
              const _v9: any = await rt.send(_v8, "cycleDone", []);
              acc = _v9;
              _v4 = _v9;
            } else {
              const _v10: any = (temps[0] ?? 0);
              acc = _v10;
              const _v11: any = rt.get(this, "client");
              acc = _v11;
              const _v12: any = await rt.send(_v11, "cel", [_v10]);
              acc = _v12;
              _v4 = _v12;
            }
            acc = _v4;
            return acc;
          },
          // SCI FwdCount.sc: RdmC.cycleDone
          "cycleDone": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.get(this, "client");
            acc = _v2;
            const _v3: any = await rt.send(_v2, "cel", [_v1]);
            acc = _v3;
            const _v4: any = 1;
            acc = _v4;
            const _v5: any = rt.set(this, "completed", _v4);
            acc = _v5;
            const _v6: any = this;
            acc = _v6;
            const _v7: any = await rt.send(_v6, "motionCue", []);
            acc = _v7;
            return acc;
          },
          // SCI FwdCount.sc: RdmC.changeCel
          "changeCel": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.set(this, "count", rt.op("-", rt.get(this, "count"), 1));
            acc = _v1;
            const _v2: any = 0;
            acc = _v2;
            const _v3: any = rt.get(this, "client");
            acc = _v3;
            const _v4: any = await rt.send(_v3, "lastCel", []);
            acc = _v4;
            const _v5: any = await rt.call(103, "Random", [_v2, _v4], this);
            acc = _v5;
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
