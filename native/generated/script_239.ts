// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/select1b.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 36d5dca0119dbd9eee0e4ae5b7c4db01b28a04a0cd66c8996c43cac1eda32a8a
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(239, {
    name: "select1b",
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
        name: "select1b",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI select1b.sc: select1b.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = await rt.call(0, "proc0_17", [_v1], this);
            acc = _v2;
            const _v3: any = rt.object(239, "dialogKeyMouse");
            acc = _v3;
            const _v4: any = rt.set(this, "keyMouseList", _v3);
            acc = _v4;
            const _v5: any = rt.global(502);
            acc = _v5;
            const _v6: any = rt.set(this, "prevDialog", _v5);
            acc = _v6;
            const _v7: any = this;
            acc = _v7;
            const _v8: any = rt.setGlobal(502, _v7);
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = rt.setGlobal(413, _v9);
            acc = _v10;
            const _v11: any = await rt.call(0, "proc0_7", [], this);
            acc = _v11;
            const _v12: any = 0;
            acc = _v12;
            const _v13: any = rt.set(this, "client", _v12);
            acc = _v13;
            const _v14: any = rt.global(59);
            acc = _v14;
            const _v15: any = rt.object(239, "number1");
            acc = _v15;
            const _v16: any = rt.object(239, "number2");
            acc = _v16;
            const _v17: any = rt.object(239, "number3");
            acc = _v17;
            const _v18: any = rt.object(239, "number4");
            acc = _v18;
            const _v19: any = 102;
            acc = _v19;
            const _v20: any = 1;
            acc = _v20;
            const _v21: any = 153;
            acc = _v21;
            const _v22: any = 69;
            acc = _v22;
            const _v23: any = 44;
            acc = _v23;
            const _v24: any = 0;
            acc = _v24;
            const _v25: any = 15;
            acc = _v25;
            const _v26: any = 0;
            acc = _v26;
            const _v27: any = 0;
            acc = _v27;
            const _v28: any = 0;
            acc = _v28;
            const _v29: any = 0;
            acc = _v29;
            const _v30: any = 1;
            acc = _v30;
            const _v31: any = this;
            acc = _v31;
            const _v32: any = await rt.send(_v31, "window", [_v14]);
            acc = _v32;
            const _v33: any = await rt.send(_v31, "add", [_v15, _v16, _v17, _v18]);
            acc = _v33;
            const _v34: any = await rt.send(_v31, "eachElementDo", [_v19, _v20]);
            acc = _v34;
            const _v35: any = await rt.send(_v31, "eachElementDo", [_v21]);
            acc = _v35;
            const _v36: any = await rt.send(_v31, "moveTo", [_v22, _v23]);
            acc = _v36;
            const _v37: any = await rt.send(_v31, "open", [_v24, _v25, _v26, _v27, _v28, _v29, _v30]);
            acc = _v37;
            const _v38: any = 239;
            acc = _v38;
            const _v39: any = 0;
            acc = _v39;
            const _v40: any = 105;
            acc = _v40;
            const _v41: any = 0;
            acc = _v41;
            const _v42: any = 100;
            acc = _v42;
            const _v43: any = 33;
            acc = _v43;
            const _v44: any = 20;
            acc = _v44;
            const _v45: any = 102;
            acc = _v45;
            const _v46: any = 0;
            acc = _v46;
            const _v47: any = 103;
            acc = _v47;
            const _v48: any = -1;
            acc = _v48;
            const _v49: any = await rt.call(239, "Display", [_v38, _v39, _v40, _v41, _v42, _v43, _v44, _v45, _v46, _v47, _v48], this);
            acc = _v49;
            const _v50: any = rt.get(this, "keyMouseList");
            acc = _v50;
            const _v51: any = rt.object(891, "KeyMouse");
            acc = _v51;
            const _v52: any = await rt.send(_v51, "setList", [_v50]);
            acc = _v52;
            const _v53: any = this;
            acc = _v53;
            const _v54: any = rt.get(this, "keyMouseList");
            acc = _v54;
            const _v55: any = rt.object(239, "number1");
            acc = _v55;
            const _v56: any = await rt.call(0, "proc0_9", [_v53, _v54, _v55], this);
            acc = _v56;
            const _v57: any = 1;
            acc = _v57;
            const _v58: any = rt.object(996, "User");
            acc = _v58;
            const _v59: any = await rt.send(_v58, "canControl", [_v57]);
            acc = _v59;
            const _v60: any = 0;
            acc = _v60;
            const _v61: any = 0;
            acc = _v61;
            const _v62: any = this;
            acc = _v62;
            const _v63: any = await rt.send(_v62, "doit", [_v60, _v61]);
            acc = _v63;
            const _v64: any = (temps[0] = _v63);
            acc = _v64;
            let _v65: any = acc;
            const _v66: any = (temps[0] ?? 0);
            acc = _v66;
            const _v67: any = await rt.call(239, "IsObject", [_v66], this);
            acc = _v67;
            _v65 = _v67;
            if (rt.truth(_v67)) {
              let _v68: any = acc;
              const _v69: any = (temps[0] ?? 0);
              acc = _v69;
              const _v70: any = this;
              acc = _v70;
              const _v71: any = await rt.send(_v70, "contains", [_v69]);
              acc = _v71;
              _v68 = _v71;
              if (rt.truth(_v71)) {
                const _v72: any = 0;
                acc = _v72;
                const _v73: any = (temps[0] = _v72);
                acc = _v73;
                _v68 = _v73;
              }
              acc = _v68;
              _v65 = _v68;
            } else {
              const _v74: any = 1;
              acc = _v74;
              const _v75: any = (temps[0] = _v74);
              acc = _v75;
              _v65 = _v75;
            }
            acc = _v65;
            let _v76: any = acc;
            const _v77: any = rt.get(this, "prevDialog");
            acc = _v77;
            _v76 = _v77;
            if (rt.truth(_v77)) {
              const _v78: any = rt.get(this, "prevDialog");
              acc = _v78;
              const _v79: any = await rt.send(_v78, "keyMouseList", []);
              acc = _v79;
              _v76 = _v79;
            } else {
              const _v80: any = rt.global(432);
              acc = _v80;
              _v76 = _v80;
            }
            acc = _v76;
            const _v81: any = rt.object(891, "KeyMouse");
            acc = _v81;
            const _v82: any = await rt.send(_v81, "setList", [_v76]);
            acc = _v82;
            const _v83: any = rt.get(this, "keyMouseList");
            acc = _v83;
            const _v84: any = await rt.send(_v83, "release", []);
            acc = _v84;
            const _v85: any = await rt.send(_v83, "dispose", []);
            acc = _v85;
            const _v86: any = rt.get(this, "prevDialog");
            acc = _v86;
            const _v87: any = rt.setGlobal(502, _v86);
            acc = _v87;
            const _v88: any = this;
            acc = _v88;
            const _v89: any = await rt.send(_v88, "dispose", []);
            acc = _v89;
            const _v90: any = (temps[0] ?? 0);
            acc = _v90;
            const _acc91: any = acc;
            const _v92: any = 239;
            acc = _v92;
            const _args93: any[] = [_v92];
            await rt.call(239, "DisposeScript", _args93, this);
            const _v94: any = _args93.length === 2 ? _args93[1] : _acc91;
            acc = _v94;
            return acc;
          },
        },
      },
      {
        name: "number1",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 35, "nsTop": 55, "nsLeft": 20, "loop": 3, "priority": 13},
        methods: {
          // SCI select1b.sc: number1.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 239, "name": "number1"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = rt.setGlobal(374, _v3);
            acc = _v4;
            const _v5: any = await rt.call(239, "localproc_0", [], this);
            acc = _v5;
            const _v6: any = (temps[0] ?? 0);
            acc = _v6;
            return _v6;
            return acc;
          },
        },
      },
      {
        name: "number2",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 35, "nsTop": 55, "nsLeft": 60, "loop": 3, "cel": 1, "priority": 13},
        methods: {
          // SCI select1b.sc: number2.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 239, "name": "number2"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.setGlobal(374, _v3);
            acc = _v4;
            const _v5: any = await rt.call(239, "localproc_0", [], this);
            acc = _v5;
            const _v6: any = (temps[0] ?? 0);
            acc = _v6;
            return _v6;
            return acc;
          },
        },
      },
      {
        name: "number3",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 35, "nsTop": 55, "nsLeft": 100, "loop": 3, "cel": 2, "priority": 13},
        methods: {
          // SCI select1b.sc: number3.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 239, "name": "number3"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 3;
            acc = _v3;
            const _v4: any = rt.setGlobal(374, _v3);
            acc = _v4;
            const _v5: any = await rt.call(239, "localproc_0", [], this);
            acc = _v5;
            const _v6: any = (temps[0] ?? 0);
            acc = _v6;
            return _v6;
            return acc;
          },
        },
      },
      {
        name: "number4",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 35, "nsTop": 55, "nsLeft": 140, "loop": 3, "cel": 3, "priority": 13},
        methods: {
          // SCI select1b.sc: number4.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 239, "name": "number4"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 4;
            acc = _v3;
            const _v4: any = rt.setGlobal(374, _v3);
            acc = _v4;
            const _v5: any = await rt.call(239, "localproc_0", [], this);
            acc = _v5;
            const _v6: any = (temps[0] ?? 0);
            acc = _v6;
            return _v6;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI select1b.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = (temps[0] = _v3);
        acc = _v4;
        _loop1: for (;;) {
          const _v5: any = (temps[0] ?? 0);
          acc = _v5;
          const _v6: any = rt.global(374);
          acc = _v6;
          const _v7: any = rt.op("<", ...[_v5, _v6]);
          acc = _v7;
          if (!rt.truth(_v7)) break _loop1;
          _continue2: {
            const _v8: any = 1;
            acc = _v8;
            const _v9: any = (temps[0] ?? 0);
            acc = _v9;
            const _v10: any = 1;
            acc = _v10;
            const _v11: any = 2;
            acc = _v11;
            const _v12: any = await rt.call(239, "ScriptID", [_v10, _v11], this);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "at", [_v9]);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "playing", [_v8]);
            acc = _v14;
          }
          const _v15: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
          acc = _v15;
        }
        return acc;
      },
    },
    exports: {"0": "select1b"},
  });
}
