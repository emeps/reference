// String é um tipo de dado caracterizado por 'não possui valor numerico' explicito
// Convertendo uma string para valor inteiro
// Para converter um string em um inteiro utiliza parseInt(variavel,tiposDeConversão);.
// Tipo de conversão é dado: 
// SEM VALOR: Numero decimal.
// 0x: Numero Hexadecimal.
// 0: Numero Octadecimal.
let stringInteiro = '10';
console.log(typeof stringInteiro, stringInteiro);
stringInteiro = parseInt(stringInteiro);
console.log(typeof stringInteiro, stringInteiro);
// Para converter a string para valores float
let stringFloat = '10.6';
console.log(typeof stringFloat, stringFloat);
stringFloat = parseFloat(stringFloat);
console.log(typeof stringFloat, stringFloat);
// Para converter valores numericos inteiros em float e vs utilizamos a funçãi Number()

// ----------------------------------------------------------------------------------------------------------------------
// Funções Strings
// ----------------------------------------------------------------------------------------------------------------------
// .charAt()
// As strings são indexadas da esquerda para a direita, começando do index 0 até o tamnho maximo menos um.
// o ultimo index pode ser declarado nomeString.length-1 assim temos o valor do tamanho da string. 
// Caso esteja fora da string a função retorna vazio.
// Passamos a posição desejada e a função retorna o conteudo deste local.
let stringFuncoes = 'O rei roeu o cabelo da Maria Pentelho'
// Estou buscando a ultima posição da string.
console.log(stringFuncoes.charAt(stringFuncoes.length-1)); 
// ----------------------------------------------------------------------------------------------------------------------
// .charCodeAt ()
// Diferente do .charAt() o .charCodeAt() busca o valor daquela possição da string refrente a tabela ASCI.
// Se ele encontra na string a letra 's' ele retornara o valor dessa letra na tabela ASCI.
console.log(stringFuncoes.charCodeAt(stringFuncoes.length-1));
// ----------------------------------------------------------------------------------------------------------------------
//.concat()
// Podemos concatenar strings atraves da função .concat().
console.log(stringFuncoes.concat("Um texto aqui","",stringFuncoes)); 
// ----------------------------------------------------------------------------------------------------------------------
// Busca dentro da String
// Buscando valores desejado e em posição inicial desejada.
console.log(stringFuncoes.indexOf('a', 6)); // Aqui queremos que busque pela letra a começando da posição 6, se encontrar retorna o valor caso contrario retorna -1.
console.log(stringFuncoes.lastIndexOf('a', 2)); // Aqui queremos que busque pela letra a começando da posição, começando pelo ultima posição.
// ----------------------------------------------------------------------------------------------------------------------
// Buscando valores com expressões regulares (RegExp)
// Retorna uma Array com Strings 
console.log(stringFuncoes.match(/[a-z]/g)); // O g é a flag de retorno de todos os valores que esteja em minusculo. 
// Retorna o indice com os valores solicitados
console.log(stringFuncoes.search(/a A /g));
// ----------------------------------------------------------------------------------------------------------------------
// Substituir  um valor de string
stringFuncoes.replace(/Nada de MAIS/g, 'Hoje o bailão vai comer souto');
console.log(stringFuncoes);
// ----------------------------------------------------------------------------------------------------------------------
// Saber o tamanho da string
console.log(stringFuncoes.length);
// ----------------------------------------------------------------------------------------------------------------------
// Para pegar um trecho de uma string
console.log(stringFuncoes.slice(2, 9));
// ----------------------------------------------------------------------------------------------------------------------
// Para dividir uma string e alocar em um array
console.log(stringFuncoes.split(stringFuncoes, ""));// Variavel e o separador. Omitindo o separador, retorna uma array de 1 elemento.
console.log(stringFuncoes.split(stringFuncoes));// Omitindo o separador, retorna uma array de 1 elemento.
// ----------------------------------------------------------------------------------------------------------------------// Deixar todas as letras Maiuscula
console.log(stringFuncoes.toUpperCase());
// Deixar todas as letras Minuscula
console.log(stringFuncoes.toLowerCase());