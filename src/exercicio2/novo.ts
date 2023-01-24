import { Imovel } from "./imovel";

export class Novo extends Imovel {

    private valorAdicional: number;

    constructor(preco : number, endereco: string) {

        super(preco, endereco);
        this.valorAdicional = 12000;
    }

    imprimeValor(){
        this._preco += this.valorAdicional
        return console.log(`Valor da casa com adicional é de ${this._preco} `)
    }
}