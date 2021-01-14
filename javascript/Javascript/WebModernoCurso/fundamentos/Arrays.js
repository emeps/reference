// Arrays
// Usado paara armazenar um consjunto de dados
const alunos = ['Luiz', 10, 50.63, true, null, {}];
console.log(alunos);
console.log(alunos[0]);
// ----------------------------------------------------------------------------------------------------------------------
// Adicionando mais elementos a uma array pelo fim
// Passando elemento depois do ultimo indice
alunos[6] = 'Macaco Louco'; //array1 = [1,3,6,669,8756,36];
console.log(alunos);
// Por função
alunos.push(36); //array1 = [1,3,6,669,8756,36];
console.log('push:',alunos);
// ----------------------------------------------------------------------------------------------------------------------
// Adicionando a partir do começo
alunos.unshift(36); //array1 = [36,1,3,6,669,8756];
console.log('unshift',alunos);
// ----------------------------------------------------------------------------------------------------------------------
// Removendo o ultimo elemento
alunos.pop();
console.log('pop',alunos);
// Armazenando o removido
const removido = alunos.pop();
console.log('pop',removido);
// Removendo o primeiro elemento
alunos.shift();
console.log('shift',alunos);
// ----------------------------------------------------------------------------------------------------------------------
// Deletando sem alterar os indices
delete alunos[2]; // valor 6 removido e o indice vazio
console.log(alunos);
// Podemos acessar indices inexistentes da array
// Fatiando um array
alunos.slice(0,1); //Fatia do indice retornando os valores do indices 0 e 1;
console.log('slice',alunos);
// ----------------------------------------------------------------------------------------------------------------------
// Sabendo se a variavel é um instancia de array
console.log(alunos instanceof Array); //Retorna valor booleanos. 