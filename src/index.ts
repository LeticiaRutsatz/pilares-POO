import { Camarote } from "./classes/exercicio1/camarote";
import { Normal } from "./classes/exercicio1/normal";
import { Vip } from "./classes/exercicio1/vip";
import { Novo } from "./classes/exercicio2/novo";
import { Velho } from "./classes/exercicio2/velho";
import { Cachorro } from "./classes/exercicio3.ts/cachorro";
import { Cavalo } from "./classes/exercicio3.ts/cavalo";
import { Gato } from "./classes/exercicio3.ts/gato";
import { Pessoa } from "./classes/exercicio4.ts/pessoa";
import { Universidade } from "./classes/exercicio4.ts/universidade";
import { Departamento } from "./classes/exercicio5.ts/departamento";
import { PessoaUni } from "./classes/exercicio5.ts/pessoa";
import { UniversidadeUni } from "./classes/exercicio5.ts/universidade";


const normal = new Normal
normal.imprimeValor()

const vip = new Vip
vip.imprimeValor()


const camarote = new Camarote
camarote.imprimeValor()



console.log("/////////////////")



const novoImovel = new Novo(12000, 'Rua das flores', 10);
novoImovel.imprimeValor();

const velhoImovel = new Velho(12000, 'Rua das margaridas', 20);
velhoImovel.imprimeValor();



console.log("/////////////////")



const cachorro = new Cachorro('Dog', 'Amarelo', 'Dog', 5)
cachorro.Latir()

const cavalo = new Cavalo('cavalo', 'preto', 'cavalo', 5)
cavalo.Relinchar()

const gato = new Gato('Gato', 'Amarelo', 'Gato', 5)
gato.Miar()



console.log('////////////////////')

const universidade = new Universidade("Universidade X", "Cidade Y");
const pessoa = new Pessoa("John Doe", "01/01/1990");
pessoa.setUniversidade(universidade);
pessoa.imprimirInformacoes();



console.log("/////////////////////")

const departamento1 = new Departamento("Departamento de Matemática");
const universidade1 = new UniversidadeUni("Universidade X", "Cidade Y");
universidade1.adicionarDepartamento(departamento1);


const pessoa1 = new PessoaUni("John Doe", "01/01/1990", universidade1, departamento1);
pessoa1.ImprimirDados();