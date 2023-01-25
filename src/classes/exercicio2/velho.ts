import { Imovel } from "./imovel";

export class Velho extends Imovel {
    private porcentagemDesconto: number;

    constructor(preco : number, endereco: string, porcentagem : number) {
        super(preco, endereco);
        this.porcentagemDesconto = porcentagem;
    }

    imprimeValor(){
        const valorParaDescontar = (this.porcentagemDesconto * this._preco) / 100
        return console.log(`Valor da casa com desconto é de ${this._preco - valorParaDescontar} `)
    }
}