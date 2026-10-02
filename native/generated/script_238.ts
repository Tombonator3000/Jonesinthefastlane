// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/viewGoals.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: e01edbe86d08d17081abb960ca42f19927db7013ff20b6a9598a60a5fb5eadfb
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(238, {
    name: "viewGoals",
    uses: [0, 255, 891, 999],
    locals: [0, 0, 0, 0, 0],
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
        name: "viewGoals",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI viewGoals.sc: viewGoals.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = await rt.call(0, "proc0_17", [_v1], this);
            acc = _v2;
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = rt.setGlobal(509, _v3);
            acc = _v4;
            const _v5: any = rt.object(238, "dialogKeyMouse");
            acc = _v5;
            const _v6: any = rt.set(this, "keyMouseList", _v5);
            acc = _v6;
            const _v7: any = rt.global(502);
            acc = _v7;
            const _v8: any = rt.set(this, "prevDialog", _v7);
            acc = _v8;
            const _v9: any = rt.global(443);
            acc = _v9;
            const _v10: any = (temps[2] = _v9);
            acc = _v10;
            const _v11: any = 1;
            acc = _v11;
            const _v12: any = rt.setGlobal(443, _v11);
            acc = _v12;
            const _v13: any = rt.global(413);
            acc = _v13;
            const _v14: any = rt.set(this, "prevTalker", _v13);
            acc = _v14;
            const _v15: any = this;
            acc = _v15;
            const _v16: any = rt.setGlobal(502, _v15);
            acc = _v16;
            const _v17: any = 0;
            acc = _v17;
            const _v18: any = rt.set(this, "client", _v17);
            acc = _v18;
            const _v19: any = rt.setGlobal(413, _v18);
            acc = _v19;
            const _v20: any = await rt.call(0, "proc0_7", [], this);
            acc = _v20;
            const _v21: any = rt.object(238, "background");
            acc = _v21;
            const _v22: any = rt.object(238, "therm1");
            acc = _v22;
            const _v23: any = rt.object(238, "fineTherm1");
            acc = _v23;
            const _v24: any = rt.object(238, "playerNumber1");
            acc = _v24;
            const _v25: any = rt.object(238, "percent1");
            acc = _v25;
            const _v26: any = this;
            acc = _v26;
            const _v27: any = await rt.send(_v26, "add", [_v21, _v22, _v23, _v24, _v25]);
            acc = _v27;
            const _v28: any = 0;
            acc = _v28;
            const _v29: any = 1;
            acc = _v29;
            const _v30: any = 2;
            acc = _v30;
            const _v31: any = await rt.call(238, "ScriptID", [_v29, _v30], this);
            acc = _v31;
            const _v32: any = await rt.send(_v31, "at", [_v28]);
            acc = _v32;
            const _v33: any = await rt.call(238, "localproc_0", [_v32], this);
            acc = _v33;
            const _v34: any = rt.setLocal(238, 0, _v33);
            acc = _v34;
            const _v35: any = rt.local(238, 0);
            acc = _v35;
            const _v36: any = 10;
            acc = _v36;
            const _v37: any = rt.op("/", ...[_v35, _v36]);
            acc = _v37;
            const _v38: any = rt.object(238, "therm1");
            acc = _v38;
            const _v39: any = await rt.send(_v38, "cel", [_v37]);
            acc = _v39;
            const _v40: any = 83;
            acc = _v40;
            const _v41: any = rt.object(238, "therm1");
            acc = _v41;
            const _v42: any = await rt.send(_v41, "cel", []);
            acc = _v42;
            const _v43: any = 5;
            acc = _v43;
            const _v44: any = rt.op("*", ...[_v42, _v43]);
            acc = _v44;
            const _v45: any = rt.op("-", ...[_v40, _v44]);
            acc = _v45;
            const _v46: any = rt.object(238, "fineTherm1");
            acc = _v46;
            const _v47: any = await rt.send(_v46, "nsTop", [_v45]);
            acc = _v47;
            const _v48: any = rt.local(238, 0);
            acc = _v48;
            const _v49: any = 10;
            acc = _v49;
            const _v50: any = rt.op("mod", ...[_v48, _v49]);
            acc = _v50;
            const _v51: any = 2;
            acc = _v51;
            const _v52: any = rt.op("/", ...[_v50, _v51]);
            acc = _v52;
            const _v53: any = rt.object(238, "fineTherm1");
            acc = _v53;
            const _v54: any = await rt.send(_v53, "cel", [_v52]);
            acc = _v54;
            const _v55: any = rt.local(238, 0);
            acc = _v55;
            const _v56: any = rt.object(238, "percent1");
            acc = _v56;
            const _v57: any = await rt.send(_v56, "value", [_v55]);
            acc = _v57;
            let _v58: any = acc;
            const _v59: any = 1;
            acc = _v59;
            const _v60: any = 2;
            acc = _v60;
            const _v61: any = await rt.call(238, "ScriptID", [_v59, _v60], this);
            acc = _v61;
            const _v62: any = await rt.send(_v61, "size", []);
            acc = _v62;
            const _v63: any = 1;
            acc = _v63;
            const _v64: any = rt.op(">", ...[_v62, _v63]);
            acc = _v64;
            _v58 = _v64;
            if (rt.truth(_v64)) {
              const _v65: any = rt.object(238, "therm2");
              acc = _v65;
              const _v66: any = rt.object(238, "fineTherm2");
              acc = _v66;
              const _v67: any = rt.object(238, "playerNumber2");
              acc = _v67;
              const _v68: any = rt.object(238, "percent2");
              acc = _v68;
              const _v69: any = this;
              acc = _v69;
              const _v70: any = await rt.send(_v69, "add", [_v65, _v66, _v67, _v68]);
              acc = _v70;
              _v58 = _v70;
              const _v71: any = 1;
              acc = _v71;
              const _v72: any = 1;
              acc = _v72;
              const _v73: any = 2;
              acc = _v73;
              const _v74: any = await rt.call(238, "ScriptID", [_v72, _v73], this);
              acc = _v74;
              const _v75: any = await rt.send(_v74, "at", [_v71]);
              acc = _v75;
              const _v76: any = await rt.call(238, "localproc_0", [_v75], this);
              acc = _v76;
              const _v77: any = rt.setLocal(238, 1, _v76);
              acc = _v77;
              _v58 = _v77;
              const _v78: any = rt.local(238, 1);
              acc = _v78;
              const _v79: any = 10;
              acc = _v79;
              const _v80: any = rt.op("/", ...[_v78, _v79]);
              acc = _v80;
              const _v81: any = rt.object(238, "therm2");
              acc = _v81;
              const _v82: any = await rt.send(_v81, "cel", [_v80]);
              acc = _v82;
              _v58 = _v82;
              const _v83: any = 83;
              acc = _v83;
              const _v84: any = rt.object(238, "therm2");
              acc = _v84;
              const _v85: any = await rt.send(_v84, "cel", []);
              acc = _v85;
              const _v86: any = 5;
              acc = _v86;
              const _v87: any = rt.op("*", ...[_v85, _v86]);
              acc = _v87;
              const _v88: any = rt.op("-", ...[_v83, _v87]);
              acc = _v88;
              const _v89: any = rt.object(238, "fineTherm2");
              acc = _v89;
              const _v90: any = await rt.send(_v89, "nsTop", [_v88]);
              acc = _v90;
              _v58 = _v90;
              const _v91: any = rt.local(238, 1);
              acc = _v91;
              const _v92: any = 10;
              acc = _v92;
              const _v93: any = rt.op("mod", ...[_v91, _v92]);
              acc = _v93;
              const _v94: any = 2;
              acc = _v94;
              const _v95: any = rt.op("/", ...[_v93, _v94]);
              acc = _v95;
              const _v96: any = rt.object(238, "fineTherm2");
              acc = _v96;
              const _v97: any = await rt.send(_v96, "cel", [_v95]);
              acc = _v97;
              _v58 = _v97;
              const _v98: any = rt.local(238, 1);
              acc = _v98;
              const _v99: any = rt.object(238, "percent2");
              acc = _v99;
              const _v100: any = await rt.send(_v99, "value", [_v98]);
              acc = _v100;
              _v58 = _v100;
            }
            acc = _v58;
            let _v101: any = acc;
            const _v102: any = 1;
            acc = _v102;
            const _v103: any = 2;
            acc = _v103;
            const _v104: any = await rt.call(238, "ScriptID", [_v102, _v103], this);
            acc = _v104;
            const _v105: any = await rt.send(_v104, "size", []);
            acc = _v105;
            const _v106: any = 2;
            acc = _v106;
            const _v107: any = rt.op(">", ...[_v105, _v106]);
            acc = _v107;
            _v101 = _v107;
            if (rt.truth(_v107)) {
              const _v108: any = rt.object(238, "therm3");
              acc = _v108;
              const _v109: any = rt.object(238, "fineTherm3");
              acc = _v109;
              const _v110: any = rt.object(238, "playerNumber3");
              acc = _v110;
              const _v111: any = rt.object(238, "percent3");
              acc = _v111;
              const _v112: any = this;
              acc = _v112;
              const _v113: any = await rt.send(_v112, "add", [_v108, _v109, _v110, _v111]);
              acc = _v113;
              _v101 = _v113;
              const _v114: any = 2;
              acc = _v114;
              const _v115: any = 1;
              acc = _v115;
              const _v116: any = 2;
              acc = _v116;
              const _v117: any = await rt.call(238, "ScriptID", [_v115, _v116], this);
              acc = _v117;
              const _v118: any = await rt.send(_v117, "at", [_v114]);
              acc = _v118;
              const _v119: any = await rt.call(238, "localproc_0", [_v118], this);
              acc = _v119;
              const _v120: any = rt.setLocal(238, 2, _v119);
              acc = _v120;
              _v101 = _v120;
              const _v121: any = rt.local(238, 2);
              acc = _v121;
              const _v122: any = 10;
              acc = _v122;
              const _v123: any = rt.op("/", ...[_v121, _v122]);
              acc = _v123;
              const _v124: any = rt.object(238, "therm3");
              acc = _v124;
              const _v125: any = await rt.send(_v124, "cel", [_v123]);
              acc = _v125;
              _v101 = _v125;
              const _v126: any = 83;
              acc = _v126;
              const _v127: any = rt.object(238, "therm3");
              acc = _v127;
              const _v128: any = await rt.send(_v127, "cel", []);
              acc = _v128;
              const _v129: any = 5;
              acc = _v129;
              const _v130: any = rt.op("*", ...[_v128, _v129]);
              acc = _v130;
              const _v131: any = rt.op("-", ...[_v126, _v130]);
              acc = _v131;
              const _v132: any = rt.object(238, "fineTherm3");
              acc = _v132;
              const _v133: any = await rt.send(_v132, "nsTop", [_v131]);
              acc = _v133;
              _v101 = _v133;
              const _v134: any = rt.local(238, 2);
              acc = _v134;
              const _v135: any = 10;
              acc = _v135;
              const _v136: any = rt.op("mod", ...[_v134, _v135]);
              acc = _v136;
              const _v137: any = 2;
              acc = _v137;
              const _v138: any = rt.op("/", ...[_v136, _v137]);
              acc = _v138;
              const _v139: any = rt.object(238, "fineTherm3");
              acc = _v139;
              const _v140: any = await rt.send(_v139, "cel", [_v138]);
              acc = _v140;
              _v101 = _v140;
              const _v141: any = rt.local(238, 2);
              acc = _v141;
              const _v142: any = rt.object(238, "percent3");
              acc = _v142;
              const _v143: any = await rt.send(_v142, "value", [_v141]);
              acc = _v143;
              _v101 = _v143;
            }
            acc = _v101;
            let _v144: any = acc;
            const _v145: any = 1;
            acc = _v145;
            const _v146: any = 2;
            acc = _v146;
            const _v147: any = await rt.call(238, "ScriptID", [_v145, _v146], this);
            acc = _v147;
            const _v148: any = await rt.send(_v147, "size", []);
            acc = _v148;
            const _v149: any = 3;
            acc = _v149;
            const _v150: any = rt.op(">", ...[_v148, _v149]);
            acc = _v150;
            _v144 = _v150;
            if (rt.truth(_v150)) {
              const _v151: any = rt.object(238, "therm4");
              acc = _v151;
              const _v152: any = rt.object(238, "fineTherm4");
              acc = _v152;
              const _v153: any = rt.object(238, "playerNumber4");
              acc = _v153;
              const _v154: any = rt.object(238, "percent4");
              acc = _v154;
              const _v155: any = this;
              acc = _v155;
              const _v156: any = await rt.send(_v155, "add", [_v151, _v152, _v153, _v154]);
              acc = _v156;
              _v144 = _v156;
              const _v157: any = 3;
              acc = _v157;
              const _v158: any = 1;
              acc = _v158;
              const _v159: any = 2;
              acc = _v159;
              const _v160: any = await rt.call(238, "ScriptID", [_v158, _v159], this);
              acc = _v160;
              const _v161: any = await rt.send(_v160, "at", [_v157]);
              acc = _v161;
              const _v162: any = await rt.call(238, "localproc_0", [_v161], this);
              acc = _v162;
              const _v163: any = rt.setLocal(238, 3, _v162);
              acc = _v163;
              _v144 = _v163;
              const _v164: any = rt.local(238, 3);
              acc = _v164;
              const _v165: any = 10;
              acc = _v165;
              const _v166: any = rt.op("/", ...[_v164, _v165]);
              acc = _v166;
              const _v167: any = rt.object(238, "therm4");
              acc = _v167;
              const _v168: any = await rt.send(_v167, "cel", [_v166]);
              acc = _v168;
              _v144 = _v168;
              const _v169: any = 83;
              acc = _v169;
              const _v170: any = rt.object(238, "therm4");
              acc = _v170;
              const _v171: any = await rt.send(_v170, "cel", []);
              acc = _v171;
              const _v172: any = 5;
              acc = _v172;
              const _v173: any = rt.op("*", ...[_v171, _v172]);
              acc = _v173;
              const _v174: any = rt.op("-", ...[_v169, _v173]);
              acc = _v174;
              const _v175: any = rt.object(238, "fineTherm4");
              acc = _v175;
              const _v176: any = await rt.send(_v175, "nsTop", [_v174]);
              acc = _v176;
              _v144 = _v176;
              const _v177: any = rt.local(238, 3);
              acc = _v177;
              const _v178: any = 10;
              acc = _v178;
              const _v179: any = rt.op("mod", ...[_v177, _v178]);
              acc = _v179;
              const _v180: any = 2;
              acc = _v180;
              const _v181: any = rt.op("/", ...[_v179, _v180]);
              acc = _v181;
              const _v182: any = rt.object(238, "fineTherm4");
              acc = _v182;
              const _v183: any = await rt.send(_v182, "cel", [_v181]);
              acc = _v183;
              _v144 = _v183;
              const _v184: any = rt.local(238, 3);
              acc = _v184;
              const _v185: any = rt.object(238, "percent4");
              acc = _v185;
              const _v186: any = await rt.send(_v185, "value", [_v184]);
              acc = _v186;
              _v144 = _v186;
            }
            acc = _v144;
            const _v187: any = rt.object(238, "exitButton");
            acc = _v187;
            const _v188: any = this;
            acc = _v188;
            const _v189: any = await rt.send(_v188, "add", [_v187]);
            acc = _v189;
            let _v190: any = acc;
            const _v191: any = 1;
            acc = _v191;
            const _v192: any = 2;
            acc = _v192;
            const _v193: any = await rt.call(238, "ScriptID", [_v191, _v192], this);
            acc = _v193;
            const _v194: any = await rt.send(_v193, "size", []);
            acc = _v194;
            _branch195: {
              const _v196: any = 1;
              acc = _v196;
              _v190 = rt.op("==", _v194, _v196);
              acc = _v190;
              if (rt.truth(_v190)) {
                const _v197: any = rt.object(238, "therm1");
                acc = _v197;
                const _v198: any = await rt.send(_v197, "nsLeft", []);
                acc = _v198;
                const _v199: any = 65;
                acc = _v199;
                const _v200: any = rt.op("+", ...[_v198, _v199]);
                acc = _v200;
                const _v201: any = rt.object(238, "therm1");
                acc = _v201;
                const _v202: any = await rt.send(_v201, "nsLeft", [_v200]);
                acc = _v202;
                _v190 = _v202;
                const _v203: any = rt.object(238, "fineTherm1");
                acc = _v203;
                const _v204: any = await rt.send(_v203, "nsLeft", []);
                acc = _v204;
                const _v205: any = 65;
                acc = _v205;
                const _v206: any = rt.op("+", ...[_v204, _v205]);
                acc = _v206;
                const _v207: any = rt.object(238, "fineTherm1");
                acc = _v207;
                const _v208: any = await rt.send(_v207, "nsLeft", [_v206]);
                acc = _v208;
                _v190 = _v208;
                const _v209: any = rt.object(238, "playerNumber1");
                acc = _v209;
                const _v210: any = await rt.send(_v209, "nsLeft", []);
                acc = _v210;
                const _v211: any = 65;
                acc = _v211;
                const _v212: any = rt.op("+", ...[_v210, _v211]);
                acc = _v212;
                const _v213: any = rt.object(238, "playerNumber1");
                acc = _v213;
                const _v214: any = await rt.send(_v213, "nsLeft", [_v212]);
                acc = _v214;
                _v190 = _v214;
                const _v215: any = rt.object(238, "percent1");
                acc = _v215;
                const _v216: any = await rt.send(_v215, "nsLeft", []);
                acc = _v216;
                const _v217: any = 65;
                acc = _v217;
                const _v218: any = rt.op("+", ...[_v216, _v217]);
                acc = _v218;
                const _v219: any = rt.object(238, "percent1");
                acc = _v219;
                const _v220: any = await rt.send(_v219, "nsLeft", [_v218]);
                acc = _v220;
                _v190 = _v220;
                break _branch195;
              }
              const _v221: any = 2;
              acc = _v221;
              _v190 = rt.op("==", _v194, _v221);
              acc = _v190;
              if (rt.truth(_v190)) {
                const _v222: any = rt.object(238, "therm1");
                acc = _v222;
                const _v223: any = await rt.send(_v222, "nsLeft", []);
                acc = _v223;
                const _v224: any = 42;
                acc = _v224;
                const _v225: any = rt.op("+", ...[_v223, _v224]);
                acc = _v225;
                const _v226: any = rt.object(238, "therm1");
                acc = _v226;
                const _v227: any = await rt.send(_v226, "nsLeft", [_v225]);
                acc = _v227;
                _v190 = _v227;
                const _v228: any = rt.object(238, "fineTherm1");
                acc = _v228;
                const _v229: any = await rt.send(_v228, "nsLeft", []);
                acc = _v229;
                const _v230: any = 42;
                acc = _v230;
                const _v231: any = rt.op("+", ...[_v229, _v230]);
                acc = _v231;
                const _v232: any = rt.object(238, "fineTherm1");
                acc = _v232;
                const _v233: any = await rt.send(_v232, "nsLeft", [_v231]);
                acc = _v233;
                _v190 = _v233;
                const _v234: any = rt.object(238, "playerNumber1");
                acc = _v234;
                const _v235: any = await rt.send(_v234, "nsLeft", []);
                acc = _v235;
                const _v236: any = 42;
                acc = _v236;
                const _v237: any = rt.op("+", ...[_v235, _v236]);
                acc = _v237;
                const _v238: any = rt.object(238, "playerNumber1");
                acc = _v238;
                const _v239: any = await rt.send(_v238, "nsLeft", [_v237]);
                acc = _v239;
                _v190 = _v239;
                const _v240: any = rt.object(238, "percent1");
                acc = _v240;
                const _v241: any = await rt.send(_v240, "nsLeft", []);
                acc = _v241;
                const _v242: any = 42;
                acc = _v242;
                const _v243: any = rt.op("+", ...[_v241, _v242]);
                acc = _v243;
                const _v244: any = rt.object(238, "percent1");
                acc = _v244;
                const _v245: any = await rt.send(_v244, "nsLeft", [_v243]);
                acc = _v245;
                _v190 = _v245;
                const _v246: any = rt.object(238, "therm2");
                acc = _v246;
                const _v247: any = await rt.send(_v246, "nsLeft", []);
                acc = _v247;
                const _v248: any = 42;
                acc = _v248;
                const _v249: any = rt.op("+", ...[_v247, _v248]);
                acc = _v249;
                const _v250: any = rt.object(238, "therm2");
                acc = _v250;
                const _v251: any = await rt.send(_v250, "nsLeft", [_v249]);
                acc = _v251;
                _v190 = _v251;
                const _v252: any = rt.object(238, "fineTherm2");
                acc = _v252;
                const _v253: any = await rt.send(_v252, "nsLeft", []);
                acc = _v253;
                const _v254: any = 42;
                acc = _v254;
                const _v255: any = rt.op("+", ...[_v253, _v254]);
                acc = _v255;
                const _v256: any = rt.object(238, "fineTherm2");
                acc = _v256;
                const _v257: any = await rt.send(_v256, "nsLeft", [_v255]);
                acc = _v257;
                _v190 = _v257;
                const _v258: any = rt.object(238, "playerNumber2");
                acc = _v258;
                const _v259: any = await rt.send(_v258, "nsLeft", []);
                acc = _v259;
                const _v260: any = 42;
                acc = _v260;
                const _v261: any = rt.op("+", ...[_v259, _v260]);
                acc = _v261;
                const _v262: any = rt.object(238, "playerNumber2");
                acc = _v262;
                const _v263: any = await rt.send(_v262, "nsLeft", [_v261]);
                acc = _v263;
                _v190 = _v263;
                const _v264: any = rt.object(238, "percent2");
                acc = _v264;
                const _v265: any = await rt.send(_v264, "nsLeft", []);
                acc = _v265;
                const _v266: any = 42;
                acc = _v266;
                const _v267: any = rt.op("+", ...[_v265, _v266]);
                acc = _v267;
                const _v268: any = rt.object(238, "percent2");
                acc = _v268;
                const _v269: any = await rt.send(_v268, "nsLeft", [_v267]);
                acc = _v269;
                _v190 = _v269;
                let _v270: any = acc;
                const _v271: any = 1;
                acc = _v271;
                const _v272: any = 1;
                acc = _v272;
                const _v273: any = 2;
                acc = _v273;
                const _v274: any = await rt.call(238, "ScriptID", [_v272, _v273], this);
                acc = _v274;
                const _v275: any = await rt.send(_v274, "at", [_v271]);
                acc = _v275;
                const _v276: any = await rt.send(_v275, "playingAsJones", []);
                acc = _v276;
                _v270 = _v276;
                if (rt.truth(_v276)) {
                  const _v277: any = 4;
                  acc = _v277;
                  const _v278: any = rt.object(238, "playerNumber2");
                  acc = _v278;
                  const _v279: any = await rt.send(_v278, "cel", [_v277]);
                  acc = _v279;
                  _v270 = _v279;
                }
                acc = _v270;
                _v190 = _v270;
                break _branch195;
              }
              const _v280: any = 3;
              acc = _v280;
              _v190 = rt.op("==", _v194, _v280);
              acc = _v190;
              if (rt.truth(_v190)) {
                const _v281: any = rt.object(238, "therm1");
                acc = _v281;
                const _v282: any = await rt.send(_v281, "nsLeft", []);
                acc = _v282;
                const _v283: any = 20;
                acc = _v283;
                const _v284: any = rt.op("+", ...[_v282, _v283]);
                acc = _v284;
                const _v285: any = rt.object(238, "therm1");
                acc = _v285;
                const _v286: any = await rt.send(_v285, "nsLeft", [_v284]);
                acc = _v286;
                _v190 = _v286;
                const _v287: any = rt.object(238, "fineTherm1");
                acc = _v287;
                const _v288: any = await rt.send(_v287, "nsLeft", []);
                acc = _v288;
                const _v289: any = 20;
                acc = _v289;
                const _v290: any = rt.op("+", ...[_v288, _v289]);
                acc = _v290;
                const _v291: any = rt.object(238, "fineTherm1");
                acc = _v291;
                const _v292: any = await rt.send(_v291, "nsLeft", [_v290]);
                acc = _v292;
                _v190 = _v292;
                const _v293: any = rt.object(238, "playerNumber1");
                acc = _v293;
                const _v294: any = await rt.send(_v293, "nsLeft", []);
                acc = _v294;
                const _v295: any = 20;
                acc = _v295;
                const _v296: any = rt.op("+", ...[_v294, _v295]);
                acc = _v296;
                const _v297: any = rt.object(238, "playerNumber1");
                acc = _v297;
                const _v298: any = await rt.send(_v297, "nsLeft", [_v296]);
                acc = _v298;
                _v190 = _v298;
                const _v299: any = rt.object(238, "percent1");
                acc = _v299;
                const _v300: any = await rt.send(_v299, "nsLeft", []);
                acc = _v300;
                const _v301: any = 20;
                acc = _v301;
                const _v302: any = rt.op("+", ...[_v300, _v301]);
                acc = _v302;
                const _v303: any = rt.object(238, "percent1");
                acc = _v303;
                const _v304: any = await rt.send(_v303, "nsLeft", [_v302]);
                acc = _v304;
                _v190 = _v304;
                const _v305: any = rt.object(238, "therm2");
                acc = _v305;
                const _v306: any = await rt.send(_v305, "nsLeft", []);
                acc = _v306;
                const _v307: any = 20;
                acc = _v307;
                const _v308: any = rt.op("+", ...[_v306, _v307]);
                acc = _v308;
                const _v309: any = rt.object(238, "therm2");
                acc = _v309;
                const _v310: any = await rt.send(_v309, "nsLeft", [_v308]);
                acc = _v310;
                _v190 = _v310;
                const _v311: any = rt.object(238, "fineTherm2");
                acc = _v311;
                const _v312: any = await rt.send(_v311, "nsLeft", []);
                acc = _v312;
                const _v313: any = 20;
                acc = _v313;
                const _v314: any = rt.op("+", ...[_v312, _v313]);
                acc = _v314;
                const _v315: any = rt.object(238, "fineTherm2");
                acc = _v315;
                const _v316: any = await rt.send(_v315, "nsLeft", [_v314]);
                acc = _v316;
                _v190 = _v316;
                const _v317: any = rt.object(238, "playerNumber2");
                acc = _v317;
                const _v318: any = await rt.send(_v317, "nsLeft", []);
                acc = _v318;
                const _v319: any = 20;
                acc = _v319;
                const _v320: any = rt.op("+", ...[_v318, _v319]);
                acc = _v320;
                const _v321: any = rt.object(238, "playerNumber2");
                acc = _v321;
                const _v322: any = await rt.send(_v321, "nsLeft", [_v320]);
                acc = _v322;
                _v190 = _v322;
                const _v323: any = rt.object(238, "percent2");
                acc = _v323;
                const _v324: any = await rt.send(_v323, "nsLeft", []);
                acc = _v324;
                const _v325: any = 20;
                acc = _v325;
                const _v326: any = rt.op("+", ...[_v324, _v325]);
                acc = _v326;
                const _v327: any = rt.object(238, "percent2");
                acc = _v327;
                const _v328: any = await rt.send(_v327, "nsLeft", [_v326]);
                acc = _v328;
                _v190 = _v328;
                const _v329: any = rt.object(238, "therm3");
                acc = _v329;
                const _v330: any = await rt.send(_v329, "nsLeft", []);
                acc = _v330;
                const _v331: any = 20;
                acc = _v331;
                const _v332: any = rt.op("+", ...[_v330, _v331]);
                acc = _v332;
                const _v333: any = rt.object(238, "therm3");
                acc = _v333;
                const _v334: any = await rt.send(_v333, "nsLeft", [_v332]);
                acc = _v334;
                _v190 = _v334;
                const _v335: any = rt.object(238, "fineTherm3");
                acc = _v335;
                const _v336: any = await rt.send(_v335, "nsLeft", []);
                acc = _v336;
                const _v337: any = 20;
                acc = _v337;
                const _v338: any = rt.op("+", ...[_v336, _v337]);
                acc = _v338;
                const _v339: any = rt.object(238, "fineTherm3");
                acc = _v339;
                const _v340: any = await rt.send(_v339, "nsLeft", [_v338]);
                acc = _v340;
                _v190 = _v340;
                const _v341: any = rt.object(238, "playerNumber3");
                acc = _v341;
                const _v342: any = await rt.send(_v341, "nsLeft", []);
                acc = _v342;
                const _v343: any = 20;
                acc = _v343;
                const _v344: any = rt.op("+", ...[_v342, _v343]);
                acc = _v344;
                const _v345: any = rt.object(238, "playerNumber3");
                acc = _v345;
                const _v346: any = await rt.send(_v345, "nsLeft", [_v344]);
                acc = _v346;
                _v190 = _v346;
                const _v347: any = rt.object(238, "percent3");
                acc = _v347;
                const _v348: any = await rt.send(_v347, "nsLeft", []);
                acc = _v348;
                const _v349: any = 20;
                acc = _v349;
                const _v350: any = rt.op("+", ...[_v348, _v349]);
                acc = _v350;
                const _v351: any = rt.object(238, "percent3");
                acc = _v351;
                const _v352: any = await rt.send(_v351, "nsLeft", [_v350]);
                acc = _v352;
                _v190 = _v352;
                break _branch195;
              }
            }
            acc = _v190;
            const _v353: any = rt.global(59);
            acc = _v353;
            const _v354: any = 102;
            acc = _v354;
            const _v355: any = 1;
            acc = _v355;
            const _v356: any = 153;
            acc = _v356;
            const _v357: any = 69;
            acc = _v357;
            const _v358: any = 44;
            acc = _v358;
            const _v359: any = 0;
            acc = _v359;
            const _v360: any = 15;
            acc = _v360;
            const _v361: any = this;
            acc = _v361;
            const _v362: any = await rt.send(_v361, "window", [_v353]);
            acc = _v362;
            const _v363: any = await rt.send(_v361, "eachElementDo", [_v354, _v355]);
            acc = _v363;
            const _v364: any = await rt.send(_v361, "eachElementDo", [_v356]);
            acc = _v364;
            const _v365: any = await rt.send(_v361, "moveTo", [_v357, _v358]);
            acc = _v365;
            const _v366: any = await rt.send(_v361, "open", [_v359, _v360]);
            acc = _v366;
            const _v367: any = rt.object(891, "KeyMouse");
            acc = _v367;
            const _v368: any = await rt.send(_v367, "curItem", []);
            acc = _v368;
            const _v369: any = (temps[1] = _v368);
            acc = _v369;
            const _v370: any = rt.get(this, "keyMouseList");
            acc = _v370;
            const _v371: any = rt.object(891, "KeyMouse");
            acc = _v371;
            const _v372: any = await rt.send(_v371, "setList", [_v370]);
            acc = _v372;
            const _v373: any = this;
            acc = _v373;
            const _v374: any = rt.get(this, "keyMouseList");
            acc = _v374;
            const _v375: any = rt.object(238, "exitButton");
            acc = _v375;
            const _v376: any = await rt.call(0, "proc0_9", [_v373, _v374, _v375], this);
            acc = _v376;
            const _v377: any = 0;
            acc = _v377;
            const _v378: any = 0;
            acc = _v378;
            const _v379: any = this;
            acc = _v379;
            const _v380: any = await rt.send(_v379, "doit", [_v377, _v378]);
            acc = _v380;
            const _v381: any = (temps[0] = _v380);
            acc = _v381;
            let _v382: any = acc;
            const _v383: any = (temps[0] ?? 0);
            acc = _v383;
            const _v384: any = await rt.call(238, "IsObject", [_v383], this);
            acc = _v384;
            _v382 = _v384;
            if (rt.truth(_v384)) {
              let _v385: any = acc;
              const _v386: any = (temps[0] ?? 0);
              acc = _v386;
              const _v387: any = this;
              acc = _v387;
              const _v388: any = await rt.send(_v387, "contains", [_v386]);
              acc = _v388;
              _v385 = _v388;
              if (rt.truth(_v388)) {
                const _v389: any = 0;
                acc = _v389;
                const _v390: any = (temps[0] = _v389);
                acc = _v390;
                _v385 = _v390;
              }
              acc = _v385;
              _v382 = _v385;
            } else {
              const _v391: any = 1;
              acc = _v391;
              const _v392: any = (temps[0] = _v391);
              acc = _v392;
              _v382 = _v392;
            }
            acc = _v382;
            let _v393: any = acc;
            const _v394: any = rt.get(this, "prevDialog");
            acc = _v394;
            _v393 = _v394;
            if (rt.truth(_v394)) {
              const _v395: any = rt.get(this, "prevDialog");
              acc = _v395;
              const _v396: any = await rt.send(_v395, "keyMouseList", []);
              acc = _v396;
              _v393 = _v396;
            } else {
              const _v397: any = rt.global(432);
              acc = _v397;
              _v393 = _v397;
            }
            acc = _v393;
            const _v398: any = rt.object(891, "KeyMouse");
            acc = _v398;
            const _v399: any = await rt.send(_v398, "setList", [_v393]);
            acc = _v399;
            const _v400: any = (temps[1] ?? 0);
            acc = _v400;
            const _v401: any = rt.object(891, "KeyMouse");
            acc = _v401;
            const _v402: any = await rt.send(_v401, "curItem", [_v400]);
            acc = _v402;
            let _v403: any = acc;
            const _v404: any = rt.global(447);
            acc = _v404;
            _v403 = _v404;
            if (rt.truth(_v404)) {
              const _v405: any = (temps[1] ?? 0);
              acc = _v405;
              const _v406: any = rt.object(891, "KeyMouse");
              acc = _v406;
              const _v407: any = await rt.send(_v406, "setCursor", [_v405]);
              acc = _v407;
              _v403 = _v407;
            }
            acc = _v403;
            const _v408: any = rt.get(this, "keyMouseList");
            acc = _v408;
            const _v409: any = await rt.send(_v408, "release", []);
            acc = _v409;
            const _v410: any = rt.get(this, "keyMouseList");
            acc = _v410;
            const _v411: any = await rt.send(_v410, "dispose", []);
            acc = _v411;
            const _v412: any = rt.get(this, "prevTalker");
            acc = _v412;
            const _v413: any = rt.setGlobal(413, _v412);
            acc = _v413;
            const _v414: any = rt.get(this, "prevDialog");
            acc = _v414;
            const _v415: any = rt.setGlobal(502, _v414);
            acc = _v415;
            const _v416: any = this;
            acc = _v416;
            const _v417: any = 291;
            acc = _v417;
            const _v418: any = await rt.call(0, "proc0_15", [_v416, _v417], this);
            acc = _v418;
            const _v419: any = this;
            acc = _v419;
            const _v420: any = await rt.send(_v419, "dispose", []);
            acc = _v420;
            const _v421: any = 0;
            acc = _v421;
            const _v422: any = await rt.call(238, "SetPort", [_v421], this);
            acc = _v422;
            const _v423: any = 11;
            acc = _v423;
            const _v424: any = rt.get(this, "nsTop");
            acc = _v424;
            const _v425: any = 1;
            acc = _v425;
            const _v426: any = rt.op("+", ...[_v424, _v425]);
            acc = _v426;
            const _v427: any = rt.get(this, "nsLeft");
            acc = _v427;
            const _v428: any = rt.get(this, "nsBottom");
            acc = _v428;
            const _v429: any = 1;
            acc = _v429;
            const _v430: any = rt.op("-", ...[_v428, _v429]);
            acc = _v430;
            const _v431: any = rt.get(this, "nsRight");
            acc = _v431;
            const _v432: any = 3;
            acc = _v432;
            const _v433: any = rt.op("-", ...[_v431, _v432]);
            acc = _v433;
            const _v434: any = 2;
            acc = _v434;
            const _v435: any = 0;
            acc = _v435;
            const _v436: any = 0;
            acc = _v436;
            const _v437: any = await rt.call(238, "Graph", [_v423, _v426, _v427, _v430, _v433, _v434, _v435, _v436], this);
            acc = _v437;
            const _v438: any = 1;
            acc = _v438;
            const _v439: any = rt.setGlobal(509, _v438);
            acc = _v439;
            const _v440: any = (temps[2] ?? 0);
            acc = _v440;
            const _v441: any = rt.setGlobal(443, _v440);
            acc = _v441;
            const _v442: any = (temps[0] ?? 0);
            acc = _v442;
            const _acc443: any = acc;
            const _v444: any = 238;
            acc = _v444;
            const _args445: any[] = [_v444];
            await rt.call(238, "DisposeScript", _args445, this);
            const _v446: any = _args445.length === 2 ? _args445[1] : _acc443;
            acc = _v446;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 505, "priority": 13},
        methods: {
        },
      },
      {
        name: "exitButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 143, "view": 250, "priority": 15},
        methods: {
        },
      },
      {
        name: "playerNumber1",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 1, "nsTop": 90, "nsLeft": 18, "view": 505, "loop": 3, "priority": 13},
        methods: {
          // SCI viewGoals.sc: playerNumber1.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 238, "name": "playerNumber1"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = rt.global(302);
            acc = _v3;
            const _v4: any = rt.setLocal(238, 4, _v3);
            acc = _v4;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = 1;
            acc = _v6;
            const _v7: any = 2;
            acc = _v7;
            const _v8: any = await rt.call(238, "ScriptID", [_v6, _v7], this);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "at", [_v5]);
            acc = _v9;
            const _v10: any = rt.setGlobal(302, _v9);
            acc = _v10;
            const _v11: any = rt.object(238, "viewGoals");
            acc = _v11;
            const _v12: any = 291;
            acc = _v12;
            const _v13: any = await rt.call(0, "proc0_15", [_v11, _v12], this);
            acc = _v13;
            const _v14: any = rt.get(this, "client");
            acc = _v14;
            const _v15: any = 2;
            acc = _v15;
            const _v16: any = 236;
            acc = _v16;
            const _v17: any = await rt.call(238, "ScriptID", [_v16], this);
            acc = _v17;
            const _v18: any = await rt.send(_v17, "init", [_v14, _v15]);
            acc = _v18;
            const _v19: any = (temps[0] = _v18);
            acc = _v19;
            const _v20: any = rt.object(238, "viewGoals");
            acc = _v20;
            const _v21: any = await rt.send(_v20, "draw", []);
            acc = _v21;
            const _v22: any = rt.local(238, 4);
            acc = _v22;
            const _v23: any = rt.setGlobal(302, _v22);
            acc = _v23;
            const _v24: any = (temps[0] ?? 0);
            acc = _v24;
            return _v24;
            return acc;
          },
        },
      },
      {
        name: "playerNumber2",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 1, "nsTop": 90, "nsLeft": 62, "view": 505, "loop": 3, "cel": 1, "priority": 13},
        methods: {
          // SCI viewGoals.sc: playerNumber2.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 238, "name": "playerNumber2"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = rt.global(302);
            acc = _v3;
            const _v4: any = rt.setLocal(238, 4, _v3);
            acc = _v4;
            const _v5: any = 1;
            acc = _v5;
            const _v6: any = 1;
            acc = _v6;
            const _v7: any = 2;
            acc = _v7;
            const _v8: any = await rt.call(238, "ScriptID", [_v6, _v7], this);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "at", [_v5]);
            acc = _v9;
            const _v10: any = rt.setGlobal(302, _v9);
            acc = _v10;
            const _v11: any = rt.object(238, "viewGoals");
            acc = _v11;
            const _v12: any = 291;
            acc = _v12;
            const _v13: any = await rt.call(0, "proc0_15", [_v11, _v12], this);
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = 2;
            acc = _v15;
            const _v16: any = 236;
            acc = _v16;
            const _v17: any = await rt.call(238, "ScriptID", [_v16], this);
            acc = _v17;
            const _v18: any = await rt.send(_v17, "init", [_v14, _v15]);
            acc = _v18;
            const _v19: any = rt.object(238, "viewGoals");
            acc = _v19;
            const _v20: any = await rt.send(_v19, "draw", []);
            acc = _v20;
            const _v21: any = rt.local(238, 4);
            acc = _v21;
            const _v22: any = rt.setGlobal(302, _v21);
            acc = _v22;
            const _v23: any = (temps[0] ?? 0);
            acc = _v23;
            return _v23;
            return acc;
          },
        },
      },
      {
        name: "playerNumber3",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 1, "nsTop": 90, "nsLeft": 106, "view": 505, "loop": 3, "cel": 2, "priority": 13},
        methods: {
          // SCI viewGoals.sc: playerNumber3.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 238, "name": "playerNumber3"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = rt.global(302);
            acc = _v3;
            const _v4: any = rt.setLocal(238, 4, _v3);
            acc = _v4;
            const _v5: any = 2;
            acc = _v5;
            const _v6: any = 1;
            acc = _v6;
            const _v7: any = 2;
            acc = _v7;
            const _v8: any = await rt.call(238, "ScriptID", [_v6, _v7], this);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "at", [_v5]);
            acc = _v9;
            const _v10: any = rt.setGlobal(302, _v9);
            acc = _v10;
            const _v11: any = rt.object(238, "viewGoals");
            acc = _v11;
            const _v12: any = 291;
            acc = _v12;
            const _v13: any = await rt.call(0, "proc0_15", [_v11, _v12], this);
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = 2;
            acc = _v15;
            const _v16: any = 236;
            acc = _v16;
            const _v17: any = await rt.call(238, "ScriptID", [_v16], this);
            acc = _v17;
            const _v18: any = await rt.send(_v17, "init", [_v14, _v15]);
            acc = _v18;
            const _v19: any = rt.object(238, "viewGoals");
            acc = _v19;
            const _v20: any = await rt.send(_v19, "draw", []);
            acc = _v20;
            const _v21: any = rt.local(238, 4);
            acc = _v21;
            const _v22: any = rt.setGlobal(302, _v21);
            acc = _v22;
            const _v23: any = (temps[0] ?? 0);
            acc = _v23;
            return _v23;
            return acc;
          },
        },
      },
      {
        name: "playerNumber4",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 1, "nsTop": 90, "nsLeft": 150, "view": 505, "loop": 3, "cel": 3, "priority": 13},
        methods: {
          // SCI viewGoals.sc: playerNumber4.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 238, "name": "playerNumber4"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = rt.global(302);
            acc = _v3;
            const _v4: any = rt.setLocal(238, 4, _v3);
            acc = _v4;
            const _v5: any = 3;
            acc = _v5;
            const _v6: any = 1;
            acc = _v6;
            const _v7: any = 2;
            acc = _v7;
            const _v8: any = await rt.call(238, "ScriptID", [_v6, _v7], this);
            acc = _v8;
            const _v9: any = await rt.send(_v8, "at", [_v5]);
            acc = _v9;
            const _v10: any = rt.setGlobal(302, _v9);
            acc = _v10;
            const _v11: any = rt.object(238, "viewGoals");
            acc = _v11;
            const _v12: any = 291;
            acc = _v12;
            const _v13: any = await rt.call(0, "proc0_15", [_v11, _v12], this);
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = 2;
            acc = _v15;
            const _v16: any = 236;
            acc = _v16;
            const _v17: any = await rt.call(238, "ScriptID", [_v16], this);
            acc = _v17;
            const _v18: any = await rt.send(_v17, "init", [_v14, _v15]);
            acc = _v18;
            const _v19: any = rt.object(238, "viewGoals");
            acc = _v19;
            const _v20: any = await rt.send(_v19, "draw", []);
            acc = _v20;
            const _v21: any = rt.local(238, 4);
            acc = _v21;
            const _v22: any = rt.setGlobal(302, _v21);
            acc = _v22;
            const _v23: any = (temps[0] ?? 0);
            acc = _v23;
            return _v23;
            return acc;
          },
        },
      },
      {
        name: "therm1",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 35, "nsLeft": 21, "view": 505, "loop": 1, "priority": 13},
        methods: {
        },
      },
      {
        name: "therm2",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 35, "nsLeft": 65, "view": 505, "loop": 1, "priority": 13},
        methods: {
        },
      },
      {
        name: "therm3",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 35, "nsLeft": 109, "view": 505, "loop": 1, "priority": 13},
        methods: {
        },
      },
      {
        name: "therm4",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 35, "nsLeft": 153, "view": 505, "loop": 1, "priority": 13},
        methods: {
        },
      },
      {
        name: "fineTherm1",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 83, "nsLeft": 22, "view": 505, "loop": 2, "priority": 13},
        methods: {
        },
      },
      {
        name: "fineTherm2",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 83, "nsLeft": 66, "view": 505, "loop": 2, "priority": 13},
        methods: {
        },
      },
      {
        name: "fineTherm3",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 83, "nsLeft": 110, "view": 505, "loop": 2, "priority": 13},
        methods: {
        },
      },
      {
        name: "fineTherm4",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsTop": 83, "nsLeft": 154, "view": 505, "loop": 2, "priority": 13},
        methods: {
        },
      },
      {
        name: "percent1",
        className: "DText",
        parent: {"script": 255, "name": "DText"},
        isClass: false,
        properties: {"nsTop": 25, "nsLeft": 14},
        methods: {
          // SCI viewGoals.sc: percent1.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            const _v3: any = rt.ref("array", temps, 0);
            acc = _v3;
            const _v4: any = 238;
            acc = _v4;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = rt.get(this, "value");
            acc = _v6;
            const _v7: any = await rt.call(238, "Format", [_v3, _v4, _v5, _v6], this);
            acc = _v7;
            const _v8: any = 105;
            acc = _v8;
            const _v9: any = 4;
            acc = _v9;
            const _v10: any = 100;
            acc = _v10;
            const _v11: any = rt.get(this, "nsLeft");
            acc = _v11;
            const _v12: any = rt.get(this, "nsTop");
            acc = _v12;
            const _v13: any = 102;
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = 103;
            acc = _v15;
            let _v16: any = acc;
            const _v17: any = rt.global(535);
            acc = _v17;
            _v16 = _v17;
            if (rt.truth(_v17)) {
              const _v18: any = 99;
              acc = _v18;
              _v16 = _v18;
            } else {
              const _v19: any = 9;
              acc = _v19;
              _v16 = _v19;
            }
            acc = _v16;
            const _v20: any = await rt.call(238, "Display", [_v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16], this);
            acc = _v20;
            const _v21: any = this;
            acc = _v21;
            const _v22: any = await rt.send(_v21, "resetPort", []);
            acc = _v22;
            return acc;
          },
        },
      },
      {
        name: "percent2",
        className: "DText",
        parent: {"script": 255, "name": "DText"},
        isClass: false,
        properties: {"nsTop": 25, "nsLeft": 58},
        methods: {
          // SCI viewGoals.sc: percent2.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            const _v3: any = rt.ref("array", temps, 0);
            acc = _v3;
            const _v4: any = 238;
            acc = _v4;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = rt.get(this, "value");
            acc = _v6;
            const _v7: any = await rt.call(238, "Format", [_v3, _v4, _v5, _v6], this);
            acc = _v7;
            const _v8: any = 105;
            acc = _v8;
            const _v9: any = 4;
            acc = _v9;
            const _v10: any = 100;
            acc = _v10;
            const _v11: any = rt.get(this, "nsLeft");
            acc = _v11;
            const _v12: any = rt.get(this, "nsTop");
            acc = _v12;
            const _v13: any = 102;
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = 103;
            acc = _v15;
            let _v16: any = acc;
            const _v17: any = rt.global(535);
            acc = _v17;
            _v16 = _v17;
            if (rt.truth(_v17)) {
              const _v18: any = 99;
              acc = _v18;
              _v16 = _v18;
            } else {
              const _v19: any = 9;
              acc = _v19;
              _v16 = _v19;
            }
            acc = _v16;
            const _v20: any = await rt.call(238, "Display", [_v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16], this);
            acc = _v20;
            const _v21: any = this;
            acc = _v21;
            const _v22: any = await rt.send(_v21, "resetPort", []);
            acc = _v22;
            return acc;
          },
        },
      },
      {
        name: "percent3",
        className: "DText",
        parent: {"script": 255, "name": "DText"},
        isClass: false,
        properties: {"nsTop": 25, "nsLeft": 102},
        methods: {
          // SCI viewGoals.sc: percent3.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            const _v3: any = rt.ref("array", temps, 0);
            acc = _v3;
            const _v4: any = 238;
            acc = _v4;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = rt.get(this, "value");
            acc = _v6;
            const _v7: any = await rt.call(238, "Format", [_v3, _v4, _v5, _v6], this);
            acc = _v7;
            const _v8: any = 105;
            acc = _v8;
            const _v9: any = 4;
            acc = _v9;
            const _v10: any = 100;
            acc = _v10;
            const _v11: any = rt.get(this, "nsLeft");
            acc = _v11;
            const _v12: any = rt.get(this, "nsTop");
            acc = _v12;
            const _v13: any = 102;
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = 103;
            acc = _v15;
            let _v16: any = acc;
            const _v17: any = rt.global(535);
            acc = _v17;
            _v16 = _v17;
            if (rt.truth(_v17)) {
              const _v18: any = 99;
              acc = _v18;
              _v16 = _v18;
            } else {
              const _v19: any = 9;
              acc = _v19;
              _v16 = _v19;
            }
            acc = _v16;
            const _v20: any = await rt.call(238, "Display", [_v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16], this);
            acc = _v20;
            const _v21: any = this;
            acc = _v21;
            const _v22: any = await rt.send(_v21, "resetPort", []);
            acc = _v22;
            return acc;
          },
        },
      },
      {
        name: "percent4",
        className: "DText",
        parent: {"script": 255, "name": "DText"},
        isClass: false,
        properties: {"nsTop": 25, "nsLeft": 146},
        methods: {
          // SCI viewGoals.sc: percent4.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            const _v3: any = rt.ref("array", temps, 0);
            acc = _v3;
            const _v4: any = 238;
            acc = _v4;
            const _v5: any = 0;
            acc = _v5;
            const _v6: any = rt.get(this, "value");
            acc = _v6;
            const _v7: any = await rt.call(238, "Format", [_v3, _v4, _v5, _v6], this);
            acc = _v7;
            const _v8: any = 105;
            acc = _v8;
            const _v9: any = 4;
            acc = _v9;
            const _v10: any = 100;
            acc = _v10;
            const _v11: any = rt.get(this, "nsLeft");
            acc = _v11;
            const _v12: any = rt.get(this, "nsTop");
            acc = _v12;
            const _v13: any = 102;
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = 103;
            acc = _v15;
            let _v16: any = acc;
            const _v17: any = rt.global(535);
            acc = _v17;
            _v16 = _v17;
            if (rt.truth(_v17)) {
              const _v18: any = 99;
              acc = _v18;
              _v16 = _v18;
            } else {
              const _v19: any = 9;
              acc = _v19;
              _v16 = _v19;
            }
            acc = _v16;
            const _v20: any = await rt.call(238, "Display", [_v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16], this);
            acc = _v20;
            const _v21: any = this;
            acc = _v21;
            const _v22: any = await rt.send(_v21, "resetPort", []);
            acc = _v22;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI viewGoals.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = (args[0] ?? 0);
        acc = _v1;
        const _v2: any = await rt.send(_v1, "monStat", []);
        acc = _v2;
        const _v3: any = (temps[3] = _v2);
        acc = _v3;
        const _v4: any = (args[0] ?? 0);
        acc = _v4;
        const _v5: any = await rt.send(_v4, "hapStat", []);
        acc = _v5;
        const _v6: any = (temps[4] = _v5);
        acc = _v6;
        const _v7: any = (args[0] ?? 0);
        acc = _v7;
        const _v8: any = await rt.send(_v7, "eduStat", []);
        acc = _v8;
        const _v9: any = (temps[5] = _v8);
        acc = _v9;
        const _v10: any = (args[0] ?? 0);
        acc = _v10;
        const _v11: any = await rt.send(_v10, "carStat", []);
        acc = _v11;
        const _v12: any = (temps[6] = _v11);
        acc = _v12;
        const _v13: any = (args[0] ?? 0);
        acc = _v13;
        const _v14: any = await rt.send(_v13, "monGoal", []);
        acc = _v14;
        const _v15: any = (temps[7] = _v14);
        acc = _v15;
        const _v16: any = (args[0] ?? 0);
        acc = _v16;
        const _v17: any = await rt.send(_v16, "hapGoal", []);
        acc = _v17;
        const _v18: any = (temps[8] = _v17);
        acc = _v18;
        const _v19: any = (args[0] ?? 0);
        acc = _v19;
        const _v20: any = await rt.send(_v19, "eduGoal", []);
        acc = _v20;
        const _v21: any = (temps[9] = _v20);
        acc = _v21;
        const _v22: any = (args[0] ?? 0);
        acc = _v22;
        const _v23: any = await rt.send(_v22, "carGoal", []);
        acc = _v23;
        const _v24: any = (temps[10] = _v23);
        acc = _v24;
        let _v25: any = acc;
        const _v26: any = (temps[3] ?? 0);
        acc = _v26;
        const _v27: any = (temps[7] ?? 0);
        acc = _v27;
        const _v28: any = rt.op(">", ...[_v26, _v27]);
        acc = _v28;
        _v25 = _v28;
        if (rt.truth(_v28)) {
          const _v29: any = (temps[7] ?? 0);
          acc = _v29;
          const _v30: any = (temps[3] = _v29);
          acc = _v30;
          _v25 = _v30;
        }
        acc = _v25;
        let _v31: any = acc;
        const _v32: any = (temps[4] ?? 0);
        acc = _v32;
        const _v33: any = (temps[8] ?? 0);
        acc = _v33;
        const _v34: any = rt.op(">", ...[_v32, _v33]);
        acc = _v34;
        _v31 = _v34;
        if (rt.truth(_v34)) {
          const _v35: any = (temps[8] ?? 0);
          acc = _v35;
          const _v36: any = (temps[4] = _v35);
          acc = _v36;
          _v31 = _v36;
        }
        acc = _v31;
        let _v37: any = acc;
        const _v38: any = (temps[5] ?? 0);
        acc = _v38;
        const _v39: any = (temps[9] ?? 0);
        acc = _v39;
        const _v40: any = rt.op(">", ...[_v38, _v39]);
        acc = _v40;
        _v37 = _v40;
        if (rt.truth(_v40)) {
          const _v41: any = (temps[9] ?? 0);
          acc = _v41;
          const _v42: any = (temps[5] = _v41);
          acc = _v42;
          _v37 = _v42;
        }
        acc = _v37;
        let _v43: any = acc;
        const _v44: any = (temps[6] ?? 0);
        acc = _v44;
        const _v45: any = (temps[10] ?? 0);
        acc = _v45;
        const _v46: any = rt.op(">", ...[_v44, _v45]);
        acc = _v46;
        _v43 = _v46;
        if (rt.truth(_v46)) {
          const _v47: any = (temps[10] ?? 0);
          acc = _v47;
          const _v48: any = (temps[6] = _v47);
          acc = _v48;
          _v43 = _v48;
        }
        acc = _v43;
        const _v49: any = (temps[3] ?? 0);
        acc = _v49;
        const _v50: any = (temps[4] ?? 0);
        acc = _v50;
        const _v51: any = (temps[5] ?? 0);
        acc = _v51;
        const _v52: any = (temps[6] ?? 0);
        acc = _v52;
        const _v53: any = rt.op("+", ...[_v49, _v50, _v51, _v52]);
        acc = _v53;
        const _v54: any = (temps[1] = _v53);
        acc = _v54;
        const _v55: any = (temps[7] ?? 0);
        acc = _v55;
        const _v56: any = (temps[8] ?? 0);
        acc = _v56;
        const _v57: any = (temps[9] ?? 0);
        acc = _v57;
        const _v58: any = (temps[10] ?? 0);
        acc = _v58;
        const _v59: any = rt.op("+", ...[_v55, _v56, _v57, _v58]);
        acc = _v59;
        const _v60: any = (temps[2] = _v59);
        acc = _v60;
        let _v61: any = acc;
        const _v62: any = (temps[1] ?? 0);
        acc = _v62;
        _v61 = _v62;
        if (rt.truth(_v62)) {
          const _v63: any = (temps[1] ?? 0);
          acc = _v63;
          const _v64: any = 50;
          acc = _v64;
          const _v65: any = rt.op("*", ...[_v63, _v64]);
          acc = _v65;
          const _v66: any = (temps[2] ?? 0);
          acc = _v66;
          const _v67: any = rt.op("/", ...[_v65, _v66]);
          acc = _v67;
          const _v68: any = 2;
          acc = _v68;
          const _v69: any = rt.op("*", ...[_v67, _v68]);
          acc = _v69;
          const _v70: any = (temps[1] ?? 0);
          acc = _v70;
          const _v71: any = 50;
          acc = _v71;
          const _v72: any = rt.op("*", ...[_v70, _v71]);
          acc = _v72;
          const _v73: any = (temps[2] ?? 0);
          acc = _v73;
          const _v74: any = rt.op("mod", ...[_v72, _v73]);
          acc = _v74;
          const _v75: any = 2;
          acc = _v75;
          const _v76: any = rt.op("*", ...[_v74, _v75]);
          acc = _v76;
          const _v77: any = (temps[2] ?? 0);
          acc = _v77;
          const _v78: any = rt.op("/", ...[_v76, _v77]);
          acc = _v78;
          const _v79: any = rt.op("+", ...[_v69, _v78]);
          acc = _v79;
          const _v80: any = (temps[0] = _v79);
          acc = _v80;
          _v61 = _v80;
        } else {
          const _v81: any = 0;
          acc = _v81;
          const _v82: any = (temps[0] = _v81);
          acc = _v82;
          _v61 = _v82;
        }
        acc = _v61;
        let _v83: any = acc;
        const _v84: any = (temps[0] ?? 0);
        acc = _v84;
        const _v85: any = 100;
        acc = _v85;
        const _v86: any = rt.op(">", ...[_v84, _v85]);
        acc = _v86;
        _v83 = _v86;
        if (rt.truth(_v86)) {
          const _v87: any = 100;
          acc = _v87;
          const _v88: any = (temps[0] = _v87);
          acc = _v88;
          _v83 = _v88;
        }
        acc = _v83;
        const _v89: any = (temps[0] ?? 0);
        acc = _v89;
        return _v89;
        return acc;
      },
    },
    exports: {"0": "viewGoals"},
  });
}
