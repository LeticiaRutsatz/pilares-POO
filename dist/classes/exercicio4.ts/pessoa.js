"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
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
    imprimirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Data de Nascimento: ${this.dataDeNascimento}`);
        console.log(`Universidade: ${this.universidade.getNome()} - ${this.universidade.getLocal()}`);
    }
}
exports.Pessoa = Pessoa;
