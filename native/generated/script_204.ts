// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/bank.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: a75a266bbf95fd8dfd434f2b2344889eb591afff5d7a1551b2407788cfe1fcdb
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(204, {
    name: "bank",
    uses: [0, 104, 108, 110, 255, 891, 967, 992, 996, 999],
    locals: [0, 0, 0],
    objects: [
      {
        name: "notEnoughCash",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI bank.sc: notEnoughCash.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 16;
            acc = _v1;
            const _v2: any = rt.global(413);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "init", [_v1]);
            acc = _v3;
            const _v4: any = 204;
            acc = _v4;
            const _v5: any = 10;
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
        name: "bank",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI bank.sc: bank.init
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
              const _v5: any = 204;
              acc = _v5;
              const _v6: any = await rt.call(204, "Load", [_v4, _v5], this);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 2;
              acc = _v7;
              const _v8: any = await rt.call(0, "proc0_17", [_v7], this);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = rt.object(204, "dialogKeyMouse");
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
              const _v15: any = 7;
              acc = _v15;
              const _v16: any = rt.setGlobal(440, _v15);
              acc = _v16;
              _v1 = _v16;
              const _v17: any = 113;
              acc = _v17;
              const _v18: any = rt.setGlobal(441, _v17);
              acc = _v18;
              _v1 = _v18;
              const _v19: any = 82;
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
                const _v26: any = rt.object(204, "theTalker");
                acc = _v26;
                const _v27: any = await rt.send(_v26, "view", []);
                acc = _v27;
                const _v28: any = await rt.call(204, "Load", [_v25, _v27], this);
                acc = _v28;
                _v21 = _v28;
              }
              acc = _v21;
              _v1 = _v21;
              const _v29: any = rt.object(204, "notEnoughCash");
              acc = _v29;
              const _v30: any = rt.setGlobal(424, _v29);
              acc = _v30;
              _v1 = _v30;
              const _v31: any = (args[0] ?? 0);
              acc = _v31;
              const _v32: any = rt.set(this, "client", _v31);
              acc = _v32;
              _v1 = _v32;
              const _v33: any = 2;
              acc = _v33;
              const _v34: any = rt.global(417);
              acc = _v34;
              const _v35: any = await rt.send(_v34, "doit", [_v33]);
              acc = _v35;
              _v1 = _v35;
              const _v36: any = 4;
              acc = _v36;
              const _v37: any = rt.setGlobal(400, _v36);
              acc = _v37;
              _v1 = _v37;
              let _v38: any = acc;
              const _v39: any = rt.global(302);
              acc = _v39;
              const _v40: any = await rt.send(_v39, "playing", []);
              acc = _v40;
              const _v41: any = 29;
              acc = _v41;
              const _v42: any = rt.op("==", ...[_v40, _v41]);
              acc = _v42;
              _v38 = _v42;
              if (rt.truth(_v42)) {
                const _v43: any = rt.object(204, "computerScript");
                acc = _v43;
                const _v44: any = this;
                acc = _v44;
                const _v45: any = await rt.send(_v44, "setScript", [_v43]);
                acc = _v45;
                _v38 = _v45;
                const _v46: any = rt.object(204, "computerScript");
                acc = _v46;
                const _v47: any = await rt.send(_v46, "cue", []);
                acc = _v47;
                _v38 = _v47;
              }
              acc = _v38;
              _v1 = _v38;
              const _v48: any = rt.global(59);
              acc = _v48;
              const _v49: any = rt.object(204, "background");
              acc = _v49;
              const _v50: any = rt.object(204, "theTalker");
              acc = _v50;
              const _v51: any = rt.object(204, "piggyBank");
              acc = _v51;
              const _v52: any = rt.object(204, "deposit");
              acc = _v52;
              const _v53: any = rt.object(204, "withdraw");
              acc = _v53;
              const _v54: any = rt.object(204, "loanPayment");
              acc = _v54;
              const _v55: any = rt.object(204, "applyForLoan");
              acc = _v55;
              const _v56: any = rt.object(204, "seeBroker");
              acc = _v56;
              const _v57: any = this;
              acc = _v57;
              const _v58: any = await rt.send(_v57, "window", [_v48]);
              acc = _v58;
              const _v59: any = await rt.send(_v57, "add", [_v49, _v50, _v51, _v52, _v53, _v54, _v55, _v56]);
              acc = _v59;
              _v1 = _v59;
              const _v60: any = rt.object(204, "theTalker");
              acc = _v60;
              const _v61: any = rt.setGlobal(413, _v60);
              acc = _v61;
              _v1 = _v61;
              let _v62: any = acc;
              const _v63: any = rt.global(302);
              acc = _v63;
              const _v64: any = await rt.send(_v63, "loanBal", []);
              acc = _v64;
              const _v65: any = 50;
              acc = _v65;
              const _v66: any = rt.op("<", ...[_v64, _v65]);
              acc = _v66;
              _v62 = _v66;
              if (rt.truth(_v66)) {
                const _v67: any = rt.global(302);
                acc = _v67;
                const _v68: any = await rt.send(_v67, "loanBal", []);
                acc = _v68;
                const _v69: any = rt.object(204, "loanPayment");
                acc = _v69;
                const _v70: any = await rt.send(_v69, "price", [_v68]);
                acc = _v70;
                _v62 = _v70;
              }
              acc = _v62;
              _v1 = _v62;
              let _v71: any = acc;
              const _v72: any = rt.global(302);
              acc = _v72;
              const _v73: any = await rt.send(_v72, "worksAt", []);
              acc = _v73;
              const _v74: any = 4;
              acc = _v74;
              const _v75: any = rt.op("==", ...[_v73, _v74]);
              acc = _v75;
              _v71 = _v75;
              if (rt.truth(_v75)) {
                const _v76: any = rt.object(204, "workButton");
                acc = _v76;
                const _v77: any = this;
                acc = _v77;
                const _v78: any = await rt.send(_v77, "add", [_v76]);
                acc = _v78;
                _v71 = _v78;
              }
              acc = _v71;
              _v1 = _v71;
              const _v79: any = rt.object(204, "exitButton");
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
              const _v97: any = 4;
              acc = _v97;
              const _v98: any = rt.op("==", ...[_v96, _v97]);
              acc = _v98;
              _v94 = _v98;
              if (rt.truth(_v98)) {
                const _v99: any = rt.object(204, "timeClock");
                acc = _v99;
                const _v100: any = this;
                acc = _v100;
                const _v101: any = await rt.send(_v100, "add", [_v99]);
                acc = _v101;
                _v94 = _v101;
                const _v102: any = rt.object(204, "timeClock");
                acc = _v102;
                const _v103: any = await rt.send(_v102, "setSize", []);
                acc = _v103;
                _v94 = _v103;
              }
              acc = _v94;
              _v1 = _v94;
              const _v104: any = 47;
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
              const _v109: any = rt.object(204, "deposit");
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
                const _v129: any = 204;
                acc = _v129;
                const _v130: any = 0;
                acc = _v130;
                const _v131: any = 9;
                acc = _v131;
                const _v132: any = await rt.call(204, "Random", [_v130, _v131], this);
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
                const _v139: any = 130;
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
                const _v146: any = 30;
                acc = _v146;
                const _v147: any = await rt.call(204, "Random", [_v145, _v146], this);
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
                const _v152: any = 2;
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
            const _v166: any = await rt.call(204, "IsObject", [_v165], this);
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
            const _v184: any = rt.object(204, "timeClock");
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
            const _v195: any = await rt.send(_v193, "dispose", []);
            acc = _v195;
            const _v196: any = rt.get(this, "prevDialog");
            acc = _v196;
            const _v197: any = rt.setGlobal(502, _v196);
            acc = _v197;
            const _v198: any = this;
            acc = _v198;
            const _v199: any = 291;
            acc = _v199;
            const _v200: any = await rt.call(0, "proc0_15", [_v198, _v199], this);
            acc = _v200;
            const _v201: any = this;
            acc = _v201;
            const _v202: any = await rt.send(_v201, "dispose", []);
            acc = _v202;
            const _v203: any = rt.object(204, "workButton");
            acc = _v203;
            const _v204: any = await rt.send(_v203, "dispose", []);
            acc = _v204;
            const _v205: any = 11;
            acc = _v205;
            const _v206: any = rt.get(this, "nsTop");
            acc = _v206;
            const _v207: any = 1;
            acc = _v207;
            const _v208: any = rt.op("+", ...[_v206, _v207]);
            acc = _v208;
            const _v209: any = rt.get(this, "nsLeft");
            acc = _v209;
            const _v210: any = rt.get(this, "nsBottom");
            acc = _v210;
            const _v211: any = 1;
            acc = _v211;
            const _v212: any = rt.op("-", ...[_v210, _v211]);
            acc = _v212;
            const _v213: any = rt.get(this, "nsRight");
            acc = _v213;
            const _v214: any = 3;
            acc = _v214;
            const _v215: any = rt.op("-", ...[_v213, _v214]);
            acc = _v215;
            const _v216: any = 2;
            acc = _v216;
            const _v217: any = 0;
            acc = _v217;
            const _v218: any = 0;
            acc = _v218;
            const _v219: any = await rt.call(204, "Graph", [_v205, _v208, _v209, _v212, _v215, _v216, _v217, _v218], this);
            acc = _v219;
            const _v220: any = 0;
            acc = _v220;
            const _v221: any = await rt.call(0, "proc0_17", [_v220], this);
            acc = _v221;
            const _v222: any = (temps[0] ?? 0);
            acc = _v222;
            const _acc223: any = acc;
            const _v224: any = 204;
            acc = _v224;
            const _args225: any[] = [_v224];
            await rt.call(204, "DisposeScript", _args225, this);
            const _v226: any = _args225.length === 2 ? _args225[1] : _acc223;
            acc = _v226;
            return acc;
          },
          // SCI bank.sc: bank.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 204, "name": "bank"}, "draw", []);
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
        properties: {"view": 804, "priority": 13},
        methods: {
        },
      },
      {
        name: "deposit",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 35, "nsLeft": 97, "key": 1, "text": "Deposit  ", "price": 100, "typeOfGoods": 4, "fixedPrice": 1},
        methods: {
          // SCI bank.sc: deposit.doit
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
            let _v4: any = acc;
            const _v5: any = rt.global(502);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "aTimeClock", []);
            acc = _v6;
            _v4 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = 0;
              acc = _v8;
              const _v9: any = rt.global(502);
              acc = _v9;
              const _v10: any = await rt.send(_v9, "aTimeClock", []);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "cel", [_v7]);
              acc = _v11;
              const _v12: any = await rt.send(_v10, "setCycle", [_v8]);
              acc = _v12;
              _v4 = _v12;
            }
            acc = _v4;
            let _v13: any = acc;
            const _v14: any = await rt.call(0, "proc0_11", [], this);
            acc = _v14;
            const _v15: any = (temps[0] = _v14);
            acc = _v15;
            const _v16: any = 100;
            acc = _v16;
            const _v17: any = rt.op(">", ...[_v15, _v16]);
            acc = _v17;
            _v13 = _v17;
            if (rt.truth(_v17)) {
              const _v18: any = 100;
              acc = _v18;
              const _v19: any = (temps[0] = _v18);
              acc = _v19;
              _v13 = _v19;
            }
            acc = _v13;
            let _v20: any = acc;
            const _v21: any = (temps[0] ?? 0);
            acc = _v21;
            _v20 = _v21;
            if (rt.truth(_v21)) {
              let _v22: any = acc;
              const _v23: any = rt.global(302);
              acc = _v23;
              const _v24: any = await rt.send(_v23, "playing", []);
              acc = _v24;
              const _v25: any = 29;
              acc = _v25;
              const _v26: any = rt.op("==", ...[_v24, _v25]);
              acc = _v26;
              _v22 = _v26;
              if (rt.truth(_v26)) {
                const _v27: any = 0;
                acc = _v27;
                const _v28: any = rt.global(413);
                acc = _v28;
                const _v29: any = await rt.send(_v28, "setCycle", [_v27]);
                acc = _v29;
                _v22 = _v29;
              } else {
                const _v30: any = 2;
                acc = _v30;
                const _v31: any = rt.global(413);
                acc = _v31;
                const _v32: any = await rt.send(_v31, "init", [_v30]);
                acc = _v32;
                _v22 = _v32;
              }
              acc = _v22;
              _v20 = _v22;
              const _v33: any = 0;
              acc = _v33;
              const _v34: any = (temps[0] ?? 0);
              acc = _v34;
              const _v35: any = rt.op("-", ...[_v33, _v34]);
              acc = _v35;
              const _v36: any = await rt.call(0, "proc0_10", [_v35], this);
              acc = _v36;
              _v20 = _v36;
              const _v37: any = 0;
              acc = _v37;
              const _v38: any = rt.object(992, "End");
              acc = _v38;
              const _v39: any = rt.object(204, "piggyBank");
              acc = _v39;
              const _v40: any = await rt.send(_v39, "cel", [_v37]);
              acc = _v40;
              const _v41: any = await rt.send(_v39, "doit", [_v38]);
              acc = _v41;
              _v20 = _v41;
              const _v42: any = rt.global(305);
              acc = _v42;
              const _v43: any = await rt.send(_v42, "doit", []);
              acc = _v43;
              _v20 = _v43;
              let _v44: any = acc;
              let _v45: any = 1;
              if (rt.truth(_v45)) {
                const _v46: any = rt.global(427);
                acc = _v46;
                _v45 = _v46;
              }
              if (rt.truth(_v45)) {
                const _v47: any = rt.local(204, 1);
                acc = _v47;
                const _v48: any = rt.op("not", ...[_v47]);
                acc = _v48;
                _v45 = _v48;
              }
              acc = _v45;
              _v44 = _v45;
              if (rt.truth(_v45)) {
                const _v49: any = 1;
                acc = _v49;
                const _v50: any = rt.setLocal(204, 1, _v49);
                acc = _v50;
                _v44 = _v50;
                let _v51: any = acc;
                const _v52: any = rt.global(427);
                acc = _v52;
                _v51 = _v52;
                if (rt.truth(_v52)) {
                  const _v53: any = 16;
                  acc = _v53;
                  const _v54: any = rt.global(413);
                  acc = _v54;
                  const _v55: any = await rt.send(_v54, "init", [_v53]);
                  acc = _v55;
                  _v51 = _v55;
                  const _v56: any = 204;
                  acc = _v56;
                  const _v57: any = 11;
                  acc = _v57;
                  const _v58: any = 310;
                  acc = _v58;
                  const _v59: any = rt.global(413);
                  acc = _v59;
                  const _v60: any = rt.global(440);
                  acc = _v60;
                  const _v61: any = rt.global(441);
                  acc = _v61;
                  const _v62: any = rt.global(442);
                  acc = _v62;
                  const _v63: any = 70;
                  acc = _v63;
                  const _v64: any = 100;
                  acc = _v64;
                  const _v65: any = 25;
                  acc = _v65;
                  const _v66: any = rt.global(426);
                  acc = _v66;
                  const _v67: any = await rt.call(255, "Print", [_v56, _v57, _v58, _v59, _v60, _v61, _v62, _v63, _v64, _v65, _v66], this);
                  acc = _v67;
                  _v51 = _v67;
                }
                acc = _v51;
                _v44 = _v51;
              }
              acc = _v44;
              _v20 = _v44;
            } else {
              const _v68: any = 16;
              acc = _v68;
              const _v69: any = rt.global(413);
              acc = _v69;
              const _v70: any = await rt.send(_v69, "init", [_v68]);
              acc = _v70;
              _v20 = _v70;
              const _v71: any = 204;
              acc = _v71;
              const _v72: any = 12;
              acc = _v72;
              const _v73: any = 310;
              acc = _v73;
              const _v74: any = rt.global(413);
              acc = _v74;
              const _v75: any = rt.global(440);
              acc = _v75;
              const _v76: any = rt.global(441);
              acc = _v76;
              const _v77: any = rt.global(442);
              acc = _v77;
              const _v78: any = 70;
              acc = _v78;
              const _v79: any = 100;
              acc = _v79;
              const _v80: any = 25;
              acc = _v80;
              const _v81: any = rt.global(426);
              acc = _v81;
              const _v82: any = await rt.call(255, "Print", [_v71, _v72, _v73, _v74, _v75, _v76, _v77, _v78, _v79, _v80, _v81], this);
              acc = _v82;
              _v20 = _v82;
            }
            acc = _v20;
            const _v83: any = (temps[0] ?? 0);
            acc = _v83;
            const _v84: any = await rt.call(204, "localproc_1", [_v83], this);
            acc = _v84;
            const _v85: any = rt.get(this, "value");
            acc = _v85;
            return _v85;
            return acc;
          },
          // SCI bank.sc: deposit.hilite
          "hilite": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(535);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.get(this, "flashColor");
              acc = _v5;
              _v3 = _v5;
            } else {
              const _v6: any = 15;
              acc = _v6;
              _v3 = _v6;
            }
            acc = _v3;
            const _v7: any = this;
            acc = _v7;
            const _v8: any = await rt.send(_v7, "hiliteControl", [_v3]);
            acc = _v8;
            const _v9: any = 5;
            acc = _v9;
            const _v10: any = await rt.call(204, "Wait", [_v9], this);
            acc = _v10;
            let _v11: any = acc;
            const _v12: any = rt.global(535);
            acc = _v12;
            _v11 = _v12;
            if (rt.truth(_v12)) {
              const _v13: any = rt.get(this, "textColor");
              acc = _v13;
              _v11 = _v13;
            } else {
              const _v14: any = 0;
              acc = _v14;
              _v11 = _v14;
            }
            acc = _v11;
            const _v15: any = this;
            acc = _v15;
            const _v16: any = await rt.send(_v15, "hiliteControl", [_v11]);
            acc = _v16;
            const _v17: any = this;
            acc = _v17;
            const _v18: any = await rt.send(_v17, "resetPort", []);
            acc = _v18;
            return acc;
          },
        },
      },
      {
        name: "withdraw",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 50, "nsLeft": 92, "key": 2, "text": "Withdraw  ", "price": 100, "typeOfGoods": 4, "theSign": 1, "fixedPrice": 1},
        methods: {
          // SCI bank.sc: withdraw.doit
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
            let _v4: any = acc;
            const _v5: any = rt.global(502);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "aTimeClock", []);
            acc = _v6;
            _v4 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = 0;
              acc = _v8;
              const _v9: any = rt.global(502);
              acc = _v9;
              const _v10: any = await rt.send(_v9, "aTimeClock", []);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "cel", [_v7]);
              acc = _v11;
              const _v12: any = await rt.send(_v10, "setCycle", [_v8]);
              acc = _v12;
              _v4 = _v12;
            }
            acc = _v4;
            let _v13: any = acc;
            let _v14: any = acc;
            const _v15: any = rt.global(302);
            acc = _v15;
            const _v16: any = await rt.send(_v15, "bankBalHi", []);
            acc = _v16;
            _v14 = _v16;
            if (rt.truth(_v16)) {
              const _v17: any = 200;
              acc = _v17;
              _v14 = _v17;
            } else {
              const _v18: any = rt.global(302);
              acc = _v18;
              const _v19: any = await rt.send(_v18, "bankBal", []);
              acc = _v19;
              _v14 = _v19;
            }
            acc = _v14;
            const _v20: any = (temps[0] = _v14);
            acc = _v20;
            const _v21: any = 100;
            acc = _v21;
            const _v22: any = rt.op(">", ...[_v20, _v21]);
            acc = _v22;
            _v13 = _v22;
            if (rt.truth(_v22)) {
              const _v23: any = 100;
              acc = _v23;
              const _v24: any = (temps[0] = _v23);
              acc = _v24;
              _v13 = _v24;
            }
            acc = _v13;
            let _v25: any = acc;
            const _v26: any = (temps[0] ?? 0);
            acc = _v26;
            _v25 = _v26;
            if (rt.truth(_v26)) {
              let _v27: any = acc;
              const _v28: any = rt.global(302);
              acc = _v28;
              const _v29: any = await rt.send(_v28, "playing", []);
              acc = _v29;
              const _v30: any = 29;
              acc = _v30;
              const _v31: any = rt.op("==", ...[_v29, _v30]);
              acc = _v31;
              _v27 = _v31;
              if (rt.truth(_v31)) {
                const _v32: any = 0;
                acc = _v32;
                const _v33: any = rt.global(413);
                acc = _v33;
                const _v34: any = await rt.send(_v33, "setCycle", [_v32]);
                acc = _v34;
                _v27 = _v34;
              } else {
                const _v35: any = 2;
                acc = _v35;
                const _v36: any = rt.global(413);
                acc = _v36;
                const _v37: any = await rt.send(_v36, "init", [_v35]);
                acc = _v37;
                _v27 = _v37;
              }
              acc = _v27;
              _v25 = _v27;
              const _v38: any = (temps[0] ?? 0);
              acc = _v38;
              const _v39: any = await rt.call(0, "proc0_10", [_v38], this);
              acc = _v39;
              _v25 = _v39;
              const _v40: any = 4;
              acc = _v40;
              const _v41: any = rt.object(992, "Beg");
              acc = _v41;
              const _v42: any = rt.object(204, "piggyBank");
              acc = _v42;
              const _v43: any = await rt.send(_v42, "cel", [_v40]);
              acc = _v43;
              const _v44: any = await rt.send(_v42, "doit", [_v41]);
              acc = _v44;
              _v25 = _v44;
              const _v45: any = rt.global(305);
              acc = _v45;
              const _v46: any = await rt.send(_v45, "doit", []);
              acc = _v46;
              _v25 = _v46;
              let _v47: any = acc;
              let _v48: any = 1;
              if (rt.truth(_v48)) {
                const _v49: any = rt.global(427);
                acc = _v49;
                _v48 = _v49;
              }
              if (rt.truth(_v48)) {
                const _v50: any = rt.local(204, 2);
                acc = _v50;
                const _v51: any = rt.op("not", ...[_v50]);
                acc = _v51;
                _v48 = _v51;
              }
              acc = _v48;
              _v47 = _v48;
              if (rt.truth(_v48)) {
                const _v52: any = 1;
                acc = _v52;
                const _v53: any = rt.setLocal(204, 2, _v52);
                acc = _v53;
                _v47 = _v53;
                const _v54: any = 16;
                acc = _v54;
                const _v55: any = rt.global(413);
                acc = _v55;
                const _v56: any = await rt.send(_v55, "init", [_v54]);
                acc = _v56;
                _v47 = _v56;
                const _v57: any = 204;
                acc = _v57;
                const _v58: any = 13;
                acc = _v58;
                const _v59: any = 310;
                acc = _v59;
                const _v60: any = rt.global(413);
                acc = _v60;
                const _v61: any = rt.global(440);
                acc = _v61;
                const _v62: any = rt.global(441);
                acc = _v62;
                const _v63: any = rt.global(442);
                acc = _v63;
                const _v64: any = 70;
                acc = _v64;
                const _v65: any = 100;
                acc = _v65;
                const _v66: any = 25;
                acc = _v66;
                const _v67: any = rt.global(426);
                acc = _v67;
                const _v68: any = await rt.call(255, "Print", [_v57, _v58, _v59, _v60, _v61, _v62, _v63, _v64, _v65, _v66, _v67], this);
                acc = _v68;
                _v47 = _v68;
              }
              acc = _v47;
              _v25 = _v47;
              const _v69: any = 0;
              acc = _v69;
              const _v70: any = (temps[0] ?? 0);
              acc = _v70;
              const _v71: any = rt.op("-", ...[_v69, _v70]);
              acc = _v71;
              const _v72: any = await rt.call(204, "localproc_1", [_v71], this);
              acc = _v72;
              _v25 = _v72;
            } else {
              const _v73: any = 16;
              acc = _v73;
              const _v74: any = rt.global(413);
              acc = _v74;
              const _v75: any = await rt.send(_v74, "init", [_v73]);
              acc = _v75;
              _v25 = _v75;
              const _v76: any = 204;
              acc = _v76;
              const _v77: any = 14;
              acc = _v77;
              const _v78: any = 310;
              acc = _v78;
              const _v79: any = rt.global(413);
              acc = _v79;
              const _v80: any = rt.global(440);
              acc = _v80;
              const _v81: any = rt.global(441);
              acc = _v81;
              const _v82: any = rt.global(442);
              acc = _v82;
              const _v83: any = 70;
              acc = _v83;
              const _v84: any = 100;
              acc = _v84;
              const _v85: any = 25;
              acc = _v85;
              const _v86: any = rt.global(426);
              acc = _v86;
              const _v87: any = await rt.call(255, "Print", [_v76, _v77, _v78, _v79, _v80, _v81, _v82, _v83, _v84, _v85, _v86], this);
              acc = _v87;
              _v25 = _v87;
            }
            acc = _v25;
            const _v88: any = rt.get(this, "value");
            acc = _v88;
            return _v88;
            return acc;
          },
          // SCI bank.sc: withdraw.hilite
          "hilite": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(535);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.get(this, "flashColor");
              acc = _v5;
              _v3 = _v5;
            } else {
              const _v6: any = 15;
              acc = _v6;
              _v3 = _v6;
            }
            acc = _v3;
            const _v7: any = this;
            acc = _v7;
            const _v8: any = await rt.send(_v7, "hiliteControl", [_v3]);
            acc = _v8;
            const _v9: any = 5;
            acc = _v9;
            const _v10: any = await rt.call(204, "Wait", [_v9], this);
            acc = _v10;
            let _v11: any = acc;
            const _v12: any = rt.global(535);
            acc = _v12;
            _v11 = _v12;
            if (rt.truth(_v12)) {
              const _v13: any = rt.get(this, "textColor");
              acc = _v13;
              _v11 = _v13;
            } else {
              const _v14: any = 15;
              acc = _v14;
              _v11 = _v14;
            }
            acc = _v11;
            const _v15: any = this;
            acc = _v15;
            const _v16: any = await rt.send(_v15, "hiliteControl", [_v11]);
            acc = _v16;
            const _v17: any = this;
            acc = _v17;
            const _v18: any = await rt.send(_v17, "resetPort", []);
            acc = _v18;
            return acc;
          },
        },
      },
      {
        name: "loanPayment",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"state": 65, "nsTop": 65, "nsLeft": 94, "key": 3, "text": "Loan Payment", "price": 50, "typeOfGoods": 4, "fixedPrice": 1},
        methods: {
          // SCI bank.sc: loanPayment.doFormat
          "doFormat": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "price");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              const _v4: any = 204;
              acc = _v4;
              const _v5: any = 15;
              acc = _v5;
              const _v6: any = rt.get(this, "text");
              acc = _v6;
              const _v7: any = rt.get(this, "price");
              acc = _v7;
              const _v8: any = await rt.call(204, "Format", [_v3, _v4, _v5, _v6, _v7], this);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = 84;
              acc = _v9;
              const _v10: any = rt.set(this, "nsLeft", _v9);
              acc = _v10;
              _v1 = _v10;
            } else {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = await rt.superSend(this, {"script": 204, "name": "loanPayment"}, "doFormat", [_v11]);
              acc = _v12;
              _v1 = _v12;
            }
            acc = _v1;
            return acc;
          },
          // SCI bank.sc: loanPayment.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 204, "name": "loanPayment"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(302);
            acc = _v4;
            const _v5: any = await rt.send(_v4, "loanBal", []);
            acc = _v5;
            _v3 = _v5;
            if (rt.truth(_v5)) {
              let _v6: any = acc;
              const _v7: any = rt.global(416);
              acc = _v7;
              _v6 = _v7;
              if (rt.truth(_v7)) {
                const _v8: any = rt.global(302);
                acc = _v8;
                const _v9: any = await rt.send(_v8, "paySched", []);
                acc = _v9;
                const _v10: any = 1;
                acc = _v10;
                const _v11: any = rt.op("+", ...[_v9, _v10]);
                acc = _v11;
                const _v12: any = 1;
                acc = _v12;
                const _v13: any = rt.global(302);
                acc = _v13;
                const _v14: any = await rt.send(_v13, "paySched", [_v11]);
                acc = _v14;
                const _v15: any = await rt.send(_v13, "madePayment", [_v12]);
                acc = _v15;
                _v6 = _v15;
                const _v16: any = 2;
                acc = _v16;
                const _v17: any = rt.global(413);
                acc = _v17;
                const _v18: any = await rt.send(_v17, "init", [_v16]);
                acc = _v18;
                _v6 = _v18;
                const _v19: any = rt.global(302);
                acc = _v19;
                const _v20: any = await rt.send(_v19, "loanBal", []);
                acc = _v20;
                let _v21: any = acc;
                const _v22: any = rt.get(this, "price");
                acc = _v22;
                const _v23: any = 50;
                acc = _v23;
                const _v24: any = rt.op("<", ...[_v22, _v23]);
                acc = _v24;
                _v21 = _v24;
                if (rt.truth(_v24)) {
                  const _v25: any = rt.get(this, "price");
                  acc = _v25;
                  _v21 = _v25;
                } else {
                  const _v26: any = 45;
                  acc = _v26;
                  _v21 = _v26;
                }
                acc = _v21;
                const _v27: any = rt.op("-", ...[_v20, _v21]);
                acc = _v27;
                const _v28: any = rt.global(302);
                acc = _v28;
                const _v29: any = await rt.send(_v28, "loanBal", [_v27]);
                acc = _v29;
                _v6 = _v29;
                let _v30: any = acc;
                const _v31: any = rt.global(302);
                acc = _v31;
                const _v32: any = await rt.send(_v31, "loanBal", []);
                acc = _v32;
                const _v33: any = 50;
                acc = _v33;
                const _v34: any = rt.op("<", ...[_v32, _v33]);
                acc = _v34;
                _v30 = _v34;
                if (rt.truth(_v34)) {
                  const _v35: any = rt.global(302);
                  acc = _v35;
                  const _v36: any = await rt.send(_v35, "loanBal", []);
                  acc = _v36;
                  const _v37: any = this;
                  acc = _v37;
                  const _v38: any = await rt.send(_v37, "erase", []);
                  acc = _v38;
                  const _v39: any = await rt.send(_v37, "price", [_v36]);
                  acc = _v39;
                  const _v40: any = await rt.send(_v37, "draw", []);
                  acc = _v40;
                  _v30 = _v40;
                }
                acc = _v30;
                _v6 = _v30;
                let _v41: any = acc;
                const _v42: any = rt.global(302);
                acc = _v42;
                const _v43: any = await rt.send(_v42, "loanBal", []);
                acc = _v43;
                const _v44: any = rt.op("not", ...[_v43]);
                acc = _v44;
                _v41 = _v44;
                if (rt.truth(_v44)) {
                  const _v45: any = 0;
                  acc = _v45;
                  const _v46: any = rt.global(302);
                  acc = _v46;
                  const _v47: any = await rt.send(_v46, "paySched", [_v45]);
                  acc = _v47;
                  _v41 = _v47;
                  const _v48: any = 0;
                  acc = _v48;
                  const _v49: any = 94;
                  acc = _v49;
                  const _v50: any = this;
                  acc = _v50;
                  const _v51: any = await rt.send(_v50, "erase", []);
                  acc = _v51;
                  const _v52: any = await rt.send(_v50, "price", [_v48]);
                  acc = _v52;
                  const _v53: any = await rt.send(_v50, "nsLeft", [_v49]);
                  acc = _v53;
                  const _v54: any = await rt.send(_v50, "draw", []);
                  acc = _v54;
                  _v41 = _v54;
                }
                acc = _v41;
                _v6 = _v41;
                const _v55: any = 16;
                acc = _v55;
                const _v56: any = rt.global(413);
                acc = _v56;
                const _v57: any = await rt.send(_v56, "init", [_v55]);
                acc = _v57;
                _v6 = _v57;
                const _v58: any = 204;
                acc = _v58;
                const _v59: any = 16;
                acc = _v59;
                const _v60: any = 310;
                acc = _v60;
                const _v61: any = rt.global(413);
                acc = _v61;
                const _v62: any = rt.global(440);
                acc = _v62;
                const _v63: any = rt.global(441);
                acc = _v63;
                const _v64: any = rt.global(442);
                acc = _v64;
                const _v65: any = 70;
                acc = _v65;
                const _v66: any = 100;
                acc = _v66;
                const _v67: any = 25;
                acc = _v67;
                const _v68: any = rt.global(426);
                acc = _v68;
                const _v69: any = await rt.call(255, "Print", [_v58, _v59, _v60, _v61, _v62, _v63, _v64, _v65, _v66, _v67, _v68], this);
                acc = _v69;
                _v6 = _v69;
              }
              acc = _v6;
              _v3 = _v6;
            } else {
              const _v70: any = 16;
              acc = _v70;
              const _v71: any = rt.global(413);
              acc = _v71;
              const _v72: any = await rt.send(_v71, "init", [_v70]);
              acc = _v72;
              _v3 = _v72;
              const _v73: any = 204;
              acc = _v73;
              const _v74: any = 17;
              acc = _v74;
              const _v75: any = 310;
              acc = _v75;
              const _v76: any = rt.global(413);
              acc = _v76;
              const _v77: any = rt.global(440);
              acc = _v77;
              const _v78: any = rt.global(441);
              acc = _v78;
              const _v79: any = rt.global(442);
              acc = _v79;
              const _v80: any = 70;
              acc = _v80;
              const _v81: any = 100;
              acc = _v81;
              const _v82: any = 25;
              acc = _v82;
              const _v83: any = rt.global(426);
              acc = _v83;
              const _v84: any = await rt.call(255, "Print", [_v73, _v74, _v75, _v76, _v77, _v78, _v79, _v80, _v81, _v82, _v83], this);
              acc = _v84;
              _v3 = _v84;
            }
            acc = _v3;
            const _v85: any = (temps[0] ?? 0);
            acc = _v85;
            return _v85;
            return acc;
          },
        },
      },
      {
        name: "applyForLoan",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"nsTop": 80, "nsLeft": 93, "key": 4, "text": "Apply For Loan"},
        methods: {
          // SCI bank.sc: applyForLoan.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v1: any = 23;
            acc = _v1;
            const _v2: any = rt.global(476);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "play", [_v1]);
            acc = _v3;
            let _v4: any = acc;
            const _v5: any = rt.global(502);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "aTimeClock", []);
            acc = _v6;
            _v4 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = 0;
              acc = _v8;
              const _v9: any = rt.global(502);
              acc = _v9;
              const _v10: any = await rt.send(_v9, "aTimeClock", []);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "cel", [_v7]);
              acc = _v11;
              const _v12: any = await rt.send(_v10, "setCycle", [_v8]);
              acc = _v12;
              _v4 = _v12;
            }
            acc = _v4;
            let _v13: any = acc;
            const _v14: any = rt.global(323);
            acc = _v14;
            const _v15: any = 60;
            acc = _v15;
            const _v16: any = rt.op("!=", ...[_v14, _v15]);
            acc = _v16;
            _v13 = _v16;
            if (rt.truth(_v16)) {
              const _v17: any = 2;
              acc = _v17;
              const _v18: any = rt.global(417);
              acc = _v18;
              const _v19: any = await rt.send(_v18, "doit", [_v17]);
              acc = _v19;
              _v13 = _v19;
              let _v20: any = acc;
              const _v21: any = rt.global(302);
              acc = _v21;
              const _v22: any = await rt.send(_v21, "wage", []);
              acc = _v22;
              const _v23: any = rt.global(302);
              acc = _v23;
              const _v24: any = await rt.send(_v23, "lqAss", []);
              acc = _v24;
              const _v25: any = 1000;
              acc = _v25;
              const _v26: any = rt.op("/", ...[_v24, _v25]);
              acc = _v26;
              const _v27: any = rt.op("+", ...[_v22, _v26]);
              acc = _v27;
              const _v28: any = (temps[2] = _v27);
              acc = _v28;
              const _v29: any = 5;
              acc = _v29;
              const _v30: any = rt.global(302);
              acc = _v30;
              const _v31: any = await rt.send(_v30, "latePayments", []);
              acc = _v31;
              const _v32: any = rt.global(302);
              acc = _v32;
              const _v33: any = await rt.send(_v32, "loanBal", []);
              acc = _v33;
              const _v34: any = 100;
              acc = _v34;
              const _v35: any = rt.op("/", ...[_v33, _v34]);
              acc = _v35;
              let _v36: any = acc;
              const _v37: any = rt.global(302);
              acc = _v37;
              const _v38: any = await rt.send(_v37, "loanBal", []);
              acc = _v38;
              _v36 = _v38;
              if (rt.truth(_v38)) {
                const _v39: any = 1;
                acc = _v39;
                _v36 = _v39;
              } else {
                const _v40: any = 0;
                acc = _v40;
                _v36 = _v40;
              }
              acc = _v36;
              const _v41: any = rt.op("+", ...[_v29, _v31, _v35, _v36]);
              acc = _v41;
              const _v42: any = (temps[1] = _v41);
              acc = _v42;
              const _v43: any = rt.op(">", ...[_v28, _v42]);
              acc = _v43;
              _v20 = _v43;
              if (rt.truth(_v43)) {
                const _v44: any = (temps[2] ?? 0);
                acc = _v44;
                const _v45: any = (temps[1] ?? 0);
                acc = _v45;
                const _v46: any = rt.op("-", ...[_v44, _v45]);
                acc = _v46;
                const _v47: any = 100;
                acc = _v47;
                const _v48: any = rt.op("*", ...[_v46, _v47]);
                acc = _v48;
                const _v49: any = (temps[0] = _v48);
                acc = _v49;
                _v20 = _v49;
                let _v50: any = acc;
                const _v51: any = rt.global(302);
                acc = _v51;
                const _v52: any = await rt.send(_v51, "loanBal", []);
                acc = _v52;
                _v50 = _v52;
                if (rt.truth(_v52)) {
                  const _v53: any = rt.ref("global", 0, 100);
                  acc = _v53;
                  const _v54: any = 204;
                  acc = _v54;
                  const _v55: any = 18;
                  acc = _v55;
                  const _v56: any = (temps[0] ?? 0);
                  acc = _v56;
                  const _v57: any = await rt.call(204, "Format", [_v53, _v54, _v55, _v56], this);
                  acc = _v57;
                  _v50 = _v57;
                } else {
                  const _v58: any = rt.ref("global", 0, 100);
                  acc = _v58;
                  const _v59: any = 204;
                  acc = _v59;
                  const _v60: any = 19;
                  acc = _v60;
                  const _v61: any = (temps[0] ?? 0);
                  acc = _v61;
                  const _v62: any = await rt.call(204, "Format", [_v58, _v59, _v60, _v61], this);
                  acc = _v62;
                  _v50 = _v62;
                }
                acc = _v50;
                _v20 = _v50;
                const _v63: any = 16;
                acc = _v63;
                const _v64: any = rt.global(413);
                acc = _v64;
                const _v65: any = await rt.send(_v64, "init", [_v63]);
                acc = _v65;
                _v20 = _v65;
                let _v66: any = acc;
                let _v67: any = 0;
                if (!rt.truth(_v67)) {
                  const _v68: any = rt.global(302);
                  acc = _v68;
                  const _v69: any = await rt.send(_v68, "playing", []);
                  acc = _v69;
                  const _v70: any = 29;
                  acc = _v70;
                  const _v71: any = rt.op("==", ...[_v69, _v70]);
                  acc = _v71;
                  _v67 = _v71;
                }
                if (!rt.truth(_v67)) {
                  const _v72: any = rt.ref("global", 0, 100);
                  acc = _v72;
                  const _v73: any = 81;
                  acc = _v73;
                  const _v74: any = "Yes";
                  acc = _v74;
                  const _v75: any = 1;
                  acc = _v75;
                  const _v76: any = 81;
                  acc = _v76;
                  const _v77: any = "No";
                  acc = _v77;
                  const _v78: any = 0;
                  acc = _v78;
                  const _v79: any = 310;
                  acc = _v79;
                  const _v80: any = rt.global(413);
                  acc = _v80;
                  const _v81: any = rt.global(440);
                  acc = _v81;
                  const _v82: any = rt.global(441);
                  acc = _v82;
                  const _v83: any = rt.global(442);
                  acc = _v83;
                  const _v84: any = 70;
                  acc = _v84;
                  const _v85: any = 110;
                  acc = _v85;
                  const _v86: any = 311;
                  acc = _v86;
                  const _v87: any = await rt.call(255, "Print", [_v72, _v73, _v74, _v75, _v76, _v77, _v78, _v79, _v80, _v81, _v82, _v83, _v84, _v85, _v86], this);
                  acc = _v87;
                  _v67 = _v87;
                }
                acc = _v67;
                _v66 = _v67;
                if (rt.truth(_v67)) {
                  const _v88: any = 23;
                  acc = _v88;
                  const _v89: any = rt.global(476);
                  acc = _v89;
                  const _v90: any = await rt.send(_v89, "play", [_v88]);
                  acc = _v90;
                  _v66 = _v90;
                  const _v91: any = 16;
                  acc = _v91;
                  const _v92: any = rt.global(413);
                  acc = _v92;
                  const _v93: any = await rt.send(_v92, "init", [_v91]);
                  acc = _v93;
                  _v66 = _v93;
                  const _v94: any = 5;
                  acc = _v94;
                  const _v95: any = await rt.call(0, "proc0_13", [_v94], this);
                  acc = _v95;
                  _v66 = _v95;
                  const _v96: any = rt.ref("global", 0, 100);
                  acc = _v96;
                  const _v97: any = 204;
                  acc = _v97;
                  const _v98: any = 20;
                  acc = _v98;
                  const _v99: any = (temps[0] ?? 0);
                  acc = _v99;
                  const _v100: any = await rt.call(204, "Format", [_v96, _v97, _v98, _v99], this);
                  acc = _v100;
                  const _v101: any = 310;
                  acc = _v101;
                  const _v102: any = rt.global(413);
                  acc = _v102;
                  const _v103: any = rt.global(440);
                  acc = _v103;
                  const _v104: any = rt.global(441);
                  acc = _v104;
                  const _v105: any = rt.global(442);
                  acc = _v105;
                  const _v106: any = 70;
                  acc = _v106;
                  const _v107: any = 100;
                  acc = _v107;
                  const _v108: any = 25;
                  acc = _v108;
                  const _v109: any = rt.global(426);
                  acc = _v109;
                  const _v110: any = await rt.call(255, "Print", [_v100, _v101, _v102, _v103, _v104, _v105, _v106, _v107, _v108, _v109], this);
                  acc = _v110;
                  _v66 = _v110;
                  const _v111: any = (temps[0] ?? 0);
                  acc = _v111;
                  const _v112: any = await rt.call(0, "proc0_10", [_v111], this);
                  acc = _v112;
                  _v66 = _v112;
                  const _v113: any = rt.global(302);
                  acc = _v113;
                  const _v114: any = await rt.send(_v113, "loanBal", []);
                  acc = _v114;
                  const _v115: any = (temps[0] ?? 0);
                  acc = _v115;
                  const _v116: any = rt.op("+", ...[_v114, _v115]);
                  acc = _v116;
                  const _v117: any = rt.global(302);
                  acc = _v117;
                  const _v118: any = await rt.send(_v117, "loanBal", [_v116]);
                  acc = _v118;
                  _v66 = _v118;
                  const _v119: any = rt.global(305);
                  acc = _v119;
                  const _v120: any = await rt.send(_v119, "doit", []);
                  acc = _v120;
                  _v66 = _v120;
                  const _v121: any = 50;
                  acc = _v121;
                  const _v122: any = rt.object(204, "loanPayment");
                  acc = _v122;
                  const _v123: any = await rt.send(_v122, "erase", []);
                  acc = _v123;
                  const _v124: any = await rt.send(_v122, "price", [_v121]);
                  acc = _v124;
                  const _v125: any = await rt.send(_v122, "draw", []);
                  acc = _v125;
                  _v66 = _v125;
                } else {
                  const _v126: any = 23;
                  acc = _v126;
                  const _v127: any = rt.global(476);
                  acc = _v127;
                  const _v128: any = await rt.send(_v127, "play", [_v126]);
                  acc = _v128;
                  _v66 = _v128;
                  let _v129: any = acc;
                  const _v130: any = rt.global(302);
                  acc = _v130;
                  const _v131: any = await rt.send(_v130, "playing", []);
                  acc = _v131;
                  const _v132: any = 29;
                  acc = _v132;
                  const _v133: any = rt.op("!=", ...[_v131, _v132]);
                  acc = _v133;
                  _v129 = _v133;
                  if (rt.truth(_v133)) {
                    const _v134: any = 204;
                    acc = _v134;
                    const _v135: any = 21;
                    acc = _v135;
                    const _v136: any = 310;
                    acc = _v136;
                    const _v137: any = rt.global(413);
                    acc = _v137;
                    const _v138: any = rt.global(440);
                    acc = _v138;
                    const _v139: any = rt.global(441);
                    acc = _v139;
                    const _v140: any = rt.global(442);
                    acc = _v140;
                    const _v141: any = 70;
                    acc = _v141;
                    const _v142: any = 100;
                    acc = _v142;
                    const _v143: any = 25;
                    acc = _v143;
                    const _v144: any = rt.global(426);
                    acc = _v144;
                    const _v145: any = await rt.call(255, "Print", [_v134, _v135, _v136, _v137, _v138, _v139, _v140, _v141, _v142, _v143, _v144], this);
                    acc = _v145;
                    _v129 = _v145;
                  }
                  acc = _v129;
                  _v66 = _v129;
                }
                acc = _v66;
                _v20 = _v66;
              } else {
                const _v146: any = 32;
                acc = _v146;
                const _v147: any = rt.global(413);
                acc = _v147;
                const _v148: any = await rt.send(_v147, "init", [_v146]);
                acc = _v148;
                _v20 = _v148;
                const _v149: any = -1;
                acc = _v149;
                const _v150: any = await rt.call(0, "proc0_13", [_v149], this);
                acc = _v150;
                _v20 = _v150;
                let _v151: any = acc;
                const _v152: any = rt.global(302);
                acc = _v152;
                const _v153: any = await rt.send(_v152, "loanBal", []);
                acc = _v153;
                _v151 = _v153;
                if (rt.truth(_v153)) {
                  const _v154: any = 204;
                  acc = _v154;
                  const _v155: any = 22;
                  acc = _v155;
                  const _v156: any = 310;
                  acc = _v156;
                  const _v157: any = rt.global(413);
                  acc = _v157;
                  const _v158: any = rt.global(440);
                  acc = _v158;
                  const _v159: any = rt.global(441);
                  acc = _v159;
                  const _v160: any = rt.global(442);
                  acc = _v160;
                  const _v161: any = 70;
                  acc = _v161;
                  const _v162: any = 100;
                  acc = _v162;
                  const _v163: any = 25;
                  acc = _v163;
                  const _v164: any = rt.global(426);
                  acc = _v164;
                  const _v165: any = await rt.call(255, "Print", [_v154, _v155, _v156, _v157, _v158, _v159, _v160, _v161, _v162, _v163, _v164], this);
                  acc = _v165;
                  _v151 = _v165;
                } else {
                  const _v166: any = -1;
                  acc = _v166;
                  const _v167: any = await rt.call(0, "proc0_13", [_v166], this);
                  acc = _v167;
                  _v151 = _v167;
                  const _v168: any = 204;
                  acc = _v168;
                  const _v169: any = 23;
                  acc = _v169;
                  const _v170: any = 310;
                  acc = _v170;
                  const _v171: any = rt.global(413);
                  acc = _v171;
                  const _v172: any = rt.global(440);
                  acc = _v172;
                  const _v173: any = rt.global(441);
                  acc = _v173;
                  const _v174: any = rt.global(442);
                  acc = _v174;
                  const _v175: any = 70;
                  acc = _v175;
                  const _v176: any = 100;
                  acc = _v176;
                  const _v177: any = 25;
                  acc = _v177;
                  const _v178: any = rt.global(426);
                  acc = _v178;
                  const _v179: any = await rt.call(255, "Print", [_v168, _v169, _v170, _v171, _v172, _v173, _v174, _v175, _v176, _v177, _v178], this);
                  acc = _v179;
                  _v151 = _v179;
                }
                acc = _v151;
                _v20 = _v151;
              }
              acc = _v20;
              _v13 = _v20;
            } else {
              const _v180: any = 16;
              acc = _v180;
              const _v181: any = rt.global(413);
              acc = _v181;
              const _v182: any = await rt.send(_v181, "init", [_v180]);
              acc = _v182;
              _v13 = _v182;
              const _v183: any = 204;
              acc = _v183;
              const _v184: any = 24;
              acc = _v184;
              const _v185: any = 310;
              acc = _v185;
              const _v186: any = rt.global(413);
              acc = _v186;
              const _v187: any = rt.global(440);
              acc = _v187;
              const _v188: any = rt.global(441);
              acc = _v188;
              const _v189: any = rt.global(442);
              acc = _v189;
              const _v190: any = 70;
              acc = _v190;
              const _v191: any = 100;
              acc = _v191;
              const _v192: any = 25;
              acc = _v192;
              const _v193: any = rt.global(426);
              acc = _v193;
              const _v194: any = await rt.call(255, "Print", [_v183, _v184, _v185, _v186, _v187, _v188, _v189, _v190, _v191, _v192, _v193], this);
              acc = _v194;
              _v13 = _v194;
            }
            acc = _v13;
            const _v195: any = 0;
            acc = _v195;
            return _v195;
            return acc;
          },
        },
      },
      {
        name: "seeBroker",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"nsTop": 95, "nsLeft": 95, "key": 5, "text": "See The Broker"},
        methods: {
          // SCI bank.sc: seeBroker.doit
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
            let _v4: any = acc;
            const _v5: any = rt.global(502);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "aTimeClock", []);
            acc = _v6;
            _v4 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = 0;
              acc = _v8;
              const _v9: any = rt.global(502);
              acc = _v9;
              const _v10: any = await rt.send(_v9, "aTimeClock", []);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "cel", [_v7]);
              acc = _v11;
              const _v12: any = await rt.send(_v10, "setCycle", [_v8]);
              acc = _v12;
              _v4 = _v12;
            }
            acc = _v4;
            let _v13: any = acc;
            const _v14: any = rt.global(323);
            acc = _v14;
            const _v15: any = 60;
            acc = _v15;
            const _v16: any = rt.op("!=", ...[_v14, _v15]);
            acc = _v16;
            _v13 = _v16;
            if (rt.truth(_v16)) {
              let _v17: any = acc;
              const _v18: any = rt.local(204, 0);
              acc = _v18;
              const _v19: any = rt.op("not", ...[_v18]);
              acc = _v19;
              _v17 = _v19;
              if (rt.truth(_v19)) {
                const _v20: any = 2;
                acc = _v20;
                const _v21: any = rt.global(417);
                acc = _v21;
                const _v22: any = await rt.send(_v21, "doit", [_v20]);
                acc = _v22;
                _v17 = _v22;
                const _v23: any = 1;
                acc = _v23;
                const _v24: any = rt.setLocal(204, 0, _v23);
                acc = _v24;
                _v17 = _v24;
              }
              acc = _v17;
              _v13 = _v17;
              const _v25: any = rt.object(204, "bank");
              acc = _v25;
              const _v26: any = 291;
              acc = _v26;
              const _v27: any = await rt.call(0, "proc0_15", [_v25, _v26], this);
              acc = _v27;
              _v13 = _v27;
              const _v28: any = rt.global(477);
              acc = _v28;
              const _v29: any = await rt.send(_v28, "fade", []);
              acc = _v29;
              _v13 = _v29;
              const _v30: any = rt.get(this, "client");
              acc = _v30;
              const _v31: any = 213;
              acc = _v31;
              const _v32: any = 0;
              acc = _v32;
              const _v33: any = await rt.call(204, "ScriptID", [_v31, _v32], this);
              acc = _v33;
              const _v34: any = await rt.send(_v33, "init", [_v30]);
              acc = _v34;
              const _v35: any = (temps[0] = _v34);
              acc = _v35;
              _v13 = _v35;
              const _v36: any = rt.object(204, "bank");
              acc = _v36;
              const _v37: any = await rt.send(_v36, "draw", []);
              acc = _v37;
              _v13 = _v37;
              const _v38: any = (temps[0] ?? 0);
              acc = _v38;
              return _v38;
              _v13 = acc;
            } else {
              const _v39: any = 16;
              acc = _v39;
              const _v40: any = rt.global(413);
              acc = _v40;
              const _v41: any = await rt.send(_v40, "init", [_v39]);
              acc = _v41;
              _v13 = _v41;
              const _v42: any = 204;
              acc = _v42;
              const _v43: any = 25;
              acc = _v43;
              const _v44: any = 310;
              acc = _v44;
              const _v45: any = rt.global(413);
              acc = _v45;
              const _v46: any = rt.global(440);
              acc = _v46;
              const _v47: any = rt.global(441);
              acc = _v47;
              const _v48: any = rt.global(442);
              acc = _v48;
              const _v49: any = 70;
              acc = _v49;
              const _v50: any = 100;
              acc = _v50;
              const _v51: any = 25;
              acc = _v51;
              const _v52: any = rt.global(426);
              acc = _v52;
              const _v53: any = await rt.call(255, "Print", [_v42, _v43, _v44, _v45, _v46, _v47, _v48, _v49, _v50, _v51, _v52], this);
              acc = _v53;
              _v13 = _v53;
            }
            acc = _v13;
            const _v54: any = 0;
            acc = _v54;
            return _v54;
            return acc;
          },
        },
      },
      {
        name: "theTalker",
        className: "Talker",
        parent: {"script": 104, "name": "Talker"},
        isClass: false,
        properties: {"nsTop": 0, "nsLeft": 0, "view": 354},
        methods: {
        },
      },
      {
        name: "exitButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 144, "key": 120, "view": 250, "priority": 15},
        methods: {
        },
      },
      {
        name: "workButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 77, "key": 119, "view": 250, "loop": 1, "priority": 15},
        methods: {
          // SCI bank.sc: workButton.doit
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
            const _v5: any = rt.object(204, "timeClock");
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
                const _v15: any = rt.object(204, "bank");
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
                const _v26: any = rt.object(204, "timeClock");
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
            const _v29: any = await rt.superSend(this, {"script": 204, "name": "workButton"}, "doit", [_v28]);
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
        properties: {"nsTop": 57},
        methods: {
          // SCI bank.sc: timeClock.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setCycle", [_v1]);
            acc = _v3;
            const _v4: any = 1;
            acc = _v4;
            const _v5: any = rt.object(992, "Beg");
            acc = _v5;
            const _v6: any = rt.object(204, "piggyBank");
            acc = _v6;
            const _v7: any = await rt.send(_v6, "cel", [_v4]);
            acc = _v7;
            const _v8: any = await rt.send(_v6, "doit", [_v5]);
            acc = _v8;
            return acc;
          },
          // SCI bank.sc: timeClock.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(204, "timeClock");
            acc = _v1;
            const _v2: any = rt.global(502);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "aTimeClock", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 204, "name": "timeClock"}, "setSize", []);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "piggyBank",
        className: "DCIcon",
        parent: {"script": 967, "name": "DCIcon"},
        isClass: false,
        properties: {"nsTop": 57, "view": 704, "loop": 1, "priority": 14, "cycleSpeed": 5},
        methods: {
          // SCI bank.sc: piggyBank.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.set(this, "cel", _v1);
            acc = _v2;
            return acc;
          },
          // SCI bank.sc: piggyBank.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
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
              const _v5: any = 6;
              acc = _v5;
              const _v6: any = (args[0] ?? 0);
              acc = _v6;
              const _v7: any = this;
              acc = _v7;
              const _v8: any = 1;
              acc = _v8;
              const _v9: any = this;
              acc = _v9;
              const _v10: any = await rt.send(_v9, "loop", [_v5]);
              acc = _v10;
              const _v11: any = await rt.send(_v9, "setCycle", [_v6, _v7, _v8]);
              acc = _v11;
              _v1 = _v11;
            }
            acc = _v1;
            return acc;
          },
          // SCI bank.sc: piggyBank.setSize
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
              const _v6: any = await rt.superSend(this, {"script": 204, "name": "piggyBank"}, "setSize", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI bank.sc: piggyBank.draw
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
              const _v6: any = await rt.superSend(this, {"script": 204, "name": "piggyBank"}, "draw", [..._v5]);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            return acc;
          },
          // SCI bank.sc: piggyBank.setCycle
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
              const _v6: any = await rt.superSend(this, {"script": 204, "name": "piggyBank"}, "setCycle", [..._v5]);
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
          // SCI bank.sc: computerScript.handleEvent
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
                  const _v19: any = 18;
                  acc = _v19;
                  const _v20: any = await rt.call(0, "proc0_6", [_v19], this);
                  acc = _v20;
                  _v18 = _v20;
                  if (rt.truth(_v20)) {
                    const _v21: any = 1;
                    acc = _v21;
                    const _v22: any = rt.setGlobal(525, _v21);
                    acc = _v22;
                    _v18 = _v22;
                    const _v23: any = 5;
                    acc = _v23;
                    const _v24: any = rt.set(this, "cycles", _v23);
                    acc = _v24;
                    _v18 = _v24;
                    const _v25: any = rt.object(204, "deposit");
                    acc = _v25;
                    const _v26: any = await rt.send(_v25, "key", []);
                    acc = _v26;
                    const _v27: any = (args[0] ?? 0);
                    acc = _v27;
                    const _v28: any = await rt.send(_v27, "message", [_v26]);
                    acc = _v28;
                    _v18 = _v28;
                    let _v29: any = acc;
                    const _v30: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v30;
                    const _v31: any = 500;
                    acc = _v31;
                    const _v32: any = rt.op(">", ...[_v30, _v31]);
                    acc = _v32;
                    _v29 = _v32;
                    if (rt.truth(_v32)) {
                      const _v33: any = rt.set(this, "state", rt.op("-", rt.get(this, "state"), 1));
                      acc = _v33;
                      _v29 = _v33;
                    }
                    acc = _v29;
                    _v18 = _v29;
                  }
                  acc = _v18;
                  _v14 = _v18;
                  break _branch16;
                }
                const _v34: any = 3;
                acc = _v34;
                _v14 = rt.op("==", _v15, _v34);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v35: any = acc;
                  let _v36: any = 1;
                  if (rt.truth(_v36)) {
                    const _v37: any = 22;
                    acc = _v37;
                    const _v38: any = await rt.call(0, "proc0_6", [_v37], this);
                    acc = _v38;
                    _v36 = _v38;
                  }
                  if (rt.truth(_v36)) {
                    let _v39: any = 0;
                    if (!rt.truth(_v39)) {
                      const _v40: any = rt.global(302);
                      acc = _v40;
                      const _v41: any = await rt.send(_v40, "bankBal", []);
                      acc = _v41;
                      _v39 = _v41;
                    }
                    if (!rt.truth(_v39)) {
                      const _v42: any = rt.global(302);
                      acc = _v42;
                      const _v43: any = await rt.send(_v42, "bankBalHi", []);
                      acc = _v43;
                      _v39 = _v43;
                    }
                    acc = _v39;
                    _v36 = _v39;
                  }
                  acc = _v36;
                  _v35 = _v36;
                  if (rt.truth(_v36)) {
                    const _v44: any = 1;
                    acc = _v44;
                    const _v45: any = rt.setGlobal(525, _v44);
                    acc = _v45;
                    _v35 = _v45;
                    const _v46: any = 5;
                    acc = _v46;
                    const _v47: any = rt.set(this, "cycles", _v46);
                    acc = _v47;
                    _v35 = _v47;
                    const _v48: any = rt.object(204, "withdraw");
                    acc = _v48;
                    const _v49: any = await rt.send(_v48, "key", []);
                    acc = _v49;
                    const _v50: any = (args[0] ?? 0);
                    acc = _v50;
                    const _v51: any = await rt.send(_v50, "message", [_v49]);
                    acc = _v51;
                    _v35 = _v51;
                    let _v52: any = acc;
                    const _v53: any = rt.setGlobal(408, rt.op("-", rt.global(408), 1));
                    acc = _v53;
                    _v52 = _v53;
                    if (rt.truth(_v53)) {
                      const _v54: any = rt.set(this, "state", rt.op("-", rt.get(this, "state"), 1));
                      acc = _v54;
                      _v52 = _v54;
                    }
                    acc = _v52;
                    _v35 = _v52;
                  }
                  acc = _v35;
                  _v14 = _v35;
                  break _branch16;
                }
                const _v55: any = 4;
                acc = _v55;
                _v14 = rt.op("==", _v15, _v55);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v56: any = acc;
                  const _v57: any = 21;
                  acc = _v57;
                  const _v58: any = await rt.call(0, "proc0_6", [_v57], this);
                  acc = _v58;
                  _v56 = _v58;
                  if (rt.truth(_v58)) {
                    const _v59: any = 60;
                    acc = _v59;
                    const _v60: any = rt.set(this, "cycles", _v59);
                    acc = _v60;
                    _v56 = _v60;
                    const _v61: any = rt.object(204, "loanPayment");
                    acc = _v61;
                    const _v62: any = await rt.send(_v61, "key", []);
                    acc = _v62;
                    const _v63: any = (args[0] ?? 0);
                    acc = _v63;
                    const _v64: any = await rt.send(_v63, "message", [_v62]);
                    acc = _v64;
                    _v56 = _v64;
                  }
                  acc = _v56;
                  _v14 = _v56;
                  break _branch16;
                }
                const _v65: any = 5;
                acc = _v65;
                _v14 = rt.op("==", _v15, _v65);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v66: any = acc;
                  let _v67: any = 0;
                  if (!rt.truth(_v67)) {
                    const _v68: any = 19;
                    acc = _v68;
                    const _v69: any = await rt.call(0, "proc0_6", [_v68], this);
                    acc = _v69;
                    _v67 = _v69;
                  }
                  if (!rt.truth(_v67)) {
                    const _v70: any = 20;
                    acc = _v70;
                    const _v71: any = await rt.call(0, "proc0_6", [_v70], this);
                    acc = _v71;
                    _v67 = _v71;
                  }
                  acc = _v67;
                  _v66 = _v67;
                  if (rt.truth(_v67)) {
                    const _v72: any = 60;
                    acc = _v72;
                    const _v73: any = rt.set(this, "cycles", _v72);
                    acc = _v73;
                    _v66 = _v73;
                    const _v74: any = rt.object(204, "seeBroker");
                    acc = _v74;
                    const _v75: any = await rt.send(_v74, "key", []);
                    acc = _v75;
                    const _v76: any = (args[0] ?? 0);
                    acc = _v76;
                    const _v77: any = await rt.send(_v76, "message", [_v75]);
                    acc = _v77;
                    _v66 = _v77;
                  }
                  acc = _v66;
                  _v14 = _v66;
                  break _branch16;
                }
                const _v78: any = 6;
                acc = _v78;
                _v14 = rt.op("==", _v15, _v78);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v79: any = acc;
                  const _v80: any = 17;
                  acc = _v80;
                  const _v81: any = await rt.call(0, "proc0_6", [_v80], this);
                  acc = _v81;
                  _v79 = _v81;
                  if (rt.truth(_v81)) {
                    const _v82: any = 60;
                    acc = _v82;
                    const _v83: any = rt.set(this, "cycles", _v82);
                    acc = _v83;
                    _v79 = _v83;
                    let _v84: any = acc;
                    _branch85: {
                      let _v86: any = 0;
                      if (!rt.truth(_v86)) {
                        const _v87: any = rt.global(302);
                        acc = _v87;
                        const _v88: any = await rt.send(_v87, "bankBal", []);
                        acc = _v88;
                        _v86 = _v88;
                      }
                      if (!rt.truth(_v86)) {
                        const _v89: any = rt.global(302);
                        acc = _v89;
                        const _v90: any = await rt.send(_v89, "bankBalHi", []);
                        acc = _v90;
                        _v86 = _v90;
                      }
                      acc = _v86;
                      _v84 = _v86;
                      acc = _v84;
                      if (rt.truth(_v84)) {
                        const _v91: any = rt.object(204, "withdraw");
                        acc = _v91;
                        const _v92: any = await rt.send(_v91, "key", []);
                        acc = _v92;
                        const _v93: any = (args[0] ?? 0);
                        acc = _v93;
                        const _v94: any = await rt.send(_v93, "message", [_v92]);
                        acc = _v94;
                        _v84 = _v94;
                        let _v95: any = acc;
                        let _v96: any = 1;
                        if (rt.truth(_v96)) {
                          const _v97: any = await rt.call(0, "proc0_11", [], this);
                          acc = _v97;
                          const _v98: any = rt.global(408);
                          acc = _v98;
                          const _v99: any = rt.op("<", ...[_v97, _v98]);
                          acc = _v99;
                          _v96 = _v99;
                        }
                        if (rt.truth(_v96)) {
                          const _v100: any = rt.global(302);
                          acc = _v100;
                          const _v101: any = await rt.send(_v100, "bankBal", []);
                          acc = _v101;
                          _v96 = _v101;
                        }
                        acc = _v96;
                        _v95 = _v96;
                        if (rt.truth(_v96)) {
                          const _v102: any = rt.set(this, "state", rt.op("-", rt.get(this, "state"), 1));
                          acc = _v102;
                          _v95 = _v102;
                        }
                        acc = _v95;
                        _v84 = _v95;
                        break _branch85;
                      }
                      let _v103: any = 0;
                      if (!rt.truth(_v103)) {
                        const _v104: any = rt.global(302);
                        acc = _v104;
                        const _v105: any = await rt.send(_v104, "invAss", []);
                        acc = _v105;
                        _v103 = _v105;
                      }
                      if (!rt.truth(_v103)) {
                        const _v106: any = rt.global(302);
                        acc = _v106;
                        const _v107: any = await rt.send(_v106, "invAssHi", []);
                        acc = _v107;
                        _v103 = _v107;
                      }
                      acc = _v103;
                      _v84 = _v103;
                      acc = _v84;
                      if (rt.truth(_v84)) {
                        const _v108: any = 20;
                        acc = _v108;
                        const _v109: any = rt.setGlobal(407, _v108);
                        acc = _v109;
                        _v84 = _v109;
                        const _v110: any = rt.object(204, "seeBroker");
                        acc = _v110;
                        const _v111: any = await rt.send(_v110, "key", []);
                        acc = _v111;
                        const _v112: any = (args[0] ?? 0);
                        acc = _v112;
                        const _v113: any = await rt.send(_v112, "message", [_v111]);
                        acc = _v113;
                        _v84 = _v113;
                        break _branch85;
                      }
                      const _v114: any = rt.global(483);
                      acc = _v114;
                      const _v115: any = rt.op("not", ...[_v114]);
                      acc = _v115;
                      _v84 = _v115;
                      acc = _v84;
                      if (rt.truth(_v84)) {
                        const _v116: any = rt.object(204, "applyForLoan");
                        acc = _v116;
                        const _v117: any = await rt.send(_v116, "key", []);
                        acc = _v117;
                        const _v118: any = (args[0] ?? 0);
                        acc = _v118;
                        const _v119: any = await rt.send(_v118, "message", [_v117]);
                        acc = _v119;
                        _v84 = _v119;
                        const _v120: any = 1;
                        acc = _v120;
                        const _v121: any = rt.setGlobal(483, _v120);
                        acc = _v121;
                        _v84 = _v121;
                        break _branch85;
                      }
                    }
                    acc = _v84;
                    _v79 = _v84;
                  }
                  acc = _v79;
                  _v14 = _v79;
                  break _branch16;
                }
                const _v122: any = (args[0] ?? 0);
                acc = _v122;
                const _v123: any = 1;
                acc = _v123;
                const _v124: any = await rt.superSend(this, {"script": 204, "name": "computerScript"}, "handleEvent", [_v122, _v123]);
                acc = _v124;
                _v14 = _v124;
                break _branch16;
              }
              acc = _v14;
              _v1 = _v14;
            }
            acc = _v1;
            return acc;
          },
          // SCI bank.sc: computerScript.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 204, "name": "computerScript"}, "cue", []);
            acc = _v1;
            const _v2: any = 0;
            acc = _v2;
            const _v3: any = rt.setGlobal(525, _v2);
            acc = _v3;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI bank.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.ref("global", 0, 100);
        acc = _v1;
        const _v2: any = 204;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(204, "Format", [_v1, _v2, _v3], this);
        acc = _v4;
        const _v5: any = rt.ref("global", 0, 100);
        acc = _v5;
        const _v6: any = 204;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = await rt.call(204, "Format", [_v5, _v6, _v7], this);
        acc = _v8;
        const _v9: any = rt.ref("global", 0, 100);
        acc = _v9;
        const _v10: any = 204;
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = await rt.call(204, "Format", [_v9, _v10, _v11], this);
        acc = _v12;
        const _v13: any = rt.ref("global", 0, 100);
        acc = _v13;
        const _v14: any = 204;
        acc = _v14;
        const _v15: any = 3;
        acc = _v15;
        const _v16: any = await rt.call(204, "Format", [_v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = rt.ref("global", 0, 100);
        acc = _v17;
        const _v18: any = 204;
        acc = _v18;
        const _v19: any = 4;
        acc = _v19;
        const _v20: any = await rt.call(204, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = rt.ref("global", 0, 100);
        acc = _v21;
        const _v22: any = 204;
        acc = _v22;
        const _v23: any = 5;
        acc = _v23;
        const _v24: any = await rt.call(204, "Format", [_v21, _v22, _v23], this);
        acc = _v24;
        const _v25: any = rt.ref("global", 0, 100);
        acc = _v25;
        const _v26: any = 204;
        acc = _v26;
        const _v27: any = 6;
        acc = _v27;
        const _v28: any = await rt.call(204, "Format", [_v25, _v26, _v27], this);
        acc = _v28;
        const _v29: any = rt.ref("global", 0, 100);
        acc = _v29;
        const _v30: any = 204;
        acc = _v30;
        const _v31: any = 7;
        acc = _v31;
        const _v32: any = await rt.call(204, "Format", [_v29, _v30, _v31], this);
        acc = _v32;
        const _v33: any = rt.ref("global", 0, 100);
        acc = _v33;
        const _v34: any = 204;
        acc = _v34;
        const _v35: any = 8;
        acc = _v35;
        const _v36: any = await rt.call(204, "Format", [_v33, _v34, _v35], this);
        acc = _v36;
        const _v37: any = rt.ref("global", 0, 100);
        acc = _v37;
        const _v38: any = 204;
        acc = _v38;
        const _v39: any = 9;
        acc = _v39;
        const _v40: any = await rt.call(204, "Format", [_v37, _v38, _v39], this);
        acc = _v40;
        return acc;
      },
      // SCI bank.sc: localproc_1
      "localproc_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        const _v1: any = 0;
        acc = _v1;
        const _v2: any = (args[0] ?? 0);
        acc = _v2;
        const _v3: any = rt.global(302);
        acc = _v3;
        const _v4: any = await rt.send(_v3, "bankBalHi", []);
        acc = _v4;
        const _v5: any = rt.global(302);
        acc = _v5;
        const _v6: any = await rt.send(_v5, "bankBal", []);
        acc = _v6;
        const _v7: any = await rt.call(0, "proc0_12", [_v1, _v2, _v4, _v6], this);
        acc = _v7;
        const _v8: any = rt.global(454);
        acc = _v8;
        const _v9: any = rt.global(455);
        acc = _v9;
        const _v10: any = rt.global(302);
        acc = _v10;
        const _v11: any = await rt.send(_v10, "bankBalHi", [_v8]);
        acc = _v11;
        const _v12: any = await rt.send(_v10, "bankBal", [_v9]);
        acc = _v12;
        return acc;
      },
    },
    exports: {"0": "bank"},
  });
}
