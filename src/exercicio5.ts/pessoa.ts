class Pessoa5 {
    private nome: string;
    private dataDeNascimento: string;
    private universidade!: Universidade5;
    private departamento!: Departamento;
  
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
  
    getUniversidade(): Universidade5 {
      return this.universidade;
    }
  
    setUniversidade(universidade: Universidade5): void {
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
      console.log(`Universidade: ${this.universidade.getNome()} - ${this.universidade.getLocal()}`);
      console.log(`Departamento: ${this.departamento.getNome()}`)
    }
}