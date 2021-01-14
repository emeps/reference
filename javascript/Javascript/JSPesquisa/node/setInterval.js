const http = require('http');
const hostname = '127.1.1.1';
const port = 3000;
const chalk = require('chalk');

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Tudo funcionando!');
});
function servidor (){
    server.listen(port, hostname, ()=>{
        console.log(`Server running at http://${hostname}:${port}`);
        console.log(chalk.green('Server ON')); 
    });
}
function fecharServidor(){
    server.close();
}
function contarConexão(){
    server.getConnections((err, count)=>{
        console.log(count);
    })
}
module.exports = {
    servidor,
    fecharServidor,
    contarConexão
}