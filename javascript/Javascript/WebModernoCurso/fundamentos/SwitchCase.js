// Switch/Case
// Semelhando ao If/else. Condicional de escolha.
const data = new Date();
let diaSemana = data.getDay();
switch(diaSemana){
    case 0: 
        console.log('domingo');
        break;
    case 1: 
        console.log('Segunda');
        break;
    default:
        console.log('Qualquer dia desses');
        break;
}