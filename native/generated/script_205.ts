// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/factory.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 4ef97d3727c33c3657f2ca65d4625556fc77ad380352ca5f0503d8d469ac65a7
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(205, {
    name: "factory",
    uses: [0, 104, 108, 110, 255, 891, 996, 999],
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
        name: "factory",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI factory.sc: factory.init
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
              const _v4: any = 131;
              acc = _v4;
              const _v5: any = 205;
              acc = _v5;
              const _v6: any = await rt.call(205, "Load", [_v4, _v5], this);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 3;
              acc = _v7;
              const _v8: any = await rt.call(0, "proc0_17", [_v7], this);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = rt.object(205, "dialogKeyMouse");
              acc = _v9;
              const _v10: any = rt.set(this, "keyMouseList", _v9);
              acc = _v10;
              _v1 = _v10;
              const _v11: any = rt.global(502);
              acc = _v11;
              const _v12: any = rt.set(this, "prevDialog", _v11);
              acc = _v12;
              _v1 = _v12;
              const _v13: any = this;
              acc = _v13;
              const _v14: any = rt.setGlobal(502, _v13);
              acc = _v14;
              _v1 = _v14;
              const _v15: any = 9;
              acc = _v15;
              const _v16: any = rt.setGlobal(440, _v15);
              acc = _v16;
              _v1 = _v16;
              const _v17: any = 129;
              acc = _v17;
              const _v18: any = rt.setGlobal(441, _v17);
              acc = _v18;
              _v1 = _v18;
              const _v19: any = 120;
              acc = _v19;
              const _v20: any = rt.setGlobal(442, _v19);
              acc = _v20;
              _v1 = _v20;
              let _v21: any = acc;
              const _v22: any = rt.global(534);
              acc = _v22;
              const _v23: any = 2;
              acc = _v23;
              const _v24: any = rt.op("<", ...[_v22, _v23]);
              acc = _v24;
              _v21 = _v24;
              if (rt.truth(_v24)) {
                const _v25: any = 128;
                acc = _v25;
                const _v26: any = rt.object(205, "theTalker");
                acc = _v26;
                const _v27: any = await rt.send(_v26, "view", []);
                acc = _v27;
                const _v28: any = await rt.call(205, "Load", [_v25, _v27], this);
                acc = _v28;
                _v21 = _v28;
              }
              acc = _v21;
              _v1 = _v21;
              const _v29: any = (args[0] ?? 0);
              acc = _v29;
              const _v30: any = rt.set(this, "client", _v29);
              acc = _v30;
              _v1 = _v30;
              const _v31: any = 2;
              acc = _v31;
              const _v32: any = rt.global(417);
              acc = _v32;
              const _v33: any = await rt.send(_v32, "doit", [_v31]);
              acc = _v33;
              _v1 = _v33;
              const _v34: any = 5;
              acc = _v34;
              const _v35: any = rt.setGlobal(400, _v34);
              acc = _v35;
              _v1 = _v35;
              let _v36: any = acc;
              const _v37: any = rt.global(302);
              acc = _v37;
              const _v38: any = await rt.send(_v37, "playing", []);
              acc = _v38;
              const _v39: any = 29;
              acc = _v39;
              const _v40: any = rt.op("==", ...[_v38, _v39]);
              acc = _v40;
              _v36 = _v40;
              if (rt.truth(_v40)) {
                const _v41: any = rt.object(205, "computerScript");
                acc = _v41;
                const _v42: any = this;
                acc = _v42;
                const _v43: any = await rt.send(_v42, "setScript", [_v41]);
                acc = _v43;
                _v36 = _v43;
                const _v44: any = rt.object(205, "computerScript");
                acc = _v44;
                const _v45: any = await rt.send(_v44, "cue", []);
                acc = _v45;
                _v36 = _v45;
              }
              acc = _v36;
              _v1 = _v36;
              const _v46: any = rt.global(59);
              acc = _v46;
              const _v47: any = rt.object(205, "background");
              acc = _v47;
              const _v48: any = rt.object(205, "theTalker");
              acc = _v48;
              const _v49: any = this;
              acc = _v49;
              const _v50: any = await rt.send(_v49, "window", [_v46]);
              acc = _v50;
              const _v51: any = await rt.send(_v49, "add", [_v47, _v48]);
              acc = _v51;
              _v1 = _v51;
              let _v52: any = acc;
              const _v53: any = rt.global(302);
              acc = _v53;
              const _v54: any = await rt.send(_v53, "worksAt", []);
              acc = _v54;
              const _v55: any = 5;
              acc = _v55;
              const _v56: any = rt.op("==", ...[_v54, _v55]);
              acc = _v56;
              _v52 = _v56;
              if (rt.truth(_v56)) {
                const _v57: any = rt.object(205, "workButton");
                acc = _v57;
                const _v58: any = this;
                acc = _v58;
                const _v59: any = await rt.send(_v58, "add", [_v57]);
                acc = _v59;
                _v52 = _v59;
              }
              acc = _v52;
              _v1 = _v52;
              const _v60: any = rt.object(205, "exitButton");
              acc = _v60;
              const _v61: any = this;
              acc = _v61;
              const _v62: any = await rt.send(_v61, "add", [_v60]);
              acc = _v62;
              _v1 = _v62;
              const _v63: any = rt.object(205, "theTalker");
              acc = _v63;
              const _v64: any = rt.setGlobal(413, _v63);
              acc = _v64;
              _v1 = _v64;
              const _v65: any = 102;
              acc = _v65;
              const _v66: any = 1;
              acc = _v66;
              const _v67: any = 153;
              acc = _v67;
              const _v68: any = 69;
              acc = _v68;
              const _v69: any = 44;
              acc = _v69;
              const _v70: any = 0;
              acc = _v70;
              const _v71: any = 15;
              acc = _v71;
              const _v72: any = this;
              acc = _v72;
              const _v73: any = await rt.send(_v72, "eachElementDo", [_v65, _v66]);
              acc = _v73;
              const _v74: any = await rt.send(_v72, "eachElementDo", [_v67]);
              acc = _v74;
              const _v75: any = await rt.send(_v72, "moveTo", [_v68, _v69]);
              acc = _v75;
              const _v76: any = await rt.send(_v72, "open", [_v70, _v71]);
              acc = _v76;
              _v1 = _v76;
              const _v77: any = 46;
              acc = _v77;
              const _v78: any = rt.global(477);
              acc = _v78;
              const _v79: any = await rt.send(_v78, "playBed", [_v77]);
              acc = _v79;
              _v1 = _v79;
              let _v80: any = acc;
              const _v81: any = rt.global(302);
              acc = _v81;
              const _v82: any = await rt.send(_v81, "worksAt", []);
              acc = _v82;
              const _v83: any = 5;
              acc = _v83;
              const _v84: any = rt.op("==", ...[_v82, _v83]);
              acc = _v84;
              _v80 = _v84;
              if (rt.truth(_v84)) {
                const _v85: any = rt.object(205, "timeClock");
                acc = _v85;
                const _v86: any = this;
                acc = _v86;
                const _v87: any = await rt.send(_v86, "add", [_v85]);
                acc = _v87;
                _v80 = _v87;
                const _v88: any = rt.object(205, "timeClock");
                acc = _v88;
                const _v89: any = await rt.send(_v88, "init", []);
                acc = _v89;
                const _v90: any = await rt.send(_v88, "setSize", []);
                acc = _v90;
                const _v91: any = await rt.send(_v88, "draw", []);
                acc = _v91;
                _v80 = _v91;
              }
              acc = _v80;
              _v1 = _v80;
              const _v92: any = this;
              acc = _v92;
              const _v93: any = rt.get(this, "keyMouseList");
              acc = _v93;
              const _v94: any = rt.object(205, "exitButton");
              acc = _v94;
              const _v95: any = await rt.call(0, "proc0_9", [_v92, _v93, _v94], this);
              acc = _v95;
              _v1 = _v95;
              const _v96: any = rt.get(this, "keyMouseList");
              acc = _v96;
              const _v97: any = rt.object(891, "KeyMouse");
              acc = _v97;
              const _v98: any = await rt.send(_v97, "setList", [_v96]);
              acc = _v98;
              _v1 = _v98;
              const _v99: any = rt.global(302);
              acc = _v99;
              const _v100: any = await rt.send(_v99, "cash", []);
              acc = _v100;
              const _v101: any = 1;
              acc = _v101;
              const _v102: any = rt.op("-", ...[_v100, _v101]);
              acc = _v102;
              const _v103: any = rt.global(305);
              acc = _v103;
              const _v104: any = await rt.send(_v103, "setSize", []);
              acc = _v104;
              const _v105: any = await rt.send(_v103, "value", [_v102]);
              acc = _v105;
              const _v106: any = await rt.send(_v103, "draw", []);
              acc = _v106;
              _v1 = _v106;
              const _v107: any = 1;
              acc = _v107;
              const _v108: any = rt.object(996, "User");
              acc = _v108;
              const _v109: any = await rt.send(_v108, "canControl", [_v107]);
              acc = _v109;
              _v1 = _v109;
              let _v110: any = acc;
              const _v111: any = await rt.call(0, "proc0_14", [], this);
              acc = _v111;
              _v110 = _v111;
              if (rt.truth(_v111)) {
                const _v112: any = rt.global(413);
                acc = _v112;
                const _v113: any = await rt.send(_v112, "init", []);
                acc = _v113;
                _v110 = _v113;
                const _v114: any = 205;
                acc = _v114;
                const _v115: any = 0;
                acc = _v115;
                const _v116: any = 7;
                acc = _v116;
                const _v117: any = await rt.call(205, "Random", [_v115, _v116], this);
                acc = _v117;
                const _v118: any = 310;
                acc = _v118;
                const _v119: any = rt.global(413);
                acc = _v119;
                const _v120: any = rt.global(440);
                acc = _v120;
                const _v121: any = rt.global(441);
                acc = _v121;
                const _v122: any = rt.global(442);
                acc = _v122;
                const _v123: any = 70;
                acc = _v123;
                const _v124: any = 100;
                acc = _v124;
                const _v125: any = 25;
                acc = _v125;
                const _v126: any = rt.global(426);
                acc = _v126;
                const _v127: any = await rt.call(255, "Print", [_v114, _v117, _v118, _v119, _v120, _v121, _v122, _v123, _v124, _v125, _v126], this);
                acc = _v127;
                _v110 = _v127;
              }
              acc = _v110;
              _v1 = _v110;
            } else {
              const _v128: any = rt.get(this, "theItem");
              acc = _v128;
              const _v129: any = rt.object(891, "KeyMouse");
              acc = _v129;
              const _v130: any = await rt.send(_v129, "setCursor", [_v128]);
              acc = _v130;
              _v1 = _v130;
            }
            acc = _v1;
            const _v131: any = 0;
            acc = _v131;
            const _v132: any = rt.setGlobal(518, _v131);
            acc = _v132;
            const _v133: any = 0;
            acc = _v133;
            const _v134: any = 0;
            acc = _v134;
            const _v135: any = this;
            acc = _v135;
            const _v136: any = await rt.send(_v135, "doit", [_v133, _v134]);
            acc = _v136;
            const _v137: any = (temps[0] = _v136);
            acc = _v137;
            let _v138: any = acc;
            const _v139: any = (temps[0] ?? 0);
            acc = _v139;
            const _v140: any = await rt.call(205, "IsObject", [_v139], this);
            acc = _v140;
            _v138 = _v140;
            if (rt.truth(_v140)) {
              let _v141: any = acc;
              const _v142: any = (temps[0] ?? 0);
              acc = _v142;
              const _v143: any = this;
              acc = _v143;
              const _v144: any = await rt.send(_v143, "contains", [_v142]);
              acc = _v144;
              _v141 = _v144;
              if (rt.truth(_v144)) {
                const _v145: any = 0;
                acc = _v145;
                const _v146: any = (temps[0] = _v145);
                acc = _v146;
                _v141 = _v146;
              }
              acc = _v141;
              _v138 = _v141;
            } else {
              const _v147: any = 1;
              acc = _v147;
              const _v148: any = (temps[0] = _v147);
              acc = _v148;
              _v138 = _v148;
            }
            acc = _v138;
            const _v149: any = rt.global(477);
            acc = _v149;
            const _v150: any = await rt.send(_v149, "fade", []);
            acc = _v150;
            let _v151: any = acc;
            const _v152: any = rt.get(this, "prevDialog");
            acc = _v152;
            _v151 = _v152;
            if (rt.truth(_v152)) {
              const _v153: any = rt.get(this, "prevDialog");
              acc = _v153;
              const _v154: any = await rt.send(_v153, "keyMouseList", []);
              acc = _v154;
              _v151 = _v154;
            } else {
              const _v155: any = rt.global(432);
              acc = _v155;
              _v151 = _v155;
            }
            acc = _v151;
            const _v156: any = rt.object(891, "KeyMouse");
            acc = _v156;
            const _v157: any = await rt.send(_v156, "setList", [_v151]);
            acc = _v157;
            const _v158: any = rt.get(this, "keyMouseList");
            acc = _v158;
            const _v159: any = await rt.send(_v158, "release", []);
            acc = _v159;
            const _v160: any = rt.get(this, "prevDialog");
            acc = _v160;
            const _v161: any = rt.setGlobal(502, _v160);
            acc = _v161;
            const _v162: any = rt.get(this, "keyMouseList");
            acc = _v162;
            const _v163: any = await rt.send(_v162, "dispose", []);
            acc = _v163;
            const _v164: any = this;
            acc = _v164;
            const _v165: any = 291;
            acc = _v165;
            const _v166: any = await rt.call(0, "proc0_15", [_v164, _v165], this);
            acc = _v166;
            const _v167: any = rt.object(205, "workButton");
            acc = _v167;
            const _v168: any = await rt.send(_v167, "dispose", []);
            acc = _v168;
            const _v169: any = this;
            acc = _v169;
            const _v170: any = await rt.send(_v169, "dispose", []);
            acc = _v170;
            const _v171: any = 11;
            acc = _v171;
            const _v172: any = rt.get(this, "nsTop");
            acc = _v172;
            const _v173: any = 1;
            acc = _v173;
            const _v174: any = rt.op("+", ...[_v172, _v173]);
            acc = _v174;
            const _v175: any = rt.get(this, "nsLeft");
            acc = _v175;
            const _v176: any = rt.get(this, "nsBottom");
            acc = _v176;
            const _v177: any = 1;
            acc = _v177;
            const _v178: any = rt.op("-", ...[_v176, _v177]);
            acc = _v178;
            const _v179: any = rt.get(this, "nsRight");
            acc = _v179;
            const _v180: any = 3;
            acc = _v180;
            const _v181: any = rt.op("-", ...[_v179, _v180]);
            acc = _v181;
            const _v182: any = 2;
            acc = _v182;
            const _v183: any = 0;
            acc = _v183;
            const _v184: any = 0;
            acc = _v184;
            const _v185: any = await rt.call(205, "Graph", [_v171, _v174, _v175, _v178, _v181, _v182, _v183, _v184], this);
            acc = _v185;
            const _v186: any = 0;
            acc = _v186;
            const _v187: any = await rt.call(0, "proc0_17", [_v186], this);
            acc = _v187;
            const _v188: any = (temps[0] ?? 0);
            acc = _v188;
            const _acc189: any = acc;
            const _v190: any = 205;
            acc = _v190;
            const _args191: any[] = [_v190];
            await rt.call(205, "DisposeScript", _args191, this);
            const _v192: any = _args191.length === 2 ? _args191[1] : _acc189;
            acc = _v192;
            return acc;
          },
          // SCI factory.sc: factory.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 205, "name": "factory"}, "draw", []);
            acc = _v1;
            let _v2: any = acc;
            const _v3: any = rt.global(518);
            acc = _v3;
            _v2 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = rt.global(302);
              acc = _v4;
              const _v5: any = await rt.send(_v4, "cash", []);
              acc = _v5;
              const _v6: any = 1;
              acc = _v6;
              const _v7: any = rt.op("-", ...[_v5, _v6]);
              acc = _v7;
              const _v8: any = rt.global(305);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "setSize", []);
              acc = _v9;
              const _v10: any = await rt.send(_v8, "value", [_v7]);
              acc = _v10;
              const _v11: any = await rt.send(_v8, "draw", []);
              acc = _v11;
              _v2 = _v11;
            }
            acc = _v2;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 705, "priority": 13},
        methods: {
        },
      },
      {
        name: "exitButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 143, "key": 120, "view": 250, "priority": 15},
        methods: {
        },
      },
      {
        name: "workButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 75, "key": 119, "view": 250, "loop": 1, "priority": 15},
        methods: {
          // SCI factory.sc: workButton.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 23;
            acc = _v1;
            const _v2: any = rt.global(476);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "play", [_v1]);
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = rt.object(205, "timeClock");
            acc = _v5;
            const _v6: any = await rt.send(_v5, "cel", [_v4]);
            acc = _v6;
            const _v7: any = await rt.send(_v5, "draw", []);
            acc = _v7;
            let _v8: any = acc;
            _branch9: {
              const _v10: any = await rt.call(108, "proc108_0", [], this);
              acc = _v10;
              const _v11: any = (temps[0] = _v10);
              acc = _v11;
              const _v12: any = -1;
              acc = _v12;
              const _v13: any = rt.op("==", ...[_v11, _v12]);
              acc = _v13;
              _v8 = _v13;
              acc = _v8;
              if (rt.truth(_v8)) {
                const _v14: any = this;
                acc = _v14;
                const _v15: any = rt.object(205, "factory");
                acc = _v15;
                const _v16: any = await rt.send(_v15, "delete", [_v14]);
                acc = _v16;
                _v8 = _v16;
                const _v17: any = this;
                acc = _v17;
                const _v18: any = await rt.send(_v17, "erase", []);
                acc = _v18;
                _v8 = _v18;
                break _branch9;
              }
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
                const _v23: any = (temps[0] ?? 0);
                acc = _v23;
                const _v24: any = 0;
                acc = _v24;
                const _v25: any = rt.op(">", ...[_v23, _v24]);
                acc = _v25;
                _v19 = _v25;
              }
              acc = _v19;
              _v8 = _v19;
              acc = _v8;
              if (rt.truth(_v8)) {
                const _v26: any = rt.object(205, "timeClock");
                acc = _v26;
                const _v27: any = await rt.send(_v26, "doit", []);
                acc = _v27;
                _v8 = _v27;
                break _branch9;
              }
            }
            acc = _v8;
            const _v28: any = 0;
            acc = _v28;
            const _v29: any = await rt.superSend(this, {"script": 205, "name": "workButton"}, "doit", [_v28]);
            acc = _v29;
            return acc;
          },
        },
      },
      {
        name: "timeClock",
        className: "TimeClock",
        parent: {"script": 104, "name": "TimeClock"},
        isClass: false,
        properties: {"nsTop": 40, "nsLeft": 96},
        methods: {
          // SCI factory.sc: timeClock.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(205, "timeClock");
            acc = _v1;
            const _v2: any = rt.global(502);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "aTimeClock", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 205, "name": "timeClock"}, "setSize", []);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "theTalker",
        className: "Talker",
        parent: {"script": 104, "name": "Talker"},
        isClass: false,
        properties: {"nsTop": 40, "nsLeft": 18, "view": 355},
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
          // SCI factory.sc: computerScript.handleEvent
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
              const _v14: any = (args[0] ?? 0);
              acc = _v14;
              const _v15: any = 1;
              acc = _v15;
              const _v16: any = await rt.superSend(this, {"script": 205, "name": "computerScript"}, "handleEvent", [_v14, _v15]);
              acc = _v16;
              _v1 = _v16;
            }
            acc = _v1;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI factory.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.ref("global", 0, 100);
        acc = _v1;
        const _v2: any = 205;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(205, "Format", [_v1, _v2, _v3], this);
        acc = _v4;
        const _v5: any = rt.ref("global", 0, 100);
        acc = _v5;
        const _v6: any = 205;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = await rt.call(205, "Format", [_v5, _v6, _v7], this);
        acc = _v8;
        const _v9: any = rt.ref("global", 0, 100);
        acc = _v9;
        const _v10: any = 205;
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = await rt.call(205, "Format", [_v9, _v10, _v11], this);
        acc = _v12;
        const _v13: any = rt.ref("global", 0, 100);
        acc = _v13;
        const _v14: any = 205;
        acc = _v14;
        const _v15: any = 3;
        acc = _v15;
        const _v16: any = await rt.call(205, "Format", [_v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = rt.ref("global", 0, 100);
        acc = _v17;
        const _v18: any = 205;
        acc = _v18;
        const _v19: any = 4;
        acc = _v19;
        const _v20: any = await rt.call(205, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = rt.ref("global", 0, 100);
        acc = _v21;
        const _v22: any = 205;
        acc = _v22;
        const _v23: any = 5;
        acc = _v23;
        const _v24: any = await rt.call(205, "Format", [_v21, _v22, _v23], this);
        acc = _v24;
        const _v25: any = rt.ref("global", 0, 100);
        acc = _v25;
        const _v26: any = 205;
        acc = _v26;
        const _v27: any = 6;
        acc = _v27;
        const _v28: any = await rt.call(205, "Format", [_v25, _v26, _v27], this);
        acc = _v28;
        const _v29: any = rt.ref("global", 0, 100);
        acc = _v29;
        const _v30: any = 205;
        acc = _v30;
        const _v31: any = 7;
        acc = _v31;
        const _v32: any = await rt.call(205, "Format", [_v29, _v30, _v31], this);
        acc = _v32;
        return acc;
      },
    },
    exports: {"0": "factory"},
  });
}
