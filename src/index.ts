import { Camarote } from "./exercicio1/camarote";
import { Ingresso } from "./exercicio1/ingresso";
import { Normal } from "./exercicio1/normal";
import { Vip } from "./exercicio1/vip";
import { Imovel } from "./exercicio2/imovel";
import { Novo } from "./exercicio2/novo";
import { Velho } from "./exercicio2/velho";
import { Cachorro } from "./exercicio3.ts/cachorro";
import { Cavalo } from "./exercicio3.ts/cavalo";
import { Gato } from "./exercicio3.ts/gato";
import { Pessoa } from "./exercicio4.ts/pessoa";
import { Universidade } from "./exercicio4.ts/universidade";


const normal = new Normal(6)
normal.imprimeValor()

const vip = new Vip(6)
vip.imprimeValor()


const camarote = new Camarote(6)
camarote.imprimeValor()

console.log("/////////////////")

const novoImovel = new Novo(145000, 'Rua das flores');
novoImovel.imprimeValor();

const velhoImovel = new Velho(145000, 'Rua das margaridas');
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
const universidade1 = new Universidade5("Universidade X", "Cidade Y");
universidade1.adicionarDepartamento(departamento1);


const pessoa1 = new Pessoa5("John Doe", "01/01/1990");
pessoa1.setUniversidade(universidade1);
pessoa1.setDepartamento(departamento1);
pessoa1.ImprimirDados();