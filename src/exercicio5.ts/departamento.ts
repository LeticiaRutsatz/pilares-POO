class Departamento {
    private nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    getNome(): string {
      return this.nome;
    }
  }