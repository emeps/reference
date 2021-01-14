let NomeDeAlguem = 'Paulo Pinto';
// Exibir o valor no console do navegador.
console.log(NomeDeAlguem);
console.info(NomeDeAlguem);
// Exibe mensagem de erro no console.
console.error('Erro aconteceu aqui',NomeDeAlguem);
// Exibe mensagem de atenção no console.
console.warn('Cuidado', NomeDeAlguem);
//Exibe uma caixa de dialogo solicitando ao usuario algum texto
// quando fechado retorna o valor digitado  na caixa.
let mensagemPrompt = prompt('mensagem','valorPadrão');
console.warn('Esse é valor', mensagemPrompt);
// Exibi uma janela modal com uma mensagem e dois botões 
// Retornando valores booleanos
let mensagemConfirma = confirm('Gostaria de receber alguma coisa?');
console.error('Esse era o erro: ',mensagemConfirma );
// Exibe uma caixa de dialogo de aviso com o conteudo opicional especificado
// Não retorna nada
let mensagemAlerta = alert('Cuidado');



