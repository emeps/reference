console.log(module.exports === this);
console.log(module.exports === exports);

// As variaveis abaixo ficam visivel para fora do modulo
this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;// esse valor não será retornado.
console.log(module.exports);
// Esse valor tbm não será retornado
exports = {
    nome: 'teste'
};
console.log(module.exports);


// Esse valor será retornado
module.exports = {
    public: 'true'
}