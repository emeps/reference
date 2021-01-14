// Objeto
const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco:{
        rua: 'São Paulo',
        numero: 315
    }
};
// Retira dentro do objeto a chave nome e chave idade
const {nome , idade} = pessoa;
// console.log(`${nome}. ${idade}.`);
// Ou
const {nome:n , idade:i} = pessoa;
// console.log(`${n}. ${i}.`);

const {endereco:{rua, numero}} = pessoa;
// console.log(`${rua}. ${numero}.`);

// ----------------------------------------------------------------------------------------------------------------------
// Array
const [a] = [10];
console.log(`${a}`);

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeira, segundo, ...resto] = numero;

const [n1 , , n3 , , n5 , n6 = 0] = [10,7,9,5];
console.log(n1,n3,n5,n6);

const [,[, nota]] = [[,3,6],[6,null,36]];
console.log(nota);
// ----------------------------------------------------------------------------------------------------------------------
// Parametro Padrão (min e max)
function rand({min = 0 ,max = 1000}){
    const valor = Math.random()*(max-min)+min;
    return Math.floor(valor);
}
const ObjRandom = {max: 10, min:0}
console.log(rand(ObjRandom));
// Pode ser aplicado aos Arrays tbm
