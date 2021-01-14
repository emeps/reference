const fs = require('fs');

const produto = {
    nome:'Pau de borracha',
    preco: 3652.36,
    desconto: 0.15
};
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log((err || 'Arquivo Salvo'));
});