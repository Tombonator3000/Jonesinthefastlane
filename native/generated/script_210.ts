// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/fastFood.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 6781c76938ae17722baa2f3c92e33d1eeb12f122683ef3b5b97792df6f246718
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(210, {
    name: "fastFood",
    uses: [0, 103, 104, 108, 110, 255, 891, 967, 996, 999],
    locals: [-1],
    objects: [
      {
        name: "boughtItem",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI fastFood.sc: boughtItem.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            _loop1: for (;;) {
              const _v3: any = rt.local(210, 0);
              acc = _v3;
              const _v4: any = 20;
              acc = _v4;
              const _v5: any = 54;
              acc = _v5;
              const _v6: any = await rt.call(210, "Random", [_v4, _v5], this);
              acc = _v6;
              const _v7: any = (temps[0] = _v6);
              acc = _v7;
              const _v8: any = rt.op("==", ...[_v3, _v7]);
              acc = _v8;
              if (!rt.truth(_v8)) break _loop1;
              _continue2: {
                const _v9: any = 1;
                acc = _v9;
              }
            }
            const _v10: any = (temps[0] ?? 0);
            acc = _v10;
            const _v11: any = rt.setLocal(210, 0, _v10);
            acc = _v11;
            const _v12: any = 210;
            acc = _v12;
            const _v13: any = rt.local(210, 0);
            acc = _v13;
            const _v14: any = 310;
            acc = _v14;
            const _v15: any = rt.global(413);
            acc = _v15;
            const _v16: any = rt.global(440);
            acc = _v16;
            const _v17: any = rt.global(441);
            acc = _v17;
            const _v18: any = rt.global(442);
            acc = _v18;
            const _v19: any = 25;
            acc = _v19;
            const _v20: any = rt.global(426);
            acc = _v20;
            const _v21: any = await rt.call(255, "Print", [_v12, _v13, _v14, _v15, _v16, _v17, _v18, _v19, _v20], this);
            acc = _v21;
            return acc;
          },
        },
      },
      {
        name: "notEnoughCash",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI fastFood.sc: notEnoughCash.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 16;
            acc = _v1;
            const _v2: any = rt.global(413);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "init", [_v1]);
            acc = _v3;
            const _v4: any = 210;
            acc = _v4;
            const _v5: any = 55;
            acc = _v5;
            const _v6: any = 310;
            acc = _v6;
            const _v7: any = rt.global(413);
            acc = _v7;
            const _v8: any = rt.global(440);
            acc = _v8;
            const _v9: any = rt.global(441);
            acc = _v9;
            const _v10: any = rt.global(442);
            acc = _v10;
            const _v11: any = 70;
            acc = _v11;
            const _v12: any = 70;
            acc = _v12;
            const _v13: any = 25;
            acc = _v13;
            const _v14: any = rt.global(426);
            acc = _v14;
            const _v15: any = await rt.call(255, "Print", [_v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14], this);
            acc = _v15;
            return acc;
          },
        },
      },
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
        name: "fastFood",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI fastFood.sc: fastFood.init
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
              const _v5: any = 210;
              acc = _v5;
              const _v6: any = await rt.call(210, "Load", [_v4, _v5], this);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 2;
              acc = _v7;
              const _v8: any = await rt.call(0, "proc0_17", [_v7], this);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = rt.object(210, "dialogKeyMouse");
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
              const _v15: any = 3;
              acc = _v15;
              const _v16: any = rt.setGlobal(440, _v15);
              acc = _v16;
              _v1 = _v16;
              const _v17: any = 205;
              acc = _v17;
              const _v18: any = rt.setGlobal(441, _v17);
              acc = _v18;
              _v1 = _v18;
              const _v19: any = 80;
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
                const _v26: any = rt.object(210, "theTalker");
                acc = _v26;
                const _v27: any = await rt.send(_v26, "view", []);
                acc = _v27;
                const _v28: any = await rt.call(210, "Load", [_v25, _v27], this);
                acc = _v28;
                _v21 = _v28;
              }
              acc = _v21;
              _v1 = _v21;
              const _v29: any = rt.object(210, "notEnoughCash");
              acc = _v29;
              const _v30: any = rt.setGlobal(424, _v29);
              acc = _v30;
              _v1 = _v30;
              const _v31: any = rt.object(210, "boughtItem");
              acc = _v31;
              const _v32: any = rt.setGlobal(425, _v31);
              acc = _v32;
              _v1 = _v32;
              const _v33: any = rt.object(210, "items");
              acc = _v33;
              const _v34: any = rt.setGlobal(434, _v33);
              acc = _v34;
              _v1 = _v34;
              const _v35: any = (args[0] ?? 0);
              acc = _v35;
              const _v36: any = rt.set(this, "client", _v35);
              acc = _v36;
              _v1 = _v36;
              let _v37: any = acc;
              const _v38: any = rt.global(302);
              acc = _v38;
              const _v39: any = await rt.send(_v38, "playing", []);
              acc = _v39;
              const _v40: any = 29;
              acc = _v40;
              const _v41: any = rt.op("==", ...[_v39, _v40]);
              acc = _v41;
              _v37 = _v41;
              if (rt.truth(_v41)) {
                const _v42: any = rt.object(210, "computerScript");
                acc = _v42;
                const _v43: any = this;
                acc = _v43;
                const _v44: any = await rt.send(_v43, "setScript", [_v42]);
                acc = _v44;
                _v37 = _v44;
                const _v45: any = rt.object(210, "computerScript");
                acc = _v45;
                const _v46: any = await rt.send(_v45, "cue", []);
                acc = _v46;
                _v37 = _v46;
              }
              acc = _v37;
              _v1 = _v37;
              const _v47: any = 2;
              acc = _v47;
              const _v48: any = rt.global(417);
              acc = _v48;
              const _v49: any = await rt.send(_v48, "doit", [_v47]);
              acc = _v49;
              _v1 = _v49;
              const _v50: any = 10;
              acc = _v50;
              const _v51: any = rt.setGlobal(400, _v50);
              acc = _v51;
              _v1 = _v51;
              const _v52: any = rt.global(59);
              acc = _v52;
              const _v53: any = rt.object(210, "background");
              acc = _v53;
              const _v54: any = rt.object(210, "theTalker");
              acc = _v54;
              const _v55: any = rt.object(210, "items");
              acc = _v55;
              const _v56: any = rt.object(210, "hamburgers");
              acc = _v56;
              const _v57: any = rt.object(210, "cheeseburgers");
              acc = _v57;
              const _v58: any = rt.object(210, "chicken");
              acc = _v58;
              const _v59: any = rt.object(210, "fries");
              acc = _v59;
              const _v60: any = rt.object(210, "shakes");
              acc = _v60;
              const _v61: any = rt.object(210, "colas");
              acc = _v61;
              const _v62: any = this;
              acc = _v62;
              const _v63: any = await rt.send(_v62, "window", [_v52]);
              acc = _v63;
              const _v64: any = await rt.send(_v62, "add", [_v53, _v54, _v55, _v56, _v57, _v58, _v59, _v60, _v61]);
              acc = _v64;
              _v1 = _v64;
              const _v65: any = rt.object(210, "theTalker");
              acc = _v65;
              const _v66: any = rt.setGlobal(413, _v65);
              acc = _v66;
              _v1 = _v66;
              let _v67: any = acc;
              const _v68: any = rt.global(302);
              acc = _v68;
              const _v69: any = await rt.send(_v68, "worksAt", []);
              acc = _v69;
              const _v70: any = 10;
              acc = _v70;
              const _v71: any = rt.op("==", ...[_v69, _v70]);
              acc = _v71;
              _v67 = _v71;
              if (rt.truth(_v71)) {
                const _v72: any = rt.object(210, "workButton");
                acc = _v72;
                const _v73: any = this;
                acc = _v73;
                const _v74: any = await rt.send(_v73, "add", [_v72]);
                acc = _v74;
                _v67 = _v74;
              }
              acc = _v67;
              _v1 = _v67;
              const _v75: any = rt.object(210, "exitButton");
              acc = _v75;
              const _v76: any = this;
              acc = _v76;
              const _v77: any = await rt.send(_v76, "add", [_v75]);
              acc = _v77;
              _v1 = _v77;
              const _v78: any = 102;
              acc = _v78;
              const _v79: any = 1;
              acc = _v79;
              const _v80: any = 153;
              acc = _v80;
              const _v81: any = 69;
              acc = _v81;
              const _v82: any = 44;
              acc = _v82;
              const _v83: any = 0;
              acc = _v83;
              const _v84: any = 15;
              acc = _v84;
              const _v85: any = this;
              acc = _v85;
              const _v86: any = await rt.send(_v85, "eachElementDo", [_v78, _v79]);
              acc = _v86;
              const _v87: any = await rt.send(_v85, "eachElementDo", [_v80]);
              acc = _v87;
              const _v88: any = await rt.send(_v85, "moveTo", [_v81, _v82]);
              acc = _v88;
              const _v89: any = await rt.send(_v85, "open", [_v83, _v84]);
              acc = _v89;
              _v1 = _v89;
              const _v90: any = 38;
              acc = _v90;
              const _v91: any = rt.global(477);
              acc = _v91;
              const _v92: any = await rt.send(_v91, "playBed", [_v90]);
              acc = _v92;
              _v1 = _v92;
              let _v93: any = acc;
              const _v94: any = rt.global(302);
              acc = _v94;
              const _v95: any = await rt.send(_v94, "worksAt", []);
              acc = _v95;
              const _v96: any = 10;
              acc = _v96;
              const _v97: any = rt.op("==", ...[_v95, _v96]);
              acc = _v97;
              _v93 = _v97;
              if (rt.truth(_v97)) {
                const _v98: any = rt.object(210, "timeClock");
                acc = _v98;
                const _v99: any = this;
                acc = _v99;
                const _v100: any = await rt.send(_v99, "add", [_v98]);
                acc = _v100;
                _v93 = _v100;
                const _v101: any = rt.object(210, "timeClock");
                acc = _v101;
                const _v102: any = await rt.send(_v101, "setSize", []);
                acc = _v102;
                _v93 = _v102;
              }
              acc = _v93;
              _v1 = _v93;
              const _v103: any = rt.get(this, "keyMouseList");
              acc = _v103;
              const _v104: any = rt.object(891, "KeyMouse");
              acc = _v104;
              const _v105: any = await rt.send(_v104, "setList", [_v103]);
              acc = _v105;
              _v1 = _v105;
              const _v106: any = this;
              acc = _v106;
              const _v107: any = rt.get(this, "keyMouseList");
              acc = _v107;
              const _v108: any = rt.object(210, "hamburgers");
              acc = _v108;
              const _v109: any = await rt.call(0, "proc0_9", [_v106, _v107, _v108], this);
              acc = _v109;
              _v1 = _v109;
              const _v110: any = rt.global(302);
              acc = _v110;
              const _v111: any = await rt.send(_v110, "cash", []);
              acc = _v111;
              const _v112: any = 1;
              acc = _v112;
              const _v113: any = rt.op("-", ...[_v111, _v112]);
              acc = _v113;
              const _v114: any = rt.global(305);
              acc = _v114;
              const _v115: any = await rt.send(_v114, "setSize", []);
              acc = _v115;
              const _v116: any = await rt.send(_v114, "value", [_v113]);
              acc = _v116;
              const _v117: any = await rt.send(_v114, "draw", []);
              acc = _v117;
              _v1 = _v117;
              const _v118: any = 1;
              acc = _v118;
              const _v119: any = rt.object(996, "User");
              acc = _v119;
              const _v120: any = await rt.send(_v119, "canControl", [_v118]);
              acc = _v120;
              _v1 = _v120;
              let _v121: any = acc;
              const _v122: any = await rt.call(0, "proc0_14", [], this);
              acc = _v122;
              _v121 = _v122;
              if (rt.truth(_v122)) {
                const _v123: any = rt.global(413);
                acc = _v123;
                const _v124: any = await rt.send(_v123, "init", []);
                acc = _v124;
                _v121 = _v124;
                const _v125: any = 210;
                acc = _v125;
                const _v126: any = 0;
                acc = _v126;
                const _v127: any = 19;
                acc = _v127;
                const _v128: any = await rt.call(210, "Random", [_v126, _v127], this);
                acc = _v128;
                const _v129: any = 310;
                acc = _v129;
                const _v130: any = rt.global(413);
                acc = _v130;
                const _v131: any = rt.global(440);
                acc = _v131;
                const _v132: any = rt.global(441);
                acc = _v132;
                const _v133: any = rt.global(442);
                acc = _v133;
                const _v134: any = 70;
                acc = _v134;
                const _v135: any = 100;
                acc = _v135;
                const _v136: any = 25;
                acc = _v136;
                const _v137: any = rt.global(426);
                acc = _v137;
                const _v138: any = await rt.call(255, "Print", [_v125, _v128, _v129, _v130, _v131, _v132, _v133, _v134, _v135, _v136, _v137], this);
                acc = _v138;
                _v121 = _v138;
              }
              acc = _v121;
              _v1 = _v121;
            } else {
              const _v139: any = rt.get(this, "theItem");
              acc = _v139;
              const _v140: any = rt.object(891, "KeyMouse");
              acc = _v140;
              const _v141: any = await rt.send(_v140, "setCursor", [_v139]);
              acc = _v141;
              _v1 = _v141;
            }
            acc = _v1;
            const _v142: any = 0;
            acc = _v142;
            const _v143: any = rt.setGlobal(518, _v142);
            acc = _v143;
            const _v144: any = 0;
            acc = _v144;
            const _v145: any = 0;
            acc = _v145;
            const _v146: any = this;
            acc = _v146;
            const _v147: any = await rt.send(_v146, "doit", [_v144, _v145]);
            acc = _v147;
            const _v148: any = (temps[0] = _v147);
            acc = _v148;
            let _v149: any = acc;
            const _v150: any = (temps[0] ?? 0);
            acc = _v150;
            const _v151: any = await rt.call(210, "IsObject", [_v150], this);
            acc = _v151;
            _v149 = _v151;
            if (rt.truth(_v151)) {
              let _v152: any = acc;
              const _v153: any = (temps[0] ?? 0);
              acc = _v153;
              const _v154: any = this;
              acc = _v154;
              const _v155: any = await rt.send(_v154, "contains", [_v153]);
              acc = _v155;
              _v152 = _v155;
              if (rt.truth(_v155)) {
                const _v156: any = 0;
                acc = _v156;
                const _v157: any = (temps[0] = _v156);
                acc = _v157;
                _v152 = _v157;
              }
              acc = _v152;
              _v149 = _v152;
            } else {
              const _v158: any = 1;
              acc = _v158;
              const _v159: any = (temps[0] = _v158);
              acc = _v159;
              _v149 = _v159;
            }
            acc = _v149;
            const _v160: any = rt.global(477);
            acc = _v160;
            const _v161: any = await rt.send(_v160, "fade", []);
            acc = _v161;
            const _v162: any = rt.object(210, "timeClock");
            acc = _v162;
            const _v163: any = await rt.send(_v162, "dispose", []);
            acc = _v163;
            let _v164: any = acc;
            const _v165: any = rt.get(this, "prevDialog");
            acc = _v165;
            _v164 = _v165;
            if (rt.truth(_v165)) {
              const _v166: any = rt.get(this, "prevDialog");
              acc = _v166;
              const _v167: any = await rt.send(_v166, "keyMouseList", []);
              acc = _v167;
              _v164 = _v167;
            } else {
              const _v168: any = rt.global(432);
              acc = _v168;
              _v164 = _v168;
            }
            acc = _v164;
            const _v169: any = rt.object(891, "KeyMouse");
            acc = _v169;
            const _v170: any = await rt.send(_v169, "setList", [_v164]);
            acc = _v170;
            const _v171: any = rt.get(this, "keyMouseList");
            acc = _v171;
            const _v172: any = await rt.send(_v171, "release", []);
            acc = _v172;
            const _v173: any = rt.get(this, "keyMouseList");
            acc = _v173;
            const _v174: any = await rt.send(_v173, "dispose", []);
            acc = _v174;
            const _v175: any = rt.get(this, "prevDialog");
            acc = _v175;
            const _v176: any = rt.setGlobal(502, _v175);
            acc = _v176;
            const _v177: any = this;
            acc = _v177;
            const _v178: any = 291;
            acc = _v178;
            const _v179: any = await rt.call(0, "proc0_15", [_v177, _v178], this);
            acc = _v179;
            const _v180: any = rt.object(210, "workButton");
            acc = _v180;
            const _v181: any = await rt.send(_v180, "dispose", []);
            acc = _v181;
            const _v182: any = this;
            acc = _v182;
            const _v183: any = await rt.send(_v182, "dispose", []);
            acc = _v183;
            const _v184: any = 11;
            acc = _v184;
            const _v185: any = rt.get(this, "nsTop");
            acc = _v185;
            const _v186: any = 1;
            acc = _v186;
            const _v187: any = rt.op("+", ...[_v185, _v186]);
            acc = _v187;
            const _v188: any = rt.get(this, "nsLeft");
            acc = _v188;
            const _v189: any = rt.get(this, "nsBottom");
            acc = _v189;
            const _v190: any = 1;
            acc = _v190;
            const _v191: any = rt.op("-", ...[_v189, _v190]);
            acc = _v191;
            const _v192: any = rt.get(this, "nsRight");
            acc = _v192;
            const _v193: any = 3;
            acc = _v193;
            const _v194: any = rt.op("-", ...[_v192, _v193]);
            acc = _v194;
            const _v195: any = 2;
            acc = _v195;
            const _v196: any = 0;
            acc = _v196;
            const _v197: any = 0;
            acc = _v197;
            const _v198: any = await rt.call(210, "Graph", [_v184, _v187, _v188, _v191, _v194, _v195, _v196, _v197], this);
            acc = _v198;
            const _v199: any = 0;
            acc = _v199;
            const _v200: any = await rt.call(0, "proc0_17", [_v199], this);
            acc = _v200;
            const _v201: any = (temps[0] ?? 0);
            acc = _v201;
            const _acc202: any = acc;
            const _v203: any = 210;
            acc = _v203;
            const _args204: any[] = [_v203];
            await rt.call(210, "DisposeScript", _args204, this);
            const _v205: any = _args204.length === 2 ? _args204[1] : _acc202;
            acc = _v205;
            return acc;
          },
          // SCI fastFood.sc: fastFood.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 210, "name": "fastFood"}, "draw", []);
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
        properties: {"view": 810, "priority": 13},
        methods: {
        },
      },
      {
        name: "hamburgers",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 33, "nsLeft": 10, "key": 1, "text": "Hamburgers.........", "textColor": 27, "shadowColor": 116, "indexNum": 3, "typeOfGoods": 1, "basePrice": 79},
        methods: {
        },
      },
      {
        name: "cheeseburgers",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 45, "nsLeft": 10, "key": 2, "text": "Cheeseburger.......|", "textColor": 27, "shadowColor": 116, "indexNum": 4, "typeOfGoods": 1, "basePrice": 89, "celNum": 1},
        methods: {
          // SCI fastFood.sc: cheeseburgers.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 210, "name": "cheeseburgers"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.global(472);
              acc = _v6;
              const _v7: any = rt.op("not", ...[_v6]);
              acc = _v7;
              _v4 = _v7;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v8: any = 1;
              acc = _v8;
              const _v9: any = rt.setGlobal(472, _v8);
              acc = _v9;
              _v3 = _v9;
              const _v10: any = 1;
              acc = _v10;
              const _v11: any = await rt.call(0, "proc0_13", [_v10], this);
              acc = _v11;
              _v3 = _v11;
            }
            acc = _v3;
            const _v12: any = (temps[0] ?? 0);
            acc = _v12;
            return _v12;
            return acc;
          },
        },
      },
      {
        name: "chicken",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 63, "nsLeft": 75, "key": 3, "text": "Astro Chicken.......|", "textColor": 27, "shadowColor": 116, "indexNum": 2, "typeOfGoods": 1, "basePrice": 124, "celNum": 2},
        methods: {
          // SCI fastFood.sc: chicken.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 210, "name": "chicken"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.global(472);
              acc = _v6;
              const _v7: any = rt.op("not", ...[_v6]);
              acc = _v7;
              _v4 = _v7;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v8: any = 1;
              acc = _v8;
              const _v9: any = rt.setGlobal(472, _v8);
              acc = _v9;
              _v3 = _v9;
              const _v10: any = 2;
              acc = _v10;
              const _v11: any = await rt.call(0, "proc0_13", [_v10], this);
              acc = _v11;
              _v3 = _v11;
            }
            acc = _v3;
            const _v12: any = (temps[0] ?? 0);
            acc = _v12;
            return _v12;
            return acc;
          },
        },
      },
      {
        name: "fries",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 74, "nsLeft": 75, "key": 4, "text": "Fries....................", "textColor": 27, "shadowColor": 116, "indexNum": 5, "typeOfGoods": 1, "basePrice": 65, "celNum": 3},
        methods: {
        },
      },
      {
        name: "shakes",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 86, "nsLeft": 75, "key": 5, "text": "Shakes.................|", "textColor": 27, "shadowColor": 116, "indexNum": 6, "typeOfGoods": 3, "basePrice": 102, "celNum": 4},
        methods: {
          // SCI fastFood.sc: shakes.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 210, "name": "shakes"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.global(471);
              acc = _v6;
              const _v7: any = rt.op("not", ...[_v6]);
              acc = _v7;
              _v4 = _v7;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v8: any = 1;
              acc = _v8;
              const _v9: any = rt.setGlobal(471, _v8);
              acc = _v9;
              _v3 = _v9;
              const _v10: any = 2;
              acc = _v10;
              const _v11: any = await rt.call(0, "proc0_13", [_v10], this);
              acc = _v11;
              _v3 = _v11;
            }
            acc = _v3;
            const _v12: any = (temps[0] ?? 0);
            acc = _v12;
            return _v12;
            return acc;
          },
        },
      },
      {
        name: "colas",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 97, "nsLeft": 75, "key": 6, "text": "Colas...................|", "textColor": 27, "shadowColor": 116, "indexNum": 7, "typeOfGoods": 3, "basePrice": 69, "celNum": 5},
        methods: {
          // SCI fastFood.sc: colas.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 210, "name": "colas"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(416);
              acc = _v5;
              _v4 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = rt.global(471);
              acc = _v6;
              const _v7: any = rt.op("not", ...[_v6]);
              acc = _v7;
              _v4 = _v7;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v8: any = 1;
              acc = _v8;
              const _v9: any = rt.setGlobal(471, _v8);
              acc = _v9;
              _v3 = _v9;
              const _v10: any = 1;
              acc = _v10;
              const _v11: any = await rt.call(0, "proc0_13", [_v10], this);
              acc = _v11;
              _v3 = _v11;
            }
            acc = _v3;
            const _v12: any = (temps[0] ?? 0);
            acc = _v12;
            return _v12;
            return acc;
          },
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
          // SCI fastFood.sc: workButton.doit
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
            const _v5: any = rt.object(210, "timeClock");
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
                const _v15: any = rt.object(210, "fastFood");
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
                const _v26: any = 0;
                acc = _v26;
                const _v27: any = rt.object(210, "items");
                acc = _v27;
                const _v28: any = await rt.send(_v27, "setCycle", [_v26]);
                acc = _v28;
                _v8 = _v28;
                const _v29: any = rt.object(210, "timeClock");
                acc = _v29;
                const _v30: any = await rt.send(_v29, "doit", []);
                acc = _v30;
                _v8 = _v30;
                break _branch9;
              }
            }
            acc = _v8;
            const _v31: any = 0;
            acc = _v31;
            const _v32: any = await rt.superSend(this, {"script": 210, "name": "workButton"}, "doit", [_v31]);
            acc = _v32;
            return acc;
          },
        },
      },
      {
        name: "timeClock",
        className: "TimeClock",
        parent: {"script": 104, "name": "TimeClock"},
        isClass: false,
        properties: {"nsTop": 57},
        methods: {
          // SCI fastFood.sc: timeClock.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setCycle", [_v1]);
            acc = _v3;
            const _v4: any = rt.object(210, "items");
            acc = _v4;
            const _v5: any = await rt.send(_v4, "init", []);
            acc = _v5;
            return acc;
          },
          // SCI fastFood.sc: timeClock.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(210, "timeClock");
            acc = _v1;
            const _v2: any = rt.global(502);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "aTimeClock", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 210, "name": "timeClock"}, "setSize", []);
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
        properties: {"nsTop": 0, "view": 360},
        methods: {
        },
      },
      {
        name: "items",
        className: "DCIcon",
        parent: {"script": 967, "name": "DCIcon"},
        isClass: false,
        properties: {"nsTop": 57, "view": 710, "loop": 1, "priority": 14, "cycleSpeed": 100},
        methods: {
          // SCI fastFood.sc: items.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.global(534);
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.object(103, "FwdCount");
              acc = _v5;
              const _v6: any = this;
              acc = _v6;
              const _v7: any = this;
              acc = _v7;
              const _v8: any = await rt.send(_v7, "setCycle", [_v5, _v6]);
              acc = _v8;
              _v1 = _v8;
            }
            acc = _v1;
            return acc;
          },
          // SCI fastFood.sc: items.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = rt.global(534);
              acc = _v3;
              const _v4: any = 2;
              acc = _v4;
              const _v5: any = rt.op("<", ...[_v3, _v4]);
              acc = _v5;
              _v2 = _v5;
            }
            if (rt.truth(_v2)) {
              const _v6: any = rt.global(416);
              acc = _v6;
              _v2 = _v6;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              let _v7: any = acc;
              const _v8: any = rt.get(this, "cycler");
              acc = _v8;
              _v7 = _v8;
              if (rt.truth(_v8)) {
                const _v9: any = -200;
                acc = _v9;
                const _v10: any = rt.get(this, "cycler");
                acc = _v10;
                const _v11: any = await rt.send(_v10, "cycleCnt", [_v9]);
                acc = _v11;
                _v7 = _v11;
              }
              acc = _v7;
              _v1 = _v7;
              const _v12: any = (args[0] ?? 0);
              acc = _v12;
              const _v13: any = this;
              acc = _v13;
              const _v14: any = await rt.send(_v13, "cel", [_v12]);
              acc = _v14;
              const _v15: any = await rt.send(_v13, "draw", []);
              acc = _v15;
              _v1 = _v15;
            }
            acc = _v1;
            return acc;
          },
          // SCI fastFood.sc: items.setCycle
          "setCycle": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.global(534);
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = args.slice(0, argc);
              acc = _v5;
              const _v6: any = await rt.superSend(this, {"script": 210, "name": "items"}, "setCycle", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI fastFood.sc: items.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.global(534);
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = args.slice(0, argc);
              acc = _v5;
              const _v6: any = await rt.superSend(this, {"script": 210, "name": "items"}, "draw", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI fastFood.sc: items.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.global(534);
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = args.slice(0, argc);
              acc = _v5;
              const _v6: any = await rt.superSend(this, {"script": 210, "name": "items"}, "setSize", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
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
          // SCI fastFood.sc: computerScript.handleEvent
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
                  let _v18: any = acc;
                  const _v19: any = 2;
                  acc = _v19;
                  const _v20: any = await rt.call(0, "proc0_6", [_v19], this);
                  acc = _v20;
                  _v18 = _v20;
                  if (rt.truth(_v20)) {
                    const _v21: any = 60;
                    acc = _v21;
                    const _v22: any = rt.set(this, "cycles", _v21);
                    acc = _v22;
                    _v18 = _v22;
                    let _v23: any = acc;
                    _branch24: {
                      const _v25: any = rt.global(550);
                      acc = _v25;
                      _v23 = _v25;
                      acc = _v23;
                      if (rt.truth(_v23)) {
                        const _v26: any = 4;
                        acc = _v26;
                        _v23 = _v26;
                        break _branch24;
                      }
                      const _v27: any = await rt.call(0, "proc0_11", [], this);
                      acc = _v27;
                      const _v28: any = 750;
                      acc = _v28;
                      const _v29: any = rt.op(">", ...[_v27, _v28]);
                      acc = _v29;
                      _v23 = _v29;
                      acc = _v23;
                      if (rt.truth(_v23)) {
                        const _v30: any = 1;
                        acc = _v30;
                        const _v31: any = 4;
                        acc = _v31;
                        const _v32: any = await rt.call(210, "Random", [_v30, _v31], this);
                        acc = _v32;
                        _v23 = _v32;
                        break _branch24;
                      }
                      const _v33: any = await rt.call(0, "proc0_11", [], this);
                      acc = _v33;
                      const _v34: any = rt.object(210, "hamburgers");
                      acc = _v34;
                      const _v35: any = await rt.send(_v34, "price", []);
                      acc = _v35;
                      const _v36: any = rt.op(">=", ...[_v33, _v35]);
                      acc = _v36;
                      _v23 = _v36;
                      acc = _v23;
                      if (rt.truth(_v23)) {
                        let _v37: any = acc;
                        const _v38: any = 0;
                        acc = _v38;
                        const _v39: any = 1;
                        acc = _v39;
                        const _v40: any = await rt.call(210, "Random", [_v38, _v39], this);
                        acc = _v40;
                        _v37 = _v40;
                        if (rt.truth(_v40)) {
                          const _v41: any = 1;
                          acc = _v41;
                          _v37 = _v41;
                        } else {
                          const _v42: any = 4;
                          acc = _v42;
                          _v37 = _v42;
                        }
                        acc = _v37;
                        _v23 = _v37;
                        break _branch24;
                      }
                      const _v43: any = 4;
                      acc = _v43;
                      _v23 = _v43;
                      break _branch24;
                    }
                    acc = _v23;
                    const _v44: any = (args[0] ?? 0);
                    acc = _v44;
                    const _v45: any = await rt.send(_v44, "message", [_v23]);
                    acc = _v45;
                    _v18 = _v45;
                    const _v46: any = 1;
                    acc = _v46;
                    const _v47: any = rt.setGlobal(411, _v46);
                    acc = _v47;
                    _v18 = _v47;
                  }
                  acc = _v18;
                  _v14 = _v18;
                  break _branch16;
                }
                const _v48: any = 3;
                acc = _v48;
                _v14 = rt.op("==", _v15, _v48);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v49: any = acc;
                  let _v50: any = 1;
                  if (rt.truth(_v50)) {
                    const _v51: any = rt.global(550);
                    acc = _v51;
                    const _v52: any = rt.op("not", ...[_v51]);
                    acc = _v52;
                    _v50 = _v52;
                  }
                  if (rt.truth(_v50)) {
                    const _v53: any = 2;
                    acc = _v53;
                    const _v54: any = await rt.call(0, "proc0_6", [_v53], this);
                    acc = _v54;
                    _v50 = _v54;
                  }
                  if (rt.truth(_v50)) {
                    const _v55: any = 0;
                    acc = _v55;
                    const _v56: any = 4;
                    acc = _v56;
                    const _v57: any = await rt.call(210, "Random", [_v55, _v56], this);
                    acc = _v57;
                    const _v58: any = rt.op("not", ...[_v57]);
                    acc = _v58;
                    _v50 = _v58;
                  }
                  if (rt.truth(_v50)) {
                    const _v59: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v59;
                    const _v60: any = 750;
                    acc = _v60;
                    const _v61: any = rt.op(">", ...[_v59, _v60]);
                    acc = _v61;
                    _v50 = _v61;
                  }
                  acc = _v50;
                  _v49 = _v50;
                  if (rt.truth(_v50)) {
                    const _v62: any = 60;
                    acc = _v62;
                    const _v63: any = rt.set(this, "cycles", _v62);
                    acc = _v63;
                    _v49 = _v63;
                    const _v64: any = 5;
                    acc = _v64;
                    const _v65: any = 6;
                    acc = _v65;
                    const _v66: any = await rt.call(210, "Random", [_v64, _v65], this);
                    acc = _v66;
                    const _v67: any = (args[0] ?? 0);
                    acc = _v67;
                    const _v68: any = await rt.send(_v67, "message", [_v66]);
                    acc = _v68;
                    _v49 = _v68;
                  }
                  acc = _v49;
                  _v14 = _v49;
                  break _branch16;
                }
                const _v69: any = 11;
                acc = _v69;
                _v14 = rt.op("==", _v15, _v69);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v70: any = acc;
                  const _v71: any = rt.global(411);
                  acc = _v71;
                  const _v72: any = rt.op("not", ...[_v71]);
                  acc = _v72;
                  _v70 = _v72;
                  if (rt.truth(_v72)) {
                    const _v73: any = 60;
                    acc = _v73;
                    const _v74: any = rt.set(this, "cycles", _v73);
                    acc = _v74;
                    _v70 = _v74;
                    let _v75: any = acc;
                    _branch76: {
                      const _v77: any = rt.global(550);
                      acc = _v77;
                      _v75 = _v77;
                      acc = _v75;
                      if (rt.truth(_v75)) {
                        const _v78: any = 4;
                        acc = _v78;
                        _v75 = _v78;
                        break _branch76;
                      }
                      const _v79: any = await rt.call(0, "proc0_11", [], this);
                      acc = _v79;
                      const _v80: any = 750;
                      acc = _v80;
                      const _v81: any = rt.op(">", ...[_v79, _v80]);
                      acc = _v81;
                      _v75 = _v81;
                      acc = _v75;
                      if (rt.truth(_v75)) {
                        const _v82: any = 1;
                        acc = _v82;
                        const _v83: any = 4;
                        acc = _v83;
                        const _v84: any = await rt.call(210, "Random", [_v82, _v83], this);
                        acc = _v84;
                        _v75 = _v84;
                        break _branch76;
                      }
                      const _v85: any = 0;
                      acc = _v85;
                      const _v86: any = 1;
                      acc = _v86;
                      const _v87: any = await rt.call(210, "Random", [_v85, _v86], this);
                      acc = _v87;
                      _v75 = _v87;
                      acc = _v75;
                      if (rt.truth(_v75)) {
                        const _v88: any = 1;
                        acc = _v88;
                        _v75 = _v88;
                        break _branch76;
                      }
                      const _v89: any = 4;
                      acc = _v89;
                      _v75 = _v89;
                      break _branch76;
                    }
                    acc = _v75;
                    const _v90: any = (args[0] ?? 0);
                    acc = _v90;
                    const _v91: any = await rt.send(_v90, "message", [_v75]);
                    acc = _v91;
                    _v70 = _v91;
                  }
                  acc = _v70;
                  _v14 = _v70;
                  break _branch16;
                }
                const _v92: any = (args[0] ?? 0);
                acc = _v92;
                const _v93: any = 1;
                acc = _v93;
                const _v94: any = await rt.superSend(this, {"script": 210, "name": "computerScript"}, "handleEvent", [_v92, _v93]);
                acc = _v94;
                _v14 = _v94;
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
      // SCI fastFood.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.ref("global", 0, 100);
        acc = _v1;
        const _v2: any = 210;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(210, "Format", [_v1, _v2, _v3], this);
        acc = _v4;
        const _v5: any = rt.ref("global", 0, 100);
        acc = _v5;
        const _v6: any = 210;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = await rt.call(210, "Format", [_v5, _v6, _v7], this);
        acc = _v8;
        const _v9: any = rt.ref("global", 0, 100);
        acc = _v9;
        const _v10: any = 210;
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = await rt.call(210, "Format", [_v9, _v10, _v11], this);
        acc = _v12;
        const _v13: any = rt.ref("global", 0, 100);
        acc = _v13;
        const _v14: any = 210;
        acc = _v14;
        const _v15: any = 3;
        acc = _v15;
        const _v16: any = await rt.call(210, "Format", [_v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = rt.ref("global", 0, 100);
        acc = _v17;
        const _v18: any = 210;
        acc = _v18;
        const _v19: any = 4;
        acc = _v19;
        const _v20: any = await rt.call(210, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = rt.ref("global", 0, 100);
        acc = _v21;
        const _v22: any = 210;
        acc = _v22;
        const _v23: any = 5;
        acc = _v23;
        const _v24: any = await rt.call(210, "Format", [_v21, _v22, _v23], this);
        acc = _v24;
        const _v25: any = rt.ref("global", 0, 100);
        acc = _v25;
        const _v26: any = 210;
        acc = _v26;
        const _v27: any = 6;
        acc = _v27;
        const _v28: any = await rt.call(210, "Format", [_v25, _v26, _v27], this);
        acc = _v28;
        const _v29: any = rt.ref("global", 0, 100);
        acc = _v29;
        const _v30: any = 210;
        acc = _v30;
        const _v31: any = 7;
        acc = _v31;
        const _v32: any = await rt.call(210, "Format", [_v29, _v30, _v31], this);
        acc = _v32;
        const _v33: any = rt.ref("global", 0, 100);
        acc = _v33;
        const _v34: any = 210;
        acc = _v34;
        const _v35: any = 8;
        acc = _v35;
        const _v36: any = await rt.call(210, "Format", [_v33, _v34, _v35], this);
        acc = _v36;
        const _v37: any = rt.ref("global", 0, 100);
        acc = _v37;
        const _v38: any = 210;
        acc = _v38;
        const _v39: any = 9;
        acc = _v39;
        const _v40: any = await rt.call(210, "Format", [_v37, _v38, _v39], this);
        acc = _v40;
        const _v41: any = rt.ref("global", 0, 100);
        acc = _v41;
        const _v42: any = 210;
        acc = _v42;
        const _v43: any = 10;
        acc = _v43;
        const _v44: any = await rt.call(210, "Format", [_v41, _v42, _v43], this);
        acc = _v44;
        const _v45: any = rt.ref("global", 0, 100);
        acc = _v45;
        const _v46: any = 210;
        acc = _v46;
        const _v47: any = 11;
        acc = _v47;
        const _v48: any = await rt.call(210, "Format", [_v45, _v46, _v47], this);
        acc = _v48;
        const _v49: any = rt.ref("global", 0, 100);
        acc = _v49;
        const _v50: any = 210;
        acc = _v50;
        const _v51: any = 12;
        acc = _v51;
        const _v52: any = await rt.call(210, "Format", [_v49, _v50, _v51], this);
        acc = _v52;
        const _v53: any = rt.ref("global", 0, 100);
        acc = _v53;
        const _v54: any = 210;
        acc = _v54;
        const _v55: any = 13;
        acc = _v55;
        const _v56: any = await rt.call(210, "Format", [_v53, _v54, _v55], this);
        acc = _v56;
        const _v57: any = rt.ref("global", 0, 100);
        acc = _v57;
        const _v58: any = 210;
        acc = _v58;
        const _v59: any = 14;
        acc = _v59;
        const _v60: any = await rt.call(210, "Format", [_v57, _v58, _v59], this);
        acc = _v60;
        const _v61: any = rt.ref("global", 0, 100);
        acc = _v61;
        const _v62: any = 210;
        acc = _v62;
        const _v63: any = 15;
        acc = _v63;
        const _v64: any = await rt.call(210, "Format", [_v61, _v62, _v63], this);
        acc = _v64;
        const _v65: any = rt.ref("global", 0, 100);
        acc = _v65;
        const _v66: any = 210;
        acc = _v66;
        const _v67: any = 16;
        acc = _v67;
        const _v68: any = await rt.call(210, "Format", [_v65, _v66, _v67], this);
        acc = _v68;
        const _v69: any = rt.ref("global", 0, 100);
        acc = _v69;
        const _v70: any = 210;
        acc = _v70;
        const _v71: any = 17;
        acc = _v71;
        const _v72: any = await rt.call(210, "Format", [_v69, _v70, _v71], this);
        acc = _v72;
        const _v73: any = rt.ref("global", 0, 100);
        acc = _v73;
        const _v74: any = 210;
        acc = _v74;
        const _v75: any = 18;
        acc = _v75;
        const _v76: any = await rt.call(210, "Format", [_v73, _v74, _v75], this);
        acc = _v76;
        const _v77: any = rt.ref("global", 0, 100);
        acc = _v77;
        const _v78: any = 210;
        acc = _v78;
        const _v79: any = 19;
        acc = _v79;
        const _v80: any = await rt.call(210, "Format", [_v77, _v78, _v79], this);
        acc = _v80;
        const _v81: any = rt.ref("global", 0, 100);
        acc = _v81;
        const _v82: any = 210;
        acc = _v82;
        const _v83: any = 20;
        acc = _v83;
        const _v84: any = await rt.call(210, "Format", [_v81, _v82, _v83], this);
        acc = _v84;
        const _v85: any = rt.ref("global", 0, 100);
        acc = _v85;
        const _v86: any = 210;
        acc = _v86;
        const _v87: any = 21;
        acc = _v87;
        const _v88: any = await rt.call(210, "Format", [_v85, _v86, _v87], this);
        acc = _v88;
        const _v89: any = rt.ref("global", 0, 100);
        acc = _v89;
        const _v90: any = 210;
        acc = _v90;
        const _v91: any = 22;
        acc = _v91;
        const _v92: any = await rt.call(210, "Format", [_v89, _v90, _v91], this);
        acc = _v92;
        const _v93: any = rt.ref("global", 0, 100);
        acc = _v93;
        const _v94: any = 210;
        acc = _v94;
        const _v95: any = 23;
        acc = _v95;
        const _v96: any = await rt.call(210, "Format", [_v93, _v94, _v95], this);
        acc = _v96;
        const _v97: any = rt.ref("global", 0, 100);
        acc = _v97;
        const _v98: any = 210;
        acc = _v98;
        const _v99: any = 24;
        acc = _v99;
        const _v100: any = await rt.call(210, "Format", [_v97, _v98, _v99], this);
        acc = _v100;
        const _v101: any = rt.ref("global", 0, 100);
        acc = _v101;
        const _v102: any = 210;
        acc = _v102;
        const _v103: any = 25;
        acc = _v103;
        const _v104: any = await rt.call(210, "Format", [_v101, _v102, _v103], this);
        acc = _v104;
        const _v105: any = rt.ref("global", 0, 100);
        acc = _v105;
        const _v106: any = 210;
        acc = _v106;
        const _v107: any = 26;
        acc = _v107;
        const _v108: any = await rt.call(210, "Format", [_v105, _v106, _v107], this);
        acc = _v108;
        const _v109: any = rt.ref("global", 0, 100);
        acc = _v109;
        const _v110: any = 210;
        acc = _v110;
        const _v111: any = 27;
        acc = _v111;
        const _v112: any = await rt.call(210, "Format", [_v109, _v110, _v111], this);
        acc = _v112;
        const _v113: any = rt.ref("global", 0, 100);
        acc = _v113;
        const _v114: any = 210;
        acc = _v114;
        const _v115: any = 28;
        acc = _v115;
        const _v116: any = await rt.call(210, "Format", [_v113, _v114, _v115], this);
        acc = _v116;
        const _v117: any = rt.ref("global", 0, 100);
        acc = _v117;
        const _v118: any = 210;
        acc = _v118;
        const _v119: any = 29;
        acc = _v119;
        const _v120: any = await rt.call(210, "Format", [_v117, _v118, _v119], this);
        acc = _v120;
        const _v121: any = rt.ref("global", 0, 100);
        acc = _v121;
        const _v122: any = 210;
        acc = _v122;
        const _v123: any = 30;
        acc = _v123;
        const _v124: any = await rt.call(210, "Format", [_v121, _v122, _v123], this);
        acc = _v124;
        const _v125: any = rt.ref("global", 0, 100);
        acc = _v125;
        const _v126: any = 210;
        acc = _v126;
        const _v127: any = 31;
        acc = _v127;
        const _v128: any = await rt.call(210, "Format", [_v125, _v126, _v127], this);
        acc = _v128;
        const _v129: any = rt.ref("global", 0, 100);
        acc = _v129;
        const _v130: any = 210;
        acc = _v130;
        const _v131: any = 32;
        acc = _v131;
        const _v132: any = await rt.call(210, "Format", [_v129, _v130, _v131], this);
        acc = _v132;
        const _v133: any = rt.ref("global", 0, 100);
        acc = _v133;
        const _v134: any = 210;
        acc = _v134;
        const _v135: any = 33;
        acc = _v135;
        const _v136: any = await rt.call(210, "Format", [_v133, _v134, _v135], this);
        acc = _v136;
        const _v137: any = rt.ref("global", 0, 100);
        acc = _v137;
        const _v138: any = 210;
        acc = _v138;
        const _v139: any = 34;
        acc = _v139;
        const _v140: any = await rt.call(210, "Format", [_v137, _v138, _v139], this);
        acc = _v140;
        const _v141: any = rt.ref("global", 0, 100);
        acc = _v141;
        const _v142: any = 210;
        acc = _v142;
        const _v143: any = 35;
        acc = _v143;
        const _v144: any = await rt.call(210, "Format", [_v141, _v142, _v143], this);
        acc = _v144;
        const _v145: any = rt.ref("global", 0, 100);
        acc = _v145;
        const _v146: any = 210;
        acc = _v146;
        const _v147: any = 36;
        acc = _v147;
        const _v148: any = await rt.call(210, "Format", [_v145, _v146, _v147], this);
        acc = _v148;
        const _v149: any = rt.ref("global", 0, 100);
        acc = _v149;
        const _v150: any = 210;
        acc = _v150;
        const _v151: any = 37;
        acc = _v151;
        const _v152: any = await rt.call(210, "Format", [_v149, _v150, _v151], this);
        acc = _v152;
        const _v153: any = rt.ref("global", 0, 100);
        acc = _v153;
        const _v154: any = 210;
        acc = _v154;
        const _v155: any = 38;
        acc = _v155;
        const _v156: any = await rt.call(210, "Format", [_v153, _v154, _v155], this);
        acc = _v156;
        const _v157: any = rt.ref("global", 0, 100);
        acc = _v157;
        const _v158: any = 210;
        acc = _v158;
        const _v159: any = 39;
        acc = _v159;
        const _v160: any = await rt.call(210, "Format", [_v157, _v158, _v159], this);
        acc = _v160;
        const _v161: any = rt.ref("global", 0, 100);
        acc = _v161;
        const _v162: any = 210;
        acc = _v162;
        const _v163: any = 40;
        acc = _v163;
        const _v164: any = await rt.call(210, "Format", [_v161, _v162, _v163], this);
        acc = _v164;
        const _v165: any = rt.ref("global", 0, 100);
        acc = _v165;
        const _v166: any = 210;
        acc = _v166;
        const _v167: any = 41;
        acc = _v167;
        const _v168: any = await rt.call(210, "Format", [_v165, _v166, _v167], this);
        acc = _v168;
        const _v169: any = rt.ref("global", 0, 100);
        acc = _v169;
        const _v170: any = 210;
        acc = _v170;
        const _v171: any = 42;
        acc = _v171;
        const _v172: any = await rt.call(210, "Format", [_v169, _v170, _v171], this);
        acc = _v172;
        const _v173: any = rt.ref("global", 0, 100);
        acc = _v173;
        const _v174: any = 210;
        acc = _v174;
        const _v175: any = 43;
        acc = _v175;
        const _v176: any = await rt.call(210, "Format", [_v173, _v174, _v175], this);
        acc = _v176;
        const _v177: any = rt.ref("global", 0, 100);
        acc = _v177;
        const _v178: any = 210;
        acc = _v178;
        const _v179: any = 44;
        acc = _v179;
        const _v180: any = await rt.call(210, "Format", [_v177, _v178, _v179], this);
        acc = _v180;
        const _v181: any = rt.ref("global", 0, 100);
        acc = _v181;
        const _v182: any = 210;
        acc = _v182;
        const _v183: any = 45;
        acc = _v183;
        const _v184: any = await rt.call(210, "Format", [_v181, _v182, _v183], this);
        acc = _v184;
        const _v185: any = rt.ref("global", 0, 100);
        acc = _v185;
        const _v186: any = 210;
        acc = _v186;
        const _v187: any = 46;
        acc = _v187;
        const _v188: any = await rt.call(210, "Format", [_v185, _v186, _v187], this);
        acc = _v188;
        const _v189: any = rt.ref("global", 0, 100);
        acc = _v189;
        const _v190: any = 210;
        acc = _v190;
        const _v191: any = 47;
        acc = _v191;
        const _v192: any = await rt.call(210, "Format", [_v189, _v190, _v191], this);
        acc = _v192;
        const _v193: any = rt.ref("global", 0, 100);
        acc = _v193;
        const _v194: any = 210;
        acc = _v194;
        const _v195: any = 48;
        acc = _v195;
        const _v196: any = await rt.call(210, "Format", [_v193, _v194, _v195], this);
        acc = _v196;
        const _v197: any = rt.ref("global", 0, 100);
        acc = _v197;
        const _v198: any = 210;
        acc = _v198;
        const _v199: any = 49;
        acc = _v199;
        const _v200: any = await rt.call(210, "Format", [_v197, _v198, _v199], this);
        acc = _v200;
        const _v201: any = rt.ref("global", 0, 100);
        acc = _v201;
        const _v202: any = 210;
        acc = _v202;
        const _v203: any = 50;
        acc = _v203;
        const _v204: any = await rt.call(210, "Format", [_v201, _v202, _v203], this);
        acc = _v204;
        const _v205: any = rt.ref("global", 0, 100);
        acc = _v205;
        const _v206: any = 210;
        acc = _v206;
        const _v207: any = 51;
        acc = _v207;
        const _v208: any = await rt.call(210, "Format", [_v205, _v206, _v207], this);
        acc = _v208;
        const _v209: any = rt.ref("global", 0, 100);
        acc = _v209;
        const _v210: any = 210;
        acc = _v210;
        const _v211: any = 52;
        acc = _v211;
        const _v212: any = await rt.call(210, "Format", [_v209, _v210, _v211], this);
        acc = _v212;
        const _v213: any = rt.ref("global", 0, 100);
        acc = _v213;
        const _v214: any = 210;
        acc = _v214;
        const _v215: any = 53;
        acc = _v215;
        const _v216: any = await rt.call(210, "Format", [_v213, _v214, _v215], this);
        acc = _v216;
        const _v217: any = rt.ref("global", 0, 100);
        acc = _v217;
        const _v218: any = 210;
        acc = _v218;
        const _v219: any = 54;
        acc = _v219;
        const _v220: any = await rt.call(210, "Format", [_v217, _v218, _v219], this);
        acc = _v220;
        return acc;
      },
    },
    exports: {"0": "fastFood"},
  });
}
