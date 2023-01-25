"use strict";
class PessoaUni {
    constructor(nome, dataDeNascimento) {
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
    }
    getNome() {
        return this.nome;
    }
    getDataDeNascimento() {
        return this.dataDeNascimento;
    }
    getUniversidade() {
        return this.universidade;
    }
    setUniversidade(universidade) {
        this.universidade = universidade;
    }
    getDepartamento() {
        return this.departamento;
    }
    setDepartamento(departamento) {
        this.departamento = departamento;
    }
    ImprimirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Data Nasc: ${this.dataDeNascimento}`);
        console.log(`Universidade: ${this.universidade.getNome()} - ${this.universidade.getLocal()}`);
        console.log(`Departamento: ${this.departamento.getNome()}`);
    }
}
