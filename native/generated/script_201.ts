// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/rentOffice.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: defebc9878772b62195f79f99e9cfcbe5b33deaf8956882de8359b326494f257
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(201, {
    name: "rentOffice",
    uses: [0, 104, 108, 110, 255, 891, 996, 999],
    locals: [],
    objects: [
      {
        name: "notEnoughCash",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: false,
        properties: {},
        methods: {
          // SCI rentOffice.sc: notEnoughCash.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 16;
            acc = _v1;
            const _v2: any = rt.global(413);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "init", [_v1]);
            acc = _v3;
            const _v4: any = 201;
            acc = _v4;
            const _v5: any = 23;
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
        name: "rentOffice",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: false,
        properties: {"nsBottom": 119, "nsRight": 184, "menuBarOK": 1, "standard": 0},
        methods: {
          // SCI rentOffice.sc: rentOffice.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = rt.global(518);
            acc = _v2;
            const _v3: any = rt.op("not", ...[_v2]);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = 131;
              acc = _v4;
              const _v5: any = 201;
              acc = _v5;
              const _v6: any = await rt.call(201, "Load", [_v4, _v5], this);
              acc = _v6;
              _v1 = _v6;
              const _v7: any = 3;
              acc = _v7;
              const _v8: any = await rt.call(0, "proc0_17", [_v7], this);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = rt.object(201, "dialogKeyMouse");
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
              const _v17: any = 209;
              acc = _v17;
              const _v18: any = rt.setGlobal(441, _v17);
              acc = _v18;
              _v1 = _v18;
              const _v19: any = 74;
              acc = _v19;
              const _v20: any = rt.setGlobal(442, _v19);
              acc = _v20;
              _v1 = _v20;
              const _v21: any = (args[0] ?? 0);
              acc = _v21;
              const _v22: any = rt.set(this, "client", _v21);
              acc = _v22;
              _v1 = _v22;
              const _v23: any = rt.object(201, "notEnoughCash");
              acc = _v23;
              const _v24: any = rt.setGlobal(424, _v23);
              acc = _v24;
              _v1 = _v24;
              const _v25: any = 2;
              acc = _v25;
              const _v26: any = rt.global(417);
              acc = _v26;
              const _v27: any = await rt.send(_v26, "doit", [_v25]);
              acc = _v27;
              _v1 = _v27;
              const _v28: any = 1;
              acc = _v28;
              const _v29: any = rt.setGlobal(400, _v28);
              acc = _v29;
              _v1 = _v29;
              const _v30: any = 1;
              acc = _v30;
              const _v31: any = rt.setGlobal(405, _v30);
              acc = _v31;
              _v1 = _v31;
              let _v32: any = acc;
              const _v33: any = rt.global(302);
              acc = _v33;
              const _v34: any = await rt.send(_v33, "playing", []);
              acc = _v34;
              const _v35: any = 29;
              acc = _v35;
              const _v36: any = rt.op("==", ...[_v34, _v35]);
              acc = _v36;
              _v32 = _v36;
              if (rt.truth(_v36)) {
                const _v37: any = rt.object(201, "computerScript");
                acc = _v37;
                const _v38: any = this;
                acc = _v38;
                const _v39: any = await rt.send(_v38, "setScript", [_v37]);
                acc = _v39;
                _v32 = _v39;
                const _v40: any = rt.object(201, "computerScript");
                acc = _v40;
                const _v41: any = await rt.send(_v40, "cue", []);
                acc = _v41;
                _v32 = _v41;
              }
              acc = _v32;
              _v1 = _v32;
              const _v42: any = 0;
              acc = _v42;
              const _v43: any = (temps[1] = _v42);
              acc = _v43;
              _v1 = _v43;
              let _v44: any = acc;
              const _v45: any = rt.global(302);
              acc = _v45;
              const _v46: any = await rt.send(_v45, "worksAt", []);
              acc = _v46;
              const _v47: any = 1;
              acc = _v47;
              const _v48: any = rt.op("==", ...[_v46, _v47]);
              acc = _v48;
              _v44 = _v48;
              if (rt.truth(_v48)) {
                const _v49: any = -1;
                acc = _v49;
                const _v50: any = (temps[1] = _v49);
                acc = _v50;
                _v44 = _v50;
              }
              acc = _v44;
              _v1 = _v44;
              let _v51: any = acc;
              let _v52: any = 0;
              if (!rt.truth(_v52)) {
                const _v53: any = rt.global(372);
                acc = _v53;
                const _v54: any = 4;
                acc = _v54;
                const _v55: any = rt.op("mod", ...[_v53, _v54]);
                acc = _v55;
                const _v56: any = rt.op("not", ...[_v55]);
                acc = _v56;
                _v52 = _v56;
              }
              if (!rt.truth(_v52)) {
                const _v57: any = rt.global(302);
                acc = _v57;
                const _v58: any = await rt.send(_v57, "leaveOpen", []);
                acc = _v58;
                _v52 = _v58;
              }
              acc = _v52;
              _v51 = _v52;
              if (rt.truth(_v52)) {
                const _v59: any = 1;
                acc = _v59;
                const _v60: any = (temps[1] = _v59);
                acc = _v60;
                _v51 = _v60;
              }
              acc = _v51;
              _v1 = _v51;
              let _v61: any = acc;
              const _v62: any = rt.global(302);
              acc = _v62;
              const _v63: any = await rt.send(_v62, "livesAt", []);
              acc = _v63;
              const _v64: any = 0;
              acc = _v64;
              const _v65: any = rt.op("==", ...[_v63, _v64]);
              acc = _v65;
              _v61 = _v65;
              if (rt.truth(_v65)) {
                const _v66: any = 40;
                acc = _v66;
                _v61 = _v66;
              } else {
                const _v67: any = 41;
                acc = _v67;
                _v61 = _v67;
              }
              acc = _v61;
              const _v68: any = rt.global(302);
              acc = _v68;
              const _v69: any = await rt.send(_v68, "curRent", []);
              acc = _v69;
              const _v70: any = rt.object(201, "payRent");
              acc = _v70;
              const _v71: any = await rt.send(_v70, "indexNum", [_v61]);
              acc = _v71;
              const _v72: any = await rt.send(_v70, "price", [_v69]);
              acc = _v72;
              _v1 = _v72;
              const _v73: any = rt.global(59);
              acc = _v73;
              const _v74: any = rt.object(201, "background");
              acc = _v74;
              const _v75: any = rt.object(201, "exitButton");
              acc = _v75;
              const _v76: any = this;
              acc = _v76;
              const _v77: any = await rt.send(_v76, "window", [_v73]);
              acc = _v77;
              const _v78: any = await rt.send(_v76, "add", [_v74, _v75]);
              acc = _v78;
              _v1 = _v78;
              const _v79: any = rt.object(201, "theTalker");
              acc = _v79;
              const _v80: any = rt.setGlobal(413, _v79);
              acc = _v80;
              _v1 = _v80;
              let _v81: any = acc;
              _branch82: {
                const _v83: any = (temps[1] ?? 0);
                acc = _v83;
                const _v84: any = 1;
                acc = _v84;
                const _v85: any = rt.op("==", ...[_v83, _v84]);
                acc = _v85;
                _v81 = _v85;
                acc = _v81;
                if (rt.truth(_v81)) {
                  const _v86: any = rt.object(201, "theTalker");
                  acc = _v86;
                  const _v87: any = rt.object(201, "theLongTitleLeft");
                  acc = _v87;
                  const _v88: any = rt.object(201, "payRent");
                  acc = _v88;
                  const _v89: any = rt.object(201, "moreTime");
                  acc = _v89;
                  const _v90: any = rt.object(201, "rentLowCost");
                  acc = _v90;
                  const _v91: any = rt.object(201, "rentSecurity");
                  acc = _v91;
                  const _v92: any = this;
                  acc = _v92;
                  const _v93: any = await rt.send(_v92, "add", [_v86, _v87, _v88, _v89, _v90, _v91]);
                  acc = _v93;
                  _v81 = _v93;
                  let _v94: any = acc;
                  const _v95: any = rt.global(302);
                  acc = _v95;
                  const _v96: any = await rt.send(_v95, "rentOwed", []);
                  acc = _v96;
                  _v94 = _v96;
                  if (rt.truth(_v96)) {
                    const _v97: any = rt.object(201, "payGarnishment");
                    acc = _v97;
                    const _v98: any = this;
                    acc = _v98;
                    const _v99: any = await rt.send(_v98, "add", [_v97]);
                    acc = _v99;
                    _v94 = _v99;
                    const _v100: any = rt.global(302);
                    acc = _v100;
                    const _v101: any = await rt.send(_v100, "rentOwed", []);
                    acc = _v101;
                    const _v102: any = rt.object(201, "payGarnishment");
                    acc = _v102;
                    const _v103: any = await rt.send(_v102, "price", [_v101]);
                    acc = _v103;
                    _v94 = _v103;
                  }
                  acc = _v94;
                  _v81 = _v94;
                  break _branch82;
                }
                const _v104: any = (temps[1] ?? 0);
                acc = _v104;
                const _v105: any = -1;
                acc = _v105;
                const _v106: any = rt.op("==", ...[_v104, _v105]);
                acc = _v106;
                _v81 = _v106;
                acc = _v81;
                if (rt.truth(_v81)) {
                  const _v107: any = rt.object(201, "theTalker");
                  acc = _v107;
                  const _v108: any = rt.object(201, "theShortTitle");
                  acc = _v108;
                  const _v109: any = this;
                  acc = _v109;
                  const _v110: any = await rt.send(_v109, "add", [_v107, _v108]);
                  acc = _v110;
                  _v81 = _v110;
                  break _branch82;
                }
                let _v111: any = acc;
                const _v112: any = rt.global(534);
                acc = _v112;
                const _v113: any = 2;
                acc = _v113;
                const _v114: any = rt.op(">=", ...[_v112, _v113]);
                acc = _v114;
                _v111 = _v114;
                if (rt.truth(_v114)) {
                  const _v115: any = 3;
                  acc = _v115;
                  const _v116: any = 8;
                  acc = _v116;
                  const _v117: any = 16;
                  acc = _v117;
                  const _v118: any = 1;
                  acc = _v118;
                  const _v119: any = await rt.call(201, "Palette", [_v115, _v116, _v117, _v118], this);
                  acc = _v119;
                  _v111 = _v119;
                  const _v120: any = 3;
                  acc = _v120;
                  const _v121: any = 144;
                  acc = _v121;
                  const _v122: any = 255;
                  acc = _v122;
                  const _v123: any = 1;
                  acc = _v123;
                  const _v124: any = await rt.call(201, "Palette", [_v120, _v121, _v122, _v123], this);
                  acc = _v124;
                  _v111 = _v124;
                }
                acc = _v111;
                _v81 = _v111;
                const _v125: any = 697;
                acc = _v125;
                const _v126: any = 0;
                acc = _v126;
                const _v127: any = 0;
                acc = _v127;
                const _v128: any = rt.object(201, "background");
                acc = _v128;
                const _v129: any = await rt.send(_v128, "view", [_v125]);
                acc = _v129;
                const _v130: any = await rt.send(_v128, "loop", [_v126]);
                acc = _v130;
                const _v131: any = await rt.send(_v128, "cel", [_v127]);
                acc = _v131;
                _v81 = _v131;
                break _branch82;
              }
              acc = _v81;
              _v1 = _v81;
              let _v132: any = acc;
              const _v133: any = rt.global(302);
              acc = _v133;
              const _v134: any = await rt.send(_v133, "worksAt", []);
              acc = _v134;
              const _v135: any = 1;
              acc = _v135;
              const _v136: any = rt.op("==", ...[_v134, _v135]);
              acc = _v136;
              _v132 = _v136;
              if (rt.truth(_v136)) {
                const _v137: any = rt.object(201, "theLongTitleLeft");
                acc = _v137;
                const _v138: any = rt.object(201, "theShortTitle");
                acc = _v138;
                const _v139: any = rt.object(201, "workButton");
                acc = _v139;
                const _v140: any = this;
                acc = _v140;
                const _v141: any = await rt.send(_v140, "delete", [_v137]);
                acc = _v141;
                const _v142: any = await rt.send(_v140, "add", [_v138, _v139]);
                acc = _v142;
                _v132 = _v142;
              }
              acc = _v132;
              _v1 = _v132;
              const _v143: any = 102;
              acc = _v143;
              const _v144: any = 1;
              acc = _v144;
              const _v145: any = 153;
              acc = _v145;
              const _v146: any = 69;
              acc = _v146;
              const _v147: any = 44;
              acc = _v147;
              const _v148: any = 0;
              acc = _v148;
              const _v149: any = 15;
              acc = _v149;
              const _v150: any = this;
              acc = _v150;
              const _v151: any = await rt.send(_v150, "eachElementDo", [_v143, _v144]);
              acc = _v151;
              const _v152: any = await rt.send(_v150, "eachElementDo", [_v145]);
              acc = _v152;
              const _v153: any = await rt.send(_v150, "moveTo", [_v146, _v147]);
              acc = _v153;
              const _v154: any = await rt.send(_v150, "open", [_v148, _v149]);
              acc = _v154;
              _v1 = _v154;
              const _v155: any = 35;
              acc = _v155;
              const _v156: any = rt.global(477);
              acc = _v156;
              const _v157: any = await rt.send(_v156, "playBed", [_v155]);
              acc = _v157;
              _v1 = _v157;
              let _v158: any = acc;
              const _v159: any = rt.global(302);
              acc = _v159;
              const _v160: any = await rt.send(_v159, "worksAt", []);
              acc = _v160;
              const _v161: any = 1;
              acc = _v161;
              const _v162: any = rt.op("==", ...[_v160, _v161]);
              acc = _v162;
              _v158 = _v162;
              if (rt.truth(_v162)) {
                const _v163: any = rt.object(201, "timeClock");
                acc = _v163;
                const _v164: any = this;
                acc = _v164;
                const _v165: any = await rt.send(_v164, "add", [_v163]);
                acc = _v165;
                _v158 = _v165;
                const _v166: any = rt.object(201, "timeClock");
                acc = _v166;
                const _v167: any = await rt.send(_v166, "init", []);
                acc = _v167;
                const _v168: any = await rt.send(_v166, "setSize", []);
                acc = _v168;
                const _v169: any = await rt.send(_v166, "draw", []);
                acc = _v169;
                _v158 = _v169;
              }
              acc = _v158;
              _v1 = _v158;
              const _v170: any = this;
              acc = _v170;
              const _v171: any = rt.get(this, "keyMouseList");
              acc = _v171;
              let _v172: any = acc;
              const _v173: any = (temps[1] ?? 0);
              acc = _v173;
              const _v174: any = 1;
              acc = _v174;
              const _v175: any = rt.op("==", ...[_v173, _v174]);
              acc = _v175;
              _v172 = _v175;
              if (rt.truth(_v175)) {
                const _v176: any = rt.object(201, "payRent");
                acc = _v176;
                _v172 = _v176;
              } else {
                const _v177: any = rt.object(201, "exitButton");
                acc = _v177;
                _v172 = _v177;
              }
              acc = _v172;
              const _v178: any = await rt.call(0, "proc0_9", [_v170, _v171, _v172], this);
              acc = _v178;
              _v1 = _v178;
              const _v179: any = rt.get(this, "keyMouseList");
              acc = _v179;
              const _v180: any = rt.object(891, "KeyMouse");
              acc = _v180;
              const _v181: any = await rt.send(_v180, "setList", [_v179]);
              acc = _v181;
              _v1 = _v181;
              const _v182: any = rt.global(302);
              acc = _v182;
              const _v183: any = await rt.send(_v182, "cash", []);
              acc = _v183;
              const _v184: any = 1;
              acc = _v184;
              const _v185: any = rt.op("-", ...[_v183, _v184]);
              acc = _v185;
              const _v186: any = rt.global(305);
              acc = _v186;
              const _v187: any = await rt.send(_v186, "setSize", []);
              acc = _v187;
              const _v188: any = await rt.send(_v186, "value", [_v185]);
              acc = _v188;
              const _v189: any = await rt.send(_v186, "draw", []);
              acc = _v189;
              _v1 = _v189;
              const _v190: any = 1;
              acc = _v190;
              const _v191: any = rt.object(996, "User");
              acc = _v191;
              const _v192: any = await rt.send(_v191, "canControl", [_v190]);
              acc = _v192;
              _v1 = _v192;
              let _v193: any = acc;
              let _v194: any = 1;
              if (rt.truth(_v194)) {
                let _v195: any = 0;
                if (!rt.truth(_v195)) {
                  const _v196: any = (temps[1] ?? 0);
                  acc = _v196;
                  const _v197: any = 1;
                  acc = _v197;
                  const _v198: any = rt.op("==", ...[_v196, _v197]);
                  acc = _v198;
                  _v195 = _v198;
                }
                if (!rt.truth(_v195)) {
                  const _v199: any = (temps[1] ?? 0);
                  acc = _v199;
                  const _v200: any = -1;
                  acc = _v200;
                  const _v201: any = rt.op("==", ...[_v199, _v200]);
                  acc = _v201;
                  _v195 = _v201;
                }
                acc = _v195;
                _v194 = _v195;
              }
              if (rt.truth(_v194)) {
                const _v202: any = await rt.call(0, "proc0_14", [], this);
                acc = _v202;
                _v194 = _v202;
              }
              acc = _v194;
              _v193 = _v194;
              if (rt.truth(_v194)) {
                const _v203: any = rt.global(413);
                acc = _v203;
                const _v204: any = await rt.send(_v203, "init", []);
                acc = _v204;
                _v193 = _v204;
                const _v205: any = 201;
                acc = _v205;
                const _v206: any = 0;
                acc = _v206;
                const _v207: any = 7;
                acc = _v207;
                const _v208: any = await rt.call(201, "Random", [_v206, _v207], this);
                acc = _v208;
                const _v209: any = 310;
                acc = _v209;
                const _v210: any = rt.global(413);
                acc = _v210;
                const _v211: any = rt.global(440);
                acc = _v211;
                const _v212: any = rt.global(441);
                acc = _v212;
                const _v213: any = rt.global(442);
                acc = _v213;
                const _v214: any = 70;
                acc = _v214;
                const _v215: any = 100;
                acc = _v215;
                const _v216: any = 25;
                acc = _v216;
                const _v217: any = rt.global(426);
                acc = _v217;
                const _v218: any = await rt.call(255, "Print", [_v205, _v208, _v209, _v210, _v211, _v212, _v213, _v214, _v215, _v216, _v217], this);
                acc = _v218;
                _v193 = _v218;
              }
              acc = _v193;
              _v1 = _v193;
            } else {
              const _v219: any = rt.get(this, "theItem");
              acc = _v219;
              const _v220: any = rt.object(891, "KeyMouse");
              acc = _v220;
              const _v221: any = await rt.send(_v220, "setCursor", [_v219]);
              acc = _v221;
              _v1 = _v221;
            }
            acc = _v1;
            const _v222: any = 0;
            acc = _v222;
            const _v223: any = rt.setGlobal(518, _v222);
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
            const _v231: any = await rt.call(201, "IsObject", [_v230], this);
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
            const _v247: any = rt.get(this, "keyMouseList");
            acc = _v247;
            const _v248: any = await rt.send(_v247, "release", []);
            acc = _v248;
            const _v249: any = rt.get(this, "keyMouseList");
            acc = _v249;
            const _v250: any = await rt.send(_v249, "dispose", []);
            acc = _v250;
            const _v251: any = rt.get(this, "prevDialog");
            acc = _v251;
            const _v252: any = rt.setGlobal(502, _v251);
            acc = _v252;
            const _v253: any = rt.global(477);
            acc = _v253;
            const _v254: any = await rt.send(_v253, "fade", []);
            acc = _v254;
            const _v255: any = this;
            acc = _v255;
            const _v256: any = 291;
            acc = _v256;
            const _v257: any = await rt.call(0, "proc0_15", [_v255, _v256], this);
            acc = _v257;
            const _v258: any = this;
            acc = _v258;
            const _v259: any = await rt.send(_v258, "dispose", []);
            acc = _v259;
            let _v260: any = acc;
            const _v261: any = rt.object(201, "payGarnishment");
            acc = _v261;
            const _v262: any = await rt.call(201, "IsObject", [_v261], this);
            acc = _v262;
            _v260 = _v262;
            if (rt.truth(_v262)) {
              const _v263: any = rt.object(201, "payGarnishment");
              acc = _v263;
              const _v264: any = await rt.send(_v263, "dispose", []);
              acc = _v264;
              _v260 = _v264;
            }
            acc = _v260;
            const _v265: any = rt.object(201, "workButton");
            acc = _v265;
            const _v266: any = await rt.send(_v265, "dispose", []);
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
            const _v281: any = await rt.call(201, "Graph", [_v267, _v270, _v271, _v274, _v277, _v278, _v279, _v280], this);
            acc = _v281;
            const _v282: any = 0;
            acc = _v282;
            const _v283: any = await rt.call(0, "proc0_17", [_v282], this);
            acc = _v283;
            const _v284: any = (temps[0] ?? 0);
            acc = _v284;
            const _acc285: any = acc;
            const _v286: any = 201;
            acc = _v286;
            const _args287: any[] = [_v286];
            await rt.call(201, "DisposeScript", _args287, this);
            const _v288: any = _args287.length === 2 ? _args287[1] : _acc285;
            acc = _v288;
            return acc;
          },
          // SCI rentOffice.sc: rentOffice.draw
          "draw": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 201, "name": "rentOffice"}, "draw", []);
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
        properties: {"view": 701, "loop": 1, "priority": 13},
        methods: {
        },
      },
      {
        name: "payRent",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"state": 65, "nsTop": 60, "nsLeft": 20, "key": 1, "text": "Pay rent for 1 month.  ", "price": 325, "indexNum": 40, "typeOfGoods": 1, "units": 4, "fixedPrice": 1},
        methods: {
          // SCI rentOffice.sc: payRent.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 16;
            acc = _v1;
            const _v2: any = rt.global(413);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "init", [_v1]);
            acc = _v3;
            let _v4: any = acc;
            const _v5: any = rt.global(302);
            acc = _v5;
            const _v6: any = await rt.call(0, "proc0_11", [_v5], this);
            acc = _v6;
            const _v7: any = rt.get(this, "price");
            acc = _v7;
            const _v8: any = rt.op(">=", ...[_v6, _v7]);
            acc = _v8;
            _v4 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = rt.get(this, "indexNum");
              acc = _v9;
              const _v10: any = 4;
              acc = _v10;
              const _v11: any = rt.global(372);
              acc = _v11;
              const _v12: any = 4;
              acc = _v12;
              const _v13: any = rt.op("mod", ...[_v11, _v12]);
              acc = _v13;
              const _v14: any = rt.op("-", ...[_v10, _v13]);
              acc = _v14;
              const _v15: any = rt.global(302);
              acc = _v15;
              const _v16: any = await rt.send(_v15, "consumables", []);
              acc = _v16;
              const _v17: any = await rt.send(_v16, "recieve", [_v9, _v14]);
              acc = _v17;
              _v4 = _v17;
              const _v18: any = rt.get(this, "theSign");
              acc = _v18;
              const _v19: any = rt.get(this, "price");
              acc = _v19;
              const _v20: any = rt.op("*", ...[_v18, _v19]);
              acc = _v20;
              const _v21: any = await rt.call(0, "proc0_10", [_v20], this);
              acc = _v21;
              _v4 = _v21;
              const _v22: any = 23;
              acc = _v22;
              const _v23: any = rt.global(476);
              acc = _v23;
              const _v24: any = await rt.send(_v23, "play", [_v22]);
              acc = _v24;
              _v4 = _v24;
              const _v25: any = rt.global(305);
              acc = _v25;
              const _v26: any = await rt.send(_v25, "doit", []);
              acc = _v26;
              _v4 = _v26;
              let _v27: any = acc;
              const _v28: any = rt.global(427);
              acc = _v28;
              _v27 = _v28;
              if (rt.truth(_v28)) {
                const _v29: any = 201;
                acc = _v29;
                const _v30: any = 18;
                acc = _v30;
                const _v31: any = 22;
                acc = _v31;
                const _v32: any = await rt.call(201, "Random", [_v30, _v31], this);
                acc = _v32;
                const _v33: any = 310;
                acc = _v33;
                const _v34: any = rt.global(413);
                acc = _v34;
                const _v35: any = rt.global(440);
                acc = _v35;
                const _v36: any = rt.global(441);
                acc = _v36;
                const _v37: any = rt.global(442);
                acc = _v37;
                const _v38: any = 70;
                acc = _v38;
                const _v39: any = 70;
                acc = _v39;
                const _v40: any = 25;
                acc = _v40;
                const _v41: any = rt.global(426);
                acc = _v41;
                const _v42: any = await rt.call(255, "Print", [_v29, _v32, _v33, _v34, _v35, _v36, _v37, _v38, _v39, _v40, _v41], this);
                acc = _v42;
                _v27 = _v42;
              }
              acc = _v27;
              _v4 = _v27;
            } else {
              const _v43: any = 23;
              acc = _v43;
              const _v44: any = rt.global(476);
              acc = _v44;
              const _v45: any = await rt.send(_v44, "play", [_v43]);
              acc = _v45;
              _v4 = _v45;
              const _v46: any = 201;
              acc = _v46;
              const _v47: any = 23;
              acc = _v47;
              const _v48: any = 310;
              acc = _v48;
              const _v49: any = rt.global(413);
              acc = _v49;
              const _v50: any = rt.global(440);
              acc = _v50;
              const _v51: any = rt.global(441);
              acc = _v51;
              const _v52: any = rt.global(442);
              acc = _v52;
              const _v53: any = 70;
              acc = _v53;
              const _v54: any = 70;
              acc = _v54;
              const _v55: any = 25;
              acc = _v55;
              const _v56: any = rt.global(426);
              acc = _v56;
              const _v57: any = await rt.call(255, "Print", [_v46, _v47, _v48, _v49, _v50, _v51, _v52, _v53, _v54, _v55, _v56], this);
              acc = _v57;
              _v4 = _v57;
            }
            acc = _v4;
            const _v58: any = rt.get(this, "visitTime");
            acc = _v58;
            const _v59: any = rt.global(417);
            acc = _v59;
            const _v60: any = await rt.send(_v59, "doit", [_v58]);
            acc = _v60;
            const _v61: any = 0;
            acc = _v61;
            return _v61;
            return acc;
          },
        },
      },
      {
        name: "moreTime",
        className: "WButton",
        parent: {"script": 104, "name": "WButton"},
        isClass: false,
        properties: {"nsTop": 70, "nsLeft": 20, "key": 2, "text": "Ask For More Time.       "},
        methods: {
          // SCI rentOffice.sc: moreTime.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = rt.global(302);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "livesAt", []);
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = rt.op("==", ...[_v3, _v4]);
            acc = _v5;
            _v1 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 40;
              acc = _v6;
              _v1 = _v6;
            } else {
              const _v7: any = 41;
              acc = _v7;
              _v1 = _v7;
            }
            acc = _v1;
            const _v8: any = (temps[1] = _v1);
            acc = _v8;
            let _v9: any = acc;
            const _v10: any = (temps[1] ?? 0);
            acc = _v10;
            const _v11: any = rt.global(302);
            acc = _v11;
            const _v12: any = await rt.send(_v11, "consumables", []);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "objectAtIndexQuan", [_v10]);
            acc = _v13;
            const _v14: any = rt.op("not", ...[_v13]);
            acc = _v14;
            _v9 = _v14;
            if (rt.truth(_v14)) {
              let _v15: any = acc;
              const _v16: any = rt.global(302);
              acc = _v16;
              const _v17: any = await rt.send(_v16, "triedExt", []);
              acc = _v17;
              const _v18: any = rt.op("not", ...[_v17]);
              acc = _v18;
              _v15 = _v18;
              if (rt.truth(_v18)) {
                let _v19: any = acc;
                const _v20: any = rt.global(302);
                acc = _v20;
                const _v21: any = await rt.send(_v20, "rentExt", []);
                acc = _v21;
                _branch22: {
                  const _v23: any = -1;
                  acc = _v23;
                  _v19 = rt.op("==", _v21, _v23);
                  acc = _v19;
                  if (rt.truth(_v19)) {
                    const _v24: any = 0;
                    acc = _v24;
                    _v19 = _v24;
                    break _branch22;
                  }
                  const _v25: any = 0;
                  acc = _v25;
                  _v19 = rt.op("==", _v21, _v25);
                  acc = _v19;
                  if (rt.truth(_v19)) {
                    const _v26: any = 1;
                    acc = _v26;
                    _v19 = _v26;
                    break _branch22;
                  }
                  const _v27: any = 1;
                  acc = _v27;
                  _v19 = rt.op("==", _v21, _v27);
                  acc = _v19;
                  if (rt.truth(_v19)) {
                    const _v28: any = 1;
                    acc = _v28;
                    const _v29: any = 12;
                    acc = _v29;
                    const _v30: any = await rt.call(201, "Random", [_v28, _v29], this);
                    acc = _v30;
                    const _v31: any = 3;
                    acc = _v31;
                    const _v32: any = rt.op(">", ...[_v30, _v31]);
                    acc = _v32;
                    _v19 = _v32;
                    break _branch22;
                  }
                  const _v33: any = 2;
                  acc = _v33;
                  _v19 = rt.op("==", _v21, _v33);
                  acc = _v19;
                  if (rt.truth(_v19)) {
                    const _v34: any = 1;
                    acc = _v34;
                    const _v35: any = 12;
                    acc = _v35;
                    const _v36: any = await rt.call(201, "Random", [_v34, _v35], this);
                    acc = _v36;
                    const _v37: any = 6;
                    acc = _v37;
                    const _v38: any = rt.op(">", ...[_v36, _v37]);
                    acc = _v38;
                    _v19 = _v38;
                    break _branch22;
                  }
                  const _v39: any = 1;
                  acc = _v39;
                  const _v40: any = 12;
                  acc = _v40;
                  const _v41: any = await rt.call(201, "Random", [_v39, _v40], this);
                  acc = _v41;
                  const _v42: any = 9;
                  acc = _v42;
                  const _v43: any = rt.op(">", ...[_v41, _v42]);
                  acc = _v43;
                  _v19 = _v43;
                  break _branch22;
                }
                acc = _v19;
                const _v44: any = (temps[0] = _v19);
                acc = _v44;
                _v15 = _v44;
                let _v45: any = acc;
                let _v46: any = 1;
                if (rt.truth(_v46)) {
                  const _v47: any = rt.global(302);
                  acc = _v47;
                  const _v48: any = await rt.send(_v47, "triedExt", []);
                  acc = _v48;
                  const _v49: any = rt.op("not", ...[_v48]);
                  acc = _v49;
                  _v46 = _v49;
                }
                if (rt.truth(_v46)) {
                  const _v50: any = (temps[0] ?? 0);
                  acc = _v50;
                  _v46 = _v50;
                }
                acc = _v46;
                _v45 = _v46;
                if (rt.truth(_v46)) {
                  const _v51: any = rt.global(302);
                  acc = _v51;
                  const _v52: any = await rt.send(_v51, "rentExt", []);
                  acc = _v52;
                  const _v53: any = 1;
                  acc = _v53;
                  const _v54: any = rt.op("+", ...[_v52, _v53]);
                  acc = _v54;
                  const _v55: any = rt.global(302);
                  acc = _v55;
                  const _v56: any = await rt.send(_v55, "rentExt", [_v54]);
                  acc = _v56;
                  _v45 = _v56;
                  const _v57: any = 1;
                  acc = _v57;
                  const _v58: any = await rt.call(0, "proc0_13", [_v57], this);
                  acc = _v58;
                  _v45 = _v58;
                  const _v59: any = 23;
                  acc = _v59;
                  const _v60: any = rt.global(476);
                  acc = _v60;
                  const _v61: any = await rt.send(_v60, "play", [_v59]);
                  acc = _v61;
                  _v45 = _v61;
                  const _v62: any = 1;
                  acc = _v62;
                  const _v63: any = rt.global(477);
                  acc = _v63;
                  const _v64: any = await rt.send(_v63, "pause", [_v62]);
                  acc = _v64;
                  _v45 = _v64;
                  const _v65: any = 45;
                  acc = _v65;
                  const _v66: any = rt.global(477);
                  acc = _v66;
                  const _v67: any = rt.global(476);
                  acc = _v67;
                  const _v68: any = await rt.send(_v67, "play", [_v65, _v66]);
                  acc = _v68;
                  _v45 = _v68;
                  const _v69: any = 16;
                  acc = _v69;
                  const _v70: any = rt.global(413);
                  acc = _v70;
                  const _v71: any = await rt.send(_v70, "init", [_v69]);
                  acc = _v71;
                  _v45 = _v71;
                  const _v72: any = 201;
                  acc = _v72;
                  const _v73: any = 24;
                  acc = _v73;
                  const _v74: any = 310;
                  acc = _v74;
                  const _v75: any = rt.global(413);
                  acc = _v75;
                  const _v76: any = rt.global(440);
                  acc = _v76;
                  const _v77: any = rt.global(441);
                  acc = _v77;
                  const _v78: any = rt.global(442);
                  acc = _v78;
                  const _v79: any = 70;
                  acc = _v79;
                  const _v80: any = 70;
                  acc = _v80;
                  const _v81: any = 25;
                  acc = _v81;
                  const _v82: any = rt.global(426);
                  acc = _v82;
                  const _v83: any = await rt.call(255, "Print", [_v72, _v73, _v74, _v75, _v76, _v77, _v78, _v79, _v80, _v81, _v82], this);
                  acc = _v83;
                  _v45 = _v83;
                  const _v84: any = 1;
                  acc = _v84;
                  const _v85: any = rt.global(302);
                  acc = _v85;
                  const _v86: any = await rt.send(_v85, "triedExt", [_v84]);
                  acc = _v86;
                  _v45 = _v86;
                } else {
                  const _v87: any = -1;
                  acc = _v87;
                  const _v88: any = await rt.call(0, "proc0_13", [_v87], this);
                  acc = _v88;
                  _v45 = _v88;
                  const _v89: any = 23;
                  acc = _v89;
                  const _v90: any = rt.global(476);
                  acc = _v90;
                  const _v91: any = await rt.send(_v90, "play", [_v89]);
                  acc = _v91;
                  _v45 = _v91;
                  const _v92: any = 1;
                  acc = _v92;
                  const _v93: any = rt.global(477);
                  acc = _v93;
                  const _v94: any = await rt.send(_v93, "pause", [_v92]);
                  acc = _v94;
                  _v45 = _v94;
                  const _v95: any = 44;
                  acc = _v95;
                  const _v96: any = rt.global(477);
                  acc = _v96;
                  const _v97: any = rt.global(476);
                  acc = _v97;
                  const _v98: any = await rt.send(_v97, "play", [_v95, _v96]);
                  acc = _v98;
                  _v45 = _v98;
                  const _v99: any = 16;
                  acc = _v99;
                  const _v100: any = rt.global(413);
                  acc = _v100;
                  const _v101: any = await rt.send(_v100, "init", [_v99]);
                  acc = _v101;
                  _v45 = _v101;
                  const _v102: any = 201;
                  acc = _v102;
                  const _v103: any = 25;
                  acc = _v103;
                  const _v104: any = 310;
                  acc = _v104;
                  const _v105: any = rt.global(413);
                  acc = _v105;
                  const _v106: any = rt.global(440);
                  acc = _v106;
                  const _v107: any = rt.global(441);
                  acc = _v107;
                  const _v108: any = rt.global(442);
                  acc = _v108;
                  const _v109: any = 70;
                  acc = _v109;
                  const _v110: any = 70;
                  acc = _v110;
                  const _v111: any = 25;
                  acc = _v111;
                  const _v112: any = rt.global(426);
                  acc = _v112;
                  const _v113: any = await rt.call(255, "Print", [_v102, _v103, _v104, _v105, _v106, _v107, _v108, _v109, _v110, _v111, _v112], this);
                  acc = _v113;
                  _v45 = _v113;
                  const _v114: any = 2;
                  acc = _v114;
                  const _v115: any = rt.global(302);
                  acc = _v115;
                  const _v116: any = await rt.send(_v115, "triedExt", [_v114]);
                  acc = _v116;
                  _v45 = _v116;
                }
                acc = _v45;
                _v15 = _v45;
              } else {
                let _v117: any = acc;
                const _v118: any = rt.global(302);
                acc = _v118;
                const _v119: any = await rt.send(_v118, "triedExt", []);
                acc = _v119;
                _branch120: {
                  const _v121: any = 1;
                  acc = _v121;
                  _v117 = rt.op("==", _v119, _v121);
                  acc = _v117;
                  if (rt.truth(_v117)) {
                    const _v122: any = 23;
                    acc = _v122;
                    const _v123: any = rt.global(476);
                    acc = _v123;
                    const _v124: any = await rt.send(_v123, "play", [_v122]);
                    acc = _v124;
                    _v117 = _v124;
                    const _v125: any = 16;
                    acc = _v125;
                    const _v126: any = rt.global(413);
                    acc = _v126;
                    const _v127: any = await rt.send(_v126, "init", [_v125]);
                    acc = _v127;
                    _v117 = _v127;
                    const _v128: any = 201;
                    acc = _v128;
                    const _v129: any = 26;
                    acc = _v129;
                    const _v130: any = 310;
                    acc = _v130;
                    const _v131: any = rt.global(413);
                    acc = _v131;
                    const _v132: any = rt.global(440);
                    acc = _v132;
                    const _v133: any = rt.global(441);
                    acc = _v133;
                    const _v134: any = rt.global(442);
                    acc = _v134;
                    const _v135: any = 70;
                    acc = _v135;
                    const _v136: any = 70;
                    acc = _v136;
                    const _v137: any = 25;
                    acc = _v137;
                    const _v138: any = rt.global(426);
                    acc = _v138;
                    const _v139: any = await rt.call(255, "Print", [_v128, _v129, _v130, _v131, _v132, _v133, _v134, _v135, _v136, _v137, _v138], this);
                    acc = _v139;
                    _v117 = _v139;
                    break _branch120;
                  }
                  const _v140: any = 2;
                  acc = _v140;
                  _v117 = rt.op("==", _v119, _v140);
                  acc = _v117;
                  if (rt.truth(_v117)) {
                    const _v141: any = 23;
                    acc = _v141;
                    const _v142: any = rt.global(476);
                    acc = _v142;
                    const _v143: any = await rt.send(_v142, "play", [_v141]);
                    acc = _v143;
                    _v117 = _v143;
                    const _v144: any = 16;
                    acc = _v144;
                    const _v145: any = rt.global(413);
                    acc = _v145;
                    const _v146: any = await rt.send(_v145, "init", [_v144]);
                    acc = _v146;
                    _v117 = _v146;
                    const _v147: any = 201;
                    acc = _v147;
                    const _v148: any = 27;
                    acc = _v148;
                    const _v149: any = 310;
                    acc = _v149;
                    const _v150: any = rt.global(413);
                    acc = _v150;
                    const _v151: any = rt.global(440);
                    acc = _v151;
                    const _v152: any = rt.global(441);
                    acc = _v152;
                    const _v153: any = rt.global(442);
                    acc = _v153;
                    const _v154: any = 70;
                    acc = _v154;
                    const _v155: any = 70;
                    acc = _v155;
                    const _v156: any = 25;
                    acc = _v156;
                    const _v157: any = rt.global(426);
                    acc = _v157;
                    const _v158: any = await rt.call(255, "Print", [_v147, _v148, _v149, _v150, _v151, _v152, _v153, _v154, _v155, _v156, _v157], this);
                    acc = _v158;
                    _v117 = _v158;
                    const _v159: any = 1;
                    acc = _v159;
                    const _v160: any = rt.global(477);
                    acc = _v160;
                    const _v161: any = await rt.send(_v160, "pause", [_v159]);
                    acc = _v161;
                    _v117 = _v161;
                    const _v162: any = 44;
                    acc = _v162;
                    const _v163: any = rt.global(477);
                    acc = _v163;
                    const _v164: any = rt.global(476);
                    acc = _v164;
                    const _v165: any = await rt.send(_v164, "play", [_v162, _v163]);
                    acc = _v165;
                    _v117 = _v165;
                    const _v166: any = rt.global(302);
                    acc = _v166;
                    const _v167: any = await rt.send(_v166, "triedExt", []);
                    acc = _v167;
                    const _v168: any = 1;
                    acc = _v168;
                    const _v169: any = rt.op("+", ...[_v167, _v168]);
                    acc = _v169;
                    const _v170: any = rt.global(302);
                    acc = _v170;
                    const _v171: any = await rt.send(_v170, "triedExt", [_v169]);
                    acc = _v171;
                    _v117 = _v171;
                    break _branch120;
                  }
                  const _v172: any = 3;
                  acc = _v172;
                  _v117 = rt.op("==", _v119, _v172);
                  acc = _v117;
                  if (rt.truth(_v117)) {
                    const _v173: any = 23;
                    acc = _v173;
                    const _v174: any = rt.global(476);
                    acc = _v174;
                    const _v175: any = await rt.send(_v174, "play", [_v173]);
                    acc = _v175;
                    _v117 = _v175;
                    const _v176: any = 16;
                    acc = _v176;
                    const _v177: any = rt.global(413);
                    acc = _v177;
                    const _v178: any = await rt.send(_v177, "init", [_v176]);
                    acc = _v178;
                    _v117 = _v178;
                    const _v179: any = 201;
                    acc = _v179;
                    const _v180: any = 28;
                    acc = _v180;
                    const _v181: any = 310;
                    acc = _v181;
                    const _v182: any = rt.global(413);
                    acc = _v182;
                    const _v183: any = rt.global(440);
                    acc = _v183;
                    const _v184: any = rt.global(441);
                    acc = _v184;
                    const _v185: any = rt.global(442);
                    acc = _v185;
                    const _v186: any = 70;
                    acc = _v186;
                    const _v187: any = 70;
                    acc = _v187;
                    const _v188: any = 25;
                    acc = _v188;
                    const _v189: any = rt.global(426);
                    acc = _v189;
                    const _v190: any = await rt.call(255, "Print", [_v179, _v180, _v181, _v182, _v183, _v184, _v185, _v186, _v187, _v188, _v189], this);
                    acc = _v190;
                    _v117 = _v190;
                    const _v191: any = 1;
                    acc = _v191;
                    const _v192: any = rt.global(477);
                    acc = _v192;
                    const _v193: any = await rt.send(_v192, "pause", [_v191]);
                    acc = _v193;
                    _v117 = _v193;
                    const _v194: any = 44;
                    acc = _v194;
                    const _v195: any = rt.global(477);
                    acc = _v195;
                    const _v196: any = rt.global(476);
                    acc = _v196;
                    const _v197: any = await rt.send(_v196, "play", [_v194, _v195]);
                    acc = _v197;
                    _v117 = _v197;
                    const _v198: any = rt.global(302);
                    acc = _v198;
                    const _v199: any = await rt.send(_v198, "triedExt", []);
                    acc = _v199;
                    const _v200: any = 1;
                    acc = _v200;
                    const _v201: any = rt.op("+", ...[_v199, _v200]);
                    acc = _v201;
                    const _v202: any = rt.global(302);
                    acc = _v202;
                    const _v203: any = await rt.send(_v202, "triedExt", [_v201]);
                    acc = _v203;
                    _v117 = _v203;
                    break _branch120;
                  }
                  const _v204: any = 4;
                  acc = _v204;
                  _v117 = rt.op("==", _v119, _v204);
                  acc = _v117;
                  if (rt.truth(_v117)) {
                    const _v205: any = 23;
                    acc = _v205;
                    const _v206: any = rt.global(476);
                    acc = _v206;
                    const _v207: any = await rt.send(_v206, "play", [_v205]);
                    acc = _v207;
                    _v117 = _v207;
                    const _v208: any = 16;
                    acc = _v208;
                    const _v209: any = rt.global(413);
                    acc = _v209;
                    const _v210: any = await rt.send(_v209, "init", [_v208]);
                    acc = _v210;
                    _v117 = _v210;
                    const _v211: any = 201;
                    acc = _v211;
                    const _v212: any = 29;
                    acc = _v212;
                    const _v213: any = 310;
                    acc = _v213;
                    const _v214: any = rt.global(413);
                    acc = _v214;
                    const _v215: any = rt.global(440);
                    acc = _v215;
                    const _v216: any = rt.global(441);
                    acc = _v216;
                    const _v217: any = rt.global(442);
                    acc = _v217;
                    const _v218: any = 70;
                    acc = _v218;
                    const _v219: any = 90;
                    acc = _v219;
                    const _v220: any = 25;
                    acc = _v220;
                    const _v221: any = rt.global(426);
                    acc = _v221;
                    const _v222: any = await rt.call(255, "Print", [_v211, _v212, _v213, _v214, _v215, _v216, _v217, _v218, _v219, _v220, _v221], this);
                    acc = _v222;
                    _v117 = _v222;
                    const _v223: any = 1;
                    acc = _v223;
                    const _v224: any = rt.global(477);
                    acc = _v224;
                    const _v225: any = await rt.send(_v224, "pause", [_v223]);
                    acc = _v225;
                    _v117 = _v225;
                    const _v226: any = 44;
                    acc = _v226;
                    const _v227: any = rt.global(477);
                    acc = _v227;
                    const _v228: any = rt.global(476);
                    acc = _v228;
                    const _v229: any = await rt.send(_v228, "play", [_v226, _v227]);
                    acc = _v229;
                    _v117 = _v229;
                    const _v230: any = rt.global(302);
                    acc = _v230;
                    const _v231: any = await rt.send(_v230, "triedExt", []);
                    acc = _v231;
                    const _v232: any = 1;
                    acc = _v232;
                    const _v233: any = rt.op("+", ...[_v231, _v232]);
                    acc = _v233;
                    const _v234: any = rt.global(302);
                    acc = _v234;
                    const _v235: any = await rt.send(_v234, "triedExt", [_v233]);
                    acc = _v235;
                    _v117 = _v235;
                    break _branch120;
                  }
                  const _v236: any = 5;
                  acc = _v236;
                  _v117 = rt.op("==", _v119, _v236);
                  acc = _v117;
                  if (rt.truth(_v117)) {
                    const _v237: any = 23;
                    acc = _v237;
                    const _v238: any = rt.global(476);
                    acc = _v238;
                    const _v239: any = await rt.send(_v238, "play", [_v237]);
                    acc = _v239;
                    _v117 = _v239;
                    const _v240: any = 16;
                    acc = _v240;
                    const _v241: any = rt.global(413);
                    acc = _v241;
                    const _v242: any = await rt.send(_v241, "init", [_v240]);
                    acc = _v242;
                    _v117 = _v242;
                    const _v243: any = 201;
                    acc = _v243;
                    const _v244: any = 30;
                    acc = _v244;
                    const _v245: any = 310;
                    acc = _v245;
                    const _v246: any = rt.global(413);
                    acc = _v246;
                    const _v247: any = rt.global(440);
                    acc = _v247;
                    const _v248: any = rt.global(441);
                    acc = _v248;
                    const _v249: any = rt.global(442);
                    acc = _v249;
                    const _v250: any = 70;
                    acc = _v250;
                    const _v251: any = 90;
                    acc = _v251;
                    const _v252: any = 25;
                    acc = _v252;
                    const _v253: any = rt.global(426);
                    acc = _v253;
                    const _v254: any = await rt.call(255, "Print", [_v243, _v244, _v245, _v246, _v247, _v248, _v249, _v250, _v251, _v252, _v253], this);
                    acc = _v254;
                    _v117 = _v254;
                    const _v255: any = 1;
                    acc = _v255;
                    const _v256: any = rt.global(477);
                    acc = _v256;
                    const _v257: any = await rt.send(_v256, "pause", [_v255]);
                    acc = _v257;
                    _v117 = _v257;
                    const _v258: any = 44;
                    acc = _v258;
                    const _v259: any = rt.global(477);
                    acc = _v259;
                    const _v260: any = rt.global(476);
                    acc = _v260;
                    const _v261: any = await rt.send(_v260, "play", [_v258, _v259]);
                    acc = _v261;
                    _v117 = _v261;
                    const _v262: any = rt.global(302);
                    acc = _v262;
                    const _v263: any = await rt.send(_v262, "triedExt", []);
                    acc = _v263;
                    const _v264: any = 1;
                    acc = _v264;
                    const _v265: any = rt.op("+", ...[_v263, _v264]);
                    acc = _v265;
                    const _v266: any = rt.global(302);
                    acc = _v266;
                    const _v267: any = await rt.send(_v266, "triedExt", [_v265]);
                    acc = _v267;
                    _v117 = _v267;
                    break _branch120;
                  }
                }
                acc = _v117;
                _v15 = _v117;
              }
              acc = _v15;
              _v9 = _v15;
            } else {
              const _v268: any = 23;
              acc = _v268;
              const _v269: any = rt.global(476);
              acc = _v269;
              const _v270: any = await rt.send(_v269, "play", [_v268]);
              acc = _v270;
              _v9 = _v270;
              const _v271: any = 16;
              acc = _v271;
              const _v272: any = rt.global(413);
              acc = _v272;
              const _v273: any = await rt.send(_v272, "init", [_v271]);
              acc = _v273;
              _v9 = _v273;
              const _v274: any = 201;
              acc = _v274;
              const _v275: any = 31;
              acc = _v275;
              const _v276: any = 310;
              acc = _v276;
              const _v277: any = rt.global(413);
              acc = _v277;
              const _v278: any = rt.global(440);
              acc = _v278;
              const _v279: any = rt.global(441);
              acc = _v279;
              const _v280: any = rt.global(442);
              acc = _v280;
              const _v281: any = 70;
              acc = _v281;
              const _v282: any = 70;
              acc = _v282;
              const _v283: any = 25;
              acc = _v283;
              const _v284: any = rt.global(426);
              acc = _v284;
              const _v285: any = await rt.call(255, "Print", [_v274, _v275, _v276, _v277, _v278, _v279, _v280, _v281, _v282, _v283, _v284], this);
              acc = _v285;
              _v9 = _v285;
            }
            acc = _v9;
            const _v286: any = 0;
            acc = _v286;
            return _v286;
            return acc;
          },
        },
      },
      {
        name: "rentLowCost",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 80, "nsLeft": 20, "key": 3, "text": "Rent Low-Cost Apartment  ", "indexNum": 40, "typeOfGoods": 1, "units": 4, "basePrice": 325},
        methods: {
          // SCI rentOffice.sc: rentLowCost.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = rt.global(302);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "livesAt", []);
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = rt.op("==", ...[_v3, _v4]);
            acc = _v5;
            _v1 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 23;
              acc = _v6;
              const _v7: any = rt.global(476);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "play", [_v6]);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = 16;
              acc = _v9;
              const _v10: any = rt.global(413);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "init", [_v9]);
              acc = _v11;
              _v1 = _v11;
              const _v12: any = 201;
              acc = _v12;
              const _v13: any = 32;
              acc = _v13;
              const _v14: any = 310;
              acc = _v14;
              const _v15: any = rt.global(413);
              acc = _v15;
              const _v16: any = rt.global(440);
              acc = _v16;
              const _v17: any = rt.global(441);
              acc = _v17;
              const _v18: any = rt.global(442);
              acc = _v18;
              const _v19: any = 70;
              acc = _v19;
              const _v20: any = 70;
              acc = _v20;
              const _v21: any = 25;
              acc = _v21;
              const _v22: any = rt.global(426);
              acc = _v22;
              const _v23: any = await rt.call(255, "Print", [_v12, _v13, _v14, _v15, _v16, _v17, _v18, _v19, _v20, _v21, _v22], this);
              acc = _v23;
              _v1 = _v23;
              const _v24: any = 0;
              acc = _v24;
              return _v24;
              _v1 = acc;
            } else {
              let _v25: any = acc;
              let _v26: any = 1;
              if (rt.truth(_v26)) {
                const _v27: any = await rt.call(0, "proc0_11", [], this);
                acc = _v27;
                const _v28: any = rt.get(this, "price");
                acc = _v28;
                const _v29: any = rt.op(">=", ...[_v27, _v28]);
                acc = _v29;
                _v26 = _v29;
              }
              if (rt.truth(_v26)) {
                const _v30: any = 41;
                acc = _v30;
                const _v31: any = rt.global(302);
                acc = _v31;
                const _v32: any = await rt.send(_v31, "consumables", []);
                acc = _v32;
                const _v33: any = await rt.send(_v32, "objectAtIndex", [_v30]);
                acc = _v33;
                const _v34: any = (temps[1] = _v33);
                acc = _v34;
                _v26 = _v34;
              }
              if (rt.truth(_v26)) {
                const _v35: any = (temps[1] ?? 0);
                acc = _v35;
                const _v36: any = await rt.send(_v35, "quantity", []);
                acc = _v36;
                _v26 = _v36;
              }
              acc = _v26;
              _v25 = _v26;
              if (rt.truth(_v26)) {
                const _v37: any = 32;
                acc = _v37;
                const _v38: any = rt.global(413);
                acc = _v38;
                const _v39: any = await rt.send(_v38, "init", [_v37]);
                acc = _v39;
                _v25 = _v39;
                let _v40: any = acc;
                const _v41: any = rt.global(302);
                acc = _v41;
                const _v42: any = await rt.send(_v41, "playing", []);
                acc = _v42;
                const _v43: any = 29;
                acc = _v43;
                const _v44: any = rt.op("==", ...[_v42, _v43]);
                acc = _v44;
                _v40 = _v44;
                if (rt.truth(_v44)) {
                  const _v45: any = 0;
                  acc = _v45;
                  const _v46: any = (temps[1] ?? 0);
                  acc = _v46;
                  const _v47: any = await rt.send(_v46, "quantity", [_v45]);
                  acc = _v47;
                  _v40 = _v47;
                } else {
                  const _v48: any = 23;
                  acc = _v48;
                  const _v49: any = rt.global(476);
                  acc = _v49;
                  const _v50: any = await rt.send(_v49, "play", [_v48]);
                  acc = _v50;
                  _v40 = _v50;
                  let _v51: any = acc;
                  const _v52: any = rt.ref("global", 0, 100);
                  acc = _v52;
                  const _v53: any = 201;
                  acc = _v53;
                  const _v54: any = 33;
                  acc = _v54;
                  const _v55: any = (temps[1] ?? 0);
                  acc = _v55;
                  const _v56: any = await rt.send(_v55, "quantity", []);
                  acc = _v56;
                  const _v57: any = await rt.call(201, "Format", [_v52, _v53, _v54, _v56], this);
                  acc = _v57;
                  const _v58: any = 81;
                  acc = _v58;
                  const _v59: any = " YES ";
                  acc = _v59;
                  const _v60: any = 1;
                  acc = _v60;
                  const _v61: any = 81;
                  acc = _v61;
                  const _v62: any = " NO ";
                  acc = _v62;
                  const _v63: any = 0;
                  acc = _v63;
                  const _v64: any = 310;
                  acc = _v64;
                  const _v65: any = rt.global(413);
                  acc = _v65;
                  const _v66: any = rt.global(440);
                  acc = _v66;
                  const _v67: any = rt.global(441);
                  acc = _v67;
                  const _v68: any = rt.global(442);
                  acc = _v68;
                  const _v69: any = 70;
                  acc = _v69;
                  const _v70: any = 150;
                  acc = _v70;
                  const _v71: any = 311;
                  acc = _v71;
                  const _v72: any = await rt.call(255, "Print", [_v57, _v58, _v59, _v60, _v61, _v62, _v63, _v64, _v65, _v66, _v67, _v68, _v69, _v70, _v71], this);
                  acc = _v72;
                  _v51 = _v72;
                  if (rt.truth(_v72)) {
                    const _v73: any = 23;
                    acc = _v73;
                    const _v74: any = rt.global(476);
                    acc = _v74;
                    const _v75: any = await rt.send(_v74, "play", [_v73]);
                    acc = _v75;
                    _v51 = _v75;
                    const _v76: any = 16;
                    acc = _v76;
                    const _v77: any = rt.global(413);
                    acc = _v77;
                    const _v78: any = await rt.send(_v77, "init", [_v76]);
                    acc = _v78;
                    _v51 = _v78;
                    const _v79: any = 201;
                    acc = _v79;
                    const _v80: any = 34;
                    acc = _v80;
                    const _v81: any = 310;
                    acc = _v81;
                    const _v82: any = rt.global(413);
                    acc = _v82;
                    const _v83: any = rt.global(440);
                    acc = _v83;
                    const _v84: any = rt.global(441);
                    acc = _v84;
                    const _v85: any = rt.global(442);
                    acc = _v85;
                    const _v86: any = 70;
                    acc = _v86;
                    const _v87: any = 70;
                    acc = _v87;
                    const _v88: any = 25;
                    acc = _v88;
                    const _v89: any = rt.global(426);
                    acc = _v89;
                    const _v90: any = await rt.call(255, "Print", [_v79, _v80, _v81, _v82, _v83, _v84, _v85, _v86, _v87, _v88, _v89], this);
                    acc = _v90;
                    _v51 = _v90;
                    const _v91: any = 0;
                    acc = _v91;
                    const _v92: any = (temps[1] ?? 0);
                    acc = _v92;
                    const _v93: any = await rt.send(_v92, "quantity", [_v91]);
                    acc = _v93;
                    _v51 = _v93;
                  } else {
                    const _v94: any = 23;
                    acc = _v94;
                    const _v95: any = rt.global(476);
                    acc = _v95;
                    const _v96: any = await rt.send(_v95, "play", [_v94]);
                    acc = _v96;
                    _v51 = _v96;
                    const _v97: any = 2;
                    acc = _v97;
                    const _v98: any = rt.global(413);
                    acc = _v98;
                    const _v99: any = await rt.send(_v98, "init", [_v97]);
                    acc = _v99;
                    _v51 = _v99;
                    const _v100: any = 201;
                    acc = _v100;
                    const _v101: any = 35;
                    acc = _v101;
                    const _v102: any = 310;
                    acc = _v102;
                    const _v103: any = rt.global(413);
                    acc = _v103;
                    const _v104: any = rt.global(440);
                    acc = _v104;
                    const _v105: any = rt.global(441);
                    acc = _v105;
                    const _v106: any = rt.global(442);
                    acc = _v106;
                    const _v107: any = 70;
                    acc = _v107;
                    const _v108: any = 70;
                    acc = _v108;
                    const _v109: any = 25;
                    acc = _v109;
                    const _v110: any = rt.global(426);
                    acc = _v110;
                    const _v111: any = await rt.call(255, "Print", [_v100, _v101, _v102, _v103, _v104, _v105, _v106, _v107, _v108, _v109, _v110], this);
                    acc = _v111;
                    _v51 = _v111;
                    const _v112: any = 0;
                    acc = _v112;
                    return _v112;
                    _v51 = acc;
                  }
                  acc = _v51;
                  _v40 = _v51;
                }
                acc = _v40;
                _v25 = _v40;
              }
              acc = _v25;
              _v1 = _v25;
              const _v113: any = await rt.superSend(this, {"script": 201, "name": "rentLowCost"}, "doit", []);
              acc = _v113;
              const _v114: any = (temps[0] = _v113);
              acc = _v114;
              _v1 = _v114;
              let _v115: any = acc;
              const _v116: any = rt.global(416);
              acc = _v116;
              _v115 = _v116;
              if (rt.truth(_v116)) {
                const _v117: any = rt.get(this, "indexNum");
                acc = _v117;
                const _v118: any = rt.get(this, "price");
                acc = _v118;
                const _v119: any = rt.object(201, "payRent");
                acc = _v119;
                const _v120: any = await rt.send(_v119, "erase", []);
                acc = _v120;
                const _v121: any = await rt.send(_v119, "indexNum", [_v117]);
                acc = _v121;
                const _v122: any = await rt.send(_v119, "price", [_v118]);
                acc = _v122;
                const _v123: any = await rt.send(_v119, "draw", []);
                acc = _v123;
                _v115 = _v123;
                const _v124: any = rt.get(this, "price");
                acc = _v124;
                const _v125: any = 0;
                acc = _v125;
                const _v126: any = rt.global(302);
                acc = _v126;
                const _v127: any = await rt.send(_v126, "curRent", [_v124]);
                acc = _v127;
                const _v128: any = await rt.send(_v126, "livesAt", [_v125]);
                acc = _v128;
                _v115 = _v128;
                let _v129: any = acc;
                const _v130: any = rt.global(427);
                acc = _v130;
                _v129 = _v130;
                if (rt.truth(_v130)) {
                  const _v131: any = 16;
                  acc = _v131;
                  const _v132: any = rt.global(413);
                  acc = _v132;
                  const _v133: any = await rt.send(_v132, "init", [_v131]);
                  acc = _v133;
                  _v129 = _v133;
                  const _v134: any = 201;
                  acc = _v134;
                  const _v135: any = 13;
                  acc = _v135;
                  const _v136: any = 17;
                  acc = _v136;
                  const _v137: any = await rt.call(201, "Random", [_v135, _v136], this);
                  acc = _v137;
                  const _v138: any = 310;
                  acc = _v138;
                  const _v139: any = rt.global(413);
                  acc = _v139;
                  const _v140: any = rt.global(440);
                  acc = _v140;
                  const _v141: any = rt.global(441);
                  acc = _v141;
                  const _v142: any = rt.global(442);
                  acc = _v142;
                  const _v143: any = 70;
                  acc = _v143;
                  const _v144: any = 100;
                  acc = _v144;
                  const _v145: any = 25;
                  acc = _v145;
                  const _v146: any = rt.global(426);
                  acc = _v146;
                  const _v147: any = await rt.call(255, "Print", [_v134, _v137, _v138, _v139, _v140, _v141, _v142, _v143, _v144, _v145, _v146], this);
                  acc = _v147;
                  _v129 = _v147;
                }
                acc = _v129;
                _v115 = _v129;
              }
              acc = _v115;
              _v1 = _v115;
            }
            acc = _v1;
            const _v148: any = (temps[0] ?? 0);
            acc = _v148;
            return _v148;
            return acc;
          },
        },
      },
      {
        name: "rentSecurity",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"nsTop": 90, "nsLeft": 20, "key": 4, "text": "Rent Security Apartment  ", "indexNum": 41, "typeOfGoods": 1, "units": 4, "basePrice": 475},
        methods: {
          // SCI rentOffice.sc: rentSecurity.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = rt.global(302);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "livesAt", []);
            acc = _v3;
            const _v4: any = 2;
            acc = _v4;
            const _v5: any = rt.op("==", ...[_v3, _v4]);
            acc = _v5;
            _v1 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 23;
              acc = _v6;
              const _v7: any = rt.global(476);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "play", [_v6]);
              acc = _v8;
              _v1 = _v8;
              const _v9: any = 16;
              acc = _v9;
              const _v10: any = rt.global(413);
              acc = _v10;
              const _v11: any = await rt.send(_v10, "init", [_v9]);
              acc = _v11;
              _v1 = _v11;
              const _v12: any = 201;
              acc = _v12;
              const _v13: any = 36;
              acc = _v13;
              const _v14: any = 310;
              acc = _v14;
              const _v15: any = rt.global(413);
              acc = _v15;
              const _v16: any = rt.global(440);
              acc = _v16;
              const _v17: any = rt.global(441);
              acc = _v17;
              const _v18: any = rt.global(442);
              acc = _v18;
              const _v19: any = 70;
              acc = _v19;
              const _v20: any = 70;
              acc = _v20;
              const _v21: any = 25;
              acc = _v21;
              const _v22: any = rt.global(426);
              acc = _v22;
              const _v23: any = await rt.call(255, "Print", [_v12, _v13, _v14, _v15, _v16, _v17, _v18, _v19, _v20, _v21, _v22], this);
              acc = _v23;
              _v1 = _v23;
              const _v24: any = 0;
              acc = _v24;
              return _v24;
              _v1 = acc;
            } else {
              const _v25: any = 23;
              acc = _v25;
              const _v26: any = rt.global(476);
              acc = _v26;
              const _v27: any = await rt.send(_v26, "play", [_v25]);
              acc = _v27;
              _v1 = _v27;
              let _v28: any = acc;
              let _v29: any = 1;
              if (rt.truth(_v29)) {
                const _v30: any = await rt.call(0, "proc0_11", [], this);
                acc = _v30;
                const _v31: any = rt.get(this, "price");
                acc = _v31;
                const _v32: any = rt.op(">=", ...[_v30, _v31]);
                acc = _v32;
                _v29 = _v32;
              }
              if (rt.truth(_v29)) {
                const _v33: any = 40;
                acc = _v33;
                const _v34: any = rt.global(302);
                acc = _v34;
                const _v35: any = await rt.send(_v34, "consumables", []);
                acc = _v35;
                const _v36: any = await rt.send(_v35, "objectAtIndex", [_v33]);
                acc = _v36;
                const _v37: any = (temps[1] = _v36);
                acc = _v37;
                _v29 = _v37;
              }
              if (rt.truth(_v29)) {
                const _v38: any = (temps[1] ?? 0);
                acc = _v38;
                const _v39: any = await rt.send(_v38, "quantity", []);
                acc = _v39;
                _v29 = _v39;
              }
              acc = _v29;
              _v28 = _v29;
              if (rt.truth(_v29)) {
                const _v40: any = 32;
                acc = _v40;
                const _v41: any = rt.global(413);
                acc = _v41;
                const _v42: any = await rt.send(_v41, "init", [_v40]);
                acc = _v42;
                _v28 = _v42;
                let _v43: any = acc;
                _branch44: {
                  const _v45: any = rt.global(302);
                  acc = _v45;
                  const _v46: any = await rt.send(_v45, "playing", []);
                  acc = _v46;
                  const _v47: any = 29;
                  acc = _v47;
                  const _v48: any = rt.op("==", ...[_v46, _v47]);
                  acc = _v48;
                  _v43 = _v48;
                  acc = _v43;
                  if (rt.truth(_v43)) {
                    const _v49: any = 0;
                    acc = _v49;
                    const _v50: any = (temps[1] ?? 0);
                    acc = _v50;
                    const _v51: any = await rt.send(_v50, "quantity", [_v49]);
                    acc = _v51;
                    _v43 = _v51;
                    break _branch44;
                  }
                  const _v52: any = rt.ref("global", 0, 100);
                  acc = _v52;
                  const _v53: any = 201;
                  acc = _v53;
                  const _v54: any = 37;
                  acc = _v54;
                  const _v55: any = (temps[1] ?? 0);
                  acc = _v55;
                  const _v56: any = await rt.send(_v55, "quantity", []);
                  acc = _v56;
                  const _v57: any = await rt.call(201, "Format", [_v52, _v53, _v54, _v56], this);
                  acc = _v57;
                  const _v58: any = 311;
                  acc = _v58;
                  const _v59: any = 81;
                  acc = _v59;
                  const _v60: any = " YES ";
                  acc = _v60;
                  const _v61: any = 1;
                  acc = _v61;
                  const _v62: any = 81;
                  acc = _v62;
                  const _v63: any = " NO ";
                  acc = _v63;
                  const _v64: any = 0;
                  acc = _v64;
                  const _v65: any = 310;
                  acc = _v65;
                  const _v66: any = rt.global(413);
                  acc = _v66;
                  const _v67: any = rt.global(440);
                  acc = _v67;
                  const _v68: any = rt.global(441);
                  acc = _v68;
                  const _v69: any = rt.global(442);
                  acc = _v69;
                  const _v70: any = 70;
                  acc = _v70;
                  const _v71: any = 150;
                  acc = _v71;
                  const _v72: any = await rt.call(255, "Print", [_v57, _v58, _v59, _v60, _v61, _v62, _v63, _v64, _v65, _v66, _v67, _v68, _v69, _v70, _v71], this);
                  acc = _v72;
                  _v43 = _v72;
                  acc = _v43;
                  if (rt.truth(_v43)) {
                    const _v73: any = 23;
                    acc = _v73;
                    const _v74: any = rt.global(476);
                    acc = _v74;
                    const _v75: any = await rt.send(_v74, "play", [_v73]);
                    acc = _v75;
                    _v43 = _v75;
                    const _v76: any = 16;
                    acc = _v76;
                    const _v77: any = rt.global(413);
                    acc = _v77;
                    const _v78: any = await rt.send(_v77, "init", [_v76]);
                    acc = _v78;
                    _v43 = _v78;
                    const _v79: any = 201;
                    acc = _v79;
                    const _v80: any = 34;
                    acc = _v80;
                    const _v81: any = 310;
                    acc = _v81;
                    const _v82: any = rt.global(413);
                    acc = _v82;
                    const _v83: any = rt.global(440);
                    acc = _v83;
                    const _v84: any = rt.global(441);
                    acc = _v84;
                    const _v85: any = rt.global(442);
                    acc = _v85;
                    const _v86: any = 70;
                    acc = _v86;
                    const _v87: any = 70;
                    acc = _v87;
                    const _v88: any = 25;
                    acc = _v88;
                    const _v89: any = rt.global(426);
                    acc = _v89;
                    const _v90: any = await rt.call(255, "Print", [_v79, _v80, _v81, _v82, _v83, _v84, _v85, _v86, _v87, _v88, _v89], this);
                    acc = _v90;
                    _v43 = _v90;
                    const _v91: any = 0;
                    acc = _v91;
                    const _v92: any = (temps[1] ?? 0);
                    acc = _v92;
                    const _v93: any = await rt.send(_v92, "quantity", [_v91]);
                    acc = _v93;
                    _v43 = _v93;
                    break _branch44;
                  }
                  const _v94: any = 23;
                  acc = _v94;
                  const _v95: any = rt.global(476);
                  acc = _v95;
                  const _v96: any = await rt.send(_v95, "play", [_v94]);
                  acc = _v96;
                  _v43 = _v96;
                  const _v97: any = 2;
                  acc = _v97;
                  const _v98: any = rt.global(413);
                  acc = _v98;
                  const _v99: any = await rt.send(_v98, "init", [_v97]);
                  acc = _v99;
                  _v43 = _v99;
                  const _v100: any = 201;
                  acc = _v100;
                  const _v101: any = 35;
                  acc = _v101;
                  const _v102: any = 310;
                  acc = _v102;
                  const _v103: any = rt.global(413);
                  acc = _v103;
                  const _v104: any = rt.global(440);
                  acc = _v104;
                  const _v105: any = rt.global(441);
                  acc = _v105;
                  const _v106: any = rt.global(442);
                  acc = _v106;
                  const _v107: any = 70;
                  acc = _v107;
                  const _v108: any = 70;
                  acc = _v108;
                  const _v109: any = 25;
                  acc = _v109;
                  const _v110: any = rt.global(426);
                  acc = _v110;
                  const _v111: any = await rt.call(255, "Print", [_v100, _v101, _v102, _v103, _v104, _v105, _v106, _v107, _v108, _v109, _v110], this);
                  acc = _v111;
                  _v43 = _v111;
                  const _v112: any = 0;
                  acc = _v112;
                  return _v112;
                  _v43 = acc;
                  break _branch44;
                }
                acc = _v43;
                _v28 = _v43;
              }
              acc = _v28;
              _v1 = _v28;
              const _v113: any = await rt.superSend(this, {"script": 201, "name": "rentSecurity"}, "doit", []);
              acc = _v113;
              const _v114: any = (temps[0] = _v113);
              acc = _v114;
              _v1 = _v114;
              let _v115: any = acc;
              const _v116: any = rt.global(416);
              acc = _v116;
              _v115 = _v116;
              if (rt.truth(_v116)) {
                const _v117: any = rt.get(this, "indexNum");
                acc = _v117;
                const _v118: any = rt.get(this, "price");
                acc = _v118;
                const _v119: any = rt.object(201, "payRent");
                acc = _v119;
                const _v120: any = await rt.send(_v119, "erase", []);
                acc = _v120;
                const _v121: any = await rt.send(_v119, "indexNum", [_v117]);
                acc = _v121;
                const _v122: any = await rt.send(_v119, "price", [_v118]);
                acc = _v122;
                const _v123: any = await rt.send(_v119, "draw", []);
                acc = _v123;
                _v115 = _v123;
                const _v124: any = rt.get(this, "price");
                acc = _v124;
                const _v125: any = 2;
                acc = _v125;
                const _v126: any = rt.global(302);
                acc = _v126;
                const _v127: any = await rt.send(_v126, "curRent", [_v124]);
                acc = _v127;
                const _v128: any = await rt.send(_v126, "livesAt", [_v125]);
                acc = _v128;
                _v115 = _v128;
                let _v129: any = acc;
                const _v130: any = rt.global(427);
                acc = _v130;
                _v129 = _v130;
                if (rt.truth(_v130)) {
                  const _v131: any = 16;
                  acc = _v131;
                  const _v132: any = rt.global(413);
                  acc = _v132;
                  const _v133: any = await rt.send(_v132, "init", [_v131]);
                  acc = _v133;
                  _v129 = _v133;
                  const _v134: any = 201;
                  acc = _v134;
                  const _v135: any = 8;
                  acc = _v135;
                  const _v136: any = 12;
                  acc = _v136;
                  const _v137: any = await rt.call(201, "Random", [_v135, _v136], this);
                  acc = _v137;
                  const _v138: any = 310;
                  acc = _v138;
                  const _v139: any = rt.global(413);
                  acc = _v139;
                  const _v140: any = rt.global(440);
                  acc = _v140;
                  const _v141: any = rt.global(441);
                  acc = _v141;
                  const _v142: any = rt.global(442);
                  acc = _v142;
                  const _v143: any = 70;
                  acc = _v143;
                  const _v144: any = 100;
                  acc = _v144;
                  const _v145: any = 25;
                  acc = _v145;
                  const _v146: any = rt.global(426);
                  acc = _v146;
                  const _v147: any = await rt.call(255, "Print", [_v134, _v137, _v138, _v139, _v140, _v141, _v142, _v143, _v144, _v145, _v146], this);
                  acc = _v147;
                  _v129 = _v147;
                }
                acc = _v129;
                _v115 = _v129;
              }
              acc = _v115;
              _v1 = _v115;
            }
            acc = _v1;
            const _v148: any = (temps[0] ?? 0);
            acc = _v148;
            return _v148;
            return acc;
          },
        },
      },
      {
        name: "payGarnishment",
        className: "CostDItem",
        parent: {"script": 104, "name": "CostDItem"},
        isClass: false,
        properties: {"state": 65, "nsTop": 100, "nsLeft": 20, "key": 5, "text": "Pay Garnishment Balance  ", "typeOfGoods": 4, "fixedPrice": 1},
        methods: {
          // SCI rentOffice.sc: payGarnishment.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = await rt.superSend(this, {"script": 201, "name": "payGarnishment"}, "doit", []);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(416);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = 0;
              acc = _v5;
              const _v6: any = rt.global(302);
              acc = _v6;
              const _v7: any = await rt.send(_v6, "rentOwed", [_v5]);
              acc = _v7;
              _v3 = _v7;
              const _v8: any = 0;
              acc = _v8;
              const _v9: any = this;
              acc = _v9;
              const _v10: any = await rt.send(_v9, "erase", []);
              acc = _v10;
              const _v11: any = await rt.send(_v9, "state", [_v8]);
              acc = _v11;
              _v3 = _v11;
              let _v12: any = acc;
              const _v13: any = rt.global(427);
              acc = _v13;
              _v12 = _v13;
              if (rt.truth(_v13)) {
                const _v14: any = 16;
                acc = _v14;
                const _v15: any = rt.global(413);
                acc = _v15;
                const _v16: any = await rt.send(_v15, "init", [_v14]);
                acc = _v16;
                _v12 = _v16;
                const _v17: any = 201;
                acc = _v17;
                const _v18: any = 38;
                acc = _v18;
                const _v19: any = 310;
                acc = _v19;
                const _v20: any = rt.global(413);
                acc = _v20;
                const _v21: any = rt.global(440);
                acc = _v21;
                const _v22: any = rt.global(441);
                acc = _v22;
                const _v23: any = rt.global(442);
                acc = _v23;
                const _v24: any = 70;
                acc = _v24;
                const _v25: any = 100;
                acc = _v25;
                const _v26: any = 25;
                acc = _v26;
                const _v27: any = rt.global(426);
                acc = _v27;
                const _v28: any = await rt.call(255, "Print", [_v17, _v18, _v19, _v20, _v21, _v22, _v23, _v24, _v25, _v26, _v27], this);
                acc = _v28;
                _v12 = _v28;
              }
              acc = _v12;
              _v3 = _v12;
              const _v29: any = rt.object(891, "KeyMouse");
              acc = _v29;
              const _v30: any = await rt.send(_v29, "advance", []);
              acc = _v30;
              _v3 = _v30;
              const _v31: any = rt.object(201, "rentOffice");
              acc = _v31;
              const _v32: any = await rt.send(_v31, "advance", []);
              acc = _v32;
              _v3 = _v32;
              const _v33: any = this;
              acc = _v33;
              const _v34: any = rt.global(502);
              acc = _v34;
              const _v35: any = await rt.send(_v34, "keyMouseList", []);
              acc = _v35;
              const _v36: any = await rt.send(_v35, "delete", [_v33]);
              acc = _v36;
              _v3 = _v36;
              const _v37: any = this;
              acc = _v37;
              const _v38: any = rt.object(201, "rentOffice");
              acc = _v38;
              const _v39: any = await rt.send(_v38, "delete", [_v37]);
              acc = _v39;
              _v3 = _v39;
            }
            acc = _v3;
            const _v40: any = (temps[0] ?? 0);
            acc = _v40;
            return _v40;
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
          // SCI rentOffice.sc: workButton.doit
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
            const _v5: any = rt.object(201, "timeClock");
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
                const _v15: any = rt.object(201, "rentOffice");
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
                const _v26: any = rt.object(201, "timeClock");
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
            const _v29: any = await rt.superSend(this, {"script": 201, "name": "workButton"}, "doit", [_v28]);
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
        properties: {},
        methods: {
          // SCI rentOffice.sc: timeClock.setSize
          "setSize": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(201, "timeClock");
            acc = _v1;
            const _v2: any = rt.global(502);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "aTimeClock", [_v1]);
            acc = _v3;
            const _v4: any = await rt.superSend(this, {"script": 201, "name": "timeClock"}, "setSize", []);
            acc = _v4;
            return acc;
          },
        },
      },
      {
        name: "theShortTitle",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"nsLeft": 67, "view": 701, "priority": 13},
        methods: {
        },
      },
      {
        name: "theLongTitleLeft",
        className: "DIcon",
        parent: {"script": 255, "name": "DIcon"},
        isClass: false,
        properties: {"view": 701, "cel": 1, "priority": 13},
        methods: {
        },
      },
      {
        name: "theTalker",
        className: "Talker",
        parent: {"script": 104, "name": "Talker"},
        isClass: false,
        properties: {"nsTop": 0, "view": 351},
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
          // SCI rentOffice.sc: computerScript.handleEvent
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
                  const _v19: any = 7;
                  acc = _v19;
                  const _v20: any = await rt.call(0, "proc0_6", [_v19], this);
                  acc = _v20;
                  _v18 = _v20;
                  if (rt.truth(_v20)) {
                    const _v21: any = 60;
                    acc = _v21;
                    const _v22: any = rt.set(this, "cycles", _v21);
                    acc = _v22;
                    _v18 = _v22;
                    const _v23: any = rt.object(201, "payRent");
                    acc = _v23;
                    const _v24: any = await rt.send(_v23, "key", []);
                    acc = _v24;
                    const _v25: any = (args[0] ?? 0);
                    acc = _v25;
                    const _v26: any = await rt.send(_v25, "message", [_v24]);
                    acc = _v26;
                    _v18 = _v26;
                    let _v27: any = acc;
                    _branch28: {
                      const _v29: any = rt.global(302);
                      acc = _v29;
                      const _v30: any = await rt.send(_v29, "livesAt", []);
                      acc = _v30;
                      const _v31: any = 0;
                      acc = _v31;
                      const _v32: any = rt.op("==", ...[_v30, _v31]);
                      acc = _v32;
                      _v27 = _v32;
                      acc = _v27;
                      if (rt.truth(_v27)) {
                        let _v33: any = acc;
                        let _v34: any = 0;
                        if (!rt.truth(_v34)) {
                          let _v35: any = 1;
                          if (rt.truth(_v35)) {
                            const _v36: any = 21;
                            acc = _v36;
                            const _v37: any = rt.global(302);
                            acc = _v37;
                            const _v38: any = await rt.send(_v37, "durables", []);
                            acc = _v38;
                            const _v39: any = await rt.send(_v38, "objectAtIndexQuan", [_v36]);
                            acc = _v39;
                            _v35 = _v39;
                          }
                          if (rt.truth(_v35)) {
                            const _v40: any = 23;
                            acc = _v40;
                            const _v41: any = rt.global(302);
                            acc = _v41;
                            const _v42: any = await rt.send(_v41, "durables", []);
                            acc = _v42;
                            const _v43: any = await rt.send(_v42, "objectAtIndexQuan", [_v40]);
                            acc = _v43;
                            _v35 = _v43;
                          }
                          if (rt.truth(_v35)) {
                            const _v44: any = await rt.call(0, "proc0_11", [], this);
                            acc = _v44;
                            const _v45: any = 600;
                            acc = _v45;
                            const _v46: any = rt.op(">", ...[_v44, _v45]);
                            acc = _v46;
                            _v35 = _v46;
                          }
                          acc = _v35;
                          _v34 = _v35;
                        }
                        if (!rt.truth(_v34)) {
                          const _v47: any = rt.object(201, "rentSecurity");
                          acc = _v47;
                          const _v48: any = await rt.send(_v47, "price", []);
                          acc = _v48;
                          const _v49: any = rt.global(302);
                          acc = _v49;
                          const _v50: any = await rt.send(_v49, "curRent", []);
                          acc = _v50;
                          const _v51: any = rt.op("<", ...[_v48, _v50]);
                          acc = _v51;
                          _v34 = _v51;
                        }
                        acc = _v34;
                        _v33 = _v34;
                        if (rt.truth(_v34)) {
                          const _v52: any = rt.object(201, "rentSecurity");
                          acc = _v52;
                          const _v53: any = await rt.send(_v52, "key", []);
                          acc = _v53;
                          const _v54: any = (args[0] ?? 0);
                          acc = _v54;
                          const _v55: any = await rt.send(_v54, "message", [_v53]);
                          acc = _v55;
                          _v33 = _v55;
                        }
                        acc = _v33;
                        _v27 = _v33;
                        break _branch28;
                      }
                      let _v56: any = 1;
                      if (rt.truth(_v56)) {
                        const _v57: any = rt.object(201, "rentLowCost");
                        acc = _v57;
                        const _v58: any = await rt.send(_v57, "price", []);
                        acc = _v58;
                        const _v59: any = rt.global(302);
                        acc = _v59;
                        const _v60: any = await rt.send(_v59, "curRent", []);
                        acc = _v60;
                        const _v61: any = 200;
                        acc = _v61;
                        const _v62: any = rt.op("-", ...[_v60, _v61]);
                        acc = _v62;
                        const _v63: any = rt.op("<", ...[_v58, _v62]);
                        acc = _v63;
                        _v56 = _v63;
                      }
                      if (rt.truth(_v56)) {
                        const _v64: any = rt.object(201, "rentSecurity");
                        acc = _v64;
                        const _v65: any = await rt.send(_v64, "price", []);
                        acc = _v65;
                        const _v66: any = rt.global(302);
                        acc = _v66;
                        const _v67: any = await rt.send(_v66, "curRent", []);
                        acc = _v67;
                        const _v68: any = 100;
                        acc = _v68;
                        const _v69: any = rt.op("-", ...[_v67, _v68]);
                        acc = _v69;
                        const _v70: any = rt.op("<", ...[_v65, _v69]);
                        acc = _v70;
                        _v56 = _v70;
                      }
                      acc = _v56;
                      _v27 = _v56;
                      acc = _v27;
                      if (rt.truth(_v27)) {
                        const _v71: any = rt.object(201, "rentLowCost");
                        acc = _v71;
                        const _v72: any = await rt.send(_v71, "key", []);
                        acc = _v72;
                        const _v73: any = (args[0] ?? 0);
                        acc = _v73;
                        const _v74: any = await rt.send(_v73, "message", [_v72]);
                        acc = _v74;
                        _v27 = _v74;
                        break _branch28;
                      }
                    }
                    acc = _v27;
                    _v18 = _v27;
                  }
                  acc = _v18;
                  _v14 = _v18;
                  break _branch16;
                }
                const _v75: any = 3;
                acc = _v75;
                _v14 = rt.op("==", _v15, _v75);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v76: any = acc;
                  const _v77: any = 8;
                  acc = _v77;
                  const _v78: any = await rt.call(0, "proc0_6", [_v77], this);
                  acc = _v78;
                  _v76 = _v78;
                  if (rt.truth(_v78)) {
                    const _v79: any = 60;
                    acc = _v79;
                    const _v80: any = rt.set(this, "cycles", _v79);
                    acc = _v80;
                    _v76 = _v80;
                    const _v81: any = rt.object(201, "moreTime");
                    acc = _v81;
                    const _v82: any = await rt.send(_v81, "key", []);
                    acc = _v82;
                    const _v83: any = (args[0] ?? 0);
                    acc = _v83;
                    const _v84: any = await rt.send(_v83, "message", [_v82]);
                    acc = _v84;
                    _v76 = _v84;
                  }
                  acc = _v76;
                  _v14 = _v76;
                  break _branch16;
                }
                const _v85: any = 11;
                acc = _v85;
                _v14 = rt.op("==", _v15, _v85);
                acc = _v14;
                if (rt.truth(_v14)) {
                  let _v86: any = acc;
                  let _v87: any = 1;
                  if (rt.truth(_v87)) {
                    const _v88: any = rt.object(201, "payGarnishment");
                    acc = _v88;
                    const _v89: any = rt.object(201, "rentOffice");
                    acc = _v89;
                    const _v90: any = await rt.send(_v89, "contains", [_v88]);
                    acc = _v90;
                    _v87 = _v90;
                  }
                  if (rt.truth(_v87)) {
                    const _v91: any = await rt.call(0, "proc0_11", [], this);
                    acc = _v91;
                    const _v92: any = rt.object(201, "payGarnishment");
                    acc = _v92;
                    const _v93: any = await rt.send(_v92, "price", []);
                    acc = _v93;
                    const _v94: any = 300;
                    acc = _v94;
                    const _v95: any = rt.op("+", ...[_v93, _v94]);
                    acc = _v95;
                    const _v96: any = rt.op(">", ...[_v91, _v95]);
                    acc = _v96;
                    _v87 = _v96;
                  }
                  acc = _v87;
                  _v86 = _v87;
                  if (rt.truth(_v87)) {
                    const _v97: any = 60;
                    acc = _v97;
                    const _v98: any = rt.set(this, "cycles", _v97);
                    acc = _v98;
                    _v86 = _v98;
                    const _v99: any = rt.object(201, "payGarnishment");
                    acc = _v99;
                    const _v100: any = await rt.send(_v99, "key", []);
                    acc = _v100;
                    const _v101: any = (args[0] ?? 0);
                    acc = _v101;
                    const _v102: any = await rt.send(_v101, "message", [_v100]);
                    acc = _v102;
                    _v86 = _v102;
                  }
                  acc = _v86;
                  _v14 = _v86;
                  break _branch16;
                }
                const _v103: any = (args[0] ?? 0);
                acc = _v103;
                const _v104: any = 1;
                acc = _v104;
                const _v105: any = await rt.superSend(this, {"script": 201, "name": "computerScript"}, "handleEvent", [_v103, _v104]);
                acc = _v105;
                _v14 = _v105;
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
      // SCI rentOffice.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.ref("global", 0, 100);
        acc = _v1;
        const _v2: any = 201;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(201, "Format", [_v1, _v2, _v3], this);
        acc = _v4;
        const _v5: any = rt.ref("global", 0, 100);
        acc = _v5;
        const _v6: any = 201;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = await rt.call(201, "Format", [_v5, _v6, _v7], this);
        acc = _v8;
        const _v9: any = rt.ref("global", 0, 100);
        acc = _v9;
        const _v10: any = 201;
        acc = _v10;
        const _v11: any = 2;
        acc = _v11;
        const _v12: any = await rt.call(201, "Format", [_v9, _v10, _v11], this);
        acc = _v12;
        const _v13: any = rt.ref("global", 0, 100);
        acc = _v13;
        const _v14: any = 201;
        acc = _v14;
        const _v15: any = 3;
        acc = _v15;
        const _v16: any = await rt.call(201, "Format", [_v13, _v14, _v15], this);
        acc = _v16;
        const _v17: any = rt.ref("global", 0, 100);
        acc = _v17;
        const _v18: any = 201;
        acc = _v18;
        const _v19: any = 4;
        acc = _v19;
        const _v20: any = await rt.call(201, "Format", [_v17, _v18, _v19], this);
        acc = _v20;
        const _v21: any = rt.ref("global", 0, 100);
        acc = _v21;
        const _v22: any = 201;
        acc = _v22;
        const _v23: any = 5;
        acc = _v23;
        const _v24: any = await rt.call(201, "Format", [_v21, _v22, _v23], this);
        acc = _v24;
        const _v25: any = rt.ref("global", 0, 100);
        acc = _v25;
        const _v26: any = 201;
        acc = _v26;
        const _v27: any = 6;
        acc = _v27;
        const _v28: any = await rt.call(201, "Format", [_v25, _v26, _v27], this);
        acc = _v28;
        const _v29: any = rt.ref("global", 0, 100);
        acc = _v29;
        const _v30: any = 201;
        acc = _v30;
        const _v31: any = 7;
        acc = _v31;
        const _v32: any = await rt.call(201, "Format", [_v29, _v30, _v31], this);
        acc = _v32;
        const _v33: any = rt.ref("global", 0, 100);
        acc = _v33;
        const _v34: any = 201;
        acc = _v34;
        const _v35: any = 8;
        acc = _v35;
        const _v36: any = await rt.call(201, "Format", [_v33, _v34, _v35], this);
        acc = _v36;
        const _v37: any = rt.ref("global", 0, 100);
        acc = _v37;
        const _v38: any = 201;
        acc = _v38;
        const _v39: any = 9;
        acc = _v39;
        const _v40: any = await rt.call(201, "Format", [_v37, _v38, _v39], this);
        acc = _v40;
        const _v41: any = rt.ref("global", 0, 100);
        acc = _v41;
        const _v42: any = 201;
        acc = _v42;
        const _v43: any = 10;
        acc = _v43;
        const _v44: any = await rt.call(201, "Format", [_v41, _v42, _v43], this);
        acc = _v44;
        const _v45: any = rt.ref("global", 0, 100);
        acc = _v45;
        const _v46: any = 201;
        acc = _v46;
        const _v47: any = 11;
        acc = _v47;
        const _v48: any = await rt.call(201, "Format", [_v45, _v46, _v47], this);
        acc = _v48;
        const _v49: any = rt.ref("global", 0, 100);
        acc = _v49;
        const _v50: any = 201;
        acc = _v50;
        const _v51: any = 12;
        acc = _v51;
        const _v52: any = await rt.call(201, "Format", [_v49, _v50, _v51], this);
        acc = _v52;
        const _v53: any = rt.ref("global", 0, 100);
        acc = _v53;
        const _v54: any = 201;
        acc = _v54;
        const _v55: any = 13;
        acc = _v55;
        const _v56: any = await rt.call(201, "Format", [_v53, _v54, _v55], this);
        acc = _v56;
        const _v57: any = rt.ref("global", 0, 100);
        acc = _v57;
        const _v58: any = 201;
        acc = _v58;
        const _v59: any = 14;
        acc = _v59;
        const _v60: any = await rt.call(201, "Format", [_v57, _v58, _v59], this);
        acc = _v60;
        const _v61: any = rt.ref("global", 0, 100);
        acc = _v61;
        const _v62: any = 201;
        acc = _v62;
        const _v63: any = 15;
        acc = _v63;
        const _v64: any = await rt.call(201, "Format", [_v61, _v62, _v63], this);
        acc = _v64;
        const _v65: any = rt.ref("global", 0, 100);
        acc = _v65;
        const _v66: any = 201;
        acc = _v66;
        const _v67: any = 16;
        acc = _v67;
        const _v68: any = await rt.call(201, "Format", [_v65, _v66, _v67], this);
        acc = _v68;
        const _v69: any = rt.ref("global", 0, 100);
        acc = _v69;
        const _v70: any = 201;
        acc = _v70;
        const _v71: any = 17;
        acc = _v71;
        const _v72: any = await rt.call(201, "Format", [_v69, _v70, _v71], this);
        acc = _v72;
        const _v73: any = rt.ref("global", 0, 100);
        acc = _v73;
        const _v74: any = 201;
        acc = _v74;
        const _v75: any = 18;
        acc = _v75;
        const _v76: any = await rt.call(201, "Format", [_v73, _v74, _v75], this);
        acc = _v76;
        const _v77: any = rt.ref("global", 0, 100);
        acc = _v77;
        const _v78: any = 201;
        acc = _v78;
        const _v79: any = 19;
        acc = _v79;
        const _v80: any = await rt.call(201, "Format", [_v77, _v78, _v79], this);
        acc = _v80;
        const _v81: any = rt.ref("global", 0, 100);
        acc = _v81;
        const _v82: any = 201;
        acc = _v82;
        const _v83: any = 20;
        acc = _v83;
        const _v84: any = await rt.call(201, "Format", [_v81, _v82, _v83], this);
        acc = _v84;
        const _v85: any = rt.ref("global", 0, 100);
        acc = _v85;
        const _v86: any = 201;
        acc = _v86;
        const _v87: any = 21;
        acc = _v87;
        const _v88: any = await rt.call(201, "Format", [_v85, _v86, _v87], this);
        acc = _v88;
        const _v89: any = rt.ref("global", 0, 100);
        acc = _v89;
        const _v90: any = 201;
        acc = _v90;
        const _v91: any = 22;
        acc = _v91;
        const _v92: any = await rt.call(201, "Format", [_v89, _v90, _v91], this);
        acc = _v92;
        return acc;
      },
      // SCI rentOffice.sc: proc201_1
      "proc201_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        let _v1: any = acc;
        const _v2: any = rt.object(201, "payGarnishment");
        acc = _v2;
        const _v3: any = rt.object(201, "rentOffice");
        acc = _v3;
        const _v4: any = await rt.send(_v3, "contains", [_v2]);
        acc = _v4;
        _v1 = _v4;
        if (rt.truth(_v4)) {
          const _v5: any = rt.global(302);
          acc = _v5;
          const _v6: any = await rt.send(_v5, "rentOwed", []);
          acc = _v6;
          const _v7: any = rt.object(201, "payGarnishment");
          acc = _v7;
          const _v8: any = await rt.send(_v7, "erase", []);
          acc = _v8;
          const _v9: any = await rt.send(_v7, "price", [_v6]);
          acc = _v9;
          const _v10: any = await rt.send(_v7, "draw", []);
          acc = _v10;
          _v1 = _v10;
        }
        acc = _v1;
        return acc;
      },
    },
    exports: {"0": "rentOffice", "1": "proc201_1"},
  });
}
