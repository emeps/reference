const pai = {
    nome: 'Pedro',
    Cor: 'Preto'
};
const filha = Object.create(pai);
filha.nome = 'Ana';
// console.log(filha.Cor);
// console.log(filha.nome);
// console.log(pai.nome);

const filha2 = Object.create(pai,{
    nome:{
        value:'Bia',
        writable: false,
        enumerable: true
    }
});
// console.log(filha2.nome)
filha2.nome = 'Carla';
// console.log(`${filha2.nome} tem cabelo ${filha2.Cor}`);

// console.log(Object.keys(filha));
// console.log(Object.keys(filha2));

for(let key in filha2){
    // Verificando seo atributo vem por herança ou esta no proprio objeto
    filha2.hasOwnProperty(key) ?
    console.log(key): console.log(`Por Herança: ${key}`);

}