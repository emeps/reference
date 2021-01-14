// metodo é uma propriedade que faz referencia a uma função
// Neste caso o this aponta para uma propriedade do objeto
const objt = {
    prop: 100,
    f: function(){
        return this.prop
    }
};
// Neste caso o this apontara para o objeto global
function thisNãoestrito(){
    console.log(this);
}
// Neste caso o this apontara lugar nenhum
function thisEstrito(){
    'use strict';
    console.log(this);
}
thisNãoestrito();
thisEstrito();
// This é uma maneira de deixar alguma atributo publico para exportar
// Neste caso o this apontara para module.exports
this.rato = function(){
    console.log(this);
}

// Nas arrow functions
// Contexto de criação: global
const arrowThis = ()=>{console.log(this)}

// Contexto de criação: Objeto (Isso é errado)
const arrowThisGlobal = {
    prop:150,
    arrowF :()=> {console.log(this)}
}
// Contexto de criação: Objeto (Isso é correto)
    const objeto = {
        exemplo:'Exemplo',
        mostrarThis: function(){
            const f =(() => this)();
            console.log(f);
        }
    }