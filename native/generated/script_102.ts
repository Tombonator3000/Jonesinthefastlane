// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/WList.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: aa77099dd1e2578ec909dd07232dc2f81f7406f319e20c8ecb6764d8d8c4bfe7
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(102, {
    name: "WList",
    uses: [999],
    locals: [],
    objects: [
      {
        name: "WList",
        className: "List",
        parent: {"script": 999, "name": "List"},
        isClass: true,
        properties: {"registerX": 0, "registerY": 0},
        methods: {
          // SCI WList.sc: WList.empty
          "empty": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "size");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v5: any = rt.get(this, "size");
              acc = _v5;
              const _v6: any = 1;
              acc = _v6;
              const _v7: any = rt.op("-", ...[_v5, _v6]);
              acc = _v7;
              const _v8: any = (temps[0] = _v7);
              acc = _v8;
              _loop3: for (;;) {
                const _v9: any = (temps[0] ?? 0);
                acc = _v9;
                const _v10: any = 0;
                acc = _v10;
                const _v11: any = rt.op(">=", ...[_v9, _v10]);
                acc = _v11;
                if (!rt.truth(_v11)) break _loop3;
                _continue4: {
                  const _v12: any = (temps[0] ?? 0);
                  acc = _v12;
                  const _v13: any = this;
                  acc = _v13;
                  const _v14: any = await rt.send(_v13, "at", [_v12]);
                  acc = _v14;
                  const _v15: any = this;
                  acc = _v15;
                  const _v16: any = await rt.send(_v15, "delete", [_v14]);
                  acc = _v16;
                }
                const _v17: any = (temps[0] = rt.op("-", (temps[0] ?? 0), 1));
                acc = _v17;
              }
              _v1 = acc;
            }
            acc = _v1;
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
