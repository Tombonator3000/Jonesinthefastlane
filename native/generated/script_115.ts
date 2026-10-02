// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/n115.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 7a43ca2cf8b66e59fdc0371a641e50af70b42d94fe4cf9fd8dba123db7ad9cd4
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(115, {
    name: "n115",
    uses: [0],
    locals: [0, 0],
    objects: [
    ],
    procedures: {
      // SCI n115.sc: localproc_0
      "localproc_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0];
        const _v1: any = (args[0] ?? 0);
        acc = _v1;
        const _v2: any = (args[1] ?? 0);
        acc = _v2;
        const _v3: any = rt.local(115, 1);
        acc = _v3;
        const _v4: any = rt.op("+", ...[_v1, _v2, _v3]);
        acc = _v4;
        const _v5: any = (temps[0] = _v4);
        acc = _v5;
        const _v6: any = 10;
        acc = _v6;
        const _v7: any = rt.op("mod", ...[_v5, _v6]);
        acc = _v7;
        const _v8: any = rt.setLocal(115, 0, _v7);
        acc = _v8;
        const _v9: any = (temps[0] ?? 0);
        acc = _v9;
        const _v10: any = 10;
        acc = _v10;
        const _v11: any = rt.op("/", ...[_v9, _v10]);
        acc = _v11;
        const _v12: any = rt.setLocal(115, 1, _v11);
        acc = _v12;
        const _v13: any = rt.local(115, 0);
        acc = _v13;
        return _v13;
        return acc;
      },
      // SCI n115.sc: proc115_0
      "proc115_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let _v1: any = acc;
        let _v2: any = 0;
        if (!rt.truth(_v2)) {
          const _v3: any = (args[0] ?? 0);
          acc = _v3;
          const _v4: any = rt.op("not", ...[_v3]);
          acc = _v4;
          _v2 = _v4;
        }
        if (!rt.truth(_v2)) {
          const _v5: any = (args[1] ?? 0);
          acc = _v5;
          const _v6: any = 0;
          acc = _v6;
          const _v7: any = rt.op("<", ...[_v5, _v6]);
          acc = _v7;
          _v2 = _v7;
        }
        acc = _v2;
        _v1 = _v2;
        if (rt.truth(_v2)) {
          const _v8: any = rt.ref("global", 0, 275);
          acc = _v8;
          const _v9: any = 115;
          acc = _v9;
          const _v10: any = 0;
          acc = _v10;
          const _v11: any = (args[1] ?? 0);
          acc = _v11;
          const _v12: any = await rt.call(115, "Format", [_v8, _v9, _v10, _v11], this);
          acc = _v12;
          const _v13: any = (temps[44] = _v12);
          acc = _v13;
          _v1 = _v13;
        } else {
          const _v14: any = 0;
          acc = _v14;
          const _v15: any = rt.setLocal(115, 1, _v14);
          acc = _v15;
          _v1 = _v15;
          const _v16: any = 0;
          acc = _v16;
          const _v17: any = (temps[42] = _v16);
          acc = _v17;
          _v1 = _v17;
          const _v18: any = 32766;
          acc = _v18;
          const _v19: any = (temps[41] = _v18);
          acc = _v19;
          _v1 = _v19;
          _loop20: for (;;) {
            _continue21: {
              const _v22: any = (temps[41] ?? 0);
              acc = _v22;
              const _v23: any = 10;
              acc = _v23;
              const _v24: any = rt.op("mod", ...[_v22, _v23]);
              acc = _v24;
              const _v25: any = (args[0] ?? 0);
              acc = _v25;
              const _v26: any = rt.op("*", ...[_v24, _v25]);
              acc = _v26;
              const _v27: any = (args[1] ?? 0);
              acc = _v27;
              const _v28: any = 10;
              acc = _v28;
              const _v29: any = rt.op("mod", ...[_v27, _v28]);
              acc = _v29;
              const _v30: any = await rt.call(115, "localproc_0", [_v26, _v29], this);
              acc = _v30;
              const _v31: any = (temps[0] = _v30);
              acc = _v31;
              const _v32: any = 10;
              acc = _v32;
              const _v33: any = (args[1] = rt.op("/", (args[1] ?? 0), _v32));
              acc = _v33;
              const _v34: any = 10;
              acc = _v34;
              const _v35: any = (temps[41] = rt.op("/", (temps[41] ?? 0), _v34));
              acc = _v35;
              const _v36: any = rt.ref("array", temps, 1);
              acc = _v36;
              const _v37: any = (temps[42] ?? 0);
              acc = _v37;
              const _v38: any = (temps[0] ?? 0);
              acc = _v38;
              const _v39: any = 48;
              acc = _v39;
              const _v40: any = rt.op("+", ...[_v38, _v39]);
              acc = _v40;
              const _v41: any = await rt.call(115, "StrAt", [_v36, _v37, _v40], this);
              acc = _v41;
              const _v42: any = (temps[42] = rt.op("+", (temps[42] ?? 0), 1));
              acc = _v42;
              let _v43: any = acc;
              const _v44: any = (args[1] ?? 0);
              acc = _v44;
              const _v45: any = 0;
              acc = _v45;
              const _v46: any = rt.op("==", ...[_v44, _v45]);
              acc = _v46;
              _v43 = _v46;
              if (rt.truth(_v46)) {
                let _v47: any = acc;
                const _v48: any = (temps[41] ?? 0);
                acc = _v48;
                const _v49: any = 0;
                acc = _v49;
                const _v50: any = rt.op("==", ...[_v48, _v49]);
                acc = _v50;
                _v47 = _v50;
                if (rt.truth(_v50)) {
                  let _v51: any = acc;
                  const _v52: any = rt.local(115, 1);
                  acc = _v52;
                  _v51 = _v52;
                  if (rt.truth(_v52)) {
                    const _v53: any = rt.local(115, 1);
                    acc = _v53;
                    const _v54: any = (args[1] = _v53);
                    acc = _v54;
                    _v51 = _v54;
                    const _v55: any = 0;
                    acc = _v55;
                    const _v56: any = (args[0] = _v55);
                    acc = _v56;
                    _v51 = _v56;
                    const _v57: any = 0;
                    acc = _v57;
                    const _v58: any = (temps[41] = _v57);
                    acc = _v58;
                    _v51 = _v58;
                    const _v59: any = 0;
                    acc = _v59;
                    const _v60: any = rt.setLocal(115, 1, _v59);
                    acc = _v60;
                    _v51 = _v60;
                    break _continue21;
                    _v51 = acc;
                  }
                  acc = _v51;
                  _v47 = _v51;
                } else {
                  break _continue21;
                  _v47 = acc;
                }
                acc = _v47;
                _v43 = _v47;
              } else {
                break _continue21;
                _v43 = acc;
              }
              acc = _v43;
              break _loop20;
            }
          }
          _v1 = acc;
          const _v61: any = rt.ref("array", temps, 1);
          acc = _v61;
          const _v62: any = (temps[42] ?? 0);
          acc = _v62;
          const _v63: any = 0;
          acc = _v63;
          const _v64: any = await rt.call(115, "StrAt", [_v61, _v62, _v63], this);
          acc = _v64;
          _v1 = _v64;
          const _v67: any = rt.ref("array", temps, 1);
          acc = _v67;
          const _v68: any = await rt.call(115, "StrLen", [_v67], this);
          acc = _v68;
          const _v69: any = 1;
          acc = _v69;
          const _v70: any = rt.op("-", ...[_v68, _v69]);
          acc = _v70;
          const _v71: any = (temps[43] = _v70);
          acc = _v71;
          const _v72: any = (temps[42] = _v71);
          acc = _v72;
          _loop65: for (;;) {
            const _v73: any = (temps[42] ?? 0);
            acc = _v73;
            const _v74: any = 0;
            acc = _v74;
            const _v75: any = rt.op(">=", ...[_v73, _v74]);
            acc = _v75;
            if (!rt.truth(_v75)) break _loop65;
            _continue66: {
              const _v76: any = rt.ref("array", temps, 1);
              acc = _v76;
              const _v77: any = (temps[42] ?? 0);
              acc = _v77;
              const _v78: any = await rt.call(115, "StrAt", [_v76, _v77], this);
              acc = _v78;
              const _v79: any = (temps[0] = _v78);
              acc = _v79;
              const _v80: any = rt.ref("array", temps, 21);
              acc = _v80;
              const _v81: any = (temps[43] ?? 0);
              acc = _v81;
              const _v82: any = (temps[42] ?? 0);
              acc = _v82;
              const _v83: any = rt.op("-", ...[_v81, _v82]);
              acc = _v83;
              const _v84: any = (temps[0] ?? 0);
              acc = _v84;
              const _v85: any = await rt.call(115, "StrAt", [_v80, _v83, _v84], this);
              acc = _v85;
            }
            const _v86: any = (temps[42] = rt.op("-", (temps[42] ?? 0), 1));
            acc = _v86;
          }
          _v1 = acc;
          const _v87: any = rt.ref("array", temps, 21);
          acc = _v87;
          const _v88: any = (temps[43] ?? 0);
          acc = _v88;
          const _v89: any = 1;
          acc = _v89;
          const _v90: any = rt.op("+", ...[_v88, _v89]);
          acc = _v90;
          const _v91: any = 0;
          acc = _v91;
          const _v92: any = await rt.call(115, "StrAt", [_v87, _v90, _v91], this);
          acc = _v92;
          _v1 = _v92;
          const _v93: any = rt.ref("global", 0, 275);
          acc = _v93;
          const _v94: any = rt.ref("array", temps, 21);
          acc = _v94;
          const _v95: any = await rt.call(115, "StrCpy", [_v93, _v94], this);
          acc = _v95;
          _v1 = _v95;
          const _v96: any = rt.ref("global", 0, 275);
          acc = _v96;
          const _v97: any = (temps[44] = _v96);
          acc = _v97;
          _v1 = _v97;
        }
        acc = _v1;
        const _v98: any = (temps[44] ?? 0);
        acc = _v98;
        return _v98;
        return acc;
      },
      // SCI n115.sc: proc115_1
      "proc115_1": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0, 0, 0];
        const _v1: any = 0;
        acc = _v1;
        const _v2: any = (temps[4] = _v1);
        acc = _v2;
        const _v3: any = (temps[3] = _v2);
        acc = _v3;
        const _v4: any = 0;
        acc = _v4;
        const _v5: any = (temps[1] = _v4);
        acc = _v5;
        const _v6: any = (args[0] ?? 0);
        acc = _v6;
        const _v7: any = await rt.send(_v6, "shares", []);
        acc = _v7;
        const _v8: any = (temps[2] = _v7);
        acc = _v8;
        const _v11: any = 0;
        acc = _v11;
        const _v12: any = (temps[0] = _v11);
        acc = _v12;
        _loop9: for (;;) {
          const _v13: any = (temps[0] ?? 0);
          acc = _v13;
          const _v14: any = (args[1] ?? 0);
          acc = _v14;
          const _v15: any = rt.op("<", ...[_v13, _v14]);
          acc = _v15;
          if (!rt.truth(_v15)) break _loop9;
          _continue10: {
            const _v16: any = (temps[3] ?? 0);
            acc = _v16;
            const _v17: any = (temps[4] ?? 0);
            acc = _v17;
            const _v18: any = (temps[1] ?? 0);
            acc = _v18;
            const _v19: any = (temps[2] ?? 0);
            acc = _v19;
            const _v20: any = await rt.call(0, "proc0_12", [_v16, _v17, _v18, _v19], this);
            acc = _v20;
            const _v21: any = rt.global(454);
            acc = _v21;
            const _v22: any = (temps[3] = _v21);
            acc = _v22;
            const _v23: any = rt.global(455);
            acc = _v23;
            const _v24: any = (temps[4] = _v23);
            acc = _v24;
          }
          const _v25: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
          acc = _v25;
        }
        const _v26: any = (temps[3] ?? 0);
        acc = _v26;
        const _v27: any = rt.setGlobal(454, _v26);
        acc = _v27;
        const _v28: any = (temps[4] ?? 0);
        acc = _v28;
        const _v29: any = rt.setGlobal(455, _v28);
        acc = _v29;
        return acc;
      },
    },
    exports: {"0": "proc115_0", "1": "proc115_1"},
  });
}
