// Funçao Chama de volta
// Passa uma função e quando um evento é disparado essa função e chamada
const fabrincantes = ['mercedes', 'ferrari', 'audi'];

function imprimir(nome, indice){
    console.log(`${indice + 1}: ${nome}`);
}
fabrincantes.forEach(imprimir);


const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
// Sem callback
let notasbaixas = [];
for(let i in notas){
    if(notas[i]<7){
        notasbaixas.push(notas[i]);
    }
}
console.log(notasbaixas);

// Com callback
notasbaixas = notas.filter(function (nota) {
    return nota < 7;
});

// ********************************************
// Exemplo no browser
document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('Isso mesmo');
    
} //resposta é um array