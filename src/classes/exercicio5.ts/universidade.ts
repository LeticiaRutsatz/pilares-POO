import { Departamento } from "./departamento";

export class UniversidadeUni {
    private nome: string;
    private local: string;
    private departamentos: Departamento[];
  
    constructor(nome: string, local: string) {
      this.nome = nome;
      this.local = local;
      this.departamentos = [];
    }
  
    // Encapsulamento dos atributos
    getNome(): string {
      return this.nome;
    }
  
    getLocal(): string {
      return this.local;
    }
  
    adicionarDepartamento(departamento: Departamento): void {
      this.departamentos.push(departamento);
    }
  }