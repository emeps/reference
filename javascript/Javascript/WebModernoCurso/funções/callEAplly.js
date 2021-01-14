// Formas de chamar a função
function getPreco(imposto =0, moeda ='RS' ){
    return `${moeda}${this.preco*(1-this.desc)*(1+ imposto)} `
}

const produto = {
    nome: 'note',
    preco: 14569,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.5;
console.log(getPreco());
console.log(produto.getPreco());

const carro = {preco : 52202, desc : 0.66};
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));
// Diferença é a passagem dos parameetros
console.log(getPreco.call(carro, 0.25, '#'));
console.log(getPreco.apply(carro, [0.26, '%']));

