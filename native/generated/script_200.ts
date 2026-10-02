// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/lowcost.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 200d2929d4e7b9c90f51a7cbece1c506bfe865428bf69444e9724969ff5a1d8b
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(200, {
    name: "lowcost",
    uses: [0, 104, 110, 255, 891, 996, 999],
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
        name: "lowcost",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI lowcost.sc: lowcost.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.global(518);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              let _v4: any = acc;
              const _v5: any = rt.global(534);
              acc = _v5;
              const _v6: any = 2;
              acc = _v6;
              const _v7: any = rt.op(">=", ...[_v5, _v6]);
              acc = _v7;
              _v4 = _v7;
              if (rt.truth(_v7)) {
                const _v8: any = 3;
                acc = _v8;
                const _v9: any = 8;
                acc = _v9;
                const _v10: any = 16;
                acc = _v10;
                const _v11: any = 1;
                acc = _v11;
                const _v12: any = await rt.call(200, "Palette", [_v8, _v9, _v10, _v11], this);
                acc = _v12;
                _v4 = _v12;
                const _v13: any = 3;
                acc = _v13;
                const _v14: any = 144;
                acc = _v14;
                const _v15: any = 255;
                acc = _v15;
                const _v16: any = 1;
                acc = _v16;
                const _v17: any = await rt.call(200, "Palette", [_v13, _v14, _v15, _v16], this);
                acc = _v17;
                _v4 = _v17;
              }
              acc = _v4;
              _v1 = _v4;
              const _v18: any = 1;
              acc = _v18;
              const _v19: any = await rt.call(0, "proc0_17", [_v18], this);
              acc = _v19;
              _v1 = _v19;
              const _v20: any = rt.object(200, "dialogKeyMouse");
              acc = _v20;
              const _v21: any = rt.set(this, "keyMouseList", _v20);
              acc = _v21;
              _v1 = _v21;
              const _v22: any = rt.global(502);
              acc = _v22;
              const _v23: any = rt.set(this, "prevDialog", _v22);
              acc = _v23;
              _v1 = _v23;
              const _v24: any = this;
              acc = _v24;
              const _v25: any = rt.setGlobal(502, _v24);
              acc = _v25;
              _v1 = _v25;
              const _v26: any = (args[0] ?? 0);
              acc = _v26;
              const _v27: any = rt.set(this, "client", _v26);
              acc = _v27;
              _v1 = _v27;
              const _v28: any = 2;
              acc = _v28;
              const _v29: any = rt.global(417);
              acc = _v29;
              const _v30: any = await rt.send(_v29, "doit", [_v28]);
              acc = _v30;
              _v1 = _v30;
              const _v31: any = 0;
              acc = _v31;
              const _v32: any = rt.setGlobal(400, _v31);
              acc = _v32;
              _v1 = _v32;
              let _v33: any = acc;
              const _v34: any = rt.global(302);
              acc = _v34;
              const _v35: any = await rt.send(_v34, "playing", []);
              acc = _v35;
              const _v36: any = 29;
              acc = _v36;
              const _v37: any = rt.op("==", ...[_v35, _v36]);
              acc = _v37;
              _v33 = _v37;
              if (rt.truth(_v37)) {
                const _v38: any = rt.object(200, "computerScript");
                acc = _v38;
                const _v39: any = this;
                acc = _v39;
                const _v40: any = await rt.send(_v39, "setScript", [_v38]);
                acc = _v40;
                _v33 = _v40;
                const _v41: any = rt.object(200, "computerScript");
                acc = _v41;
                const _v42: any = await rt.send(_v41, "cue", []);
                acc = _v42;
                _v33 = _v42;
              }
              acc = _v33;
              _v1 = _v33;
              const _v43: any = 0;
              acc = _v43;
              const _v44: any = rt.setGlobal(413, _v43);
              acc = _v44;
              _v1 = _v44;
              let _v45: any = acc;
              const _v46: any = rt.global(302);
              acc = _v46;
              const _v47: any = await rt.send(_v46, "livesAt", []);
              acc = _v47;
              const _v48: any = 0;
              acc = _v48;
              const _v49: any = rt.op("==", ...[_v47, _v48]);
              acc = _v49;
              _v45 = _v49;
              if (rt.truth(_v49)) {
                const _v50: any = 700;
                acc = _v50;
                _v45 = _v50;
              } else {
                const _v51: any = 699;
                acc = _v51;
                _v45 = _v51;
              }
              acc = _v45;
              const _v52: any = rt.object(200, "background");
              acc = _v52;
              const _v53: any = await rt.send(_v52, "view", [_v45]);
              acc = _v53;
              _v1 = _v53;
              const _v54: any = rt.object(200, "background");
              acc = _v54;
              const _v55: any = rt.object(200, "exitButton");
              acc = _v55;
              const _v56: any = this;
              acc = _v56;
              const _v57: any = await rt.send(_v56, "add", [_v54, _v55]);
              acc = _v57;
              _v1 = _v57;
              let _v58: any = acc;
              const _v59: any = rt.global(302);
              acc = _v59;
              const _v60: any = await rt.send(_v59, "livesAt", []);
              acc = _v60;
              const _v61: any = 0;
              acc = _v61;
              const _v62: any = rt.op("==", ...[_v60, _v61]);
              acc = _v62;
              _v58 = _v62;
              if (rt.truth(_v62)) {
                const _v63: any = rt.object(200, "relaxButton");
                acc = _v63;
                const _v64: any = this;
                acc = _v64;
                const _v65: any = await rt.send(_v64, "add", [_v63]);
                acc = _v65;
                _v58 = _v65;
                let _v66: any = acc;
                const _v67: any = rt.global(414);
                acc = _v67;
                const _v68: any = 0;
                acc = _v68;
                const _v69: any = rt.op("==", ...[_v67, _v68]);
                acc = _v69;
                _v66 = _v69;
                if (rt.truth(_v69)) {
                  const _v70: any = rt.object(200, "theSaying");
                  acc = _v70;
                  const _v71: any = rt.object(200, "theChair");
                  acc = _v71;
                  const _v72: any = rt.object(200, "theStool");
                  acc = _v72;
                  const _v73: any = this;
                  acc = _v73;
                  const _v74: any = await rt.send(_v73, "add", [_v70, _v71, _v72]);
                  acc = _v74;
                  _v66 = _v74;
                }
                acc = _v66;
                _v58 = _v66;
              }
              acc = _v58;
              _v1 = _v58;
              const _v75: any = rt.global(59);
              acc = _v75;
              const _v76: any = 102;
              acc = _v76;
              const _v77: any = 153;
              acc = _v77;
              const _v78: any = 69;
              acc = _v78;
              const _v79: any = 44;
              acc = _v79;
              const _v80: any = 0;
              acc = _v80;
              const _v81: any = 15;
              acc = _v81;
              const _v82: any = this;
              acc = _v82;
              const _v83: any = await rt.send(_v82, "window", [_v75]);
              acc = _v83;
              const _v84: any = await rt.send(_v82, "eachElementDo", [_v76]);
              acc = _v84;
              const _v85: any = await rt.send(_v82, "eachElementDo", [_v77]);
              acc = _v85;
              const _v86: any = await rt.send(_v82, "moveTo", [_v78, _v79]);
              acc = _v86;
              const _v87: any = await rt.send(_v82, "open", [_v80, _v81]);
              acc = _v87;
              _v1 = _v87;
              const _v88: any = 36;
              acc = _v88;
              const _v89: any = rt.global(477);
              acc = _v89;
              const _v90: any = await rt.send(_v89, "playBed", [_v88]);
              acc = _v90;
              _v1 = _v90;
              const _v91: any = this;
              acc = _v91;
              const _v92: any = rt.get(this, "keyMouseList");
              acc = _v92;
              const _v93: any = rt.object(200, "exitButton");
              acc = _v93;
              const _v94: any = await rt.call(0, "proc0_9", [_v91, _v92, _v93], this);
              acc = _v94;
              _v1 = _v94;
              const _v95: any = rt.get(this, "keyMouseList");
              acc = _v95;
              const _v96: any = rt.object(891, "KeyMouse");
              acc = _v96;
              const _v97: any = await rt.send(_v96, "setList", [_v95]);
              acc = _v97;
              _v1 = _v97;
              const _v98: any = 1;
              acc = _v98;
              const _v99: any = rt.object(996, "User");
              acc = _v99;
              const _v100: any = await rt.send(_v99, "canControl", [_v98]);
              acc = _v100;
              _v1 = _v100;
            } else {
              const _v101: any = rt.get(this, "theItem");
              acc = _v101;
              const _v102: any = rt.object(891, "KeyMouse");
              acc = _v102;
              const _v103: any = await rt.send(_v102, "setCursor", [_v101]);
              acc = _v103;
              _v1 = _v103;
            }
            acc = _v1;
            const _v104: any = 0;
            acc = _v104;
            const _v105: any = rt.setGlobal(518, _v104);
            acc = _v105;
            const _v106: any = 0;
            acc = _v106;
            const _v107: any = 0;
            acc = _v107;
            const _v108: any = this;
            acc = _v108;
            const _v109: any = await rt.send(_v108, "doit", [_v106, _v107]);
            acc = _v109;
            const _v110: any = (temps[0] = _v109);
            acc = _v110;
            let _v111: any = acc;
            const _v112: any = (temps[0] ?? 0);
            acc = _v112;
            const _v113: any = await rt.call(200, "IsObject", [_v112], this);
            acc = _v113;
            _v111 = _v113;
            if (rt.truth(_v113)) {
              let _v114: any = acc;
              const _v115: any = (temps[0] ?? 0);
              acc = _v115;
              const _v116: any = this;
              acc = _v116;
              const _v117: any = await rt.send(_v116, "contains", [_v115]);
              acc = _v117;
              _v114 = _v117;
              if (rt.truth(_v117)) {
                const _v118: any = 0;
                acc = _v118;
                const _v119: any = (temps[0] = _v118);
                acc = _v119;
                _v114 = _v119;
              }
              acc = _v114;
              _v111 = _v114;
            } else {
              const _v120: any = 1;
              acc = _v120;
              const _v121: any = (temps[0] = _v120);
              acc = _v121;
              _v111 = _v121;
            }
            acc = _v111;
            const _v122: any = rt.global(477);
            acc = _v122;
            const _v123: any = await rt.send(_v122, "fade", []);
            acc = _v123;
            let _v124: any = acc;
            const _v125: any = rt.get(this, "prevDialog");
            acc = _v125;
            _v124 = _v125;
            if (rt.truth(_v125)) {
              const _v126: any = rt.get(this, "prevDialog");
              acc = _v126;
              const _v127: any = await rt.send(_v126, "keyMouseList", []);
              acc = _v127;
              _v124 = _v127;
            } else {
              const _v128: any = rt.global(432);
              acc = _v128;
              _v124 = _v128;
            }
            acc = _v124;
            const _v129: any = rt.object(891, "KeyMouse");
            acc = _v129;
            const _v130: any = await rt.send(_v129, "setList", [_v124]);
            acc = _v130;
            const _v131: any = rt.get(this, "keyMouseList");
            acc = _v131;
            const _v132: any = await rt.send(_v131, "release", []);
            acc = _v132;
            const _v133: any = rt.get(this, "keyMouseList");
            acc = _v133;
            const _v134: any = await rt.send(_v133, "dispose", []);
            acc = _v134;
            const _v135: any = rt.get(this, "prevDialog");
            acc = _v135;
            const _v136: any = rt.setGlobal(502, _v135);
            acc = _v136;
            const _v137: any = this;
            acc = _v137;
            const _v138: any = 291;
            acc = _v138;
            const _v139: any = await rt.call(0, "proc0_15", [_v137, _v138], this);
            acc = _v139;
            const _v140: any = this;
            acc = _v140;
            const _v141: any = await rt.send(_v140, "dispose", []);
            acc = _v141;
            const _v142: any = 11;
            acc = _v142;
            const _v143: any = rt.get(this, "nsTop");
            acc = _v143;
            const _v144: any = 1;
            acc = _v144;
            const _v145: any = rt.op("+", ...[_v143, _v144]);
            acc = _v145;
            const _v146: any = rt.get(this, "nsLeft");
            acc = _v146;
            const _v147: any = rt.get(this, "nsBottom");
            acc = _v147;
            const _v148: any = 1;
            acc = _v148;
            const _v149: any = rt.op("-", ...[_v147, _v148]);
            acc = _v149;
            const _v150: any = rt.get(this, "nsRight");
            acc = _v150;
            const _v151: any = 3;
            acc = _v151;
            const _v152: any = rt.op("-", ...[_v150, _v151]);
            acc = _v152;
            const _v153: any = 2;
            acc = _v153;
            const _v154: any = 0;
            acc = _v154;
            const _v155: any = 0;
            acc = _v155;
            const _v156: any = await rt.call(200, "Graph", [_v142, _v145, _v146, _v149, _v152, _v153, _v154, _v155], this);
            acc = _v156;
            const _v157: any = 0;
            acc = _v157;
            const _v158: any = await rt.call(0, "proc0_17", [_v157], this);
            acc = _v158;
            const _v159: any = (temps[0] ?? 0);
            acc = _v159;
            const _acc160: any = acc;
            const _v161: any = 200;
            acc = _v161;
            const _args162: any[] = [_v161];
            await rt.call(200, "DisposeScript", _args162, this);
            const _v163: any = _args162.length === 2 ? _args162[1] : _acc160;
            acc = _v163;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
      {
        name: "relaxButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 9, "key": 1, "view": 250, "loop": 3, "priority": 15},
        methods: {
          // SCI lowcost.sc: relaxButton.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = rt.global(323);
            acc = _v1;
            const _v2: any = (temps[1] = _v1);
            acc = _v2;
            const _v3: any = await rt.superSend(this, {"script": 200, "name": "relaxButton"}, "doit", []);
            acc = _v3;
            const _v4: any = (temps[0] = _v3);
            acc = _v4;
            const _v5: any = 6;
            acc = _v5;
            const _v6: any = rt.global(417);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "doit", [_v5]);
            acc = _v7;
            let _v8: any = acc;
            const _v9: any = (temps[1] ?? 0);
            acc = _v9;
            const _v10: any = 60;
            acc = _v10;
            const _v11: any = rt.op("==", ...[_v9, _v10]);
            acc = _v11;
            _v8 = _v11;
            if (rt.truth(_v11)) {
              const _v12: any = 200;
              acc = _v12;
              const _v13: any = 0;
              acc = _v13;
              const _v14: any = await rt.call(104, "proc104_1", [_v12, _v13], this);
              acc = _v14;
              _v8 = _v14;
            } else {
              let _v15: any = acc;
              const _v16: any = rt.global(465);
              acc = _v16;
              const _v17: any = rt.op("not", ...[_v16]);
              acc = _v17;
              _v15 = _v17;
              if (rt.truth(_v17)) {
                const _v18: any = 2;
                acc = _v18;
                const _v19: any = await rt.call(0, "proc0_13", [_v18], this);
                acc = _v19;
                _v15 = _v19;
              }
              acc = _v15;
              _v8 = _v15;
              const _v20: any = 1;
              acc = _v20;
              const _v21: any = rt.setGlobal(465, _v20);
              acc = _v21;
              _v8 = _v21;
              const _v22: any = rt.global(302);
              acc = _v22;
              const _v23: any = await rt.send(_v22, "relax", []);
              acc = _v23;
              const _v24: any = 3;
              acc = _v24;
              const _v25: any = rt.op("+", ...[_v23, _v24]);
              acc = _v25;
              const _v26: any = rt.global(302);
              acc = _v26;
              const _v27: any = await rt.send(_v26, "relax", [_v25]);
              acc = _v27;
              _v8 = _v27;
              let _v28: any = acc;
              const _v29: any = rt.global(302);
              acc = _v29;
              const _v30: any = await rt.send(_v29, "relax", []);
              acc = _v30;
              const _v31: any = 50;
              acc = _v31;
              const _v32: any = rt.op(">", ...[_v30, _v31]);
              acc = _v32;
              _v28 = _v32;
              if (rt.truth(_v32)) {
                const _v33: any = 50;
                acc = _v33;
                const _v34: any = rt.global(302);
                acc = _v34;
                const _v35: any = await rt.send(_v34, "relax", [_v33]);
                acc = _v35;
                _v28 = _v35;
              }
              acc = _v28;
              _v8 = _v28;
            }
            acc = _v8;
            const _v36: any = (temps[0] ?? 0);
            acc = _v36;
            return _v36;
            return acc;
          },
        },
      },
      {
        name: "exitButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 143, "key": 120, "view": 250},
        methods: {
        },
      },
      {
        name: "theChair",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 60, "nsLeft": 32, "view": 700, "cel": 1, "priority": 13},
        methods: {
        },
      },
      {
        name: "theSaying",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 28, "nsLeft": 49, "view": 700, "cel": 2},
        methods: {
        },
      },
      {
        name: "theStool",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 81, "nsLeft": 108, "view": 700, "cel": 3},
        methods: {
        },
      },
      {
        name: "computerScript",
        className: "DialogScript",
        parent: {"script": 110, "name": "DialogScript"},
        isClass: false,
        properties: {},
        methods: {
          // SCI lowcost.sc: computerScript.handleEvent
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
              const _v5: any = 4;
              acc = _v5;
              const _v6: any = 160;
              acc = _v6;
              const _v7: any = 100;
              acc = _v7;
              const _v8: any = (args[0] ?? 0);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "type", [_v5]);
              acc = _v9;
              const _v10: any = await rt.send(_v8, "x", [_v6]);
              acc = _v10;
              const _v11: any = await rt.send(_v8, "y", [_v7]);
              acc = _v11;
              _v1 = _v11;
              const _v12: any = 1;
              acc = _v12;
              const _v13: any = rt.set(this, "cycles", _v12);
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
                  let _v18: any = acc;
                  let _v19: any = 1;
                  if (rt.truth(_v19)) {
                    const _v20: any = rt.global(323);
                    acc = _v20;
                    const _v21: any = 60;
                    acc = _v21;
                    const _v22: any = rt.op("<", ...[_v20, _v21]);
                    acc = _v22;
                    _v19 = _v22;
                  }
                  if (rt.truth(_v19)) {
                    const _v23: any = 6;
                    acc = _v23;
                    const _v24: any = await rt.call(0, "proc0_6", [_v23], this);
                    acc = _v24;
                    _v19 = _v24;
                  }
                  if (rt.truth(_v19)) {
                    const _v25: any = rt.global(408);
                    acc = _v25;
                    _v19 = _v25;
                  }
                  acc = _v19;
                  _v18 = _v19;
                  if (rt.truth(_v19)) {
                    const _v26: any = 60;
                    acc = _v26;
                    const _v27: any = rt.set(this, "cycles", _v26);
                    acc = _v27;
                    _v18 = _v27;
                    const _v28: any = rt.object(200, "relaxButton");
                    acc = _v28;
                    const _v29: any = await rt.send(_v28, "key", []);
                    acc = _v29;
                    const _v30: any = (args[0] ?? 0);
                    acc = _v30;
                    const _v31: any = await rt.send(_v30, "message", [_v29]);
                    acc = _v31;
                    _v18 = _v31;
                    let _v32: any = acc;
                    const _v33: any = rt.setGlobal(408, rt.op("-", rt.global(408), 1));
                    acc = _v33;
                    _v32 = _v33;
                    if (rt.truth(_v33)) {
                      const _v34: any = rt.set(this, "state", rt.op("-", rt.get(this, "state"), 1));
                      acc = _v34;
                      _v32 = _v34;
                    }
                    acc = _v32;
                    _v18 = _v32;
                  }
                  acc = _v18;
                  _v14 = _v18;
                  break _branch16;
                }
                const _v35: any = (args[0] ?? 0);
                acc = _v35;
                const _v36: any = 0;
                acc = _v36;
                const _v37: any = await rt.superSend(this, {"script": 200, "name": "computerScript"}, "handleEvent", [_v35, _v36]);
                acc = _v37;
                _v14 = _v37;
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
    exports: {"0": "lowcost"},
  });
}
