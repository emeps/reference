const frutas = { nome: 'Pera', idade: 'maçao', pai: 'Uva'};
const frutas = ['Pera', 'maçao', 'Uva'];
// Estrutura de repetição for
// Utilizado quando sabemos quantas interações será preciso para execução do bloco.
for(let i = 0; i <=100; i++){
    console.log(`linha ${i}`);
}
// *****For Clássico*****
// Retorna o indice
// Strings e Array
for( let i = 0; i <frutas.length; i++){
    console.log(frutas[i]);
}
// *****For in*****
// Lê o indices ou chaves do objeto.
// Retorna o indice
// Strings, Objetos e Array
for (let i in frutas){
    console.log(frutas[i]);
}
// Objetos e Array
for (let chave in frutas){
    console.log(i);
    console.log(chave);
    // Objeto dentro de objeto.
    console.log(fruta[chave]);
}
// *****For of*****
// Objetos iteraveis 
// Returna o valor do indice
// Arrays e Strings.
const nome = 'Emerson'; //Possui indices
for (const valor of nome) {
    console.log(valor);
    
}
// *****forEach*****
// Retorna valores, indices e também a array.
frutas.forEach(function(elemento, indice, array){
    console.log(elemento, indice, array);
})

// FOR IN PARA VETORES
const notas = [ 1,2,3,4,5,6,7,8];
for(let nota in notas){
    console.log(`${nota},${notas[nota]}`);
}
// FOR IN PARA OBJETOS
const pessoa = {
    nome = 'Ele',
    sobrenome = 'Na',
    idade = 25,
    peso = 63
}
for (const atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}