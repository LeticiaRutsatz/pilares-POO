"use strict";
/*Identifique os atributos e comportamentos que são comuns entre os
3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
comportamento diferente para cada animal.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nome, cor, especie, idade) {
        this.nome = nome;
        this.cor = cor;
        this.especie = especie;
        this.idade = idade;
    }
    Andar() {
        return console.log("andando");
    }
    Correr() {
        return console.log("correndo");
    }
    Comer() {
        return console.log("comendo");
    }
}
exports.Animal = Animal;
