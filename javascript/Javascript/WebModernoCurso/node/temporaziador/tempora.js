const schedule = require('node-schedule');
const tarefa =schedule.scheduleJob('*/5 * 15 * * 1', function(){
    console.log('Executando tarefa', new Date().getSeconds());
})

setTimeout(function(){
    tarefa.cancel()
    console.log('Cancelando');
},2000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)];
regra.hour = 15;
regra.second = 30;
const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando', new Date().getSeconds());
})