// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/diploma.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 21b2d8f09023c100655a514ea6e90918870b0e3459a3c58e76be4b2c5c450dbc
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(230, {
    name: "diploma",
    uses: [0, 110, 255, 891, 967, 992, 996, 999],
    locals: [0],
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
        name: "diploma",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI diploma.sc: diploma.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = rt.global(518);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = await rt.call(0, "proc0_7", [], this);
              acc = _v4;
              _v1 = _v4;
              const _v5: any = 3;
              acc = _v5;
              const _v6: any = await rt.call(0, "proc0_17", [_v5], this);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = rt.object(230, "dialogKeyMouse");
              acc = _v7;
              const _v8: any = rt.set(this, "keyMouseList", _v7);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = (args[1] ?? 0);
              acc = _v9;
              const _v10: any = rt.setLocal(230, 0, _v9);
              acc = _v10;
              _v1 = _v10;
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = rt.set(this, "client", _v11);
              acc = _v12;
              _v1 = _v12;
              const _v13: any = rt.global(502);
              acc = _v13;
              const _v14: any = rt.set(this, "prevDialog", _v13);
              acc = _v14;
              _v1 = _v14;
              const _v15: any = this;
              acc = _v15;
              const _v16: any = rt.setGlobal(502, _v15);
              acc = _v16;
              _v1 = _v16;
              const _v17: any = rt.global(413);
              acc = _v17;
              const _v18: any = rt.set(this, "prevTalker", _v17);
              acc = _v18;
              _v1 = _v18;
              const _v19: any = 0;
              acc = _v19;
              const _v20: any = rt.setGlobal(413, _v19);
              acc = _v20;
              _v1 = _v20;
              const _v21: any = rt.global(59);
              acc = _v21;
              const _v22: any = rt.object(230, "background");
              acc = _v22;
              const _v23: any = rt.object(230, "theDiploma");
              acc = _v23;
              const _v24: any = rt.object(230, "doneButton");
              acc = _v24;
              const _v25: any = this;
              acc = _v25;
              const _v26: any = await rt.send(_v25, "window", [_v21]);
              acc = _v26;
              const _v27: any = await rt.send(_v25, "add", [_v22, _v23, _v24]);
              acc = _v27;
              _v1 = _v27;
              let _v28: any = acc;
              const _v29: any = rt.global(302);
              acc = _v29;
              const _v30: any = await rt.send(_v29, "playing", []);
              acc = _v30;
              const _v31: any = 29;
              acc = _v31;
              const _v32: any = rt.op("==", ...[_v30, _v31]);
              acc = _v32;
              _v28 = _v32;
              if (rt.truth(_v32)) {
                const _v33: any = rt.object(230, "computerScript");
                acc = _v33;
                const _v34: any = this;
                acc = _v34;
                const _v35: any = await rt.send(_v34, "setScript", [_v33]);
                acc = _v35;
                _v28 = _v35;
                const _v36: any = rt.object(230, "computerScript");
                acc = _v36;
                const _v37: any = await rt.send(_v36, "cue", []);
                acc = _v37;
                _v28 = _v37;
              }
              acc = _v28;
              _v1 = _v28;
              const _v38: any = 102;
              acc = _v38;
              const _v39: any = 153;
              acc = _v39;
              const _v40: any = rt.get(this, "client");
              acc = _v40;
              const _v41: any = await rt.send(_v40, "nsLeft", []);
              acc = _v41;
              const _v42: any = rt.get(this, "client");
              acc = _v42;
              const _v43: any = await rt.send(_v42, "nsTop", []);
              acc = _v43;
              const _v44: any = 0;
              acc = _v44;
              const _v45: any = 15;
              acc = _v45;
              const _v46: any = this;
              acc = _v46;
              const _v47: any = await rt.send(_v46, "eachElementDo", [_v38]);
              acc = _v47;
              const _v48: any = await rt.send(_v46, "eachElementDo", [_v39]);
              acc = _v48;
              const _v49: any = await rt.send(_v46, "moveTo", [_v41, _v43]);
              acc = _v49;
              const _v50: any = await rt.send(_v46, "open", [_v44, _v45]);
              acc = _v50;
              _v1 = _v50;
              const _v51: any = rt.object(891, "KeyMouse");
              acc = _v51;
              const _v52: any = await rt.send(_v51, "curItem", []);
              acc = _v52;
              const _v53: any = (temps[1] = _v52);
              acc = _v53;
              _v1 = _v53;
              const _v54: any = this;
              acc = _v54;
              const _v55: any = rt.get(this, "keyMouseList");
              acc = _v55;
              const _v56: any = rt.object(230, "doneButton");
              acc = _v56;
              const _v57: any = await rt.call(0, "proc0_9", [_v54, _v55, _v56], this);
              acc = _v57;
              _v1 = _v57;
              const _v58: any = rt.get(this, "keyMouseList");
              acc = _v58;
              const _v59: any = rt.object(891, "KeyMouse");
              acc = _v59;
              const _v60: any = await rt.send(_v59, "setList", [_v58]);
              acc = _v60;
              _v1 = _v60;
              const _v61: any = 1;
              acc = _v61;
              const _v62: any = 42;
              acc = _v62;
              const _v63: any = rt.global(477);
              acc = _v63;
              const _v64: any = await rt.send(_v63, "loop", [_v61]);
              acc = _v64;
              const _v65: any = await rt.send(_v63, "play", [_v62]);
              acc = _v65;
              _v1 = _v65;
              let _v66: any = acc;
              const _v67: any = rt.global(534);
              acc = _v67;
              _v66 = _v67;
              if (rt.truth(_v67)) {
                const _v68: any = 4;
                acc = _v68;
                const _v69: any = rt.object(230, "theDiploma");
                acc = _v69;
                const _v70: any = await rt.send(_v69, "cel", [_v68]);
                acc = _v70;
                const _v71: any = await rt.send(_v69, "draw", []);
                acc = _v71;
                const _v72: any = await rt.send(_v69, "cue", []);
                acc = _v72;
                _v66 = _v72;
              }
              acc = _v66;
              _v1 = _v66;
              const _v73: any = 1;
              acc = _v73;
              const _v74: any = rt.object(996, "User");
              acc = _v74;
              const _v75: any = await rt.send(_v74, "canControl", [_v73]);
              acc = _v75;
              _v1 = _v75;
            } else {
              const _v76: any = rt.get(this, "theItem");
              acc = _v76;
              const _v77: any = rt.object(891, "KeyMouse");
              acc = _v77;
              const _v78: any = await rt.send(_v77, "setCursor", [_v76]);
              acc = _v78;
              _v1 = _v78;
            }
            acc = _v1;
            const _v79: any = 0;
            acc = _v79;
            const _v80: any = 0;
            acc = _v80;
            const _v81: any = this;
            acc = _v81;
            const _v82: any = await rt.send(_v81, "doit", [_v79, _v80]);
            acc = _v82;
            const _v83: any = (temps[0] = _v82);
            acc = _v83;
            let _v84: any = acc;
            const _v85: any = (temps[0] ?? 0);
            acc = _v85;
            const _v86: any = await rt.call(230, "IsObject", [_v85], this);
            acc = _v86;
            _v84 = _v86;
            if (rt.truth(_v86)) {
              let _v87: any = acc;
              const _v88: any = (temps[0] ?? 0);
              acc = _v88;
              const _v89: any = this;
              acc = _v89;
              const _v90: any = await rt.send(_v89, "contains", [_v88]);
              acc = _v90;
              _v87 = _v90;
              if (rt.truth(_v90)) {
                const _v91: any = 0;
                acc = _v91;
                const _v92: any = (temps[0] = _v91);
                acc = _v92;
                _v87 = _v92;
              }
              acc = _v87;
              _v84 = _v87;
            } else {
              const _v93: any = 1;
              acc = _v93;
              const _v94: any = (temps[0] = _v93);
              acc = _v94;
              _v84 = _v94;
            }
            acc = _v84;
            let _v95: any = acc;
            const _v96: any = rt.get(this, "prevDialog");
            acc = _v96;
            _v95 = _v96;
            if (rt.truth(_v96)) {
              const _v97: any = rt.get(this, "prevDialog");
              acc = _v97;
              const _v98: any = await rt.send(_v97, "keyMouseList", []);
              acc = _v98;
              _v95 = _v98;
            } else {
              const _v99: any = rt.global(432);
              acc = _v99;
              _v95 = _v99;
            }
            acc = _v95;
            const _v100: any = rt.object(891, "KeyMouse");
            acc = _v100;
            const _v101: any = await rt.send(_v100, "setList", [_v95]);
            acc = _v101;
            const _v102: any = (temps[1] ?? 0);
            acc = _v102;
            const _v103: any = rt.object(891, "KeyMouse");
            acc = _v103;
            const _v104: any = await rt.send(_v103, "curItem", [_v102]);
            acc = _v104;
            let _v105: any = acc;
            const _v106: any = rt.global(447);
            acc = _v106;
            _v105 = _v106;
            if (rt.truth(_v106)) {
              const _v107: any = (temps[1] ?? 0);
              acc = _v107;
              const _v108: any = rt.object(891, "KeyMouse");
              acc = _v108;
              const _v109: any = await rt.send(_v108, "setCursor", [_v107]);
              acc = _v109;
              _v105 = _v109;
            }
            acc = _v105;
            const _v110: any = rt.get(this, "keyMouseList");
            acc = _v110;
            const _v111: any = await rt.send(_v110, "release", []);
            acc = _v111;
            const _v112: any = await rt.send(_v110, "dispose", []);
            acc = _v112;
            const _v113: any = rt.get(this, "prevTalker");
            acc = _v113;
            const _v114: any = rt.setGlobal(413, _v113);
            acc = _v114;
            const _v115: any = rt.get(this, "prevDialog");
            acc = _v115;
            const _v116: any = rt.setGlobal(502, _v115);
            acc = _v116;
            const _v117: any = this;
            acc = _v117;
            const _v118: any = 291;
            acc = _v118;
            const _v119: any = await rt.call(0, "proc0_15", [_v117, _v118], this);
            acc = _v119;
            const _v120: any = this;
            acc = _v120;
            const _v121: any = await rt.send(_v120, "dispose", []);
            acc = _v121;
            const _v122: any = 0;
            acc = _v122;
            const _v123: any = await rt.call(230, "SetPort", [_v122], this);
            acc = _v123;
            const _v124: any = 0;
            acc = _v124;
            const _v125: any = await rt.call(0, "proc0_17", [_v124], this);
            acc = _v125;
            const _v126: any = await rt.call(0, "proc0_8", [], this);
            acc = _v126;
            const _v127: any = 11;
            acc = _v127;
            const _v128: any = rt.get(this, "nsTop");
            acc = _v128;
            const _v129: any = 1;
            acc = _v129;
            const _v130: any = rt.op("+", ...[_v128, _v129]);
            acc = _v130;
            const _v131: any = rt.get(this, "nsLeft");
            acc = _v131;
            const _v132: any = rt.get(this, "nsBottom");
            acc = _v132;
            const _v133: any = 1;
            acc = _v133;
            const _v134: any = rt.op("-", ...[_v132, _v133]);
            acc = _v134;
            const _v135: any = rt.get(this, "nsRight");
            acc = _v135;
            const _v136: any = 3;
            acc = _v136;
            const _v137: any = rt.op("-", ...[_v135, _v136]);
            acc = _v137;
            const _v138: any = 2;
            acc = _v138;
            const _v139: any = 0;
            acc = _v139;
            const _v140: any = 0;
            acc = _v140;
            const _v141: any = await rt.call(230, "Graph", [_v127, _v130, _v131, _v134, _v137, _v138, _v139, _v140], this);
            acc = _v141;
            const _v142: any = (temps[0] ?? 0);
            acc = _v142;
            const _acc143: any = acc;
            const _v144: any = 230;
            acc = _v144;
            const _args145: any[] = [_v144];
            await rt.call(230, "DisposeScript", _args145, this);
            const _v146: any = _args145.length === 2 ? _args145[1] : _acc143;
            acc = _v146;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 607, "loop": 1, "priority": 10},
        methods: {
        },
      },
      {
        name: "doneButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 143, "key": 120, "view": 250, "loop": 2},
        methods: {
        },
      },
      {
        name: "theDiploma",
        className: "DCIcon",
        parent: {"script": 967, "name": "DCIcon"},
        isClass: false,
        properties: {"nsTop": 15, "nsLeft": 22, "view": 607, "priority": 15, "cycleSpeed": 1},
        methods: {
          // SCI diploma.sc: theDiploma.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 0;
            if (!rt.truth(_v2)) {
              const _v3: any = rt.global(534);
              acc = _v3;
              const _v4: any = rt.op("not", ...[_v3]);
              acc = _v4;
              _v2 = _v4;
            }
            if (!rt.truth(_v2)) {
              const _v5: any = rt.get(this, "cel");
              acc = _v5;
              const _v6: any = 4;
              acc = _v6;
              const _v7: any = rt.op("==", ...[_v5, _v6]);
              acc = _v7;
              _v2 = _v7;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v8: any = args.slice(0, argc);
              acc = _v8;
              const _v9: any = await rt.superSend(this, {"script": 230, "name": "theDiploma"}, "draw", [..._v8]);
              acc = _v9;
              _v1 = _v9;
            }
            acc = _v1;
            return acc;
          },
          // SCI diploma.sc: theDiploma.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.global(534);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = rt.object(992, "End");
              acc = _v4;
              const _v5: any = this;
              acc = _v5;
              const _v6: any = this;
              acc = _v6;
              const _v7: any = await rt.send(_v6, "setCycle", [_v4, _v5]);
              acc = _v7;
              _v1 = _v7;
            }
            acc = _v1;
            return acc;
          },
          // SCI diploma.sc: theDiploma.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0];
            const _v1: any = rt.object(230, "diplomaText");
            acc = _v1;
            const _v2: any = rt.global(502);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "add", [_v1]);
            acc = _v3;
            const _v4: any = rt.object(230, "diplomaText");
            acc = _v4;
            const _v5: any = await rt.send(_v4, "draw", []);
            acc = _v5;
            return acc;
          },
        },
      },
      {
        name: "diplomaText",
        className: "DText",
        parent: {"script": 255, "name": "DText"},
        isClass: false,
        properties: {},
        methods: {
          // SCI diploma.sc: diplomaText.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            const _v3: any = rt.ref("array", temps, 4);
            acc = _v3;
            const _v4: any = 230;
            acc = _v4;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = 700;
            acc = _v6;
            const _v7: any = rt.local(230, 0);
            acc = _v7;
            const _v8: any = await rt.call(230, "Format", [_v3, _v4, _v5, _v6, _v7], this);
            acc = _v8;
            const _v9: any = rt.set(this, "text", _v8);
            acc = _v9;
            const _v10: any = 0;
            acc = _v10;
            const _v11: any = rt.ref("array", temps, (0 + (Number(_v10) & 65535)));
            acc = _v11;
            const _v12: any = rt.get(this, "text");
            acc = _v12;
            const _v13: any = 8;
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = await rt.call(230, "TextSize", [_v11, _v12, _v13, _v14], this);
            acc = _v15;
            const _v16: any = rt.get(this, "text");
            acc = _v16;
            const _v17: any = 100;
            acc = _v17;
            const _v18: any = 97;
            acc = _v18;
            const _v19: any = 3;
            acc = _v19;
            const _v20: any = (temps[(0 + (Number(_v19) & 65535))] ?? 0);
            acc = _v20;
            const _v21: any = 2;
            acc = _v21;
            const _v22: any = rt.op("/", ...[_v20, _v21]);
            acc = _v22;
            const _v23: any = rt.op("-", ...[_v18, _v22]);
            acc = _v23;
            const _v24: any = 77;
            acc = _v24;
            const _v25: any = 2;
            acc = _v25;
            const _v26: any = (temps[(0 + (Number(_v25) & 65535))] ?? 0);
            acc = _v26;
            const _v27: any = 2;
            acc = _v27;
            const _v28: any = rt.op("/", ...[_v26, _v27]);
            acc = _v28;
            const _v29: any = rt.op("-", ...[_v24, _v28]);
            acc = _v29;
            const _v30: any = 102;
            acc = _v30;
            const _v31: any = 0;
            acc = _v31;
            const _v32: any = 106;
            acc = _v32;
            const _v33: any = 150;
            acc = _v33;
            const _v34: any = 103;
            acc = _v34;
            const _v35: any = -1;
            acc = _v35;
            const _v36: any = 105;
            acc = _v36;
            const _v37: any = 8;
            acc = _v37;
            const _v38: any = await rt.call(230, "Display", [_v16, _v17, _v23, _v29, _v30, _v31, _v32, _v33, _v34, _v35, _v36, _v37], this);
            acc = _v38;
            const _v39: any = this;
            acc = _v39;
            const _v40: any = await rt.send(_v39, "resetPort", []);
            acc = _v40;
            return acc;
          },
        },
      },
      {
        name: "computerScript",
        className: "DialogScript",
        parent: {"script": 110, "name": "DialogScript"},
        isClass: false,
        properties: {},
        methods: {
          // SCI diploma.sc: computerScript.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "register");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 0;
              acc = _v3;
              const _v4: any = rt.set(this, "register", _v3);
              acc = _v4;
              _v1 = _v4;
              const _v5: any = 1;
              acc = _v5;
              const _v6: any = rt.set(this, "cycles", _v5);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 4;
              acc = _v7;
              const _v8: any = 160;
              acc = _v8;
              const _v9: any = 100;
              acc = _v9;
              const _v10: any = (args[0] ?? 0);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "type", [_v7]);
              acc = _v11;
              const _v12: any = await rt.send(_v10, "x", [_v8]);
              acc = _v12;
              const _v13: any = await rt.send(_v10, "y", [_v9]);
              acc = _v13;
              _v1 = _v13;
              let _v14: any = acc;
              const _v15: any = rt.get(this, "state");
              acc = _v15;
              _branch16: {
                const _v17: any = 2;
                acc = _v17;
                _v14 = rt.op("==", _v15, _v17);
                acc = _v14;
                if (rt.truth(_v14)) {
                  const _v18: any = 120;
                  acc = _v18;
                  const _v19: any = rt.set(this, "cycles", _v18);
                  acc = _v19;
                  _v14 = _v19;
                  break _branch16;
                }
                const _v20: any = 3;
                acc = _v20;
                _v14 = rt.op("==", _v15, _v20);
                acc = _v14;
                if (rt.truth(_v14)) {
                  const _v21: any = 120;
                  acc = _v21;
                  const _v22: any = (args[0] ?? 0);
                  acc = _v22;
                  const _v23: any = await rt.send(_v22, "message", [_v21]);
                  acc = _v23;
                  _v14 = _v23;
                  break _branch16;
                }
                const _v24: any = (args[0] ?? 0);
                acc = _v24;
                const _v25: any = 0;
                acc = _v25;
                const _v26: any = await rt.superSend(this, {"script": 230, "name": "computerScript"}, "handleEvent", [_v24, _v25]);
                acc = _v26;
                _v14 = _v26;
                break _branch16;
              }
              acc = _v14;
              _v1 = _v14;
            }
            acc = _v1;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {"0": "diploma"},
  });
}
