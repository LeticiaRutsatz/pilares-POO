"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vip = void 0;
const ingresso_1 = require("./ingresso");
class Vip extends ingresso_1.Ingresso {
    constructor(_valor) {
        super(_valor);
        this.valorAdicional = 5;
    }
    imprimeValor() {
        this._valor += this.valorAdicional;
        return console.log(`Valor VIP ${this._valor}`);
    }
}
exports.Vip = Vip;
