// Percorrendo um Array
const aprovados = ['Nata', 'Leite', 'vaga', 'vagina'];
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice} : ${nome}`);
    console.log(array);
});

aprovados.forEach(nome=>console.log(nome));

const exibir = aprovado => console.log(aprovado);
aprovados.forEach(exibir);

// Implementando um forEach
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    };
};

const receita = ['cafe','Manteiga', 'anime', 'gostosa', 'nude'];
receita.forEach2(function(nome, indice, array){
    console.log(`${indice+1}) ${nome}`);
    // console.log(array);
});