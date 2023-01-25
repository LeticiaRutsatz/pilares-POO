import { Ingresso } from "./ingresso";

export class Camarote extends Ingresso {
    private valorAdicional: number;

    constructor() {
        super();
        this.valorAdicional = 10;
    }

    imprimeValor(): void {
        console.log(`Valor ingresso Camarote ${this._valorIngresso + this.valorAdicional}`)
    }
}