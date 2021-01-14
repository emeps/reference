// This é forma de referenciar um Object em questão
// This esta definida dentro do contexto que a função for escrita
// Não varia quando é chamado por arrowfunction

// Contexto objeto, são somente exemplos
// Chamamos this no escopo global
{    name: 5, 
    ball: 6
}
// Chamando this referanciando a ball
this.ball; 

function somar (a,b){
    // Chamando this referenciando a e b
    const resultado = this.a + this.b;
    console.log(resultado); // Aqui contexto local 
}
// This mudou seu contexto

// Pegando mesmo exemplo com arrowfunction
// Referenciando this a ball
{ 
    name: 6,
    ball: 6
}
this.ball;
const arrowF = ( a ,b )=>{
    const resultado = this.a + this.b;
    console.log(resultado); // Aqui sai o contexto global
    
}


// ****** ATENÇÃO É SOMENTE UMA EXPLICAÇÃO ******