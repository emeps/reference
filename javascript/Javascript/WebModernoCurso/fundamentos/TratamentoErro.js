// try, catch e throw
function tratamentoErro(erro){
    // throw 10
    // throw true
    throw 'Erro aconteceu em algum lugar deste merda'
}
function SomaDois(PrimeiroValor, SegundoValor){
    try{
        console.log(PrimeiroValor %SegundoValor);
    }catch(e){
        // Tratamento do erro
        tratamentoErro(e);
    }finally{
        // Sempre será executado
        console.log(`Final forçado`);
    }
}
SomaDois(100, 100);

//----------------------------------------------------------------------------------------------------
try{
    console.log(never);
}catch(err){
    console.log('Erro desconhecido');
}

function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser numeros'); // tratamento de erro
    }
    return x + y;
}
try{// Não há erros 
    console.log(soma(1,2));
}catch(error){// quando há erros
    console.log(error);
}finally{//sempre é executado

}
// try, catch e finally sempre pode ser aninhado.
// comando instanceof verifica se uma variavel é instancia dda função contrutora.