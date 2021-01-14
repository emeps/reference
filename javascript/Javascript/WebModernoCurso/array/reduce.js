// Uma função que transforma um array em um outro tipo de valor
const produto = [
    { nome: 'Notebook', preco: 24600, fragil: false },
    { nome: 'Copo', preco: 600, fragil: true },
    { nome: 'Balão', preco: 240, fragil: true },
    { nome: 'Rocha', preco: 2460000, fragil: false }
];
console.log(produto.map(a=> a.preco));
const resultado = produto.map(a=> a.preco).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual;
}, valorInicial = 1000000 /* Opicional */);
console.log(resultado);


// Todos os produtos são fragil
const quebradisso = (resultado, fragile) => resultado && fragile;
console.log(produto.map(a => a.fragil).reduce(quebradisso));
// Algum item é fragil
const quebradisso1 = (resultado, fragile) => resultado || fragile;
console.log(produto.map(a => a.fragil).reduce(quebradisso1));



// Implementação do reduce
Array.prototype.reduce1 = function(callback, valorInicial){
    const indiceInical = valorInicial? 0:1;
    let acumulador = valorInicial || this[0];
    for(let i = indiceInical; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this);
    };
    return acumulador;
};
const soma = (total, valor) => total + valor;
const numeros = [197,972,783,6456,656,5785,400];
console.log(numeros.reduce1(soma,10));