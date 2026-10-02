// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/WhereShouldIGo.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 02c3c378ade8b6d2aa0ee28dbe9274750ccee101a61d129bad322332fb2ba85a
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(300, {
    name: "WhereShouldIGo",
    uses: [0, 109, 999],
    locals: [],
    objects: [
      {
        name: "WhereShouldIGo",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI WhereShouldIGo.sc: WhereShouldIGo.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = await rt.send(_v1, "hapStat", []);
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            const _v4: any = await rt.send(_v3, "hapGoal", []);
            acc = _v4;
            const _v5: any = rt.op(">=", ...[_v2, _v4]);
            acc = _v5;
            const _v6: any = rt.setGlobal(550, _v5);
            acc = _v6;
            const _v7: any = 0;
            acc = _v7;
            const _v8: any = rt.setGlobal(551, _v7);
            acc = _v8;
            let _v9: any = acc;
            let _v10: any = 1;
            if (rt.truth(_v10)) {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = await rt.send(_v11, "monStat", []);
              acc = _v12;
              const _v13: any = (args[0] ?? 0);
              acc = _v13;
              const _v14: any = await rt.send(_v13, "monGoal", []);
              acc = _v14;
              const _v15: any = rt.op("<", ...[_v12, _v14]);
              acc = _v15;
              _v10 = _v15;
            }
            if (rt.truth(_v10)) {
              const _v16: any = (args[0] ?? 0);
              acc = _v16;
              const _v17: any = await rt.send(_v16, "hapStat", []);
              acc = _v17;
              const _v18: any = (args[0] ?? 0);
              acc = _v18;
              const _v19: any = await rt.send(_v18, "hapGoal", []);
              acc = _v19;
              const _v20: any = rt.op(">=", ...[_v17, _v19]);
              acc = _v20;
              _v10 = _v20;
            }
            if (rt.truth(_v10)) {
              const _v21: any = (args[0] ?? 0);
              acc = _v21;
              const _v22: any = await rt.send(_v21, "eduStat", []);
              acc = _v22;
              const _v23: any = (args[0] ?? 0);
              acc = _v23;
              const _v24: any = await rt.send(_v23, "eduGoal", []);
              acc = _v24;
              const _v25: any = rt.op(">=", ...[_v22, _v24]);
              acc = _v25;
              _v10 = _v25;
            }
            if (rt.truth(_v10)) {
              const _v26: any = (args[0] ?? 0);
              acc = _v26;
              const _v27: any = await rt.send(_v26, "carStat", []);
              acc = _v27;
              const _v28: any = (args[0] ?? 0);
              acc = _v28;
              const _v29: any = await rt.send(_v28, "carGoal", []);
              acc = _v29;
              const _v30: any = rt.op(">=", ...[_v27, _v29]);
              acc = _v30;
              _v10 = _v30;
            }
            acc = _v10;
            _v9 = _v10;
            if (rt.truth(_v10)) {
              const _v31: any = 1;
              acc = _v31;
              const _v32: any = rt.setGlobal(551, _v31);
              acc = _v32;
              _v9 = _v32;
            }
            acc = _v9;
            let _v33: any = acc;
            let _v34: any = 0;
            if (!rt.truth(_v34)) {
              const _v35: any = rt.global(400);
              acc = _v35;
              const _v36: any = 0;
              acc = _v36;
              const _v37: any = rt.op("<", ...[_v35, _v36]);
              acc = _v37;
              _v34 = _v37;
            }
            if (!rt.truth(_v34)) {
              const _v38: any = rt.global(400);
              acc = _v38;
              const _v39: any = 11;
              acc = _v39;
              const _v40: any = rt.op(">", ...[_v38, _v39]);
              acc = _v40;
              _v34 = _v40;
            }
            acc = _v34;
            _v33 = _v34;
            if (rt.truth(_v34)) {
              const _v41: any = 0;
              acc = _v41;
              const _v42: any = rt.setGlobal(400, _v41);
              acc = _v42;
              _v33 = _v42;
            }
            acc = _v33;
            const _v43: any = 0;
            acc = _v43;
            const _v44: any = rt.setGlobal(403, _v43);
            acc = _v44;
            const _v45: any = 0;
            acc = _v45;
            const _v46: any = rt.setGlobal(407, _v45);
            acc = _v46;
            const _v47: any = 0;
            acc = _v47;
            const _v48: any = rt.setGlobal(409, _v47);
            acc = _v48;
            const _v49: any = 0;
            acc = _v49;
            const _v50: any = rt.setGlobal(410, _v49);
            acc = _v50;
            const _v51: any = 1;
            acc = _v51;
            const _v52: any = rt.setGlobal(408, _v51);
            acc = _v52;
            let _v53: any = acc;
            const _v54: any = (args[0] ?? 0);
            acc = _v54;
            const _v55: any = await rt.send(_v54, "bankBalHi", []);
            acc = _v55;
            _v53 = _v55;
            if (rt.truth(_v55)) {
              const _v56: any = 2000;
              acc = _v56;
              _v53 = _v56;
            } else {
              const _v57: any = (args[0] ?? 0);
              acc = _v57;
              const _v58: any = await rt.send(_v57, "bankBal", []);
              acc = _v58;
              _v53 = _v58;
            }
            acc = _v53;
            const _v59: any = rt.setGlobal(499, _v53);
            acc = _v59;
            let _v60: any = acc;
            const _v61: any = 21;
            acc = _v61;
            const _v62: any = (args[0] ?? 0);
            acc = _v62;
            const _v63: any = await rt.send(_v62, "durables", []);
            acc = _v63;
            const _v64: any = await rt.send(_v63, "objectAtIndexQuan", [_v61]);
            acc = _v64;
            _v60 = _v64;
            if (rt.truth(_v64)) {
              const _v65: any = 3;
              acc = _v65;
              _v60 = _v65;
            } else {
              const _v66: any = 10;
              acc = _v66;
              _v60 = _v66;
            }
            acc = _v60;
            const _v67: any = rt.setGlobal(498, _v60);
            acc = _v67;
            let _v68: any = acc;
            const _v69: any = (args[0] ?? 0);
            acc = _v69;
            const _v70: any = await rt.send(_v69, "uniform", []);
            acc = _v70;
            _branch71: {
              const _v72: any = 34;
              acc = _v72;
              _v68 = rt.op("==", _v70, _v72);
              acc = _v68;
              if (rt.truth(_v68)) {
                const _v73: any = 295;
                acc = _v73;
                _v68 = _v73;
                break _branch71;
              }
              const _v74: any = 35;
              acc = _v74;
              _v68 = rt.op("==", _v70, _v74);
              acc = _v68;
              if (rt.truth(_v68)) {
                const _v75: any = 125;
                acc = _v75;
                _v68 = _v75;
                break _branch71;
              }
              const _v76: any = 36;
              acc = _v76;
              _v68 = rt.op("==", _v70, _v76);
              acc = _v68;
              if (rt.truth(_v68)) {
                const _v77: any = 73;
                acc = _v77;
                _v68 = _v77;
                break _branch71;
              }
            }
            acc = _v68;
            const _v78: any = rt.setGlobal(489, _v68);
            acc = _v78;
            const _v79: any = rt.global(309);
            acc = _v79;
            const _v80: any = rt.global(489);
            acc = _v80;
            const _v81: any = await rt.call(109, "proc109_0", [_v79, _v80], this);
            acc = _v81;
            const _v82: any = rt.setGlobal(412, _v81);
            acc = _v82;
            let _v83: any = acc;
            const _v84: any = rt.global(498);
            acc = _v84;
            const _v85: any = 3;
            acc = _v85;
            const _v86: any = rt.op("==", ...[_v84, _v85]);
            acc = _v86;
            _v83 = _v86;
            if (rt.truth(_v86)) {
              const _v87: any = 55;
              acc = _v87;
              _v83 = _v87;
            } else {
              const _v88: any = 65;
              acc = _v88;
              _v83 = _v88;
            }
            acc = _v83;
            const _v89: any = rt.setGlobal(490, _v83);
            acc = _v89;
            const _v90: any = rt.global(309);
            acc = _v90;
            const _v91: any = rt.global(490);
            acc = _v91;
            const _v92: any = await rt.call(109, "proc109_0", [_v90, _v91], this);
            acc = _v92;
            const _v93: any = rt.setGlobal(491, _v92);
            acc = _v93;
            let _v94: any = acc;
            let _v95: any = 0;
            if (!rt.truth(_v95)) {
              let _v96: any = 1;
              if (rt.truth(_v96)) {
                const _v97: any = 2;
                acc = _v97;
                const _v98: any = (args[0] ?? 0);
                acc = _v98;
                const _v99: any = await rt.send(_v98, "consumables", []);
                acc = _v99;
                const _v100: any = await rt.send(_v99, "objectAtIndex", [_v97]);
                acc = _v100;
                const _v101: any = rt.setGlobal(411, _v100);
                acc = _v101;
                _v96 = _v101;
              }
              if (rt.truth(_v96)) {
                const _v102: any = rt.global(411);
                acc = _v102;
                const _v103: any = await rt.send(_v102, "quantity", []);
                acc = _v103;
                _v96 = _v103;
              }
              acc = _v96;
              _v95 = _v96;
            }
            if (!rt.truth(_v95)) {
              let _v104: any = 1;
              if (rt.truth(_v104)) {
                const _v105: any = 3;
                acc = _v105;
                const _v106: any = (args[0] ?? 0);
                acc = _v106;
                const _v107: any = await rt.send(_v106, "consumables", []);
                acc = _v107;
                const _v108: any = await rt.send(_v107, "objectAtIndex", [_v105]);
                acc = _v108;
                const _v109: any = rt.setGlobal(411, _v108);
                acc = _v109;
                _v104 = _v109;
              }
              if (rt.truth(_v104)) {
                const _v110: any = rt.global(411);
                acc = _v110;
                const _v111: any = await rt.send(_v110, "quantity", []);
                acc = _v111;
                _v104 = _v111;
              }
              acc = _v104;
              _v95 = _v104;
            }
            if (!rt.truth(_v95)) {
              let _v112: any = 1;
              if (rt.truth(_v112)) {
                const _v113: any = 4;
                acc = _v113;
                const _v114: any = (args[0] ?? 0);
                acc = _v114;
                const _v115: any = await rt.send(_v114, "consumables", []);
                acc = _v115;
                const _v116: any = await rt.send(_v115, "objectAtIndex", [_v113]);
                acc = _v116;
                const _v117: any = rt.setGlobal(411, _v116);
                acc = _v117;
                _v112 = _v117;
              }
              if (rt.truth(_v112)) {
                const _v118: any = rt.global(411);
                acc = _v118;
                const _v119: any = await rt.send(_v118, "quantity", []);
                acc = _v119;
                _v112 = _v119;
              }
              acc = _v112;
              _v95 = _v112;
            }
            if (!rt.truth(_v95)) {
              let _v120: any = 1;
              if (rt.truth(_v120)) {
                const _v121: any = 5;
                acc = _v121;
                const _v122: any = (args[0] ?? 0);
                acc = _v122;
                const _v123: any = await rt.send(_v122, "consumables", []);
                acc = _v123;
                const _v124: any = await rt.send(_v123, "objectAtIndex", [_v121]);
                acc = _v124;
                const _v125: any = rt.setGlobal(411, _v124);
                acc = _v125;
                _v120 = _v125;
              }
              if (rt.truth(_v120)) {
                const _v126: any = rt.global(411);
                acc = _v126;
                const _v127: any = await rt.send(_v126, "quantity", []);
                acc = _v127;
                _v120 = _v127;
              }
              acc = _v120;
              _v95 = _v120;
            }
            acc = _v95;
            _v94 = _v95;
            if (rt.truth(_v95)) {
              const _v128: any = 1;
              acc = _v128;
              const _v129: any = rt.setGlobal(411, _v128);
              acc = _v129;
              _v94 = _v129;
            } else {
              let _v130: any = acc;
              const _v131: any = 1;
              acc = _v131;
              const _v132: any = (args[0] ?? 0);
              acc = _v132;
              const _v133: any = await rt.send(_v132, "consumables", []);
              acc = _v133;
              const _v134: any = await rt.send(_v133, "objectAtIndex", [_v131]);
              acc = _v134;
              const _v135: any = rt.setGlobal(411, _v134);
              acc = _v135;
              _v130 = _v135;
              if (rt.truth(_v135)) {
                const _v136: any = rt.global(411);
                acc = _v136;
                const _v137: any = await rt.send(_v136, "quantity", []);
                acc = _v137;
                _v130 = _v137;
              }
              acc = _v130;
              const _v138: any = rt.setGlobal(411, _v130);
              acc = _v138;
              _v94 = _v138;
            }
            acc = _v94;
            const _v139: any = 0;
            acc = _v139;
            const _v140: any = rt.setGlobal(496, _v139);
            acc = _v140;
            const _v141: any = rt.setGlobal(497, _v140);
            acc = _v141;
            const _v142: any = rt.setGlobal(486, _v141);
            acc = _v142;
            let _v143: any = acc;
            const _v144: any = (args[0] ?? 0);
            acc = _v144;
            const _v145: any = await rt.send(_v144, "durables", []);
            acc = _v145;
            const _v146: any = await rt.send(_v145, "size", []);
            acc = _v146;
            _v143 = _v146;
            if (rt.truth(_v146)) {
              const _v149: any = 0;
              acc = _v149;
              const _v150: any = (temps[0] = _v149);
              acc = _v150;
              _loop147: for (;;) {
                const _v151: any = (temps[0] ?? 0);
                acc = _v151;
                const _v152: any = (args[0] ?? 0);
                acc = _v152;
                const _v153: any = await rt.send(_v152, "durables", []);
                acc = _v153;
                const _v154: any = await rt.send(_v153, "size", []);
                acc = _v154;
                const _v155: any = rt.op("<", ...[_v151, _v154]);
                acc = _v155;
                if (!rt.truth(_v155)) break _loop147;
                _continue148: {
                  let _v156: any = acc;
                  const _v157: any = (temps[0] ?? 0);
                  acc = _v157;
                  const _v158: any = (args[0] ?? 0);
                  acc = _v158;
                  const _v159: any = await rt.send(_v158, "durables", []);
                  acc = _v159;
                  const _v160: any = await rt.send(_v159, "at", [_v157]);
                  acc = _v160;
                  const _v161: any = await rt.send(_v160, "quantity", []);
                  acc = _v161;
                  _v156 = _v161;
                  if (rt.truth(_v161)) {
                    const _v162: any = rt.global(309);
                    acc = _v162;
                    const _v163: any = (temps[0] ?? 0);
                    acc = _v163;
                    const _v164: any = (args[0] ?? 0);
                    acc = _v164;
                    const _v165: any = await rt.send(_v164, "durables", []);
                    acc = _v165;
                    const _v166: any = await rt.send(_v165, "at", [_v163]);
                    acc = _v166;
                    const _v167: any = await rt.send(_v166, "pricePaid", []);
                    acc = _v167;
                    const _v168: any = await rt.call(109, "proc109_0", [_v162, _v167], this);
                    acc = _v168;
                    const _v169: any = 4;
                    acc = _v169;
                    const _v170: any = rt.op("*", ...[_v168, _v169]);
                    acc = _v170;
                    const _v171: any = 10;
                    acc = _v171;
                    const _v172: any = rt.op("/", ...[_v170, _v171]);
                    acc = _v172;
                    const _v173: any = rt.setGlobal(486, rt.op("+", rt.global(486), _v172));
                    acc = _v173;
                    _v156 = _v173;
                  }
                  acc = _v156;
                  let _v174: any = acc;
                  const _v175: any = (temps[0] ?? 0);
                  acc = _v175;
                  const _v176: any = (args[0] ?? 0);
                  acc = _v176;
                  const _v177: any = await rt.send(_v176, "durables", []);
                  acc = _v177;
                  const _v178: any = await rt.send(_v177, "at", [_v175]);
                  acc = _v178;
                  const _v179: any = await rt.send(_v178, "attributes", []);
                  acc = _v179;
                  const _v180: any = 24;
                  acc = _v180;
                  const _v181: any = rt.op("&", ...[_v179, _v180]);
                  acc = _v181;
                  _v174 = _v181;
                  if (rt.truth(_v181)) {
                    const _v182: any = (temps[0] ?? 0);
                    acc = _v182;
                    const _v183: any = (args[0] ?? 0);
                    acc = _v183;
                    const _v184: any = await rt.send(_v183, "durables", []);
                    acc = _v184;
                    const _v185: any = await rt.send(_v184, "at", [_v182]);
                    acc = _v185;
                    const _v186: any = await rt.send(_v185, "redemptionPrice", []);
                    acc = _v186;
                    const _v187: any = rt.setGlobal(496, rt.op("+", rt.global(496), _v186));
                    acc = _v187;
                    _v174 = _v187;
                    let _v188: any = acc;
                    _branch189: {
                      const _v190: any = rt.global(497);
                      acc = _v190;
                      const _v191: any = rt.op("not", ...[_v190]);
                      acc = _v191;
                      _v188 = _v191;
                      acc = _v188;
                      if (rt.truth(_v188)) {
                        const _v192: any = rt.global(496);
                        acc = _v192;
                        const _v193: any = rt.setGlobal(497, _v192);
                        acc = _v193;
                        _v188 = _v193;
                        break _branch189;
                      }
                      const _v194: any = (temps[0] ?? 0);
                      acc = _v194;
                      const _v195: any = (args[0] ?? 0);
                      acc = _v195;
                      const _v196: any = await rt.send(_v195, "durables", []);
                      acc = _v196;
                      const _v197: any = await rt.send(_v196, "at", [_v194]);
                      acc = _v197;
                      const _v198: any = await rt.send(_v197, "redemptionPrice", []);
                      acc = _v198;
                      const _v199: any = rt.global(497);
                      acc = _v199;
                      const _v200: any = rt.op("<", ...[_v198, _v199]);
                      acc = _v200;
                      _v188 = _v200;
                      acc = _v188;
                      if (rt.truth(_v188)) {
                        const _v201: any = (temps[0] ?? 0);
                        acc = _v201;
                        const _v202: any = (args[0] ?? 0);
                        acc = _v202;
                        const _v203: any = await rt.send(_v202, "durables", []);
                        acc = _v203;
                        const _v204: any = await rt.send(_v203, "at", [_v201]);
                        acc = _v204;
                        const _v205: any = await rt.send(_v204, "redemptionPrice", []);
                        acc = _v205;
                        const _v206: any = rt.setGlobal(497, _v205);
                        acc = _v206;
                        _v188 = _v206;
                        break _branch189;
                      }
                    }
                    acc = _v188;
                    _v174 = _v188;
                  }
                  acc = _v174;
                }
                const _v207: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                acc = _v207;
              }
              _v143 = acc;
            }
            acc = _v143;
            const _v208: any = 8;
            acc = _v208;
            const _v209: any = (args[0] ?? 0);
            acc = _v209;
            const _v210: any = await rt.send(_v209, "wage", []);
            acc = _v210;
            const _v211: any = rt.op("*", ...[_v208, _v210]);
            acc = _v211;
            const _v212: any = rt.setGlobal(492, _v211);
            acc = _v212;
            let _v213: any = acc;
            const _v214: any = rt.global(500);
            acc = _v214;
            const _v215: any = 1;
            acc = _v215;
            const _v216: any = rt.op("==", ...[_v214, _v215]);
            acc = _v216;
            _v213 = _v216;
            if (rt.truth(_v216)) {
              const _v217: any = await rt.call(300, "SetDebug", [], this);
              acc = _v217;
              _v213 = _v217;
            }
            acc = _v213;
            let _v218: any = acc;
            let _v219: any = 1;
            if (rt.truth(_v219)) {
              const _v220: any = (args[0] ?? 0);
              acc = _v220;
              const _v221: any = await rt.send(_v220, "wage", []);
              acc = _v221;
              const _v222: any = rt.op("not", ...[_v221]);
              acc = _v222;
              _v219 = _v222;
            }
            if (rt.truth(_v219)) {
              const _v223: any = rt.global(402);
              acc = _v223;
              const _v224: any = rt.op("not", ...[_v223]);
              acc = _v224;
              _v219 = _v224;
            }
            acc = _v219;
            _v218 = _v219;
            if (rt.truth(_v219)) {
              const _v225: any = 1;
              acc = _v225;
              const _v226: any = rt.setGlobal(403, _v225);
              acc = _v226;
              _v218 = _v226;
              const _v227: any = 3;
              acc = _v227;
              const _v228: any = rt.setGlobal(407, _v227);
              acc = _v228;
              _v218 = _v228;
              const _v229: any = 6;
              acc = _v229;
              return _v229;
              _v218 = acc;
            }
            acc = _v218;
            let _v230: any = acc;
            const _v231: any = rt.global(500);
            acc = _v231;
            const _v232: any = 2;
            acc = _v232;
            const _v233: any = rt.op("==", ...[_v231, _v232]);
            acc = _v233;
            _v230 = _v233;
            if (rt.truth(_v233)) {
              const _v234: any = await rt.call(300, "SetDebug", [], this);
              acc = _v234;
              _v230 = _v234;
            }
            acc = _v230;
            let _v235: any = acc;
            let _v236: any = 1;
            if (rt.truth(_v236)) {
              const _v237: any = rt.global(405);
              acc = _v237;
              const _v238: any = rt.op("not", ...[_v237]);
              acc = _v238;
              _v236 = _v238;
            }
            if (rt.truth(_v236)) {
              let _v239: any = 0;
              if (!rt.truth(_v239)) {
                const _v240: any = rt.global(372);
                acc = _v240;
                const _v241: any = 4;
                acc = _v241;
                const _v242: any = rt.op("mod", ...[_v240, _v241]);
                acc = _v242;
                const _v243: any = rt.op("not", ...[_v242]);
                acc = _v243;
                _v239 = _v243;
              }
              if (!rt.truth(_v239)) {
                const _v244: any = rt.global(302);
                acc = _v244;
                const _v245: any = await rt.send(_v244, "leaveOpen", []);
                acc = _v245;
                _v239 = _v245;
              }
              acc = _v239;
              _v236 = _v239;
            }
            acc = _v236;
            _v235 = _v236;
            if (rt.truth(_v236)) {
              let _v246: any = acc;
              const _v247: any = rt.global(500);
              acc = _v247;
              const _v248: any = 3;
              acc = _v248;
              const _v249: any = rt.op("==", ...[_v247, _v248]);
              acc = _v249;
              _v246 = _v249;
              if (rt.truth(_v249)) {
                const _v250: any = await rt.call(300, "SetDebug", [], this);
                acc = _v250;
                _v246 = _v250;
              }
              acc = _v246;
              _v235 = _v246;
              let _v251: any = acc;
              let _v252: any = 1;
              if (rt.truth(_v252)) {
                const _v253: any = rt.global(411);
                acc = _v253;
                const _v254: any = rt.op("not", ...[_v253]);
                acc = _v254;
                _v252 = _v254;
              }
              if (rt.truth(_v252)) {
                const _v255: any = (args[0] ?? 0);
                acc = _v255;
                const _v256: any = await rt.send(_v255, "weeksOfClothing", []);
                acc = _v256;
                const _v257: any = 1;
                acc = _v257;
                const _v258: any = rt.op(">", ...[_v256, _v257]);
                acc = _v258;
                _v252 = _v258;
              }
              if (rt.truth(_v252)) {
                const _v259: any = (args[0] ?? 0);
                acc = _v259;
                const _v260: any = await rt.call(0, "proc0_11", [_v259], this);
                acc = _v260;
                const _v261: any = (args[0] ?? 0);
                acc = _v261;
                const _v262: any = await rt.send(_v261, "curRent", []);
                acc = _v262;
                const _v263: any = rt.global(491);
                acc = _v263;
                const _v264: any = rt.op("+", ...[_v262, _v263]);
                acc = _v264;
                const _v265: any = rt.op(">=", ...[_v260, _v264]);
                acc = _v265;
                _v252 = _v265;
              }
              acc = _v252;
              _v251 = _v252;
              if (rt.truth(_v252)) {
                const _v266: any = 2;
                acc = _v266;
                const _v267: any = rt.setGlobal(403, _v266);
                acc = _v267;
                _v251 = _v267;
                const _v268: any = 7;
                acc = _v268;
                const _v269: any = rt.setGlobal(407, _v268);
                acc = _v269;
                _v251 = _v269;
                const _v270: any = 2;
                acc = _v270;
                const _v271: any = rt.setGlobal(409, _v270);
                acc = _v271;
                _v251 = _v271;
                const _v272: any = rt.global(400);
                acc = _v272;
                const _v273: any = 1;
                acc = _v273;
                const _v274: any = rt.global(498);
                acc = _v274;
                const _v275: any = await rt.call(300, "localproc_5", [_v272, _v273, _v274], this);
                acc = _v275;
                return _v275;
                _v251 = acc;
              }
              acc = _v251;
              _v235 = _v251;
              let _v276: any = acc;
              const _v277: any = rt.global(500);
              acc = _v277;
              const _v278: any = 4;
              acc = _v278;
              const _v279: any = rt.op("==", ...[_v277, _v278]);
              acc = _v279;
              _v276 = _v279;
              if (rt.truth(_v279)) {
                const _v280: any = await rt.call(300, "SetDebug", [], this);
                acc = _v280;
                _v276 = _v280;
              }
              acc = _v276;
              _v235 = _v276;
              let _v281: any = acc;
              const _v282: any = (args[0] ?? 0);
              acc = _v282;
              const _v283: any = await rt.send(_v282, "weeksOfClothing", []);
              acc = _v283;
              const _v284: any = 1;
              acc = _v284;
              const _v285: any = rt.op("<=", ...[_v283, _v284]);
              acc = _v285;
              _v281 = _v285;
              if (rt.truth(_v285)) {
                let _v286: any = acc;
                const _v287: any = rt.global(500);
                acc = _v287;
                const _v288: any = 5;
                acc = _v288;
                const _v289: any = rt.op("==", ...[_v287, _v288]);
                acc = _v289;
                _v286 = _v289;
                if (rt.truth(_v289)) {
                  const _v290: any = await rt.call(300, "SetDebug", [], this);
                  acc = _v290;
                  _v286 = _v290;
                }
                acc = _v286;
                _v281 = _v286;
                let _v291: any = acc;
                let _v292: any = 1;
                if (rt.truth(_v292)) {
                  const _v293: any = rt.global(411);
                  acc = _v293;
                  const _v294: any = rt.op("not", ...[_v293]);
                  acc = _v294;
                  _v292 = _v294;
                }
                if (rt.truth(_v292)) {
                  const _v295: any = (args[0] ?? 0);
                  acc = _v295;
                  const _v296: any = await rt.call(0, "proc0_11", [_v295], this);
                  acc = _v296;
                  const _v297: any = (args[0] ?? 0);
                  acc = _v297;
                  const _v298: any = await rt.send(_v297, "curRent", []);
                  acc = _v298;
                  const _v299: any = rt.global(412);
                  acc = _v299;
                  const _v300: any = rt.global(491);
                  acc = _v300;
                  const _v301: any = rt.op("+", ...[_v298, _v299, _v300]);
                  acc = _v301;
                  const _v302: any = rt.op(">=", ...[_v296, _v301]);
                  acc = _v302;
                  _v292 = _v302;
                }
                acc = _v292;
                _v291 = _v292;
                if (rt.truth(_v292)) {
                  const _v303: any = 3;
                  acc = _v303;
                  const _v304: any = rt.setGlobal(403, _v303);
                  acc = _v304;
                  _v291 = _v304;
                  const _v305: any = 7;
                  acc = _v305;
                  const _v306: any = rt.setGlobal(407, _v305);
                  acc = _v306;
                  _v291 = _v306;
                  const _v307: any = 2;
                  acc = _v307;
                  const _v308: any = rt.setGlobal(409, _v307);
                  acc = _v308;
                  _v291 = _v308;
                  const _v309: any = 11;
                  acc = _v309;
                  const _v310: any = rt.setGlobal(410, _v309);
                  acc = _v310;
                  _v291 = _v310;
                  const _v311: any = rt.global(400);
                  acc = _v311;
                  const _v312: any = 1;
                  acc = _v312;
                  const _v313: any = rt.global(498);
                  acc = _v313;
                  const _v314: any = 9;
                  acc = _v314;
                  const _v315: any = await rt.call(300, "localproc_5", [_v311, _v312, _v313, _v314], this);
                  acc = _v315;
                  return _v315;
                  _v291 = acc;
                }
                acc = _v291;
                _v281 = _v291;
                let _v316: any = acc;
                const _v317: any = rt.global(500);
                acc = _v317;
                const _v318: any = 6;
                acc = _v318;
                const _v319: any = rt.op("==", ...[_v317, _v318]);
                acc = _v319;
                _v316 = _v319;
                if (rt.truth(_v319)) {
                  const _v320: any = await rt.call(300, "SetDebug", [], this);
                  acc = _v320;
                  _v316 = _v320;
                }
                acc = _v316;
                _v281 = _v316;
                let _v321: any = acc;
                let _v322: any = 1;
                if (rt.truth(_v322)) {
                  const _v323: any = rt.global(411);
                  acc = _v323;
                  _v322 = _v323;
                }
                if (rt.truth(_v322)) {
                  const _v324: any = (args[0] ?? 0);
                  acc = _v324;
                  const _v325: any = await rt.call(0, "proc0_11", [_v324], this);
                  acc = _v325;
                  const _v326: any = (args[0] ?? 0);
                  acc = _v326;
                  const _v327: any = await rt.send(_v326, "curRent", []);
                  acc = _v327;
                  const _v328: any = rt.global(412);
                  acc = _v328;
                  const _v329: any = rt.op("+", ...[_v327, _v328]);
                  acc = _v329;
                  const _v330: any = rt.op(">=", ...[_v325, _v329]);
                  acc = _v330;
                  _v322 = _v330;
                }
                acc = _v322;
                _v321 = _v322;
                if (rt.truth(_v322)) {
                  const _v331: any = 4;
                  acc = _v331;
                  const _v332: any = rt.setGlobal(403, _v331);
                  acc = _v332;
                  _v321 = _v332;
                  const _v333: any = 7;
                  acc = _v333;
                  const _v334: any = rt.setGlobal(407, _v333);
                  acc = _v334;
                  _v321 = _v334;
                  const _v335: any = 11;
                  acc = _v335;
                  const _v336: any = rt.setGlobal(409, _v335);
                  acc = _v336;
                  _v321 = _v336;
                  const _v337: any = rt.global(400);
                  acc = _v337;
                  const _v338: any = 1;
                  acc = _v338;
                  const _v339: any = 9;
                  acc = _v339;
                  const _v340: any = await rt.call(300, "localproc_5", [_v337, _v338, _v339], this);
                  acc = _v340;
                  return _v340;
                  _v321 = acc;
                }
                acc = _v321;
                _v281 = _v321;
                let _v341: any = acc;
                const _v342: any = rt.global(500);
                acc = _v342;
                const _v343: any = 7;
                acc = _v343;
                const _v344: any = rt.op("==", ...[_v342, _v343]);
                acc = _v344;
                _v341 = _v344;
                if (rt.truth(_v344)) {
                  const _v345: any = await rt.call(300, "SetDebug", [], this);
                  acc = _v345;
                  _v341 = _v345;
                }
                acc = _v341;
                _v281 = _v341;
                let _v346: any = acc;
                const _v347: any = (args[0] ?? 0);
                acc = _v347;
                const _v348: any = await rt.call(0, "proc0_11", [_v347], this);
                acc = _v348;
                const _v349: any = rt.global(412);
                acc = _v349;
                const _v350: any = rt.op(">=", ...[_v348, _v349]);
                acc = _v350;
                _v346 = _v350;
                if (rt.truth(_v350)) {
                  const _v351: any = 5;
                  acc = _v351;
                  const _v352: any = rt.setGlobal(403, _v351);
                  acc = _v352;
                  _v346 = _v352;
                  const _v353: any = 11;
                  acc = _v353;
                  const _v354: any = rt.setGlobal(407, _v353);
                  acc = _v354;
                  _v346 = _v354;
                  const _v355: any = 9;
                  acc = _v355;
                  return _v355;
                  _v346 = acc;
                }
                acc = _v346;
                _v281 = _v346;
              }
              acc = _v281;
              _v235 = _v281;
              let _v356: any = acc;
              const _v357: any = rt.global(500);
              acc = _v357;
              const _v358: any = 8;
              acc = _v358;
              const _v359: any = rt.op("==", ...[_v357, _v358]);
              acc = _v359;
              _v356 = _v359;
              if (rt.truth(_v359)) {
                const _v360: any = await rt.call(300, "SetDebug", [], this);
                acc = _v360;
                _v356 = _v360;
              }
              acc = _v356;
              _v235 = _v356;
              let _v361: any = acc;
              let _v362: any = 1;
              if (rt.truth(_v362)) {
                const _v363: any = rt.global(411);
                acc = _v363;
                const _v364: any = rt.op("not", ...[_v363]);
                acc = _v364;
                _v362 = _v364;
              }
              if (rt.truth(_v362)) {
                const _v365: any = (args[0] ?? 0);
                acc = _v365;
                const _v366: any = await rt.call(0, "proc0_11", [_v365], this);
                acc = _v366;
                const _v367: any = (args[0] ?? 0);
                acc = _v367;
                const _v368: any = await rt.send(_v367, "curRent", []);
                acc = _v368;
                const _v369: any = rt.op("<", ...[_v366, _v368]);
                acc = _v369;
                _v362 = _v369;
              }
              if (rt.truth(_v362)) {
                const _v370: any = (args[0] ?? 0);
                acc = _v370;
                const _v371: any = await rt.call(0, "proc0_11", [_v370], this);
                acc = _v371;
                const _v372: any = rt.global(491);
                acc = _v372;
                const _v373: any = rt.op(">=", ...[_v371, _v372]);
                acc = _v373;
                _v362 = _v373;
              }
              acc = _v362;
              _v361 = _v362;
              if (rt.truth(_v362)) {
                const _v374: any = 6;
                acc = _v374;
                const _v375: any = rt.setGlobal(403, _v374);
                acc = _v375;
                _v361 = _v375;
                const _v376: any = 2;
                acc = _v376;
                const _v377: any = rt.setGlobal(407, _v376);
                acc = _v377;
                _v361 = _v377;
                const _v378: any = rt.global(498);
                acc = _v378;
                return _v378;
                _v361 = acc;
              }
              acc = _v361;
              _v235 = _v361;
              let _v379: any = acc;
              const _v380: any = rt.global(500);
              acc = _v380;
              const _v381: any = 9;
              acc = _v381;
              const _v382: any = rt.op("==", ...[_v380, _v381]);
              acc = _v382;
              _v379 = _v382;
              if (rt.truth(_v382)) {
                const _v383: any = await rt.call(300, "SetDebug", [], this);
                acc = _v383;
                _v379 = _v383;
              }
              acc = _v379;
              _v235 = _v379;
              let _v384: any = acc;
              const _v385: any = (args[0] ?? 0);
              acc = _v385;
              const _v386: any = await rt.call(0, "proc0_11", [_v385], this);
              acc = _v386;
              const _v387: any = (args[0] ?? 0);
              acc = _v387;
              const _v388: any = await rt.send(_v387, "curRent", []);
              acc = _v388;
              const _v389: any = rt.op(">=", ...[_v386, _v388]);
              acc = _v389;
              _v384 = _v389;
              if (rt.truth(_v389)) {
                const _v390: any = 7;
                acc = _v390;
                const _v391: any = rt.setGlobal(403, _v390);
                acc = _v391;
                _v384 = _v391;
                const _v392: any = 7;
                acc = _v392;
                const _v393: any = rt.setGlobal(407, _v392);
                acc = _v393;
                _v384 = _v393;
                const _v394: any = 1;
                acc = _v394;
                return _v394;
                _v384 = acc;
              }
              acc = _v384;
              _v235 = _v384;
              let _v395: any = acc;
              const _v396: any = rt.global(500);
              acc = _v396;
              const _v397: any = 10;
              acc = _v397;
              const _v398: any = rt.op("==", ...[_v396, _v397]);
              acc = _v398;
              _v395 = _v398;
              if (rt.truth(_v398)) {
                const _v399: any = await rt.call(300, "SetDebug", [], this);
                acc = _v399;
                _v395 = _v399;
              }
              acc = _v395;
              _v235 = _v395;
              let _v400: any = acc;
              let _v401: any = 1;
              if (rt.truth(_v401)) {
                const _v402: any = (args[0] ?? 0);
                acc = _v402;
                const _v403: any = await rt.send(_v402, "wage", []);
                acc = _v403;
                _v401 = _v403;
              }
              if (rt.truth(_v401)) {
                const _v404: any = (args[0] ?? 0);
                acc = _v404;
                const _v405: any = await rt.send(_v404, "dressedForWork", []);
                acc = _v405;
                _v401 = _v405;
              }
              acc = _v401;
              _v400 = _v401;
              if (rt.truth(_v401)) {
                const _v406: any = rt.global(400);
                acc = _v406;
                const _v407: any = (args[0] ?? 0);
                acc = _v407;
                const _v408: any = await rt.send(_v407, "worksAt", []);
                acc = _v408;
                const _v409: any = 1;
                acc = _v409;
                const _v410: any = await rt.call(300, "localproc_1", [_v406, _v408, _v409], this);
                acc = _v410;
                const _v411: any = rt.setGlobal(487, _v410);
                acc = _v411;
                _v400 = _v411;
                const _v412: any = (args[0] ?? 0);
                acc = _v412;
                const _v413: any = await rt.send(_v412, "curRent", []);
                acc = _v413;
                const _v414: any = (args[0] ?? 0);
                acc = _v414;
                const _v415: any = await rt.call(0, "proc0_11", [_v414], this);
                acc = _v415;
                const _v416: any = rt.op("-", ...[_v413, _v415]);
                acc = _v416;
                const _v417: any = rt.setGlobal(494, _v416);
                acc = _v417;
                const _v418: any = rt.global(492);
                acc = _v418;
                const _v419: any = rt.op("/", ...[_v417, _v418]);
                acc = _v419;
                const _v420: any = rt.setGlobal(493, _v419);
                acc = _v420;
                _v400 = _v420;
                let _v421: any = acc;
                const _v422: any = rt.global(494);
                acc = _v422;
                const _v423: any = rt.global(492);
                acc = _v423;
                const _v424: any = rt.op("mod", ...[_v422, _v423]);
                acc = _v424;
                _v421 = _v424;
                if (rt.truth(_v424)) {
                  const _v425: any = rt.setGlobal(493, rt.op("+", rt.global(493), 1));
                  acc = _v425;
                  _v421 = _v425;
                }
                acc = _v421;
                _v400 = _v421;
                let _v426: any = acc;
                const _v427: any = rt.global(493);
                acc = _v427;
                const _v428: any = 0;
                acc = _v428;
                const _v429: any = rt.op("<=", ...[_v427, _v428]);
                acc = _v429;
                _v426 = _v429;
                if (rt.truth(_v429)) {
                  const _v430: any = 1;
                  acc = _v430;
                  const _v431: any = rt.setGlobal(493, _v430);
                  acc = _v431;
                  _v426 = _v431;
                }
                acc = _v426;
                _v400 = _v426;
                const _v432: any = rt.global(487);
                acc = _v432;
                const _v433: any = 6;
                acc = _v433;
                const _v434: any = rt.global(493);
                acc = _v434;
                const _v435: any = rt.global(475);
                acc = _v435;
                const _v436: any = rt.op("*", ...[_v433, _v434, _v435]);
                acc = _v436;
                const _v437: any = rt.op("+", ...[_v432, _v436]);
                acc = _v437;
                const _v438: any = rt.setGlobal(488, _v437);
                acc = _v438;
                _v400 = _v438;
                let _v439: any = acc;
                const _v440: any = rt.global(488);
                acc = _v440;
                const _v441: any = await rt.call(300, "localproc_2", [_v440], this);
                acc = _v441;
                _v439 = _v441;
                if (rt.truth(_v441)) {
                  const _v442: any = 8;
                  acc = _v442;
                  const _v443: any = rt.setGlobal(403, _v442);
                  acc = _v443;
                  _v439 = _v443;
                  const _v444: any = 1;
                  acc = _v444;
                  const _v445: any = rt.setGlobal(407, _v444);
                  acc = _v445;
                  _v439 = _v445;
                  const _v446: any = rt.global(493);
                  acc = _v446;
                  const _v447: any = rt.setGlobal(408, _v446);
                  acc = _v447;
                  _v439 = _v447;
                  const _v448: any = (args[0] ?? 0);
                  acc = _v448;
                  const _v449: any = await rt.send(_v448, "worksAt", []);
                  acc = _v449;
                  return _v449;
                  _v439 = acc;
                }
                acc = _v439;
                _v400 = _v439;
              }
              acc = _v400;
              _v235 = _v400;
              let _v450: any = acc;
              const _v451: any = rt.global(500);
              acc = _v451;
              const _v452: any = 11;
              acc = _v452;
              const _v453: any = rt.op("==", ...[_v451, _v452]);
              acc = _v453;
              _v450 = _v453;
              if (rt.truth(_v453)) {
                const _v454: any = await rt.call(300, "SetDebug", [], this);
                acc = _v454;
                _v450 = _v454;
              }
              acc = _v450;
              _v235 = _v450;
              const _v455: any = rt.global(400);
              acc = _v455;
              const _v456: any = 4;
              acc = _v456;
              const _v457: any = 1;
              acc = _v457;
              const _v458: any = await rt.call(300, "localproc_1", [_v455, _v456, _v457], this);
              acc = _v458;
              const _v459: any = rt.setGlobal(487, _v458);
              acc = _v459;
              const _v460: any = rt.setGlobal(488, _v459);
              acc = _v460;
              _v235 = _v460;
              let _v461: any = acc;
              const _v462: any = (args[0] ?? 0);
              acc = _v462;
              const _v463: any = await rt.call(0, "proc0_11", [_v462], this);
              acc = _v463;
              const _v464: any = rt.global(499);
              acc = _v464;
              const _v465: any = rt.op("+", ...[_v463, _v464]);
              acc = _v465;
              const _v466: any = (args[0] ?? 0);
              acc = _v466;
              const _v467: any = await rt.send(_v466, "curRent", []);
              acc = _v467;
              const _v468: any = rt.op("<", ...[_v465, _v467]);
              acc = _v468;
              _v461 = _v468;
              if (rt.truth(_v468)) {
                const _v469: any = rt.global(487);
                acc = _v469;
                const _v470: any = 2;
                acc = _v470;
                const _v471: any = rt.global(475);
                acc = _v471;
                const _v472: any = rt.op("*", ...[_v470, _v471]);
                acc = _v472;
                const _v473: any = rt.op("+", ...[_v469, _v472]);
                acc = _v473;
                const _v474: any = rt.setGlobal(488, _v473);
                acc = _v474;
                _v461 = _v474;
              }
              acc = _v461;
              _v235 = _v461;
              let _v475: any = acc;
              let _v476: any = 1;
              if (rt.truth(_v476)) {
                const _v477: any = (args[0] ?? 0);
                acc = _v477;
                const _v478: any = (args[0] ?? 0);
                acc = _v478;
                const _v479: any = await rt.send(_v478, "curRent", []);
                acc = _v479;
                const _v480: any = await rt.call(300, "localproc_0", [_v477, _v479], this);
                acc = _v480;
                _v476 = _v480;
              }
              if (rt.truth(_v476)) {
                const _v481: any = rt.global(488);
                acc = _v481;
                const _v482: any = await rt.call(300, "localproc_2", [_v481], this);
                acc = _v482;
                _v476 = _v482;
              }
              acc = _v476;
              _v475 = _v476;
              if (rt.truth(_v476)) {
                const _v483: any = 9;
                acc = _v483;
                const _v484: any = rt.setGlobal(403, _v483);
                acc = _v484;
                _v475 = _v484;
                const _v485: any = (args[0] ?? 0);
                acc = _v485;
                const _v486: any = await rt.send(_v485, "curRent", []);
                acc = _v486;
                const _v487: any = rt.setGlobal(408, _v486);
                acc = _v487;
                _v475 = _v487;
                const _v488: any = 17;
                acc = _v488;
                const _v489: any = rt.setGlobal(407, _v488);
                acc = _v489;
                _v475 = _v489;
                const _v490: any = 4;
                acc = _v490;
                return _v490;
                _v475 = acc;
              }
              acc = _v475;
              _v235 = _v475;
              let _v491: any = acc;
              const _v492: any = rt.global(500);
              acc = _v492;
              const _v493: any = 12;
              acc = _v493;
              const _v494: any = rt.op("==", ...[_v492, _v493]);
              acc = _v494;
              _v491 = _v494;
              if (rt.truth(_v494)) {
                const _v495: any = await rt.call(300, "SetDebug", [], this);
                acc = _v495;
                _v491 = _v495;
              }
              acc = _v491;
              _v235 = _v491;
              let _v496: any = acc;
              let _v497: any = 1;
              if (rt.truth(_v497)) {
                const _v498: any = (args[0] ?? 0);
                acc = _v498;
                const _v499: any = await rt.send(_v498, "triedExt", []);
                acc = _v499;
                const _v500: any = rt.op("not", ...[_v499]);
                acc = _v500;
                _v497 = _v500;
              }
              if (rt.truth(_v497)) {
                const _v501: any = (args[0] ?? 0);
                acc = _v501;
                const _v502: any = await rt.call(0, "proc0_11", [_v501], this);
                acc = _v502;
                const _v503: any = 3;
                acc = _v503;
                const _v504: any = 8;
                acc = _v504;
                const _v505: any = (args[0] ?? 0);
                acc = _v505;
                const _v506: any = await rt.send(_v505, "wage", []);
                acc = _v506;
                const _v507: any = rt.op("*", ...[_v503, _v504, _v506]);
                acc = _v507;
                const _v508: any = rt.op("+", ...[_v502, _v507]);
                acc = _v508;
                const _v509: any = (args[0] ?? 0);
                acc = _v509;
                const _v510: any = await rt.send(_v509, "curRent", []);
                acc = _v510;
                const _v511: any = rt.op(">=", ...[_v508, _v510]);
                acc = _v511;
                _v497 = _v511;
              }
              acc = _v497;
              _v496 = _v497;
              if (rt.truth(_v497)) {
                const _v512: any = 10;
                acc = _v512;
                const _v513: any = rt.setGlobal(403, _v512);
                acc = _v513;
                _v496 = _v513;
                const _v514: any = 8;
                acc = _v514;
                const _v515: any = rt.setGlobal(407, _v514);
                acc = _v515;
                _v496 = _v515;
                const _v516: any = 1;
                acc = _v516;
                return _v516;
                _v496 = acc;
              }
              acc = _v496;
              _v235 = _v496;
              let _v517: any = acc;
              const _v518: any = rt.global(500);
              acc = _v518;
              const _v519: any = 13;
              acc = _v519;
              const _v520: any = rt.op("==", ...[_v518, _v519]);
              acc = _v520;
              _v517 = _v520;
              if (rt.truth(_v520)) {
                const _v521: any = await rt.call(300, "SetDebug", [], this);
                acc = _v521;
                _v517 = _v521;
              }
              acc = _v517;
              _v235 = _v517;
              let _v522: any = acc;
              const _v523: any = rt.global(486);
              acc = _v523;
              const _v524: any = (args[0] ?? 0);
              acc = _v524;
              const _v525: any = await rt.call(0, "proc0_11", [_v524], this);
              acc = _v525;
              const _v526: any = rt.op("+", ...[_v523, _v525]);
              acc = _v526;
              const _v527: any = (args[0] ?? 0);
              acc = _v527;
              const _v528: any = await rt.send(_v527, "curRent", []);
              acc = _v528;
              const _v529: any = rt.op(">=", ...[_v526, _v528]);
              acc = _v529;
              _v522 = _v529;
              if (rt.truth(_v529)) {
                const _v530: any = 11;
                acc = _v530;
                const _v531: any = rt.setGlobal(403, _v530);
                acc = _v531;
                _v522 = _v531;
                const _v532: any = 9;
                acc = _v532;
                const _v533: any = rt.setGlobal(407, _v532);
                acc = _v533;
                _v522 = _v533;
                const _v534: any = (args[0] ?? 0);
                acc = _v534;
                const _v535: any = await rt.send(_v534, "curRent", []);
                acc = _v535;
                const _v536: any = (args[0] ?? 0);
                acc = _v536;
                const _v537: any = await rt.call(0, "proc0_11", [_v536], this);
                acc = _v537;
                const _v538: any = rt.op("-", ...[_v535, _v537]);
                acc = _v538;
                const _v539: any = rt.setGlobal(408, _v538);
                acc = _v539;
                _v522 = _v539;
                const _v540: any = 12;
                acc = _v540;
                return _v540;
                _v522 = acc;
              }
              acc = _v522;
              _v235 = _v522;
            }
            acc = _v235;
            let _v541: any = acc;
            const _v542: any = rt.global(500);
            acc = _v542;
            const _v543: any = 14;
            acc = _v543;
            const _v544: any = rt.op("==", ...[_v542, _v543]);
            acc = _v544;
            _v541 = _v544;
            if (rt.truth(_v544)) {
              const _v545: any = await rt.call(300, "SetDebug", [], this);
              acc = _v545;
              _v541 = _v545;
            }
            acc = _v541;
            let _v546: any = acc;
            let _v547: any = 0;
            if (!rt.truth(_v547)) {
              const _v548: any = (args[0] ?? 0);
              acc = _v548;
              const _v549: any = await rt.send(_v548, "weeksOfClothing", []);
              acc = _v549;
              const _v550: any = 1;
              acc = _v550;
              const _v551: any = rt.op("<=", ...[_v549, _v550]);
              acc = _v551;
              _v547 = _v551;
            }
            if (!rt.truth(_v547)) {
              const _v552: any = (args[0] ?? 0);
              acc = _v552;
              const _v553: any = await rt.send(_v552, "dressedForWork", []);
              acc = _v553;
              const _v554: any = rt.op("not", ...[_v553]);
              acc = _v554;
              _v547 = _v554;
            }
            acc = _v547;
            _v546 = _v547;
            if (rt.truth(_v547)) {
              let _v555: any = acc;
              const _v556: any = rt.global(500);
              acc = _v556;
              const _v557: any = 15;
              acc = _v557;
              const _v558: any = rt.op("==", ...[_v556, _v557]);
              acc = _v558;
              _v555 = _v558;
              if (rt.truth(_v558)) {
                const _v559: any = await rt.call(300, "SetDebug", [], this);
                acc = _v559;
                _v555 = _v559;
              }
              acc = _v555;
              _v546 = _v555;
              let _v560: any = acc;
              const _v561: any = (args[0] ?? 0);
              acc = _v561;
              const _v562: any = await rt.send(_v561, "weeksOfClothing", []);
              acc = _v562;
              const _v563: any = rt.op("not", ...[_v562]);
              acc = _v563;
              _v560 = _v563;
              if (rt.truth(_v563)) {
                let _v564: any = acc;
                const _v565: any = rt.global(500);
                acc = _v565;
                const _v566: any = 16;
                acc = _v566;
                const _v567: any = rt.op("==", ...[_v565, _v566]);
                acc = _v567;
                _v564 = _v567;
                if (rt.truth(_v567)) {
                  const _v568: any = await rt.call(300, "SetDebug", [], this);
                  acc = _v568;
                  _v564 = _v568;
                }
                acc = _v564;
                _v560 = _v564;
                let _v569: any = acc;
                let _v570: any = 1;
                if (rt.truth(_v570)) {
                  const _v571: any = (args[0] ?? 0);
                  acc = _v571;
                  const _v572: any = await rt.call(0, "proc0_11", [_v571], this);
                  acc = _v572;
                  const _v573: any = rt.global(412);
                  acc = _v573;
                  const _v574: any = rt.op("<", ...[_v572, _v573]);
                  acc = _v574;
                  _v570 = _v574;
                }
                if (rt.truth(_v570)) {
                  const _v575: any = (args[0] ?? 0);
                  acc = _v575;
                  const _v576: any = rt.global(412);
                  acc = _v576;
                  const _v577: any = await rt.call(300, "localproc_0", [_v575, _v576], this);
                  acc = _v577;
                  _v570 = _v577;
                }
                acc = _v570;
                _v569 = _v570;
                if (rt.truth(_v570)) {
                  const _v578: any = 12;
                  acc = _v578;
                  const _v579: any = rt.setGlobal(403, _v578);
                  acc = _v579;
                  _v569 = _v579;
                  const _v580: any = rt.global(412);
                  acc = _v580;
                  const _v581: any = rt.setGlobal(408, _v580);
                  acc = _v581;
                  _v569 = _v581;
                  const _v582: any = 17;
                  acc = _v582;
                  const _v583: any = rt.setGlobal(407, _v582);
                  acc = _v583;
                  _v569 = _v583;
                  const _v584: any = 4;
                  acc = _v584;
                  return _v584;
                  _v569 = acc;
                }
                acc = _v569;
                _v560 = _v569;
                let _v585: any = acc;
                const _v586: any = rt.global(500);
                acc = _v586;
                const _v587: any = 17;
                acc = _v587;
                const _v588: any = rt.op("==", ...[_v586, _v587]);
                acc = _v588;
                _v585 = _v588;
                if (rt.truth(_v588)) {
                  const _v589: any = await rt.call(300, "SetDebug", [], this);
                  acc = _v589;
                  _v585 = _v589;
                }
                acc = _v585;
                _v560 = _v585;
                let _v590: any = acc;
                let _v591: any = 1;
                if (rt.truth(_v591)) {
                  const _v592: any = (args[0] ?? 0);
                  acc = _v592;
                  const _v593: any = await rt.call(0, "proc0_11", [_v592], this);
                  acc = _v593;
                  const _v594: any = rt.global(412);
                  acc = _v594;
                  const _v595: any = rt.op("<", ...[_v593, _v594]);
                  acc = _v595;
                  _v591 = _v595;
                }
                if (rt.truth(_v591)) {
                  const _v596: any = rt.global(486);
                  acc = _v596;
                  const _v597: any = (args[0] ?? 0);
                  acc = _v597;
                  const _v598: any = await rt.call(0, "proc0_11", [_v597], this);
                  acc = _v598;
                  const _v599: any = rt.op("+", ...[_v596, _v598]);
                  acc = _v599;
                  const _v600: any = rt.global(412);
                  acc = _v600;
                  const _v601: any = rt.op(">=", ...[_v599, _v600]);
                  acc = _v601;
                  _v591 = _v601;
                }
                acc = _v591;
                _v590 = _v591;
                if (rt.truth(_v591)) {
                  const _v602: any = 13;
                  acc = _v602;
                  const _v603: any = rt.setGlobal(403, _v602);
                  acc = _v603;
                  _v590 = _v603;
                  const _v604: any = 9;
                  acc = _v604;
                  const _v605: any = rt.setGlobal(407, _v604);
                  acc = _v605;
                  _v590 = _v605;
                  const _v606: any = rt.global(412);
                  acc = _v606;
                  const _v607: any = (args[0] ?? 0);
                  acc = _v607;
                  const _v608: any = await rt.call(0, "proc0_11", [_v607], this);
                  acc = _v608;
                  const _v609: any = rt.op("-", ...[_v606, _v608]);
                  acc = _v609;
                  const _v610: any = rt.setGlobal(408, _v609);
                  acc = _v610;
                  _v590 = _v610;
                  const _v611: any = 12;
                  acc = _v611;
                  return _v611;
                  _v590 = acc;
                }
                acc = _v590;
                _v560 = _v590;
                let _v612: any = acc;
                const _v613: any = rt.global(500);
                acc = _v613;
                const _v614: any = 18;
                acc = _v614;
                const _v615: any = rt.op("==", ...[_v613, _v614]);
                acc = _v615;
                _v612 = _v615;
                if (rt.truth(_v615)) {
                  const _v616: any = await rt.call(300, "SetDebug", [], this);
                  acc = _v616;
                  _v612 = _v616;
                }
                acc = _v612;
                _v560 = _v612;
                let _v617: any = acc;
                const _v618: any = (args[0] ?? 0);
                acc = _v618;
                const _v619: any = await rt.call(0, "proc0_11", [_v618], this);
                acc = _v619;
                const _v620: any = rt.global(412);
                acc = _v620;
                const _v621: any = rt.op(">=", ...[_v619, _v620]);
                acc = _v621;
                _v617 = _v621;
                if (rt.truth(_v621)) {
                  const _v622: any = 14;
                  acc = _v622;
                  const _v623: any = rt.setGlobal(403, _v622);
                  acc = _v623;
                  _v617 = _v623;
                  const _v624: any = 11;
                  acc = _v624;
                  const _v625: any = rt.setGlobal(407, _v624);
                  acc = _v625;
                  _v617 = _v625;
                  const _v626: any = 9;
                  acc = _v626;
                  return _v626;
                  _v617 = acc;
                }
                acc = _v617;
                _v560 = _v617;
              }
              acc = _v560;
              _v546 = _v560;
              let _v627: any = acc;
              const _v628: any = rt.global(500);
              acc = _v628;
              const _v629: any = 19;
              acc = _v629;
              const _v630: any = rt.op("==", ...[_v628, _v629]);
              acc = _v630;
              _v627 = _v630;
              if (rt.truth(_v630)) {
                const _v631: any = await rt.call(300, "SetDebug", [], this);
                acc = _v631;
                _v627 = _v631;
              }
              acc = _v627;
              _v546 = _v627;
              let _v632: any = acc;
              let _v633: any = 1;
              if (rt.truth(_v633)) {
                const _v634: any = rt.global(411);
                acc = _v634;
                const _v635: any = rt.op("not", ...[_v634]);
                acc = _v635;
                _v633 = _v635;
              }
              if (rt.truth(_v633)) {
                const _v636: any = (args[0] ?? 0);
                acc = _v636;
                const _v637: any = await rt.call(0, "proc0_11", [_v636], this);
                acc = _v637;
                const _v638: any = rt.global(491);
                acc = _v638;
                const _v639: any = rt.global(412);
                acc = _v639;
                const _v640: any = rt.op("+", ...[_v638, _v639]);
                acc = _v640;
                const _v641: any = rt.op(">=", ...[_v637, _v640]);
                acc = _v641;
                _v633 = _v641;
              }
              acc = _v633;
              _v632 = _v633;
              if (rt.truth(_v633)) {
                const _v642: any = 16;
                acc = _v642;
                const _v643: any = rt.setGlobal(403, _v642);
                acc = _v643;
                _v632 = _v643;
                const _v644: any = 2;
                acc = _v644;
                const _v645: any = rt.setGlobal(407, _v644);
                acc = _v645;
                _v632 = _v645;
                const _v646: any = 11;
                acc = _v646;
                const _v647: any = rt.setGlobal(409, _v646);
                acc = _v647;
                _v632 = _v647;
                const _v648: any = rt.global(400);
                acc = _v648;
                const _v649: any = rt.global(498);
                acc = _v649;
                const _v650: any = 9;
                acc = _v650;
                const _v651: any = await rt.call(300, "localproc_5", [_v648, _v649, _v650], this);
                acc = _v651;
                return _v651;
                _v632 = acc;
              }
              acc = _v632;
              _v546 = _v632;
              let _v652: any = acc;
              const _v653: any = rt.global(500);
              acc = _v653;
              const _v654: any = 20;
              acc = _v654;
              const _v655: any = rt.op("==", ...[_v653, _v654]);
              acc = _v655;
              _v652 = _v655;
              if (rt.truth(_v655)) {
                const _v656: any = await rt.call(300, "SetDebug", [], this);
                acc = _v656;
                _v652 = _v656;
              }
              acc = _v652;
              _v546 = _v652;
              let _v657: any = acc;
              let _v658: any = 1;
              if (rt.truth(_v658)) {
                const _v659: any = (args[0] ?? 0);
                acc = _v659;
                const _v660: any = await rt.send(_v659, "dressedForWork", []);
                acc = _v660;
                _v658 = _v660;
              }
              if (rt.truth(_v658)) {
                const _v661: any = rt.global(411);
                acc = _v661;
                const _v662: any = rt.op("not", ...[_v661]);
                acc = _v662;
                _v658 = _v662;
              }
              if (rt.truth(_v658)) {
                const _v663: any = (args[0] ?? 0);
                acc = _v663;
                const _v664: any = await rt.call(0, "proc0_11", [_v663], this);
                acc = _v664;
                const _v665: any = rt.global(491);
                acc = _v665;
                const _v666: any = rt.global(412);
                acc = _v666;
                const _v667: any = rt.op("+", ...[_v665, _v666]);
                acc = _v667;
                const _v668: any = rt.op("<", ...[_v664, _v667]);
                acc = _v668;
                _v658 = _v668;
              }
              if (rt.truth(_v658)) {
                const _v669: any = (args[0] ?? 0);
                acc = _v669;
                const _v670: any = await rt.call(0, "proc0_11", [_v669], this);
                acc = _v670;
                const _v671: any = rt.global(412);
                acc = _v671;
                const _v672: any = rt.op(">=", ...[_v670, _v671]);
                acc = _v672;
                _v658 = _v672;
              }
              acc = _v658;
              _v657 = _v658;
              if (rt.truth(_v658)) {
                let _v673: any = acc;
                const _v674: any = rt.global(500);
                acc = _v674;
                const _v675: any = 21;
                acc = _v675;
                const _v676: any = rt.op("==", ...[_v674, _v675]);
                acc = _v676;
                _v673 = _v676;
                if (rt.truth(_v676)) {
                  const _v677: any = await rt.call(300, "SetDebug", [], this);
                  acc = _v677;
                  _v673 = _v677;
                }
                acc = _v673;
                _v657 = _v673;
                let _v678: any = acc;
                const _v679: any = (args[0] ?? 0);
                acc = _v679;
                const _v680: any = await rt.send(_v679, "wage", []);
                acc = _v680;
                _v678 = _v680;
                if (rt.truth(_v680)) {
                  let _v681: any = acc;
                  const _v682: any = (args[0] ?? 0);
                  acc = _v682;
                  const _v683: any = await rt.send(_v682, "worksAt", []);
                  acc = _v683;
                  const _v684: any = 9;
                  acc = _v684;
                  const _v685: any = rt.global(498);
                  acc = _v685;
                  const _v686: any = await rt.call(300, "localproc_5", [_v683, _v684, _v685], this);
                  acc = _v686;
                  const _v687: any = (temps[0] = _v686);
                  acc = _v687;
                  const _v688: any = 9;
                  acc = _v688;
                  const _v689: any = rt.op("==", ...[_v687, _v688]);
                  acc = _v689;
                  _v681 = _v689;
                  if (rt.truth(_v689)) {
                    const _v690: any = rt.global(498);
                    acc = _v690;
                    const _v691: any = rt.setGlobal(495, _v690);
                    acc = _v691;
                    _v681 = _v691;
                  } else {
                    const _v692: any = 9;
                    acc = _v692;
                    const _v693: any = rt.setGlobal(495, _v692);
                    acc = _v693;
                    _v681 = _v693;
                  }
                  acc = _v681;
                  _v678 = _v681;
                  const _v694: any = rt.global(400);
                  acc = _v694;
                  const _v695: any = (args[0] ?? 0);
                  acc = _v695;
                  const _v696: any = await rt.send(_v695, "worksAt", []);
                  acc = _v696;
                  const _v697: any = (temps[0] ?? 0);
                  acc = _v697;
                  const _v698: any = rt.global(495);
                  acc = _v698;
                  const _v699: any = await rt.call(300, "localproc_1", [_v694, _v696, _v697, _v698], this);
                  acc = _v699;
                  const _v700: any = rt.setGlobal(487, _v699);
                  acc = _v700;
                  _v678 = _v700;
                  const _v701: any = rt.global(491);
                  acc = _v701;
                  const _v702: any = rt.global(412);
                  acc = _v702;
                  const _v703: any = rt.op("+", ...[_v701, _v702]);
                  acc = _v703;
                  const _v704: any = (args[0] ?? 0);
                  acc = _v704;
                  const _v705: any = await rt.call(0, "proc0_11", [_v704], this);
                  acc = _v705;
                  const _v706: any = rt.op("-", ...[_v703, _v705]);
                  acc = _v706;
                  const _v707: any = rt.setGlobal(494, _v706);
                  acc = _v707;
                  const _v708: any = rt.global(492);
                  acc = _v708;
                  const _v709: any = rt.op("/", ...[_v707, _v708]);
                  acc = _v709;
                  const _v710: any = rt.setGlobal(493, _v709);
                  acc = _v710;
                  _v678 = _v710;
                  let _v711: any = acc;
                  const _v712: any = rt.global(494);
                  acc = _v712;
                  const _v713: any = rt.global(492);
                  acc = _v713;
                  const _v714: any = rt.op("mod", ...[_v712, _v713]);
                  acc = _v714;
                  _v711 = _v714;
                  if (rt.truth(_v714)) {
                    const _v715: any = rt.setGlobal(493, rt.op("+", rt.global(493), 1));
                    acc = _v715;
                    _v711 = _v715;
                  }
                  acc = _v711;
                  _v678 = _v711;
                  let _v716: any = acc;
                  const _v717: any = rt.global(493);
                  acc = _v717;
                  const _v718: any = 0;
                  acc = _v718;
                  const _v719: any = rt.op("<=", ...[_v717, _v718]);
                  acc = _v719;
                  _v716 = _v719;
                  if (rt.truth(_v719)) {
                    const _v720: any = 1;
                    acc = _v720;
                    const _v721: any = rt.setGlobal(493, _v720);
                    acc = _v721;
                    _v716 = _v721;
                  }
                  acc = _v716;
                  _v678 = _v716;
                  const _v722: any = rt.global(487);
                  acc = _v722;
                  const _v723: any = 6;
                  acc = _v723;
                  const _v724: any = rt.global(493);
                  acc = _v724;
                  const _v725: any = rt.global(475);
                  acc = _v725;
                  const _v726: any = rt.op("*", ...[_v723, _v724, _v725]);
                  acc = _v726;
                  const _v727: any = rt.op("+", ...[_v722, _v726]);
                  acc = _v727;
                  const _v728: any = rt.setGlobal(488, _v727);
                  acc = _v728;
                  _v678 = _v728;
                  let _v729: any = acc;
                  const _v730: any = rt.global(488);
                  acc = _v730;
                  const _v731: any = await rt.call(300, "localproc_2", [_v730], this);
                  acc = _v731;
                  _v729 = _v731;
                  if (rt.truth(_v731)) {
                    const _v732: any = 17;
                    acc = _v732;
                    const _v733: any = rt.setGlobal(403, _v732);
                    acc = _v733;
                    _v729 = _v733;
                    const _v734: any = rt.global(493);
                    acc = _v734;
                    const _v735: any = rt.setGlobal(408, _v734);
                    acc = _v735;
                    _v729 = _v735;
                    const _v736: any = 1;
                    acc = _v736;
                    const _v737: any = rt.setGlobal(407, _v736);
                    acc = _v737;
                    _v729 = _v737;
                    const _v738: any = 11;
                    acc = _v738;
                    const _v739: any = rt.setGlobal(409, _v738);
                    acc = _v739;
                    _v729 = _v739;
                    const _v740: any = rt.global(400);
                    acc = _v740;
                    const _v741: any = (args[0] ?? 0);
                    acc = _v741;
                    const _v742: any = await rt.send(_v741, "worksAt", []);
                    acc = _v742;
                    const _v743: any = 9;
                    acc = _v743;
                    const _v744: any = await rt.call(300, "localproc_5", [_v740, _v742, _v743], this);
                    acc = _v744;
                    return _v744;
                    _v729 = acc;
                  }
                  acc = _v729;
                  _v678 = _v729;
                }
                acc = _v678;
                _v657 = _v678;
                let _v745: any = acc;
                const _v746: any = rt.global(500);
                acc = _v746;
                const _v747: any = 22;
                acc = _v747;
                const _v748: any = rt.op("==", ...[_v746, _v747]);
                acc = _v748;
                _v745 = _v748;
                if (rt.truth(_v748)) {
                  const _v749: any = await rt.call(300, "SetDebug", [], this);
                  acc = _v749;
                  _v745 = _v749;
                }
                acc = _v745;
                _v657 = _v745;
                let _v750: any = acc;
                const _v751: any = 4;
                acc = _v751;
                const _v752: any = 9;
                acc = _v752;
                const _v753: any = rt.global(498);
                acc = _v753;
                const _v754: any = await rt.call(300, "localproc_5", [_v751, _v752, _v753], this);
                acc = _v754;
                const _v755: any = (temps[0] = _v754);
                acc = _v755;
                const _v756: any = 9;
                acc = _v756;
                const _v757: any = rt.op("==", ...[_v755, _v756]);
                acc = _v757;
                _v750 = _v757;
                if (rt.truth(_v757)) {
                  const _v758: any = rt.global(498);
                  acc = _v758;
                  const _v759: any = rt.setGlobal(495, _v758);
                  acc = _v759;
                  _v750 = _v759;
                } else {
                  const _v760: any = 9;
                  acc = _v760;
                  const _v761: any = rt.setGlobal(495, _v760);
                  acc = _v761;
                  _v750 = _v761;
                }
                acc = _v750;
                _v657 = _v750;
                const _v762: any = rt.global(400);
                acc = _v762;
                const _v763: any = 4;
                acc = _v763;
                const _v764: any = (temps[0] ?? 0);
                acc = _v764;
                const _v765: any = rt.global(495);
                acc = _v765;
                const _v766: any = await rt.call(300, "localproc_1", [_v762, _v763, _v764, _v765], this);
                acc = _v766;
                const _v767: any = rt.setGlobal(487, _v766);
                acc = _v767;
                const _v768: any = rt.setGlobal(488, _v767);
                acc = _v768;
                _v657 = _v768;
                let _v769: any = acc;
                const _v770: any = (args[0] ?? 0);
                acc = _v770;
                const _v771: any = await rt.call(0, "proc0_11", [_v770], this);
                acc = _v771;
                const _v772: any = rt.global(499);
                acc = _v772;
                const _v773: any = rt.op("+", ...[_v771, _v772]);
                acc = _v773;
                const _v774: any = rt.global(412);
                acc = _v774;
                const _v775: any = rt.global(491);
                acc = _v775;
                const _v776: any = rt.op("+", ...[_v774, _v775]);
                acc = _v776;
                const _v777: any = rt.op("<", ...[_v773, _v776]);
                acc = _v777;
                _v769 = _v777;
                if (rt.truth(_v777)) {
                  const _v778: any = rt.global(487);
                  acc = _v778;
                  const _v779: any = 2;
                  acc = _v779;
                  const _v780: any = rt.global(475);
                  acc = _v780;
                  const _v781: any = rt.op("*", ...[_v779, _v780]);
                  acc = _v781;
                  const _v782: any = rt.op("+", ...[_v778, _v781]);
                  acc = _v782;
                  const _v783: any = rt.setGlobal(488, _v782);
                  acc = _v783;
                  _v769 = _v783;
                }
                acc = _v769;
                _v657 = _v769;
                let _v784: any = acc;
                let _v785: any = 1;
                if (rt.truth(_v785)) {
                  const _v786: any = rt.global(488);
                  acc = _v786;
                  const _v787: any = await rt.call(300, "localproc_2", [_v786], this);
                  acc = _v787;
                  _v785 = _v787;
                }
                if (rt.truth(_v785)) {
                  const _v788: any = (args[0] ?? 0);
                  acc = _v788;
                  const _v789: any = rt.global(412);
                  acc = _v789;
                  const _v790: any = rt.global(491);
                  acc = _v790;
                  const _v791: any = rt.op("+", ...[_v789, _v790]);
                  acc = _v791;
                  const _v792: any = await rt.call(300, "localproc_0", [_v788, _v791], this);
                  acc = _v792;
                  _v785 = _v792;
                }
                acc = _v785;
                _v784 = _v785;
                if (rt.truth(_v785)) {
                  const _v793: any = 18;
                  acc = _v793;
                  const _v794: any = rt.setGlobal(403, _v793);
                  acc = _v794;
                  _v784 = _v794;
                  const _v795: any = rt.global(412);
                  acc = _v795;
                  const _v796: any = rt.global(491);
                  acc = _v796;
                  const _v797: any = rt.op("+", ...[_v795, _v796]);
                  acc = _v797;
                  const _v798: any = rt.setGlobal(408, _v797);
                  acc = _v798;
                  _v784 = _v798;
                  const _v799: any = 17;
                  acc = _v799;
                  const _v800: any = rt.setGlobal(407, _v799);
                  acc = _v800;
                  _v784 = _v800;
                  const _v801: any = 11;
                  acc = _v801;
                  const _v802: any = rt.setGlobal(409, _v801);
                  acc = _v802;
                  _v784 = _v802;
                  const _v803: any = rt.global(400);
                  acc = _v803;
                  const _v804: any = 4;
                  acc = _v804;
                  const _v805: any = 9;
                  acc = _v805;
                  const _v806: any = await rt.call(300, "localproc_5", [_v803, _v804, _v805], this);
                  acc = _v806;
                  return _v806;
                  _v784 = acc;
                }
                acc = _v784;
                _v657 = _v784;
                let _v807: any = acc;
                const _v808: any = rt.global(500);
                acc = _v808;
                const _v809: any = 23;
                acc = _v809;
                const _v810: any = rt.op("==", ...[_v808, _v809]);
                acc = _v810;
                _v807 = _v810;
                if (rt.truth(_v810)) {
                  const _v811: any = await rt.call(300, "SetDebug", [], this);
                  acc = _v811;
                  _v807 = _v811;
                }
                acc = _v807;
                _v657 = _v807;
                let _v812: any = acc;
                const _v813: any = 12;
                acc = _v813;
                const _v814: any = 9;
                acc = _v814;
                const _v815: any = rt.global(498);
                acc = _v815;
                const _v816: any = await rt.call(300, "localproc_5", [_v813, _v814, _v815], this);
                acc = _v816;
                const _v817: any = (temps[0] = _v816);
                acc = _v817;
                const _v818: any = 9;
                acc = _v818;
                const _v819: any = rt.op("==", ...[_v817, _v818]);
                acc = _v819;
                _v812 = _v819;
                if (rt.truth(_v819)) {
                  const _v820: any = rt.global(498);
                  acc = _v820;
                  const _v821: any = rt.setGlobal(495, _v820);
                  acc = _v821;
                  _v812 = _v821;
                } else {
                  const _v822: any = 9;
                  acc = _v822;
                  const _v823: any = rt.setGlobal(495, _v822);
                  acc = _v823;
                  _v812 = _v823;
                }
                acc = _v812;
                _v657 = _v812;
                const _v824: any = rt.global(400);
                acc = _v824;
                const _v825: any = 12;
                acc = _v825;
                const _v826: any = (temps[0] ?? 0);
                acc = _v826;
                const _v827: any = rt.global(495);
                acc = _v827;
                const _v828: any = await rt.call(300, "localproc_1", [_v824, _v825, _v826, _v827], this);
                acc = _v828;
                const _v829: any = rt.setGlobal(487, _v828);
                acc = _v829;
                _v657 = _v829;
                let _v830: any = acc;
                let _v831: any = 1;
                if (rt.truth(_v831)) {
                  const _v832: any = rt.global(487);
                  acc = _v832;
                  const _v833: any = await rt.call(300, "localproc_2", [_v832], this);
                  acc = _v833;
                  _v831 = _v833;
                }
                if (rt.truth(_v831)) {
                  const _v834: any = rt.global(486);
                  acc = _v834;
                  const _v835: any = (args[0] ?? 0);
                  acc = _v835;
                  const _v836: any = await rt.call(0, "proc0_11", [_v835], this);
                  acc = _v836;
                  const _v837: any = rt.op("+", ...[_v834, _v836]);
                  acc = _v837;
                  const _v838: any = rt.global(412);
                  acc = _v838;
                  const _v839: any = rt.global(491);
                  acc = _v839;
                  const _v840: any = rt.op("+", ...[_v838, _v839]);
                  acc = _v840;
                  const _v841: any = rt.op(">=", ...[_v837, _v840]);
                  acc = _v841;
                  _v831 = _v841;
                }
                acc = _v831;
                _v830 = _v831;
                if (rt.truth(_v831)) {
                  const _v842: any = 19;
                  acc = _v842;
                  const _v843: any = rt.setGlobal(403, _v842);
                  acc = _v843;
                  _v830 = _v843;
                  const _v844: any = 9;
                  acc = _v844;
                  const _v845: any = rt.setGlobal(407, _v844);
                  acc = _v845;
                  _v830 = _v845;
                  const _v846: any = rt.global(412);
                  acc = _v846;
                  const _v847: any = rt.global(491);
                  acc = _v847;
                  const _v848: any = rt.op("+", ...[_v846, _v847]);
                  acc = _v848;
                  const _v849: any = (args[0] ?? 0);
                  acc = _v849;
                  const _v850: any = await rt.call(0, "proc0_11", [_v849], this);
                  acc = _v850;
                  const _v851: any = rt.op("-", ...[_v848, _v850]);
                  acc = _v851;
                  const _v852: any = rt.setGlobal(408, _v851);
                  acc = _v852;
                  _v830 = _v852;
                  const _v853: any = 11;
                  acc = _v853;
                  const _v854: any = rt.setGlobal(409, _v853);
                  acc = _v854;
                  _v830 = _v854;
                  const _v855: any = rt.global(400);
                  acc = _v855;
                  const _v856: any = 12;
                  acc = _v856;
                  const _v857: any = 9;
                  acc = _v857;
                  const _v858: any = await rt.call(300, "localproc_5", [_v855, _v856, _v857], this);
                  acc = _v858;
                  return _v858;
                  _v830 = acc;
                }
                acc = _v830;
                _v657 = _v830;
              }
              acc = _v657;
              _v546 = _v657;
              let _v859: any = acc;
              const _v860: any = rt.global(500);
              acc = _v860;
              const _v861: any = 24;
              acc = _v861;
              const _v862: any = rt.op("==", ...[_v860, _v861]);
              acc = _v862;
              _v859 = _v862;
              if (rt.truth(_v862)) {
                const _v863: any = await rt.call(300, "SetDebug", [], this);
                acc = _v863;
                _v859 = _v863;
              }
              acc = _v859;
              _v546 = _v859;
              let _v864: any = acc;
              const _v865: any = (args[0] ?? 0);
              acc = _v865;
              const _v866: any = await rt.call(0, "proc0_11", [_v865], this);
              acc = _v866;
              const _v867: any = rt.global(412);
              acc = _v867;
              const _v868: any = rt.op(">=", ...[_v866, _v867]);
              acc = _v868;
              _v864 = _v868;
              if (rt.truth(_v868)) {
                const _v869: any = 20;
                acc = _v869;
                const _v870: any = rt.setGlobal(403, _v869);
                acc = _v870;
                _v864 = _v870;
                const _v871: any = 11;
                acc = _v871;
                const _v872: any = rt.setGlobal(407, _v871);
                acc = _v872;
                _v864 = _v872;
                const _v873: any = 9;
                acc = _v873;
                return _v873;
                _v864 = acc;
              }
              acc = _v864;
              _v546 = _v864;
              let _v874: any = acc;
              const _v875: any = rt.global(500);
              acc = _v875;
              const _v876: any = 25;
              acc = _v876;
              const _v877: any = rt.op("==", ...[_v875, _v876]);
              acc = _v877;
              _v874 = _v877;
              if (rt.truth(_v877)) {
                const _v878: any = await rt.call(300, "SetDebug", [], this);
                acc = _v878;
                _v874 = _v878;
              }
              acc = _v874;
              _v546 = _v874;
              let _v879: any = acc;
              let _v880: any = 1;
              if (rt.truth(_v880)) {
                const _v881: any = (args[0] ?? 0);
                acc = _v881;
                const _v882: any = await rt.call(0, "proc0_11", [_v881], this);
                acc = _v882;
                const _v883: any = rt.global(412);
                acc = _v883;
                const _v884: any = rt.op("<", ...[_v882, _v883]);
                acc = _v884;
                _v880 = _v884;
              }
              if (rt.truth(_v880)) {
                const _v885: any = (args[0] ?? 0);
                acc = _v885;
                const _v886: any = rt.global(412);
                acc = _v886;
                const _v887: any = await rt.call(300, "localproc_0", [_v885, _v886], this);
                acc = _v887;
                _v880 = _v887;
              }
              acc = _v880;
              _v879 = _v880;
              if (rt.truth(_v880)) {
                const _v888: any = 220;
                acc = _v888;
                const _v889: any = rt.setGlobal(403, _v888);
                acc = _v889;
                _v879 = _v889;
                const _v890: any = rt.global(412);
                acc = _v890;
                const _v891: any = rt.setGlobal(408, _v890);
                acc = _v891;
                _v879 = _v891;
                const _v892: any = 17;
                acc = _v892;
                const _v893: any = rt.setGlobal(407, _v892);
                acc = _v893;
                _v879 = _v893;
                const _v894: any = 4;
                acc = _v894;
                return _v894;
                _v879 = acc;
              }
              acc = _v879;
              _v546 = _v879;
              let _v895: any = acc;
              const _v896: any = rt.global(500);
              acc = _v896;
              const _v897: any = 26;
              acc = _v897;
              const _v898: any = rt.op("==", ...[_v896, _v897]);
              acc = _v898;
              _v895 = _v898;
              if (rt.truth(_v898)) {
                const _v899: any = await rt.call(300, "SetDebug", [], this);
                acc = _v899;
                _v895 = _v899;
              }
              acc = _v895;
              _v546 = _v895;
              let _v900: any = acc;
              let _v901: any = 1;
              if (rt.truth(_v901)) {
                const _v902: any = (args[0] ?? 0);
                acc = _v902;
                const _v903: any = await rt.call(0, "proc0_11", [_v902], this);
                acc = _v903;
                const _v904: any = rt.global(412);
                acc = _v904;
                const _v905: any = rt.op("<", ...[_v903, _v904]);
                acc = _v905;
                _v901 = _v905;
              }
              if (rt.truth(_v901)) {
                const _v906: any = rt.global(486);
                acc = _v906;
                const _v907: any = (args[0] ?? 0);
                acc = _v907;
                const _v908: any = await rt.call(0, "proc0_11", [_v907], this);
                acc = _v908;
                const _v909: any = rt.op("+", ...[_v906, _v908]);
                acc = _v909;
                const _v910: any = rt.global(412);
                acc = _v910;
                const _v911: any = rt.op(">=", ...[_v909, _v910]);
                acc = _v911;
                _v901 = _v911;
              }
              acc = _v901;
              _v900 = _v901;
              if (rt.truth(_v901)) {
                const _v912: any = 221;
                acc = _v912;
                const _v913: any = rt.setGlobal(403, _v912);
                acc = _v913;
                _v900 = _v913;
                const _v914: any = 9;
                acc = _v914;
                const _v915: any = rt.setGlobal(407, _v914);
                acc = _v915;
                _v900 = _v915;
                const _v916: any = rt.global(412);
                acc = _v916;
                const _v917: any = (args[0] ?? 0);
                acc = _v917;
                const _v918: any = await rt.call(0, "proc0_11", [_v917], this);
                acc = _v918;
                const _v919: any = rt.op("-", ...[_v916, _v918]);
                acc = _v919;
                const _v920: any = rt.setGlobal(408, _v919);
                acc = _v920;
                _v900 = _v920;
                const _v921: any = 12;
                acc = _v921;
                return _v921;
                _v900 = acc;
              }
              acc = _v900;
              _v546 = _v900;
              let _v922: any = acc;
              const _v923: any = rt.global(500);
              acc = _v923;
              const _v924: any = 27;
              acc = _v924;
              const _v925: any = rt.op("==", ...[_v923, _v924]);
              acc = _v925;
              _v922 = _v925;
              if (rt.truth(_v925)) {
                const _v926: any = await rt.call(300, "SetDebug", [], this);
                acc = _v926;
                _v922 = _v926;
              }
              acc = _v922;
              _v546 = _v922;
              let _v927: any = acc;
              const _v928: any = (args[0] ?? 0);
              acc = _v928;
              const _v929: any = await rt.call(0, "proc0_11", [_v928], this);
              acc = _v929;
              const _v930: any = rt.global(412);
              acc = _v930;
              const _v931: any = rt.op(">=", ...[_v929, _v930]);
              acc = _v931;
              _v927 = _v931;
              if (rt.truth(_v931)) {
                const _v932: any = 222;
                acc = _v932;
                const _v933: any = rt.setGlobal(403, _v932);
                acc = _v933;
                _v927 = _v933;
                const _v934: any = 11;
                acc = _v934;
                const _v935: any = rt.setGlobal(407, _v934);
                acc = _v935;
                _v927 = _v935;
                const _v936: any = 9;
                acc = _v936;
                return _v936;
                _v927 = acc;
              }
              acc = _v927;
              _v546 = _v927;
            }
            acc = _v546;
            let _v937: any = acc;
            const _v938: any = rt.global(500);
            acc = _v938;
            const _v939: any = 28;
            acc = _v939;
            const _v940: any = rt.op("==", ...[_v938, _v939]);
            acc = _v940;
            _v937 = _v940;
            if (rt.truth(_v940)) {
              const _v941: any = await rt.call(300, "SetDebug", [], this);
              acc = _v941;
              _v937 = _v941;
            }
            acc = _v937;
            let _v942: any = acc;
            const _v943: any = rt.global(411);
            acc = _v943;
            const _v944: any = rt.op("not", ...[_v943]);
            acc = _v944;
            _v942 = _v944;
            if (rt.truth(_v944)) {
              let _v945: any = acc;
              const _v946: any = rt.global(500);
              acc = _v946;
              const _v947: any = 29;
              acc = _v947;
              const _v948: any = rt.op("==", ...[_v946, _v947]);
              acc = _v948;
              _v945 = _v948;
              if (rt.truth(_v948)) {
                const _v949: any = await rt.call(300, "SetDebug", [], this);
                acc = _v949;
                _v945 = _v949;
              }
              acc = _v945;
              _v942 = _v945;
              let _v950: any = acc;
              const _v951: any = (args[0] ?? 0);
              acc = _v951;
              const _v952: any = await rt.call(0, "proc0_11", [_v951], this);
              acc = _v952;
              const _v953: any = rt.global(491);
              acc = _v953;
              const _v954: any = rt.op("<", ...[_v952, _v953]);
              acc = _v954;
              _v950 = _v954;
              if (rt.truth(_v954)) {
                let _v955: any = acc;
                const _v956: any = rt.global(500);
                acc = _v956;
                const _v957: any = 30;
                acc = _v957;
                const _v958: any = rt.op("==", ...[_v956, _v957]);
                acc = _v958;
                _v955 = _v958;
                if (rt.truth(_v958)) {
                  const _v959: any = await rt.call(300, "SetDebug", [], this);
                  acc = _v959;
                  _v955 = _v959;
                }
                acc = _v955;
                _v950 = _v955;
                let _v960: any = acc;
                let _v961: any = 1;
                if (rt.truth(_v961)) {
                  const _v962: any = (args[0] ?? 0);
                  acc = _v962;
                  const _v963: any = await rt.send(_v962, "wage", []);
                  acc = _v963;
                  _v961 = _v963;
                }
                if (rt.truth(_v961)) {
                  const _v964: any = (args[0] ?? 0);
                  acc = _v964;
                  const _v965: any = await rt.send(_v964, "dressedForWork", []);
                  acc = _v965;
                  _v961 = _v965;
                }
                acc = _v961;
                _v960 = _v961;
                if (rt.truth(_v961)) {
                  const _v966: any = rt.global(400);
                  acc = _v966;
                  const _v967: any = (args[0] ?? 0);
                  acc = _v967;
                  const _v968: any = await rt.send(_v967, "worksAt", []);
                  acc = _v968;
                  const _v969: any = rt.global(498);
                  acc = _v969;
                  const _v970: any = await rt.call(300, "localproc_1", [_v966, _v968, _v969], this);
                  acc = _v970;
                  const _v971: any = rt.setGlobal(487, _v970);
                  acc = _v971;
                  _v960 = _v971;
                  const _v972: any = rt.global(491);
                  acc = _v972;
                  const _v973: any = (args[0] ?? 0);
                  acc = _v973;
                  const _v974: any = await rt.call(0, "proc0_11", [_v973], this);
                  acc = _v974;
                  const _v975: any = rt.op("-", ...[_v972, _v974]);
                  acc = _v975;
                  const _v976: any = rt.setGlobal(494, _v975);
                  acc = _v976;
                  const _v977: any = rt.global(492);
                  acc = _v977;
                  const _v978: any = rt.op("/", ...[_v976, _v977]);
                  acc = _v978;
                  const _v979: any = rt.setGlobal(493, _v978);
                  acc = _v979;
                  _v960 = _v979;
                  let _v980: any = acc;
                  const _v981: any = rt.global(494);
                  acc = _v981;
                  const _v982: any = rt.global(492);
                  acc = _v982;
                  const _v983: any = rt.op("mod", ...[_v981, _v982]);
                  acc = _v983;
                  _v980 = _v983;
                  if (rt.truth(_v983)) {
                    const _v984: any = rt.setGlobal(493, rt.op("+", rt.global(493), 1));
                    acc = _v984;
                    _v980 = _v984;
                  }
                  acc = _v980;
                  _v960 = _v980;
                  let _v985: any = acc;
                  const _v986: any = rt.global(493);
                  acc = _v986;
                  const _v987: any = 0;
                  acc = _v987;
                  const _v988: any = rt.op("<=", ...[_v986, _v987]);
                  acc = _v988;
                  _v985 = _v988;
                  if (rt.truth(_v988)) {
                    const _v989: any = 1;
                    acc = _v989;
                    const _v990: any = rt.setGlobal(493, _v989);
                    acc = _v990;
                    _v985 = _v990;
                  }
                  acc = _v985;
                  _v960 = _v985;
                  const _v991: any = rt.global(487);
                  acc = _v991;
                  const _v992: any = 6;
                  acc = _v992;
                  const _v993: any = rt.global(493);
                  acc = _v993;
                  const _v994: any = rt.global(475);
                  acc = _v994;
                  const _v995: any = rt.op("*", ...[_v992, _v993, _v994]);
                  acc = _v995;
                  const _v996: any = rt.op("+", ...[_v991, _v995]);
                  acc = _v996;
                  const _v997: any = rt.setGlobal(488, _v996);
                  acc = _v997;
                  _v960 = _v997;
                  let _v998: any = acc;
                  const _v999: any = rt.global(488);
                  acc = _v999;
                  const _v1000: any = await rt.call(300, "localproc_2", [_v999], this);
                  acc = _v1000;
                  _v998 = _v1000;
                  if (rt.truth(_v1000)) {
                    const _v1001: any = 21;
                    acc = _v1001;
                    const _v1002: any = rt.setGlobal(403, _v1001);
                    acc = _v1002;
                    _v998 = _v1002;
                    const _v1003: any = rt.global(493);
                    acc = _v1003;
                    const _v1004: any = rt.setGlobal(408, _v1003);
                    acc = _v1004;
                    _v998 = _v1004;
                    const _v1005: any = 1;
                    acc = _v1005;
                    const _v1006: any = rt.setGlobal(407, _v1005);
                    acc = _v1006;
                    _v998 = _v1006;
                    const _v1007: any = (args[0] ?? 0);
                    acc = _v1007;
                    const _v1008: any = await rt.send(_v1007, "worksAt", []);
                    acc = _v1008;
                    return _v1008;
                    _v998 = acc;
                  }
                  acc = _v998;
                  _v960 = _v998;
                }
                acc = _v960;
                _v950 = _v960;
                let _v1009: any = acc;
                const _v1010: any = rt.global(500);
                acc = _v1010;
                const _v1011: any = 31;
                acc = _v1011;
                const _v1012: any = rt.op("==", ...[_v1010, _v1011]);
                acc = _v1012;
                _v1009 = _v1012;
                if (rt.truth(_v1012)) {
                  const _v1013: any = await rt.call(300, "SetDebug", [], this);
                  acc = _v1013;
                  _v1009 = _v1013;
                }
                acc = _v1009;
                _v950 = _v1009;
                const _v1014: any = rt.global(400);
                acc = _v1014;
                const _v1015: any = 4;
                acc = _v1015;
                const _v1016: any = rt.global(498);
                acc = _v1016;
                const _v1017: any = await rt.call(300, "localproc_1", [_v1014, _v1015, _v1016], this);
                acc = _v1017;
                const _v1018: any = rt.setGlobal(487, _v1017);
                acc = _v1018;
                const _v1019: any = rt.setGlobal(488, _v1018);
                acc = _v1019;
                _v950 = _v1019;
                let _v1020: any = acc;
                const _v1021: any = (args[0] ?? 0);
                acc = _v1021;
                const _v1022: any = await rt.call(0, "proc0_11", [_v1021], this);
                acc = _v1022;
                const _v1023: any = rt.global(499);
                acc = _v1023;
                const _v1024: any = rt.op("+", ...[_v1022, _v1023]);
                acc = _v1024;
                const _v1025: any = rt.global(491);
                acc = _v1025;
                const _v1026: any = rt.op("<", ...[_v1024, _v1025]);
                acc = _v1026;
                _v1020 = _v1026;
                if (rt.truth(_v1026)) {
                  const _v1027: any = rt.global(487);
                  acc = _v1027;
                  const _v1028: any = 2;
                  acc = _v1028;
                  const _v1029: any = rt.global(475);
                  acc = _v1029;
                  const _v1030: any = rt.op("*", ...[_v1028, _v1029]);
                  acc = _v1030;
                  const _v1031: any = rt.op("+", ...[_v1027, _v1030]);
                  acc = _v1031;
                  const _v1032: any = rt.setGlobal(488, _v1031);
                  acc = _v1032;
                  _v1020 = _v1032;
                }
                acc = _v1020;
                _v950 = _v1020;
                let _v1033: any = acc;
                let _v1034: any = 1;
                if (rt.truth(_v1034)) {
                  const _v1035: any = rt.global(488);
                  acc = _v1035;
                  const _v1036: any = await rt.call(300, "localproc_2", [_v1035], this);
                  acc = _v1036;
                  _v1034 = _v1036;
                }
                if (rt.truth(_v1034)) {
                  const _v1037: any = (args[0] ?? 0);
                  acc = _v1037;
                  const _v1038: any = rt.global(491);
                  acc = _v1038;
                  const _v1039: any = await rt.call(300, "localproc_0", [_v1037, _v1038], this);
                  acc = _v1039;
                  _v1034 = _v1039;
                }
                acc = _v1034;
                _v1033 = _v1034;
                if (rt.truth(_v1034)) {
                  const _v1040: any = 22;
                  acc = _v1040;
                  const _v1041: any = rt.setGlobal(403, _v1040);
                  acc = _v1041;
                  _v1033 = _v1041;
                  const _v1042: any = rt.global(491);
                  acc = _v1042;
                  const _v1043: any = rt.setGlobal(408, _v1042);
                  acc = _v1043;
                  _v1033 = _v1043;
                  const _v1044: any = 17;
                  acc = _v1044;
                  const _v1045: any = rt.setGlobal(407, _v1044);
                  acc = _v1045;
                  _v1033 = _v1045;
                  const _v1046: any = 4;
                  acc = _v1046;
                  return _v1046;
                  _v1033 = acc;
                }
                acc = _v1033;
                _v950 = _v1033;
                let _v1047: any = acc;
                const _v1048: any = rt.global(500);
                acc = _v1048;
                const _v1049: any = 32;
                acc = _v1049;
                const _v1050: any = rt.op("==", ...[_v1048, _v1049]);
                acc = _v1050;
                _v1047 = _v1050;
                if (rt.truth(_v1050)) {
                  const _v1051: any = await rt.call(300, "SetDebug", [], this);
                  acc = _v1051;
                  _v1047 = _v1051;
                }
                acc = _v1047;
                _v950 = _v1047;
                const _v1052: any = rt.global(400);
                acc = _v1052;
                const _v1053: any = 12;
                acc = _v1053;
                const _v1054: any = rt.global(498);
                acc = _v1054;
                const _v1055: any = await rt.call(300, "localproc_1", [_v1052, _v1053, _v1054], this);
                acc = _v1055;
                const _v1056: any = rt.setGlobal(487, _v1055);
                acc = _v1056;
                _v950 = _v1056;
                let _v1057: any = acc;
                let _v1058: any = 1;
                if (rt.truth(_v1058)) {
                  const _v1059: any = rt.global(487);
                  acc = _v1059;
                  const _v1060: any = await rt.call(300, "localproc_2", [_v1059], this);
                  acc = _v1060;
                  _v1058 = _v1060;
                }
                if (rt.truth(_v1058)) {
                  const _v1061: any = rt.global(486);
                  acc = _v1061;
                  _v1058 = _v1061;
                }
                if (rt.truth(_v1058)) {
                  const _v1062: any = rt.global(486);
                  acc = _v1062;
                  const _v1063: any = (args[0] ?? 0);
                  acc = _v1063;
                  const _v1064: any = await rt.call(0, "proc0_11", [_v1063], this);
                  acc = _v1064;
                  const _v1065: any = rt.op("+", ...[_v1062, _v1064]);
                  acc = _v1065;
                  const _v1066: any = rt.global(491);
                  acc = _v1066;
                  const _v1067: any = rt.op(">=", ...[_v1065, _v1066]);
                  acc = _v1067;
                  _v1058 = _v1067;
                }
                acc = _v1058;
                _v1057 = _v1058;
                if (rt.truth(_v1058)) {
                  const _v1068: any = 23;
                  acc = _v1068;
                  const _v1069: any = rt.setGlobal(403, _v1068);
                  acc = _v1069;
                  _v1057 = _v1069;
                  const _v1070: any = 9;
                  acc = _v1070;
                  const _v1071: any = rt.setGlobal(407, _v1070);
                  acc = _v1071;
                  _v1057 = _v1071;
                  const _v1072: any = rt.global(491);
                  acc = _v1072;
                  const _v1073: any = (args[0] ?? 0);
                  acc = _v1073;
                  const _v1074: any = await rt.call(0, "proc0_11", [_v1073], this);
                  acc = _v1074;
                  const _v1075: any = rt.op("-", ...[_v1072, _v1074]);
                  acc = _v1075;
                  const _v1076: any = rt.setGlobal(408, _v1075);
                  acc = _v1076;
                  _v1057 = _v1076;
                  const _v1077: any = 12;
                  acc = _v1077;
                  return _v1077;
                  _v1057 = acc;
                }
                acc = _v1057;
                _v950 = _v1057;
              }
              acc = _v950;
              _v942 = _v950;
              let _v1078: any = acc;
              const _v1079: any = rt.global(500);
              acc = _v1079;
              const _v1080: any = 33;
              acc = _v1080;
              const _v1081: any = rt.op("==", ...[_v1079, _v1080]);
              acc = _v1081;
              _v1078 = _v1081;
              if (rt.truth(_v1081)) {
                const _v1082: any = await rt.call(300, "SetDebug", [], this);
                acc = _v1082;
                _v1078 = _v1082;
              }
              acc = _v1078;
              _v942 = _v1078;
              let _v1083: any = acc;
              let _v1084: any = 1;
              if (rt.truth(_v1084)) {
                const _v1085: any = rt.global(329);
                acc = _v1085;
                _v1084 = _v1085;
              }
              if (rt.truth(_v1084)) {
                const _v1086: any = (args[0] ?? 0);
                acc = _v1086;
                const _v1087: any = await rt.call(0, "proc0_11", [_v1086], this);
                acc = _v1087;
                const _v1088: any = 1500;
                acc = _v1088;
                const _v1089: any = rt.op(">", ...[_v1087, _v1088]);
                acc = _v1089;
                _v1084 = _v1089;
              }
              if (rt.truth(_v1084)) {
                const _v1090: any = rt.global(498);
                acc = _v1090;
                const _v1091: any = 3;
                acc = _v1091;
                const _v1092: any = rt.op("==", ...[_v1090, _v1091]);
                acc = _v1092;
                _v1084 = _v1092;
              }
              acc = _v1084;
              _v1083 = _v1084;
              if (rt.truth(_v1084)) {
                let _v1093: any = acc;
                let _v1094: any = 1;
                if (rt.truth(_v1094)) {
                  const _v1095: any = (args[0] ?? 0);
                  acc = _v1095;
                  const _v1096: any = await rt.send(_v1095, "wage", []);
                  acc = _v1096;
                  _v1094 = _v1096;
                }
                if (rt.truth(_v1094)) {
                  const _v1097: any = (args[0] ?? 0);
                  acc = _v1097;
                  const _v1098: any = await rt.send(_v1097, "dressedForWork", []);
                  acc = _v1098;
                  _v1094 = _v1098;
                }
                acc = _v1094;
                _v1093 = _v1094;
                if (rt.truth(_v1094)) {
                  const _v1099: any = rt.global(400);
                  acc = _v1099;
                  const _v1100: any = (args[0] ?? 0);
                  acc = _v1100;
                  const _v1101: any = await rt.send(_v1100, "worksAt", []);
                  acc = _v1101;
                  const _v1102: any = 4;
                  acc = _v1102;
                  const _v1103: any = rt.global(498);
                  acc = _v1103;
                  const _v1104: any = await rt.call(300, "localproc_4", [_v1099, _v1101, _v1102, _v1103], this);
                  acc = _v1104;
                  const _v1105: any = rt.setGlobal(487, _v1104);
                  acc = _v1105;
                  _v1093 = _v1105;
                } else {
                  const _v1106: any = rt.global(400);
                  acc = _v1106;
                  const _v1107: any = 4;
                  acc = _v1107;
                  const _v1108: any = rt.global(498);
                  acc = _v1108;
                  const _v1109: any = await rt.call(300, "localproc_3", [_v1106, _v1107, _v1108], this);
                  acc = _v1109;
                  const _v1110: any = rt.setGlobal(487, _v1109);
                  acc = _v1110;
                  _v1093 = _v1110;
                }
                acc = _v1093;
                _v1083 = _v1093;
                const _v1111: any = rt.global(475);
                acc = _v1111;
                const _v1112: any = rt.setGlobal(487, rt.op("+", rt.global(487), _v1111));
                acc = _v1112;
                let _v1113: any = acc;
                const _v1114: any = (args[0] ?? 0);
                acc = _v1114;
                const _v1115: any = await rt.send(_v1114, "wage", []);
                acc = _v1115;
                _v1113 = _v1115;
                if (rt.truth(_v1115)) {
                  const _v1116: any = 18;
                  acc = _v1116;
                  const _v1117: any = rt.global(475);
                  acc = _v1117;
                  const _v1118: any = rt.op("*", ...[_v1116, _v1117]);
                  acc = _v1118;
                  _v1113 = _v1118;
                } else {
                  const _v1119: any = 0;
                  acc = _v1119;
                  _v1113 = _v1119;
                }
                acc = _v1113;
                const _v1120: any = rt.op("+", ...[_v1112, _v1113]);
                acc = _v1120;
                const _v1121: any = rt.setGlobal(488, _v1120);
                acc = _v1121;
                _v1083 = _v1121;
                let _v1122: any = acc;
                const _v1123: any = rt.global(488);
                acc = _v1123;
                const _v1124: any = await rt.call(300, "localproc_2", [_v1123], this);
                acc = _v1124;
                _v1122 = _v1124;
                if (rt.truth(_v1124)) {
                  let _v1125: any = acc;
                  let _v1126: any = 1;
                  if (rt.truth(_v1126)) {
                    const _v1127: any = (args[0] ?? 0);
                    acc = _v1127;
                    const _v1128: any = await rt.send(_v1127, "wage", []);
                    acc = _v1128;
                    _v1126 = _v1128;
                  }
                  if (rt.truth(_v1126)) {
                    const _v1129: any = (args[0] ?? 0);
                    acc = _v1129;
                    const _v1130: any = await rt.send(_v1129, "dressedForWork", []);
                    acc = _v1130;
                    _v1126 = _v1130;
                  }
                  if (rt.truth(_v1126)) {
                    const _v1131: any = (args[0] ?? 0);
                    acc = _v1131;
                    const _v1132: any = await rt.send(_v1131, "worksAt", []);
                    acc = _v1132;
                    const _v1133: any = 3;
                    acc = _v1133;
                    const _v1134: any = rt.op("!=", ...[_v1132, _v1133]);
                    acc = _v1134;
                    _v1126 = _v1134;
                  }
                  acc = _v1126;
                  _v1125 = _v1126;
                  if (rt.truth(_v1126)) {
                    const _v1135: any = 24;
                    acc = _v1135;
                    const _v1136: any = rt.setGlobal(403, _v1135);
                    acc = _v1136;
                    _v1125 = _v1136;
                    const _v1137: any = 1;
                    acc = _v1137;
                    const _v1138: any = rt.setGlobal(407, _v1137);
                    acc = _v1138;
                    _v1125 = _v1138;
                    const _v1139: any = 3;
                    acc = _v1139;
                    const _v1140: any = rt.setGlobal(408, _v1139);
                    acc = _v1140;
                    _v1125 = _v1140;
                    const _v1141: any = 18;
                    acc = _v1141;
                    const _v1142: any = rt.setGlobal(409, _v1141);
                    acc = _v1142;
                    _v1125 = _v1142;
                    const _v1143: any = rt.global(400);
                    acc = _v1143;
                    const _v1144: any = (args[0] ?? 0);
                    acc = _v1144;
                    const _v1145: any = await rt.send(_v1144, "worksAt", []);
                    acc = _v1145;
                    const _v1146: any = 4;
                    acc = _v1146;
                    const _v1147: any = await rt.call(300, "localproc_5", [_v1143, _v1145, _v1146], this);
                    acc = _v1147;
                    return _v1147;
                    _v1125 = acc;
                  } else {
                    const _v1148: any = 224;
                    acc = _v1148;
                    const _v1149: any = rt.setGlobal(403, _v1148);
                    acc = _v1149;
                    _v1125 = _v1149;
                    const _v1150: any = 18;
                    acc = _v1150;
                    const _v1151: any = rt.setGlobal(407, _v1150);
                    acc = _v1151;
                    _v1125 = _v1151;
                    const _v1152: any = 4;
                    acc = _v1152;
                    return _v1152;
                    _v1125 = acc;
                  }
                  acc = _v1125;
                  _v1122 = _v1125;
                }
                acc = _v1122;
                _v1083 = _v1122;
              }
              acc = _v1083;
              _v942 = _v1083;
              let _v1153: any = acc;
              const _v1154: any = rt.global(500);
              acc = _v1154;
              const _v1155: any = 34;
              acc = _v1155;
              const _v1156: any = rt.op("==", ...[_v1154, _v1155]);
              acc = _v1156;
              _v1153 = _v1156;
              if (rt.truth(_v1156)) {
                const _v1157: any = await rt.call(300, "SetDebug", [], this);
                acc = _v1157;
                _v1153 = _v1157;
              }
              acc = _v1153;
              _v942 = _v1153;
              let _v1158: any = acc;
              let _v1159: any = 1;
              if (rt.truth(_v1159)) {
                const _v1160: any = rt.global(329);
                acc = _v1160;
                _v1159 = _v1160;
              }
              if (rt.truth(_v1159)) {
                const _v1161: any = (args[0] ?? 0);
                acc = _v1161;
                const _v1162: any = await rt.call(0, "proc0_11", [_v1161], this);
                acc = _v1162;
                const _v1163: any = rt.global(491);
                acc = _v1163;
                const _v1164: any = rt.op(">=", ...[_v1162, _v1163]);
                acc = _v1164;
                _v1159 = _v1164;
              }
              acc = _v1159;
              _v1158 = _v1159;
              if (rt.truth(_v1159)) {
                let _v1165: any = acc;
                let _v1166: any = 1;
                if (rt.truth(_v1166)) {
                  const _v1167: any = (args[0] ?? 0);
                  acc = _v1167;
                  const _v1168: any = await rt.send(_v1167, "wage", []);
                  acc = _v1168;
                  _v1166 = _v1168;
                }
                if (rt.truth(_v1166)) {
                  const _v1169: any = (args[0] ?? 0);
                  acc = _v1169;
                  const _v1170: any = await rt.send(_v1169, "dressedForWork", []);
                  acc = _v1170;
                  _v1166 = _v1170;
                }
                acc = _v1166;
                _v1165 = _v1166;
                if (rt.truth(_v1166)) {
                  const _v1171: any = rt.global(400);
                  acc = _v1171;
                  const _v1172: any = (args[0] ?? 0);
                  acc = _v1172;
                  const _v1173: any = await rt.send(_v1172, "worksAt", []);
                  acc = _v1173;
                  const _v1174: any = rt.global(498);
                  acc = _v1174;
                  const _v1175: any = await rt.call(300, "localproc_1", [_v1171, _v1173, _v1174], this);
                  acc = _v1175;
                  const _v1176: any = rt.setGlobal(487, _v1175);
                  acc = _v1176;
                  const _v1177: any = 18;
                  acc = _v1177;
                  const _v1178: any = rt.global(475);
                  acc = _v1178;
                  const _v1179: any = rt.op("*", ...[_v1177, _v1178]);
                  acc = _v1179;
                  const _v1180: any = rt.op("+", ...[_v1176, _v1179]);
                  acc = _v1180;
                  const _v1181: any = rt.setGlobal(488, _v1180);
                  acc = _v1181;
                  _v1165 = _v1181;
                } else {
                  const _v1182: any = rt.global(400);
                  acc = _v1182;
                  const _v1183: any = rt.global(498);
                  acc = _v1183;
                  const _v1184: any = await rt.call(300, "localproc_1", [_v1182, _v1183], this);
                  acc = _v1184;
                  const _v1185: any = rt.setGlobal(488, _v1184);
                  acc = _v1185;
                  _v1165 = _v1185;
                }
                acc = _v1165;
                _v1158 = _v1165;
                let _v1186: any = acc;
                const _v1187: any = rt.global(488);
                acc = _v1187;
                const _v1188: any = await rt.call(300, "localproc_2", [_v1187], this);
                acc = _v1188;
                _v1186 = _v1188;
                if (rt.truth(_v1188)) {
                  let _v1189: any = acc;
                  let _v1190: any = 1;
                  if (rt.truth(_v1190)) {
                    const _v1191: any = (args[0] ?? 0);
                    acc = _v1191;
                    const _v1192: any = await rt.send(_v1191, "wage", []);
                    acc = _v1192;
                    _v1190 = _v1192;
                  }
                  if (rt.truth(_v1190)) {
                    const _v1193: any = (args[0] ?? 0);
                    acc = _v1193;
                    const _v1194: any = await rt.send(_v1193, "dressedForWork", []);
                    acc = _v1194;
                    _v1190 = _v1194;
                  }
                  acc = _v1190;
                  _v1189 = _v1190;
                  if (rt.truth(_v1190)) {
                    const _v1195: any = 25;
                    acc = _v1195;
                    const _v1196: any = rt.setGlobal(403, _v1195);
                    acc = _v1196;
                    _v1189 = _v1196;
                    const _v1197: any = 1;
                    acc = _v1197;
                    const _v1198: any = rt.setGlobal(407, _v1197);
                    acc = _v1198;
                    _v1189 = _v1198;
                    const _v1199: any = 3;
                    acc = _v1199;
                    const _v1200: any = rt.setGlobal(408, _v1199);
                    acc = _v1200;
                    _v1189 = _v1200;
                    const _v1201: any = 2;
                    acc = _v1201;
                    const _v1202: any = rt.setGlobal(409, _v1201);
                    acc = _v1202;
                    _v1189 = _v1202;
                    const _v1203: any = rt.global(400);
                    acc = _v1203;
                    const _v1204: any = (args[0] ?? 0);
                    acc = _v1204;
                    const _v1205: any = await rt.send(_v1204, "worksAt", []);
                    acc = _v1205;
                    const _v1206: any = rt.global(498);
                    acc = _v1206;
                    const _v1207: any = await rt.call(300, "localproc_5", [_v1203, _v1205, _v1206], this);
                    acc = _v1207;
                    return _v1207;
                    _v1189 = acc;
                  } else {
                    const _v1208: any = 225;
                    acc = _v1208;
                    const _v1209: any = rt.setGlobal(403, _v1208);
                    acc = _v1209;
                    _v1189 = _v1209;
                    const _v1210: any = 2;
                    acc = _v1210;
                    const _v1211: any = rt.setGlobal(407, _v1210);
                    acc = _v1211;
                    _v1189 = _v1211;
                    const _v1212: any = rt.global(498);
                    acc = _v1212;
                    return _v1212;
                    _v1189 = acc;
                  }
                  acc = _v1189;
                  _v1186 = _v1189;
                }
                acc = _v1186;
                _v1158 = _v1186;
              }
              acc = _v1158;
              _v942 = _v1158;
              let _v1213: any = acc;
              const _v1214: any = rt.global(500);
              acc = _v1214;
              const _v1215: any = 35;
              acc = _v1215;
              const _v1216: any = rt.op("==", ...[_v1214, _v1215]);
              acc = _v1216;
              _v1213 = _v1216;
              if (rt.truth(_v1216)) {
                const _v1217: any = await rt.call(300, "SetDebug", [], this);
                acc = _v1217;
                _v1213 = _v1217;
              }
              acc = _v1213;
              _v942 = _v1213;
              const _v1218: any = rt.global(400);
              acc = _v1218;
              const _v1219: any = 4;
              acc = _v1219;
              const _v1220: any = 3;
              acc = _v1220;
              const _v1221: any = await rt.call(300, "localproc_1", [_v1218, _v1219, _v1220], this);
              acc = _v1221;
              const _v1222: any = rt.setGlobal(487, _v1221);
              acc = _v1222;
              _v942 = _v1222;
              let _v1223: any = acc;
              let _v1224: any = 1;
              if (rt.truth(_v1224)) {
                const _v1225: any = rt.global(498);
                acc = _v1225;
                const _v1226: any = 3;
                acc = _v1226;
                const _v1227: any = rt.op("==", ...[_v1225, _v1226]);
                acc = _v1227;
                _v1224 = _v1227;
              }
              if (rt.truth(_v1224)) {
                const _v1228: any = (args[0] ?? 0);
                acc = _v1228;
                const _v1229: any = await rt.call(0, "proc0_11", [_v1228], this);
                acc = _v1229;
                const _v1230: any = 1500;
                acc = _v1230;
                const _v1231: any = rt.op(">", ...[_v1229, _v1230]);
                acc = _v1231;
                _v1224 = _v1231;
              }
              if (rt.truth(_v1224)) {
                const _v1232: any = rt.global(487);
                acc = _v1232;
                const _v1233: any = await rt.call(300, "localproc_2", [_v1232], this);
                acc = _v1233;
                _v1224 = _v1233;
              }
              acc = _v1224;
              _v1223 = _v1224;
              if (rt.truth(_v1224)) {
                const _v1234: any = 26;
                acc = _v1234;
                const _v1235: any = rt.setGlobal(403, _v1234);
                acc = _v1235;
                _v1223 = _v1235;
                const _v1236: any = 18;
                acc = _v1236;
                const _v1237: any = rt.setGlobal(407, _v1236);
                acc = _v1237;
                _v1223 = _v1237;
                const _v1238: any = 4;
                acc = _v1238;
                return _v1238;
                _v1223 = acc;
              }
              acc = _v1223;
              _v942 = _v1223;
              let _v1239: any = acc;
              const _v1240: any = rt.global(500);
              acc = _v1240;
              const _v1241: any = 36;
              acc = _v1241;
              const _v1242: any = rt.op("==", ...[_v1240, _v1241]);
              acc = _v1242;
              _v1239 = _v1242;
              if (rt.truth(_v1242)) {
                const _v1243: any = await rt.call(300, "SetDebug", [], this);
                acc = _v1243;
                _v1239 = _v1243;
              }
              acc = _v1239;
              _v942 = _v1239;
              let _v1244: any = acc;
              const _v1245: any = (args[0] ?? 0);
              acc = _v1245;
              const _v1246: any = await rt.call(0, "proc0_11", [_v1245], this);
              acc = _v1246;
              const _v1247: any = rt.global(491);
              acc = _v1247;
              const _v1248: any = rt.op(">=", ...[_v1246, _v1247]);
              acc = _v1248;
              _v1244 = _v1248;
              if (rt.truth(_v1248)) {
                const _v1249: any = 27;
                acc = _v1249;
                const _v1250: any = rt.setGlobal(403, _v1249);
                acc = _v1250;
                _v1244 = _v1250;
                const _v1251: any = 2;
                acc = _v1251;
                const _v1252: any = rt.setGlobal(407, _v1251);
                acc = _v1252;
                _v1244 = _v1252;
                const _v1253: any = rt.global(498);
                acc = _v1253;
                return _v1253;
                _v1244 = acc;
              }
              acc = _v1244;
              _v942 = _v1244;
            }
            acc = _v942;
            let _v1254: any = acc;
            const _v1255: any = rt.global(500);
            acc = _v1255;
            const _v1256: any = 37;
            acc = _v1256;
            const _v1257: any = rt.op("==", ...[_v1255, _v1256]);
            acc = _v1257;
            _v1254 = _v1257;
            if (rt.truth(_v1257)) {
              const _v1258: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1258;
              _v1254 = _v1258;
            }
            acc = _v1254;
            let _v1259: any = acc;
            let _v1260: any = 1;
            if (rt.truth(_v1260)) {
              const _v1261: any = (args[0] ?? 0);
              acc = _v1261;
              const _v1262: any = await rt.send(_v1261, "raisesGiven", []);
              acc = _v1262;
              const _v1263: any = 2;
              acc = _v1263;
              const _v1264: any = rt.op("<", ...[_v1262, _v1263]);
              acc = _v1264;
              _v1260 = _v1264;
            }
            if (rt.truth(_v1260)) {
              const _v1265: any = (args[0] ?? 0);
              acc = _v1265;
              const _v1266: any = await rt.send(_v1265, "dependibility", []);
              acc = _v1266;
              const _v1267: any = (args[0] ?? 0);
              acc = _v1267;
              const _v1268: any = await rt.send(_v1267, "minDepend", []);
              acc = _v1268;
              const _v1269: any = 10;
              acc = _v1269;
              const _v1270: any = 5;
              acc = _v1270;
              const _v1271: any = (args[0] ?? 0);
              acc = _v1271;
              const _v1272: any = await rt.send(_v1271, "raisesGiven", []);
              acc = _v1272;
              const _v1273: any = rt.op("*", ...[_v1270, _v1272]);
              acc = _v1273;
              const _v1274: any = rt.op("+", ...[_v1268, _v1269, _v1273]);
              acc = _v1274;
              const _v1275: any = rt.op(">=", ...[_v1266, _v1274]);
              acc = _v1275;
              _v1260 = _v1275;
            }
            if (rt.truth(_v1260)) {
              const _v1276: any = rt.global(309);
              acc = _v1276;
              const _v1277: any = (args[0] ?? 0);
              acc = _v1277;
              const _v1278: any = await rt.send(_v1277, "baseWage", []);
              acc = _v1278;
              const _v1279: any = await rt.call(109, "proc109_0", [_v1276, _v1278], this);
              acc = _v1279;
              const _v1280: any = (args[0] ?? 0);
              acc = _v1280;
              const _v1281: any = await rt.send(_v1280, "wage", []);
              acc = _v1281;
              const _v1282: any = rt.op(">", ...[_v1279, _v1281]);
              acc = _v1282;
              _v1260 = _v1282;
            }
            if (rt.truth(_v1260)) {
              const _v1283: any = rt.global(402);
              acc = _v1283;
              const _v1284: any = rt.op("not", ...[_v1283]);
              acc = _v1284;
              _v1260 = _v1284;
            }
            acc = _v1260;
            _v1259 = _v1260;
            if (rt.truth(_v1260)) {
              const _v1285: any = 28;
              acc = _v1285;
              const _v1286: any = rt.setGlobal(403, _v1285);
              acc = _v1286;
              _v1259 = _v1286;
              const _v1287: any = 4;
              acc = _v1287;
              const _v1288: any = rt.setGlobal(407, _v1287);
              acc = _v1288;
              _v1259 = _v1288;
              const _v1289: any = 6;
              acc = _v1289;
              return _v1289;
              _v1259 = acc;
            }
            acc = _v1259;
            let _v1290: any = acc;
            const _v1291: any = rt.global(500);
            acc = _v1291;
            const _v1292: any = 38;
            acc = _v1292;
            const _v1293: any = rt.op("==", ...[_v1291, _v1292]);
            acc = _v1293;
            _v1290 = _v1293;
            if (rt.truth(_v1293)) {
              const _v1294: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1294;
              _v1290 = _v1294;
            }
            acc = _v1290;
            let _v1295: any = acc;
            let _v1296: any = 1;
            if (rt.truth(_v1296)) {
              const _v1297: any = (args[0] ?? 0);
              acc = _v1297;
              const _v1298: any = await rt.send(_v1297, "notEnoughEd", []);
              acc = _v1298;
              const _v1299: any = rt.op("not", ...[_v1298]);
              acc = _v1299;
              _v1296 = _v1299;
            }
            if (rt.truth(_v1296)) {
              const _v1300: any = (args[0] ?? 0);
              acc = _v1300;
              const _v1301: any = await rt.send(_v1300, "experience", []);
              acc = _v1301;
              const _v1302: any = (args[0] ?? 0);
              acc = _v1302;
              const _v1303: any = await rt.send(_v1302, "maxExperience", []);
              acc = _v1303;
              const _v1304: any = rt.op(">=", ...[_v1301, _v1303]);
              acc = _v1304;
              _v1296 = _v1304;
            }
            if (rt.truth(_v1296)) {
              const _v1305: any = (args[0] ?? 0);
              acc = _v1305;
              const _v1306: any = await rt.send(_v1305, "dependibility", []);
              acc = _v1306;
              const _v1307: any = (args[0] ?? 0);
              acc = _v1307;
              const _v1308: any = await rt.send(_v1307, "minDepend", []);
              acc = _v1308;
              const _v1309: any = 10;
              acc = _v1309;
              const _v1310: any = rt.op("+", ...[_v1308, _v1309]);
              acc = _v1310;
              const _v1311: any = rt.op(">=", ...[_v1306, _v1310]);
              acc = _v1311;
              _v1296 = _v1311;
            }
            if (rt.truth(_v1296)) {
              const _v1312: any = rt.global(402);
              acc = _v1312;
              const _v1313: any = rt.op("not", ...[_v1312]);
              acc = _v1313;
              _v1296 = _v1313;
            }
            if (rt.truth(_v1296)) {
              const _v1314: any = (args[0] ?? 0);
              acc = _v1314;
              const _v1315: any = await rt.send(_v1314, "maxExperience", []);
              acc = _v1315;
              const _v1316: any = 80;
              acc = _v1316;
              const _v1317: any = rt.op("<", ...[_v1315, _v1316]);
              acc = _v1317;
              _v1296 = _v1317;
            }
            if (rt.truth(_v1296)) {
              const _v1318: any = rt.global(309);
              acc = _v1318;
              const _v1319: any = 25;
              acc = _v1319;
              const _v1320: any = await rt.call(109, "proc109_0", [_v1318, _v1319], this);
              acc = _v1320;
              const _v1321: any = (args[0] ?? 0);
              acc = _v1321;
              const _v1322: any = await rt.send(_v1321, "wage", []);
              acc = _v1322;
              const _v1323: any = rt.op(">", ...[_v1320, _v1322]);
              acc = _v1323;
              _v1296 = _v1323;
            }
            acc = _v1296;
            _v1295 = _v1296;
            if (rt.truth(_v1296)) {
              const _v1324: any = 29;
              acc = _v1324;
              const _v1325: any = rt.setGlobal(403, _v1324);
              acc = _v1325;
              _v1295 = _v1325;
              const _v1326: any = 5;
              acc = _v1326;
              const _v1327: any = rt.setGlobal(407, _v1326);
              acc = _v1327;
              _v1295 = _v1327;
              const _v1328: any = 6;
              acc = _v1328;
              return _v1328;
              _v1295 = acc;
            }
            acc = _v1295;
            let _v1329: any = acc;
            const _v1330: any = rt.global(500);
            acc = _v1330;
            const _v1331: any = 39;
            acc = _v1331;
            const _v1332: any = rt.op("==", ...[_v1330, _v1331]);
            acc = _v1332;
            _v1329 = _v1332;
            if (rt.truth(_v1332)) {
              const _v1333: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1333;
              _v1329 = _v1333;
            }
            acc = _v1329;
            let _v1334: any = acc;
            const _v1335: any = (args[0] ?? 0);
            acc = _v1335;
            const _v1336: any = await rt.send(_v1335, "notEnoughEd", []);
            acc = _v1336;
            const _v1337: any = rt.op("not", ...[_v1336]);
            acc = _v1337;
            _v1334 = _v1337;
            if (rt.truth(_v1337)) {
              const _v1338: any = 1;
              acc = _v1338;
              const _v1339: any = rt.setGlobal(493, _v1338);
              acc = _v1339;
              _v1334 = _v1339;
              let _v1340: any = acc;
              const _v1341: any = (args[0] ?? 0);
              acc = _v1341;
              const _v1342: any = await rt.send(_v1341, "experience", []);
              acc = _v1342;
              const _v1343: any = (args[0] ?? 0);
              acc = _v1343;
              const _v1344: any = await rt.send(_v1343, "maxExperience", []);
              acc = _v1344;
              const _v1345: any = rt.op("<", ...[_v1342, _v1344]);
              acc = _v1345;
              _v1340 = _v1345;
              if (rt.truth(_v1345)) {
                const _v1346: any = (args[0] ?? 0);
                acc = _v1346;
                const _v1347: any = await rt.send(_v1346, "maxExperience", []);
                acc = _v1347;
                const _v1348: any = (args[0] ?? 0);
                acc = _v1348;
                const _v1349: any = await rt.send(_v1348, "experience", []);
                acc = _v1349;
                const _v1350: any = rt.op("-", ...[_v1347, _v1349]);
                acc = _v1350;
                const _v1351: any = rt.setGlobal(493, _v1350);
                acc = _v1351;
                _v1340 = _v1351;
              }
              acc = _v1340;
              _v1334 = _v1340;
              let _v1352: any = acc;
              let _v1353: any = 1;
              if (rt.truth(_v1353)) {
                const _v1354: any = (args[0] ?? 0);
                acc = _v1354;
                const _v1355: any = await rt.send(_v1354, "dependibility", []);
                acc = _v1355;
                const _v1356: any = (args[0] ?? 0);
                acc = _v1356;
                const _v1357: any = await rt.send(_v1356, "minDepend", []);
                acc = _v1357;
                const _v1358: any = 10;
                acc = _v1358;
                const _v1359: any = rt.op("+", ...[_v1357, _v1358]);
                acc = _v1359;
                const _v1360: any = rt.op("<", ...[_v1355, _v1359]);
                acc = _v1360;
                _v1353 = _v1360;
              }
              if (rt.truth(_v1353)) {
                const _v1361: any = (args[0] ?? 0);
                acc = _v1361;
                const _v1362: any = await rt.send(_v1361, "minDepend", []);
                acc = _v1362;
                const _v1363: any = 10;
                acc = _v1363;
                const _v1364: any = rt.op("+", ...[_v1362, _v1363]);
                acc = _v1364;
                const _v1365: any = (args[0] ?? 0);
                acc = _v1365;
                const _v1366: any = await rt.send(_v1365, "dependibility", []);
                acc = _v1366;
                const _v1367: any = rt.op("-", ...[_v1364, _v1366]);
                acc = _v1367;
                const _v1368: any = rt.global(493);
                acc = _v1368;
                const _v1369: any = rt.op("<", ...[_v1367, _v1368]);
                acc = _v1369;
                _v1353 = _v1369;
              }
              acc = _v1353;
              _v1352 = _v1353;
              if (rt.truth(_v1353)) {
                const _v1370: any = (args[0] ?? 0);
                acc = _v1370;
                const _v1371: any = await rt.send(_v1370, "minDepend", []);
                acc = _v1371;
                const _v1372: any = 10;
                acc = _v1372;
                const _v1373: any = rt.op("+", ...[_v1371, _v1372]);
                acc = _v1373;
                const _v1374: any = (args[0] ?? 0);
                acc = _v1374;
                const _v1375: any = await rt.send(_v1374, "dependibility", []);
                acc = _v1375;
                const _v1376: any = rt.op("-", ...[_v1373, _v1375]);
                acc = _v1376;
                const _v1377: any = rt.setGlobal(493, _v1376);
                acc = _v1377;
                _v1352 = _v1377;
              }
              acc = _v1352;
              _v1334 = _v1352;
              let _v1378: any = acc;
              let _v1379: any = 1;
              if (rt.truth(_v1379)) {
                const _v1380: any = rt.global(402);
                acc = _v1380;
                const _v1381: any = rt.op("not", ...[_v1380]);
                acc = _v1381;
                _v1379 = _v1381;
              }
              if (rt.truth(_v1379)) {
                const _v1382: any = (args[0] ?? 0);
                acc = _v1382;
                const _v1383: any = await rt.send(_v1382, "wage", []);
                acc = _v1383;
                _v1379 = _v1383;
              }
              if (rt.truth(_v1379)) {
                const _v1384: any = (args[0] ?? 0);
                acc = _v1384;
                const _v1385: any = await rt.send(_v1384, "dressedForWork", []);
                acc = _v1385;
                _v1379 = _v1385;
              }
              acc = _v1379;
              _v1378 = _v1379;
              if (rt.truth(_v1379)) {
                const _v1386: any = rt.global(400);
                acc = _v1386;
                const _v1387: any = (args[0] ?? 0);
                acc = _v1387;
                const _v1388: any = await rt.send(_v1387, "worksAt", []);
                acc = _v1388;
                const _v1389: any = 6;
                acc = _v1389;
                const _v1390: any = await rt.call(300, "localproc_1", [_v1386, _v1388, _v1389], this);
                acc = _v1390;
                const _v1391: any = rt.setGlobal(487, _v1390);
                acc = _v1391;
                const _v1392: any = 6;
                acc = _v1392;
                const _v1393: any = rt.global(493);
                acc = _v1393;
                const _v1394: any = rt.global(475);
                acc = _v1394;
                const _v1395: any = rt.op("*", ...[_v1392, _v1393, _v1394]);
                acc = _v1395;
                const _v1396: any = 8;
                acc = _v1396;
                const _v1397: any = rt.global(475);
                acc = _v1397;
                const _v1398: any = rt.op("*", ...[_v1396, _v1397]);
                acc = _v1398;
                const _v1399: any = rt.op("+", ...[_v1391, _v1395, _v1398]);
                acc = _v1399;
                const _v1400: any = rt.setGlobal(488, _v1399);
                acc = _v1400;
                _v1378 = _v1400;
                let _v1401: any = acc;
                const _v1402: any = rt.global(488);
                acc = _v1402;
                const _v1403: any = await rt.call(300, "localproc_2", [_v1402], this);
                acc = _v1403;
                _v1401 = _v1403;
                if (rt.truth(_v1403)) {
                  const _v1404: any = 30;
                  acc = _v1404;
                  const _v1405: any = rt.setGlobal(403, _v1404);
                  acc = _v1405;
                  _v1401 = _v1405;
                  const _v1406: any = 1;
                  acc = _v1406;
                  const _v1407: any = rt.setGlobal(407, _v1406);
                  acc = _v1407;
                  _v1401 = _v1407;
                  let _v1408: any = acc;
                  const _v1409: any = rt.global(493);
                  acc = _v1409;
                  const _v1410: any = 0;
                  acc = _v1410;
                  const _v1411: any = rt.op("<=", ...[_v1409, _v1410]);
                  acc = _v1411;
                  _v1408 = _v1411;
                  if (rt.truth(_v1411)) {
                    const _v1412: any = 1;
                    acc = _v1412;
                    const _v1413: any = rt.setGlobal(493, _v1412);
                    acc = _v1413;
                    _v1408 = _v1413;
                  }
                  acc = _v1408;
                  _v1401 = _v1408;
                  const _v1414: any = rt.global(493);
                  acc = _v1414;
                  const _v1415: any = rt.setGlobal(408, _v1414);
                  acc = _v1415;
                  _v1401 = _v1415;
                  const _v1416: any = (args[0] ?? 0);
                  acc = _v1416;
                  const _v1417: any = await rt.send(_v1416, "worksAt", []);
                  acc = _v1417;
                  return _v1417;
                  _v1401 = acc;
                }
                acc = _v1401;
                _v1378 = _v1401;
              }
              acc = _v1378;
              _v1334 = _v1378;
            }
            acc = _v1334;
            let _v1418: any = acc;
            const _v1419: any = rt.global(500);
            acc = _v1419;
            const _v1420: any = 40;
            acc = _v1420;
            const _v1421: any = rt.op("==", ...[_v1419, _v1420]);
            acc = _v1421;
            _v1418 = _v1421;
            if (rt.truth(_v1421)) {
              const _v1422: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1422;
              _v1418 = _v1422;
            }
            acc = _v1418;
            let _v1423: any = acc;
            let _v1424: any = 1;
            if (rt.truth(_v1424)) {
              const _v1425: any = rt.global(329);
              acc = _v1425;
              _v1424 = _v1425;
            }
            if (rt.truth(_v1424)) {
              const _v1426: any = (args[0] ?? 0);
              acc = _v1426;
              const _v1427: any = await rt.send(_v1426, "wage", []);
              acc = _v1427;
              _v1424 = _v1427;
            }
            if (rt.truth(_v1424)) {
              const _v1428: any = (args[0] ?? 0);
              acc = _v1428;
              const _v1429: any = await rt.send(_v1428, "dressedForWork", []);
              acc = _v1429;
              _v1424 = _v1429;
            }
            acc = _v1424;
            _v1423 = _v1424;
            if (rt.truth(_v1424)) {
              let _v1430: any = acc;
              const _v1431: any = rt.global(500);
              acc = _v1431;
              const _v1432: any = 41;
              acc = _v1432;
              const _v1433: any = rt.op("==", ...[_v1431, _v1432]);
              acc = _v1433;
              _v1430 = _v1433;
              if (rt.truth(_v1433)) {
                const _v1434: any = await rt.call(300, "SetDebug", [], this);
                acc = _v1434;
                _v1430 = _v1434;
              }
              acc = _v1430;
              _v1423 = _v1430;
              let _v1435: any = acc;
              let _v1436: any = 1;
              if (rt.truth(_v1436)) {
                const _v1437: any = rt.global(551);
                acc = _v1437;
                const _v1438: any = rt.op("not", ...[_v1437]);
                acc = _v1438;
                _v1436 = _v1438;
              }
              if (rt.truth(_v1436)) {
                const _v1439: any = rt.global(496);
                acc = _v1439;
                _v1436 = _v1439;
              }
              if (rt.truth(_v1436)) {
                const _v1440: any = (args[0] ?? 0);
                acc = _v1440;
                const _v1441: any = await rt.call(0, "proc0_11", [_v1440], this);
                acc = _v1441;
                const _v1442: any = rt.global(497);
                acc = _v1442;
                const _v1443: any = rt.op(">=", ...[_v1441, _v1442]);
                acc = _v1443;
                _v1436 = _v1443;
              }
              acc = _v1436;
              _v1435 = _v1436;
              if (rt.truth(_v1436)) {
                const _v1444: any = rt.global(400);
                acc = _v1444;
                const _v1445: any = 12;
                acc = _v1445;
                const _v1446: any = (args[0] ?? 0);
                acc = _v1446;
                const _v1447: any = await rt.send(_v1446, "worksAt", []);
                acc = _v1447;
                const _v1448: any = await rt.call(300, "localproc_1", [_v1444, _v1445, _v1447], this);
                acc = _v1448;
                const _v1449: any = rt.setGlobal(487, _v1448);
                acc = _v1449;
                const _v1450: any = 18;
                acc = _v1450;
                const _v1451: any = rt.global(475);
                acc = _v1451;
                const _v1452: any = rt.op("*", ...[_v1450, _v1451]);
                acc = _v1452;
                const _v1453: any = rt.op("+", ...[_v1449, _v1452]);
                acc = _v1453;
                const _v1454: any = rt.setGlobal(488, _v1453);
                acc = _v1454;
                _v1435 = _v1454;
                let _v1455: any = acc;
                const _v1456: any = rt.global(488);
                acc = _v1456;
                const _v1457: any = await rt.call(300, "localproc_2", [_v1456], this);
                acc = _v1457;
                _v1455 = _v1457;
                if (rt.truth(_v1457)) {
                  const _v1458: any = 31;
                  acc = _v1458;
                  const _v1459: any = rt.setGlobal(403, _v1458);
                  acc = _v1459;
                  _v1455 = _v1459;
                  const _v1460: any = 1;
                  acc = _v1460;
                  const _v1461: any = rt.setGlobal(407, _v1460);
                  acc = _v1461;
                  _v1455 = _v1461;
                  const _v1462: any = 3;
                  acc = _v1462;
                  const _v1463: any = rt.setGlobal(408, _v1462);
                  acc = _v1463;
                  _v1455 = _v1463;
                  const _v1464: any = 10;
                  acc = _v1464;
                  const _v1465: any = rt.setGlobal(409, _v1464);
                  acc = _v1465;
                  _v1455 = _v1465;
                  const _v1466: any = rt.global(400);
                  acc = _v1466;
                  const _v1467: any = (args[0] ?? 0);
                  acc = _v1467;
                  const _v1468: any = await rt.send(_v1467, "worksAt", []);
                  acc = _v1468;
                  const _v1469: any = 12;
                  acc = _v1469;
                  const _v1470: any = await rt.call(300, "localproc_5", [_v1466, _v1468, _v1469], this);
                  acc = _v1470;
                  return _v1470;
                  _v1455 = acc;
                }
                acc = _v1455;
                _v1435 = _v1455;
              }
              acc = _v1435;
              _v1423 = _v1435;
              let _v1471: any = acc;
              const _v1472: any = rt.global(500);
              acc = _v1472;
              const _v1473: any = 42;
              acc = _v1473;
              const _v1474: any = rt.op("==", ...[_v1472, _v1473]);
              acc = _v1474;
              _v1471 = _v1474;
              if (rt.truth(_v1474)) {
                const _v1475: any = await rt.call(300, "SetDebug", [], this);
                acc = _v1475;
                _v1471 = _v1475;
              }
              acc = _v1471;
              _v1423 = _v1471;
              let _v1476: any = acc;
              const _v1477: any = (args[0] ?? 0);
              acc = _v1477;
              const _v1478: any = await rt.send(_v1477, "relax", []);
              acc = _v1478;
              const _v1479: any = 10;
              acc = _v1479;
              const _v1480: any = rt.op("==", ...[_v1478, _v1479]);
              acc = _v1480;
              _v1476 = _v1480;
              if (rt.truth(_v1480)) {
                const _v1481: any = 32;
                acc = _v1481;
                const _v1482: any = rt.setGlobal(403, _v1481);
                acc = _v1482;
                _v1476 = _v1482;
                const _v1483: any = 6;
                acc = _v1483;
                const _v1484: any = rt.setGlobal(407, _v1483);
                acc = _v1484;
                _v1476 = _v1484;
                const _v1485: any = (args[0] ?? 0);
                acc = _v1485;
                const _v1486: any = await rt.send(_v1485, "livesAt", []);
                acc = _v1486;
                return _v1486;
                _v1476 = acc;
              }
              acc = _v1476;
              _v1423 = _v1476;
              let _v1487: any = acc;
              const _v1488: any = rt.global(500);
              acc = _v1488;
              const _v1489: any = 43;
              acc = _v1489;
              const _v1490: any = rt.op("==", ...[_v1488, _v1489]);
              acc = _v1490;
              _v1487 = _v1490;
              if (rt.truth(_v1490)) {
                const _v1491: any = await rt.call(300, "SetDebug", [], this);
                acc = _v1491;
                _v1487 = _v1491;
              }
              acc = _v1487;
              _v1423 = _v1487;
              let _v1492: any = acc;
              const _v1493: any = (args[0] ?? 0);
              acc = _v1493;
              const _v1494: any = await rt.send(_v1493, "relax", []);
              acc = _v1494;
              const _v1495: any = 17;
              acc = _v1495;
              const _v1496: any = rt.op("<", ...[_v1494, _v1495]);
              acc = _v1496;
              _v1492 = _v1496;
              if (rt.truth(_v1496)) {
                const _v1497: any = 33;
                acc = _v1497;
                const _v1498: any = rt.setGlobal(403, _v1497);
                acc = _v1498;
                _v1492 = _v1498;
                const _v1499: any = 1;
                acc = _v1499;
                const _v1500: any = rt.setGlobal(407, _v1499);
                acc = _v1500;
                _v1492 = _v1500;
                const _v1501: any = 3;
                acc = _v1501;
                const _v1502: any = rt.setGlobal(408, _v1501);
                acc = _v1502;
                _v1492 = _v1502;
                const _v1503: any = 6;
                acc = _v1503;
                const _v1504: any = rt.setGlobal(409, _v1503);
                acc = _v1504;
                _v1492 = _v1504;
                const _v1505: any = rt.global(400);
                acc = _v1505;
                const _v1506: any = (args[0] ?? 0);
                acc = _v1506;
                const _v1507: any = await rt.send(_v1506, "worksAt", []);
                acc = _v1507;
                const _v1508: any = (args[0] ?? 0);
                acc = _v1508;
                const _v1509: any = await rt.send(_v1508, "livesAt", []);
                acc = _v1509;
                const _v1510: any = await rt.call(300, "localproc_5", [_v1505, _v1507, _v1509], this);
                acc = _v1510;
                return _v1510;
                _v1492 = acc;
              }
              acc = _v1492;
              _v1423 = _v1492;
              let _v1511: any = acc;
              const _v1512: any = rt.global(500);
              acc = _v1512;
              const _v1513: any = 44;
              acc = _v1513;
              const _v1514: any = rt.op("==", ...[_v1512, _v1513]);
              acc = _v1514;
              _v1511 = _v1514;
              if (rt.truth(_v1514)) {
                const _v1515: any = await rt.call(300, "SetDebug", [], this);
                acc = _v1515;
                _v1511 = _v1515;
              }
              acc = _v1511;
              _v1423 = _v1511;
              const _v1516: any = rt.global(400);
              acc = _v1516;
              const _v1517: any = 7;
              acc = _v1517;
              const _v1518: any = (args[0] ?? 0);
              acc = _v1518;
              const _v1519: any = await rt.send(_v1518, "worksAt", []);
              acc = _v1519;
              const _v1520: any = await rt.call(300, "localproc_3", [_v1516, _v1517, _v1519], this);
              acc = _v1520;
              const _v1521: any = rt.setGlobal(487, _v1520);
              acc = _v1521;
              const _v1522: any = 18;
              acc = _v1522;
              const _v1523: any = rt.global(475);
              acc = _v1523;
              const _v1524: any = rt.op("*", ...[_v1522, _v1523]);
              acc = _v1524;
              const _v1525: any = rt.op("+", ...[_v1521, _v1524]);
              acc = _v1525;
              const _v1526: any = rt.setGlobal(488, _v1525);
              acc = _v1526;
              _v1423 = _v1526;
              let _v1527: any = acc;
              let _v1528: any = 1;
              if (rt.truth(_v1528)) {
                const _v1529: any = 0;
                acc = _v1529;
                const _v1530: any = 1;
                acc = _v1530;
                const _v1531: any = await rt.call(300, "Random", [_v1529, _v1530], this);
                acc = _v1531;
                _v1528 = _v1531;
              }
              if (rt.truth(_v1528)) {
                const _v1532: any = rt.global(488);
                acc = _v1532;
                const _v1533: any = await rt.call(300, "localproc_2", [_v1532], this);
                acc = _v1533;
                _v1528 = _v1533;
              }
              acc = _v1528;
              _v1527 = _v1528;
              if (rt.truth(_v1528)) {
                const _v1534: any = 34;
                acc = _v1534;
                const _v1535: any = rt.setGlobal(403, _v1534);
                acc = _v1535;
                _v1527 = _v1535;
                const _v1536: any = 1;
                acc = _v1536;
                const _v1537: any = rt.setGlobal(407, _v1536);
                acc = _v1537;
                _v1527 = _v1537;
                const _v1538: any = 3;
                acc = _v1538;
                const _v1539: any = rt.setGlobal(408, _v1538);
                acc = _v1539;
                _v1527 = _v1539;
                let _v1540: any = acc;
                let _v1541: any = 1;
                if (rt.truth(_v1541)) {
                  const _v1542: any = (args[0] ?? 0);
                  acc = _v1542;
                  const _v1543: any = await rt.send(_v1542, "numDegrees", []);
                  acc = _v1543;
                  const _v1544: any = 11;
                  acc = _v1544;
                  const _v1545: any = rt.op("!=", ...[_v1543, _v1544]);
                  acc = _v1545;
                  _v1541 = _v1545;
                }
                if (rt.truth(_v1541)) {
                  let _v1546: any = 0;
                  if (!rt.truth(_v1546)) {
                    const _v1547: any = (args[0] ?? 0);
                    acc = _v1547;
                    const _v1548: any = await rt.send(_v1547, "enrollments", []);
                    acc = _v1548;
                    const _v1549: any = (args[0] ?? 0);
                    acc = _v1549;
                    const _v1550: any = await rt.send(_v1549, "numDegrees", []);
                    acc = _v1550;
                    const _v1551: any = rt.op(">", ...[_v1548, _v1550]);
                    acc = _v1551;
                    _v1546 = _v1551;
                  }
                  if (!rt.truth(_v1546)) {
                    const _v1552: any = (args[0] ?? 0);
                    acc = _v1552;
                    const _v1553: any = await rt.call(0, "proc0_11", [_v1552], this);
                    acc = _v1553;
                    const _v1554: any = 400;
                    acc = _v1554;
                    const _v1555: any = rt.op(">", ...[_v1553, _v1554]);
                    acc = _v1555;
                    _v1546 = _v1555;
                  }
                  acc = _v1546;
                  _v1541 = _v1546;
                }
                acc = _v1541;
                _v1540 = _v1541;
                if (rt.truth(_v1541)) {
                  const _v1556: any = 16;
                  acc = _v1556;
                  const _v1557: any = rt.setGlobal(409, _v1556);
                  acc = _v1557;
                  _v1540 = _v1557;
                  const _v1558: any = rt.global(488);
                  acc = _v1558;
                  const _v1559: any = 100;
                  acc = _v1559;
                  const _v1560: any = rt.op("+", ...[_v1558, _v1559]);
                  acc = _v1560;
                  const _v1561: any = rt.setGlobal(410, _v1560);
                  acc = _v1561;
                  _v1540 = _v1561;
                  const _v1562: any = rt.global(400);
                  acc = _v1562;
                  const _v1563: any = (args[0] ?? 0);
                  acc = _v1563;
                  const _v1564: any = await rt.send(_v1563, "worksAt", []);
                  acc = _v1564;
                  const _v1565: any = 7;
                  acc = _v1565;
                  const _v1566: any = await rt.call(300, "localproc_5", [_v1562, _v1564, _v1565], this);
                  acc = _v1566;
                  return _v1566;
                  _v1540 = acc;
                }
                acc = _v1540;
                _v1527 = _v1540;
                const _v1567: any = 334;
                acc = _v1567;
                const _v1568: any = rt.setGlobal(403, _v1567);
                acc = _v1568;
                _v1527 = _v1568;
                const _v1569: any = (args[0] ?? 0);
                acc = _v1569;
                const _v1570: any = await rt.send(_v1569, "worksAt", []);
                acc = _v1570;
                return _v1570;
                _v1527 = acc;
              }
              acc = _v1527;
              _v1423 = _v1527;
              let _v1571: any = acc;
              const _v1572: any = rt.global(500);
              acc = _v1572;
              const _v1573: any = 45;
              acc = _v1573;
              const _v1574: any = rt.op("==", ...[_v1572, _v1573]);
              acc = _v1574;
              _v1571 = _v1574;
              if (rt.truth(_v1574)) {
                const _v1575: any = await rt.call(300, "SetDebug", [], this);
                acc = _v1575;
                _v1571 = _v1575;
              }
              acc = _v1571;
              _v1423 = _v1571;
              const _v1576: any = rt.global(400);
              acc = _v1576;
              const _v1577: any = 8;
              acc = _v1577;
              const _v1578: any = (args[0] ?? 0);
              acc = _v1578;
              const _v1579: any = await rt.send(_v1578, "worksAt", []);
              acc = _v1579;
              const _v1580: any = await rt.call(300, "localproc_3", [_v1576, _v1577, _v1579], this);
              acc = _v1580;
              const _v1581: any = rt.setGlobal(487, _v1580);
              acc = _v1581;
              const _v1582: any = 18;
              acc = _v1582;
              const _v1583: any = rt.global(475);
              acc = _v1583;
              const _v1584: any = rt.op("*", ...[_v1582, _v1583]);
              acc = _v1584;
              const _v1585: any = rt.op("+", ...[_v1581, _v1584]);
              acc = _v1585;
              const _v1586: any = rt.setGlobal(488, _v1585);
              acc = _v1586;
              _v1423 = _v1586;
              let _v1587: any = acc;
              let _v1588: any = 1;
              if (rt.truth(_v1588)) {
                const _v1589: any = (args[0] ?? 0);
                acc = _v1589;
                const _v1590: any = await rt.call(0, "proc0_11", [_v1589], this);
                acc = _v1590;
                const _v1591: any = 1500;
                acc = _v1591;
                const _v1592: any = rt.op(">", ...[_v1590, _v1591]);
                acc = _v1592;
                _v1588 = _v1592;
              }
              if (rt.truth(_v1588)) {
                const _v1593: any = rt.global(488);
                acc = _v1593;
                const _v1594: any = await rt.call(300, "localproc_2", [_v1593], this);
                acc = _v1594;
                _v1588 = _v1594;
              }
              if (rt.truth(_v1588)) {
                const _v1595: any = await rt.call(300, "localproc_6", [], this);
                acc = _v1595;
                _v1588 = _v1595;
              }
              if (rt.truth(_v1588)) {
                const _v1596: any = rt.global(550);
                acc = _v1596;
                const _v1597: any = rt.op("not", ...[_v1596]);
                acc = _v1597;
                _v1588 = _v1597;
              }
              acc = _v1588;
              _v1587 = _v1588;
              if (rt.truth(_v1588)) {
                const _v1598: any = 35;
                acc = _v1598;
                const _v1599: any = rt.setGlobal(403, _v1598);
                acc = _v1599;
                _v1587 = _v1599;
                const _v1600: any = 1;
                acc = _v1600;
                const _v1601: any = rt.setGlobal(407, _v1600);
                acc = _v1601;
                _v1587 = _v1601;
                const _v1602: any = 3;
                acc = _v1602;
                const _v1603: any = rt.setGlobal(408, _v1602);
                acc = _v1603;
                _v1587 = _v1603;
                const _v1604: any = 15;
                acc = _v1604;
                const _v1605: any = rt.setGlobal(409, _v1604);
                acc = _v1605;
                _v1587 = _v1605;
                const _v1606: any = rt.global(400);
                acc = _v1606;
                const _v1607: any = (args[0] ?? 0);
                acc = _v1607;
                const _v1608: any = await rt.send(_v1607, "worksAt", []);
                acc = _v1608;
                const _v1609: any = 8;
                acc = _v1609;
                const _v1610: any = await rt.call(300, "localproc_5", [_v1606, _v1608, _v1609], this);
                acc = _v1610;
                return _v1610;
                _v1587 = acc;
              }
              acc = _v1587;
              _v1423 = _v1587;
              const _v1611: any = 36;
              acc = _v1611;
              const _v1612: any = rt.setGlobal(403, _v1611);
              acc = _v1612;
              _v1423 = _v1612;
              const _v1613: any = 3;
              acc = _v1613;
              const _v1614: any = rt.setGlobal(408, _v1613);
              acc = _v1614;
              _v1423 = _v1614;
              const _v1615: any = 1;
              acc = _v1615;
              const _v1616: any = rt.setGlobal(407, _v1615);
              acc = _v1616;
              _v1423 = _v1616;
              const _v1617: any = (args[0] ?? 0);
              acc = _v1617;
              const _v1618: any = await rt.send(_v1617, "worksAt", []);
              acc = _v1618;
              return _v1618;
              _v1423 = acc;
            }
            acc = _v1423;
            let _v1619: any = acc;
            const _v1620: any = rt.global(500);
            acc = _v1620;
            const _v1621: any = 46;
            acc = _v1621;
            const _v1622: any = rt.op("==", ...[_v1620, _v1621]);
            acc = _v1622;
            _v1619 = _v1622;
            if (rt.truth(_v1622)) {
              const _v1623: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1623;
              _v1619 = _v1623;
            }
            acc = _v1619;
            let _v1624: any = acc;
            let _v1625: any = 1;
            if (rt.truth(_v1625)) {
              const _v1626: any = (args[0] ?? 0);
              acc = _v1626;
              const _v1627: any = await rt.send(_v1626, "relax", []);
              acc = _v1627;
              const _v1628: any = 17;
              acc = _v1628;
              const _v1629: any = rt.op("<", ...[_v1627, _v1628]);
              acc = _v1629;
              _v1625 = _v1629;
            }
            if (rt.truth(_v1625)) {
              const _v1630: any = rt.global(400);
              acc = _v1630;
              const _v1631: any = (args[0] ?? 0);
              acc = _v1631;
              const _v1632: any = await rt.send(_v1631, "livesAt", []);
              acc = _v1632;
              const _v1633: any = await rt.call(300, "localproc_2", [_v1630, _v1632], this);
              acc = _v1633;
              _v1625 = _v1633;
            }
            acc = _v1625;
            _v1624 = _v1625;
            if (rt.truth(_v1625)) {
              const _v1634: any = 37;
              acc = _v1634;
              const _v1635: any = rt.setGlobal(403, _v1634);
              acc = _v1635;
              _v1624 = _v1635;
              const _v1636: any = 6;
              acc = _v1636;
              const _v1637: any = rt.setGlobal(407, _v1636);
              acc = _v1637;
              _v1624 = _v1637;
              const _v1638: any = (args[0] ?? 0);
              acc = _v1638;
              const _v1639: any = await rt.send(_v1638, "livesAt", []);
              acc = _v1639;
              return _v1639;
              _v1624 = acc;
            }
            acc = _v1624;
            let _v1640: any = acc;
            const _v1641: any = rt.global(500);
            acc = _v1641;
            const _v1642: any = 47;
            acc = _v1642;
            const _v1643: any = rt.op("==", ...[_v1641, _v1642]);
            acc = _v1643;
            _v1640 = _v1643;
            if (rt.truth(_v1643)) {
              const _v1644: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1644;
              _v1640 = _v1644;
            }
            acc = _v1640;
            let _v1645: any = acc;
            let _v1646: any = 1;
            if (rt.truth(_v1646)) {
              const _v1647: any = rt.global(551);
              acc = _v1647;
              const _v1648: any = rt.op("not", ...[_v1647]);
              acc = _v1648;
              _v1646 = _v1648;
            }
            if (rt.truth(_v1646)) {
              const _v1649: any = rt.global(496);
              acc = _v1649;
              _v1646 = _v1649;
            }
            if (rt.truth(_v1646)) {
              const _v1650: any = (args[0] ?? 0);
              acc = _v1650;
              const _v1651: any = await rt.call(0, "proc0_11", [_v1650], this);
              acc = _v1651;
              const _v1652: any = rt.global(497);
              acc = _v1652;
              const _v1653: any = rt.op(">=", ...[_v1651, _v1652]);
              acc = _v1653;
              _v1646 = _v1653;
            }
            if (rt.truth(_v1646)) {
              const _v1654: any = rt.global(400);
              acc = _v1654;
              const _v1655: any = 12;
              acc = _v1655;
              const _v1656: any = await rt.call(300, "localproc_1", [_v1654, _v1655], this);
              acc = _v1656;
              const _v1657: any = await rt.call(300, "localproc_2", [_v1656], this);
              acc = _v1657;
              _v1646 = _v1657;
            }
            acc = _v1646;
            _v1645 = _v1646;
            if (rt.truth(_v1646)) {
              const _v1658: any = 38;
              acc = _v1658;
              const _v1659: any = rt.setGlobal(403, _v1658);
              acc = _v1659;
              _v1645 = _v1659;
              const _v1660: any = 10;
              acc = _v1660;
              const _v1661: any = rt.setGlobal(407, _v1660);
              acc = _v1661;
              _v1645 = _v1661;
              const _v1662: any = 12;
              acc = _v1662;
              return _v1662;
              _v1645 = acc;
            }
            acc = _v1645;
            let _v1663: any = acc;
            const _v1664: any = rt.global(500);
            acc = _v1664;
            const _v1665: any = 48;
            acc = _v1665;
            const _v1666: any = rt.op("==", ...[_v1664, _v1665]);
            acc = _v1666;
            _v1663 = _v1666;
            if (rt.truth(_v1666)) {
              const _v1667: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1667;
              _v1663 = _v1667;
            }
            acc = _v1663;
            let _v1668: any = acc;
            let _v1669: any = 1;
            if (rt.truth(_v1669)) {
              const _v1670: any = rt.global(551);
              acc = _v1670;
              const _v1671: any = rt.op("not", ...[_v1670]);
              acc = _v1671;
              _v1669 = _v1671;
            }
            if (rt.truth(_v1669)) {
              const _v1672: any = (args[0] ?? 0);
              acc = _v1672;
              const _v1673: any = await rt.call(0, "proc0_11", [_v1672], this);
              acc = _v1673;
              const _v1674: any = 800;
              acc = _v1674;
              const _v1675: any = rt.op(">", ...[_v1673, _v1674]);
              acc = _v1675;
              _v1669 = _v1675;
            }
            if (rt.truth(_v1669)) {
              const _v1676: any = rt.global(404);
              acc = _v1676;
              const _v1677: any = rt.op("not", ...[_v1676]);
              acc = _v1677;
              _v1669 = _v1677;
            }
            if (rt.truth(_v1669)) {
              const _v1678: any = 0;
              acc = _v1678;
              const _v1679: any = 2;
              acc = _v1679;
              const _v1680: any = await rt.call(300, "Random", [_v1678, _v1679], this);
              acc = _v1680;
              const _v1681: any = rt.op("not", ...[_v1680]);
              acc = _v1681;
              _v1669 = _v1681;
            }
            if (rt.truth(_v1669)) {
              let _v1682: any = 0;
              if (!rt.truth(_v1682)) {
                const _v1683: any = 33;
                acc = _v1683;
                const _v1684: any = (args[0] ?? 0);
                acc = _v1684;
                const _v1685: any = await rt.send(_v1684, "durables", []);
                acc = _v1685;
                const _v1686: any = await rt.send(_v1685, "objectAtIndexQuan", [_v1683]);
                acc = _v1686;
                const _v1687: any = rt.op("not", ...[_v1686]);
                acc = _v1687;
                _v1682 = _v1687;
              }
              if (!rt.truth(_v1682)) {
                const _v1688: any = 32;
                acc = _v1688;
                const _v1689: any = (args[0] ?? 0);
                acc = _v1689;
                const _v1690: any = await rt.send(_v1689, "durables", []);
                acc = _v1690;
                const _v1691: any = await rt.send(_v1690, "objectAtIndexQuan", [_v1688]);
                acc = _v1691;
                const _v1692: any = rt.op("not", ...[_v1691]);
                acc = _v1692;
                _v1682 = _v1692;
              }
              if (!rt.truth(_v1682)) {
                const _v1693: any = 31;
                acc = _v1693;
                const _v1694: any = (args[0] ?? 0);
                acc = _v1694;
                const _v1695: any = await rt.send(_v1694, "durables", []);
                acc = _v1695;
                const _v1696: any = await rt.send(_v1695, "objectAtIndexQuan", [_v1693]);
                acc = _v1696;
                const _v1697: any = rt.op("not", ...[_v1696]);
                acc = _v1697;
                _v1682 = _v1697;
              }
              acc = _v1682;
              _v1669 = _v1682;
            }
            acc = _v1669;
            _v1668 = _v1669;
            if (rt.truth(_v1669)) {
              const _v1698: any = 39;
              acc = _v1698;
              const _v1699: any = rt.setGlobal(403, _v1698);
              acc = _v1699;
              _v1668 = _v1699;
              const _v1700: any = 12;
              acc = _v1700;
              const _v1701: any = rt.setGlobal(407, _v1700);
              acc = _v1701;
              _v1668 = _v1701;
              const _v1702: any = 11;
              acc = _v1702;
              return _v1702;
              _v1668 = acc;
            }
            acc = _v1668;
            let _v1703: any = acc;
            const _v1704: any = rt.global(500);
            acc = _v1704;
            const _v1705: any = 49;
            acc = _v1705;
            const _v1706: any = rt.op("==", ...[_v1704, _v1705]);
            acc = _v1706;
            _v1703 = _v1706;
            if (rt.truth(_v1706)) {
              const _v1707: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1707;
              _v1703 = _v1707;
            }
            acc = _v1703;
            let _v1708: any = acc;
            let _v1709: any = 1;
            if (rt.truth(_v1709)) {
              const _v1710: any = (args[0] ?? 0);
              acc = _v1710;
              const _v1711: any = await rt.call(0, "proc0_11", [_v1710], this);
              acc = _v1711;
              const _v1712: any = 800;
              acc = _v1712;
              const _v1713: any = rt.op(">", ...[_v1711, _v1712]);
              acc = _v1713;
              _v1709 = _v1713;
            }
            if (rt.truth(_v1709)) {
              const _v1714: any = 0;
              acc = _v1714;
              const _v1715: any = 1;
              acc = _v1715;
              const _v1716: any = await rt.call(300, "Random", [_v1714, _v1715], this);
              acc = _v1716;
              _v1709 = _v1716;
            }
            if (rt.truth(_v1709)) {
              const _v1717: any = await rt.call(300, "localproc_6", [], this);
              acc = _v1717;
              _v1709 = _v1717;
            }
            if (rt.truth(_v1709)) {
              const _v1718: any = rt.global(550);
              acc = _v1718;
              const _v1719: any = rt.op("not", ...[_v1718]);
              acc = _v1719;
              _v1709 = _v1719;
            }
            acc = _v1709;
            _v1708 = _v1709;
            if (rt.truth(_v1709)) {
              const _v1720: any = 40;
              acc = _v1720;
              const _v1721: any = rt.setGlobal(403, _v1720);
              acc = _v1721;
              _v1708 = _v1721;
              const _v1722: any = 15;
              acc = _v1722;
              const _v1723: any = rt.setGlobal(407, _v1722);
              acc = _v1723;
              _v1708 = _v1723;
              const _v1724: any = 8;
              acc = _v1724;
              return _v1724;
              _v1708 = acc;
              const _v1725: any = rt.global(550);
              acc = _v1725;
              const _v1726: any = rt.op("not", ...[_v1725]);
              acc = _v1726;
              _v1708 = _v1726;
            }
            acc = _v1708;
            let _v1727: any = acc;
            const _v1728: any = rt.global(500);
            acc = _v1728;
            const _v1729: any = 50;
            acc = _v1729;
            const _v1730: any = rt.op("==", ...[_v1728, _v1729]);
            acc = _v1730;
            _v1727 = _v1730;
            if (rt.truth(_v1730)) {
              const _v1731: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1731;
              _v1727 = _v1731;
            }
            acc = _v1727;
            let _v1732: any = acc;
            let _v1733: any = 1;
            if (rt.truth(_v1733)) {
              const _v1734: any = (args[0] ?? 0);
              acc = _v1734;
              const _v1735: any = await rt.call(0, "proc0_11", [_v1734], this);
              acc = _v1735;
              const _v1736: any = 1500;
              acc = _v1736;
              const _v1737: any = rt.op(">", ...[_v1735, _v1736]);
              acc = _v1737;
              _v1733 = _v1737;
            }
            if (rt.truth(_v1733)) {
              const _v1738: any = rt.global(498);
              acc = _v1738;
              const _v1739: any = 3;
              acc = _v1739;
              const _v1740: any = rt.op("==", ...[_v1738, _v1739]);
              acc = _v1740;
              _v1733 = _v1740;
            }
            acc = _v1733;
            _v1732 = _v1733;
            if (rt.truth(_v1733)) {
              const _v1741: any = 41;
              acc = _v1741;
              const _v1742: any = rt.setGlobal(403, _v1741);
              acc = _v1742;
              _v1732 = _v1742;
              const _v1743: any = 18;
              acc = _v1743;
              const _v1744: any = rt.setGlobal(407, _v1743);
              acc = _v1744;
              _v1732 = _v1744;
              const _v1745: any = 4;
              acc = _v1745;
              return _v1745;
              _v1732 = acc;
            }
            acc = _v1732;
            let _v1746: any = acc;
            const _v1747: any = rt.global(500);
            acc = _v1747;
            const _v1748: any = 51;
            acc = _v1748;
            const _v1749: any = rt.op("==", ...[_v1747, _v1748]);
            acc = _v1749;
            _v1746 = _v1749;
            if (rt.truth(_v1749)) {
              const _v1750: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1750;
              _v1746 = _v1750;
            }
            acc = _v1746;
            let _v1751: any = acc;
            let _v1752: any = 1;
            if (rt.truth(_v1752)) {
              let _v1753: any = 0;
              if (!rt.truth(_v1753)) {
                const _v1754: any = (args[0] ?? 0);
                acc = _v1754;
                const _v1755: any = await rt.call(0, "proc0_11", [_v1754], this);
                acc = _v1755;
                const _v1756: any = 750;
                acc = _v1756;
                const _v1757: any = rt.op(">", ...[_v1755, _v1756]);
                acc = _v1757;
                _v1753 = _v1757;
              }
              if (!rt.truth(_v1753)) {
                const _v1758: any = rt.global(499);
                acc = _v1758;
                const _v1759: any = 750;
                acc = _v1759;
                const _v1760: any = rt.op(">", ...[_v1758, _v1759]);
                acc = _v1760;
                _v1753 = _v1760;
              }
              acc = _v1753;
              _v1752 = _v1753;
            }
            if (rt.truth(_v1752)) {
              const _v1761: any = rt.global(315);
              acc = _v1761;
              const _v1762: any = 0;
              acc = _v1762;
              const _v1763: any = rt.op(">", ...[_v1761, _v1762]);
              acc = _v1763;
              _v1752 = _v1763;
            }
            if (rt.truth(_v1752)) {
              const _v1764: any = rt.global(308);
              acc = _v1764;
              const _v1765: any = 80;
              acc = _v1765;
              const _v1766: any = rt.global(315);
              acc = _v1766;
              const _v1767: any = 15;
              acc = _v1767;
              const _v1768: any = rt.op("*", ...[_v1766, _v1767]);
              acc = _v1768;
              const _v1769: any = rt.op("+", ...[_v1765, _v1768]);
              acc = _v1769;
              const _v1770: any = rt.op("<", ...[_v1764, _v1769]);
              acc = _v1770;
              _v1752 = _v1770;
            }
            if (rt.truth(_v1752)) {
              const _v1771: any = rt.global(485);
              acc = _v1771;
              const _v1772: any = rt.op("not", ...[_v1771]);
              acc = _v1772;
              _v1752 = _v1772;
            }
            acc = _v1752;
            _v1751 = _v1752;
            if (rt.truth(_v1752)) {
              const _v1773: any = 42;
              acc = _v1773;
              const _v1774: any = rt.setGlobal(403, _v1773);
              acc = _v1774;
              _v1751 = _v1774;
              let _v1775: any = acc;
              const _v1776: any = (args[0] ?? 0);
              acc = _v1776;
              const _v1777: any = await rt.call(0, "proc0_11", [_v1776], this);
              acc = _v1777;
              const _v1778: any = 750;
              acc = _v1778;
              const _v1779: any = rt.op("<", ...[_v1777, _v1778]);
              acc = _v1779;
              _v1775 = _v1779;
              if (rt.truth(_v1779)) {
                const _v1780: any = 22;
                acc = _v1780;
                const _v1781: any = rt.setGlobal(407, _v1780);
                acc = _v1781;
                _v1775 = _v1781;
                const _v1782: any = 10;
                acc = _v1782;
                const _v1783: any = rt.setGlobal(408, _v1782);
                acc = _v1783;
                _v1775 = _v1783;
              }
              acc = _v1775;
              _v1751 = _v1775;
              const _v1784: any = 19;
              acc = _v1784;
              const _v1785: any = rt.setGlobal(409, _v1784);
              acc = _v1785;
              _v1751 = _v1785;
              const _v1786: any = 4;
              acc = _v1786;
              return _v1786;
              _v1751 = acc;
            }
            acc = _v1751;
            let _v1787: any = acc;
            const _v1788: any = rt.global(500);
            acc = _v1788;
            const _v1789: any = 52;
            acc = _v1789;
            const _v1790: any = rt.op("==", ...[_v1788, _v1789]);
            acc = _v1790;
            _v1787 = _v1790;
            if (rt.truth(_v1790)) {
              const _v1791: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1791;
              _v1787 = _v1791;
            }
            acc = _v1787;
            let _v1792: any = acc;
            let _v1793: any = 1;
            if (rt.truth(_v1793)) {
              const _v1794: any = (args[0] ?? 0);
              acc = _v1794;
              const _v1795: any = await rt.send(_v1794, "invAss", []);
              acc = _v1795;
              const _v1796: any = 0;
              acc = _v1796;
              const _v1797: any = (args[0] ?? 0);
              acc = _v1797;
              const _v1798: any = await rt.send(_v1797, "investments", []);
              acc = _v1798;
              const _v1799: any = await rt.send(_v1798, "at", [_v1796]);
              acc = _v1799;
              const _v1800: any = await rt.send(_v1799, "shares", []);
              acc = _v1800;
              const _v1801: any = 0;
              acc = _v1801;
              const _v1802: any = (args[0] ?? 0);
              acc = _v1802;
              const _v1803: any = await rt.send(_v1802, "investments", []);
              acc = _v1803;
              const _v1804: any = await rt.send(_v1803, "at", [_v1801]);
              acc = _v1804;
              const _v1805: any = await rt.send(_v1804, "basePrice", []);
              acc = _v1805;
              const _v1806: any = rt.op("*", ...[_v1800, _v1805]);
              acc = _v1806;
              const _v1807: any = rt.op("-", ...[_v1795, _v1806]);
              acc = _v1807;
              _v1793 = _v1807;
            }
            if (rt.truth(_v1793)) {
              const _v1808: any = rt.global(315);
              acc = _v1808;
              const _v1809: any = -1;
              acc = _v1809;
              const _v1810: any = rt.op("<", ...[_v1808, _v1809]);
              acc = _v1810;
              _v1793 = _v1810;
            }
            if (rt.truth(_v1793)) {
              const _v1811: any = rt.global(503);
              acc = _v1811;
              const _v1812: any = rt.op("not", ...[_v1811]);
              acc = _v1812;
              _v1793 = _v1812;
            }
            acc = _v1793;
            _v1792 = _v1793;
            if (rt.truth(_v1793)) {
              const _v1813: any = 43;
              acc = _v1813;
              const _v1814: any = rt.setGlobal(403, _v1813);
              acc = _v1814;
              _v1792 = _v1814;
              const _v1815: any = -1;
              acc = _v1815;
              const _v1816: any = rt.setGlobal(408, _v1815);
              acc = _v1816;
              _v1792 = _v1816;
              const _v1817: any = 20;
              acc = _v1817;
              const _v1818: any = rt.setGlobal(407, _v1817);
              acc = _v1818;
              _v1792 = _v1818;
              const _v1819: any = 4;
              acc = _v1819;
              return _v1819;
              _v1792 = acc;
            }
            acc = _v1792;
            let _v1820: any = acc;
            const _v1821: any = rt.global(500);
            acc = _v1821;
            const _v1822: any = 53;
            acc = _v1822;
            const _v1823: any = rt.op("==", ...[_v1821, _v1822]);
            acc = _v1823;
            _v1820 = _v1823;
            if (rt.truth(_v1823)) {
              const _v1824: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1824;
              _v1820 = _v1824;
            }
            acc = _v1820;
            let _v1825: any = acc;
            let _v1826: any = 1;
            if (rt.truth(_v1826)) {
              const _v1827: any = (args[0] ?? 0);
              acc = _v1827;
              const _v1828: any = await rt.send(_v1827, "numDegrees", []);
              acc = _v1828;
              const _v1829: any = 11;
              acc = _v1829;
              const _v1830: any = rt.op("!=", ...[_v1828, _v1829]);
              acc = _v1830;
              _v1826 = _v1830;
            }
            if (rt.truth(_v1826)) {
              const _v1831: any = rt.global(400);
              acc = _v1831;
              const _v1832: any = 7;
              acc = _v1832;
              const _v1833: any = await rt.call(300, "localproc_1", [_v1831, _v1832], this);
              acc = _v1833;
              const _v1834: any = await rt.call(300, "localproc_2", [_v1833], this);
              acc = _v1834;
              _v1826 = _v1834;
            }
            if (rt.truth(_v1826)) {
              let _v1835: any = 0;
              if (!rt.truth(_v1835)) {
                const _v1836: any = (args[0] ?? 0);
                acc = _v1836;
                const _v1837: any = await rt.send(_v1836, "enrollments", []);
                acc = _v1837;
                const _v1838: any = (args[0] ?? 0);
                acc = _v1838;
                const _v1839: any = await rt.send(_v1838, "numDegrees", []);
                acc = _v1839;
                const _v1840: any = rt.op(">", ...[_v1837, _v1839]);
                acc = _v1840;
                _v1835 = _v1840;
              }
              if (!rt.truth(_v1835)) {
                let _v1841: any = 1;
                if (rt.truth(_v1841)) {
                  const _v1842: any = (args[0] ?? 0);
                  acc = _v1842;
                  const _v1843: any = await rt.call(0, "proc0_11", [_v1842], this);
                  acc = _v1843;
                  const _v1844: any = 400;
                  acc = _v1844;
                  const _v1845: any = rt.op(">", ...[_v1843, _v1844]);
                  acc = _v1845;
                  _v1841 = _v1845;
                }
                if (rt.truth(_v1841)) {
                  let _v1846: any = 0;
                  if (!rt.truth(_v1846)) {
                    let _v1847: any = 1;
                    if (rt.truth(_v1847)) {
                      const _v1848: any = rt.global(551);
                      acc = _v1848;
                      const _v1849: any = rt.op("not", ...[_v1848]);
                      acc = _v1849;
                      _v1847 = _v1849;
                    }
                    if (rt.truth(_v1847)) {
                      const _v1850: any = 0;
                      acc = _v1850;
                      const _v1851: any = 3;
                      acc = _v1851;
                      const _v1852: any = await rt.call(300, "Random", [_v1850, _v1851], this);
                      acc = _v1852;
                      _v1847 = _v1852;
                    }
                    acc = _v1847;
                    _v1846 = _v1847;
                  }
                  if (!rt.truth(_v1846)) {
                    const _v1853: any = (args[0] ?? 0);
                    acc = _v1853;
                    const _v1854: any = await rt.send(_v1853, "notEnoughEd", []);
                    acc = _v1854;
                    _v1846 = _v1854;
                  }
                  acc = _v1846;
                  _v1841 = _v1846;
                }
                acc = _v1841;
                _v1835 = _v1841;
              }
              acc = _v1835;
              _v1826 = _v1835;
            }
            acc = _v1826;
            _v1825 = _v1826;
            if (rt.truth(_v1826)) {
              const _v1855: any = 44;
              acc = _v1855;
              const _v1856: any = rt.setGlobal(403, _v1855);
              acc = _v1856;
              _v1825 = _v1856;
              const _v1857: any = 16;
              acc = _v1857;
              const _v1858: any = rt.setGlobal(409, _v1857);
              acc = _v1858;
              _v1825 = _v1858;
              const _v1859: any = 7;
              acc = _v1859;
              return _v1859;
              _v1825 = acc;
            }
            acc = _v1825;
            let _v1860: any = acc;
            const _v1861: any = rt.global(500);
            acc = _v1861;
            const _v1862: any = 54;
            acc = _v1862;
            const _v1863: any = rt.op("==", ...[_v1861, _v1862]);
            acc = _v1863;
            _v1860 = _v1863;
            if (rt.truth(_v1863)) {
              const _v1864: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1864;
              _v1860 = _v1864;
            }
            acc = _v1860;
            let _v1865: any = acc;
            let _v1866: any = 1;
            if (rt.truth(_v1866)) {
              const _v1867: any = (args[0] ?? 0);
              acc = _v1867;
              const _v1868: any = await rt.send(_v1867, "wage", []);
              acc = _v1868;
              _v1866 = _v1868;
            }
            if (rt.truth(_v1866)) {
              const _v1869: any = (args[0] ?? 0);
              acc = _v1869;
              const _v1870: any = await rt.send(_v1869, "dressedForWork", []);
              acc = _v1870;
              _v1866 = _v1870;
            }
            if (rt.truth(_v1866)) {
              const _v1871: any = rt.global(400);
              acc = _v1871;
              const _v1872: any = (args[0] ?? 0);
              acc = _v1872;
              const _v1873: any = await rt.send(_v1872, "worksAt", []);
              acc = _v1873;
              const _v1874: any = await rt.call(300, "localproc_1", [_v1871, _v1873], this);
              acc = _v1874;
              const _v1875: any = await rt.call(300, "localproc_2", [_v1874], this);
              acc = _v1875;
              _v1866 = _v1875;
            }
            acc = _v1866;
            _v1865 = _v1866;
            if (rt.truth(_v1866)) {
              const _v1876: any = 46;
              acc = _v1876;
              const _v1877: any = rt.setGlobal(403, _v1876);
              acc = _v1877;
              _v1865 = _v1877;
              const _v1878: any = 3;
              acc = _v1878;
              const _v1879: any = rt.setGlobal(408, _v1878);
              acc = _v1879;
              _v1865 = _v1879;
              const _v1880: any = 1;
              acc = _v1880;
              const _v1881: any = rt.setGlobal(407, _v1880);
              acc = _v1881;
              _v1865 = _v1881;
              const _v1882: any = (args[0] ?? 0);
              acc = _v1882;
              const _v1883: any = await rt.send(_v1882, "worksAt", []);
              acc = _v1883;
              return _v1883;
              _v1865 = acc;
            }
            acc = _v1865;
            let _v1884: any = acc;
            const _v1885: any = rt.global(500);
            acc = _v1885;
            const _v1886: any = 55;
            acc = _v1886;
            const _v1887: any = rt.op("==", ...[_v1885, _v1886]);
            acc = _v1887;
            _v1884 = _v1887;
            if (rt.truth(_v1887)) {
              const _v1888: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1888;
              _v1884 = _v1888;
            }
            acc = _v1884;
            let _v1889: any = acc;
            let _v1890: any = 1;
            if (rt.truth(_v1890)) {
              const _v1891: any = rt.global(400);
              acc = _v1891;
              const _v1892: any = 7;
              acc = _v1892;
              const _v1893: any = rt.op("==", ...[_v1891, _v1892]);
              acc = _v1893;
              _v1890 = _v1893;
            }
            if (rt.truth(_v1890)) {
              const _v1894: any = rt.global(323);
              acc = _v1894;
              const _v1895: any = 6;
              acc = _v1895;
              const _v1896: any = rt.op("+", ...[_v1894, _v1895]);
              acc = _v1896;
              const _v1897: any = 60;
              acc = _v1897;
              const _v1898: any = rt.op(">=", ...[_v1896, _v1897]);
              acc = _v1898;
              _v1890 = _v1898;
            }
            if (rt.truth(_v1890)) {
              const _v1899: any = (args[0] ?? 0);
              acc = _v1899;
              const _v1900: any = await rt.send(_v1899, "numDegrees", []);
              acc = _v1900;
              const _v1901: any = 11;
              acc = _v1901;
              const _v1902: any = rt.op("!=", ...[_v1900, _v1901]);
              acc = _v1902;
              _v1890 = _v1902;
            }
            if (rt.truth(_v1890)) {
              let _v1903: any = 0;
              if (!rt.truth(_v1903)) {
                const _v1904: any = (args[0] ?? 0);
                acc = _v1904;
                const _v1905: any = await rt.send(_v1904, "enrollments", []);
                acc = _v1905;
                const _v1906: any = (args[0] ?? 0);
                acc = _v1906;
                const _v1907: any = await rt.send(_v1906, "numDegrees", []);
                acc = _v1907;
                const _v1908: any = rt.op(">", ...[_v1905, _v1907]);
                acc = _v1908;
                _v1903 = _v1908;
              }
              if (!rt.truth(_v1903)) {
                const _v1909: any = (args[0] ?? 0);
                acc = _v1909;
                const _v1910: any = await rt.call(0, "proc0_11", [_v1909], this);
                acc = _v1910;
                const _v1911: any = 400;
                acc = _v1911;
                const _v1912: any = rt.op(">", ...[_v1910, _v1911]);
                acc = _v1912;
                _v1903 = _v1912;
              }
              acc = _v1903;
              _v1890 = _v1903;
            }
            if (rt.truth(_v1890)) {
              const _v1913: any = rt.global(551);
              acc = _v1913;
              const _v1914: any = rt.op("not", ...[_v1913]);
              acc = _v1914;
              _v1890 = _v1914;
            }
            acc = _v1890;
            _v1889 = _v1890;
            if (rt.truth(_v1890)) {
              const _v1915: any = 47;
              acc = _v1915;
              const _v1916: any = rt.setGlobal(403, _v1915);
              acc = _v1916;
              _v1889 = _v1916;
              const _v1917: any = 16;
              acc = _v1917;
              const _v1918: any = rt.setGlobal(409, _v1917);
              acc = _v1918;
              _v1889 = _v1918;
              const _v1919: any = 7;
              acc = _v1919;
              return _v1919;
              _v1889 = acc;
            }
            acc = _v1889;
            let _v1920: any = acc;
            const _v1921: any = rt.global(500);
            acc = _v1921;
            const _v1922: any = 56;
            acc = _v1922;
            const _v1923: any = rt.op("==", ...[_v1921, _v1922]);
            acc = _v1923;
            _v1920 = _v1923;
            if (rt.truth(_v1923)) {
              const _v1924: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1924;
              _v1920 = _v1924;
            }
            acc = _v1920;
            let _v1925: any = acc;
            let _v1926: any = 1;
            if (rt.truth(_v1926)) {
              const _v1927: any = (args[0] ?? 0);
              acc = _v1927;
              const _v1928: any = await rt.send(_v1927, "worksAt", []);
              acc = _v1928;
              _v1926 = _v1928;
            }
            if (rt.truth(_v1926)) {
              const _v1929: any = rt.global(400);
              acc = _v1929;
              const _v1930: any = (args[0] ?? 0);
              acc = _v1930;
              const _v1931: any = await rt.send(_v1930, "worksAt", []);
              acc = _v1931;
              const _v1932: any = rt.op("==", ...[_v1929, _v1931]);
              acc = _v1932;
              _v1926 = _v1932;
            }
            if (rt.truth(_v1926)) {
              const _v1933: any = rt.global(323);
              acc = _v1933;
              const _v1934: any = 6;
              acc = _v1934;
              const _v1935: any = rt.op("+", ...[_v1933, _v1934]);
              acc = _v1935;
              const _v1936: any = 60;
              acc = _v1936;
              const _v1937: any = rt.op(">=", ...[_v1935, _v1936]);
              acc = _v1937;
              _v1926 = _v1937;
            }
            acc = _v1926;
            _v1925 = _v1926;
            if (rt.truth(_v1926)) {
              const _v1938: any = 48;
              acc = _v1938;
              const _v1939: any = rt.setGlobal(403, _v1938);
              acc = _v1939;
              _v1925 = _v1939;
              const _v1940: any = 1;
              acc = _v1940;
              const _v1941: any = rt.setGlobal(407, _v1940);
              acc = _v1941;
              _v1925 = _v1941;
              const _v1942: any = (args[0] ?? 0);
              acc = _v1942;
              const _v1943: any = await rt.send(_v1942, "worksAt", []);
              acc = _v1943;
              return _v1943;
              _v1925 = acc;
            }
            acc = _v1925;
            let _v1944: any = acc;
            const _v1945: any = rt.global(500);
            acc = _v1945;
            const _v1946: any = 57;
            acc = _v1946;
            const _v1947: any = rt.op("==", ...[_v1945, _v1946]);
            acc = _v1947;
            _v1944 = _v1947;
            if (rt.truth(_v1947)) {
              const _v1948: any = await rt.call(300, "SetDebug", [], this);
              acc = _v1948;
              _v1944 = _v1948;
            }
            acc = _v1944;
            const _v1949: any = 49;
            acc = _v1949;
            const _v1950: any = rt.setGlobal(403, _v1949);
            acc = _v1950;
            const _v1951: any = 6;
            acc = _v1951;
            const _v1952: any = rt.setGlobal(407, _v1951);
            acc = _v1952;
            const _v1953: any = (args[0] ?? 0);
            acc = _v1953;
            const _v1954: any = await rt.send(_v1953, "livesAt", []);
            acc = _v1954;
            return _v1954;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI WhereShouldIGo.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        let _v1: any = 0;
        if (!rt.truth(_v1)) {
          const _v2: any = (args[0] ?? 0);
          acc = _v2;
          const _v3: any = await rt.send(_v2, "lqAssHi", []);
          acc = _v3;
          _v1 = _v3;
        }
        if (!rt.truth(_v1)) {
          const _v4: any = (args[0] ?? 0);
          acc = _v4;
          const _v5: any = await rt.send(_v4, "lqAss", []);
          acc = _v5;
          const _v6: any = (args[1] ?? 0);
          acc = _v6;
          const _v7: any = rt.op(">=", ...[_v5, _v6]);
          acc = _v7;
          _v1 = _v7;
        }
        if (!rt.truth(_v1)) {
          const _v8: any = (args[0] ?? 0);
          acc = _v8;
          const _v9: any = await rt.send(_v8, "lqAss", []);
          acc = _v9;
          const _v10: any = (args[0] ?? 0);
          acc = _v10;
          const _v11: any = await rt.send(_v10, "rentOwed", []);
          acc = _v11;
          const _v12: any = (args[0] ?? 0);
          acc = _v12;
          const _v13: any = await rt.send(_v12, "loanBal", []);
          acc = _v13;
          const _v14: any = rt.op("+", ...[_v9, _v11, _v13]);
          acc = _v14;
          const _v15: any = (args[1] ?? 0);
          acc = _v15;
          const _v16: any = rt.op(">=", ...[_v14, _v15]);
          acc = _v16;
          _v1 = _v16;
        }
        acc = _v1;
        return _v1;
        return acc;
      },
      // SCI WhereShouldIGo.sc: localproc_1
      "localproc_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0];
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = (temps[0] = _v3);
        acc = _v4;
        const _v5: any = (temps[4] = _v4);
        acc = _v5;
        _loop1: for (;;) {
          const _v6: any = (temps[4] ?? 0);
          acc = _v6;
          const _v7: any = argc;
          acc = _v7;
          const _v8: any = 1;
          acc = _v8;
          const _v9: any = rt.op("-", ...[_v7, _v8]);
          acc = _v9;
          const _v10: any = rt.op("<", ...[_v6, _v9]);
          acc = _v10;
          if (!rt.truth(_v10)) break _loop1;
          _continue2: {
            const _v11: any = (temps[4] ?? 0);
            acc = _v11;
            const _v12: any = (args[(0 + (Number(_v11) & 65535))] ?? 0);
            acc = _v12;
            const _v13: any = rt.global(301);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "at", [_v12]);
            acc = _v14;
            const _v15: any = await rt.send(_v14, "index", []);
            acc = _v15;
            const _v16: any = (temps[2] = _v15);
            acc = _v16;
            const _v17: any = (temps[4] ?? 0);
            acc = _v17;
            const _v18: any = (args[(1 + (Number(_v17) & 65535))] ?? 0);
            acc = _v18;
            const _v19: any = rt.global(301);
            acc = _v19;
            const _v20: any = await rt.send(_v19, "at", [_v18]);
            acc = _v20;
            const _v21: any = await rt.send(_v20, "index", []);
            acc = _v21;
            const _v22: any = (temps[3] = _v21);
            acc = _v22;
            let _v23: any = acc;
            const _v24: any = (temps[2] ?? 0);
            acc = _v24;
            const _v25: any = (temps[3] ?? 0);
            acc = _v25;
            const _v26: any = rt.op(">", ...[_v24, _v25]);
            acc = _v26;
            _v23 = _v26;
            if (rt.truth(_v26)) {
              const _v27: any = (temps[2] ?? 0);
              acc = _v27;
              const _v28: any = (temps[3] ?? 0);
              acc = _v28;
              const _v29: any = rt.op("-", ...[_v27, _v28]);
              acc = _v29;
              const _v30: any = (temps[1] = _v29);
              acc = _v30;
              _v23 = _v30;
            } else {
              const _v31: any = (temps[3] ?? 0);
              acc = _v31;
              const _v32: any = (temps[2] ?? 0);
              acc = _v32;
              const _v33: any = rt.op("-", ...[_v31, _v32]);
              acc = _v33;
              const _v34: any = (temps[1] = _v33);
              acc = _v34;
              _v23 = _v34;
            }
            acc = _v23;
            let _v35: any = acc;
            const _v36: any = (temps[1] ?? 0);
            acc = _v36;
            const _v37: any = 85;
            acc = _v37;
            const _v38: any = rt.op(">", ...[_v36, _v37]);
            acc = _v38;
            _v35 = _v38;
            if (rt.truth(_v38)) {
              const _v39: any = 170;
              acc = _v39;
              const _v40: any = (temps[1] ?? 0);
              acc = _v40;
              const _v41: any = rt.op("-", ...[_v39, _v40]);
              acc = _v41;
              const _v42: any = (temps[1] = _v41);
              acc = _v42;
              _v35 = _v42;
            }
            acc = _v35;
            const _v43: any = (temps[1] ?? 0);
            acc = _v43;
            const _v44: any = (temps[0] = rt.op("+", (temps[0] ?? 0), _v43));
            acc = _v44;
          }
          const _v45: any = (temps[4] = rt.op("+", (temps[4] ?? 0), 1));
          acc = _v45;
        }
        const _v46: any = argc;
        acc = _v46;
        const _v47: any = 1;
        acc = _v47;
        const _v48: any = rt.op("-", ...[_v46, _v47]);
        acc = _v48;
        const _v49: any = rt.global(475);
        acc = _v49;
        const _v50: any = 2;
        acc = _v50;
        const _v51: any = rt.op("*", ...[_v48, _v49, _v50]);
        acc = _v51;
        const _v52: any = (temps[0] = rt.op("+", (temps[0] ?? 0), _v51));
        acc = _v52;
        return acc;
      },
      // SCI WhereShouldIGo.sc: localproc_2
      "localproc_2": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        let _v1: any = acc;
        const _v2: any = rt.global(323);
        acc = _v2;
        const _v3: any = rt.global(324);
        acc = _v3;
        const _v4: any = (args[0] ?? 0);
        acc = _v4;
        const _v5: any = rt.op("+", ...[_v3, _v4]);
        acc = _v5;
        const _v6: any = rt.global(475);
        acc = _v6;
        const _v7: any = rt.op("/", ...[_v5, _v6]);
        acc = _v7;
        const _v8: any = rt.op("+", ...[_v2, _v7]);
        acc = _v8;
        const _v9: any = 60;
        acc = _v9;
        const _v10: any = rt.op(">=", ...[_v8, _v9]);
        acc = _v10;
        _v1 = _v10;
        if (rt.truth(_v10)) {
          const _v11: any = 0;
          acc = _v11;
          return _v11;
          _v1 = acc;
        } else {
          const _v12: any = 1;
          acc = _v12;
          return _v12;
          _v1 = acc;
        }
        acc = _v1;
        return acc;
      },
      // SCI WhereShouldIGo.sc: localproc_3
      "localproc_3": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0];
        const _v1: any = 0;
        acc = _v1;
        const _v2: any = (args[(0 + (Number(_v1) & 65535))] ?? 0);
        acc = _v2;
        const _v3: any = 1;
        acc = _v3;
        const _v4: any = (args[(0 + (Number(_v3) & 65535))] ?? 0);
        acc = _v4;
        const _v5: any = 2;
        acc = _v5;
        const _v6: any = (args[(0 + (Number(_v5) & 65535))] ?? 0);
        acc = _v6;
        const _v7: any = await rt.call(300, "localproc_1", [_v2, _v4, _v6], this);
        acc = _v7;
        const _v8: any = (temps[0] = _v7);
        acc = _v8;
        const _v9: any = 0;
        acc = _v9;
        const _v10: any = (args[(0 + (Number(_v9) & 65535))] ?? 0);
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = (args[(0 + (Number(_v11) & 65535))] ?? 0);
        acc = _v12;
        const _v13: any = 1;
        acc = _v13;
        const _v14: any = (args[(0 + (Number(_v13) & 65535))] ?? 0);
        acc = _v14;
        const _v15: any = await rt.call(300, "localproc_1", [_v10, _v12, _v14], this);
        acc = _v15;
        const _v16: any = (temps[1] = _v15);
        acc = _v16;
        let _v17: any = acc;
        const _v18: any = (temps[0] ?? 0);
        acc = _v18;
        const _v19: any = (temps[1] ?? 0);
        acc = _v19;
        const _v20: any = rt.op("<", ...[_v18, _v19]);
        acc = _v20;
        _v17 = _v20;
        if (rt.truth(_v20)) {
          const _v21: any = (temps[0] ?? 0);
          acc = _v21;
          _v17 = _v21;
        } else {
          const _v22: any = (temps[1] ?? 0);
          acc = _v22;
          _v17 = _v22;
        }
        acc = _v17;
        return _v17;
        return acc;
      },
      // SCI WhereShouldIGo.sc: localproc_4
      "localproc_4": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0];
        const _v1: any = 1;
        acc = _v1;
        const _v2: any = (temps[2] = _v1);
        acc = _v2;
        const _v3: any = 1000;
        acc = _v3;
        const _v4: any = (temps[0] = _v3);
        acc = _v4;
        _loop5: for (;;) {
          const _v7: any = (temps[2] ?? 0);
          acc = _v7;
          const _v8: any = argc;
          acc = _v8;
          const _v9: any = rt.op("<", ...[_v7, _v8]);
          acc = _v9;
          if (!rt.truth(_v9)) break _loop5;
          _continue6: {
            const _v12: any = 1;
            acc = _v12;
            const _v13: any = (temps[3] = _v12);
            acc = _v13;
            _loop10: for (;;) {
              const _v14: any = (temps[3] ?? 0);
              acc = _v14;
              const _v15: any = argc;
              acc = _v15;
              const _v16: any = rt.op("<", ...[_v14, _v15]);
              acc = _v16;
              if (!rt.truth(_v16)) break _loop10;
              _continue11: {
                const _v19: any = 1;
                acc = _v19;
                const _v20: any = (temps[4] = _v19);
                acc = _v20;
                _loop17: for (;;) {
                  const _v21: any = (temps[4] ?? 0);
                  acc = _v21;
                  const _v22: any = argc;
                  acc = _v22;
                  const _v23: any = rt.op("<", ...[_v21, _v22]);
                  acc = _v23;
                  if (!rt.truth(_v23)) break _loop17;
                  _continue18: {
                    let _v24: any = acc;
                    let _v25: any = 1;
                    if (rt.truth(_v25)) {
                      const _v26: any = (temps[2] ?? 0);
                      acc = _v26;
                      let _v27: any = _v26;
                      let _v28: any = 1;
                      if (rt.truth(_v28)) {
                        const _v29: any = (temps[3] ?? 0);
                        acc = _v29;
                        _v28 = rt.op("!=", _v27, _v29);
                        _v27 = _v29;
                      }
                      if (rt.truth(_v28)) {
                        const _v30: any = (temps[4] ?? 0);
                        acc = _v30;
                        _v28 = rt.op("!=", _v27, _v30);
                        _v27 = _v30;
                      }
                      acc = _v28;
                      _v25 = _v28;
                    }
                    if (rt.truth(_v25)) {
                      const _v31: any = (temps[3] ?? 0);
                      acc = _v31;
                      const _v32: any = (temps[4] ?? 0);
                      acc = _v32;
                      const _v33: any = rt.op("!=", ...[_v31, _v32]);
                      acc = _v33;
                      _v25 = _v33;
                    }
                    if (rt.truth(_v25)) {
                      const _v34: any = 0;
                      acc = _v34;
                      const _v35: any = (args[(0 + (Number(_v34) & 65535))] ?? 0);
                      acc = _v35;
                      const _v36: any = (temps[2] ?? 0);
                      acc = _v36;
                      const _v37: any = (args[(0 + (Number(_v36) & 65535))] ?? 0);
                      acc = _v37;
                      const _v38: any = (temps[3] ?? 0);
                      acc = _v38;
                      const _v39: any = (args[(0 + (Number(_v38) & 65535))] ?? 0);
                      acc = _v39;
                      const _v40: any = (temps[4] ?? 0);
                      acc = _v40;
                      const _v41: any = (args[(0 + (Number(_v40) & 65535))] ?? 0);
                      acc = _v41;
                      const _v42: any = await rt.call(300, "localproc_1", [_v35, _v37, _v39, _v41], this);
                      acc = _v42;
                      const _v43: any = (temps[1] = _v42);
                      acc = _v43;
                      const _v44: any = (temps[0] ?? 0);
                      acc = _v44;
                      const _v45: any = rt.op("<", ...[_v43, _v44]);
                      acc = _v45;
                      _v25 = _v45;
                    }
                    acc = _v25;
                    _v24 = _v25;
                    if (rt.truth(_v25)) {
                      const _v46: any = (temps[1] ?? 0);
                      acc = _v46;
                      const _v47: any = (temps[0] = _v46);
                      acc = _v47;
                      _v24 = _v47;
                    }
                    acc = _v24;
                  }
                  const _v48: any = (temps[4] = rt.op("+", (temps[4] ?? 0), 1));
                  acc = _v48;
                }
              }
              const _v49: any = (temps[3] = rt.op("+", (temps[3] ?? 0), 1));
              acc = _v49;
            }
            const _v50: any = (temps[2] = rt.op("+", (temps[2] ?? 0), 1));
            acc = _v50;
          }
        }
        const _v51: any = (temps[0] ?? 0);
        acc = _v51;
        return _v51;
        return acc;
      },
      // SCI WhereShouldIGo.sc: localproc_5
      "localproc_5": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0];
        const _v1: any = 1000;
        acc = _v1;
        const _v2: any = (temps[1] = _v1);
        acc = _v2;
        const _v5: any = 1;
        acc = _v5;
        const _v6: any = (temps[0] = _v5);
        acc = _v6;
        _loop3: for (;;) {
          const _v7: any = (temps[0] ?? 0);
          acc = _v7;
          const _v8: any = argc;
          acc = _v8;
          const _v9: any = rt.op("<", ...[_v7, _v8]);
          acc = _v9;
          if (!rt.truth(_v9)) break _loop3;
          _continue4: {
            let _v10: any = acc;
            const _v11: any = 0;
            acc = _v11;
            const _v12: any = (args[(0 + (Number(_v11) & 65535))] ?? 0);
            acc = _v12;
            const _v13: any = (temps[0] ?? 0);
            acc = _v13;
            const _v14: any = (args[(0 + (Number(_v13) & 65535))] ?? 0);
            acc = _v14;
            const _v15: any = await rt.call(300, "localproc_1", [_v12, _v14], this);
            acc = _v15;
            const _v16: any = (temps[2] = _v15);
            acc = _v16;
            const _v17: any = (temps[1] ?? 0);
            acc = _v17;
            const _v18: any = rt.op("<", ...[_v16, _v17]);
            acc = _v18;
            _v10 = _v18;
            if (rt.truth(_v18)) {
              const _v19: any = (temps[0] ?? 0);
              acc = _v19;
              const _v20: any = (args[(0 + (Number(_v19) & 65535))] ?? 0);
              acc = _v20;
              const _v21: any = (temps[3] = _v20);
              acc = _v21;
              _v10 = _v21;
              const _v22: any = (temps[2] ?? 0);
              acc = _v22;
              const _v23: any = (temps[1] = _v22);
              acc = _v23;
              _v10 = _v23;
            }
            acc = _v10;
          }
          const _v24: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
          acc = _v24;
        }
        const _v25: any = (temps[3] ?? 0);
        acc = _v25;
        return _v25;
        return acc;
      },
      // SCI WhereShouldIGo.sc: localproc_6
      "localproc_6": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        let _v1: any = 1;
        if (rt.truth(_v1)) {
          const _v2: any = rt.global(484);
          acc = _v2;
          const _v3: any = rt.op("not", ...[_v2]);
          acc = _v3;
          _v1 = _v3;
        }
        if (rt.truth(_v1)) {
          let _v4: any = 0;
          if (!rt.truth(_v4)) {
            const _v5: any = 21;
            acc = _v5;
            const _v6: any = rt.global(302);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "durables", []);
            acc = _v7;
            const _v8: any = await rt.send(_v7, "objectAtIndexQuan", [_v5]);
            acc = _v8;
            const _v9: any = rt.op("not", ...[_v8]);
            acc = _v9;
            _v4 = _v9;
          }
          if (!rt.truth(_v4)) {
            const _v10: any = 22;
            acc = _v10;
            const _v11: any = rt.global(302);
            acc = _v11;
            const _v12: any = await rt.send(_v11, "durables", []);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "objectAtIndexQuan", [_v10]);
            acc = _v13;
            const _v14: any = rt.op("not", ...[_v13]);
            acc = _v14;
            _v4 = _v14;
          }
          if (!rt.truth(_v4)) {
            const _v15: any = 23;
            acc = _v15;
            const _v16: any = rt.global(302);
            acc = _v16;
            const _v17: any = await rt.send(_v16, "durables", []);
            acc = _v17;
            const _v18: any = await rt.send(_v17, "objectAtIndexQuan", [_v15]);
            acc = _v18;
            const _v19: any = rt.op("not", ...[_v18]);
            acc = _v19;
            _v4 = _v19;
          }
          if (!rt.truth(_v4)) {
            const _v20: any = 24;
            acc = _v20;
            const _v21: any = rt.global(302);
            acc = _v21;
            const _v22: any = await rt.send(_v21, "durables", []);
            acc = _v22;
            const _v23: any = await rt.send(_v22, "objectAtIndexQuan", [_v20]);
            acc = _v23;
            const _v24: any = rt.op("not", ...[_v23]);
            acc = _v24;
            _v4 = _v24;
          }
          if (!rt.truth(_v4)) {
            const _v25: any = 25;
            acc = _v25;
            const _v26: any = rt.global(302);
            acc = _v26;
            const _v27: any = await rt.send(_v26, "durables", []);
            acc = _v27;
            const _v28: any = await rt.send(_v27, "objectAtIndexQuan", [_v25]);
            acc = _v28;
            const _v29: any = rt.op("not", ...[_v28]);
            acc = _v29;
            _v4 = _v29;
          }
          if (!rt.truth(_v4)) {
            const _v30: any = 26;
            acc = _v30;
            const _v31: any = rt.global(302);
            acc = _v31;
            const _v32: any = await rt.send(_v31, "durables", []);
            acc = _v32;
            const _v33: any = await rt.send(_v32, "objectAtIndexQuan", [_v30]);
            acc = _v33;
            const _v34: any = rt.op("not", ...[_v33]);
            acc = _v34;
            _v4 = _v34;
          }
          if (!rt.truth(_v4)) {
            const _v35: any = 27;
            acc = _v35;
            const _v36: any = rt.global(302);
            acc = _v36;
            const _v37: any = await rt.send(_v36, "durables", []);
            acc = _v37;
            const _v38: any = await rt.send(_v37, "objectAtIndexQuan", [_v35]);
            acc = _v38;
            const _v39: any = rt.op("not", ...[_v38]);
            acc = _v39;
            _v4 = _v39;
          }
          if (!rt.truth(_v4)) {
            const _v40: any = 28;
            acc = _v40;
            const _v41: any = rt.global(302);
            acc = _v41;
            const _v42: any = await rt.send(_v41, "durables", []);
            acc = _v42;
            const _v43: any = await rt.send(_v42, "objectAtIndexQuan", [_v40]);
            acc = _v43;
            const _v44: any = rt.op("not", ...[_v43]);
            acc = _v44;
            _v4 = _v44;
          }
          if (!rt.truth(_v4)) {
            const _v45: any = 29;
            acc = _v45;
            const _v46: any = rt.global(302);
            acc = _v46;
            const _v47: any = await rt.send(_v46, "durables", []);
            acc = _v47;
            const _v48: any = await rt.send(_v47, "objectAtIndexQuan", [_v45]);
            acc = _v48;
            const _v49: any = rt.op("not", ...[_v48]);
            acc = _v49;
            _v4 = _v49;
          }
          acc = _v4;
          _v1 = _v4;
        }
        acc = _v1;
        return _v1;
        return acc;
      },
    },
    exports: {"0": "WhereShouldIGo"},
  });
}
