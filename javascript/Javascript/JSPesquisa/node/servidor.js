const serv = require('./setInterval');
const chalk = require('chalk');
serv.servidor();
serv.contarConexão();    
setInterval(()=>{
    // serv.fecharServidor();
    // console.log(chalk.red('Servidor Fechado'));
    serv.contarConexão(); 
},1000);

