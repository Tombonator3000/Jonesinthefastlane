// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/n109.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 121042af963408907135f0e7201af8b13a65c3863adb6146a914515c3120b495
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(109, {
    name: "n109",
    uses: [],
    locals: [],
    objects: [
    ],
    procedures: {
      // SCI n109.sc: proc109_0
      "proc109_0": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
        let acc: any = 0;
        let argc: number = args.length;
        const temps: any[] = [0, 0, 0];
        let _v1: any = acc;
        let _v2: any = acc;
        const _v3: any = (args[0] ?? 0);
        acc = _v3;
        const _v4: any = 100;
        acc = _v4;
        const _v5: any = rt.op("<", ...[_v3, _v4]);
        acc = _v5;
        _v2 = _v5;
        if (rt.truth(_v5)) {
          const _v6: any = (args[0] ?? 0);
          acc = _v6;
          const _v7: any = 100;
          acc = _v7;
          const _v8: any = (args[0] ?? 0);
          acc = _v8;
          const _v9: any = rt.op("-", ...[_v7, _v8]);
          acc = _v9;
          const _v10: any = 2;
          acc = _v10;
          const _v11: any = rt.op("*", ...[_v9, _v10]);
          acc = _v11;
          const _v12: any = 3;
          acc = _v12;
          const _v13: any = rt.op("/", ...[_v11, _v12]);
          acc = _v13;
          const _v14: any = rt.op("-", ...[_v6, _v13]);
          acc = _v14;
          _v2 = _v14;
        } else {
          const _v15: any = (args[0] ?? 0);
          acc = _v15;
          const _v16: any = (args[0] ?? 0);
          acc = _v16;
          const _v17: any = 100;
          acc = _v17;
          const _v18: any = rt.op("-", ...[_v16, _v17]);
          acc = _v18;
          const _v19: any = 2;
          acc = _v19;
          const _v20: any = rt.op("*", ...[_v18, _v19]);
          acc = _v20;
          const _v21: any = 3;
          acc = _v21;
          const _v22: any = rt.op("/", ...[_v20, _v21]);
          acc = _v22;
          const _v23: any = rt.op("+", ...[_v15, _v22]);
          acc = _v23;
          _v2 = _v23;
        }
        acc = _v2;
        const _v24: any = (temps[0] = _v2);
        acc = _v24;
        const _v25: any = 50;
        acc = _v25;
        const _v26: any = rt.op("<", ...[_v24, _v25]);
        acc = _v26;
        _v1 = _v26;
        if (rt.truth(_v26)) {
          const _v27: any = 50;
          acc = _v27;
          const _v28: any = (temps[0] = _v27);
          acc = _v28;
          _v1 = _v28;
        }
        acc = _v1;
        let _v29: any = acc;
        let _v30: any = acc;
        const _v31: any = (args[1] ?? 0);
        acc = _v31;
        const _v32: any = (temps[0] ?? 0);
        acc = _v32;
        const _v33: any = 10;
        acc = _v33;
        const _v34: any = rt.op("/", ...[_v32, _v33]);
        acc = _v34;
        const _v35: any = rt.op("*", ...[_v31, _v34]);
        acc = _v35;
        const _v36: any = 0;
        acc = _v36;
        const _v37: any = rt.op("<", ...[_v35, _v36]);
        acc = _v37;
        _v30 = _v37;
        if (rt.truth(_v37)) {
          const _v38: any = 32767;
          acc = _v38;
          _v30 = _v38;
        } else {
          const _v39: any = (args[1] ?? 0);
          acc = _v39;
          const _v40: any = (temps[0] ?? 0);
          acc = _v40;
          const _v41: any = 10;
          acc = _v41;
          const _v42: any = rt.op("/", ...[_v40, _v41]);
          acc = _v42;
          const _v43: any = rt.op("*", ...[_v39, _v42]);
          acc = _v43;
          _v30 = _v43;
        }
        acc = _v30;
        const _v44: any = (temps[2] = _v30);
        acc = _v44;
        const _v45: any = 10;
        acc = _v45;
        const _v46: any = rt.op("/", ...[_v44, _v45]);
        acc = _v46;
        const _v47: any = (args[1] ?? 0);
        acc = _v47;
        const _v48: any = (temps[0] ?? 0);
        acc = _v48;
        const _v49: any = 10;
        acc = _v49;
        const _v50: any = rt.op("mod", ...[_v48, _v49]);
        acc = _v50;
        const _v51: any = rt.op("*", ...[_v47, _v50]);
        acc = _v51;
        const _v52: any = 100;
        acc = _v52;
        const _v53: any = rt.op("/", ...[_v51, _v52]);
        acc = _v53;
        const _v54: any = rt.op("+", ...[_v46, _v53]);
        acc = _v54;
        const _v55: any = (temps[1] = _v54);
        acc = _v55;
        const _v56: any = 1;
        acc = _v56;
        const _v57: any = rt.op("<", ...[_v55, _v56]);
        acc = _v57;
        _v29 = _v57;
        if (rt.truth(_v57)) {
          const _v58: any = 1;
          acc = _v58;
          const _v59: any = (temps[1] = _v58);
          acc = _v59;
          _v29 = _v59;
        }
        acc = _v29;
        const _v60: any = (temps[1] ?? 0);
        acc = _v60;
        return _v60;
        return acc;
      },
    },
    exports: {"0": "proc109_0"},
  });
}
