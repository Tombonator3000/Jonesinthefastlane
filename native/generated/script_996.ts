// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/User.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 435cba956012e7c9ab9af091f453e4a5dabe723db0cef84caff05886e9fb68a0
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(996, {
    name: "User",
    uses: [0, 997, 999],
    locals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    objects: [
      {
        name: "User",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"alterEgo": 0, "canInput": 0, "controls": 0, "echo": 32, "prevDir": 0, "prompt": "Enter input", "inputLineAddr": 0, "x": -1, "y": -1, "blocks": 1, "mapKeyToDir": 1},
        methods: {
          // SCI User.sc: User.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
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
              const _v4: any = rt.ref("local", 996, 0);
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            const _v5: any = rt.set(this, "inputLineAddr", _v1);
            acc = _v5;
            let _v6: any = acc;
            const _v7: any = argc;
            acc = _v7;
            const _v8: any = 2;
            acc = _v8;
            const _v9: any = rt.op("==", ...[_v7, _v8]);
            acc = _v9;
            _v6 = _v9;
            if (rt.truth(_v9)) {
              const _v10: any = (args[1] ?? 0);
              acc = _v10;
              _v6 = _v10;
            } else {
              const _v11: any = 45;
              acc = _v11;
              _v6 = _v11;
            }
            acc = _v6;
            const _v12: any = rt.setLocal(996, 23, _v6);
            acc = _v12;
            return acc;
          },
          // SCI User.sc: User.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v1: any = rt.object(999, "Event");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "new", []);
            acc = _v2;
            const _v3: any = (temps[0] = _v2);
            acc = _v3;
            let _v4: any = acc;
            const _v5: any = (temps[0] ?? 0);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "type", []);
            acc = _v6;
            _v4 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = (temps[0] ?? 0);
              acc = _v7;
              const _v8: any = rt.setGlobal(24, _v7);
              acc = _v8;
              _v4 = _v8;
              const _v9: any = (temps[0] ?? 0);
              acc = _v9;
              const _v10: any = await rt.send(_v9, "type", []);
              acc = _v10;
              const _v11: any = (temps[1] = _v10);
              acc = _v11;
              _v4 = _v11;
              let _v12: any = acc;
              const _v13: any = rt.get(this, "mapKeyToDir");
              acc = _v13;
              _v12 = _v13;
              if (rt.truth(_v13)) {
                const _v14: any = (temps[0] ?? 0);
                acc = _v14;
                const _v15: any = await rt.call(996, "MapKeyToDir", [_v14], this);
                acc = _v15;
                _v12 = _v15;
              }
              acc = _v12;
              _v4 = _v12;
              let _v16: any = acc;
              const _v17: any = rt.object(997, "MenuBar");
              acc = _v17;
              _v16 = _v17;
              if (rt.truth(_v17)) {
                const _v18: any = (temps[0] ?? 0);
                acc = _v18;
                const _v19: any = rt.object(997, "MenuBar");
                acc = _v19;
                const _v20: any = await rt.send(_v19, "handleEvent", [_v18]);
                acc = _v20;
                _v16 = _v20;
              }
              acc = _v16;
              _v4 = _v16;
              let _v21: any = acc;
              let _v22: any = 1;
              if (rt.truth(_v22)) {
                const _v23: any = rt.global(527);
                acc = _v23;
                _v22 = _v23;
              }
              if (rt.truth(_v22)) {
                const _v24: any = (temps[0] ?? 0);
                acc = _v24;
                const _v25: any = await rt.send(_v24, "claimed", []);
                acc = _v25;
                const _v26: any = rt.op("not", ...[_v25]);
                acc = _v26;
                _v22 = _v26;
              }
              if (rt.truth(_v22)) {
                let _v27: any = 0;
                if (!rt.truth(_v27)) {
                  const _v28: any = (temps[0] ?? 0);
                  acc = _v28;
                  const _v29: any = await rt.send(_v28, "type", []);
                  acc = _v29;
                  const _v30: any = 4;
                  acc = _v30;
                  const _v31: any = rt.op("==", ...[_v29, _v30]);
                  acc = _v31;
                  _v27 = _v31;
                }
                if (!rt.truth(_v27)) {
                  const _v32: any = (temps[0] ?? 0);
                  acc = _v32;
                  const _v33: any = await rt.send(_v32, "type", []);
                  acc = _v33;
                  const _v34: any = 1;
                  acc = _v34;
                  const _v35: any = rt.op("==", ...[_v33, _v34]);
                  acc = _v35;
                  _v27 = _v35;
                }
                acc = _v27;
                _v22 = _v27;
              }
              acc = _v22;
              _v21 = _v22;
              if (rt.truth(_v22)) {
                const _v36: any = 1;
                acc = _v36;
                const _v37: any = rt.setGlobal(528, _v36);
                acc = _v37;
                _v21 = _v37;
              }
              acc = _v21;
              _v4 = _v21;
              let _v38: any = acc;
              const _v39: any = rt.get(this, "controls");
              acc = _v39;
              _v38 = _v39;
              if (rt.truth(_v39)) {
                const _v40: any = (temps[0] ?? 0);
                acc = _v40;
                const _v41: any = rt.global(1);
                acc = _v41;
                const _v42: any = await rt.send(_v41, "handleEvent", [_v40]);
                acc = _v42;
                _v38 = _v42;
              }
              acc = _v38;
              _v4 = _v38;
              const _v43: any = (temps[0] ?? 0);
              acc = _v43;
              const _v44: any = rt.global(5);
              acc = _v44;
              const _v45: any = await rt.send(_v44, "handleEvent", [_v43]);
              acc = _v45;
              _v4 = _v45;
            }
            acc = _v4;
            const _v46: any = (temps[0] ?? 0);
            acc = _v46;
            const _v47: any = await rt.send(_v46, "dispose", []);
            acc = _v47;
            const _v48: any = 0;
            acc = _v48;
            const _v49: any = rt.setGlobal(24, _v48);
            acc = _v49;
            return acc;
          },
          // SCI User.sc: User.getInput
          "getInput": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = 1;
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI User.sc: User.canControl
          "canControl": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = argc;
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "controls");
              acc = _v3;
              const _v4: any = (temps[0] = _v3);
              acc = _v4;
              _v1 = _v4;
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = rt.set(this, "controls", _v5);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = rt.set(this, "prevDir", _v7);
              acc = _v8;
              _v1 = _v8;
              let _v9: any = acc;
              let _v10: any = 1;
              if (rt.truth(_v10)) {
                const _v11: any = rt.global(302);
                acc = _v11;
                _v10 = _v11;
              }
              if (rt.truth(_v10)) {
                const _v12: any = rt.global(302);
                acc = _v12;
                const _v13: any = await rt.send(_v12, "playing", []);
                acc = _v13;
                const _v14: any = 29;
                acc = _v14;
                const _v15: any = rt.op("==", ...[_v13, _v14]);
                acc = _v15;
                _v10 = _v15;
              }
              if (rt.truth(_v10)) {
                const _v16: any = rt.global(536);
                acc = _v16;
                const _v17: any = rt.op("not", ...[_v16]);
                acc = _v17;
                _v10 = _v17;
              }
              acc = _v10;
              _v9 = _v10;
              if (rt.truth(_v10)) {
                const _v18: any = 0;
                acc = _v18;
                const _v19: any = rt.set(this, "controls", _v18);
                acc = _v19;
                _v9 = _v19;
              }
              acc = _v9;
              _v1 = _v9;
              let _v20: any = acc;
              const _v21: any = (temps[0] ?? 0);
              acc = _v21;
              const _v22: any = rt.get(this, "controls");
              acc = _v22;
              const _v23: any = rt.op("!=", ...[_v21, _v22]);
              acc = _v23;
              _v20 = _v23;
              if (rt.truth(_v23)) {
                let _v24: any = acc;
                const _v25: any = rt.get(this, "controls");
                acc = _v25;
                _v24 = _v25;
                if (rt.truth(_v25)) {
                  const _v26: any = 999;
                  acc = _v26;
                  _v24 = _v26;
                } else {
                  const _v27: any = 997;
                  acc = _v27;
                  _v24 = _v27;
                }
                acc = _v24;
                const _v28: any = rt.global(1);
                acc = _v28;
                const _v29: any = await rt.send(_v28, "setCursor", [_v24]);
                acc = _v29;
                _v20 = _v29;
              }
              acc = _v20;
              _v1 = _v20;
            }
            acc = _v1;
            const _v30: any = rt.get(this, "controls");
            acc = _v30;
            return _v30;
            return acc;
          },
          // SCI User.sc: User.said
          "said": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 1;
            acc = _v1;
            return _v1;
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
