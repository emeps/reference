const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const hostname = '127.0.0.1';
const chalk = require('chalk');


app.use('/', express.static(__dirname + '/public'));

// Configuração das rotas
app.get('/meu', (req, res)=>{
    res.send('Chora no meu pau');
})
app.get('/sobre', (req, res)=>{
    res.send('Sobre você')
})
// Enviando uma requisição com parametros
app.get('/ola/:nome',(req, res)=>{
    res.send(`<h1>${req.params.nome}</h1>`);
})
// Enviando um arquivo
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/html/index.html");
})
// Configuração do servidor
app.listen(port, hostname,()=>{
    console.log(chalk.yellow (`Servidor online ${port}`));
});