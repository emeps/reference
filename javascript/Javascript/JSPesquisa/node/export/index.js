// Exportando com exports
const car = require('./exportA')
car.car;
console.log('Exportando com exports');
console.log(car.nome);
console.log(car.modelo);
console.log(car.ano);
console.log('****************************************','\n');

const carModule = require('./moduleExports');
console.log('Exportando com module.exports');
console.log(carModule.nome);
console.log(carModule.modelo);
console.log(carModule.ano);
console.log('****************************************','\n');

console.log('A diferença entre os dois é que module.exports expoe o objeto para qual aponta');
console.log('E o exports expoe as propriedades do objeto para o qual aponta.');