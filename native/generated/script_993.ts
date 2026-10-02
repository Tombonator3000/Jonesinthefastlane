// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/File.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: ce7d5edaf64ddcf1b1d98331b18bbb03b33d5e33f846d45e2eb696a216dee7f9
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(993, {
    name: "File",
    uses: [999],
    locals: [],
    objects: [
      {
        name: "gamefile_sh",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"name": "gamefile.sh", "handle": 0},
        methods: {
          // SCI File.sc: gamefile_sh.open
          "open": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = argc;
            acc = _v2;
            _branch3: {
              const _v4: any = 0;
              acc = _v4;
              _v1 = rt.op("==", _v2, _v4);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v5: any = 0;
                acc = _v5;
                const _v6: any = rt.get(this, "name");
                acc = _v6;
                const _v7: any = 0;
                acc = _v7;
                const _v8: any = await rt.call(993, "FileIO", [_v5, _v6, _v7], this);
                acc = _v8;
                _v1 = _v8;
                break _branch3;
              }
              const _v9: any = 1;
              acc = _v9;
              _v1 = rt.op("==", _v2, _v9);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v10: any = 0;
                acc = _v10;
                const _v11: any = rt.get(this, "name");
                acc = _v11;
                const _v12: any = (args[0] ?? 0);
                acc = _v12;
                const _v13: any = await rt.call(993, "FileIO", [_v10, _v11, _v12], this);
                acc = _v13;
                _v1 = _v13;
                break _branch3;
              }
              const _v14: any = -1;
              acc = _v14;
              _v1 = _v14;
              break _branch3;
            }
            acc = _v1;
            const _v15: any = rt.set(this, "handle", _v1);
            acc = _v15;
            let _v16: any = acc;
            const _v17: any = rt.get(this, "handle");
            acc = _v17;
            const _v18: any = -1;
            acc = _v18;
            const _v19: any = rt.op("==", ...[_v17, _v18]);
            acc = _v19;
            _v16 = _v19;
            if (rt.truth(_v19)) {
              const _v20: any = 0;
              acc = _v20;
              _v16 = _v20;
            } else {
              const _v21: any = this;
              acc = _v21;
              _v16 = _v21;
            }
            acc = _v16;
            return _v16;
            return acc;
          },
          // SCI File.sc: gamefile_sh.write
          "write": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "handle");
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = this;
              acc = _v4;
              const _v5: any = await rt.send(_v4, "open", []);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            const _v8: any = 0;
            acc = _v8;
            const _v9: any = (temps[0] = _v8);
            acc = _v9;
            _loop6: for (;;) {
              const _v10: any = (temps[0] ?? 0);
              acc = _v10;
              const _v11: any = argc;
              acc = _v11;
              const _v12: any = rt.op("<", ...[_v10, _v11]);
              acc = _v12;
              if (!rt.truth(_v12)) break _loop6;
              _continue7: {
                const _v13: any = 6;
                acc = _v13;
                const _v14: any = rt.get(this, "handle");
                acc = _v14;
                const _v15: any = (temps[0] ?? 0);
                acc = _v15;
                const _v16: any = (args[(0 + (Number(_v15) & 65535))] ?? 0);
                acc = _v16;
                const _v17: any = await rt.call(993, "FileIO", [_v13, _v14, _v16], this);
                acc = _v17;
              }
              const _v18: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v18;
            }
            return acc;
          },
          // SCI File.sc: gamefile_sh.read
          "read": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = argc;
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.op("!=", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = 0;
              acc = _v5;
              return _v5;
              _v1 = acc;
            }
            acc = _v1;
            let _v6: any = acc;
            const _v7: any = rt.get(this, "handle");
            acc = _v7;
            const _v8: any = rt.op("not", ...[_v7]);
            acc = _v8;
            _v6 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = 1;
              acc = _v9;
              const _v10: any = this;
              acc = _v10;
              const _v11: any = await rt.send(_v10, "open", [_v9]);
              acc = _v11;
              _v6 = _v11;
            }
            acc = _v6;
            const _v12: any = 5;
            acc = _v12;
            const _v13: any = (args[0] ?? 0);
            acc = _v13;
            const _v14: any = (args[1] ?? 0);
            acc = _v14;
            const _v15: any = rt.get(this, "handle");
            acc = _v15;
            const _v16: any = await rt.call(993, "FileIO", [_v12, _v13, _v14, _v15], this);
            acc = _v16;
            return _v16;
            return acc;
          },
          // SCI File.sc: gamefile_sh.close
          "close": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "handle");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 1;
              acc = _v3;
              const _v4: any = rt.get(this, "handle");
              acc = _v4;
              const _v5: any = await rt.call(993, "FileIO", [_v3, _v4], this);
              acc = _v5;
              _v1 = _v5;
              const _v6: any = 0;
              acc = _v6;
              const _v7: any = rt.set(this, "handle", _v6);
              acc = _v7;
              _v1 = _v7;
            }
            acc = _v1;
            return acc;
          },
          // SCI File.sc: gamefile_sh.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "close", []);
            acc = _v2;
            const _v3: any = await rt.superSend(this, {"script": 993, "name": "gamefile_sh"}, "dispose", []);
            acc = _v3;
            return acc;
          },
          // SCI File.sc: gamefile_sh.showStr
          "showStr": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = 993;
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = rt.get(this, "name");
            acc = _v4;
            const _v5: any = await rt.call(993, "Format", [_v1, _v2, _v3, _v4], this);
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
