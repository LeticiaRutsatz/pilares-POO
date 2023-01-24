/*Identifique os atributos e comportamentos que são comuns entre os
3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
comportamento diferente para cada animal.*/

export abstract class Animal {
    protected nome: string;
    protected cor: string;
    protected especie: string;
    protected idade: number;

    constructor(nome: string, cor: string, especie: string, idade: number){
        this.nome = nome;
        this.cor = cor;
        this.especie = especie;
        this.idade = idade;
    }

    Andar(){
        return console.log("andando")
    }

    Correr(){
        return console.log("correndo")
    }

    Comer(){
        return console.log("comendo")
    }
}