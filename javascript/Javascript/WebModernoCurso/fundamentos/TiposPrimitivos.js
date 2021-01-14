// Tipos primitivos de dados são:
// Strings -> declarado por "aspas duplas",'aspas simples' ou `crases`.
let stringDois = "stringDois";
let stringUm = 'stringUm';
let stringTres = `template strings`
// Nesse caso especial, template strings ou seja, a string com crase permite chamar uma variavel dentro de um string
console.log(`Este caso se diz a respeito do ${stringTres} que permite que passe um valor no meio de um string.`)
// Numericos -> declarados sem algum tipo de simbolos, podendo ser tipo inteiro ou tipo float.
const numberInteiro = 1;
const numberFloat = 1.1;
// Boolean -> são valores que representa estado logico, pode assumir apenas dois valores true ou false.
const opcTrue = true;
const opcFalse = false;
// Temos também tres tipos especiais
// undefined -> é quando alguma função, variavel, etc não esta definido no escopo atual, por padrão variaveis declaradas são undefined
let variavelUndefined;
console.log(variavelUndefined);
// null -> indica o valor nulo de uma variavel, função ou objeto entre outros.
let variavelNull = null;
// NaN -> valor indica que a operação não foi possivel por não ser um numero. (Not a Number)
let variavelNaN = '2' + '7.85';
console.log(variavelNaN);