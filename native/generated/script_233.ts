// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/select1.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 88560f3ba14b7ee02bf65cb0ba7115f0764cb1abc1324262dda7b4e15e60dc39
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(233, {
    name: "select1",
    uses: [0, 255, 891, 996, 999],
    locals: [],
    objects: [
      {
        name: "dialogKeyMouse",
        className: "Set",
        parent: {"script": 999, "name": "Set"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
      {
        name: "select1",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI select1.sc: select1.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.setGlobal(531, _v1);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = await rt.call(0, "proc0_17", [_v3], this);
            acc = _v4;
            const _v5: any = rt.object(233, "dialogKeyMouse");
            acc = _v5;
            const _v6: any = rt.set(this, "keyMouseList", _v5);
            acc = _v6;
            const _v7: any = rt.global(502);
            acc = _v7;
            const _v8: any = rt.set(this, "prevDialog", _v7);
            acc = _v8;
            const _v9: any = this;
            acc = _v9;
            const _v10: any = rt.setGlobal(502, _v9);
            acc = _v10;
            const _v11: any = 0;
            acc = _v11;
            const _v12: any = rt.setGlobal(413, _v11);
            acc = _v12;
            const _v13: any = await rt.call(0, "proc0_7", [], this);
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = rt.set(this, "client", _v14);
            acc = _v15;
            const _v16: any = rt.global(59);
            acc = _v16;
            const _v17: any = rt.object(233, "playGame");
            acc = _v17;
            const _v18: any = rt.object(233, "restoreGame");
            acc = _v18;
            const _v19: any = rt.object(233, "demonstration");
            acc = _v19;
            const _v20: any = 102;
            acc = _v20;
            const _v21: any = 1;
            acc = _v21;
            const _v22: any = 153;
            acc = _v22;
            const _v23: any = 69;
            acc = _v23;
            const _v24: any = 44;
            acc = _v24;
            const _v25: any = 0;
            acc = _v25;
            const _v26: any = 15;
            acc = _v26;
            const _v27: any = 0;
            acc = _v27;
            const _v28: any = 0;
            acc = _v28;
            const _v29: any = 0;
            acc = _v29;
            const _v30: any = 0;
            acc = _v30;
            const _v31: any = 1;
            acc = _v31;
            const _v32: any = this;
            acc = _v32;
            const _v33: any = await rt.send(_v32, "window", [_v16]);
            acc = _v33;
            const _v34: any = await rt.send(_v32, "add", [_v17, _v18, _v19]);
            acc = _v34;
            const _v35: any = await rt.send(_v32, "eachElementDo", [_v20, _v21]);
            acc = _v35;
            const _v36: any = await rt.send(_v32, "eachElementDo", [_v22]);
            acc = _v36;
            const _v37: any = await rt.send(_v32, "moveTo", [_v23, _v24]);
            acc = _v37;
            const _v38: any = await rt.send(_v32, "open", [_v25, _v26, _v27, _v28, _v29, _v30, _v31]);
            acc = _v38;
            const _v39: any = rt.get(this, "keyMouseList");
            acc = _v39;
            const _v40: any = rt.object(891, "KeyMouse");
            acc = _v40;
            const _v41: any = await rt.send(_v40, "setList", [_v39]);
            acc = _v41;
            const _v42: any = this;
            acc = _v42;
            const _v43: any = rt.get(this, "keyMouseList");
            acc = _v43;
            const _v44: any = rt.object(233, "playGame");
            acc = _v44;
            const _v45: any = await rt.call(0, "proc0_9", [_v42, _v43, _v44], this);
            acc = _v45;
            const _v46: any = 1;
            acc = _v46;
            const _v47: any = rt.object(996, "User");
            acc = _v47;
            const _v48: any = await rt.send(_v47, "canControl", [_v46]);
            acc = _v48;
            const _v49: any = 0;
            acc = _v49;
            const _v50: any = 0;
            acc = _v50;
            const _v51: any = this;
            acc = _v51;
            const _v52: any = await rt.send(_v51, "doit", [_v49, _v50]);
            acc = _v52;
            const _v53: any = (temps[0] = _v52);
            acc = _v53;
            let _v54: any = acc;
            const _v55: any = (temps[0] ?? 0);
            acc = _v55;
            const _v56: any = await rt.call(233, "IsObject", [_v55], this);
            acc = _v56;
            _v54 = _v56;
            if (rt.truth(_v56)) {
              let _v57: any = acc;
              const _v58: any = (temps[0] ?? 0);
              acc = _v58;
              const _v59: any = this;
              acc = _v59;
              const _v60: any = await rt.send(_v59, "contains", [_v58]);
              acc = _v60;
              _v57 = _v60;
              if (rt.truth(_v60)) {
                const _v61: any = 0;
                acc = _v61;
                const _v62: any = (temps[0] = _v61);
                acc = _v62;
                _v57 = _v62;
              }
              acc = _v57;
              _v54 = _v57;
            } else {
              const _v63: any = 1;
              acc = _v63;
              const _v64: any = (temps[0] = _v63);
              acc = _v64;
              _v54 = _v64;
            }
            acc = _v54;
            let _v65: any = acc;
            const _v66: any = rt.get(this, "prevDialog");
            acc = _v66;
            _v65 = _v66;
            if (rt.truth(_v66)) {
              const _v67: any = rt.get(this, "prevDialog");
              acc = _v67;
              const _v68: any = await rt.send(_v67, "keyMouseList", []);
              acc = _v68;
              _v65 = _v68;
            } else {
              const _v69: any = rt.global(432);
              acc = _v69;
              _v65 = _v69;
            }
            acc = _v65;
            const _v70: any = rt.object(891, "KeyMouse");
            acc = _v70;
            const _v71: any = await rt.send(_v70, "setList", [_v65]);
            acc = _v71;
            const _v72: any = rt.get(this, "keyMouseList");
            acc = _v72;
            const _v73: any = await rt.send(_v72, "release", []);
            acc = _v73;
            const _v74: any = await rt.send(_v72, "dispose", []);
            acc = _v74;
            const _v75: any = rt.get(this, "prevDialog");
            acc = _v75;
            const _v76: any = rt.setGlobal(502, _v75);
            acc = _v76;
            const _v77: any = this;
            acc = _v77;
            const _v78: any = await rt.send(_v77, "dispose", []);
            acc = _v78;
            const _v79: any = (temps[0] ?? 0);
            acc = _v79;
            const _acc80: any = acc;
            const _v81: any = 233;
            acc = _v81;
            const _args82: any[] = [_v81];
            await rt.call(233, "DisposeScript", _args82, this);
            const _v83: any = _args82.length === 2 ? _args82[1] : _acc80;
            acc = _v83;
            return acc;
          },
        },
      },
      {
        name: "playGame",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 35, "nsTop": 17, "nsLeft": 27, "view": 10, "loop": 1, "priority": 13},
        methods: {
          // SCI select1.sc: playGame.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 233, "name": "playGame"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = rt.setGlobal(531, _v3);
            acc = _v4;
            const _v5: any = (temps[0] ?? 0);
            acc = _v5;
            return _v5;
            return acc;
          },
        },
      },
      {
        name: "restoreGame",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 35, "nsTop": 47, "nsLeft": 27, "view": 10, "loop": 1, "cel": 2, "priority": 13},
        methods: {
          // SCI select1.sc: restoreGame.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 233, "name": "restoreGame"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = rt.setGlobal(529, _v3);
            acc = _v4;
            const _v5: any = 1;
            acc = _v5;
            const _v6: any = rt.setGlobal(533, _v5);
            acc = _v6;
            const _v7: any = (temps[0] ?? 0);
            acc = _v7;
            return _v7;
            return acc;
          },
        },
      },
      {
        name: "demonstration",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 35, "nsTop": 77, "nsLeft": 27, "view": 10, "loop": 1, "cel": 1, "priority": 13},
        methods: {
          // SCI select1.sc: demonstration.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 233, "name": "demonstration"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 29;
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = 1;
            acc = _v5;
            const _v6: any = 2;
            acc = _v6;
            const _v7: any = await rt.call(233, "ScriptID", [_v5, _v6], this);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "at", [_v4]);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "playing", [_v3]);
            acc = _v9;
            const _v10: any = 1;
            acc = _v10;
            const _v11: any = rt.setGlobal(527, _v10);
            acc = _v11;
            const _v12: any = (temps[0] ?? 0);
            acc = _v12;
            return _v12;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {"0": "select1"},
  });
}
