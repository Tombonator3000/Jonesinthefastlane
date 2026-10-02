// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/Menu.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 3cfe6ff05a0ec0acbb5064e8b8994880675a2561ff0166160dc160793ac13e0a
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(997, {
    name: "Menu",
    uses: [0, 1, 255, 987, 990, 996],
    locals: [0, 0, 136, 133, 129, 127, 0, 0, 0, 35],
    objects: [
      {
        name: "MenuBar",
        className: "MenuBar",
        parent: {"script": 255, "name": "MenuBar"},
        isClass: true,
        properties: {},
        methods: {
          // SCI Menu.sc: MenuBar.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = " \u0001 ";
            acc = _v1;
            const _v2: any = "About JONES `#0:Help `#1";
            acc = _v2;
            const _v3: any = await rt.call(997, "AddMenu", [_v1, _v2], this);
            acc = _v3;
            const _v4: any = " Game ";
            acc = _v4;
            const _v5: any = "Save Game`#5:Set Save Directory `^Y:Restore Game`#7:--!:Quit `^Q:Restart `#9";
            acc = _v5;
            const _v6: any = await rt.call(997, "AddMenu", [_v4, _v5], this);
            acc = _v6;
            const _v7: any = " Options ";
            acc = _v7;
            const _v8: any = "Change Reading Speed `^R:Turn Messages Off `#8:Delete Current Player `^Z:Change Animation Speed `^S:Graphics Detail Level `^T :--!:Change Volume `^V:Turn Music Off `#2:Turn Sound Effects Off `#3";
            acc = _v8;
            const _v9: any = await rt.call(997, "AddMenu", [_v7, _v8], this);
            acc = _v9;
            const _v10: any = " Status ";
            acc = _v10;
            const _v11: any = "Statistics`#4:Goals`#6";
            acc = _v11;
            const _v12: any = await rt.call(997, "AddMenu", [_v10, _v11], this);
            acc = _v12;
            const _v13: any = 771;
            acc = _v13;
            const _v14: any = 112;
            acc = _v14;
            const _v15: any = 0;
            acc = _v15;
            const _v16: any = await rt.call(997, "SetMenu", [_v13, _v14, _v15], this);
            acc = _v16;
            const _v17: any = 513;
            acc = _v17;
            const _v18: any = 112;
            acc = _v18;
            const _v19: any = 0;
            acc = _v19;
            const _v20: any = await rt.call(997, "SetMenu", [_v17, _v18, _v19], this);
            acc = _v20;
            const _v21: any = 515;
            acc = _v21;
            const _v22: any = 112;
            acc = _v22;
            const _v23: any = 0;
            acc = _v23;
            const _v24: any = await rt.call(997, "SetMenu", [_v21, _v22, _v23], this);
            acc = _v24;
            const _v25: any = 1025;
            acc = _v25;
            const _v26: any = 112;
            acc = _v26;
            const _v27: any = 0;
            acc = _v27;
            const _v28: any = await rt.call(997, "SetMenu", [_v25, _v26, _v27], this);
            acc = _v28;
            const _v29: any = 1026;
            acc = _v29;
            const _v30: any = 112;
            acc = _v30;
            const _v31: any = 0;
            acc = _v31;
            const _v32: any = await rt.call(997, "SetMenu", [_v29, _v30, _v31], this);
            acc = _v32;
            return acc;
          },
          // SCI Menu.sc: MenuBar.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const _v1: any = rt.global(59);
            acc = _v1;
            const _v2: any = rt.setLocal(997, 1, _v1);
            acc = _v2;
            const _v3: any = rt.global(371);
            acc = _v3;
            const _v4: any = rt.setGlobal(59, _v3);
            acc = _v4;
            const _v5: any = rt.global(19);
            acc = _v5;
            const _v6: any = (temps[7] = _v5);
            acc = _v6;
            const _v7: any = rt.object(996, "User");
            acc = _v7;
            const _v8: any = await rt.send(_v7, "controls", []);
            acc = _v8;
            const _v9: any = (temps[5] = _v8);
            acc = _v9;
            let _v10: any = acc;
            _branch11: {
              let _v12: any = 1;
              if (rt.truth(_v12)) {
                const _v13: any = (args[0] ?? 0);
                acc = _v13;
                const _v14: any = await rt.send(_v13, "claimed", []);
                acc = _v14;
                const _v15: any = rt.op("not", ...[_v14]);
                acc = _v15;
                _v12 = _v15;
              }
              if (rt.truth(_v12)) {
                const _v16: any = rt.global(439);
                acc = _v16;
                _v12 = _v16;
              }
              if (rt.truth(_v12)) {
                let _v17: any = 0;
                if (!rt.truth(_v17)) {
                  const _v18: any = (args[0] ?? 0);
                  acc = _v18;
                  const _v19: any = await rt.send(_v18, "type", []);
                  acc = _v19;
                  const _v20: any = 2;
                  acc = _v20;
                  const _v21: any = rt.op("==", ...[_v19, _v20]);
                  acc = _v21;
                  _v17 = _v21;
                }
                if (!rt.truth(_v17)) {
                  const _v22: any = (args[0] ?? 0);
                  acc = _v22;
                  const _v23: any = await rt.send(_v22, "type", []);
                  acc = _v23;
                  const _v24: any = 1;
                  acc = _v24;
                  const _v25: any = rt.op("==", ...[_v23, _v24]);
                  acc = _v25;
                  _v17 = _v25;
                }
                acc = _v17;
                _v12 = _v17;
              }
              if (rt.truth(_v12)) {
                const _v26: any = (args[0] ?? 0);
                acc = _v26;
                const _v27: any = await rt.send(_v26, "modifiers", []);
                acc = _v27;
                const _v28: any = 4;
                acc = _v28;
                const _v29: any = rt.op("&", ...[_v27, _v28]);
                acc = _v29;
                _v12 = _v29;
              }
              acc = _v12;
              _v10 = _v12;
              acc = _v10;
              if (rt.truth(_v10)) {
                const _v30: any = 1;
                acc = _v30;
                const _v31: any = (args[0] ?? 0);
                acc = _v31;
                const _v32: any = await rt.send(_v31, "claimed", [_v30]);
                acc = _v32;
                _v10 = _v32;
                let _v33: any = acc;
                const _v34: any = (args[0] ?? 0);
                acc = _v34;
                const _v35: any = await rt.send(_v34, "type", []);
                acc = _v35;
                const _v36: any = 2;
                acc = _v36;
                const _v37: any = rt.op("==", ...[_v35, _v36]);
                acc = _v37;
                _v33 = _v37;
                if (rt.truth(_v37)) {
                  const _v38: any = await rt.call(997, "proc997_2", [], this);
                  acc = _v38;
                  _v33 = _v38;
                }
                acc = _v33;
                _v10 = _v33;
                break _branch11;
              }
              let _v39: any = 1;
              if (rt.truth(_v39)) {
                const _v40: any = (args[0] ?? 0);
                acc = _v40;
                const _v41: any = await rt.send(_v40, "claimed", []);
                acc = _v41;
                const _v42: any = rt.op("not", ...[_v41]);
                acc = _v42;
                _v39 = _v42;
              }
              if (rt.truth(_v39)) {
                const _v43: any = rt.global(439);
                acc = _v43;
                _v39 = _v43;
              }
              if (rt.truth(_v39)) {
                let _v44: any = 0;
                if (!rt.truth(_v44)) {
                  const _v45: any = (args[0] ?? 0);
                  acc = _v45;
                  const _v46: any = await rt.send(_v45, "type", []);
                  acc = _v46;
                  const _v47: any = 2;
                  acc = _v47;
                  const _v48: any = rt.op("==", ...[_v46, _v47]);
                  acc = _v48;
                  _v44 = _v48;
                }
                if (!rt.truth(_v44)) {
                  const _v49: any = (args[0] ?? 0);
                  acc = _v49;
                  const _v50: any = await rt.send(_v49, "type", []);
                  acc = _v50;
                  const _v51: any = 1;
                  acc = _v51;
                  const _v52: any = rt.op("==", ...[_v50, _v51]);
                  acc = _v52;
                  _v44 = _v52;
                }
                acc = _v44;
                _v39 = _v44;
              }
              if (rt.truth(_v39)) {
                const _v53: any = (args[0] ?? 0);
                acc = _v53;
                const _v54: any = await rt.send(_v53, "modifiers", []);
                acc = _v54;
                const _v55: any = 3;
                acc = _v55;
                const _v56: any = rt.op("&", ...[_v54, _v55]);
                acc = _v56;
                _v39 = _v56;
              }
              acc = _v39;
              _v10 = _v39;
              acc = _v10;
              if (rt.truth(_v10)) {
                const _v57: any = 1;
                acc = _v57;
                const _v58: any = (args[0] ?? 0);
                acc = _v58;
                const _v59: any = await rt.send(_v58, "claimed", [_v57]);
                acc = _v59;
                _v10 = _v59;
                let _v60: any = acc;
                const _v61: any = (args[0] ?? 0);
                acc = _v61;
                const _v62: any = await rt.send(_v61, "type", []);
                acc = _v62;
                const _v63: any = 2;
                acc = _v63;
                const _v64: any = rt.op("==", ...[_v62, _v63]);
                acc = _v64;
                _v60 = _v64;
                if (rt.truth(_v64)) {
                  const _v65: any = await rt.call(997, "proc997_1", [], this);
                  acc = _v65;
                  _v60 = _v65;
                }
                acc = _v60;
                _v10 = _v60;
                break _branch11;
              }
              let _v66: any = acc;
              const _v67: any = (args[0] ?? 0);
              acc = _v67;
              const _v68: any = await rt.superSend(this, {"script": 997, "name": "MenuBar"}, "handleEvent", [_v67]);
              acc = _v68;
              const _v69: any = (temps[1] = _v68);
              acc = _v69;
              _branch70: {
                const _v71: any = 257;
                acc = _v71;
                _v66 = rt.op("==", _v69, _v71);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v72: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v72;
                  _v66 = _v72;
                  const _v73: any = 0;
                  acc = _v73;
                  const _v74: any = await rt.call(0, "proc0_17", [_v73], this);
                  acc = _v74;
                  _v66 = _v74;
                  const _v75: any = rt.ref("global", 0, 100);
                  acc = _v75;
                  const _v76: any = 997;
                  acc = _v76;
                  const _v77: any = 0;
                  acc = _v77;
                  const _v78: any = rt.global(28);
                  acc = _v78;
                  const _v79: any = await rt.call(997, "Format", [_v75, _v76, _v77, _v78], this);
                  acc = _v79;
                  const _v80: any = 33;
                  acc = _v80;
                  const _v81: any = 4;
                  acc = _v81;
                  const _v82: any = 70;
                  acc = _v82;
                  const _v83: any = 160;
                  acc = _v83;
                  const _v84: any = 30;
                  acc = _v84;
                  const _v85: any = 1;
                  acc = _v85;
                  const _v86: any = 81;
                  acc = _v86;
                  const _v87: any = "Next";
                  acc = _v87;
                  const _v88: any = 1;
                  acc = _v88;
                  const _v89: any = await rt.call(255, "Print", [_v79, _v80, _v81, _v82, _v83, _v84, _v85, _v86, _v87, _v88], this);
                  acc = _v89;
                  _v66 = _v89;
                  const _v90: any = rt.ref("global", 0, 100);
                  acc = _v90;
                  const _v91: any = 997;
                  acc = _v91;
                  const _v92: any = 1;
                  acc = _v92;
                  const _v93: any = await rt.call(997, "Format", [_v90, _v91, _v92], this);
                  acc = _v93;
                  const _v94: any = 33;
                  acc = _v94;
                  const _v95: any = 4;
                  acc = _v95;
                  const _v96: any = 70;
                  acc = _v96;
                  const _v97: any = 160;
                  acc = _v97;
                  const _v98: any = 30;
                  acc = _v98;
                  const _v99: any = 1;
                  acc = _v99;
                  const _v100: any = 81;
                  acc = _v100;
                  const _v101: any = "OK";
                  acc = _v101;
                  const _v102: any = 1;
                  acc = _v102;
                  const _v103: any = await rt.call(255, "Print", [_v93, _v94, _v95, _v96, _v97, _v98, _v99, _v100, _v101, _v102], this);
                  acc = _v103;
                  _v66 = _v103;
                  const _v104: any = rt.global(514);
                  acc = _v104;
                  const _v105: any = await rt.call(0, "proc0_17", [_v104], this);
                  acc = _v105;
                  _v66 = _v105;
                  break _branch70;
                }
                const _v106: any = 258;
                acc = _v106;
                _v66 = rt.op("==", _v69, _v106);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v107: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v107;
                  _v66 = _v107;
                  const _v108: any = 0;
                  acc = _v108;
                  const _v109: any = await rt.call(0, "proc0_17", [_v108], this);
                  acc = _v109;
                  _v66 = _v109;
                  const _v110: any = rt.ref("global", 0, 100);
                  acc = _v110;
                  const _v111: any = 997;
                  acc = _v111;
                  const _v112: any = 2;
                  acc = _v112;
                  const _v113: any = await rt.call(997, "Format", [_v110, _v111, _v112], this);
                  acc = _v113;
                  const _v114: any = 33;
                  acc = _v114;
                  const _v115: any = 4;
                  acc = _v115;
                  const _v116: any = 70;
                  acc = _v116;
                  const _v117: any = 170;
                  acc = _v117;
                  const _v118: any = 30;
                  acc = _v118;
                  const _v119: any = 0;
                  acc = _v119;
                  const _v120: any = 81;
                  acc = _v120;
                  const _v121: any = "Next";
                  acc = _v121;
                  const _v122: any = 1;
                  acc = _v122;
                  const _v123: any = await rt.call(255, "Print", [_v113, _v114, _v115, _v116, _v117, _v118, _v119, _v120, _v121, _v122], this);
                  acc = _v123;
                  _v66 = _v123;
                  const _v124: any = rt.ref("global", 0, 100);
                  acc = _v124;
                  const _v125: any = 997;
                  acc = _v125;
                  const _v126: any = 3;
                  acc = _v126;
                  const _v127: any = await rt.call(997, "Format", [_v124, _v125, _v126], this);
                  acc = _v127;
                  const _v128: any = 33;
                  acc = _v128;
                  const _v129: any = 4;
                  acc = _v129;
                  const _v130: any = 70;
                  acc = _v130;
                  const _v131: any = 160;
                  acc = _v131;
                  const _v132: any = 30;
                  acc = _v132;
                  const _v133: any = 0;
                  acc = _v133;
                  const _v134: any = 81;
                  acc = _v134;
                  const _v135: any = "OK";
                  acc = _v135;
                  const _v136: any = 1;
                  acc = _v136;
                  const _v137: any = await rt.call(255, "Print", [_v127, _v128, _v129, _v130, _v131, _v132, _v133, _v134, _v135, _v136], this);
                  acc = _v137;
                  _v66 = _v137;
                  const _v138: any = rt.global(514);
                  acc = _v138;
                  const _v139: any = await rt.call(0, "proc0_17", [_v138], this);
                  acc = _v139;
                  _v66 = _v139;
                  break _branch70;
                }
                const _v140: any = 518;
                acc = _v140;
                _v66 = rt.op("==", _v69, _v140);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v141: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v141;
                  _v66 = _v141;
                  const _v142: any = 0;
                  acc = _v142;
                  const _v143: any = await rt.call(0, "proc0_17", [_v142], this);
                  acc = _v143;
                  _v66 = _v143;
                  let _v144: any = acc;
                  const _v145: any = 997;
                  acc = _v145;
                  const _v146: any = 4;
                  acc = _v146;
                  const _v147: any = 81;
                  acc = _v147;
                  const _v148: any = "Yes";
                  acc = _v148;
                  const _v149: any = 1;
                  acc = _v149;
                  const _v150: any = 81;
                  acc = _v150;
                  const _v151: any = "No";
                  acc = _v151;
                  const _v152: any = 0;
                  acc = _v152;
                  const _v153: any = await rt.call(255, "Print", [_v145, _v146, _v147, _v148, _v149, _v150, _v151, _v152], this);
                  acc = _v153;
                  _v144 = _v153;
                  if (rt.truth(_v153)) {
                    const _v154: any = 23;
                    acc = _v154;
                    const _v155: any = rt.global(476);
                    acc = _v155;
                    const _v156: any = await rt.send(_v155, "play", [_v154]);
                    acc = _v156;
                    _v144 = _v156;
                    const _v157: any = 1;
                    acc = _v157;
                    const _v158: any = rt.setGlobal(528, _v157);
                    acc = _v158;
                    _v144 = _v158;
                  } else {
                    const _v159: any = 23;
                    acc = _v159;
                    const _v160: any = rt.global(476);
                    acc = _v160;
                    const _v161: any = await rt.send(_v160, "play", [_v159]);
                    acc = _v161;
                    _v144 = _v161;
                  }
                  acc = _v144;
                  _v66 = _v144;
                  const _v162: any = rt.global(514);
                  acc = _v162;
                  const _v163: any = await rt.call(0, "proc0_17", [_v162], this);
                  acc = _v163;
                  _v66 = _v163;
                  break _branch70;
                }
                const _v164: any = 517;
                acc = _v164;
                _v66 = rt.op("==", _v69, _v164);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v165: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v165;
                  _v66 = _v165;
                  const _v166: any = 0;
                  acc = _v166;
                  const _v167: any = await rt.call(0, "proc0_17", [_v166], this);
                  acc = _v167;
                  _v66 = _v167;
                  const _v168: any = 997;
                  acc = _v168;
                  const _v169: any = 5;
                  acc = _v169;
                  const _v170: any = 81;
                  acc = _v170;
                  const _v171: any = "YES";
                  acc = _v171;
                  const _v172: any = 1;
                  acc = _v172;
                  const _v173: any = 81;
                  acc = _v173;
                  const _v174: any = "NO";
                  acc = _v174;
                  const _v175: any = 0;
                  acc = _v175;
                  const _v176: any = await rt.call(255, "Print", [_v168, _v169, _v170, _v171, _v172, _v173, _v174, _v175], this);
                  acc = _v176;
                  const _v177: any = rt.setGlobal(4, _v176);
                  acc = _v177;
                  _v66 = _v177;
                  const _v178: any = 23;
                  acc = _v178;
                  const _v179: any = rt.global(476);
                  acc = _v179;
                  const _v180: any = await rt.send(_v179, "play", [_v178]);
                  acc = _v180;
                  _v66 = _v180;
                  const _v181: any = rt.global(514);
                  acc = _v181;
                  const _v182: any = await rt.call(0, "proc0_17", [_v181], this);
                  acc = _v182;
                  _v66 = _v182;
                  break _branch70;
                }
                const _v183: any = 513;
                acc = _v183;
                _v66 = rt.op("==", _v69, _v183);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v184: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v184;
                  _v66 = _v184;
                  const _v185: any = 0;
                  acc = _v185;
                  const _v186: any = await rt.call(0, "proc0_17", [_v185], this);
                  acc = _v186;
                  _v66 = _v186;
                  let _v187: any = acc;
                  const _v188: any = 997;
                  acc = _v188;
                  const _v189: any = 6;
                  acc = _v189;
                  const _v190: any = 81;
                  acc = _v190;
                  const _v191: any = "YES";
                  acc = _v191;
                  const _v192: any = 1;
                  acc = _v192;
                  const _v193: any = 81;
                  acc = _v193;
                  const _v194: any = "NO";
                  acc = _v194;
                  const _v195: any = 0;
                  acc = _v195;
                  const _v196: any = 70;
                  acc = _v196;
                  const _v197: any = 180;
                  acc = _v197;
                  const _v198: any = await rt.call(255, "Print", [_v188, _v189, _v190, _v191, _v192, _v193, _v194, _v195, _v196, _v197], this);
                  acc = _v198;
                  _v187 = _v198;
                  if (rt.truth(_v198)) {
                    const _v199: any = 136;
                    acc = _v199;
                    const _v200: any = 997;
                    acc = _v200;
                    const _v201: any = await rt.call(997, "Load", [_v199, _v200], this);
                    acc = _v201;
                    _v187 = _v201;
                    const _v202: any = rt.global(1);
                    acc = _v202;
                    const _v203: any = await rt.send(_v202, "save", []);
                    acc = _v203;
                    _v187 = _v203;
                  }
                  acc = _v187;
                  _v66 = _v187;
                  const _v204: any = rt.global(514);
                  acc = _v204;
                  const _v205: any = await rt.call(0, "proc0_17", [_v204], this);
                  acc = _v205;
                  _v66 = _v205;
                  break _branch70;
                }
                const _v206: any = 514;
                acc = _v206;
                _v66 = rt.op("==", _v69, _v206);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v207: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v207;
                  _v66 = _v207;
                  const _v208: any = rt.global(30);
                  acc = _v208;
                  const _v209: any = await rt.call(990, "proc990_2", [_v208], this);
                  acc = _v209;
                  _v66 = _v209;
                  break _branch70;
                }
                const _v210: any = 515;
                acc = _v210;
                _v66 = rt.op("==", _v69, _v210);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v211: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v211;
                  _v66 = _v211;
                  const _v212: any = 0;
                  acc = _v212;
                  const _v213: any = await rt.call(0, "proc0_17", [_v212], this);
                  acc = _v213;
                  _v66 = _v213;
                  let _v214: any = acc;
                  const _v215: any = 997;
                  acc = _v215;
                  const _v216: any = 7;
                  acc = _v216;
                  const _v217: any = 81;
                  acc = _v217;
                  const _v218: any = "YES";
                  acc = _v218;
                  const _v219: any = 1;
                  acc = _v219;
                  const _v220: any = 81;
                  acc = _v220;
                  const _v221: any = "NO";
                  acc = _v221;
                  const _v222: any = 0;
                  acc = _v222;
                  const _v223: any = 70;
                  acc = _v223;
                  const _v224: any = 150;
                  acc = _v224;
                  const _v225: any = await rt.call(255, "Print", [_v215, _v216, _v217, _v218, _v219, _v220, _v221, _v222, _v223, _v224], this);
                  acc = _v225;
                  _v214 = _v225;
                  if (rt.truth(_v225)) {
                    const _v226: any = 0;
                    acc = _v226;
                    const _v227: any = rt.setGlobal(481, _v226);
                    acc = _v227;
                    _v214 = _v227;
                    const _v228: any = 1;
                    acc = _v228;
                    const _v229: any = rt.setGlobal(529, _v228);
                    acc = _v229;
                    _v214 = _v229;
                  }
                  acc = _v214;
                  _v66 = _v214;
                  const _v230: any = rt.global(514);
                  acc = _v230;
                  const _v231: any = await rt.call(0, "proc0_17", [_v230], this);
                  acc = _v231;
                  _v66 = _v231;
                  break _branch70;
                }
                const _v232: any = 769;
                acc = _v232;
                _v66 = rt.op("==", _v69, _v232);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v233: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v233;
                  _v66 = _v233;
                  const _v234: any = "Change reading speed.";
                  acc = _v234;
                  const _v235: any = "Reading Speed";
                  acc = _v235;
                  const _v236: any = 2;
                  acc = _v236;
                  const _v237: any = 5;
                  acc = _v237;
                  const _v238: any = 15;
                  acc = _v238;
                  const _v239: any = "More Time";
                  acc = _v239;
                  const _v240: any = "Less Time";
                  acc = _v240;
                  const _v241: any = rt.global(426);
                  acc = _v241;
                  const _v242: any = rt.object(987, "Gauge");
                  acc = _v242;
                  const _v243: any = await rt.send(_v242, "new", []);
                  acc = _v243;
                  const _v244: any = await rt.send(_v243, "description", [_v234]);
                  acc = _v244;
                  const _v245: any = await rt.send(_v243, "text", [_v235]);
                  acc = _v245;
                  const _v246: any = await rt.send(_v243, "minimum", [_v236]);
                  acc = _v246;
                  const _v247: any = await rt.send(_v243, "normal", [_v237]);
                  acc = _v247;
                  const _v248: any = await rt.send(_v243, "maximum", [_v238]);
                  acc = _v248;
                  const _v249: any = await rt.send(_v243, "higher", [_v239]);
                  acc = _v249;
                  const _v250: any = await rt.send(_v243, "lower", [_v240]);
                  acc = _v250;
                  const _v251: any = await rt.send(_v243, "doit", [_v241]);
                  acc = _v251;
                  const _v252: any = (temps[4] = _v251);
                  acc = _v252;
                  const _v253: any = rt.setGlobal(426, _v252);
                  acc = _v253;
                  _v66 = _v253;
                  break _branch70;
                }
                const _v254: any = 770;
                acc = _v254;
                _v66 = rt.op("==", _v69, _v254);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v255: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v255;
                  _v66 = _v255;
                  const _v256: any = 0;
                  acc = _v256;
                  const _v257: any = await rt.call(0, "proc0_17", [_v256], this);
                  acc = _v257;
                  _v66 = _v257;
                  let _v258: any = acc;
                  const _v259: any = 1;
                  acc = _v259;
                  const _v260: any = rt.global(427);
                  acc = _v260;
                  const _v261: any = rt.op("-", ...[_v259, _v260]);
                  acc = _v261;
                  const _v262: any = rt.setGlobal(427, _v261);
                  acc = _v262;
                  _v258 = _v262;
                  if (rt.truth(_v262)) {
                    const _v263: any = 997;
                    acc = _v263;
                    const _v264: any = 8;
                    acc = _v264;
                    const _v265: any = 25;
                    acc = _v265;
                    let _v266: any = acc;
                    const _v267: any = rt.global(426);
                    acc = _v267;
                    const _v268: any = 5;
                    acc = _v268;
                    const _v269: any = rt.op("<", ...[_v267, _v268]);
                    acc = _v269;
                    _v266 = _v269;
                    if (rt.truth(_v269)) {
                      const _v270: any = 5;
                      acc = _v270;
                      _v266 = _v270;
                    } else {
                      const _v271: any = rt.global(426);
                      acc = _v271;
                      _v266 = _v271;
                    }
                    acc = _v266;
                    const _v272: any = await rt.call(255, "Print", [_v263, _v264, _v265, _v266], this);
                    acc = _v272;
                    _v258 = _v272;
                  } else {
                    const _v273: any = 997;
                    acc = _v273;
                    const _v274: any = 9;
                    acc = _v274;
                    const _v275: any = 25;
                    acc = _v275;
                    let _v276: any = acc;
                    const _v277: any = rt.global(426);
                    acc = _v277;
                    const _v278: any = 5;
                    acc = _v278;
                    const _v279: any = rt.op("<", ...[_v277, _v278]);
                    acc = _v279;
                    _v276 = _v279;
                    if (rt.truth(_v279)) {
                      const _v280: any = 5;
                      acc = _v280;
                      _v276 = _v280;
                    } else {
                      const _v281: any = rt.global(426);
                      acc = _v281;
                      _v276 = _v281;
                    }
                    acc = _v276;
                    const _v282: any = await rt.call(255, "Print", [_v273, _v274, _v275, _v276], this);
                    acc = _v282;
                    _v258 = _v282;
                  }
                  acc = _v258;
                  _v66 = _v258;
                  const _v283: any = rt.global(514);
                  acc = _v283;
                  const _v284: any = await rt.call(0, "proc0_17", [_v283], this);
                  acc = _v284;
                  _v66 = _v284;
                  const _v285: any = await rt.call(997, "localproc_0", [], this);
                  acc = _v285;
                  _v66 = _v285;
                  break _branch70;
                }
                const _v286: any = 771;
                acc = _v286;
                _v66 = rt.op("==", _v69, _v286);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v287: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v287;
                  _v66 = _v287;
                  const _v290: any = 0;
                  acc = _v290;
                  const _v291: any = (temps[8] = _v290);
                  acc = _v291;
                  const _v292: any = (temps[0] = _v291);
                  acc = _v292;
                  _loop288: for (;;) {
                    const _v293: any = (temps[0] ?? 0);
                    acc = _v293;
                    const _v294: any = 1;
                    acc = _v294;
                    const _v295: any = 2;
                    acc = _v295;
                    const _v296: any = await rt.call(997, "ScriptID", [_v294, _v295], this);
                    acc = _v296;
                    const _v297: any = await rt.send(_v296, "size", []);
                    acc = _v297;
                    const _v298: any = rt.op("<", ...[_v293, _v297]);
                    acc = _v298;
                    if (!rt.truth(_v298)) break _loop288;
                    _continue289: {
                      let _v299: any = acc;
                      const _v300: any = (temps[0] ?? 0);
                      acc = _v300;
                      const _v301: any = 1;
                      acc = _v301;
                      const _v302: any = 2;
                      acc = _v302;
                      const _v303: any = await rt.call(997, "ScriptID", [_v301, _v302], this);
                      acc = _v303;
                      const _v304: any = await rt.send(_v303, "at", [_v300]);
                      acc = _v304;
                      const _v305: any = await rt.send(_v304, "finishStatus", []);
                      acc = _v305;
                      const _v306: any = rt.op("not", ...[_v305]);
                      acc = _v306;
                      _v299 = _v306;
                      if (rt.truth(_v306)) {
                        const _v307: any = (temps[8] = rt.op("+", (temps[8] ?? 0), 1));
                        acc = _v307;
                        _v299 = _v307;
                      }
                      acc = _v299;
                    }
                    const _v308: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                    acc = _v308;
                  }
                  _v66 = acc;
                  let _v309: any = acc;
                  const _v310: any = (temps[8] ?? 0);
                  acc = _v310;
                  const _v311: any = 1;
                  acc = _v311;
                  const _v312: any = rt.op(">", ...[_v310, _v311]);
                  acc = _v312;
                  _v309 = _v312;
                  if (rt.truth(_v312)) {
                    const _v313: any = rt.global(513);
                    acc = _v313;
                    const _v314: any = rt.setLocal(997, 6, _v313);
                    acc = _v314;
                    _v309 = _v314;
                    const _v315: any = rt.global(511);
                    acc = _v315;
                    const _v316: any = rt.setLocal(997, 7, _v315);
                    acc = _v316;
                    _v309 = _v316;
                    const _v317: any = rt.global(512);
                    acc = _v317;
                    const _v318: any = rt.setLocal(997, 8, _v317);
                    acc = _v318;
                    _v309 = _v318;
                    let _v319: any = acc;
                    const _v320: any = rt.global(535);
                    acc = _v320;
                    _v319 = _v320;
                    if (rt.truth(_v320)) {
                      const _v321: any = 9;
                      acc = _v321;
                      const _v322: any = rt.global(302);
                      acc = _v322;
                      const _v323: any = await rt.send(_v322, "whichBody", []);
                      acc = _v323;
                      const _v324: any = rt.op("+", ...[_v321, _v323]);
                      acc = _v324;
                      const _v325: any = rt.setGlobal(513, _v324);
                      acc = _v325;
                      _v319 = _v325;
                      const _v326: any = rt.global(302);
                      acc = _v326;
                      const _v327: any = await rt.send(_v326, "whichBody", []);
                      acc = _v327;
                      const _v328: any = rt.local(997, (2 + (Number(_v327) & 65535)));
                      acc = _v328;
                      const _v329: any = rt.setGlobal(512, _v328);
                      acc = _v329;
                      _v319 = _v329;
                    }
                    acc = _v319;
                    _v309 = _v319;
                    const _v330: any = 0;
                    acc = _v330;
                    const _v331: any = rt.setGlobal(511, _v330);
                    acc = _v331;
                    _v309 = _v331;
                    let _v332: any = acc;
                    const _v333: any = 997;
                    acc = _v333;
                    const _v334: any = 10;
                    acc = _v334;
                    const _v335: any = 81;
                    acc = _v335;
                    const _v336: any = "YES";
                    acc = _v336;
                    const _v337: any = 1;
                    acc = _v337;
                    const _v338: any = 81;
                    acc = _v338;
                    const _v339: any = "NO";
                    acc = _v339;
                    const _v340: any = 0;
                    acc = _v340;
                    const _v341: any = 82;
                    acc = _v341;
                    const _v342: any = rt.global(303);
                    acc = _v342;
                    const _v343: any = await rt.send(_v342, "view", []);
                    acc = _v343;
                    const _v344: any = rt.global(303);
                    acc = _v344;
                    const _v345: any = await rt.send(_v344, "loop", []);
                    acc = _v345;
                    const _v346: any = rt.global(303);
                    acc = _v346;
                    const _v347: any = await rt.send(_v346, "cel", []);
                    acc = _v347;
                    const _v348: any = await rt.call(255, "Print", [_v333, _v334, _v335, _v336, _v337, _v338, _v339, _v340, _v341, _v343, _v345, _v347], this);
                    acc = _v348;
                    _v332 = _v348;
                    if (rt.truth(_v348)) {
                      const _v349: any = rt.local(997, 6);
                      acc = _v349;
                      const _v350: any = rt.setGlobal(513, _v349);
                      acc = _v350;
                      _v332 = _v350;
                      const _v351: any = rt.local(997, 7);
                      acc = _v351;
                      const _v352: any = rt.setGlobal(511, _v351);
                      acc = _v352;
                      _v332 = _v352;
                      const _v353: any = rt.local(997, 8);
                      acc = _v353;
                      const _v354: any = rt.setGlobal(512, _v353);
                      acc = _v354;
                      _v332 = _v354;
                      let _v355: any = acc;
                      const _v356: any = (temps[8] ?? 0);
                      acc = _v356;
                      const _v357: any = 2;
                      acc = _v357;
                      const _v358: any = rt.op("==", ...[_v356, _v357]);
                      acc = _v358;
                      _v355 = _v358;
                      if (rt.truth(_v358)) {
                        const _v359: any = 771;
                        acc = _v359;
                        const _v360: any = 112;
                        acc = _v360;
                        const _v361: any = 0;
                        acc = _v361;
                        const _v362: any = await rt.call(997, "SetMenu", [_v359, _v360, _v361], this);
                        acc = _v362;
                        _v355 = _v362;
                      }
                      acc = _v355;
                      _v332 = _v355;
                      const _v363: any = rt.global(302);
                      acc = _v363;
                      const _v364: any = rt.setGlobal(521, _v363);
                      acc = _v364;
                      _v332 = _v364;
                      const _v365: any = 60;
                      acc = _v365;
                      const _v366: any = rt.setGlobal(323, _v365);
                      acc = _v366;
                      _v332 = _v366;
                      let _v367: any = acc;
                      const _v368: any = rt.global(502);
                      acc = _v368;
                      const _v369: any = rt.op("not", ...[_v368]);
                      acc = _v369;
                      _v367 = _v369;
                      if (rt.truth(_v369)) {
                        const _v370: any = await rt.call(1, "proc1_9", [], this);
                        acc = _v370;
                        _v367 = _v370;
                      }
                      acc = _v367;
                      _v332 = _v367;
                    } else {
                      const _v371: any = rt.local(997, 6);
                      acc = _v371;
                      const _v372: any = rt.setGlobal(513, _v371);
                      acc = _v372;
                      _v332 = _v372;
                      const _v373: any = rt.local(997, 7);
                      acc = _v373;
                      const _v374: any = rt.setGlobal(511, _v373);
                      acc = _v374;
                      _v332 = _v374;
                      const _v375: any = rt.local(997, 8);
                      acc = _v375;
                      const _v376: any = rt.setGlobal(512, _v375);
                      acc = _v376;
                      _v332 = _v376;
                    }
                    acc = _v332;
                    _v309 = _v332;
                  }
                  acc = _v309;
                  _v66 = _v309;
                  break _branch70;
                }
                const _v377: any = 772;
                acc = _v377;
                _v66 = rt.op("==", _v69, _v377);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v378: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v378;
                  _v66 = _v378;
                  const _v379: any = "Change animation speed.";
                  acc = _v379;
                  const _v380: any = "Game Speed";
                  acc = _v380;
                  const _v381: any = 1;
                  acc = _v381;
                  const _v382: any = 6;
                  acc = _v382;
                  const _v383: any = 6;
                  acc = _v383;
                  const _v384: any = "Faster";
                  acc = _v384;
                  const _v385: any = "Slower";
                  acc = _v385;
                  const _v386: any = 7;
                  acc = _v386;
                  const _v387: any = 1;
                  acc = _v387;
                  const _v388: any = 7;
                  acc = _v388;
                  const _v389: any = await rt.call(997, "ScriptID", [_v387, _v388], this);
                  acc = _v389;
                  const _v390: any = await rt.send(_v389, "ticksToDo", []);
                  acc = _v390;
                  const _v391: any = rt.op("-", ...[_v386, _v390]);
                  acc = _v391;
                  const _v392: any = rt.object(987, "Gauge");
                  acc = _v392;
                  const _v393: any = await rt.send(_v392, "new", []);
                  acc = _v393;
                  const _v394: any = await rt.send(_v393, "description", [_v379]);
                  acc = _v394;
                  const _v395: any = await rt.send(_v393, "text", [_v380]);
                  acc = _v395;
                  const _v396: any = await rt.send(_v393, "minimum", [_v381]);
                  acc = _v396;
                  const _v397: any = await rt.send(_v393, "normal", [_v382]);
                  acc = _v397;
                  const _v398: any = await rt.send(_v393, "maximum", [_v383]);
                  acc = _v398;
                  const _v399: any = await rt.send(_v393, "higher", [_v384]);
                  acc = _v399;
                  const _v400: any = await rt.send(_v393, "lower", [_v385]);
                  acc = _v400;
                  const _v401: any = await rt.send(_v393, "doit", [_v391]);
                  acc = _v401;
                  const _v402: any = (temps[4] = _v401);
                  acc = _v402;
                  _v66 = _v402;
                  const _v403: any = 7;
                  acc = _v403;
                  const _v404: any = (temps[4] ?? 0);
                  acc = _v404;
                  const _v405: any = rt.op("-", ...[_v403, _v404]);
                  acc = _v405;
                  const _v406: any = 7;
                  acc = _v406;
                  const _v407: any = (temps[4] ?? 0);
                  acc = _v407;
                  const _v408: any = rt.op("-", ...[_v406, _v407]);
                  acc = _v408;
                  const _v409: any = 1;
                  acc = _v409;
                  const _v410: any = 7;
                  acc = _v410;
                  const _v411: any = await rt.call(997, "ScriptID", [_v409, _v410], this);
                  acc = _v411;
                  const _v412: any = await rt.send(_v411, "ticksToDo", [_v405]);
                  acc = _v412;
                  const _v413: any = await rt.send(_v411, "moveSpeed", [_v408]);
                  acc = _v413;
                  _v66 = _v413;
                  let _v414: any = acc;
                  const _v415: any = 1;
                  acc = _v415;
                  const _v416: any = 7;
                  acc = _v416;
                  const _v417: any = await rt.call(997, "ScriptID", [_v415, _v416], this);
                  acc = _v417;
                  const _v418: any = await rt.send(_v417, "mover", []);
                  acc = _v418;
                  _v414 = _v418;
                  if (rt.truth(_v418)) {
                    const _v419: any = 0;
                    acc = _v419;
                    const _v420: any = 1;
                    acc = _v420;
                    const _v421: any = 7;
                    acc = _v421;
                    const _v422: any = await rt.call(997, "ScriptID", [_v420, _v421], this);
                    acc = _v422;
                    const _v423: any = await rt.send(_v422, "mover", []);
                    acc = _v423;
                    const _v424: any = await rt.send(_v423, "b-moveCnt", [_v419]);
                    acc = _v424;
                    _v414 = _v424;
                  }
                  acc = _v414;
                  _v66 = _v414;
                  let _v425: any = acc;
                  const _v426: any = 1;
                  acc = _v426;
                  const _v427: any = 7;
                  acc = _v427;
                  const _v428: any = await rt.call(997, "ScriptID", [_v426, _v427], this);
                  acc = _v428;
                  const _v429: any = await rt.send(_v428, "cycler", []);
                  acc = _v429;
                  _v425 = _v429;
                  if (rt.truth(_v429)) {
                    const _v430: any = 7;
                    acc = _v430;
                    const _v431: any = (temps[4] ?? 0);
                    acc = _v431;
                    const _v432: any = rt.op("-", ...[_v430, _v431]);
                    acc = _v432;
                    const _v433: any = 1;
                    acc = _v433;
                    const _v434: any = 7;
                    acc = _v434;
                    const _v435: any = await rt.call(997, "ScriptID", [_v433, _v434], this);
                    acc = _v435;
                    const _v436: any = await rt.send(_v435, "cycler", []);
                    acc = _v436;
                    const _v437: any = await rt.send(_v436, "ticksToDo", [_v432]);
                    acc = _v437;
                    _v425 = _v437;
                  }
                  acc = _v425;
                  _v66 = _v425;
                  const _v438: any = 7;
                  acc = _v438;
                  const _v439: any = (temps[4] ?? 0);
                  acc = _v439;
                  const _v440: any = rt.op("-", ...[_v438, _v439]);
                  acc = _v440;
                  const _v441: any = 14;
                  acc = _v441;
                  const _v442: any = rt.op("*", ...[_v440, _v441]);
                  acc = _v442;
                  const _v443: any = rt.setGlobal(475, _v442);
                  acc = _v443;
                  _v66 = _v443;
                  break _branch70;
                }
                const _v444: any = 775;
                acc = _v444;
                _v66 = rt.op("==", _v69, _v444);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v445: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v445;
                  _v66 = _v445;
                  const _v446: any = "Change sound volume.";
                  acc = _v446;
                  const _v447: any = "Sound Volume";
                  acc = _v447;
                  const _v448: any = 0;
                  acc = _v448;
                  const _v449: any = 12;
                  acc = _v449;
                  const _v450: any = 15;
                  acc = _v450;
                  const _v451: any = "Louder";
                  acc = _v451;
                  const _v452: any = "Softer";
                  acc = _v452;
                  const _v453: any = rt.global(520);
                  acc = _v453;
                  const _v454: any = rt.object(987, "Gauge");
                  acc = _v454;
                  const _v455: any = await rt.send(_v454, "new", []);
                  acc = _v455;
                  const _v456: any = await rt.send(_v455, "description", [_v446]);
                  acc = _v456;
                  const _v457: any = await rt.send(_v455, "text", [_v447]);
                  acc = _v457;
                  const _v458: any = await rt.send(_v455, "minimum", [_v448]);
                  acc = _v458;
                  const _v459: any = await rt.send(_v455, "normal", [_v449]);
                  acc = _v459;
                  const _v460: any = await rt.send(_v455, "maximum", [_v450]);
                  acc = _v460;
                  const _v461: any = await rt.send(_v455, "higher", [_v451]);
                  acc = _v461;
                  const _v462: any = await rt.send(_v455, "lower", [_v452]);
                  acc = _v462;
                  const _v463: any = await rt.send(_v455, "doit", [_v453]);
                  acc = _v463;
                  const _v464: any = rt.setGlobal(520, _v463);
                  acc = _v464;
                  _v66 = _v464;
                  const _v465: any = 0;
                  acc = _v465;
                  const _v466: any = rt.global(520);
                  acc = _v466;
                  const _v467: any = await rt.call(997, "DoSound", [_v465, _v466], this);
                  acc = _v467;
                  _v66 = _v467;
                  break _branch70;
                }
                const _v468: any = 776;
                acc = _v468;
                _v66 = rt.op("==", _v69, _v468);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v469: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v469;
                  _v66 = _v469;
                  const _v470: any = rt.global(477);
                  acc = _v470;
                  const _v471: any = await rt.send(_v470, "toggle", []);
                  acc = _v471;
                  _v66 = _v471;
                  break _branch70;
                }
                const _v472: any = 777;
                acc = _v472;
                _v66 = rt.op("==", _v69, _v472);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v473: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v473;
                  _v66 = _v473;
                  const _v474: any = rt.global(476);
                  acc = _v474;
                  const _v475: any = await rt.send(_v474, "toggle", []);
                  acc = _v475;
                  _v66 = _v475;
                  break _branch70;
                }
                const _v476: any = 773;
                acc = _v476;
                _v66 = rt.op("==", _v69, _v476);
                acc = _v66;
                if (rt.truth(_v66)) {
                  const _v477: any = await rt.call(997, "localproc_1", [], this);
                  acc = _v477;
                  _v66 = _v477;
                  const _v478: any = "Change graphics detail level.";
                  acc = _v478;
                  const _v479: any = "Graphic Detail";
                  acc = _v479;
                  const _v480: any = 1;
                  acc = _v480;
                  const _v481: any = 4;
                  acc = _v481;
                  const _v482: any = 4;
                  acc = _v482;
                  const _v483: any = "More Detail";
                  acc = _v483;
                  const _v484: any = "Less Detail";
                  acc = _v484;
                  const _v485: any = 4;
                  acc = _v485;
                  const _v486: any = rt.global(534);
                  acc = _v486;
                  const _v487: any = rt.op("-", ...[_v485, _v486]);
                  acc = _v487;
                  const _v488: any = rt.object(987, "Gauge");
                  acc = _v488;
                  const _v489: any = await rt.send(_v488, "new", []);
                  acc = _v489;
                  const _v490: any = await rt.send(_v489, "description", [_v478]);
                  acc = _v490;
                  const _v491: any = await rt.send(_v489, "text", [_v479]);
                  acc = _v491;
                  const _v492: any = await rt.send(_v489, "minimum", [_v480]);
                  acc = _v492;
                  const _v493: any = await rt.send(_v489, "normal", [_v481]);
                  acc = _v493;
                  const _v494: any = await rt.send(_v489, "maximum", [_v482]);
                  acc = _v494;
                  const _v495: any = await rt.send(_v489, "higher", [_v483]);
                  acc = _v495;
                  const _v496: any = await rt.send(_v489, "lower", [_v484]);
                  acc = _v496;
                  const _v497: any = await rt.send(_v489, "doit", [_v487]);
                  acc = _v497;
                  const _v498: any = (temps[6] = _v497);
                  acc = _v498;
                  _v66 = _v498;
                  const _v499: any = 4;
                  acc = _v499;
                  const _v500: any = (temps[6] ?? 0);
                  acc = _v500;
                  const _v501: any = rt.op("-", ...[_v499, _v500]);
                  acc = _v501;
                  const _v502: any = rt.setGlobal(534, _v501);
                  acc = _v502;
                  _v66 = _v502;
                  break _branch70;
                }
                const _v503: any = 1025;
                acc = _v503;
                _v66 = rt.op("==", _v69, _v503);
                acc = _v66;
                if (rt.truth(_v66)) {
                  let _v504: any = acc;
                  const _v505: any = rt.global(439);
                  acc = _v505;
                  _v504 = _v505;
                  if (rt.truth(_v505)) {
                    const _v506: any = await rt.call(997, "proc997_1", [], this);
                    acc = _v506;
                    _v504 = _v506;
                    const _v507: any = 1;
                    acc = _v507;
                    const _v508: any = (args[0] ?? 0);
                    acc = _v508;
                    const _v509: any = await rt.send(_v508, "claimed", [_v507]);
                    acc = _v509;
                    _v504 = _v509;
                  }
                  acc = _v504;
                  _v66 = _v504;
                  break _branch70;
                }
                const _v510: any = 1026;
                acc = _v510;
                _v66 = rt.op("==", _v69, _v510);
                acc = _v66;
                if (rt.truth(_v66)) {
                  let _v511: any = acc;
                  const _v512: any = rt.global(439);
                  acc = _v512;
                  _v511 = _v512;
                  if (rt.truth(_v512)) {
                    const _v513: any = await rt.call(997, "proc997_2", [], this);
                    acc = _v513;
                    _v511 = _v513;
                    const _v514: any = 1;
                    acc = _v514;
                    const _v515: any = (args[0] ?? 0);
                    acc = _v515;
                    const _v516: any = await rt.send(_v515, "claimed", [_v514]);
                    acc = _v516;
                    _v511 = _v516;
                  }
                  acc = _v511;
                  _v66 = _v511;
                  break _branch70;
                }
              }
              acc = _v66;
              _v10 = _v66;
              break _branch11;
            }
            acc = _v10;
            const _v517: any = rt.local(997, 1);
            acc = _v517;
            const _v518: any = rt.setGlobal(59, _v517);
            acc = _v518;
            let _v519: any = acc;
            const _v520: any = rt.local(997, 0);
            acc = _v520;
            _v519 = _v520;
            if (rt.truth(_v520)) {
              const _v521: any = 0;
              acc = _v521;
              const _v522: any = rt.setLocal(997, 0, _v521);
              acc = _v522;
              _v519 = _v522;
              const _v523: any = (temps[5] ?? 0);
              acc = _v523;
              const _v524: any = rt.object(996, "User");
              acc = _v524;
              const _v525: any = await rt.send(_v524, "controls", [_v523]);
              acc = _v525;
              _v519 = _v525;
              const _v526: any = (temps[7] ?? 0);
              acc = _v526;
              const _v527: any = 1;
              acc = _v527;
              const _v528: any = rt.global(1);
              acc = _v528;
              const _v529: any = await rt.send(_v528, "setCursor", [_v526, _v527]);
              acc = _v529;
              _v519 = _v529;
            }
            acc = _v519;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI Menu.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        let _v1: any = acc;
        const _v2: any = rt.global(427);
        acc = _v2;
        _v1 = _v2;
        if (rt.truth(_v2)) {
          const _v3: any = 770;
          acc = _v3;
          const _v4: any = 110;
          acc = _v4;
          const _v5: any = "Turn Messages Off";
          acc = _v5;
          const _v6: any = await rt.call(997, "SetMenu", [_v3, _v4, _v5], this);
          acc = _v6;
          _v1 = _v6;
        } else {
          const _v7: any = 770;
          acc = _v7;
          const _v8: any = 110;
          acc = _v8;
          const _v9: any = "Turn Messages On";
          acc = _v9;
          const _v10: any = await rt.call(997, "SetMenu", [_v7, _v8, _v9], this);
          acc = _v10;
          _v1 = _v10;
        }
        acc = _v1;
        return acc;
      },
      // SCI Menu.sc: localproc_1
      "localproc_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = 999;
        acc = _v1;
        const _v2: any = 1;
        acc = _v2;
        const _v3: any = rt.global(1);
        acc = _v3;
        const _v4: any = await rt.send(_v3, "setCursor", [_v1, _v2]);
        acc = _v4;
        const _v5: any = 1;
        acc = _v5;
        const _v6: any = rt.object(996, "User");
        acc = _v6;
        const _v7: any = await rt.send(_v6, "controls", [_v5]);
        acc = _v7;
        const _v8: any = 1;
        acc = _v8;
        const _v9: any = rt.setLocal(997, 0, _v8);
        acc = _v9;
        return acc;
      },
      // SCI Menu.sc: proc997_1
      "proc997_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0];
        let _v1: any = acc;
        const _v2: any = 1025;
        acc = _v2;
        const _v3: any = 112;
        acc = _v3;
        const _v4: any = await rt.call(997, "GetMenu", [_v2, _v3], this);
        acc = _v4;
        _v1 = _v4;
        if (rt.truth(_v4)) {
          let _v5: any = acc;
          const _v6: any = rt.global(510);
          acc = _v6;
          _v5 = _v6;
          if (rt.truth(_v6)) {
            const _v7: any = 513;
            acc = _v7;
            const _v8: any = 112;
            acc = _v8;
            const _v9: any = await rt.call(997, "GetMenu", [_v7, _v8], this);
            acc = _v9;
            const _v10: any = (temps[0] = _v9);
            acc = _v10;
            _v5 = _v10;
            const _v11: any = rt.object(996, "User");
            acc = _v11;
            const _v12: any = await rt.send(_v11, "controls", []);
            acc = _v12;
            const _v13: any = (temps[1] = _v12);
            acc = _v13;
            _v5 = _v13;
            const _v14: any = rt.global(19);
            acc = _v14;
            const _v15: any = (temps[2] = _v14);
            acc = _v15;
            _v5 = _v15;
            const _v16: any = await rt.call(997, "localproc_1", [], this);
            acc = _v16;
            _v5 = _v16;
            const _v17: any = 0;
            acc = _v17;
            const _v18: any = rt.setLocal(997, 0, _v17);
            acc = _v18;
            _v5 = _v18;
            const _v19: any = rt.local(997, 1);
            acc = _v19;
            const _v20: any = rt.setGlobal(59, _v19);
            acc = _v20;
            _v5 = _v20;
            let _v21: any = acc;
            const _v22: any = rt.global(502);
            acc = _v22;
            const _v23: any = rt.op("not", ...[_v22]);
            acc = _v23;
            _v21 = _v23;
            if (rt.truth(_v23)) {
              const _v24: any = rt.global(303);
              acc = _v24;
              const _v25: any = await rt.send(_v24, "hide", []);
              acc = _v25;
              _v21 = _v25;
              let _v26: any = acc;
              const _v27: any = rt.global(530);
              acc = _v27;
              const _v28: any = await rt.call(997, "IsObject", [_v27], this);
              acc = _v28;
              _v26 = _v28;
              if (rt.truth(_v28)) {
                const _v29: any = rt.global(530);
                acc = _v29;
                const _v30: any = await rt.send(_v29, "hide", []);
                acc = _v30;
                _v26 = _v30;
              }
              acc = _v26;
              _v21 = _v26;
              const _v31: any = await rt.call(0, "proc0_1", [], this);
              acc = _v31;
              _v21 = _v31;
            }
            acc = _v21;
            _v5 = _v21;
            const _v32: any = rt.global(502);
            acc = _v32;
            const _v33: any = 291;
            acc = _v33;
            const _v34: any = await rt.call(0, "proc0_15", [_v32, _v33], this);
            acc = _v34;
            _v5 = _v34;
            const _v35: any = rt.global(2);
            acc = _v35;
            const _v36: any = 231;
            acc = _v36;
            const _v37: any = 0;
            acc = _v37;
            const _v38: any = await rt.call(997, "ScriptID", [_v36, _v37], this);
            acc = _v38;
            const _v39: any = await rt.send(_v38, "init", [_v35]);
            acc = _v39;
            _v5 = _v39;
            let _v40: any = acc;
            const _v41: any = rt.global(502);
            acc = _v41;
            _v40 = _v41;
            if (rt.truth(_v41)) {
              const _v42: any = rt.global(502);
              acc = _v42;
              const _v43: any = await rt.send(_v42, "draw", []);
              acc = _v43;
              _v40 = _v43;
            } else {
              const _v44: any = await rt.call(1, "proc1_8", [], this);
              acc = _v44;
              _v40 = _v44;
              const _v45: any = rt.global(303);
              acc = _v45;
              const _v46: any = await rt.send(_v45, "show", []);
              acc = _v46;
              _v40 = _v46;
              let _v47: any = acc;
              const _v48: any = rt.global(530);
              acc = _v48;
              const _v49: any = await rt.call(997, "IsObject", [_v48], this);
              acc = _v49;
              _v47 = _v49;
              if (rt.truth(_v49)) {
                const _v50: any = rt.global(530);
                acc = _v50;
                const _v51: any = await rt.send(_v50, "show", []);
                acc = _v51;
                _v47 = _v51;
              }
              acc = _v47;
              _v40 = _v47;
            }
            acc = _v40;
            _v5 = _v40;
            let _v52: any = acc;
            const _v53: any = (temps[0] ?? 0);
            acc = _v53;
            _v52 = _v53;
            if (rt.truth(_v53)) {
              const _v54: any = await rt.call(0, "proc0_8", [], this);
              acc = _v54;
              _v52 = _v54;
            }
            acc = _v52;
            _v5 = _v52;
            const _v55: any = (temps[1] ?? 0);
            acc = _v55;
            const _v56: any = rt.object(996, "User");
            acc = _v56;
            const _v57: any = await rt.send(_v56, "controls", [_v55]);
            acc = _v57;
            _v5 = _v57;
            const _v58: any = (temps[2] ?? 0);
            acc = _v58;
            const _v59: any = 1;
            acc = _v59;
            const _v60: any = rt.global(1);
            acc = _v60;
            const _v61: any = await rt.send(_v60, "setCursor", [_v58, _v59]);
            acc = _v61;
            _v5 = _v61;
          } else {
            const _v62: any = 997;
            acc = _v62;
            const _v63: any = 11;
            acc = _v63;
            const _v64: any = 25;
            acc = _v64;
            let _v65: any = acc;
            const _v66: any = rt.global(426);
            acc = _v66;
            const _v67: any = 5;
            acc = _v67;
            const _v68: any = rt.op("<", ...[_v66, _v67]);
            acc = _v68;
            _v65 = _v68;
            if (rt.truth(_v68)) {
              const _v69: any = 5;
              acc = _v69;
              _v65 = _v69;
            } else {
              const _v70: any = rt.global(426);
              acc = _v70;
              _v65 = _v70;
            }
            acc = _v65;
            const _v71: any = await rt.call(255, "Print", [_v62, _v63, _v64, _v65], this);
            acc = _v71;
            _v5 = _v71;
          }
          acc = _v5;
          _v1 = _v5;
        }
        acc = _v1;
        return acc;
      },
      // SCI Menu.sc: proc997_2
      "proc997_2": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0];
        let _v1: any = acc;
        const _v2: any = 1026;
        acc = _v2;
        const _v3: any = 112;
        acc = _v3;
        const _v4: any = await rt.call(997, "GetMenu", [_v2, _v3], this);
        acc = _v4;
        _v1 = _v4;
        if (rt.truth(_v4)) {
          let _v5: any = acc;
          const _v6: any = rt.global(509);
          acc = _v6;
          _v5 = _v6;
          if (rt.truth(_v6)) {
            const _v7: any = 513;
            acc = _v7;
            const _v8: any = 112;
            acc = _v8;
            const _v9: any = await rt.call(997, "GetMenu", [_v7, _v8], this);
            acc = _v9;
            const _v10: any = (temps[0] = _v9);
            acc = _v10;
            _v5 = _v10;
            const _v11: any = rt.object(996, "User");
            acc = _v11;
            const _v12: any = await rt.send(_v11, "controls", []);
            acc = _v12;
            const _v13: any = (temps[1] = _v12);
            acc = _v13;
            _v5 = _v13;
            const _v14: any = rt.global(19);
            acc = _v14;
            const _v15: any = (temps[2] = _v14);
            acc = _v15;
            _v5 = _v15;
            const _v16: any = await rt.call(997, "localproc_1", [], this);
            acc = _v16;
            _v5 = _v16;
            const _v17: any = 0;
            acc = _v17;
            const _v18: any = rt.setLocal(997, 0, _v17);
            acc = _v18;
            _v5 = _v18;
            const _v19: any = rt.local(997, 1);
            acc = _v19;
            const _v20: any = rt.setGlobal(59, _v19);
            acc = _v20;
            _v5 = _v20;
            let _v21: any = acc;
            const _v22: any = rt.global(502);
            acc = _v22;
            const _v23: any = rt.op("not", ...[_v22]);
            acc = _v23;
            _v21 = _v23;
            if (rt.truth(_v23)) {
              const _v24: any = rt.global(303);
              acc = _v24;
              const _v25: any = await rt.send(_v24, "hide", []);
              acc = _v25;
              _v21 = _v25;
              let _v26: any = acc;
              const _v27: any = rt.global(530);
              acc = _v27;
              const _v28: any = await rt.call(997, "IsObject", [_v27], this);
              acc = _v28;
              _v26 = _v28;
              if (rt.truth(_v28)) {
                const _v29: any = rt.global(530);
                acc = _v29;
                const _v30: any = await rt.send(_v29, "hide", []);
                acc = _v30;
                _v26 = _v30;
              }
              acc = _v26;
              _v21 = _v26;
              const _v31: any = await rt.call(0, "proc0_1", [], this);
              acc = _v31;
              _v21 = _v31;
            }
            acc = _v21;
            _v5 = _v21;
            const _v32: any = rt.global(502);
            acc = _v32;
            const _v33: any = 291;
            acc = _v33;
            const _v34: any = await rt.call(0, "proc0_15", [_v32, _v33], this);
            acc = _v34;
            _v5 = _v34;
            const _v35: any = 238;
            acc = _v35;
            const _v36: any = 0;
            acc = _v36;
            const _v37: any = await rt.call(997, "ScriptID", [_v35, _v36], this);
            acc = _v37;
            const _v38: any = await rt.send(_v37, "init", []);
            acc = _v38;
            _v5 = _v38;
            let _v39: any = acc;
            const _v40: any = rt.global(502);
            acc = _v40;
            _v39 = _v40;
            if (rt.truth(_v40)) {
              const _v41: any = rt.global(502);
              acc = _v41;
              const _v42: any = await rt.send(_v41, "draw", []);
              acc = _v42;
              _v39 = _v42;
            } else {
              const _v43: any = await rt.call(1, "proc1_8", [], this);
              acc = _v43;
              _v39 = _v43;
              const _v44: any = rt.global(303);
              acc = _v44;
              const _v45: any = await rt.send(_v44, "show", []);
              acc = _v45;
              _v39 = _v45;
              let _v46: any = acc;
              const _v47: any = rt.global(530);
              acc = _v47;
              const _v48: any = await rt.call(997, "IsObject", [_v47], this);
              acc = _v48;
              _v46 = _v48;
              if (rt.truth(_v48)) {
                const _v49: any = rt.global(530);
                acc = _v49;
                const _v50: any = await rt.send(_v49, "show", []);
                acc = _v50;
                _v46 = _v50;
              }
              acc = _v46;
              _v39 = _v46;
            }
            acc = _v39;
            _v5 = _v39;
            let _v51: any = acc;
            const _v52: any = (temps[0] ?? 0);
            acc = _v52;
            _v51 = _v52;
            if (rt.truth(_v52)) {
              const _v53: any = await rt.call(0, "proc0_8", [], this);
              acc = _v53;
              _v51 = _v53;
            }
            acc = _v51;
            _v5 = _v51;
            const _v54: any = (temps[1] ?? 0);
            acc = _v54;
            const _v55: any = rt.object(996, "User");
            acc = _v55;
            const _v56: any = await rt.send(_v55, "controls", [_v54]);
            acc = _v56;
            _v5 = _v56;
            const _v57: any = (temps[2] ?? 0);
            acc = _v57;
            const _v58: any = 1;
            acc = _v58;
            const _v59: any = rt.global(1);
            acc = _v59;
            const _v60: any = await rt.send(_v59, "setCursor", [_v57, _v58]);
            acc = _v60;
            _v5 = _v60;
          } else {
            const _v61: any = 997;
            acc = _v61;
            const _v62: any = 12;
            acc = _v62;
            const _v63: any = 25;
            acc = _v63;
            let _v64: any = acc;
            const _v65: any = rt.global(426);
            acc = _v65;
            const _v66: any = 5;
            acc = _v66;
            const _v67: any = rt.op("<", ...[_v65, _v66]);
            acc = _v67;
            _v64 = _v67;
            if (rt.truth(_v67)) {
              const _v68: any = 5;
              acc = _v68;
              _v64 = _v68;
            } else {
              const _v69: any = rt.global(426);
              acc = _v69;
              _v64 = _v69;
            }
            acc = _v64;
            const _v70: any = await rt.call(255, "Print", [_v61, _v62, _v63, _v64], this);
            acc = _v70;
            _v5 = _v70;
          }
          acc = _v5;
          _v1 = _v5;
        }
        acc = _v1;
        return acc;
      },
    },
    exports: {"1": "proc997_1", "2": "proc997_2"},
  });
}
