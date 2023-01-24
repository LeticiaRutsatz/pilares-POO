"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Novo = void 0;
const imovel_1 = require("./imovel");
class Novo extends imovel_1.Imovel {
    constructor(preco, endereco) {
        super(preco, endereco);
        this.valorAdicional = 12000;
    }
    imprimeValor() {
        this._preco += this.valorAdicional;
        return console.log(`Valor da casa com adicional é de ${this._preco} `);
    }
}
exports.Novo = Novo;
