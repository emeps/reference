const pessoa = {
    nome:'Nada',
    idade:2,
    peso:32
}
// Pega todas as chaves do objeto pessoa
console.log(Object.keys(pessoa));

// Pegar todo os valores do Object
console.log(Object.values(pessoa));

// Pegar os registos retornando um objeto
console.log(Object.entries(pessoa));
// Normal
Object.entries(pessoa).forEach(e=>{
    console.log(`${e[0]}:${e[1]}`);
});
// Destruturando
Object.entries(pessoa).forEach(([chave, valor])=>{
        console.log(`${chave}:${valor}`);
});

// Definir um propriedade para objeto com alguns parametros a mais.
Object.defineProperty(pessoa,'dataNascimento',{
    enumerable:true, //Enumera a propriedade
    writable:false, //Diz sea propriedade pode ser editada
    value:'01/01/2019'
});
console.log(pessoa.dataNascimento);

// "Concatenação" de objetos
const dest = {a:1}
const dest3 = {b:2}
const dest1 = {c:3}
const objetinho = Object.assign(dest, dest1, dest3);

// Não permite a alteração do objeto
Object.freeze(objetinho);
