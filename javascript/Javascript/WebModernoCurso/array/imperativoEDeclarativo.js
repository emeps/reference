const produto = [
    { nome: 'Notebook', nota: 2.4},
    { nome: 'Copo', nota: 16.0 - 5.63}
];
// Imperativo
let totalImperativo = 0;
for(var i = 0; i < produto.length; i++){
    totalImperativo += produto[i].nota;
};
console.log(totalImperativo/produto.length);

// Declarativo
const getNota = notas => notas.nota;
const somar = (total, atual) => total + atual;
const total = produto.map(getNota).reduce(somar);
console.log(total/produto.length);
