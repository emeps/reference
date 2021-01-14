// Break e Continue
// Break age no bloco mais proximo dele for's, While e switch não afeta if.
//Desvio de fluxo
const numeros = [1,2,3,4,5,6,7,8,9];
for(let numero of numeros){
    if (numero===2){
        continue; //Pula para proxima interação do laço
    }
    if (numero === 7){
        break; //Para o laço 
    }
    console.log(numero);
}
// continue para a iteração e vai para a proxima iteração.

// Criando um rotulo associado ao laço for
externo: for(a in nums) {
    interno:for(b in nums){
        if ( a == 2 && b == 3) break externo; // Parando o break externo
        else break interno;
    }

}