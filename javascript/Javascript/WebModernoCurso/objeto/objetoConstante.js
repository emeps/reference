// pessoa aponta para endereco de memoria 123 que aponta para o local do objeto
// pessoa -> 123 -> {...}
const pessoa ={ nome: 'Jaoa'};
pessoa.nome = 'Pedro';

// pessoa -> 6365 -> {...}
// pessoa aponta para endereco de memoria 6365 que aponta para o local do objeto
pessoa = {nome: 'Ana'} //Gera erro.

// 'Congelando' um objeto, não permitindo a alteração dos dados
Object.freeze(pessoa);
pessoa.nome ='Maria';



