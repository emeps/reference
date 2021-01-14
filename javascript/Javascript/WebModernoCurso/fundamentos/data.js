// Date
// Date é uma função que mostra o horario 
// Função construtora sempre começa com letra maiuscula e pressendido do objeto new
const data = new Date(); //Cria um data nesse momento.
// Data( ano, mes[0-11], dia, hora, minutos, segundos, milesimos); Capturando datas exatas
console.log(data.toString());
// Obtendo datas especificas
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth()); //[0-11]
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milesimos', data.getMilliseconds());
console.log('Semana', data.getDay());// [0 (domingo) - 6 (Sábado)]
// Data em milesimos de segundos.
console.log(data.now()); //Pega da data desde o 1970 em segundos.
// Adicionando zeroEsquerda
function zeroEsquerda(num){
    return num >= 10 ? num: `0${num}`;
}
// Exibe a data formatada de acordo com o local.
const h1 = document.querySelector('');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR',{dataStyle: 'full', timeStyle:'short'});