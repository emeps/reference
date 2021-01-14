const fs = require('fs');
const caminho = __dirname + '/arquivo.json'

// sincrono arquivo JSON
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// Assincrono arquivo JSON
fs.readFile(caminho, 'utf-8', (err,conteudo)=>{
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.porta}`);
});

const config = require('./arquivo.json');
console.log(config.db);

// Leitura pasta
fs.readdir(__dirname, (err,arquivos)=>{
    console.log('Conteudo pasta...');
    console.log(arquivos);
})

