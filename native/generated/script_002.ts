// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/introRoom.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 37ccda8c253d464cf8fd355c06c2e06956a2ac8685f8e4dd2ab4251c3ce4269d
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(2, {
    name: "introRoom",
    uses: [0, 994, 998, 999],
    locals: [0, 0, 0],
    objects: [
      {
        name: "introRoom",
        className: "Rm",
        parent: {"script": 994, "name": "Rm"},
        isClass: false,
        properties: {},
        methods: {
          // SCI introRoom.sc: introRoom.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 2;
            acc = _v1;
            const _v2: any = rt.set(this, "style", _v1);
            acc = _v2;
            const _v3: any = await rt.superSend(this, {"script": 2, "name": "introRoom"}, "init", []);
            acc = _v3;
            const _v4: any = rt.object(2, "introDuction");
            acc = _v4;
            const _v5: any = this;
            acc = _v5;
            const _v6: any = await rt.send(_v5, "setScript", [_v4]);
            acc = _v6;
            return acc;
          },
          // SCI introRoom.sc: introRoom.handleEvent
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
              _v2 = _v7;
            }
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v8: any = 1;
              acc = _v8;
              const _v9: any = (args[0] ?? 0);
              acc = _v9;
              const _v10: any = await rt.send(_v9, "claimed", [_v8]);
              acc = _v10;
              _v1 = _v10;
              let _v11: any = acc;
              let _v12: any = 1;
              if (rt.truth(_v12)) {
                let _v13: any = 0;
                if (!rt.truth(_v13)) {
                  const _v14: any = (args[0] ?? 0);
                  acc = _v14;
                  const _v15: any = await rt.send(_v14, "type", []);
                  acc = _v15;
                  const _v16: any = 1;
                  acc = _v16;
                  const _v17: any = rt.op("==", ...[_v15, _v16]);
                  acc = _v17;
                  _v13 = _v17;
                }
                if (!rt.truth(_v13)) {
                  const _v18: any = (args[0] ?? 0);
                  acc = _v18;
                  const _v19: any = await rt.send(_v18, "type", []);
                  acc = _v19;
                  const _v20: any = 4;
                  acc = _v20;
                  const _v21: any = rt.op("==", ...[_v19, _v20]);
                  acc = _v21;
                  _v13 = _v21;
                }
                acc = _v13;
                _v12 = _v13;
              }
              if (rt.truth(_v12)) {
                const _v22: any = (args[0] ?? 0);
                acc = _v22;
                const _v23: any = await rt.send(_v22, "y", []);
                acc = _v23;
                const _v24: any = 10;
                acc = _v24;
                const _v25: any = rt.op(">", ...[_v23, _v24]);
                acc = _v25;
                _v12 = _v25;
              }
              acc = _v12;
              _v11 = _v12;
              if (rt.truth(_v12)) {
                let _v26: any = acc;
                const _v27: any = rt.local(2, 0);
                acc = _v27;
                _v26 = _v27;
                if (rt.truth(_v27)) {
                  const _v28: any = rt.local(2, 0);
                  acc = _v28;
                  const _v29: any = await rt.send(_v28, "hide", []);
                  acc = _v29;
                  _v26 = _v29;
                }
                acc = _v26;
                _v11 = _v26;
                let _v30: any = acc;
                const _v31: any = rt.local(2, 1);
                acc = _v31;
                _v30 = _v31;
                if (rt.truth(_v31)) {
                  const _v32: any = rt.local(2, 1);
                  acc = _v32;
                  const _v33: any = await rt.send(_v32, "hide", []);
                  acc = _v33;
                  _v30 = _v33;
                }
                acc = _v30;
                _v11 = _v30;
                let _v34: any = acc;
                const _v35: any = rt.local(2, 2);
                acc = _v35;
                _v34 = _v35;
                if (rt.truth(_v35)) {
                  const _v36: any = rt.local(2, 2);
                  acc = _v36;
                  const _v37: any = await rt.send(_v36, "hide", []);
                  acc = _v37;
                  _v34 = _v37;
                }
                acc = _v34;
                _v11 = _v34;
                const _v38: any = await rt.call(0, "proc0_1", [], this);
                acc = _v38;
                _v11 = _v38;
                const _v39: any = 1;
                acc = _v39;
                const _v40: any = rt.global(2);
                acc = _v40;
                const _v41: any = await rt.send(_v40, "newRoom", [_v39]);
                acc = _v41;
                _v11 = _v41;
              }
              acc = _v11;
              _v1 = _v11;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "introDuction",
        className: "Script",
        parent: {"script": 999, "name": "Script"},
        isClass: false,
        properties: {},
        methods: {
          // SCI introRoom.sc: introDuction.changeState
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
                const _v7: any = 3;
                acc = _v7;
                const _v8: any = await rt.call(2, "DrawPic", [_v6, _v7], this);
                acc = _v8;
                _v1 = _v8;
                const _v9: any = rt.global(477);
                acc = _v9;
                const _v10: any = await rt.send(_v9, "number", []);
                acc = _v10;
                const _v11: any = rt.global(477);
                acc = _v11;
                const _v12: any = 10;
                acc = _v12;
                const _v13: any = -1;
                acc = _v13;
                const _v14: any = rt.global(477);
                acc = _v14;
                const _v15: any = await rt.send(_v14, "playBed", [_v10, _v11, _v12, _v13]);
                acc = _v15;
                _v1 = _v15;
                const _v16: any = 4;
                acc = _v16;
                const _v17: any = rt.set(this, "seconds", _v16);
                acc = _v17;
                _v1 = _v17;
                break _branch4;
              }
              const _v18: any = 1;
              acc = _v18;
              _v1 = rt.op("==", _v3, _v18);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v19: any = rt.object(2, "littlepic1");
                acc = _v19;
                const _v20: any = rt.setLocal(2, 0, _v19);
                acc = _v20;
                _v1 = _v20;
                const _v21: any = rt.object(2, "littlename1");
                acc = _v21;
                const _v22: any = rt.setLocal(2, 1, _v21);
                acc = _v22;
                _v1 = _v22;
                const _v23: any = 1;
                acc = _v23;
                const _v24: any = 2;
                acc = _v24;
                const _v25: any = await rt.call(2, "DrawPic", [_v23, _v24], this);
                acc = _v25;
                _v1 = _v25;
                const _v26: any = 0;
                acc = _v26;
                const _v27: any = 0;
                acc = _v27;
                const _v28: any = rt.object(2, "littlepic1");
                acc = _v28;
                const _v29: any = await rt.send(_v28, "setLoop", [_v26]);
                acc = _v29;
                const _v30: any = await rt.send(_v28, "setCel", [_v27]);
                acc = _v30;
                const _v31: any = await rt.send(_v28, "init", []);
                acc = _v31;
                _v1 = _v31;
                const _v32: any = 0;
                acc = _v32;
                const _v33: any = 1;
                acc = _v33;
                const _v34: any = rt.object(2, "littlename1");
                acc = _v34;
                const _v35: any = await rt.send(_v34, "setLoop", [_v32]);
                acc = _v35;
                const _v36: any = await rt.send(_v34, "setCel", [_v33]);
                acc = _v36;
                const _v37: any = await rt.send(_v34, "init", []);
                acc = _v37;
                _v1 = _v37;
                const _v38: any = 4;
                acc = _v38;
                const _v39: any = rt.set(this, "seconds", _v38);
                acc = _v39;
                _v1 = _v39;
                break _branch4;
              }
              const _v40: any = 2;
              acc = _v40;
              _v1 = rt.op("==", _v3, _v40);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v41: any = 1;
                acc = _v41;
                const _v42: any = 2;
                acc = _v42;
                const _v43: any = await rt.call(2, "DrawPic", [_v41, _v42], this);
                acc = _v43;
                _v1 = _v43;
                const _v44: any = 1;
                acc = _v44;
                const _v45: any = 0;
                acc = _v45;
                const _v46: any = rt.object(2, "littlepic1");
                acc = _v46;
                const _v47: any = await rt.send(_v46, "setLoop", [_v44]);
                acc = _v47;
                const _v48: any = await rt.send(_v46, "setCel", [_v45]);
                acc = _v48;
                _v1 = _v48;
                const _v49: any = 1;
                acc = _v49;
                const _v50: any = 1;
                acc = _v50;
                const _v51: any = rt.object(2, "littlename1");
                acc = _v51;
                const _v52: any = await rt.send(_v51, "setLoop", [_v49]);
                acc = _v52;
                const _v53: any = await rt.send(_v51, "setCel", [_v50]);
                acc = _v53;
                _v1 = _v53;
                const _v54: any = 3;
                acc = _v54;
                const _v55: any = rt.set(this, "seconds", _v54);
                acc = _v55;
                _v1 = _v55;
                break _branch4;
              }
              const _v56: any = 3;
              acc = _v56;
              _v1 = rt.op("==", _v3, _v56);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v57: any = 1;
                acc = _v57;
                const _v58: any = 2;
                acc = _v58;
                const _v59: any = await rt.call(2, "DrawPic", [_v57, _v58], this);
                acc = _v59;
                _v1 = _v59;
                const _v60: any = 2;
                acc = _v60;
                const _v61: any = 0;
                acc = _v61;
                const _v62: any = rt.object(2, "littlepic1");
                acc = _v62;
                const _v63: any = await rt.send(_v62, "setLoop", [_v60]);
                acc = _v63;
                const _v64: any = await rt.send(_v62, "setCel", [_v61]);
                acc = _v64;
                _v1 = _v64;
                const _v65: any = 2;
                acc = _v65;
                const _v66: any = 1;
                acc = _v66;
                const _v67: any = rt.object(2, "littlename1");
                acc = _v67;
                const _v68: any = await rt.send(_v67, "setLoop", [_v65]);
                acc = _v68;
                const _v69: any = await rt.send(_v67, "setCel", [_v66]);
                acc = _v69;
                _v1 = _v69;
                const _v70: any = 2;
                acc = _v70;
                const _v71: any = rt.set(this, "seconds", _v70);
                acc = _v71;
                _v1 = _v71;
                break _branch4;
              }
              const _v72: any = 4;
              acc = _v72;
              _v1 = rt.op("==", _v3, _v72);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v73: any = rt.object(2, "littlepic1");
                acc = _v73;
                const _v74: any = await rt.send(_v73, "dispose", []);
                acc = _v74;
                _v1 = _v74;
                const _v75: any = rt.object(2, "littlename1");
                acc = _v75;
                const _v76: any = await rt.send(_v75, "dispose", []);
                acc = _v76;
                _v1 = _v76;
                const _v77: any = rt.object(2, "littlepic2");
                acc = _v77;
                const _v78: any = rt.setLocal(2, 0, _v77);
                acc = _v78;
                _v1 = _v78;
                const _v79: any = rt.object(2, "littlename2");
                acc = _v79;
                const _v80: any = rt.setLocal(2, 1, _v79);
                acc = _v80;
                _v1 = _v80;
                const _v81: any = 2;
                acc = _v81;
                const _v82: any = 3;
                acc = _v82;
                const _v83: any = await rt.call(2, "DrawPic", [_v81, _v82], this);
                acc = _v83;
                _v1 = _v83;
                const _v84: any = 0;
                acc = _v84;
                const _v85: any = 0;
                acc = _v85;
                const _v86: any = rt.object(2, "littlepic2");
                acc = _v86;
                const _v87: any = await rt.send(_v86, "setLoop", [_v84]);
                acc = _v87;
                const _v88: any = await rt.send(_v86, "setCel", [_v85]);
                acc = _v88;
                const _v89: any = await rt.send(_v86, "init", []);
                acc = _v89;
                _v1 = _v89;
                const _v90: any = rt.object(2, "littlename1");
                acc = _v90;
                const _v91: any = await rt.send(_v90, "hide", []);
                acc = _v91;
                _v1 = _v91;
                const _v92: any = 0;
                acc = _v92;
                const _v93: any = 1;
                acc = _v93;
                const _v94: any = rt.object(2, "littlename2");
                acc = _v94;
                const _v95: any = await rt.send(_v94, "setLoop", [_v92]);
                acc = _v95;
                const _v96: any = await rt.send(_v94, "setCel", [_v93]);
                acc = _v96;
                const _v97: any = await rt.send(_v94, "init", []);
                acc = _v97;
                _v1 = _v97;
                const _v98: any = 4;
                acc = _v98;
                const _v99: any = rt.set(this, "seconds", _v98);
                acc = _v99;
                _v1 = _v99;
                break _branch4;
              }
              const _v100: any = 5;
              acc = _v100;
              _v1 = rt.op("==", _v3, _v100);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v101: any = 2;
                acc = _v101;
                const _v102: any = 3;
                acc = _v102;
                const _v103: any = await rt.call(2, "DrawPic", [_v101, _v102], this);
                acc = _v103;
                _v1 = _v103;
                const _v104: any = 1;
                acc = _v104;
                const _v105: any = 0;
                acc = _v105;
                const _v106: any = rt.object(2, "littlepic2");
                acc = _v106;
                const _v107: any = await rt.send(_v106, "setLoop", [_v104]);
                acc = _v107;
                const _v108: any = await rt.send(_v106, "setCel", [_v105]);
                acc = _v108;
                _v1 = _v108;
                const _v109: any = 1;
                acc = _v109;
                const _v110: any = 1;
                acc = _v110;
                const _v111: any = rt.object(2, "littlename2");
                acc = _v111;
                const _v112: any = await rt.send(_v111, "setLoop", [_v109]);
                acc = _v112;
                const _v113: any = await rt.send(_v111, "setCel", [_v110]);
                acc = _v113;
                _v1 = _v113;
                const _v114: any = 3;
                acc = _v114;
                const _v115: any = rt.set(this, "seconds", _v114);
                acc = _v115;
                _v1 = _v115;
                break _branch4;
              }
              const _v116: any = 6;
              acc = _v116;
              _v1 = rt.op("==", _v3, _v116);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v117: any = 2;
                acc = _v117;
                const _v118: any = 3;
                acc = _v118;
                const _v119: any = await rt.call(2, "DrawPic", [_v117, _v118], this);
                acc = _v119;
                _v1 = _v119;
                const _v120: any = 2;
                acc = _v120;
                const _v121: any = 0;
                acc = _v121;
                const _v122: any = rt.object(2, "littlepic2");
                acc = _v122;
                const _v123: any = await rt.send(_v122, "setLoop", [_v120]);
                acc = _v123;
                const _v124: any = await rt.send(_v122, "setCel", [_v121]);
                acc = _v124;
                _v1 = _v124;
                const _v125: any = 2;
                acc = _v125;
                const _v126: any = 1;
                acc = _v126;
                const _v127: any = rt.object(2, "littlename2");
                acc = _v127;
                const _v128: any = await rt.send(_v127, "setLoop", [_v125]);
                acc = _v128;
                const _v129: any = await rt.send(_v127, "setCel", [_v126]);
                acc = _v129;
                _v1 = _v129;
                const _v130: any = 2;
                acc = _v130;
                const _v131: any = rt.set(this, "seconds", _v130);
                acc = _v131;
                _v1 = _v131;
                break _branch4;
              }
              const _v132: any = 7;
              acc = _v132;
              _v1 = rt.op("==", _v3, _v132);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v133: any = rt.object(2, "littlepic2");
                acc = _v133;
                const _v134: any = await rt.send(_v133, "dispose", []);
                acc = _v134;
                _v1 = _v134;
                const _v135: any = rt.object(2, "littlename2");
                acc = _v135;
                const _v136: any = await rt.send(_v135, "dispose", []);
                acc = _v136;
                _v1 = _v136;
                const _v137: any = rt.object(2, "littlepic3");
                acc = _v137;
                const _v138: any = rt.setLocal(2, 0, _v137);
                acc = _v138;
                _v1 = _v138;
                const _v139: any = rt.object(2, "littlename3");
                acc = _v139;
                const _v140: any = rt.setLocal(2, 1, _v139);
                acc = _v140;
                _v1 = _v140;
                const _v141: any = 3;
                acc = _v141;
                const _v142: any = 2;
                acc = _v142;
                const _v143: any = await rt.call(2, "DrawPic", [_v141, _v142], this);
                acc = _v143;
                _v1 = _v143;
                const _v144: any = 0;
                acc = _v144;
                const _v145: any = 0;
                acc = _v145;
                const _v146: any = rt.object(2, "littlepic3");
                acc = _v146;
                const _v147: any = await rt.send(_v146, "setLoop", [_v144]);
                acc = _v147;
                const _v148: any = await rt.send(_v146, "setCel", [_v145]);
                acc = _v148;
                const _v149: any = await rt.send(_v146, "init", []);
                acc = _v149;
                _v1 = _v149;
                const _v150: any = rt.object(2, "littlename2");
                acc = _v150;
                const _v151: any = await rt.send(_v150, "hide", []);
                acc = _v151;
                _v1 = _v151;
                const _v152: any = 0;
                acc = _v152;
                const _v153: any = 1;
                acc = _v153;
                const _v154: any = rt.object(2, "littlename3");
                acc = _v154;
                const _v155: any = await rt.send(_v154, "setLoop", [_v152]);
                acc = _v155;
                const _v156: any = await rt.send(_v154, "setCel", [_v153]);
                acc = _v156;
                const _v157: any = await rt.send(_v154, "init", []);
                acc = _v157;
                _v1 = _v157;
                const _v158: any = 4;
                acc = _v158;
                const _v159: any = rt.set(this, "seconds", _v158);
                acc = _v159;
                _v1 = _v159;
                break _branch4;
              }
              const _v160: any = 8;
              acc = _v160;
              _v1 = rt.op("==", _v3, _v160);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v161: any = 3;
                acc = _v161;
                const _v162: any = 2;
                acc = _v162;
                const _v163: any = await rt.call(2, "DrawPic", [_v161, _v162], this);
                acc = _v163;
                _v1 = _v163;
                const _v164: any = 1;
                acc = _v164;
                const _v165: any = 0;
                acc = _v165;
                const _v166: any = rt.object(2, "littlepic3");
                acc = _v166;
                const _v167: any = await rt.send(_v166, "setLoop", [_v164]);
                acc = _v167;
                const _v168: any = await rt.send(_v166, "setCel", [_v165]);
                acc = _v168;
                _v1 = _v168;
                const _v169: any = 1;
                acc = _v169;
                const _v170: any = 1;
                acc = _v170;
                const _v171: any = rt.object(2, "littlename3");
                acc = _v171;
                const _v172: any = await rt.send(_v171, "setLoop", [_v169]);
                acc = _v172;
                const _v173: any = await rt.send(_v171, "setCel", [_v170]);
                acc = _v173;
                _v1 = _v173;
                const _v174: any = 3;
                acc = _v174;
                const _v175: any = rt.set(this, "seconds", _v174);
                acc = _v175;
                _v1 = _v175;
                break _branch4;
              }
              const _v176: any = 9;
              acc = _v176;
              _v1 = rt.op("==", _v3, _v176);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v177: any = 3;
                acc = _v177;
                const _v178: any = 2;
                acc = _v178;
                const _v179: any = await rt.call(2, "DrawPic", [_v177, _v178], this);
                acc = _v179;
                _v1 = _v179;
                const _v180: any = 1;
                acc = _v180;
                const _v181: any = 2;
                acc = _v181;
                const _v182: any = rt.object(2, "littlename3");
                acc = _v182;
                const _v183: any = await rt.send(_v182, "setLoop", [_v180]);
                acc = _v183;
                const _v184: any = await rt.send(_v182, "setCel", [_v181]);
                acc = _v184;
                _v1 = _v184;
                const _v185: any = 3;
                acc = _v185;
                const _v186: any = rt.set(this, "seconds", _v185);
                acc = _v186;
                _v1 = _v186;
                break _branch4;
              }
              const _v187: any = 10;
              acc = _v187;
              _v1 = rt.op("==", _v3, _v187);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v188: any = 3;
                acc = _v188;
                const _v189: any = 2;
                acc = _v189;
                const _v190: any = await rt.call(2, "DrawPic", [_v188, _v189], this);
                acc = _v190;
                _v1 = _v190;
                const _v191: any = 2;
                acc = _v191;
                const _v192: any = 0;
                acc = _v192;
                const _v193: any = rt.object(2, "littlepic3");
                acc = _v193;
                const _v194: any = await rt.send(_v193, "setLoop", [_v191]);
                acc = _v194;
                const _v195: any = await rt.send(_v193, "setCel", [_v192]);
                acc = _v195;
                _v1 = _v195;
                const _v196: any = 2;
                acc = _v196;
                const _v197: any = 1;
                acc = _v197;
                const _v198: any = rt.object(2, "littlename3");
                acc = _v198;
                const _v199: any = await rt.send(_v198, "setLoop", [_v196]);
                acc = _v199;
                const _v200: any = await rt.send(_v198, "setCel", [_v197]);
                acc = _v200;
                _v1 = _v200;
                const _v201: any = 3;
                acc = _v201;
                const _v202: any = rt.set(this, "seconds", _v201);
                acc = _v202;
                _v1 = _v202;
                break _branch4;
              }
              const _v203: any = 11;
              acc = _v203;
              _v1 = rt.op("==", _v3, _v203);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v204: any = 3;
                acc = _v204;
                const _v205: any = 2;
                acc = _v205;
                const _v206: any = await rt.call(2, "DrawPic", [_v204, _v205], this);
                acc = _v206;
                _v1 = _v206;
                const _v207: any = 2;
                acc = _v207;
                const _v208: any = 2;
                acc = _v208;
                const _v209: any = rt.object(2, "littlename3");
                acc = _v209;
                const _v210: any = await rt.send(_v209, "setLoop", [_v207]);
                acc = _v210;
                const _v211: any = await rt.send(_v209, "setCel", [_v208]);
                acc = _v211;
                _v1 = _v211;
                const _v212: any = 2;
                acc = _v212;
                const _v213: any = rt.set(this, "seconds", _v212);
                acc = _v213;
                _v1 = _v213;
                break _branch4;
              }
              const _v214: any = 12;
              acc = _v214;
              _v1 = rt.op("==", _v3, _v214);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v215: any = rt.object(2, "littlepic3");
                acc = _v215;
                const _v216: any = await rt.send(_v215, "dispose", []);
                acc = _v216;
                _v1 = _v216;
                const _v217: any = rt.object(2, "littlename3");
                acc = _v217;
                const _v218: any = await rt.send(_v217, "dispose", []);
                acc = _v218;
                _v1 = _v218;
                const _v219: any = rt.object(2, "littlepic4");
                acc = _v219;
                const _v220: any = rt.setLocal(2, 0, _v219);
                acc = _v220;
                _v1 = _v220;
                const _v221: any = rt.object(2, "littlename4top");
                acc = _v221;
                const _v222: any = rt.setLocal(2, 1, _v221);
                acc = _v222;
                _v1 = _v222;
                const _v223: any = rt.object(2, "littlename4bot");
                acc = _v223;
                const _v224: any = rt.setLocal(2, 2, _v223);
                acc = _v224;
                _v1 = _v224;
                const _v225: any = 4;
                acc = _v225;
                const _v226: any = 3;
                acc = _v226;
                const _v227: any = await rt.call(2, "DrawPic", [_v225, _v226], this);
                acc = _v227;
                _v1 = _v227;
                const _v228: any = 0;
                acc = _v228;
                const _v229: any = 0;
                acc = _v229;
                const _v230: any = rt.object(2, "littlepic4");
                acc = _v230;
                const _v231: any = await rt.send(_v230, "setLoop", [_v228]);
                acc = _v231;
                const _v232: any = await rt.send(_v230, "setCel", [_v229]);
                acc = _v232;
                const _v233: any = await rt.send(_v230, "init", []);
                acc = _v233;
                _v1 = _v233;
                const _v234: any = 0;
                acc = _v234;
                const _v235: any = 1;
                acc = _v235;
                const _v236: any = rt.object(2, "littlename4top");
                acc = _v236;
                const _v237: any = await rt.send(_v236, "setLoop", [_v234]);
                acc = _v237;
                const _v238: any = await rt.send(_v236, "setCel", [_v235]);
                acc = _v238;
                const _v239: any = await rt.send(_v236, "init", []);
                acc = _v239;
                _v1 = _v239;
                const _v240: any = 0;
                acc = _v240;
                const _v241: any = 2;
                acc = _v241;
                const _v242: any = rt.object(2, "littlename4bot");
                acc = _v242;
                const _v243: any = await rt.send(_v242, "setLoop", [_v240]);
                acc = _v243;
                const _v244: any = await rt.send(_v242, "setCel", [_v241]);
                acc = _v244;
                const _v245: any = await rt.send(_v242, "init", []);
                acc = _v245;
                _v1 = _v245;
                const _v246: any = 3;
                acc = _v246;
                const _v247: any = rt.set(this, "seconds", _v246);
                acc = _v247;
                _v1 = _v247;
                break _branch4;
              }
              const _v248: any = 13;
              acc = _v248;
              _v1 = rt.op("==", _v3, _v248);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v249: any = 4;
                acc = _v249;
                const _v250: any = 3;
                acc = _v250;
                const _v251: any = await rt.call(2, "DrawPic", [_v249, _v250], this);
                acc = _v251;
                _v1 = _v251;
                const _v252: any = 1;
                acc = _v252;
                const _v253: any = 0;
                acc = _v253;
                const _v254: any = rt.object(2, "littlepic4");
                acc = _v254;
                const _v255: any = await rt.send(_v254, "setLoop", [_v252]);
                acc = _v255;
                const _v256: any = await rt.send(_v254, "setCel", [_v253]);
                acc = _v256;
                _v1 = _v256;
                const _v257: any = 1;
                acc = _v257;
                const _v258: any = 1;
                acc = _v258;
                const _v259: any = rt.object(2, "littlename4top");
                acc = _v259;
                const _v260: any = await rt.send(_v259, "setLoop", [_v257]);
                acc = _v260;
                const _v261: any = await rt.send(_v259, "setCel", [_v258]);
                acc = _v261;
                const _v262: any = await rt.send(_v259, "init", []);
                acc = _v262;
                _v1 = _v262;
                const _v263: any = 1;
                acc = _v263;
                const _v264: any = 2;
                acc = _v264;
                const _v265: any = rt.object(2, "littlename4bot");
                acc = _v265;
                const _v266: any = await rt.send(_v265, "setLoop", [_v263]);
                acc = _v266;
                const _v267: any = await rt.send(_v265, "setCel", [_v264]);
                acc = _v267;
                const _v268: any = await rt.send(_v265, "init", []);
                acc = _v268;
                _v1 = _v268;
                const _v269: any = 2;
                acc = _v269;
                const _v270: any = rt.set(this, "seconds", _v269);
                acc = _v270;
                _v1 = _v270;
                break _branch4;
              }
              const _v271: any = 14;
              acc = _v271;
              _v1 = rt.op("==", _v3, _v271);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v272: any = 4;
                acc = _v272;
                const _v273: any = 3;
                acc = _v273;
                const _v274: any = await rt.call(2, "DrawPic", [_v272, _v273], this);
                acc = _v274;
                _v1 = _v274;
                const _v275: any = 2;
                acc = _v275;
                const _v276: any = 0;
                acc = _v276;
                const _v277: any = rt.object(2, "littlepic4");
                acc = _v277;
                const _v278: any = await rt.send(_v277, "setLoop", [_v275]);
                acc = _v278;
                const _v279: any = await rt.send(_v277, "setCel", [_v276]);
                acc = _v279;
                _v1 = _v279;
                const _v280: any = 2;
                acc = _v280;
                const _v281: any = 1;
                acc = _v281;
                const _v282: any = rt.object(2, "littlename4top");
                acc = _v282;
                const _v283: any = await rt.send(_v282, "setLoop", [_v280]);
                acc = _v283;
                const _v284: any = await rt.send(_v282, "setCel", [_v281]);
                acc = _v284;
                const _v285: any = await rt.send(_v282, "init", []);
                acc = _v285;
                _v1 = _v285;
                const _v286: any = 2;
                acc = _v286;
                const _v287: any = 2;
                acc = _v287;
                const _v288: any = rt.object(2, "littlename4bot");
                acc = _v288;
                const _v289: any = await rt.send(_v288, "setLoop", [_v286]);
                acc = _v289;
                const _v290: any = await rt.send(_v288, "setCel", [_v287]);
                acc = _v290;
                const _v291: any = await rt.send(_v288, "init", []);
                acc = _v291;
                _v1 = _v291;
                const _v292: any = 2;
                acc = _v292;
                const _v293: any = rt.set(this, "seconds", _v292);
                acc = _v293;
                _v1 = _v293;
                break _branch4;
              }
              const _v294: any = 15;
              acc = _v294;
              _v1 = rt.op("==", _v3, _v294);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v295: any = rt.object(2, "littlepic4");
                acc = _v295;
                const _v296: any = await rt.send(_v295, "dispose", []);
                acc = _v296;
                _v1 = _v296;
                const _v297: any = rt.object(2, "littlename4top");
                acc = _v297;
                const _v298: any = await rt.send(_v297, "dispose", []);
                acc = _v298;
                _v1 = _v298;
                const _v299: any = rt.object(2, "littlename4bot");
                acc = _v299;
                const _v300: any = await rt.send(_v299, "dispose", []);
                acc = _v300;
                _v1 = _v300;
                const _v301: any = rt.object(2, "littlepic5");
                acc = _v301;
                const _v302: any = rt.setLocal(2, 0, _v301);
                acc = _v302;
                _v1 = _v302;
                const _v303: any = rt.object(2, "littlename5top");
                acc = _v303;
                const _v304: any = rt.setLocal(2, 1, _v303);
                acc = _v304;
                _v1 = _v304;
                const _v305: any = rt.object(2, "littlename5bot");
                acc = _v305;
                const _v306: any = rt.setLocal(2, 2, _v305);
                acc = _v306;
                _v1 = _v306;
                const _v307: any = 5;
                acc = _v307;
                const _v308: any = 2;
                acc = _v308;
                const _v309: any = await rt.call(2, "DrawPic", [_v307, _v308], this);
                acc = _v309;
                _v1 = _v309;
                const _v310: any = 0;
                acc = _v310;
                const _v311: any = 0;
                acc = _v311;
                const _v312: any = rt.object(2, "littlepic5");
                acc = _v312;
                const _v313: any = await rt.send(_v312, "setLoop", [_v310]);
                acc = _v313;
                const _v314: any = await rt.send(_v312, "setCel", [_v311]);
                acc = _v314;
                const _v315: any = await rt.send(_v312, "init", []);
                acc = _v315;
                _v1 = _v315;
                const _v316: any = 0;
                acc = _v316;
                const _v317: any = 1;
                acc = _v317;
                const _v318: any = rt.object(2, "littlename5top");
                acc = _v318;
                const _v319: any = await rt.send(_v318, "setLoop", [_v316]);
                acc = _v319;
                const _v320: any = await rt.send(_v318, "setCel", [_v317]);
                acc = _v320;
                const _v321: any = await rt.send(_v318, "init", []);
                acc = _v321;
                _v1 = _v321;
                const _v322: any = 0;
                acc = _v322;
                const _v323: any = 2;
                acc = _v323;
                const _v324: any = rt.object(2, "littlename5bot");
                acc = _v324;
                const _v325: any = await rt.send(_v324, "setLoop", [_v322]);
                acc = _v325;
                const _v326: any = await rt.send(_v324, "setCel", [_v323]);
                acc = _v326;
                const _v327: any = await rt.send(_v324, "init", []);
                acc = _v327;
                _v1 = _v327;
                const _v328: any = 3;
                acc = _v328;
                const _v329: any = rt.set(this, "seconds", _v328);
                acc = _v329;
                _v1 = _v329;
                break _branch4;
              }
              const _v330: any = 16;
              acc = _v330;
              _v1 = rt.op("==", _v3, _v330);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v331: any = 5;
                acc = _v331;
                const _v332: any = 2;
                acc = _v332;
                const _v333: any = await rt.call(2, "DrawPic", [_v331, _v332], this);
                acc = _v333;
                _v1 = _v333;
                const _v334: any = 1;
                acc = _v334;
                const _v335: any = 0;
                acc = _v335;
                const _v336: any = rt.object(2, "littlepic5");
                acc = _v336;
                const _v337: any = await rt.send(_v336, "setLoop", [_v334]);
                acc = _v337;
                const _v338: any = await rt.send(_v336, "setCel", [_v335]);
                acc = _v338;
                _v1 = _v338;
                const _v339: any = 1;
                acc = _v339;
                const _v340: any = 1;
                acc = _v340;
                const _v341: any = rt.object(2, "littlename5top");
                acc = _v341;
                const _v342: any = await rt.send(_v341, "setLoop", [_v339]);
                acc = _v342;
                const _v343: any = await rt.send(_v341, "setCel", [_v340]);
                acc = _v343;
                const _v344: any = await rt.send(_v341, "init", []);
                acc = _v344;
                _v1 = _v344;
                const _v345: any = 1;
                acc = _v345;
                const _v346: any = 2;
                acc = _v346;
                const _v347: any = rt.object(2, "littlename5bot");
                acc = _v347;
                const _v348: any = await rt.send(_v347, "setLoop", [_v345]);
                acc = _v348;
                const _v349: any = await rt.send(_v347, "setCel", [_v346]);
                acc = _v349;
                const _v350: any = await rt.send(_v347, "init", []);
                acc = _v350;
                _v1 = _v350;
                const _v351: any = 2;
                acc = _v351;
                const _v352: any = rt.set(this, "seconds", _v351);
                acc = _v352;
                _v1 = _v352;
                break _branch4;
              }
              const _v353: any = 17;
              acc = _v353;
              _v1 = rt.op("==", _v3, _v353);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v354: any = rt.object(2, "littlename5top");
                acc = _v354;
                const _v355: any = await rt.send(_v354, "hide", []);
                acc = _v355;
                _v1 = _v355;
                const _v356: any = rt.object(2, "littlename5bot");
                acc = _v356;
                const _v357: any = await rt.send(_v356, "hide", []);
                acc = _v357;
                _v1 = _v357;
                const _v358: any = 5;
                acc = _v358;
                const _v359: any = 2;
                acc = _v359;
                const _v360: any = await rt.call(2, "DrawPic", [_v358, _v359], this);
                acc = _v360;
                _v1 = _v360;
                const _v361: any = 2;
                acc = _v361;
                const _v362: any = 0;
                acc = _v362;
                const _v363: any = rt.object(2, "littlepic5");
                acc = _v363;
                const _v364: any = await rt.send(_v363, "setLoop", [_v361]);
                acc = _v364;
                const _v365: any = await rt.send(_v363, "setCel", [_v362]);
                acc = _v365;
                _v1 = _v365;
                const _v366: any = 2;
                acc = _v366;
                const _v367: any = rt.set(this, "seconds", _v366);
                acc = _v367;
                _v1 = _v367;
                break _branch4;
              }
              const _v368: any = 18;
              acc = _v368;
              _v1 = rt.op("==", _v3, _v368);
              acc = _v1;
              if (rt.truth(_v1)) {
                const _v369: any = rt.object(2, "littlepic5");
                acc = _v369;
                const _v370: any = await rt.send(_v369, "dispose", []);
                acc = _v370;
                _v1 = _v370;
                const _v371: any = rt.object(2, "littlename5top");
                acc = _v371;
                const _v372: any = await rt.send(_v371, "dispose", []);
                acc = _v372;
                _v1 = _v372;
                const _v373: any = rt.object(2, "littlename5bot");
                acc = _v373;
                const _v374: any = await rt.send(_v373, "dispose", []);
                acc = _v374;
                _v1 = _v374;
                const _v375: any = 0;
                acc = _v375;
                const _v376: any = rt.setLocal(2, 1, _v375);
                acc = _v376;
                const _v377: any = rt.setLocal(2, 0, _v376);
                acc = _v377;
                _v1 = _v377;
                const _v378: any = await rt.call(0, "proc0_1", [], this);
                acc = _v378;
                _v1 = _v378;
                const _v379: any = 1;
                acc = _v379;
                const _v380: any = rt.global(2);
                acc = _v380;
                const _v381: any = await rt.send(_v380, "newRoom", [_v379]);
                acc = _v381;
                _v1 = _v381;
                break _branch4;
              }
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "littlepic1",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"view": 1, "priority": 5},
        methods: {
          // SCI introRoom.sc: littlepic1.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 162;
            acc = _v1;
            const _v2: any = 160;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "posn", [_v1, _v2]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "stopUpd", []);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 2, "name": "littlepic1"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "littlename1",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"view": 1, "priority": 5},
        methods: {
          // SCI introRoom.sc: littlename1.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 160;
            acc = _v1;
            const _v2: any = 56;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "posn", [_v1, _v2]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "stopUpd", []);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 2, "name": "littlename1"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "littlepic2",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"view": 2, "priority": 5},
        methods: {
          // SCI introRoom.sc: littlepic2.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 162;
            acc = _v1;
            const _v2: any = 160;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "posn", [_v1, _v2]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "stopUpd", []);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 2, "name": "littlepic2"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "littlename2",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"view": 2, "priority": 5},
        methods: {
          // SCI introRoom.sc: littlename2.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 160;
            acc = _v1;
            const _v2: any = 56;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "posn", [_v1, _v2]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "stopUpd", []);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 2, "name": "littlename2"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "littlepic3",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"view": 3, "priority": 5},
        methods: {
          // SCI introRoom.sc: littlepic3.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 162;
            acc = _v1;
            const _v2: any = 160;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "posn", [_v1, _v2]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "stopUpd", []);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 2, "name": "littlepic3"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "littlename3",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"view": 3, "priority": 5},
        methods: {
          // SCI introRoom.sc: littlename3.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 160;
            acc = _v1;
            const _v2: any = 56;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "posn", [_v1, _v2]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "stopUpd", []);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 2, "name": "littlename3"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "littlepic4",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"view": 4, "priority": 5},
        methods: {
          // SCI introRoom.sc: littlepic4.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 162;
            acc = _v1;
            const _v2: any = 160;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "posn", [_v1, _v2]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "stopUpd", []);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 2, "name": "littlepic4"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "littlename4top",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"view": 4, "priority": 5},
        methods: {
          // SCI introRoom.sc: littlename4top.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 160;
            acc = _v1;
            const _v2: any = 50;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "posn", [_v1, _v2]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "stopUpd", []);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 2, "name": "littlename4top"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "littlename4bot",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"view": 4, "priority": 5},
        methods: {
          // SCI introRoom.sc: littlename4bot.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 165;
            acc = _v1;
            const _v2: any = 178;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "posn", [_v1, _v2]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "stopUpd", []);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 2, "name": "littlename4bot"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "littlepic5",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"view": 5, "priority": 5},
        methods: {
          // SCI introRoom.sc: littlepic5.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 162;
            acc = _v1;
            const _v2: any = 160;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "posn", [_v1, _v2]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "stopUpd", []);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 2, "name": "littlepic5"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "littlename5top",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"view": 5, "priority": 5},
        methods: {
          // SCI introRoom.sc: littlename5top.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 160;
            acc = _v1;
            const _v2: any = 50;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "posn", [_v1, _v2]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "stopUpd", []);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 2, "name": "littlename5top"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
      {
        name: "littlename5bot",
        className: "View",
        parent: {"script": 998, "name": "View"},
        isClass: false,
        properties: {"view": 5, "priority": 5},
        methods: {
          // SCI introRoom.sc: littlename5bot.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = 165;
            acc = _v1;
            const _v2: any = 178;
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "posn", [_v1, _v2]);
            acc = _v4;
            const _v5: any = await rt.send(_v3, "stopUpd", []);
            acc = _v5;
            const _v6: any = await rt.superSend(this, {"script": 2, "name": "littlename5bot"}, "init", []);
            acc = _v6;
            return acc;
          },
        },
      },
    ],
    procedures: {
    },
    exports: {"0": "introRoom"},
  });
}
