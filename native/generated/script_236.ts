// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/select3.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 5f49d3cdfd0135dd59199f375669a9794e5bd9a2013347c2f6d886b5e1cab2dd
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(236, {
    name: "select3",
    uses: [0, 255, 891, 999],
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
        name: "select3",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI select3.sc: select3.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = rt.global(413);
            acc = _v1;
            const _v2: any = rt.set(this, "prevTalker", _v1);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = rt.setGlobal(413, _v3);
            acc = _v4;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = await rt.call(0, "proc0_17", [_v5], this);
            acc = _v6;
            const _v7: any = rt.object(236, "dialogKeyMouse");
            acc = _v7;
            const _v8: any = rt.set(this, "keyMouseList", _v7);
            acc = _v8;
            const _v9: any = rt.global(502);
            acc = _v9;
            const _v10: any = rt.set(this, "prevDialog", _v9);
            acc = _v10;
            const _v11: any = this;
            acc = _v11;
            const _v12: any = rt.setGlobal(502, _v11);
            acc = _v12;
            let _v13: any = acc;
            const _v14: any = (args[1] ?? 0);
            acc = _v14;
            const _v15: any = 2;
            acc = _v15;
            const _v16: any = rt.op("==", ...[_v14, _v15]);
            acc = _v16;
            _v13 = _v16;
            if (rt.truth(_v16)) {
              const _v17: any = (args[0] ?? 0);
              acc = _v17;
              _v13 = _v17;
            } else {
              const _v18: any = 0;
              acc = _v18;
              _v13 = _v18;
            }
            acc = _v13;
            const _v19: any = rt.set(this, "client", _v13);
            acc = _v19;
            const _v20: any = (args[1] ?? 0);
            acc = _v20;
            const _v21: any = rt.setLocal(236, 0, _v20);
            acc = _v21;
            let _v22: any = acc;
            const _v23: any = rt.global(374);
            acc = _v23;
            const _v24: any = rt.global(507);
            acc = _v24;
            const _v25: any = 1;
            acc = _v25;
            const _v26: any = rt.op("+", ...[_v24, _v25]);
            acc = _v26;
            const _v27: any = rt.op("==", ...[_v23, _v26]);
            acc = _v27;
            _v22 = _v27;
            if (rt.truth(_v27)) {
              const _v28: any = 11;
              acc = _v28;
              const _v29: any = rt.object(236, "exButton");
              acc = _v29;
              const _v30: any = await rt.send(_v29, "loop", [_v28]);
              acc = _v30;
              _v22 = _v30;
            }
            acc = _v22;
            let _v31: any = acc;
            const _v32: any = rt.local(236, 0);
            acc = _v32;
            const _v33: any = 0;
            acc = _v33;
            const _v34: any = rt.op("!=", ...[_v32, _v33]);
            acc = _v34;
            _v31 = _v34;
            if (rt.truth(_v34)) {
              const _v35: any = 0;
              acc = _v35;
              const _v36: any = rt.object(236, "wealthStar");
              acc = _v36;
              const _v37: any = await rt.send(_v36, "enable", [_v35]);
              acc = _v37;
              _v31 = _v37;
              const _v38: any = 0;
              acc = _v38;
              const _v39: any = rt.object(236, "happyStar");
              acc = _v39;
              const _v40: any = await rt.send(_v39, "enable", [_v38]);
              acc = _v40;
              _v31 = _v40;
              const _v41: any = 0;
              acc = _v41;
              const _v42: any = rt.object(236, "educationStar");
              acc = _v42;
              const _v43: any = await rt.send(_v42, "enable", [_v41]);
              acc = _v43;
              _v31 = _v43;
              const _v44: any = 0;
              acc = _v44;
              const _v45: any = rt.object(236, "careerStar");
              acc = _v45;
              const _v46: any = await rt.send(_v45, "enable", [_v44]);
              acc = _v46;
              _v31 = _v46;
              const _v47: any = 0;
              acc = _v47;
              const _v48: any = rt.object(236, "exButton");
              acc = _v48;
              const _v49: any = await rt.send(_v48, "loop", [_v47]);
              acc = _v49;
              _v31 = _v49;
            }
            acc = _v31;
            const _v50: any = await rt.call(0, "proc0_7", [], this);
            acc = _v50;
            let _v51: any = acc;
            const _v52: any = (args[1] ?? 0);
            acc = _v52;
            const _v53: any = 2;
            acc = _v53;
            const _v54: any = rt.op("!=", ...[_v52, _v53]);
            acc = _v54;
            _v51 = _v54;
            if (rt.truth(_v54)) {
              const _v55: any = rt.global(507);
              acc = _v55;
              const _v56: any = rt.object(236, "playerNumber1");
              acc = _v56;
              const _v57: any = await rt.send(_v56, "cel", [_v55]);
              acc = _v57;
              _v51 = _v57;
              const _v58: any = rt.global(507);
              acc = _v58;
              const _v59: any = rt.object(236, "playerNumber2");
              acc = _v59;
              const _v60: any = await rt.send(_v59, "cel", [_v58]);
              acc = _v60;
              _v51 = _v60;
            } else {
              let _v61: any = acc;
              const _v62: any = rt.global(302);
              acc = _v62;
              const _v63: any = await rt.send(_v62, "playingAsJones", []);
              acc = _v63;
              _v61 = _v63;
              if (rt.truth(_v63)) {
                const _v64: any = 4;
                acc = _v64;
                _v61 = _v64;
              } else {
                const _v65: any = rt.global(302);
                acc = _v65;
                const _v66: any = 1;
                acc = _v66;
                const _v67: any = 2;
                acc = _v67;
                const _v68: any = await rt.call(236, "ScriptID", [_v66, _v67], this);
                acc = _v68;
                const _v69: any = await rt.send(_v68, "indexOf", [_v65]);
                acc = _v69;
                _v61 = _v69;
              }
              acc = _v61;
              const _v70: any = rt.object(236, "playerNumber1");
              acc = _v70;
              const _v71: any = await rt.send(_v70, "cel", [_v61]);
              acc = _v71;
              _v51 = _v71;
              let _v72: any = acc;
              const _v73: any = rt.global(302);
              acc = _v73;
              const _v74: any = await rt.send(_v73, "playingAsJones", []);
              acc = _v74;
              _v72 = _v74;
              if (rt.truth(_v74)) {
                const _v75: any = 4;
                acc = _v75;
                _v72 = _v75;
              } else {
                const _v76: any = rt.global(302);
                acc = _v76;
                const _v77: any = 1;
                acc = _v77;
                const _v78: any = 2;
                acc = _v78;
                const _v79: any = await rt.call(236, "ScriptID", [_v77, _v78], this);
                acc = _v79;
                const _v80: any = await rt.send(_v79, "indexOf", [_v76]);
                acc = _v80;
                _v72 = _v80;
              }
              acc = _v72;
              const _v81: any = rt.object(236, "playerNumber2");
              acc = _v81;
              const _v82: any = await rt.send(_v81, "cel", [_v72]);
              acc = _v82;
              _v51 = _v82;
            }
            acc = _v51;
            let _v83: any = acc;
            const _v84: any = (args[1] ?? 0);
            acc = _v84;
            const _v85: any = 2;
            acc = _v85;
            const _v86: any = rt.op("==", ...[_v84, _v85]);
            acc = _v86;
            _v83 = _v86;
            if (rt.truth(_v86)) {
              const _v87: any = 0;
              acc = _v87;
              const _v88: any = 501;
              acc = _v88;
              const _v89: any = rt.object(236, "windowTitle");
              acc = _v89;
              const _v90: any = await rt.send(_v89, "cel", [_v87]);
              acc = _v90;
              const _v91: any = await rt.send(_v89, "view", [_v88]);
              acc = _v91;
              _v83 = _v91;
            } else {
              const _v92: any = (args[1] ?? 0);
              acc = _v92;
              const _v93: any = 506;
              acc = _v93;
              const _v94: any = rt.object(236, "windowTitle");
              acc = _v94;
              const _v95: any = await rt.send(_v94, "cel", [_v92]);
              acc = _v95;
              const _v96: any = await rt.send(_v94, "view", [_v93]);
              acc = _v96;
              _v83 = _v96;
            }
            acc = _v83;
            let _v97: any = acc;
            const _v98: any = (args[1] ?? 0);
            acc = _v98;
            const _v99: any = 0;
            acc = _v99;
            const _v100: any = rt.op("==", ...[_v98, _v99]);
            acc = _v100;
            _v97 = _v100;
            if (rt.truth(_v100)) {
              let _v101: any = acc;
              const _v102: any = rt.global(507);
              acc = _v102;
              _v101 = _v102;
              if (rt.truth(_v102)) {
                const _v103: any = rt.global(507);
                acc = _v103;
                const _v104: any = 1;
                acc = _v104;
                const _v105: any = rt.op("-", ...[_v103, _v104]);
                acc = _v105;
                const _v106: any = 1;
                acc = _v106;
                const _v107: any = 2;
                acc = _v107;
                const _v108: any = await rt.call(236, "ScriptID", [_v106, _v107], this);
                acc = _v108;
                const _v109: any = await rt.send(_v108, "at", [_v105]);
                acc = _v109;
                const _v110: any = await rt.send(_v109, "monGoal", []);
                acc = _v110;
                const _v111: any = rt.object(236, "wealthStar");
                acc = _v111;
                const _v112: any = await rt.send(_v111, "updStar", [_v110]);
                acc = _v112;
                _v101 = _v112;
                const _v113: any = rt.global(507);
                acc = _v113;
                const _v114: any = 1;
                acc = _v114;
                const _v115: any = rt.op("-", ...[_v113, _v114]);
                acc = _v115;
                const _v116: any = 1;
                acc = _v116;
                const _v117: any = 2;
                acc = _v117;
                const _v118: any = await rt.call(236, "ScriptID", [_v116, _v117], this);
                acc = _v118;
                const _v119: any = await rt.send(_v118, "at", [_v115]);
                acc = _v119;
                const _v120: any = await rt.send(_v119, "hapGoal", []);
                acc = _v120;
                const _v121: any = rt.object(236, "happyStar");
                acc = _v121;
                const _v122: any = await rt.send(_v121, "updStar", [_v120]);
                acc = _v122;
                _v101 = _v122;
                const _v123: any = rt.global(507);
                acc = _v123;
                const _v124: any = 1;
                acc = _v124;
                const _v125: any = rt.op("-", ...[_v123, _v124]);
                acc = _v125;
                const _v126: any = 1;
                acc = _v126;
                const _v127: any = 2;
                acc = _v127;
                const _v128: any = await rt.call(236, "ScriptID", [_v126, _v127], this);
                acc = _v128;
                const _v129: any = await rt.send(_v128, "at", [_v125]);
                acc = _v129;
                const _v130: any = await rt.send(_v129, "eduGoal", []);
                acc = _v130;
                const _v131: any = rt.object(236, "educationStar");
                acc = _v131;
                const _v132: any = await rt.send(_v131, "updStar", [_v130]);
                acc = _v132;
                _v101 = _v132;
                const _v133: any = rt.global(507);
                acc = _v133;
                const _v134: any = 1;
                acc = _v134;
                const _v135: any = rt.op("-", ...[_v133, _v134]);
                acc = _v135;
                const _v136: any = 1;
                acc = _v136;
                const _v137: any = 2;
                acc = _v137;
                const _v138: any = await rt.call(236, "ScriptID", [_v136, _v137], this);
                acc = _v138;
                const _v139: any = await rt.send(_v138, "at", [_v135]);
                acc = _v139;
                const _v140: any = await rt.send(_v139, "carGoal", []);
                acc = _v140;
                const _v141: any = rt.object(236, "careerStar");
                acc = _v141;
                const _v142: any = await rt.send(_v141, "updStar", [_v140]);
                acc = _v142;
                _v101 = _v142;
              } else {
                const _v143: any = 50;
                acc = _v143;
                const _v144: any = rt.object(236, "wealthStar");
                acc = _v144;
                const _v145: any = await rt.send(_v144, "updStar", [_v143]);
                acc = _v145;
                _v101 = _v145;
                const _v146: any = 50;
                acc = _v146;
                const _v147: any = rt.object(236, "happyStar");
                acc = _v147;
                const _v148: any = await rt.send(_v147, "updStar", [_v146]);
                acc = _v148;
                _v101 = _v148;
                const _v149: any = 50;
                acc = _v149;
                const _v150: any = rt.object(236, "educationStar");
                acc = _v150;
                const _v151: any = await rt.send(_v150, "updStar", [_v149]);
                acc = _v151;
                _v101 = _v151;
                const _v152: any = 50;
                acc = _v152;
                const _v153: any = rt.object(236, "careerStar");
                acc = _v153;
                const _v154: any = await rt.send(_v153, "updStar", [_v152]);
                acc = _v154;
                _v101 = _v154;
              }
              acc = _v101;
              _v97 = _v101;
            } else {
              const _v155: any = rt.global(302);
              acc = _v155;
              const _v156: any = 1;
              acc = _v156;
              const _v157: any = 2;
              acc = _v157;
              const _v158: any = await rt.call(236, "ScriptID", [_v156, _v157], this);
              acc = _v158;
              const _v159: any = await rt.send(_v158, "indexOf", [_v155]);
              acc = _v159;
              const _v160: any = rt.setGlobal(507, _v159);
              acc = _v160;
              _v97 = _v160;
              const _v161: any = rt.global(302);
              acc = _v161;
              const _v162: any = await rt.send(_v161, "monGoal", []);
              acc = _v162;
              const _v163: any = rt.object(236, "wealthStar");
              acc = _v163;
              const _v164: any = await rt.send(_v163, "updStar", [_v162]);
              acc = _v164;
              _v97 = _v164;
              const _v165: any = rt.global(302);
              acc = _v165;
              const _v166: any = await rt.send(_v165, "hapGoal", []);
              acc = _v166;
              const _v167: any = rt.object(236, "happyStar");
              acc = _v167;
              const _v168: any = await rt.send(_v167, "updStar", [_v166]);
              acc = _v168;
              _v97 = _v168;
              const _v169: any = rt.global(302);
              acc = _v169;
              const _v170: any = await rt.send(_v169, "eduGoal", []);
              acc = _v170;
              const _v171: any = rt.object(236, "educationStar");
              acc = _v171;
              const _v172: any = await rt.send(_v171, "updStar", [_v170]);
              acc = _v172;
              _v97 = _v172;
              const _v173: any = rt.global(302);
              acc = _v173;
              const _v174: any = await rt.send(_v173, "carGoal", []);
              acc = _v174;
              const _v175: any = rt.object(236, "careerStar");
              acc = _v175;
              const _v176: any = await rt.send(_v175, "updStar", [_v174]);
              acc = _v176;
              _v97 = _v176;
            }
            acc = _v97;
            const _v177: any = rt.global(59);
            acc = _v177;
            const _v178: any = rt.object(236, "background");
            acc = _v178;
            const _v179: any = rt.object(236, "windowTitle");
            acc = _v179;
            const _v180: any = rt.object(236, "playerNumber1");
            acc = _v180;
            const _v181: any = rt.object(236, "playerNumber2");
            acc = _v181;
            const _v182: any = rt.object(236, "exButton");
            acc = _v182;
            const _v183: any = rt.object(236, "wealthStar");
            acc = _v183;
            const _v184: any = rt.object(236, "happyStar");
            acc = _v184;
            const _v185: any = rt.object(236, "educationStar");
            acc = _v185;
            const _v186: any = rt.object(236, "careerStar");
            acc = _v186;
            const _v187: any = rt.object(236, "goalPoints");
            acc = _v187;
            const _v188: any = rt.object(236, "questionButton");
            acc = _v188;
            const _v189: any = this;
            acc = _v189;
            const _v190: any = await rt.send(_v189, "window", [_v177]);
            acc = _v190;
            const _v191: any = await rt.send(_v189, "add", [_v178, _v179, _v180, _v181, _v182, _v183, _v184, _v185, _v186, _v187, _v188]);
            acc = _v191;
            let _v192: any = acc;
            const _v193: any = (args[1] ?? 0);
            acc = _v193;
            const _v194: any = 2;
            acc = _v194;
            const _v195: any = rt.op("==", ...[_v193, _v194]);
            acc = _v195;
            _v192 = _v195;
            if (rt.truth(_v195)) {
              const _v196: any = rt.object(236, "currentWealth");
              acc = _v196;
              const _v197: any = rt.object(236, "currentHappy");
              acc = _v197;
              const _v198: any = rt.object(236, "currentEducation");
              acc = _v198;
              const _v199: any = rt.object(236, "currentCareer");
              acc = _v199;
              const _v200: any = this;
              acc = _v200;
              const _v201: any = await rt.send(_v200, "add", [_v196, _v197, _v198, _v199]);
              acc = _v201;
              _v192 = _v201;
            }
            acc = _v192;
            const _v202: any = 102;
            acc = _v202;
            const _v203: any = 1;
            acc = _v203;
            const _v204: any = 153;
            acc = _v204;
            const _v205: any = 69;
            acc = _v205;
            const _v206: any = 44;
            acc = _v206;
            const _v207: any = 0;
            acc = _v207;
            const _v208: any = 15;
            acc = _v208;
            const _v209: any = this;
            acc = _v209;
            const _v210: any = await rt.send(_v209, "eachElementDo", [_v202, _v203]);
            acc = _v210;
            const _v211: any = await rt.send(_v209, "eachElementDo", [_v204]);
            acc = _v211;
            const _v212: any = await rt.send(_v209, "moveTo", [_v205, _v206]);
            acc = _v212;
            const _v213: any = await rt.send(_v209, "open", [_v207, _v208]);
            acc = _v213;
            const _v214: any = rt.object(891, "KeyMouse");
            acc = _v214;
            const _v215: any = await rt.send(_v214, "curItem", []);
            acc = _v215;
            const _v216: any = (temps[1] = _v215);
            acc = _v216;
            const _v217: any = rt.get(this, "keyMouseList");
            acc = _v217;
            const _v218: any = rt.object(891, "KeyMouse");
            acc = _v218;
            const _v219: any = await rt.send(_v218, "setList", [_v217]);
            acc = _v219;
            const _v220: any = this;
            acc = _v220;
            const _v221: any = rt.get(this, "keyMouseList");
            acc = _v221;
            const _v222: any = rt.object(236, "exButton");
            acc = _v222;
            const _v223: any = await rt.call(0, "proc0_9", [_v220, _v221, _v222], this);
            acc = _v223;
            const _v224: any = 0;
            acc = _v224;
            const _v225: any = 0;
            acc = _v225;
            const _v226: any = this;
            acc = _v226;
            const _v227: any = await rt.send(_v226, "doit", [_v224, _v225]);
            acc = _v227;
            const _v228: any = (temps[0] = _v227);
            acc = _v228;
            let _v229: any = acc;
            const _v230: any = (temps[0] ?? 0);
            acc = _v230;
            const _v231: any = await rt.call(236, "IsObject", [_v230], this);
            acc = _v231;
            _v229 = _v231;
            if (rt.truth(_v231)) {
              let _v232: any = acc;
              const _v233: any = (temps[0] ?? 0);
              acc = _v233;
              const _v234: any = this;
              acc = _v234;
              const _v235: any = await rt.send(_v234, "contains", [_v233]);
              acc = _v235;
              _v232 = _v235;
              if (rt.truth(_v235)) {
                const _v236: any = 0;
                acc = _v236;
                const _v237: any = (temps[0] = _v236);
                acc = _v237;
                _v232 = _v237;
              }
              acc = _v232;
              _v229 = _v232;
            } else {
              const _v238: any = 1;
              acc = _v238;
              const _v239: any = (temps[0] = _v238);
              acc = _v239;
              _v229 = _v239;
            }
            acc = _v229;
            let _v240: any = acc;
            const _v241: any = rt.get(this, "prevDialog");
            acc = _v241;
            _v240 = _v241;
            if (rt.truth(_v241)) {
              const _v242: any = rt.get(this, "prevDialog");
              acc = _v242;
              const _v243: any = await rt.send(_v242, "keyMouseList", []);
              acc = _v243;
              _v240 = _v243;
            } else {
              const _v244: any = rt.global(432);
              acc = _v244;
              _v240 = _v244;
            }
            acc = _v240;
            const _v245: any = rt.object(891, "KeyMouse");
            acc = _v245;
            const _v246: any = await rt.send(_v245, "setList", [_v240]);
            acc = _v246;
            const _v247: any = (temps[1] ?? 0);
            acc = _v247;
            const _v248: any = rt.object(891, "KeyMouse");
            acc = _v248;
            const _v249: any = await rt.send(_v248, "curItem", [_v247]);
            acc = _v249;
            let _v250: any = acc;
            const _v251: any = rt.global(447);
            acc = _v251;
            _v250 = _v251;
            if (rt.truth(_v251)) {
              const _v252: any = (temps[1] ?? 0);
              acc = _v252;
              const _v253: any = rt.object(891, "KeyMouse");
              acc = _v253;
              const _v254: any = await rt.send(_v253, "setCursor", [_v252]);
              acc = _v254;
              _v250 = _v254;
            }
            acc = _v250;
            const _v255: any = rt.get(this, "keyMouseList");
            acc = _v255;
            const _v256: any = await rt.send(_v255, "release", []);
            acc = _v256;
            const _v257: any = await rt.send(_v255, "dispose", []);
            acc = _v257;
            const _v258: any = rt.get(this, "prevDialog");
            acc = _v258;
            const _v259: any = rt.setGlobal(502, _v258);
            acc = _v259;
            const _v260: any = this;
            acc = _v260;
            const _v261: any = 291;
            acc = _v261;
            const _v262: any = await rt.call(0, "proc0_15", [_v260, _v261], this);
            acc = _v262;
            const _v263: any = this;
            acc = _v263;
            const _v264: any = await rt.send(_v263, "dispose", []);
            acc = _v264;
            const _v265: any = 0;
            acc = _v265;
            const _v266: any = await rt.call(236, "SetPort", [_v265], this);
            acc = _v266;
            const _v267: any = 11;
            acc = _v267;
            const _v268: any = rt.get(this, "nsTop");
            acc = _v268;
            const _v269: any = 1;
            acc = _v269;
            const _v270: any = rt.op("+", ...[_v268, _v269]);
            acc = _v270;
            const _v271: any = rt.get(this, "nsLeft");
            acc = _v271;
            const _v272: any = rt.get(this, "nsBottom");
            acc = _v272;
            const _v273: any = 1;
            acc = _v273;
            const _v274: any = rt.op("-", ...[_v272, _v273]);
            acc = _v274;
            const _v275: any = rt.get(this, "nsRight");
            acc = _v275;
            const _v276: any = 3;
            acc = _v276;
            const _v277: any = rt.op("-", ...[_v275, _v276]);
            acc = _v277;
            const _v278: any = 2;
            acc = _v278;
            const _v279: any = 0;
            acc = _v279;
            const _v280: any = 0;
            acc = _v280;
            const _v281: any = await rt.call(236, "Graph", [_v267, _v270, _v271, _v274, _v277, _v278, _v279, _v280], this);
            acc = _v281;
            const _v282: any = rt.get(this, "prevTalker");
            acc = _v282;
            const _v283: any = rt.setGlobal(413, _v282);
            acc = _v283;
            const _v284: any = (temps[0] ?? 0);
            acc = _v284;
            const _acc285: any = acc;
            const _v286: any = 236;
            acc = _v286;
            const _args287: any[] = [_v286];
            await rt.call(236, "DisposeScript", _args287, this);
            const _v288: any = _args287.length === 2 ? _args287[1] : _acc285;
            acc = _v288;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 501, "loop": 1, "priority": 8},
        methods: {
        },
      },
      {
        name: "windowTitle",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsLeft": 24, "view": 501, "priority": 9},
        methods: {
        },
      },
      {
        name: "playerNumber1",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"loop": 3, "priority": 15},
        methods: {
        },
      },
      {
        name: "playerNumber2",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsLeft": 158, "loop": 3, "priority": 15},
        methods: {
        },
      },
      {
        name: "exButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 143, "view": 250, "loop": 8, "priority": 15},
        methods: {
        },
      },
      {
        name: "StarSlider",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: true,
        properties: {"state": 65, "view": 501, "loop": 2, "priority": 10, "goalValue": 0},
        methods: {
          // SCI select3.sc: StarSlider.select
          "select": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI select3.sc: StarSlider.hilite
          "hilite": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            return _v1;
            return acc;
          },
          // SCI select3.sc: StarSlider.track
          "track": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
            const _v1: any = rt.get(this, "nsTop");
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = 999;
            acc = _v3;
            const _v4: any = (temps[1] = _v3);
            acc = _v4;
            _loop5: for (;;) {
              const _v7: any = (args[0] ?? 0);
              acc = _v7;
              const _v8: any = await rt.call(255, "StillDown", [_v7], this);
              acc = _v8;
              if (!rt.truth(_v8)) break _loop5;
              _continue6: {
                let _v9: any = acc;
                const _v10: any = rt.get(this, "client");
                acc = _v10;
                _v9 = _v10;
                if (rt.truth(_v10)) {
                  const _v11: any = rt.get(this, "client");
                  acc = _v11;
                  const _v12: any = await rt.send(_v11, "window", []);
                  acc = _v12;
                  const _v13: any = await rt.send(_v12, "window", []);
                  acc = _v13;
                  const _v14: any = (args[0] ?? 0);
                  acc = _v14;
                  const _v15: any = await rt.send(_v14, "localize", [_v13]);
                  acc = _v15;
                  _v9 = _v15;
                }
                acc = _v9;
                let _v16: any = acc;
                _branch17: {
                  const _v18: any = rt.get(this, "nsRight");
                  acc = _v18;
                  const _v19: any = 5;
                  acc = _v19;
                  const _v20: any = rt.op("+", ...[_v18, _v19]);
                  acc = _v20;
                  let _v21: any = _v20;
                  let _v22: any = 1;
                  if (rt.truth(_v22)) {
                    const _v23: any = (args[0] ?? 0);
                    acc = _v23;
                    const _v24: any = await rt.send(_v23, "x", []);
                    acc = _v24;
                    _v22 = rt.op(">=", _v21, _v24);
                    _v21 = _v24;
                  }
                  if (rt.truth(_v22)) {
                    const _v25: any = rt.get(this, "nsLeft");
                    acc = _v25;
                    const _v26: any = 5;
                    acc = _v26;
                    const _v27: any = rt.op("-", ...[_v25, _v26]);
                    acc = _v27;
                    _v22 = rt.op(">=", _v21, _v27);
                    _v21 = _v27;
                  }
                  acc = _v22;
                  const _v28: any = rt.op("not", ...[_v22]);
                  acc = _v28;
                  _v16 = _v28;
                  acc = _v16;
                  if (rt.truth(_v16)) {
                    break _loop5;
                    _v16 = acc;
                    break _branch17;
                  }
                  const _v29: any = (temps[1] ?? 0);
                  acc = _v29;
                  const _v30: any = (args[0] ?? 0);
                  acc = _v30;
                  const _v31: any = await rt.send(_v30, "y", []);
                  acc = _v31;
                  const _v32: any = 4;
                  acc = _v32;
                  const _v33: any = rt.op("-", ...[_v31, _v32]);
                  acc = _v33;
                  const _v34: any = rt.op("!=", ...[_v29, _v33]);
                  acc = _v34;
                  _v16 = _v34;
                  acc = _v16;
                  if (rt.truth(_v16)) {
                    let _v35: any = acc;
                    _branch36: {
                      const _v37: any = (args[0] ?? 0);
                      acc = _v37;
                      const _v38: any = await rt.send(_v37, "y", []);
                      acc = _v38;
                      const _v39: any = 4;
                      acc = _v39;
                      const _v40: any = rt.op("-", ...[_v38, _v39]);
                      acc = _v40;
                      const _v41: any = (temps[1] = _v40);
                      acc = _v41;
                      const _v42: any = 82;
                      acc = _v42;
                      const _v43: any = rt.op(">", ...[_v41, _v42]);
                      acc = _v43;
                      _v35 = _v43;
                      acc = _v35;
                      if (rt.truth(_v35)) {
                        const _v44: any = 82;
                        acc = _v44;
                        _v35 = _v44;
                        break _branch36;
                      }
                      const _v45: any = (temps[1] ?? 0);
                      acc = _v45;
                      const _v46: any = 43;
                      acc = _v46;
                      const _v47: any = rt.op("<", ...[_v45, _v46]);
                      acc = _v47;
                      _v35 = _v47;
                      acc = _v35;
                      if (rt.truth(_v35)) {
                        const _v48: any = 43;
                        acc = _v48;
                        _v35 = _v48;
                        break _branch36;
                      }
                      const _v49: any = (temps[1] ?? 0);
                      acc = _v49;
                      _v35 = _v49;
                      break _branch36;
                    }
                    acc = _v35;
                    const _v50: any = (temps[0] = _v35);
                    acc = _v50;
                    _v16 = _v50;
                    const _v51: any = 82;
                    acc = _v51;
                    const _v52: any = (temps[0] ?? 0);
                    acc = _v52;
                    const _v53: any = rt.op("-", ...[_v51, _v52]);
                    acc = _v53;
                    const _v54: any = 4;
                    acc = _v54;
                    const _v55: any = rt.op("/", ...[_v53, _v54]);
                    acc = _v55;
                    const _v56: any = 1;
                    acc = _v56;
                    const _v57: any = rt.op("+", ...[_v55, _v56]);
                    acc = _v57;
                    const _v58: any = 10;
                    acc = _v58;
                    const _v59: any = rt.op("*", ...[_v57, _v58]);
                    acc = _v59;
                    const _v60: any = (temps[3] = _v59);
                    acc = _v60;
                    _v16 = _v60;
                    const _v61: any = (temps[3] ?? 0);
                    acc = _v61;
                    const _v62: any = this;
                    acc = _v62;
                    const _v63: any = await rt.send(_v62, "erase", []);
                    acc = _v63;
                    const _v64: any = await rt.send(_v62, "updStar", [_v61]);
                    acc = _v64;
                    const _v65: any = await rt.send(_v62, "draw", []);
                    acc = _v65;
                    _v16 = _v65;
                    const _v66: any = rt.object(236, "goalPoints");
                    acc = _v66;
                    const _v67: any = await rt.send(_v66, "draw", []);
                    acc = _v67;
                    _v16 = _v67;
                    break _branch17;
                  }
                }
                acc = _v16;
              }
            }
            const _v68: any = 0;
            acc = _v68;
            return _v68;
            return acc;
          },
          // SCI select3.sc: StarSlider.updStar
          "updStar": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.set(this, "goalValue", _v1);
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = rt.op("-", ...[_v2, _v3]);
            acc = _v4;
            const _v5: any = 10;
            acc = _v5;
            const _v6: any = rt.op("/", ...[_v4, _v5]);
            acc = _v6;
            const _v7: any = rt.set(this, "cel", _v6);
            acc = _v7;
            return acc;
          },
          // SCI select3.sc: StarSlider.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = -1;
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            _branch4: {
              const _v5: any = rt.get(this, "client");
              acc = _v5;
              const _v6: any = await rt.send(_v5, "theItem", []);
              acc = _v6;
              const _v7: any = this;
              acc = _v7;
              const _v8: any = rt.op("!=", ...[_v6, _v7]);
              acc = _v8;
              _v3 = _v8;
              acc = _v3;
              if (rt.truth(_v3)) {
                const _v9: any = 0;
                acc = _v9;
                _v3 = _v9;
                break _branch4;
              }
              const _v10: any = (args[0] ?? 0);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "type", []);
              acc = _v11;
              const _v12: any = 64;
              acc = _v12;
              const _v13: any = rt.op("==", ...[_v11, _v12]);
              acc = _v13;
              _v3 = _v13;
              acc = _v3;
              if (rt.truth(_v3)) {
                let _v14: any = acc;
                _branch15: {
                  const _v16: any = (args[0] ?? 0);
                  acc = _v16;
                  const _v17: any = await rt.send(_v16, "message", []);
                  acc = _v17;
                  const _v18: any = 1;
                  acc = _v18;
                  const _v19: any = rt.op("==", ...[_v17, _v18]);
                  acc = _v19;
                  _v14 = _v19;
                  acc = _v14;
                  if (rt.truth(_v14)) {
                    let _v20: any = acc;
                    const _v21: any = rt.get(this, "cel");
                    acc = _v21;
                    const _v22: any = 1;
                    acc = _v22;
                    const _v23: any = rt.op("+", ...[_v21, _v22]);
                    acc = _v23;
                    const _v24: any = (temps[0] = _v23);
                    acc = _v24;
                    const _v25: any = 9;
                    acc = _v25;
                    const _v26: any = rt.op(">", ...[_v24, _v25]);
                    acc = _v26;
                    _v20 = _v26;
                    if (rt.truth(_v26)) {
                      const _v27: any = 9;
                      acc = _v27;
                      const _v28: any = (temps[0] = _v27);
                      acc = _v28;
                      _v20 = _v28;
                    }
                    acc = _v20;
                    _v14 = _v20;
                    break _branch15;
                  }
                  let _v29: any = 1;
                  if (rt.truth(_v29)) {
                    const _v30: any = (args[0] ?? 0);
                    acc = _v30;
                    const _v31: any = await rt.send(_v30, "message", []);
                    acc = _v31;
                    const _v32: any = 5;
                    acc = _v32;
                    const _v33: any = rt.op("==", ...[_v31, _v32]);
                    acc = _v33;
                    _v29 = _v33;
                  }
                  if (rt.truth(_v29)) {
                    const _v34: any = rt.get(this, "cel");
                    acc = _v34;
                    const _v35: any = 1;
                    acc = _v35;
                    const _v36: any = rt.op("-", ...[_v34, _v35]);
                    acc = _v36;
                    const _v37: any = (temps[0] = _v36);
                    acc = _v37;
                    const _v38: any = 0;
                    acc = _v38;
                    const _v39: any = rt.op("<", ...[_v37, _v38]);
                    acc = _v39;
                    _v29 = _v39;
                  }
                  acc = _v29;
                  _v14 = _v29;
                  acc = _v14;
                  if (rt.truth(_v14)) {
                    const _v40: any = 0;
                    acc = _v40;
                    const _v41: any = (temps[0] = _v40);
                    acc = _v41;
                    _v14 = _v41;
                    break _branch15;
                  }
                }
                acc = _v14;
                _v3 = _v14;
                break _branch4;
              }
            }
            acc = _v3;
            let _v42: any = acc;
            const _v43: any = (temps[0] ?? 0);
            acc = _v43;
            const _v44: any = -1;
            acc = _v44;
            const _v45: any = rt.op("!=", ...[_v43, _v44]);
            acc = _v45;
            _v42 = _v45;
            if (rt.truth(_v45)) {
              const _v46: any = (temps[0] ?? 0);
              acc = _v46;
              const _v47: any = 1;
              acc = _v47;
              const _v48: any = rt.op("+", ...[_v46, _v47]);
              acc = _v48;
              const _v49: any = 10;
              acc = _v49;
              const _v50: any = rt.op("*", ...[_v48, _v49]);
              acc = _v50;
              const _v51: any = (temps[1] = _v50);
              acc = _v51;
              _v42 = _v51;
              const _v52: any = (temps[1] ?? 0);
              acc = _v52;
              const _v53: any = this;
              acc = _v53;
              const _v54: any = await rt.send(_v53, "erase", []);
              acc = _v54;
              const _v55: any = await rt.send(_v53, "updStar", [_v52]);
              acc = _v55;
              const _v56: any = await rt.send(_v53, "draw", []);
              acc = _v56;
              _v42 = _v56;
              const _v57: any = rt.object(236, "goalPoints");
              acc = _v57;
              const _v58: any = await rt.send(_v57, "draw", []);
              acc = _v58;
              _v42 = _v58;
              const _v59: any = 1;
              acc = _v59;
              const _v60: any = (args[0] ?? 0);
              acc = _v60;
              const _v61: any = await rt.send(_v60, "claimed", [_v59]);
              acc = _v61;
              _v42 = _v61;
              const _v62: any = this;
              acc = _v62;
              return _v62;
              _v42 = acc;
            } else {
              const _v63: any = (args[0] ?? 0);
              acc = _v63;
              const _v64: any = await rt.superSend(this, {"script": 236, "name": "StarSlider"}, "handleEvent", [_v63]);
              acc = _v64;
              _v42 = _v64;
              return acc;
              _v42 = acc;
            }
            acc = _v42;
            return acc;
          },
        },
      },
      {
        name: "wealthStar",
        className: "StarSlider",
        parent: {"script": 236, "name": "StarSlider"},
        isClass: false,
        properties: {"nsTop": 38, "nsLeft": 32, "goalValue": 1},
        methods: {
          // SCI select3.sc: wealthStar.updStar
          "updStar": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.global(507);
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = 2;
            acc = _v4;
            const _v5: any = await rt.call(236, "ScriptID", [_v3, _v4], this);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "at", [_v2]);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "monGoal", [_v1]);
            acc = _v7;
            const _v8: any = (args[0] ?? 0);
            acc = _v8;
            const _v9: any = await rt.superSend(this, {"script": 236, "name": "wealthStar"}, "updStar", [_v8]);
            acc = _v9;
            return acc;
          },
        },
      },
      {
        name: "happyStar",
        className: "StarSlider",
        parent: {"script": 236, "name": "StarSlider"},
        isClass: false,
        properties: {"nsTop": 38, "nsLeft": 68, "goalValue": 1},
        methods: {
          // SCI select3.sc: happyStar.updStar
          "updStar": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.global(507);
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = 2;
            acc = _v4;
            const _v5: any = await rt.call(236, "ScriptID", [_v3, _v4], this);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "at", [_v2]);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "hapGoal", [_v1]);
            acc = _v7;
            const _v8: any = (args[0] ?? 0);
            acc = _v8;
            const _v9: any = await rt.superSend(this, {"script": 236, "name": "happyStar"}, "updStar", [_v8]);
            acc = _v9;
            return acc;
          },
        },
      },
      {
        name: "educationStar",
        className: "StarSlider",
        parent: {"script": 236, "name": "StarSlider"},
        isClass: false,
        properties: {"nsTop": 38, "nsLeft": 104, "goalValue": 1},
        methods: {
          // SCI select3.sc: educationStar.updStar
          "updStar": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.global(507);
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = 2;
            acc = _v4;
            const _v5: any = await rt.call(236, "ScriptID", [_v3, _v4], this);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "at", [_v2]);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "eduGoal", [_v1]);
            acc = _v7;
            const _v8: any = (args[0] ?? 0);
            acc = _v8;
            const _v9: any = await rt.superSend(this, {"script": 236, "name": "educationStar"}, "updStar", [_v8]);
            acc = _v9;
            return acc;
          },
        },
      },
      {
        name: "careerStar",
        className: "StarSlider",
        parent: {"script": 236, "name": "StarSlider"},
        isClass: false,
        properties: {"nsTop": 38, "nsLeft": 139, "goalValue": 1},
        methods: {
          // SCI select3.sc: careerStar.updStar
          "updStar": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.global(507);
            acc = _v2;
            const _v3: any = 1;
            acc = _v3;
            const _v4: any = 2;
            acc = _v4;
            const _v5: any = await rt.call(236, "ScriptID", [_v3, _v4], this);
            acc = _v5;
            const _v6: any = await rt.send(_v5, "at", [_v2]);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "carGoal", [_v1]);
            acc = _v7;
            const _v8: any = (args[0] ?? 0);
            acc = _v8;
            const _v9: any = await rt.superSend(this, {"script": 236, "name": "careerStar"}, "updStar", [_v8]);
            acc = _v9;
            return acc;
          },
        },
      },
      {
        name: "goalPoints",
        className: "DText",
        parent: {"script": 255, "name": "DText"},
        isClass: false,
        properties: {"nsTop": 29, "nsLeft": 31, "text": "Goal Points = ", "font": 0},
        methods: {
          // SCI select3.sc: goalPoints.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            const _v3: any = rt.object(236, "wealthStar");
            acc = _v3;
            const _v4: any = await rt.send(_v3, "goalValue", []);
            acc = _v4;
            const _v5: any = rt.object(236, "happyStar");
            acc = _v5;
            const _v6: any = await rt.send(_v5, "goalValue", []);
            acc = _v6;
            const _v7: any = rt.object(236, "educationStar");
            acc = _v7;
            const _v8: any = await rt.send(_v7, "goalValue", []);
            acc = _v8;
            const _v9: any = rt.object(236, "careerStar");
            acc = _v9;
            const _v10: any = await rt.send(_v9, "goalValue", []);
            acc = _v10;
            const _v11: any = rt.op("+", ...[_v4, _v6, _v8, _v10]);
            acc = _v11;
            const _v12: any = (temps[20] = _v11);
            acc = _v12;
            const _v13: any = rt.ref("array", temps, 0);
            acc = _v13;
            const _v14: any = 236;
            acc = _v14;
            const _v15: any = 0;
            acc = _v15;
            const _v16: any = rt.get(this, "text");
            acc = _v16;
            const _v17: any = (temps[20] ?? 0);
            acc = _v17;
            const _v18: any = await rt.call(236, "Format", [_v13, _v14, _v15, _v16, _v17], this);
            acc = _v18;
            const _v19: any = 105;
            acc = _v19;
            const _v20: any = rt.get(this, "font");
            acc = _v20;
            const _v21: any = 100;
            acc = _v21;
            const _v22: any = rt.get(this, "nsLeft");
            acc = _v22;
            const _v23: any = rt.get(this, "nsTop");
            acc = _v23;
            const _v24: any = 102;
            acc = _v24;
            const _v25: any = 0;
            acc = _v25;
            const _v26: any = 103;
            acc = _v26;
            let _v27: any = acc;
            const _v28: any = rt.global(535);
            acc = _v28;
            _v27 = _v28;
            if (rt.truth(_v28)) {
              const _v29: any = 99;
              acc = _v29;
              _v27 = _v29;
            } else {
              const _v30: any = 9;
              acc = _v30;
              _v27 = _v30;
            }
            acc = _v27;
            const _v31: any = await rt.call(236, "Display", [_v18, _v19, _v20, _v21, _v22, _v23, _v24, _v25, _v26, _v27], this);
            acc = _v31;
            const _v32: any = this;
            acc = _v32;
            const _v33: any = await rt.send(_v32, "resetPort", []);
            acc = _v33;
            return acc;
          },
        },
      },
      {
        name: "currentWealth",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 43, "nsLeft": 30, "view": 501, "loop": 3, "priority": 15},
        methods: {
          // SCI select3.sc: currentWealth.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v1: any = rt.global(302);
            acc = _v1;
            const _v2: any = await rt.send(_v1, "monStat", []);
            acc = _v2;
            const _v3: any = (temps[0] = _v2);
            acc = _v3;
            const _v4: any = rt.global(302);
            acc = _v4;
            const _v5: any = await rt.send(_v4, "monGoal", []);
            acc = _v5;
            const _v6: any = (temps[1] = _v5);
            acc = _v6;
            let _v7: any = acc;
            const _v8: any = (temps[0] ?? 0);
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = rt.op("<", ...[_v8, _v9]);
            acc = _v10;
            _v7 = _v10;
            if (rt.truth(_v10)) {
              const _v11: any = 0;
              acc = _v11;
              const _v12: any = (temps[0] = _v11);
              acc = _v12;
              _v7 = _v12;
            }
            acc = _v7;
            let _v13: any = acc;
            const _v14: any = (temps[0] ?? 0);
            acc = _v14;
            const _v15: any = (temps[1] ?? 0);
            acc = _v15;
            const _v16: any = rt.op(">=", ...[_v14, _v15]);
            acc = _v16;
            _v13 = _v16;
            if (rt.truth(_v16)) {
              const _v17: any = (temps[1] ?? 0);
              acc = _v17;
              const _v18: any = (temps[0] = _v17);
              acc = _v18;
              _v13 = _v18;
              const _v19: any = 71;
              acc = _v19;
              const _v20: any = (temps[2] = _v19);
              acc = _v20;
              _v13 = _v20;
              const _v21: any = 1;
              acc = _v21;
              const _v22: any = rt.set(this, "cel", _v21);
              acc = _v22;
              _v13 = _v22;
            } else {
              const _v23: any = 80;
              acc = _v23;
              const _v24: any = (temps[2] = _v23);
              acc = _v24;
              _v13 = _v24;
              const _v25: any = 0;
              acc = _v25;
              const _v26: any = rt.set(this, "cel", _v25);
              acc = _v26;
              _v13 = _v26;
            }
            acc = _v13;
            let _v27: any = acc;
            const _v28: any = (temps[0] ?? 0);
            acc = _v28;
            const _v29: any = rt.set(this, "value", _v28);
            acc = _v29;
            const _v30: any = (temps[1] ?? 0);
            acc = _v30;
            const _v31: any = rt.op(">=", ...[_v29, _v30]);
            acc = _v31;
            _v27 = _v31;
            if (rt.truth(_v31)) {
              const _v32: any = (temps[2] ?? 0);
              acc = _v32;
              const _v33: any = rt.get(this, "value");
              acc = _v33;
              const _v34: any = 10;
              acc = _v34;
              const _v35: any = rt.op("-", ...[_v33, _v34]);
              acc = _v35;
              const _v36: any = 10;
              acc = _v36;
              const _v37: any = rt.op("/", ...[_v35, _v36]);
              acc = _v37;
              const _v38: any = 4;
              acc = _v38;
              const _v39: any = rt.op("*", ...[_v37, _v38]);
              acc = _v39;
              const _v40: any = rt.op("-", ...[_v32, _v39]);
              acc = _v40;
              const _v41: any = rt.set(this, "nsTop", _v40);
              acc = _v41;
              _v27 = _v41;
            } else {
              const _v42: any = (temps[2] ?? 0);
              acc = _v42;
              const _v43: any = rt.get(this, "value");
              acc = _v43;
              const _v44: any = 3;
              acc = _v44;
              const _v45: any = rt.op("+", ...[_v43, _v44]);
              acc = _v45;
              const _v46: any = 4;
              acc = _v46;
              const _v47: any = rt.op("/", ...[_v45, _v46]);
              acc = _v47;
              const _v48: any = rt.op("-", ...[_v42, _v47]);
              acc = _v48;
              const _v49: any = rt.set(this, "nsTop", _v48);
              acc = _v49;
              _v27 = _v49;
            }
            acc = _v27;
            const _v50: any = this;
            acc = _v50;
            const _v51: any = await rt.send(_v50, "setSize", []);
            acc = _v51;
            const _v52: any = await rt.superSend(this, {"script": 236, "name": "currentWealth"}, "draw", []);
            acc = _v52;
            return acc;
          },
        },
      },
      {
        name: "currentHappy",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 43, "nsLeft": 66, "view": 501, "loop": 3, "priority": 15},
        methods: {
          // SCI select3.sc: currentHappy.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v1: any = rt.global(302);
            acc = _v1;
            const _v2: any = await rt.send(_v1, "hapStat", []);
            acc = _v2;
            const _v3: any = (temps[0] = _v2);
            acc = _v3;
            const _v4: any = rt.global(302);
            acc = _v4;
            const _v5: any = await rt.send(_v4, "hapGoal", []);
            acc = _v5;
            const _v6: any = (temps[1] = _v5);
            acc = _v6;
            let _v7: any = acc;
            const _v8: any = (temps[0] ?? 0);
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = rt.op("<", ...[_v8, _v9]);
            acc = _v10;
            _v7 = _v10;
            if (rt.truth(_v10)) {
              const _v11: any = 0;
              acc = _v11;
              const _v12: any = (temps[0] = _v11);
              acc = _v12;
              _v7 = _v12;
            }
            acc = _v7;
            let _v13: any = acc;
            const _v14: any = (temps[0] ?? 0);
            acc = _v14;
            const _v15: any = (temps[1] ?? 0);
            acc = _v15;
            const _v16: any = rt.op(">=", ...[_v14, _v15]);
            acc = _v16;
            _v13 = _v16;
            if (rt.truth(_v16)) {
              const _v17: any = (temps[1] ?? 0);
              acc = _v17;
              const _v18: any = (temps[0] = _v17);
              acc = _v18;
              _v13 = _v18;
              const _v19: any = 71;
              acc = _v19;
              const _v20: any = (temps[2] = _v19);
              acc = _v20;
              _v13 = _v20;
              const _v21: any = 1;
              acc = _v21;
              const _v22: any = rt.set(this, "cel", _v21);
              acc = _v22;
              _v13 = _v22;
            } else {
              const _v23: any = 80;
              acc = _v23;
              const _v24: any = (temps[2] = _v23);
              acc = _v24;
              _v13 = _v24;
              const _v25: any = 0;
              acc = _v25;
              const _v26: any = rt.set(this, "cel", _v25);
              acc = _v26;
              _v13 = _v26;
            }
            acc = _v13;
            let _v27: any = acc;
            const _v28: any = (temps[0] ?? 0);
            acc = _v28;
            const _v29: any = rt.set(this, "value", _v28);
            acc = _v29;
            const _v30: any = (temps[1] ?? 0);
            acc = _v30;
            const _v31: any = rt.op(">=", ...[_v29, _v30]);
            acc = _v31;
            _v27 = _v31;
            if (rt.truth(_v31)) {
              const _v32: any = (temps[2] ?? 0);
              acc = _v32;
              const _v33: any = rt.get(this, "value");
              acc = _v33;
              const _v34: any = 10;
              acc = _v34;
              const _v35: any = rt.op("-", ...[_v33, _v34]);
              acc = _v35;
              const _v36: any = 10;
              acc = _v36;
              const _v37: any = rt.op("/", ...[_v35, _v36]);
              acc = _v37;
              const _v38: any = 4;
              acc = _v38;
              const _v39: any = rt.op("*", ...[_v37, _v38]);
              acc = _v39;
              const _v40: any = rt.op("-", ...[_v32, _v39]);
              acc = _v40;
              const _v41: any = rt.set(this, "nsTop", _v40);
              acc = _v41;
              _v27 = _v41;
            } else {
              const _v42: any = (temps[2] ?? 0);
              acc = _v42;
              const _v43: any = rt.get(this, "value");
              acc = _v43;
              const _v44: any = 3;
              acc = _v44;
              const _v45: any = rt.op("+", ...[_v43, _v44]);
              acc = _v45;
              const _v46: any = 4;
              acc = _v46;
              const _v47: any = rt.op("/", ...[_v45, _v46]);
              acc = _v47;
              const _v48: any = rt.op("-", ...[_v42, _v47]);
              acc = _v48;
              const _v49: any = rt.set(this, "nsTop", _v48);
              acc = _v49;
              _v27 = _v49;
            }
            acc = _v27;
            const _v50: any = this;
            acc = _v50;
            const _v51: any = await rt.send(_v50, "setSize", []);
            acc = _v51;
            const _v52: any = await rt.superSend(this, {"script": 236, "name": "currentHappy"}, "draw", []);
            acc = _v52;
            return acc;
          },
        },
      },
      {
        name: "currentEducation",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 80, "nsLeft": 102, "view": 501, "loop": 3, "priority": 15},
        methods: {
          // SCI select3.sc: currentEducation.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v1: any = rt.global(302);
            acc = _v1;
            const _v2: any = await rt.send(_v1, "eduStat", []);
            acc = _v2;
            const _v3: any = (temps[0] = _v2);
            acc = _v3;
            const _v4: any = rt.global(302);
            acc = _v4;
            const _v5: any = await rt.send(_v4, "eduGoal", []);
            acc = _v5;
            const _v6: any = (temps[1] = _v5);
            acc = _v6;
            let _v7: any = acc;
            const _v8: any = (temps[0] ?? 0);
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = rt.op("<", ...[_v8, _v9]);
            acc = _v10;
            _v7 = _v10;
            if (rt.truth(_v10)) {
              const _v11: any = 0;
              acc = _v11;
              const _v12: any = (temps[0] = _v11);
              acc = _v12;
              _v7 = _v12;
            }
            acc = _v7;
            let _v13: any = acc;
            const _v14: any = (temps[0] ?? 0);
            acc = _v14;
            const _v15: any = (temps[1] ?? 0);
            acc = _v15;
            const _v16: any = rt.op(">=", ...[_v14, _v15]);
            acc = _v16;
            _v13 = _v16;
            if (rt.truth(_v16)) {
              const _v17: any = (temps[1] ?? 0);
              acc = _v17;
              const _v18: any = (temps[0] = _v17);
              acc = _v18;
              _v13 = _v18;
              const _v19: any = 71;
              acc = _v19;
              const _v20: any = (temps[2] = _v19);
              acc = _v20;
              _v13 = _v20;
              const _v21: any = 1;
              acc = _v21;
              const _v22: any = rt.set(this, "cel", _v21);
              acc = _v22;
              _v13 = _v22;
            } else {
              const _v23: any = 80;
              acc = _v23;
              const _v24: any = (temps[2] = _v23);
              acc = _v24;
              _v13 = _v24;
              const _v25: any = 0;
              acc = _v25;
              const _v26: any = rt.set(this, "cel", _v25);
              acc = _v26;
              _v13 = _v26;
            }
            acc = _v13;
            let _v27: any = acc;
            const _v28: any = (temps[0] ?? 0);
            acc = _v28;
            const _v29: any = rt.set(this, "value", _v28);
            acc = _v29;
            const _v30: any = (temps[1] ?? 0);
            acc = _v30;
            const _v31: any = rt.op(">=", ...[_v29, _v30]);
            acc = _v31;
            _v27 = _v31;
            if (rt.truth(_v31)) {
              const _v32: any = (temps[2] ?? 0);
              acc = _v32;
              const _v33: any = rt.get(this, "value");
              acc = _v33;
              const _v34: any = 10;
              acc = _v34;
              const _v35: any = rt.op("-", ...[_v33, _v34]);
              acc = _v35;
              const _v36: any = 10;
              acc = _v36;
              const _v37: any = rt.op("/", ...[_v35, _v36]);
              acc = _v37;
              const _v38: any = 4;
              acc = _v38;
              const _v39: any = rt.op("*", ...[_v37, _v38]);
              acc = _v39;
              const _v40: any = rt.op("-", ...[_v32, _v39]);
              acc = _v40;
              const _v41: any = rt.set(this, "nsTop", _v40);
              acc = _v41;
              _v27 = _v41;
            } else {
              const _v42: any = (temps[2] ?? 0);
              acc = _v42;
              const _v43: any = rt.get(this, "value");
              acc = _v43;
              const _v44: any = 3;
              acc = _v44;
              const _v45: any = rt.op("+", ...[_v43, _v44]);
              acc = _v45;
              const _v46: any = 4;
              acc = _v46;
              const _v47: any = rt.op("/", ...[_v45, _v46]);
              acc = _v47;
              const _v48: any = rt.op("-", ...[_v42, _v47]);
              acc = _v48;
              const _v49: any = rt.set(this, "nsTop", _v48);
              acc = _v49;
              _v27 = _v49;
            }
            acc = _v27;
            const _v50: any = this;
            acc = _v50;
            const _v51: any = await rt.send(_v50, "setSize", []);
            acc = _v51;
            const _v52: any = await rt.superSend(this, {"script": 236, "name": "currentEducation"}, "draw", []);
            acc = _v52;
            return acc;
          },
        },
      },
      {
        name: "currentCareer",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 43, "nsLeft": 137, "view": 501, "loop": 3, "priority": 15},
        methods: {
          // SCI select3.sc: currentCareer.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v1: any = rt.global(302);
            acc = _v1;
            const _v2: any = await rt.send(_v1, "carStat", []);
            acc = _v2;
            const _v3: any = (temps[0] = _v2);
            acc = _v3;
            const _v4: any = rt.global(302);
            acc = _v4;
            const _v5: any = await rt.send(_v4, "carGoal", []);
            acc = _v5;
            const _v6: any = (temps[1] = _v5);
            acc = _v6;
            let _v7: any = acc;
            const _v8: any = (temps[0] ?? 0);
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = rt.op("<", ...[_v8, _v9]);
            acc = _v10;
            _v7 = _v10;
            if (rt.truth(_v10)) {
              const _v11: any = 0;
              acc = _v11;
              const _v12: any = (temps[0] = _v11);
              acc = _v12;
              _v7 = _v12;
            }
            acc = _v7;
            let _v13: any = acc;
            const _v14: any = (temps[0] ?? 0);
            acc = _v14;
            const _v15: any = (temps[1] ?? 0);
            acc = _v15;
            const _v16: any = rt.op(">=", ...[_v14, _v15]);
            acc = _v16;
            _v13 = _v16;
            if (rt.truth(_v16)) {
              const _v17: any = (temps[1] ?? 0);
              acc = _v17;
              const _v18: any = (temps[0] = _v17);
              acc = _v18;
              _v13 = _v18;
              const _v19: any = 71;
              acc = _v19;
              const _v20: any = (temps[2] = _v19);
              acc = _v20;
              _v13 = _v20;
              const _v21: any = 1;
              acc = _v21;
              const _v22: any = rt.set(this, "cel", _v21);
              acc = _v22;
              _v13 = _v22;
            } else {
              const _v23: any = 80;
              acc = _v23;
              const _v24: any = (temps[2] = _v23);
              acc = _v24;
              _v13 = _v24;
              const _v25: any = 0;
              acc = _v25;
              const _v26: any = rt.set(this, "cel", _v25);
              acc = _v26;
              _v13 = _v26;
            }
            acc = _v13;
            let _v27: any = acc;
            const _v28: any = (temps[0] ?? 0);
            acc = _v28;
            const _v29: any = rt.set(this, "value", _v28);
            acc = _v29;
            const _v30: any = (temps[1] ?? 0);
            acc = _v30;
            const _v31: any = rt.op(">=", ...[_v29, _v30]);
            acc = _v31;
            _v27 = _v31;
            if (rt.truth(_v31)) {
              const _v32: any = (temps[2] ?? 0);
              acc = _v32;
              const _v33: any = rt.get(this, "value");
              acc = _v33;
              const _v34: any = 10;
              acc = _v34;
              const _v35: any = rt.op("-", ...[_v33, _v34]);
              acc = _v35;
              const _v36: any = 10;
              acc = _v36;
              const _v37: any = rt.op("/", ...[_v35, _v36]);
              acc = _v37;
              const _v38: any = 4;
              acc = _v38;
              const _v39: any = rt.op("*", ...[_v37, _v38]);
              acc = _v39;
              const _v40: any = rt.op("-", ...[_v32, _v39]);
              acc = _v40;
              const _v41: any = rt.set(this, "nsTop", _v40);
              acc = _v41;
              _v27 = _v41;
            } else {
              const _v42: any = (temps[2] ?? 0);
              acc = _v42;
              const _v43: any = rt.get(this, "value");
              acc = _v43;
              const _v44: any = 3;
              acc = _v44;
              const _v45: any = rt.op("+", ...[_v43, _v44]);
              acc = _v45;
              const _v46: any = 4;
              acc = _v46;
              const _v47: any = rt.op("/", ...[_v45, _v46]);
              acc = _v47;
              const _v48: any = rt.op("-", ...[_v42, _v47]);
              acc = _v48;
              const _v49: any = rt.set(this, "nsTop", _v48);
              acc = _v49;
              _v27 = _v49;
            }
            acc = _v27;
            const _v50: any = this;
            acc = _v50;
            const _v51: any = await rt.send(_v50, "setSize", []);
            acc = _v51;
            const _v52: any = await rt.superSend(this, {"script": 236, "name": "currentCareer"}, "draw", []);
            acc = _v52;
            return acc;
          },
        },
      },
      {
        name: "questionButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 124, "view": 250, "loop": 9},
        methods: {
          // SCI select3.sc: questionButton.doit
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
            const _v4: any = rt.object(236, "select3");
            acc = _v4;
            const _v5: any = 291;
            acc = _v5;
            const _v6: any = await rt.call(0, "proc0_15", [_v4, _v5], this);
            acc = _v6;
            const _v7: any = rt.get(this, "client");
            acc = _v7;
            const _v8: any = 229;
            acc = _v8;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = await rt.call(236, "ScriptID", [_v8, _v9], this);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "init", [_v7]);
            acc = _v11;
            const _v12: any = (temps[0] = _v11);
            acc = _v12;
            const _v13: any = rt.object(236, "select3");
            acc = _v13;
            const _v14: any = await rt.send(_v13, "draw", []);
            acc = _v14;
            const _v15: any = (temps[0] ?? 0);
            acc = _v15;
            return _v15;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {"0": "select3"},
  });
}
