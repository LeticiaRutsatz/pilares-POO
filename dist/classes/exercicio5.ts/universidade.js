"use strict";
class UniversidadeUni {
    constructor(nome, local) {
        this.nome = nome;
        this.local = local;
        this.departamentos = [];
    }
    // Encapsulamento dos atributos
    getNome() {
        return this.nome;
    }
    getLocal() {
        return this.local;
    }
    adicionarDepartamento(departamento) {
        this.departamentos.push(departamento);
    }
}
