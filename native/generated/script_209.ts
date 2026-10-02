// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/clothing.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: b2b6f5fa1ca62d0e49367929973f3fe53b3e3be014f0cfb9fe882f25cd3b73f5
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(209, {
    name: "clothing",
    uses: [0, 103, 104, 108, 110, 255, 891, 967, 996, 999],
    locals: [0, -1],
    objects: [
      {
        name: "boughtItem",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI clothing.sc: boughtItem.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            _loop1: for (;;) {
              const _v3: any = rt.local(209, 1);
              acc = _v3;
              const _v4: any = 9;
              acc = _v4;
              const _v5: any = 29;
              acc = _v5;
              const _v6: any = await rt.call(209, "Random", [_v4, _v5], this);
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
            const _v11: any = rt.setLocal(209, 1, _v10);
            acc = _v11;
            const _v12: any = 209;
            acc = _v12;
            const _v13: any = rt.local(209, 1);
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
          // SCI clothing.sc: notEnoughCash.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 16;
            acc = _v1;
            const _v2: any = rt.global(413);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "init", [_v1]);
            acc = _v3;
            const _v4: any = 209;
            acc = _v4;
            const _v5: any = 30;
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
        name: "clothing",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI clothing.sc: clothing.init
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
              const _v5: any = 209;
              acc = _v5;
              const _v6: any = await rt.call(209, "Load", [_v4, _v5], this);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 1;
              acc = _v7;
              const _v8: any = await rt.call(0, "proc0_17", [_v7], this);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = rt.object(209, "dialogKeyMouse");
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
                const _v26: any = rt.object(209, "theTalker");
                acc = _v26;
                const _v27: any = await rt.send(_v26, "view", []);
                acc = _v27;
                const _v28: any = await rt.call(209, "Load", [_v25, _v27], this);
                acc = _v28;
                _v21 = _v28;
              }
              acc = _v21;
              _v1 = _v21;
              const _v29: any = rt.object(209, "notEnoughCash");
              acc = _v29;
              const _v30: any = rt.setGlobal(424, _v29);
              acc = _v30;
              _v1 = _v30;
              const _v31: any = rt.object(209, "boughtItem");
              acc = _v31;
              const _v32: any = rt.setGlobal(425, _v31);
              acc = _v32;
              _v1 = _v32;
              const _v33: any = rt.object(209, "items");
              acc = _v33;
              const _v34: any = rt.setGlobal(434, _v33);
              acc = _v34;
              _v1 = _v34;
              const _v35: any = (args[0] ?? 0);
              acc = _v35;
              const _v36: any = rt.set(this, "client", _v35);
              acc = _v36;
              _v1 = _v36;
              const _v37: any = 2;
              acc = _v37;
              const _v38: any = rt.global(417);
              acc = _v38;
              const _v39: any = await rt.send(_v38, "doit", [_v37]);
              acc = _v39;
              _v1 = _v39;
              const _v40: any = 9;
              acc = _v40;
              const _v41: any = rt.setGlobal(400, _v40);
              acc = _v41;
              _v1 = _v41;
              const _v42: any = 0;
              acc = _v42;
              const _v43: any = rt.setLocal(209, 0, _v42);
              acc = _v43;
              _v1 = _v43;
              let _v44: any = acc;
              const _v45: any = rt.global(302);
              acc = _v45;
              const _v46: any = await rt.send(_v45, "playing", []);
              acc = _v46;
              const _v47: any = 29;
              acc = _v47;
              const _v48: any = rt.op("==", ...[_v46, _v47]);
              acc = _v48;
              _v44 = _v48;
              if (rt.truth(_v48)) {
                const _v49: any = rt.object(209, "computerScript");
                acc = _v49;
                const _v50: any = this;
                acc = _v50;
                const _v51: any = await rt.send(_v50, "setScript", [_v49]);
                acc = _v51;
                _v44 = _v51;
                const _v52: any = rt.object(209, "computerScript");
                acc = _v52;
                const _v53: any = await rt.send(_v52, "cue", []);
                acc = _v53;
                _v44 = _v53;
              }
              acc = _v44;
              _v1 = _v44;
              const _v54: any = rt.object(209, "theTalker");
              acc = _v54;
              const _v55: any = rt.setGlobal(413, _v54);
              acc = _v55;
              _v1 = _v55;
              const _v56: any = rt.global(59);
              acc = _v56;
              const _v57: any = rt.object(209, "background");
              acc = _v57;
              const _v58: any = rt.object(209, "theTalker");
              acc = _v58;
              const _v59: any = rt.object(209, "items");
              acc = _v59;
              const _v60: any = rt.object(209, "businessSuit");
              acc = _v60;
              const _v61: any = rt.object(209, "leisureSuit");
              acc = _v61;
              const _v62: any = rt.object(209, "casualClothes");
              acc = _v62;
              const _v63: any = this;
              acc = _v63;
              const _v64: any = await rt.send(_v63, "window", [_v56]);
              acc = _v64;
              const _v65: any = await rt.send(_v63, "add", [_v57, _v58, _v59, _v60, _v61, _v62]);
              acc = _v65;
              _v1 = _v65;
              let _v66: any = acc;
              const _v67: any = rt.global(302);
              acc = _v67;
              const _v68: any = await rt.send(_v67, "worksAt", []);
              acc = _v68;
              const _v69: any = 9;
              acc = _v69;
              const _v70: any = rt.op("==", ...[_v68, _v69]);
              acc = _v70;
              _v66 = _v70;
              if (rt.truth(_v70)) {
                const _v71: any = rt.object(209, "workButton");
                acc = _v71;
                const _v72: any = this;
                acc = _v72;
                const _v73: any = await rt.send(_v72, "add", [_v71]);
                acc = _v73;
                _v66 = _v73;
              }
              acc = _v66;
              _v1 = _v66;
              const _v74: any = rt.object(209, "exitButton");
              acc = _v74;
              const _v75: any = this;
              acc = _v75;
              const _v76: any = await rt.send(_v75, "add", [_v74]);
              acc = _v76;
              _v1 = _v76;
              const _v77: any = 102;
              acc = _v77;
              const _v78: any = 1;
              acc = _v78;
              const _v79: any = 153;
              acc = _v79;
              const _v80: any = 69;
              acc = _v80;
              const _v81: any = 44;
              acc = _v81;
              const _v82: any = 0;
              acc = _v82;
              const _v83: any = 15;
              acc = _v83;
              const _v84: any = this;
              acc = _v84;
              const _v85: any = await rt.send(_v84, "eachElementDo", [_v77, _v78]);
              acc = _v85;
              const _v86: any = await rt.send(_v84, "eachElementDo", [_v79]);
              acc = _v86;
              const _v87: any = await rt.send(_v84, "moveTo", [_v80, _v81]);
              acc = _v87;
              const _v88: any = await rt.send(_v84, "open", [_v82, _v83]);
              acc = _v88;
              _v1 = _v88;
              let _v89: any = acc;
              const _v90: any = rt.global(302);
              acc = _v90;
              const _v91: any = await rt.send(_v90, "worksAt", []);
              acc = _v91;
              const _v92: any = 9;
              acc = _v92;
              const _v93: any = rt.op("==", ...[_v91, _v92]);
              acc = _v93;
              _v89 = _v93;
              if (rt.truth(_v93)) {
                const _v94: any = rt.object(209, "timeClock");
                acc = _v94;
                const _v95: any = this;
                acc = _v95;
                const _v96: any = await rt.send(_v95, "add", [_v94]);
                acc = _v96;
                _v89 = _v96;
                const _v97: any = rt.object(209, "timeClock");
                acc = _v97;
                const _v98: any = await rt.send(_v97, "setSize", []);
                acc = _v98;
                _v89 = _v98;
              }
              acc = _v89;
              _v1 = _v89;
              const _v99: any = 39;
              acc = _v99;
              const _v100: any = rt.global(477);
              acc = _v100;
              const _v101: any = await rt.send(_v100, "playBed", [_v99]);
              acc = _v101;
              _v1 = _v101;
              const _v102: any = this;
              acc = _v102;
              const _v103: any = rt.get(this, "keyMouseList");
              acc = _v103;
              const _v104: any = rt.object(209, "businessSuit");
              acc = _v104;
              const _v105: any = await rt.call(0, "proc0_9", [_v102, _v103, _v104], this);
              acc = _v105;
              _v1 = _v105;
              const _v106: any = rt.get(this, "keyMouseList");
              acc = _v106;
              const _v107: any = rt.object(891, "KeyMouse");
              acc = _v107;
              const _v108: any = await rt.send(_v107, "setList", [_v106]);
              acc = _v108;
              _v1 = _v108;
              const _v109: any = rt.global(302);
              acc = _v109;
              const _v110: any = await rt.send(_v109, "cash", []);
              acc = _v110;
              const _v111: any = 1;
              acc = _v111;
              const _v112: any = rt.op("-", ...[_v110, _v111]);
              acc = _v112;
              const _v113: any = rt.global(305);
              acc = _v113;
              const _v114: any = await rt.send(_v113, "setSize", []);
              acc = _v114;
              const _v115: any = await rt.send(_v113, "value", [_v112]);
              acc = _v115;
              const _v116: any = await rt.send(_v113, "draw", []);
              acc = _v116;
              _v1 = _v116;
              const _v117: any = 1;
              acc = _v117;
              const _v118: any = rt.object(996, "User");
              acc = _v118;
              const _v119: any = await rt.send(_v118, "canControl", [_v117]);
              acc = _v119;
              _v1 = _v119;
              let _v120: any = acc;
              const _v121: any = await rt.call(0, "proc0_14", [], this);
              acc = _v121;
              _v120 = _v121;
              if (rt.truth(_v121)) {
                const _v122: any = rt.global(413);
                acc = _v122;
                const _v123: any = await rt.send(_v122, "init", []);
                acc = _v123;
                _v120 = _v123;
                const _v124: any = 209;
                acc = _v124;
                const _v125: any = 0;
                acc = _v125;
                const _v126: any = 8;
                acc = _v126;
                const _v127: any = await rt.call(209, "Random", [_v125, _v126], this);
                acc = _v127;
                const _v128: any = 310;
                acc = _v128;
                const _v129: any = rt.global(413);
                acc = _v129;
                const _v130: any = rt.global(440);
                acc = _v130;
                const _v131: any = rt.global(441);
                acc = _v131;
                const _v132: any = rt.global(442);
                acc = _v132;
                const _v133: any = 70;
                acc = _v133;
                const _v134: any = 100;
                acc = _v134;
                const _v135: any = 25;
                acc = _v135;
                const _v136: any = rt.global(426);
                acc = _v136;
                const _v137: any = await rt.call(255, "Print", [_v124, _v127, _v128, _v129, _v130, _v131, _v132, _v133, _v134, _v135, _v136], this);
                acc = _v137;
                _v120 = _v137;
              }
              acc = _v120;
              _v1 = _v120;
            } else {
              const _v138: any = rt.get(this, "theItem");
              acc = _v138;
              const _v139: any = rt.object(891, "KeyMouse");
              acc = _v139;
              const _v140: any = await rt.send(_v139, "setCursor", [_v138]);
              acc = _v140;
              _v1 = _v140;
            }
            acc = _v1;
            const _v141: any = 0;
            acc = _v141;
            const _v142: any = rt.setGlobal(518, _v141);
            acc = _v142;
            const _v143: any = 0;
            acc = _v143;
            const _v144: any = 0;
            acc = _v144;
            const _v145: any = this;
            acc = _v145;
            const _v146: any = await rt.send(_v145, "doit", [_v143, _v144]);
            acc = _v146;
            const _v147: any = (temps[0] = _v146);
            acc = _v147;
            let _v148: any = acc;
            const _v149: any = (temps[0] ?? 0);
            acc = _v149;
            const _v150: any = await rt.call(209, "IsObject", [_v149], this);
            acc = _v150;
            _v148 = _v150;
            if (rt.truth(_v150)) {
              let _v151: any = acc;
              const _v152: any = (temps[0] ?? 0);
              acc = _v152;
              const _v153: any = this;
              acc = _v153;
              const _v154: any = await rt.send(_v153, "contains", [_v152]);
              acc = _v154;
              _v151 = _v154;
              if (rt.truth(_v154)) {
                const _v155: any = 0;
                acc = _v155;
                const _v156: any = (temps[0] = _v155);
                acc = _v156;
                _v151 = _v156;
              }
              acc = _v151;
              _v148 = _v151;
            } else {
              const _v157: any = 1;
              acc = _v157;
              const _v158: any = (temps[0] = _v157);
              acc = _v158;
              _v148 = _v158;
            }
            acc = _v148;
            const _v159: any = rt.global(477);
            acc = _v159;
            const _v160: any = await rt.send(_v159, "fade", []);
            acc = _v160;
            const _v161: any = rt.object(209, "timeClock");
            acc = _v161;
            const _v162: any = await rt.send(_v161, "dispose", []);
            acc = _v162;
            let _v163: any = acc;
            const _v164: any = rt.get(this, "prevDialog");
            acc = _v164;
            _v163 = _v164;
            if (rt.truth(_v164)) {
              const _v165: any = rt.get(this, "prevDialog");
              acc = _v165;
              const _v166: any = await rt.send(_v165, "keyMouseList", []);
              acc = _v166;
              _v163 = _v166;
            } else {
              const _v167: any = rt.global(432);
              acc = _v167;
              _v163 = _v167;
            }
            acc = _v163;
            const _v168: any = rt.object(891, "KeyMouse");
            acc = _v168;
            const _v169: any = await rt.send(_v168, "setList", [_v163]);
            acc = _v169;
            const _v170: any = rt.get(this, "keyMouseList");
            acc = _v170;
            const _v171: any = await rt.send(_v170, "release", []);
            acc = _v171;
            const _v172: any = rt.get(this, "prevDialog");
            acc = _v172;
            const _v173: any = rt.setGlobal(502, _v172);
            acc = _v173;
            const _v174: any = rt.get(this, "keyMouseList");
            acc = _v174;
            const _v175: any = await rt.send(_v174, "dispose", []);
            acc = _v175;
            const _v176: any = this;
            acc = _v176;
            const _v177: any = 291;
            acc = _v177;
            const _v178: any = await rt.call(0, "proc0_15", [_v176, _v177], this);
            acc = _v178;
            const _v179: any = rt.object(209, "workButton");
            acc = _v179;
            const _v180: any = await rt.send(_v179, "dispose", []);
            acc = _v180;
            const _v181: any = this;
            acc = _v181;
            const _v182: any = await rt.send(_v181, "dispose", []);
            acc = _v182;
            const _v183: any = 11;
            acc = _v183;
            const _v184: any = rt.get(this, "nsTop");
            acc = _v184;
            const _v185: any = 1;
            acc = _v185;
            const _v186: any = rt.op("+", ...[_v184, _v185]);
            acc = _v186;
            const _v187: any = rt.get(this, "nsLeft");
            acc = _v187;
            const _v188: any = rt.get(this, "nsBottom");
            acc = _v188;
            const _v189: any = 1;
            acc = _v189;
            const _v190: any = rt.op("-", ...[_v188, _v189]);
            acc = _v190;
            const _v191: any = rt.get(this, "nsRight");
            acc = _v191;
            const _v192: any = 3;
            acc = _v192;
            const _v193: any = rt.op("-", ...[_v191, _v192]);
            acc = _v193;
            const _v194: any = 2;
            acc = _v194;
            const _v195: any = 0;
            acc = _v195;
            const _v196: any = 0;
            acc = _v196;
            const _v197: any = await rt.call(209, "Graph", [_v183, _v186, _v187, _v190, _v193, _v194, _v195, _v196], this);
            acc = _v197;
            const _v198: any = 0;
            acc = _v198;
            const _v199: any = await rt.call(0, "proc0_17", [_v198], this);
            acc = _v199;
            const _v200: any = (temps[0] ?? 0);
            acc = _v200;
            const _acc201: any = acc;
            const _v202: any = 209;
            acc = _v202;
            const _args203: any[] = [_v202];
            await rt.call(209, "DisposeScript", _args203, this);
            const _v204: any = _args203.length === 2 ? _args203[1] : _acc201;
            acc = _v204;
            return acc;
          },
          // SCI clothing.sc: clothing.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 209, "name": "clothing"}, "draw", []);
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
        properties: {"view": 809, "priority": 13},
        methods: {
        },
      },
      {
        name: "businessSuit",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 63, "nsLeft": 84, "key": 2, "text": "Business Suit  |", "shadowColor": 89, "flashColor": 255, "indexNum": 34, "typeOfGoods": 1, "units": 13, "basePrice": 295, "celNum": 1},
        methods: {
          // SCI clothing.sc: businessSuit.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 209, "name": "businessSuit"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(416);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = 2;
              acc = _v5;
              const _v6: any = await rt.call(0, "proc0_13", [_v5], this);
              acc = _v6;
              _v3 = _v6;
              const _v7: any = rt.global(302);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "dressedForWork", []);
              acc = _v8;
              _v3 = _v8;
              const _v9: any = 0;
              acc = _v9;
              const _v10: any = rt.global(302);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "nakedCount", [_v9]);
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
        name: "leisureSuit",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 78, "nsLeft": 84, "key": 3, "text": "Dress Clothes  |", "shadowColor": 89, "flashColor": 255, "indexNum": 35, "typeOfGoods": 1, "units": 13, "basePrice": 125, "celNum": 2},
        methods: {
          // SCI clothing.sc: leisureSuit.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 209, "name": "leisureSuit"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(416);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(302);
              acc = _v5;
              const _v6: any = await rt.send(_v5, "dressedForWork", []);
              acc = _v6;
              _v3 = _v6;
              const _v7: any = 1;
              acc = _v7;
              const _v8: any = await rt.call(0, "proc0_13", [_v7], this);
              acc = _v8;
              _v3 = _v8;
              const _v9: any = 0;
              acc = _v9;
              const _v10: any = rt.global(302);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "nakedCount", [_v9]);
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
        name: "casualClothes",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 93, "nsLeft": 84, "key": 4, "text": "Casual Clothes ", "shadowColor": 89, "flashColor": 255, "indexNum": 36, "typeOfGoods": 1, "units": 11, "basePrice": 73, "celNum": 3},
        methods: {
          // SCI clothing.sc: casualClothes.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 209, "name": "casualClothes"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(416);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(302);
              acc = _v5;
              const _v6: any = await rt.send(_v5, "dressedForWork", []);
              acc = _v6;
              _v3 = _v6;
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = rt.global(302);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "nakedCount", [_v7]);
              acc = _v9;
              _v3 = _v9;
            }
            acc = _v3;
            const _v10: any = (temps[0] ?? 0);
            acc = _v10;
            return _v10;
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
          // SCI clothing.sc: workButton.doit
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
            const _v5: any = rt.object(209, "timeClock");
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
                const _v15: any = rt.object(209, "clothing");
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
                const _v27: any = rt.object(209, "items");
                acc = _v27;
                const _v28: any = await rt.send(_v27, "setCycle", [_v26]);
                acc = _v28;
                _v8 = _v28;
                const _v29: any = rt.object(209, "timeClock");
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
            const _v32: any = await rt.superSend(this, {"script": 209, "name": "workButton"}, "doit", [_v31]);
            acc = _v32;
            return acc;
          },
        },
      },
      {
        name: "items",
        className: "DCIcon",
        parent: {"script": 967, "name": "DCIcon"},
        isClass: false,
        properties: {"nsTop": 57, "view": 709, "loop": 1, "priority": 14, "cycleSpeed": 100},
        methods: {
          // SCI clothing.sc: items.init
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
          // SCI clothing.sc: items.doit
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
          // SCI clothing.sc: items.setCycle
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
              const _v6: any = await rt.superSend(this, {"script": 209, "name": "items"}, "setCycle", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI clothing.sc: items.draw
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
              const _v6: any = await rt.superSend(this, {"script": 209, "name": "items"}, "draw", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI clothing.sc: items.setSize
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
              const _v6: any = await rt.superSend(this, {"script": 209, "name": "items"}, "setSize", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "timeClock",
        className: "TimeClock",
        parent: {"script": 104, "name": "TimeClock"},
        isClass: false,
        properties: {"nsTop": 56, "nsLeft": 1},
        methods: {
          // SCI clothing.sc: timeClock.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setCycle", [_v1]);
            acc = _v3;
            const _v4: any = rt.object(209, "items");
            acc = _v4;
            const _v5: any = await rt.send(_v4, "init", []);
            acc = _v5;
            return acc;
          },
          // SCI clothing.sc: timeClock.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(209, "timeClock");
            acc = _v1;
            const _v2: any = rt.global(502);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "aTimeClock", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 209, "name": "timeClock"}, "setSize", []);
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
        properties: {"nsTop": 0, "view": 359},
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
          // SCI clothing.sc: computerScript.handleEvent
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
                  const _v19: any = 11;
                  acc = _v19;
                  const _v20: any = await rt.call(0, "proc0_6", [_v19], this);
                  acc = _v20;
                  _v18 = _v20;
                  if (rt.truth(_v20)) {
                    const _v21: any = 1;
                    acc = _v21;
                    const _v22: any = rt.setLocal(209, 0, _v21);
                    acc = _v22;
                    _v18 = _v22;
                    const _v23: any = 60;
                    acc = _v23;
                    const _v24: any = rt.set(this, "cycles", _v23);
                    acc = _v24;
                    _v18 = _v24;
                    let _v25: any = acc;
                    const _v26: any = rt.global(302);
                    acc = _v26;
                    const _v27: any = await rt.send(_v26, "uniform", []);
                    acc = _v27;
                    _branch28: {
                      const _v29: any = 36;
                      acc = _v29;
                      _v25 = rt.op("==", _v27, _v29);
                      acc = _v25;
                      if (rt.truth(_v25)) {
                        const _v30: any = rt.object(209, "casualClothes");
                        acc = _v30;
                        const _v31: any = await rt.send(_v30, "key", []);
                        acc = _v31;
                        _v25 = _v31;
                        break _branch28;
                      }
                      const _v32: any = 35;
                      acc = _v32;
                      _v25 = rt.op("==", _v27, _v32);
                      acc = _v25;
                      if (rt.truth(_v25)) {
                        const _v33: any = rt.object(209, "leisureSuit");
                        acc = _v33;
                        const _v34: any = await rt.send(_v33, "key", []);
                        acc = _v34;
                        _v25 = _v34;
                        break _branch28;
                      }
                      const _v35: any = 34;
                      acc = _v35;
                      _v25 = rt.op("==", _v27, _v35);
                      acc = _v25;
                      if (rt.truth(_v25)) {
                        const _v36: any = rt.object(209, "businessSuit");
                        acc = _v36;
                        const _v37: any = await rt.send(_v36, "key", []);
                        acc = _v37;
                        _v25 = _v37;
                        break _branch28;
                      }
                    }
                    acc = _v25;
                    const _v38: any = (args[0] ?? 0);
                    acc = _v38;
                    const _v39: any = await rt.send(_v38, "message", [_v25]);
                    acc = _v39;
                    _v18 = _v39;
                  }
                  acc = _v18;
                  _v14 = _v18;
                  break _branch16;
                }
                const _v40: any = 11;
                acc = _v40;
                _v14 = rt.op("==", _v15, _v40);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v41: any = acc;
                  let _v42: any = 1;
                  if (rt.truth(_v42)) {
                    const _v43: any = rt.local(209, 0);
                    acc = _v43;
                    const _v44: any = rt.op("not", ...[_v43]);
                    acc = _v44;
                    _v42 = _v44;
                  }
                  if (rt.truth(_v42)) {
                    const _v45: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v45;
                    const _v46: any = rt.global(412);
                    acc = _v46;
                    const _v47: any = rt.op(">=", ...[_v45, _v46]);
                    acc = _v47;
                    _v42 = _v47;
                  }
                  if (rt.truth(_v42)) {
                    const _v48: any = rt.global(302);
                    acc = _v48;
                    const _v49: any = await rt.send(_v48, "weeksOfClothing", []);
                    acc = _v49;
                    const _v50: any = 1;
                    acc = _v50;
                    const _v51: any = rt.op("<=", ...[_v49, _v50]);
                    acc = _v51;
                    _v42 = _v51;
                  }
                  acc = _v42;
                  _v41 = _v42;
                  if (rt.truth(_v42)) {
                    const _v52: any = 60;
                    acc = _v52;
                    const _v53: any = rt.set(this, "cycles", _v52);
                    acc = _v53;
                    _v41 = _v53;
                    let _v54: any = acc;
                    const _v55: any = rt.global(302);
                    acc = _v55;
                    const _v56: any = await rt.send(_v55, "uniform", []);
                    acc = _v56;
                    _branch57: {
                      const _v58: any = 36;
                      acc = _v58;
                      _v54 = rt.op("==", _v56, _v58);
                      acc = _v54;
                      if (rt.truth(_v54)) {
                        const _v59: any = rt.object(209, "casualClothes");
                        acc = _v59;
                        const _v60: any = await rt.send(_v59, "key", []);
                        acc = _v60;
                        _v54 = _v60;
                        break _branch57;
                      }
                      const _v61: any = 35;
                      acc = _v61;
                      _v54 = rt.op("==", _v56, _v61);
                      acc = _v54;
                      if (rt.truth(_v54)) {
                        const _v62: any = rt.object(209, "leisureSuit");
                        acc = _v62;
                        const _v63: any = await rt.send(_v62, "key", []);
                        acc = _v63;
                        _v54 = _v63;
                        break _branch57;
                      }
                      const _v64: any = 34;
                      acc = _v64;
                      _v54 = rt.op("==", _v56, _v64);
                      acc = _v54;
                      if (rt.truth(_v54)) {
                        const _v65: any = rt.object(209, "businessSuit");
                        acc = _v65;
                        const _v66: any = await rt.send(_v65, "key", []);
                        acc = _v66;
                        _v54 = _v66;
                        break _branch57;
                      }
                    }
                    acc = _v54;
                    const _v67: any = (args[0] ?? 0);
                    acc = _v67;
                    const _v68: any = await rt.send(_v67, "message", [_v54]);
                    acc = _v68;
                    _v41 = _v68;
                  }
                  acc = _v41;
                  _v14 = _v41;
                  break _branch16;
                }
                const _v69: any = (args[0] ?? 0);
                acc = _v69;
                const _v70: any = 1;
                acc = _v70;
                const _v71: any = await rt.superSend(this, {"script": 209, "name": "computerScript"}, "handleEvent", [_v69, _v70]);
                acc = _v71;
                _v14 = _v71;
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
      // SCI clothing.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.ref("global", 0, 100);
        acc = _v1;
        const _v2: any = 209;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(209, "Format", [_v1, _v2, _v3], this);
        acc = _v4;
        const _v5: any = rt.ref("global", 0, 100);
        acc = _v5;
        const _v6: any = 209;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = await rt.call(209, "Format", [_v5, _v6, _v7], this);
        acc = _v8;
        const _v9: any = rt.ref("global", 0, 100);
        acc = _v9;
        const _v10: any = 209;
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = await rt.call(209, "Format", [_v9, _v10, _v11], this);
        acc = _v12;
        const _v13: any = rt.ref("global", 0, 100);
        acc = _v13;
        const _v14: any = 209;
        acc = _v14;
        const _v15: any = 3;
        acc = _v15;
        const _v16: any = await rt.call(209, "Format", [_v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = rt.ref("global", 0, 100);
        acc = _v17;
        const _v18: any = 209;
        acc = _v18;
        const _v19: any = 4;
        acc = _v19;
        const _v20: any = await rt.call(209, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = rt.ref("global", 0, 100);
        acc = _v21;
        const _v22: any = 209;
        acc = _v22;
        const _v23: any = 5;
        acc = _v23;
        const _v24: any = await rt.call(209, "Format", [_v21, _v22, _v23], this);
        acc = _v24;
        const _v25: any = rt.ref("global", 0, 100);
        acc = _v25;
        const _v26: any = 209;
        acc = _v26;
        const _v27: any = 6;
        acc = _v27;
        const _v28: any = await rt.call(209, "Format", [_v25, _v26, _v27], this);
        acc = _v28;
        const _v29: any = rt.ref("global", 0, 100);
        acc = _v29;
        const _v30: any = 209;
        acc = _v30;
        const _v31: any = 7;
        acc = _v31;
        const _v32: any = await rt.call(209, "Format", [_v29, _v30, _v31], this);
        acc = _v32;
        const _v33: any = rt.ref("global", 0, 100);
        acc = _v33;
        const _v34: any = 209;
        acc = _v34;
        const _v35: any = 8;
        acc = _v35;
        const _v36: any = await rt.call(209, "Format", [_v33, _v34, _v35], this);
        acc = _v36;
        const _v37: any = rt.ref("global", 0, 100);
        acc = _v37;
        const _v38: any = 209;
        acc = _v38;
        const _v39: any = 9;
        acc = _v39;
        const _v40: any = await rt.call(209, "Format", [_v37, _v38, _v39], this);
        acc = _v40;
        const _v41: any = rt.ref("global", 0, 100);
        acc = _v41;
        const _v42: any = 209;
        acc = _v42;
        const _v43: any = 10;
        acc = _v43;
        const _v44: any = await rt.call(209, "Format", [_v41, _v42, _v43], this);
        acc = _v44;
        const _v45: any = rt.ref("global", 0, 100);
        acc = _v45;
        const _v46: any = 209;
        acc = _v46;
        const _v47: any = 11;
        acc = _v47;
        const _v48: any = await rt.call(209, "Format", [_v45, _v46, _v47], this);
        acc = _v48;
        const _v49: any = rt.ref("global", 0, 100);
        acc = _v49;
        const _v50: any = 209;
        acc = _v50;
        const _v51: any = 12;
        acc = _v51;
        const _v52: any = await rt.call(209, "Format", [_v49, _v50, _v51], this);
        acc = _v52;
        const _v53: any = rt.ref("global", 0, 100);
        acc = _v53;
        const _v54: any = 209;
        acc = _v54;
        const _v55: any = 13;
        acc = _v55;
        const _v56: any = await rt.call(209, "Format", [_v53, _v54, _v55], this);
        acc = _v56;
        const _v57: any = rt.ref("global", 0, 100);
        acc = _v57;
        const _v58: any = 209;
        acc = _v58;
        const _v59: any = 14;
        acc = _v59;
        const _v60: any = await rt.call(209, "Format", [_v57, _v58, _v59], this);
        acc = _v60;
        const _v61: any = rt.ref("global", 0, 100);
        acc = _v61;
        const _v62: any = 209;
        acc = _v62;
        const _v63: any = 15;
        acc = _v63;
        const _v64: any = await rt.call(209, "Format", [_v61, _v62, _v63], this);
        acc = _v64;
        const _v65: any = rt.ref("global", 0, 100);
        acc = _v65;
        const _v66: any = 209;
        acc = _v66;
        const _v67: any = 16;
        acc = _v67;
        const _v68: any = await rt.call(209, "Format", [_v65, _v66, _v67], this);
        acc = _v68;
        const _v69: any = rt.ref("global", 0, 100);
        acc = _v69;
        const _v70: any = 209;
        acc = _v70;
        const _v71: any = 17;
        acc = _v71;
        const _v72: any = await rt.call(209, "Format", [_v69, _v70, _v71], this);
        acc = _v72;
        const _v73: any = rt.ref("global", 0, 100);
        acc = _v73;
        const _v74: any = 209;
        acc = _v74;
        const _v75: any = 18;
        acc = _v75;
        const _v76: any = await rt.call(209, "Format", [_v73, _v74, _v75], this);
        acc = _v76;
        const _v77: any = rt.ref("global", 0, 100);
        acc = _v77;
        const _v78: any = 209;
        acc = _v78;
        const _v79: any = 19;
        acc = _v79;
        const _v80: any = await rt.call(209, "Format", [_v77, _v78, _v79], this);
        acc = _v80;
        const _v81: any = rt.ref("global", 0, 100);
        acc = _v81;
        const _v82: any = 209;
        acc = _v82;
        const _v83: any = 20;
        acc = _v83;
        const _v84: any = await rt.call(209, "Format", [_v81, _v82, _v83], this);
        acc = _v84;
        const _v85: any = rt.ref("global", 0, 100);
        acc = _v85;
        const _v86: any = 209;
        acc = _v86;
        const _v87: any = 21;
        acc = _v87;
        const _v88: any = await rt.call(209, "Format", [_v85, _v86, _v87], this);
        acc = _v88;
        const _v89: any = rt.ref("global", 0, 100);
        acc = _v89;
        const _v90: any = 209;
        acc = _v90;
        const _v91: any = 22;
        acc = _v91;
        const _v92: any = await rt.call(209, "Format", [_v89, _v90, _v91], this);
        acc = _v92;
        const _v93: any = rt.ref("global", 0, 100);
        acc = _v93;
        const _v94: any = 209;
        acc = _v94;
        const _v95: any = 23;
        acc = _v95;
        const _v96: any = await rt.call(209, "Format", [_v93, _v94, _v95], this);
        acc = _v96;
        const _v97: any = rt.ref("global", 0, 100);
        acc = _v97;
        const _v98: any = 209;
        acc = _v98;
        const _v99: any = 24;
        acc = _v99;
        const _v100: any = await rt.call(209, "Format", [_v97, _v98, _v99], this);
        acc = _v100;
        const _v101: any = rt.ref("global", 0, 100);
        acc = _v101;
        const _v102: any = 209;
        acc = _v102;
        const _v103: any = 25;
        acc = _v103;
        const _v104: any = await rt.call(209, "Format", [_v101, _v102, _v103], this);
        acc = _v104;
        const _v105: any = rt.ref("global", 0, 100);
        acc = _v105;
        const _v106: any = 209;
        acc = _v106;
        const _v107: any = 26;
        acc = _v107;
        const _v108: any = await rt.call(209, "Format", [_v105, _v106, _v107], this);
        acc = _v108;
        const _v109: any = rt.ref("global", 0, 100);
        acc = _v109;
        const _v110: any = 209;
        acc = _v110;
        const _v111: any = 27;
        acc = _v111;
        const _v112: any = await rt.call(209, "Format", [_v109, _v110, _v111], this);
        acc = _v112;
        const _v113: any = rt.ref("global", 0, 100);
        acc = _v113;
        const _v114: any = 209;
        acc = _v114;
        const _v115: any = 28;
        acc = _v115;
        const _v116: any = await rt.call(209, "Format", [_v113, _v114, _v115], this);
        acc = _v116;
        const _v117: any = rt.ref("global", 0, 100);
        acc = _v117;
        const _v118: any = 209;
        acc = _v118;
        const _v119: any = 29;
        acc = _v119;
        const _v120: any = await rt.call(209, "Format", [_v117, _v118, _v119], this);
        acc = _v120;
        return acc;
      },
    },
    exports: {"0": "clothing"},
  });
}
