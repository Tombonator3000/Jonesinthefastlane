// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/market.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: f48d97c1a5c3eea2ab0885d70db3977f356da5d4f79b8c5fbcf129cce2519386
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(203, {
    name: "market",
    uses: [0, 103, 104, 108, 110, 255, 891, 967, 996, 999],
    locals: [0, -1, 1],
    objects: [
      {
        name: "boughtItem",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI market.sc: boughtItem.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = rt.object(203, "newspaper");
            acc = _v3;
            const _v4: any = rt.op("!=", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = 0;
              acc = _v5;
              const _v6: any = (temps[1] = _v5);
              acc = _v6;
              _v1 = _v6;
              let _v7: any = acc;
              const _v8: any = (args[0] ?? 0);
              acc = _v8;
              const _v9: any = rt.object(203, "lotteryTickets");
              acc = _v9;
              const _v10: any = rt.op("==", ...[_v8, _v9]);
              acc = _v10;
              _v7 = _v10;
              if (rt.truth(_v10)) {
                let _v11: any = acc;
                const _v12: any = rt.local(203, 2);
                acc = _v12;
                const _v13: any = rt.op("not", ...[_v12]);
                acc = _v13;
                _v11 = _v13;
                if (rt.truth(_v13)) {
                  const _v14: any = 2;
                  acc = _v14;
                  const _v15: any = rt.global(413);
                  acc = _v15;
                  const _v16: any = await rt.send(_v15, "init", [_v14]);
                  acc = _v16;
                  _v11 = _v16;
                  const _v17: any = 1;
                  acc = _v17;
                  const _v18: any = (temps[1] = _v17);
                  acc = _v18;
                  _v11 = _v18;
                }
                acc = _v11;
                _v7 = _v11;
                const _v19: any = 0;
                acc = _v19;
                const _v20: any = rt.setLocal(203, 2, _v19);
                acc = _v20;
                _v7 = _v20;
              }
              acc = _v7;
              _v1 = _v7;
              let _v21: any = acc;
              const _v22: any = (temps[1] ?? 0);
              acc = _v22;
              const _v23: any = rt.op("not", ...[_v22]);
              acc = _v23;
              _v21 = _v23;
              if (rt.truth(_v23)) {
                _loop24: for (;;) {
                  const _v26: any = rt.local(203, 1);
                  acc = _v26;
                  const _v27: any = 15;
                  acc = _v27;
                  const _v28: any = 46;
                  acc = _v28;
                  const _v29: any = await rt.call(203, "Random", [_v27, _v28], this);
                  acc = _v29;
                  const _v30: any = (temps[0] = _v29);
                  acc = _v30;
                  const _v31: any = rt.op("==", ...[_v26, _v30]);
                  acc = _v31;
                  if (!rt.truth(_v31)) break _loop24;
                  _continue25: {
                    const _v32: any = 1;
                    acc = _v32;
                  }
                }
                _v21 = acc;
                const _v33: any = (temps[0] ?? 0);
                acc = _v33;
                const _v34: any = rt.setLocal(203, 1, _v33);
                acc = _v34;
                _v21 = _v34;
                const _v35: any = 203;
                acc = _v35;
                const _v36: any = rt.local(203, 1);
                acc = _v36;
                const _v37: any = 310;
                acc = _v37;
                const _v38: any = rt.global(413);
                acc = _v38;
                const _v39: any = rt.global(440);
                acc = _v39;
                const _v40: any = rt.global(441);
                acc = _v40;
                const _v41: any = rt.global(442);
                acc = _v41;
                const _v42: any = 25;
                acc = _v42;
                const _v43: any = rt.global(426);
                acc = _v43;
                const _v44: any = await rt.call(255, "Print", [_v35, _v36, _v37, _v38, _v39, _v40, _v41, _v42, _v43], this);
                acc = _v44;
                _v21 = _v44;
              }
              acc = _v21;
              _v1 = _v21;
            }
            acc = _v1;
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
          // SCI market.sc: notEnoughCash.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 16;
            acc = _v1;
            const _v2: any = rt.global(413);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "init", [_v1]);
            acc = _v3;
            const _v4: any = 203;
            acc = _v4;
            const _v5: any = 47;
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
        name: "market",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI market.sc: market.init
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
              const _v5: any = 203;
              acc = _v5;
              const _v6: any = await rt.call(203, "Load", [_v4, _v5], this);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 2;
              acc = _v7;
              const _v8: any = await rt.call(0, "proc0_17", [_v7], this);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = rt.object(203, "dialogKeyMouse");
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
              const _v17: any = 207;
              acc = _v17;
              const _v18: any = rt.setGlobal(441, _v17);
              acc = _v18;
              _v1 = _v18;
              const _v19: any = 78;
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
                const _v26: any = rt.object(203, "theTalker");
                acc = _v26;
                const _v27: any = await rt.send(_v26, "view", []);
                acc = _v27;
                const _v28: any = await rt.call(203, "Load", [_v25, _v27], this);
                acc = _v28;
                _v21 = _v28;
              }
              acc = _v21;
              _v1 = _v21;
              const _v29: any = rt.object(203, "notEnoughCash");
              acc = _v29;
              const _v30: any = rt.setGlobal(424, _v29);
              acc = _v30;
              _v1 = _v30;
              const _v31: any = rt.object(203, "boughtItem");
              acc = _v31;
              const _v32: any = rt.setGlobal(425, _v31);
              acc = _v32;
              _v1 = _v32;
              const _v33: any = rt.object(203, "items");
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
              const _v40: any = 3;
              acc = _v40;
              const _v41: any = rt.setGlobal(400, _v40);
              acc = _v41;
              _v1 = _v41;
              const _v42: any = 21;
              acc = _v42;
              const _v43: any = rt.global(302);
              acc = _v43;
              const _v44: any = await rt.send(_v43, "durables", []);
              acc = _v44;
              const _v45: any = await rt.send(_v44, "objectAtIndexQuan", [_v42]);
              acc = _v45;
              const _v46: any = rt.setLocal(203, 0, _v45);
              acc = _v46;
              _v1 = _v46;
              let _v47: any = acc;
              const _v48: any = rt.global(302);
              acc = _v48;
              const _v49: any = await rt.send(_v48, "playing", []);
              acc = _v49;
              const _v50: any = 29;
              acc = _v50;
              const _v51: any = rt.op("==", ...[_v49, _v50]);
              acc = _v51;
              _v47 = _v51;
              if (rt.truth(_v51)) {
                const _v52: any = rt.object(203, "computerScript");
                acc = _v52;
                const _v53: any = this;
                acc = _v53;
                const _v54: any = await rt.send(_v53, "setScript", [_v52]);
                acc = _v54;
                _v47 = _v54;
                const _v55: any = rt.object(203, "computerScript");
                acc = _v55;
                const _v56: any = await rt.send(_v55, "cue", []);
                acc = _v56;
                _v47 = _v56;
              }
              acc = _v47;
              _v1 = _v47;
              const _v57: any = rt.object(203, "theTalker");
              acc = _v57;
              const _v58: any = rt.setGlobal(413, _v57);
              acc = _v58;
              _v1 = _v58;
              const _v59: any = rt.global(59);
              acc = _v59;
              const _v60: any = rt.object(203, "background");
              acc = _v60;
              const _v61: any = rt.object(203, "theTalker");
              acc = _v61;
              const _v62: any = rt.object(203, "items");
              acc = _v62;
              const _v63: any = rt.object(203, "foodFor1Week");
              acc = _v63;
              const _v64: any = rt.object(203, "foodFor2Weeks");
              acc = _v64;
              const _v65: any = rt.object(203, "foodFor4Weeks");
              acc = _v65;
              const _v66: any = rt.object(203, "lotteryTickets");
              acc = _v66;
              const _v67: any = rt.object(203, "newspaper");
              acc = _v67;
              const _v68: any = this;
              acc = _v68;
              const _v69: any = await rt.send(_v68, "window", [_v59]);
              acc = _v69;
              const _v70: any = await rt.send(_v68, "add", [_v60, _v61, _v62, _v63, _v64, _v65, _v66, _v67]);
              acc = _v70;
              _v1 = _v70;
              let _v71: any = acc;
              const _v72: any = rt.global(302);
              acc = _v72;
              const _v73: any = await rt.send(_v72, "worksAt", []);
              acc = _v73;
              const _v74: any = 3;
              acc = _v74;
              const _v75: any = rt.op("==", ...[_v73, _v74]);
              acc = _v75;
              _v71 = _v75;
              if (rt.truth(_v75)) {
                const _v76: any = rt.object(203, "workButton");
                acc = _v76;
                const _v77: any = this;
                acc = _v77;
                const _v78: any = await rt.send(_v77, "add", [_v76]);
                acc = _v78;
                _v71 = _v78;
              }
              acc = _v71;
              _v1 = _v71;
              const _v79: any = rt.object(203, "exitButton");
              acc = _v79;
              const _v80: any = this;
              acc = _v80;
              const _v81: any = await rt.send(_v80, "add", [_v79]);
              acc = _v81;
              _v1 = _v81;
              const _v82: any = 102;
              acc = _v82;
              const _v83: any = 1;
              acc = _v83;
              const _v84: any = 153;
              acc = _v84;
              const _v85: any = 69;
              acc = _v85;
              const _v86: any = 44;
              acc = _v86;
              const _v87: any = 0;
              acc = _v87;
              const _v88: any = 15;
              acc = _v88;
              const _v89: any = this;
              acc = _v89;
              const _v90: any = await rt.send(_v89, "eachElementDo", [_v82, _v83]);
              acc = _v90;
              const _v91: any = await rt.send(_v89, "eachElementDo", [_v84]);
              acc = _v91;
              const _v92: any = await rt.send(_v89, "moveTo", [_v85, _v86]);
              acc = _v92;
              const _v93: any = await rt.send(_v89, "open", [_v87, _v88]);
              acc = _v93;
              _v1 = _v93;
              let _v94: any = acc;
              const _v95: any = rt.global(302);
              acc = _v95;
              const _v96: any = await rt.send(_v95, "worksAt", []);
              acc = _v96;
              const _v97: any = 3;
              acc = _v97;
              const _v98: any = rt.op("==", ...[_v96, _v97]);
              acc = _v98;
              _v94 = _v98;
              if (rt.truth(_v98)) {
                const _v99: any = rt.object(203, "timeClock");
                acc = _v99;
                const _v100: any = this;
                acc = _v100;
                const _v101: any = await rt.send(_v100, "add", [_v99]);
                acc = _v101;
                _v94 = _v101;
                const _v102: any = rt.object(203, "timeClock");
                acc = _v102;
                const _v103: any = await rt.send(_v102, "setSize", []);
                acc = _v103;
                _v94 = _v103;
              }
              acc = _v94;
              _v1 = _v94;
              const _v104: any = 49;
              acc = _v104;
              const _v105: any = rt.global(477);
              acc = _v105;
              const _v106: any = await rt.send(_v105, "playBed", [_v104]);
              acc = _v106;
              _v1 = _v106;
              const _v107: any = this;
              acc = _v107;
              const _v108: any = rt.get(this, "keyMouseList");
              acc = _v108;
              const _v109: any = rt.object(203, "foodFor1Week");
              acc = _v109;
              const _v110: any = await rt.call(0, "proc0_9", [_v107, _v108, _v109], this);
              acc = _v110;
              _v1 = _v110;
              const _v111: any = rt.get(this, "keyMouseList");
              acc = _v111;
              const _v112: any = rt.object(891, "KeyMouse");
              acc = _v112;
              const _v113: any = await rt.send(_v112, "setList", [_v111]);
              acc = _v113;
              _v1 = _v113;
              const _v114: any = rt.global(302);
              acc = _v114;
              const _v115: any = await rt.send(_v114, "cash", []);
              acc = _v115;
              const _v116: any = 1;
              acc = _v116;
              const _v117: any = rt.op("-", ...[_v115, _v116]);
              acc = _v117;
              const _v118: any = rt.global(305);
              acc = _v118;
              const _v119: any = await rt.send(_v118, "setSize", []);
              acc = _v119;
              const _v120: any = await rt.send(_v118, "value", [_v117]);
              acc = _v120;
              const _v121: any = await rt.send(_v118, "draw", []);
              acc = _v121;
              _v1 = _v121;
              const _v122: any = 1;
              acc = _v122;
              const _v123: any = rt.object(996, "User");
              acc = _v123;
              const _v124: any = await rt.send(_v123, "canControl", [_v122]);
              acc = _v124;
              _v1 = _v124;
              let _v125: any = acc;
              const _v126: any = await rt.call(0, "proc0_14", [], this);
              acc = _v126;
              _v125 = _v126;
              if (rt.truth(_v126)) {
                const _v127: any = rt.global(413);
                acc = _v127;
                const _v128: any = await rt.send(_v127, "init", []);
                acc = _v128;
                _v125 = _v128;
                const _v129: any = 203;
                acc = _v129;
                const _v130: any = 0;
                acc = _v130;
                const _v131: any = 13;
                acc = _v131;
                const _v132: any = await rt.call(203, "Random", [_v130, _v131], this);
                acc = _v132;
                const _v133: any = 310;
                acc = _v133;
                const _v134: any = rt.global(413);
                acc = _v134;
                const _v135: any = rt.global(440);
                acc = _v135;
                const _v136: any = rt.global(441);
                acc = _v136;
                const _v137: any = rt.global(442);
                acc = _v137;
                const _v138: any = 70;
                acc = _v138;
                const _v139: any = 100;
                acc = _v139;
                const _v140: any = 25;
                acc = _v140;
                const _v141: any = rt.global(426);
                acc = _v141;
                const _v142: any = await rt.call(255, "Print", [_v129, _v132, _v133, _v134, _v135, _v136, _v137, _v138, _v139, _v140, _v141], this);
                acc = _v142;
                _v125 = _v142;
              }
              acc = _v125;
              _v1 = _v125;
              let _v143: any = acc;
              let _v144: any = 1;
              if (rt.truth(_v144)) {
                const _v145: any = 0;
                acc = _v145;
                const _v146: any = 50;
                acc = _v146;
                const _v147: any = await rt.call(203, "Random", [_v145, _v146], this);
                acc = _v147;
                const _v148: any = rt.op("not", ...[_v147]);
                acc = _v148;
                _v144 = _v148;
              }
              if (rt.truth(_v144)) {
                const _v149: any = await rt.call(0, "proc0_11", [], this);
                acc = _v149;
                const _v150: any = 0;
                acc = _v150;
                const _v151: any = rt.op(">", ...[_v149, _v150]);
                acc = _v151;
                _v144 = _v151;
              }
              acc = _v144;
              _v143 = _v144;
              if (rt.truth(_v144)) {
                const _v152: any = 1;
                acc = _v152;
                const _v153: any = rt.setGlobal(446, _v152);
                acc = _v153;
                _v143 = _v153;
              }
              acc = _v143;
              _v1 = _v143;
            } else {
              const _v154: any = rt.get(this, "theItem");
              acc = _v154;
              const _v155: any = rt.object(891, "KeyMouse");
              acc = _v155;
              const _v156: any = await rt.send(_v155, "setCursor", [_v154]);
              acc = _v156;
              _v1 = _v156;
            }
            acc = _v1;
            const _v157: any = 0;
            acc = _v157;
            const _v158: any = rt.setGlobal(518, _v157);
            acc = _v158;
            const _v159: any = 0;
            acc = _v159;
            const _v160: any = 0;
            acc = _v160;
            const _v161: any = this;
            acc = _v161;
            const _v162: any = await rt.send(_v161, "doit", [_v159, _v160]);
            acc = _v162;
            const _v163: any = (temps[0] = _v162);
            acc = _v163;
            let _v164: any = acc;
            const _v165: any = (temps[0] ?? 0);
            acc = _v165;
            const _v166: any = await rt.call(203, "IsObject", [_v165], this);
            acc = _v166;
            _v164 = _v166;
            if (rt.truth(_v166)) {
              let _v167: any = acc;
              const _v168: any = (temps[0] ?? 0);
              acc = _v168;
              const _v169: any = this;
              acc = _v169;
              const _v170: any = await rt.send(_v169, "contains", [_v168]);
              acc = _v170;
              _v167 = _v170;
              if (rt.truth(_v170)) {
                const _v171: any = 0;
                acc = _v171;
                const _v172: any = (temps[0] = _v171);
                acc = _v172;
                _v167 = _v172;
              }
              acc = _v167;
              _v164 = _v167;
            } else {
              const _v173: any = 1;
              acc = _v173;
              const _v174: any = (temps[0] = _v173);
              acc = _v174;
              _v164 = _v174;
            }
            acc = _v164;
            let _v175: any = acc;
            const _v176: any = rt.global(446);
            acc = _v176;
            _v175 = _v176;
            if (rt.truth(_v176)) {
              const _v177: any = 0;
              acc = _v177;
              const _v178: any = 0;
              acc = _v178;
              const _v179: any = rt.global(302);
              acc = _v179;
              const _v180: any = await rt.send(_v179, "cash", [_v177]);
              acc = _v180;
              const _v181: any = await rt.send(_v179, "cashHi", [_v178]);
              acc = _v181;
              _v175 = _v181;
            }
            acc = _v175;
            const _v182: any = rt.global(477);
            acc = _v182;
            const _v183: any = await rt.send(_v182, "fade", []);
            acc = _v183;
            const _v184: any = rt.object(203, "timeClock");
            acc = _v184;
            const _v185: any = await rt.send(_v184, "dispose", []);
            acc = _v185;
            let _v186: any = acc;
            const _v187: any = rt.get(this, "prevDialog");
            acc = _v187;
            _v186 = _v187;
            if (rt.truth(_v187)) {
              const _v188: any = rt.get(this, "prevDialog");
              acc = _v188;
              const _v189: any = await rt.send(_v188, "keyMouseList", []);
              acc = _v189;
              _v186 = _v189;
            } else {
              const _v190: any = rt.global(432);
              acc = _v190;
              _v186 = _v190;
            }
            acc = _v186;
            const _v191: any = rt.object(891, "KeyMouse");
            acc = _v191;
            const _v192: any = await rt.send(_v191, "setList", [_v186]);
            acc = _v192;
            const _v193: any = rt.get(this, "keyMouseList");
            acc = _v193;
            const _v194: any = await rt.send(_v193, "release", []);
            acc = _v194;
            const _v195: any = rt.get(this, "keyMouseList");
            acc = _v195;
            const _v196: any = await rt.send(_v195, "dispose", []);
            acc = _v196;
            const _v197: any = rt.get(this, "prevDialog");
            acc = _v197;
            const _v198: any = rt.setGlobal(502, _v197);
            acc = _v198;
            const _v199: any = this;
            acc = _v199;
            const _v200: any = 291;
            acc = _v200;
            const _v201: any = await rt.call(0, "proc0_15", [_v199, _v200], this);
            acc = _v201;
            const _v202: any = rt.object(203, "workButton");
            acc = _v202;
            const _v203: any = await rt.send(_v202, "dispose", []);
            acc = _v203;
            const _v204: any = this;
            acc = _v204;
            const _v205: any = await rt.send(_v204, "dispose", []);
            acc = _v205;
            const _v206: any = 11;
            acc = _v206;
            const _v207: any = rt.get(this, "nsTop");
            acc = _v207;
            const _v208: any = 1;
            acc = _v208;
            const _v209: any = rt.op("+", ...[_v207, _v208]);
            acc = _v209;
            const _v210: any = rt.get(this, "nsLeft");
            acc = _v210;
            const _v211: any = rt.get(this, "nsBottom");
            acc = _v211;
            const _v212: any = 1;
            acc = _v212;
            const _v213: any = rt.op("-", ...[_v211, _v212]);
            acc = _v213;
            const _v214: any = rt.get(this, "nsRight");
            acc = _v214;
            const _v215: any = 3;
            acc = _v215;
            const _v216: any = rt.op("-", ...[_v214, _v215]);
            acc = _v216;
            const _v217: any = 2;
            acc = _v217;
            const _v218: any = 0;
            acc = _v218;
            const _v219: any = 0;
            acc = _v219;
            const _v220: any = await rt.call(203, "Graph", [_v206, _v209, _v210, _v213, _v216, _v217, _v218, _v219], this);
            acc = _v220;
            const _v221: any = 0;
            acc = _v221;
            const _v222: any = await rt.call(0, "proc0_17", [_v221], this);
            acc = _v222;
            const _v223: any = (temps[0] ?? 0);
            acc = _v223;
            const _acc224: any = acc;
            const _v225: any = 203;
            acc = _v225;
            const _args226: any[] = [_v225];
            await rt.call(203, "DisposeScript", _args226, this);
            const _v227: any = _args226.length === 2 ? _args226[1] : _acc224;
            acc = _v227;
            return acc;
          },
          // SCI market.sc: market.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 203, "name": "market"}, "draw", []);
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
        properties: {"view": 803, "priority": 13},
        methods: {
        },
      },
      {
        name: "foodFor1Week",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 31, "nsLeft": 6, "key": 1, "text": "Food For 1 Week....", "textColor": 37, "shadowColor": 112, "indexNum": 1, "typeOfGoods": 1, "basePrice": 55},
        methods: {
          // SCI market.sc: foodFor1Week.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "price");
            acc = _v2;
            const _v3: any = 100;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = 203;
              acc = _v6;
              const _v7: any = 48;
              acc = _v7;
              const _v8: any = rt.get(this, "text");
              acc = _v8;
              const _v9: any = rt.get(this, "price");
              acc = _v9;
              const _v10: any = await rt.call(203, "Format", [_v5, _v6, _v7, _v8, _v9], this);
              acc = _v10;
              _v1 = _v10;
            } else {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = 203;
              acc = _v12;
              const _v13: any = 49;
              acc = _v13;
              const _v14: any = rt.get(this, "text");
              acc = _v14;
              const _v15: any = rt.get(this, "price");
              acc = _v15;
              const _v16: any = await rt.call(203, "Format", [_v11, _v12, _v13, _v14, _v15], this);
              acc = _v16;
              _v1 = _v16;
            }
            acc = _v1;
            return acc;
          },
          // SCI market.sc: foodFor1Week.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 203, "name": "foodFor1Week"}, "doit", []);
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
              const _v6: any = rt.global(470);
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
              const _v9: any = rt.setGlobal(470, _v8);
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
        name: "foodFor2Weeks",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 46, "nsLeft": 6, "key": 2, "text": "Food For 2 Weeks..|", "textColor": 37, "shadowColor": 112, "indexNum": 1, "typeOfGoods": 1, "units": 2, "basePrice": 100, "celNum": 1},
        methods: {
          // SCI market.sc: foodFor2Weeks.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "price");
            acc = _v2;
            const _v3: any = 100;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = 203;
              acc = _v6;
              const _v7: any = 48;
              acc = _v7;
              const _v8: any = rt.get(this, "text");
              acc = _v8;
              const _v9: any = rt.get(this, "price");
              acc = _v9;
              const _v10: any = await rt.call(203, "Format", [_v5, _v6, _v7, _v8, _v9], this);
              acc = _v10;
              _v1 = _v10;
            } else {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = 203;
              acc = _v12;
              const _v13: any = 49;
              acc = _v13;
              const _v14: any = rt.get(this, "text");
              acc = _v14;
              const _v15: any = rt.get(this, "price");
              acc = _v15;
              const _v16: any = await rt.call(203, "Format", [_v11, _v12, _v13, _v14, _v15], this);
              acc = _v16;
              _v1 = _v16;
            }
            acc = _v1;
            return acc;
          },
          // SCI market.sc: foodFor2Weeks.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 203, "name": "foodFor2Weeks"}, "doit", []);
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
              const _v6: any = rt.global(470);
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
              const _v9: any = rt.setGlobal(470, _v8);
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
        name: "foodFor4Weeks",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 64, "nsLeft": 75, "key": 3, "text": "Food For 4 Weeks..", "textColor": 37, "shadowColor": 112, "indexNum": 1, "typeOfGoods": 1, "units": 4, "basePrice": 190, "celNum": 2},
        methods: {
          // SCI market.sc: foodFor4Weeks.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "price");
            acc = _v2;
            const _v3: any = 100;
            acc = _v3;
            const _v4: any = rt.op("<", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[0] ?? 0);
              acc = _v5;
              const _v6: any = 203;
              acc = _v6;
              const _v7: any = 48;
              acc = _v7;
              const _v8: any = rt.get(this, "text");
              acc = _v8;
              const _v9: any = rt.get(this, "price");
              acc = _v9;
              const _v10: any = await rt.call(203, "Format", [_v5, _v6, _v7, _v8, _v9], this);
              acc = _v10;
              _v1 = _v10;
            } else {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = 203;
              acc = _v12;
              const _v13: any = 49;
              acc = _v13;
              const _v14: any = rt.get(this, "text");
              acc = _v14;
              const _v15: any = rt.get(this, "price");
              acc = _v15;
              const _v16: any = await rt.call(203, "Format", [_v11, _v12, _v13, _v14, _v15], this);
              acc = _v16;
              _v1 = _v16;
            }
            acc = _v1;
            return acc;
          },
          // SCI market.sc: foodFor4Weeks.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 203, "name": "foodFor4Weeks"}, "doit", []);
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
              const _v6: any = rt.global(470);
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
              const _v9: any = rt.setGlobal(470, _v8);
              acc = _v9;
              _v3 = _v9;
              const _v10: any = 4;
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
        name: "lotteryTickets",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 79, "nsLeft": 74, "key": 4, "text": "10 Lottery Tickets|...|", "textColor": 37, "shadowColor": 112, "price": 10, "indexNum": 9, "typeOfGoods": 1, "units": 10, "fixedPrice": 1, "celNum": 3},
        methods: {
          // SCI market.sc: lotteryTickets.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = 203;
            acc = _v2;
            const _v3: any = 50;
            acc = _v3;
            const _v4: any = rt.get(this, "text");
            acc = _v4;
            const _v5: any = rt.get(this, "price");
            acc = _v5;
            const _v6: any = await rt.call(203, "Format", [_v1, _v2, _v3, _v4, _v5], this);
            acc = _v6;
            return acc;
          },
          // SCI market.sc: lotteryTickets.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 203, "name": "lotteryTickets"}, "doit", []);
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
              const _v6: any = rt.global(469);
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
              const _v9: any = rt.setGlobal(469, _v8);
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
        name: "newspaper",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 94, "nsLeft": 75, "key": 5, "text": "Newspaper................|", "textColor": 37, "shadowColor": 112, "price": 1, "indexNum": 8, "typeOfGoods": 3, "fixedPrice": 1, "visitTime": 1, "celNum": 4},
        methods: {
          // SCI market.sc: newspaper.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = 203;
            acc = _v2;
            const _v3: any = 51;
            acc = _v3;
            const _v4: any = rt.get(this, "text");
            acc = _v4;
            const _v5: any = rt.get(this, "price");
            acc = _v5;
            const _v6: any = await rt.call(203, "Format", [_v1, _v2, _v3, _v4, _v5], this);
            acc = _v6;
            return acc;
          },
          // SCI market.sc: newspaper.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.global(323);
            acc = _v2;
            const _v3: any = 60;
            acc = _v3;
            const _v4: any = rt.op("!=", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = await rt.superSend(this, {"script": 203, "name": "newspaper"}, "doit", []);
              acc = _v5;
              _v1 = _v5;
              let _v6: any = acc;
              const _v7: any = rt.global(416);
              acc = _v7;
              _v6 = _v7;
              if (rt.truth(_v7)) {
                const _v8: any = rt.global(477);
                acc = _v8;
                const _v9: any = await rt.send(_v8, "fade", []);
                acc = _v9;
                _v6 = _v9;
                const _v10: any = 1;
                acc = _v10;
                const _v11: any = rt.global(417);
                acc = _v11;
                const _v12: any = await rt.send(_v11, "doit", [_v10]);
                acc = _v12;
                _v6 = _v12;
                const _v13: any = rt.object(203, "market");
                acc = _v13;
                const _v14: any = 291;
                acc = _v14;
                const _v15: any = await rt.call(0, "proc0_15", [_v13, _v14], this);
                acc = _v15;
                _v6 = _v15;
                const _v16: any = rt.get(this, "client");
                acc = _v16;
                const _v17: any = 215;
                acc = _v17;
                const _v18: any = 0;
                acc = _v18;
                const _v19: any = await rt.call(203, "ScriptID", [_v17, _v18], this);
                acc = _v19;
                const _v20: any = await rt.send(_v19, "init", [_v16]);
                acc = _v20;
                const _v21: any = (temps[0] = _v20);
                acc = _v21;
                _v6 = _v21;
                const _v22: any = 49;
                acc = _v22;
                const _v23: any = rt.global(477);
                acc = _v23;
                const _v24: any = await rt.send(_v23, "play", [_v22]);
                acc = _v24;
                _v6 = _v24;
                const _v25: any = rt.global(502);
                acc = _v25;
                const _v26: any = await rt.send(_v25, "draw", []);
                acc = _v26;
                _v6 = _v26;
                const _v27: any = 0;
                acc = _v27;
                const _v28: any = 0;
                acc = _v28;
                const _v29: any = rt.global(413);
                acc = _v29;
                const _v30: any = await rt.send(_v29, "cel", [_v27]);
                acc = _v30;
                const _v31: any = await rt.send(_v29, "setCycle", [_v28]);
                acc = _v31;
                const _v32: any = await rt.send(_v29, "draw", []);
                acc = _v32;
                _v6 = _v32;
                const _v33: any = (temps[0] ?? 0);
                acc = _v33;
                return _v33;
                _v6 = acc;
              }
              acc = _v6;
              _v1 = _v6;
            } else {
              const _v34: any = 16;
              acc = _v34;
              const _v35: any = rt.global(413);
              acc = _v35;
              const _v36: any = await rt.send(_v35, "init", [_v34]);
              acc = _v36;
              _v1 = _v36;
              const _v37: any = 203;
              acc = _v37;
              const _v38: any = 52;
              acc = _v38;
              const _v39: any = 310;
              acc = _v39;
              const _v40: any = rt.global(413);
              acc = _v40;
              const _v41: any = rt.global(440);
              acc = _v41;
              const _v42: any = rt.global(441);
              acc = _v42;
              const _v43: any = rt.global(442);
              acc = _v43;
              const _v44: any = 70;
              acc = _v44;
              const _v45: any = 70;
              acc = _v45;
              const _v46: any = 25;
              acc = _v46;
              const _v47: any = rt.global(426);
              acc = _v47;
              const _v48: any = await rt.call(255, "Print", [_v37, _v38, _v39, _v40, _v41, _v42, _v43, _v44, _v45, _v46, _v47], this);
              acc = _v48;
              _v1 = _v48;
            }
            acc = _v1;
            const _v49: any = 0;
            acc = _v49;
            return _v49;
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
          // SCI market.sc: workButton.doit
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
            const _v5: any = rt.object(203, "timeClock");
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
                const _v15: any = rt.object(203, "market");
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
                const _v27: any = rt.object(203, "items");
                acc = _v27;
                const _v28: any = await rt.send(_v27, "setCycle", [_v26]);
                acc = _v28;
                _v8 = _v28;
                const _v29: any = rt.object(203, "timeClock");
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
            const _v32: any = await rt.superSend(this, {"script": 203, "name": "workButton"}, "doit", [_v31]);
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
          // SCI market.sc: timeClock.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setCycle", [_v1]);
            acc = _v3;
            const _v4: any = rt.object(203, "items");
            acc = _v4;
            const _v5: any = await rt.send(_v4, "init", []);
            acc = _v5;
            return acc;
          },
          // SCI market.sc: timeClock.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(203, "timeClock");
            acc = _v1;
            const _v2: any = rt.global(502);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "aTimeClock", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 203, "name": "timeClock"}, "setSize", []);
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
        properties: {"nsTop": 0, "view": 353},
        methods: {
        },
      },
      {
        name: "items",
        className: "DCIcon",
        parent: {"script": 967, "name": "DCIcon"},
        isClass: false,
        properties: {"nsTop": 57, "view": 703, "loop": 1, "priority": 14, "cycleSpeed": 100},
        methods: {
          // SCI market.sc: items.init
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
          // SCI market.sc: items.doit
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
          // SCI market.sc: items.setCycle
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
              const _v6: any = await rt.superSend(this, {"script": 203, "name": "items"}, "setCycle", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI market.sc: items.draw
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
              const _v6: any = await rt.superSend(this, {"script": 203, "name": "items"}, "draw", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI market.sc: items.setSize
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
              const _v6: any = await rt.superSend(this, {"script": 203, "name": "items"}, "setSize", [..._v5]);
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
          // SCI market.sc: computerScript.handleEvent
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
                  let _v19: any = 1;
                  if (rt.truth(_v19)) {
                    const _v20: any = 2;
                    acc = _v20;
                    const _v21: any = await rt.call(0, "proc0_6", [_v20], this);
                    acc = _v21;
                    _v19 = _v21;
                  }
                  if (rt.truth(_v19)) {
                    const _v22: any = rt.local(203, 0);
                    acc = _v22;
                    _v19 = _v22;
                  }
                  acc = _v19;
                  _v18 = _v19;
                  if (rt.truth(_v19)) {
                    const _v23: any = 60;
                    acc = _v23;
                    const _v24: any = rt.set(this, "cycles", _v23);
                    acc = _v24;
                    _v18 = _v24;
                    let _v25: any = acc;
                    _branch26: {
                      const _v27: any = await rt.call(0, "proc0_11", [], this);
                      acc = _v27;
                      const _v28: any = 200;
                      acc = _v28;
                      const _v29: any = rt.op("<", ...[_v27, _v28]);
                      acc = _v29;
                      _v25 = _v29;
                      acc = _v25;
                      if (rt.truth(_v25)) {
                        const _v30: any = rt.object(203, "foodFor1Week");
                        acc = _v30;
                        const _v31: any = await rt.send(_v30, "key", []);
                        acc = _v31;
                        const _v32: any = (args[0] ?? 0);
                        acc = _v32;
                        const _v33: any = await rt.send(_v32, "message", [_v31]);
                        acc = _v33;
                        _v25 = _v33;
                        break _branch26;
                      }
                      const _v34: any = await rt.call(0, "proc0_11", [], this);
                      acc = _v34;
                      const _v35: any = 400;
                      acc = _v35;
                      const _v36: any = rt.op("<", ...[_v34, _v35]);
                      acc = _v36;
                      _v25 = _v36;
                      acc = _v25;
                      if (rt.truth(_v25)) {
                        const _v37: any = rt.object(203, "foodFor2Weeks");
                        acc = _v37;
                        const _v38: any = await rt.send(_v37, "key", []);
                        acc = _v38;
                        const _v39: any = (args[0] ?? 0);
                        acc = _v39;
                        const _v40: any = await rt.send(_v39, "message", [_v38]);
                        acc = _v40;
                        _v25 = _v40;
                        break _branch26;
                      }
                      const _v41: any = rt.object(203, "foodFor4Weeks");
                      acc = _v41;
                      const _v42: any = await rt.send(_v41, "key", []);
                      acc = _v42;
                      const _v43: any = (args[0] ?? 0);
                      acc = _v43;
                      const _v44: any = await rt.send(_v43, "message", [_v42]);
                      acc = _v44;
                      _v25 = _v44;
                      break _branch26;
                    }
                    acc = _v25;
                    _v18 = _v25;
                    const _v45: any = 1;
                    acc = _v45;
                    const _v46: any = rt.setGlobal(411, _v45);
                    acc = _v46;
                    _v18 = _v46;
                  }
                  acc = _v18;
                  _v14 = _v18;
                  break _branch16;
                }
                const _v47: any = 3;
                acc = _v47;
                _v14 = rt.op("==", _v15, _v47);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v48: any = acc;
                  let _v49: any = 1;
                  if (rt.truth(_v49)) {
                    const _v50: any = 2;
                    acc = _v50;
                    const _v51: any = await rt.call(0, "proc0_6", [_v50], this);
                    acc = _v51;
                    _v49 = _v51;
                  }
                  if (rt.truth(_v49)) {
                    const _v52: any = rt.local(203, 0);
                    acc = _v52;
                    _v49 = _v52;
                  }
                  acc = _v49;
                  _v48 = _v49;
                  if (rt.truth(_v49)) {
                    const _v53: any = 60;
                    acc = _v53;
                    const _v54: any = rt.set(this, "cycles", _v53);
                    acc = _v54;
                    _v48 = _v54;
                    let _v55: any = acc;
                    const _v56: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v56;
                    const _v57: any = 800;
                    acc = _v57;
                    const _v58: any = rt.op(">", ...[_v56, _v57]);
                    acc = _v58;
                    _v55 = _v58;
                    if (rt.truth(_v58)) {
                      const _v59: any = rt.object(203, "foodFor4Weeks");
                      acc = _v59;
                      const _v60: any = await rt.send(_v59, "key", []);
                      acc = _v60;
                      const _v61: any = (args[0] ?? 0);
                      acc = _v61;
                      const _v62: any = await rt.send(_v61, "message", [_v60]);
                      acc = _v62;
                      _v55 = _v62;
                    }
                    acc = _v55;
                    _v48 = _v55;
                  }
                  acc = _v48;
                  _v14 = _v48;
                  break _branch16;
                }
                const _v63: any = 4;
                acc = _v63;
                _v14 = rt.op("==", _v15, _v63);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v64: any = acc;
                  let _v65: any = 1;
                  if (rt.truth(_v65)) {
                    const _v66: any = 2;
                    acc = _v66;
                    const _v67: any = await rt.call(0, "proc0_6", [_v66], this);
                    acc = _v67;
                    _v65 = _v67;
                  }
                  if (rt.truth(_v65)) {
                    const _v68: any = 22;
                    acc = _v68;
                    const _v69: any = rt.global(302);
                    acc = _v69;
                    const _v70: any = await rt.send(_v69, "durables", []);
                    acc = _v70;
                    const _v71: any = await rt.send(_v70, "objectAtIndexQuan", [_v68]);
                    acc = _v71;
                    _v65 = _v71;
                  }
                  if (rt.truth(_v65)) {
                    const _v72: any = rt.local(203, 0);
                    acc = _v72;
                    _v65 = _v72;
                  }
                  acc = _v65;
                  _v64 = _v65;
                  if (rt.truth(_v65)) {
                    const _v73: any = 60;
                    acc = _v73;
                    const _v74: any = rt.set(this, "cycles", _v73);
                    acc = _v74;
                    _v64 = _v74;
                    let _v75: any = acc;
                    const _v76: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v76;
                    const _v77: any = 800;
                    acc = _v77;
                    const _v78: any = rt.op(">", ...[_v76, _v77]);
                    acc = _v78;
                    _v75 = _v78;
                    if (rt.truth(_v78)) {
                      const _v79: any = rt.object(203, "foodFor4Weeks");
                      acc = _v79;
                      const _v80: any = await rt.send(_v79, "key", []);
                      acc = _v80;
                      const _v81: any = (args[0] ?? 0);
                      acc = _v81;
                      const _v82: any = await rt.send(_v81, "message", [_v80]);
                      acc = _v82;
                      _v75 = _v82;
                    }
                    acc = _v75;
                    _v64 = _v75;
                  }
                  acc = _v64;
                  _v14 = _v64;
                  break _branch16;
                }
                const _v83: any = 5;
                acc = _v83;
                _v14 = rt.op("==", _v15, _v83);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v84: any = acc;
                  let _v85: any = 1;
                  if (rt.truth(_v85)) {
                    const _v86: any = 0;
                    acc = _v86;
                    const _v87: any = 3;
                    acc = _v87;
                    const _v88: any = await rt.call(203, "Random", [_v86, _v87], this);
                    acc = _v88;
                    const _v89: any = rt.op("not", ...[_v88]);
                    acc = _v89;
                    _v85 = _v89;
                  }
                  if (rt.truth(_v85)) {
                    const _v90: any = rt.global(323);
                    acc = _v90;
                    const _v91: any = 60;
                    acc = _v91;
                    const _v92: any = rt.op("<", ...[_v90, _v91]);
                    acc = _v92;
                    _v85 = _v92;
                  }
                  acc = _v85;
                  _v84 = _v85;
                  if (rt.truth(_v85)) {
                    const _v93: any = 60;
                    acc = _v93;
                    const _v94: any = rt.set(this, "cycles", _v93);
                    acc = _v94;
                    _v84 = _v94;
                    const _v95: any = rt.object(203, "newspaper");
                    acc = _v95;
                    const _v96: any = await rt.send(_v95, "key", []);
                    acc = _v96;
                    const _v97: any = (args[0] ?? 0);
                    acc = _v97;
                    const _v98: any = await rt.send(_v97, "message", [_v96]);
                    acc = _v98;
                    _v84 = _v98;
                  }
                  acc = _v84;
                  _v14 = _v84;
                  break _branch16;
                }
                const _v99: any = 6;
                acc = _v99;
                _v14 = rt.op("==", _v15, _v99);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v100: any = acc;
                  let _v101: any = 1;
                  if (rt.truth(_v101)) {
                    let _v102: any = 0;
                    if (!rt.truth(_v102)) {
                      const _v103: any = 0;
                      acc = _v103;
                      const _v104: any = 2;
                      acc = _v104;
                      const _v105: any = await rt.call(203, "Random", [_v103, _v104], this);
                      acc = _v105;
                      const _v106: any = rt.op("not", ...[_v105]);
                      acc = _v106;
                      _v102 = _v106;
                    }
                    if (!rt.truth(_v102)) {
                      const _v107: any = 13;
                      acc = _v107;
                      const _v108: any = await rt.call(0, "proc0_6", [_v107], this);
                      acc = _v108;
                      _v102 = _v108;
                    }
                    acc = _v102;
                    _v101 = _v102;
                  }
                  if (rt.truth(_v101)) {
                    const _v109: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v109;
                    const _v110: any = 100;
                    acc = _v110;
                    const _v111: any = rt.op(">=", ...[_v109, _v110]);
                    acc = _v111;
                    _v101 = _v111;
                  }
                  acc = _v101;
                  _v100 = _v101;
                  if (rt.truth(_v101)) {
                    const _v112: any = 13;
                    acc = _v112;
                    const _v113: any = rt.setGlobal(407, _v112);
                    acc = _v113;
                    _v100 = _v113;
                    let _v114: any = acc;
                    const _v115: any = 1;
                    acc = _v115;
                    const _v116: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v116;
                    const _v117: any = 100;
                    acc = _v117;
                    const _v118: any = rt.op("/", ...[_v116, _v117]);
                    acc = _v118;
                    const _v119: any = await rt.call(203, "Random", [_v115, _v118], this);
                    acc = _v119;
                    const _v120: any = rt.setGlobal(408, _v119);
                    acc = _v120;
                    const _v121: any = 5;
                    acc = _v121;
                    const _v122: any = rt.op(">", ...[_v120, _v121]);
                    acc = _v122;
                    _v114 = _v122;
                    if (rt.truth(_v122)) {
                      const _v123: any = 5;
                      acc = _v123;
                      const _v124: any = rt.setGlobal(408, _v123);
                      acc = _v124;
                      _v114 = _v124;
                    }
                    acc = _v114;
                    _v100 = _v114;
                  }
                  acc = _v100;
                  _v14 = _v100;
                  break _branch16;
                }
                const _v125: any = 7;
                acc = _v125;
                _v14 = rt.op("==", _v15, _v125);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v126: any = acc;
                  let _v127: any = 1;
                  if (rt.truth(_v127)) {
                    const _v128: any = rt.global(407);
                    acc = _v128;
                    const _v129: any = 13;
                    acc = _v129;
                    const _v130: any = rt.op("==", ...[_v128, _v129]);
                    acc = _v130;
                    _v127 = _v130;
                  }
                  if (rt.truth(_v127)) {
                    const _v131: any = rt.global(408);
                    acc = _v131;
                    _v127 = _v131;
                  }
                  acc = _v127;
                  _v126 = _v127;
                  if (rt.truth(_v127)) {
                    const _v132: any = 60;
                    acc = _v132;
                    const _v133: any = rt.set(this, "cycles", _v132);
                    acc = _v133;
                    _v126 = _v133;
                    const _v134: any = rt.object(203, "lotteryTickets");
                    acc = _v134;
                    const _v135: any = await rt.send(_v134, "key", []);
                    acc = _v135;
                    const _v136: any = (args[0] ?? 0);
                    acc = _v136;
                    const _v137: any = await rt.send(_v136, "message", [_v135]);
                    acc = _v137;
                    _v126 = _v137;
                    let _v138: any = acc;
                    const _v139: any = rt.setGlobal(408, rt.op("-", rt.global(408), 1));
                    acc = _v139;
                    _v138 = _v139;
                    if (rt.truth(_v139)) {
                      const _v140: any = rt.set(this, "state", rt.op("-", rt.get(this, "state"), 1));
                      acc = _v140;
                      _v138 = _v140;
                    }
                    acc = _v138;
                    _v126 = _v138;
                  }
                  acc = _v126;
                  _v14 = _v126;
                  break _branch16;
                }
                const _v141: any = (args[0] ?? 0);
                acc = _v141;
                const _v142: any = 1;
                acc = _v142;
                const _v143: any = await rt.superSend(this, {"script": 203, "name": "computerScript"}, "handleEvent", [_v141, _v142]);
                acc = _v143;
                _v14 = _v143;
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
      // SCI market.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.ref("global", 0, 100);
        acc = _v1;
        const _v2: any = 203;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(203, "Format", [_v1, _v2, _v3], this);
        acc = _v4;
        const _v5: any = rt.ref("global", 0, 100);
        acc = _v5;
        const _v6: any = 203;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = await rt.call(203, "Format", [_v5, _v6, _v7], this);
        acc = _v8;
        const _v9: any = rt.ref("global", 0, 100);
        acc = _v9;
        const _v10: any = 203;
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = await rt.call(203, "Format", [_v9, _v10, _v11], this);
        acc = _v12;
        const _v13: any = rt.ref("global", 0, 100);
        acc = _v13;
        const _v14: any = 203;
        acc = _v14;
        const _v15: any = 3;
        acc = _v15;
        const _v16: any = await rt.call(203, "Format", [_v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = rt.ref("global", 0, 100);
        acc = _v17;
        const _v18: any = 203;
        acc = _v18;
        const _v19: any = 4;
        acc = _v19;
        const _v20: any = await rt.call(203, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = rt.ref("global", 0, 100);
        acc = _v21;
        const _v22: any = 203;
        acc = _v22;
        const _v23: any = 5;
        acc = _v23;
        const _v24: any = await rt.call(203, "Format", [_v21, _v22, _v23], this);
        acc = _v24;
        const _v25: any = rt.ref("global", 0, 100);
        acc = _v25;
        const _v26: any = 203;
        acc = _v26;
        const _v27: any = 6;
        acc = _v27;
        const _v28: any = await rt.call(203, "Format", [_v25, _v26, _v27], this);
        acc = _v28;
        const _v29: any = rt.ref("global", 0, 100);
        acc = _v29;
        const _v30: any = 203;
        acc = _v30;
        const _v31: any = 7;
        acc = _v31;
        const _v32: any = await rt.call(203, "Format", [_v29, _v30, _v31], this);
        acc = _v32;
        const _v33: any = rt.ref("global", 0, 100);
        acc = _v33;
        const _v34: any = 203;
        acc = _v34;
        const _v35: any = 8;
        acc = _v35;
        const _v36: any = await rt.call(203, "Format", [_v33, _v34, _v35], this);
        acc = _v36;
        const _v37: any = rt.ref("global", 0, 100);
        acc = _v37;
        const _v38: any = 203;
        acc = _v38;
        const _v39: any = 9;
        acc = _v39;
        const _v40: any = await rt.call(203, "Format", [_v37, _v38, _v39], this);
        acc = _v40;
        const _v41: any = rt.ref("global", 0, 100);
        acc = _v41;
        const _v42: any = 203;
        acc = _v42;
        const _v43: any = 10;
        acc = _v43;
        const _v44: any = await rt.call(203, "Format", [_v41, _v42, _v43], this);
        acc = _v44;
        const _v45: any = rt.ref("global", 0, 100);
        acc = _v45;
        const _v46: any = 203;
        acc = _v46;
        const _v47: any = 11;
        acc = _v47;
        const _v48: any = await rt.call(203, "Format", [_v45, _v46, _v47], this);
        acc = _v48;
        const _v49: any = rt.ref("global", 0, 100);
        acc = _v49;
        const _v50: any = 203;
        acc = _v50;
        const _v51: any = 12;
        acc = _v51;
        const _v52: any = await rt.call(203, "Format", [_v49, _v50, _v51], this);
        acc = _v52;
        const _v53: any = rt.ref("global", 0, 100);
        acc = _v53;
        const _v54: any = 203;
        acc = _v54;
        const _v55: any = 13;
        acc = _v55;
        const _v56: any = await rt.call(203, "Format", [_v53, _v54, _v55], this);
        acc = _v56;
        const _v57: any = rt.ref("global", 0, 100);
        acc = _v57;
        const _v58: any = 203;
        acc = _v58;
        const _v59: any = 14;
        acc = _v59;
        const _v60: any = await rt.call(203, "Format", [_v57, _v58, _v59], this);
        acc = _v60;
        const _v61: any = rt.ref("global", 0, 100);
        acc = _v61;
        const _v62: any = 203;
        acc = _v62;
        const _v63: any = 15;
        acc = _v63;
        const _v64: any = await rt.call(203, "Format", [_v61, _v62, _v63], this);
        acc = _v64;
        const _v65: any = rt.ref("global", 0, 100);
        acc = _v65;
        const _v66: any = 203;
        acc = _v66;
        const _v67: any = 16;
        acc = _v67;
        const _v68: any = await rt.call(203, "Format", [_v65, _v66, _v67], this);
        acc = _v68;
        const _v69: any = rt.ref("global", 0, 100);
        acc = _v69;
        const _v70: any = 203;
        acc = _v70;
        const _v71: any = 17;
        acc = _v71;
        const _v72: any = await rt.call(203, "Format", [_v69, _v70, _v71], this);
        acc = _v72;
        const _v73: any = rt.ref("global", 0, 100);
        acc = _v73;
        const _v74: any = 203;
        acc = _v74;
        const _v75: any = 18;
        acc = _v75;
        const _v76: any = await rt.call(203, "Format", [_v73, _v74, _v75], this);
        acc = _v76;
        const _v77: any = rt.ref("global", 0, 100);
        acc = _v77;
        const _v78: any = 203;
        acc = _v78;
        const _v79: any = 19;
        acc = _v79;
        const _v80: any = await rt.call(203, "Format", [_v77, _v78, _v79], this);
        acc = _v80;
        const _v81: any = rt.ref("global", 0, 100);
        acc = _v81;
        const _v82: any = 203;
        acc = _v82;
        const _v83: any = 20;
        acc = _v83;
        const _v84: any = await rt.call(203, "Format", [_v81, _v82, _v83], this);
        acc = _v84;
        const _v85: any = rt.ref("global", 0, 100);
        acc = _v85;
        const _v86: any = 203;
        acc = _v86;
        const _v87: any = 21;
        acc = _v87;
        const _v88: any = await rt.call(203, "Format", [_v85, _v86, _v87], this);
        acc = _v88;
        const _v89: any = rt.ref("global", 0, 100);
        acc = _v89;
        const _v90: any = 203;
        acc = _v90;
        const _v91: any = 22;
        acc = _v91;
        const _v92: any = await rt.call(203, "Format", [_v89, _v90, _v91], this);
        acc = _v92;
        const _v93: any = rt.ref("global", 0, 100);
        acc = _v93;
        const _v94: any = 203;
        acc = _v94;
        const _v95: any = 23;
        acc = _v95;
        const _v96: any = await rt.call(203, "Format", [_v93, _v94, _v95], this);
        acc = _v96;
        const _v97: any = rt.ref("global", 0, 100);
        acc = _v97;
        const _v98: any = 203;
        acc = _v98;
        const _v99: any = 24;
        acc = _v99;
        const _v100: any = await rt.call(203, "Format", [_v97, _v98, _v99], this);
        acc = _v100;
        const _v101: any = rt.ref("global", 0, 100);
        acc = _v101;
        const _v102: any = 203;
        acc = _v102;
        const _v103: any = 25;
        acc = _v103;
        const _v104: any = await rt.call(203, "Format", [_v101, _v102, _v103], this);
        acc = _v104;
        const _v105: any = rt.ref("global", 0, 100);
        acc = _v105;
        const _v106: any = 203;
        acc = _v106;
        const _v107: any = 26;
        acc = _v107;
        const _v108: any = await rt.call(203, "Format", [_v105, _v106, _v107], this);
        acc = _v108;
        const _v109: any = rt.ref("global", 0, 100);
        acc = _v109;
        const _v110: any = 203;
        acc = _v110;
        const _v111: any = 27;
        acc = _v111;
        const _v112: any = await rt.call(203, "Format", [_v109, _v110, _v111], this);
        acc = _v112;
        const _v113: any = rt.ref("global", 0, 100);
        acc = _v113;
        const _v114: any = 203;
        acc = _v114;
        const _v115: any = 28;
        acc = _v115;
        const _v116: any = await rt.call(203, "Format", [_v113, _v114, _v115], this);
        acc = _v116;
        const _v117: any = rt.ref("global", 0, 100);
        acc = _v117;
        const _v118: any = 203;
        acc = _v118;
        const _v119: any = 29;
        acc = _v119;
        const _v120: any = await rt.call(203, "Format", [_v117, _v118, _v119], this);
        acc = _v120;
        const _v121: any = rt.ref("global", 0, 100);
        acc = _v121;
        const _v122: any = 203;
        acc = _v122;
        const _v123: any = 30;
        acc = _v123;
        const _v124: any = await rt.call(203, "Format", [_v121, _v122, _v123], this);
        acc = _v124;
        const _v125: any = rt.ref("global", 0, 100);
        acc = _v125;
        const _v126: any = 203;
        acc = _v126;
        const _v127: any = 31;
        acc = _v127;
        const _v128: any = await rt.call(203, "Format", [_v125, _v126, _v127], this);
        acc = _v128;
        const _v129: any = rt.ref("global", 0, 100);
        acc = _v129;
        const _v130: any = 203;
        acc = _v130;
        const _v131: any = 32;
        acc = _v131;
        const _v132: any = await rt.call(203, "Format", [_v129, _v130, _v131], this);
        acc = _v132;
        const _v133: any = rt.ref("global", 0, 100);
        acc = _v133;
        const _v134: any = 203;
        acc = _v134;
        const _v135: any = 33;
        acc = _v135;
        const _v136: any = await rt.call(203, "Format", [_v133, _v134, _v135], this);
        acc = _v136;
        const _v137: any = rt.ref("global", 0, 100);
        acc = _v137;
        const _v138: any = 203;
        acc = _v138;
        const _v139: any = 34;
        acc = _v139;
        const _v140: any = await rt.call(203, "Format", [_v137, _v138, _v139], this);
        acc = _v140;
        const _v141: any = rt.ref("global", 0, 100);
        acc = _v141;
        const _v142: any = 203;
        acc = _v142;
        const _v143: any = 35;
        acc = _v143;
        const _v144: any = await rt.call(203, "Format", [_v141, _v142, _v143], this);
        acc = _v144;
        const _v145: any = rt.ref("global", 0, 100);
        acc = _v145;
        const _v146: any = 203;
        acc = _v146;
        const _v147: any = 36;
        acc = _v147;
        const _v148: any = await rt.call(203, "Format", [_v145, _v146, _v147], this);
        acc = _v148;
        const _v149: any = rt.ref("global", 0, 100);
        acc = _v149;
        const _v150: any = 203;
        acc = _v150;
        const _v151: any = 37;
        acc = _v151;
        const _v152: any = await rt.call(203, "Format", [_v149, _v150, _v151], this);
        acc = _v152;
        const _v153: any = rt.ref("global", 0, 100);
        acc = _v153;
        const _v154: any = 203;
        acc = _v154;
        const _v155: any = 38;
        acc = _v155;
        const _v156: any = await rt.call(203, "Format", [_v153, _v154, _v155], this);
        acc = _v156;
        const _v157: any = rt.ref("global", 0, 100);
        acc = _v157;
        const _v158: any = 203;
        acc = _v158;
        const _v159: any = 39;
        acc = _v159;
        const _v160: any = await rt.call(203, "Format", [_v157, _v158, _v159], this);
        acc = _v160;
        const _v161: any = rt.ref("global", 0, 100);
        acc = _v161;
        const _v162: any = 203;
        acc = _v162;
        const _v163: any = 40;
        acc = _v163;
        const _v164: any = await rt.call(203, "Format", [_v161, _v162, _v163], this);
        acc = _v164;
        const _v165: any = rt.ref("global", 0, 100);
        acc = _v165;
        const _v166: any = 203;
        acc = _v166;
        const _v167: any = 41;
        acc = _v167;
        const _v168: any = await rt.call(203, "Format", [_v165, _v166, _v167], this);
        acc = _v168;
        const _v169: any = rt.ref("global", 0, 100);
        acc = _v169;
        const _v170: any = 203;
        acc = _v170;
        const _v171: any = 42;
        acc = _v171;
        const _v172: any = await rt.call(203, "Format", [_v169, _v170, _v171], this);
        acc = _v172;
        const _v173: any = rt.ref("global", 0, 100);
        acc = _v173;
        const _v174: any = 203;
        acc = _v174;
        const _v175: any = 43;
        acc = _v175;
        const _v176: any = await rt.call(203, "Format", [_v173, _v174, _v175], this);
        acc = _v176;
        const _v177: any = rt.ref("global", 0, 100);
        acc = _v177;
        const _v178: any = 203;
        acc = _v178;
        const _v179: any = 44;
        acc = _v179;
        const _v180: any = await rt.call(203, "Format", [_v177, _v178, _v179], this);
        acc = _v180;
        const _v181: any = rt.ref("global", 0, 100);
        acc = _v181;
        const _v182: any = 203;
        acc = _v182;
        const _v183: any = 45;
        acc = _v183;
        const _v184: any = await rt.call(203, "Format", [_v181, _v182, _v183], this);
        acc = _v184;
        const _v185: any = rt.ref("global", 0, 100);
        acc = _v185;
        const _v186: any = 203;
        acc = _v186;
        const _v187: any = 46;
        acc = _v187;
        const _v188: any = await rt.call(203, "Format", [_v185, _v186, _v187], this);
        acc = _v188;
        return acc;
      },
    },
    exports: {"0": "market"},
  });
}
