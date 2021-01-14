// É a capacidade de receber atributos e valores sem precisar fazer control C
// Reuso de codigo
// Basicamente buscar um atributo dentro da 'arvore geneologica' do objeto.
// Não funciona  quando usando a função construtora
const ferrari = {
    modelo: 'F40',
    veloMax: 325
}
const volvo = {
    modelo: 'NXZ56',
    veloMax: 356
}
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
// Voce tem um obejto que tem um prototipo e é essa forma que define herança em JS
// São referencia de referencia
function MeuObjeot(){}
console.log(typeof Object, typeof MeuObjeot);
console.log(Object.prototype, MeuObjeot.prototype);

