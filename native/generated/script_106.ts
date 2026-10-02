// Native TypeScript translated at build time; no SCI interpreter is used here.
// Source: sluicebox/sci-scripts, jones-dos-1.000.060/src/Goods.sc
// Pinned revision: 870a8015b689474484bf3d8b41416956d4315432.
// Original game code: Sierra On-Line. Decompiled by sluicebox.
// Attribution does not grant a new license to the original game material.
// Original source SHA-256: 3b71998b543e0915bf65588069daea0cf872592f2bae243d958968dfdae95369
import { type Runtime } from '../runtime/runtime.js';

export function register(rt: Runtime): void {
  rt.defineScript(106, {
    name: "Goods",
    uses: [999],
    locals: [],
    objects: [
      {
        name: "Goods",
        className: "Obj",
        parent: {"script": 999, "name": "Obj"},
        isClass: true,
        properties: {"quantity": 1, "attributes": 1, "pricePaid": 0, "indexNum": 0},
        methods: {
        },
      },
      {
        name: "Consumable",
        className: "Goods",
        parent: {"script": 106, "name": "Goods"},
        isClass: true,
        properties: {"attributes": 129},
        methods: {
          // SCI Goods.sc: Consumable.doit
          "doit": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            let _v1: any = acc;
            const _v2: any = rt.get(this, "quantity");
            acc = _v2;
            _v1 = _v2;
            if (rt.truth(_v2)) {
              const _v3: any = rt.set(this, "quantity", rt.op("-", rt.get(this, "quantity"), 1));
              acc = _v3;
              _v1 = _v3;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "Durable",
        className: "Goods",
        parent: {"script": 106, "name": "Goods"},
        isClass: true,
        properties: {"attributes": 69, "redemptionPrice": 0},
        methods: {
        },
      },
      {
        name: "Educational",
        className: "Goods",
        parent: {"script": 106, "name": "Goods"},
        isClass: true,
        properties: {"unitsToGraduate": 10},
        methods: {
        },
      },
      {
        name: "ListOfGoods",
        className: "List",
        parent: {"script": 999, "name": "List"},
        isClass: true,
        properties: {},
        methods: {
          // SCI Goods.sc: ListOfGoods.newGoods
          "newGoods": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            return acc;
          },
          // SCI Goods.sc: ListOfGoods.recieve
          "recieve": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0];
            let _v1: any = acc;
            const _v2: any = argc;
            acc = _v2;
            const _v3: any = 2;
            acc = _v3;
            const _v4: any = rt.op(">=", ...[_v2, _v3]);
            acc = _v4;
            _v1 = _v4;
            if (rt.truth(_v4)) {
              const _v5: any = (args[1] ?? 0);
              acc = _v5;
              _v1 = _v5;
            } else {
              const _v6: any = 1;
              acc = _v6;
              _v1 = _v6;
            }
            acc = _v1;
            const _v7: any = (temps[1] = _v1);
            acc = _v7;
            let _v8: any = acc;
            const _v9: any = (args[0] ?? 0);
            acc = _v9;
            const _v10: any = (temps[1] ?? 0);
            acc = _v10;
            const _v11: any = this;
            acc = _v11;
            const _v12: any = await rt.send(_v11, "hasType", [_v9, _v10]);
            acc = _v12;
            const _v13: any = (temps[0] = _v12);
            acc = _v13;
            const _v14: any = rt.op("not", ...[_v13]);
            acc = _v14;
            _v8 = _v14;
            if (rt.truth(_v14)) {
              const _v15: any = (args[0] ?? 0);
              acc = _v15;
              const _v16: any = (temps[1] ?? 0);
              acc = _v16;
              const _v17: any = this;
              acc = _v17;
              const _v18: any = await rt.send(_v17, "newGoods", []);
              acc = _v18;
              const _v19: any = await rt.send(_v18, "indexNum", [_v15]);
              acc = _v19;
              const _v20: any = await rt.send(_v18, "quantity", [_v16]);
              acc = _v20;
              const _v21: any = await rt.send(_v18, "yourself", []);
              acc = _v21;
              const _v22: any = (temps[0] = _v21);
              acc = _v22;
              const _v23: any = this;
              acc = _v23;
              const _v24: any = await rt.send(_v23, "add", [_v22]);
              acc = _v24;
              _v8 = _v24;
            }
            acc = _v8;
            const _v25: any = (temps[0] ?? 0);
            acc = _v25;
            return _v25;
            return acc;
          },
          // SCI Goods.sc: ListOfGoods.hasType
          "hasType": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = (temps[0] = _v3);
            acc = _v4;
            _loop1: for (;;) {
              const _v5: any = (temps[0] ?? 0);
              acc = _v5;
              const _v6: any = rt.get(this, "size");
              acc = _v6;
              const _v7: any = rt.op("<", ...[_v5, _v6]);
              acc = _v7;
              if (!rt.truth(_v7)) break _loop1;
              _continue2: {
                let _v8: any = acc;
                const _v9: any = (temps[0] ?? 0);
                acc = _v9;
                const _v10: any = this;
                acc = _v10;
                const _v11: any = await rt.send(_v10, "at", [_v9]);
                acc = _v11;
                const _v12: any = await rt.send(_v11, "indexNum", []);
                acc = _v12;
                const _v13: any = (args[0] ?? 0);
                acc = _v13;
                const _v14: any = rt.op("==", ...[_v12, _v13]);
                acc = _v14;
                _v8 = _v14;
                if (rt.truth(_v14)) {
                  const _v15: any = (temps[0] ?? 0);
                  acc = _v15;
                  const _v16: any = this;
                  acc = _v16;
                  const _v17: any = await rt.send(_v16, "at", [_v15]);
                  acc = _v17;
                  const _v18: any = await rt.send(_v17, "quantity", []);
                  acc = _v18;
                  const _v19: any = (args[1] ?? 0);
                  acc = _v19;
                  const _v20: any = rt.op("+", ...[_v18, _v19]);
                  acc = _v20;
                  const _v21: any = (temps[0] ?? 0);
                  acc = _v21;
                  const _v22: any = this;
                  acc = _v22;
                  const _v23: any = await rt.send(_v22, "at", [_v21]);
                  acc = _v23;
                  const _v24: any = await rt.send(_v23, "quantity", [_v20]);
                  acc = _v24;
                  _v8 = _v24;
                  const _v25: any = (temps[0] ?? 0);
                  acc = _v25;
                  const _v26: any = this;
                  acc = _v26;
                  const _v27: any = await rt.send(_v26, "at", [_v25]);
                  acc = _v27;
                  return _v27;
                  _v8 = acc;
                }
                acc = _v8;
              }
              const _v28: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v28;
            }
            const _v29: any = 0;
            acc = _v29;
            return _v29;
            return acc;
          },
          // SCI Goods.sc: ListOfGoods.pack
          "pack": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0, 0, 0];
            const _v1: any = 1;
            acc = _v1;
            const _v2: any = 1;
            acc = _v2;
            const _v3: any = await rt.call(106, "ScriptID", [_v1, _v2], this);
            acc = _v3;
            const _v4: any = (temps[1] = _v3);
            acc = _v4;
            const _v7: any = 0;
            acc = _v7;
            const _v8: any = (temps[0] = _v7);
            acc = _v8;
            _loop5: for (;;) {
              const _v9: any = (temps[0] ?? 0);
              acc = _v9;
              const _v10: any = rt.get(this, "size");
              acc = _v10;
              const _v11: any = rt.op("<", ...[_v9, _v10]);
              acc = _v11;
              if (!rt.truth(_v11)) break _loop5;
              _continue6: {
                let _v12: any = acc;
                const _v13: any = (temps[0] ?? 0);
                acc = _v13;
                const _v14: any = this;
                acc = _v14;
                const _v15: any = await rt.send(_v14, "at", [_v13]);
                acc = _v15;
                const _v16: any = await rt.send(_v15, "attributes", []);
                acc = _v16;
                const _v17: any = 1;
                acc = _v17;
                const _v18: any = rt.op("&", ...[_v16, _v17]);
                acc = _v18;
                _v12 = _v18;
                if (rt.truth(_v18)) {
                  const _v19: any = (temps[0] ?? 0);
                  acc = _v19;
                  const _v20: any = this;
                  acc = _v20;
                  const _v21: any = await rt.send(_v20, "at", [_v19]);
                  acc = _v21;
                  const _v22: any = await rt.send(_v21, "new", []);
                  acc = _v22;
                  const _v23: any = (temps[2] = _v22);
                  acc = _v23;
                  _v12 = _v23;
                  const _v24: any = (temps[2] ?? 0);
                  acc = _v24;
                  const _v25: any = await rt.send(_v24, "attributes", []);
                  acc = _v25;
                  const _v26: any = 65534;
                  acc = _v26;
                  const _v27: any = rt.op("&", ...[_v25, _v26]);
                  acc = _v27;
                  const _v28: any = (temps[2] ?? 0);
                  acc = _v28;
                  const _v29: any = await rt.send(_v28, "attributes", [_v27]);
                  acc = _v29;
                  _v12 = _v29;
                  const _v30: any = (temps[2] ?? 0);
                  acc = _v30;
                  const _v31: any = (temps[1] ?? 0);
                  acc = _v31;
                  const _v32: any = await rt.send(_v31, "add", [_v30]);
                  acc = _v32;
                  _v12 = _v32;
                }
                acc = _v12;
              }
              const _v33: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v33;
            }
            const _v36: any = rt.get(this, "size");
            acc = _v36;
            const _v37: any = 1;
            acc = _v37;
            const _v38: any = rt.op("-", ...[_v36, _v37]);
            acc = _v38;
            const _v39: any = (temps[0] = _v38);
            acc = _v39;
            _loop34: for (;;) {
              const _v40: any = (temps[0] ?? 0);
              acc = _v40;
              const _v41: any = 0;
              acc = _v41;
              const _v42: any = rt.op(">=", ...[_v40, _v41]);
              acc = _v42;
              if (!rt.truth(_v42)) break _loop34;
              _continue35: {
                let _v43: any = acc;
                const _v44: any = (temps[0] ?? 0);
                acc = _v44;
                const _v45: any = this;
                acc = _v45;
                const _v46: any = await rt.send(_v45, "at", [_v44]);
                acc = _v46;
                const _v47: any = await rt.send(_v46, "attributes", []);
                acc = _v47;
                const _v48: any = 1;
                acc = _v48;
                const _v49: any = rt.op("&", ...[_v47, _v48]);
                acc = _v49;
                _v43 = _v49;
                if (rt.truth(_v49)) {
                  const _v50: any = (temps[0] ?? 0);
                  acc = _v50;
                  const _v51: any = this;
                  acc = _v51;
                  const _v52: any = await rt.send(_v51, "at", [_v50]);
                  acc = _v52;
                  const _v53: any = (temps[2] = _v52);
                  acc = _v53;
                  const _v54: any = this;
                  acc = _v54;
                  const _v55: any = await rt.send(_v54, "delete", [_v53]);
                  acc = _v55;
                  _v43 = _v55;
                  const _v56: any = (temps[2] ?? 0);
                  acc = _v56;
                  const _v57: any = await rt.send(_v56, "dispose", []);
                  acc = _v57;
                  _v43 = _v57;
                }
                acc = _v43;
              }
              const _v58: any = (temps[0] = rt.op("-", (temps[0] ?? 0), 1));
              acc = _v58;
            }
            let _v59: any = acc;
            const _v60: any = (temps[1] ?? 0);
            acc = _v60;
            const _v61: any = await rt.send(_v60, "size", []);
            acc = _v61;
            _v59 = _v61;
            if (rt.truth(_v61)) {
              const _v64: any = 0;
              acc = _v64;
              const _v65: any = (temps[0] = _v64);
              acc = _v65;
              _loop62: for (;;) {
                const _v66: any = (temps[0] ?? 0);
                acc = _v66;
                const _v67: any = (temps[1] ?? 0);
                acc = _v67;
                const _v68: any = await rt.send(_v67, "size", []);
                acc = _v68;
                const _v69: any = rt.op("<", ...[_v66, _v68]);
                acc = _v69;
                if (!rt.truth(_v69)) break _loop62;
                _continue63: {
                  const _v70: any = (temps[0] ?? 0);
                  acc = _v70;
                  const _v71: any = (temps[1] ?? 0);
                  acc = _v71;
                  const _v72: any = await rt.send(_v71, "at", [_v70]);
                  acc = _v72;
                  const _v73: any = this;
                  acc = _v73;
                  const _v74: any = await rt.send(_v73, "add", [_v72]);
                  acc = _v74;
                }
                const _v75: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
                acc = _v75;
              }
              _v59 = acc;
            }
            acc = _v59;
            const _v76: any = (temps[1] ?? 0);
            acc = _v76;
            const _v77: any = await rt.send(_v76, "release", []);
            acc = _v77;
            return acc;
          },
          // SCI Goods.sc: ListOfGoods.objectAtIndex
          "objectAtIndex": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            const _v3: any = 0;
            acc = _v3;
            const _v4: any = (temps[0] = _v3);
            acc = _v4;
            _loop1: for (;;) {
              const _v5: any = (temps[0] ?? 0);
              acc = _v5;
              const _v6: any = rt.get(this, "size");
              acc = _v6;
              const _v7: any = rt.op("<", ...[_v5, _v6]);
              acc = _v7;
              if (!rt.truth(_v7)) break _loop1;
              _continue2: {
                let _v8: any = acc;
                const _v9: any = (temps[0] ?? 0);
                acc = _v9;
                const _v10: any = this;
                acc = _v10;
                const _v11: any = await rt.send(_v10, "at", [_v9]);
                acc = _v11;
                const _v12: any = await rt.send(_v11, "indexNum", []);
                acc = _v12;
                const _v13: any = (args[0] ?? 0);
                acc = _v13;
                const _v14: any = rt.op("==", ...[_v12, _v13]);
                acc = _v14;
                _v8 = _v14;
                if (rt.truth(_v14)) {
                  const _v15: any = (temps[0] ?? 0);
                  acc = _v15;
                  const _v16: any = this;
                  acc = _v16;
                  const _v17: any = await rt.send(_v16, "at", [_v15]);
                  acc = _v17;
                  return _v17;
                  _v8 = acc;
                }
                acc = _v8;
              }
              const _v18: any = (temps[0] = rt.op("+", (temps[0] ?? 0), 1));
              acc = _v18;
            }
            const _v19: any = 0;
            acc = _v19;
            return _v19;
            return acc;
          },
          // SCI Goods.sc: ListOfGoods.objectAtIndexQuan
          "objectAtIndexQuan": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const temps: any[] = [0];
            let _v1: any = acc;
            const _v2: any = (args[0] ?? 0);
            acc = _v2;
            const _v3: any = this;
            acc = _v3;
            const _v4: any = await rt.send(_v3, "objectAtIndex", [_v2]);
            acc = _v4;
            const _v5: any = (temps[0] = _v4);
            acc = _v5;
            _v1 = _v5;
            if (rt.truth(_v5)) {
              const _v6: any = (temps[0] ?? 0);
              acc = _v6;
              const _v7: any = await rt.send(_v6, "quantity", []);
              acc = _v7;
              _v1 = _v7;
              return acc;
              _v1 = acc;
            }
            acc = _v1;
            return acc;
          },
        },
      },
      {
        name: "Consumables",
        className: "ListOfGoods",
        parent: {"script": 106, "name": "ListOfGoods"},
        isClass: true,
        properties: {},
        methods: {
          // SCI Goods.sc: Consumables.newGoods
          "newGoods": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(106, "Consumable");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "new", []);
            acc = _v2;
            return acc;
          },
        },
      },
      {
        name: "Durables",
        className: "ListOfGoods",
        parent: {"script": 106, "name": "ListOfGoods"},
        isClass: true,
        properties: {},
        methods: {
          // SCI Goods.sc: Durables.newGoods
          "newGoods": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(106, "Durable");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "new", []);
            acc = _v2;
            return acc;
          },
        },
      },
      {
        name: "Education",
        className: "ListOfGoods",
        parent: {"script": 106, "name": "ListOfGoods"},
        isClass: true,
        properties: {},
        methods: {
          // SCI Goods.sc: Education.newGoods
          "newGoods": async function(this: any, rt: Runtime, args: any[]): Promise<any> {
            let acc: any = 0;
            let argc: number = args.length;
            const _v1: any = rt.object(106, "Educational");
            acc = _v1;
            const _v2: any = await rt.send(_v1, "new", []);
            acc = _v2;
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
