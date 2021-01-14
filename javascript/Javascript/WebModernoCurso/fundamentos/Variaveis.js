// Tipos de variaveis
// A diferença entre o var e o let é o escopo lexico, o var permite resgatar o valor fora de uma 
// estrutura ou bloco condicional por esse problema foi implementado o let.
// Permite que o valor vaze para fora da estrutura. Valor mutavel. Permite a redeclaração no escopo.
var variavelVAR
// Escopo local, não permite que haja vazamento para fora da estrutura. Valor mutavel. Não permite a redeclaração no escopo
let variavelLET
// Constante é tipo de variavel que não podemos mudar o seu valor. Escopo local. Não permite a redeclaração no escopo
const  constante = 0; // Precisa de um valor para ser atribuida.
// Podemos declarar sem valor como feito acima
// Podemos atribuir um valor
let variavelAtribuida = "atribuição";
// Podemos verificar o tipo primitivo pela função typeof
console.info(typeof variavelAtribuida);
