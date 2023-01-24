"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Velho = void 0;
const imovel_1 = require("./imovel");
class Velho extends imovel_1.Imovel {
    constructor(preco, endereco) {
        super(preco, endereco);
        this.desconto = 12000;
    }
    imprimeValor() {
        this._preco -= this.desconto;
        return console.log(`Valor da casa com desconto é de ${this._preco} `);
    }
}
exports.Velho = Velho;
