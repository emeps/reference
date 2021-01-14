// Função em JS é first-class object
// Trata a função como um parametro podendo retornar como dado
// Função higher-order

// Forma literal
// Função sem retorno, retornar undefined
function funcaoUm(){  }

// Armazenar em uma variavel
const funcacDois = function () { 

}
// Quando quiser chamar a função, passamos seu nome com parenteses
funcacDois();
// Quando quiser passar uma função por parametro, simplismente passamos o seu NamedNodeMap.
funcaoUm(funcacDois);

// Armazenando em uma Array
const array = [function(a,b){return a + b }, funcaoUm, funcacDois];
console.log(array[0](2,3));

// Armazenando um atributo de objeto
const objt = {};
objt.falar = function () {
    return 'opa';    
}
console.log(objt.falar());

// Passar por parametro
function run (fun){
    fun();
}
run(function(){console.log('executando');});

// Retornando uma função
function soma (a,b){
    return function (c){
        console.log(a+b+c);
    }
}
soma(2,3)(4);
// ou
const conco = soma(2,3);
conco(4);


// ***************************************************************
// function declaration
// Posso chamar ela antes do escopo dela
soma(5,3);
function soma (x,y){
    return x + y;
}
// function expression
// Não pode chamar ela antes do escopo dela
const sub = function (x,y){
    return x-y;
}
sub(2,3);
// named function expression
// Não pode chamar ela antes do escopo dela
const multi = function multi(x ,y ){
    return x*y;
}
multi(2,3);