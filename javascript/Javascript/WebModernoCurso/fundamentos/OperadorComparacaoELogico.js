// Operadores de compraração 
// > maior que 
const resultadorMaior = (9 > 5)? 'Sim' : 'Não';
// >= maior ou igual que
const resultadorMaiorIgual = (9 >= 5)? 'Sim' : 'Não';
// < menor que
const resultadorMenor = (9 < 5)? 'Sim' : 'Não';
// <= menor ou igual que
const resultadorMenorIgual = (9 <= 5)? 'Sim' : 'Não';
// = atribuição
const resultadoAtribuicao = (9 > 5)? 'Sim' : 'Não';
// == igualdade de valor
const resultadoIgualValor = (9 == 5)? 'Sim' : 'Não';
// === igualdada de valor e tipo
const resultadoIgualValorETipo = (9 === 5)? 'Sim' : 'Não';
// != diferente de valor
const resultadorDiferenteValor = (9 != 5)? 'Sim' : 'Não';
// !== diferente de valor e tipo
const resultadorMaioDiferenteValorEtipo = (9 !== 5)? 'Sim' : 'Não';

// ----------------------------------------------------------------------------------------------------------------------

// Operadores Logicos
const carro = 'branco';
const motor = 2.0;
// && -> e ( ambas tem que ser verdadeira para ser verdadeira);
(carro === 'branco' && motor === 2.0)? console.log(`sim`) : console.log(`não`);
// || -> ou (Pelo menos uma tem que ser verdadeira para ser verdadeira);
(carro === 'vermelho' || motor === 2.0)? console.log(`sim`) : console.log(`não`);
// ! -> not ( Nega a senteça, se for verdadeira passa ser falso e versus.);
!(carro === 'branco' && motor === 2.0)? console.log(`sim`) : console.log(`não`);