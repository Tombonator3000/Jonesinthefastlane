// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/goalsDefine.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 4aef20fd4af9ba58aa23eff8fe41958f2a334de3162232a5564faa5a4b5d4999
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(229, {
    name: "goalsDefine",
    uses: [0, 255, 891, 999],
    locals: [0],
    objects: [
      {
        name: "dKeyMouse",
        className: "Set",
        parent: {"script": 999, "name": "Set"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
      {
        name: "goalsDefine",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI goalsDefine.sc: goalsDefine.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = 1;
            acc = _v1;
            const _v2: any = await rt.call(0, "proc0_17", [_v1], this);
            acc = _v2;
            const _v3: any = rt.object(229, "dKeyMouse");
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
            const _v9: any = await rt.call(0, "proc0_7", [], this);
            acc = _v9;
            const _v10: any = 0;
            acc = _v10;
            const _v11: any = rt.set(this, "client", _v10);
            acc = _v11;
            const _v12: any = rt.global(59);
            acc = _v12;
            const _v13: any = rt.object(229, "background");
            acc = _v13;
            const _v14: any = rt.object(229, "theTitle");
            acc = _v14;
            const _v15: any = rt.object(229, "corner1");
            acc = _v15;
            const _v16: any = rt.object(229, "corner2");
            acc = _v16;
            const _v17: any = rt.object(229, "corner3");
            acc = _v17;
            const _v18: any = rt.object(229, "corner4");
            acc = _v18;
            const _v19: any = rt.object(229, "textOne");
            acc = _v19;
            const _v20: any = rt.object(229, "rightArrow");
            acc = _v20;
            const _v21: any = rt.object(229, "doneButton");
            acc = _v21;
            const _v22: any = 102;
            acc = _v22;
            const _v23: any = 1;
            acc = _v23;
            const _v24: any = 153;
            acc = _v24;
            const _v25: any = 69;
            acc = _v25;
            const _v26: any = 44;
            acc = _v26;
            const _v27: any = 0;
            acc = _v27;
            const _v28: any = 15;
            acc = _v28;
            const _v29: any = this;
            acc = _v29;
            const _v30: any = await rt.send(_v29, "window", [_v12]);
            acc = _v30;
            const _v31: any = await rt.send(_v29, "add", [_v13, _v14, _v15, _v16, _v17, _v18, _v19, _v20, _v21]);
            acc = _v31;
            const _v32: any = await rt.send(_v29, "eachElementDo", [_v22, _v23]);
            acc = _v32;
            const _v33: any = await rt.send(_v29, "eachElementDo", [_v24]);
            acc = _v33;
            const _v34: any = await rt.send(_v29, "moveTo", [_v25, _v26]);
            acc = _v34;
            const _v35: any = await rt.send(_v29, "open", [_v27, _v28]);
            acc = _v35;
            const _v36: any = rt.object(891, "KeyMouse");
            acc = _v36;
            const _v37: any = await rt.send(_v36, "curItem", []);
            acc = _v37;
            const _v38: any = (temps[1] = _v37);
            acc = _v38;
            const _v39: any = this;
            acc = _v39;
            const _v40: any = rt.get(this, "keyMouseList");
            acc = _v40;
            const _v41: any = rt.object(229, "doneButton");
            acc = _v41;
            const _v42: any = await rt.call(0, "proc0_9", [_v39, _v40, _v41], this);
            acc = _v42;
            const _v43: any = rt.get(this, "keyMouseList");
            acc = _v43;
            const _v44: any = rt.object(891, "KeyMouse");
            acc = _v44;
            const _v45: any = await rt.send(_v44, "setList", [_v43]);
            acc = _v45;
            const _v46: any = 0;
            acc = _v46;
            const _v47: any = 0;
            acc = _v47;
            const _v48: any = this;
            acc = _v48;
            const _v49: any = await rt.send(_v48, "doit", [_v46, _v47]);
            acc = _v49;
            const _v50: any = (temps[0] = _v49);
            acc = _v50;
            let _v51: any = acc;
            const _v52: any = (temps[0] ?? 0);
            acc = _v52;
            const _v53: any = await rt.call(229, "IsObject", [_v52], this);
            acc = _v53;
            _v51 = _v53;
            if (rt.truth(_v53)) {
              let _v54: any = acc;
              const _v55: any = (temps[0] ?? 0);
              acc = _v55;
              const _v56: any = this;
              acc = _v56;
              const _v57: any = await rt.send(_v56, "contains", [_v55]);
              acc = _v57;
              _v54 = _v57;
              if (rt.truth(_v57)) {
                const _v58: any = 0;
                acc = _v58;
                const _v59: any = (temps[0] = _v58);
                acc = _v59;
                _v54 = _v59;
              }
              acc = _v54;
              _v51 = _v54;
            } else {
              const _v60: any = 1;
              acc = _v60;
              const _v61: any = (temps[0] = _v60);
              acc = _v61;
              _v51 = _v61;
            }
            acc = _v51;
            let _v62: any = acc;
            const _v63: any = rt.get(this, "prevDialog");
            acc = _v63;
            _v62 = _v63;
            if (rt.truth(_v63)) {
              const _v64: any = rt.get(this, "prevDialog");
              acc = _v64;
              const _v65: any = await rt.send(_v64, "keyMouseList", []);
              acc = _v65;
              _v62 = _v65;
            } else {
              const _v66: any = rt.global(432);
              acc = _v66;
              _v62 = _v66;
            }
            acc = _v62;
            const _v67: any = rt.object(891, "KeyMouse");
            acc = _v67;
            const _v68: any = await rt.send(_v67, "setList", [_v62]);
            acc = _v68;
            const _v69: any = (temps[1] ?? 0);
            acc = _v69;
            const _v70: any = rt.object(891, "KeyMouse");
            acc = _v70;
            const _v71: any = await rt.send(_v70, "curItem", [_v69]);
            acc = _v71;
            let _v72: any = acc;
            const _v73: any = rt.global(447);
            acc = _v73;
            _v72 = _v73;
            if (rt.truth(_v73)) {
              const _v74: any = (temps[1] ?? 0);
              acc = _v74;
              const _v75: any = rt.object(891, "KeyMouse");
              acc = _v75;
              const _v76: any = await rt.send(_v75, "setCursor", [_v74]);
              acc = _v76;
              _v72 = _v76;
            }
            acc = _v72;
            const _v77: any = rt.get(this, "keyMouseList");
            acc = _v77;
            const _v78: any = await rt.send(_v77, "release", []);
            acc = _v78;
            const _v79: any = await rt.send(_v77, "dispose", []);
            acc = _v79;
            const _v80: any = this;
            acc = _v80;
            const _v81: any = 291;
            acc = _v81;
            const _v82: any = await rt.call(0, "proc0_15", [_v80, _v81], this);
            acc = _v82;
            const _v83: any = rt.get(this, "prevDialog");
            acc = _v83;
            const _v84: any = rt.setGlobal(502, _v83);
            acc = _v84;
            const _v85: any = this;
            acc = _v85;
            const _v86: any = await rt.send(_v85, "dispose", []);
            acc = _v86;
            const _v87: any = 0;
            acc = _v87;
            const _v88: any = await rt.call(0, "proc0_17", [_v87], this);
            acc = _v88;
            const _v89: any = 11;
            acc = _v89;
            const _v90: any = rt.get(this, "nsTop");
            acc = _v90;
            const _v91: any = 1;
            acc = _v91;
            const _v92: any = rt.op("+", ...[_v90, _v91]);
            acc = _v92;
            const _v93: any = rt.get(this, "nsLeft");
            acc = _v93;
            const _v94: any = rt.get(this, "nsBottom");
            acc = _v94;
            const _v95: any = 1;
            acc = _v95;
            const _v96: any = rt.op("-", ...[_v94, _v95]);
            acc = _v96;
            const _v97: any = rt.get(this, "nsRight");
            acc = _v97;
            const _v98: any = 3;
            acc = _v98;
            const _v99: any = rt.op("-", ...[_v97, _v98]);
            acc = _v99;
            const _v100: any = 2;
            acc = _v100;
            const _v101: any = 0;
            acc = _v101;
            const _v102: any = 0;
            acc = _v102;
            const _v103: any = await rt.call(229, "Graph", [_v89, _v92, _v93, _v96, _v99, _v100, _v101, _v102], this);
            acc = _v103;
            const _v104: any = (temps[0] ?? 0);
            acc = _v104;
            const _acc105: any = acc;
            const _v106: any = 229;
            acc = _v106;
            const _args107: any[] = [_v106];
            await rt.call(229, "DisposeScript", _args107, this);
            const _v108: any = _args107.length === 2 ? _args107[1] : _acc105;
            acc = _v108;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 501, "loop": 4},
        methods: {
        },
      },
      {
        name: "doneButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 106, "view": 250, "loop": 2},
        methods: {
        },
      },
      {
        name: "rightArrow",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 47, "view": 250, "loop": 8},
        methods: {
          // SCI goalsDefine.sc: rightArrow.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 229, "name": "rightArrow"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.setLocal(229, 0, rt.op("+", rt.local(229, 0), 1));
            acc = _v4;
            const _v5: any = 3;
            acc = _v5;
            const _v6: any = rt.op(">", ...[_v4, _v5]);
            acc = _v6;
            _v3 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = rt.setLocal(229, 0, _v7);
              acc = _v8;
              _v3 = _v8;
            }
            acc = _v3;
            const _v9: any = await rt.call(229, "localproc_0", [], this);
            acc = _v9;
            const _v10: any = (temps[0] ?? 0);
            acc = _v10;
            return _v10;
            return acc;
          },
        },
      },
      {
        name: "corner1",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 501, "loop": 6},
        methods: {
        },
      },
      {
        name: "corner2",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsLeft": 147, "view": 501, "loop": 6},
        methods: {
        },
      },
      {
        name: "corner3",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 88, "view": 501, "loop": 6},
        methods: {
        },
      },
      {
        name: "corner4",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 88, "nsLeft": 147, "view": 501, "loop": 6},
        methods: {
        },
      },
      {
        name: "theTitle",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 4, "nsLeft": 41, "view": 501, "loop": 5},
        methods: {
        },
      },
      {
        name: "textOne",
        className: "DText",
        parent: {"script": 255, "name": "DText"},
        isClass: false,
        properties: {"nsTop": 30, "nsLeft": 6, "text": "Wealth is defined as the total accumulation of money, savings, and investments. Try the stock market, and be on the watch for Wild Willy. And most importantly... sorry, out of room.", "font": 4},
        methods: {
          // SCI goalsDefine.sc: textOne.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            const _v3: any = rt.get(this, "text");
            acc = _v3;
            const _v4: any = 105;
            acc = _v4;
            const _v5: any = rt.get(this, "font");
            acc = _v5;
            const _v6: any = 100;
            acc = _v6;
            const _v7: any = rt.get(this, "nsLeft");
            acc = _v7;
            const _v8: any = rt.get(this, "nsTop");
            acc = _v8;
            const _v9: any = 102;
            acc = _v9;
            const _v10: any = 0;
            acc = _v10;
            const _v11: any = 103;
            acc = _v11;
            let _v12: any = acc;
            const _v13: any = rt.global(535);
            acc = _v13;
            _v12 = _v13;
            if (rt.truth(_v13)) {
              const _v14: any = 99;
              acc = _v14;
              _v12 = _v14;
            } else {
              const _v15: any = 9;
              acc = _v15;
              _v12 = _v15;
            }
            acc = _v12;
            const _v16: any = 106;
            acc = _v16;
            const _v17: any = 171;
            acc = _v17;
            const _v18: any = 101;
            acc = _v18;
            const _v19: any = 1;
            acc = _v19;
            const _v20: any = await rt.call(229, "Display", [_v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v16, _v17, _v18, _v19], this);
            acc = _v20;
            const _v21: any = this;
            acc = _v21;
            const _v22: any = await rt.send(_v21, "resetPort", []);
            acc = _v22;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI goalsDefine.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.object(229, "textOne");
        acc = _v1;
        const _v2: any = await rt.send(_v1, "erase", []);
        acc = _v2;
        const _v3: any = rt.local(229, 0);
        acc = _v3;
        const _v4: any = rt.object(229, "theTitle");
        acc = _v4;
        const _v5: any = await rt.send(_v4, "cel", [_v3]);
        acc = _v5;
        const _v6: any = await rt.send(_v4, "draw", []);
        acc = _v6;
        const _v7: any = rt.local(229, 0);
        acc = _v7;
        const _v8: any = rt.object(229, "corner1");
        acc = _v8;
        const _v9: any = await rt.send(_v8, "cel", [_v7]);
        acc = _v9;
        const _v10: any = await rt.send(_v8, "draw", []);
        acc = _v10;
        const _v11: any = rt.local(229, 0);
        acc = _v11;
        const _v12: any = rt.object(229, "corner2");
        acc = _v12;
        const _v13: any = await rt.send(_v12, "cel", [_v11]);
        acc = _v13;
        const _v14: any = await rt.send(_v12, "draw", []);
        acc = _v14;
        const _v15: any = rt.local(229, 0);
        acc = _v15;
        const _v16: any = rt.object(229, "corner3");
        acc = _v16;
        const _v17: any = await rt.send(_v16, "cel", [_v15]);
        acc = _v17;
        const _v18: any = await rt.send(_v16, "draw", []);
        acc = _v18;
        const _v19: any = rt.local(229, 0);
        acc = _v19;
        const _v20: any = rt.object(229, "corner4");
        acc = _v20;
        const _v21: any = await rt.send(_v20, "cel", [_v19]);
        acc = _v21;
        const _v22: any = await rt.send(_v20, "draw", []);
        acc = _v22;
        let _v23: any = acc;
        const _v24: any = rt.local(229, 0);
        acc = _v24;
        _branch25: {
          const _v26: any = 0;
          acc = _v26;
          _v23 = rt.op("==", _v24, _v26);
          acc = _v23;
          if (rt.truth(_v23)) {
            const _v27: any = "Wealth is defined as the total accumulation of money, savings, and investments. Try the stock market, and be on the watch for Wild Willy. And most importantly... sorry, out of room.";
            acc = _v27;
            const _v28: any = rt.object(229, "textOne");
            acc = _v28;
            const _v29: any = await rt.send(_v28, "text", [_v27]);
            acc = _v29;
            _v23 = _v29;
            break _branch25;
          }
          const _v30: any = 1;
          acc = _v30;
          _v23 = rt.op("==", _v24, _v30);
          acc = _v23;
          if (rt.truth(_v23)) {
            const _v31: any = "Happiness is accumulated by acquiring goods, achieving goals, taking time off from work, and helping little old ladies cross the street so that they don't get hit by any speeding marbles.";
            acc = _v31;
            const _v32: any = rt.object(229, "textOne");
            acc = _v32;
            const _v33: any = await rt.send(_v32, "text", [_v31]);
            acc = _v33;
            _v23 = _v33;
            break _branch25;
          }
          const _v34: any = 2;
          acc = _v34;
          _v23 = rt.op("==", _v24, _v34);
          acc = _v23;
          if (rt.truth(_v23)) {
            const _v35: any = "Education is accumulated by attending the university and graduating from the classes offered. A computer and some reference books can be very beneficial to your studies.";
            acc = _v35;
            const _v36: any = rt.object(229, "textOne");
            acc = _v36;
            const _v37: any = await rt.send(_v36, "text", [_v35]);
            acc = _v37;
            _v23 = _v37;
            break _branch25;
          }
          const _v38: any = 3;
          acc = _v38;
          _v23 = rt.op("==", _v24, _v38);
          acc = _v23;
          if (rt.truth(_v23)) {
            const _v39: any = "Career is achieved by working hard, climbing the corporate ladder, improving your skills, dependability, and advancing your education. Remember, hire a kid, they have all the answers.";
            acc = _v39;
            const _v40: any = rt.object(229, "textOne");
            acc = _v40;
            const _v41: any = await rt.send(_v40, "text", [_v39]);
            acc = _v41;
            _v23 = _v41;
            break _branch25;
          }
        }
        acc = _v23;
        const _v42: any = rt.object(229, "textOne");
        acc = _v42;
        const _v43: any = await rt.send(_v42, "draw", []);
        acc = _v43;
        return acc;
      },
    },
    exports: {"0": "goalsDefine"},
  });
}
