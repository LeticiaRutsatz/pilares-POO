import { Universidade } from "./universidade";

export class Pessoa {
    private nome: string;
    private dataDeNascimento: string;
    private universidade!: Universidade;
  
    constructor(nome: string, dataDeNascimento: string) {
      this.nome = nome;
      this.dataDeNascimento = dataDeNascimento;
    }
  
    
    getNome(): string {
      return this.nome;
    }
  
    getDataDeNascimento(): string {
      return this.dataDeNascimento;
    }
  
    getUniversidade(): Universidade {
      return this.universidade;
    }
  
   setUniversidade(universidade: Universidade): void {
      this.universidade = universidade;
    }
  
    imprimirInformacoes(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`Data de Nascimento: ${this.dataDeNascimento}`);
      console.log(`Universidade: ${this.universidade.getNome()} - ${this.universidade.getLocal()}`);
    }
  }