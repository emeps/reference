// Serve para mapear um array, gera um novo array do mesmo tamanho
const nums = [1,2,3,4,5,6]

// For com proposito
let resultado = nums.map(function(e){
    return e * 99;
});
console.log(resultado);

const soma = function (e){ return e + 10}
const triplo = function(e){ return e * 3}
const Money = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = resultado.map(soma).map(triplo).map(Money);
console.log(resultado);

const carrinho = [
    '{"nome":"Borracha", "preco": 50}',
    '{"nome":"Bala", "preco": 10.15}',
    '{"nome":"Cavalo", "preco": 50.69}',
    '{"nome":"bolaa", "preco": 99.65}',
    '{"nome":"Chupeta", "preco": 3.60}'
];

// Retorar um array apenas com precos
const obj = json => JSON.parse(json);
const Preco = produto => produto.preco;
const listaDeCoisa = carrinho.map(obj).map(Preco);
console.log(listaDeCoisa);

// Implementação do map
Array.prototype.map2 = function (callback){
    const newArray = [];
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}