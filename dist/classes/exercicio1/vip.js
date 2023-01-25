"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vip = void 0;
const ingresso_1 = require("./ingresso");
class Vip extends ingresso_1.Ingresso {
    constructor() {
        super();
        this.valorAdicional = 5;
    }
    imprimeValor() {
        console.log(`Valor ingresso Vip ${this._valorIngresso + this.valorAdicional}`);
    }
}
exports.Vip = Vip;
