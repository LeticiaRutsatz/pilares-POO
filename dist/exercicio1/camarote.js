"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camarote = void 0;
const ingresso_1 = require("./ingresso");
class Camarote extends ingresso_1.Ingresso {
    constructor(_valor) {
        super(_valor);
        this.valorAdicional = 9;
    }
    imprimeValor() {
        this._valor += this.valorAdicional;
        return console.log(`Valor Camarote ${this._valor}`);
    }
}
exports.Camarote = Camarote;
