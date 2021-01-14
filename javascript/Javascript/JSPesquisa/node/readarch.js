// Lendo um arquivo com o node
const fs = require('fs');
const caminho = 'C:/Users/emeps/Desktop/CODE/nodeTutorial/read.txt'
const caminho2 = 'C:/Users/emeps/Desktop/CODE/nodeTutorial/read.js'
const funcCap = (err,data)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('Arquivo:',data)
}
fs.readFile(caminho, 'utf8', funcCap);
console.log(funcCap());

// Criando um arquivo com o node
const writefs = 'console.log("Queria uma buceta")'
fs.writeFile(caminho2, writefs, err=>{
    if(err){
        console.log(err);
        return
    }
})

// Anexando conteudo
const content = 'Some content!'

fs.appendFile('file.log', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //done!
})
 
