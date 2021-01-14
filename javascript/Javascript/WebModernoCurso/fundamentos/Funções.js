// Funções
// É um bloco de código para uso especifico dentro do código global.
function NomeDaFunção(Parametros/* ,... */){ //Se tiver
    // Bloco de comandos
    // Return alguma coisa.
    return Parametros // ou qualquer outro tipo de dado que queira retornar.
};
// Declaração da Função
let Declaração = NomeDaFunção(Parametros/* ,... */);
// Funções podem retornar ou não algum valor e também pode ter alguma parametro ou não.
// Dentro dos valores que podem ser retornado estão variaveis, funções, arrays, objetos e outros metodos.
// Função Anonima
let OutraFuncao = function(Parametros/* ,... */){
    // Bloco de comando
    // Retorno de algo
};
// Arrow function
let ArrowFuncao = (Parametros/* ,... */) =>{
    // Bloco de comando
    // Retorno de algo
};
// Arrow function reduzida
let ArrowFuncaoRedux = Parametros => /* Bloco de comando de uma unica linha */console.log(`Pão`);
;
// Qual a diferença entre elas? A precidencia ou Hoisting
// Hoisting é a capacidade de um metodo se elevar no código, indica o  nivel de precedencia de leitura.