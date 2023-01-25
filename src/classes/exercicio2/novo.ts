import { Imovel } from "./imovel";

export class Novo extends Imovel {
    private porcentagemAumento: number;

    constructor(preco : number, endereco: string, porcentagem : number) {
        super(preco, endereco);
        this.porcentagemAumento = porcentagem;
    }

    imprimeValor(){
        const valorAdicional = (this.porcentagemAumento * this._preco) / 100
        return console.log(`Valor da casa com adicional é de ${this._preco + valorAdicional} `)
    }
}