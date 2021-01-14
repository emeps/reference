
const fs = require('fs')
const path = require('path');
const { isString } = require('util');
const { type } = require('os');
const caminho = 'C:/Users/emeps/Desktop/CODE/nodeTutorial/read.txt'
fs.stat( caminho, (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('INFORMAÇÕES DO ARQUIVO');
  console.log('Isto é um arquivo:',stats.isFile()); //true
  console.log('Isto é um diretorio:',stats.isDirectory()); //false
  console.log('Isto contem links simbolicos:',stats.isSymbolicLink()); //false
  console.log('Tamanho do arquivo é:',stats.size,'KB'); //1024000 //= 1MB
  console.log('\nINFORMAÇÕES DO CAMINHO');
  console.log('Diretorio:',path.dirname(caminho));
  console.log('Nome do Arquivo:',path.basename(caminho));
  console.log('Extensão do Arquivo:',path.extname(caminho));
  const stringWai = path.dirname(caminho)
  console.log(typeof stringWai)
})