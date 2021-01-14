function MeuObjeto(){}
 console.log(MeuObjeto.prototype);


const objt1 = new MeuObjeto;
const objt2 = new MeuObjeto;

console.log(objt1.__proto__ === objt2.__proto__);
console.log(MeuObjeto.prototype === objt1.__proto__);

MeuObjeto.prototype.nome = 'Anonimo';
MeuObjeto.prototype.falar = function(){
    console.log(`Falar ${this.nome}`);
};
objt1.falar();
objt2.nome = 'Falar';
objt2.falar();
const objt3={}
objt3.__proto__ = MeuObjeto.prototype;

objt3.nome = 'Objeto 3';
objt3.falar();


console.log((new MeuObjeto).__proto__=== MeuObjeto.prototype);
console.log(MeuObjeto.__proto__=== Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
