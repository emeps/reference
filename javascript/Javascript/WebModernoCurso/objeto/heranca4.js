const { prototype } = require("module");

console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
};

console.log('Escola Nada haver'.reverse());

Array.prototype.first = function(){
    return this[0];
};

console.log([1,3,6,9,8,9,6,7].first());

// Não substituir comportamentos ou funções com prototype