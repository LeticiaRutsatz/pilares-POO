import { Imovel } from "./imovel";

export class Velho extends Imovel {

    private desconto: number;

    constructor(preco : number, endereco: string) {

        super(preco, endereco);
        this.desconto = 12000;
    }

    imprimeValor(){
        this._preco -= this.desconto
        return console.log(`Valor da casa com desconto é de ${this._preco} `)
    }
}