/*4. Crie as seguintes classes:
a. Crie uma classe chamada Universidade, que terá como
atributos: nome e local. Além disso, deve possuir um método
construtor e métodos para encapsulamento dos seus
atributos.
b. Uma classe chamada Pessoa, com os atributos: nome e data
de nascimento (que pode ser String). Assim como na outra
classe, crie um método construtor e métodos para
encapsulamento de seus atributos.
c. Cada pessoa poderá estar associada a uma universidade.
d. A classe pessoa deve possuir um método que informe seus
atributos e a universidade em que trabalha. */

export class Universidade {
    private nome: string;
    private local: string;
  
    constructor(nome: string, local: string) {
      this.nome = nome;
      this.local = local;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getLocal(): string {
      return this.local;
    }
  }