// Funçaõ factory é um função que retorna um Object, fabrica um instancia de um obejto
// function criarPessoa(){
//     return {
//         nome: 'ana',
//         sobrenome: 'Paula'
//     }
// }
// console.log(criarPessoa());


//  function criarProduto (nome, preco){
//      return{
//          nome,
//          preco,
//          desconto: 0.1
//      };
//  };


// Classe é um forma diferente de construir um objeto, nad mais é que um função
/* class criarPessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(this.nome);
    }
}
 
const pi = new criarPessoa( 'Joao')
pi.falar(); */


const pessoa = name =>{
    return{
        falar: ()=> console.log(`${name}`)
    }
}
const people = pessoa('james');
people.falar();



// função construtora
    function criarPessoa(nome){
        this.nome = nome;
        this.falar = function() {
            console.log(this.nome);
        }
    }
     
    const pi = new criarPessoa( 'Joao')
    pi.falar();


