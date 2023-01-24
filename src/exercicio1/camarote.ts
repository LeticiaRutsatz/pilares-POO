import { Ingresso } from "./ingresso";

export class Camarote extends Ingresso {

    private valorAdicional: number;

    constructor(_valor: number) {
        super(_valor);
        this.valorAdicional = 9;
    }

    imprimeValor(){
        this._valor += this.valorAdicional
        return console.log(`Valor Camarote ${this._valor}`);
    }
}