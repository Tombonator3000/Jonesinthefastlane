// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/university.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 92eebf502e996979812ba972a4ca2a5d924016cc8d75b47490214f2ed87e6f59
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(207, {
    name: "university",
    uses: [0, 104, 108, 109, 110, 255, 891, 996, 999],
    locals: [0, 0, 0, 0, 0, 97, 111, 125, 139, 98, 75, 87, 56, 13, 12, 9, 10, 0],
    objects: [
      {
        name: "UniversityDIcon",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: true,
        properties: {"state": 1, "preReq": 0, "indexNum": 0, "typeOfGoods": 2, "fixedPrice": 1, "visitTime": 6},
        methods: {
          // SCI university.sc: UniversityDIcon.addCourse
          "addCourse": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            let _v2: any = 1;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "indexNum");
              acc = _v3;
              const _v4: any = rt.global(302);
              acc = _v4;
              const _v5: any = await rt.send(_v4, "hasDegree", [_v3]);
              acc = _v5;
              const _v6: any = rt.op("not", ...[_v5]);
              acc = _v6;
              _v2 = _v6;
            }
            if (rt.truth(_v2)) {
              let _v7: any = 0;
              if (!rt.truth(_v7)) {
                const _v8: any = rt.get(this, "preReq");
                acc = _v8;
                const _v9: any = rt.op("not", ...[_v8]);
                acc = _v9;
                _v7 = _v9;
              }
              if (!rt.truth(_v7)) {
                const _v10: any = rt.get(this, "preReq");
                acc = _v10;
                const _v11: any = rt.global(302);
                acc = _v11;
                const _v12: any = await rt.send(_v11, "hasDegree", [_v10]);
                acc = _v12;
                _v7 = _v12;
              }
              acc = _v7;
              _v2 = _v7;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v13: any = this;
              acc = _v13;
              const _v14: any = (args[0] ?? 0);
              acc = _v14;
              const _v15: any = await rt.send(_v14, "add", [_v13]);
              acc = _v15;
              _v1 = _v15;
              const _v16: any = rt.setLocal(207, 1, rt.op("+", rt.local(207, 1), 1));
              acc = _v16;
              _v1 = _v16;
              const _v17: any = 108;
              acc = _v17;
              const _v18: any = 14;
              acc = _v18;
              const _v19: any = rt.local(207, 1);
              acc = _v19;
              const _v20: any = rt.op("*", ...[_v18, _v19]);
              acc = _v20;
              const _v21: any = rt.op("-", ...[_v17, _v20]);
              acc = _v21;
              const _v22: any = rt.object(207, "books");
              acc = _v22;
              const _v23: any = await rt.send(_v22, "nsLeft", []);
              acc = _v23;
              const _v24: any = 5;
              acc = _v24;
              const _v25: any = rt.op("+", ...[_v23, _v24]);
              acc = _v25;
              const _v26: any = this;
              acc = _v26;
              const _v27: any = await rt.send(_v26, "nsTop", [_v21]);
              acc = _v27;
              const _v28: any = await rt.send(_v26, "nsLeft", [_v25]);
              acc = _v28;
              _v1 = _v28;
            }
            acc = _v1;
            return acc;
          },
          // SCI university.sc: UniversityDIcon.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.setLocal(207, 17, _v1);
            acc = _v2;
            const _v3: any = 23;
            acc = _v3;
            const _v4: any = rt.global(476);
            acc = _v4;
            const _v5: any = await rt.send(_v4, "play", [_v3]);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 207, "name": "UniversityDIcon"}, "doit", []);
            acc = _v6;
            const _v7: any = (temps[1] = _v6);
            acc = _v7;
            let _v8: any = acc;
            let _v9: any = 0;
            if (!rt.truth(_v9)) {
              const _v10: any = rt.global(302);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "enrollments", []);
              acc = _v11;
              const _v12: any = await rt.call(207, "localproc_2", [], this);
              acc = _v12;
              const _v13: any = rt.global(302);
              acc = _v13;
              const _v14: any = await rt.send(_v13, "numDegrees", []);
              acc = _v14;
              const _v15: any = rt.op("+", ...[_v12, _v14]);
              acc = _v15;
              const _v16: any = rt.op(">", ...[_v11, _v15]);
              acc = _v16;
              _v9 = _v16;
            }
            if (!rt.truth(_v9)) {
              let _v17: any = 1;
              if (rt.truth(_v17)) {
                const _v18: any = rt.global(302);
                acc = _v18;
                const _v19: any = await rt.send(_v18, "enrollments", []);
                acc = _v19;
                const _v20: any = await rt.call(207, "localproc_2", [], this);
                acc = _v20;
                const _v21: any = rt.global(302);
                acc = _v21;
                const _v22: any = await rt.send(_v21, "numDegrees", []);
                acc = _v22;
                const _v23: any = rt.op("+", ...[_v20, _v22]);
                acc = _v23;
                const _v24: any = rt.op("==", ...[_v19, _v23]);
                acc = _v24;
                _v17 = _v24;
              }
              if (rt.truth(_v17)) {
                const _v25: any = rt.get(this, "indexNum");
                acc = _v25;
                const _v26: any = rt.global(302);
                acc = _v26;
                const _v27: any = await rt.send(_v26, "courseActive", [_v25]);
                acc = _v27;
                _v17 = _v27;
              }
              acc = _v17;
              _v9 = _v17;
            }
            acc = _v9;
            _v8 = _v9;
            if (rt.truth(_v9)) {
              let _v28: any = acc;
              const _v29: any = rt.global(323);
              acc = _v29;
              const _v30: any = 60;
              acc = _v30;
              const _v31: any = rt.op("!=", ...[_v29, _v30]);
              acc = _v31;
              _v28 = _v31;
              if (rt.truth(_v31)) {
                const _v32: any = rt.get(this, "indexNum");
                acc = _v32;
                const _v33: any = 1;
                acc = _v33;
                const _v34: any = rt.global(302);
                acc = _v34;
                const _v35: any = await rt.send(_v34, "education", []);
                acc = _v35;
                const _v36: any = await rt.send(_v35, "recieve", [_v32, _v33]);
                acc = _v36;
                const _v37: any = rt.setGlobal(418, _v36);
                acc = _v37;
                _v28 = _v37;
                const _v38: any = await rt.call(207, "localproc_4", [], this);
                acc = _v38;
                _v28 = _v38;
                let _v39: any = acc;
                const _v40: any = rt.global(418);
                acc = _v40;
                const _v41: any = await rt.send(_v40, "quantity", []);
                acc = _v41;
                const _v42: any = rt.global(418);
                acc = _v42;
                const _v43: any = await rt.send(_v42, "unitsToGraduate", []);
                acc = _v43;
                const _v44: any = rt.global(302);
                acc = _v44;
                const _v45: any = await rt.send(_v44, "extraCredits", []);
                acc = _v45;
                const _v46: any = rt.op("-", ...[_v43, _v45]);
                acc = _v46;
                const _v47: any = rt.op(">=", ...[_v41, _v46]);
                acc = _v47;
                _v39 = _v47;
                if (rt.truth(_v47)) {
                  const _v48: any = rt.global(418);
                  acc = _v48;
                  const _v49: any = await rt.send(_v48, "unitsToGraduate", []);
                  acc = _v49;
                  const _v50: any = rt.global(418);
                  acc = _v50;
                  const _v51: any = await rt.send(_v50, "quantity", [_v49]);
                  acc = _v51;
                  _v39 = _v51;
                }
                acc = _v39;
                _v28 = _v39;
                const _v52: any = rt.get(this, "indexNum");
                acc = _v52;
                const _v53: any = rt.global(418);
                acc = _v53;
                const _v54: any = await rt.send(_v53, "indexNum", [_v52]);
                acc = _v54;
                _v28 = _v54;
                const _v55: any = rt.get(this, "visitTime");
                acc = _v55;
                const _v56: any = rt.global(417);
                acc = _v56;
                const _v57: any = await rt.send(_v56, "doit", [_v55]);
                acc = _v57;
                _v28 = _v57;
                let _v58: any = acc;
                const _v59: any = rt.get(this, "indexNum");
                acc = _v59;
                const _v60: any = rt.global(302);
                acc = _v60;
                const _v61: any = await rt.send(_v60, "hasDegree", [_v59]);
                acc = _v61;
                _v58 = _v61;
                if (rt.truth(_v61)) {
                  const _v62: any = rt.global(477);
                  acc = _v62;
                  const _v63: any = await rt.send(_v62, "fade", []);
                  acc = _v63;
                  _v58 = _v63;
                  const _v64: any = 0;
                  acc = _v64;
                  const _v65: any = rt.global(302);
                  acc = _v65;
                  const _v66: any = await rt.send(_v65, "notEnoughEd", [_v64]);
                  acc = _v66;
                  _v58 = _v66;
                  const _v67: any = 5;
                  acc = _v67;
                  const _v68: any = await rt.call(0, "proc0_13", [_v67], this);
                  acc = _v68;
                  _v58 = _v68;
                  const _v69: any = rt.global(302);
                  acc = _v69;
                  const _v70: any = await rt.send(_v69, "eduCredit", []);
                  acc = _v70;
                  const _v71: any = 5;
                  acc = _v71;
                  const _v72: any = rt.op("+", ...[_v70, _v71]);
                  acc = _v72;
                  const _v73: any = rt.global(302);
                  acc = _v73;
                  const _v74: any = await rt.send(_v73, "eduCredit", [_v72]);
                  acc = _v74;
                  _v58 = _v74;
                  const _v75: any = rt.global(302);
                  acc = _v75;
                  const _v76: any = await rt.send(_v75, "dependibility", []);
                  acc = _v76;
                  const _v77: any = 5;
                  acc = _v77;
                  const _v78: any = rt.op("+", ...[_v76, _v77]);
                  acc = _v78;
                  const _v79: any = rt.global(302);
                  acc = _v79;
                  const _v80: any = await rt.send(_v79, "dependibility", [_v78]);
                  acc = _v80;
                  _v58 = _v80;
                  const _v81: any = rt.global(302);
                  acc = _v81;
                  const _v82: any = await rt.send(_v81, "expCredit", []);
                  acc = _v82;
                  const _v83: any = 5;
                  acc = _v83;
                  const _v84: any = rt.op("+", ...[_v82, _v83]);
                  acc = _v84;
                  const _v85: any = rt.global(302);
                  acc = _v85;
                  const _v86: any = await rt.send(_v85, "expCredit", [_v84]);
                  acc = _v86;
                  _v58 = _v86;
                  const _v87: any = 0;
                  acc = _v87;
                  const _v88: any = rt.object(996, "User");
                  acc = _v88;
                  const _v89: any = await rt.send(_v88, "canControl", [_v87]);
                  acc = _v89;
                  _v58 = _v89;
                  const _v90: any = 0;
                  acc = _v90;
                  const _v91: any = this;
                  acc = _v91;
                  const _v92: any = await rt.send(_v91, "select", [_v90]);
                  acc = _v92;
                  _v58 = _v92;
                  const _v93: any = 0;
                  acc = _v93;
                  const _v94: any = rt.object(207, "exitButton");
                  acc = _v94;
                  const _v95: any = await rt.send(_v94, "select", [_v93]);
                  acc = _v95;
                  _v58 = _v95;
                  const _v96: any = rt.object(207, "exitButton");
                  acc = _v96;
                  const _v97: any = rt.object(207, "university");
                  acc = _v97;
                  const _v98: any = await rt.send(_v97, "theItem", [_v96]);
                  acc = _v98;
                  _v58 = _v98;
                  const _v99: any = rt.object(207, "university");
                  acc = _v99;
                  const _v100: any = 291;
                  acc = _v100;
                  const _v101: any = await rt.call(0, "proc0_15", [_v99, _v100], this);
                  acc = _v101;
                  _v58 = _v101;
                  const _v102: any = rt.get(this, "client");
                  acc = _v102;
                  const _v103: any = rt.get(this, "indexNum");
                  acc = _v103;
                  const _v104: any = 230;
                  acc = _v104;
                  const _v105: any = 0;
                  acc = _v105;
                  const _v106: any = await rt.call(207, "ScriptID", [_v104, _v105], this);
                  acc = _v106;
                  const _v107: any = await rt.send(_v106, "init", [_v102, _v103]);
                  acc = _v107;
                  _v58 = _v107;
                  const _v108: any = 41;
                  acc = _v108;
                  const _v109: any = rt.global(477);
                  acc = _v109;
                  const _v110: any = await rt.send(_v109, "play", [_v108]);
                  acc = _v110;
                  _v58 = _v110;
                  const _v111: any = rt.object(207, "university");
                  acc = _v111;
                  const _v112: any = await rt.send(_v111, "draw", []);
                  acc = _v112;
                  _v58 = _v112;
                  const _v115: any = rt.object(207, "university");
                  acc = _v115;
                  const _v116: any = await rt.send(_v115, "size", []);
                  acc = _v116;
                  const _v117: any = 1;
                  acc = _v117;
                  const _v118: any = rt.op("-", ...[_v116, _v117]);
                  acc = _v118;
                  const _v119: any = (temps[0] = _v118);
                  acc = _v119;
                  _loop113: for (;;) {
                    const _v120: any = (temps[0] ?? 0);
                    acc = _v120;
                    const _v121: any = 2;
                    acc = _v121;
                    const _v122: any = rt.op(">", ...[_v120, _v121]);
                    acc = _v122;
                    if (!rt.truth(_v122)) break _loop113;
                    _continue114: {
                      let _v123: any = acc;
                      const _v124: any = rt.object(207, "UniversityDIcon");
                      acc = _v124;
                      const _v125: any = (temps[0] ?? 0);
                      acc = _v125;
                      const _v126: any = rt.object(207, "university");
                      acc = _v126;
                      const _v127: any = await rt.send(_v126, "at", [_v125]);
                      acc = _v127;
                      const _v128: any = await rt.send(_v127, "isMemberOf", [_v124]);
                      acc = _v128;
                      _v123 = _v128;
                      if (rt.truth(_v128)) {
                        const _v129: any = (temps[0] ?? 0);
                        acc = _v129;
                        const _v130: any = rt.object(207, "university");
                        acc = _v130;
                        const _v131: any = await rt.send(_v130, "at", [_v129]);
                        acc = _v131;
                        const _v132: any = rt.object(207, "university");
                        acc = _v132;
                        const _v133: any = await rt.send(_v132, "delete", [_v131]);
                        acc = _v133;
                        _v123 = _v133;
                      }
                      acc = _v123;
                    }
                    const _v134: any = (temps[0] = rt.op("-", (temps[0] ?? 0), 1));
                    acc = _v134;
                  }
                  _v58 = acc;
                  const _v135: any = rt.object(207, "books");
                  acc = _v135;
                  const _v136: any = await rt.send(_v135, "erase", []);
                  acc = _v136;
                  _v58 = _v136;
                  const _v137: any = await rt.call(207, "localproc_3", [], this);
                  acc = _v137;
                  _v58 = _v137;
                  let _v138: any = acc;
                  const _v139: any = rt.local(207, 1);
                  acc = _v139;
                  _v138 = _v139;
                  if (rt.truth(_v139)) {
                    const _v140: any = rt.object(207, "books");
                    acc = _v140;
                    const _v141: any = await rt.send(_v140, "draw", []);
                    acc = _v141;
                    _v138 = _v141;
                    const _v144: any = rt.object(207, "university");
                    acc = _v144;
                    const _v145: any = await rt.send(_v144, "size", []);
                    acc = _v145;
                    const _v146: any = 1;
                    acc = _v146;
                    const _v147: any = rt.op("-", ...[_v145, _v146]);
                    acc = _v147;
                    const _v148: any = (temps[2] = _v147);
                    acc = _v148;
                    _loop142: for (;;) {
                      const _v149: any = (temps[2] ?? 0);
                      acc = _v149;
                      const _v150: any = 2;
                      acc = _v150;
                      const _v151: any = rt.op(">", ...[_v149, _v150]);
                      acc = _v151;
                      if (!rt.truth(_v151)) break _loop142;
                      _continue143: {
                        let _v152: any = acc;
                        const _v153: any = rt.object(207, "UniversityDIcon");
                        acc = _v153;
                        const _v154: any = (temps[2] ?? 0);
                        acc = _v154;
                        const _v155: any = rt.object(207, "university");
                        acc = _v155;
                        const _v156: any = await rt.send(_v155, "at", [_v154]);
                        acc = _v156;
                        const _v157: any = await rt.send(_v156, "isMemberOf", [_v153]);
                        acc = _v157;
                        _v152 = _v157;
                        if (rt.truth(_v157)) {
                          const _v158: any = (temps[2] ?? 0);
                          acc = _v158;
                          const _v159: any = rt.object(207, "university");
                          acc = _v159;
                          const _v160: any = await rt.send(_v159, "at", [_v158]);
                          acc = _v160;
                          const _v161: any = await rt.send(_v160, "init", []);
                          acc = _v161;
                          const _v162: any = await rt.send(_v160, "setSize", []);
                          acc = _v162;
                          const _v163: any = await rt.send(_v160, "draw", []);
                          acc = _v163;
                          _v152 = _v163;
                        }
                        acc = _v152;
                      }
                      const _v164: any = (temps[2] = rt.op("-", (temps[2] ?? 0), 1));
                      acc = _v164;
                    }
                    _v138 = acc;
                    const _v165: any = await rt.call(207, "localproc_4", [], this);
                    acc = _v165;
                    _v138 = _v165;
                  } else {
                    const _v166: any = rt.object(207, "enrollButton");
                    acc = _v166;
                    const _v167: any = await rt.send(_v166, "erase", []);
                    acc = _v167;
                    _v138 = _v167;
                    const _v168: any = rt.object(207, "enrollButton");
                    acc = _v168;
                    const _v169: any = rt.object(207, "books");
                    acc = _v169;
                    const _v170: any = rt.object(207, "university");
                    acc = _v170;
                    const _v171: any = await rt.send(_v170, "delete", [_v168, _v169]);
                    acc = _v171;
                    _v138 = _v171;
                  }
                  acc = _v138;
                  _v58 = _v138;
                  let _v172: any = acc;
                  const _v173: any = rt.object(207, "timeClock");
                  acc = _v173;
                  const _v174: any = rt.object(207, "university");
                  acc = _v174;
                  const _v175: any = await rt.send(_v174, "contains", [_v173]);
                  acc = _v175;
                  _v172 = _v175;
                  if (rt.truth(_v175)) {
                    const _v176: any = rt.object(207, "timeClock");
                    acc = _v176;
                    const _v177: any = rt.object(207, "university");
                    acc = _v177;
                    const _v178: any = await rt.send(_v177, "delete", [_v176]);
                    acc = _v178;
                    _v172 = _v178;
                    const _v179: any = rt.object(207, "timeClock");
                    acc = _v179;
                    const _v180: any = rt.object(207, "university");
                    acc = _v180;
                    const _v181: any = await rt.send(_v180, "add", [_v179]);
                    acc = _v181;
                    _v172 = _v181;
                  }
                  acc = _v172;
                  _v58 = _v172;
                  const _v182: any = rt.object(207, "dialogKeyMouse");
                  acc = _v182;
                  const _v183: any = await rt.send(_v182, "release", []);
                  acc = _v183;
                  _v58 = _v183;
                  const _v184: any = rt.object(207, "university");
                  acc = _v184;
                  const _v185: any = rt.object(207, "dialogKeyMouse");
                  acc = _v185;
                  let _v186: any = acc;
                  const _v187: any = rt.local(207, 1);
                  acc = _v187;
                  const _v188: any = rt.op("not", ...[_v187]);
                  acc = _v188;
                  _v186 = _v188;
                  if (rt.truth(_v188)) {
                    const _v189: any = rt.object(207, "university");
                    acc = _v189;
                    const _v190: any = await rt.send(_v189, "size", []);
                    acc = _v190;
                    const _v191: any = 1;
                    acc = _v191;
                    const _v192: any = rt.op("-", ...[_v190, _v191]);
                    acc = _v192;
                    const _v193: any = rt.object(207, "university");
                    acc = _v193;
                    const _v194: any = await rt.send(_v193, "at", [_v192]);
                    acc = _v194;
                    _v186 = _v194;
                  } else {
                    const _v195: any = rt.local(207, 3);
                    acc = _v195;
                    const _v196: any = rt.object(207, "university");
                    acc = _v196;
                    const _v197: any = await rt.send(_v196, "at", [_v195]);
                    acc = _v197;
                    _v186 = _v197;
                  }
                  acc = _v186;
                  const _v198: any = await rt.call(207, "localproc_1", [_v184, _v185, _v186], this);
                  acc = _v198;
                  _v58 = _v198;
                  const _v199: any = 1;
                  acc = _v199;
                  const _v200: any = 9;
                  acc = _v200;
                  const _v201: any = rt.global(302);
                  acc = _v201;
                  const _v202: any = await rt.send(_v201, "numDegrees", []);
                  acc = _v202;
                  const _v203: any = rt.op("*", ...[_v200, _v202]);
                  acc = _v203;
                  const _v204: any = rt.op("+", ...[_v199, _v203]);
                  acc = _v204;
                  const _v205: any = rt.global(302);
                  acc = _v205;
                  const _v206: any = await rt.send(_v205, "eduStat", [_v204]);
                  acc = _v206;
                  _v58 = _v206;
                }
                acc = _v58;
                _v28 = _v58;
              } else {
                let _v207: any = acc;
                const _v208: any = rt.global(413);
                acc = _v208;
                _v207 = _v208;
                if (rt.truth(_v208)) {
                  const _v209: any = 16;
                  acc = _v209;
                  const _v210: any = rt.global(413);
                  acc = _v210;
                  const _v211: any = await rt.send(_v210, "init", [_v209]);
                  acc = _v211;
                  _v207 = _v211;
                }
                acc = _v207;
                _v28 = _v207;
                const _v212: any = 207;
                acc = _v212;
                const _v213: any = 22;
                acc = _v213;
                const _v214: any = 310;
                acc = _v214;
                const _v215: any = rt.global(413);
                acc = _v215;
                const _v216: any = rt.global(440);
                acc = _v216;
                const _v217: any = rt.global(441);
                acc = _v217;
                const _v218: any = rt.global(442);
                acc = _v218;
                const _v219: any = 70;
                acc = _v219;
                const _v220: any = 70;
                acc = _v220;
                const _v221: any = 25;
                acc = _v221;
                const _v222: any = rt.global(426);
                acc = _v222;
                const _v223: any = await rt.call(255, "Print", [_v212, _v213, _v214, _v215, _v216, _v217, _v218, _v219, _v220, _v221, _v222], this);
                acc = _v223;
                _v28 = _v223;
              }
              acc = _v28;
              _v8 = _v28;
            } else {
              let _v224: any = acc;
              const _v225: any = rt.global(413);
              acc = _v225;
              _v224 = _v225;
              if (rt.truth(_v225)) {
                const _v226: any = 16;
                acc = _v226;
                const _v227: any = rt.global(413);
                acc = _v227;
                const _v228: any = await rt.send(_v227, "init", [_v226]);
                acc = _v228;
                _v224 = _v228;
              }
              acc = _v224;
              _v8 = _v224;
              const _v229: any = 0;
              acc = _v229;
              const _v230: any = (temps[1] = _v229);
              acc = _v230;
              _v8 = _v230;
              const _v231: any = 207;
              acc = _v231;
              const _v232: any = 23;
              acc = _v232;
              const _v233: any = 310;
              acc = _v233;
              const _v234: any = rt.global(413);
              acc = _v234;
              const _v235: any = rt.global(440);
              acc = _v235;
              const _v236: any = rt.global(441);
              acc = _v236;
              const _v237: any = rt.global(442);
              acc = _v237;
              const _v238: any = 70;
              acc = _v238;
              const _v239: any = 113;
              acc = _v239;
              const _v240: any = await rt.call(255, "Print", [_v231, _v232, _v233, _v234, _v235, _v236, _v237, _v238, _v239], this);
              acc = _v240;
              _v8 = _v240;
            }
            acc = _v8;
            const _v241: any = (temps[1] ?? 0);
            acc = _v241;
            return _v241;
            return acc;
          },
          // SCI university.sc: UniversityDIcon.select
          "select": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
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
        name: "notEnoughCash",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI university.sc: notEnoughCash.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 16;
            acc = _v1;
            const _v2: any = rt.global(413);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "init", [_v1]);
            acc = _v3;
            const _v4: any = 207;
            acc = _v4;
            const _v5: any = 25;
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
        name: "university",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI university.sc: university.init
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
              const _v4: any = 1;
              acc = _v4;
              const _v5: any = rt.setLocal(207, 17, _v4);
              acc = _v5;
              _v1 = _v5;
              const _v6: any = 131;
              acc = _v6;
              const _v7: any = 207;
              acc = _v7;
              const _v8: any = await rt.call(207, "Load", [_v6, _v7], this);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = 2;
              acc = _v9;
              const _v10: any = await rt.call(0, "proc0_17", [_v9], this);
              acc = _v10;
              _v1 = _v10;
              const _v11: any = rt.object(207, "dialogKeyMouse");
              acc = _v11;
              const _v12: any = rt.set(this, "keyMouseList", _v11);
              acc = _v12;
              _v1 = _v12;
              const _v13: any = rt.global(502);
              acc = _v13;
              const _v14: any = rt.set(this, "prevDialog", _v13);
              acc = _v14;
              _v1 = _v14;
              const _v15: any = this;
              acc = _v15;
              const _v16: any = rt.setGlobal(502, _v15);
              acc = _v16;
              _v1 = _v16;
              const _v17: any = 7;
              acc = _v17;
              const _v18: any = rt.setGlobal(440, _v17);
              acc = _v18;
              _v1 = _v18;
              const _v19: any = 110;
              acc = _v19;
              const _v20: any = rt.setGlobal(441, _v19);
              acc = _v20;
              _v1 = _v20;
              const _v21: any = 78;
              acc = _v21;
              const _v22: any = rt.setGlobal(442, _v21);
              acc = _v22;
              _v1 = _v22;
              let _v23: any = acc;
              const _v24: any = rt.global(534);
              acc = _v24;
              const _v25: any = 2;
              acc = _v25;
              const _v26: any = rt.op("<", ...[_v24, _v25]);
              acc = _v26;
              _v23 = _v26;
              if (rt.truth(_v26)) {
                const _v27: any = 128;
                acc = _v27;
                const _v28: any = rt.object(207, "theTalker");
                acc = _v28;
                const _v29: any = await rt.send(_v28, "view", []);
                acc = _v29;
                const _v30: any = await rt.call(207, "Load", [_v27, _v29], this);
                acc = _v30;
                _v23 = _v30;
              }
              acc = _v23;
              _v1 = _v23;
              const _v31: any = rt.object(207, "notEnoughCash");
              acc = _v31;
              const _v32: any = rt.setGlobal(424, _v31);
              acc = _v32;
              _v1 = _v32;
              const _v33: any = (args[0] ?? 0);
              acc = _v33;
              const _v34: any = rt.set(this, "client", _v33);
              acc = _v34;
              _v1 = _v34;
              const _v35: any = 2;
              acc = _v35;
              const _v36: any = rt.global(417);
              acc = _v36;
              const _v37: any = await rt.send(_v36, "doit", [_v35]);
              acc = _v37;
              _v1 = _v37;
              const _v38: any = 7;
              acc = _v38;
              const _v39: any = rt.setGlobal(400, _v38);
              acc = _v39;
              _v1 = _v39;
              const _v40: any = rt.object(207, "theTalker");
              acc = _v40;
              const _v41: any = rt.setGlobal(413, _v40);
              acc = _v41;
              _v1 = _v41;
              let _v42: any = acc;
              const _v43: any = rt.global(302);
              acc = _v43;
              const _v44: any = await rt.send(_v43, "playing", []);
              acc = _v44;
              const _v45: any = 29;
              acc = _v45;
              const _v46: any = rt.op("==", ...[_v44, _v45]);
              acc = _v46;
              _v42 = _v46;
              if (rt.truth(_v46)) {
                const _v47: any = rt.object(207, "computerScript");
                acc = _v47;
                const _v48: any = this;
                acc = _v48;
                const _v49: any = await rt.send(_v48, "setScript", [_v47]);
                acc = _v49;
                _v42 = _v49;
                const _v50: any = rt.object(207, "computerScript");
                acc = _v50;
                const _v51: any = await rt.send(_v50, "cue", []);
                acc = _v51;
                _v42 = _v51;
              }
              acc = _v42;
              _v1 = _v42;
              const _v52: any = rt.global(59);
              acc = _v52;
              const _v53: any = rt.object(207, "background");
              acc = _v53;
              const _v54: any = rt.object(207, "theTalker");
              acc = _v54;
              const _v55: any = rt.object(207, "books");
              acc = _v55;
              const _v56: any = rt.object(207, "exitButton");
              acc = _v56;
              const _v57: any = rt.object(207, "enrollButton");
              acc = _v57;
              const _v58: any = this;
              acc = _v58;
              const _v59: any = await rt.send(_v58, "window", [_v52]);
              acc = _v59;
              const _v60: any = await rt.send(_v58, "add", [_v53, _v54, _v55, _v56, _v57]);
              acc = _v60;
              _v1 = _v60;
              const _v61: any = 5;
              acc = _v61;
              const _v62: any = rt.setLocal(207, 3, _v61);
              acc = _v62;
              _v1 = _v62;
              let _v63: any = acc;
              const _v64: any = rt.global(302);
              acc = _v64;
              const _v65: any = await rt.send(_v64, "worksAt", []);
              acc = _v65;
              const _v66: any = 7;
              acc = _v66;
              const _v67: any = rt.op("==", ...[_v65, _v66]);
              acc = _v67;
              _v63 = _v67;
              if (rt.truth(_v67)) {
                const _v68: any = 128;
                acc = _v68;
                const _v69: any = 750;
                acc = _v69;
                const _v70: any = await rt.call(207, "Load", [_v68, _v69], this);
                acc = _v70;
                _v63 = _v70;
                const _v71: any = rt.object(207, "workButton");
                acc = _v71;
                const _v72: any = this;
                acc = _v72;
                const _v73: any = await rt.send(_v72, "add", [_v71]);
                acc = _v73;
                _v63 = _v73;
                const _v74: any = rt.setLocal(207, 3, rt.op("+", rt.local(207, 3), 1));
                acc = _v74;
                _v63 = _v74;
              }
              acc = _v63;
              _v1 = _v63;
              const _v75: any = await rt.call(207, "localproc_3", [], this);
              acc = _v75;
              _v1 = _v75;
              let _v76: any = acc;
              const _v77: any = rt.local(207, 1);
              acc = _v77;
              const _v78: any = rt.op("not", ...[_v77]);
              acc = _v78;
              _v76 = _v78;
              if (rt.truth(_v78)) {
                const _v79: any = rt.object(207, "books");
                acc = _v79;
                const _v80: any = rt.object(207, "enrollButton");
                acc = _v80;
                const _v81: any = this;
                acc = _v81;
                const _v82: any = await rt.send(_v81, "delete", [_v79, _v80]);
                acc = _v82;
                _v76 = _v82;
                const _v83: any = rt.setLocal(207, 3, rt.op("-", rt.local(207, 3), 1));
                acc = _v83;
                _v76 = _v83;
              }
              acc = _v76;
              _v1 = _v76;
              const _v84: any = rt.object(207, "enrollmentFee");
              acc = _v84;
              const _v85: any = await rt.send(_v84, "init", []);
              acc = _v85;
              _v1 = _v85;
              const _v86: any = 102;
              acc = _v86;
              const _v87: any = 1;
              acc = _v87;
              const _v88: any = 153;
              acc = _v88;
              const _v89: any = 69;
              acc = _v89;
              const _v90: any = 44;
              acc = _v90;
              const _v91: any = 0;
              acc = _v91;
              const _v92: any = 15;
              acc = _v92;
              const _v93: any = this;
              acc = _v93;
              const _v94: any = await rt.send(_v93, "eachElementDo", [_v86, _v87]);
              acc = _v94;
              const _v95: any = await rt.send(_v93, "eachElementDo", [_v88]);
              acc = _v95;
              const _v96: any = await rt.send(_v93, "moveTo", [_v89, _v90]);
              acc = _v96;
              const _v97: any = await rt.send(_v93, "open", [_v91, _v92]);
              acc = _v97;
              _v1 = _v97;
              let _v98: any = acc;
              const _v99: any = rt.global(302);
              acc = _v99;
              const _v100: any = await rt.send(_v99, "worksAt", []);
              acc = _v100;
              const _v101: any = 7;
              acc = _v101;
              const _v102: any = rt.op("==", ...[_v100, _v101]);
              acc = _v102;
              _v98 = _v102;
              if (rt.truth(_v102)) {
                const _v103: any = rt.object(207, "timeClock");
                acc = _v103;
                const _v104: any = this;
                acc = _v104;
                const _v105: any = await rt.send(_v104, "add", [_v103]);
                acc = _v105;
                _v98 = _v105;
                const _v106: any = rt.object(207, "timeClock");
                acc = _v106;
                const _v107: any = await rt.send(_v106, "init", []);
                acc = _v107;
                const _v108: any = await rt.send(_v106, "setSize", []);
                acc = _v108;
                const _v109: any = await rt.send(_v106, "draw", []);
                acc = _v109;
                _v98 = _v109;
              }
              acc = _v98;
              _v1 = _v98;
              const _v110: any = 41;
              acc = _v110;
              const _v111: any = rt.global(477);
              acc = _v111;
              const _v112: any = await rt.send(_v111, "playBed", [_v110]);
              acc = _v112;
              _v1 = _v112;
              const _v113: any = rt.get(this, "keyMouseList");
              acc = _v113;
              const _v114: any = rt.object(891, "KeyMouse");
              acc = _v114;
              const _v115: any = await rt.send(_v114, "setList", [_v113]);
              acc = _v115;
              _v1 = _v115;
              const _v116: any = this;
              acc = _v116;
              const _v117: any = rt.get(this, "keyMouseList");
              acc = _v117;
              let _v118: any = acc;
              const _v119: any = rt.local(207, 1);
              acc = _v119;
              const _v120: any = rt.op("not", ...[_v119]);
              acc = _v120;
              _v118 = _v120;
              if (rt.truth(_v120)) {
                const _v121: any = rt.object(207, "exitButton");
                acc = _v121;
                _v118 = _v121;
              } else {
                const _v122: any = rt.local(207, 3);
                acc = _v122;
                const _v123: any = this;
                acc = _v123;
                const _v124: any = await rt.send(_v123, "at", [_v122]);
                acc = _v124;
                _v118 = _v124;
              }
              acc = _v118;
              const _v125: any = await rt.call(207, "localproc_1", [_v116, _v117, _v118], this);
              acc = _v125;
              _v1 = _v125;
              const _v126: any = rt.global(302);
              acc = _v126;
              const _v127: any = await rt.send(_v126, "cash", []);
              acc = _v127;
              const _v128: any = 1;
              acc = _v128;
              const _v129: any = rt.op("-", ...[_v127, _v128]);
              acc = _v129;
              const _v130: any = rt.global(305);
              acc = _v130;
              const _v131: any = await rt.send(_v130, "setSize", []);
              acc = _v131;
              const _v132: any = await rt.send(_v130, "value", [_v129]);
              acc = _v132;
              const _v133: any = await rt.send(_v130, "draw", []);
              acc = _v133;
              _v1 = _v133;
              const _v134: any = 1;
              acc = _v134;
              const _v135: any = rt.object(996, "User");
              acc = _v135;
              const _v136: any = await rt.send(_v135, "canControl", [_v134]);
              acc = _v136;
              _v1 = _v136;
              let _v137: any = acc;
              const _v138: any = await rt.call(0, "proc0_14", [], this);
              acc = _v138;
              _v137 = _v138;
              if (rt.truth(_v138)) {
                const _v139: any = rt.global(413);
                acc = _v139;
                const _v140: any = await rt.send(_v139, "init", []);
                acc = _v140;
                _v137 = _v140;
                const _v141: any = 207;
                acc = _v141;
                const _v142: any = 0;
                acc = _v142;
                const _v143: any = 21;
                acc = _v143;
                const _v144: any = await rt.call(207, "Random", [_v142, _v143], this);
                acc = _v144;
                const _v145: any = 310;
                acc = _v145;
                const _v146: any = rt.global(413);
                acc = _v146;
                const _v147: any = rt.global(440);
                acc = _v147;
                const _v148: any = rt.global(441);
                acc = _v148;
                const _v149: any = rt.global(442);
                acc = _v149;
                const _v150: any = 70;
                acc = _v150;
                const _v151: any = 100;
                acc = _v151;
                const _v152: any = 25;
                acc = _v152;
                const _v153: any = rt.global(426);
                acc = _v153;
                const _v154: any = await rt.call(255, "Print", [_v141, _v144, _v145, _v146, _v147, _v148, _v149, _v150, _v151, _v152, _v153], this);
                acc = _v154;
                _v137 = _v154;
              }
              acc = _v137;
              _v1 = _v137;
              let _v155: any = acc;
              let _v156: any = 1;
              if (rt.truth(_v156)) {
                const _v157: any = rt.global(302);
                acc = _v157;
                const _v158: any = await rt.send(_v157, "coursesDone", []);
                acc = _v158;
                const _v159: any = rt.op("not", ...[_v158]);
                acc = _v159;
                _v156 = _v159;
              }
              if (rt.truth(_v156)) {
                const _v160: any = rt.local(207, 1);
                acc = _v160;
                const _v161: any = rt.op("not", ...[_v160]);
                acc = _v161;
                _v156 = _v161;
              }
              acc = _v156;
              _v155 = _v156;
              if (rt.truth(_v156)) {
                const _v162: any = 1;
                acc = _v162;
                const _v163: any = rt.global(302);
                acc = _v163;
                const _v164: any = await rt.send(_v163, "coursesDone", [_v162]);
                acc = _v164;
                _v155 = _v164;
                const _v165: any = rt.global(413);
                acc = _v165;
                const _v166: any = await rt.send(_v165, "init", []);
                acc = _v166;
                _v155 = _v166;
                const _v167: any = 207;
                acc = _v167;
                const _v168: any = 26;
                acc = _v168;
                const _v169: any = 310;
                acc = _v169;
                const _v170: any = rt.global(413);
                acc = _v170;
                const _v171: any = rt.global(440);
                acc = _v171;
                const _v172: any = rt.global(441);
                acc = _v172;
                const _v173: any = rt.global(442);
                acc = _v173;
                const _v174: any = 70;
                acc = _v174;
                const _v175: any = 100;
                acc = _v175;
                const _v176: any = 25;
                acc = _v176;
                const _v177: any = rt.global(426);
                acc = _v177;
                const _v178: any = await rt.call(255, "Print", [_v167, _v168, _v169, _v170, _v171, _v172, _v173, _v174, _v175, _v176, _v177], this);
                acc = _v178;
                _v155 = _v178;
              }
              acc = _v155;
              _v1 = _v155;
            } else {
              const _v179: any = rt.get(this, "theItem");
              acc = _v179;
              const _v180: any = rt.object(891, "KeyMouse");
              acc = _v180;
              const _v181: any = await rt.send(_v180, "setCursor", [_v179]);
              acc = _v181;
              _v1 = _v181;
            }
            acc = _v1;
            const _v182: any = 0;
            acc = _v182;
            const _v183: any = rt.setGlobal(518, _v182);
            acc = _v183;
            const _v184: any = 0;
            acc = _v184;
            const _v185: any = 0;
            acc = _v185;
            const _v186: any = this;
            acc = _v186;
            const _v187: any = await rt.send(_v186, "doit", [_v184, _v185]);
            acc = _v187;
            const _v188: any = (temps[0] = _v187);
            acc = _v188;
            let _v189: any = acc;
            const _v190: any = (temps[0] ?? 0);
            acc = _v190;
            const _v191: any = await rt.call(207, "IsObject", [_v190], this);
            acc = _v191;
            _v189 = _v191;
            if (rt.truth(_v191)) {
              let _v192: any = acc;
              const _v193: any = (temps[0] ?? 0);
              acc = _v193;
              const _v194: any = this;
              acc = _v194;
              const _v195: any = await rt.send(_v194, "contains", [_v193]);
              acc = _v195;
              _v192 = _v195;
              if (rt.truth(_v195)) {
                const _v196: any = 0;
                acc = _v196;
                const _v197: any = (temps[0] = _v196);
                acc = _v197;
                _v192 = _v197;
              }
              acc = _v192;
              _v189 = _v192;
            } else {
              const _v198: any = 1;
              acc = _v198;
              const _v199: any = (temps[0] = _v198);
              acc = _v199;
              _v189 = _v199;
            }
            acc = _v189;
            const _v200: any = rt.global(477);
            acc = _v200;
            const _v201: any = await rt.send(_v200, "fade", []);
            acc = _v201;
            let _v202: any = acc;
            const _v203: any = rt.get(this, "prevDialog");
            acc = _v203;
            _v202 = _v203;
            if (rt.truth(_v203)) {
              const _v204: any = rt.get(this, "prevDialog");
              acc = _v204;
              const _v205: any = await rt.send(_v204, "keyMouseList", []);
              acc = _v205;
              _v202 = _v205;
            } else {
              const _v206: any = rt.global(432);
              acc = _v206;
              _v202 = _v206;
            }
            acc = _v202;
            const _v207: any = rt.object(891, "KeyMouse");
            acc = _v207;
            const _v208: any = await rt.send(_v207, "setList", [_v202]);
            acc = _v208;
            const _v209: any = rt.get(this, "keyMouseList");
            acc = _v209;
            const _v210: any = await rt.send(_v209, "release", []);
            acc = _v210;
            const _v211: any = rt.get(this, "keyMouseList");
            acc = _v211;
            const _v212: any = await rt.send(_v211, "dispose", []);
            acc = _v212;
            const _v213: any = rt.get(this, "prevDialog");
            acc = _v213;
            const _v214: any = rt.setGlobal(502, _v213);
            acc = _v214;
            const _v215: any = this;
            acc = _v215;
            const _v216: any = 291;
            acc = _v216;
            const _v217: any = await rt.call(0, "proc0_15", [_v215, _v216], this);
            acc = _v217;
            const _v218: any = rt.object(207, "workButton");
            acc = _v218;
            const _v219: any = await rt.send(_v218, "dispose", []);
            acc = _v219;
            const _v220: any = this;
            acc = _v220;
            const _v221: any = await rt.send(_v220, "dispose", []);
            acc = _v221;
            const _v222: any = 11;
            acc = _v222;
            const _v223: any = rt.get(this, "nsTop");
            acc = _v223;
            const _v224: any = 1;
            acc = _v224;
            const _v225: any = rt.op("+", ...[_v223, _v224]);
            acc = _v225;
            const _v226: any = rt.get(this, "nsLeft");
            acc = _v226;
            const _v227: any = rt.get(this, "nsBottom");
            acc = _v227;
            const _v228: any = 1;
            acc = _v228;
            const _v229: any = rt.op("-", ...[_v227, _v228]);
            acc = _v229;
            const _v230: any = rt.get(this, "nsRight");
            acc = _v230;
            const _v231: any = 3;
            acc = _v231;
            const _v232: any = rt.op("-", ...[_v230, _v231]);
            acc = _v232;
            const _v233: any = 2;
            acc = _v233;
            const _v234: any = 0;
            acc = _v234;
            const _v235: any = 0;
            acc = _v235;
            const _v236: any = await rt.call(207, "Graph", [_v222, _v225, _v226, _v229, _v232, _v233, _v234, _v235], this);
            acc = _v236;
            const _v237: any = 0;
            acc = _v237;
            const _v238: any = await rt.call(0, "proc0_17", [_v237], this);
            acc = _v238;
            const _v239: any = (temps[0] ?? 0);
            acc = _v239;
            const _acc240: any = acc;
            const _v241: any = 207;
            acc = _v241;
            const _args242: any[] = [_v241];
            await rt.call(207, "DisposeScript", _args242, this);
            const _v243: any = _args242.length === 2 ? _args242[1] : _acc240;
            acc = _v243;
            return acc;
          },
          // SCI university.sc: university.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 207, "name": "university"}, "draw", []);
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
            const _v12: any = await rt.call(207, "localproc_4", [], this);
            acc = _v12;
            return acc;
          },
        },
      },
      {
        name: "background",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 807, "priority": 13},
        methods: {
        },
      },
      {
        name: "books",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"state": 64, "nsLeft": 71, "view": 707, "loop": 1, "priority": 13},
        methods: {
        },
      },
      {
        name: "enrollmentFee",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 32, "nsLeft": 85, "text": "Enrollment Fee ", "typeOfGoods": 4, "basePrice": 50},
        methods: {
          // SCI university.sc: enrollmentFee.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.global(309);
            acc = _v1;
            const _v2: any = rt.get(this, "basePrice");
            acc = _v2;
            const _v3: any = await rt.call(109, "proc109_0", [_v1, _v2], this);
            acc = _v3;
            const _v4: any = rt.set(this, "price", _v3);
            acc = _v4;
            return acc;
          },
          // SCI university.sc: enrollmentFee.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = await rt.call(0, "proc0_11", [], this);
            acc = _v2;
            const _v3: any = rt.get(this, "price");
            acc = _v3;
            const _v4: any = rt.op(">=", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(302);
              acc = _v5;
              const _v6: any = await rt.send(_v5, "enrollments", []);
              acc = _v6;
              const _v7: any = 1;
              acc = _v7;
              const _v8: any = rt.op("+", ...[_v6, _v7]);
              acc = _v8;
              const _v9: any = rt.global(302);
              acc = _v9;
              const _v10: any = await rt.send(_v9, "enrollments", [_v8]);
              acc = _v10;
              _v1 = _v10;
            }
            acc = _v1;
            const _v11: any = await rt.superSend(this, {"script": 207, "name": "enrollmentFee"}, "doit", []);
            acc = _v11;
            return acc;
          },
          // SCI university.sc: enrollmentFee.select
          "select": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
        },
      },
      {
        name: "tradeSchool",
        className: "UniversityDIcon",
        parent: {"script": 207, "name": "UniversityDIcon"},
        isClass: false,
        properties: {"key": 2, "view": 707, "loop": 2, "priority": 13, "indexNum": 10},
        methods: {
          // SCI university.sc: tradeSchool.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = await rt.send(_v1, "setPort", []);
            acc = _v2;
            let _v3: any = acc;
            let _v4: any = 0;
            if (!rt.truth(_v4)) {
              let _v5: any = 1;
              if (rt.truth(_v5)) {
                const _v6: any = rt.get(this, "type");
                acc = _v6;
                const _v7: any = 6;
                acc = _v7;
                const _v8: any = rt.op("!=", ...[_v6, _v7]);
                acc = _v8;
                _v5 = _v8;
              }
              if (rt.truth(_v5)) {
                const _v9: any = rt.get(this, "type");
                acc = _v9;
                const _v10: any = 7;
                acc = _v10;
                const _v11: any = rt.op("!=", ...[_v9, _v10]);
                acc = _v11;
                _v5 = _v11;
              }
              acc = _v5;
              _v4 = _v5;
            }
            if (!rt.truth(_v4)) {
              let _v12: any = 1;
              if (rt.truth(_v12)) {
                const _v13: any = argc;
                acc = _v13;
                _v12 = _v13;
              }
              if (rt.truth(_v12)) {
                const _v14: any = (args[0] ?? 0);
                acc = _v14;
                _v12 = _v14;
              }
              acc = _v12;
              _v4 = _v12;
            }
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v15: any = this;
              acc = _v15;
              const _v16: any = await rt.send(_v15, "erase", []);
              acc = _v16;
              _v3 = _v16;
              let _v17: any = acc;
              const _v18: any = rt.get(this, "state");
              acc = _v18;
              const _v19: any = 64;
              acc = _v19;
              const _v20: any = rt.op("&", ...[_v18, _v19]);
              acc = _v20;
              _v17 = _v20;
              if (rt.truth(_v20)) {
                const _v21: any = rt.get(this, "nsTop");
                acc = _v21;
                const _v22: any = rt.set(this, "lsTop", _v21);
                acc = _v22;
                _v17 = _v22;
                const _v23: any = rt.get(this, "nsLeft");
                acc = _v23;
                const _v24: any = rt.set(this, "lsLeft", _v23);
                acc = _v24;
                _v17 = _v24;
                const _v25: any = rt.get(this, "nsBottom");
                acc = _v25;
                const _v26: any = rt.set(this, "lsBottom", _v25);
                acc = _v26;
                _v17 = _v26;
                const _v27: any = rt.get(this, "nsRight");
                acc = _v27;
                const _v28: any = rt.set(this, "lsRight", _v27);
                acc = _v28;
                _v17 = _v28;
                const _v29: any = 7;
                acc = _v29;
                const _v30: any = rt.get(this, "nsTop");
                acc = _v30;
                const _v31: any = 1;
                acc = _v31;
                const _v32: any = rt.op("-", ...[_v30, _v31]);
                acc = _v32;
                const _v33: any = rt.get(this, "nsLeft");
                acc = _v33;
                const _v34: any = 1;
                acc = _v34;
                const _v35: any = rt.op("-", ...[_v33, _v34]);
                acc = _v35;
                const _v36: any = rt.get(this, "nsBottom");
                acc = _v36;
                const _v37: any = 1;
                acc = _v37;
                const _v38: any = rt.op("+", ...[_v36, _v37]);
                acc = _v38;
                const _v39: any = rt.get(this, "nsRight");
                acc = _v39;
                const _v40: any = 1;
                acc = _v40;
                const _v41: any = rt.op("+", ...[_v39, _v40]);
                acc = _v41;
                const _v42: any = 1;
                acc = _v42;
                const _v43: any = await rt.call(207, "Graph", [_v29, _v32, _v35, _v38, _v41, _v42], this);
                acc = _v43;
                const _v44: any = rt.set(this, "underBits", _v43);
                acc = _v44;
                _v17 = _v44;
              }
              acc = _v17;
              _v3 = _v17;
            }
            acc = _v3;
            let _v45: any = acc;
            const _v46: any = rt.get(this, "type");
            acc = _v46;
            _v45 = _v46;
            if (rt.truth(_v46)) {
              const _v47: any = this;
              acc = _v47;
              const _v48: any = await rt.call(207, "DrawControl", [_v47], this);
              acc = _v48;
              _v45 = _v48;
            }
            acc = _v45;
            const _v49: any = this;
            acc = _v49;
            const _v50: any = await rt.send(_v49, "resetPort", []);
            acc = _v50;
            return acc;
          },
        },
      },
      {
        name: "electronics",
        className: "UniversityDIcon",
        parent: {"script": 207, "name": "UniversityDIcon"},
        isClass: false,
        properties: {"key": 3, "view": 707, "loop": 2, "cel": 1, "priority": 13, "preReq": 10, "indexNum": 11},
        methods: {
        },
      },
      {
        name: "preEngineering",
        className: "UniversityDIcon",
        parent: {"script": 207, "name": "UniversityDIcon"},
        isClass: false,
        properties: {"key": 4, "view": 707, "loop": 2, "cel": 2, "priority": 13, "preReq": 10, "indexNum": 12},
        methods: {
        },
      },
      {
        name: "engineering",
        className: "UniversityDIcon",
        parent: {"script": 207, "name": "UniversityDIcon"},
        isClass: false,
        properties: {"key": 5, "view": 707, "loop": 2, "cel": 3, "priority": 13, "preReq": 12, "indexNum": 13},
        methods: {
        },
      },
      {
        name: "juniorCollege",
        className: "UniversityDIcon",
        parent: {"script": 207, "name": "UniversityDIcon"},
        isClass: false,
        properties: {"key": 6, "view": 707, "loop": 2, "cel": 4, "priority": 13, "indexNum": 14},
        methods: {
        },
      },
      {
        name: "ba",
        className: "UniversityDIcon",
        parent: {"script": 207, "name": "UniversityDIcon"},
        isClass: false,
        properties: {"key": 7, "view": 707, "loop": 2, "cel": 5, "priority": 13, "preReq": 14, "indexNum": 15},
        methods: {
        },
      },
      {
        name: "academic",
        className: "UniversityDIcon",
        parent: {"script": 207, "name": "UniversityDIcon"},
        isClass: false,
        properties: {"key": 8, "view": 707, "loop": 2, "cel": 6, "priority": 13, "preReq": 14, "indexNum": 16},
        methods: {
        },
      },
      {
        name: "graduate",
        className: "UniversityDIcon",
        parent: {"script": 207, "name": "UniversityDIcon"},
        isClass: false,
        properties: {"key": 14, "view": 707, "loop": 2, "cel": 7, "priority": 13, "preReq": 16, "indexNum": 17},
        methods: {
        },
      },
      {
        name: "postDoctoral",
        className: "UniversityDIcon",
        parent: {"script": 207, "name": "UniversityDIcon"},
        isClass: false,
        properties: {"key": 10, "view": 707, "loop": 2, "cel": 8, "priority": 13, "preReq": 17, "indexNum": 18},
        methods: {
        },
      },
      {
        name: "research",
        className: "UniversityDIcon",
        parent: {"script": 207, "name": "UniversityDIcon"},
        isClass: false,
        properties: {"key": 11, "view": 707, "loop": 2, "cel": 9, "priority": 13, "preReq": 18, "indexNum": 19},
        methods: {
        },
      },
      {
        name: "publishing",
        className: "UniversityDIcon",
        parent: {"script": 207, "name": "UniversityDIcon"},
        isClass: false,
        properties: {"key": 12, "view": 707, "loop": 2, "cel": 10, "priority": 13, "preReq": 19, "indexNum": 20},
        methods: {
        },
      },
      {
        name: "exitButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 99, "nsTop": 108, "nsLeft": 147, "key": 120, "view": 250, "priority": 15},
        methods: {
          // SCI university.sc: exitButton.select
          "select": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
        },
      },
      {
        name: "enrollButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 105, "key": 1, "view": 250, "loop": 10, "priority": 15},
        methods: {
          // SCI university.sc: enrollButton.doit
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
            _branch5: {
              const _v6: any = rt.global(302);
              acc = _v6;
              const _v7: any = await rt.send(_v6, "playing", []);
              acc = _v7;
              const _v8: any = 29;
              acc = _v8;
              const _v9: any = rt.op("==", ...[_v7, _v8]);
              acc = _v9;
              _v4 = _v9;
              acc = _v4;
              if (rt.truth(_v4)) {
                const _v10: any = rt.object(207, "enrollmentFee");
                acc = _v10;
                const _v11: any = await rt.send(_v10, "doit", []);
                acc = _v11;
                _v4 = _v11;
                let _v12: any = acc;
                const _v13: any = rt.global(416);
                acc = _v13;
                _v12 = _v13;
                if (rt.truth(_v13)) {
                  const _v14: any = rt.ref("global", 0, 100);
                  acc = _v14;
                  const _v15: any = 207;
                  acc = _v15;
                  const _v16: any = 27;
                  acc = _v16;
                  const _v17: any = rt.object(207, "enrollmentFee");
                  acc = _v17;
                  const _v18: any = await rt.send(_v17, "price", []);
                  acc = _v18;
                  const _v19: any = await rt.call(207, "Format", [_v14, _v15, _v16, _v18], this);
                  acc = _v19;
                  const _v20: any = 310;
                  acc = _v20;
                  const _v21: any = rt.global(413);
                  acc = _v21;
                  const _v22: any = rt.global(440);
                  acc = _v22;
                  const _v23: any = rt.global(441);
                  acc = _v23;
                  const _v24: any = rt.global(442);
                  acc = _v24;
                  const _v25: any = 70;
                  acc = _v25;
                  const _v26: any = 113;
                  acc = _v26;
                  const _v27: any = await rt.call(104, "proc104_1", [_v19, _v20, _v21, _v22, _v23, _v24, _v25, _v26], this);
                  acc = _v27;
                  _v12 = _v27;
                }
                acc = _v12;
                _v4 = _v12;
                break _branch5;
              }
              const _v28: any = rt.ref("global", 0, 100);
              acc = _v28;
              const _v29: any = 207;
              acc = _v29;
              const _v30: any = 28;
              acc = _v30;
              const _v31: any = rt.object(207, "enrollmentFee");
              acc = _v31;
              const _v32: any = await rt.send(_v31, "price", []);
              acc = _v32;
              const _v33: any = await rt.call(207, "Format", [_v28, _v29, _v30, _v32], this);
              acc = _v33;
              const _v34: any = 310;
              acc = _v34;
              const _v35: any = rt.global(413);
              acc = _v35;
              const _v36: any = rt.global(440);
              acc = _v36;
              const _v37: any = rt.global(441);
              acc = _v37;
              const _v38: any = rt.global(442);
              acc = _v38;
              const _v39: any = 70;
              acc = _v39;
              const _v40: any = 113;
              acc = _v40;
              const _v41: any = 81;
              acc = _v41;
              const _v42: any = "Yes";
              acc = _v42;
              const _v43: any = 1;
              acc = _v43;
              const _v44: any = 81;
              acc = _v44;
              const _v45: any = "No";
              acc = _v45;
              const _v46: any = 0;
              acc = _v46;
              const _v47: any = 311;
              acc = _v47;
              const _v48: any = await rt.call(255, "Print", [_v33, _v34, _v35, _v36, _v37, _v38, _v39, _v40, _v41, _v42, _v43, _v44, _v45, _v46, _v47], this);
              acc = _v48;
              _v4 = _v48;
              acc = _v4;
              if (rt.truth(_v4)) {
                const _v49: any = rt.object(207, "enrollmentFee");
                acc = _v49;
                const _v50: any = await rt.send(_v49, "doit", []);
                acc = _v50;
                _v4 = _v50;
                const _v51: any = rt.global(413);
                acc = _v51;
                const _v52: any = await rt.send(_v51, "init", []);
                acc = _v52;
                _v4 = _v52;
                let _v53: any = acc;
                let _v54: any = 1;
                if (rt.truth(_v54)) {
                  const _v55: any = rt.global(427);
                  acc = _v55;
                  _v54 = _v55;
                }
                if (rt.truth(_v54)) {
                  const _v56: any = rt.global(416);
                  acc = _v56;
                  _v54 = _v56;
                }
                acc = _v54;
                _v53 = _v54;
                if (rt.truth(_v54)) {
                  const _v57: any = 207;
                  acc = _v57;
                  const _v58: any = 29;
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
                  const _v65: any = 113;
                  acc = _v65;
                  const _v66: any = await rt.call(255, "Print", [_v57, _v58, _v59, _v60, _v61, _v62, _v63, _v64, _v65], this);
                  acc = _v66;
                  _v53 = _v66;
                }
                acc = _v53;
                _v4 = _v53;
                break _branch5;
              }
              const _v67: any = rt.global(427);
              acc = _v67;
              _v4 = _v67;
              acc = _v4;
              if (rt.truth(_v4)) {
                const _v68: any = rt.global(413);
                acc = _v68;
                const _v69: any = await rt.send(_v68, "init", []);
                acc = _v69;
                _v4 = _v69;
                const _v70: any = 207;
                acc = _v70;
                const _v71: any = 30;
                acc = _v71;
                const _v72: any = 310;
                acc = _v72;
                const _v73: any = rt.global(413);
                acc = _v73;
                const _v74: any = rt.global(440);
                acc = _v74;
                const _v75: any = rt.global(441);
                acc = _v75;
                const _v76: any = rt.global(442);
                acc = _v76;
                const _v77: any = 70;
                acc = _v77;
                const _v78: any = 113;
                acc = _v78;
                const _v79: any = await rt.call(255, "Print", [_v70, _v71, _v72, _v73, _v74, _v75, _v76, _v77, _v78], this);
                acc = _v79;
                _v4 = _v79;
                break _branch5;
              }
            }
            acc = _v4;
            const _v80: any = 0;
            acc = _v80;
            const _v81: any = await rt.superSend(this, {"script": 207, "name": "enrollButton"}, "doit", [_v80]);
            acc = _v81;
            return acc;
          },
        },
      },
      {
        name: "workButton",
        className: "ErasableDIcon",
        parent: {"script": 255, "name": "ErasableDIcon"},
        isClass: false,
        properties: {"state": 65, "nsTop": 108, "nsLeft": 71, "key": 119, "view": 250, "loop": 1, "priority": 15},
        methods: {
          // SCI university.sc: workButton.doit
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
            const _v5: any = rt.object(207, "timeClock");
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
                const _v15: any = rt.object(207, "university");
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
                const _v26: any = rt.object(207, "timeClock");
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
            const _v29: any = await rt.superSend(this, {"script": 207, "name": "workButton"}, "doit", [_v28]);
            acc = _v29;
            return acc;
          },
          // SCI university.sc: workButton.select
          "select": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
        },
      },
      {
        name: "timeClock",
        className: "TimeClock",
        parent: {"script": 104, "name": "TimeClock"},
        isClass: false,
        properties: {"nsTop": 56},
        methods: {
          // SCI university.sc: timeClock.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(207, "timeClock");
            acc = _v1;
            const _v2: any = rt.global(502);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "aTimeClock", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 207, "name": "timeClock"}, "setSize", []);
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
        properties: {"nsLeft": 0, "view": 357},
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
          // SCI university.sc: computerScript.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
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
              const _v5: any = 4;
              acc = _v5;
              const _v6: any = 160;
              acc = _v6;
              const _v7: any = 100;
              acc = _v7;
              const _v8: any = (args[0] ?? 0);
              acc = _v8;
              const _v9: any = await rt.send(_v8, "type", [_v5]);
              acc = _v9;
              const _v10: any = await rt.send(_v8, "x", [_v6]);
              acc = _v10;
              const _v11: any = await rt.send(_v8, "y", [_v7]);
              acc = _v11;
              _v1 = _v11;
              const _v12: any = 1;
              acc = _v12;
              const _v13: any = rt.set(this, "cycles", _v12);
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
                  const _v19: any = 16;
                  acc = _v19;
                  const _v20: any = await rt.call(0, "proc0_6", [_v19], this);
                  acc = _v20;
                  _v18 = _v20;
                  if (rt.truth(_v20)) {
                    let _v21: any = acc;
                    const _v22: any = rt.global(407);
                    acc = _v22;
                    const _v23: any = 16;
                    acc = _v23;
                    const _v24: any = rt.op("==", ...[_v22, _v23]);
                    acc = _v24;
                    _v21 = _v24;
                    if (rt.truth(_v24)) {
                      const _v25: any = rt.global(408);
                      acc = _v25;
                      const _v26: any = rt.setLocal(207, 4, _v25);
                      acc = _v26;
                      _v21 = _v26;
                      let _v27: any = acc;
                      let _v28: any = 1;
                      if (rt.truth(_v28)) {
                        const _v29: any = rt.global(302);
                        acc = _v29;
                        const _v30: any = await rt.send(_v29, "notEnoughEd", []);
                        acc = _v30;
                        const _v31: any = rt.op("not", ...[_v30]);
                        acc = _v31;
                        _v28 = _v31;
                      }
                      if (rt.truth(_v28)) {
                        const _v32: any = rt.global(302);
                        acc = _v32;
                        const _v33: any = await rt.send(_v32, "eduStat", []);
                        acc = _v33;
                        const _v34: any = rt.global(302);
                        acc = _v34;
                        const _v35: any = await rt.send(_v34, "eduGoal", []);
                        acc = _v35;
                        const _v36: any = rt.op(">=", ...[_v33, _v35]);
                        acc = _v36;
                        _v28 = _v36;
                      }
                      if (rt.truth(_v28)) {
                        const _v37: any = 1;
                        acc = _v37;
                        const _v38: any = rt.setLocal(207, 4, rt.op("-", rt.local(207, 4), _v37));
                        acc = _v38;
                        const _v39: any = 0;
                        acc = _v39;
                        const _v40: any = rt.op("<=", ...[_v38, _v39]);
                        acc = _v40;
                        _v28 = _v40;
                      }
                      acc = _v28;
                      _v27 = _v28;
                      if (rt.truth(_v28)) {
                        const _v41: any = 1;
                        acc = _v41;
                        const _v42: any = rt.setLocal(207, 4, _v41);
                        acc = _v42;
                        _v27 = _v42;
                      }
                      acc = _v27;
                      _v21 = _v27;
                    } else {
                      const _v43: any = 10;
                      acc = _v43;
                      const _v44: any = rt.setLocal(207, 4, _v43);
                      acc = _v44;
                      _v21 = _v44;
                      let _v45: any = acc;
                      const _v46: any = rt.global(410);
                      acc = _v46;
                      _v45 = _v46;
                      if (rt.truth(_v46)) {
                        const _v47: any = 100;
                        acc = _v47;
                        const _v48: any = rt.setGlobal(410, rt.op("-", rt.global(410), _v47));
                        acc = _v48;
                        _v45 = _v48;
                        const _v49: any = 2;
                        acc = _v49;
                        const _v50: any = 60;
                        acc = _v50;
                        const _v51: any = rt.global(410);
                        acc = _v51;
                        const _v52: any = rt.op("-", ...[_v50, _v51]);
                        acc = _v52;
                        const _v53: any = 6;
                        acc = _v53;
                        const _v54: any = rt.op("/", ...[_v52, _v53]);
                        acc = _v54;
                        const _v55: any = rt.op("+", ...[_v49, _v54]);
                        acc = _v55;
                        const _v56: any = rt.setLocal(207, 4, _v55);
                        acc = _v56;
                        _v45 = _v56;
                        let _v57: any = acc;
                        const _v58: any = 60;
                        acc = _v58;
                        const _v59: any = rt.global(410);
                        acc = _v59;
                        const _v60: any = rt.op("-", ...[_v58, _v59]);
                        acc = _v60;
                        const _v61: any = 6;
                        acc = _v61;
                        const _v62: any = rt.op("mod", ...[_v60, _v61]);
                        acc = _v62;
                        const _v63: any = rt.op("not", ...[_v62]);
                        acc = _v63;
                        _v57 = _v63;
                        if (rt.truth(_v63)) {
                          const _v64: any = rt.setLocal(207, 4, rt.op("-", rt.local(207, 4), 1));
                          acc = _v64;
                          _v57 = _v64;
                        }
                        acc = _v57;
                        _v45 = _v57;
                      }
                      acc = _v45;
                      _v21 = _v45;
                    }
                    acc = _v21;
                    _v18 = _v21;
                  }
                  acc = _v18;
                  _v14 = _v18;
                  const _v65: any = 0;
                  acc = _v65;
                  const _v66: any = rt.setLocal(207, 2, _v65);
                  acc = _v66;
                  _v14 = _v66;
                  let _v67: any = acc;
                  const _v68: any = rt.object(207, "workButton");
                  acc = _v68;
                  const _v69: any = rt.object(207, "university");
                  acc = _v69;
                  const _v70: any = await rt.send(_v69, "contains", [_v68]);
                  acc = _v70;
                  _v67 = _v70;
                  if (rt.truth(_v70)) {
                    const _v71: any = 1;
                    acc = _v71;
                    _v67 = _v71;
                  } else {
                    const _v72: any = 0;
                    acc = _v72;
                    _v67 = _v72;
                  }
                  acc = _v67;
                  const _v73: any = (temps[1] = _v67);
                  acc = _v73;
                  _v14 = _v73;
                  const _v76: any = rt.object(207, "university");
                  acc = _v76;
                  const _v77: any = await rt.send(_v76, "size", []);
                  acc = _v77;
                  const _v78: any = 1;
                  acc = _v78;
                  const _v79: any = (temps[1] ?? 0);
                  acc = _v79;
                  const _v80: any = rt.op("+", ...[_v78, _v79]);
                  acc = _v80;
                  const _v81: any = rt.op("-", ...[_v77, _v80]);
                  acc = _v81;
                  const _v82: any = (temps[0] = _v81);
                  acc = _v82;
                  _loop74: for (;;) {
                    const _v83: any = (temps[0] ?? 0);
                    acc = _v83;
                    const _v84: any = rt.object(207, "university");
                    acc = _v84;
                    const _v85: any = await rt.send(_v84, "size", []);
                    acc = _v85;
                    const _v86: any = rt.local(207, 1);
                    acc = _v86;
                    const _v87: any = (temps[1] ?? 0);
                    acc = _v87;
                    const _v88: any = rt.op("+", ...[_v86, _v87]);
                    acc = _v88;
                    const _v89: any = rt.op("-", ...[_v85, _v88]);
                    acc = _v89;
                    const _v90: any = rt.op(">=", ...[_v83, _v89]);
                    acc = _v90;
                    if (!rt.truth(_v90)) break _loop74;
                    _continue75: {
                      let _v91: any = acc;
                      let _v92: any = 1;
                      if (rt.truth(_v92)) {
                        const _v93: any = rt.object(207, "UniversityDIcon");
                        acc = _v93;
                        const _v94: any = (temps[0] ?? 0);
                        acc = _v94;
                        const _v95: any = rt.object(207, "university");
                        acc = _v95;
                        const _v96: any = await rt.send(_v95, "at", [_v94]);
                        acc = _v96;
                        const _v97: any = await rt.send(_v96, "isMemberOf", [_v93]);
                        acc = _v97;
                        _v92 = _v97;
                      }
                      if (rt.truth(_v92)) {
                        const _v98: any = (temps[0] ?? 0);
                        acc = _v98;
                        const _v99: any = rt.object(207, "university");
                        acc = _v99;
                        const _v100: any = await rt.send(_v99, "at", [_v98]);
                        acc = _v100;
                        const _v101: any = await rt.send(_v100, "indexNum", []);
                        acc = _v101;
                        const _v102: any = rt.global(302);
                        acc = _v102;
                        const _v103: any = await rt.send(_v102, "courseActive", [_v101]);
                        acc = _v103;
                        _v92 = _v103;
                      }
                      acc = _v92;
                      _v91 = _v92;
                      if (rt.truth(_v92)) {
                        const _v104: any = (temps[0] ?? 0);
                        acc = _v104;
                        const _v105: any = rt.object(207, "university");
                        acc = _v105;
                        const _v106: any = await rt.send(_v105, "at", [_v104]);
                        acc = _v106;
                        const _v107: any = rt.setLocal(207, 2, _v106);
                        acc = _v107;
                        _v91 = _v107;
                        break _loop74;
                        _v91 = acc;
                      }
                      acc = _v91;
                    }
                    const _v108: any = (temps[0] = rt.op("-", (temps[0] ?? 0), 1));
                    acc = _v108;
                  }
                  _v14 = acc;
                  let _v109: any = acc;
                  let _v110: any = 1;
                  if (rt.truth(_v110)) {
                    const _v111: any = rt.local(207, 2);
                    acc = _v111;
                    const _v112: any = rt.op("not", ...[_v111]);
                    acc = _v112;
                    _v110 = _v112;
                  }
                  if (rt.truth(_v110)) {
                    const _v113: any = rt.global(302);
                    acc = _v113;
                    const _v114: any = await rt.send(_v113, "numDegrees", []);
                    acc = _v114;
                    const _v115: any = 11;
                    acc = _v115;
                    const _v116: any = rt.op("!=", ...[_v114, _v115]);
                    acc = _v116;
                    _v110 = _v116;
                  }
                  acc = _v110;
                  _v109 = _v110;
                  if (rt.truth(_v110)) {
                    const _v117: any = rt.object(207, "university");
                    acc = _v117;
                    const _v118: any = await rt.send(_v117, "size", []);
                    acc = _v118;
                    const _v119: any = 1;
                    acc = _v119;
                    const _v120: any = rt.local(207, 1);
                    acc = _v120;
                    const _v121: any = await rt.call(207, "Random", [_v119, _v120], this);
                    acc = _v121;
                    const _v122: any = (temps[1] ?? 0);
                    acc = _v122;
                    const _v123: any = rt.op("+", ...[_v121, _v122]);
                    acc = _v123;
                    const _v124: any = rt.op("-", ...[_v118, _v123]);
                    acc = _v124;
                    const _v125: any = rt.object(207, "university");
                    acc = _v125;
                    const _v126: any = await rt.send(_v125, "at", [_v124]);
                    acc = _v126;
                    const _v127: any = rt.setLocal(207, 2, _v126);
                    acc = _v127;
                    _v109 = _v127;
                  }
                  acc = _v109;
                  _v14 = _v109;
                  break _branch16;
                }
                const _v128: any = 3;
                acc = _v128;
                _v14 = rt.op("==", _v15, _v128);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v129: any = acc;
                  let _v130: any = 1;
                  if (rt.truth(_v130)) {
                    const _v131: any = 16;
                    acc = _v131;
                    const _v132: any = await rt.call(0, "proc0_6", [_v131], this);
                    acc = _v132;
                    _v130 = _v132;
                  }
                  if (rt.truth(_v130)) {
                    const _v133: any = rt.local(207, 2);
                    acc = _v133;
                    _v130 = _v133;
                  }
                  if (rt.truth(_v130)) {
                    const _v134: any = rt.global(302);
                    acc = _v134;
                    const _v135: any = await rt.send(_v134, "enrollments", []);
                    acc = _v135;
                    const _v136: any = rt.global(302);
                    acc = _v136;
                    const _v137: any = await rt.send(_v136, "numDegrees", []);
                    acc = _v137;
                    const _v138: any = rt.op("==", ...[_v135, _v137]);
                    acc = _v138;
                    _v130 = _v138;
                  }
                  if (rt.truth(_v130)) {
                    const _v139: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v139;
                    const _v140: any = rt.object(207, "enrollmentFee");
                    acc = _v140;
                    const _v141: any = await rt.send(_v140, "price", []);
                    acc = _v141;
                    const _v142: any = rt.op(">=", ...[_v139, _v141]);
                    acc = _v142;
                    _v130 = _v142;
                  }
                  acc = _v130;
                  _v129 = _v130;
                  if (rt.truth(_v130)) {
                    const _v143: any = 30;
                    acc = _v143;
                    const _v144: any = rt.set(this, "cycles", _v143);
                    acc = _v144;
                    _v129 = _v144;
                    const _v145: any = rt.object(207, "enrollButton");
                    acc = _v145;
                    const _v146: any = await rt.send(_v145, "key", []);
                    acc = _v146;
                    const _v147: any = (args[0] ?? 0);
                    acc = _v147;
                    const _v148: any = await rt.send(_v147, "message", [_v146]);
                    acc = _v148;
                    _v129 = _v148;
                  }
                  acc = _v129;
                  _v14 = _v129;
                  break _branch16;
                }
                const _v149: any = 4;
                acc = _v149;
                _v14 = rt.op("==", _v15, _v149);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v150: any = acc;
                  let _v151: any = 1;
                  if (rt.truth(_v151)) {
                    const _v152: any = 16;
                    acc = _v152;
                    const _v153: any = await rt.call(0, "proc0_6", [_v152], this);
                    acc = _v153;
                    _v151 = _v153;
                  }
                  if (rt.truth(_v151)) {
                    const _v154: any = rt.local(207, 4);
                    acc = _v154;
                    _v151 = _v154;
                  }
                  if (rt.truth(_v151)) {
                    const _v155: any = rt.global(302);
                    acc = _v155;
                    const _v156: any = await rt.send(_v155, "enrollments", []);
                    acc = _v156;
                    const _v157: any = rt.global(302);
                    acc = _v157;
                    const _v158: any = await rt.send(_v157, "numDegrees", []);
                    acc = _v158;
                    const _v159: any = rt.op(">=", ...[_v156, _v158]);
                    acc = _v159;
                    _v151 = _v159;
                  }
                  if (rt.truth(_v151)) {
                    const _v160: any = rt.local(207, 2);
                    acc = _v160;
                    _v151 = _v160;
                  }
                  acc = _v151;
                  _v150 = _v151;
                  if (rt.truth(_v151)) {
                    const _v161: any = rt.setLocal(207, 4, rt.op("-", rt.local(207, 4), 1));
                    acc = _v161;
                    _v150 = _v161;
                    const _v162: any = 30;
                    acc = _v162;
                    const _v163: any = rt.set(this, "cycles", _v162);
                    acc = _v163;
                    _v150 = _v163;
                    const _v164: any = rt.local(207, 2);
                    acc = _v164;
                    const _v165: any = await rt.send(_v164, "key", []);
                    acc = _v165;
                    const _v166: any = (args[0] ?? 0);
                    acc = _v166;
                    const _v167: any = await rt.send(_v166, "message", [_v165]);
                    acc = _v167;
                    _v150 = _v167;
                  }
                  acc = _v150;
                  _v14 = _v150;
                  break _branch16;
                }
                const _v168: any = 11;
                acc = _v168;
                _v14 = rt.op("==", _v15, _v168);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v169: any = acc;
                  let _v170: any = 1;
                  if (rt.truth(_v170)) {
                    const _v171: any = rt.global(407);
                    acc = _v171;
                    const _v172: any = 1;
                    acc = _v172;
                    const _v173: any = rt.op("==", ...[_v171, _v172]);
                    acc = _v173;
                    _v170 = _v173;
                  }
                  if (rt.truth(_v170)) {
                    const _v174: any = 16;
                    acc = _v174;
                    const _v175: any = await rt.call(0, "proc0_6", [_v174], this);
                    acc = _v175;
                    const _v176: any = rt.op("not", ...[_v175]);
                    acc = _v176;
                    _v170 = _v176;
                  }
                  acc = _v170;
                  _v169 = _v170;
                  if (rt.truth(_v170)) {
                    const _v177: any = 16;
                    acc = _v177;
                    const _v178: any = rt.setGlobal(407, _v177);
                    acc = _v178;
                    _v169 = _v178;
                    let _v179: any = acc;
                    let _v180: any = 0;
                    if (!rt.truth(_v180)) {
                      const _v181: any = rt.global(302);
                      acc = _v181;
                      const _v182: any = await rt.send(_v181, "notEnoughEd", []);
                      acc = _v182;
                      _v180 = _v182;
                    }
                    if (!rt.truth(_v180)) {
                      const _v183: any = rt.global(302);
                      acc = _v183;
                      const _v184: any = await rt.send(_v183, "eduStat", []);
                      acc = _v184;
                      const _v185: any = rt.global(302);
                      acc = _v185;
                      const _v186: any = await rt.send(_v185, "eduGoal", []);
                      acc = _v186;
                      const _v187: any = rt.op("<", ...[_v184, _v186]);
                      acc = _v187;
                      _v180 = _v187;
                    }
                    acc = _v180;
                    _v179 = _v180;
                    if (rt.truth(_v180)) {
                      const _v188: any = 2;
                      acc = _v188;
                      const _v189: any = rt.setGlobal(408, _v188);
                      acc = _v189;
                      _v179 = _v189;
                    } else {
                      const _v190: any = 1;
                      acc = _v190;
                      const _v191: any = rt.setGlobal(408, _v190);
                      acc = _v191;
                      _v179 = _v191;
                    }
                    acc = _v179;
                    _v169 = _v179;
                    const _v192: any = 0;
                    acc = _v192;
                    const _v193: any = rt.set(this, "state", _v192);
                    acc = _v193;
                    _v169 = _v193;
                    const _v194: any = this;
                    acc = _v194;
                    const _v195: any = await rt.send(_v194, "cue", []);
                    acc = _v195;
                    _v169 = _v195;
                  }
                  acc = _v169;
                  _v14 = _v169;
                  break _branch16;
                }
                const _v196: any = (args[0] ?? 0);
                acc = _v196;
                const _v197: any = 1;
                acc = _v197;
                const _v198: any = await rt.superSend(this, {"script": 207, "name": "computerScript"}, "handleEvent", [_v196, _v197]);
                acc = _v198;
                _v14 = _v198;
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
      // SCI university.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.ref("global", 0, 100);
        acc = _v1;
        const _v2: any = 207;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(207, "Format", [_v1, _v2, _v3], this);
        acc = _v4;
        const _v5: any = rt.ref("global", 0, 100);
        acc = _v5;
        const _v6: any = 207;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = await rt.call(207, "Format", [_v5, _v6, _v7], this);
        acc = _v8;
        const _v9: any = rt.ref("global", 0, 100);
        acc = _v9;
        const _v10: any = 207;
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = await rt.call(207, "Format", [_v9, _v10, _v11], this);
        acc = _v12;
        const _v13: any = rt.ref("global", 0, 100);
        acc = _v13;
        const _v14: any = 207;
        acc = _v14;
        const _v15: any = 3;
        acc = _v15;
        const _v16: any = await rt.call(207, "Format", [_v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = rt.ref("global", 0, 100);
        acc = _v17;
        const _v18: any = 207;
        acc = _v18;
        const _v19: any = 4;
        acc = _v19;
        const _v20: any = await rt.call(207, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = rt.ref("global", 0, 100);
        acc = _v21;
        const _v22: any = 207;
        acc = _v22;
        const _v23: any = 5;
        acc = _v23;
        const _v24: any = await rt.call(207, "Format", [_v21, _v22, _v23], this);
        acc = _v24;
        const _v25: any = rt.ref("global", 0, 100);
        acc = _v25;
        const _v26: any = 207;
        acc = _v26;
        const _v27: any = 6;
        acc = _v27;
        const _v28: any = await rt.call(207, "Format", [_v25, _v26, _v27], this);
        acc = _v28;
        const _v29: any = rt.ref("global", 0, 100);
        acc = _v29;
        const _v30: any = 207;
        acc = _v30;
        const _v31: any = 7;
        acc = _v31;
        const _v32: any = await rt.call(207, "Format", [_v29, _v30, _v31], this);
        acc = _v32;
        const _v33: any = rt.ref("global", 0, 100);
        acc = _v33;
        const _v34: any = 207;
        acc = _v34;
        const _v35: any = 8;
        acc = _v35;
        const _v36: any = await rt.call(207, "Format", [_v33, _v34, _v35], this);
        acc = _v36;
        const _v37: any = rt.ref("global", 0, 100);
        acc = _v37;
        const _v38: any = 207;
        acc = _v38;
        const _v39: any = 9;
        acc = _v39;
        const _v40: any = await rt.call(207, "Format", [_v37, _v38, _v39], this);
        acc = _v40;
        const _v41: any = rt.ref("global", 0, 100);
        acc = _v41;
        const _v42: any = 207;
        acc = _v42;
        const _v43: any = 10;
        acc = _v43;
        const _v44: any = await rt.call(207, "Format", [_v41, _v42, _v43], this);
        acc = _v44;
        const _v45: any = rt.ref("global", 0, 100);
        acc = _v45;
        const _v46: any = 207;
        acc = _v46;
        const _v47: any = 11;
        acc = _v47;
        const _v48: any = await rt.call(207, "Format", [_v45, _v46, _v47], this);
        acc = _v48;
        const _v49: any = rt.ref("global", 0, 100);
        acc = _v49;
        const _v50: any = 207;
        acc = _v50;
        const _v51: any = 12;
        acc = _v51;
        const _v52: any = await rt.call(207, "Format", [_v49, _v50, _v51], this);
        acc = _v52;
        const _v53: any = rt.ref("global", 0, 100);
        acc = _v53;
        const _v54: any = 207;
        acc = _v54;
        const _v55: any = 13;
        acc = _v55;
        const _v56: any = await rt.call(207, "Format", [_v53, _v54, _v55], this);
        acc = _v56;
        const _v57: any = rt.ref("global", 0, 100);
        acc = _v57;
        const _v58: any = 207;
        acc = _v58;
        const _v59: any = 14;
        acc = _v59;
        const _v60: any = await rt.call(207, "Format", [_v57, _v58, _v59], this);
        acc = _v60;
        const _v61: any = rt.ref("global", 0, 100);
        acc = _v61;
        const _v62: any = 207;
        acc = _v62;
        const _v63: any = 15;
        acc = _v63;
        const _v64: any = await rt.call(207, "Format", [_v61, _v62, _v63], this);
        acc = _v64;
        const _v65: any = rt.ref("global", 0, 100);
        acc = _v65;
        const _v66: any = 207;
        acc = _v66;
        const _v67: any = 16;
        acc = _v67;
        const _v68: any = await rt.call(207, "Format", [_v65, _v66, _v67], this);
        acc = _v68;
        const _v69: any = rt.ref("global", 0, 100);
        acc = _v69;
        const _v70: any = 207;
        acc = _v70;
        const _v71: any = 17;
        acc = _v71;
        const _v72: any = await rt.call(207, "Format", [_v69, _v70, _v71], this);
        acc = _v72;
        const _v73: any = rt.ref("global", 0, 100);
        acc = _v73;
        const _v74: any = 207;
        acc = _v74;
        const _v75: any = 18;
        acc = _v75;
        const _v76: any = await rt.call(207, "Format", [_v73, _v74, _v75], this);
        acc = _v76;
        const _v77: any = rt.ref("global", 0, 100);
        acc = _v77;
        const _v78: any = 207;
        acc = _v78;
        const _v79: any = 19;
        acc = _v79;
        const _v80: any = await rt.call(207, "Format", [_v77, _v78, _v79], this);
        acc = _v80;
        const _v81: any = rt.ref("global", 0, 100);
        acc = _v81;
        const _v82: any = 207;
        acc = _v82;
        const _v83: any = 20;
        acc = _v83;
        const _v84: any = await rt.call(207, "Format", [_v81, _v82, _v83], this);
        acc = _v84;
        const _v85: any = rt.ref("global", 0, 100);
        acc = _v85;
        const _v86: any = 207;
        acc = _v86;
        const _v87: any = 21;
        acc = _v87;
        const _v88: any = await rt.call(207, "Format", [_v85, _v86, _v87], this);
        acc = _v88;
        return acc;
      },
      // SCI university.sc: localproc_1
      "localproc_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0];
        const _v3: any = (args[0] ?? 0);
        acc = _v3;
        const _v4: any = await rt.send(_v3, "size", []);
        acc = _v4;
        const _v5: any = 1;
        acc = _v5;
        const _v6: any = rt.op("-", ...[_v4, _v5]);
        acc = _v6;
        const _v7: any = (temps[0] = _v6);
        acc = _v7;
        _loop1: for (;;) {
          const _v8: any = (temps[0] ?? 0);
          acc = _v8;
          const _v9: any = 0;
          acc = _v9;
          const _v10: any = rt.op(">=", ...[_v8, _v9]);
          acc = _v10;
          if (!rt.truth(_v10)) break _loop1;
          _continue2: {
            const _v11: any = (temps[0] ?? 0);
            acc = _v11;
            const _v12: any = (args[0] ?? 0);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "at", [_v11]);
            acc = _v13;
            const _v14: any = (temps[1] = _v13);
            acc = _v14;
            let _v15: any = acc;
            const _v16: any = (temps[1] ?? 0);
            acc = _v16;
            const _v17: any = await rt.send(_v16, "state", []);
            acc = _v17;
            const _v18: any = 1;
            acc = _v18;
            const _v19: any = rt.op("&", ...[_v17, _v18]);
            acc = _v19;
            _v15 = _v19;
            if (rt.truth(_v19)) {
              const _v20: any = (temps[1] ?? 0);
              acc = _v20;
              const _v21: any = (args[1] ?? 0);
              acc = _v21;
              const _v22: any = await rt.send(_v21, "add", [_v20]);
              acc = _v22;
              _v15 = _v22;
              const _v23: any = (temps[1] ?? 0);
              acc = _v23;
              const _v24: any = await rt.send(_v23, "nsLeft", []);
              acc = _v24;
              const _v25: any = (temps[1] ?? 0);
              acc = _v25;
              const _v26: any = await rt.send(_v25, "nsRight", []);
              acc = _v26;
              const _v27: any = rt.op("+", ...[_v24, _v26]);
              acc = _v27;
              const _v28: any = 2;
              acc = _v28;
              const _v29: any = rt.op("/", ...[_v27, _v28]);
              acc = _v29;
              const _v30: any = (args[0] ?? 0);
              acc = _v30;
              const _v31: any = await rt.send(_v30, "nsLeft", []);
              acc = _v31;
              const _v32: any = rt.op("+", ...[_v29, _v31]);
              acc = _v32;
              const _v33: any = (temps[1] ?? 0);
              acc = _v33;
              const _v34: any = await rt.send(_v33, "nsTop", []);
              acc = _v34;
              const _v35: any = (temps[1] ?? 0);
              acc = _v35;
              const _v36: any = await rt.send(_v35, "nsBottom", []);
              acc = _v36;
              const _v37: any = rt.op("+", ...[_v34, _v36]);
              acc = _v37;
              const _v38: any = 2;
              acc = _v38;
              const _v39: any = rt.op("/", ...[_v37, _v38]);
              acc = _v39;
              const _v40: any = (args[0] ?? 0);
              acc = _v40;
              const _v41: any = await rt.send(_v40, "nsTop", []);
              acc = _v41;
              const _v42: any = rt.op("+", ...[_v39, _v41]);
              acc = _v42;
              const _v43: any = (temps[1] ?? 0);
              acc = _v43;
              const _v44: any = await rt.send(_v43, "keyMouseX", [_v32]);
              acc = _v44;
              const _v45: any = await rt.send(_v43, "keyMouseY", [_v42]);
              acc = _v45;
              _v15 = _v45;
            }
            acc = _v15;
          }
          const _v46: any = (temps[0] = rt.op("-", (temps[0] ?? 0), 1));
          acc = _v46;
        }
        let _v47: any = acc;
        const _v48: any = rt.global(447);
        acc = _v48;
        _v47 = _v48;
        if (rt.truth(_v48)) {
          let _v49: any = acc;
          const _v50: any = argc;
          acc = _v50;
          const _v51: any = 3;
          acc = _v51;
          const _v52: any = rt.op(">=", ...[_v50, _v51]);
          acc = _v52;
          _v49 = _v52;
          if (rt.truth(_v52)) {
            const _v53: any = (args[2] ?? 0);
            acc = _v53;
            _v49 = _v53;
          } else {
            const _v54: any = 0;
            acc = _v54;
            const _v55: any = (args[1] ?? 0);
            acc = _v55;
            const _v56: any = await rt.send(_v55, "at", [_v54]);
            acc = _v56;
            _v49 = _v56;
          }
          acc = _v49;
          const _v57: any = rt.object(891, "KeyMouse");
          acc = _v57;
          const _v58: any = await rt.send(_v57, "setCursor", [_v49]);
          acc = _v58;
          _v47 = _v58;
        }
        acc = _v47;
        let _v59: any = acc;
        const _v60: any = argc;
        acc = _v60;
        const _v61: any = 3;
        acc = _v61;
        const _v62: any = rt.op(">=", ...[_v60, _v61]);
        acc = _v62;
        _v59 = _v62;
        if (rt.truth(_v62)) {
          const _v63: any = (args[2] ?? 0);
          acc = _v63;
          _v59 = _v63;
        } else {
          const _v64: any = 0;
          acc = _v64;
          const _v65: any = (args[1] ?? 0);
          acc = _v65;
          const _v66: any = await rt.send(_v65, "at", [_v64]);
          acc = _v66;
          _v59 = _v66;
        }
        acc = _v59;
        const _v67: any = rt.object(891, "KeyMouse");
        acc = _v67;
        const _v68: any = await rt.send(_v67, "curItem", [_v59]);
        acc = _v68;
        return acc;
      },
      // SCI university.sc: localproc_2
      "localproc_2": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0];
        const _v1: any = rt.global(302);
        acc = _v1;
        const _v2: any = await rt.send(_v1, "education", []);
        acc = _v2;
        const _v3: any = (temps[2] = _v2);
        acc = _v3;
        const _v6: any = 0;
        acc = _v6;
        const _v7: any = (temps[1] = _v6);
        acc = _v7;
        const _v8: any = (temps[0] = _v7);
        acc = _v8;
        _loop4: for (;;) {
          const _v9: any = (temps[0] ?? 0);
          acc = _v9;
          const _v10: any = (temps[2] ?? 0);
          acc = _v10;
          const _v11: any = await rt.send(_v10, "size", []);
          acc = _v11;
          const _v12: any = rt.op("<", ...[_v9, _v11]);
          acc = _v12;
          if (!rt.truth(_v12)) break _loop4;
          _continue5: {
            let _v13: any = acc;
            const _v14: any = 0;
            acc = _v14;
            let _v15: any = _v14;
            let _v16: any = 1;
            if (rt.truth(_v16)) {
              const _v17: any = (temps[0] ?? 0);
              acc = _v17;
              const _v18: any = (temps[2] ?? 0);
              acc = _v18;
              const _v19: any = await rt.send(_v18, "at", [_v17]);
              acc = _v19;
              const _v20: any = await rt.send(_v19, "quantity", []);
              acc = _v20;
              _v16 = rt.op("<", _v15, _v20);
              _v15 = _v20;
            }
            if (rt.truth(_v16)) {
              const _v21: any = (temps[0] ?? 0);
              acc = _v21;
              const _v22: any = (temps[2] ?? 0);
              acc = _v22;
              const _v23: any = await rt.send(_v22, "at", [_v21]);
              acc = _v23;
              const _v24: any = await rt.send(_v23, "unitsToGraduate", []);
              acc = _v24;
              _v16 = rt.op("<", _v15, _v24);
              _v15 = _v24;
            }
            acc = _v16;
            _v13 = _v16;
            if (rt.truth(_v16)) {
              const _v25: any = (temps[1] = rt.op("+", (temps[1] ?? 0), 1));
              acc = _v25;
              _v13 = _v25;
            }
            acc = _v13;
          }
          const _v26: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
          acc = _v26;
        }
        const _v27: any = (temps[1] ?? 0);
        acc = _v27;
        return _v27;
        return acc;
      },
      // SCI university.sc: localproc_3
      "localproc_3": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = 0;
        acc = _v1;
        const _v2: any = rt.setLocal(207, 1, _v1);
        acc = _v2;
        const _v3: any = rt.object(207, "university");
        acc = _v3;
        const _v4: any = rt.object(207, "publishing");
        acc = _v4;
        const _v5: any = await rt.send(_v4, "addCourse", [_v3]);
        acc = _v5;
        const _v6: any = rt.object(207, "university");
        acc = _v6;
        const _v7: any = rt.object(207, "research");
        acc = _v7;
        const _v8: any = await rt.send(_v7, "addCourse", [_v6]);
        acc = _v8;
        const _v9: any = rt.object(207, "university");
        acc = _v9;
        const _v10: any = rt.object(207, "postDoctoral");
        acc = _v10;
        const _v11: any = await rt.send(_v10, "addCourse", [_v9]);
        acc = _v11;
        const _v12: any = rt.object(207, "university");
        acc = _v12;
        const _v13: any = rt.object(207, "graduate");
        acc = _v13;
        const _v14: any = await rt.send(_v13, "addCourse", [_v12]);
        acc = _v14;
        const _v15: any = rt.object(207, "university");
        acc = _v15;
        const _v16: any = rt.object(207, "academic");
        acc = _v16;
        const _v17: any = await rt.send(_v16, "addCourse", [_v15]);
        acc = _v17;
        const _v18: any = rt.object(207, "university");
        acc = _v18;
        const _v19: any = rt.object(207, "ba");
        acc = _v19;
        const _v20: any = await rt.send(_v19, "addCourse", [_v18]);
        acc = _v20;
        const _v21: any = rt.object(207, "university");
        acc = _v21;
        const _v22: any = rt.object(207, "juniorCollege");
        acc = _v22;
        const _v23: any = await rt.send(_v22, "addCourse", [_v21]);
        acc = _v23;
        const _v24: any = rt.object(207, "university");
        acc = _v24;
        const _v25: any = rt.object(207, "engineering");
        acc = _v25;
        const _v26: any = await rt.send(_v25, "addCourse", [_v24]);
        acc = _v26;
        const _v27: any = rt.object(207, "university");
        acc = _v27;
        const _v28: any = rt.object(207, "preEngineering");
        acc = _v28;
        const _v29: any = await rt.send(_v28, "addCourse", [_v27]);
        acc = _v29;
        const _v30: any = rt.object(207, "university");
        acc = _v30;
        const _v31: any = rt.object(207, "electronics");
        acc = _v31;
        const _v32: any = await rt.send(_v31, "addCourse", [_v30]);
        acc = _v32;
        const _v33: any = rt.object(207, "university");
        acc = _v33;
        const _v34: any = rt.object(207, "tradeSchool");
        acc = _v34;
        const _v35: any = await rt.send(_v34, "addCourse", [_v33]);
        acc = _v35;
        let _v36: any = acc;
        const _v37: any = rt.local(207, 1);
        acc = _v37;
        _v36 = _v37;
        if (rt.truth(_v37)) {
          const _v38: any = rt.local(207, 1);
          acc = _v38;
          const _v39: any = 1;
          acc = _v39;
          const _v40: any = rt.op("-", ...[_v38, _v39]);
          acc = _v40;
          const _v41: any = 42;
          acc = _v41;
          const _v42: any = 4;
          acc = _v42;
          const _v43: any = rt.local(207, 1);
          acc = _v43;
          const _v44: any = rt.op("-", ...[_v42, _v43]);
          acc = _v44;
          const _v45: any = 14;
          acc = _v45;
          const _v46: any = rt.op("*", ...[_v44, _v45]);
          acc = _v46;
          const _v47: any = rt.op("+", ...[_v41, _v46]);
          acc = _v47;
          const _v48: any = rt.object(207, "books");
          acc = _v48;
          const _v49: any = await rt.send(_v48, "cel", [_v40]);
          acc = _v49;
          const _v50: any = await rt.send(_v48, "nsTop", [_v47]);
          acc = _v50;
          _v36 = _v50;
        }
        acc = _v36;
        return acc;
      },
      // SCI university.sc: localproc_4
      "localproc_4": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let _v1: any = acc;
        const _v2: any = rt.local(207, 1);
        acc = _v2;
        _v1 = _v2;
        if (rt.truth(_v2)) {
          const _v3: any = rt.object(207, "university");
          acc = _v3;
          const _v4: any = await rt.send(_v3, "size", []);
          acc = _v4;
          const _v5: any = 1;
          acc = _v5;
          const _v6: any = rt.op("-", ...[_v4, _v5]);
          acc = _v6;
          const _v7: any = (temps[0] = _v6);
          acc = _v7;
          _v1 = _v7;
          const _v8: any = 4;
          acc = _v8;
          const _v9: any = rt.local(207, 1);
          acc = _v9;
          const _v10: any = rt.op("-", ...[_v8, _v9]);
          acc = _v10;
          const _v11: any = (temps[3] = _v10);
          acc = _v11;
          _v1 = _v11;
          _loop12: for (;;) {
            const _v14: any = (temps[0] ?? 0);
            acc = _v14;
            const _v15: any = 2;
            acc = _v15;
            const _v16: any = rt.op(">", ...[_v14, _v15]);
            acc = _v16;
            if (!rt.truth(_v16)) break _loop12;
            _continue13: {
              let _v17: any = acc;
              const _v18: any = rt.object(207, "UniversityDIcon");
              acc = _v18;
              const _v19: any = (temps[0] ?? 0);
              acc = _v19;
              const _v20: any = rt.object(207, "university");
              acc = _v20;
              const _v21: any = await rt.send(_v20, "at", [_v19]);
              acc = _v21;
              const _v22: any = await rt.send(_v21, "isMemberOf", [_v18]);
              acc = _v22;
              _v17 = _v22;
              if (rt.truth(_v22)) {
                let _v23: any = acc;
                const _v24: any = (temps[0] ?? 0);
                acc = _v24;
                const _v25: any = rt.object(207, "university");
                acc = _v25;
                const _v26: any = await rt.send(_v25, "at", [_v24]);
                acc = _v26;
                const _v27: any = await rt.send(_v26, "indexNum", []);
                acc = _v27;
                const _v28: any = rt.global(302);
                acc = _v28;
                const _v29: any = await rt.send(_v28, "education", []);
                acc = _v29;
                const _v30: any = await rt.send(_v29, "objectAtIndex", [_v27]);
                acc = _v30;
                const _v31: any = (temps[1] = _v30);
                acc = _v31;
                _v23 = _v31;
                if (rt.truth(_v31)) {
                  const _v32: any = (temps[1] ?? 0);
                  acc = _v32;
                  const _v33: any = await rt.send(_v32, "unitsToGraduate", []);
                  acc = _v33;
                  const _v34: any = (temps[1] ?? 0);
                  acc = _v34;
                  const _v35: any = await rt.send(_v34, "quantity", []);
                  acc = _v35;
                  const _v36: any = rt.op("-", ...[_v33, _v35]);
                  acc = _v36;
                  const _v37: any = rt.global(302);
                  acc = _v37;
                  const _v38: any = await rt.send(_v37, "extraCredits", []);
                  acc = _v38;
                  const _v39: any = rt.op("-", ...[_v36, _v38]);
                  acc = _v39;
                  const _v40: any = (temps[2] = _v39);
                  acc = _v40;
                  _v23 = _v40;
                  let _v41: any = acc;
                  let _v42: any = 1;
                  if (rt.truth(_v42)) {
                    const _v43: any = rt.local(207, 17);
                    acc = _v43;
                    _v42 = _v43;
                  }
                  if (rt.truth(_v42)) {
                    const _v44: any = (temps[2] ?? 0);
                    acc = _v44;
                    const _v45: any = 0;
                    acc = _v45;
                    const _v46: any = rt.op("<=", ...[_v44, _v45]);
                    acc = _v46;
                    _v42 = _v46;
                  }
                  acc = _v42;
                  _v41 = _v42;
                  if (rt.truth(_v42)) {
                    const _v47: any = 1;
                    acc = _v47;
                    const _v48: any = (temps[2] = _v47);
                    acc = _v48;
                    _v41 = _v48;
                  }
                  acc = _v41;
                  _v23 = _v41;
                  let _v49: any = acc;
                  const _v50: any = 0;
                  acc = _v50;
                  let _v51: any = _v50;
                  let _v52: any = 1;
                  if (rt.truth(_v52)) {
                    const _v53: any = (temps[2] ?? 0);
                    acc = _v53;
                    _v52 = rt.op("<=", _v51, _v53);
                    _v51 = _v53;
                  }
                  if (rt.truth(_v52)) {
                    const _v54: any = (temps[1] ?? 0);
                    acc = _v54;
                    const _v55: any = await rt.send(_v54, "unitsToGraduate", []);
                    acc = _v55;
                    const _v56: any = rt.global(302);
                    acc = _v56;
                    const _v57: any = await rt.send(_v56, "extraCredits", []);
                    acc = _v57;
                    const _v58: any = rt.op("-", ...[_v55, _v57]);
                    acc = _v58;
                    _v52 = rt.op("<=", _v51, _v58);
                    _v51 = _v58;
                  }
                  acc = _v52;
                  _v49 = _v52;
                  if (rt.truth(_v52)) {
                    const _v59: any = await rt.call(207, "GetPort", [], this);
                    acc = _v59;
                    const _v60: any = (temps[4] = _v59);
                    acc = _v60;
                    _v49 = _v60;
                    const _v61: any = 0;
                    acc = _v61;
                    const _v62: any = await rt.call(207, "SetPort", [_v61], this);
                    acc = _v62;
                    _v49 = _v62;
                    const _v63: any = rt.ref("array", temps, 5);
                    acc = _v63;
                    const _v64: any = 207;
                    acc = _v64;
                    const _v65: any = 24;
                    acc = _v65;
                    const _v66: any = (temps[2] ?? 0);
                    acc = _v66;
                    const _v67: any = await rt.call(207, "Format", [_v63, _v64, _v65, _v66], this);
                    acc = _v67;
                    const _v68: any = 102;
                    acc = _v68;
                    const _v69: any = 0;
                    acc = _v69;
                    const _v70: any = 103;
                    acc = _v70;
                    let _v71: any = acc;
                    const _v72: any = rt.global(535);
                    acc = _v72;
                    _v71 = _v72;
                    if (rt.truth(_v72)) {
                      const _v73: any = (temps[3] ?? 0);
                      acc = _v73;
                      const _v74: any = rt.local(207, (9 + (Number(_v73) & 65535)));
                      acc = _v74;
                      _v71 = _v74;
                    } else {
                      const _v75: any = (temps[3] ?? 0);
                      acc = _v75;
                      const _v76: any = rt.local(207, (13 + (Number(_v75) & 65535)));
                      acc = _v76;
                      _v71 = _v76;
                    }
                    acc = _v71;
                    const _v77: any = 100;
                    acc = _v77;
                    const _v78: any = 222;
                    acc = _v78;
                    const _v79: any = (temps[3] ?? 0);
                    acc = _v79;
                    const _v80: any = rt.local(207, (5 + (Number(_v79) & 65535)));
                    acc = _v80;
                    const _v81: any = await rt.call(207, "Display", [_v67, _v68, _v69, _v70, _v71, _v77, _v78, _v80], this);
                    acc = _v81;
                    _v49 = _v81;
                    const _v82: any = (temps[4] ?? 0);
                    acc = _v82;
                    const _v83: any = await rt.call(207, "SetPort", [_v82], this);
                    acc = _v83;
                    _v49 = _v83;
                  }
                  acc = _v49;
                  _v23 = _v49;
                }
                acc = _v23;
                _v17 = _v23;
                const _v84: any = (temps[3] = rt.op("+", (temps[3] ?? 0), 1));
                acc = _v84;
                _v17 = _v84;
              }
              acc = _v17;
              const _v85: any = (temps[0] = rt.op("-", (temps[0] ?? 0), 1));
              acc = _v85;
            }
          }
          _v1 = acc;
        }
        acc = _v1;
        return acc;
      },
    },
    exports: {"0": "university"},
  });
}
