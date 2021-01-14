const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
// Este objeto expõe, entre muitos outros, os métodos 'on' e 'emit'.
// 'emit' é usado para disparar um evento.
// 'on' é usado para adicionar uma função de retorno de chamada que
// será executada quando o evento for disparado.

eventEmitter.on('start', (number) => {
    console.log('Startado', number);
})

eventEmitter.emit('start',20);


