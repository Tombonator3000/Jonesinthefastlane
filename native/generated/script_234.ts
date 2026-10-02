// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/winnerScript.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: bf2a6af41296cbbfb6a4f47a9d4fb03974f74f2bc3766c7e83d49888263dc69b
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(234, {
    name: "winnerScript",
    uses: [0, 103, 992, 996, 998, 999],
    locals: [0, 0],
    objects: [
      {
        name: "winnerScript",
        className: "Script",
        parent: {"script": 999, "name": "Script"},
        isClass: false,
        properties: {},
        methods: {
          // SCI winnerScript.sc: winnerScript.changeState
          "changeState": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = rt.set(this, "state", _v2);
            acc = _v3;
            _branch4: {
              const _v5: any = 0;
              acc = _v5;
              _v1 = rt.op("==", _v3, _v5);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v6: any = 0;
                acc = _v6;
                const _v7: any = rt.setGlobal(527, _v6);
                acc = _v7;
                _v1 = _v7;
                const _v8: any = 999;
                acc = _v8;
                const _v9: any = 1;
                acc = _v9;
                const _v10: any = rt.global(1);
                acc = _v10;
                const _v11: any = await rt.send(_v10, "setCursor", [_v8, _v9]);
                acc = _v11;
                _v1 = _v11;
                const _v12: any = 1;
                acc = _v12;
                const _v13: any = rt.object(996, "User");
                acc = _v13;
                const _v14: any = await rt.send(_v13, "controls", [_v12]);
                acc = _v14;
                _v1 = _v14;
                const _v15: any = 1;
                acc = _v15;
                const _v16: any = rt.setGlobal(536, _v15);
                acc = _v16;
                _v1 = _v16;
                const _v17: any = 0;
                acc = _v17;
                const _v18: any = rt.setLocal(234, 1, _v17);
                acc = _v18;
                _v1 = _v18;
                const _v19: any = 1025;
                acc = _v19;
                const _v20: any = 112;
                acc = _v20;
                const _v21: any = 0;
                acc = _v21;
                const _v22: any = await rt.call(234, "SetMenu", [_v19, _v20, _v21], this);
                acc = _v22;
                _v1 = _v22;
                const _v23: any = 1026;
                acc = _v23;
                const _v24: any = 112;
                acc = _v24;
                const _v25: any = 0;
                acc = _v25;
                const _v26: any = await rt.call(234, "SetMenu", [_v23, _v24, _v25], this);
                acc = _v26;
                _v1 = _v26;
                const _v27: any = 771;
                acc = _v27;
                const _v28: any = 112;
                acc = _v28;
                const _v29: any = 0;
                acc = _v29;
                const _v30: any = await rt.call(234, "SetMenu", [_v27, _v28, _v29], this);
                acc = _v30;
                _v1 = _v30;
                const _v31: any = await rt.call(0, "proc0_7", [], this);
                acc = _v31;
                _v1 = _v31;
                const _v32: any = rt.global(303);
                acc = _v32;
                const _v33: any = await rt.send(_v32, "hide", []);
                acc = _v33;
                _v1 = _v33;
                const _v34: any = await rt.call(0, "proc0_1", [], this);
                acc = _v34;
                _v1 = _v34;
                const _v35: any = rt.object(234, "background1");
                acc = _v35;
                const _v36: any = await rt.send(_v35, "priority", []);
                acc = _v36;
                const _v37: any = rt.object(234, "background1");
                acc = _v37;
                const _v38: any = await rt.send(_v37, "setPri", [_v36]);
                acc = _v38;
                const _v39: any = await rt.send(_v37, "init", []);
                acc = _v39;
                const _v40: any = await rt.send(_v37, "addToPic", []);
                acc = _v40;
                _v1 = _v40;
                const _v41: any = rt.global(302);
                acc = _v41;
                const _v42: any = await rt.send(_v41, "whichBody", []);
                acc = _v42;
                const _v43: any = rt.object(234, "background2");
                acc = _v43;
                const _v44: any = await rt.send(_v43, "priority", []);
                acc = _v44;
                const _v45: any = rt.object(234, "background2");
                acc = _v45;
                const _v46: any = await rt.send(_v45, "cel", [_v42]);
                acc = _v46;
                const _v47: any = await rt.send(_v45, "setPri", [_v44]);
                acc = _v47;
                const _v48: any = await rt.send(_v45, "init", []);
                acc = _v48;
                const _v49: any = await rt.send(_v45, "addToPic", []);
                acc = _v49;
                _v1 = _v49;
                const _v50: any = rt.object(234, "pedistal");
                acc = _v50;
                const _v51: any = await rt.send(_v50, "priority", []);
                acc = _v51;
                const _v52: any = 0;
                acc = _v52;
                const _v53: any = rt.object(234, "pedistal");
                acc = _v53;
                const _v54: any = await rt.send(_v53, "setPri", [_v51]);
                acc = _v54;
                const _v55: any = await rt.send(_v53, "init", [_v52]);
                acc = _v55;
                _v1 = _v55;
                const _v56: any = rt.object(234, "theWinner");
                acc = _v56;
                const _v57: any = await rt.send(_v56, "priority", []);
                acc = _v57;
                const _v58: any = rt.global(303);
                acc = _v58;
                const _v59: any = await rt.send(_v58, "view", []);
                acc = _v59;
                const _v60: any = rt.object(234, "theWinner");
                acc = _v60;
                const _v61: any = await rt.send(_v60, "setPri", [_v57]);
                acc = _v61;
                const _v62: any = await rt.send(_v60, "view", [_v59]);
                acc = _v62;
                const _v63: any = await rt.send(_v60, "init", []);
                acc = _v63;
                _v1 = _v63;
                const _v64: any = await rt.call(0, "proc0_1", [], this);
                acc = _v64;
                _v1 = _v64;
                const _v65: any = rt.object(234, "star1");
                acc = _v65;
                const _v66: any = await rt.send(_v65, "priority", []);
                acc = _v66;
                const _v67: any = rt.object(234, "star1");
                acc = _v67;
                const _v68: any = await rt.send(_v67, "setPri", [_v66]);
                acc = _v68;
                const _v69: any = await rt.send(_v67, "init", []);
                acc = _v69;
                _v1 = _v69;
                const _v70: any = rt.object(234, "star2");
                acc = _v70;
                const _v71: any = await rt.send(_v70, "priority", []);
                acc = _v71;
                const _v72: any = rt.object(234, "star2");
                acc = _v72;
                const _v73: any = await rt.send(_v72, "setPri", [_v71]);
                acc = _v73;
                const _v74: any = await rt.send(_v72, "init", []);
                acc = _v74;
                _v1 = _v74;
                const _v75: any = rt.object(234, "star3");
                acc = _v75;
                const _v76: any = await rt.send(_v75, "priority", []);
                acc = _v76;
                const _v77: any = rt.object(234, "star3");
                acc = _v77;
                const _v78: any = await rt.send(_v77, "setPri", [_v76]);
                acc = _v78;
                const _v79: any = await rt.send(_v77, "init", []);
                acc = _v79;
                _v1 = _v79;
                const _v80: any = rt.object(234, "star4");
                acc = _v80;
                const _v81: any = await rt.send(_v80, "priority", []);
                acc = _v81;
                const _v82: any = rt.object(234, "star4");
                acc = _v82;
                const _v83: any = await rt.send(_v82, "setPri", [_v81]);
                acc = _v83;
                const _v84: any = await rt.send(_v82, "init", []);
                acc = _v84;
                _v1 = _v84;
                const _v85: any = rt.object(234, "star5");
                acc = _v85;
                const _v86: any = await rt.send(_v85, "priority", []);
                acc = _v86;
                const _v87: any = rt.object(234, "star5");
                acc = _v87;
                const _v88: any = await rt.send(_v87, "setPri", [_v86]);
                acc = _v88;
                const _v89: any = await rt.send(_v87, "init", []);
                acc = _v89;
                _v1 = _v89;
                const _v90: any = rt.object(234, "star6");
                acc = _v90;
                const _v91: any = await rt.send(_v90, "priority", []);
                acc = _v91;
                const _v92: any = rt.object(234, "star6");
                acc = _v92;
                const _v93: any = await rt.send(_v92, "setPri", [_v91]);
                acc = _v93;
                const _v94: any = await rt.send(_v92, "init", []);
                acc = _v94;
                _v1 = _v94;
                const _v95: any = rt.object(234, "star7");
                acc = _v95;
                const _v96: any = await rt.send(_v95, "priority", []);
                acc = _v96;
                const _v97: any = rt.object(234, "star7");
                acc = _v97;
                const _v98: any = await rt.send(_v97, "setPri", [_v96]);
                acc = _v98;
                const _v99: any = await rt.send(_v97, "init", []);
                acc = _v99;
                _v1 = _v99;
                const _v100: any = rt.object(234, "star8");
                acc = _v100;
                const _v101: any = await rt.send(_v100, "priority", []);
                acc = _v101;
                const _v102: any = rt.object(234, "star8");
                acc = _v102;
                const _v103: any = await rt.send(_v102, "setPri", [_v101]);
                acc = _v103;
                const _v104: any = await rt.send(_v102, "init", []);
                acc = _v104;
                _v1 = _v104;
                const _v105: any = rt.object(234, "star9");
                acc = _v105;
                const _v106: any = await rt.send(_v105, "priority", []);
                acc = _v106;
                const _v107: any = rt.object(234, "star9");
                acc = _v107;
                const _v108: any = await rt.send(_v107, "setPri", [_v106]);
                acc = _v108;
                const _v109: any = await rt.send(_v107, "init", []);
                acc = _v109;
                _v1 = _v109;
                const _v110: any = rt.object(234, "star10");
                acc = _v110;
                const _v111: any = await rt.send(_v110, "priority", []);
                acc = _v111;
                const _v112: any = rt.object(234, "star10");
                acc = _v112;
                const _v113: any = await rt.send(_v112, "setPri", [_v111]);
                acc = _v113;
                const _v114: any = await rt.send(_v112, "init", []);
                acc = _v114;
                _v1 = _v114;
                const _v115: any = await rt.call(0, "proc0_1", [], this);
                acc = _v115;
                _v1 = _v115;
                const _v116: any = 1;
                acc = _v116;
                const _v117: any = rt.object(234, "pedistal");
                acc = _v117;
                const _v118: any = await rt.send(_v117, "init", [_v116]);
                acc = _v118;
                _v1 = _v118;
                const _v119: any = rt.global(476);
                acc = _v119;
                const _v120: any = await rt.send(_v119, "stop", []);
                acc = _v120;
                _v1 = _v120;
                const _v121: any = 7;
                acc = _v121;
                const _v122: any = rt.global(477);
                acc = _v122;
                const _v123: any = await rt.send(_v122, "play", [_v121]);
                acc = _v123;
                _v1 = _v123;
                const _v124: any = 10;
                acc = _v124;
                const _v125: any = rt.set(this, "cycles", _v124);
                acc = _v125;
                _v1 = _v125;
                break _branch4;
              }
              const _v126: any = 1;
              acc = _v126;
              _v1 = rt.op("==", _v3, _v126);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v127: any = 0;
                acc = _v127;
                const _v128: any = 1;
                acc = _v128;
                const _v129: any = await rt.call(234, "Random", [_v127, _v128], this);
                acc = _v129;
                const _v130: any = rt.setLocal(234, 0, _v129);
                acc = _v130;
                _v1 = _v130;
                const _v131: any = 30;
                acc = _v131;
                const _v132: any = rt.local(234, 0);
                acc = _v132;
                const _v133: any = 262;
                acc = _v133;
                const _v134: any = rt.op("*", ...[_v132, _v133]);
                acc = _v134;
                const _v135: any = rt.op("+", ...[_v131, _v134]);
                acc = _v135;
                const _v136: any = 153;
                acc = _v136;
                const _v137: any = 10;
                acc = _v137;
                const _v138: any = 10;
                acc = _v138;
                const _v139: any = 2;
                acc = _v139;
                const _v140: any = 0;
                acc = _v140;
                const _v141: any = 1;
                acc = _v141;
                const _v142: any = await rt.call(234, "Random", [_v140, _v141], this);
                acc = _v142;
                const _v143: any = 3;
                acc = _v143;
                const _v144: any = rt.op("*", ...[_v142, _v143]);
                acc = _v144;
                const _v145: any = rt.op("+", ...[_v139, _v144]);
                acc = _v145;
                const _v146: any = 2;
                acc = _v146;
                const _v147: any = rt.local(234, 0);
                acc = _v147;
                const _v148: any = rt.op("+", ...[_v146, _v147]);
                acc = _v148;
                const _v149: any = 0;
                acc = _v149;
                const _v150: any = rt.object(992, "End");
                acc = _v150;
                const _v151: any = rt.object(234, "jonesGuy");
                acc = _v151;
                const _v152: any = rt.object(992, "MoveTo");
                acc = _v152;
                const _v153: any = 30;
                acc = _v153;
                const _v154: any = 1;
                acc = _v154;
                const _v155: any = rt.local(234, 0);
                acc = _v155;
                const _v156: any = rt.op("-", ...[_v154, _v155]);
                acc = _v156;
                const _v157: any = 262;
                acc = _v157;
                const _v158: any = rt.op("*", ...[_v156, _v157]);
                acc = _v158;
                const _v159: any = rt.op("+", ...[_v153, _v158]);
                acc = _v159;
                const _v160: any = 153;
                acc = _v160;
                const _v161: any = this;
                acc = _v161;
                const _v162: any = rt.object(234, "jonesGuy");
                acc = _v162;
                const _v163: any = await rt.send(_v162, "posn", [_v135, _v136]);
                acc = _v163;
                const _v164: any = await rt.send(_v162, "setStep", [_v137, _v138]);
                acc = _v164;
                const _v165: any = await rt.send(_v162, "setPri", [_v145]);
                acc = _v165;
                const _v166: any = await rt.send(_v162, "setLoop", [_v148]);
                acc = _v166;
                const _v167: any = await rt.send(_v162, "cel", [_v149]);
                acc = _v167;
                const _v168: any = await rt.send(_v162, "setCycle", [_v150, _v151]);
                acc = _v168;
                const _v169: any = await rt.send(_v162, "setMotion", [_v152, _v159, _v160, _v161]);
                acc = _v169;
                const _v170: any = await rt.send(_v162, "init", []);
                acc = _v170;
                _v1 = _v170;
                break _branch4;
              }
              const _v171: any = 2;
              acc = _v171;
              _v1 = rt.op("==", _v3, _v171);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v172: any = 0;
                acc = _v172;
                const _v173: any = 1;
                acc = _v173;
                const _v174: any = await rt.call(234, "Random", [_v172, _v173], this);
                acc = _v174;
                const _v175: any = rt.setLocal(234, 0, _v174);
                acc = _v175;
                _v1 = _v175;
                const _v176: any = 30;
                acc = _v176;
                const _v177: any = rt.local(234, 0);
                acc = _v177;
                const _v178: any = 262;
                acc = _v178;
                const _v179: any = rt.op("*", ...[_v177, _v178]);
                acc = _v179;
                const _v180: any = rt.op("+", ...[_v176, _v179]);
                acc = _v180;
                const _v181: any = 153;
                acc = _v181;
                const _v182: any = 2;
                acc = _v182;
                const _v183: any = 0;
                acc = _v183;
                const _v184: any = 1;
                acc = _v184;
                const _v185: any = await rt.call(234, "Random", [_v183, _v184], this);
                acc = _v185;
                const _v186: any = 3;
                acc = _v186;
                const _v187: any = rt.op("*", ...[_v185, _v186]);
                acc = _v187;
                const _v188: any = rt.op("+", ...[_v182, _v187]);
                acc = _v188;
                const _v189: any = 2;
                acc = _v189;
                const _v190: any = rt.local(234, 0);
                acc = _v190;
                const _v191: any = rt.op("+", ...[_v189, _v190]);
                acc = _v191;
                const _v192: any = 0;
                acc = _v192;
                const _v193: any = rt.object(992, "End");
                acc = _v193;
                const _v194: any = rt.object(234, "jonesGuy");
                acc = _v194;
                const _v195: any = rt.object(992, "MoveTo");
                acc = _v195;
                const _v196: any = 30;
                acc = _v196;
                const _v197: any = 1;
                acc = _v197;
                const _v198: any = rt.local(234, 0);
                acc = _v198;
                const _v199: any = rt.op("-", ...[_v197, _v198]);
                acc = _v199;
                const _v200: any = 262;
                acc = _v200;
                const _v201: any = rt.op("*", ...[_v199, _v200]);
                acc = _v201;
                const _v202: any = rt.op("+", ...[_v196, _v201]);
                acc = _v202;
                const _v203: any = 153;
                acc = _v203;
                const _v204: any = this;
                acc = _v204;
                const _v205: any = rt.object(234, "jonesGuy");
                acc = _v205;
                const _v206: any = await rt.send(_v205, "posn", [_v180, _v181]);
                acc = _v206;
                const _v207: any = await rt.send(_v205, "setPri", [_v188]);
                acc = _v207;
                const _v208: any = await rt.send(_v205, "setLoop", [_v191]);
                acc = _v208;
                const _v209: any = await rt.send(_v205, "cel", [_v192]);
                acc = _v209;
                const _v210: any = await rt.send(_v205, "setCycle", [_v193, _v194]);
                acc = _v210;
                const _v211: any = await rt.send(_v205, "setMotion", [_v195, _v202, _v203, _v204]);
                acc = _v211;
                _v1 = _v211;
                break _branch4;
              }
              const _v212: any = 4;
              acc = _v212;
              _v1 = rt.op("==", _v3, _v212);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v213: any = rt.object(234, "jonesGuy");
                acc = _v213;
                const _v214: any = await rt.send(_v213, "hide", []);
                acc = _v214;
                _v1 = _v214;
                const _v215: any = 10;
                acc = _v215;
                const _v216: any = rt.set(this, "cycles", _v215);
                acc = _v216;
                _v1 = _v216;
                break _branch4;
              }
              const _v217: any = 5;
              acc = _v217;
              _v1 = rt.op("==", _v3, _v217);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v218: any = this;
                acc = _v218;
                const _v219: any = await rt.send(_v218, "dispose", []);
                acc = _v219;
                _v1 = _v219;
                const _v220: any = 0;
                acc = _v220;
                const _v221: any = rt.get(this, "client");
                acc = _v221;
                const _v222: any = await rt.send(_v221, "script", [_v220]);
                acc = _v222;
                _v1 = _v222;
                const _v223: any = 1;
                acc = _v223;
                const _v224: any = rt.setGlobal(532, _v223);
                acc = _v224;
                _v1 = _v224;
                const _v225: any = await rt.call(0, "proc0_8", [], this);
                acc = _v225;
                _v1 = _v225;
                const _v226: any = 1025;
                acc = _v226;
                const _v227: any = 112;
                acc = _v227;
                const _v228: any = 1;
                acc = _v228;
                const _v229: any = await rt.call(234, "SetMenu", [_v226, _v227, _v228], this);
                acc = _v229;
                _v1 = _v229;
                const _v230: any = 1026;
                acc = _v230;
                const _v231: any = 112;
                acc = _v231;
                const _v232: any = 1;
                acc = _v232;
                const _v233: any = await rt.call(234, "SetMenu", [_v230, _v231, _v232], this);
                acc = _v233;
                _v1 = _v233;
                const _v234: any = 0;
                acc = _v234;
                const _v235: any = rt.setGlobal(536, _v234);
                acc = _v235;
                _v1 = _v235;
                break _branch4;
              }
              const _v236: any = 6;
              acc = _v236;
              _v1 = rt.op("==", _v3, _v236);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v237: any = this;
                acc = _v237;
                const _v238: any = await rt.send(_v237, "dispose", []);
                acc = _v238;
                _v1 = _v238;
                const _v239: any = 0;
                acc = _v239;
                const _v240: any = rt.get(this, "client");
                acc = _v240;
                const _v241: any = await rt.send(_v240, "script", [_v239]);
                acc = _v241;
                _v1 = _v241;
                const _v242: any = 1;
                acc = _v242;
                const _v243: any = rt.setGlobal(532, _v242);
                acc = _v243;
                _v1 = _v243;
                const _v244: any = await rt.call(0, "proc0_8", [], this);
                acc = _v244;
                _v1 = _v244;
                const _v245: any = 1025;
                acc = _v245;
                const _v246: any = 112;
                acc = _v246;
                const _v247: any = 1;
                acc = _v247;
                const _v248: any = await rt.call(234, "SetMenu", [_v245, _v246, _v247], this);
                acc = _v248;
                _v1 = _v248;
                const _v249: any = 1026;
                acc = _v249;
                const _v250: any = 112;
                acc = _v250;
                const _v251: any = 1;
                acc = _v251;
                const _v252: any = await rt.call(234, "SetMenu", [_v249, _v250, _v251], this);
                acc = _v252;
                _v1 = _v252;
                const _v253: any = 0;
                acc = _v253;
                const _v254: any = rt.setGlobal(536, _v253);
                acc = _v254;
                _v1 = _v254;
                break _branch4;
              }
            }
            acc = _v1;
            return acc;
          },
          // SCI winnerScript.sc: winnerScript.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.local(234, 1);
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 0;
              acc = _v3;
              const _v4: any = rt.setLocal(234, 1, _v3);
              acc = _v4;
              _v1 = _v4;
              const _v5: any = rt.set(this, "state", rt.op("+", rt.get(this, "state"), 1));
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            let _v6: any = acc;
            const _v7: any = rt.get(this, "state");
            acc = _v7;
            const _v8: any = 2;
            acc = _v8;
            const _v9: any = rt.op("==", ...[_v7, _v8]);
            acc = _v9;
            _v6 = _v9;
            if (rt.truth(_v9)) {
              const _v10: any = rt.set(this, "state", rt.op("-", rt.get(this, "state"), 1));
              acc = _v10;
              _v6 = _v10;
            }
            acc = _v6;
            const _v11: any = await rt.superSend(this, {"script": 234, "name": "winnerScript"}, "cue", []);
            acc = _v11;
            return acc;
          },
          // SCI winnerScript.sc: winnerScript.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(234, "star1");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "dispose", []);
            acc = _v2;
            const _v3: any = rt.object(234, "star2");
            acc = _v3;
            const _v4: any = await rt.send(_v3, "dispose", []);
            acc = _v4;
            const _v5: any = rt.object(234, "star3");
            acc = _v5;
            const _v6: any = await rt.send(_v5, "dispose", []);
            acc = _v6;
            const _v7: any = rt.object(234, "star4");
            acc = _v7;
            const _v8: any = await rt.send(_v7, "dispose", []);
            acc = _v8;
            const _v9: any = rt.object(234, "star5");
            acc = _v9;
            const _v10: any = await rt.send(_v9, "dispose", []);
            acc = _v10;
            const _v11: any = rt.object(234, "star6");
            acc = _v11;
            const _v12: any = await rt.send(_v11, "dispose", []);
            acc = _v12;
            const _v13: any = rt.object(234, "star7");
            acc = _v13;
            const _v14: any = await rt.send(_v13, "dispose", []);
            acc = _v14;
            const _v15: any = rt.object(234, "star8");
            acc = _v15;
            const _v16: any = await rt.send(_v15, "dispose", []);
            acc = _v16;
            const _v17: any = rt.object(234, "star9");
            acc = _v17;
            const _v18: any = await rt.send(_v17, "dispose", []);
            acc = _v18;
            const _v19: any = rt.object(234, "star10");
            acc = _v19;
            const _v20: any = await rt.send(_v19, "dispose", []);
            acc = _v20;
            const _v21: any = rt.object(234, "theWinner");
            acc = _v21;
            const _v22: any = await rt.send(_v21, "dispose", []);
            acc = _v22;
            const _v23: any = rt.object(234, "pedistal");
            acc = _v23;
            const _v24: any = await rt.send(_v23, "dispose", []);
            acc = _v24;
            const _v25: any = rt.object(234, "jonesGuy");
            acc = _v25;
            const _v26: any = await rt.send(_v25, "dispose", []);
            acc = _v26;
            const _v27: any = rt.object(234, "background1");
            acc = _v27;
            const _v28: any = await rt.send(_v27, "dispose", []);
            acc = _v28;
            const _v29: any = rt.object(234, "background2");
            acc = _v29;
            const _v30: any = await rt.send(_v29, "dispose", []);
            acc = _v30;
            const _v31: any = await rt.superSend(this, {"script": 234, "name": "winnerScript"}, "dispose", []);
            acc = _v31;
            return acc;
          },
          // SCI winnerScript.sc: winnerScript.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "state");
              acc = _v3;
              const _v4: any = 2;
              acc = _v4;
              const _v5: any = rt.op(">=", ...[_v3, _v4]);
              acc = _v5;
              _v2 = _v5;
            }
            if (rt.truth(_v2)) {
              const _v6: any = (args[0] ?? 0);
              acc = _v6;
              const _v7: any = await rt.send(_v6, "claimed", []);
              acc = _v7;
              const _v8: any = rt.op("not", ...[_v7]);
              acc = _v8;
              _v2 = _v8;
            }
            if (rt.truth(_v2)) {
              const _v9: any = (args[0] ?? 0);
              acc = _v9;
              const _v10: any = await rt.send(_v9, "type", []);
              acc = _v10;
              _v2 = _v10;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v11: any = 1;
              acc = _v11;
              const _v12: any = (args[0] ?? 0);
              acc = _v12;
              const _v13: any = await rt.send(_v12, "claimed", [_v11]);
              acc = _v13;
              _v1 = _v13;
              const _v14: any = 1;
              acc = _v14;
              const _v15: any = rt.setLocal(234, 1, _v14);
              acc = _v15;
              _v1 = _v15;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "jonesGuy",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 609, "priority": 5},
        methods: {
          // SCI winnerScript.sc: jonesGuy.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = 70;
            acc = _v2;
            let _v3: any = _v2;
            let _v4: any = 1;
            if (rt.truth(_v4)) {
              const _v5: any = rt.get(this, "x");
              acc = _v5;
              _v4 = rt.op("<=", _v3, _v5);
              _v3 = _v5;
            }
            if (rt.truth(_v4)) {
              const _v6: any = 260;
              acc = _v6;
              _v4 = rt.op("<=", _v3, _v6);
              _v3 = _v6;
            }
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v7: any = rt.object(234, "confetti");
              acc = _v7;
              const _v8: any = await rt.send(_v7, "new", []);
              acc = _v8;
              const _v9: any = (temps[0] = _v8);
              acc = _v9;
              _v1 = _v9;
              let _v10: any = acc;
              const _v11: any = rt.local(234, 0);
              acc = _v11;
              const _v12: any = rt.op("not", ...[_v11]);
              acc = _v12;
              _v10 = _v12;
              if (rt.truth(_v12)) {
                const _v13: any = rt.get(this, "x");
                acc = _v13;
                const _v14: any = 50;
                acc = _v14;
                const _v15: any = rt.op("+", ...[_v13, _v14]);
                acc = _v15;
                _v10 = _v15;
              } else {
                const _v16: any = rt.get(this, "x");
                acc = _v16;
                const _v17: any = 50;
                acc = _v17;
                const _v18: any = rt.op("-", ...[_v16, _v17]);
                acc = _v18;
                _v10 = _v18;
              }
              acc = _v10;
              const _v19: any = rt.get(this, "y");
              acc = _v19;
              const _v20: any = rt.get(this, "loop");
              acc = _v20;
              const _v21: any = 2;
              acc = _v21;
              const _v22: any = rt.op("+", ...[_v20, _v21]);
              acc = _v22;
              const _v23: any = 0;
              acc = _v23;
              const _v24: any = rt.get(this, "priority");
              acc = _v24;
              const _v25: any = rt.object(992, "End");
              acc = _v25;
              const _v26: any = (temps[0] ?? 0);
              acc = _v26;
              const _v27: any = (temps[0] ?? 0);
              acc = _v27;
              const _v28: any = await rt.send(_v27, "posn", [_v10, _v19]);
              acc = _v28;
              const _v29: any = await rt.send(_v27, "setLoop", [_v22]);
              acc = _v29;
              const _v30: any = await rt.send(_v27, "cel", [_v23]);
              acc = _v30;
              const _v31: any = await rt.send(_v27, "setPri", [_v24]);
              acc = _v31;
              const _v32: any = await rt.send(_v27, "setCycle", [_v25, _v26]);
              acc = _v32;
              const _v33: any = await rt.send(_v27, "init", []);
              acc = _v33;
              _v1 = _v33;
            }
            acc = _v1;
            const _v34: any = rt.object(992, "End");
            acc = _v34;
            const _v35: any = this;
            acc = _v35;
            const _v36: any = this;
            acc = _v36;
            const _v37: any = await rt.send(_v36, "setCycle", [_v34, _v35]);
            acc = _v37;
            return acc;
          },
        },
      },
      {
        name: "confetti",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: false,
        properties: {"view": 609},
        methods: {
          // SCI winnerScript.sc: confetti.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "dispose", []);
            acc = _v2;
            return acc;
          },
        },
      },
      {
        name: "star1",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: false,
        properties: {"y": 59, "x": 129, "view": 609, "loop": 1, "priority": 3},
        methods: {
          // SCI winnerScript.sc: star1.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 5;
            acc = _v1;
            const _v2: any = rt.object(103, "FwdCount");
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "cycleSpeed", [_v1]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "setCycle", [_v2]);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 234, "name": "star1"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "star2",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: false,
        properties: {"y": 74, "x": 119, "view": 609, "loop": 1, "priority": 3},
        methods: {
          // SCI winnerScript.sc: star2.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 4;
            acc = _v1;
            const _v2: any = rt.object(103, "FwdCount");
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "cycleSpeed", [_v1]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "setCycle", [_v2]);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 234, "name": "star2"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "star3",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: false,
        properties: {"y": 94, "x": 114, "view": 609, "loop": 1, "priority": 3},
        methods: {
          // SCI winnerScript.sc: star3.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 6;
            acc = _v1;
            const _v2: any = rt.object(103, "FwdCount");
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "cycleSpeed", [_v1]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "setCycle", [_v2]);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 234, "name": "star3"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "star4",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: false,
        properties: {"y": 114, "x": 119, "view": 609, "loop": 1, "priority": 3},
        methods: {
          // SCI winnerScript.sc: star4.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 5;
            acc = _v1;
            const _v2: any = rt.object(103, "FwdCount");
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "cycleSpeed", [_v1]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "setCycle", [_v2]);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 234, "name": "star4"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "star5",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: false,
        properties: {"y": 134, "x": 124, "view": 609, "loop": 1, "priority": 3},
        methods: {
          // SCI winnerScript.sc: star5.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 4;
            acc = _v1;
            const _v2: any = rt.object(103, "FwdCount");
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "cycleSpeed", [_v1]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "setCycle", [_v2]);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 234, "name": "star5"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "star6",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: false,
        properties: {"y": 59, "x": 186, "view": 609, "loop": 1, "priority": 3},
        methods: {
          // SCI winnerScript.sc: star6.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 6;
            acc = _v1;
            const _v2: any = rt.object(103, "FwdCount");
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "cycleSpeed", [_v1]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "setCycle", [_v2]);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 234, "name": "star6"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "star7",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: false,
        properties: {"y": 74, "x": 196, "view": 609, "loop": 1, "priority": 3},
        methods: {
          // SCI winnerScript.sc: star7.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 5;
            acc = _v1;
            const _v2: any = rt.object(103, "FwdCount");
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "cycleSpeed", [_v1]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "setCycle", [_v2]);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 234, "name": "star7"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "star8",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: false,
        properties: {"y": 94, "x": 201, "view": 609, "loop": 1, "priority": 3},
        methods: {
          // SCI winnerScript.sc: star8.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 4;
            acc = _v1;
            const _v2: any = rt.object(103, "FwdCount");
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "cycleSpeed", [_v1]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "setCycle", [_v2]);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 234, "name": "star8"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "star9",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: false,
        properties: {"y": 114, "x": 196, "view": 609, "loop": 1, "priority": 3},
        methods: {
          // SCI winnerScript.sc: star9.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 6;
            acc = _v1;
            const _v2: any = rt.object(103, "FwdCount");
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "cycleSpeed", [_v1]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "setCycle", [_v2]);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 234, "name": "star9"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "star10",
        className: "Prop",
        parent: {"script": 998, "name": "Prop"},
        isClass: false,
        properties: {"y": 134, "x": 191, "view": 609, "loop": 1, "priority": 3},
        methods: {
          // SCI winnerScript.sc: star10.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 5;
            acc = _v1;
            const _v2: any = rt.object(103, "FwdCount");
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "cycleSpeed", [_v1]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "setCycle", [_v2]);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 234, "name": "star10"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "pedistal",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"y": 154, "x": 160, "view": 609, "priority": 4},
        methods: {
          // SCI winnerScript.sc: pedistal.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = argc;
              acc = _v3;
              _v2 = _v3;
            }
            if (rt.truth(_v2)) {
              const _v4: any = (args[0] ?? 0);
              acc = _v4;
              _v2 = _v4;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              let _v5: any = acc;
              _branch6: {
                const _v7: any = rt.global(461);
                acc = _v7;
                const _v8: any = rt.op("not", ...[_v7]);
                acc = _v8;
                _v5 = _v8;
                acc = _v5;
                if (rt.truth(_v5)) {
                  const _v9: any = rt.global(302);
                  acc = _v9;
                  const _v10: any = rt.setGlobal(461, _v9);
                  acc = _v10;
                  _v5 = _v10;
                  const _v11: any = rt.ref("global", 0, 100);
                  acc = _v11;
                  const _v12: any = 234;
                  acc = _v12;
                  const _v13: any = 0;
                  acc = _v13;
                  const _v14: any = await rt.call(234, "Format", [_v11, _v12, _v13], this);
                  acc = _v14;
                  const _v15: any = (temps[0] = _v14);
                  acc = _v15;
                  _v5 = _v15;
                  break _branch6;
                }
                const _v16: any = rt.global(462);
                acc = _v16;
                const _v17: any = rt.op("not", ...[_v16]);
                acc = _v17;
                _v5 = _v17;
                acc = _v5;
                if (rt.truth(_v5)) {
                  const _v18: any = rt.global(302);
                  acc = _v18;
                  const _v19: any = rt.setGlobal(462, _v18);
                  acc = _v19;
                  _v5 = _v19;
                  const _v20: any = rt.ref("global", 0, 100);
                  acc = _v20;
                  const _v21: any = 234;
                  acc = _v21;
                  const _v22: any = 1;
                  acc = _v22;
                  const _v23: any = await rt.call(234, "Format", [_v20, _v21, _v22], this);
                  acc = _v23;
                  const _v24: any = (temps[0] = _v23);
                  acc = _v24;
                  _v5 = _v24;
                  break _branch6;
                }
                const _v25: any = rt.global(463);
                acc = _v25;
                const _v26: any = rt.op("not", ...[_v25]);
                acc = _v26;
                _v5 = _v26;
                acc = _v5;
                if (rt.truth(_v5)) {
                  const _v27: any = rt.global(302);
                  acc = _v27;
                  const _v28: any = rt.setGlobal(463, _v27);
                  acc = _v28;
                  _v5 = _v28;
                  const _v29: any = rt.ref("global", 0, 100);
                  acc = _v29;
                  const _v30: any = 234;
                  acc = _v30;
                  const _v31: any = 2;
                  acc = _v31;
                  const _v32: any = await rt.call(234, "Format", [_v29, _v30, _v31], this);
                  acc = _v32;
                  const _v33: any = (temps[0] = _v32);
                  acc = _v33;
                  _v5 = _v33;
                  break _branch6;
                }
                const _v34: any = rt.global(464);
                acc = _v34;
                const _v35: any = rt.op("not", ...[_v34]);
                acc = _v35;
                _v5 = _v35;
                acc = _v5;
                if (rt.truth(_v5)) {
                  const _v36: any = rt.global(302);
                  acc = _v36;
                  const _v37: any = rt.setGlobal(464, _v36);
                  acc = _v37;
                  _v5 = _v37;
                  const _v38: any = rt.ref("global", 0, 100);
                  acc = _v38;
                  const _v39: any = 234;
                  acc = _v39;
                  const _v40: any = 3;
                  acc = _v40;
                  const _v41: any = await rt.call(234, "Format", [_v38, _v39, _v40], this);
                  acc = _v41;
                  const _v42: any = (temps[0] = _v41);
                  acc = _v42;
                  _v5 = _v42;
                  break _branch6;
                }
              }
              acc = _v5;
              _v1 = _v5;
              const _v43: any = (temps[0] ?? 0);
              acc = _v43;
              const _v44: any = 100;
              acc = _v44;
              const _v45: any = 137;
              acc = _v45;
              const _v46: any = 148;
              acc = _v46;
              const _v47: any = 102;
              acc = _v47;
              const _v48: any = 0;
              acc = _v48;
              const _v49: any = 103;
              acc = _v49;
              const _v50: any = -1;
              acc = _v50;
              const _v51: any = 105;
              acc = _v51;
              const _v52: any = 10;
              acc = _v52;
              const _v53: any = 101;
              acc = _v53;
              const _v54: any = 1;
              acc = _v54;
              const _v55: any = await rt.call(234, "Display", [_v43, _v44, _v45, _v46, _v47, _v48, _v49, _v50, _v51, _v52, _v53, _v54], this);
              acc = _v55;
              _v1 = _v55;
            } else {
              const _v56: any = await rt.superSend(this, {"script": 234, "name": "pedistal"}, "init", []);
              acc = _v56;
              _v1 = _v56;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "theWinner",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"y": 149, "x": 160, "priority": 3},
        methods: {
        },
      },
      {
        name: "background1",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"y": 44, "x": 69, "cel": 4, "priority": 1},
        methods: {
        },
      },
      {
        name: "background2",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"y": 45, "x": 70, "priority": 1},
        methods: {
        },
      },
    ],
    procedures: {
    },
    exports: {"0": "winnerScript"},
  });
}
