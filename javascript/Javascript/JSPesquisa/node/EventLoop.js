// Pilha de chamada - LIFO
// const bar = () => console.log('bar')

// const baz = () => console.log('baz')

// const foo = () => {
//   console.log('foo')
//   bar()
//   baz()
// }

// foo()

// Pilha de chamada + pilha de mensagem
/* const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo() */
// Promisses pilha de tarefa
/* const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}
foo() */

// process.nextTick()
// Cada vez que o loop de eventos faz uma viagem completa, nós o chamamos de tick.
// Quando passamos uma função para process.nextTick(), instruímos o mecanismo a invocar
// essa função no final da operação atual,antes do início do próximo ciclo de evento
/* const bar = () => console.log('bar')
const baz = () => console.log('baz')
const foo = () => {
  console.log('foo')
  bar();
  // setTimeout(bar, 0)
  // new Promise((resolve, reject) =>
  //   resolve('should be right after baz, before bar')
  // ).then(resolve => console.log(resolve))
  baz()
  process.nextTick(()=>{
    console.log('Ainda nesta iteração');
  })
}
foo()
 */
// Qual é a setImmediate()diferença de setTimeout(() => {}, 0)(passar um tempo limite 
// de 0 ms) e de process.nextTick()?
// Uma função passada para process.nextTick()será executada na iteração atual do
// loop de eventos, após o término da operação atual. Isso significa que ele 
// sempre será executado antes setTimeoute setImmediate.

// Um setTimeout()retorno de chamada com um atraso de 0 ms é muito semelhante 
// a setImmediate(). A ordem de execução dependerá de vários fatores, 
// mas ambos serão executados na próxima iteração do loop de eventos.
/* const bar = () => console.log('bar')
const baz = () => console.log('baz')
const foo = () => {
  console.log('foo')
  setImmediate(()=>{
    console.log("Estou atrasado?");
  })
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
  process.nextTick(()=>{
    console.log('Ainda nesta iteração');
  });
  
}
foo()
 */
// setTimeout é uma função que atrasa sua execução por um determinado periodo de tempo
setTimeout(()=>{
  console.log('Esta atrasado 2segundos');
},2000);
setTimeout(()=>{
  console.log('Esta atrasado 5segundos');
},5000);
// setTimeoutretorna o id do cronômetro. Geralmente não é usado, mas você pode armazenar 
// esse id e limpá-lo se quiser excluir a execução da função programada:
const id = setTimeout(()=>{
  console.log('Esta atrasado 5segundos');
},5000);
clearTimeout(id);

// Se você especificar o atraso de tempo limite para 0, a função de retorno de 
// chamada será executada o mais rápido possível, mas após a execução da função atual:
setTimeout(() => {
  console.log('after ')
}, 0)

console.log(' before ')

// setInterval() em vez de executar a função de retorno de chamada uma vez, ela a executará 
// para sempre, no intervalo de tempo específico que você especificar (em milissegundos):

setInterval(()=>{
  console.log('Estou executando');
  setTimeout(()=>{
    console.log('Esta atrasado 2segundos');
  },10000);
},500);