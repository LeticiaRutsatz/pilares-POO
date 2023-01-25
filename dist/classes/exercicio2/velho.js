"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Velho = void 0;
const imovel_1 = require("./imovel");
class Velho extends imovel_1.Imovel {
    constructor(preco, endereco, porcentagem) {
        super(preco, endereco);
        this.porcentagemDesconto = porcentagem;
    }
    imprimeValor() {
        const valorParaDescontar = this.porcentagemDesconto * this._preco;
        return console.log(`Valor da casa com desconto é de ${this._preco - valorParaDescontar} `);
    }
}
exports.Velho = Velho;
