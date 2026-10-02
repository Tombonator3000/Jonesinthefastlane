// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/startTrn.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 3e8eb9fa90c709b85bf7e030444f0af11b98ed4cdae2d56cc74d602e8db0c237
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(111, {
    name: "startTrn",
    uses: [0, 1, 109, 255, 992, 996, 998, 999],
    locals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    objects: [
      {
        name: "startTrn",
        className: "Script",
        parent: {"script": 999, "name": "Script"},
        isClass: false,
        properties: {},
        methods: {
          // SCI startTrn.sc: startTrn.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.global(532);
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 0;
              acc = _v3;
              const _v4: any = rt.setGlobal(532, _v3);
              acc = _v4;
              _v1 = _v4;
              const _v5: any = this;
              acc = _v5;
              const _v6: any = await rt.send(_v5, "cue", []);
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            const _v7: any = await rt.superSend(this, {"script": 111, "name": "startTrn"}, "doit", []);
            acc = _v7;
            return acc;
          },
          // SCI startTrn.sc: startTrn.changeState
          "changeState": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
                const _v6: any = 1;
                acc = _v6;
                const _v7: any = rt.setGlobal(537, _v6);
                acc = _v7;
                _v1 = _v7;
                const _v8: any = 0;
                acc = _v8;
                const _v9: any = rt.setGlobal(521, _v8);
                acc = _v9;
                _v1 = _v9;
                const _v10: any = rt.object(111, "notice");
                acc = _v10;
                const _v11: any = rt.setGlobal(530, _v10);
                acc = _v11;
                _v1 = _v11;
                let _v12: any = acc;
                let _v13: any = 1;
                if (rt.truth(_v13)) {
                  const _v14: any = rt.global(302);
                  acc = _v14;
                  const _v15: any = await rt.send(_v14, "playing", []);
                  acc = _v15;
                  const _v16: any = 29;
                  acc = _v16;
                  const _v17: any = rt.op("==", ...[_v15, _v16]);
                  acc = _v17;
                  _v13 = _v17;
                }
                if (rt.truth(_v13)) {
                  const _v18: any = rt.global(447);
                  acc = _v18;
                  _v13 = _v18;
                }
                acc = _v13;
                _v12 = _v13;
                if (rt.truth(_v13)) {
                  const _v19: any = rt.global(19);
                  acc = _v19;
                  const _v20: any = 1;
                  acc = _v20;
                  const _v21: any = 319;
                  acc = _v21;
                  const _v22: any = 199;
                  acc = _v22;
                  const _v23: any = await rt.call(111, "SetCursor", [_v19, _v20, _v21, _v22], this);
                  acc = _v23;
                  _v12 = _v23;
                }
                acc = _v12;
                _v1 = _v12;
                const _v24: any = 0;
                acc = _v24;
                const _v25: any = rt.setLocal(111, 81, _v24);
                acc = _v25;
                const _v26: any = rt.setGlobal(483, _v25);
                acc = _v26;
                const _v27: any = rt.setGlobal(503, _v26);
                acc = _v27;
                const _v28: any = rt.setGlobal(484, _v27);
                acc = _v28;
                const _v29: any = rt.setGlobal(485, _v28);
                acc = _v29;
                const _v30: any = rt.setGlobal(480, _v29);
                acc = _v30;
                const _v31: any = rt.setGlobal(474, _v30);
                acc = _v31;
                const _v32: any = rt.setGlobal(478, _v31);
                acc = _v32;
                _v1 = _v32;
                let _v33: any = acc;
                let _v34: any = 0;
                if (!rt.truth(_v34)) {
                  const _v35: any = 23;
                  acc = _v35;
                  const _v36: any = rt.global(302);
                  acc = _v36;
                  const _v37: any = await rt.send(_v36, "durables", []);
                  acc = _v37;
                  const _v38: any = await rt.send(_v37, "objectAtIndexQuan", [_v35]);
                  acc = _v38;
                  _v34 = _v38;
                }
                if (!rt.truth(_v34)) {
                  const _v39: any = 27;
                  acc = _v39;
                  const _v40: any = rt.global(302);
                  acc = _v40;
                  const _v41: any = await rt.send(_v40, "durables", []);
                  acc = _v41;
                  const _v42: any = await rt.send(_v41, "objectAtIndexQuan", [_v39]);
                  acc = _v42;
                  _v34 = _v42;
                }
                acc = _v34;
                _v33 = _v34;
                if (rt.truth(_v34)) {
                  const _v43: any = 1;
                  acc = _v43;
                  const _v44: any = await rt.call(0, "proc0_13", [_v43], this);
                  acc = _v44;
                  _v33 = _v44;
                }
                acc = _v33;
                _v1 = _v33;
                const _v45: any = rt.setGlobal(481, rt.op("+", rt.global(481), 1));
                acc = _v45;
                _v1 = _v45;
                const _v46: any = 1;
                acc = _v46;
                const _v47: any = rt.object(996, "User");
                acc = _v47;
                const _v48: any = await rt.send(_v47, "canControl", [_v46]);
                acc = _v48;
                _v1 = _v48;
                let _v49: any = acc;
                let _v50: any = 1;
                if (rt.truth(_v50)) {
                  const _v51: any = rt.global(302);
                  acc = _v51;
                  const _v52: any = await rt.send(_v51, "finishStatus", []);
                  acc = _v52;
                  const _v53: any = rt.op("not", ...[_v52]);
                  acc = _v53;
                  _v50 = _v53;
                }
                if (rt.truth(_v50)) {
                  const _v54: any = rt.global(302);
                  acc = _v54;
                  const _v55: any = await rt.send(_v54, "monStat", []);
                  acc = _v55;
                  const _v56: any = rt.global(302);
                  acc = _v56;
                  const _v57: any = await rt.send(_v56, "monGoal", []);
                  acc = _v57;
                  const _v58: any = rt.op(">=", ...[_v55, _v57]);
                  acc = _v58;
                  _v50 = _v58;
                }
                if (rt.truth(_v50)) {
                  const _v59: any = rt.global(302);
                  acc = _v59;
                  const _v60: any = await rt.send(_v59, "hapStat", []);
                  acc = _v60;
                  const _v61: any = rt.global(302);
                  acc = _v61;
                  const _v62: any = await rt.send(_v61, "hapGoal", []);
                  acc = _v62;
                  const _v63: any = rt.op(">=", ...[_v60, _v62]);
                  acc = _v63;
                  _v50 = _v63;
                }
                if (rt.truth(_v50)) {
                  const _v64: any = rt.global(302);
                  acc = _v64;
                  const _v65: any = await rt.send(_v64, "eduStat", []);
                  acc = _v65;
                  const _v66: any = rt.global(302);
                  acc = _v66;
                  const _v67: any = await rt.send(_v66, "eduGoal", []);
                  acc = _v67;
                  const _v68: any = rt.op(">=", ...[_v65, _v67]);
                  acc = _v68;
                  _v50 = _v68;
                }
                if (rt.truth(_v50)) {
                  const _v69: any = rt.global(302);
                  acc = _v69;
                  const _v70: any = await rt.send(_v69, "carStat", []);
                  acc = _v70;
                  const _v71: any = rt.global(302);
                  acc = _v71;
                  const _v72: any = await rt.send(_v71, "carGoal", []);
                  acc = _v72;
                  const _v73: any = rt.op(">=", ...[_v70, _v72]);
                  acc = _v73;
                  _v50 = _v73;
                }
                acc = _v50;
                _v49 = _v50;
                if (rt.truth(_v50)) {
                  const _v74: any = 234;
                  acc = _v74;
                  const _v75: any = 0;
                  acc = _v75;
                  const _v76: any = await rt.call(111, "ScriptID", [_v74, _v75], this);
                  acc = _v76;
                  const _v77: any = this;
                  acc = _v77;
                  const _v78: any = await rt.send(_v77, "setScript", [_v76]);
                  acc = _v78;
                  _v49 = _v78;
                  return acc;
                  _v49 = acc;
                }
                acc = _v49;
                _v1 = _v49;
                const _v79: any = 1;
                acc = _v79;
                const _v80: any = rt.set(this, "state", _v79);
                acc = _v80;
                _v1 = _v80;
                const _v81: any = this;
                acc = _v81;
                const _v82: any = await rt.send(_v81, "cue", []);
                acc = _v82;
                _v1 = _v82;
                break _branch4;
              }
              const _v83: any = 1;
              acc = _v83;
              _v1 = rt.op("==", _v3, _v83);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v84: any = 0;
                acc = _v84;
                const _v85: any = rt.set(this, "script", _v84);
                acc = _v85;
                _v1 = _v85;
                const _acc86: any = acc;
                const _v87: any = 234;
                acc = _v87;
                const _args88: any[] = [_v87];
                await rt.call(111, "DisposeScript", _args88, this);
                const _v89: any = _args88.length === 2 ? _args88[1] : _acc86;
                acc = _v89;
                _v1 = _v89;
                const _v90: any = this;
                acc = _v90;
                const _v91: any = await rt.send(_v90, "cue", []);
                acc = _v91;
                _v1 = _v91;
                break _branch4;
              }
              const _v92: any = 2;
              acc = _v92;
              _v1 = rt.op("==", _v3, _v92);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v93: any = acc;
                let _v94: any = 1;
                if (rt.truth(_v94)) {
                  const _v95: any = rt.global(302);
                  acc = _v95;
                  const _v96: any = await rt.send(_v95, "finishStatus", []);
                  acc = _v96;
                  const _v97: any = rt.op("not", ...[_v96]);
                  acc = _v97;
                  _v94 = _v97;
                }
                if (rt.truth(_v94)) {
                  const _v98: any = rt.global(302);
                  acc = _v98;
                  const _v99: any = await rt.send(_v98, "monStat", []);
                  acc = _v99;
                  const _v100: any = rt.global(302);
                  acc = _v100;
                  const _v101: any = await rt.send(_v100, "monGoal", []);
                  acc = _v101;
                  const _v102: any = rt.op(">=", ...[_v99, _v101]);
                  acc = _v102;
                  _v94 = _v102;
                }
                if (rt.truth(_v94)) {
                  const _v103: any = rt.global(302);
                  acc = _v103;
                  const _v104: any = await rt.send(_v103, "hapStat", []);
                  acc = _v104;
                  const _v105: any = rt.global(302);
                  acc = _v105;
                  const _v106: any = await rt.send(_v105, "hapGoal", []);
                  acc = _v106;
                  const _v107: any = rt.op(">=", ...[_v104, _v106]);
                  acc = _v107;
                  _v94 = _v107;
                }
                if (rt.truth(_v94)) {
                  const _v108: any = rt.global(302);
                  acc = _v108;
                  const _v109: any = await rt.send(_v108, "eduStat", []);
                  acc = _v109;
                  const _v110: any = rt.global(302);
                  acc = _v110;
                  const _v111: any = await rt.send(_v110, "eduGoal", []);
                  acc = _v111;
                  const _v112: any = rt.op(">=", ...[_v109, _v111]);
                  acc = _v112;
                  _v94 = _v112;
                }
                if (rt.truth(_v94)) {
                  const _v113: any = rt.global(302);
                  acc = _v113;
                  const _v114: any = await rt.send(_v113, "carStat", []);
                  acc = _v114;
                  const _v115: any = rt.global(302);
                  acc = _v115;
                  const _v116: any = await rt.send(_v115, "carGoal", []);
                  acc = _v116;
                  const _v117: any = rt.op(">=", ...[_v114, _v116]);
                  acc = _v117;
                  _v94 = _v117;
                }
                acc = _v94;
                _v93 = _v94;
                if (rt.truth(_v94)) {
                  const _v118: any = 1;
                  acc = _v118;
                  const _v119: any = rt.setGlobal(448, _v118);
                  acc = _v119;
                  _v93 = _v119;
                  const _v120: any = 1;
                  acc = _v120;
                  const _v121: any = rt.setGlobal(505, _v120);
                  acc = _v121;
                  _v93 = _v121;
                  const _v122: any = rt.global(372);
                  acc = _v122;
                  const _v123: any = rt.global(302);
                  acc = _v123;
                  const _v124: any = await rt.send(_v123, "finishStatus", [_v122]);
                  acc = _v124;
                  _v93 = _v124;
                  const _v125: any = 0;
                  acc = _v125;
                  const _v126: any = rt.global(302);
                  acc = _v126;
                  const _v127: any = await rt.send(_v126, "script", [_v125]);
                  acc = _v127;
                  _v93 = _v127;
                  const _v128: any = rt.global(19);
                  acc = _v128;
                  const _v129: any = (temps[10] = _v128);
                  acc = _v129;
                  _v93 = _v129;
                  const _v130: any = rt.object(996, "User");
                  acc = _v130;
                  const _v131: any = await rt.send(_v130, "controls", []);
                  acc = _v131;
                  const _v132: any = (temps[9] = _v131);
                  acc = _v132;
                  _v93 = _v132;
                  const _v133: any = 999;
                  acc = _v133;
                  const _v134: any = 1;
                  acc = _v134;
                  const _v135: any = rt.global(1);
                  acc = _v135;
                  const _v136: any = await rt.send(_v135, "setCursor", [_v133, _v134]);
                  acc = _v136;
                  _v93 = _v136;
                  const _v137: any = 1;
                  acc = _v137;
                  const _v138: any = rt.object(996, "User");
                  acc = _v138;
                  const _v139: any = await rt.send(_v138, "controls", [_v137]);
                  acc = _v139;
                  _v93 = _v139;
                  const _v142: any = 0;
                  acc = _v142;
                  const _v143: any = (temps[5] = _v142);
                  acc = _v143;
                  const _v144: any = (temps[4] = _v143);
                  acc = _v144;
                  _loop140: for (;;) {
                    const _v145: any = (temps[4] ?? 0);
                    acc = _v145;
                    const _v146: any = 1;
                    acc = _v146;
                    const _v147: any = 2;
                    acc = _v147;
                    const _v148: any = await rt.call(111, "ScriptID", [_v146, _v147], this);
                    acc = _v148;
                    const _v149: any = await rt.send(_v148, "size", []);
                    acc = _v149;
                    const _v150: any = rt.op("<", ...[_v145, _v149]);
                    acc = _v150;
                    if (!rt.truth(_v150)) break _loop140;
                    _continue141: {
                      let _v151: any = acc;
                      const _v152: any = (temps[4] ?? 0);
                      acc = _v152;
                      const _v153: any = 1;
                      acc = _v153;
                      const _v154: any = 2;
                      acc = _v154;
                      const _v155: any = await rt.call(111, "ScriptID", [_v153, _v154], this);
                      acc = _v155;
                      const _v156: any = await rt.send(_v155, "at", [_v152]);
                      acc = _v156;
                      const _v157: any = await rt.send(_v156, "playing", []);
                      acc = _v157;
                      const _v158: any = 3;
                      acc = _v158;
                      const _v159: any = rt.op("!=", ...[_v157, _v158]);
                      acc = _v159;
                      _v151 = _v159;
                      if (rt.truth(_v159)) {
                        const _v160: any = (temps[5] = rt.op("+", (temps[5] ?? 0), 1));
                        acc = _v160;
                        _v151 = _v160;
                      }
                      acc = _v151;
                    }
                    const _v161: any = (temps[4] = rt.op("+", (temps[4] ?? 0), 1));
                    acc = _v161;
                  }
                  _v93 = acc;
                  let _v162: any = acc;
                  const _v163: any = (temps[5] ?? 0);
                  acc = _v163;
                  const _v164: any = 1;
                  acc = _v164;
                  const _v165: any = rt.op(">", ...[_v163, _v164]);
                  acc = _v165;
                  _v162 = _v165;
                  if (rt.truth(_v165)) {
                    let _v166: any = acc;
                    const _v167: any = 111;
                    acc = _v167;
                    const _v168: any = 0;
                    acc = _v168;
                    const _v169: any = 81;
                    acc = _v169;
                    const _v170: any = "Continue";
                    acc = _v170;
                    const _v171: any = 1;
                    acc = _v171;
                    const _v172: any = 81;
                    acc = _v172;
                    const _v173: any = "Restart";
                    acc = _v173;
                    const _v174: any = 2;
                    acc = _v174;
                    const _v175: any = 81;
                    acc = _v175;
                    const _v176: any = "Quit";
                    acc = _v176;
                    const _v177: any = 0;
                    acc = _v177;
                    const _v178: any = 70;
                    acc = _v178;
                    const _v179: any = 150;
                    acc = _v179;
                    const _v180: any = await rt.call(255, "Print", [_v167, _v168, _v169, _v170, _v171, _v172, _v173, _v174, _v175, _v176, _v177, _v178, _v179], this);
                    acc = _v180;
                    _branch181: {
                      const _v182: any = 0;
                      acc = _v182;
                      _v166 = rt.op("==", _v180, _v182);
                      acc = _v166;
                      if (rt.truth(_v166)) {
                        const _v183: any = 1;
                        acc = _v183;
                        const _v184: any = rt.setGlobal(4, _v183);
                        acc = _v184;
                        _v166 = _v184;
                        break _branch181;
                      }
                      const _v185: any = 1;
                      acc = _v185;
                      _v166 = rt.op("==", _v180, _v185);
                      acc = _v166;
                      if (rt.truth(_v166)) {
                        const _v186: any = rt.global(303);
                        acc = _v186;
                        const _v187: any = await rt.send(_v186, "hide", []);
                        acc = _v187;
                        _v166 = _v187;
                        const _v188: any = await rt.call(0, "proc0_1", [], this);
                        acc = _v188;
                        _v166 = _v188;
                        let _v189: any = acc;
                        const _v190: any = (temps[5] ?? 0);
                        acc = _v190;
                        const _v191: any = 2;
                        acc = _v191;
                        const _v192: any = rt.op(">", ...[_v190, _v191]);
                        acc = _v192;
                        _v189 = _v192;
                        if (rt.truth(_v192)) {
                          const _v193: any = 771;
                          acc = _v193;
                          const _v194: any = 112;
                          acc = _v194;
                          const _v195: any = 1;
                          acc = _v195;
                          const _v196: any = await rt.call(111, "SetMenu", [_v193, _v194, _v195], this);
                          acc = _v196;
                          _v189 = _v196;
                        }
                        acc = _v189;
                        _v166 = _v189;
                        break _branch181;
                      }
                      const _v197: any = 2;
                      acc = _v197;
                      _v166 = rt.op("==", _v180, _v197);
                      acc = _v166;
                      if (rt.truth(_v166)) {
                        const _v198: any = rt.global(1);
                        acc = _v198;
                        const _v199: any = await rt.send(_v198, "restart", []);
                        acc = _v199;
                        _v166 = _v199;
                        break _branch181;
                      }
                    }
                    acc = _v166;
                    _v162 = _v166;
                  }
                  acc = _v162;
                  _v93 = _v162;
                  const _v200: any = (temps[9] ?? 0);
                  acc = _v200;
                  const _v201: any = rt.object(996, "User");
                  acc = _v201;
                  const _v202: any = await rt.send(_v201, "controls", [_v200]);
                  acc = _v202;
                  _v93 = _v202;
                  const _v203: any = (temps[10] ?? 0);
                  acc = _v203;
                  const _v204: any = 1;
                  acc = _v204;
                  const _v205: any = rt.global(1);
                  acc = _v205;
                  const _v206: any = await rt.send(_v205, "setCursor", [_v203, _v204]);
                  acc = _v206;
                  _v93 = _v206;
                  const _v207: any = 35;
                  acc = _v207;
                  const _v208: any = rt.set(this, "state", _v207);
                  acc = _v208;
                  _v93 = _v208;
                  const _v209: any = 1;
                  acc = _v209;
                  const _v210: any = rt.set(this, "cycles", _v209);
                  acc = _v210;
                  _v93 = _v210;
                }
                acc = _v93;
                _v1 = _v93;
                let _v211: any = acc;
                const _v212: any = rt.global(448);
                acc = _v212;
                const _v213: any = rt.op("not", ...[_v212]);
                acc = _v213;
                _v211 = _v213;
                if (rt.truth(_v213)) {
                  const _v214: any = 0;
                  acc = _v214;
                  const _v215: any = rt.setGlobal(466, _v214);
                  acc = _v215;
                  const _v216: any = rt.setGlobal(467, _v215);
                  acc = _v216;
                  const _v217: any = rt.setGlobal(468, _v216);
                  acc = _v217;
                  _v211 = _v217;
                  const _v218: any = 0;
                  acc = _v218;
                  const _v219: any = rt.setGlobal(470, _v218);
                  acc = _v219;
                  const _v220: any = rt.setGlobal(469, _v219);
                  acc = _v220;
                  const _v221: any = rt.setGlobal(465, _v220);
                  acc = _v221;
                  _v211 = _v221;
                  const _v222: any = 0;
                  acc = _v222;
                  const _v223: any = rt.setGlobal(472, _v222);
                  acc = _v223;
                  const _v224: any = rt.setGlobal(471, _v223);
                  acc = _v224;
                  _v211 = _v224;
                  let _v225: any = acc;
                  const _v226: any = rt.global(445);
                  acc = _v226;
                  _v225 = _v226;
                  if (rt.truth(_v226)) {
                    const _v227: any = 0;
                    acc = _v227;
                    const _v228: any = rt.setGlobal(445, _v227);
                    acc = _v228;
                    _v225 = _v228;
                  } else {
                    const _v229: any = 0;
                    acc = _v229;
                    const _v230: any = rt.setGlobal(415, _v229);
                    acc = _v230;
                    _v225 = _v230;
                  }
                  acc = _v225;
                  _v211 = _v225;
                  const _v231: any = 0;
                  acc = _v231;
                  const _v232: any = rt.setGlobal(465, _v231);
                  acc = _v232;
                  _v211 = _v232;
                  const _v233: any = -1;
                  acc = _v233;
                  const _v234: any = rt.setGlobal(400, _v233);
                  acc = _v234;
                  _v211 = _v234;
                  const _v235: any = -1;
                  acc = _v235;
                  const _v236: any = rt.setGlobal(401, _v235);
                  acc = _v236;
                  _v211 = _v236;
                  const _v239: any = 0;
                  acc = _v239;
                  const _v240: any = rt.setLocal(111, 0, _v239);
                  acc = _v240;
                  _loop237: for (;;) {
                    const _v241: any = rt.local(111, 0);
                    acc = _v241;
                    const _v242: any = 15;
                    acc = _v242;
                    const _v243: any = rt.op("<", ...[_v241, _v242]);
                    acc = _v243;
                    if (!rt.truth(_v243)) break _loop237;
                    _continue238: {
                      const _v244: any = 0;
                      acc = _v244;
                      const _v245: any = rt.local(111, 0);
                      acc = _v245;
                      const _v246: any = rt.setGlobal((385 + (Number(_v245) & 65535)), _v244);
                      acc = _v246;
                    }
                    const _v247: any = rt.setLocal(111, 0, rt.op("+", rt.local(111, 0), 1));
                    acc = _v247;
                  }
                  _v211 = acc;
                  const _v248: any = 0;
                  acc = _v248;
                  const _v249: any = rt.global(302);
                  acc = _v249;
                  const _v250: any = await rt.send(_v249, "extraCredits", [_v248]);
                  acc = _v250;
                  _v211 = _v250;
                  const _v251: any = 33;
                  acc = _v251;
                  const _v252: any = rt.global(302);
                  acc = _v252;
                  const _v253: any = await rt.send(_v252, "durables", []);
                  acc = _v253;
                  const _v254: any = await rt.send(_v253, "objectAtIndexQuan", [_v251]);
                  acc = _v254;
                  const _v255: any = rt.setLocal(111, 13, _v254);
                  acc = _v255;
                  _v211 = _v255;
                  const _v256: any = 32;
                  acc = _v256;
                  const _v257: any = rt.global(302);
                  acc = _v257;
                  const _v258: any = await rt.send(_v257, "durables", []);
                  acc = _v258;
                  const _v259: any = await rt.send(_v258, "objectAtIndexQuan", [_v256]);
                  acc = _v259;
                  const _v260: any = rt.setLocal(111, 14, _v259);
                  acc = _v260;
                  _v211 = _v260;
                  const _v261: any = 31;
                  acc = _v261;
                  const _v262: any = rt.global(302);
                  acc = _v262;
                  const _v263: any = await rt.send(_v262, "durables", []);
                  acc = _v263;
                  const _v264: any = await rt.send(_v263, "objectAtIndexQuan", [_v261]);
                  acc = _v264;
                  const _v265: any = rt.setLocal(111, 15, _v264);
                  acc = _v265;
                  _v211 = _v265;
                  const _v266: any = 29;
                  acc = _v266;
                  const _v267: any = rt.global(302);
                  acc = _v267;
                  const _v268: any = await rt.send(_v267, "durables", []);
                  acc = _v268;
                  const _v269: any = await rt.send(_v268, "objectAtIndexQuan", [_v266]);
                  acc = _v269;
                  const _v270: any = rt.setLocal(111, 16, _v269);
                  acc = _v270;
                  _v211 = _v270;
                  let _v271: any = acc;
                  let _v272: any = 1;
                  if (rt.truth(_v272)) {
                    const _v273: any = rt.local(111, 13);
                    acc = _v273;
                    _v272 = _v273;
                  }
                  if (rt.truth(_v272)) {
                    const _v274: any = rt.local(111, 14);
                    acc = _v274;
                    _v272 = _v274;
                  }
                  if (rt.truth(_v272)) {
                    const _v275: any = rt.local(111, 15);
                    acc = _v275;
                    _v272 = _v275;
                  }
                  acc = _v272;
                  _v271 = _v272;
                  if (rt.truth(_v272)) {
                    const _v276: any = rt.global(302);
                    acc = _v276;
                    const _v277: any = await rt.send(_v276, "extraCredits", []);
                    acc = _v277;
                    const _v278: any = 1;
                    acc = _v278;
                    const _v279: any = rt.op("+", ...[_v277, _v278]);
                    acc = _v279;
                    const _v280: any = rt.global(302);
                    acc = _v280;
                    const _v281: any = await rt.send(_v280, "extraCredits", [_v279]);
                    acc = _v281;
                    _v271 = _v281;
                  }
                  acc = _v271;
                  _v211 = _v271;
                  let _v282: any = acc;
                  const _v283: any = rt.local(111, 16);
                  acc = _v283;
                  _v282 = _v283;
                  if (rt.truth(_v283)) {
                    const _v284: any = rt.global(302);
                    acc = _v284;
                    const _v285: any = await rt.send(_v284, "extraCredits", []);
                    acc = _v285;
                    const _v286: any = 1;
                    acc = _v286;
                    const _v287: any = rt.op("+", ...[_v285, _v286]);
                    acc = _v287;
                    const _v288: any = rt.global(302);
                    acc = _v288;
                    const _v289: any = await rt.send(_v288, "extraCredits", [_v287]);
                    acc = _v289;
                    _v282 = _v289;
                  }
                  acc = _v282;
                  _v211 = _v282;
                  const _v290: any = rt.global(302);
                  acc = _v290;
                  const _v291: any = 1;
                  acc = _v291;
                  const _v292: any = 2;
                  acc = _v292;
                  const _v293: any = await rt.call(111, "ScriptID", [_v291, _v292], this);
                  acc = _v293;
                  const _v294: any = await rt.send(_v293, "indexOf", [_v290]);
                  acc = _v294;
                  const _v295: any = rt.setLocal(111, 1, _v294);
                  acc = _v295;
                  _v211 = _v295;
                  const _v296: any = rt.global(302);
                  acc = _v296;
                  const _v297: any = await rt.send(_v296, "calcNetWorth", []);
                  acc = _v297;
                  _v211 = _v297;
                  const _v298: any = 1;
                  acc = _v298;
                  const _v299: any = rt.setGlobal(329, _v298);
                  acc = _v299;
                  _v211 = _v299;
                  const _v300: any = 0;
                  acc = _v300;
                  const _v301: any = rt.setGlobal(405, _v300);
                  acc = _v301;
                  const _v302: any = rt.setGlobal(404, _v301);
                  acc = _v302;
                  const _v303: any = rt.setGlobal(402, _v302);
                  acc = _v303;
                  const _v304: any = rt.setGlobal(370, _v303);
                  acc = _v304;
                  _v211 = _v304;
                  let _v305: any = acc;
                  const _v306: any = rt.global(372);
                  acc = _v306;
                  const _v307: any = 1;
                  acc = _v307;
                  const _v308: any = rt.op("!=", ...[_v306, _v307]);
                  acc = _v308;
                  _v305 = _v308;
                  if (rt.truth(_v308)) {
                    const _v309: any = rt.global(303);
                    acc = _v309;
                    const _v310: any = await rt.send(_v309, "signal", []);
                    acc = _v310;
                    const _v311: any = 4;
                    acc = _v311;
                    const _v312: any = rt.op("|", ...[_v310, _v311]);
                    acc = _v312;
                    const _v313: any = rt.global(303);
                    acc = _v313;
                    const _v314: any = await rt.send(_v313, "signal", [_v312]);
                    acc = _v314;
                    _v305 = _v314;
                    const _v315: any = rt.global(303);
                    acc = _v315;
                    const _v316: any = await rt.send(_v315, "hide", []);
                    acc = _v316;
                    _v305 = _v316;
                    const _v317: any = await rt.call(0, "proc0_1", [], this);
                    acc = _v317;
                    _v305 = _v317;
                    const _v318: any = 0;
                    acc = _v318;
                    const _v319: any = 232;
                    acc = _v319;
                    const _v320: any = 0;
                    acc = _v320;
                    const _v321: any = await rt.call(111, "ScriptID", [_v319, _v320], this);
                    acc = _v321;
                    const _v322: any = await rt.send(_v321, "init", [_v318]);
                    acc = _v322;
                    _v305 = _v322;
                    const _v323: any = await rt.call(1, "proc1_8", [], this);
                    acc = _v323;
                    _v305 = _v323;
                    const _v324: any = rt.global(303);
                    acc = _v324;
                    const _v325: any = await rt.send(_v324, "show", []);
                    acc = _v325;
                    _v305 = _v325;
                    const _v326: any = await rt.call(0, "proc0_1", [], this);
                    acc = _v326;
                    _v305 = _v326;
                  }
                  acc = _v305;
                  _v211 = _v305;
                  const _v327: any = await rt.call(0, "proc0_7", [], this);
                  acc = _v327;
                  _v211 = _v327;
                  const _v328: any = -1;
                  acc = _v328;
                  const _v329: any = 5;
                  acc = _v329;
                  const _v330: any = rt.global(477);
                  acc = _v330;
                  const _v331: any = await rt.send(_v330, "loop", [_v328]);
                  acc = _v331;
                  const _v332: any = await rt.send(_v330, "play", [_v329]);
                  acc = _v332;
                  _v211 = _v332;
                  const _v333: any = rt.global(305);
                  acc = _v333;
                  const _v334: any = await rt.send(_v333, "erase", []);
                  acc = _v334;
                  _v211 = _v334;
                  let _v335: any = acc;
                  const _v336: any = 9;
                  acc = _v336;
                  const _v337: any = rt.global(302);
                  acc = _v337;
                  const _v338: any = await rt.send(_v337, "consumables", []);
                  acc = _v338;
                  const _v339: any = await rt.send(_v338, "objectAtIndex", [_v336]);
                  acc = _v339;
                  const _v340: any = rt.setLocal(111, 3, _v339);
                  acc = _v340;
                  _v335 = _v340;
                  if (rt.truth(_v340)) {
                    let _v341: any = acc;
                    const _v342: any = rt.local(111, 3);
                    acc = _v342;
                    const _v343: any = await rt.send(_v342, "quantity", []);
                    acc = _v343;
                    const _v344: any = 0;
                    acc = _v344;
                    const _v345: any = 500;
                    acc = _v345;
                    const _v346: any = await rt.call(111, "Random", [_v344, _v345], this);
                    acc = _v346;
                    const _v347: any = rt.setLocal(111, 4, _v346);
                    acc = _v347;
                    const _v348: any = rt.op(">", ...[_v343, _v347]);
                    acc = _v348;
                    _v341 = _v348;
                    if (rt.truth(_v348)) {
                      let _v349: any = acc;
                      _branch350: {
                        const _v351: any = rt.local(111, 4);
                        acc = _v351;
                        const _v352: any = rt.local(111, 3);
                        acc = _v352;
                        const _v353: any = await rt.send(_v352, "quantity", []);
                        acc = _v353;
                        const _v354: any = 20;
                        acc = _v354;
                        const _v355: any = rt.op("/", ...[_v353, _v354]);
                        acc = _v355;
                        const _v356: any = rt.op("<=", ...[_v351, _v355]);
                        acc = _v356;
                        _v349 = _v356;
                        acc = _v349;
                        if (rt.truth(_v349)) {
                          const _v357: any = 5000;
                          acc = _v357;
                          _v349 = _v357;
                          break _branch350;
                        }
                        const _v358: any = rt.local(111, 4);
                        acc = _v358;
                        const _v359: any = rt.local(111, 3);
                        acc = _v359;
                        const _v360: any = await rt.send(_v359, "quantity", []);
                        acc = _v360;
                        const _v361: any = 5;
                        acc = _v361;
                        const _v362: any = rt.op("/", ...[_v360, _v361]);
                        acc = _v362;
                        const _v363: any = rt.op("<=", ...[_v358, _v362]);
                        acc = _v363;
                        _v349 = _v363;
                        acc = _v349;
                        if (rt.truth(_v349)) {
                          const _v364: any = 500;
                          acc = _v364;
                          _v349 = _v364;
                          break _branch350;
                        }
                        const _v365: any = 200;
                        acc = _v365;
                        _v349 = _v365;
                        break _branch350;
                      }
                      acc = _v349;
                      const _v366: any = rt.setLocal(111, 5, _v349);
                      acc = _v366;
                      _v341 = _v366;
                      let _v367: any = acc;
                      const _v368: any = rt.local(111, 5);
                      acc = _v368;
                      const _v369: any = 5000;
                      acc = _v369;
                      const _v370: any = rt.op("==", ...[_v368, _v369]);
                      acc = _v370;
                      _v367 = _v370;
                      if (rt.truth(_v370)) {
                        const _v371: any = 10;
                        acc = _v371;
                        _v367 = _v371;
                      } else {
                        const _v372: any = 5;
                        acc = _v372;
                        _v367 = _v372;
                      }
                      acc = _v367;
                      const _v373: any = await rt.call(0, "proc0_13", [_v367], this);
                      acc = _v373;
                      _v341 = _v373;
                      const _v374: any = rt.local(111, 5);
                      acc = _v374;
                      const _v375: any = await rt.call(0, "proc0_10", [_v374], this);
                      acc = _v375;
                      _v341 = _v375;
                      const _v376: any = 116;
                      acc = _v376;
                      const _v377: any = 0;
                      acc = _v377;
                      const _v378: any = await rt.call(111, "ScriptID", [_v376, _v377], this);
                      acc = _v378;
                      const _v379: any = 0;
                      acc = _v379;
                      const _v380: any = rt.global(302);
                      acc = _v380;
                      const _v381: any = await rt.send(_v380, "actualName", []);
                      acc = _v381;
                      const _v382: any = rt.local(111, 5);
                      acc = _v382;
                      const _v383: any = this;
                      acc = _v383;
                      const _v384: any = await rt.send(_v383, "setScript", [_v378, _v379, _v381, _v382]);
                      acc = _v384;
                      _v341 = _v384;
                      const _v385: any = await rt.call(1, "proc1_8", [], this);
                      acc = _v385;
                      _v341 = _v385;
                      const _v386: any = 0;
                      acc = _v386;
                      const _v387: any = rt.local(111, 3);
                      acc = _v387;
                      const _v388: any = await rt.send(_v387, "quantity", [_v386]);
                      acc = _v388;
                      _v341 = _v388;
                      return acc;
                      _v341 = acc;
                    }
                    acc = _v341;
                    _v335 = _v341;
                    const _v389: any = 0;
                    acc = _v389;
                    const _v390: any = rt.local(111, 3);
                    acc = _v390;
                    const _v391: any = await rt.send(_v390, "quantity", [_v389]);
                    acc = _v391;
                    _v335 = _v391;
                  }
                  acc = _v335;
                  _v211 = _v335;
                  const _v392: any = this;
                  acc = _v392;
                  const _v393: any = await rt.send(_v392, "cue", []);
                  acc = _v393;
                  _v211 = _v393;
                }
                acc = _v211;
                _v1 = _v211;
                break _branch4;
              }
              const _v394: any = 3;
              acc = _v394;
              _v1 = rt.op("==", _v3, _v394);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v395: any = acc;
                const _v396: any = rt.global(372);
                acc = _v396;
                const _v397: any = 1;
                acc = _v397;
                const _v398: any = rt.op("==", ...[_v396, _v397]);
                acc = _v398;
                _v395 = _v398;
                if (rt.truth(_v398)) {
                  const _v399: any = 35;
                  acc = _v399;
                  const _v400: any = rt.set(this, "state", _v399);
                  acc = _v400;
                  _v395 = _v400;
                }
                acc = _v395;
                _v1 = _v395;
                const _v401: any = 1;
                acc = _v401;
                const _v402: any = rt.set(this, "cycles", _v401);
                acc = _v402;
                _v1 = _v402;
                break _branch4;
              }
              const _v403: any = 4;
              acc = _v403;
              _v1 = rt.op("==", _v3, _v403);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v404: any = acc;
                let _v405: any = 1;
                if (rt.truth(_v405)) {
                  const _v406: any = 29;
                  acc = _v406;
                  const _v407: any = rt.global(302);
                  acc = _v407;
                  const _v408: any = await rt.send(_v407, "durables", []);
                  acc = _v408;
                  const _v409: any = await rt.send(_v408, "objectAtIndexQuan", [_v406]);
                  acc = _v409;
                  const _v410: any = rt.setLocal(111, 16, _v409);
                  acc = _v410;
                  _v405 = _v410;
                }
                if (rt.truth(_v405)) {
                  const _v411: any = 0;
                  acc = _v411;
                  const _v412: any = 6;
                  acc = _v412;
                  const _v413: any = await rt.call(111, "Random", [_v411, _v412], this);
                  acc = _v413;
                  const _v414: any = rt.op("not", ...[_v413]);
                  acc = _v414;
                  _v405 = _v414;
                }
                acc = _v405;
                _v404 = _v405;
                if (rt.truth(_v405)) {
                  const _v415: any = 3;
                  acc = _v415;
                  const _v416: any = await rt.call(0, "proc0_13", [_v415], this);
                  acc = _v416;
                  _v404 = _v416;
                  const _v417: any = 20;
                  acc = _v417;
                  const _v418: any = 100;
                  acc = _v418;
                  const _v419: any = await rt.call(111, "Random", [_v417, _v418], this);
                  acc = _v419;
                  const _v420: any = rt.setLocal(111, 11, _v419);
                  acc = _v420;
                  const _v421: any = await rt.call(0, "proc0_10", [_v420], this);
                  acc = _v421;
                  _v404 = _v421;
                  const _v422: any = rt.object(111, "moveNotice");
                  acc = _v422;
                  const _v423: any = 0;
                  acc = _v423;
                  const _v424: any = 10;
                  acc = _v424;
                  const _v425: any = rt.local(111, 11);
                  acc = _v425;
                  const _v426: any = this;
                  acc = _v426;
                  const _v427: any = await rt.send(_v426, "setScript", [_v422, _v423, _v424, _v425]);
                  acc = _v427;
                  _v404 = _v427;
                  return acc;
                  _v404 = acc;
                }
                acc = _v404;
                _v1 = _v404;
                const _v428: any = this;
                acc = _v428;
                const _v429: any = await rt.send(_v428, "cue", []);
                acc = _v429;
                _v1 = _v429;
                break _branch4;
              }
              const _v430: any = 5;
              acc = _v430;
              _v1 = rt.op("==", _v3, _v430);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v431: any = 1;
                acc = _v431;
                const _v432: any = rt.set(this, "cycles", _v431);
                acc = _v432;
                _v1 = _v432;
                break _branch4;
              }
              const _v433: any = 6;
              acc = _v433;
              _v1 = rt.op("==", _v3, _v433);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v434: any = 0;
                acc = _v434;
                const _v435: any = rt.setGlobal(414, _v434);
                acc = _v435;
                _v1 = _v435;
                let _v436: any = acc;
                const _v437: any = 28;
                acc = _v437;
                const _v438: any = rt.global(302);
                acc = _v438;
                const _v439: any = await rt.send(_v438, "durables", []);
                acc = _v439;
                const _v440: any = await rt.send(_v439, "objectAtIndexQuan", [_v437]);
                acc = _v440;
                const _v441: any = rt.setLocal(111, 12, _v440);
                acc = _v441;
                const _v442: any = rt.op("not", ...[_v441]);
                acc = _v442;
                _v436 = _v442;
                if (rt.truth(_v442)) {
                  const _v443: any = rt.global(302);
                  acc = _v443;
                  const _v444: any = await rt.send(_v443, "relax", []);
                  acc = _v444;
                  const _v445: any = 1;
                  acc = _v445;
                  const _v446: any = rt.op("-", ...[_v444, _v445]);
                  acc = _v446;
                  const _v447: any = rt.global(302);
                  acc = _v447;
                  const _v448: any = await rt.send(_v447, "relax", [_v446]);
                  acc = _v448;
                  _v436 = _v448;
                  let _v449: any = acc;
                  const _v450: any = rt.global(302);
                  acc = _v450;
                  const _v451: any = await rt.send(_v450, "relax", []);
                  acc = _v451;
                  const _v452: any = 10;
                  acc = _v452;
                  const _v453: any = rt.op("<", ...[_v451, _v452]);
                  acc = _v453;
                  _v449 = _v453;
                  if (rt.truth(_v453)) {
                    const _v454: any = 10;
                    acc = _v454;
                    const _v455: any = rt.global(302);
                    acc = _v455;
                    const _v456: any = await rt.send(_v455, "relax", [_v454]);
                    acc = _v456;
                    _v449 = _v456;
                  }
                  acc = _v449;
                  _v436 = _v449;
                }
                acc = _v436;
                _v1 = _v436;
                let _v457: any = acc;
                let _v458: any = 1;
                if (rt.truth(_v458)) {
                  const _v459: any = rt.global(302);
                  acc = _v459;
                  const _v460: any = await rt.send(_v459, "livesAt", []);
                  acc = _v460;
                  const _v461: any = 0;
                  acc = _v461;
                  const _v462: any = rt.op("==", ...[_v460, _v461]);
                  acc = _v462;
                  _v458 = _v462;
                }
                if (rt.truth(_v458)) {
                  const _v463: any = 0;
                  acc = _v463;
                  const _v464: any = rt.global(302);
                  acc = _v464;
                  const _v465: any = await rt.send(_v464, "relax", []);
                  acc = _v465;
                  const _v466: any = await rt.call(111, "Random", [_v463, _v465], this);
                  acc = _v466;
                  const _v467: any = rt.op("not", ...[_v466]);
                  acc = _v467;
                  _v458 = _v467;
                }
                if (rt.truth(_v458)) {
                  const _v468: any = rt.global(302);
                  acc = _v468;
                  const _v469: any = await rt.send(_v468, "durables", []);
                  acc = _v469;
                  const _v470: any = await rt.send(_v469, "size", []);
                  acc = _v470;
                  _v458 = _v470;
                }
                acc = _v458;
                _v457 = _v458;
                if (rt.truth(_v458)) {
                  const _v473: any = 0;
                  acc = _v473;
                  const _v474: any = rt.setLocal(111, 0, _v473);
                  acc = _v474;
                  _loop471: for (;;) {
                    const _v475: any = rt.local(111, 0);
                    acc = _v475;
                    const _v476: any = rt.global(302);
                    acc = _v476;
                    const _v477: any = await rt.send(_v476, "durables", []);
                    acc = _v477;
                    const _v478: any = await rt.send(_v477, "size", []);
                    acc = _v478;
                    const _v479: any = rt.op("<", ...[_v475, _v478]);
                    acc = _v479;
                    if (!rt.truth(_v479)) break _loop471;
                    _continue472: {
                      let _v480: any = acc;
                      let _v481: any = 1;
                      if (rt.truth(_v481)) {
                        const _v482: any = rt.local(111, 0);
                        acc = _v482;
                        const _v483: any = rt.global(302);
                        acc = _v483;
                        const _v484: any = await rt.send(_v483, "durables", []);
                        acc = _v484;
                        const _v485: any = await rt.send(_v484, "at", [_v482]);
                        acc = _v485;
                        const _v486: any = await rt.send(_v485, "indexNum", []);
                        acc = _v486;
                        const _v487: any = 21;
                        acc = _v487;
                        const _v488: any = rt.op("!=", ...[_v486, _v487]);
                        acc = _v488;
                        _v481 = _v488;
                      }
                      if (rt.truth(_v481)) {
                        const _v489: any = rt.local(111, 0);
                        acc = _v489;
                        const _v490: any = rt.global(302);
                        acc = _v490;
                        const _v491: any = await rt.send(_v490, "durables", []);
                        acc = _v491;
                        const _v492: any = await rt.send(_v491, "at", [_v489]);
                        acc = _v492;
                        const _v493: any = await rt.send(_v492, "indexNum", []);
                        acc = _v493;
                        const _v494: any = 22;
                        acc = _v494;
                        const _v495: any = rt.op("!=", ...[_v493, _v494]);
                        acc = _v495;
                        _v481 = _v495;
                      }
                      if (rt.truth(_v481)) {
                        const _v496: any = rt.local(111, 0);
                        acc = _v496;
                        const _v497: any = rt.global(302);
                        acc = _v497;
                        const _v498: any = await rt.send(_v497, "durables", []);
                        acc = _v498;
                        const _v499: any = await rt.send(_v498, "at", [_v496]);
                        acc = _v499;
                        const _v500: any = await rt.send(_v499, "indexNum", []);
                        acc = _v500;
                        const _v501: any = 23;
                        acc = _v501;
                        const _v502: any = rt.op("!=", ...[_v500, _v501]);
                        acc = _v502;
                        _v481 = _v502;
                      }
                      if (rt.truth(_v481)) {
                        const _v503: any = 0;
                        acc = _v503;
                        const _v504: any = 3;
                        acc = _v504;
                        const _v505: any = await rt.call(111, "Random", [_v503, _v504], this);
                        acc = _v505;
                        _v481 = _v505;
                      }
                      acc = _v481;
                      _v480 = _v481;
                      if (rt.truth(_v481)) {
                        const _v506: any = 1;
                        acc = _v506;
                        const _v507: any = rt.setGlobal(414, _v506);
                        acc = _v507;
                        _v480 = _v507;
                        const _v508: any = 0;
                        acc = _v508;
                        const _v509: any = rt.local(111, 0);
                        acc = _v509;
                        const _v510: any = rt.global(302);
                        acc = _v510;
                        const _v511: any = await rt.send(_v510, "durables", []);
                        acc = _v511;
                        const _v512: any = await rt.send(_v511, "at", [_v509]);
                        acc = _v512;
                        const _v513: any = await rt.send(_v512, "quantity", [_v508]);
                        acc = _v513;
                        _v480 = _v513;
                      }
                      acc = _v480;
                    }
                    const _v514: any = rt.setLocal(111, 0, rt.op("+", rt.local(111, 0), 1));
                    acc = _v514;
                  }
                  _v457 = acc;
                  let _v515: any = acc;
                  const _v516: any = rt.global(414);
                  acc = _v516;
                  _v515 = _v516;
                  if (rt.truth(_v516)) {
                    const _v517: any = 15;
                    acc = _v517;
                    const _v518: any = rt.setGlobal(415, _v517);
                    acc = _v518;
                    _v515 = _v518;
                    const _v519: any = -4;
                    acc = _v519;
                    const _v520: any = await rt.call(0, "proc0_13", [_v519], this);
                    acc = _v520;
                    _v515 = _v520;
                    const _v521: any = 0;
                    acc = _v521;
                    const _v522: any = 215;
                    acc = _v522;
                    const _v523: any = 0;
                    acc = _v523;
                    const _v524: any = await rt.call(111, "ScriptID", [_v522, _v523], this);
                    acc = _v524;
                    const _v525: any = await rt.send(_v524, "init", [_v521]);
                    acc = _v525;
                    _v515 = _v525;
                    const _v526: any = await rt.call(1, "proc1_8", [], this);
                    acc = _v526;
                    _v515 = _v526;
                    const _v527: any = -1;
                    acc = _v527;
                    const _v528: any = 5;
                    acc = _v528;
                    const _v529: any = rt.global(477);
                    acc = _v529;
                    const _v530: any = await rt.send(_v529, "loop", [_v527]);
                    acc = _v530;
                    const _v531: any = await rt.send(_v529, "play", [_v528]);
                    acc = _v531;
                    _v515 = _v531;
                  }
                  acc = _v515;
                  _v457 = _v515;
                }
                acc = _v457;
                _v1 = _v457;
                const _v532: any = this;
                acc = _v532;
                const _v533: any = await rt.send(_v532, "cue", []);
                acc = _v533;
                _v1 = _v533;
                break _branch4;
              }
              const _v534: any = 7;
              acc = _v534;
              _v1 = rt.op("==", _v3, _v534);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v535: any = 1;
                acc = _v535;
                const _v536: any = rt.set(this, "cycles", _v535);
                acc = _v536;
                _v1 = _v536;
                break _branch4;
              }
              const _v537: any = 8;
              acc = _v537;
              _v1 = rt.op("==", _v3, _v537);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v538: any = 0;
                acc = _v538;
                const _v539: any = rt.setLocal(111, 6, _v538);
                acc = _v539;
                _v1 = _v539;
                const _v542: any = 5;
                acc = _v542;
                const _v543: any = rt.setLocal(111, 0, _v542);
                acc = _v543;
                _loop540: for (;;) {
                  const _v544: any = rt.local(111, 0);
                  acc = _v544;
                  const _v545: any = 1;
                  acc = _v545;
                  const _v546: any = rt.op(">=", ...[_v544, _v545]);
                  acc = _v546;
                  if (!rt.truth(_v546)) break _loop540;
                  _continue541: {
                    let _v547: any = acc;
                    let _v548: any = 1;
                    if (rt.truth(_v548)) {
                      const _v549: any = rt.local(111, 0);
                      acc = _v549;
                      const _v550: any = rt.global(302);
                      acc = _v550;
                      const _v551: any = await rt.send(_v550, "consumables", []);
                      acc = _v551;
                      const _v552: any = await rt.send(_v551, "objectAtIndex", [_v549]);
                      acc = _v552;
                      const _v553: any = rt.setLocal(111, 7, _v552);
                      acc = _v553;
                      _v548 = _v553;
                    }
                    if (rt.truth(_v548)) {
                      const _v554: any = rt.local(111, 7);
                      acc = _v554;
                      const _v555: any = await rt.send(_v554, "quantity", []);
                      acc = _v555;
                      _v548 = _v555;
                    }
                    if (rt.truth(_v548)) {
                      const _v556: any = rt.local(111, 6);
                      acc = _v556;
                      const _v557: any = rt.op("not", ...[_v556]);
                      acc = _v557;
                      _v548 = _v557;
                    }
                    acc = _v548;
                    _v547 = _v548;
                    if (rt.truth(_v548)) {
                      const _v558: any = rt.local(111, 0);
                      acc = _v558;
                      const _v559: any = rt.setLocal(111, 6, _v558);
                      acc = _v559;
                      _v547 = _v559;
                    }
                    acc = _v547;
                  }
                  const _v560: any = rt.setLocal(111, 0, rt.op("-", rt.local(111, 0), 1));
                  acc = _v560;
                }
                _v1 = acc;
                const _v561: any = this;
                acc = _v561;
                const _v562: any = await rt.send(_v561, "cue", []);
                acc = _v562;
                _v1 = _v562;
                break _branch4;
              }
              const _v563: any = 9;
              acc = _v563;
              _v1 = rt.op("==", _v3, _v563);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v564: any = 1;
                acc = _v564;
                const _v565: any = rt.set(this, "cycles", _v564);
                acc = _v565;
                _v1 = _v565;
                break _branch4;
              }
              const _v566: any = 10;
              acc = _v566;
              _v1 = rt.op("==", _v3, _v566);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v567: any = acc;
                let _v568: any = 1;
                if (rt.truth(_v568)) {
                  const _v569: any = 1;
                  acc = _v569;
                  const _v570: any = rt.global(302);
                  acc = _v570;
                  const _v571: any = await rt.send(_v570, "consumables", []);
                  acc = _v571;
                  const _v572: any = await rt.send(_v571, "objectAtIndex", [_v569]);
                  acc = _v572;
                  const _v573: any = rt.setLocal(111, 7, _v572);
                  acc = _v573;
                  _v568 = _v573;
                }
                if (rt.truth(_v568)) {
                  const _v574: any = rt.local(111, 7);
                  acc = _v574;
                  const _v575: any = await rt.send(_v574, "quantity", []);
                  acc = _v575;
                  _v568 = _v575;
                }
                acc = _v568;
                _v567 = _v568;
                if (rt.truth(_v568)) {
                  let _v576: any = acc;
                  _branch577: {
                    const _v578: any = 21;
                    acc = _v578;
                    const _v579: any = rt.global(302);
                    acc = _v579;
                    const _v580: any = await rt.send(_v579, "durables", []);
                    acc = _v580;
                    const _v581: any = await rt.send(_v580, "objectAtIndex", [_v578]);
                    acc = _v581;
                    const _v582: any = rt.op("not", ...[_v581]);
                    acc = _v582;
                    _v576 = _v582;
                    acc = _v576;
                    if (rt.truth(_v576)) {
                      let _v583: any = acc;
                      const _v584: any = rt.local(111, 6);
                      acc = _v584;
                      const _v585: any = 1;
                      acc = _v585;
                      const _v586: any = rt.op("==", ...[_v584, _v585]);
                      acc = _v586;
                      _v583 = _v586;
                      if (rt.truth(_v586)) {
                        const _v587: any = -1;
                        acc = _v587;
                        const _v588: any = rt.setLocal(111, 6, _v587);
                        acc = _v588;
                        _v583 = _v588;
                      }
                      acc = _v583;
                      _v576 = _v583;
                      const _v589: any = 0;
                      acc = _v589;
                      const _v590: any = rt.local(111, 7);
                      acc = _v590;
                      const _v591: any = await rt.send(_v590, "quantity", [_v589]);
                      acc = _v591;
                      _v576 = _v591;
                      const _v592: any = -2;
                      acc = _v592;
                      const _v593: any = await rt.call(0, "proc0_13", [_v592], this);
                      acc = _v593;
                      _v576 = _v593;
                      const _v594: any = rt.object(111, "moveNotice");
                      acc = _v594;
                      const _v595: any = 0;
                      acc = _v595;
                      const _v596: any = 8;
                      acc = _v596;
                      const _v597: any = this;
                      acc = _v597;
                      const _v598: any = await rt.send(_v597, "setScript", [_v594, _v595, _v596]);
                      acc = _v598;
                      _v576 = _v598;
                      return acc;
                      _v576 = acc;
                      break _branch577;
                    }
                    const _v599: any = 22;
                    acc = _v599;
                    const _v600: any = rt.global(302);
                    acc = _v600;
                    const _v601: any = await rt.send(_v600, "durables", []);
                    acc = _v601;
                    const _v602: any = await rt.send(_v601, "objectAtIndex", [_v599]);
                    acc = _v602;
                    const _v603: any = rt.op("not", ...[_v602]);
                    acc = _v603;
                    _v576 = _v603;
                    acc = _v576;
                    if (rt.truth(_v576)) {
                      let _v604: any = acc;
                      const _v605: any = rt.local(111, 7);
                      acc = _v605;
                      const _v606: any = await rt.send(_v605, "quantity", []);
                      acc = _v606;
                      const _v607: any = 6;
                      acc = _v607;
                      const _v608: any = rt.op(">", ...[_v606, _v607]);
                      acc = _v608;
                      _v604 = _v608;
                      if (rt.truth(_v608)) {
                        const _v609: any = -1;
                        acc = _v609;
                        const _v610: any = await rt.call(0, "proc0_13", [_v609], this);
                        acc = _v610;
                        _v604 = _v610;
                        const _v611: any = 6;
                        acc = _v611;
                        const _v612: any = rt.local(111, 7);
                        acc = _v612;
                        const _v613: any = await rt.send(_v612, "quantity", [_v611]);
                        acc = _v613;
                        _v604 = _v613;
                        const _v614: any = rt.object(111, "moveNotice");
                        acc = _v614;
                        const _v615: any = 0;
                        acc = _v615;
                        const _v616: any = 9;
                        acc = _v616;
                        const _v617: any = this;
                        acc = _v617;
                        const _v618: any = await rt.send(_v617, "setScript", [_v614, _v615, _v616]);
                        acc = _v618;
                        _v604 = _v618;
                        return acc;
                        _v604 = acc;
                      }
                      acc = _v604;
                      _v576 = _v604;
                      break _branch577;
                    }
                    const _v619: any = rt.local(111, 7);
                    acc = _v619;
                    const _v620: any = await rt.send(_v619, "quantity", []);
                    acc = _v620;
                    const _v621: any = 12;
                    acc = _v621;
                    const _v622: any = rt.op(">", ...[_v620, _v621]);
                    acc = _v622;
                    _v576 = _v622;
                    acc = _v576;
                    if (rt.truth(_v576)) {
                      const _v623: any = 12;
                      acc = _v623;
                      const _v624: any = rt.local(111, 7);
                      acc = _v624;
                      const _v625: any = await rt.send(_v624, "quantity", [_v623]);
                      acc = _v625;
                      _v576 = _v625;
                      const _v626: any = -1;
                      acc = _v626;
                      const _v627: any = await rt.call(0, "proc0_13", [_v626], this);
                      acc = _v627;
                      _v576 = _v627;
                      const _v628: any = rt.object(111, "moveNotice");
                      acc = _v628;
                      const _v629: any = 0;
                      acc = _v629;
                      const _v630: any = 9;
                      acc = _v630;
                      const _v631: any = this;
                      acc = _v631;
                      const _v632: any = await rt.send(_v631, "setScript", [_v628, _v629, _v630]);
                      acc = _v632;
                      _v576 = _v632;
                      return acc;
                      _v576 = acc;
                      break _branch577;
                    }
                  }
                  acc = _v576;
                  _v567 = _v576;
                }
                acc = _v567;
                _v1 = _v567;
                const _v633: any = this;
                acc = _v633;
                const _v634: any = await rt.send(_v633, "cue", []);
                acc = _v634;
                _v1 = _v634;
                break _branch4;
              }
              const _v635: any = 11;
              acc = _v635;
              _v1 = rt.op("==", _v3, _v635);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v636: any = 1;
                acc = _v636;
                const _v637: any = rt.set(this, "cycles", _v636);
                acc = _v637;
                _v1 = _v637;
                break _branch4;
              }
              const _v638: any = 12;
              acc = _v638;
              _v1 = rt.op("==", _v3, _v638);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v641: any = 5;
                acc = _v641;
                const _v642: any = rt.setLocal(111, 0, _v641);
                acc = _v642;
                _loop639: for (;;) {
                  const _v643: any = rt.local(111, 0);
                  acc = _v643;
                  const _v644: any = 2;
                  acc = _v644;
                  const _v645: any = rt.op(">", ...[_v643, _v644]);
                  acc = _v645;
                  if (!rt.truth(_v645)) break _loop639;
                  _continue640: {
                    let _v646: any = acc;
                    const _v647: any = rt.local(111, 0);
                    acc = _v647;
                    const _v648: any = rt.global(302);
                    acc = _v648;
                    const _v649: any = await rt.send(_v648, "consumables", []);
                    acc = _v649;
                    const _v650: any = await rt.send(_v649, "objectAtIndex", [_v647]);
                    acc = _v650;
                    const _v651: any = rt.setLocal(111, 7, _v650);
                    acc = _v651;
                    _v646 = _v651;
                    if (rt.truth(_v651)) {
                      const _v652: any = 0;
                      acc = _v652;
                      const _v653: any = rt.local(111, 7);
                      acc = _v653;
                      const _v654: any = await rt.send(_v653, "quantity", [_v652]);
                      acc = _v654;
                      _v646 = _v654;
                    }
                    acc = _v646;
                  }
                  const _v655: any = rt.setLocal(111, 0, rt.op("-", rt.local(111, 0), 1));
                  acc = _v655;
                }
                _v1 = acc;
                const _v656: any = 1;
                acc = _v656;
                const _v657: any = rt.setLocal(111, 4, _v656);
                acc = _v657;
                _v1 = _v657;
                let _v658: any = acc;
                const _v659: any = rt.local(111, 6);
                acc = _v659;
                const _v660: any = rt.op("not", ...[_v659]);
                acc = _v660;
                _v658 = _v660;
                if (rt.truth(_v660)) {
                  const _v661: any = -2;
                  acc = _v661;
                  const _v662: any = await rt.call(0, "proc0_13", [_v661], this);
                  acc = _v662;
                  _v658 = _v662;
                  const _v663: any = 0;
                  acc = _v663;
                  const _v664: any = 3;
                  acc = _v664;
                  const _v665: any = await rt.call(111, "Random", [_v663, _v664], this);
                  acc = _v665;
                  const _v666: any = rt.setLocal(111, 4, _v665);
                  acc = _v666;
                  _v658 = _v666;
                  const _v667: any = rt.object(111, "moveNotice");
                  acc = _v667;
                  const _v668: any = 0;
                  acc = _v668;
                  const _v669: any = 0;
                  acc = _v669;
                  const _v670: any = this;
                  acc = _v670;
                  const _v671: any = await rt.send(_v670, "setScript", [_v667, _v668, _v669]);
                  acc = _v671;
                  _v658 = _v671;
                  return acc;
                  _v658 = acc;
                }
                acc = _v658;
                _v1 = _v658;
                const _v672: any = this;
                acc = _v672;
                const _v673: any = await rt.send(_v672, "cue", []);
                acc = _v673;
                _v1 = _v673;
                break _branch4;
              }
              const _v674: any = 13;
              acc = _v674;
              _v1 = rt.op("==", _v3, _v674);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v675: any = 1;
                acc = _v675;
                const _v676: any = rt.set(this, "cycles", _v675);
                acc = _v676;
                _v1 = _v676;
                break _branch4;
              }
              const _v677: any = 14;
              acc = _v677;
              _v1 = rt.op("==", _v3, _v677);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v678: any = acc;
                const _v679: any = rt.local(111, 6);
                acc = _v679;
                const _v680: any = -1;
                acc = _v680;
                const _v681: any = rt.op("==", ...[_v679, _v680]);
                acc = _v681;
                _v678 = _v681;
                if (rt.truth(_v681)) {
                  const _v682: any = 0;
                  acc = _v682;
                  const _v683: any = 1;
                  acc = _v683;
                  const _v684: any = await rt.call(111, "Random", [_v682, _v683], this);
                  acc = _v684;
                  const _v685: any = rt.setLocal(111, 4, _v684);
                  acc = _v685;
                  _v678 = _v685;
                }
                acc = _v678;
                _v1 = _v678;
                let _v686: any = acc;
                let _v687: any = 1;
                if (rt.truth(_v687)) {
                  const _v688: any = rt.global(302);
                  acc = _v688;
                  const _v689: any = await rt.send(_v688, "relax", []);
                  acc = _v689;
                  const _v690: any = 10;
                  acc = _v690;
                  const _v691: any = rt.op("==", ...[_v689, _v690]);
                  acc = _v691;
                  _v687 = _v691;
                }
                if (rt.truth(_v687)) {
                  const _v692: any = 0;
                  acc = _v692;
                  const _v693: any = 4;
                  acc = _v693;
                  const _v694: any = await rt.call(111, "Random", [_v692, _v693], this);
                  acc = _v694;
                  const _v695: any = rt.op("not", ...[_v694]);
                  acc = _v695;
                  _v687 = _v695;
                }
                acc = _v687;
                _v686 = _v687;
                if (rt.truth(_v687)) {
                  const _v696: any = 0;
                  acc = _v696;
                  const _v697: any = rt.setLocal(111, 4, _v696);
                  acc = _v697;
                  _v686 = _v697;
                }
                acc = _v686;
                _v1 = _v686;
                const _v698: any = 200;
                acc = _v698;
                const _v699: any = (temps[1] = _v698);
                acc = _v699;
                _v1 = _v699;
                let _v700: any = acc;
                const _v701: any = await rt.call(0, "proc0_11", [], this);
                acc = _v701;
                const _v702: any = 500;
                acc = _v702;
                const _v703: any = rt.op("<", ...[_v701, _v702]);
                acc = _v703;
                _v700 = _v703;
                if (rt.truth(_v703)) {
                  const _v704: any = 50;
                  acc = _v704;
                  const _v705: any = (temps[1] = _v704);
                  acc = _v705;
                  _v700 = _v705;
                }
                acc = _v700;
                _v1 = _v700;
                let _v706: any = acc;
                const _v707: any = await rt.call(0, "proc0_11", [], this);
                acc = _v707;
                const _v708: any = (temps[1] ?? 0);
                acc = _v708;
                const _v709: any = rt.op("<", ...[_v707, _v708]);
                acc = _v709;
                _v706 = _v709;
                if (rt.truth(_v709)) {
                  const _v710: any = await rt.call(0, "proc0_11", [], this);
                  acc = _v710;
                  const _v711: any = (temps[1] = _v710);
                  acc = _v711;
                  _v706 = _v711;
                }
                acc = _v706;
                _v1 = _v706;
                let _v712: any = acc;
                let _v713: any = 1;
                if (rt.truth(_v713)) {
                  const _v714: any = await rt.call(0, "proc0_11", [], this);
                  acc = _v714;
                  const _v715: any = 0;
                  acc = _v715;
                  const _v716: any = rt.op(">", ...[_v714, _v715]);
                  acc = _v716;
                  _v713 = _v716;
                }
                if (rt.truth(_v713)) {
                  const _v717: any = rt.local(111, 4);
                  acc = _v717;
                  const _v718: any = rt.op("not", ...[_v717]);
                  acc = _v718;
                  _v713 = _v718;
                }
                acc = _v713;
                _v712 = _v713;
                if (rt.truth(_v713)) {
                  const _v719: any = -4;
                  acc = _v719;
                  const _v720: any = await rt.call(0, "proc0_13", [_v719], this);
                  acc = _v720;
                  _v712 = _v720;
                  let _v721: any = acc;
                  const _v722: any = (temps[1] ?? 0);
                  acc = _v722;
                  const _v723: any = 30;
                  acc = _v723;
                  const _v724: any = rt.op(">", ...[_v722, _v723]);
                  acc = _v724;
                  _v721 = _v724;
                  if (rt.truth(_v724)) {
                    const _v725: any = 30;
                    acc = _v725;
                    const _v726: any = (temps[1] ?? 0);
                    acc = _v726;
                    const _v727: any = await rt.call(111, "Random", [_v725, _v726], this);
                    acc = _v727;
                    _v721 = _v727;
                  } else {
                    const _v728: any = (temps[1] ?? 0);
                    acc = _v728;
                    _v721 = _v728;
                  }
                  acc = _v721;
                  const _v729: any = rt.setLocal(111, 8, _v721);
                  acc = _v729;
                  _v712 = _v729;
                  const _v730: any = 0;
                  acc = _v730;
                  const _v731: any = rt.local(111, 8);
                  acc = _v731;
                  const _v732: any = rt.op("-", ...[_v730, _v731]);
                  acc = _v732;
                  const _v733: any = await rt.call(0, "proc0_10", [_v732], this);
                  acc = _v733;
                  _v712 = _v733;
                  const _v734: any = rt.object(111, "moveNotice");
                  acc = _v734;
                  const _v735: any = 0;
                  acc = _v735;
                  const _v736: any = 3;
                  acc = _v736;
                  const _v737: any = rt.local(111, 8);
                  acc = _v737;
                  const _v738: any = this;
                  acc = _v738;
                  const _v739: any = await rt.send(_v738, "setScript", [_v734, _v735, _v736, _v737]);
                  acc = _v739;
                  _v712 = _v739;
                  return acc;
                  _v712 = acc;
                }
                acc = _v712;
                _v1 = _v712;
                const _v740: any = this;
                acc = _v740;
                const _v741: any = await rt.send(_v740, "cue", []);
                acc = _v741;
                _v1 = _v741;
                break _branch4;
              }
              const _v742: any = 15;
              acc = _v742;
              _v1 = rt.op("==", _v3, _v742);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v743: any = 1;
                acc = _v743;
                const _v744: any = rt.set(this, "cycles", _v743);
                acc = _v744;
                _v1 = _v744;
                break _branch4;
              }
              const _v745: any = 16;
              acc = _v745;
              _v1 = rt.op("==", _v3, _v745);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v746: any = 60;
                acc = _v746;
                const _v747: any = rt.global(302);
                acc = _v747;
                const _v748: any = await rt.send(_v747, "consumables", []);
                acc = _v748;
                const _v749: any = await rt.send(_v748, "eachElementDo", [_v746]);
                acc = _v749;
                _v1 = _v749;
                let _v750: any = acc;
                const _v751: any = rt.global(372);
                acc = _v751;
                const _v752: any = 4;
                acc = _v752;
                const _v753: any = rt.op("mod", ...[_v751, _v752]);
                acc = _v753;
                const _v754: any = rt.op("not", ...[_v753]);
                acc = _v754;
                _v750 = _v754;
                if (rt.truth(_v754)) {
                  let _v755: any = acc;
                  const _v756: any = rt.global(302);
                  acc = _v756;
                  const _v757: any = await rt.send(_v756, "livesAt", []);
                  acc = _v757;
                  const _v758: any = 0;
                  acc = _v758;
                  const _v759: any = rt.op("==", ...[_v757, _v758]);
                  acc = _v759;
                  _v755 = _v759;
                  if (rt.truth(_v759)) {
                    const _v760: any = 40;
                    acc = _v760;
                    _v755 = _v760;
                  } else {
                    const _v761: any = 41;
                    acc = _v761;
                    _v755 = _v761;
                  }
                  acc = _v755;
                  const _v762: any = rt.setLocal(111, 2, _v755);
                  acc = _v762;
                  _v750 = _v762;
                  let _v763: any = acc;
                  let _v764: any = 1;
                  if (rt.truth(_v764)) {
                    const _v765: any = rt.local(111, 2);
                    acc = _v765;
                    const _v766: any = rt.global(302);
                    acc = _v766;
                    const _v767: any = await rt.send(_v766, "consumables", []);
                    acc = _v767;
                    const _v768: any = await rt.send(_v767, "objectAtIndex", [_v765]);
                    acc = _v768;
                    const _v769: any = (temps[6] = _v768);
                    acc = _v769;
                    _v764 = _v769;
                  }
                  if (rt.truth(_v764)) {
                    const _v770: any = (temps[6] ?? 0);
                    acc = _v770;
                    const _v771: any = await rt.send(_v770, "quantity", []);
                    acc = _v771;
                    const _v772: any = rt.op("not", ...[_v771]);
                    acc = _v772;
                    _v764 = _v772;
                  }
                  acc = _v764;
                  _v763 = _v764;
                  if (rt.truth(_v764)) {
                    const _v773: any = rt.object(111, "moveNotice");
                    acc = _v773;
                    const _v774: any = 0;
                    acc = _v774;
                    const _v775: any = 2;
                    acc = _v775;
                    const _v776: any = rt.global(302);
                    acc = _v776;
                    const _v777: any = await rt.send(_v776, "curRent", []);
                    acc = _v777;
                    const _v778: any = this;
                    acc = _v778;
                    const _v779: any = await rt.send(_v778, "setScript", [_v773, _v774, _v775, _v777]);
                    acc = _v779;
                    _v763 = _v779;
                    const _v780: any = 1;
                    acc = _v780;
                    const _v781: any = rt.global(477);
                    acc = _v781;
                    const _v782: any = await rt.send(_v781, "pause", [_v780]);
                    acc = _v782;
                    _v763 = _v782;
                    const _v783: any = 27;
                    acc = _v783;
                    const _v784: any = rt.global(477);
                    acc = _v784;
                    const _v785: any = rt.global(476);
                    acc = _v785;
                    const _v786: any = await rt.send(_v785, "play", [_v783, _v784]);
                    acc = _v786;
                    _v763 = _v786;
                    const _v787: any = 0;
                    acc = _v787;
                    const _v788: any = rt.global(302);
                    acc = _v788;
                    const _v789: any = await rt.send(_v788, "turnedOver", [_v787]);
                    acc = _v789;
                    _v763 = _v789;
                    return acc;
                    _v763 = acc;
                  }
                  acc = _v763;
                  _v750 = _v763;
                }
                acc = _v750;
                _v1 = _v750;
                const _v790: any = this;
                acc = _v790;
                const _v791: any = await rt.send(_v790, "cue", []);
                acc = _v791;
                _v1 = _v791;
                break _branch4;
              }
              const _v792: any = 17;
              acc = _v792;
              _v1 = rt.op("==", _v3, _v792);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v793: any = 1;
                acc = _v793;
                const _v794: any = rt.set(this, "cycles", _v793);
                acc = _v794;
                _v1 = _v794;
                break _branch4;
              }
              const _v795: any = 18;
              acc = _v795;
              _v1 = rt.op("==", _v3, _v795);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v796: any = rt.global(302);
                acc = _v796;
                const _v797: any = await rt.send(_v796, "dressedForWork", []);
                acc = _v797;
                _v1 = _v797;
                let _v798: any = acc;
                const _v799: any = rt.global(302);
                acc = _v799;
                const _v800: any = await rt.send(_v799, "whichBody", []);
                acc = _v800;
                _branch801: {
                  const _v802: any = 0;
                  acc = _v802;
                  _v798 = rt.op("==", _v800, _v802);
                  acc = _v798;
                  if (rt.truth(_v798)) {
                    const _v803: any = 280;
                    acc = _v803;
                    _v798 = _v803;
                    break _branch801;
                  }
                  const _v804: any = 1;
                  acc = _v804;
                  _v798 = rt.op("==", _v800, _v804);
                  acc = _v798;
                  if (rt.truth(_v798)) {
                    const _v805: any = 284;
                    acc = _v805;
                    _v798 = _v805;
                    break _branch801;
                  }
                  const _v806: any = 2;
                  acc = _v806;
                  _v798 = rt.op("==", _v800, _v806);
                  acc = _v798;
                  if (rt.truth(_v798)) {
                    const _v807: any = 290;
                    acc = _v807;
                    _v798 = _v807;
                    break _branch801;
                  }
                  const _v808: any = 3;
                  acc = _v808;
                  _v798 = rt.op("==", _v800, _v808);
                  acc = _v798;
                  if (rt.truth(_v798)) {
                    const _v809: any = 294;
                    acc = _v809;
                    _v798 = _v809;
                    break _branch801;
                  }
                }
                acc = _v798;
                const _v810: any = (temps[8] = _v798);
                acc = _v810;
                _v1 = _v810;
                let _v811: any = acc;
                const _v812: any = rt.global(302);
                acc = _v812;
                const _v813: any = await rt.send(_v812, "playing", []);
                acc = _v813;
                const _v814: any = 29;
                acc = _v814;
                const _v815: any = rt.op("==", ...[_v813, _v814]);
                acc = _v815;
                _v811 = _v815;
                if (rt.truth(_v815)) {
                  const _v816: any = 274;
                  acc = _v816;
                  const _v817: any = (temps[8] = _v816);
                  acc = _v817;
                  _v811 = _v817;
                }
                acc = _v811;
                _v1 = _v811;
                let _v818: any = acc;
                const _v819: any = rt.global(302);
                acc = _v819;
                const _v820: any = await rt.send(_v819, "weeksOfClothing", []);
                acc = _v820;
                const _v821: any = rt.op("not", ...[_v820]);
                acc = _v821;
                _v818 = _v821;
                if (rt.truth(_v821)) {
                  const _v822: any = (temps[8] ?? 0);
                  acc = _v822;
                  const _v823: any = 3;
                  acc = _v823;
                  const _v824: any = rt.op("+", ...[_v822, _v823]);
                  acc = _v824;
                  _v818 = _v824;
                } else {
                  const _v825: any = (temps[8] ?? 0);
                  acc = _v825;
                  const _v826: any = rt.global(302);
                  acc = _v826;
                  const _v827: any = await rt.send(_v826, "wearing", []);
                  acc = _v827;
                  const _v828: any = 34;
                  acc = _v828;
                  const _v829: any = rt.op("-", ...[_v827, _v828]);
                  acc = _v829;
                  const _v830: any = rt.op("+", ...[_v825, _v829]);
                  acc = _v830;
                  _v818 = _v830;
                }
                acc = _v818;
                const _v831: any = rt.global(303);
                acc = _v831;
                const _v832: any = await rt.send(_v831, "view", [_v818]);
                acc = _v832;
                _v1 = _v832;
                let _v833: any = acc;
                const _v834: any = rt.global(302);
                acc = _v834;
                const _v835: any = await rt.send(_v834, "weeksOfClothing", []);
                acc = _v835;
                const _v836: any = 1;
                acc = _v836;
                const _v837: any = rt.op("==", ...[_v835, _v836]);
                acc = _v837;
                _v833 = _v837;
                if (rt.truth(_v837)) {
                  const _v838: any = rt.object(111, "moveNotice");
                  acc = _v838;
                  const _v839: any = 0;
                  acc = _v839;
                  const _v840: any = 6;
                  acc = _v840;
                  const _v841: any = this;
                  acc = _v841;
                  const _v842: any = await rt.send(_v841, "setScript", [_v838, _v839, _v840]);
                  acc = _v842;
                  _v833 = _v842;
                  return acc;
                  _v833 = acc;
                }
                acc = _v833;
                _v1 = _v833;
                const _v843: any = this;
                acc = _v843;
                const _v844: any = await rt.send(_v843, "cue", []);
                acc = _v844;
                _v1 = _v844;
                break _branch4;
              }
              const _v845: any = 19;
              acc = _v845;
              _v1 = rt.op("==", _v3, _v845);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v846: any = 1;
                acc = _v846;
                const _v847: any = rt.set(this, "cycles", _v846);
                acc = _v847;
                _v1 = _v847;
                break _branch4;
              }
              const _v848: any = 20;
              acc = _v848;
              _v1 = rt.op("==", _v3, _v848);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v849: any = acc;
                let _v850: any = 1;
                if (rt.truth(_v850)) {
                  const _v851: any = rt.global(372);
                  acc = _v851;
                  const _v852: any = 4;
                  acc = _v852;
                  const _v853: any = rt.op("mod", ...[_v851, _v852]);
                  acc = _v853;
                  const _v854: any = rt.op("not", ...[_v853]);
                  acc = _v854;
                  _v850 = _v854;
                }
                if (rt.truth(_v850)) {
                  const _v855: any = rt.global(302);
                  acc = _v855;
                  const _v856: any = await rt.send(_v855, "loanBal", []);
                  acc = _v856;
                  _v850 = _v856;
                }
                acc = _v850;
                _v849 = _v850;
                if (rt.truth(_v850)) {
                  let _v857: any = acc;
                  _branch858: {
                    const _v859: any = rt.global(302);
                    acc = _v859;
                    const _v860: any = await rt.send(_v859, "paySched", []);
                    acc = _v860;
                    const _v861: any = rt.op("not", ...[_v860]);
                    acc = _v861;
                    _v857 = _v861;
                    acc = _v857;
                    if (rt.truth(_v857)) {
                      const _v862: any = rt.object(111, "moveNotice");
                      acc = _v862;
                      const _v863: any = 0;
                      acc = _v863;
                      const _v864: any = 5;
                      acc = _v864;
                      const _v865: any = this;
                      acc = _v865;
                      const _v866: any = await rt.send(_v865, "setScript", [_v862, _v863, _v864]);
                      acc = _v866;
                      _v857 = _v866;
                      return acc;
                      _v857 = acc;
                      break _branch858;
                    }
                    const _v867: any = rt.global(302);
                    acc = _v867;
                    const _v868: any = await rt.send(_v867, "paySched", []);
                    acc = _v868;
                    const _v869: any = 0;
                    acc = _v869;
                    const _v870: any = rt.op("<", ...[_v868, _v869]);
                    acc = _v870;
                    _v857 = _v870;
                    acc = _v857;
                    if (rt.truth(_v857)) {
                      const _v871: any = -1;
                      acc = _v871;
                      const _v872: any = await rt.call(0, "proc0_13", [_v871], this);
                      acc = _v872;
                      _v857 = _v872;
                      const _v873: any = rt.object(111, "moveNotice");
                      acc = _v873;
                      const _v874: any = 0;
                      acc = _v874;
                      const _v875: any = 4;
                      acc = _v875;
                      const _v876: any = this;
                      acc = _v876;
                      const _v877: any = await rt.send(_v876, "setScript", [_v873, _v874, _v875]);
                      acc = _v877;
                      _v857 = _v877;
                      return acc;
                      _v857 = acc;
                      break _branch858;
                    }
                  }
                  acc = _v857;
                  _v849 = _v857;
                }
                acc = _v849;
                _v1 = _v849;
                const _v878: any = this;
                acc = _v878;
                const _v879: any = await rt.send(_v878, "cue", []);
                acc = _v879;
                _v1 = _v879;
                break _branch4;
              }
              const _v880: any = 21;
              acc = _v880;
              _v1 = rt.op("==", _v3, _v880);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v881: any = 1;
                acc = _v881;
                const _v882: any = rt.set(this, "cycles", _v881);
                acc = _v882;
                _v1 = _v882;
                break _branch4;
              }
              const _v883: any = 22;
              acc = _v883;
              _v1 = rt.op("==", _v3, _v883);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v884: any = 33;
                acc = _v884;
                const _v885: any = rt.global(302);
                acc = _v885;
                const _v886: any = await rt.send(_v885, "durables", []);
                acc = _v886;
                const _v887: any = await rt.send(_v886, "objectAtIndexQuan", [_v884]);
                acc = _v887;
                const _v888: any = rt.setLocal(111, 13, _v887);
                acc = _v888;
                _v1 = _v888;
                const _v889: any = 32;
                acc = _v889;
                const _v890: any = rt.global(302);
                acc = _v890;
                const _v891: any = await rt.send(_v890, "durables", []);
                acc = _v891;
                const _v892: any = await rt.send(_v891, "objectAtIndexQuan", [_v889]);
                acc = _v892;
                const _v893: any = rt.setLocal(111, 14, _v892);
                acc = _v893;
                _v1 = _v893;
                const _v894: any = 31;
                acc = _v894;
                const _v895: any = rt.global(302);
                acc = _v895;
                const _v896: any = await rt.send(_v895, "durables", []);
                acc = _v896;
                const _v897: any = await rt.send(_v896, "objectAtIndexQuan", [_v894]);
                acc = _v897;
                const _v898: any = rt.setLocal(111, 15, _v897);
                acc = _v898;
                _v1 = _v898;
                const _v901: any = 0;
                acc = _v901;
                const _v902: any = rt.setLocal(111, 0, _v901);
                acc = _v902;
                _loop899: for (;;) {
                  const _v903: any = rt.local(111, 0);
                  acc = _v903;
                  const _v904: any = rt.global(302);
                  acc = _v904;
                  const _v905: any = await rt.send(_v904, "durables", []);
                  acc = _v905;
                  const _v906: any = await rt.send(_v905, "size", []);
                  acc = _v906;
                  const _v907: any = rt.op("<", ...[_v903, _v906]);
                  acc = _v907;
                  if (!rt.truth(_v907)) break _loop899;
                  _continue900: {
                    let _v908: any = acc;
                    let _v909: any = 1;
                    if (rt.truth(_v909)) {
                      const _v910: any = await rt.call(0, "proc0_11", [], this);
                      acc = _v910;
                      const _v911: any = 500;
                      acc = _v911;
                      const _v912: any = rt.op(">", ...[_v910, _v911]);
                      acc = _v912;
                      _v909 = _v912;
                    }
                    if (rt.truth(_v909)) {
                      const _v913: any = rt.local(111, 0);
                      acc = _v913;
                      const _v914: any = rt.global(302);
                      acc = _v914;
                      const _v915: any = await rt.send(_v914, "durables", []);
                      acc = _v915;
                      const _v916: any = await rt.send(_v915, "at", [_v913]);
                      acc = _v916;
                      const _v917: any = await rt.send(_v916, "indexNum", []);
                      acc = _v917;
                      const _v918: any = 33;
                      acc = _v918;
                      const _v919: any = rt.op("!=", ...[_v917, _v918]);
                      acc = _v919;
                      _v909 = _v919;
                    }
                    if (rt.truth(_v909)) {
                      const _v920: any = rt.local(111, 0);
                      acc = _v920;
                      const _v921: any = rt.global(302);
                      acc = _v921;
                      const _v922: any = await rt.send(_v921, "durables", []);
                      acc = _v922;
                      const _v923: any = await rt.send(_v922, "at", [_v920]);
                      acc = _v923;
                      const _v924: any = await rt.send(_v923, "indexNum", []);
                      acc = _v924;
                      const _v925: any = 31;
                      acc = _v925;
                      const _v926: any = rt.op("!=", ...[_v924, _v925]);
                      acc = _v926;
                      _v909 = _v926;
                    }
                    if (rt.truth(_v909)) {
                      const _v927: any = rt.local(111, 0);
                      acc = _v927;
                      const _v928: any = rt.global(302);
                      acc = _v928;
                      const _v929: any = await rt.send(_v928, "durables", []);
                      acc = _v929;
                      const _v930: any = await rt.send(_v929, "at", [_v927]);
                      acc = _v930;
                      const _v931: any = await rt.send(_v930, "indexNum", []);
                      acc = _v931;
                      const _v932: any = 32;
                      acc = _v932;
                      const _v933: any = rt.op("!=", ...[_v931, _v932]);
                      acc = _v933;
                      _v909 = _v933;
                    }
                    if (rt.truth(_v909)) {
                      const _v934: any = rt.local(111, 0);
                      acc = _v934;
                      const _v935: any = rt.global(302);
                      acc = _v935;
                      const _v936: any = await rt.send(_v935, "durables", []);
                      acc = _v936;
                      const _v937: any = await rt.send(_v936, "at", [_v934]);
                      acc = _v937;
                      const _v938: any = await rt.send(_v937, "attributes", []);
                      acc = _v938;
                      const _v939: any = 64;
                      acc = _v939;
                      const _v940: any = rt.op("&", ...[_v938, _v939]);
                      acc = _v940;
                      _v909 = _v940;
                    }
                    if (rt.truth(_v909)) {
                      let _v941: any = 0;
                      if (!rt.truth(_v941)) {
                        const _v942: any = rt.local(111, 0);
                        acc = _v942;
                        const _v943: any = rt.global(302);
                        acc = _v943;
                        const _v944: any = await rt.send(_v943, "durables", []);
                        acc = _v944;
                        const _v945: any = await rt.send(_v944, "at", [_v942]);
                        acc = _v945;
                        const _v946: any = await rt.send(_v945, "attributes", []);
                        acc = _v946;
                        const _v947: any = 56;
                        acc = _v947;
                        const _v948: any = rt.op("&", ...[_v946, _v947]);
                        acc = _v948;
                        const _v949: any = rt.op("not", ...[_v948]);
                        acc = _v949;
                        _v941 = _v949;
                      }
                      if (!rt.truth(_v941)) {
                        const _v950: any = rt.local(111, 0);
                        acc = _v950;
                        const _v951: any = rt.global(302);
                        acc = _v951;
                        const _v952: any = await rt.send(_v951, "durables", []);
                        acc = _v952;
                        const _v953: any = await rt.send(_v952, "at", [_v950]);
                        acc = _v953;
                        const _v954: any = await rt.send(_v953, "quantity", []);
                        acc = _v954;
                        const _v955: any = 1;
                        acc = _v955;
                        const _v956: any = rt.op(">", ...[_v954, _v955]);
                        acc = _v956;
                        _v941 = _v956;
                      }
                      acc = _v941;
                      _v909 = _v941;
                    }
                    acc = _v909;
                    _v908 = _v909;
                    if (rt.truth(_v909)) {
                      let _v957: any = acc;
                      const _v958: any = rt.local(111, 0);
                      acc = _v958;
                      const _v959: any = rt.global(302);
                      acc = _v959;
                      const _v960: any = await rt.send(_v959, "durables", []);
                      acc = _v960;
                      const _v961: any = await rt.send(_v960, "at", [_v958]);
                      acc = _v961;
                      const _v962: any = await rt.send(_v961, "attributes", []);
                      acc = _v962;
                      const _v963: any = 256;
                      acc = _v963;
                      const _v964: any = rt.op("&", ...[_v962, _v963]);
                      acc = _v964;
                      _v957 = _v964;
                      if (rt.truth(_v964)) {
                        const _v965: any = 35;
                        acc = _v965;
                        _v957 = _v965;
                      } else {
                        const _v966: any = 50;
                        acc = _v966;
                        _v957 = _v966;
                      }
                      acc = _v957;
                      const _v967: any = rt.setLocal(111, 9, _v957);
                      acc = _v967;
                      _v908 = _v967;
                      let _v968: any = acc;
                      const _v969: any = 0;
                      acc = _v969;
                      const _v970: any = rt.local(111, 9);
                      acc = _v970;
                      const _v971: any = await rt.call(111, "Random", [_v969, _v970], this);
                      acc = _v971;
                      const _v972: any = rt.op("not", ...[_v971]);
                      acc = _v972;
                      _v968 = _v972;
                      if (rt.truth(_v972)) {
                        const _v973: any = rt.local(111, 0);
                        acc = _v973;
                        const _v974: any = rt.global(302);
                        acc = _v974;
                        const _v975: any = await rt.send(_v974, "durables", []);
                        acc = _v975;
                        const _v976: any = await rt.send(_v975, "at", [_v973]);
                        acc = _v976;
                        const _v977: any = await rt.send(_v976, "pricePaid", []);
                        acc = _v977;
                        const _v978: any = 20;
                        acc = _v978;
                        const _v979: any = rt.op("/", ...[_v977, _v978]);
                        acc = _v979;
                        const _v980: any = rt.local(111, 0);
                        acc = _v980;
                        const _v981: any = rt.global(302);
                        acc = _v981;
                        const _v982: any = await rt.send(_v981, "durables", []);
                        acc = _v982;
                        const _v983: any = await rt.send(_v982, "at", [_v980]);
                        acc = _v983;
                        const _v984: any = await rt.send(_v983, "pricePaid", []);
                        acc = _v984;
                        const _v985: any = 4;
                        acc = _v985;
                        const _v986: any = rt.op("/", ...[_v984, _v985]);
                        acc = _v986;
                        const _v987: any = await rt.call(111, "Random", [_v979, _v986], this);
                        acc = _v987;
                        const _v988: any = rt.setLocal(111, 10, _v987);
                        acc = _v988;
                        _v968 = _v988;
                        const _v989: any = -1;
                        acc = _v989;
                        const _v990: any = await rt.call(0, "proc0_13", [_v989], this);
                        acc = _v990;
                        _v968 = _v990;
                        const _v991: any = 0;
                        acc = _v991;
                        const _v992: any = rt.local(111, 10);
                        acc = _v992;
                        const _v993: any = rt.op("-", ...[_v991, _v992]);
                        acc = _v993;
                        const _v994: any = await rt.call(0, "proc0_10", [_v993], this);
                        acc = _v994;
                        _v968 = _v994;
                        const _v995: any = rt.object(111, "moveNotice");
                        acc = _v995;
                        const _v996: any = 0;
                        acc = _v996;
                        const _v997: any = 1;
                        acc = _v997;
                        const _v998: any = rt.local(111, 10);
                        acc = _v998;
                        const _v999: any = this;
                        acc = _v999;
                        const _v1000: any = await rt.send(_v999, "setScript", [_v995, _v996, _v997, _v998]);
                        acc = _v1000;
                        _v968 = _v1000;
                        return acc;
                        _v968 = acc;
                      }
                      acc = _v968;
                      _v908 = _v968;
                    }
                    acc = _v908;
                  }
                  const _v1001: any = rt.setLocal(111, 0, rt.op("+", rt.local(111, 0), 1));
                  acc = _v1001;
                }
                _v1 = acc;
                const _v1002: any = this;
                acc = _v1002;
                const _v1003: any = await rt.send(_v1002, "cue", []);
                acc = _v1003;
                _v1 = _v1003;
                break _branch4;
              }
              const _v1004: any = 23;
              acc = _v1004;
              _v1 = rt.op("==", _v3, _v1004);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v1005: any = 1;
                acc = _v1005;
                const _v1006: any = rt.set(this, "cycles", _v1005);
                acc = _v1006;
                _v1 = _v1006;
                break _branch4;
              }
              const _v1007: any = 24;
              acc = _v1007;
              _v1 = rt.op("==", _v3, _v1007);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v1008: any = 0;
                if (!rt.truth(_v1008)) {
                  const _v1009: any = rt.global(302);
                  acc = _v1009;
                  const _v1010: any = await rt.send(_v1009, "invAssHi", []);
                  acc = _v1010;
                  _v1008 = _v1010;
                }
                if (!rt.truth(_v1008)) {
                  const _v1011: any = rt.global(302);
                  acc = _v1011;
                  const _v1012: any = await rt.send(_v1011, "invAss", []);
                  acc = _v1012;
                  const _v1013: any = 1000;
                  acc = _v1013;
                  const _v1014: any = rt.op(">", ...[_v1012, _v1013]);
                  acc = _v1014;
                  _v1008 = _v1014;
                }
                acc = _v1008;
                const _v1015: any = (temps[0] = _v1008);
                acc = _v1015;
                _v1 = _v1015;
                let _v1016: any = acc;
                const _v1017: any = rt.global(373);
                acc = _v1017;
                _branch1018: {
                  const _v1019: any = 1;
                  acc = _v1019;
                  _v1016 = rt.op("==", _v1017, _v1019);
                  acc = _v1016;
                  if (rt.truth(_v1016)) {
                    const _v1020: any = 1;
                    acc = _v1020;
                    const _v1021: any = rt.setGlobal(415, _v1020);
                    acc = _v1021;
                    _v1016 = _v1021;
                    const _v1022: any = -3;
                    acc = _v1022;
                    const _v1023: any = await rt.call(0, "proc0_13", [_v1022], this);
                    acc = _v1023;
                    _v1016 = _v1023;
                    let _v1024: any = acc;
                    const _v1025: any = (temps[0] ?? 0);
                    acc = _v1025;
                    _v1024 = _v1025;
                    if (rt.truth(_v1025)) {
                      const _v1026: any = -5;
                      acc = _v1026;
                      const _v1027: any = await rt.call(0, "proc0_13", [_v1026], this);
                      acc = _v1027;
                      _v1024 = _v1027;
                    }
                    acc = _v1024;
                    _v1016 = _v1024;
                    const _v1028: any = 0;
                    acc = _v1028;
                    const _v1029: any = 215;
                    acc = _v1029;
                    const _v1030: any = 0;
                    acc = _v1030;
                    const _v1031: any = await rt.call(111, "ScriptID", [_v1029, _v1030], this);
                    acc = _v1031;
                    const _v1032: any = await rt.send(_v1031, "init", [_v1028]);
                    acc = _v1032;
                    _v1016 = _v1032;
                    const _v1033: any = await rt.call(1, "proc1_8", [], this);
                    acc = _v1033;
                    _v1016 = _v1033;
                    const _v1034: any = -1;
                    acc = _v1034;
                    const _v1035: any = 5;
                    acc = _v1035;
                    const _v1036: any = rt.global(477);
                    acc = _v1036;
                    const _v1037: any = await rt.send(_v1036, "loop", [_v1034]);
                    acc = _v1037;
                    const _v1038: any = await rt.send(_v1036, "play", [_v1035]);
                    acc = _v1038;
                    _v1016 = _v1038;
                    break _branch1018;
                  }
                  const _v1039: any = 2;
                  acc = _v1039;
                  _v1016 = rt.op("==", _v1017, _v1039);
                  acc = _v1016;
                  if (rt.truth(_v1016)) {
                    const _v1040: any = 2;
                    acc = _v1040;
                    const _v1041: any = rt.setGlobal(415, _v1040);
                    acc = _v1041;
                    _v1016 = _v1041;
                    const _v1042: any = -2;
                    acc = _v1042;
                    const _v1043: any = await rt.call(0, "proc0_13", [_v1042], this);
                    acc = _v1043;
                    _v1016 = _v1043;
                    let _v1044: any = acc;
                    const _v1045: any = (temps[0] ?? 0);
                    acc = _v1045;
                    _v1044 = _v1045;
                    if (rt.truth(_v1045)) {
                      const _v1046: any = -2;
                      acc = _v1046;
                      const _v1047: any = await rt.call(0, "proc0_13", [_v1046], this);
                      acc = _v1047;
                      _v1044 = _v1047;
                    }
                    acc = _v1044;
                    _v1016 = _v1044;
                    const _v1048: any = 0;
                    acc = _v1048;
                    const _v1049: any = 215;
                    acc = _v1049;
                    const _v1050: any = 0;
                    acc = _v1050;
                    const _v1051: any = await rt.call(111, "ScriptID", [_v1049, _v1050], this);
                    acc = _v1051;
                    const _v1052: any = await rt.send(_v1051, "init", [_v1048]);
                    acc = _v1052;
                    _v1016 = _v1052;
                    const _v1053: any = await rt.call(1, "proc1_8", [], this);
                    acc = _v1053;
                    _v1016 = _v1053;
                    const _v1054: any = -1;
                    acc = _v1054;
                    const _v1055: any = 5;
                    acc = _v1055;
                    const _v1056: any = rt.global(477);
                    acc = _v1056;
                    const _v1057: any = await rt.send(_v1056, "loop", [_v1054]);
                    acc = _v1057;
                    const _v1058: any = await rt.send(_v1056, "play", [_v1055]);
                    acc = _v1058;
                    _v1016 = _v1058;
                    break _branch1018;
                  }
                  const _v1059: any = 3;
                  acc = _v1059;
                  _v1016 = rt.op("==", _v1017, _v1059);
                  acc = _v1016;
                  if (rt.truth(_v1016)) {
                    const _v1060: any = 3;
                    acc = _v1060;
                    const _v1061: any = rt.setGlobal(415, _v1060);
                    acc = _v1061;
                    _v1016 = _v1061;
                    const _v1062: any = -1;
                    acc = _v1062;
                    const _v1063: any = await rt.call(0, "proc0_13", [_v1062], this);
                    acc = _v1063;
                    _v1016 = _v1063;
                    let _v1064: any = acc;
                    const _v1065: any = (temps[0] ?? 0);
                    acc = _v1065;
                    _v1064 = _v1065;
                    if (rt.truth(_v1065)) {
                      const _v1066: any = -1;
                      acc = _v1066;
                      const _v1067: any = await rt.call(0, "proc0_13", [_v1066], this);
                      acc = _v1067;
                      _v1064 = _v1067;
                    }
                    acc = _v1064;
                    _v1016 = _v1064;
                    const _v1068: any = 0;
                    acc = _v1068;
                    const _v1069: any = 215;
                    acc = _v1069;
                    const _v1070: any = 0;
                    acc = _v1070;
                    const _v1071: any = await rt.call(111, "ScriptID", [_v1069, _v1070], this);
                    acc = _v1071;
                    const _v1072: any = await rt.send(_v1071, "init", [_v1068]);
                    acc = _v1072;
                    _v1016 = _v1072;
                    const _v1073: any = await rt.call(1, "proc1_8", [], this);
                    acc = _v1073;
                    _v1016 = _v1073;
                    const _v1074: any = -1;
                    acc = _v1074;
                    const _v1075: any = 5;
                    acc = _v1075;
                    const _v1076: any = rt.global(477);
                    acc = _v1076;
                    const _v1077: any = await rt.send(_v1076, "loop", [_v1074]);
                    acc = _v1077;
                    const _v1078: any = await rt.send(_v1076, "play", [_v1075]);
                    acc = _v1078;
                    _v1016 = _v1078;
                    break _branch1018;
                  }
                  let _v1079: any = acc;
                  const _v1080: any = rt.global(444);
                  acc = _v1080;
                  _v1079 = _v1080;
                  if (rt.truth(_v1080)) {
                    let _v1081: any = acc;
                    const _v1082: any = (temps[0] ?? 0);
                    acc = _v1082;
                    _v1081 = _v1082;
                    if (rt.truth(_v1082)) {
                      const _v1083: any = 5;
                      acc = _v1083;
                      const _v1084: any = await rt.call(0, "proc0_13", [_v1083], this);
                      acc = _v1084;
                      _v1081 = _v1084;
                    }
                    acc = _v1081;
                    _v1079 = _v1081;
                    const _v1085: any = 4;
                    acc = _v1085;
                    const _v1086: any = rt.setGlobal(415, _v1085);
                    acc = _v1086;
                    _v1079 = _v1086;
                    const _v1087: any = 0;
                    acc = _v1087;
                    const _v1088: any = 215;
                    acc = _v1088;
                    const _v1089: any = 0;
                    acc = _v1089;
                    const _v1090: any = await rt.call(111, "ScriptID", [_v1088, _v1089], this);
                    acc = _v1090;
                    const _v1091: any = await rt.send(_v1090, "init", [_v1087]);
                    acc = _v1091;
                    _v1079 = _v1091;
                    const _v1092: any = await rt.call(1, "proc1_8", [], this);
                    acc = _v1092;
                    _v1079 = _v1092;
                    const _v1093: any = -1;
                    acc = _v1093;
                    const _v1094: any = 5;
                    acc = _v1094;
                    const _v1095: any = rt.global(477);
                    acc = _v1095;
                    const _v1096: any = await rt.send(_v1095, "loop", [_v1093]);
                    acc = _v1096;
                    const _v1097: any = await rt.send(_v1095, "play", [_v1094]);
                    acc = _v1097;
                    _v1079 = _v1097;
                  }
                  acc = _v1079;
                  _v1016 = _v1079;
                  break _branch1018;
                }
                acc = _v1016;
                _v1 = _v1016;
                const _v1098: any = this;
                acc = _v1098;
                const _v1099: any = await rt.send(_v1098, "cue", []);
                acc = _v1099;
                _v1 = _v1099;
                break _branch4;
              }
              const _v1100: any = 25;
              acc = _v1100;
              _v1 = rt.op("==", _v3, _v1100);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v1101: any = 1;
                acc = _v1101;
                const _v1102: any = rt.set(this, "cycles", _v1101);
                acc = _v1102;
                _v1 = _v1102;
                break _branch4;
              }
              const _v1103: any = 26;
              acc = _v1103;
              _v1 = rt.op("==", _v3, _v1103);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v1104: any = acc;
                let _v1105: any = 1;
                if (rt.truth(_v1105)) {
                  const _v1106: any = 0;
                  acc = _v1106;
                  const _v1107: any = 1;
                  acc = _v1107;
                  const _v1108: any = 2;
                  acc = _v1108;
                  const _v1109: any = await rt.call(111, "ScriptID", [_v1107, _v1108], this);
                  acc = _v1109;
                  const _v1110: any = await rt.send(_v1109, "at", [_v1106]);
                  acc = _v1110;
                  const _v1111: any = await rt.send(_v1110, "finishStatus", []);
                  acc = _v1111;
                  const _v1112: any = rt.op("not", ...[_v1111]);
                  acc = _v1112;
                  _v1105 = _v1112;
                }
                if (rt.truth(_v1105)) {
                  const _v1113: any = 1;
                  acc = _v1113;
                  let _v1114: any = _v1113;
                  let _v1115: any = 1;
                  if (rt.truth(_v1115)) {
                    const _v1116: any = rt.global(373);
                    acc = _v1116;
                    _v1115 = rt.op("<=", _v1114, _v1116);
                    _v1114 = _v1116;
                  }
                  if (rt.truth(_v1115)) {
                    const _v1117: any = 2;
                    acc = _v1117;
                    _v1115 = rt.op("<=", _v1114, _v1117);
                    _v1114 = _v1117;
                  }
                  acc = _v1115;
                  _v1105 = _v1115;
                }
                acc = _v1105;
                _v1104 = _v1105;
                if (rt.truth(_v1105)) {
                  const _v1118: any = 0;
                  acc = _v1118;
                  const _v1119: any = 1;
                  acc = _v1119;
                  const _v1120: any = 2;
                  acc = _v1120;
                  const _v1121: any = await rt.call(111, "ScriptID", [_v1119, _v1120], this);
                  acc = _v1121;
                  const _v1122: any = await rt.send(_v1121, "at", [_v1118]);
                  acc = _v1122;
                  const _v1123: any = rt.setGlobal(480, _v1122);
                  acc = _v1123;
                  _v1104 = _v1123;
                  let _v1124: any = acc;
                  const _v1125: any = rt.global(373);
                  acc = _v1125;
                  const _v1126: any = 0;
                  acc = _v1126;
                  const _v1127: any = 1;
                  acc = _v1127;
                  const _v1128: any = 2;
                  acc = _v1128;
                  const _v1129: any = await rt.call(111, "ScriptID", [_v1127, _v1128], this);
                  acc = _v1129;
                  const _v1130: any = await rt.send(_v1129, "at", [_v1126]);
                  acc = _v1130;
                  const _v1131: any = await rt.send(_v1130, "doScandal", [_v1125]);
                  acc = _v1131;
                  _branch1132: {
                    const _v1133: any = 1;
                    acc = _v1133;
                    _v1124 = rt.op("==", _v1131, _v1133);
                    acc = _v1124;
                    if (rt.truth(_v1124)) {
                      const _v1134: any = -7;
                      acc = _v1134;
                      const _v1135: any = 0;
                      acc = _v1135;
                      const _v1136: any = 1;
                      acc = _v1136;
                      const _v1137: any = 2;
                      acc = _v1137;
                      const _v1138: any = await rt.call(111, "ScriptID", [_v1136, _v1137], this);
                      acc = _v1138;
                      const _v1139: any = await rt.send(_v1138, "at", [_v1135]);
                      acc = _v1139;
                      const _v1140: any = await rt.call(0, "proc0_13", [_v1134, _v1139], this);
                      acc = _v1140;
                      _v1124 = _v1140;
                      const _v1141: any = rt.object(111, "moveNotice");
                      acc = _v1141;
                      const _v1142: any = 0;
                      acc = _v1142;
                      const _v1143: any = 7;
                      acc = _v1143;
                      const _v1144: any = this;
                      acc = _v1144;
                      const _v1145: any = await rt.send(_v1144, "setScript", [_v1141, _v1142, _v1143]);
                      acc = _v1145;
                      _v1124 = _v1145;
                      const _v1146: any = 30;
                      acc = _v1146;
                      const _v1147: any = rt.global(476);
                      acc = _v1147;
                      const _v1148: any = await rt.send(_v1147, "play", [_v1146]);
                      acc = _v1148;
                      _v1124 = _v1148;
                      return acc;
                      _v1124 = acc;
                      break _branch1132;
                    }
                    const _v1149: any = -1;
                    acc = _v1149;
                    _v1124 = rt.op("==", _v1131, _v1149);
                    acc = _v1124;
                    if (rt.truth(_v1124)) {
                      const _v1150: any = -3;
                      acc = _v1150;
                      const _v1151: any = 0;
                      acc = _v1151;
                      const _v1152: any = 1;
                      acc = _v1152;
                      const _v1153: any = 2;
                      acc = _v1153;
                      const _v1154: any = await rt.call(111, "ScriptID", [_v1152, _v1153], this);
                      acc = _v1154;
                      const _v1155: any = await rt.send(_v1154, "at", [_v1151]);
                      acc = _v1155;
                      const _v1156: any = await rt.call(0, "proc0_13", [_v1150, _v1155], this);
                      acc = _v1156;
                      _v1124 = _v1156;
                      const _v1157: any = rt.object(111, "moveNotice");
                      acc = _v1157;
                      const _v1158: any = 0;
                      acc = _v1158;
                      const _v1159: any = 11;
                      acc = _v1159;
                      const _v1160: any = 0;
                      acc = _v1160;
                      const _v1161: any = 1;
                      acc = _v1161;
                      const _v1162: any = 2;
                      acc = _v1162;
                      const _v1163: any = await rt.call(111, "ScriptID", [_v1161, _v1162], this);
                      acc = _v1163;
                      const _v1164: any = await rt.send(_v1163, "at", [_v1160]);
                      acc = _v1164;
                      const _v1165: any = await rt.send(_v1164, "wage", []);
                      acc = _v1165;
                      const _v1166: any = this;
                      acc = _v1166;
                      const _v1167: any = await rt.send(_v1166, "setScript", [_v1157, _v1158, _v1159, _v1165]);
                      acc = _v1167;
                      _v1124 = _v1167;
                      return acc;
                      _v1124 = acc;
                      break _branch1132;
                    }
                  }
                  acc = _v1124;
                  _v1104 = _v1124;
                }
                acc = _v1104;
                _v1 = _v1104;
                const _v1168: any = this;
                acc = _v1168;
                const _v1169: any = await rt.send(_v1168, "cue", []);
                acc = _v1169;
                _v1 = _v1169;
                break _branch4;
              }
              const _v1170: any = 27;
              acc = _v1170;
              _v1 = rt.op("==", _v3, _v1170);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v1171: any = 1;
                acc = _v1171;
                const _v1172: any = rt.set(this, "cycles", _v1171);
                acc = _v1172;
                _v1 = _v1172;
                break _branch4;
              }
              const _v1173: any = 28;
              acc = _v1173;
              _v1 = rt.op("==", _v3, _v1173);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v1174: any = acc;
                let _v1175: any = 1;
                if (rt.truth(_v1175)) {
                  const _v1176: any = 1;
                  acc = _v1176;
                  const _v1177: any = 2;
                  acc = _v1177;
                  const _v1178: any = await rt.call(111, "ScriptID", [_v1176, _v1177], this);
                  acc = _v1178;
                  const _v1179: any = await rt.send(_v1178, "size", []);
                  acc = _v1179;
                  const _v1180: any = 1;
                  acc = _v1180;
                  const _v1181: any = rt.op(">", ...[_v1179, _v1180]);
                  acc = _v1181;
                  _v1175 = _v1181;
                }
                if (rt.truth(_v1175)) {
                  const _v1182: any = 1;
                  acc = _v1182;
                  const _v1183: any = 1;
                  acc = _v1183;
                  const _v1184: any = 2;
                  acc = _v1184;
                  const _v1185: any = await rt.call(111, "ScriptID", [_v1183, _v1184], this);
                  acc = _v1185;
                  const _v1186: any = await rt.send(_v1185, "at", [_v1182]);
                  acc = _v1186;
                  const _v1187: any = await rt.send(_v1186, "finishStatus", []);
                  acc = _v1187;
                  const _v1188: any = rt.op("not", ...[_v1187]);
                  acc = _v1188;
                  _v1175 = _v1188;
                }
                if (rt.truth(_v1175)) {
                  const _v1189: any = 1;
                  acc = _v1189;
                  let _v1190: any = _v1189;
                  let _v1191: any = 1;
                  if (rt.truth(_v1191)) {
                    const _v1192: any = rt.global(373);
                    acc = _v1192;
                    _v1191 = rt.op("<=", _v1190, _v1192);
                    _v1190 = _v1192;
                  }
                  if (rt.truth(_v1191)) {
                    const _v1193: any = 2;
                    acc = _v1193;
                    _v1191 = rt.op("<=", _v1190, _v1193);
                    _v1190 = _v1193;
                  }
                  acc = _v1191;
                  _v1175 = _v1191;
                }
                acc = _v1175;
                _v1174 = _v1175;
                if (rt.truth(_v1175)) {
                  const _v1194: any = 1;
                  acc = _v1194;
                  const _v1195: any = 1;
                  acc = _v1195;
                  const _v1196: any = 2;
                  acc = _v1196;
                  const _v1197: any = await rt.call(111, "ScriptID", [_v1195, _v1196], this);
                  acc = _v1197;
                  const _v1198: any = await rt.send(_v1197, "at", [_v1194]);
                  acc = _v1198;
                  const _v1199: any = rt.setGlobal(480, _v1198);
                  acc = _v1199;
                  _v1174 = _v1199;
                  let _v1200: any = acc;
                  const _v1201: any = rt.global(373);
                  acc = _v1201;
                  const _v1202: any = 1;
                  acc = _v1202;
                  const _v1203: any = 1;
                  acc = _v1203;
                  const _v1204: any = 2;
                  acc = _v1204;
                  const _v1205: any = await rt.call(111, "ScriptID", [_v1203, _v1204], this);
                  acc = _v1205;
                  const _v1206: any = await rt.send(_v1205, "at", [_v1202]);
                  acc = _v1206;
                  const _v1207: any = await rt.send(_v1206, "doScandal", [_v1201]);
                  acc = _v1207;
                  _branch1208: {
                    const _v1209: any = 1;
                    acc = _v1209;
                    _v1200 = rt.op("==", _v1207, _v1209);
                    acc = _v1200;
                    if (rt.truth(_v1200)) {
                      const _v1210: any = -7;
                      acc = _v1210;
                      const _v1211: any = 1;
                      acc = _v1211;
                      const _v1212: any = 1;
                      acc = _v1212;
                      const _v1213: any = 2;
                      acc = _v1213;
                      const _v1214: any = await rt.call(111, "ScriptID", [_v1212, _v1213], this);
                      acc = _v1214;
                      const _v1215: any = await rt.send(_v1214, "at", [_v1211]);
                      acc = _v1215;
                      const _v1216: any = await rt.call(0, "proc0_13", [_v1210, _v1215], this);
                      acc = _v1216;
                      _v1200 = _v1216;
                      const _v1217: any = 30;
                      acc = _v1217;
                      const _v1218: any = rt.global(476);
                      acc = _v1218;
                      const _v1219: any = await rt.send(_v1218, "play", [_v1217]);
                      acc = _v1219;
                      _v1200 = _v1219;
                      const _v1220: any = rt.object(111, "moveNotice");
                      acc = _v1220;
                      const _v1221: any = 0;
                      acc = _v1221;
                      const _v1222: any = 7;
                      acc = _v1222;
                      const _v1223: any = this;
                      acc = _v1223;
                      const _v1224: any = await rt.send(_v1223, "setScript", [_v1220, _v1221, _v1222]);
                      acc = _v1224;
                      _v1200 = _v1224;
                      return acc;
                      _v1200 = acc;
                      break _branch1208;
                    }
                    const _v1225: any = -1;
                    acc = _v1225;
                    _v1200 = rt.op("==", _v1207, _v1225);
                    acc = _v1200;
                    if (rt.truth(_v1200)) {
                      const _v1226: any = -3;
                      acc = _v1226;
                      const _v1227: any = 1;
                      acc = _v1227;
                      const _v1228: any = 1;
                      acc = _v1228;
                      const _v1229: any = 2;
                      acc = _v1229;
                      const _v1230: any = await rt.call(111, "ScriptID", [_v1228, _v1229], this);
                      acc = _v1230;
                      const _v1231: any = await rt.send(_v1230, "at", [_v1227]);
                      acc = _v1231;
                      const _v1232: any = await rt.call(0, "proc0_13", [_v1226, _v1231], this);
                      acc = _v1232;
                      _v1200 = _v1232;
                      const _v1233: any = rt.object(111, "moveNotice");
                      acc = _v1233;
                      const _v1234: any = 0;
                      acc = _v1234;
                      const _v1235: any = 11;
                      acc = _v1235;
                      const _v1236: any = 1;
                      acc = _v1236;
                      const _v1237: any = 1;
                      acc = _v1237;
                      const _v1238: any = 2;
                      acc = _v1238;
                      const _v1239: any = await rt.call(111, "ScriptID", [_v1237, _v1238], this);
                      acc = _v1239;
                      const _v1240: any = await rt.send(_v1239, "at", [_v1236]);
                      acc = _v1240;
                      const _v1241: any = await rt.send(_v1240, "wage", []);
                      acc = _v1241;
                      const _v1242: any = this;
                      acc = _v1242;
                      const _v1243: any = await rt.send(_v1242, "setScript", [_v1233, _v1234, _v1235, _v1241]);
                      acc = _v1243;
                      _v1200 = _v1243;
                      return acc;
                      _v1200 = acc;
                      break _branch1208;
                    }
                  }
                  acc = _v1200;
                  _v1174 = _v1200;
                }
                acc = _v1174;
                _v1 = _v1174;
                const _v1244: any = this;
                acc = _v1244;
                const _v1245: any = await rt.send(_v1244, "cue", []);
                acc = _v1245;
                _v1 = _v1245;
                break _branch4;
              }
              const _v1246: any = 29;
              acc = _v1246;
              _v1 = rt.op("==", _v3, _v1246);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v1247: any = 1;
                acc = _v1247;
                const _v1248: any = rt.set(this, "cycles", _v1247);
                acc = _v1248;
                _v1 = _v1248;
                break _branch4;
              }
              const _v1249: any = 30;
              acc = _v1249;
              _v1 = rt.op("==", _v3, _v1249);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v1250: any = acc;
                let _v1251: any = 1;
                if (rt.truth(_v1251)) {
                  const _v1252: any = 1;
                  acc = _v1252;
                  const _v1253: any = 2;
                  acc = _v1253;
                  const _v1254: any = await rt.call(111, "ScriptID", [_v1252, _v1253], this);
                  acc = _v1254;
                  const _v1255: any = await rt.send(_v1254, "size", []);
                  acc = _v1255;
                  const _v1256: any = 2;
                  acc = _v1256;
                  const _v1257: any = rt.op(">", ...[_v1255, _v1256]);
                  acc = _v1257;
                  _v1251 = _v1257;
                }
                if (rt.truth(_v1251)) {
                  const _v1258: any = 2;
                  acc = _v1258;
                  const _v1259: any = 1;
                  acc = _v1259;
                  const _v1260: any = 2;
                  acc = _v1260;
                  const _v1261: any = await rt.call(111, "ScriptID", [_v1259, _v1260], this);
                  acc = _v1261;
                  const _v1262: any = await rt.send(_v1261, "at", [_v1258]);
                  acc = _v1262;
                  const _v1263: any = await rt.send(_v1262, "finishStatus", []);
                  acc = _v1263;
                  const _v1264: any = rt.op("not", ...[_v1263]);
                  acc = _v1264;
                  _v1251 = _v1264;
                }
                if (rt.truth(_v1251)) {
                  const _v1265: any = 1;
                  acc = _v1265;
                  let _v1266: any = _v1265;
                  let _v1267: any = 1;
                  if (rt.truth(_v1267)) {
                    const _v1268: any = rt.global(373);
                    acc = _v1268;
                    _v1267 = rt.op("<=", _v1266, _v1268);
                    _v1266 = _v1268;
                  }
                  if (rt.truth(_v1267)) {
                    const _v1269: any = 2;
                    acc = _v1269;
                    _v1267 = rt.op("<=", _v1266, _v1269);
                    _v1266 = _v1269;
                  }
                  acc = _v1267;
                  _v1251 = _v1267;
                }
                acc = _v1251;
                _v1250 = _v1251;
                if (rt.truth(_v1251)) {
                  const _v1270: any = 2;
                  acc = _v1270;
                  const _v1271: any = 1;
                  acc = _v1271;
                  const _v1272: any = 2;
                  acc = _v1272;
                  const _v1273: any = await rt.call(111, "ScriptID", [_v1271, _v1272], this);
                  acc = _v1273;
                  const _v1274: any = await rt.send(_v1273, "at", [_v1270]);
                  acc = _v1274;
                  const _v1275: any = rt.setGlobal(480, _v1274);
                  acc = _v1275;
                  _v1250 = _v1275;
                  let _v1276: any = acc;
                  const _v1277: any = rt.global(373);
                  acc = _v1277;
                  const _v1278: any = 2;
                  acc = _v1278;
                  const _v1279: any = 1;
                  acc = _v1279;
                  const _v1280: any = 2;
                  acc = _v1280;
                  const _v1281: any = await rt.call(111, "ScriptID", [_v1279, _v1280], this);
                  acc = _v1281;
                  const _v1282: any = await rt.send(_v1281, "at", [_v1278]);
                  acc = _v1282;
                  const _v1283: any = await rt.send(_v1282, "doScandal", [_v1277]);
                  acc = _v1283;
                  _branch1284: {
                    const _v1285: any = 1;
                    acc = _v1285;
                    _v1276 = rt.op("==", _v1283, _v1285);
                    acc = _v1276;
                    if (rt.truth(_v1276)) {
                      const _v1286: any = -7;
                      acc = _v1286;
                      const _v1287: any = 2;
                      acc = _v1287;
                      const _v1288: any = 1;
                      acc = _v1288;
                      const _v1289: any = 2;
                      acc = _v1289;
                      const _v1290: any = await rt.call(111, "ScriptID", [_v1288, _v1289], this);
                      acc = _v1290;
                      const _v1291: any = await rt.send(_v1290, "at", [_v1287]);
                      acc = _v1291;
                      const _v1292: any = await rt.call(0, "proc0_13", [_v1286, _v1291], this);
                      acc = _v1292;
                      _v1276 = _v1292;
                      const _v1293: any = 30;
                      acc = _v1293;
                      const _v1294: any = rt.global(476);
                      acc = _v1294;
                      const _v1295: any = await rt.send(_v1294, "play", [_v1293]);
                      acc = _v1295;
                      _v1276 = _v1295;
                      const _v1296: any = rt.object(111, "moveNotice");
                      acc = _v1296;
                      const _v1297: any = 0;
                      acc = _v1297;
                      const _v1298: any = 7;
                      acc = _v1298;
                      const _v1299: any = this;
                      acc = _v1299;
                      const _v1300: any = await rt.send(_v1299, "setScript", [_v1296, _v1297, _v1298]);
                      acc = _v1300;
                      _v1276 = _v1300;
                      return acc;
                      _v1276 = acc;
                      break _branch1284;
                    }
                    const _v1301: any = -1;
                    acc = _v1301;
                    _v1276 = rt.op("==", _v1283, _v1301);
                    acc = _v1276;
                    if (rt.truth(_v1276)) {
                      const _v1302: any = -3;
                      acc = _v1302;
                      const _v1303: any = 2;
                      acc = _v1303;
                      const _v1304: any = 1;
                      acc = _v1304;
                      const _v1305: any = 2;
                      acc = _v1305;
                      const _v1306: any = await rt.call(111, "ScriptID", [_v1304, _v1305], this);
                      acc = _v1306;
                      const _v1307: any = await rt.send(_v1306, "at", [_v1303]);
                      acc = _v1307;
                      const _v1308: any = await rt.call(0, "proc0_13", [_v1302, _v1307], this);
                      acc = _v1308;
                      _v1276 = _v1308;
                      const _v1309: any = rt.object(111, "moveNotice");
                      acc = _v1309;
                      const _v1310: any = 0;
                      acc = _v1310;
                      const _v1311: any = 11;
                      acc = _v1311;
                      const _v1312: any = 2;
                      acc = _v1312;
                      const _v1313: any = 1;
                      acc = _v1313;
                      const _v1314: any = 2;
                      acc = _v1314;
                      const _v1315: any = await rt.call(111, "ScriptID", [_v1313, _v1314], this);
                      acc = _v1315;
                      const _v1316: any = await rt.send(_v1315, "at", [_v1312]);
                      acc = _v1316;
                      const _v1317: any = await rt.send(_v1316, "wage", []);
                      acc = _v1317;
                      const _v1318: any = this;
                      acc = _v1318;
                      const _v1319: any = await rt.send(_v1318, "setScript", [_v1309, _v1310, _v1311, _v1317]);
                      acc = _v1319;
                      _v1276 = _v1319;
                      return acc;
                      _v1276 = acc;
                      break _branch1284;
                    }
                  }
                  acc = _v1276;
                  _v1250 = _v1276;
                }
                acc = _v1250;
                _v1 = _v1250;
                const _v1320: any = this;
                acc = _v1320;
                const _v1321: any = await rt.send(_v1320, "cue", []);
                acc = _v1321;
                _v1 = _v1321;
                break _branch4;
              }
              const _v1322: any = 31;
              acc = _v1322;
              _v1 = rt.op("==", _v3, _v1322);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v1323: any = 1;
                acc = _v1323;
                const _v1324: any = rt.set(this, "cycles", _v1323);
                acc = _v1324;
                _v1 = _v1324;
                break _branch4;
              }
              const _v1325: any = 32;
              acc = _v1325;
              _v1 = rt.op("==", _v3, _v1325);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v1326: any = acc;
                let _v1327: any = 1;
                if (rt.truth(_v1327)) {
                  const _v1328: any = 1;
                  acc = _v1328;
                  const _v1329: any = 2;
                  acc = _v1329;
                  const _v1330: any = await rt.call(111, "ScriptID", [_v1328, _v1329], this);
                  acc = _v1330;
                  const _v1331: any = await rt.send(_v1330, "size", []);
                  acc = _v1331;
                  const _v1332: any = 3;
                  acc = _v1332;
                  const _v1333: any = rt.op(">", ...[_v1331, _v1332]);
                  acc = _v1333;
                  _v1327 = _v1333;
                }
                if (rt.truth(_v1327)) {
                  const _v1334: any = 3;
                  acc = _v1334;
                  const _v1335: any = 1;
                  acc = _v1335;
                  const _v1336: any = 2;
                  acc = _v1336;
                  const _v1337: any = await rt.call(111, "ScriptID", [_v1335, _v1336], this);
                  acc = _v1337;
                  const _v1338: any = await rt.send(_v1337, "at", [_v1334]);
                  acc = _v1338;
                  const _v1339: any = await rt.send(_v1338, "finishStatus", []);
                  acc = _v1339;
                  const _v1340: any = rt.op("not", ...[_v1339]);
                  acc = _v1340;
                  _v1327 = _v1340;
                }
                if (rt.truth(_v1327)) {
                  const _v1341: any = 1;
                  acc = _v1341;
                  let _v1342: any = _v1341;
                  let _v1343: any = 1;
                  if (rt.truth(_v1343)) {
                    const _v1344: any = rt.global(373);
                    acc = _v1344;
                    _v1343 = rt.op("<=", _v1342, _v1344);
                    _v1342 = _v1344;
                  }
                  if (rt.truth(_v1343)) {
                    const _v1345: any = 2;
                    acc = _v1345;
                    _v1343 = rt.op("<=", _v1342, _v1345);
                    _v1342 = _v1345;
                  }
                  acc = _v1343;
                  _v1327 = _v1343;
                }
                acc = _v1327;
                _v1326 = _v1327;
                if (rt.truth(_v1327)) {
                  const _v1346: any = 3;
                  acc = _v1346;
                  const _v1347: any = 1;
                  acc = _v1347;
                  const _v1348: any = 2;
                  acc = _v1348;
                  const _v1349: any = await rt.call(111, "ScriptID", [_v1347, _v1348], this);
                  acc = _v1349;
                  const _v1350: any = await rt.send(_v1349, "at", [_v1346]);
                  acc = _v1350;
                  const _v1351: any = rt.setGlobal(480, _v1350);
                  acc = _v1351;
                  _v1326 = _v1351;
                  let _v1352: any = acc;
                  const _v1353: any = rt.global(373);
                  acc = _v1353;
                  const _v1354: any = 3;
                  acc = _v1354;
                  const _v1355: any = 1;
                  acc = _v1355;
                  const _v1356: any = 2;
                  acc = _v1356;
                  const _v1357: any = await rt.call(111, "ScriptID", [_v1355, _v1356], this);
                  acc = _v1357;
                  const _v1358: any = await rt.send(_v1357, "at", [_v1354]);
                  acc = _v1358;
                  const _v1359: any = await rt.send(_v1358, "doScandal", [_v1353]);
                  acc = _v1359;
                  _branch1360: {
                    const _v1361: any = 1;
                    acc = _v1361;
                    _v1352 = rt.op("==", _v1359, _v1361);
                    acc = _v1352;
                    if (rt.truth(_v1352)) {
                      const _v1362: any = -7;
                      acc = _v1362;
                      const _v1363: any = 3;
                      acc = _v1363;
                      const _v1364: any = 1;
                      acc = _v1364;
                      const _v1365: any = 2;
                      acc = _v1365;
                      const _v1366: any = await rt.call(111, "ScriptID", [_v1364, _v1365], this);
                      acc = _v1366;
                      const _v1367: any = await rt.send(_v1366, "at", [_v1363]);
                      acc = _v1367;
                      const _v1368: any = await rt.call(0, "proc0_13", [_v1362, _v1367], this);
                      acc = _v1368;
                      _v1352 = _v1368;
                      const _v1369: any = 30;
                      acc = _v1369;
                      const _v1370: any = rt.global(476);
                      acc = _v1370;
                      const _v1371: any = await rt.send(_v1370, "play", [_v1369]);
                      acc = _v1371;
                      _v1352 = _v1371;
                      const _v1372: any = rt.object(111, "moveNotice");
                      acc = _v1372;
                      const _v1373: any = 0;
                      acc = _v1373;
                      const _v1374: any = 7;
                      acc = _v1374;
                      const _v1375: any = this;
                      acc = _v1375;
                      const _v1376: any = await rt.send(_v1375, "setScript", [_v1372, _v1373, _v1374]);
                      acc = _v1376;
                      _v1352 = _v1376;
                      return acc;
                      _v1352 = acc;
                      break _branch1360;
                    }
                    const _v1377: any = -1;
                    acc = _v1377;
                    _v1352 = rt.op("==", _v1359, _v1377);
                    acc = _v1352;
                    if (rt.truth(_v1352)) {
                      const _v1378: any = -3;
                      acc = _v1378;
                      const _v1379: any = 3;
                      acc = _v1379;
                      const _v1380: any = 1;
                      acc = _v1380;
                      const _v1381: any = 2;
                      acc = _v1381;
                      const _v1382: any = await rt.call(111, "ScriptID", [_v1380, _v1381], this);
                      acc = _v1382;
                      const _v1383: any = await rt.send(_v1382, "at", [_v1379]);
                      acc = _v1383;
                      const _v1384: any = await rt.call(0, "proc0_13", [_v1378, _v1383], this);
                      acc = _v1384;
                      _v1352 = _v1384;
                      const _v1385: any = rt.object(111, "moveNotice");
                      acc = _v1385;
                      const _v1386: any = 0;
                      acc = _v1386;
                      const _v1387: any = 11;
                      acc = _v1387;
                      const _v1388: any = 3;
                      acc = _v1388;
                      const _v1389: any = 1;
                      acc = _v1389;
                      const _v1390: any = 2;
                      acc = _v1390;
                      const _v1391: any = await rt.call(111, "ScriptID", [_v1389, _v1390], this);
                      acc = _v1391;
                      const _v1392: any = await rt.send(_v1391, "at", [_v1388]);
                      acc = _v1392;
                      const _v1393: any = await rt.send(_v1392, "wage", []);
                      acc = _v1393;
                      const _v1394: any = this;
                      acc = _v1394;
                      const _v1395: any = await rt.send(_v1394, "setScript", [_v1385, _v1386, _v1387, _v1393]);
                      acc = _v1395;
                      _v1352 = _v1395;
                      return acc;
                      _v1352 = acc;
                      break _branch1360;
                    }
                  }
                  acc = _v1352;
                  _v1326 = _v1352;
                }
                acc = _v1326;
                _v1 = _v1326;
                const _v1396: any = 0;
                acc = _v1396;
                const _v1397: any = rt.setGlobal(373, _v1396);
                acc = _v1397;
                _v1 = _v1397;
                const _v1398: any = this;
                acc = _v1398;
                const _v1399: any = await rt.send(_v1398, "cue", []);
                acc = _v1399;
                _v1 = _v1399;
                break _branch4;
              }
              const _v1400: any = 33;
              acc = _v1400;
              _v1 = rt.op("==", _v3, _v1400);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v1401: any = 0;
                acc = _v1401;
                const _v1402: any = rt.setGlobal(480, _v1401);
                acc = _v1402;
                _v1 = _v1402;
                const _v1403: any = 1;
                acc = _v1403;
                const _v1404: any = rt.set(this, "cycles", _v1403);
                acc = _v1404;
                _v1 = _v1404;
                break _branch4;
              }
              const _v1405: any = 34;
              acc = _v1405;
              _v1 = rt.op("==", _v3, _v1405);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v1406: any = 0;
                acc = _v1406;
                const _v1407: any = (temps[2] = _v1406);
                acc = _v1407;
                _v1 = _v1407;
                const _v1408: any = rt.global(302);
                acc = _v1408;
                const _v1409: any = await rt.send(_v1408, "durables", []);
                acc = _v1409;
                const _v1410: any = (temps[3] = _v1409);
                acc = _v1410;
                _v1 = _v1410;
                let _v1411: any = acc;
                const _v1412: any = (temps[3] ?? 0);
                acc = _v1412;
                const _v1413: any = await rt.send(_v1412, "size", []);
                acc = _v1413;
                _v1411 = _v1413;
                if (rt.truth(_v1413)) {
                  const _v1416: any = 0;
                  acc = _v1416;
                  const _v1417: any = rt.setLocal(111, 0, _v1416);
                  acc = _v1417;
                  _loop1414: for (;;) {
                    const _v1418: any = rt.local(111, 0);
                    acc = _v1418;
                    const _v1419: any = (temps[3] ?? 0);
                    acc = _v1419;
                    const _v1420: any = await rt.send(_v1419, "size", []);
                    acc = _v1420;
                    const _v1421: any = rt.op("<", ...[_v1418, _v1420]);
                    acc = _v1421;
                    if (!rt.truth(_v1421)) break _loop1414;
                    _continue1415: {
                      const _v1422: any = rt.local(111, 0);
                      acc = _v1422;
                      const _v1423: any = (temps[3] ?? 0);
                      acc = _v1423;
                      const _v1424: any = await rt.send(_v1423, "at", [_v1422]);
                      acc = _v1424;
                      const _v1425: any = await rt.send(_v1424, "quantity", []);
                      acc = _v1425;
                      let _v1426: any = acc;
                      const _v1427: any = rt.local(111, 0);
                      acc = _v1427;
                      const _v1428: any = (temps[3] ?? 0);
                      acc = _v1428;
                      const _v1429: any = await rt.send(_v1428, "at", [_v1427]);
                      acc = _v1429;
                      const _v1430: any = await rt.send(_v1429, "attributes", []);
                      acc = _v1430;
                      const _v1431: any = 56;
                      acc = _v1431;
                      const _v1432: any = rt.op("&", ...[_v1430, _v1431]);
                      acc = _v1432;
                      _v1426 = _v1432;
                      if (rt.truth(_v1432)) {
                        const _v1433: any = 1;
                        acc = _v1433;
                        _v1426 = _v1433;
                      } else {
                        const _v1434: any = 0;
                        acc = _v1434;
                        _v1426 = _v1434;
                      }
                      acc = _v1426;
                      const _v1435: any = rt.op("-", ...[_v1425, _v1426]);
                      acc = _v1435;
                      const _v1436: any = rt.local(111, 0);
                      acc = _v1436;
                      const _v1437: any = (temps[3] ?? 0);
                      acc = _v1437;
                      const _v1438: any = await rt.send(_v1437, "at", [_v1436]);
                      acc = _v1438;
                      const _v1439: any = await rt.send(_v1438, "pricePaid", []);
                      acc = _v1439;
                      const _v1440: any = rt.op("*", ...[_v1435, _v1439]);
                      acc = _v1440;
                      const _v1441: any = (temps[2] = rt.op("+", (temps[2] ?? 0), _v1440));
                      acc = _v1441;
                    }
                    const _v1442: any = rt.setLocal(111, 0, rt.op("+", rt.local(111, 0), 1));
                    acc = _v1442;
                  }
                  _v1411 = acc;
                }
                acc = _v1411;
                _v1 = _v1411;
                let _v1443: any = acc;
                let _v1444: any = 1;
                if (rt.truth(_v1444)) {
                  const _v1445: any = rt.global(302);
                  acc = _v1445;
                  const _v1446: any = await rt.send(_v1445, "cashHi", []);
                  acc = _v1446;
                  const _v1447: any = rt.op("not", ...[_v1446]);
                  acc = _v1447;
                  _v1444 = _v1447;
                }
                if (rt.truth(_v1444)) {
                  const _v1448: any = rt.global(302);
                  acc = _v1448;
                  const _v1449: any = await rt.send(_v1448, "cash", []);
                  acc = _v1449;
                  const _v1450: any = 0;
                  acc = _v1450;
                  const _v1451: any = rt.op("<=", ...[_v1449, _v1450]);
                  acc = _v1451;
                  _v1444 = _v1451;
                }
                if (rt.truth(_v1444)) {
                  const _v1452: any = rt.global(302);
                  acc = _v1452;
                  const _v1453: any = await rt.send(_v1452, "weeksOfClothing", []);
                  acc = _v1453;
                  const _v1454: any = rt.op("not", ...[_v1453]);
                  acc = _v1454;
                  _v1444 = _v1454;
                }
                if (rt.truth(_v1444)) {
                  const _v1455: any = (temps[2] ?? 0);
                  acc = _v1455;
                  const _v1456: any = 200;
                  acc = _v1456;
                  const _v1457: any = rt.op("<", ...[_v1455, _v1456]);
                  acc = _v1457;
                  _v1444 = _v1457;
                }
                acc = _v1444;
                _v1443 = _v1444;
                if (rt.truth(_v1444)) {
                  const _v1458: any = rt.global(302);
                  acc = _v1458;
                  const _v1459: any = await rt.send(_v1458, "nakedCount", []);
                  acc = _v1459;
                  const _v1460: any = 1;
                  acc = _v1460;
                  const _v1461: any = rt.op("+", ...[_v1459, _v1460]);
                  acc = _v1461;
                  const _v1462: any = rt.global(302);
                  acc = _v1462;
                  const _v1463: any = await rt.send(_v1462, "nakedCount", [_v1461]);
                  acc = _v1463;
                  _v1443 = _v1463;
                  let _v1464: any = acc;
                  const _v1465: any = rt.global(302);
                  acc = _v1465;
                  const _v1466: any = await rt.send(_v1465, "nakedCount", []);
                  acc = _v1466;
                  const _v1467: any = 1;
                  acc = _v1467;
                  const _v1468: any = rt.op(">", ...[_v1466, _v1467]);
                  acc = _v1468;
                  _v1464 = _v1468;
                  if (rt.truth(_v1468)) {
                    const _v1469: any = 0;
                    acc = _v1469;
                    const _v1470: any = rt.global(302);
                    acc = _v1470;
                    const _v1471: any = await rt.send(_v1470, "nakedCount", [_v1469]);
                    acc = _v1471;
                    _v1464 = _v1471;
                    let _v1472: any = acc;
                    const _v1473: any = rt.global(302);
                    acc = _v1473;
                    const _v1474: any = await rt.send(_v1473, "uniform", []);
                    acc = _v1474;
                    _branch1475: {
                      const _v1476: any = 34;
                      acc = _v1476;
                      _v1472 = rt.op("==", _v1474, _v1476);
                      acc = _v1472;
                      if (rt.truth(_v1472)) {
                        const _v1477: any = 295;
                        acc = _v1477;
                        _v1472 = _v1477;
                        break _branch1475;
                      }
                      const _v1478: any = 35;
                      acc = _v1478;
                      _v1472 = rt.op("==", _v1474, _v1478);
                      acc = _v1472;
                      if (rt.truth(_v1472)) {
                        const _v1479: any = 125;
                        acc = _v1479;
                        _v1472 = _v1479;
                        break _branch1475;
                      }
                      const _v1480: any = 36;
                      acc = _v1480;
                      _v1472 = rt.op("==", _v1474, _v1480);
                      acc = _v1472;
                      if (rt.truth(_v1472)) {
                        const _v1481: any = 73;
                        acc = _v1481;
                        _v1472 = _v1481;
                        break _branch1475;
                      }
                      const _v1482: any = 50;
                      acc = _v1482;
                      _v1472 = _v1482;
                      break _branch1475;
                    }
                    acc = _v1472;
                    const _v1483: any = (temps[7] = _v1472);
                    acc = _v1483;
                    _v1464 = _v1483;
                    const _v1484: any = rt.global(309);
                    acc = _v1484;
                    const _v1485: any = (temps[7] ?? 0);
                    acc = _v1485;
                    const _v1486: any = await rt.call(109, "proc109_0", [_v1484, _v1485], this);
                    acc = _v1486;
                    const _v1487: any = 1;
                    acc = _v1487;
                    const _v1488: any = 100;
                    acc = _v1488;
                    const _v1489: any = await rt.call(111, "Random", [_v1487, _v1488], this);
                    acc = _v1489;
                    const _v1490: any = rt.op("+", ...[_v1486, _v1489]);
                    acc = _v1490;
                    const _v1491: any = rt.setLocal(111, 76, _v1490);
                    acc = _v1491;
                    _v1464 = _v1491;
                    const _v1492: any = rt.local(111, 76);
                    acc = _v1492;
                    const _v1493: any = await rt.call(0, "proc0_10", [_v1492], this);
                    acc = _v1493;
                    _v1464 = _v1493;
                    const _v1494: any = rt.object(111, "moveNotice");
                    acc = _v1494;
                    const _v1495: any = 0;
                    acc = _v1495;
                    const _v1496: any = 12;
                    acc = _v1496;
                    const _v1497: any = rt.local(111, 76);
                    acc = _v1497;
                    const _v1498: any = this;
                    acc = _v1498;
                    const _v1499: any = await rt.send(_v1498, "setScript", [_v1494, _v1495, _v1496, _v1497]);
                    acc = _v1499;
                    _v1464 = _v1499;
                    return acc;
                    _v1464 = acc;
                  }
                  acc = _v1464;
                  _v1443 = _v1464;
                }
                acc = _v1443;
                _v1 = _v1443;
                const _v1500: any = this;
                acc = _v1500;
                const _v1501: any = await rt.send(_v1500, "cue", []);
                acc = _v1501;
                _v1 = _v1501;
                break _branch4;
              }
              const _v1502: any = 35;
              acc = _v1502;
              _v1 = rt.op("==", _v3, _v1502);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v1503: any = 1;
                acc = _v1503;
                const _v1504: any = rt.set(this, "cycles", _v1503);
                acc = _v1504;
                _v1 = _v1504;
                break _branch4;
              }
              const _v1505: any = 36;
              acc = _v1505;
              _v1 = rt.op("==", _v3, _v1505);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v1506: any = acc;
                const _v1507: any = rt.global(4);
                acc = _v1507;
                _v1506 = _v1507;
                if (rt.truth(_v1507)) {
                  return acc;
                  _v1506 = acc;
                }
                acc = _v1506;
                _v1 = _v1506;
                const _v1508: any = rt.global(303);
                acc = _v1508;
                const _v1509: any = await rt.send(_v1508, "forceUpd", []);
                acc = _v1509;
                _v1 = _v1509;
                const _v1510: any = 0;
                acc = _v1510;
                const _v1511: any = rt.setGlobal(530, _v1510);
                acc = _v1511;
                _v1 = _v1511;
                const _v1512: any = 0;
                acc = _v1512;
                const _v1513: any = rt.setGlobal(373, _v1512);
                acc = _v1513;
                _v1 = _v1513;
                const _v1514: any = 0;
                acc = _v1514;
                const _v1515: any = rt.get(this, "client");
                acc = _v1515;
                const _v1516: any = await rt.send(_v1515, "script", [_v1514]);
                acc = _v1516;
                _v1 = _v1516;
                const _v1517: any = rt.object(111, "moveNotice");
                acc = _v1517;
                const _v1518: any = await rt.send(_v1517, "dispose", []);
                acc = _v1518;
                _v1 = _v1518;
                let _v1519: any = acc;
                const _v1520: any = rt.object(111, "notice");
                acc = _v1520;
                const _v1521: any = rt.global(5);
                acc = _v1521;
                const _v1522: any = await rt.send(_v1521, "contains", [_v1520]);
                acc = _v1522;
                _v1519 = _v1522;
                if (rt.truth(_v1522)) {
                  const _v1523: any = rt.object(111, "notice");
                  acc = _v1523;
                  const _v1524: any = await rt.send(_v1523, "dispose", []);
                  acc = _v1524;
                  _v1519 = _v1524;
                }
                acc = _v1519;
                _v1 = _v1519;
                const _v1525: any = await rt.call(0, "proc0_1", [], this);
                acc = _v1525;
                _v1 = _v1525;
                const _v1526: any = this;
                acc = _v1526;
                const _v1527: any = await rt.send(_v1526, "dispose", []);
                acc = _v1527;
                _v1 = _v1527;
                const _v1528: any = 1;
                acc = _v1528;
                const _v1529: any = rt.setGlobal(473, _v1528);
                acc = _v1529;
                _v1 = _v1529;
                const _v1530: any = 1;
                acc = _v1530;
                const _v1531: any = rt.setGlobal(474, _v1530);
                acc = _v1531;
                _v1 = _v1531;
                const _v1532: any = 1;
                acc = _v1532;
                const _v1533: any = rt.setLocal(111, 81, _v1532);
                acc = _v1533;
                _v1 = _v1533;
                const _v1534: any = await rt.call(0, "proc0_8", [], this);
                acc = _v1534;
                _v1 = _v1534;
                break _branch4;
              }
            }
            acc = _v1;
            let _v1535: any = acc;
            const _v1536: any = rt.local(111, 81);
            acc = _v1536;
            _v1535 = _v1536;
            if (rt.truth(_v1536)) {
              const _acc1537: any = acc;
              const _v1538: any = 111;
              acc = _v1538;
              const _args1539: any[] = [_v1538];
              await rt.call(111, "DisposeScript", _args1539, this);
              const _v1540: any = _args1539.length === 2 ? _args1539[1] : _acc1537;
              acc = _v1540;
              _v1535 = _v1540;
            }
            acc = _v1535;
            return acc;
          },
        },
      },
      {
        name: "moveNotice",
        className: "Script",
        parent: {"script": 999, "name": "Script"},
        isClass: false,
        properties: {},
        methods: {
          // SCI startTrn.sc: moveNotice.changeState
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
                let _v6: any = acc;
                const _v7: any = rt.global(480);
                acc = _v7;
                _v6 = _v7;
                if (rt.truth(_v7)) {
                  const _v8: any = rt.global(480);
                  acc = _v8;
                  _v6 = _v8;
                } else {
                  const _v9: any = rt.global(302);
                  acc = _v9;
                  _v6 = _v9;
                }
                acc = _v6;
                const _v10: any = rt.setLocal(111, 75, _v6);
                acc = _v10;
                _v1 = _v10;
                const _v11: any = 310;
                acc = _v11;
                const _v12: any = rt.get(this, "register");
                acc = _v12;
                const _v13: any = rt.op("+", ...[_v11, _v12]);
                acc = _v13;
                const _v14: any = rt.object(111, "notice");
                acc = _v14;
                const _v15: any = await rt.send(_v14, "view", [_v13]);
                acc = _v15;
                const _v16: any = await rt.send(_v14, "init", []);
                acc = _v16;
                _v1 = _v16;
                break _branch4;
              }
              const _v17: any = 1;
              acc = _v17;
              _v1 = rt.op("==", _v3, _v17);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v18: any = 1;
                acc = _v18;
                const _v19: any = rt.set(this, "cycles", _v18);
                acc = _v19;
                _v1 = _v19;
                break _branch4;
              }
              const _v20: any = 2;
              acc = _v20;
              _v1 = rt.op("==", _v3, _v20);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v21: any = rt.object(111, "notice");
                acc = _v21;
                const _v22: any = await rt.send(_v21, "stopUpd", []);
                acc = _v22;
                _v1 = _v22;
                let _v23: any = acc;
                const _v24: any = rt.global(476);
                acc = _v24;
                const _v25: any = await rt.send(_v24, "number", []);
                acc = _v25;
                const _v26: any = 27;
                acc = _v26;
                const _v27: any = rt.op("!=", ...[_v25, _v26]);
                acc = _v27;
                _v23 = _v27;
                if (rt.truth(_v27)) {
                  const _v28: any = 23;
                  acc = _v28;
                  const _v29: any = rt.global(476);
                  acc = _v29;
                  const _v30: any = await rt.send(_v29, "play", [_v28]);
                  acc = _v30;
                  _v23 = _v30;
                }
                acc = _v23;
                _v1 = _v23;
                const _v31: any = 1;
                acc = _v31;
                const _v32: any = rt.set(this, "cycles", _v31);
                acc = _v32;
                _v1 = _v32;
                break _branch4;
              }
              const _v33: any = 3;
              acc = _v33;
              _v1 = rt.op("==", _v3, _v33);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v34: any = acc;
                const _v35: any = rt.get(this, "register");
                acc = _v35;
                _v34 = _v35;
                if (rt.truth(_v35)) {
                  const _v36: any = 0;
                  acc = _v36;
                  const _v37: any = rt.setLocal(111, 74, _v36);
                  acc = _v37;
                  _v34 = _v37;
                  let _v38: any = acc;
                  _branch39: {
                    let _v40: any = 0;
                    if (!rt.truth(_v40)) {
                      const _v41: any = rt.get(this, "register");
                      acc = _v41;
                      const _v42: any = 7;
                      acc = _v42;
                      const _v43: any = rt.op("==", ...[_v41, _v42]);
                      acc = _v43;
                      _v40 = _v43;
                    }
                    if (!rt.truth(_v40)) {
                      const _v44: any = rt.get(this, "register");
                      acc = _v44;
                      const _v45: any = 11;
                      acc = _v45;
                      const _v46: any = rt.op("==", ...[_v44, _v45]);
                      acc = _v46;
                      _v40 = _v46;
                    }
                    acc = _v40;
                    _v38 = _v40;
                    acc = _v38;
                    if (rt.truth(_v38)) {
                      const _v47: any = rt.ref("local", 111, 22);
                      acc = _v47;
                      const _v48: any = 111;
                      acc = _v48;
                      const _v49: any = 1;
                      acc = _v49;
                      const _v50: any = rt.local(111, 75);
                      acc = _v50;
                      const _v51: any = await rt.send(_v50, "actualName", []);
                      acc = _v51;
                      const _v52: any = await rt.call(111, "Format", [_v47, _v48, _v49, _v51], this);
                      acc = _v52;
                      const _v53: any = rt.setLocal(111, 17, _v52);
                      acc = _v53;
                      _v38 = _v53;
                      const _v54: any = 1;
                      acc = _v54;
                      const _v55: any = rt.setLocal(111, 74, _v54);
                      acc = _v55;
                      _v38 = _v55;
                      break _branch39;
                    }
                    const _v56: any = rt.get(this, "register");
                    acc = _v56;
                    const _v57: any = 1;
                    acc = _v57;
                    const _v58: any = rt.op("==", ...[_v56, _v57]);
                    acc = _v58;
                    _v38 = _v58;
                    acc = _v38;
                    if (rt.truth(_v38)) {
                      const _v59: any = rt.ref("local", 111, 22);
                      acc = _v59;
                      const _v60: any = 111;
                      acc = _v60;
                      const _v61: any = 1;
                      acc = _v61;
                      const _v62: any = 700;
                      acc = _v62;
                      const _v63: any = rt.local(111, 0);
                      acc = _v63;
                      const _v64: any = rt.local(111, 75);
                      acc = _v64;
                      const _v65: any = await rt.send(_v64, "durables", []);
                      acc = _v65;
                      const _v66: any = await rt.send(_v65, "at", [_v63]);
                      acc = _v66;
                      const _v67: any = await rt.send(_v66, "indexNum", []);
                      acc = _v67;
                      const _v68: any = await rt.call(111, "Format", [_v59, _v60, _v61, _v62, _v67], this);
                      acc = _v68;
                      const _v69: any = rt.setLocal(111, 17, _v68);
                      acc = _v69;
                      _v38 = _v69;
                      const _v70: any = 1;
                      acc = _v70;
                      const _v71: any = rt.setLocal(111, 74, _v70);
                      acc = _v71;
                      _v38 = _v71;
                      break _branch39;
                    }
                  }
                  acc = _v38;
                  _v34 = _v38;
                  let _v72: any = acc;
                  const _v73: any = rt.local(111, 74);
                  acc = _v73;
                  _v72 = _v73;
                  if (rt.truth(_v73)) {
                    const _v74: any = 0;
                    acc = _v74;
                    const _v75: any = rt.ref("local", 111, (18 + (Number(_v74) & 65535)));
                    acc = _v75;
                    const _v76: any = rt.local(111, 17);
                    acc = _v76;
                    const _v77: any = 4;
                    acc = _v77;
                    const _v78: any = 0;
                    acc = _v78;
                    const _v79: any = await rt.call(111, "TextSize", [_v75, _v76, _v77, _v78], this);
                    acc = _v79;
                    _v72 = _v79;
                    const _v80: any = rt.local(111, 17);
                    acc = _v80;
                    const _v81: any = 100;
                    acc = _v81;
                    const _v82: any = 160;
                    acc = _v82;
                    const _v83: any = 3;
                    acc = _v83;
                    const _v84: any = rt.local(111, (18 + (Number(_v83) & 65535)));
                    acc = _v84;
                    const _v85: any = 2;
                    acc = _v85;
                    const _v86: any = rt.op("/", ...[_v84, _v85]);
                    acc = _v86;
                    const _v87: any = rt.op("-", ...[_v82, _v86]);
                    acc = _v87;
                    let _v88: any = acc;
                    _branch89: {
                      const _v90: any = rt.get(this, "register");
                      acc = _v90;
                      const _v91: any = 7;
                      acc = _v91;
                      const _v92: any = rt.op("==", ...[_v90, _v91]);
                      acc = _v92;
                      _v88 = _v92;
                      acc = _v88;
                      if (rt.truth(_v88)) {
                        const _v93: any = 75;
                        acc = _v93;
                        _v88 = _v93;
                        break _branch89;
                      }
                      const _v94: any = rt.get(this, "register");
                      acc = _v94;
                      const _v95: any = 11;
                      acc = _v95;
                      const _v96: any = rt.op("==", ...[_v94, _v95]);
                      acc = _v96;
                      _v88 = _v96;
                      acc = _v88;
                      if (rt.truth(_v88)) {
                        const _v97: any = 65;
                        acc = _v97;
                        _v88 = _v97;
                        break _branch89;
                      }
                      const _v98: any = rt.get(this, "register");
                      acc = _v98;
                      const _v99: any = 1;
                      acc = _v99;
                      const _v100: any = rt.op("==", ...[_v98, _v99]);
                      acc = _v100;
                      _v88 = _v100;
                      acc = _v88;
                      if (rt.truth(_v88)) {
                        const _v101: any = 125;
                        acc = _v101;
                        _v88 = _v101;
                        break _branch89;
                      }
                      const _v102: any = 125;
                      acc = _v102;
                      _v88 = _v102;
                      break _branch89;
                    }
                    acc = _v88;
                    const _v103: any = 102;
                    acc = _v103;
                    const _v104: any = 0;
                    acc = _v104;
                    const _v105: any = 103;
                    acc = _v105;
                    const _v106: any = -1;
                    acc = _v106;
                    const _v107: any = 105;
                    acc = _v107;
                    const _v108: any = 4;
                    acc = _v108;
                    const _v109: any = await rt.call(111, "Display", [_v80, _v81, _v87, _v88, _v103, _v104, _v105, _v106, _v107, _v108], this);
                    acc = _v109;
                    _v72 = _v109;
                  }
                  acc = _v72;
                  _v34 = _v72;
                }
                acc = _v34;
                _v1 = _v34;
                let _v110: any = acc;
                const _v111: any = rt.get(this, "register2");
                acc = _v111;
                _v110 = _v111;
                if (rt.truth(_v111)) {
                  let _v112: any = acc;
                  _branch113: {
                    const _v114: any = rt.get(this, "register");
                    acc = _v114;
                    const _v115: any = 11;
                    acc = _v115;
                    const _v116: any = rt.op("==", ...[_v114, _v115]);
                    acc = _v116;
                    _v112 = _v116;
                    acc = _v112;
                    if (rt.truth(_v112)) {
                      const _v117: any = rt.ref("global", 0, 100);
                      acc = _v117;
                      const _v118: any = 111;
                      acc = _v118;
                      const _v119: any = 2;
                      acc = _v119;
                      const _v120: any = rt.get(this, "register2");
                      acc = _v120;
                      const _v121: any = await rt.call(111, "Format", [_v117, _v118, _v119, _v120], this);
                      acc = _v121;
                      const _v122: any = rt.setLocal(111, 17, _v121);
                      acc = _v122;
                      _v112 = _v122;
                      break _branch113;
                    }
                    const _v123: any = rt.get(this, "register");
                    acc = _v123;
                    const _v124: any = 10;
                    acc = _v124;
                    const _v125: any = rt.op("==", ...[_v123, _v124]);
                    acc = _v125;
                    _v112 = _v125;
                    acc = _v112;
                    if (rt.truth(_v112)) {
                      const _v126: any = rt.ref("global", 0, 100);
                      acc = _v126;
                      const _v127: any = 111;
                      acc = _v127;
                      const _v128: any = 3;
                      acc = _v128;
                      const _v129: any = rt.get(this, "register2");
                      acc = _v129;
                      const _v130: any = await rt.call(111, "Format", [_v126, _v127, _v128, _v129], this);
                      acc = _v130;
                      const _v131: any = rt.setLocal(111, 17, _v130);
                      acc = _v131;
                      _v112 = _v131;
                      break _branch113;
                    }
                    const _v132: any = rt.get(this, "register");
                    acc = _v132;
                    const _v133: any = 12;
                    acc = _v133;
                    const _v134: any = rt.op("==", ...[_v132, _v133]);
                    acc = _v134;
                    _v112 = _v134;
                    acc = _v112;
                    if (rt.truth(_v112)) {
                      const _v135: any = rt.ref("global", 0, 100);
                      acc = _v135;
                      const _v136: any = 111;
                      acc = _v136;
                      const _v137: any = 3;
                      acc = _v137;
                      const _v138: any = rt.get(this, "register2");
                      acc = _v138;
                      const _v139: any = await rt.call(111, "Format", [_v135, _v136, _v137, _v138], this);
                      acc = _v139;
                      const _v140: any = rt.setLocal(111, 17, _v139);
                      acc = _v140;
                      _v112 = _v140;
                      break _branch113;
                    }
                    const _v141: any = rt.get(this, "register");
                    acc = _v141;
                    const _v142: any = 1;
                    acc = _v142;
                    const _v143: any = rt.op("==", ...[_v141, _v142]);
                    acc = _v143;
                    _v112 = _v143;
                    acc = _v112;
                    if (rt.truth(_v112)) {
                      const _v144: any = rt.ref("global", 0, 100);
                      acc = _v144;
                      const _v145: any = 111;
                      acc = _v145;
                      const _v146: any = 3;
                      acc = _v146;
                      const _v147: any = rt.get(this, "register2");
                      acc = _v147;
                      const _v148: any = await rt.call(111, "Format", [_v144, _v145, _v146, _v147], this);
                      acc = _v148;
                      const _v149: any = rt.setLocal(111, 17, _v148);
                      acc = _v149;
                      _v112 = _v149;
                      break _branch113;
                    }
                    const _v150: any = rt.get(this, "register");
                    acc = _v150;
                    const _v151: any = 2;
                    acc = _v151;
                    const _v152: any = rt.op("==", ...[_v150, _v151]);
                    acc = _v152;
                    _v112 = _v152;
                    acc = _v112;
                    if (rt.truth(_v112)) {
                      const _v153: any = rt.ref("global", 0, 100);
                      acc = _v153;
                      const _v154: any = 111;
                      acc = _v154;
                      const _v155: any = 3;
                      acc = _v155;
                      const _v156: any = rt.get(this, "register2");
                      acc = _v156;
                      const _v157: any = await rt.call(111, "Format", [_v153, _v154, _v155, _v156], this);
                      acc = _v157;
                      const _v158: any = rt.setLocal(111, 17, _v157);
                      acc = _v158;
                      _v112 = _v158;
                      break _branch113;
                    }
                    const _v159: any = rt.get(this, "register");
                    acc = _v159;
                    const _v160: any = 3;
                    acc = _v160;
                    const _v161: any = rt.op("==", ...[_v159, _v160]);
                    acc = _v161;
                    _v112 = _v161;
                    acc = _v112;
                    if (rt.truth(_v112)) {
                      const _v162: any = rt.ref("global", 0, 100);
                      acc = _v162;
                      const _v163: any = 111;
                      acc = _v163;
                      const _v164: any = 3;
                      acc = _v164;
                      const _v165: any = rt.get(this, "register2");
                      acc = _v165;
                      const _v166: any = await rt.call(111, "Format", [_v162, _v163, _v164, _v165], this);
                      acc = _v166;
                      const _v167: any = rt.setLocal(111, 17, _v166);
                      acc = _v167;
                      _v112 = _v167;
                      break _branch113;
                    }
                  }
                  acc = _v112;
                  _v110 = _v112;
                  const _v168: any = 0;
                  acc = _v168;
                  const _v169: any = rt.ref("local", 111, (18 + (Number(_v168) & 65535)));
                  acc = _v169;
                  const _v170: any = rt.local(111, 17);
                  acc = _v170;
                  const _v171: any = 4;
                  acc = _v171;
                  const _v172: any = 0;
                  acc = _v172;
                  const _v173: any = await rt.call(111, "TextSize", [_v169, _v170, _v171, _v172], this);
                  acc = _v173;
                  _v110 = _v173;
                  const _v174: any = rt.local(111, 17);
                  acc = _v174;
                  const _v175: any = 100;
                  acc = _v175;
                  const _v176: any = 160;
                  acc = _v176;
                  const _v177: any = 3;
                  acc = _v177;
                  const _v178: any = rt.local(111, (18 + (Number(_v177) & 65535)));
                  acc = _v178;
                  const _v179: any = 2;
                  acc = _v179;
                  const _v180: any = rt.op("/", ...[_v178, _v179]);
                  acc = _v180;
                  const _v181: any = rt.op("-", ...[_v176, _v180]);
                  acc = _v181;
                  let _v182: any = acc;
                  _branch183: {
                    const _v184: any = rt.get(this, "register");
                    acc = _v184;
                    const _v185: any = 10;
                    acc = _v185;
                    const _v186: any = rt.op("==", ...[_v184, _v185]);
                    acc = _v186;
                    _v182 = _v186;
                    acc = _v182;
                    if (rt.truth(_v182)) {
                      const _v187: any = 95;
                      acc = _v187;
                      _v182 = _v187;
                      break _branch183;
                    }
                    const _v188: any = rt.get(this, "register");
                    acc = _v188;
                    const _v189: any = 12;
                    acc = _v189;
                    const _v190: any = rt.op("==", ...[_v188, _v189]);
                    acc = _v190;
                    _v182 = _v190;
                    acc = _v182;
                    if (rt.truth(_v182)) {
                      const _v191: any = 95;
                      acc = _v191;
                      _v182 = _v191;
                      break _branch183;
                    }
                    const _v192: any = rt.get(this, "register");
                    acc = _v192;
                    const _v193: any = 2;
                    acc = _v193;
                    const _v194: any = rt.op("==", ...[_v192, _v193]);
                    acc = _v194;
                    _v182 = _v194;
                    acc = _v182;
                    if (rt.truth(_v182)) {
                      const _v195: any = 125;
                      acc = _v195;
                      _v182 = _v195;
                      break _branch183;
                    }
                    const _v196: any = rt.get(this, "register");
                    acc = _v196;
                    const _v197: any = 11;
                    acc = _v197;
                    const _v198: any = rt.op("==", ...[_v196, _v197]);
                    acc = _v198;
                    _v182 = _v198;
                    acc = _v182;
                    if (rt.truth(_v182)) {
                      const _v199: any = 131;
                      acc = _v199;
                      _v182 = _v199;
                      break _branch183;
                    }
                    const _v200: any = 135;
                    acc = _v200;
                    _v182 = _v200;
                    break _branch183;
                  }
                  acc = _v182;
                  const _v201: any = 102;
                  acc = _v201;
                  const _v202: any = 0;
                  acc = _v202;
                  const _v203: any = 103;
                  acc = _v203;
                  const _v204: any = -1;
                  acc = _v204;
                  const _v205: any = 105;
                  acc = _v205;
                  const _v206: any = 4;
                  acc = _v206;
                  const _v207: any = await rt.call(111, "Display", [_v174, _v175, _v181, _v182, _v201, _v202, _v203, _v204, _v205, _v206], this);
                  acc = _v207;
                  _v110 = _v207;
                }
                acc = _v110;
                _v1 = _v110;
                const _v208: any = 1;
                acc = _v208;
                const _v209: any = rt.set(this, "cycles", _v208);
                acc = _v209;
                _v1 = _v209;
                break _branch4;
              }
              const _v210: any = 4;
              acc = _v210;
              _v1 = rt.op("==", _v3, _v210);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v211: any = acc;
                const _v212: any = rt.get(this, "register");
                acc = _v212;
                const _v213: any = 3;
                acc = _v213;
                const _v214: any = rt.op("==", ...[_v212, _v213]);
                acc = _v214;
                _v211 = _v214;
                if (rt.truth(_v214)) {
                  const _v215: any = 10;
                  acc = _v215;
                  const _v216: any = rt.global(417);
                  acc = _v216;
                  const _v217: any = await rt.send(_v216, "doit", [_v215]);
                  acc = _v217;
                  _v211 = _v217;
                  const _v218: any = rt.object(111, "ambulance");
                  acc = _v218;
                  const _v219: any = await rt.send(_v218, "init", []);
                  acc = _v219;
                  _v211 = _v219;
                  const _v220: any = rt.object(111, "moveAmbulance");
                  acc = _v220;
                  const _v221: any = this;
                  acc = _v221;
                  const _v222: any = await rt.send(_v221, "setScript", [_v220]);
                  acc = _v222;
                  _v211 = _v222;
                  return acc;
                  _v211 = acc;
                }
                acc = _v211;
                _v1 = _v211;
                let _v223: any = acc;
                const _v224: any = rt.get(this, "register");
                acc = _v224;
                const _v225: any = 0;
                acc = _v225;
                const _v226: any = rt.op("==", ...[_v224, _v225]);
                acc = _v226;
                _v223 = _v226;
                if (rt.truth(_v226)) {
                  const _v227: any = 20;
                  acc = _v227;
                  const _v228: any = rt.global(417);
                  acc = _v228;
                  const _v229: any = await rt.send(_v228, "doit", [_v227]);
                  acc = _v229;
                  _v223 = _v229;
                }
                acc = _v223;
                _v1 = _v223;
                const _v230: any = 240;
                acc = _v230;
                const _v231: any = await rt.call(0, "proc0_3", [_v230], this);
                acc = _v231;
                _v1 = _v231;
                const _v232: any = this;
                acc = _v232;
                const _v233: any = await rt.send(_v232, "cue", []);
                acc = _v233;
                _v1 = _v233;
                break _branch4;
              }
              const _v234: any = 5;
              acc = _v234;
              _v1 = rt.op("==", _v3, _v234);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v235: any = 0;
                acc = _v235;
                const _v236: any = rt.get(this, "client");
                acc = _v236;
                const _v237: any = await rt.send(_v236, "script", [_v235]);
                acc = _v237;
                const _v238: any = await rt.send(_v236, "cue", []);
                acc = _v238;
                _v1 = _v238;
                const _v239: any = rt.object(111, "notice");
                acc = _v239;
                const _v240: any = await rt.send(_v239, "dispose", []);
                acc = _v240;
                _v1 = _v240;
                const _v241: any = await rt.call(0, "proc0_1", [], this);
                acc = _v241;
                _v1 = _v241;
                break _branch4;
              }
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "notice",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 310, "priority": 5},
        methods: {
          // SCI startTrn.sc: notice.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 159;
            acc = _v1;
            const _v2: any = 50;
            acc = _v2;
            const _v3: any = rt.get(this, "priority");
            acc = _v3;
            const _v4: any = 16;
            acc = _v4;
            const _v5: any = 16;
            acc = _v5;
            const _v6: any = rt.object(992, "MoveTo");
            acc = _v6;
            const _v7: any = 159;
            acc = _v7;
            const _v8: any = 143;
            acc = _v8;
            const _v9: any = rt.object(111, "moveNotice");
            acc = _v9;
            const _v10: any = this;
            acc = _v10;
            const _v11: any = await rt.send(_v10, "posn", [_v1, _v2]);
            acc = _v11;
            const _v12: any = await rt.send(_v10, "setPri", [_v3]);
            acc = _v12;
            const _v13: any = await rt.send(_v10, "setStep", [_v4, _v5]);
            acc = _v13;
            const _v14: any = await rt.send(_v10, "setMotion", [_v6, _v7, _v8, _v9]);
            acc = _v14;
            const _v15: any = await rt.superSend(this, {"script": 111, "name": "notice"}, "init", []);
            acc = _v15;
            return acc;
          },
        },
      },
      {
        name: "moveAmbulance",
        className: "Script",
        parent: {"script": 999, "name": "Script"},
        isClass: false,
        properties: {},
        methods: {
          // SCI startTrn.sc: moveAmbulance.changeState
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
                const _v6: any = 21;
                acc = _v6;
                const _v7: any = rt.global(476);
                acc = _v7;
                const _v8: any = await rt.send(_v7, "play", [_v6]);
                acc = _v8;
                _v1 = _v8;
                const _v9: any = 0;
                acc = _v9;
                const _v10: any = rt.object(992, "MoveTo");
                acc = _v10;
                const _v11: any = 230;
                acc = _v11;
                const _v12: any = 155;
                acc = _v12;
                const _v13: any = this;
                acc = _v13;
                const _v14: any = rt.object(111, "ambulance");
                acc = _v14;
                const _v15: any = await rt.send(_v14, "cel", [_v9]);
                acc = _v15;
                const _v16: any = await rt.send(_v14, "setMotion", [_v10, _v11, _v12, _v13]);
                acc = _v16;
                _v1 = _v16;
                break _branch4;
              }
              const _v17: any = 1;
              acc = _v17;
              _v1 = rt.op("==", _v3, _v17);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v18: any = 242;
                acc = _v18;
                const _v19: any = 155;
                acc = _v19;
                const _v20: any = 1;
                acc = _v20;
                const _v21: any = rt.object(992, "MoveTo");
                acc = _v21;
                const _v22: any = 242;
                acc = _v22;
                const _v23: any = 50;
                acc = _v23;
                const _v24: any = this;
                acc = _v24;
                const _v25: any = rt.object(111, "ambulance");
                acc = _v25;
                const _v26: any = await rt.send(_v25, "posn", [_v18, _v19]);
                acc = _v26;
                const _v27: any = await rt.send(_v25, "cel", [_v20]);
                acc = _v27;
                const _v28: any = await rt.send(_v25, "setMotion", [_v21, _v22, _v23, _v24]);
                acc = _v28;
                _v1 = _v28;
                break _branch4;
              }
              const _v29: any = 2;
              acc = _v29;
              _v1 = rt.op("==", _v3, _v29);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v30: any = 230;
                acc = _v30;
                const _v31: any = 60;
                acc = _v31;
                const _v32: any = 2;
                acc = _v32;
                const _v33: any = rt.object(992, "MoveTo");
                acc = _v33;
                const _v34: any = 69;
                acc = _v34;
                const _v35: any = 60;
                acc = _v35;
                const _v36: any = this;
                acc = _v36;
                const _v37: any = rt.object(111, "ambulance");
                acc = _v37;
                const _v38: any = await rt.send(_v37, "posn", [_v30, _v31]);
                acc = _v38;
                const _v39: any = await rt.send(_v37, "cel", [_v32]);
                acc = _v39;
                const _v40: any = await rt.send(_v37, "setMotion", [_v33, _v34, _v35, _v36]);
                acc = _v40;
                _v1 = _v40;
                break _branch4;
              }
              const _v41: any = 3;
              acc = _v41;
              _v1 = rt.op("==", _v3, _v41);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v42: any = 77;
                acc = _v42;
                const _v43: any = 80;
                acc = _v43;
                const _v44: any = 3;
                acc = _v44;
                const _v45: any = rt.object(992, "MoveTo");
                acc = _v45;
                const _v46: any = 77;
                acc = _v46;
                const _v47: any = 155;
                acc = _v47;
                const _v48: any = this;
                acc = _v48;
                const _v49: any = rt.object(111, "ambulance");
                acc = _v49;
                const _v50: any = await rt.send(_v49, "posn", [_v42, _v43]);
                acc = _v50;
                const _v51: any = await rt.send(_v49, "cel", [_v44]);
                acc = _v51;
                const _v52: any = await rt.send(_v49, "setMotion", [_v45, _v46, _v47, _v48]);
                acc = _v52;
                _v1 = _v52;
                break _branch4;
              }
              const _v53: any = 4;
              acc = _v53;
              _v1 = rt.op("==", _v3, _v53);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v54: any = 59;
                acc = _v54;
                const _v55: any = 155;
                acc = _v55;
                const _v56: any = 0;
                acc = _v56;
                const _v57: any = rt.object(992, "MoveTo");
                acc = _v57;
                const _v58: any = 230;
                acc = _v58;
                const _v59: any = 155;
                acc = _v59;
                const _v60: any = this;
                acc = _v60;
                const _v61: any = rt.object(111, "ambulance");
                acc = _v61;
                const _v62: any = await rt.send(_v61, "posn", [_v54, _v55]);
                acc = _v62;
                const _v63: any = await rt.send(_v61, "cel", [_v56]);
                acc = _v63;
                const _v64: any = await rt.send(_v61, "setMotion", [_v57, _v58, _v59, _v60]);
                acc = _v64;
                _v1 = _v64;
                break _branch4;
              }
              const _v65: any = 5;
              acc = _v65;
              _v1 = rt.op("==", _v3, _v65);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v66: any = 0;
                acc = _v66;
                const _v67: any = rt.get(this, "client");
                acc = _v67;
                const _v68: any = await rt.send(_v67, "script", [_v66]);
                acc = _v68;
                const _v69: any = await rt.send(_v67, "cue", []);
                acc = _v69;
                _v1 = _v69;
                const _v70: any = rt.object(111, "ambulance");
                acc = _v70;
                const _v71: any = await rt.send(_v70, "dispose", []);
                acc = _v71;
                _v1 = _v71;
                const _v72: any = await rt.call(0, "proc0_1", [], this);
                acc = _v72;
                _v1 = _v72;
                break _branch4;
              }
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "ambulance",
        className: "Act",
        parent: {"script": 998, "name": "Act"},
        isClass: false,
        properties: {"view": 608, "loop": 1, "priority": 5, "ticksToDo": 8},
        methods: {
          // SCI startTrn.sc: ambulance.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 1;
            acc = _v1;
            const _v2: any = 7;
            acc = _v2;
            const _v3: any = await rt.call(111, "ScriptID", [_v1, _v2], this);
            acc = _v3;
            const _v4: any = await rt.send(_v3, "moveSpeed", []);
            acc = _v4;
            const _v5: any = 59;
            acc = _v5;
            const _v6: any = 155;
            acc = _v6;
            const _v7: any = rt.get(this, "priority");
            acc = _v7;
            const _v8: any = 10;
            acc = _v8;
            const _v9: any = 10;
            acc = _v9;
            const _v10: any = this;
            acc = _v10;
            const _v11: any = await rt.send(_v10, "moveSpeed", [_v4]);
            acc = _v11;
            const _v12: any = await rt.send(_v10, "posn", [_v5, _v6]);
            acc = _v12;
            const _v13: any = await rt.send(_v10, "setPri", [_v7]);
            acc = _v13;
            const _v14: any = await rt.send(_v10, "setStep", [_v8, _v9]);
            acc = _v14;
            const _v15: any = await rt.send(_v10, "stopUpd", []);
            acc = _v15;
            let _v16: any = acc;
            const _v17: any = rt.get(this, "mover");
            acc = _v17;
            _v16 = _v17;
            if (rt.truth(_v17)) {
              const _v18: any = 0;
              acc = _v18;
              const _v19: any = rt.get(this, "mover");
              acc = _v19;
              const _v20: any = await rt.send(_v19, "b-moveCnt", [_v18]);
              acc = _v20;
              _v16 = _v20;
            }
            acc = _v16;
            const _v21: any = await rt.superSend(this, {"script": 111, "name": "ambulance"}, "init", []);
            acc = _v21;
            return acc;
          },
          // SCI startTrn.sc: ambulance.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              const _v4: any = await rt.send(_v3, "claimed", []);
              acc = _v4;
              const _v5: any = rt.op("not", ...[_v4]);
              acc = _v5;
              _v2 = _v5;
            }
            if (rt.truth(_v2)) {
              const _v6: any = (args[0] ?? 0);
              acc = _v6;
              const _v7: any = await rt.send(_v6, "type", []);
              acc = _v7;
              const _v8: any = 2;
              acc = _v8;
              const _v9: any = rt.op("!=", ...[_v7, _v8]);
              acc = _v9;
              _v2 = _v9;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v10: any = 1;
              acc = _v10;
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = await rt.send(_v11, "claimed", [_v10]);
              acc = _v12;
              _v1 = _v12;
              const _v13: any = 5;
              acc = _v13;
              const _v14: any = rt.object(111, "moveAmbulance");
              acc = _v14;
              const _v15: any = await rt.send(_v14, "changeState", [_v13]);
              acc = _v15;
              _v1 = _v15;
            }
            acc = _v1;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {"0": "startTrn"},
  });
}
