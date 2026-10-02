// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/Save.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: ffadf1e01c999f3b744f69dfc2d0d21f04c4769b9e1761624414487dc3b53b05
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(990, {
    name: "Save",
    uses: [0, 255, 989, 996],
    locals: [],
    objects: [
    ],
    procedures: {
      // SCI Save.sc: proc990_0
      "proc990_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = rt.object(996, "User");
        acc = _v1;
        const _v2: any = await rt.send(_v1, "controls", []);
        acc = _v2;
        const _v3: any = (temps[116] = _v2);
        acc = _v3;
        const _v4: any = rt.global(19);
        acc = _v4;
        const _v5: any = (temps[117] = _v4);
        acc = _v5;
        const _v6: any = 999;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = rt.global(1);
        acc = _v8;
        const _v9: any = await rt.send(_v8, "setCursor", [_v6, _v7]);
        acc = _v9;
        const _v10: any = 1;
        acc = _v10;
        const _v11: any = rt.object(996, "User");
        acc = _v11;
        const _v12: any = await rt.send(_v11, "controls", [_v10]);
        acc = _v12;
        const _v13: any = 1;
        acc = _v13;
        const _v14: any = rt.object(989, "Sound");
        acc = _v14;
        const _v15: any = await rt.send(_v14, "pause", [_v13]);
        acc = _v15;
        const _v16: any = (temps[3] = _v15);
        acc = _v16;
        let _v17: any = acc;
        const _v18: any = 1;
        acc = _v18;
        const _v19: any = await rt.call(990, "proc990_3", [_v18], this);
        acc = _v19;
        _v17 = _v19;
        if (rt.truth(_v19)) {
          let _v20: any = acc;
          const _v21: any = rt.global(25);
          acc = _v21;
          _v20 = _v21;
          if (rt.truth(_v21)) {
            const _v22: any = rt.global(25);
            acc = _v22;
            const _v23: any = await rt.send(_v22, "dispose", []);
            acc = _v23;
            _v20 = _v23;
          }
          acc = _v20;
          _v17 = _v20;
          const _v24: any = rt.global(21);
          acc = _v24;
          const _v25: any = 1;
          acc = _v25;
          const _v26: any = rt.global(1);
          acc = _v26;
          const _v27: any = await rt.send(_v26, "setCursor", [_v24, _v25]);
          acc = _v27;
          const _v28: any = (temps[2] = _v27);
          acc = _v28;
          _v17 = _v28;
          let _v29: any = acc;
          const _v30: any = rt.global(1);
          acc = _v30;
          const _v31: any = await rt.send(_v30, "name", []);
          acc = _v31;
          const _v32: any = 1;
          acc = _v32;
          const _v33: any = rt.global(1);
          acc = _v33;
          const _v34: any = await rt.send(_v33, "name", []);
          acc = _v34;
          const _v35: any = rt.global(28);
          acc = _v35;
          const _v36: any = await rt.call(990, "SaveGame", [_v31, _v32, _v34, _v35], this);
          acc = _v36;
          const _v37: any = rt.op("not", ...[_v36]);
          acc = _v37;
          _v29 = _v37;
          if (rt.truth(_v37)) {
            const _v38: any = 990;
            acc = _v38;
            const _v39: any = 0;
            acc = _v39;
            const _v40: any = 33;
            acc = _v40;
            const _v41: any = 0;
            acc = _v41;
            const _v42: any = 70;
            acc = _v42;
            const _v43: any = 250;
            acc = _v43;
            const _v44: any = 81;
            acc = _v44;
            const _v45: any = "OK";
            acc = _v45;
            const _v46: any = 1;
            acc = _v46;
            const _v47: any = await rt.call(255, "Print", [_v38, _v39, _v40, _v41, _v42, _v43, _v44, _v45, _v46], this);
            acc = _v47;
            _v29 = _v47;
            const _v48: any = (temps[2] ?? 0);
            acc = _v48;
            const _v49: any = await rt.call(990, "HaveMouse", [], this);
            acc = _v49;
            const _v50: any = rt.global(1);
            acc = _v50;
            const _v51: any = await rt.send(_v50, "setCursor", [_v48, _v49]);
            acc = _v51;
            _v29 = _v51;
          } else {
            const _v52: any = (temps[2] ?? 0);
            acc = _v52;
            const _v53: any = await rt.call(990, "HaveMouse", [], this);
            acc = _v53;
            const _v54: any = rt.global(1);
            acc = _v54;
            const _v55: any = await rt.send(_v54, "setCursor", [_v52, _v53]);
            acc = _v55;
            _v29 = _v55;
            const _v56: any = 990;
            acc = _v56;
            const _v57: any = 1;
            acc = _v57;
            const _v58: any = 25;
            acc = _v58;
            const _v59: any = rt.global(426);
            acc = _v59;
            const _v60: any = await rt.call(255, "Print", [_v56, _v57, _v58, _v59], this);
            acc = _v60;
            _v29 = _v60;
          }
          acc = _v29;
          _v17 = _v29;
          const _v61: any = 0;
          acc = _v61;
          const _v62: any = await rt.call(990, "proc990_3", [_v61], this);
          acc = _v62;
          _v17 = _v62;
        }
        acc = _v17;
        const _v63: any = (temps[3] ?? 0);
        acc = _v63;
        const _v64: any = rt.object(989, "Sound");
        acc = _v64;
        const _v65: any = await rt.send(_v64, "pause", [_v63]);
        acc = _v65;
        const _v66: any = (temps[117] ?? 0);
        acc = _v66;
        const _v67: any = 1;
        acc = _v67;
        const _v68: any = rt.global(1);
        acc = _v68;
        const _v69: any = await rt.send(_v68, "setCursor", [_v66, _v67]);
        acc = _v69;
        const _v70: any = (temps[116] ?? 0);
        acc = _v70;
        const _v71: any = rt.object(996, "User");
        acc = _v71;
        const _v72: any = await rt.send(_v71, "controls", [_v70]);
        acc = _v72;
        return acc;
      },
      // SCI Save.sc: proc990_1
      "proc990_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = rt.object(996, "User");
        acc = _v1;
        const _v2: any = await rt.send(_v1, "controls", []);
        acc = _v2;
        const _v3: any = (temps[194] = _v2);
        acc = _v3;
        const _v4: any = rt.global(19);
        acc = _v4;
        const _v5: any = (temps[195] = _v4);
        acc = _v5;
        const _v6: any = 999;
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = rt.global(1);
        acc = _v8;
        const _v9: any = await rt.send(_v8, "setCursor", [_v6, _v7]);
        acc = _v9;
        const _v10: any = 1;
        acc = _v10;
        const _v11: any = rt.object(996, "User");
        acc = _v11;
        const _v12: any = await rt.send(_v11, "controls", [_v10]);
        acc = _v12;
        const _v13: any = rt.global(20);
        acc = _v13;
        const _v14: any = rt.global(1);
        acc = _v14;
        const _v15: any = await rt.send(_v14, "setCursor", [_v13]);
        acc = _v15;
        const _v16: any = (temps[0] = _v15);
        acc = _v16;
        const _v17: any = 1;
        acc = _v17;
        const _v18: any = rt.object(989, "Sound");
        acc = _v18;
        const _v19: any = await rt.send(_v18, "pause", [_v17]);
        acc = _v19;
        const _v20: any = (temps[1] = _v19);
        acc = _v20;
        let _v21: any = acc;
        const _v22: any = 1;
        acc = _v22;
        const _v23: any = await rt.call(990, "proc990_3", [_v22], this);
        acc = _v23;
        _v21 = _v23;
        if (rt.truth(_v23)) {
          let _v24: any = acc;
          const _v25: any = rt.global(25);
          acc = _v25;
          _v24 = _v25;
          if (rt.truth(_v25)) {
            const _v26: any = rt.global(25);
            acc = _v26;
            const _v27: any = await rt.send(_v26, "dispose", []);
            acc = _v27;
            _v24 = _v27;
          }
          acc = _v24;
          _v21 = _v24;
          let _v28: any = acc;
          const _v29: any = rt.global(1);
          acc = _v29;
          const _v30: any = await rt.send(_v29, "name", []);
          acc = _v30;
          const _v31: any = rt.ref("array", temps, 2);
          acc = _v31;
          const _v32: any = rt.ref("array", temps, 102);
          acc = _v32;
          const _v33: any = await rt.call(990, "GetSaveFiles", [_v30, _v31, _v32], this);
          acc = _v33;
          _v28 = _v33;
          if (rt.truth(_v33)) {
            const _v34: any = rt.global(21);
            acc = _v34;
            const _v35: any = 1;
            acc = _v35;
            const _v36: any = rt.global(1);
            acc = _v36;
            const _v37: any = await rt.send(_v36, "setCursor", [_v34, _v35]);
            acc = _v37;
            _v28 = _v37;
            let _v38: any = acc;
            const _v39: any = rt.global(1);
            acc = _v39;
            const _v40: any = await rt.send(_v39, "name", []);
            acc = _v40;
            const _v41: any = 1;
            acc = _v41;
            const _v42: any = rt.global(28);
            acc = _v42;
            const _v43: any = await rt.call(990, "CheckSaveGame", [_v40, _v41, _v42], this);
            acc = _v43;
            _v38 = _v43;
            if (rt.truth(_v43)) {
              let _v44: any = acc;
              const _v45: any = rt.global(1);
              acc = _v45;
              const _v46: any = await rt.send(_v45, "name", []);
              acc = _v46;
              const _v47: any = 1;
              acc = _v47;
              const _v48: any = rt.global(28);
              acc = _v48;
              const _v49: any = await rt.call(990, "RestoreGame", [_v46, _v47, _v48], this);
              acc = _v49;
              _v44 = _v49;
              if (rt.truth(_v49)) {
                const _v50: any = 0;
                acc = _v50;
                const _v51: any = rt.setGlobal(533, _v50);
                acc = _v51;
                _v44 = _v51;
              }
              acc = _v44;
              _v38 = _v44;
            } else {
              const _v52: any = 990;
              acc = _v52;
              const _v53: any = 2;
              acc = _v53;
              const _v54: any = 33;
              acc = _v54;
              const _v55: any = 0;
              acc = _v55;
              const _v56: any = 81;
              acc = _v56;
              const _v57: any = "OK";
              acc = _v57;
              const _v58: any = 1;
              acc = _v58;
              const _v59: any = 70;
              acc = _v59;
              const _v60: any = 200;
              acc = _v60;
              const _v61: any = await rt.call(255, "Print", [_v52, _v53, _v54, _v55, _v56, _v57, _v58, _v59, _v60], this);
              acc = _v61;
              _v38 = _v61;
              const _v62: any = (temps[0] ?? 0);
              acc = _v62;
              const _v63: any = await rt.call(990, "HaveMouse", [], this);
              acc = _v63;
              const _v64: any = rt.global(1);
              acc = _v64;
              const _v65: any = await rt.send(_v64, "setCursor", [_v62, _v63]);
              acc = _v65;
              _v38 = _v65;
            }
            acc = _v38;
            _v28 = _v38;
          } else {
            const _v66: any = rt.ref("array", temps, 114);
            acc = _v66;
            const _v67: any = 990;
            acc = _v67;
            const _v68: any = 3;
            acc = _v68;
            const _v69: any = rt.ref("array", temps, 154);
            acc = _v69;
            const _v70: any = await rt.call(990, "Format", [_v66, _v67, _v68, _v69], this);
            acc = _v70;
            const _v71: any = 81;
            acc = _v71;
            const _v72: any = "OK";
            acc = _v72;
            const _v73: any = 1;
            acc = _v73;
            const _v74: any = 70;
            acc = _v74;
            const _v75: any = 150;
            acc = _v75;
            const _v76: any = 33;
            acc = _v76;
            const _v77: any = 0;
            acc = _v77;
            const _v78: any = await rt.call(255, "Print", [_v70, _v71, _v72, _v73, _v74, _v75, _v76, _v77], this);
            acc = _v78;
            _v28 = _v78;
          }
          acc = _v28;
          _v21 = _v28;
          const _v79: any = 0;
          acc = _v79;
          const _v80: any = await rt.call(990, "proc990_3", [_v79], this);
          acc = _v80;
          _v21 = _v80;
        }
        acc = _v21;
        const _v81: any = (temps[1] ?? 0);
        acc = _v81;
        const _v82: any = rt.object(989, "Sound");
        acc = _v82;
        const _v83: any = await rt.send(_v82, "pause", [_v81]);
        acc = _v83;
        const _v84: any = (temps[195] ?? 0);
        acc = _v84;
        const _v85: any = 1;
        acc = _v85;
        const _v86: any = rt.global(1);
        acc = _v86;
        const _v87: any = await rt.send(_v86, "setCursor", [_v84, _v85]);
        acc = _v87;
        const _v88: any = (temps[194] ?? 0);
        acc = _v88;
        const _v89: any = rt.object(996, "User");
        acc = _v89;
        const _v90: any = await rt.send(_v89, "controls", [_v88]);
        acc = _v90;
        return acc;
      },
      // SCI Save.sc: proc990_2
      "proc990_2": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        _loop1: for (;;) {
          _continue2: {
            let _v3: any = acc;
            const _v4: any = 990;
            acc = _v4;
            const _v5: any = 4;
            acc = _v5;
            const _v6: any = 33;
            acc = _v6;
            const _v7: any = 0;
            acc = _v7;
            const _v8: any = 41;
            acc = _v8;
            const _v9: any = rt.ref("array", temps, 1);
            acc = _v9;
            const _v10: any = (args[0] ?? 0);
            acc = _v10;
            const _v11: any = await rt.call(990, "StrCpy", [_v9, _v10], this);
            acc = _v11;
            const _v12: any = 29;
            acc = _v12;
            const _v13: any = 81;
            acc = _v13;
            const _v14: any = "OK";
            acc = _v14;
            const _v15: any = 1;
            acc = _v15;
            const _v16: any = 81;
            acc = _v16;
            const _v17: any = "Cancel";
            acc = _v17;
            const _v18: any = 0;
            acc = _v18;
            const _v19: any = 70;
            acc = _v19;
            const _v20: any = 200;
            acc = _v20;
            const _v21: any = await rt.call(255, "Print", [_v4, _v5, _v6, _v7, _v8, _v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18, _v19, _v20], this);
            acc = _v21;
            const _v22: any = (temps[0] = _v21);
            acc = _v22;
            const _v23: any = rt.op("not", ...[_v22]);
            acc = _v23;
            _v3 = _v23;
            if (rt.truth(_v23)) {
              const _v24: any = 0;
              acc = _v24;
              return _v24;
              _v3 = acc;
            }
            acc = _v3;
            let _v25: any = acc;
            const _v26: any = rt.ref("array", temps, 1);
            acc = _v26;
            const _v27: any = await rt.call(990, "StrLen", [_v26], this);
            acc = _v27;
            const _v28: any = rt.op("not", ...[_v27]);
            acc = _v28;
            _v25 = _v28;
            if (rt.truth(_v28)) {
              const _v29: any = rt.ref("array", temps, 1);
              acc = _v29;
              const _v30: any = await rt.call(990, "GetCWD", [_v29], this);
              acc = _v30;
              _v25 = _v30;
            }
            acc = _v25;
            let _v31: any = acc;
            const _v32: any = rt.ref("array", temps, 1);
            acc = _v32;
            const _v33: any = await rt.call(990, "ValidPath", [_v32], this);
            acc = _v33;
            _v31 = _v33;
            if (rt.truth(_v33)) {
              const _v34: any = (args[0] ?? 0);
              acc = _v34;
              const _v35: any = rt.ref("array", temps, 1);
              acc = _v35;
              const _v36: any = await rt.call(990, "StrCpy", [_v34, _v35], this);
              acc = _v36;
              _v31 = _v36;
              const _v37: any = 1;
              acc = _v37;
              return _v37;
              _v31 = acc;
            } else {
              const _v38: any = rt.ref("array", temps, 34);
              acc = _v38;
              const _v39: any = 990;
              acc = _v39;
              const _v40: any = 5;
              acc = _v40;
              const _v41: any = rt.ref("array", temps, 1);
              acc = _v41;
              const _v42: any = await rt.call(990, "Format", [_v38, _v39, _v40, _v41], this);
              acc = _v42;
              const _v43: any = 33;
              acc = _v43;
              const _v44: any = 0;
              acc = _v44;
              const _v45: any = 70;
              acc = _v45;
              const _v46: any = 200;
              acc = _v46;
              const _v47: any = await rt.call(255, "Print", [_v42, _v43, _v44, _v45, _v46], this);
              acc = _v47;
              _v31 = _v47;
            }
            acc = _v31;
          }
        }
        return acc;
      },
      // SCI Save.sc: proc990_3
      "proc990_3": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const _v1: any = 1;
        acc = _v1;
        const _v2: any = (temps[0] = _v1);
        acc = _v2;
        const _v3: any = 0;
        acc = _v3;
        const _v4: any = rt.global(30);
        acc = _v4;
        const _v5: any = rt.ref("array", temps, 1);
        acc = _v5;
        const _v6: any = await rt.call(990, "DeviceInfo", [_v3, _v4, _v5], this);
        acc = _v6;
        const _v7: any = 1;
        acc = _v7;
        const _v8: any = rt.ref("array", temps, 41);
        acc = _v8;
        const _v9: any = await rt.call(990, "DeviceInfo", [_v7, _v8], this);
        acc = _v9;
        let _v10: any = acc;
        let _v11: any = 1;
        if (rt.truth(_v11)) {
          const _v12: any = 2;
          acc = _v12;
          const _v13: any = rt.ref("array", temps, 1);
          acc = _v13;
          const _v14: any = rt.ref("array", temps, 41);
          acc = _v14;
          const _v15: any = await rt.call(990, "DeviceInfo", [_v12, _v13, _v14], this);
          acc = _v15;
          _v11 = _v15;
        }
        if (rt.truth(_v11)) {
          const _v16: any = 3;
          acc = _v16;
          const _v17: any = rt.ref("array", temps, 41);
          acc = _v17;
          const _v18: any = await rt.call(990, "DeviceInfo", [_v16, _v17], this);
          acc = _v18;
          _v11 = _v18;
        }
        acc = _v11;
        _v10 = _v11;
        if (rt.truth(_v11)) {
          const _v19: any = rt.ref("array", temps, 81);
          acc = _v19;
          const _v20: any = 990;
          acc = _v20;
          const _v21: any = 6;
          acc = _v21;
          let _v22: any = acc;
          const _v23: any = (args[0] ?? 0);
          acc = _v23;
          _v22 = _v23;
          if (rt.truth(_v23)) {
            const _v24: any = "SAVE GAME";
            acc = _v24;
            _v22 = _v24;
          } else {
            const _v25: any = "GAME";
            acc = _v25;
            _v22 = _v25;
          }
          acc = _v22;
          const _v26: any = rt.ref("array", temps, 41);
          acc = _v26;
          const _v27: any = await rt.call(990, "Format", [_v19, _v20, _v21, _v22, _v26], this);
          acc = _v27;
          _v10 = _v27;
          let _v28: any = acc;
          let _v29: any = acc;
          const _v30: any = (args[0] ?? 0);
          acc = _v30;
          _v29 = _v30;
          if (rt.truth(_v30)) {
            const _v31: any = rt.ref("array", temps, 81);
            acc = _v31;
            const _v32: any = 81;
            acc = _v32;
            const _v33: any = "OK";
            acc = _v33;
            const _v34: any = 1;
            acc = _v34;
            const _v35: any = 81;
            acc = _v35;
            const _v36: any = "Cancel";
            acc = _v36;
            const _v37: any = 0;
            acc = _v37;
            const _v38: any = 81;
            acc = _v38;
            const _v39: any = "Change Directory";
            acc = _v39;
            const _v40: any = 2;
            acc = _v40;
            const _v41: any = 70;
            acc = _v41;
            const _v42: any = 250;
            acc = _v42;
            const _v43: any = 33;
            acc = _v43;
            const _v44: any = 0;
            acc = _v44;
            const _v45: any = await rt.call(255, "Print", [_v31, _v32, _v33, _v34, _v35, _v36, _v37, _v38, _v39, _v40, _v41, _v42, _v43, _v44], this);
            acc = _v45;
            _v29 = _v45;
          } else {
            const _v46: any = rt.ref("array", temps, 81);
            acc = _v46;
            const _v47: any = 81;
            acc = _v47;
            const _v48: any = "OK";
            acc = _v48;
            const _v49: any = 1;
            acc = _v49;
            const _v50: any = 70;
            acc = _v50;
            const _v51: any = 150;
            acc = _v51;
            const _v52: any = 33;
            acc = _v52;
            const _v53: any = 0;
            acc = _v53;
            const _v54: any = await rt.call(255, "Print", [_v46, _v47, _v48, _v49, _v50, _v51, _v52, _v53], this);
            acc = _v54;
            _v29 = _v54;
          }
          acc = _v29;
          const _v55: any = (temps[0] = _v29);
          acc = _v55;
          const _v56: any = 2;
          acc = _v56;
          const _v57: any = rt.op("==", ...[_v55, _v56]);
          acc = _v57;
          _v28 = _v57;
          if (rt.truth(_v57)) {
            const _v58: any = rt.global(30);
            acc = _v58;
            const _v59: any = await rt.call(990, "proc990_2", [_v58], this);
            acc = _v59;
            const _v60: any = (temps[0] = _v59);
            acc = _v60;
            _v28 = _v60;
          }
          acc = _v28;
          _v10 = _v28;
        }
        acc = _v10;
        const _v61: any = (temps[0] ?? 0);
        acc = _v61;
        return _v61;
        return acc;
      },
    },
    exports: {"0": "proc990_0", "1": "proc990_1", "2": "proc990_2", "3": "proc990_3"},
  });
}
