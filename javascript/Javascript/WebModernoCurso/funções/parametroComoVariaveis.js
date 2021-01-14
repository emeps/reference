function soma (){
    let soma = 0;
    for(i in arguments){
        soma += arguments[i];
    }
    return soma;
}
// arguments recebe todos os valores passado como parametro, independente da quantidade.
soma(1);
soma(5,6,5);
soma(1, 6, 9, 'concatenado');