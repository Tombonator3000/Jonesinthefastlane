// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/Game.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 86c0861ff11e0dbf1c619c7b6f6cdb38b12df79e1da1d1e39c9f07a9c3bc7807
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(994, {
    name: "Game",
    uses: [0, 1, 255, 891, 989, 990, 992, 996, 999],
    locals: [],
    objects: [
      {
        name: "cast",
        className: "EventHandler",
        parent: {"script": 999, "name": "EventHandler"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
      {
        name: "sounds",
        className: "EventHandler",
        parent: {"script": 999, "name": "EventHandler"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
      {
        name: "controls",
        className: "Controls",
        parent: {"script": 255, "name": "Controls"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
      {
        name: "SysWindow",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"top": 0, "left": 0, "bottom": 0, "right": 0, "color": 0, "back": 7, "priority": -1, "window": 0, "type": 0, "title": 0, "hMargin": 4, "vMargin": 4, "brTop": 0, "brLeft": 0, "brBottom": 190, "brRight": 320, "animateObj": 0},
        methods: {
          // SCI Game.sc: SysWindow.open
          "open": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "top");
            acc = _v1;
            const _v2: any = rt.get(this, "left");
            acc = _v2;
            const _v3: any = rt.get(this, "bottom");
            acc = _v3;
            const _v4: any = rt.get(this, "right");
            acc = _v4;
            const _v5: any = rt.get(this, "title");
            acc = _v5;
            const _v6: any = rt.get(this, "type");
            acc = _v6;
            const _v7: any = rt.get(this, "priority");
            acc = _v7;
            const _v8: any = rt.get(this, "color");
            acc = _v8;
            const _v9: any = rt.get(this, "back");
            acc = _v9;
            const _v10: any = await rt.call(994, "NewWindow", [_v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9], this);
            acc = _v10;
            const _v11: any = rt.set(this, "window", _v10);
            acc = _v11;
            return acc;
          },
          // SCI Game.sc: SysWindow.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.get(this, "window");
            acc = _v1;
            const _v2: any = await rt.call(994, "DisposeWindow", [_v1], this);
            acc = _v2;
            const _v3: any = await rt.superSend(this, {"script": 994, "name": "SysWindow"}, "dispose", []);
            acc = _v3;
            return acc;
          },
        },
      },
      {
        name: "Game",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"script": 0, "parseLang": 1, "printLang": 1, "subtitleLang": 0},
        methods: {
          // SCI Game.sc: Game.play
          "play": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = this;
            acc = _v1;
            const _v2: any = rt.setGlobal(1, _v1);
            acc = _v2;
            const _v3: any = await rt.call(994, "GetSaveDir", [], this);
            acc = _v3;
            const _v4: any = rt.setGlobal(30, _v3);
            acc = _v4;
            let _v5: any = acc;
            const _v6: any = await rt.call(994, "GameIsRestarting", [], this);
            acc = _v6;
            const _v7: any = rt.op("not", ...[_v6]);
            acc = _v7;
            _v5 = _v7;
            if (rt.truth(_v7)) {
              const _v8: any = rt.global(30);
              acc = _v8;
              const _v9: any = await rt.call(994, "GetCWD", [_v8], this);
              acc = _v9;
              _v5 = _v9;
            }
            acc = _v5;
            const _v10: any = rt.global(21);
            acc = _v10;
            const _v11: any = 1;
            acc = _v11;
            const _v12: any = this;
            acc = _v12;
            const _v13: any = await rt.send(_v12, "setCursor", [_v10, _v11]);
            acc = _v13;
            const _v14: any = this;
            acc = _v14;
            const _v15: any = await rt.send(_v14, "init", []);
            acc = _v15;
            const _v16: any = rt.global(20);
            acc = _v16;
            const _v17: any = await rt.call(994, "HaveMouse", [], this);
            acc = _v17;
            const _v18: any = this;
            acc = _v18;
            const _v19: any = await rt.send(_v18, "setCursor", [_v16, _v17]);
            acc = _v19;
            _loop20: for (;;) {
              const _v22: any = rt.global(4);
              acc = _v22;
              const _v23: any = rt.op("not", ...[_v22]);
              acc = _v23;
              if (!rt.truth(_v23)) break _loop20;
              _continue21: {
                const _v24: any = this;
                acc = _v24;
                const _v25: any = await rt.send(_v24, "doit", []);
                acc = _v25;
                const _v26: any = rt.global(3);
                acc = _v26;
                const _v27: any = await rt.call(994, "Wait", [_v26], this);
                acc = _v27;
                const _v28: any = rt.setGlobal(18, _v27);
                acc = _v28;
              }
            }
            const _v29: any = 143;
            acc = _v29;
            const _v30: any = rt.global(8);
            acc = _v30;
            const _v31: any = await rt.send(_v30, "eachElementDo", [_v29]);
            acc = _v31;
            return acc;
          },
          // SCI Game.sc: Game.replay
          "replay": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = rt.global(24);
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.global(24);
              acc = _v3;
              const _v4: any = await rt.send(_v3, "dispose", []);
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            let _v5: any = acc;
            const _v6: any = rt.global(25);
            acc = _v6;
            _v5 = _v6;
            if (rt.truth(_v6)) {
              const _v7: any = rt.global(25);
              acc = _v7;
              const _v8: any = await rt.send(_v7, "dispose", []);
              acc = _v8;
              _v5 = _v8;
            }
            acc = _v5;
            const _v9: any = rt.global(21);
            acc = _v9;
            const _v10: any = 1;
            acc = _v10;
            const _v11: any = rt.global(1);
            acc = _v11;
            const _v12: any = await rt.send(_v11, "setCursor", [_v9, _v10]);
            acc = _v12;
            const _v13: any = rt.global(303);
            acc = _v13;
            const _v14: any = await rt.send(_v13, "hide", []);
            acc = _v14;
            const _v15: any = await rt.call(0, "proc0_1", [], this);
            acc = _v15;
            const _v16: any = rt.global(2);
            acc = _v16;
            const _v17: any = await rt.send(_v16, "picture", []);
            acc = _v17;
            const _v18: any = 5;
            acc = _v18;
            const _v19: any = await rt.call(994, "DrawPic", [_v17, _v18], this);
            acc = _v19;
            const _v20: any = await rt.call(0, "proc0_1", [], this);
            acc = _v20;
            const _v21: any = await rt.call(994, "GetPort", [], this);
            acc = _v21;
            const _v22: any = (temps[1] = _v21);
            acc = _v22;
            const _v23: any = 0;
            acc = _v23;
            const _v24: any = await rt.call(994, "SetPort", [_v23], this);
            acc = _v24;
            const _v25: any = await rt.call(1, "proc1_8", [], this);
            acc = _v25;
            const _v26: any = (temps[1] ?? 0);
            acc = _v26;
            const _v27: any = await rt.call(994, "SetPort", [_v26], this);
            acc = _v27;
            const _v28: any = 3;
            acc = _v28;
            const _v29: any = 8;
            acc = _v29;
            const _v30: any = 16;
            acc = _v30;
            const _v31: any = 1;
            acc = _v31;
            const _v32: any = await rt.call(994, "Palette", [_v28, _v29, _v30, _v31], this);
            acc = _v32;
            const _v33: any = 3;
            acc = _v33;
            const _v34: any = 144;
            acc = _v34;
            const _v35: any = 255;
            acc = _v35;
            const _v36: any = 1;
            acc = _v36;
            const _v37: any = await rt.call(994, "Palette", [_v33, _v34, _v35, _v36], this);
            acc = _v37;
            const _v38: any = rt.global(20);
            acc = _v38;
            const _v39: any = await rt.call(994, "HaveMouse", [], this);
            acc = _v39;
            const _v40: any = rt.global(1);
            acc = _v40;
            const _v41: any = await rt.send(_v40, "setCursor", [_v38, _v39]);
            acc = _v41;
            const _v42: any = 2;
            acc = _v42;
            const _v43: any = await rt.call(994, "DoSound", [_v42], this);
            acc = _v43;
            const _v44: any = 0;
            acc = _v44;
            const _v45: any = rt.object(989, "Sound");
            acc = _v45;
            const _v46: any = await rt.send(_v45, "pause", [_v44]);
            acc = _v46;
            const _v47: any = 0;
            acc = _v47;
            const _v48: any = await rt.call(994, "SetPort", [_v47], this);
            acc = _v48;
            const _v49: any = rt.ref("global", 0, 100);
            acc = _v49;
            const _v50: any = 994;
            acc = _v50;
            const _v51: any = 0;
            acc = _v51;
            const _v52: any = rt.global(372);
            acc = _v52;
            const _v53: any = await rt.call(994, "Format", [_v49, _v50, _v51, _v52], this);
            acc = _v53;
            const _v54: any = 102;
            acc = _v54;
            const _v55: any = 0;
            acc = _v55;
            const _v56: any = 103;
            acc = _v56;
            let _v57: any = acc;
            const _v58: any = rt.global(535);
            acc = _v58;
            _v57 = _v58;
            if (rt.truth(_v58)) {
              const _v59: any = 86;
              acc = _v59;
              _v57 = _v59;
            } else {
              const _v60: any = 7;
              acc = _v60;
              _v57 = _v60;
            }
            acc = _v57;
            const _v61: any = 100;
            acc = _v61;
            const _v62: any = 140;
            acc = _v62;
            const _v63: any = 184;
            acc = _v63;
            const _v64: any = 105;
            acc = _v64;
            const _v65: any = 10;
            acc = _v65;
            const _v66: any = await rt.call(994, "Display", [_v53, _v54, _v55, _v56, _v57, _v61, _v62, _v63, _v64, _v65], this);
            acc = _v66;
            const _v67: any = (temps[1] ?? 0);
            acc = _v67;
            const _v68: any = await rt.call(994, "SetPort", [_v67], this);
            acc = _v68;
            const _v69: any = 1;
            acc = _v69;
            const _v70: any = rt.setGlobal(518, _v69);
            acc = _v70;
            const _v71: any = await rt.call(0, "proc0_1", [], this);
            acc = _v71;
            let _v72: any = acc;
            const _v73: any = rt.global(502);
            acc = _v73;
            _v72 = _v73;
            if (rt.truth(_v73)) {
              const _v74: any = 11;
              acc = _v74;
              const _v75: any = 45;
              acc = _v75;
              const _v76: any = 69;
              acc = _v76;
              const _v77: any = 162;
              acc = _v77;
              const _v78: any = 250;
              acc = _v78;
              const _v79: any = 2;
              acc = _v79;
              const _v80: any = 0;
              acc = _v80;
              const _v81: any = 0;
              acc = _v81;
              const _v82: any = await rt.call(994, "Graph", [_v74, _v75, _v76, _v77, _v78, _v79, _v80, _v81], this);
              acc = _v82;
              _v72 = _v82;
              _loop83: for (;;) {
                const _v85: any = rt.global(502);
                acc = _v85;
                if (!rt.truth(_v85)) break _loop83;
                _continue84: {
                  let _v86: any = acc;
                  const _v87: any = rt.global(519);
                  acc = _v87;
                  const _v88: any = rt.op("not", ...[_v87]);
                  acc = _v88;
                  _v86 = _v88;
                  if (rt.truth(_v88)) {
                    const _v89: any = rt.global(502);
                    acc = _v89;
                    const _v90: any = await rt.send(_v89, "draw", []);
                    acc = _v90;
                    _v86 = _v90;
                  } else {
                    const _v91: any = 0;
                    acc = _v91;
                    const _v92: any = rt.setGlobal(519, _v91);
                    acc = _v92;
                    _v86 = _v92;
                  }
                  acc = _v86;
                  const _v93: any = rt.global(502);
                  acc = _v93;
                  const _v94: any = await rt.send(_v93, "init", []);
                  acc = _v94;
                }
              }
              _v72 = acc;
              const _v95: any = await rt.call(1, "proc1_8", [], this);
              acc = _v95;
              _v72 = _v95;
              let _v96: any = acc;
              const _v97: any = rt.global(302);
              acc = _v97;
              const _v98: any = await rt.send(_v97, "script", []);
              acc = _v98;
              _v96 = _v98;
              if (rt.truth(_v98)) {
                const _v99: any = rt.global(302);
                acc = _v99;
                const _v100: any = await rt.send(_v99, "script", []);
                acc = _v100;
                const _v101: any = await rt.send(_v100, "cue", []);
                acc = _v101;
                _v96 = _v101;
              }
              acc = _v96;
              _v72 = _v96;
              const _v102: any = 0;
              acc = _v102;
              const _v103: any = rt.setGlobal(434, _v102);
              acc = _v103;
              _v72 = _v103;
              const _v104: any = 3;
              acc = _v104;
              const _v105: any = 8;
              acc = _v105;
              const _v106: any = 16;
              acc = _v106;
              const _v107: any = 1;
              acc = _v107;
              const _v108: any = await rt.call(994, "Palette", [_v104, _v105, _v106, _v107], this);
              acc = _v108;
              _v72 = _v108;
              const _v109: any = 3;
              acc = _v109;
              const _v110: any = 144;
              acc = _v110;
              const _v111: any = 255;
              acc = _v111;
              const _v112: any = 1;
              acc = _v112;
              const _v113: any = await rt.call(994, "Palette", [_v109, _v110, _v111, _v112], this);
              acc = _v113;
              _v72 = _v113;
              let _v114: any = acc;
              const _v115: any = rt.global(323);
              acc = _v115;
              const _v116: any = 60;
              acc = _v116;
              const _v117: any = rt.op("<", ...[_v115, _v116]);
              acc = _v117;
              _v114 = _v117;
              if (rt.truth(_v117)) {
                const _v118: any = rt.global(303);
                acc = _v118;
                const _v119: any = await rt.send(_v118, "show", []);
                acc = _v119;
                _v114 = _v119;
              }
              acc = _v114;
              _v72 = _v114;
              const _v120: any = await rt.call(0, "proc0_1", [], this);
              acc = _v120;
              _v72 = _v120;
              const _v121: any = rt.global(515);
              acc = _v121;
              const _v122: any = rt.object(891, "KeyMouse");
              acc = _v122;
              const _v123: any = await rt.send(_v122, "curItem", [_v121]);
              acc = _v123;
              _v72 = _v123;
              const _v124: any = 0;
              acc = _v124;
              const _v125: any = rt.setGlobal(446, _v124);
              acc = _v125;
              _v72 = _v125;
              const _v126: any = 0;
              acc = _v126;
              const _v127: any = rt.setGlobal(479, _v126);
              acc = _v127;
              _v72 = _v127;
              let _v128: any = acc;
              const _v129: any = rt.global(447);
              acc = _v129;
              _v128 = _v129;
              if (rt.truth(_v129)) {
                let _v130: any = acc;
                const _v131: any = rt.global(302);
                acc = _v131;
                const _v132: any = await rt.send(_v131, "playing", []);
                acc = _v132;
                const _v133: any = 29;
                acc = _v133;
                const _v134: any = rt.op("==", ...[_v132, _v133]);
                acc = _v134;
                _v130 = _v134;
                if (rt.truth(_v134)) {
                  const _v135: any = rt.global(19);
                  acc = _v135;
                  const _v136: any = 1;
                  acc = _v136;
                  const _v137: any = 319;
                  acc = _v137;
                  const _v138: any = 199;
                  acc = _v138;
                  const _v139: any = await rt.call(994, "SetCursor", [_v135, _v136, _v137, _v138], this);
                  acc = _v139;
                  _v130 = _v139;
                } else {
                  const _v140: any = rt.global(19);
                  acc = _v140;
                  const _v141: any = 1;
                  acc = _v141;
                  const _v142: any = rt.global(449);
                  acc = _v142;
                  const _v143: any = rt.global(450);
                  acc = _v143;
                  const _v144: any = await rt.call(994, "SetCursor", [_v140, _v141, _v142, _v143], this);
                  acc = _v144;
                  _v130 = _v144;
                }
                acc = _v130;
                _v128 = _v130;
                const _v145: any = rt.global(449);
                acc = _v145;
                const _v146: any = rt.global(450);
                acc = _v146;
                const _v147: any = rt.object(891, "KeyMouse");
                acc = _v147;
                const _v148: any = await rt.send(_v147, "prevCursorX", [_v145]);
                acc = _v148;
                const _v149: any = await rt.send(_v147, "prevCursorY", [_v146]);
                acc = _v149;
                _v128 = _v149;
              }
              acc = _v128;
              _v72 = _v128;
              let _v150: any = acc;
              const _v151: any = rt.global(302);
              acc = _v151;
              const _v152: any = await rt.send(_v151, "whichBody", []);
              acc = _v152;
              _branch153: {
                const _v154: any = 0;
                acc = _v154;
                _v150 = rt.op("==", _v152, _v154);
                acc = _v150;
                if (rt.truth(_v150)) {
                  const _v155: any = 280;
                  acc = _v155;
                  _v150 = _v155;
                  break _branch153;
                }
                const _v156: any = 1;
                acc = _v156;
                _v150 = rt.op("==", _v152, _v156);
                acc = _v150;
                if (rt.truth(_v150)) {
                  const _v157: any = 284;
                  acc = _v157;
                  _v150 = _v157;
                  break _branch153;
                }
                const _v158: any = 2;
                acc = _v158;
                _v150 = rt.op("==", _v152, _v158);
                acc = _v150;
                if (rt.truth(_v150)) {
                  const _v159: any = 290;
                  acc = _v159;
                  _v150 = _v159;
                  break _branch153;
                }
                const _v160: any = 3;
                acc = _v160;
                _v150 = rt.op("==", _v152, _v160);
                acc = _v150;
                if (rt.truth(_v150)) {
                  const _v161: any = 294;
                  acc = _v161;
                  _v150 = _v161;
                  break _branch153;
                }
              }
              acc = _v150;
              const _v162: any = (temps[0] = _v150);
              acc = _v162;
              _v72 = _v162;
              let _v163: any = acc;
              const _v164: any = rt.global(302);
              acc = _v164;
              const _v165: any = await rt.send(_v164, "playing", []);
              acc = _v165;
              const _v166: any = 29;
              acc = _v166;
              const _v167: any = rt.op("==", ...[_v165, _v166]);
              acc = _v167;
              _v163 = _v167;
              if (rt.truth(_v167)) {
                const _v168: any = 274;
                acc = _v168;
                const _v169: any = (temps[0] = _v168);
                acc = _v169;
                _v163 = _v169;
              }
              acc = _v163;
              _v72 = _v163;
              let _v170: any = acc;
              const _v171: any = rt.global(302);
              acc = _v171;
              const _v172: any = await rt.send(_v171, "weeksOfClothing", []);
              acc = _v172;
              const _v173: any = rt.op("not", ...[_v172]);
              acc = _v173;
              _v170 = _v173;
              if (rt.truth(_v173)) {
                const _v174: any = (temps[0] ?? 0);
                acc = _v174;
                const _v175: any = 3;
                acc = _v175;
                const _v176: any = rt.op("+", ...[_v174, _v175]);
                acc = _v176;
                _v170 = _v176;
              } else {
                const _v177: any = (temps[0] ?? 0);
                acc = _v177;
                const _v178: any = rt.global(302);
                acc = _v178;
                const _v179: any = await rt.send(_v178, "wearing", []);
                acc = _v179;
                const _v180: any = 34;
                acc = _v180;
                const _v181: any = rt.op("-", ...[_v179, _v180]);
                acc = _v181;
                const _v182: any = rt.op("+", ...[_v177, _v181]);
                acc = _v182;
                _v170 = _v182;
              }
              acc = _v170;
              const _v183: any = rt.global(303);
              acc = _v183;
              const _v184: any = await rt.send(_v183, "view", [_v170]);
              acc = _v184;
              _v72 = _v184;
              const _v185: any = rt.global(303);
              acc = _v185;
              const _v186: any = await rt.send(_v185, "forceUpd", []);
              acc = _v186;
              _v72 = _v186;
              const _v187: any = await rt.call(0, "proc0_1", [], this);
              acc = _v187;
              _v72 = _v187;
              const _v188: any = await rt.call(1, "proc1_9", [], this);
              acc = _v188;
              _v72 = _v188;
              let _v189: any = acc;
              const _v190: any = rt.global(516);
              acc = _v190;
              _v189 = _v190;
              if (rt.truth(_v190)) {
                const _v191: any = -1;
                acc = _v191;
                const _v192: any = rt.object(992, "Beg");
                acc = _v192;
                const _v193: any = rt.global(517);
                acc = _v193;
                const _v194: any = await rt.send(_v193, "setCel", [_v191]);
                acc = _v194;
                const _v195: any = await rt.send(_v193, "startUpd", []);
                acc = _v195;
                const _v196: any = await rt.send(_v193, "setCycle", [_v192]);
                acc = _v196;
                _v189 = _v196;
              }
              acc = _v189;
              _v72 = _v189;
              const _v197: any = rt.global(302);
              acc = _v197;
              const _v198: any = await rt.send(_v197, "consumables", []);
              acc = _v198;
              const _v199: any = await rt.send(_v198, "pack", []);
              acc = _v199;
              _v72 = _v199;
              const _v200: any = rt.global(302);
              acc = _v200;
              const _v201: any = await rt.send(_v200, "durables", []);
              acc = _v201;
              const _v202: any = await rt.send(_v201, "pack", []);
              acc = _v202;
              _v72 = _v202;
              const _v203: any = rt.global(302);
              acc = _v203;
              const _v204: any = await rt.send(_v203, "education", []);
              acc = _v204;
              const _v205: any = await rt.send(_v204, "pack", []);
              acc = _v205;
              _v72 = _v205;
              let _v206: any = acc;
              const _v207: any = rt.global(323);
              acc = _v207;
              const _v208: any = 60;
              acc = _v208;
              const _v209: any = rt.op("<", ...[_v207, _v208]);
              acc = _v209;
              _v206 = _v209;
              if (rt.truth(_v209)) {
                const _v210: any = -1;
                acc = _v210;
                const _v211: any = 5;
                acc = _v211;
                const _v212: any = rt.global(477);
                acc = _v212;
                const _v213: any = await rt.send(_v212, "loop", [_v210]);
                acc = _v213;
                const _v214: any = await rt.send(_v212, "play", [_v211]);
                acc = _v214;
                _v206 = _v214;
              }
              acc = _v206;
              _v72 = _v206;
            } else {
              const _v215: any = rt.global(303);
              acc = _v215;
              const _v216: any = await rt.send(_v215, "show", []);
              acc = _v216;
              _v72 = _v216;
            }
            acc = _v72;
            const _v217: any = 0;
            acc = _v217;
            const _v218: any = rt.setGlobal(518, _v217);
            acc = _v218;
            const _v219: any = await rt.call(0, "proc0_1", [], this);
            acc = _v219;
            _loop220: for (;;) {
              const _v222: any = rt.global(4);
              acc = _v222;
              const _v223: any = rt.op("not", ...[_v222]);
              acc = _v223;
              if (!rt.truth(_v223)) break _loop220;
              _continue221: {
                const _v224: any = this;
                acc = _v224;
                const _v225: any = await rt.send(_v224, "doit", []);
                acc = _v225;
                const _v226: any = rt.global(3);
                acc = _v226;
                const _v227: any = await rt.call(994, "Wait", [_v226], this);
                acc = _v227;
                const _v228: any = rt.setGlobal(18, _v227);
                acc = _v228;
              }
            }
            const _v229: any = 143;
            acc = _v229;
            const _v230: any = rt.global(8);
            acc = _v230;
            const _v231: any = await rt.send(_v230, "eachElementDo", [_v229]);
            acc = _v231;
            return acc;
          },
          // SCI Game.sc: Game.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = rt.object(992, "Motion");
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = rt.object(989, "Sound");
            acc = _v3;
            const _v4: any = (temps[0] = _v3);
            acc = _v4;
            const _v5: any = 130;
            acc = _v5;
            const _v6: any = 990;
            acc = _v6;
            const _v7: any = await rt.call(994, "Load", [_v5, _v6], this);
            acc = _v7;
            const _v8: any = rt.object(994, "cast");
            acc = _v8;
            const _v9: any = rt.setGlobal(5, _v8);
            acc = _v9;
            const _v10: any = await rt.send(_v9, "add", []);
            acc = _v10;
            const _v11: any = rt.object(994, "sounds");
            acc = _v11;
            const _v12: any = rt.setGlobal(8, _v11);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "add", []);
            acc = _v13;
            const _v14: any = await rt.call(994, "GetSaveDir", [], this);
            acc = _v14;
            const _v15: any = rt.setGlobal(30, _v14);
            acc = _v15;
            const _v16: any = rt.object(996, "User");
            acc = _v16;
            const _v17: any = await rt.send(_v16, "init", []);
            acc = _v17;
            return acc;
          },
          // SCI Game.sc: Game.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 147;
            acc = _v1;
            const _v2: any = rt.global(8);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "eachElementDo", [_v1]);
            acc = _v3;
            const _v4: any = rt.global(5);
            acc = _v4;
            const _v5: any = await rt.send(_v4, "elements", []);
            acc = _v5;
            const _v6: any = 1;
            acc = _v6;
            const _v7: any = await rt.call(994, "Animate", [_v5, _v6], this);
            acc = _v7;
            let _v8: any = acc;
            const _v9: any = rt.global(58);
            acc = _v9;
            _v8 = _v9;
            if (rt.truth(_v9)) {
              const _v10: any = 0;
              acc = _v10;
              const _v11: any = rt.setGlobal(58, _v10);
              acc = _v11;
              _v8 = _v11;
              const _v12: any = 178;
              acc = _v12;
              const _v13: any = rt.global(5);
              acc = _v13;
              const _v14: any = await rt.send(_v13, "eachElementDo", [_v12]);
              acc = _v14;
              _v8 = _v14;
            }
            acc = _v8;
            let _v15: any = acc;
            const _v16: any = rt.get(this, "script");
            acc = _v16;
            _v15 = _v16;
            if (rt.truth(_v16)) {
              const _v17: any = rt.get(this, "script");
              acc = _v17;
              const _v18: any = await rt.send(_v17, "doit", []);
              acc = _v18;
              _v15 = _v18;
            }
            acc = _v15;
            let _v19: any = acc;
            const _v20: any = rt.global(2);
            acc = _v20;
            _v19 = _v20;
            if (rt.truth(_v20)) {
              const _v21: any = rt.global(2);
              acc = _v21;
              const _v22: any = await rt.send(_v21, "doit", []);
              acc = _v22;
              _v19 = _v22;
            }
            acc = _v19;
            const _v23: any = rt.object(996, "User");
            acc = _v23;
            const _v24: any = await rt.send(_v23, "doit", []);
            acc = _v24;
            let _v25: any = acc;
            const _v26: any = rt.global(13);
            acc = _v26;
            const _v27: any = rt.global(11);
            acc = _v27;
            const _v28: any = rt.op("!=", ...[_v26, _v27]);
            acc = _v28;
            _v25 = _v28;
            if (rt.truth(_v28)) {
              const _v29: any = rt.global(13);
              acc = _v29;
              const _v30: any = this;
              acc = _v30;
              const _v31: any = await rt.send(_v30, "newRoom", [_v29]);
              acc = _v31;
              _v25 = _v31;
            }
            acc = _v25;
            const _v32: any = 0;
            acc = _v32;
            const _v33: any = await rt.call(994, "GameIsRestarting", [_v32], this);
            acc = _v33;
            return acc;
          },
          // SCI Game.sc: Game.showSelf
          "showSelf": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Game.sc: Game.newRoom
          "newRoom": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0, 0, 0, 0, 0];
            const _v1: any = 103;
            acc = _v1;
            const _v2: any = rt.global(5);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "eachElementDo", [_v1]);
            acc = _v3;
            const _v4: any = rt.global(11);
            acc = _v4;
            const _v5: any = rt.setGlobal(12, _v4);
            acc = _v5;
            const _v6: any = (args[0] ?? 0);
            acc = _v6;
            const _v7: any = rt.setGlobal(11, _v6);
            acc = _v7;
            const _v8: any = (args[0] ?? 0);
            acc = _v8;
            const _v9: any = rt.setGlobal(13, _v8);
            acc = _v9;
            const _v10: any = (args[0] ?? 0);
            acc = _v10;
            const _v11: any = await rt.call(994, "FlushResources", [_v10], this);
            acc = _v11;
            const _v12: any = rt.global(21);
            acc = _v12;
            const _v13: any = 1;
            acc = _v13;
            const _v14: any = this;
            acc = _v14;
            const _v15: any = await rt.send(_v14, "setCursor", [_v12, _v13]);
            acc = _v15;
            const _v16: any = (temps[4] = _v15);
            acc = _v16;
            const _v17: any = rt.global(11);
            acc = _v17;
            const _v18: any = (temps[4] ?? 0);
            acc = _v18;
            const _v19: any = await rt.call(994, "HaveMouse", [], this);
            acc = _v19;
            const _v20: any = this;
            acc = _v20;
            const _v21: any = await rt.send(_v20, "startRoom", [_v17]);
            acc = _v21;
            const _v22: any = await rt.send(_v20, "checkAni", []);
            acc = _v22;
            const _v23: any = await rt.send(_v20, "setCursor", [_v18, _v19]);
            acc = _v23;
            _loop24: for (;;) {
              const _v26: any = 3;
              acc = _v26;
              const _v27: any = rt.object(999, "Event");
              acc = _v27;
              const _v28: any = await rt.send(_v27, "new", [_v26]);
              acc = _v28;
              const _v29: any = (temps[5] = _v28);
              acc = _v29;
              const _v30: any = await rt.send(_v29, "type", []);
              acc = _v30;
              if (!rt.truth(_v30)) break _loop24;
              _continue25: {
                const _v31: any = (temps[5] ?? 0);
                acc = _v31;
                const _v32: any = await rt.send(_v31, "dispose", []);
                acc = _v32;
              }
            }
            const _v33: any = (temps[5] ?? 0);
            acc = _v33;
            const _v34: any = await rt.send(_v33, "dispose", []);
            acc = _v34;
            return acc;
          },
          // SCI Game.sc: Game.checkAni
          "checkAni": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            return acc;
          },
          // SCI Game.sc: Game.startRoom
          "startRoom": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.global(14);
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = await rt.call(994, "SetDebug", [], this);
              acc = _v3;
              _v1 = _v3;
            }
            acc = _v1;
            const _v4: any = (args[0] ?? 0);
            acc = _v4;
            const _v5: any = await rt.call(994, "ScriptID", [_v4], this);
            acc = _v5;
            const _v6: any = rt.setGlobal(2, _v5);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "init", []);
            acc = _v7;
            return acc;
          },
          // SCI Game.sc: Game.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = await rt.send(_v1, "localize", []);
            acc = _v2;
            let _v3: any = 0;
            if (!rt.truth(_v3)) {
              const _v4: any = (args[0] ?? 0);
              acc = _v4;
              const _v5: any = rt.global(2);
              acc = _v5;
              const _v6: any = await rt.send(_v5, "handleEvent", [_v4]);
              acc = _v6;
              _v3 = _v6;
            }
            if (!rt.truth(_v3)) {
              let _v7: any = 1;
              if (rt.truth(_v7)) {
                const _v8: any = rt.get(this, "script");
                acc = _v8;
                _v7 = _v8;
              }
              if (rt.truth(_v7)) {
                const _v9: any = (args[0] ?? 0);
                acc = _v9;
                const _v10: any = rt.get(this, "script");
                acc = _v10;
                const _v11: any = await rt.send(_v10, "handleEvent", [_v9]);
                acc = _v11;
                _v7 = _v11;
              }
              acc = _v7;
              _v3 = _v7;
            }
            acc = _v3;
            const _v12: any = (args[0] ?? 0);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "claimed", []);
            acc = _v13;
            return acc;
          },
          // SCI Game.sc: Game.changeScore
          "changeScore": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Game.sc: Game.restart
          "restart": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = await rt.call(994, "SetPort", [_v1], this);
            acc = _v2;
            let _v3: any = acc;
            const _v4: any = rt.global(502);
            acc = _v4;
            _v3 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = rt.global(502);
              acc = _v5;
              const _v6: any = await rt.send(_v5, "dispose", []);
              acc = _v6;
              _v3 = _v6;
            }
            acc = _v3;
            let _v7: any = acc;
            const _v8: any = rt.global(25);
            acc = _v8;
            _v7 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = rt.global(25);
              acc = _v9;
              const _v10: any = await rt.send(_v9, "dispose", []);
              acc = _v10;
              _v7 = _v10;
            }
            acc = _v7;
            const _v11: any = await rt.call(994, "RestartGame", [], this);
            acc = _v11;
            return acc;
          },
          // SCI Game.sc: Game.save
          "save": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.call(990, "proc990_0", [], this);
            acc = _v1;
            return acc;
          },
          // SCI Game.sc: Game.restore
          "restore": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.call(990, "proc990_1", [], this);
            acc = _v1;
            return acc;
          },
          // SCI Game.sc: Game.setSpeed
          "setSpeed": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = rt.global(3);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            const _v4: any = rt.setGlobal(3, _v3);
            acc = _v4;
            const _v5: any = (temps[0] ?? 0);
            acc = _v5;
            return _v5;
            return acc;
          },
          // SCI Game.sc: Game.setCursor
          "setCursor": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = rt.global(19);
            acc = _v1;
            const _v2: any = (temps[0] = _v1);
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            const _v4: any = rt.setGlobal(19, _v3);
            acc = _v4;
            let _v5: any = acc;
            const _v6: any = argc;
            acc = _v6;
            const _v7: any = 1;
            acc = _v7;
            const _v8: any = rt.op("==", ...[_v6, _v7]);
            acc = _v8;
            _v5 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = (args[0] ?? 0);
              acc = _v9;
              const _v10: any = await rt.call(994, "SetCursor", [_v9], this);
              acc = _v10;
              _v5 = _v10;
            } else {
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = (args[1] ?? 0);
              acc = _v12;
              const _v13: any = await rt.call(994, "SetCursor", [_v11, _v12], this);
              acc = _v13;
              _v5 = _v13;
            }
            acc = _v5;
            const _v14: any = (temps[0] ?? 0);
            acc = _v14;
            return _v14;
            return acc;
          },
          // SCI Game.sc: Game.showMem
          "showMem": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = "Heap: %u\nLargest: %u\nHunk: %uK\nLargest: %u";
            acc = _v1;
            const _v2: any = 1;
            acc = _v2;
            const _v3: any = await rt.call(994, "MemoryInfo", [_v2], this);
            acc = _v3;
            const _v4: any = 0;
            acc = _v4;
            const _v5: any = await rt.call(994, "MemoryInfo", [_v4], this);
            acc = _v5;
            const _v6: any = 3;
            acc = _v6;
            const _v7: any = await rt.call(994, "MemoryInfo", [_v6], this);
            acc = _v7;
            const _v8: any = 6;
            acc = _v8;
            const _v9: any = rt.op(">>", ...[_v7, _v8]);
            acc = _v9;
            const _v10: any = 2;
            acc = _v10;
            const _v11: any = await rt.call(994, "MemoryInfo", [_v10], this);
            acc = _v11;
            const _v12: any = await rt.call(255, "Printf", [_v1, _v3, _v5, _v9, _v11], this);
            acc = _v12;
            return acc;
          },
          // SCI Game.sc: Game.notify
          "notify": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Game.sc: Game.setScript
          "setScript": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "script");
              acc = _v3;
              const _v4: any = await rt.send(_v3, "dispose", []);
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            let _v5: any = acc;
            const _v6: any = (args[0] ?? 0);
            acc = _v6;
            const _v7: any = rt.set(this, "script", _v6);
            acc = _v7;
            _v5 = _v7;
            if (rt.truth(_v7)) {
              const _v8: any = this;
              acc = _v8;
              const _v9: any = args.slice(1, argc);
              acc = _v9;
              const _v10: any = rt.get(this, "script");
              acc = _v10;
              const _v11: any = await rt.send(_v10, "init", [_v8, ..._v9]);
              acc = _v11;
              _v5 = _v11;
            }
            acc = _v5;
            return acc;
          },
          // SCI Game.sc: Game.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "script");
              acc = _v3;
              const _v4: any = await rt.send(_v3, "cue", []);
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "Rm",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"script": 0, "number": 0, "timer": 0, "picture": 0, "style": -1, "controls": 0},
        methods: {
          // SCI Game.sc: Rm.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = rt.global(11);
            acc = _v1;
            const _v2: any = rt.set(this, "number", _v1);
            acc = _v2;
            const _v3: any = rt.object(994, "controls");
            acc = _v3;
            const _v4: any = rt.set(this, "controls", _v3);
            acc = _v4;
            const _v5: any = await rt.send(_v4, "add", []);
            acc = _v5;
            let _v6: any = acc;
            const _v7: any = rt.get(this, "picture");
            acc = _v7;
            _v6 = _v7;
            if (rt.truth(_v7)) {
              const _v8: any = rt.get(this, "picture");
              acc = _v8;
              const _v9: any = this;
              acc = _v9;
              const _v10: any = await rt.send(_v9, "drawPic", [_v8]);
              acc = _v10;
              _v6 = _v10;
            }
            acc = _v6;
            return acc;
          },
          // SCI Game.sc: Rm.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "script");
              acc = _v3;
              const _v4: any = await rt.send(_v3, "doit", []);
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            return acc;
          },
          // SCI Game.sc: Rm.setScript
          "setScript": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            const _v3: any = await rt.call(994, "IsObject", [_v2], this);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = rt.get(this, "script");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "dispose", []);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            let _v6: any = acc;
            const _v7: any = (args[0] ?? 0);
            acc = _v7;
            const _v8: any = rt.set(this, "script", _v7);
            acc = _v8;
            _v6 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = this;
              acc = _v9;
              const _v10: any = args.slice(1, argc);
              acc = _v10;
              const _v11: any = rt.get(this, "script");
              acc = _v11;
              const _v12: any = await rt.send(_v11, "init", [_v9, ..._v10]);
              acc = _v12;
              _v6 = _v12;
            }
            acc = _v6;
            return acc;
          },
          // SCI Game.sc: Rm.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "script");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "script");
              acc = _v3;
              const _v4: any = await rt.send(_v3, "cue", []);
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            return acc;
          },
          // SCI Game.sc: Rm.dispose
          "dispose": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "controls");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.get(this, "controls");
              acc = _v3;
              const _v4: any = await rt.send(_v3, "dispose", []);
              acc = _v4;
              _v1 = _v4;
            }
            acc = _v1;
            let _v5: any = acc;
            const _v6: any = rt.get(this, "script");
            acc = _v6;
            const _v7: any = await rt.call(994, "IsObject", [_v6], this);
            acc = _v7;
            _v5 = _v7;
            if (rt.truth(_v7)) {
              const _v8: any = rt.get(this, "script");
              acc = _v8;
              const _v9: any = await rt.send(_v8, "dispose", []);
              acc = _v9;
              _v5 = _v9;
            }
            acc = _v5;
            const _v10: any = 148;
            acc = _v10;
            const _v11: any = this;
            acc = _v11;
            const _v12: any = rt.global(8);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "eachElementDo", [_v10, _v11]);
            acc = _v13;
            const _acc14: any = acc;
            const _v15: any = rt.get(this, "number");
            acc = _v15;
            const _args16: any[] = [_v15];
            await rt.call(994, "DisposeScript", _args16, this);
            const _v17: any = _args16.length === 2 ? _args16[1] : _acc14;
            acc = _v17;
            return acc;
          },
          // SCI Game.sc: Rm.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "controls");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = (args[0] ?? 0);
              acc = _v3;
              const _v4: any = rt.get(this, "controls");
              acc = _v4;
              const _v5: any = await rt.send(_v4, "handleEvent", [_v3]);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            const _v6: any = (args[0] ?? 0);
            acc = _v6;
            const _v7: any = await rt.send(_v6, "claimed", []);
            acc = _v7;
            return acc;
          },
          // SCI Game.sc: Rm.newRoom
          "newRoom": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = rt.setGlobal(13, _v1);
            acc = _v2;
            return acc;
          },
          // SCI Game.sc: Rm.drawPic
          "drawPic": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = -1;
            acc = _v1;
            const _v2: any = rt.setGlobal(57, _v1);
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            let _v4: any = acc;
            _branch5: {
              const _v6: any = argc;
              acc = _v6;
              const _v7: any = 2;
              acc = _v7;
              const _v8: any = rt.op("==", ...[_v6, _v7]);
              acc = _v8;
              _v4 = _v8;
              acc = _v4;
              if (rt.truth(_v4)) {
                const _v9: any = (args[1] ?? 0);
                acc = _v9;
                _v4 = _v9;
                break _branch5;
              }
              const _v10: any = rt.get(this, "style");
              acc = _v10;
              const _v11: any = -1;
              acc = _v11;
              const _v12: any = rt.op("!=", ...[_v10, _v11]);
              acc = _v12;
              _v4 = _v12;
              acc = _v4;
              if (rt.truth(_v4)) {
                const _v13: any = rt.get(this, "style");
                acc = _v13;
                _v4 = _v13;
                break _branch5;
              }
              const _v14: any = rt.global(17);
              acc = _v14;
              _v4 = _v14;
              break _branch5;
            }
            acc = _v4;
            const _v15: any = await rt.call(994, "DrawPic", [_v3, _v4], this);
            acc = _v15;
            return acc;
          },
        },
      },
      {
        name: "RU",
        className: "Code",
        parent: {"script": 999, "name": "Code"},
        isClass: false,
        properties: {},
        methods: {
          // SCI Game.sc: RU.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "underBits", []);
            acc = _v3;
            _v1 = _v3;
            if (rt.truth(_v3)) {
              const _v4: any = (args[0] ?? 0);
              acc = _v4;
              const _v5: any = await rt.send(_v4, "signal", []);
              acc = _v5;
              const _v6: any = (temps[0] = _v5);
              acc = _v6;
              const _v7: any = 1;
              acc = _v7;
              const _v8: any = rt.op("|", ...[_v6, _v7]);
              acc = _v8;
              const _v9: any = (temps[0] = _v8);
              acc = _v9;
              _v1 = _v9;
              const _v10: any = (temps[0] ?? 0);
              acc = _v10;
              const _v11: any = (args[0] ?? 0);
              acc = _v11;
              const _v12: any = await rt.send(_v11, "signal", [_v10]);
              acc = _v12;
              _v1 = _v12;
            }
            acc = _v1;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {},
  });
}
