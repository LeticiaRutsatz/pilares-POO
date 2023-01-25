"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Novo = void 0;
const imovel_1 = require("./imovel");
class Novo extends imovel_1.Imovel {
    constructor(preco, endereco, porcentagem) {
        super(preco, endereco);
        this.porcentagemAumento = porcentagem;
    }
    imprimeValor() {
        const valorAdicional = this.porcentagemAumento * this._preco;
        return console.log(`Valor da casa com adicional é de ${this._preco + valorAdicional} `);
    }
}
exports.Novo = Novo;
