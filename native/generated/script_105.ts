// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/InvisibleWindow.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 34d0666b56aec56380be88708eb188f1a42c28dd511912464a49abd8b41761c3
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(105, {
    name: "InvisibleWindow",
    uses: [994],
    locals: [],
    objects: [
      {
        name: "InvisibleWindow",
        className: "SysWindow",
        parent: {"script": 994, "name": "SysWindow"},
        isClass: true,
        properties: {"type": 129, "underBits": 0, "-oldPort-": 0},
        methods: {
          // SCI InvisibleWindow.sc: InvisibleWindow.open
          "open": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.call(105, "GetPort", [], this);
            acc = _v1;
            const _v2: any = rt.set(this, "-oldPort-", _v1);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = await rt.call(105, "SetPort", [_v3], this);
            acc = _v4;
            let _v5: any = acc;
            const _v6: any = rt.get(this, "underBits");
            acc = _v6;
            _v5 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = 7;
              acc = _v7;
              const _v8: any = rt.get(this, "top");
              acc = _v8;
              const _v9: any = rt.get(this, "left");
              acc = _v9;
              const _v10: any = 1;
              acc = _v10;
              const _v11: any = rt.op("-", ...[_v9, _v10]);
              acc = _v11;
              const _v12: any = rt.get(this, "bottom");
              acc = _v12;
              const _v13: any = rt.get(this, "right");
              acc = _v13;
              const _v14: any = 3;
              acc = _v14;
              const _v15: any = await rt.call(105, "Graph", [_v7, _v8, _v11, _v12, _v13, _v14], this);
              acc = _v15;
              const _v16: any = rt.set(this, "underBits", _v15);
              acc = _v16;
              _v5 = _v16;
            }
            acc = _v5;
            const _v17: any = 11;
            acc = _v17;
            const _v18: any = rt.get(this, "top");
            acc = _v18;
            const _v19: any = rt.get(this, "left");
            acc = _v19;
            const _v20: any = 1;
            acc = _v20;
            const _v21: any = rt.op("-", ...[_v19, _v20]);
            acc = _v21;
            const _v22: any = rt.get(this, "bottom");
            acc = _v22;
            const _v23: any = rt.get(this, "right");
            acc = _v23;
            const _v24: any = 3;
            acc = _v24;
            const _v25: any = rt.op("-", ...[_v23, _v24]);
            acc = _v25;
            const _v26: any = 2;
            acc = _v26;
            const _v27: any = 0;
            acc = _v27;
            const _v28: any = 0;
            acc = _v28;
            const _v29: any = await rt.call(105, "Graph", [_v17, _v18, _v21, _v22, _v25, _v26, _v27, _v28], this);
            acc = _v29;
            const _v30: any = 129;
            acc = _v30;
            const _v31: any = rt.set(this, "type", _v30);
            acc = _v31;
            const _v32: any = await rt.superSend(this, {"script": 105, "name": "InvisibleWindow"}, "open", []);
            acc = _v32;
            return acc;
          },
          // SCI InvisibleWindow.sc: InvisibleWindow.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = await rt.call(105, "SetPort", [_v1], this);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.get(this, "underBits");
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = 8;
              acc = _v5;
              const _v6: any = rt.get(this, "underBits");
              acc = _v6;
              const _v7: any = await rt.call(105, "Graph", [_v5, _v6], this);
              acc = _v7;
              _v3 = _v7;
              const _v8: any = 12;
              acc = _v8;
              const _v9: any = rt.get(this, "top");
              acc = _v9;
              const _v10: any = rt.get(this, "left");
              acc = _v10;
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = rt.op("-", ...[_v10, _v11]);
              acc = _v12;
              const _v13: any = rt.get(this, "bottom");
              acc = _v13;
              const _v14: any = rt.get(this, "right");
              acc = _v14;
              const _v15: any = 1;
              acc = _v15;
              const _v16: any = await rt.call(105, "Graph", [_v8, _v9, _v12, _v13, _v14, _v15], this);
              acc = _v16;
              _v3 = _v16;
            }
            acc = _v3;
            const _v17: any = rt.get(this, "window");
            acc = _v17;
            const _v18: any = await rt.call(105, "DisposeWindow", [_v17], this);
            acc = _v18;
            const _v19: any = rt.get(this, "-oldPort-");
            acc = _v19;
            const _v20: any = await rt.call(105, "SetPort", [_v19], this);
            acc = _v20;
            const _v21: any = this;
            acc = _v21;
            const _v22: any = await rt.call(105, "DisposeClone", [_v21], this);
            acc = _v22;
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
