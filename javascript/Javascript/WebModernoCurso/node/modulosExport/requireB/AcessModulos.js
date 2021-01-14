// Caminhos relativos
const modulaA = require('../modulos/Modulo A');
console.log(modulaA.ola);

// Caminho absoluto
const moduloB = require('../modulos/Module B.js');
console.log(moduloB.boa)

// Cria uma pasta no node_modules como nome desejado e adiciona um arquivo index.js nele
const caminho = require('caminhos');
console.log(caminho.teste);

// Pegando modulo do node core que ja vem instalado com node
const http = require('http');
http.createServer((req, res)=>{
    res.write('Bom dia!');
    res.end();
}).listen(8000);

// Referenciando somente a pasta quando tenho um arquivo index que tem referencia de outros arquivos
const requireC = require('./requireC');
console.log(requireC.ola);