"use strict";
/*4. Crie as seguintes classes:
a. Crie uma classe chamada Universidade, que terá como
atributos: nome e local. Além disso, deve possuir um método
construtor e métodos para encapsulamento dos seus
atributos.
b. Uma classe chamada Pessoa, com os atributos: nome e data
de nascimento (que pode ser String). Assim como na outra
classe, crie um método construtor e métodos para
encapsulamento de seus atributos.
c. Cada pessoa poderá estar associada a uma universidade.
d. A classe pessoa deve possuir um método que informe seus
atributos e a universidade em que trabalha. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Universidade = void 0;
class Universidade {
    constructor(nome, local) {
        this.nome = nome;
        this.local = local;
    }
    getNome() {
        return this.nome;
    }
    getLocal() {
        return this.local;
    }
}
exports.Universidade = Universidade;
