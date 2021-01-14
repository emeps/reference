// Precisão
// O JS não é tão preciso, ou seja, não exibe valores como realmente deveriam.
// Exemplo:
let numero1 = 0.7;
let numero2 = 0.1;
console.log(numero1 + numero2); // valor exibido 0.799999999999999
// Mas como deixo esse valor preciso, ou seja, 0.8? A resposta é simples tem formas diferente de fazer, mas
// prefiro o metodo matematico.
console.log(((numero1*100)+(numero2*100))/100); // Valor aqui será exibido exatamente 0.8
// Objeto Math
// Para arredondamento para cima usamos:
console.log(Math.floor(numero1));
// Para arredondamento para baixo usamos:
console.log(Math.ceil(numero1));
// Para arredondamento em geral:
console.log(Math.round(numero1));
// Para saber o maior valor de uma sequencia
console.log(Math.max(0.6 , 36 , 65 , 3 , 0.4556 , 959));
// Para saber o menor valor de uma sequencia
console.log(Math.min(0.6 , 36 , 65 , 3 , 0.4556 , 959));
// Gerar numeros aleatórios de [0 - 1).
console.log(Math.random());