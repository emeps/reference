// Metodo bind() do objeto tipo function
// Cria um nova função que quando chamada tem sua palavra this 
// definida para objeto que definimos.
/* function thisBind(){
    console.log('Esse this apronta pra global?:',this === global);
    console.log('Esse this apronta pra objeto?:',this === obj);
}
const obj = { exemplo: 'Exemplo'}
thisBind()
console.log('----------------------------------------------------------')
console.log('Mudança do this de escopo lexico')
// Mudança do this de escopo lexico
thisBind2 = thisBind.bind(obj);
thisBind2();
 */

// Call() e Apply() tem um e sintaxe identica, a diferença é que a call aceita um lista
// de argumentos e o aplly aceita um array de argumentos
// Call
const objetoUm = {
    exemplo: 'Exemplo',
    mostrador: function thisCallExemple(a,b,c){
        console.log(this);
    }
}
objetoUm.mostrador();
const objetoDois = {
    exemplo2: 'Exemplo Dois'
}
// Call "interpola" um objeto para dentro do outro
objetoUm.mostrador.call(objetoDois, a, b, c);

// Apply
objetoUm.mostrador.apply(objetoDois,[1, 2, 3]);

