// Objeto
// Objeto é uma coleção chave: valor.
const ObjetoInfo = {
    nome: 'Emerson',
    idade: 26,
    sexo: 'M',
    endereco: {
        rua: 'Rua São Paulo',
        numero: 335,
        bairro: 'Bahia'
    }
}
// console.log(`${ObjetoInfo.nome} ${ObjetoInfo.endereco.rua}`);
// ----------------------------------------------------------------------------------------------------------------------
// Quando é preciso retornar mais de um parametro de uma função retornamos por objeto.
function CriarCadastro(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}
let recebeCAD = CriarCadastro('Pereira', 'Capeta', 25);
// console.log(`${recebeCAD.nome} ${recebeCAD.sobrenome} ${recebeCAD.idade}`);
// ----------------------------------------------------------------------------------------------------------------------
// Podemos referencia qualquer chave pela palavra reservada this.
// This referecia ao objeto criado dentro de uma função
function CadastrarCarro(marca, modelo, ano) {
    return {
        marca,
        modelo,
        ano,
        Imprimir() {
            console.log(`${this.marca}`);
            console.log(`${this.modelo}`);
            console.log(`${this.ano}`);
        }
    }
};
let receberValores = CadastrarCarro('Chev', 'Astra', 2060);
// receberValores.Imprimir();

// Mais sobre this
function ObjetoThis (pelado){
    this.pelado = pelado;
}
const ObjThis = new ObjetoThis('Eu estou?');
// console.log(`${ObjThis.pelado}`);

// Podemos criar um obejto vazio e ir atribuindo de acordo com a necessidade
const ObjVazio = {}
ObjVazio.nome = 'Paulo';
ObjVazio.idade = 50;
// Outro modo de declarar
ObjVazio['marca'] = 'Camaro'
// console.log(ObjVazio);

// ----------------------------------------------------------------------------------------------------------------------
