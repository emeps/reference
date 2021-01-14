// if else
// Verificador de comparação
// Valor que sempre retornam valores falso:
// undefined,
// null,
// 0,
// '', //string vazia
// NaN
// ********************************************************************
// Declaração Padrão
if (9>5){
    console.log(`Verdade`);
}else{
    console.log(`Falso`);
}
// Reduzindo esse bloco temos o operador ternario
(9>5)? console.log(`Verdade`) : console.log(`Falso`);

// Declaração com retorno podemos omitir o else
if (9 > 5){
    return true;
}
if(8 < 3){
    return false
}
// Cascata de if
if (9 <= 5){
    console.log(`Menor`);
    
}else if (5 < 1){
    console.log(`Menor`);
}else{
    console.log(`Maior`);
}
// Pode ser 'aplicado similarmente' quando não temos um requisição de um valor, ou quando queremos 
//estabelecer um valor padrão para alguma função da aplicação.
// Padrão de valores (faulback)
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
// ********************************************************************
