// Array  é um objeto especial
// Recomendados trabalho somente com um tipo de dado por vez
console.log(typeof Array, typeof new Array, typeof[]);

// Forma de declarar uma array
let aprovados = new Array('Bia', 'jao', 'Ana');
console.log(aprovados);

// Forma literal de declarar uma array
aprovados = ['Bia', 'Joa', 'Ana'];
console.log(aprovados[0]);

// Adicionando um novo valor ao Array
aprovados[3] = 'Paulo';

// Adiciona um valor a ultima posição do Array
aprovados.push('Abidal');

// Reordenando um array com indices vazios ou pela ordem alphanumerica
aprovados.sort()
console.log(aprovados);

// Deletando um elemento da array
delete aprovados[1];

// Adiciona, remove, adiciona e remove um elemento de uma array
// Exclui um elemento apartir de X e numero de elementos deletados y splice(x,y)
aprovados.splice(1,1);
// Adicionando elementos
// Excluir e adicionar  um elemento apartir de X e numero de elementos deletados y splice(x,y)
aprovados.splice(1,1,'Elemento1', 'Elementos2');
// Somente adicionar  um elemento apartir de X e numero de elementos deletados y splice(x,y)
aprovados.splice(1,0,'Elemento1', 'Elementos2');
// splice(IndiceDoElemento, NdeElementosExcluidos, elementosAdicionados...)


