import { Departamento } from "./departamento";
import { UniversidadeUni } from "./universidade";

export class PessoaUni {
    private nome: string;
    private dataDeNascimento: string;
    private universidade: UniversidadeUni;
    private departamento: Departamento;
  
    constructor(nome: string, dataDeNascimento: string, universidade: UniversidadeUni, departamento: Departamento) {
      this.nome = nome;
      this.universidade = universidade;
      this.departamento = departamento;
      this.dataDeNascimento = dataDeNascimento;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getDataDeNascimento(): string {
      return this.dataDeNascimento;
    }
  
    getUniversidade(): UniversidadeUni {
      return this.universidade;
    }
  
    setUniversidade(universidade: UniversidadeUni): void {
      this.universidade = universidade;
    }
  
    getDepartamento(): Departamento {
      return this.departamento;
    }
  
    setDepartamento(departamento: Departamento): void {
      this.departamento = departamento;
    }
  
    ImprimirDados() : void{
      console.log(`Nome: ${this.nome}`);
      console.log(`Data Nasc: ${this.dataDeNascimento}`);
      console.log(`Universidade: ${this.universidade.getNome} - ${this.universidade.getLocal}`);
      console.log(`Departamento: ${this.departamento.getNome}`)
    }
}