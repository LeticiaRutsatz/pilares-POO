"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camarote = void 0;
const ingresso_1 = require("./ingresso");
class Camarote extends ingresso_1.Ingresso {
    constructor() {
        super();
        this.valorAdicional = 10;
    }
    imprimeValor() {
        console.log(`Valor ingresso Camarote ${this._valorIngresso + this.valorAdicional}`);
    }
}
exports.Camarote = Camarote;
