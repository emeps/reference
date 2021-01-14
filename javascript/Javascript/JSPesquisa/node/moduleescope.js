const chalk = require('chalk');
// Retorna um string informando o caminho absoluto do arquivo
console.log(__filename);
// Retorna uma string com caminho do arquivo
console.log(__dirname);


console.log(Object.keys(require.cache));
const arrayCache = Object.keys(require.cache);
console.log(arrayCache);
console.log('------------------------------------------')
console.log(arrayCache[1])