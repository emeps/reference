// Crie uma função que dado dois valores (passados como parâmetros) 
// mostre no console a soma, subtração, multiplicação e divisão desses valores. 

function CalcularFundamental(operador1 = 0 , operador2 = 0){
    return {
        soma: (operador1 +  operador2),
        subtracao: (operador1 -  operador2),
        multiplicacao: (operador1 *  operador2),
        divisao: ((operador1 / operador2))
    };
};
function ExibirResultado(resultados){
    console.log(`Multiplicação: ${resultados.multiplicacao}\nsoma: ${resultados.soma}\nsubtracao: ${resultados.subtracao}\ndivisao: ${resultados.divisao}`);
};
ExibirResultado(CalcularFundamental(0,3));