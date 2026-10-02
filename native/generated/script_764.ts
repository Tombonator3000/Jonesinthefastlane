// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/noticeRoom.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 6bec703348445e013b8f3df252074cfc46e55929e02d1da1388fa4430e040b6e
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(764, {
    name: "noticeRoom",
    uses: [0, 255, 994],
    locals: [],
    objects: [
      {
        name: "rightsWin",
        className: "SysWindow",
        parent: {"script": 994, "name": "SysWindow"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
      {
        name: "noticeRoom",
        className: "Rm",
        parent: {"script": 994, "name": "Rm"},
        isClass: false,
        properties: {"style": 1},
        methods: {
          // SCI noticeRoom.sc: noticeRoom.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = args.slice(0, argc);
            acc = _v1;
            const _v2: any = await rt.superSend(this, {"script": 764, "name": "noticeRoom"}, "init", [..._v1]);
            acc = _v2;
            const _v3: any = 764;
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = 30;
            acc = _v5;
            const _v6: any = 1;
            acc = _v6;
            const _v7: any = 70;
            acc = _v7;
            const _v8: any = 300;
            acc = _v8;
            const _v9: any = 35;
            acc = _v9;
            const _v10: any = rt.object(764, "rightsWin");
            acc = _v10;
            const _v11: any = await rt.call(255, "Print", [_v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10], this);
            acc = _v11;
            const _v12: any = 2;
            acc = _v12;
            const _v13: any = rt.global(2);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "newRoom", [_v12]);
            acc = _v14;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {"0": "noticeRoom"},
  });
}
