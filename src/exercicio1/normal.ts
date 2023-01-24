import { Ingresso } from "./ingresso";

export class Normal extends Ingresso {

    imprimeValor(){
        return console.log(this._valor)
    }
}