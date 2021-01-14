// O metodo get faz somente a leitura de uma variavel, não altera

let _v = 0;
const objeot = {
    get v(){
        return _v;
    },
    set v(value){
        _v = value * 2;
        
    }
}
console.log(objeot.v);
objeot.g = 50;
objeot.v = 50;
console.log(objeot.v);



