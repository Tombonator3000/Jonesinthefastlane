// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/security.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 7f417a25f475ad3aa293c2b1d3b287e664a2f0c7ae56b12707dcdfd4d3d1bc7d
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(202, {
    name: "security",
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
        name: "security",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI security.sc: security.init
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
                const _v12: any = await rt.call(202, "Palette", [_v8, _v9, _v10, _v11], this);
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
                const _v17: any = await rt.call(202, "Palette", [_v13, _v14, _v15, _v16], this);
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
              const _v20: any = rt.object(202, "dialogKeyMouse");
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
              const _v31: any = 2;
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
                const _v38: any = rt.object(202, "computerScript");
                acc = _v38;
                const _v39: any = this;
                acc = _v39;
                const _v40: any = await rt.send(_v39, "setScript", [_v38]);
                acc = _v40;
                _v33 = _v40;
                const _v41: any = rt.object(202, "computerScript");
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
              const _v48: any = 2;
              acc = _v48;
              const _v49: any = rt.op("==", ...[_v47, _v48]);
              acc = _v49;
              _v45 = _v49;
              if (rt.truth(_v49)) {
                const _v50: any = 702;
                acc = _v50;
                _v45 = _v50;
              } else {
                const _v51: any = 698;
                acc = _v51;
                _v45 = _v51;
              }
              acc = _v45;
              const _v52: any = rt.object(202, "background");
              acc = _v52;
              const _v53: any = await rt.send(_v52, "view", [_v45]);
              acc = _v53;
              _v1 = _v53;
              const _v54: any = rt.object(202, "background");
              acc = _v54;
              const _v55: any = rt.object(202, "exitButton");
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
              const _v61: any = 2;
              acc = _v61;
              const _v62: any = rt.op("==", ...[_v60, _v61]);
              acc = _v62;
              _v58 = _v62;
              if (rt.truth(_v62)) {
                const _v63: any = rt.object(202, "relaxButton");
                acc = _v63;
                const _v64: any = this;
                acc = _v64;
                const _v65: any = await rt.send(_v64, "add", [_v63]);
                acc = _v65;
                _v58 = _v65;
                let _v66: any = acc;
                const _v67: any = 24;
                acc = _v67;
                const _v68: any = rt.global(302);
                acc = _v68;
                const _v69: any = await rt.send(_v68, "durables", []);
                acc = _v69;
                const _v70: any = await rt.send(_v69, "objectAtIndexQuan", [_v67]);
                acc = _v70;
                _v66 = _v70;
                if (rt.truth(_v70)) {
                  const _v71: any = rt.object(202, "theColorTV");
                  acc = _v71;
                  const _v72: any = this;
                  acc = _v72;
                  const _v73: any = await rt.send(_v72, "add", [_v71]);
                  acc = _v73;
                  _v66 = _v73;
                }
                acc = _v66;
                _v58 = _v66;
                let _v74: any = acc;
                const _v75: any = 26;
                acc = _v75;
                const _v76: any = rt.global(302);
                acc = _v76;
                const _v77: any = await rt.send(_v76, "durables", []);
                acc = _v77;
                const _v78: any = await rt.send(_v77, "objectAtIndexQuan", [_v75]);
                acc = _v78;
                _v74 = _v78;
                if (rt.truth(_v78)) {
                  const _v79: any = rt.object(202, "theStereo");
                  acc = _v79;
                  const _v80: any = this;
                  acc = _v80;
                  const _v81: any = await rt.send(_v80, "add", [_v79]);
                  acc = _v81;
                  _v74 = _v81;
                }
                acc = _v74;
                _v58 = _v74;
                let _v82: any = acc;
                const _v83: any = 31;
                acc = _v83;
                const _v84: any = rt.global(302);
                acc = _v84;
                const _v85: any = await rt.send(_v84, "durables", []);
                acc = _v85;
                const _v86: any = await rt.send(_v85, "objectAtIndexQuan", [_v83]);
                acc = _v86;
                _v82 = _v86;
                if (rt.truth(_v86)) {
                  const _v87: any = rt.object(202, "theBooks");
                  acc = _v87;
                  const _v88: any = this;
                  acc = _v88;
                  const _v89: any = await rt.send(_v88, "add", [_v87]);
                  acc = _v89;
                  _v82 = _v89;
                }
                acc = _v82;
                _v58 = _v82;
                let _v90: any = acc;
                const _v91: any = 25;
                acc = _v91;
                const _v92: any = rt.global(302);
                acc = _v92;
                const _v93: any = await rt.send(_v92, "durables", []);
                acc = _v93;
                const _v94: any = await rt.send(_v93, "objectAtIndexQuan", [_v91]);
                acc = _v94;
                _v90 = _v94;
                if (rt.truth(_v94)) {
                  const _v95: any = rt.object(202, "theVCR");
                  acc = _v95;
                  const _v96: any = this;
                  acc = _v96;
                  const _v97: any = await rt.send(_v96, "add", [_v95]);
                  acc = _v97;
                  _v90 = _v97;
                }
                acc = _v90;
                _v58 = _v90;
              }
              acc = _v58;
              _v1 = _v58;
              const _v98: any = rt.global(59);
              acc = _v98;
              const _v99: any = 102;
              acc = _v99;
              const _v100: any = 153;
              acc = _v100;
              const _v101: any = 69;
              acc = _v101;
              const _v102: any = 44;
              acc = _v102;
              const _v103: any = 0;
              acc = _v103;
              const _v104: any = 15;
              acc = _v104;
              const _v105: any = this;
              acc = _v105;
              const _v106: any = await rt.send(_v105, "window", [_v98]);
              acc = _v106;
              const _v107: any = await rt.send(_v105, "eachElementDo", [_v99]);
              acc = _v107;
              const _v108: any = await rt.send(_v105, "eachElementDo", [_v100]);
              acc = _v108;
              const _v109: any = await rt.send(_v105, "moveTo", [_v101, _v102]);
              acc = _v109;
              const _v110: any = await rt.send(_v105, "open", [_v103, _v104]);
              acc = _v110;
              _v1 = _v110;
              const _v111: any = 34;
              acc = _v111;
              const _v112: any = rt.global(477);
              acc = _v112;
              const _v113: any = await rt.send(_v112, "playBed", [_v111]);
              acc = _v113;
              _v1 = _v113;
              const _v114: any = this;
              acc = _v114;
              const _v115: any = rt.get(this, "keyMouseList");
              acc = _v115;
              const _v116: any = rt.object(202, "exitButton");
              acc = _v116;
              const _v117: any = await rt.call(0, "proc0_9", [_v114, _v115, _v116], this);
              acc = _v117;
              _v1 = _v117;
              const _v118: any = rt.get(this, "keyMouseList");
              acc = _v118;
              const _v119: any = rt.object(891, "KeyMouse");
              acc = _v119;
              const _v120: any = await rt.send(_v119, "setList", [_v118]);
              acc = _v120;
              _v1 = _v120;
              const _v121: any = 1;
              acc = _v121;
              const _v122: any = rt.object(996, "User");
              acc = _v122;
              const _v123: any = await rt.send(_v122, "canControl", [_v121]);
              acc = _v123;
              _v1 = _v123;
            } else {
              const _v124: any = rt.get(this, "theItem");
              acc = _v124;
              const _v125: any = rt.object(891, "KeyMouse");
              acc = _v125;
              const _v126: any = await rt.send(_v125, "setCursor", [_v124]);
              acc = _v126;
              _v1 = _v126;
            }
            acc = _v1;
            const _v127: any = 0;
            acc = _v127;
            const _v128: any = rt.setGlobal(518, _v127);
            acc = _v128;
            const _v129: any = 0;
            acc = _v129;
            const _v130: any = 0;
            acc = _v130;
            const _v131: any = this;
            acc = _v131;
            const _v132: any = await rt.send(_v131, "doit", [_v129, _v130]);
            acc = _v132;
            const _v133: any = (temps[0] = _v132);
            acc = _v133;
            let _v134: any = acc;
            const _v135: any = (temps[0] ?? 0);
            acc = _v135;
            const _v136: any = await rt.call(202, "IsObject", [_v135], this);
            acc = _v136;
            _v134 = _v136;
            if (rt.truth(_v136)) {
              let _v137: any = acc;
              const _v138: any = (temps[0] ?? 0);
              acc = _v138;
              const _v139: any = this;
              acc = _v139;
              const _v140: any = await rt.send(_v139, "contains", [_v138]);
              acc = _v140;
              _v137 = _v140;
              if (rt.truth(_v140)) {
                const _v141: any = 0;
                acc = _v141;
                const _v142: any = (temps[0] = _v141);
                acc = _v142;
                _v137 = _v142;
              }
              acc = _v137;
              _v134 = _v137;
            } else {
              const _v143: any = 1;
              acc = _v143;
              const _v144: any = (temps[0] = _v143);
              acc = _v144;
              _v134 = _v144;
            }
            acc = _v134;
            const _v145: any = rt.global(477);
            acc = _v145;
            const _v146: any = await rt.send(_v145, "fade", []);
            acc = _v146;
            let _v147: any = acc;
            const _v148: any = rt.get(this, "prevDialog");
            acc = _v148;
            _v147 = _v148;
            if (rt.truth(_v148)) {
              const _v149: any = rt.get(this, "prevDialog");
              acc = _v149;
              const _v150: any = await rt.send(_v149, "keyMouseList", []);
              acc = _v150;
              _v147 = _v150;
            } else {
              const _v151: any = rt.global(432);
              acc = _v151;
              _v147 = _v151;
            }
            acc = _v147;
            const _v152: any = rt.object(891, "KeyMouse");
            acc = _v152;
            const _v153: any = await rt.send(_v152, "setList", [_v147]);
            acc = _v153;
            const _v154: any = rt.get(this, "keyMouseList");
            acc = _v154;
            const _v155: any = await rt.send(_v154, "release", []);
            acc = _v155;
            const _v156: any = rt.get(this, "keyMouseList");
            acc = _v156;
            const _v157: any = await rt.send(_v156, "dispose", []);
            acc = _v157;
            const _v158: any = rt.get(this, "prevDialog");
            acc = _v158;
            const _v159: any = rt.setGlobal(502, _v158);
            acc = _v159;
            const _v160: any = this;
            acc = _v160;
            const _v161: any = 291;
            acc = _v161;
            const _v162: any = await rt.call(0, "proc0_15", [_v160, _v161], this);
            acc = _v162;
            const _v163: any = this;
            acc = _v163;
            const _v164: any = await rt.send(_v163, "dispose", []);
            acc = _v164;
            const _v165: any = 11;
            acc = _v165;
            const _v166: any = rt.get(this, "nsTop");
            acc = _v166;
            const _v167: any = 1;
            acc = _v167;
            const _v168: any = rt.op("+", ...[_v166, _v167]);
            acc = _v168;
            const _v169: any = rt.get(this, "nsLeft");
            acc = _v169;
            const _v170: any = rt.get(this, "nsBottom");
            acc = _v170;
            const _v171: any = 1;
            acc = _v171;
            const _v172: any = rt.op("-", ...[_v170, _v171]);
            acc = _v172;
            const _v173: any = rt.get(this, "nsRight");
            acc = _v173;
            const _v174: any = 3;
            acc = _v174;
            const _v175: any = rt.op("-", ...[_v173, _v174]);
            acc = _v175;
            const _v176: any = 2;
            acc = _v176;
            const _v177: any = 0;
            acc = _v177;
            const _v178: any = 0;
            acc = _v178;
            const _v179: any = await rt.call(202, "Graph", [_v165, _v168, _v169, _v172, _v175, _v176, _v177, _v178], this);
            acc = _v179;
            const _v180: any = 0;
            acc = _v180;
            const _v181: any = await rt.call(0, "proc0_17", [_v180], this);
            acc = _v181;
            const _v182: any = (temps[0] ?? 0);
            acc = _v182;
            const _acc183: any = acc;
            const _v184: any = 202;
            acc = _v184;
            const _args185: any[] = [_v184];
            await rt.call(202, "DisposeScript", _args185, this);
            const _v186: any = _args185.length === 2 ? _args185[1] : _acc183;
            acc = _v186;
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
        properties: {"state": 65, "nsTop": 108, "nsLeft": 9, "key": 1, "view": 250, "loop": 3},
        methods: {
          // SCI security.sc: relaxButton.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = rt.global(323);
            acc = _v1;
            const _v2: any = (temps[1] = _v1);
            acc = _v2;
            const _v3: any = await rt.superSend(this, {"script": 202, "name": "relaxButton"}, "doit", []);
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
              const _v12: any = 202;
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
        name: "theColorTV",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 34, "nsLeft": 137, "view": 702, "cel": 1},
        methods: {
        },
      },
      {
        name: "theStereo",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 43, "nsLeft": 121, "view": 702, "loop": 1, "cel": 4},
        methods: {
        },
      },
      {
        name: "theBooks",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 15, "nsLeft": 120, "view": 702, "cel": 3, "priority": 13},
        methods: {
        },
      },
      {
        name: "theVCR",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 64, "nsLeft": 137, "view": 702, "cel": 2},
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
          // SCI security.sc: computerScript.handleEvent
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
                    const _v28: any = rt.object(202, "relaxButton");
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
                const _v37: any = await rt.superSend(this, {"script": 202, "name": "computerScript"}, "handleEvent", [_v35, _v36]);
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
    exports: {"0": "security"},
  });
}
