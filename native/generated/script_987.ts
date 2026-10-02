// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/Gauge.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 7443860080654d373ace768341a4507670464d8296d3c6be9c5b4ef9fb5adab9
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(987, {
    name: "Gauge",
    uses: [0, 255, 994],
    locals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    objects: [
      {
        name: "Gauge",
        className: "Dialog",
        parent: {"script": 255, "name": "Dialog"},
        isClass: true,
        properties: {"description": 0, "higher": "up", "lower": "down", "normal": 7, "minimum": 0, "maximum": 15},
        methods: {
          // SCI Gauge.sc: Gauge.init
          "init": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = rt.object(994, "SysWindow");
            acc = _v1;
            const _v2: any = rt.set(this, "window", _v1);
            acc = _v2;
            const _v3: any = (args[0] ?? 0);
            acc = _v3;
            const _v4: any = this;
            acc = _v4;
            const _v5: any = await rt.send(_v4, "update", [_v3]);
            acc = _v5;
            const _v6: any = rt.get(this, "lower");
            acc = _v6;
            const _v7: any = 5;
            acc = _v7;
            const _v8: any = 5;
            acc = _v8;
            const _v9: any = rt.object(255, "DButton");
            acc = _v9;
            const _v10: any = await rt.send(_v9, "new", []);
            acc = _v10;
            const _v11: any = rt.setLocal(987, 2, _v10);
            acc = _v11;
            const _v12: any = await rt.send(_v11, "text", [_v6]);
            acc = _v12;
            const _v13: any = await rt.send(_v11, "moveTo", [_v7, _v8]);
            acc = _v13;
            const _v14: any = await rt.send(_v11, "setSize", []);
            acc = _v14;
            const _v15: any = rt.local(987, 2);
            acc = _v15;
            const _v16: any = this;
            acc = _v16;
            const _v17: any = await rt.send(_v16, "add", [_v15]);
            acc = _v17;
            const _v18: any = await rt.send(_v16, "setSize", []);
            acc = _v18;
            const _v19: any = rt.ref("local", 987, 7);
            acc = _v19;
            const _v20: any = rt.local(987, 2);
            acc = _v20;
            const _v21: any = await rt.send(_v20, "nsRight", []);
            acc = _v21;
            const _v22: any = 5;
            acc = _v22;
            const _v23: any = rt.op("+", ...[_v21, _v22]);
            acc = _v23;
            const _v24: any = 5;
            acc = _v24;
            const _v25: any = 0;
            acc = _v25;
            const _v26: any = rt.object(255, "DText");
            acc = _v26;
            const _v27: any = await rt.send(_v26, "new", []);
            acc = _v27;
            const _v28: any = rt.setLocal(987, 3, _v27);
            acc = _v28;
            const _v29: any = await rt.send(_v28, "text", [_v19]);
            acc = _v29;
            const _v30: any = await rt.send(_v28, "moveTo", [_v23, _v24]);
            acc = _v30;
            const _v31: any = await rt.send(_v28, "font", [_v25]);
            acc = _v31;
            const _v32: any = await rt.send(_v28, "setSize", []);
            acc = _v32;
            const _v33: any = rt.local(987, 3);
            acc = _v33;
            const _v34: any = this;
            acc = _v34;
            const _v35: any = await rt.send(_v34, "add", [_v33]);
            acc = _v35;
            const _v36: any = await rt.send(_v34, "setSize", []);
            acc = _v36;
            const _v37: any = rt.get(this, "higher");
            acc = _v37;
            const _v38: any = rt.local(987, 3);
            acc = _v38;
            const _v39: any = await rt.send(_v38, "nsRight", []);
            acc = _v39;
            const _v40: any = 5;
            acc = _v40;
            const _v41: any = rt.op("+", ...[_v39, _v40]);
            acc = _v41;
            const _v42: any = 5;
            acc = _v42;
            const _v43: any = rt.object(255, "DButton");
            acc = _v43;
            const _v44: any = await rt.send(_v43, "new", []);
            acc = _v44;
            const _v45: any = rt.setLocal(987, 1, _v44);
            acc = _v45;
            const _v46: any = await rt.send(_v45, "text", [_v37]);
            acc = _v46;
            const _v47: any = await rt.send(_v45, "moveTo", [_v41, _v42]);
            acc = _v47;
            const _v48: any = await rt.send(_v45, "setSize", []);
            acc = _v48;
            const _v49: any = rt.local(987, 1);
            acc = _v49;
            const _v50: any = this;
            acc = _v50;
            const _v51: any = await rt.send(_v50, "add", [_v49]);
            acc = _v51;
            const _v52: any = await rt.send(_v50, "setSize", []);
            acc = _v52;
            const _v53: any = 10;
            acc = _v53;
            const _v54: any = rt.set(this, "nsBottom", rt.op("+", rt.get(this, "nsBottom"), _v53));
            acc = _v54;
            const _v55: any = "OK";
            acc = _v55;
            const _v56: any = 5;
            acc = _v56;
            const _v57: any = rt.get(this, "nsBottom");
            acc = _v57;
            const _v58: any = rt.object(255, "DButton");
            acc = _v58;
            const _v59: any = await rt.send(_v58, "new", []);
            acc = _v59;
            const _v60: any = rt.setLocal(987, 4, _v59);
            acc = _v60;
            const _v61: any = await rt.send(_v60, "text", [_v55]);
            acc = _v61;
            const _v62: any = await rt.send(_v60, "setSize", []);
            acc = _v62;
            const _v63: any = await rt.send(_v60, "moveTo", [_v56, _v57]);
            acc = _v63;
            const _v64: any = "Normal";
            acc = _v64;
            const _v65: any = rt.local(987, 4);
            acc = _v65;
            const _v66: any = await rt.send(_v65, "nsRight", []);
            acc = _v66;
            const _v67: any = 5;
            acc = _v67;
            const _v68: any = rt.op("+", ...[_v66, _v67]);
            acc = _v68;
            const _v69: any = rt.get(this, "nsBottom");
            acc = _v69;
            const _v70: any = rt.object(255, "DButton");
            acc = _v70;
            const _v71: any = await rt.send(_v70, "new", []);
            acc = _v71;
            const _v72: any = rt.setLocal(987, 5, _v71);
            acc = _v72;
            const _v73: any = await rt.send(_v72, "text", [_v64]);
            acc = _v73;
            const _v74: any = await rt.send(_v72, "setSize", []);
            acc = _v74;
            const _v75: any = await rt.send(_v72, "moveTo", [_v68, _v69]);
            acc = _v75;
            const _v76: any = "Cancel";
            acc = _v76;
            const _v77: any = rt.local(987, 5);
            acc = _v77;
            const _v78: any = await rt.send(_v77, "nsRight", []);
            acc = _v78;
            const _v79: any = 5;
            acc = _v79;
            const _v80: any = rt.op("+", ...[_v78, _v79]);
            acc = _v80;
            const _v81: any = rt.get(this, "nsBottom");
            acc = _v81;
            const _v82: any = rt.object(255, "DButton");
            acc = _v82;
            const _v83: any = await rt.send(_v82, "new", []);
            acc = _v83;
            const _v84: any = rt.setLocal(987, 6, _v83);
            acc = _v84;
            const _v85: any = await rt.send(_v84, "text", [_v76]);
            acc = _v85;
            const _v86: any = await rt.send(_v84, "setSize", []);
            acc = _v86;
            const _v87: any = await rt.send(_v84, "moveTo", [_v80, _v81]);
            acc = _v87;
            const _v88: any = rt.local(987, 4);
            acc = _v88;
            const _v89: any = rt.local(987, 5);
            acc = _v89;
            const _v90: any = rt.local(987, 6);
            acc = _v90;
            const _v91: any = this;
            acc = _v91;
            const _v92: any = await rt.send(_v91, "add", [_v88, _v89, _v90]);
            acc = _v92;
            const _v93: any = await rt.send(_v91, "setSize", []);
            acc = _v93;
            const _v94: any = rt.get(this, "nsRight");
            acc = _v94;
            const _v95: any = rt.local(987, 6);
            acc = _v95;
            const _v96: any = await rt.send(_v95, "nsRight", []);
            acc = _v96;
            const _v97: any = rt.op("-", ...[_v94, _v96]);
            acc = _v97;
            const _v98: any = 5;
            acc = _v98;
            const _v99: any = rt.op("-", ...[_v97, _v98]);
            acc = _v99;
            const _v100: any = (temps[0] = _v99);
            acc = _v100;
            const _v101: any = rt.get(this, "description");
            acc = _v101;
            const _v102: any = rt.global(23);
            acc = _v102;
            const _v103: any = rt.get(this, "nsRight");
            acc = _v103;
            const _v104: any = 10;
            acc = _v104;
            const _v105: any = rt.op("-", ...[_v103, _v104]);
            acc = _v105;
            const _v106: any = 5;
            acc = _v106;
            const _v107: any = 5;
            acc = _v107;
            const _v108: any = rt.object(255, "DText");
            acc = _v108;
            const _v109: any = await rt.send(_v108, "new", []);
            acc = _v109;
            const _v110: any = rt.setLocal(987, 0, _v109);
            acc = _v110;
            const _v111: any = await rt.send(_v110, "text", [_v101]);
            acc = _v111;
            const _v112: any = await rt.send(_v110, "font", [_v102]);
            acc = _v112;
            const _v113: any = await rt.send(_v110, "setSize", [_v105]);
            acc = _v113;
            const _v114: any = await rt.send(_v110, "moveTo", [_v106, _v107]);
            acc = _v114;
            const _v115: any = rt.local(987, 0);
            acc = _v115;
            const _v116: any = await rt.send(_v115, "nsBottom", []);
            acc = _v116;
            const _v117: any = 5;
            acc = _v117;
            const _v118: any = rt.op("+", ...[_v116, _v117]);
            acc = _v118;
            const _v119: any = (temps[1] = _v118);
            acc = _v119;
            const _v120: any = rt.local(987, 0);
            acc = _v120;
            const _v121: any = this;
            acc = _v121;
            const _v122: any = await rt.send(_v121, "add", [_v120]);
            acc = _v122;
            const _v123: any = 0;
            acc = _v123;
            const _v124: any = (temps[1] ?? 0);
            acc = _v124;
            const _v125: any = rt.local(987, 1);
            acc = _v125;
            const _v126: any = await rt.send(_v125, "move", [_v123, _v124]);
            acc = _v126;
            const _v127: any = 0;
            acc = _v127;
            const _v128: any = (temps[1] ?? 0);
            acc = _v128;
            const _v129: any = rt.local(987, 2);
            acc = _v129;
            const _v130: any = await rt.send(_v129, "move", [_v127, _v128]);
            acc = _v130;
            const _v131: any = 0;
            acc = _v131;
            const _v132: any = (temps[1] ?? 0);
            acc = _v132;
            const _v133: any = rt.local(987, 3);
            acc = _v133;
            const _v134: any = await rt.send(_v133, "move", [_v131, _v132]);
            acc = _v134;
            const _v135: any = (temps[0] ?? 0);
            acc = _v135;
            const _v136: any = (temps[1] ?? 0);
            acc = _v136;
            const _v137: any = rt.local(987, 4);
            acc = _v137;
            const _v138: any = await rt.send(_v137, "move", [_v135, _v136]);
            acc = _v138;
            const _v139: any = (temps[0] ?? 0);
            acc = _v139;
            const _v140: any = (temps[1] ?? 0);
            acc = _v140;
            const _v141: any = rt.local(987, 5);
            acc = _v141;
            const _v142: any = await rt.send(_v141, "move", [_v139, _v140]);
            acc = _v142;
            const _v143: any = (temps[0] ?? 0);
            acc = _v143;
            const _v144: any = (temps[1] ?? 0);
            acc = _v144;
            const _v145: any = rt.local(987, 6);
            acc = _v145;
            const _v146: any = await rt.send(_v145, "move", [_v143, _v144]);
            acc = _v146;
            const _v147: any = 4;
            acc = _v147;
            const _v148: any = 15;
            acc = _v148;
            const _v149: any = this;
            acc = _v149;
            const _v150: any = await rt.send(_v149, "setSize", []);
            acc = _v150;
            const _v151: any = await rt.send(_v149, "center", []);
            acc = _v151;
            const _v152: any = await rt.send(_v149, "open", [_v147, _v148]);
            acc = _v152;
            return acc;
          },
          // SCI Gauge.sc: Gauge.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = (args[0] ?? 0);
            acc = _v1;
            const _v2: any = this;
            acc = _v2;
            const _v3: any = await rt.send(_v2, "init", [_v1]);
            acc = _v3;
            const _v4: any = (args[0] ?? 0);
            acc = _v4;
            const _v5: any = (temps[1] = _v4);
            acc = _v5;
            _loop6: for (;;) {
              _continue7: {
                const _v8: any = (temps[1] ?? 0);
                acc = _v8;
                const _v9: any = this;
                acc = _v9;
                const _v10: any = await rt.send(_v9, "update", [_v8]);
                acc = _v10;
                const _v11: any = rt.local(987, 3);
                acc = _v11;
                const _v12: any = await rt.send(_v11, "draw", []);
                acc = _v12;
                let _v13: any = acc;
                _branch14: {
                  const _v15: any = rt.local(987, 4);
                  acc = _v15;
                  const _v16: any = await rt.superSend(this, {"script": 987, "name": "Gauge"}, "doit", [_v15]);
                  acc = _v16;
                  const _v17: any = (temps[0] = _v16);
                  acc = _v17;
                  const _v18: any = rt.local(987, 1);
                  acc = _v18;
                  const _v19: any = rt.op("==", ...[_v17, _v18]);
                  acc = _v19;
                  _v13 = _v19;
                  acc = _v13;
                  if (rt.truth(_v13)) {
                    let _v20: any = acc;
                    const _v21: any = (temps[1] ?? 0);
                    acc = _v21;
                    const _v22: any = rt.get(this, "maximum");
                    acc = _v22;
                    const _v23: any = rt.op("<", ...[_v21, _v22]);
                    acc = _v23;
                    _v20 = _v23;
                    if (rt.truth(_v23)) {
                      const _v24: any = (temps[1] = rt.op("+", (temps[1] ?? 0), 1));
                      acc = _v24;
                      _v20 = _v24;
                    }
                    acc = _v20;
                    _v13 = _v20;
                    break _branch14;
                  }
                  const _v25: any = (temps[0] ?? 0);
                  acc = _v25;
                  const _v26: any = rt.local(987, 2);
                  acc = _v26;
                  const _v27: any = rt.op("==", ...[_v25, _v26]);
                  acc = _v27;
                  _v13 = _v27;
                  acc = _v13;
                  if (rt.truth(_v13)) {
                    let _v28: any = acc;
                    const _v29: any = (temps[1] ?? 0);
                    acc = _v29;
                    const _v30: any = rt.get(this, "minimum");
                    acc = _v30;
                    const _v31: any = rt.op(">", ...[_v29, _v30]);
                    acc = _v31;
                    _v28 = _v31;
                    if (rt.truth(_v31)) {
                      const _v32: any = (temps[1] = rt.op("-", (temps[1] ?? 0), 1));
                      acc = _v32;
                      _v28 = _v32;
                    }
                    acc = _v28;
                    _v13 = _v28;
                    break _branch14;
                  }
                  const _v33: any = (temps[0] ?? 0);
                  acc = _v33;
                  const _v34: any = rt.local(987, 4);
                  acc = _v34;
                  const _v35: any = rt.op("==", ...[_v33, _v34]);
                  acc = _v35;
                  _v13 = _v35;
                  acc = _v13;
                  if (rt.truth(_v13)) {
                    break _loop6;
                    _v13 = acc;
                    break _branch14;
                  }
                  const _v36: any = (temps[0] ?? 0);
                  acc = _v36;
                  const _v37: any = rt.local(987, 5);
                  acc = _v37;
                  const _v38: any = rt.op("==", ...[_v36, _v37]);
                  acc = _v38;
                  _v13 = _v38;
                  acc = _v13;
                  if (rt.truth(_v13)) {
                    const _v39: any = rt.get(this, "normal");
                    acc = _v39;
                    const _v40: any = (temps[1] = _v39);
                    acc = _v40;
                    _v13 = _v40;
                    break _branch14;
                  }
                  let _v41: any = 0;
                  if (!rt.truth(_v41)) {
                    const _v42: any = (temps[0] ?? 0);
                    acc = _v42;
                    const _v43: any = 0;
                    acc = _v43;
                    const _v44: any = rt.op("==", ...[_v42, _v43]);
                    acc = _v44;
                    _v41 = _v44;
                  }
                  if (!rt.truth(_v41)) {
                    const _v45: any = (temps[0] ?? 0);
                    acc = _v45;
                    const _v46: any = rt.local(987, 6);
                    acc = _v46;
                    const _v47: any = rt.op("==", ...[_v45, _v46]);
                    acc = _v47;
                    _v41 = _v47;
                  }
                  acc = _v41;
                  _v13 = _v41;
                  acc = _v13;
                  if (rt.truth(_v13)) {
                    const _v48: any = (args[0] ?? 0);
                    acc = _v48;
                    const _v49: any = (temps[1] = _v48);
                    acc = _v49;
                    _v13 = _v49;
                    break _loop6;
                    _v13 = acc;
                    break _branch14;
                  }
                }
                acc = _v13;
              }
            }
            const _v50: any = this;
            acc = _v50;
            const _v51: any = await rt.send(_v50, "dispose", []);
            acc = _v51;
            const _v52: any = (temps[1] ?? 0);
            acc = _v52;
            return _v52;
            return acc;
          },
          // SCI Gauge.sc: Gauge.update
          "update": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            const _v1: any = rt.get(this, "maximum");
            acc = _v1;
            const _v2: any = rt.get(this, "minimum");
            acc = _v2;
            const _v3: any = rt.op("-", ...[_v1, _v2]);
            acc = _v3;
            const _v4: any = 1;
            acc = _v4;
            const _v5: any = rt.op("+", ...[_v3, _v4]);
            acc = _v5;
            const _v6: any = (temps[1] = _v5);
            acc = _v6;
            const _v9: any = 0;
            acc = _v9;
            const _v10: any = (temps[0] = _v9);
            acc = _v10;
            _loop7: for (;;) {
              const _v11: any = (temps[0] ?? 0);
              acc = _v11;
              const _v12: any = 40;
              acc = _v12;
              const _v13: any = rt.op("<", ...[_v11, _v12]);
              acc = _v13;
              if (!rt.truth(_v13)) break _loop7;
              _continue8: {
                const _v14: any = 0;
                acc = _v14;
                const _v15: any = (temps[0] ?? 0);
                acc = _v15;
                const _v16: any = rt.setLocal(987, (7 + (Number(_v15) & 65535)), _v14);
                acc = _v16;
              }
              const _v17: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v17;
            }
            const _v20: any = 0;
            acc = _v20;
            const _v21: any = (temps[0] = _v20);
            acc = _v21;
            _loop18: for (;;) {
              const _v22: any = (temps[0] ?? 0);
              acc = _v22;
              const _v23: any = (temps[1] ?? 0);
              acc = _v23;
              const _v24: any = rt.op("<", ...[_v22, _v23]);
              acc = _v24;
              if (!rt.truth(_v24)) break _loop18;
              _continue19: {
                const _v25: any = rt.ref("local", 987, 7);
                acc = _v25;
                const _v26: any = (temps[0] ?? 0);
                acc = _v26;
                let _v27: any = acc;
                const _v28: any = (temps[0] ?? 0);
                acc = _v28;
                const _v29: any = (args[0] ?? 0);
                acc = _v29;
                const _v30: any = rt.op("<", ...[_v28, _v29]);
                acc = _v30;
                _v27 = _v30;
                if (rt.truth(_v30)) {
                  const _v31: any = 6;
                  acc = _v31;
                  _v27 = _v31;
                } else {
                  const _v32: any = 7;
                  acc = _v32;
                  _v27 = _v32;
                }
                acc = _v27;
                const _v33: any = await rt.call(987, "StrAt", [_v25, _v26, _v27], this);
                acc = _v33;
              }
              const _v34: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v34;
            }
            return acc;
          },
          // SCI Gauge.sc: Gauge.handleEvent
          "handleEvent": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = await rt.send(_v2, "type", []);
            acc = _v3;
            _branch4: {
              const _v5: any = 4;
              acc = _v5;
              _v1 = rt.op("==", _v3, _v5);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v6: any = acc;
                const _v7: any = (args[0] ?? 0);
                acc = _v7;
                const _v8: any = await rt.send(_v7, "message", []);
                acc = _v8;
                _branch9: {
                  const _v10: any = 19200;
                  acc = _v10;
                  _v6 = rt.op("==", _v8, _v10);
                  acc = _v6;
                  if (rt.truth(_v6)) {
                    const _v11: any = 1;
                    acc = _v11;
                    const _v12: any = (args[0] ?? 0);
                    acc = _v12;
                    const _v13: any = await rt.send(_v12, "claimed", [_v11]);
                    acc = _v13;
                    _v6 = _v13;
                    const _v14: any = rt.local(987, 2);
                    acc = _v14;
                    return _v14;
                    _v6 = acc;
                    break _branch9;
                  }
                  const _v15: any = 19712;
                  acc = _v15;
                  _v6 = rt.op("==", _v8, _v15);
                  acc = _v6;
                  if (rt.truth(_v6)) {
                    const _v16: any = 1;
                    acc = _v16;
                    const _v17: any = (args[0] ?? 0);
                    acc = _v17;
                    const _v18: any = await rt.send(_v17, "claimed", [_v16]);
                    acc = _v18;
                    _v6 = _v18;
                    const _v19: any = rt.local(987, 1);
                    acc = _v19;
                    return _v19;
                    _v6 = acc;
                    break _branch9;
                  }
                }
                acc = _v6;
                _v1 = _v6;
                break _branch4;
              }
              const _v20: any = 64;
              acc = _v20;
              _v1 = rt.op("==", _v3, _v20);
              acc = _v1;
              if (rt.truth(_v1)) {
                let _v21: any = acc;
                const _v22: any = (args[0] ?? 0);
                acc = _v22;
                const _v23: any = await rt.send(_v22, "message", []);
                acc = _v23;
                _branch24: {
                  const _v25: any = 7;
                  acc = _v25;
                  _v21 = rt.op("==", _v23, _v25);
                  acc = _v21;
                  if (rt.truth(_v21)) {
                    const _v26: any = 1;
                    acc = _v26;
                    const _v27: any = (args[0] ?? 0);
                    acc = _v27;
                    const _v28: any = await rt.send(_v27, "claimed", [_v26]);
                    acc = _v28;
                    _v21 = _v28;
                    const _v29: any = rt.local(987, 2);
                    acc = _v29;
                    return _v29;
                    _v21 = acc;
                    break _branch24;
                  }
                  const _v30: any = 3;
                  acc = _v30;
                  _v21 = rt.op("==", _v23, _v30);
                  acc = _v21;
                  if (rt.truth(_v21)) {
                    const _v31: any = 1;
                    acc = _v31;
                    const _v32: any = (args[0] ?? 0);
                    acc = _v32;
                    const _v33: any = await rt.send(_v32, "claimed", [_v31]);
                    acc = _v33;
                    _v21 = _v33;
                    const _v34: any = rt.local(987, 1);
                    acc = _v34;
                    return _v34;
                    _v21 = acc;
                    break _branch24;
                  }
                }
                acc = _v21;
                _v1 = _v21;
                break _branch4;
              }
            }
            acc = _v1;
            const _v35: any = (args[0] ?? 0);
            acc = _v35;
            const _v36: any = await rt.superSend(this, {"script": 987, "name": "Gauge"}, "handleEvent", [_v35]);
            acc = _v36;
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
