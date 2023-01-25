import { Ingresso } from "./ingresso";


export class Vip extends Ingresso {
    private valorAdicional: number;

    constructor() {
        super();
        this.valorAdicional = 5;
    }

    imprimeValor(): void {
        console.log(`Valor ingresso Vip ${this._valorIngresso + this.valorAdicional}`)
    }
}