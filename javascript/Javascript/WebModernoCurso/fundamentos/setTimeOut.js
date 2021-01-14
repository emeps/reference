//-------------------------------------------------------------------------------------------------
// setInterval e setTimeout
// setInterval (function referencia , tempo de execução);
// executa um função no tempo( Sempre executara)
function mostrarHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{hour12:false});
}
const timer = setInterval(function (){
    console.log(mostrarHora());
},1000); // executa a função mostrar hora a cada 1segundo

setTimeout(function(){ //Executa a função uma vez depois de um determinado tempo.
    clearInterval(timer); // Para a execução setInterval
},5000);
setTimeout(()=>{
    console.log('Ola mundo');
},5000);