// Coleção dinamica de pares chave:valor
const produto = new Object;
// Adicionando chave:valor
produto.nome = 'Cadeira';
produto['Marca do produto'] = 'Generica';
produto.preco = 220;

// Removendo chave:valor
delete produto.preco;
delete produto['Marca do produto'];
// Tipos de dados que um objeto pode conter
const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario:{
        nome: 'Raul',
        idade: 26,
        endereco:{
            logradouro: 'Rua ALO',
            numero: 236
        }
    },
    condutores: [{
        nome:'Jay',
        idade: 20
    },{
        nome: 'jenny',
        idade: 20
    }],
    calcularValor:function(){

    }
}
// Acessando pares chave:valor
carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Avenida JKL';

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValor;

