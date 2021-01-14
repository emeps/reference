Object.prototype.attr0 = '0'; //Não recomendado
// Cadeia de prototype
const avo= {
    attr:'A'
}
const pai = {
    __proto__:avo,
    attr2:'B'
}
const filho ={
    __proto__: pai,
    attr3:'C'
}
console.log(filho.attr);
console.log(filho.attr0);

const carro = {
    velAtual:0,
    velMax:200,
    Acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual +=delta;
        }else{
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`;
    }
};
const ferrari = {
    modelo: 'F40',
    velMax: 325
}
const volvo = {
    modelo: 'NXZ56',
    status(){
        return `${this.modelo}:${super.status()}`
    }
}
// função que estabelece a relação de prototipo entre dois objetos
// (objeto, prototipoDoObjeto)
Object.setPrototypeOf(ferrari,carro);
Object.setPrototypeOf(volvo,carro);

volvo.Acelerar(100);
console.log(volvo.status());
ferrari.Acelerar(400);
console.log(ferrari.status());
