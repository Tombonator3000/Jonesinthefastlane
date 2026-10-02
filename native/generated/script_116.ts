// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/lottoScript.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 803256f93d352040a21ff49bf1ef0881bb321d0e08a4053219b17743ec8a9d36
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(116, {
    name: "lottoScript",
    uses: [0, 992, 998, 999],
    locals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    objects: [
      {
        name: "lottoScript",
        className: "Script",
        parent: {"script": 999, "name": "Script"},
        isClass: false,
        properties: {},
        methods: {
          // SCI lottoScript.sc: lottoScript.changeState
          "changeState": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0];
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
                const _v6: any = rt.global(372);
                acc = _v6;
                const _v7: any = rt.setGlobal(524, _v6);
                acc = _v7;
                _v1 = _v7;
                const _v8: any = 0;
                acc = _v8;
                const _v9: any = rt.setLocal(116, 55, _v8);
                acc = _v9;
                _v1 = _v9;
                const _v10: any = 100;
                acc = _v10;
                const _v11: any = 230;
                acc = _v11;
                const _v12: any = await rt.call(116, "Random", [_v10, _v11], this);
                acc = _v12;
                const _v13: any = (temps[1] = _v12);
                acc = _v13;
                _v1 = _v13;
                const _v14: any = 20;
                acc = _v14;
                const _v15: any = 35;
                acc = _v15;
                const _v16: any = await rt.call(116, "Random", [_v14, _v15], this);
                acc = _v16;
                const _v17: any = (temps[2] = _v16);
                acc = _v17;
                _v1 = _v17;
                const _v18: any = 250;
                acc = _v18;
                const _v19: any = 300;
                acc = _v19;
                const _v20: any = await rt.call(116, "Random", [_v18, _v19], this);
                acc = _v20;
                const _v21: any = (temps[3] = _v20);
                acc = _v21;
                _v1 = _v21;
                const _v22: any = (temps[1] ?? 0);
                acc = _v22;
                const _v23: any = (temps[2] ?? 0);
                acc = _v23;
                const _v24: any = rt.object(992, "Fwd");
                acc = _v24;
                const _v25: any = 0;
                acc = _v25;
                const _v26: any = 0;
                acc = _v26;
                const _v27: any = 7;
                acc = _v27;
                const _v28: any = rt.object(116, "lottobuck1");
                acc = _v28;
                const _v29: any = await rt.send(_v28, "posn", [_v22, _v23]);
                acc = _v29;
                const _v30: any = await rt.send(_v28, "setCycle", [_v24]);
                acc = _v30;
                const _v31: any = await rt.send(_v28, "setLoop", [_v25]);
                acc = _v31;
                const _v32: any = await rt.send(_v28, "setStep", [_v26, _v27]);
                acc = _v32;
                const _v33: any = await rt.send(_v28, "init", []);
                acc = _v33;
                _v1 = _v33;
                const _v34: any = (temps[3] ?? 0);
                acc = _v34;
                const _v35: any = (temps[2] = rt.op("+", (temps[2] ?? 0), _v34));
                acc = _v35;
                _v1 = _v35;
                const _v36: any = rt.object(992, "MoveTo");
                acc = _v36;
                const _v37: any = (temps[1] ?? 0);
                acc = _v37;
                const _v38: any = (temps[2] ?? 0);
                acc = _v38;
                const _v39: any = rt.object(116, "lottobuck1");
                acc = _v39;
                const _v40: any = await rt.send(_v39, "setMotion", [_v36, _v37, _v38]);
                acc = _v40;
                _v1 = _v40;
                const _v41: any = 1;
                acc = _v41;
                const _v42: any = 2;
                acc = _v42;
                const _v43: any = await rt.call(116, "Random", [_v41, _v42], this);
                acc = _v43;
                const _v44: any = rt.set(this, "cycles", _v43);
                acc = _v44;
                _v1 = _v44;
                const _v45: any = rt.global(477);
                acc = _v45;
                const _v46: any = await rt.send(_v45, "stop", []);
                acc = _v46;
                _v1 = _v46;
                const _v47: any = -1;
                acc = _v47;
                const _v48: any = 25;
                acc = _v48;
                const _v49: any = rt.global(476);
                acc = _v49;
                const _v50: any = await rt.send(_v49, "loop", [_v47]);
                acc = _v50;
                const _v51: any = await rt.send(_v49, "play", [_v48]);
                acc = _v51;
                _v1 = _v51;
                break _branch4;
              }
              const _v52: any = 1;
              acc = _v52;
              _v1 = rt.op("==", _v3, _v52);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v53: any = 1;
                acc = _v53;
                const _v54: any = 2;
                acc = _v54;
                const _v55: any = await rt.call(116, "Random", [_v53, _v54], this);
                acc = _v55;
                const _v56: any = rt.set(this, "cycles", _v55);
                acc = _v56;
                _v1 = _v56;
                break _branch4;
              }
              const _v57: any = 2;
              acc = _v57;
              _v1 = rt.op("==", _v3, _v57);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v58: any = 100;
                acc = _v58;
                const _v59: any = 230;
                acc = _v59;
                const _v60: any = await rt.call(116, "Random", [_v58, _v59], this);
                acc = _v60;
                const _v61: any = (temps[1] = _v60);
                acc = _v61;
                _v1 = _v61;
                const _v62: any = 20;
                acc = _v62;
                const _v63: any = 35;
                acc = _v63;
                const _v64: any = await rt.call(116, "Random", [_v62, _v63], this);
                acc = _v64;
                const _v65: any = (temps[2] = _v64);
                acc = _v65;
                _v1 = _v65;
                const _v66: any = 250;
                acc = _v66;
                const _v67: any = 300;
                acc = _v67;
                const _v68: any = await rt.call(116, "Random", [_v66, _v67], this);
                acc = _v68;
                const _v69: any = (temps[3] = _v68);
                acc = _v69;
                _v1 = _v69;
                const _v70: any = (temps[1] ?? 0);
                acc = _v70;
                const _v71: any = (temps[2] ?? 0);
                acc = _v71;
                const _v72: any = rt.object(992, "Fwd");
                acc = _v72;
                const _v73: any = 0;
                acc = _v73;
                const _v74: any = 0;
                acc = _v74;
                const _v75: any = 7;
                acc = _v75;
                const _v76: any = rt.object(116, "lottobuck2");
                acc = _v76;
                const _v77: any = await rt.send(_v76, "posn", [_v70, _v71]);
                acc = _v77;
                const _v78: any = await rt.send(_v76, "setCycle", [_v72]);
                acc = _v78;
                const _v79: any = await rt.send(_v76, "setLoop", [_v73]);
                acc = _v79;
                const _v80: any = await rt.send(_v76, "setStep", [_v74, _v75]);
                acc = _v80;
                const _v81: any = await rt.send(_v76, "init", []);
                acc = _v81;
                _v1 = _v81;
                const _v82: any = (temps[3] ?? 0);
                acc = _v82;
                const _v83: any = (temps[2] = rt.op("+", (temps[2] ?? 0), _v82));
                acc = _v83;
                _v1 = _v83;
                const _v84: any = rt.object(992, "MoveTo");
                acc = _v84;
                const _v85: any = (temps[1] ?? 0);
                acc = _v85;
                const _v86: any = (temps[2] ?? 0);
                acc = _v86;
                const _v87: any = rt.object(116, "lottobuck2");
                acc = _v87;
                const _v88: any = await rt.send(_v87, "setMotion", [_v84, _v85, _v86]);
                acc = _v88;
                _v1 = _v88;
                const _v89: any = 1;
                acc = _v89;
                const _v90: any = 2;
                acc = _v90;
                const _v91: any = await rt.call(116, "Random", [_v89, _v90], this);
                acc = _v91;
                const _v92: any = rt.set(this, "cycles", _v91);
                acc = _v92;
                _v1 = _v92;
                break _branch4;
              }
              const _v93: any = 3;
              acc = _v93;
              _v1 = rt.op("==", _v3, _v93);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v94: any = 1;
                acc = _v94;
                const _v95: any = 2;
                acc = _v95;
                const _v96: any = await rt.call(116, "Random", [_v94, _v95], this);
                acc = _v96;
                const _v97: any = rt.set(this, "cycles", _v96);
                acc = _v97;
                _v1 = _v97;
                break _branch4;
              }
              const _v98: any = 4;
              acc = _v98;
              _v1 = rt.op("==", _v3, _v98);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v99: any = 100;
                acc = _v99;
                const _v100: any = 230;
                acc = _v100;
                const _v101: any = await rt.call(116, "Random", [_v99, _v100], this);
                acc = _v101;
                const _v102: any = (temps[1] = _v101);
                acc = _v102;
                _v1 = _v102;
                const _v103: any = 20;
                acc = _v103;
                const _v104: any = 35;
                acc = _v104;
                const _v105: any = await rt.call(116, "Random", [_v103, _v104], this);
                acc = _v105;
                const _v106: any = (temps[2] = _v105);
                acc = _v106;
                _v1 = _v106;
                const _v107: any = 250;
                acc = _v107;
                const _v108: any = 300;
                acc = _v108;
                const _v109: any = await rt.call(116, "Random", [_v107, _v108], this);
                acc = _v109;
                const _v110: any = (temps[3] = _v109);
                acc = _v110;
                _v1 = _v110;
                const _v111: any = (temps[1] ?? 0);
                acc = _v111;
                const _v112: any = (temps[2] ?? 0);
                acc = _v112;
                const _v113: any = rt.object(992, "Fwd");
                acc = _v113;
                const _v114: any = 0;
                acc = _v114;
                const _v115: any = 0;
                acc = _v115;
                const _v116: any = 7;
                acc = _v116;
                const _v117: any = rt.object(116, "lottobuck3");
                acc = _v117;
                const _v118: any = await rt.send(_v117, "posn", [_v111, _v112]);
                acc = _v118;
                const _v119: any = await rt.send(_v117, "setCycle", [_v113]);
                acc = _v119;
                const _v120: any = await rt.send(_v117, "setLoop", [_v114]);
                acc = _v120;
                const _v121: any = await rt.send(_v117, "setStep", [_v115, _v116]);
                acc = _v121;
                const _v122: any = await rt.send(_v117, "init", []);
                acc = _v122;
                _v1 = _v122;
                const _v123: any = (temps[3] ?? 0);
                acc = _v123;
                const _v124: any = (temps[2] = rt.op("+", (temps[2] ?? 0), _v123));
                acc = _v124;
                _v1 = _v124;
                const _v125: any = rt.object(992, "MoveTo");
                acc = _v125;
                const _v126: any = (temps[1] ?? 0);
                acc = _v126;
                const _v127: any = (temps[2] ?? 0);
                acc = _v127;
                const _v128: any = rt.object(116, "lottobuck3");
                acc = _v128;
                const _v129: any = await rt.send(_v128, "setMotion", [_v125, _v126, _v127]);
                acc = _v129;
                _v1 = _v129;
                const _v130: any = 1;
                acc = _v130;
                const _v131: any = 2;
                acc = _v131;
                const _v132: any = await rt.call(116, "Random", [_v130, _v131], this);
                acc = _v132;
                const _v133: any = rt.set(this, "cycles", _v132);
                acc = _v133;
                _v1 = _v133;
                break _branch4;
              }
              const _v134: any = 5;
              acc = _v134;
              _v1 = rt.op("==", _v3, _v134);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v135: any = 1;
                acc = _v135;
                const _v136: any = 2;
                acc = _v136;
                const _v137: any = await rt.call(116, "Random", [_v135, _v136], this);
                acc = _v137;
                const _v138: any = rt.set(this, "cycles", _v137);
                acc = _v138;
                _v1 = _v138;
                break _branch4;
              }
              const _v139: any = 6;
              acc = _v139;
              _v1 = rt.op("==", _v3, _v139);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v140: any = 100;
                acc = _v140;
                const _v141: any = 230;
                acc = _v141;
                const _v142: any = await rt.call(116, "Random", [_v140, _v141], this);
                acc = _v142;
                const _v143: any = (temps[1] = _v142);
                acc = _v143;
                _v1 = _v143;
                const _v144: any = 20;
                acc = _v144;
                const _v145: any = 35;
                acc = _v145;
                const _v146: any = await rt.call(116, "Random", [_v144, _v145], this);
                acc = _v146;
                const _v147: any = (temps[2] = _v146);
                acc = _v147;
                _v1 = _v147;
                const _v148: any = 250;
                acc = _v148;
                const _v149: any = 300;
                acc = _v149;
                const _v150: any = await rt.call(116, "Random", [_v148, _v149], this);
                acc = _v150;
                const _v151: any = (temps[3] = _v150);
                acc = _v151;
                _v1 = _v151;
                const _v152: any = (temps[1] ?? 0);
                acc = _v152;
                const _v153: any = (temps[2] ?? 0);
                acc = _v153;
                const _v154: any = rt.object(992, "Fwd");
                acc = _v154;
                const _v155: any = 0;
                acc = _v155;
                const _v156: any = 0;
                acc = _v156;
                const _v157: any = 7;
                acc = _v157;
                const _v158: any = rt.object(116, "lottobuck4");
                acc = _v158;
                const _v159: any = await rt.send(_v158, "posn", [_v152, _v153]);
                acc = _v159;
                const _v160: any = await rt.send(_v158, "setCycle", [_v154]);
                acc = _v160;
                const _v161: any = await rt.send(_v158, "setLoop", [_v155]);
                acc = _v161;
                const _v162: any = await rt.send(_v158, "setStep", [_v156, _v157]);
                acc = _v162;
                const _v163: any = await rt.send(_v158, "init", []);
                acc = _v163;
                _v1 = _v163;
                const _v164: any = (temps[3] ?? 0);
                acc = _v164;
                const _v165: any = (temps[2] = rt.op("+", (temps[2] ?? 0), _v164));
                acc = _v165;
                _v1 = _v165;
                const _v166: any = rt.object(992, "MoveTo");
                acc = _v166;
                const _v167: any = (temps[1] ?? 0);
                acc = _v167;
                const _v168: any = (temps[2] ?? 0);
                acc = _v168;
                const _v169: any = rt.object(116, "lottobuck4");
                acc = _v169;
                const _v170: any = await rt.send(_v169, "setMotion", [_v166, _v167, _v168]);
                acc = _v170;
                _v1 = _v170;
                const _v171: any = 1;
                acc = _v171;
                const _v172: any = 2;
                acc = _v172;
                const _v173: any = await rt.call(116, "Random", [_v171, _v172], this);
                acc = _v173;
                const _v174: any = rt.set(this, "cycles", _v173);
                acc = _v174;
                _v1 = _v174;
                break _branch4;
              }
              const _v175: any = 7;
              acc = _v175;
              _v1 = rt.op("==", _v3, _v175);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v176: any = 1;
                acc = _v176;
                const _v177: any = 2;
                acc = _v177;
                const _v178: any = await rt.call(116, "Random", [_v176, _v177], this);
                acc = _v178;
                const _v179: any = rt.set(this, "cycles", _v178);
                acc = _v179;
                _v1 = _v179;
                break _branch4;
              }
              const _v180: any = 8;
              acc = _v180;
              _v1 = rt.op("==", _v3, _v180);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v181: any = 100;
                acc = _v181;
                const _v182: any = 230;
                acc = _v182;
                const _v183: any = await rt.call(116, "Random", [_v181, _v182], this);
                acc = _v183;
                const _v184: any = (temps[1] = _v183);
                acc = _v184;
                _v1 = _v184;
                const _v185: any = 20;
                acc = _v185;
                const _v186: any = 35;
                acc = _v186;
                const _v187: any = await rt.call(116, "Random", [_v185, _v186], this);
                acc = _v187;
                const _v188: any = (temps[2] = _v187);
                acc = _v188;
                _v1 = _v188;
                const _v189: any = 250;
                acc = _v189;
                const _v190: any = 300;
                acc = _v190;
                const _v191: any = await rt.call(116, "Random", [_v189, _v190], this);
                acc = _v191;
                const _v192: any = (temps[3] = _v191);
                acc = _v192;
                _v1 = _v192;
                const _v193: any = (temps[1] ?? 0);
                acc = _v193;
                const _v194: any = (temps[2] ?? 0);
                acc = _v194;
                const _v195: any = rt.object(992, "Fwd");
                acc = _v195;
                const _v196: any = 0;
                acc = _v196;
                const _v197: any = 0;
                acc = _v197;
                const _v198: any = 7;
                acc = _v198;
                const _v199: any = rt.object(116, "lottobuck5");
                acc = _v199;
                const _v200: any = await rt.send(_v199, "posn", [_v193, _v194]);
                acc = _v200;
                const _v201: any = await rt.send(_v199, "setCycle", [_v195]);
                acc = _v201;
                const _v202: any = await rt.send(_v199, "setLoop", [_v196]);
                acc = _v202;
                const _v203: any = await rt.send(_v199, "setStep", [_v197, _v198]);
                acc = _v203;
                const _v204: any = await rt.send(_v199, "init", []);
                acc = _v204;
                _v1 = _v204;
                const _v205: any = (temps[3] ?? 0);
                acc = _v205;
                const _v206: any = (temps[2] = rt.op("+", (temps[2] ?? 0), _v205));
                acc = _v206;
                _v1 = _v206;
                const _v207: any = rt.object(992, "MoveTo");
                acc = _v207;
                const _v208: any = (temps[1] ?? 0);
                acc = _v208;
                const _v209: any = (temps[2] ?? 0);
                acc = _v209;
                const _v210: any = rt.object(116, "lottobuck5");
                acc = _v210;
                const _v211: any = await rt.send(_v210, "setMotion", [_v207, _v208, _v209]);
                acc = _v211;
                _v1 = _v211;
                const _v212: any = 1;
                acc = _v212;
                const _v213: any = 2;
                acc = _v213;
                const _v214: any = await rt.call(116, "Random", [_v212, _v213], this);
                acc = _v214;
                const _v215: any = rt.set(this, "cycles", _v214);
                acc = _v215;
                _v1 = _v215;
                break _branch4;
              }
              const _v216: any = 9;
              acc = _v216;
              _v1 = rt.op("==", _v3, _v216);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v217: any = 1;
                acc = _v217;
                const _v218: any = 2;
                acc = _v218;
                const _v219: any = await rt.call(116, "Random", [_v217, _v218], this);
                acc = _v219;
                const _v220: any = rt.set(this, "cycles", _v219);
                acc = _v220;
                _v1 = _v220;
                break _branch4;
              }
              const _v221: any = 10;
              acc = _v221;
              _v1 = rt.op("==", _v3, _v221);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v222: any = 100;
                acc = _v222;
                const _v223: any = 230;
                acc = _v223;
                const _v224: any = await rt.call(116, "Random", [_v222, _v223], this);
                acc = _v224;
                const _v225: any = (temps[1] = _v224);
                acc = _v225;
                _v1 = _v225;
                const _v226: any = 20;
                acc = _v226;
                const _v227: any = 35;
                acc = _v227;
                const _v228: any = await rt.call(116, "Random", [_v226, _v227], this);
                acc = _v228;
                const _v229: any = (temps[2] = _v228);
                acc = _v229;
                _v1 = _v229;
                const _v230: any = 250;
                acc = _v230;
                const _v231: any = 300;
                acc = _v231;
                const _v232: any = await rt.call(116, "Random", [_v230, _v231], this);
                acc = _v232;
                const _v233: any = (temps[3] = _v232);
                acc = _v233;
                _v1 = _v233;
                const _v234: any = (temps[1] ?? 0);
                acc = _v234;
                const _v235: any = (temps[2] ?? 0);
                acc = _v235;
                const _v236: any = rt.object(992, "Fwd");
                acc = _v236;
                const _v237: any = 0;
                acc = _v237;
                const _v238: any = 0;
                acc = _v238;
                const _v239: any = 7;
                acc = _v239;
                const _v240: any = rt.object(116, "lottobuck6");
                acc = _v240;
                const _v241: any = await rt.send(_v240, "posn", [_v234, _v235]);
                acc = _v241;
                const _v242: any = await rt.send(_v240, "setCycle", [_v236]);
                acc = _v242;
                const _v243: any = await rt.send(_v240, "setLoop", [_v237]);
                acc = _v243;
                const _v244: any = await rt.send(_v240, "setStep", [_v238, _v239]);
                acc = _v244;
                const _v245: any = await rt.send(_v240, "init", []);
                acc = _v245;
                _v1 = _v245;
                const _v246: any = (temps[3] ?? 0);
                acc = _v246;
                const _v247: any = (temps[2] = rt.op("+", (temps[2] ?? 0), _v246));
                acc = _v247;
                _v1 = _v247;
                const _v248: any = rt.object(992, "MoveTo");
                acc = _v248;
                const _v249: any = (temps[1] ?? 0);
                acc = _v249;
                const _v250: any = (temps[2] ?? 0);
                acc = _v250;
                const _v251: any = rt.object(116, "lottobuck6");
                acc = _v251;
                const _v252: any = await rt.send(_v251, "setMotion", [_v248, _v249, _v250]);
                acc = _v252;
                _v1 = _v252;
                const _v253: any = 1;
                acc = _v253;
                const _v254: any = 2;
                acc = _v254;
                const _v255: any = await rt.call(116, "Random", [_v253, _v254], this);
                acc = _v255;
                const _v256: any = rt.set(this, "cycles", _v255);
                acc = _v256;
                _v1 = _v256;
                break _branch4;
              }
              const _v257: any = 11;
              acc = _v257;
              _v1 = rt.op("==", _v3, _v257);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v258: any = 1;
                acc = _v258;
                const _v259: any = 2;
                acc = _v259;
                const _v260: any = await rt.call(116, "Random", [_v258, _v259], this);
                acc = _v260;
                const _v261: any = rt.set(this, "cycles", _v260);
                acc = _v261;
                _v1 = _v261;
                break _branch4;
              }
              const _v262: any = 12;
              acc = _v262;
              _v1 = rt.op("==", _v3, _v262);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v263: any = 100;
                acc = _v263;
                const _v264: any = 230;
                acc = _v264;
                const _v265: any = await rt.call(116, "Random", [_v263, _v264], this);
                acc = _v265;
                const _v266: any = (temps[1] = _v265);
                acc = _v266;
                _v1 = _v266;
                const _v267: any = 20;
                acc = _v267;
                const _v268: any = 35;
                acc = _v268;
                const _v269: any = await rt.call(116, "Random", [_v267, _v268], this);
                acc = _v269;
                const _v270: any = (temps[2] = _v269);
                acc = _v270;
                _v1 = _v270;
                const _v271: any = 250;
                acc = _v271;
                const _v272: any = 300;
                acc = _v272;
                const _v273: any = await rt.call(116, "Random", [_v271, _v272], this);
                acc = _v273;
                const _v274: any = (temps[3] = _v273);
                acc = _v274;
                _v1 = _v274;
                const _v275: any = (temps[1] ?? 0);
                acc = _v275;
                const _v276: any = (temps[2] ?? 0);
                acc = _v276;
                const _v277: any = rt.object(992, "Fwd");
                acc = _v277;
                const _v278: any = 0;
                acc = _v278;
                const _v279: any = 0;
                acc = _v279;
                const _v280: any = 7;
                acc = _v280;
                const _v281: any = rt.object(116, "lottobuck7");
                acc = _v281;
                const _v282: any = await rt.send(_v281, "posn", [_v275, _v276]);
                acc = _v282;
                const _v283: any = await rt.send(_v281, "setCycle", [_v277]);
                acc = _v283;
                const _v284: any = await rt.send(_v281, "setLoop", [_v278]);
                acc = _v284;
                const _v285: any = await rt.send(_v281, "setStep", [_v279, _v280]);
                acc = _v285;
                const _v286: any = await rt.send(_v281, "init", []);
                acc = _v286;
                _v1 = _v286;
                const _v287: any = (temps[3] ?? 0);
                acc = _v287;
                const _v288: any = (temps[2] = rt.op("+", (temps[2] ?? 0), _v287));
                acc = _v288;
                _v1 = _v288;
                const _v289: any = rt.object(992, "MoveTo");
                acc = _v289;
                const _v290: any = (temps[1] ?? 0);
                acc = _v290;
                const _v291: any = (temps[2] ?? 0);
                acc = _v291;
                const _v292: any = this;
                acc = _v292;
                const _v293: any = rt.object(116, "lottobuck7");
                acc = _v293;
                const _v294: any = await rt.send(_v293, "setMotion", [_v289, _v290, _v291, _v292]);
                acc = _v294;
                _v1 = _v294;
                break _branch4;
              }
              const _v295: any = 13;
              acc = _v295;
              _v1 = rt.op("==", _v3, _v295);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v296: any = rt.object(116, "lottobuck1");
                acc = _v296;
                const _v297: any = await rt.send(_v296, "stopUpd", []);
                acc = _v297;
                _v1 = _v297;
                const _v298: any = rt.object(116, "lottobuck2");
                acc = _v298;
                const _v299: any = await rt.send(_v298, "stopUpd", []);
                acc = _v299;
                _v1 = _v299;
                const _v300: any = rt.object(116, "lottobuck3");
                acc = _v300;
                const _v301: any = await rt.send(_v300, "stopUpd", []);
                acc = _v301;
                _v1 = _v301;
                const _v302: any = rt.object(116, "lottobuck4");
                acc = _v302;
                const _v303: any = await rt.send(_v302, "stopUpd", []);
                acc = _v303;
                _v1 = _v303;
                const _v304: any = rt.object(116, "lottobuck5");
                acc = _v304;
                const _v305: any = await rt.send(_v304, "stopUpd", []);
                acc = _v305;
                _v1 = _v305;
                const _v306: any = rt.object(116, "lottobuck6");
                acc = _v306;
                const _v307: any = await rt.send(_v306, "stopUpd", []);
                acc = _v307;
                _v1 = _v307;
                const _v308: any = rt.object(116, "lottobuck7");
                acc = _v308;
                const _v309: any = await rt.send(_v308, "stopUpd", []);
                acc = _v309;
                _v1 = _v309;
                const _v310: any = 1;
                acc = _v310;
                const _v311: any = rt.set(this, "cycles", _v310);
                acc = _v311;
                _v1 = _v311;
                break _branch4;
              }
              const _v312: any = 14;
              acc = _v312;
              _v1 = rt.op("==", _v3, _v312);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v313: any = 1;
                acc = _v313;
                const _v314: any = 29;
                acc = _v314;
                const _v315: any = 80;
                acc = _v315;
                const _v316: any = rt.object(992, "MoveTo");
                acc = _v316;
                const _v317: any = 159;
                acc = _v317;
                const _v318: any = 143;
                acc = _v318;
                const _v319: any = this;
                acc = _v319;
                const _v320: any = rt.object(116, "lottonote");
                acc = _v320;
                const _v321: any = await rt.send(_v320, "setLoop", [_v313]);
                acc = _v321;
                const _v322: any = await rt.send(_v320, "posn", [_v314, _v315]);
                acc = _v322;
                const _v323: any = await rt.send(_v320, "init", []);
                acc = _v323;
                const _v324: any = await rt.send(_v320, "setMotion", [_v316, _v317, _v318, _v319]);
                acc = _v324;
                _v1 = _v324;
                break _branch4;
              }
              const _v325: any = 15;
              acc = _v325;
              _v1 = rt.op("==", _v3, _v325);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v326: any = 1;
                acc = _v326;
                const _v327: any = rt.set(this, "cycles", _v326);
                acc = _v327;
                _v1 = _v327;
                break _branch4;
              }
              const _v328: any = 16;
              acc = _v328;
              _v1 = rt.op("==", _v3, _v328);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v329: any = rt.object(116, "lottonote");
                acc = _v329;
                const _v330: any = await rt.send(_v329, "stopUpd", []);
                acc = _v330;
                _v1 = _v330;
                const _v331: any = 1;
                acc = _v331;
                const _v332: any = rt.set(this, "cycles", _v331);
                acc = _v332;
                _v1 = _v332;
                break _branch4;
              }
              const _v333: any = 17;
              acc = _v333;
              _v1 = rt.op("==", _v3, _v333);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v334: any = acc;
                const _v335: any = rt.get(this, "register");
                acc = _v335;
                _v334 = _v335;
                if (rt.truth(_v335)) {
                  const _v336: any = 0;
                  acc = _v336;
                  const _v337: any = (temps[0] = _v336);
                  acc = _v337;
                  _v334 = _v337;
                  const _v338: any = rt.ref("local", 116, 5);
                  acc = _v338;
                  const _v339: any = 116;
                  acc = _v339;
                  const _v340: any = 0;
                  acc = _v340;
                  const _v341: any = rt.global(302);
                  acc = _v341;
                  const _v342: any = await rt.send(_v341, "actualName", []);
                  acc = _v342;
                  const _v343: any = await rt.call(116, "Format", [_v338, _v339, _v340, _v342], this);
                  acc = _v343;
                  const _v344: any = rt.setLocal(116, 0, _v343);
                  acc = _v344;
                  _v334 = _v344;
                  const _v345: any = 1;
                  acc = _v345;
                  const _v346: any = (temps[0] = _v345);
                  acc = _v346;
                  _v334 = _v346;
                }
                acc = _v334;
                _v1 = _v334;
                let _v347: any = acc;
                const _v348: any = (temps[0] ?? 0);
                acc = _v348;
                _v347 = _v348;
                if (rt.truth(_v348)) {
                  const _v349: any = 0;
                  acc = _v349;
                  const _v350: any = rt.ref("local", 116, (1 + (Number(_v349) & 65535)));
                  acc = _v350;
                  const _v351: any = rt.local(116, 0);
                  acc = _v351;
                  const _v352: any = 4;
                  acc = _v352;
                  const _v353: any = 0;
                  acc = _v353;
                  const _v354: any = await rt.call(116, "TextSize", [_v350, _v351, _v352, _v353], this);
                  acc = _v354;
                  _v347 = _v354;
                  const _v355: any = rt.local(116, 0);
                  acc = _v355;
                  const _v356: any = 100;
                  acc = _v356;
                  const _v357: any = 158;
                  acc = _v357;
                  const _v358: any = 3;
                  acc = _v358;
                  const _v359: any = rt.local(116, (1 + (Number(_v358) & 65535)));
                  acc = _v359;
                  const _v360: any = 2;
                  acc = _v360;
                  const _v361: any = rt.op("/", ...[_v359, _v360]);
                  acc = _v361;
                  const _v362: any = rt.op("-", ...[_v357, _v361]);
                  acc = _v362;
                  const _v363: any = 64;
                  acc = _v363;
                  const _v364: any = 102;
                  acc = _v364;
                  const _v365: any = 0;
                  acc = _v365;
                  const _v366: any = 103;
                  acc = _v366;
                  const _v367: any = -1;
                  acc = _v367;
                  const _v368: any = 105;
                  acc = _v368;
                  const _v369: any = 4;
                  acc = _v369;
                  const _v370: any = await rt.call(116, "Display", [_v355, _v356, _v362, _v363, _v364, _v365, _v366, _v367, _v368, _v369], this);
                  acc = _v370;
                  _v347 = _v370;
                }
                acc = _v347;
                _v1 = _v347;
                const _v371: any = rt.ref("global", 0, 100);
                acc = _v371;
                const _v372: any = 116;
                acc = _v372;
                const _v373: any = 1;
                acc = _v373;
                const _v374: any = rt.get(this, "register2");
                acc = _v374;
                const _v375: any = await rt.call(116, "Format", [_v371, _v372, _v373, _v374], this);
                acc = _v375;
                const _v376: any = rt.setLocal(116, 0, _v375);
                acc = _v376;
                _v1 = _v376;
                const _v377: any = 0;
                acc = _v377;
                const _v378: any = rt.ref("local", 116, (1 + (Number(_v377) & 65535)));
                acc = _v378;
                const _v379: any = rt.local(116, 0);
                acc = _v379;
                const _v380: any = 4;
                acc = _v380;
                const _v381: any = 0;
                acc = _v381;
                const _v382: any = await rt.call(116, "TextSize", [_v378, _v379, _v380, _v381], this);
                acc = _v382;
                _v1 = _v382;
                const _v383: any = rt.local(116, 0);
                acc = _v383;
                const _v384: any = 100;
                acc = _v384;
                const _v385: any = 160;
                acc = _v385;
                const _v386: any = 3;
                acc = _v386;
                const _v387: any = rt.local(116, (1 + (Number(_v386) & 65535)));
                acc = _v387;
                const _v388: any = 2;
                acc = _v388;
                const _v389: any = rt.op("/", ...[_v387, _v388]);
                acc = _v389;
                const _v390: any = rt.op("-", ...[_v385, _v389]);
                acc = _v390;
                const _v391: any = 125;
                acc = _v391;
                const _v392: any = 102;
                acc = _v392;
                const _v393: any = 0;
                acc = _v393;
                const _v394: any = 103;
                acc = _v394;
                const _v395: any = -1;
                acc = _v395;
                const _v396: any = 105;
                acc = _v396;
                const _v397: any = 4;
                acc = _v397;
                const _v398: any = await rt.call(116, "Display", [_v383, _v384, _v390, _v391, _v392, _v393, _v394, _v395, _v396, _v397], this);
                acc = _v398;
                _v1 = _v398;
                const _v399: any = 1;
                acc = _v399;
                const _v400: any = rt.set(this, "cycles", _v399);
                acc = _v400;
                _v1 = _v400;
                break _branch4;
              }
              const _v401: any = 18;
              acc = _v401;
              _v1 = rt.op("==", _v3, _v401);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v402: any = 240;
                acc = _v402;
                const _v403: any = await rt.call(0, "proc0_3", [_v402], this);
                acc = _v403;
                _v1 = _v403;
                const _v404: any = this;
                acc = _v404;
                const _v405: any = await rt.send(_v404, "cue", []);
                acc = _v405;
                _v1 = _v405;
                break _branch4;
              }
              const _v406: any = 19;
              acc = _v406;
              _v1 = rt.op("==", _v3, _v406);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v407: any = rt.object(116, "lottobuck1");
                acc = _v407;
                const _v408: any = await rt.send(_v407, "dispose", []);
                acc = _v408;
                _v1 = _v408;
                const _v409: any = rt.object(116, "lottobuck2");
                acc = _v409;
                const _v410: any = await rt.send(_v409, "dispose", []);
                acc = _v410;
                _v1 = _v410;
                const _v411: any = rt.object(116, "lottobuck3");
                acc = _v411;
                const _v412: any = await rt.send(_v411, "dispose", []);
                acc = _v412;
                _v1 = _v412;
                const _v413: any = rt.object(116, "lottobuck4");
                acc = _v413;
                const _v414: any = await rt.send(_v413, "dispose", []);
                acc = _v414;
                _v1 = _v414;
                const _v415: any = rt.object(116, "lottobuck5");
                acc = _v415;
                const _v416: any = await rt.send(_v415, "dispose", []);
                acc = _v416;
                _v1 = _v416;
                const _v417: any = rt.object(116, "lottobuck6");
                acc = _v417;
                const _v418: any = await rt.send(_v417, "dispose", []);
                acc = _v418;
                _v1 = _v418;
                const _v419: any = rt.object(116, "lottobuck7");
                acc = _v419;
                const _v420: any = await rt.send(_v419, "dispose", []);
                acc = _v420;
                _v1 = _v420;
                const _v421: any = rt.object(116, "lottonote");
                acc = _v421;
                const _v422: any = await rt.send(_v421, "dispose", []);
                acc = _v422;
                _v1 = _v422;
                const _v423: any = 2;
                acc = _v423;
                const _v424: any = rt.set(this, "cycles", _v423);
                acc = _v424;
                _v1 = _v424;
                break _branch4;
              }
              const _v425: any = 20;
              acc = _v425;
              _v1 = rt.op("==", _v3, _v425);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v426: any = await rt.call(0, "proc0_1", [], this);
                acc = _v426;
                _v1 = _v426;
                const _v427: any = 0;
                acc = _v427;
                const _v428: any = rt.get(this, "client");
                acc = _v428;
                const _v429: any = await rt.send(_v428, "script", [_v427]);
                acc = _v429;
                const _v430: any = await rt.send(_v428, "cue", []);
                acc = _v430;
                _v1 = _v430;
                const _v431: any = 1;
                acc = _v431;
                const _v432: any = rt.global(476);
                acc = _v432;
                const _v433: any = await rt.send(_v432, "loop", [_v431]);
                acc = _v433;
                _v1 = _v433;
                const _v434: any = 1;
                acc = _v434;
                const _v435: any = rt.setLocal(116, 55, _v434);
                acc = _v435;
                _v1 = _v435;
                break _branch4;
              }
            }
            acc = _v1;
            let _v436: any = acc;
            const _v437: any = rt.local(116, 55);
            acc = _v437;
            _v436 = _v437;
            if (rt.truth(_v437)) {
              const _acc438: any = acc;
              const _v439: any = 116;
              acc = _v439;
              const _args440: any[] = [_v439];
              await rt.call(116, "DisposeScript", _args440, this);
              const _v441: any = _args440.length === 2 ? _args440[1] : _acc438;
              acc = _v441;
              _v436 = _v441;
            }
            acc = _v436;
            return acc;
          },
        },
      },
      {
        name: "lottonote",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 340, "priority": 5},
        methods: {
          // SCI lottoScript.sc: lottonote.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "priority");
            acc = _v1;
            const _v2: any = 12;
            acc = _v2;
            const _v3: any = 12;
            acc = _v3;
            const _v4: any = this;
            acc = _v4;
            const _v5: any = await rt.send(_v4, "setPri", [_v1]);
            acc = _v5;
            const _v6: any = await rt.send(_v4, "setStep", [_v2, _v3]);
            acc = _v6;
            const _v7: any = await rt.superSend(this, {"script": 116, "name": "lottonote"}, "init", []);
            acc = _v7;
            return acc;
          },
        },
      },
      {
        name: "lottobuck1",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 340, "priority": 5, "cycleSpeed": 1, "moveSpeed": 1},
        methods: {
          // SCI lottoScript.sc: lottobuck1.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "priority");
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setPri", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 116, "name": "lottobuck1"}, "init", []);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "lottobuck2",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 340, "priority": 5, "cycleSpeed": 1, "moveSpeed": 1},
        methods: {
          // SCI lottoScript.sc: lottobuck2.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "priority");
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setPri", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 116, "name": "lottobuck2"}, "init", []);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "lottobuck3",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 340, "priority": 5, "cycleSpeed": 1, "moveSpeed": 1},
        methods: {
          // SCI lottoScript.sc: lottobuck3.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "priority");
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setPri", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 116, "name": "lottobuck3"}, "init", []);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "lottobuck4",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 340, "priority": 5, "cycleSpeed": 1, "moveSpeed": 1},
        methods: {
          // SCI lottoScript.sc: lottobuck4.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "priority");
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setPri", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 116, "name": "lottobuck4"}, "init", []);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "lottobuck5",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 340, "priority": 5, "cycleSpeed": 1, "moveSpeed": 1},
        methods: {
          // SCI lottoScript.sc: lottobuck5.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "priority");
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setPri", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 116, "name": "lottobuck5"}, "init", []);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "lottobuck6",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 340, "priority": 5, "cycleSpeed": 1, "moveSpeed": 1},
        methods: {
          // SCI lottoScript.sc: lottobuck6.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "priority");
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setPri", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 116, "name": "lottobuck6"}, "init", []);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "lottobuck7",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 340, "priority": 5, "cycleSpeed": 1, "moveSpeed": 1},
        methods: {
          // SCI lottoScript.sc: lottobuck7.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "priority");
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "setPri", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 116, "name": "lottobuck7"}, "init", []);
            acc = _v4;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {"0": "lottoScript"},
  });
}
