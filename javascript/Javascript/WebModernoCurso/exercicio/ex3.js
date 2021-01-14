// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.  
const mathematica = {
    base: 69,
    potencia: 2
};
const resultado = potenciacao(mathematica);
imprimir(mathematica, resultado);

function potenciacao(){
    return Math.pow(mathematica.base, mathematica.potencia);
};

function imprimir(mathematica, resultado){
    console.log(`Base = ${mathematica.base}\nPotenciacao = ${mathematica.potencia}\nResultado = ${resultado}`);
};
