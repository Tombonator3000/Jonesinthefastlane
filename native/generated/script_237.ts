// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/select4.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: ee902418305c47cc7474f8fc3e720d417647e971e00e18e24a2ee62d1a87aecf
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(237, {
    name: "select4",
    uses: [0, 255, 891, 996, 999],
    locals: [0, 0],
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
        name: "select4",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI select4.sc: select4.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = await rt.call(0, "proc0_17", [_v1], this);
            acc = _v2;
            const _v3: any = rt.object(237, "dialogKeyMouse");
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
            const _v10: any = rt.set(this, "client", _v9);
            acc = _v10;
            const _v11: any = rt.setGlobal(413, _v10);
            acc = _v11;
            const _v12: any = await rt.call(0, "proc0_7", [], this);
            acc = _v12;
            const _v13: any = rt.global(59);
            acc = _v13;
            const _v14: any = rt.object(237, "background");
            acc = _v14;
            const _v15: any = rt.object(237, "yesButton");
            acc = _v15;
            const _v16: any = rt.object(237, "noButton");
            acc = _v16;
            const _v17: any = rt.object(237, "questionText1");
            acc = _v17;
            const _v18: any = 102;
            acc = _v18;
            const _v19: any = 1;
            acc = _v19;
            const _v20: any = 153;
            acc = _v20;
            const _v21: any = 69;
            acc = _v21;
            const _v22: any = 44;
            acc = _v22;
            const _v23: any = 0;
            acc = _v23;
            const _v24: any = 15;
            acc = _v24;
            const _v25: any = 0;
            acc = _v25;
            const _v26: any = 0;
            acc = _v26;
            const _v27: any = 0;
            acc = _v27;
            const _v28: any = 0;
            acc = _v28;
            const _v29: any = 1;
            acc = _v29;
            const _v30: any = this;
            acc = _v30;
            const _v31: any = await rt.send(_v30, "window", [_v13]);
            acc = _v31;
            const _v32: any = await rt.send(_v30, "add", [_v14, _v15, _v16, _v17]);
            acc = _v32;
            const _v33: any = await rt.send(_v30, "eachElementDo", [_v18, _v19]);
            acc = _v33;
            const _v34: any = await rt.send(_v30, "eachElementDo", [_v20]);
            acc = _v34;
            const _v35: any = await rt.send(_v30, "moveTo", [_v21, _v22]);
            acc = _v35;
            const _v36: any = await rt.send(_v30, "open", [_v23, _v24, _v25, _v26, _v27, _v28, _v29]);
            acc = _v36;
            const _v37: any = rt.get(this, "keyMouseList");
            acc = _v37;
            const _v38: any = rt.object(891, "KeyMouse");
            acc = _v38;
            const _v39: any = await rt.send(_v38, "setList", [_v37]);
            acc = _v39;
            const _v40: any = this;
            acc = _v40;
            const _v41: any = rt.get(this, "keyMouseList");
            acc = _v41;
            const _v42: any = rt.object(237, "yesButton");
            acc = _v42;
            const _v43: any = await rt.call(0, "proc0_9", [_v40, _v41, _v42], this);
            acc = _v43;
            const _v44: any = 1;
            acc = _v44;
            const _v45: any = rt.object(996, "User");
            acc = _v45;
            const _v46: any = await rt.send(_v45, "canControl", [_v44]);
            acc = _v46;
            const _v47: any = 0;
            acc = _v47;
            const _v48: any = 0;
            acc = _v48;
            const _v49: any = this;
            acc = _v49;
            const _v50: any = await rt.send(_v49, "doit", [_v47, _v48]);
            acc = _v50;
            const _v51: any = (temps[0] = _v50);
            acc = _v51;
            let _v52: any = acc;
            const _v53: any = (temps[0] ?? 0);
            acc = _v53;
            const _v54: any = await rt.call(237, "IsObject", [_v53], this);
            acc = _v54;
            _v52 = _v54;
            if (rt.truth(_v54)) {
              let _v55: any = acc;
              const _v56: any = (temps[0] ?? 0);
              acc = _v56;
              const _v57: any = this;
              acc = _v57;
              const _v58: any = await rt.send(_v57, "contains", [_v56]);
              acc = _v58;
              _v55 = _v58;
              if (rt.truth(_v58)) {
                const _v59: any = 0;
                acc = _v59;
                const _v60: any = (temps[0] = _v59);
                acc = _v60;
                _v55 = _v60;
              }
              acc = _v55;
              _v52 = _v55;
            } else {
              const _v61: any = 1;
              acc = _v61;
              const _v62: any = (temps[0] = _v61);
              acc = _v62;
              _v52 = _v62;
            }
            acc = _v52;
            let _v63: any = acc;
            const _v64: any = rt.get(this, "prevDialog");
            acc = _v64;
            _v63 = _v64;
            if (rt.truth(_v64)) {
              const _v65: any = rt.get(this, "prevDialog");
              acc = _v65;
              const _v66: any = await rt.send(_v65, "keyMouseList", []);
              acc = _v66;
              _v63 = _v66;
            } else {
              const _v67: any = rt.global(432);
              acc = _v67;
              _v63 = _v67;
            }
            acc = _v63;
            const _v68: any = rt.object(891, "KeyMouse");
            acc = _v68;
            const _v69: any = await rt.send(_v68, "setList", [_v63]);
            acc = _v69;
            const _v70: any = rt.get(this, "keyMouseList");
            acc = _v70;
            const _v71: any = await rt.send(_v70, "release", []);
            acc = _v71;
            const _v72: any = rt.get(this, "prevDialog");
            acc = _v72;
            const _v73: any = rt.setGlobal(502, _v72);
            acc = _v73;
            const _v74: any = rt.get(this, "keyMouseList");
            acc = _v74;
            const _v75: any = await rt.send(_v74, "dispose", []);
            acc = _v75;
            const _v76: any = this;
            acc = _v76;
            const _v77: any = await rt.send(_v76, "dispose", []);
            acc = _v77;
            const _v78: any = (temps[0] ?? 0);
            acc = _v78;
            const _acc79: any = acc;
            const _v80: any = 237;
            acc = _v80;
            const _args81: any[] = [_v80];
            await rt.call(237, "DisposeScript", _args81, this);
            const _v82: any = _args81.length === 2 ? _args81[1] : _acc79;
            acc = _v82;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 11, "priority": 12},
        methods: {
        },
      },
      {
        name: "questionText1",
        className: "DText",
        parent: {"script": 255, "name": "DText"},
        isClass: false,
        properties: {"nsTop": 28, "nsLeft": 55, "text": " Would you like to\n\nchallenge Jones?"},
        methods: {
          // SCI select4.sc: questionText1.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let _v1: any = acc;
            const _v2: any = rt.local(237, 0);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = rt.setLocal(237, 0, rt.op("+", rt.local(237, 0), 1));
              acc = _v4;
              _v1 = _v4;
              const _v5: any = this;
              acc = _v5;
              const _v6: any = await rt.send(_v5, "setPort", []);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = rt.ref("array", temps, 0);
              acc = _v7;
              const _v8: any = 237;
              acc = _v8;
              const _v9: any = 0;
              acc = _v9;
              const _v10: any = rt.get(this, "text");
              acc = _v10;
              const _v11: any = await rt.call(237, "Format", [_v7, _v8, _v9, _v10], this);
              acc = _v11;
              const _v12: any = 105;
              acc = _v12;
              const _v13: any = 0;
              acc = _v13;
              const _v14: any = 100;
              acc = _v14;
              const _v15: any = rt.get(this, "nsLeft");
              acc = _v15;
              const _v16: any = rt.get(this, "nsTop");
              acc = _v16;
              const _v17: any = 102;
              acc = _v17;
              let _v18: any = acc;
              const _v19: any = rt.global(535);
              acc = _v19;
              _v18 = _v19;
              if (rt.truth(_v19)) {
                const _v20: any = 128;
                acc = _v20;
                _v18 = _v20;
              } else {
                const _v21: any = 14;
                acc = _v21;
                _v18 = _v21;
              }
              acc = _v18;
              const _v22: any = 103;
              acc = _v22;
              let _v23: any = acc;
              const _v24: any = rt.global(535);
              acc = _v24;
              _v23 = _v24;
              if (rt.truth(_v24)) {
                const _v25: any = 79;
                acc = _v25;
                _v23 = _v25;
              } else {
                const _v26: any = 9;
                acc = _v26;
                _v23 = _v26;
              }
              acc = _v23;
              const _v27: any = 106;
              acc = _v27;
              const _v28: any = 125;
              acc = _v28;
              const _v29: any = await rt.call(237, "Display", [_v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18, _v22, _v23, _v27, _v28], this);
              acc = _v29;
              _v1 = _v29;
              const _v30: any = this;
              acc = _v30;
              const _v31: any = await rt.send(_v30, "resetPort", []);
              acc = _v31;
              _v1 = _v31;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "questionText2",
        className: "DText",
        parent: {"script": 255, "name": "DText"},
        isClass: false,
        properties: {"nsTop": 28, "nsLeft": 55, "text": "    Would you\n\n   like Jones to:"},
        methods: {
          // SCI select4.sc: questionText2.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let _v1: any = acc;
            const _v2: any = rt.local(237, 1);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = rt.setLocal(237, 1, rt.op("+", rt.local(237, 1), 1));
              acc = _v4;
              _v1 = _v4;
              const _v5: any = this;
              acc = _v5;
              const _v6: any = await rt.send(_v5, "setPort", []);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = rt.ref("array", temps, 0);
              acc = _v7;
              const _v8: any = 237;
              acc = _v8;
              const _v9: any = 0;
              acc = _v9;
              const _v10: any = rt.get(this, "text");
              acc = _v10;
              const _v11: any = await rt.call(237, "Format", [_v7, _v8, _v9, _v10], this);
              acc = _v11;
              const _v12: any = 105;
              acc = _v12;
              const _v13: any = 0;
              acc = _v13;
              const _v14: any = 100;
              acc = _v14;
              const _v15: any = rt.get(this, "nsLeft");
              acc = _v15;
              const _v16: any = rt.get(this, "nsTop");
              acc = _v16;
              const _v17: any = 102;
              acc = _v17;
              let _v18: any = acc;
              const _v19: any = rt.global(535);
              acc = _v19;
              _v18 = _v19;
              if (rt.truth(_v19)) {
                const _v20: any = 128;
                acc = _v20;
                _v18 = _v20;
              } else {
                const _v21: any = 14;
                acc = _v21;
                _v18 = _v21;
              }
              acc = _v18;
              const _v22: any = 103;
              acc = _v22;
              let _v23: any = acc;
              const _v24: any = rt.global(535);
              acc = _v24;
              _v23 = _v24;
              if (rt.truth(_v24)) {
                const _v25: any = 79;
                acc = _v25;
                _v23 = _v25;
              } else {
                const _v26: any = 9;
                acc = _v26;
                _v23 = _v26;
              }
              acc = _v23;
              const _v27: any = 106;
              acc = _v27;
              const _v28: any = 125;
              acc = _v28;
              const _v29: any = await rt.call(237, "Display", [_v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18, _v22, _v23, _v27, _v28], this);
              acc = _v29;
              _v1 = _v29;
              const _v30: any = this;
              acc = _v30;
              const _v31: any = await rt.send(_v30, "resetPort", []);
              acc = _v31;
              _v1 = _v31;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "yesButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 62, "nsLeft": 80, "view": 10, "loop": 3, "priority": 13},
        methods: {
          // SCI select4.sc: yesButton.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 237, "name": "yesButton"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.setGlobal(374, _v3);
            acc = _v4;
            const _v5: any = 4;
            acc = _v5;
            const _v6: any = rt.setGlobal(507, _v5);
            acc = _v6;
            const _v7: any = 29;
            acc = _v7;
            const _v8: any = 1;
            acc = _v8;
            const _v9: any = 1;
            acc = _v9;
            const _v10: any = 2;
            acc = _v10;
            const _v11: any = await rt.call(237, "ScriptID", [_v9, _v10], this);
            acc = _v11;
            const _v12: any = await rt.send(_v11, "at", [_v8]);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "playing", [_v7]);
            acc = _v13;
            const _v14: any = rt.get(this, "species");
            acc = _v14;
            const _v15: any = 0;
            acc = _v15;
            const _v16: any = this;
            acc = _v16;
            const _v17: any = await rt.send(_v16, "erase", [_v14, _v15]);
            acc = _v17;
            const _v18: any = rt.object(237, "noButton");
            acc = _v18;
            const _v19: any = await rt.send(_v18, "erase", []);
            acc = _v19;
            const _v20: any = rt.object(237, "questionText1");
            acc = _v20;
            const _v21: any = this;
            acc = _v21;
            const _v22: any = rt.object(237, "noButton");
            acc = _v22;
            const _v23: any = rt.object(237, "questionText2");
            acc = _v23;
            const _v24: any = rt.object(237, "takeItEasy");
            acc = _v24;
            const _v25: any = rt.object(237, "playFair");
            acc = _v25;
            const _v26: any = rt.object(237, "goForBroke");
            acc = _v26;
            const _v27: any = rt.object(237, "select4");
            acc = _v27;
            const _v28: any = await rt.send(_v27, "delete", [_v20, _v21, _v22]);
            acc = _v28;
            const _v29: any = await rt.send(_v27, "add", [_v23, _v24, _v25, _v26]);
            acc = _v29;
            const _v30: any = 1;
            acc = _v30;
            const _v31: any = rt.object(237, "playFair");
            acc = _v31;
            const _v32: any = await rt.send(_v31, "select", [_v30]);
            acc = _v32;
            const _v33: any = rt.object(237, "playFair");
            acc = _v33;
            const _v34: any = rt.object(237, "select4");
            acc = _v34;
            const _v35: any = await rt.send(_v34, "theItem", [_v33]);
            acc = _v35;
            const _v36: any = 1;
            acc = _v36;
            const _v37: any = rt.object(237, "takeItEasy");
            acc = _v37;
            const _v38: any = await rt.send(_v37, "init", [_v36]);
            acc = _v38;
            const _v39: any = await rt.send(_v37, "setSize", []);
            acc = _v39;
            const _v40: any = await rt.send(_v37, "draw", []);
            acc = _v40;
            const _v41: any = 1;
            acc = _v41;
            const _v42: any = rt.object(237, "playFair");
            acc = _v42;
            const _v43: any = await rt.send(_v42, "init", [_v41]);
            acc = _v43;
            const _v44: any = await rt.send(_v42, "setSize", []);
            acc = _v44;
            const _v45: any = await rt.send(_v42, "draw", []);
            acc = _v45;
            const _v46: any = 1;
            acc = _v46;
            const _v47: any = rt.object(237, "goForBroke");
            acc = _v47;
            const _v48: any = await rt.send(_v47, "init", [_v46]);
            acc = _v48;
            const _v49: any = await rt.send(_v47, "setSize", []);
            acc = _v49;
            const _v50: any = await rt.send(_v47, "draw", []);
            acc = _v50;
            const _v51: any = 1;
            acc = _v51;
            const _v52: any = rt.object(237, "questionText2");
            acc = _v52;
            const _v53: any = await rt.send(_v52, "init", [_v51]);
            acc = _v53;
            const _v54: any = await rt.send(_v52, "setSize", []);
            acc = _v54;
            const _v55: any = await rt.send(_v52, "draw", []);
            acc = _v55;
            const _v56: any = rt.object(237, "dialogKeyMouse");
            acc = _v56;
            const _v57: any = await rt.send(_v56, "release", []);
            acc = _v57;
            const _v58: any = rt.object(237, "select4");
            acc = _v58;
            const _v59: any = rt.object(237, "dialogKeyMouse");
            acc = _v59;
            const _v60: any = rt.object(237, "playFair");
            acc = _v60;
            const _v61: any = await rt.call(0, "proc0_9", [_v58, _v59, _v60], this);
            acc = _v61;
            const _v62: any = (temps[0] ?? 0);
            acc = _v62;
            return _v62;
            return acc;
          },
        },
      },
      {
        name: "noButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 87, "nsLeft": 80, "view": 10, "loop": 3, "cel": 1, "priority": 13},
        methods: {
        },
      },
      {
        name: "takeItEasy",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 35, "nsTop": 57, "nsLeft": 67, "view": 10, "loop": 2, "priority": 13},
        methods: {
          // SCI select4.sc: takeItEasy.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 237, "name": "takeItEasy"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 10;
            acc = _v3;
            const _v4: any = await rt.call(237, "localproc_0", [_v3], this);
            acc = _v4;
            const _v5: any = (temps[0] ?? 0);
            acc = _v5;
            return _v5;
            return acc;
          },
        },
      },
      {
        name: "playFair",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 35, "nsTop": 74, "nsLeft": 67, "view": 10, "loop": 2, "cel": 1, "priority": 13},
        methods: {
          // SCI select4.sc: playFair.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 237, "name": "playFair"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = await rt.call(237, "localproc_0", [_v3], this);
            acc = _v4;
            const _v5: any = (temps[0] ?? 0);
            acc = _v5;
            return _v5;
            return acc;
          },
        },
      },
      {
        name: "goForBroke",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 35, "nsTop": 91, "nsLeft": 67, "view": 10, "loop": 2, "cel": 2, "priority": 13},
        methods: {
          // SCI select4.sc: goForBroke.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 237, "name": "goForBroke"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = -10;
            acc = _v3;
            const _v4: any = await rt.call(237, "localproc_0", [_v3], this);
            acc = _v4;
            const _v5: any = (temps[0] ?? 0);
            acc = _v5;
            return _v5;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI select4.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = 0;
        acc = _v1;
        const _v2: any = 1;
        acc = _v2;
        const _v3: any = 2;
        acc = _v3;
        const _v4: any = await rt.call(237, "ScriptID", [_v2, _v3], this);
        acc = _v4;
        const _v5: any = await rt.send(_v4, "at", [_v1]);
        acc = _v5;
        const _v6: any = (temps[0] = _v5);
        acc = _v6;
        const _v7: any = (temps[0] ?? 0);
        acc = _v7;
        const _v8: any = await rt.send(_v7, "monGoal", []);
        acc = _v8;
        const _v9: any = (temps[0] ?? 0);
        acc = _v9;
        const _v10: any = await rt.send(_v9, "hapGoal", []);
        acc = _v10;
        const _v11: any = (temps[0] ?? 0);
        acc = _v11;
        const _v12: any = await rt.send(_v11, "eduGoal", []);
        acc = _v12;
        const _v13: any = (temps[0] ?? 0);
        acc = _v13;
        const _v14: any = await rt.send(_v13, "carGoal", []);
        acc = _v14;
        const _v15: any = rt.op("+", ...[_v8, _v10, _v12, _v14]);
        acc = _v15;
        const _v16: any = (temps[2] = _v15);
        acc = _v16;
        const _v17: any = 1;
        acc = _v17;
        const _v18: any = 1;
        acc = _v18;
        const _v19: any = 2;
        acc = _v19;
        const _v20: any = await rt.call(237, "ScriptID", [_v18, _v19], this);
        acc = _v20;
        const _v21: any = await rt.send(_v20, "at", [_v17]);
        acc = _v21;
        const _v22: any = (temps[1] = _v21);
        acc = _v22;
        const _v23: any = 1;
        acc = _v23;
        const _v24: any = (temps[1] ?? 0);
        acc = _v24;
        const _v25: any = await rt.send(_v24, "playingAsJones", [_v23]);
        acc = _v25;
        const _v26: any = (temps[0] ?? 0);
        acc = _v26;
        const _v27: any = await rt.send(_v26, "monGoal", []);
        acc = _v27;
        const _v28: any = (args[0] ?? 0);
        acc = _v28;
        const _v29: any = rt.op("+", ...[_v27, _v28]);
        acc = _v29;
        const _v30: any = (temps[1] ?? 0);
        acc = _v30;
        const _v31: any = await rt.send(_v30, "monGoal", [_v29]);
        acc = _v31;
        let _v32: any = acc;
        const _v33: any = (temps[1] ?? 0);
        acc = _v33;
        const _v34: any = await rt.send(_v33, "monGoal", []);
        acc = _v34;
        const _v35: any = 100;
        acc = _v35;
        const _v36: any = rt.op(">", ...[_v34, _v35]);
        acc = _v36;
        _v32 = _v36;
        if (rt.truth(_v36)) {
          const _v37: any = 100;
          acc = _v37;
          const _v38: any = (temps[1] ?? 0);
          acc = _v38;
          const _v39: any = await rt.send(_v38, "monGoal", [_v37]);
          acc = _v39;
          _v32 = _v39;
        }
        acc = _v32;
        let _v40: any = acc;
        const _v41: any = (temps[1] ?? 0);
        acc = _v41;
        const _v42: any = await rt.send(_v41, "monGoal", []);
        acc = _v42;
        const _v43: any = 10;
        acc = _v43;
        const _v44: any = rt.op("<", ...[_v42, _v43]);
        acc = _v44;
        _v40 = _v44;
        if (rt.truth(_v44)) {
          const _v45: any = 10;
          acc = _v45;
          const _v46: any = (temps[1] ?? 0);
          acc = _v46;
          const _v47: any = await rt.send(_v46, "monGoal", [_v45]);
          acc = _v47;
          _v40 = _v47;
        }
        acc = _v40;
        let _v48: any = acc;
        const _v49: any = (temps[2] ?? 0);
        acc = _v49;
        const _v50: any = 4;
        acc = _v50;
        const _v51: any = (args[0] ?? 0);
        acc = _v51;
        const _v52: any = rt.op("*", ...[_v50, _v51]);
        acc = _v52;
        const _v53: any = rt.op("+", ...[_v49, _v52]);
        acc = _v53;
        const _v54: any = (temps[3] = _v53);
        acc = _v54;
        const _v55: any = 40;
        acc = _v55;
        const _v56: any = rt.op("<", ...[_v54, _v55]);
        acc = _v56;
        _v48 = _v56;
        if (rt.truth(_v56)) {
          const _v57: any = 40;
          acc = _v57;
          const _v58: any = (temps[3] = _v57);
          acc = _v58;
          _v48 = _v58;
        }
        acc = _v48;
        let _v59: any = acc;
        const _v60: any = (temps[3] ?? 0);
        acc = _v60;
        const _v61: any = 400;
        acc = _v61;
        const _v62: any = rt.op(">", ...[_v60, _v61]);
        acc = _v62;
        _v59 = _v62;
        if (rt.truth(_v62)) {
          const _v63: any = 400;
          acc = _v63;
          const _v64: any = (temps[3] = _v63);
          acc = _v64;
          _v59 = _v64;
        }
        acc = _v59;
        let _v65: any = acc;
        const _v66: any = (temps[1] ?? 0);
        acc = _v66;
        const _v67: any = await rt.send(_v66, "monGoal", []);
        acc = _v67;
        const _v68: any = (temps[3] = rt.op("-", (temps[3] ?? 0), _v67));
        acc = _v68;
        const _v69: any = 30;
        acc = _v69;
        const _v70: any = rt.op("/", ...[_v68, _v69]);
        acc = _v70;
        const _v71: any = 2;
        acc = _v71;
        const _v72: any = rt.op("-", ...[_v70, _v71]);
        acc = _v72;
        const _v73: any = (temps[5] = _v72);
        acc = _v73;
        const _v74: any = 1;
        acc = _v74;
        const _v75: any = rt.op("<", ...[_v73, _v74]);
        acc = _v75;
        _v65 = _v75;
        if (rt.truth(_v75)) {
          const _v76: any = 1;
          acc = _v76;
          const _v77: any = (temps[5] = _v76);
          acc = _v77;
          _v65 = _v77;
        }
        acc = _v65;
        let _v78: any = acc;
        const _v79: any = (temps[3] ?? 0);
        acc = _v79;
        const _v80: any = 30;
        acc = _v80;
        const _v81: any = rt.op("/", ...[_v79, _v80]);
        acc = _v81;
        const _v82: any = 2;
        acc = _v82;
        const _v83: any = rt.op("+", ...[_v81, _v82]);
        acc = _v83;
        const _v84: any = (temps[6] = _v83);
        acc = _v84;
        const _v85: any = 10;
        acc = _v85;
        const _v86: any = rt.op(">", ...[_v84, _v85]);
        acc = _v86;
        _v78 = _v86;
        if (rt.truth(_v86)) {
          const _v87: any = 10;
          acc = _v87;
          const _v88: any = (temps[6] = _v87);
          acc = _v88;
          _v78 = _v88;
        }
        acc = _v78;
        const _v89: any = (temps[5] ?? 0);
        acc = _v89;
        const _v90: any = (temps[6] ?? 0);
        acc = _v90;
        const _v91: any = await rt.call(237, "Random", [_v89, _v90], this);
        acc = _v91;
        const _v92: any = 10;
        acc = _v92;
        const _v93: any = rt.op("*", ...[_v91, _v92]);
        acc = _v93;
        const _v94: any = (temps[1] ?? 0);
        acc = _v94;
        const _v95: any = await rt.send(_v94, "hapGoal", [_v93]);
        acc = _v95;
        const _v96: any = (temps[5] ?? 0);
        acc = _v96;
        const _v97: any = (temps[6] ?? 0);
        acc = _v97;
        const _v98: any = await rt.call(237, "Random", [_v96, _v97], this);
        acc = _v98;
        const _v99: any = 10;
        acc = _v99;
        const _v100: any = rt.op("*", ...[_v98, _v99]);
        acc = _v100;
        const _v101: any = (temps[1] ?? 0);
        acc = _v101;
        const _v102: any = await rt.send(_v101, "eduGoal", [_v100]);
        acc = _v102;
        const _v103: any = (temps[1] ?? 0);
        acc = _v103;
        const _v104: any = await rt.send(_v103, "hapGoal", []);
        acc = _v104;
        const _v105: any = (temps[3] = rt.op("-", (temps[3] ?? 0), _v104));
        acc = _v105;
        const _v106: any = (temps[1] ?? 0);
        acc = _v106;
        const _v107: any = await rt.send(_v106, "eduGoal", []);
        acc = _v107;
        const _v108: any = rt.op("-", ...[_v105, _v107]);
        acc = _v108;
        const _v109: any = (temps[3] = _v108);
        acc = _v109;
        let _v110: any = acc;
        const _v111: any = 10;
        acc = _v111;
        let _v112: any = _v111;
        let _v113: any = 1;
        if (rt.truth(_v113)) {
          const _v114: any = (temps[3] ?? 0);
          acc = _v114;
          _v113 = rt.op("<=", _v112, _v114);
          _v112 = _v114;
        }
        if (rt.truth(_v113)) {
          const _v115: any = 100;
          acc = _v115;
          _v113 = rt.op("<=", _v112, _v115);
          _v112 = _v115;
        }
        acc = _v113;
        _v110 = _v113;
        if (rt.truth(_v113)) {
          const _v116: any = (temps[3] ?? 0);
          acc = _v116;
          const _v117: any = (temps[1] ?? 0);
          acc = _v117;
          const _v118: any = await rt.send(_v117, "carGoal", [_v116]);
          acc = _v118;
          _v110 = _v118;
        } else {
          let _v119: any = acc;
          const _v120: any = (temps[3] ?? 0);
          acc = _v120;
          const _v121: any = 100;
          acc = _v121;
          const _v122: any = rt.op(">", ...[_v120, _v121]);
          acc = _v122;
          _v119 = _v122;
          if (rt.truth(_v122)) {
            const _v123: any = (temps[3] ?? 0);
            acc = _v123;
            const _v124: any = 100;
            acc = _v124;
            const _v125: any = rt.op("-", ...[_v123, _v124]);
            acc = _v125;
            const _v126: any = (temps[7] = _v125);
            acc = _v126;
            _v119 = _v126;
            const _v127: any = 100;
            acc = _v127;
            const _v128: any = (temps[1] ?? 0);
            acc = _v128;
            const _v129: any = await rt.send(_v128, "carGoal", [_v127]);
            acc = _v129;
            _v119 = _v129;
            _loop130: for (;;) {
              const _v132: any = (temps[7] ?? 0);
              acc = _v132;
              if (!rt.truth(_v132)) break _loop130;
              _continue131: {
                let _v133: any = acc;
                const _v134: any = 0;
                acc = _v134;
                const _v135: any = 4;
                acc = _v135;
                const _v136: any = await rt.call(237, "Random", [_v134, _v135], this);
                acc = _v136;
                _branch137: {
                  const _v138: any = 0;
                  acc = _v138;
                  _v133 = rt.op("==", _v136, _v138);
                  acc = _v133;
                  if (rt.truth(_v133)) {
                    let _v139: any = acc;
                    const _v140: any = (temps[1] ?? 0);
                    acc = _v140;
                    const _v141: any = await rt.send(_v140, "monGoal", []);
                    acc = _v141;
                    const _v142: any = 100;
                    acc = _v142;
                    const _v143: any = rt.op("<", ...[_v141, _v142]);
                    acc = _v143;
                    _v139 = _v143;
                    if (rt.truth(_v143)) {
                      const _v144: any = 10;
                      acc = _v144;
                      const _v145: any = (temps[7] = rt.op("-", (temps[7] ?? 0), _v144));
                      acc = _v145;
                      _v139 = _v145;
                      const _v146: any = (temps[1] ?? 0);
                      acc = _v146;
                      const _v147: any = await rt.send(_v146, "monGoal", []);
                      acc = _v147;
                      const _v148: any = 10;
                      acc = _v148;
                      const _v149: any = rt.op("+", ...[_v147, _v148]);
                      acc = _v149;
                      const _v150: any = (temps[1] ?? 0);
                      acc = _v150;
                      const _v151: any = await rt.send(_v150, "monGoal", [_v149]);
                      acc = _v151;
                      _v139 = _v151;
                    }
                    acc = _v139;
                    _v133 = _v139;
                    break _branch137;
                  }
                  const _v152: any = 1;
                  acc = _v152;
                  _v133 = rt.op("==", _v136, _v152);
                  acc = _v133;
                  if (rt.truth(_v133)) {
                    let _v153: any = acc;
                    const _v154: any = (temps[1] ?? 0);
                    acc = _v154;
                    const _v155: any = await rt.send(_v154, "hapGoal", []);
                    acc = _v155;
                    const _v156: any = 100;
                    acc = _v156;
                    const _v157: any = rt.op("<", ...[_v155, _v156]);
                    acc = _v157;
                    _v153 = _v157;
                    if (rt.truth(_v157)) {
                      const _v158: any = 10;
                      acc = _v158;
                      const _v159: any = (temps[7] = rt.op("-", (temps[7] ?? 0), _v158));
                      acc = _v159;
                      _v153 = _v159;
                      const _v160: any = (temps[1] ?? 0);
                      acc = _v160;
                      const _v161: any = await rt.send(_v160, "hapGoal", []);
                      acc = _v161;
                      const _v162: any = 10;
                      acc = _v162;
                      const _v163: any = rt.op("+", ...[_v161, _v162]);
                      acc = _v163;
                      const _v164: any = (temps[1] ?? 0);
                      acc = _v164;
                      const _v165: any = await rt.send(_v164, "hapGoal", [_v163]);
                      acc = _v165;
                      _v153 = _v165;
                    }
                    acc = _v153;
                    _v133 = _v153;
                    break _branch137;
                  }
                  const _v166: any = 2;
                  acc = _v166;
                  _v133 = rt.op("==", _v136, _v166);
                  acc = _v133;
                  if (rt.truth(_v133)) {
                    let _v167: any = acc;
                    const _v168: any = (temps[1] ?? 0);
                    acc = _v168;
                    const _v169: any = await rt.send(_v168, "hapGoal", []);
                    acc = _v169;
                    const _v170: any = 100;
                    acc = _v170;
                    const _v171: any = rt.op("<", ...[_v169, _v170]);
                    acc = _v171;
                    _v167 = _v171;
                    if (rt.truth(_v171)) {
                      const _v172: any = 10;
                      acc = _v172;
                      const _v173: any = (temps[7] = rt.op("-", (temps[7] ?? 0), _v172));
                      acc = _v173;
                      _v167 = _v173;
                      const _v174: any = (temps[1] ?? 0);
                      acc = _v174;
                      const _v175: any = await rt.send(_v174, "hapGoal", []);
                      acc = _v175;
                      const _v176: any = 10;
                      acc = _v176;
                      const _v177: any = rt.op("+", ...[_v175, _v176]);
                      acc = _v177;
                      const _v178: any = (temps[1] ?? 0);
                      acc = _v178;
                      const _v179: any = await rt.send(_v178, "hapGoal", [_v177]);
                      acc = _v179;
                      _v167 = _v179;
                    }
                    acc = _v167;
                    _v133 = _v167;
                    break _branch137;
                  }
                  const _v180: any = 3;
                  acc = _v180;
                  _v133 = rt.op("==", _v136, _v180);
                  acc = _v133;
                  if (rt.truth(_v133)) {
                    let _v181: any = acc;
                    const _v182: any = (temps[1] ?? 0);
                    acc = _v182;
                    const _v183: any = await rt.send(_v182, "eduGoal", []);
                    acc = _v183;
                    const _v184: any = 100;
                    acc = _v184;
                    const _v185: any = rt.op("<", ...[_v183, _v184]);
                    acc = _v185;
                    _v181 = _v185;
                    if (rt.truth(_v185)) {
                      const _v186: any = 10;
                      acc = _v186;
                      const _v187: any = (temps[7] = rt.op("-", (temps[7] ?? 0), _v186));
                      acc = _v187;
                      _v181 = _v187;
                      const _v188: any = (temps[1] ?? 0);
                      acc = _v188;
                      const _v189: any = await rt.send(_v188, "eduGoal", []);
                      acc = _v189;
                      const _v190: any = 10;
                      acc = _v190;
                      const _v191: any = rt.op("+", ...[_v189, _v190]);
                      acc = _v191;
                      const _v192: any = (temps[1] ?? 0);
                      acc = _v192;
                      const _v193: any = await rt.send(_v192, "eduGoal", [_v191]);
                      acc = _v193;
                      _v181 = _v193;
                    }
                    acc = _v181;
                    _v133 = _v181;
                    break _branch137;
                  }
                  const _v194: any = 4;
                  acc = _v194;
                  _v133 = rt.op("==", _v136, _v194);
                  acc = _v133;
                  if (rt.truth(_v133)) {
                    let _v195: any = acc;
                    const _v196: any = (temps[1] ?? 0);
                    acc = _v196;
                    const _v197: any = await rt.send(_v196, "eduGoal", []);
                    acc = _v197;
                    const _v198: any = 100;
                    acc = _v198;
                    const _v199: any = rt.op("<", ...[_v197, _v198]);
                    acc = _v199;
                    _v195 = _v199;
                    if (rt.truth(_v199)) {
                      const _v200: any = 10;
                      acc = _v200;
                      const _v201: any = (temps[7] = rt.op("-", (temps[7] ?? 0), _v200));
                      acc = _v201;
                      _v195 = _v201;
                      const _v202: any = (temps[1] ?? 0);
                      acc = _v202;
                      const _v203: any = await rt.send(_v202, "eduGoal", []);
                      acc = _v203;
                      const _v204: any = 10;
                      acc = _v204;
                      const _v205: any = rt.op("+", ...[_v203, _v204]);
                      acc = _v205;
                      const _v206: any = (temps[1] ?? 0);
                      acc = _v206;
                      const _v207: any = await rt.send(_v206, "eduGoal", [_v205]);
                      acc = _v207;
                      _v195 = _v207;
                    }
                    acc = _v195;
                    _v133 = _v195;
                    break _branch137;
                  }
                }
                acc = _v133;
              }
            }
            _v119 = acc;
          }
          acc = _v119;
          _v110 = _v119;
          let _v208: any = acc;
          const _v209: any = (temps[3] ?? 0);
          acc = _v209;
          const _v210: any = 10;
          acc = _v210;
          const _v211: any = rt.op("<", ...[_v209, _v210]);
          acc = _v211;
          _v208 = _v211;
          if (rt.truth(_v211)) {
            const _v212: any = 10;
            acc = _v212;
            const _v213: any = (temps[3] ?? 0);
            acc = _v213;
            const _v214: any = rt.op("-", ...[_v212, _v213]);
            acc = _v214;
            const _v215: any = (temps[7] = _v214);
            acc = _v215;
            _v208 = _v215;
            const _v216: any = 10;
            acc = _v216;
            const _v217: any = (temps[1] ?? 0);
            acc = _v217;
            const _v218: any = await rt.send(_v217, "carGoal", [_v216]);
            acc = _v218;
            _v208 = _v218;
            _loop219: for (;;) {
              const _v221: any = (temps[7] ?? 0);
              acc = _v221;
              if (!rt.truth(_v221)) break _loop219;
              _continue220: {
                let _v222: any = acc;
                const _v223: any = 0;
                acc = _v223;
                const _v224: any = 4;
                acc = _v224;
                const _v225: any = await rt.call(237, "Random", [_v223, _v224], this);
                acc = _v225;
                _branch226: {
                  const _v227: any = 0;
                  acc = _v227;
                  _v222 = rt.op("==", _v225, _v227);
                  acc = _v222;
                  if (rt.truth(_v222)) {
                    let _v228: any = acc;
                    const _v229: any = (temps[1] ?? 0);
                    acc = _v229;
                    const _v230: any = await rt.send(_v229, "monGoal", []);
                    acc = _v230;
                    const _v231: any = 10;
                    acc = _v231;
                    const _v232: any = rt.op(">", ...[_v230, _v231]);
                    acc = _v232;
                    _v228 = _v232;
                    if (rt.truth(_v232)) {
                      const _v233: any = 10;
                      acc = _v233;
                      const _v234: any = (temps[7] = rt.op("-", (temps[7] ?? 0), _v233));
                      acc = _v234;
                      _v228 = _v234;
                      const _v235: any = (temps[1] ?? 0);
                      acc = _v235;
                      const _v236: any = await rt.send(_v235, "monGoal", []);
                      acc = _v236;
                      const _v237: any = 10;
                      acc = _v237;
                      const _v238: any = rt.op("-", ...[_v236, _v237]);
                      acc = _v238;
                      const _v239: any = (temps[1] ?? 0);
                      acc = _v239;
                      const _v240: any = await rt.send(_v239, "monGoal", [_v238]);
                      acc = _v240;
                      _v228 = _v240;
                    }
                    acc = _v228;
                    _v222 = _v228;
                    break _branch226;
                  }
                  const _v241: any = 1;
                  acc = _v241;
                  _v222 = rt.op("==", _v225, _v241);
                  acc = _v222;
                  if (rt.truth(_v222)) {
                    let _v242: any = acc;
                    const _v243: any = (temps[1] ?? 0);
                    acc = _v243;
                    const _v244: any = await rt.send(_v243, "hapGoal", []);
                    acc = _v244;
                    const _v245: any = 10;
                    acc = _v245;
                    const _v246: any = rt.op(">", ...[_v244, _v245]);
                    acc = _v246;
                    _v242 = _v246;
                    if (rt.truth(_v246)) {
                      const _v247: any = 10;
                      acc = _v247;
                      const _v248: any = (temps[7] = rt.op("-", (temps[7] ?? 0), _v247));
                      acc = _v248;
                      _v242 = _v248;
                      const _v249: any = (temps[1] ?? 0);
                      acc = _v249;
                      const _v250: any = await rt.send(_v249, "hapGoal", []);
                      acc = _v250;
                      const _v251: any = 10;
                      acc = _v251;
                      const _v252: any = rt.op("-", ...[_v250, _v251]);
                      acc = _v252;
                      const _v253: any = (temps[1] ?? 0);
                      acc = _v253;
                      const _v254: any = await rt.send(_v253, "hapGoal", [_v252]);
                      acc = _v254;
                      _v242 = _v254;
                    }
                    acc = _v242;
                    _v222 = _v242;
                    break _branch226;
                  }
                  const _v255: any = 2;
                  acc = _v255;
                  _v222 = rt.op("==", _v225, _v255);
                  acc = _v222;
                  if (rt.truth(_v222)) {
                    let _v256: any = acc;
                    const _v257: any = (temps[1] ?? 0);
                    acc = _v257;
                    const _v258: any = await rt.send(_v257, "hapGoal", []);
                    acc = _v258;
                    const _v259: any = 10;
                    acc = _v259;
                    const _v260: any = rt.op(">", ...[_v258, _v259]);
                    acc = _v260;
                    _v256 = _v260;
                    if (rt.truth(_v260)) {
                      const _v261: any = 10;
                      acc = _v261;
                      const _v262: any = (temps[7] = rt.op("-", (temps[7] ?? 0), _v261));
                      acc = _v262;
                      _v256 = _v262;
                      const _v263: any = (temps[1] ?? 0);
                      acc = _v263;
                      const _v264: any = await rt.send(_v263, "hapGoal", []);
                      acc = _v264;
                      const _v265: any = 10;
                      acc = _v265;
                      const _v266: any = rt.op("-", ...[_v264, _v265]);
                      acc = _v266;
                      const _v267: any = (temps[1] ?? 0);
                      acc = _v267;
                      const _v268: any = await rt.send(_v267, "hapGoal", [_v266]);
                      acc = _v268;
                      _v256 = _v268;
                    }
                    acc = _v256;
                    _v222 = _v256;
                    break _branch226;
                  }
                  const _v269: any = 3;
                  acc = _v269;
                  _v222 = rt.op("==", _v225, _v269);
                  acc = _v222;
                  if (rt.truth(_v222)) {
                    let _v270: any = acc;
                    const _v271: any = (temps[1] ?? 0);
                    acc = _v271;
                    const _v272: any = await rt.send(_v271, "eduGoal", []);
                    acc = _v272;
                    const _v273: any = 10;
                    acc = _v273;
                    const _v274: any = rt.op(">", ...[_v272, _v273]);
                    acc = _v274;
                    _v270 = _v274;
                    if (rt.truth(_v274)) {
                      const _v275: any = 10;
                      acc = _v275;
                      const _v276: any = (temps[7] = rt.op("-", (temps[7] ?? 0), _v275));
                      acc = _v276;
                      _v270 = _v276;
                      const _v277: any = (temps[1] ?? 0);
                      acc = _v277;
                      const _v278: any = await rt.send(_v277, "eduGoal", []);
                      acc = _v278;
                      const _v279: any = 10;
                      acc = _v279;
                      const _v280: any = rt.op("-", ...[_v278, _v279]);
                      acc = _v280;
                      const _v281: any = (temps[1] ?? 0);
                      acc = _v281;
                      const _v282: any = await rt.send(_v281, "eduGoal", [_v280]);
                      acc = _v282;
                      _v270 = _v282;
                    }
                    acc = _v270;
                    _v222 = _v270;
                    break _branch226;
                  }
                  const _v283: any = 4;
                  acc = _v283;
                  _v222 = rt.op("==", _v225, _v283);
                  acc = _v222;
                  if (rt.truth(_v222)) {
                    let _v284: any = acc;
                    const _v285: any = (temps[1] ?? 0);
                    acc = _v285;
                    const _v286: any = await rt.send(_v285, "eduGoal", []);
                    acc = _v286;
                    const _v287: any = 10;
                    acc = _v287;
                    const _v288: any = rt.op(">", ...[_v286, _v287]);
                    acc = _v288;
                    _v284 = _v288;
                    if (rt.truth(_v288)) {
                      const _v289: any = 10;
                      acc = _v289;
                      const _v290: any = (temps[7] = rt.op("-", (temps[7] ?? 0), _v289));
                      acc = _v290;
                      _v284 = _v290;
                      const _v291: any = (temps[1] ?? 0);
                      acc = _v291;
                      const _v292: any = await rt.send(_v291, "eduGoal", []);
                      acc = _v292;
                      const _v293: any = 10;
                      acc = _v293;
                      const _v294: any = rt.op("-", ...[_v292, _v293]);
                      acc = _v294;
                      const _v295: any = (temps[1] ?? 0);
                      acc = _v295;
                      const _v296: any = await rt.send(_v295, "eduGoal", [_v294]);
                      acc = _v296;
                      _v284 = _v296;
                    }
                    acc = _v284;
                    _v222 = _v284;
                    break _branch226;
                  }
                }
                acc = _v222;
              }
            }
            _v208 = acc;
          }
          acc = _v208;
          _v110 = _v208;
        }
        acc = _v110;
        const _v297: any = (temps[1] ?? 0);
        acc = _v297;
        const _v298: any = rt.setGlobal(302, _v297);
        acc = _v298;
        return acc;
      },
    },
    exports: {"0": "select4"},
  });
}
