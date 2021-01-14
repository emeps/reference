// Object.preventExtensions previne a adição de atributos no objetos
const produto = Object.preventExtensions({
    nome: 'qualquer',
    preco: 1.99, 
    tag: 'promocao'
});

// Verificando se o objeto foi criado com extensive
console.log("Extensivel:", Object.isExtensible(produto));
produto.nome = 'Bala';
produto.descricao = 'Nada';
delete produto.tag;
console.log(produto);

// Object.seal - selar, não adiciona e nem excluir, so altera
const pessoa = {
    nome: 'julia',
    idade: 35
}
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));
pessoa.sobrenome = 'Nada';
pessoa.idade = 20;
delete pessoa.nome;
console.log(pessoa);

// Object.freeze- Não adiciona, não exclui e nem altera.
Object.freeze(pessoa)