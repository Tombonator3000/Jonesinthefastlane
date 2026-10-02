// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/Main.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: ada11be01dbd5b6127be944bd3fa83e286d6bde1ab8ccf1980490e3f103f4b2f
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(0, {
    name: "Main",
    uses: [105, 113, 255, 891, 989, 994, 996, 997, 999],
    locals: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 999, 997, 1, 4, 0, 0, 1, 12, "version", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, -1, 0, 0, 40, 189, 319, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -23040],
    objects: [
      {
        name: "jones",
        className: "Game",
        parent: {"script": 994, "name": "Game"},
        isClass: false,
        properties: {},
        methods: {
          // SCI Main.sc: jones.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v1: any = 0;
            acc = _v1;
            const _v2: any = rt.global(520);
            acc = _v2;
            const _v3: any = await rt.call(0, "DoSound", [_v1, _v2], this);
            acc = _v3;
            let _v4: any = acc;
            const _v5: any = 3;
            acc = _v5;
            const _v6: any = await rt.call(0, "DoSound", [_v5], this);
            acc = _v6;
            const _v7: any = 3;
            acc = _v7;
            const _v8: any = rt.op("<=", ...[_v6, _v7]);
            acc = _v8;
            _v4 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = 100;
              acc = _v9;
              const _v10: any = rt.object(0, "aSong");
              acc = _v10;
              const _v11: any = await rt.send(_v10, "number", [_v9]);
              acc = _v11;
              _v4 = _v11;
              const _v12: any = 100;
              acc = _v12;
              const _v13: any = rt.object(0, "aSoundEffect");
              acc = _v13;
              const _v14: any = await rt.send(_v13, "number", [_v12]);
              acc = _v14;
              _v4 = _v14;
            }
            acc = _v4;
            let _v15: any = acc;
            const _v16: any = 2;
            acc = _v16;
            const _v17: any = await rt.call(0, "Graph", [_v16], this);
            acc = _v17;
            const _v18: any = 16;
            acc = _v18;
            const _v19: any = rt.op("==", ...[_v17, _v18]);
            acc = _v19;
            _v15 = _v19;
            if (rt.truth(_v19)) {
              const _v20: any = 0;
              acc = _v20;
              _v15 = _v20;
            } else {
              const _v21: any = 1;
              acc = _v21;
              _v15 = _v21;
            }
            acc = _v15;
            const _v22: any = rt.setGlobal(535, _v15);
            acc = _v22;
            let _v23: any = acc;
            const _v24: any = 2;
            acc = _v24;
            const _v25: any = await rt.call(0, "Graph", [_v24], this);
            acc = _v25;
            const _v26: any = 2;
            acc = _v26;
            const _v27: any = rt.op("==", ...[_v25, _v26]);
            acc = _v27;
            _v23 = _v27;
            if (rt.truth(_v27)) {
              const _v28: any = 1;
              acc = _v28;
              _v23 = _v28;
            } else {
              const _v29: any = 0;
              acc = _v29;
              _v23 = _v29;
            }
            acc = _v23;
            const _v30: any = rt.setGlobal(552, _v23);
            acc = _v30;
            const _v31: any = 0;
            acc = _v31;
            const _v32: any = await rt.call(0, "proc0_17", [_v31], this);
            acc = _v32;
            const _v33: any = 1;
            acc = _v33;
            const _v34: any = rt.setGlobal(427, _v33);
            acc = _v34;
            const _v35: any = 0;
            acc = _v35;
            const _v36: any = rt.setGlobal(28, _v35);
            acc = _v36;
            let _v37: any = acc;
            const _v38: any = 0;
            acc = _v38;
            const _v39: any = "version";
            acc = _v39;
            const _v40: any = 1;
            acc = _v40;
            const _v41: any = await rt.call(0, "FileIO", [_v38, _v39, _v40], this);
            acc = _v41;
            const _v42: any = rt.setGlobal(538, _v41);
            acc = _v42;
            _v37 = _v42;
            if (rt.truth(_v42)) {
              const _v43: any = 5;
              acc = _v43;
              const _v44: any = rt.ref("global", 0, 539);
              acc = _v44;
              const _v45: any = 10;
              acc = _v45;
              const _v46: any = rt.global(538);
              acc = _v46;
              const _v47: any = await rt.call(0, "FileIO", [_v43, _v44, _v45, _v46], this);
              acc = _v47;
              const _v48: any = rt.setGlobal(28, _v47);
              acc = _v48;
              _v37 = _v48;
              const _v49: any = 1;
              acc = _v49;
              const _v50: any = rt.global(538);
              acc = _v50;
              const _v51: any = await rt.call(0, "FileIO", [_v49, _v50], this);
              acc = _v51;
              _v37 = _v51;
            }
            acc = _v37;
            const _v52: any = rt.object(0, "invisibleWindow");
            acc = _v52;
            const _v53: any = rt.setGlobal(59, _v52);
            acc = _v53;
            const _v54: any = rt.object(0, "bubbleWindow");
            acc = _v54;
            const _v55: any = rt.setGlobal(371, _v54);
            acc = _v55;
            const _v56: any = 1;
            acc = _v56;
            const _v57: any = rt.object(996, "User");
            acc = _v57;
            const _v58: any = await rt.send(_v57, "controls", [_v56]);
            acc = _v58;
            const _v59: any = 0;
            acc = _v59;
            const _v60: any = rt.global(1);
            acc = _v60;
            const _v61: any = await rt.send(_v60, "setSpeed", [_v59]);
            acc = _v61;
            const _v62: any = await rt.call(0, "GetPort", [], this);
            acc = _v62;
            const _v63: any = rt.setGlobal(80, _v62);
            acc = _v63;
            const _v64: any = await rt.superSend(this, {"script": 0, "name": "jones"}, "init", []);
            acc = _v64;
            const _v65: any = rt.global(19);
            acc = _v65;
            const _v66: any = 1;
            acc = _v66;
            const _v67: any = 319;
            acc = _v67;
            const _v68: any = 199;
            acc = _v68;
            const _v69: any = await rt.call(0, "SetCursor", [_v65, _v66, _v67, _v68], this);
            acc = _v69;
            const _v70: any = rt.object(0, "aSong");
            acc = _v70;
            const _v71: any = rt.setGlobal(477, _v70);
            acc = _v71;
            const _v72: any = this;
            acc = _v72;
            const _v73: any = rt.object(0, "aSoundEffect");
            acc = _v73;
            const _v74: any = rt.setGlobal(476, _v73);
            acc = _v74;
            const _v75: any = await rt.send(_v74, "owner", [_v72]);
            acc = _v75;
            const _v76: any = await rt.send(_v74, "init", []);
            acc = _v76;
            let _v77: any = acc;
            const _v78: any = await rt.call(0, "GameIsRestarting", [], this);
            acc = _v78;
            _v77 = _v78;
            if (rt.truth(_v78)) {
              const _v79: any = 132;
              acc = _v79;
              const _v80: any = 7;
              acc = _v80;
              const _v81: any = await rt.call(0, "UnLoad", [_v79, _v80], this);
              acc = _v81;
              _v77 = _v81;
              const _v82: any = 132;
              acc = _v82;
              const _v83: any = 8;
              acc = _v83;
              const _v84: any = await rt.call(0, "UnLoad", [_v82, _v83], this);
              acc = _v84;
              _v77 = _v84;
              const _v85: any = 132;
              acc = _v85;
              const _v86: any = 31;
              acc = _v86;
              const _v87: any = await rt.call(0, "UnLoad", [_v85, _v86], this);
              acc = _v87;
              _v77 = _v87;
              const _v88: any = 132;
              acc = _v88;
              const _v89: any = 6;
              acc = _v89;
              const _v90: any = await rt.call(0, "UnLoad", [_v88, _v89], this);
              acc = _v90;
              _v77 = _v90;
              const _v91: any = 132;
              acc = _v91;
              const _v92: any = 23;
              acc = _v92;
              const _v93: any = await rt.call(0, "UnLoad", [_v91, _v92], this);
              acc = _v93;
              _v77 = _v93;
              const _v94: any = 10;
              acc = _v94;
              const _v95: any = -1;
              acc = _v95;
              const _v96: any = rt.global(477);
              acc = _v96;
              const _v97: any = await rt.send(_v96, "playBed", [_v94, _v95]);
              acc = _v97;
              _v77 = _v97;
              const _v98: any = 1;
              acc = _v98;
              const _v99: any = this;
              acc = _v99;
              const _v100: any = await rt.send(_v99, "newRoom", [_v98]);
              acc = _v100;
              _v77 = _v100;
            } else {
              const _v101: any = 764;
              acc = _v101;
              const _v102: any = this;
              acc = _v102;
              const _v103: any = await rt.send(_v102, "newRoom", [_v101]);
              acc = _v103;
              _v77 = _v103;
            }
            acc = _v77;
            return acc;
          },
          // SCI Main.sc: jones.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = await rt.superSend(this, {"script": 0, "name": "jones"}, "doit", []);
            acc = _v1;
            let _v2: any = acc;
            let _v3: any = 1;
            if (rt.truth(_v3)) {
              const _v4: any = rt.global(528);
              acc = _v4;
              _v3 = _v4;
            }
            if (rt.truth(_v3)) {
              const _v5: any = rt.global(502);
              acc = _v5;
              const _v6: any = rt.op("not", ...[_v5]);
              acc = _v6;
              _v3 = _v6;
            }
            acc = _v3;
            _v2 = _v3;
            if (rt.truth(_v3)) {
              const _v7: any = 0;
              acc = _v7;
              const _v8: any = rt.setGlobal(528, _v7);
              acc = _v8;
              _v2 = _v8;
              const _v9: any = rt.global(1);
              acc = _v9;
              const _v10: any = await rt.send(_v9, "restart", []);
              acc = _v10;
              _v2 = _v10;
            }
            acc = _v2;
            let _v11: any = acc;
            let _v12: any = 1;
            if (rt.truth(_v12)) {
              const _v13: any = rt.global(529);
              acc = _v13;
              _v12 = _v13;
            }
            if (rt.truth(_v12)) {
              const _v14: any = rt.global(502);
              acc = _v14;
              const _v15: any = rt.op("not", ...[_v14]);
              acc = _v15;
              _v12 = _v15;
            }
            acc = _v12;
            _v11 = _v12;
            if (rt.truth(_v12)) {
              const _v16: any = 0;
              acc = _v16;
              const _v17: any = rt.setGlobal(529, _v16);
              acc = _v17;
              _v11 = _v17;
              const _v18: any = rt.global(1);
              acc = _v18;
              const _v19: any = await rt.send(_v18, "restore", []);
              acc = _v19;
              _v11 = _v19;
            }
            acc = _v11;
            const _v20: any = 0;
            acc = _v20;
            const _v21: any = rt.setGlobal(58, _v20);
            acc = _v21;
            let _v22: any = acc;
            const _v23: any = rt.global(533);
            acc = _v23;
            _v22 = _v23;
            if (rt.truth(_v23)) {
              const _v24: any = rt.global(2);
              acc = _v24;
              const _v25: any = await rt.send(_v24, "init", []);
              acc = _v25;
              _v22 = _v25;
            }
            acc = _v22;
            return acc;
          },
          // SCI Main.sc: jones.replay
          "replay": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(0, "invisibleWindow");
            acc = _v1;
            const _v2: any = rt.setGlobal(59, _v1);
            acc = _v2;
            const _v3: any = await rt.superSend(this, {"script": 0, "name": "jones"}, "replay", []);
            acc = _v3;
            return acc;
          },
        },
      },
      {
        name: "bubbleWindow",
        className: "BubbleWindow",
        parent: {"script": 113, "name": "BubbleWindow"},
        isClass: false,
        properties: {},
        methods: {
        },
      },
      {
        name: "invisibleWindow",
        className: "InvisibleWindow",
        parent: {"script": 105, "name": "InvisibleWindow"},
        isClass: false,
        properties: {"back": -1},
        methods: {
        },
      },
      {
        name: "aSong",
        className: "Sound",
        parent: {"script": 989, "name": "Sound"},
        isClass: false,
        properties: {"number": 6, "owner": -1},
        methods: {
          // SCI Main.sc: aSong.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "soundOn");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 0;
              acc = _v3;
              const _v4: any = this;
              acc = _v4;
              const _v5: any = await rt.send(_v4, "pause", [_v3]);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            let _v6: any = acc;
            let _v7: any = 1;
            if (rt.truth(_v7)) {
              const _v8: any = argc;
              acc = _v8;
              const _v9: any = 2;
              acc = _v9;
              const _v10: any = rt.op(">=", ...[_v8, _v9]);
              acc = _v10;
              _v7 = _v10;
            }
            if (rt.truth(_v7)) {
              const _v11: any = (args[1] ?? 0);
              acc = _v11;
              _v7 = _v11;
            }
            acc = _v7;
            _v6 = _v7;
            if (rt.truth(_v7)) {
              let _v12: any = acc;
              const _v13: any = (args[1] ?? 0);
              acc = _v13;
              const _v14: any = 10;
              acc = _v14;
              const _v15: any = rt.op("==", ...[_v13, _v14]);
              acc = _v15;
              _v12 = _v15;
              if (rt.truth(_v15)) {
                const _v16: any = 132;
                acc = _v16;
                const _v17: any = 6;
                acc = _v17;
                const _v18: any = await rt.call(0, "UnLoad", [_v16, _v17], this);
                acc = _v18;
                _v12 = _v18;
              }
              acc = _v12;
              _v6 = _v12;
              const _v19: any = (args[2] ?? 0);
              acc = _v19;
              const _v20: any = (args[1] ?? 0);
              acc = _v20;
              const _v21: any = this;
              acc = _v21;
              const _v22: any = await rt.send(_v21, "loop", [_v19]);
              acc = _v22;
              const _v23: any = await rt.send(_v21, "play", [_v20]);
              acc = _v23;
              _v6 = _v23;
            }
            acc = _v6;
            return acc;
          },
          // SCI Main.sc: aSong.toggle
          "toggle": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = 1;
            acc = _v2;
            const _v3: any = rt.get(this, "soundOn");
            acc = _v3;
            const _v4: any = rt.op("-", ...[_v2, _v3]);
            acc = _v4;
            const _v5: any = rt.set(this, "soundOn", _v4);
            acc = _v5;
            _v1 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 776;
              acc = _v6;
              const _v7: any = 110;
              acc = _v7;
              const _v8: any = "Turn Music Off";
              acc = _v8;
              const _v9: any = await rt.call(0, "SetMenu", [_v6, _v7, _v8], this);
              acc = _v9;
              _v1 = _v9;
              const _v10: any = 127;
              acc = _v10;
              const _v11: any = rt.set(this, "vol", _v10);
              acc = _v11;
              _v1 = _v11;
              const _v12: any = this;
              acc = _v12;
              const _v13: any = await rt.send(_v12, "changeState", []);
              acc = _v13;
              _v1 = _v13;
              const _v14: any = 0;
              acc = _v14;
              const _v15: any = 0;
              acc = _v15;
              const _v16: any = 25;
              acc = _v16;
              const _v17: any = rt.global(426);
              acc = _v17;
              const _v18: any = await rt.call(255, "Print", [_v14, _v15, _v16, _v17], this);
              acc = _v18;
              _v1 = _v18;
            } else {
              const _v19: any = 776;
              acc = _v19;
              const _v20: any = 110;
              acc = _v20;
              const _v21: any = "Turn Music On";
              acc = _v21;
              const _v22: any = await rt.call(0, "SetMenu", [_v19, _v20, _v21], this);
              acc = _v22;
              _v1 = _v22;
              const _v23: any = 0;
              acc = _v23;
              const _v24: any = rt.set(this, "vol", _v23);
              acc = _v24;
              _v1 = _v24;
              const _v25: any = this;
              acc = _v25;
              const _v26: any = await rt.send(_v25, "changeState", []);
              acc = _v26;
              _v1 = _v26;
              const _v27: any = 0;
              acc = _v27;
              const _v28: any = 1;
              acc = _v28;
              const _v29: any = 25;
              acc = _v29;
              const _v30: any = rt.global(426);
              acc = _v30;
              const _v31: any = await rt.call(255, "Print", [_v27, _v28, _v29, _v30], this);
              acc = _v31;
              _v1 = _v31;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "aSoundEffect",
        className: "Sound",
        parent: {"script": 989, "name": "Sound"},
        isClass: false,
        properties: {"number": 6, "priority": 1, "owner": -1},
        methods: {
          // SCI Main.sc: aSoundEffect.cue
          "cue": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "soundOn");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = 0;
              acc = _v3;
              const _v4: any = this;
              acc = _v4;
              const _v5: any = await rt.send(_v4, "pause", [_v3]);
              acc = _v5;
              _v1 = _v5;
            }
            acc = _v1;
            let _v6: any = acc;
            let _v7: any = 1;
            if (rt.truth(_v7)) {
              const _v8: any = argc;
              acc = _v8;
              const _v9: any = 2;
              acc = _v9;
              const _v10: any = rt.op(">=", ...[_v8, _v9]);
              acc = _v10;
              _v7 = _v10;
            }
            if (rt.truth(_v7)) {
              const _v11: any = (args[1] ?? 0);
              acc = _v11;
              _v7 = _v11;
            }
            acc = _v7;
            _v6 = _v7;
            if (rt.truth(_v7)) {
              const _v12: any = (args[2] ?? 0);
              acc = _v12;
              const _v13: any = (args[1] ?? 0);
              acc = _v13;
              const _v14: any = this;
              acc = _v14;
              const _v15: any = await rt.send(_v14, "loop", [_v12]);
              acc = _v15;
              const _v16: any = await rt.send(_v14, "play", [_v13]);
              acc = _v16;
              _v6 = _v16;
            }
            acc = _v6;
            return acc;
          },
          // SCI Main.sc: aSoundEffect.toggle
          "toggle": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = 1;
            acc = _v2;
            const _v3: any = rt.get(this, "soundOn");
            acc = _v3;
            const _v4: any = rt.op("-", ...[_v2, _v3]);
            acc = _v4;
            const _v5: any = rt.set(this, "soundOn", _v4);
            acc = _v5;
            _v1 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = 777;
              acc = _v6;
              const _v7: any = 110;
              acc = _v7;
              const _v8: any = "Turn Sound Effects Off";
              acc = _v8;
              const _v9: any = await rt.call(0, "SetMenu", [_v6, _v7, _v8], this);
              acc = _v9;
              _v1 = _v9;
              const _v10: any = 127;
              acc = _v10;
              const _v11: any = rt.set(this, "vol", _v10);
              acc = _v11;
              _v1 = _v11;
              const _v12: any = this;
              acc = _v12;
              const _v13: any = await rt.send(_v12, "changeState", []);
              acc = _v13;
              _v1 = _v13;
              const _v14: any = 0;
              acc = _v14;
              const _v15: any = 2;
              acc = _v15;
              const _v16: any = 25;
              acc = _v16;
              const _v17: any = rt.global(426);
              acc = _v17;
              const _v18: any = await rt.call(255, "Print", [_v14, _v15, _v16, _v17], this);
              acc = _v18;
              _v1 = _v18;
            } else {
              const _v19: any = 777;
              acc = _v19;
              const _v20: any = 110;
              acc = _v20;
              const _v21: any = "Turn Sound Effects On";
              acc = _v21;
              const _v22: any = await rt.call(0, "SetMenu", [_v19, _v20, _v21], this);
              acc = _v22;
              _v1 = _v22;
              const _v23: any = 0;
              acc = _v23;
              const _v24: any = rt.set(this, "vol", _v23);
              acc = _v24;
              _v1 = _v24;
              const _v25: any = this;
              acc = _v25;
              const _v26: any = await rt.send(_v25, "changeState", []);
              acc = _v26;
              _v1 = _v26;
              const _v27: any = 0;
              acc = _v27;
              const _v28: any = 3;
              acc = _v28;
              const _v29: any = 25;
              acc = _v29;
              const _v30: any = rt.global(426);
              acc = _v30;
              const _v31: any = await rt.call(255, "Print", [_v27, _v28, _v29, _v30], this);
              acc = _v31;
              _v1 = _v31;
            }
            acc = _v1;
            return acc;
          },
        },
      },
    ],
    procedures: {
      // SCI Main.sc: proc0_1
      "proc0_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.global(5);
        acc = _v1;
        const _v2: any = await rt.send(_v1, "elements", []);
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(0, "Animate", [_v2, _v3], this);
        acc = _v4;
        return acc;
      },
      // SCI Main.sc: proc0_2
      "proc0_2": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0];
        const _v1: any = 2;
        acc = _v1;
        const _v2: any = (argc = rt.op("-", argc, _v1));
        acc = _v2;
        const _v5: any = 0;
        acc = _v5;
        const _v6: any = (temps[0] = _v5);
        acc = _v6;
        _loop3: for (;;) {
          const _v7: any = (temps[0] ?? 0);
          acc = _v7;
          const _v8: any = argc;
          acc = _v8;
          const _v9: any = rt.op("<=", ...[_v7, _v8]);
          acc = _v9;
          if (!rt.truth(_v9)) break _loop3;
          _continue4: {
            const _v10: any = (temps[0] ?? 0);
            acc = _v10;
            const _v11: any = (args[(1 + (Number(_v10) & 65535))] ?? 0);
            acc = _v11;
            const _v12: any = (temps[1] = _v11);
            acc = _v12;
            let _v13: any = acc;
            const _v14: any = (args[0] ?? 0);
            acc = _v14;
            _v13 = _v14;
            if (rt.truth(_v14)) {
              const _v15: any = (args[0] ?? 0);
              acc = _v15;
              const _v16: any = (temps[1] ?? 0);
              acc = _v16;
              const _v17: any = await rt.call(0, "Load", [_v15, _v16], this);
              acc = _v17;
              _v13 = _v17;
            }
            acc = _v13;
          }
          const _v18: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
          acc = _v18;
        }
        return acc;
      },
      // SCI Main.sc: proc0_3
      "proc0_3": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0];
        let _v1: any = acc;
        const _v2: any = (args[0] ?? 0);
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = rt.op(">", ...[_v2, _v3]);
        acc = _v4;
        _v1 = _v4;
        if (rt.truth(_v4)) {
          const _v7: any = 0;
          acc = _v7;
          const _v8: any = (temps[0] = _v7);
          acc = _v8;
          _loop5: for (;;) {
            const _v9: any = (temps[0] ?? 0);
            acc = _v9;
            const _v10: any = (args[0] ?? 0);
            acc = _v10;
            const _v11: any = 6;
            acc = _v11;
            const _v12: any = rt.op("/", ...[_v10, _v11]);
            acc = _v12;
            const _v13: any = rt.op("<", ...[_v9, _v12]);
            acc = _v13;
            if (!rt.truth(_v13)) break _loop5;
            _continue6: {
              const _v14: any = 6;
              acc = _v14;
              const _v15: any = await rt.call(0, "Wait", [_v14], this);
              acc = _v15;
              const _v16: any = rt.object(999, "Event");
              acc = _v16;
              const _v17: any = await rt.send(_v16, "new", []);
              acc = _v17;
              const _v18: any = (temps[1] = _v17);
              acc = _v18;
              const _v19: any = (temps[1] ?? 0);
              acc = _v19;
              const _v20: any = rt.object(997, "MenuBar");
              acc = _v20;
              const _v21: any = await rt.send(_v20, "handleEvent", [_v19]);
              acc = _v21;
              let _v22: any = acc;
              let _v23: any = 0;
              if (!rt.truth(_v23)) {
                let _v24: any = 1;
                if (rt.truth(_v24)) {
                  const _v25: any = (temps[1] ?? 0);
                  acc = _v25;
                  const _v26: any = await rt.send(_v25, "type", []);
                  acc = _v26;
                  const _v27: any = 2;
                  acc = _v27;
                  const _v28: any = rt.op("==", ...[_v26, _v27]);
                  acc = _v28;
                  _v24 = _v28;
                }
                if (rt.truth(_v24)) {
                  const _v29: any = (temps[1] ?? 0);
                  acc = _v29;
                  const _v30: any = await rt.send(_v29, "y", []);
                  acc = _v30;
                  const _v31: any = 10;
                  acc = _v31;
                  const _v32: any = rt.op(">=", ...[_v30, _v31]);
                  acc = _v32;
                  _v24 = _v32;
                }
                acc = _v24;
                _v23 = _v24;
              }
              if (!rt.truth(_v23)) {
                let _v33: any = 1;
                if (rt.truth(_v33)) {
                  const _v34: any = (temps[1] ?? 0);
                  acc = _v34;
                  const _v35: any = await rt.send(_v34, "type", []);
                  acc = _v35;
                  const _v36: any = 4;
                  acc = _v36;
                  const _v37: any = rt.op("==", ...[_v35, _v36]);
                  acc = _v37;
                  _v33 = _v37;
                }
                if (rt.truth(_v33)) {
                  const _v38: any = (temps[1] ?? 0);
                  acc = _v38;
                  const _v39: any = await rt.send(_v38, "message", []);
                  acc = _v39;
                  const _v40: any = 13;
                  acc = _v40;
                  const _v41: any = rt.op("==", ...[_v39, _v40]);
                  acc = _v41;
                  _v33 = _v41;
                }
                acc = _v33;
                _v23 = _v33;
              }
              acc = _v23;
              _v22 = _v23;
              if (rt.truth(_v23)) {
                const _v42: any = (temps[1] ?? 0);
                acc = _v42;
                const _v43: any = await rt.send(_v42, "dispose", []);
                acc = _v43;
                _v22 = _v43;
                break _loop5;
                _v22 = acc;
              }
              acc = _v22;
              const _v44: any = (temps[1] ?? 0);
              acc = _v44;
              const _v45: any = await rt.send(_v44, "dispose", []);
              acc = _v45;
              let _v46: any = acc;
              const _v47: any = rt.global(4);
              acc = _v47;
              _v46 = _v47;
              if (rt.truth(_v47)) {
                break _loop5;
                _v46 = acc;
              }
              acc = _v46;
            }
            const _v48: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
            acc = _v48;
          }
          _v1 = acc;
        }
        acc = _v1;
        return acc;
      },
      // SCI Main.sc: proc0_6
      "proc0_6": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        let _v1: any = 0;
        if (!rt.truth(_v1)) {
          const _v2: any = rt.global(407);
          acc = _v2;
          const _v3: any = (args[0] ?? 0);
          acc = _v3;
          const _v4: any = rt.op("==", ...[_v2, _v3]);
          acc = _v4;
          _v1 = _v4;
        }
        if (!rt.truth(_v1)) {
          const _v5: any = rt.global(409);
          acc = _v5;
          const _v6: any = (args[0] ?? 0);
          acc = _v6;
          const _v7: any = rt.op("==", ...[_v5, _v6]);
          acc = _v7;
          _v1 = _v7;
        }
        if (!rt.truth(_v1)) {
          const _v8: any = rt.global(410);
          acc = _v8;
          const _v9: any = (args[0] ?? 0);
          acc = _v9;
          const _v10: any = rt.op("==", ...[_v8, _v9]);
          acc = _v10;
          _v1 = _v10;
        }
        acc = _v1;
        return _v1;
        return acc;
      },
      // SCI Main.sc: proc0_7
      "proc0_7": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = 513;
        acc = _v1;
        const _v2: any = 112;
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = await rt.call(0, "SetMenu", [_v1, _v2, _v3], this);
        acc = _v4;
        return acc;
      },
      // SCI Main.sc: proc0_8
      "proc0_8": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = 513;
        acc = _v1;
        const _v2: any = 112;
        acc = _v2;
        const _v3: any = 1;
        acc = _v3;
        const _v4: any = await rt.call(0, "SetMenu", [_v1, _v2, _v3], this);
        acc = _v4;
        return acc;
      },
      // SCI Main.sc: proc0_9
      "proc0_9": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0];
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = (temps[0] = _v3);
        acc = _v4;
        _loop1: for (;;) {
          const _v5: any = (temps[0] ?? 0);
          acc = _v5;
          const _v6: any = (args[0] ?? 0);
          acc = _v6;
          const _v7: any = await rt.send(_v6, "size", []);
          acc = _v7;
          const _v8: any = rt.op("<", ...[_v5, _v7]);
          acc = _v8;
          if (!rt.truth(_v8)) break _loop1;
          _continue2: {
            const _v9: any = (temps[0] ?? 0);
            acc = _v9;
            const _v10: any = (args[0] ?? 0);
            acc = _v10;
            const _v11: any = await rt.send(_v10, "at", [_v9]);
            acc = _v11;
            const _v12: any = (temps[1] = _v11);
            acc = _v12;
            let _v13: any = acc;
            const _v14: any = (temps[1] ?? 0);
            acc = _v14;
            const _v15: any = await rt.send(_v14, "state", []);
            acc = _v15;
            const _v16: any = 1;
            acc = _v16;
            const _v17: any = rt.op("&", ...[_v15, _v16]);
            acc = _v17;
            _v13 = _v17;
            if (rt.truth(_v17)) {
              const _v18: any = (temps[1] ?? 0);
              acc = _v18;
              const _v19: any = (args[1] ?? 0);
              acc = _v19;
              const _v20: any = await rt.send(_v19, "add", [_v18]);
              acc = _v20;
              _v13 = _v20;
              const _v21: any = (temps[1] ?? 0);
              acc = _v21;
              const _v22: any = await rt.send(_v21, "nsLeft", []);
              acc = _v22;
              const _v23: any = (temps[1] ?? 0);
              acc = _v23;
              const _v24: any = await rt.send(_v23, "nsRight", []);
              acc = _v24;
              const _v25: any = rt.op("+", ...[_v22, _v24]);
              acc = _v25;
              const _v26: any = 2;
              acc = _v26;
              const _v27: any = rt.op("/", ...[_v25, _v26]);
              acc = _v27;
              let _v28: any = acc;
              const _v29: any = argc;
              acc = _v29;
              const _v30: any = 4;
              acc = _v30;
              const _v31: any = rt.op(">=", ...[_v29, _v30]);
              acc = _v31;
              _v28 = _v31;
              if (rt.truth(_v31)) {
                const _v32: any = (args[0] ?? 0);
                acc = _v32;
                const _v33: any = await rt.send(_v32, "window", []);
                acc = _v33;
                const _v34: any = await rt.send(_v33, "left", []);
                acc = _v34;
                _v28 = _v34;
              } else {
                const _v35: any = (args[0] ?? 0);
                acc = _v35;
                const _v36: any = await rt.send(_v35, "nsLeft", []);
                acc = _v36;
                _v28 = _v36;
              }
              acc = _v28;
              const _v37: any = rt.op("+", ...[_v27, _v28]);
              acc = _v37;
              const _v38: any = (temps[1] ?? 0);
              acc = _v38;
              const _v39: any = await rt.send(_v38, "nsTop", []);
              acc = _v39;
              const _v40: any = (temps[1] ?? 0);
              acc = _v40;
              const _v41: any = await rt.send(_v40, "nsBottom", []);
              acc = _v41;
              const _v42: any = rt.op("+", ...[_v39, _v41]);
              acc = _v42;
              const _v43: any = 2;
              acc = _v43;
              const _v44: any = rt.op("/", ...[_v42, _v43]);
              acc = _v44;
              let _v45: any = acc;
              const _v46: any = argc;
              acc = _v46;
              const _v47: any = 4;
              acc = _v47;
              const _v48: any = rt.op(">=", ...[_v46, _v47]);
              acc = _v48;
              _v45 = _v48;
              if (rt.truth(_v48)) {
                const _v49: any = (args[0] ?? 0);
                acc = _v49;
                const _v50: any = await rt.send(_v49, "window", []);
                acc = _v50;
                const _v51: any = await rt.send(_v50, "top", []);
                acc = _v51;
                _v45 = _v51;
              } else {
                const _v52: any = (args[0] ?? 0);
                acc = _v52;
                const _v53: any = await rt.send(_v52, "nsTop", []);
                acc = _v53;
                _v45 = _v53;
              }
              acc = _v45;
              const _v54: any = rt.op("+", ...[_v44, _v45]);
              acc = _v54;
              const _v55: any = (temps[1] ?? 0);
              acc = _v55;
              const _v56: any = await rt.send(_v55, "keyMouseX", [_v37]);
              acc = _v56;
              const _v57: any = await rt.send(_v55, "keyMouseY", [_v54]);
              acc = _v57;
              _v13 = _v57;
            }
            acc = _v13;
          }
          const _v58: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
          acc = _v58;
        }
        let _v59: any = acc;
        const _v60: any = rt.global(447);
        acc = _v60;
        _v59 = _v60;
        if (rt.truth(_v60)) {
          let _v61: any = acc;
          let _v62: any = 1;
          if (rt.truth(_v62)) {
            const _v63: any = argc;
            acc = _v63;
            const _v64: any = 3;
            acc = _v64;
            const _v65: any = rt.op(">=", ...[_v63, _v64]);
            acc = _v65;
            _v62 = _v65;
          }
          if (rt.truth(_v62)) {
            const _v66: any = (args[2] ?? 0);
            acc = _v66;
            _v62 = _v66;
          }
          acc = _v62;
          _v61 = _v62;
          if (rt.truth(_v62)) {
            const _v67: any = (args[2] ?? 0);
            acc = _v67;
            _v61 = _v67;
          } else {
            const _v68: any = 0;
            acc = _v68;
            const _v69: any = (args[1] ?? 0);
            acc = _v69;
            const _v70: any = await rt.send(_v69, "at", [_v68]);
            acc = _v70;
            _v61 = _v70;
          }
          acc = _v61;
          const _v71: any = rt.object(891, "KeyMouse");
          acc = _v71;
          const _v72: any = await rt.send(_v71, "setCursor", [_v61]);
          acc = _v72;
          _v59 = _v72;
        }
        acc = _v59;
        let _v73: any = acc;
        let _v74: any = 1;
        if (rt.truth(_v74)) {
          const _v75: any = argc;
          acc = _v75;
          const _v76: any = 3;
          acc = _v76;
          const _v77: any = rt.op(">=", ...[_v75, _v76]);
          acc = _v77;
          _v74 = _v77;
        }
        if (rt.truth(_v74)) {
          const _v78: any = (args[2] ?? 0);
          acc = _v78;
          _v74 = _v78;
        }
        acc = _v74;
        _v73 = _v74;
        if (rt.truth(_v74)) {
          const _v79: any = (args[2] ?? 0);
          acc = _v79;
          _v73 = _v79;
        } else {
          const _v80: any = 0;
          acc = _v80;
          const _v81: any = (args[1] ?? 0);
          acc = _v81;
          const _v82: any = await rt.send(_v81, "at", [_v80]);
          acc = _v82;
          _v73 = _v82;
        }
        acc = _v73;
        const _v83: any = rt.object(891, "KeyMouse");
        acc = _v83;
        const _v84: any = await rt.send(_v83, "curItem", [_v73]);
        acc = _v84;
        return acc;
      },
      // SCI Main.sc: proc0_10
      "proc0_10": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        const _v1: any = (args[0] ?? 0);
        acc = _v1;
        const _v2: any = rt.global(302);
        acc = _v2;
        const _v3: any = await rt.send(_v2, "cash", []);
        acc = _v3;
        const _v4: any = rt.op("+", ...[_v1, _v3]);
        acc = _v4;
        const _v5: any = (temps[0] = _v4);
        acc = _v5;
        let _v6: any = acc;
        _branch7: {
          const _v8: any = (args[0] ?? 0);
          acc = _v8;
          const _v9: any = 0;
          acc = _v9;
          const _v10: any = rt.op("<", ...[_v8, _v9]);
          acc = _v10;
          _v6 = _v10;
          acc = _v6;
          if (rt.truth(_v6)) {
            let _v11: any = acc;
            let _v12: any = 1;
            if (rt.truth(_v12)) {
              const _v13: any = rt.global(302);
              acc = _v13;
              const _v14: any = await rt.send(_v13, "cashHi", []);
              acc = _v14;
              _v12 = _v14;
            }
            if (rt.truth(_v12)) {
              const _v15: any = (temps[0] ?? 0);
              acc = _v15;
              const _v16: any = 0;
              acc = _v16;
              const _v17: any = rt.op("<", ...[_v15, _v16]);
              acc = _v17;
              _v12 = _v17;
            }
            acc = _v12;
            _v11 = _v12;
            if (rt.truth(_v12)) {
              const _v18: any = rt.global(302);
              acc = _v18;
              const _v19: any = await rt.send(_v18, "cashHi", []);
              acc = _v19;
              const _v20: any = 1;
              acc = _v20;
              const _v21: any = rt.op("-", ...[_v19, _v20]);
              acc = _v21;
              const _v22: any = rt.global(302);
              acc = _v22;
              const _v23: any = await rt.send(_v22, "cashHi", [_v21]);
              acc = _v23;
              _v11 = _v23;
              const _v24: any = 32767;
              acc = _v24;
              const _v25: any = (temps[0] = rt.op("+", (temps[0] ?? 0), _v24));
              acc = _v25;
              _v11 = _v25;
            }
            acc = _v11;
            _v6 = _v11;
            break _branch7;
          }
          const _v26: any = (temps[0] ?? 0);
          acc = _v26;
          const _v27: any = 32767;
          acc = _v27;
          const _v28: any = rt.op("u>=", ...[_v26, _v27]);
          acc = _v28;
          _v6 = _v28;
          acc = _v6;
          if (rt.truth(_v6)) {
            const _v29: any = rt.global(302);
            acc = _v29;
            const _v30: any = await rt.send(_v29, "cashHi", []);
            acc = _v30;
            const _v31: any = 1;
            acc = _v31;
            const _v32: any = rt.op("+", ...[_v30, _v31]);
            acc = _v32;
            const _v33: any = rt.global(302);
            acc = _v33;
            const _v34: any = await rt.send(_v33, "cashHi", [_v32]);
            acc = _v34;
            _v6 = _v34;
            const _v35: any = 32767;
            acc = _v35;
            const _v36: any = (temps[0] = rt.op("-", (temps[0] ?? 0), _v35));
            acc = _v36;
            _v6 = _v36;
            break _branch7;
          }
        }
        acc = _v6;
        const _v37: any = (temps[0] ?? 0);
        acc = _v37;
        const _v38: any = rt.global(302);
        acc = _v38;
        const _v39: any = await rt.send(_v38, "cash", [_v37]);
        acc = _v39;
        let _v40: any = acc;
        const _v41: any = rt.global(302);
        acc = _v41;
        const _v42: any = await rt.send(_v41, "lqAssHi", []);
        acc = _v42;
        _v40 = _v42;
        if (rt.truth(_v42)) {
          const _v43: any = 100;
          acc = _v43;
          _v40 = _v43;
        } else {
          const _v44: any = rt.global(302);
          acc = _v44;
          const _v45: any = await rt.send(_v44, "lqAss", []);
          acc = _v45;
          const _v46: any = 100;
          acc = _v46;
          const _v47: any = rt.op("/", ...[_v45, _v46]);
          acc = _v47;
          _v40 = _v47;
        }
        acc = _v40;
        const _v48: any = rt.global(302);
        acc = _v48;
        const _v49: any = await rt.send(_v48, "monStat", [_v40]);
        acc = _v49;
        let _v50: any = acc;
        const _v51: any = rt.global(302);
        acc = _v51;
        const _v52: any = await rt.send(_v51, "monStat", []);
        acc = _v52;
        const _v53: any = 100;
        acc = _v53;
        const _v54: any = rt.op(">", ...[_v52, _v53]);
        acc = _v54;
        _v50 = _v54;
        if (rt.truth(_v54)) {
          const _v55: any = 100;
          acc = _v55;
          const _v56: any = rt.global(302);
          acc = _v56;
          const _v57: any = await rt.send(_v56, "monStat", [_v55]);
          acc = _v57;
          _v50 = _v57;
        }
        acc = _v50;
        let _v58: any = acc;
        const _v59: any = rt.global(302);
        acc = _v59;
        const _v60: any = await rt.send(_v59, "monStat", []);
        acc = _v60;
        const _v61: any = 0;
        acc = _v61;
        const _v62: any = rt.op("<", ...[_v60, _v61]);
        acc = _v62;
        _v58 = _v62;
        if (rt.truth(_v62)) {
          const _v63: any = 0;
          acc = _v63;
          const _v64: any = rt.global(302);
          acc = _v64;
          const _v65: any = await rt.send(_v64, "monStat", [_v63]);
          acc = _v65;
          _v58 = _v65;
        }
        acc = _v58;
        return acc;
      },
      // SCI Main.sc: proc0_11
      "proc0_11": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0];
        let _v1: any = acc;
        const _v2: any = argc;
        acc = _v2;
        _v1 = _v2;
        if (rt.truth(_v2)) {
          const _v3: any = (args[0] ?? 0);
          acc = _v3;
          _v1 = _v3;
        } else {
          const _v4: any = rt.global(302);
          acc = _v4;
          _v1 = _v4;
        }
        acc = _v1;
        const _v5: any = (temps[1] = _v1);
        acc = _v5;
        let _v6: any = acc;
        _branch7: {
          const _v8: any = (temps[1] ?? 0);
          acc = _v8;
          const _v9: any = await rt.send(_v8, "cashHi", []);
          acc = _v9;
          _v6 = _v9;
          acc = _v6;
          if (rt.truth(_v6)) {
            const _v10: any = 32767;
            acc = _v10;
            _v6 = _v10;
            break _branch7;
          }
          const _v11: any = (temps[1] ?? 0);
          acc = _v11;
          const _v12: any = await rt.send(_v11, "cash", []);
          acc = _v12;
          const _v13: any = 0;
          acc = _v13;
          const _v14: any = rt.op("<", ...[_v12, _v13]);
          acc = _v14;
          _v6 = _v14;
          acc = _v6;
          if (rt.truth(_v6)) {
            const _v15: any = 0;
            acc = _v15;
            _v6 = _v15;
            break _branch7;
          }
          const _v16: any = (temps[1] ?? 0);
          acc = _v16;
          const _v17: any = await rt.send(_v16, "cash", []);
          acc = _v17;
          _v6 = _v17;
          break _branch7;
        }
        acc = _v6;
        return _v6;
        return acc;
      },
      // SCI Main.sc: proc0_12
      "proc0_12": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = (args[1] ?? 0);
        acc = _v1;
        const _v2: any = (args[3] ?? 0);
        acc = _v2;
        const _v3: any = rt.op("+", ...[_v1, _v2]);
        acc = _v3;
        const _v4: any = rt.setGlobal(455, _v3);
        acc = _v4;
        const _v5: any = 0;
        acc = _v5;
        const _v6: any = rt.setGlobal(454, _v5);
        acc = _v6;
        let _v7: any = acc;
        _branch8: {
          let _v9: any = 0;
          if (!rt.truth(_v9)) {
            const _v10: any = (args[1] ?? 0);
            acc = _v10;
            const _v11: any = 0;
            acc = _v11;
            const _v12: any = rt.op("<", ...[_v10, _v11]);
            acc = _v12;
            _v9 = _v12;
          }
          if (!rt.truth(_v9)) {
            const _v13: any = (args[3] ?? 0);
            acc = _v13;
            const _v14: any = 0;
            acc = _v14;
            const _v15: any = rt.op("<", ...[_v13, _v14]);
            acc = _v15;
            _v9 = _v15;
          }
          acc = _v9;
          _v7 = _v9;
          acc = _v7;
          if (rt.truth(_v7)) {
            let _v16: any = acc;
            let _v17: any = 1;
            if (rt.truth(_v17)) {
              const _v18: any = rt.global(455);
              acc = _v18;
              const _v19: any = 0;
              acc = _v19;
              const _v20: any = rt.op("<", ...[_v18, _v19]);
              acc = _v20;
              _v17 = _v20;
            }
            if (rt.truth(_v17)) {
              let _v21: any = 0;
              if (!rt.truth(_v21)) {
                const _v22: any = (args[0] ?? 0);
                acc = _v22;
                _v21 = _v22;
              }
              if (!rt.truth(_v21)) {
                const _v23: any = (args[2] ?? 0);
                acc = _v23;
                _v21 = _v23;
              }
              acc = _v21;
              _v17 = _v21;
            }
            acc = _v17;
            _v16 = _v17;
            if (rt.truth(_v17)) {
              const _v24: any = -32768;
              acc = _v24;
              const _v25: any = rt.setGlobal(455, rt.op("+", rt.global(455), _v24));
              acc = _v25;
              _v16 = _v25;
              const _v26: any = -1;
              acc = _v26;
              const _v27: any = rt.setGlobal(454, _v26);
              acc = _v27;
              _v16 = _v27;
            }
            acc = _v16;
            _v7 = _v16;
            break _branch8;
          }
          const _v28: any = rt.global(455);
          acc = _v28;
          const _v29: any = 32767;
          acc = _v29;
          const _v30: any = rt.op("u>=", ...[_v28, _v29]);
          acc = _v30;
          _v7 = _v30;
          acc = _v7;
          if (rt.truth(_v7)) {
            const _v31: any = 1;
            acc = _v31;
            const _v32: any = rt.setGlobal(454, _v31);
            acc = _v32;
            _v7 = _v32;
            const _v33: any = -32768;
            acc = _v33;
            const _v34: any = rt.setGlobal(455, rt.op("+", rt.global(455), _v33));
            acc = _v34;
            _v7 = _v34;
            break _branch8;
          }
        }
        acc = _v7;
        const _v35: any = (args[0] ?? 0);
        acc = _v35;
        const _v36: any = (args[2] ?? 0);
        acc = _v36;
        const _v37: any = rt.op("+", ...[_v35, _v36]);
        acc = _v37;
        const _v38: any = rt.setGlobal(454, rt.op("+", rt.global(454), _v37));
        acc = _v38;
        return acc;
      },
      // SCI Main.sc: proc0_13
      "proc0_13": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0];
        let _v1: any = acc;
        const _v2: any = argc;
        acc = _v2;
        const _v3: any = 2;
        acc = _v3;
        const _v4: any = rt.op("<", ...[_v2, _v3]);
        acc = _v4;
        _v1 = _v4;
        if (rt.truth(_v4)) {
          const _v5: any = rt.global(302);
          acc = _v5;
          _v1 = _v5;
        } else {
          const _v6: any = (args[1] ?? 0);
          acc = _v6;
          _v1 = _v6;
        }
        acc = _v1;
        const _v7: any = (temps[1] = _v1);
        acc = _v7;
        let _v8: any = acc;
        const _v9: any = (temps[1] ?? 0);
        acc = _v9;
        const _v10: any = await rt.send(_v9, "hapStat", []);
        acc = _v10;
        const _v11: any = (args[0] ?? 0);
        acc = _v11;
        const _v12: any = rt.op("+", ...[_v10, _v11]);
        acc = _v12;
        const _v13: any = (temps[0] = _v12);
        acc = _v13;
        const _v14: any = 100;
        acc = _v14;
        const _v15: any = rt.op(">", ...[_v13, _v14]);
        acc = _v15;
        _v8 = _v15;
        if (rt.truth(_v15)) {
          const _v16: any = 100;
          acc = _v16;
          const _v17: any = (temps[0] = _v16);
          acc = _v17;
          _v8 = _v17;
        }
        acc = _v8;
        let _v18: any = acc;
        const _v19: any = (temps[0] ?? 0);
        acc = _v19;
        const _v20: any = 0;
        acc = _v20;
        const _v21: any = rt.op("<", ...[_v19, _v20]);
        acc = _v21;
        _v18 = _v21;
        if (rt.truth(_v21)) {
          const _v22: any = 0;
          acc = _v22;
          const _v23: any = (temps[0] = _v22);
          acc = _v23;
          _v18 = _v23;
        }
        acc = _v18;
        const _v24: any = (temps[0] ?? 0);
        acc = _v24;
        const _v25: any = (temps[1] ?? 0);
        acc = _v25;
        const _v26: any = await rt.send(_v25, "hapStat", [_v24]);
        acc = _v26;
        return acc;
      },
      // SCI Main.sc: proc0_14
      "proc0_14": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        let _v1: any = acc;
        let _v2: any = 1;
        if (rt.truth(_v2)) {
          const _v3: any = rt.global(427);
          acc = _v3;
          _v2 = _v3;
        }
        if (rt.truth(_v2)) {
          const _v4: any = rt.global(302);
          acc = _v4;
          const _v5: any = 1;
          acc = _v5;
          const _v6: any = 2;
          acc = _v6;
          const _v7: any = await rt.call(0, "ScriptID", [_v5, _v6], this);
          acc = _v7;
          const _v8: any = await rt.send(_v7, "indexOf", [_v4]);
          acc = _v8;
          const _v9: any = 13;
          acc = _v9;
          const _v10: any = rt.op("*", ...[_v8, _v9]);
          acc = _v10;
          const _v11: any = rt.global(400);
          acc = _v11;
          const _v12: any = rt.op("+", ...[_v10, _v11]);
          acc = _v12;
          const _v13: any = (temps[0] = _v12);
          acc = _v13;
          const _v14: any = rt.global((690 + (Number(_v13) & 65535)));
          acc = _v14;
          const _v15: any = rt.op("not", ...[_v14]);
          acc = _v15;
          _v2 = _v15;
        }
        acc = _v2;
        _v1 = _v2;
        if (rt.truth(_v2)) {
          const _v16: any = 1;
          acc = _v16;
          const _v17: any = (temps[0] ?? 0);
          acc = _v17;
          const _v18: any = rt.setGlobal((690 + (Number(_v17) & 65535)), _v16);
          acc = _v18;
          return _v18;
          _v1 = acc;
        }
        acc = _v1;
        const _v19: any = 0;
        acc = _v19;
        return _v19;
        return acc;
      },
      // SCI Main.sc: proc0_15
      "proc0_15": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        let _v1: any = acc;
        let _v2: any = 1;
        if (rt.truth(_v2)) {
          const _v3: any = (args[0] ?? 0);
          acc = _v3;
          _v2 = _v3;
        }
        if (rt.truth(_v2)) {
          const _v4: any = rt.object(255, "Dialog");
          acc = _v4;
          const _v5: any = (args[0] ?? 0);
          acc = _v5;
          const _v6: any = await rt.send(_v5, "isMemberOf", [_v4]);
          acc = _v6;
          _v2 = _v6;
        }
        acc = _v2;
        _v1 = _v2;
        if (rt.truth(_v2)) {
          const _v9: any = 0;
          acc = _v9;
          const _v10: any = (temps[0] = _v9);
          acc = _v10;
          _loop7: for (;;) {
            const _v11: any = (temps[0] ?? 0);
            acc = _v11;
            const _v12: any = (args[0] ?? 0);
            acc = _v12;
            const _v13: any = await rt.send(_v12, "size", []);
            acc = _v13;
            const _v14: any = rt.op("<", ...[_v11, _v13]);
            acc = _v14;
            if (!rt.truth(_v14)) break _loop7;
            _continue8: {
              let _v15: any = acc;
              let _v16: any = 1;
              if (rt.truth(_v16)) {
                const _v17: any = rt.object(255, "ErasableDIcon");
                acc = _v17;
                const _v18: any = (temps[0] ?? 0);
                acc = _v18;
                const _v19: any = (args[0] ?? 0);
                acc = _v19;
                const _v20: any = await rt.send(_v19, "at", [_v18]);
                acc = _v20;
                const _v21: any = await rt.send(_v20, "isKindOf", [_v17]);
                acc = _v21;
                _v16 = _v21;
              }
              if (rt.truth(_v16)) {
                const _v22: any = (temps[0] ?? 0);
                acc = _v22;
                const _v23: any = (args[0] ?? 0);
                acc = _v23;
                const _v24: any = await rt.send(_v23, "at", [_v22]);
                acc = _v24;
                const _v25: any = await rt.send(_v24, "state", []);
                acc = _v25;
                const _v26: any = 1;
                acc = _v26;
                const _v27: any = rt.op("&", ...[_v25, _v26]);
                acc = _v27;
                _v16 = _v27;
              }
              acc = _v16;
              _v15 = _v16;
              if (rt.truth(_v16)) {
                const _v28: any = (args[1] ?? 0);
                acc = _v28;
                const _v29: any = (temps[0] ?? 0);
                acc = _v29;
                const _v30: any = (args[0] ?? 0);
                acc = _v30;
                const _v31: any = await rt.send(_v30, "at", [_v29]);
                acc = _v31;
                const _v32: any = await rt.send(_v31, _v28, []);
                acc = _v32;
                _v15 = _v32;
              }
              acc = _v15;
            }
            const _v33: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
            acc = _v33;
          }
          _v1 = acc;
        }
        acc = _v1;
        return acc;
      },
      // SCI Main.sc: proc0_16
      "proc0_16": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = 0;
        acc = _v1;
        const _v2: any = 0;
        acc = _v2;
        const _v3: any = (args[0] ?? 0);
        acc = _v3;
        const _v4: any = 69;
        acc = _v4;
        const _v5: any = 45;
        acc = _v5;
        const _v6: any = 1;
        acc = _v6;
        const _v7: any = await rt.call(0, "DrawCel", [_v1, _v2, _v3, _v4, _v5, _v6], this);
        acc = _v7;
        return acc;
      },
      // SCI Main.sc: proc0_17
      "proc0_17": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const _v1: any = rt.global(513);
        acc = _v1;
        const _v2: any = rt.setGlobal(514, _v1);
        acc = _v2;
        let _v3: any = acc;
        const _v4: any = (args[0] ?? 0);
        acc = _v4;
        _branch5: {
          const _v6: any = 1;
          acc = _v6;
          _v3 = rt.op("==", _v4, _v6);
          acc = _v3;
          if (rt.truth(_v3)) {
            let _v7: any = acc;
            const _v8: any = rt.global(535);
            acc = _v8;
            _v7 = _v8;
            if (rt.truth(_v8)) {
              const _v9: any = 121;
              acc = _v9;
              _v7 = _v9;
            } else {
              const _v10: any = 10;
              acc = _v10;
              _v7 = _v10;
            }
            acc = _v7;
            const _v11: any = rt.setGlobal(512, _v7);
            acc = _v11;
            _v3 = _v11;
            let _v12: any = acc;
            const _v13: any = rt.global(535);
            acc = _v13;
            _v12 = _v13;
            if (rt.truth(_v13)) {
              const _v14: any = 27;
              acc = _v14;
              _v12 = _v14;
            } else {
              const _v15: any = 0;
              acc = _v15;
              _v12 = _v15;
            }
            acc = _v12;
            const _v16: any = rt.setGlobal(511, _v12);
            acc = _v16;
            _v3 = _v16;
            const _v17: any = 6;
            acc = _v17;
            const _v18: any = rt.setGlobal(513, _v17);
            acc = _v18;
            _v3 = _v18;
            break _branch5;
          }
          const _v19: any = 2;
          acc = _v19;
          _v3 = rt.op("==", _v4, _v19);
          acc = _v3;
          if (rt.truth(_v3)) {
            let _v20: any = acc;
            const _v21: any = rt.global(535);
            acc = _v21;
            _v20 = _v21;
            if (rt.truth(_v21)) {
              const _v22: any = 119;
              acc = _v22;
              _v20 = _v22;
            } else {
              const _v23: any = 11;
              acc = _v23;
              _v20 = _v23;
            }
            acc = _v20;
            const _v24: any = rt.setGlobal(512, _v20);
            acc = _v24;
            _v3 = _v24;
            let _v25: any = acc;
            const _v26: any = rt.global(535);
            acc = _v26;
            _v25 = _v26;
            if (rt.truth(_v26)) {
              const _v27: any = 26;
              acc = _v27;
              _v25 = _v27;
            } else {
              const _v28: any = 1;
              acc = _v28;
              _v25 = _v28;
            }
            acc = _v25;
            const _v29: any = rt.setGlobal(511, _v25);
            acc = _v29;
            _v3 = _v29;
            const _v30: any = 7;
            acc = _v30;
            const _v31: any = rt.setGlobal(513, _v30);
            acc = _v31;
            _v3 = _v31;
            break _branch5;
          }
          const _v32: any = 3;
          acc = _v32;
          _v3 = rt.op("==", _v4, _v32);
          acc = _v3;
          if (rt.truth(_v3)) {
            let _v33: any = acc;
            const _v34: any = rt.global(535);
            acc = _v34;
            _v33 = _v34;
            if (rt.truth(_v34)) {
              const _v35: any = 136;
              acc = _v35;
              _v33 = _v35;
            } else {
              const _v36: any = 15;
              acc = _v36;
              _v33 = _v36;
            }
            acc = _v33;
            const _v37: any = rt.setGlobal(512, _v33);
            acc = _v37;
            _v3 = _v37;
            let _v38: any = acc;
            const _v39: any = rt.global(535);
            acc = _v39;
            _v38 = _v39;
            if (rt.truth(_v39)) {
              const _v40: any = 28;
              acc = _v40;
              _v38 = _v40;
            } else {
              const _v41: any = 8;
              acc = _v41;
              _v38 = _v41;
            }
            acc = _v38;
            const _v42: any = rt.setGlobal(511, _v38);
            acc = _v42;
            _v3 = _v42;
            const _v43: any = 8;
            acc = _v43;
            const _v44: any = rt.setGlobal(513, _v43);
            acc = _v44;
            _v3 = _v44;
            break _branch5;
          }
          let _v45: any = acc;
          const _v46: any = rt.global(535);
          acc = _v46;
          _v45 = _v46;
          if (rt.truth(_v46)) {
            const _v47: any = 128;
            acc = _v47;
            _v45 = _v47;
          } else {
            const _v48: any = 14;
            acc = _v48;
            _v45 = _v48;
          }
          acc = _v45;
          const _v49: any = rt.setGlobal(512, _v45);
          acc = _v49;
          _v3 = _v49;
          let _v50: any = acc;
          const _v51: any = rt.global(535);
          acc = _v51;
          _v50 = _v51;
          if (rt.truth(_v51)) {
            const _v52: any = 63;
            acc = _v52;
            _v50 = _v52;
          } else {
            const _v53: any = 4;
            acc = _v53;
            _v50 = _v53;
          }
          acc = _v50;
          const _v54: any = rt.setGlobal(511, _v50);
          acc = _v54;
          _v3 = _v54;
          const _v55: any = 5;
          acc = _v55;
          const _v56: any = rt.setGlobal(513, _v55);
          acc = _v56;
          _v3 = _v56;
          break _branch5;
        }
        acc = _v3;
        return acc;
      },
    },
    exports: {"0": "jones", "1": "proc0_1", "2": "proc0_2", "3": "proc0_3", "4": "bubbleWindow", "5": "invisibleWindow", "6": "proc0_6", "7": "proc0_7", "8": "proc0_8", "9": "proc0_9", "10": "proc0_10", "11": "proc0_11", "12": "proc0_12", "13": "proc0_13", "14": "proc0_14", "15": "proc0_15", "16": "proc0_16", "17": "proc0_17"},
  });
}
