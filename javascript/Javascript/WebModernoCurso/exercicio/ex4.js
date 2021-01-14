/* Crie uma função que irá receber dois valores, o dividendo e o divisor. 
/* A função deverá imprimir o resultado e o resto da divisão destes dois valores */
const valores = {
    divisor: 2,
    dividendo: 20
} 

imprimir(dividir(valores));

function dividir(){
    return {
        ResultadoDivisao:(valores.dividendo / valores.divisor),
        ResultadoResto:(valores.dividendo % valores.divisor)
    }
}

function imprimir(respostas){
    console.log(`${respostas.ResultadoDivisao}\n${respostas.ResultadoResto}`);
}
