import { Ingresso } from "./ingresso";

export class Vip extends Ingresso {

    private valorAdicional: number;

    constructor(_valor: number) {
        super(_valor)
        this.valorAdicional = 5;
    }

    imprimeValor(){
        this._valor += this.valorAdicional
        return console.log(`Valor VIP ${this._valor}`);
    }
}