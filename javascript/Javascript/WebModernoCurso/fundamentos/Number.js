// Concatenação de Numeros
// Para concatenar numeros temos que converter o mesmo para uma string, podemos fazer isso momentaneamente, 
// ou podemos guardar o valor em outra variavel.
let numero = 50;
console.log(numero.toString());
// Se passamos um parametro '2' dentro da função, exibirá o valor em binario.
console.log(numero.toString(2));
// ----------------------------------------------------------------------------------------------------------------------
// Fixação de numero de casas
// Para exibir um numero flutuante com determinado numero de casas decimais usamos .toFixed()
let numeroFlutuante = (65/11564123156);
console.log(numeroFlutuante.toFixed(6));// Exibirá 6 casas apos a virgula.
// ----------------------------------------------------------------------------------------------------------------------
// Number.isInteger() 
// Para saber se o numero é inteiro, ou infinito, ou é realmente um numero utilizamos as tres funções abaixo respectivamente.
// Verificando se o numero é inteiro.
console.log('Esse numero é inteiro?',Number.isInteger(numeroFlutuante)); //Retorna um valor boolean.
// Verifica se o valor é finito.
console.log('Esse numero é inteiro?',Number.isFinite(numeroFlutuante)); //Retorna um valor boolean.
// Verifica se o valor é numerico.
console.log('Esse numero não é numero?',Number.isNaN(numeroFlutuante)); // Retorna um valor boolean.