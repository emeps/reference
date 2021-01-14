// Isso é uma referencia
// ----------------------------------------------------------------------------------------------------------------------
// Variaveis GLOBAIS (só para efeito de usabilidade);
var varialvelComum = 'Nada de MAIS';
var stringNumberInter = '25';
var stringNumberFloat = '25.56';
// ----------------------------------------------------------------------------------------------------------------------
// Tipos de declaração do console.log()
// Imprime os valores no console do navegador.
console.log( 'This is JavaScript'); //
console.log( 'Hello World', 10 , varialvelComum ); //
// ----------------------------------------------------------------------------------------------------------------------
// Tipos de declaração do alert()
// Imprime os valores no pop-up do navegador.

//alert('This is JavaScript');
//alert('Hello World', 10 , varialvelComum);

// ----------------------------------------------------------------------------------------------------------------------
// Tipos de variaveis
// Uma variavel é utilizado para guardar informações importantes para o funcionamento do programa.
// Em JS a variavel é definida de tipagem dinamica, ora assumindo valores inteiros outra assumindo valores flutuantes.
// Uma variavel não pode ser redeclarada.
// Podemos declarar:
let variavelZero; // Sem valor e depois ser atribuido a ela.
// Declaração LOCAL, ou seja, fica 'restrita' ao bloco, pode ser alterado o valor e tipo quando desejar.
let variavelUm = 'valor'; // Com valor, podendo ser strings, booleans, inteiros e floats.
// Declaração LOCAL, ou seja, fica 'restrita' ao bloco, não pode ser alterado o valor e tipo quando desejar.
const variavelDois = 'valor';
// Declaração GLOBAL, ou seja, fica 'restrita' ao bloco, pode ser alterado o valor e tipo quando desejar.
var variavelTres = 'valor';
// ----------------------------------------------------------------------------------------------------------------------
// Verificando o tipo de valor dentro da variavel.
// Queremos verificar que tipo de valor esta contido em 'varialvelComum'
console.log(typeof varialvelComum);
// ----------------------------------------------------------------------------------------------------------------------
// Templates Strings
// Podemos declarar um valor em string de tres modos:
// Podemos passar o valor em aspas simples
var stringsAspasSimples = 'Aspas Simples';
// Podemos passar o valor em aspas duplas
var stringsAspasDuplas = "Aspas Duplas";
// Podemos passar o valor em crases
var stringsCrase = `Crases`;
// Templates Strings permite passar uma expressão embutida em uma string.
console.log(`Valores entre ${stringsCrase}`);
// Passando por "rão" e o nome da variavel dentro do "conchetes"
// ${nomeDaVariavel}
// ----------------------------------------------------------------------------------------------------------------------
// Tipos Primitivos de Dados
// Temos Strings: declarado entre aspas duplas, aspas simples e crases.
// Temos Number: declarado sem algum tipo de aspas ou crase e pode ser do tipo float ou int.  
// Temos Boolean: declarado sem algum tipo de aspas ou crase e pode ser do true ou false.  
// Só um apendice: temos o valor null, indica valor nulo. NÂO CONFUNDA COM undefined.
// Outro apendice: NaN é usado para dizer que a operação não foi realizada por que não se tratam com numeros
// NaN: Not a Number
// ----------------------------------------------------------------------------------------------------------------------
// Operadores Aritméticos
// ADIÇÃO E CONCATENAÇÃO
// Só podemos fazer adição entre valores numericos. Também valido para subtração, multiplicação e divisão
console.log(10 + 20);
// A concatenação é feita entre strings ou entre string e qualquer outro tipo de valor.
console.log(varialvelComum+ '' + 10 + '' + true);
// RESTO
// Exibi o resto da divisão
console.log(10%5);
// POTENCIAÇÂO
// Podemos fazer com a função Math.pow(valor,potencia) ou adicionando **
console.log(10**2);
console.log(Math.pow(10,2));
// ----------------------------------------------------------------------------------------------------------------------
// Incremente e Decremento
// INCREMENTO
// Quando desejamos contar o numero de vezes de execução de algo.
// incremento = incremento + 1
let incremento = 1;
incremento ++;
incremento += 1; 
incremento = incremento + 1;
//DECREMENTO
// Quando desejamos contar regressivamente.
let decremento = 1;
decremento--;
decremento-=1;
decremento = decremento -1;
// Podemos fazer a segunda conjugação também para multiplicação e divisão.
let mulpDiv = 10;
mulpDiv *= 2; //Multiplicando 10 * 2.
mulpDiv /= 2; // Dividindo 10 / 2.
// Esse tipo de operadores são chamados de operadores por atribuição.
// ----------------------------------------------------------------------------------------------------------------------
// Conversão de Tipos de Dados
// Para converter um string em um inteiro utiliza parseInt(variavel,tiposDeConversão);.
// Tipo de conversão é dado: 
// SEM VALOR: Numero decimal.
// 0x: Numero Hexadecimal.
// 0: Numero Octadecimal.
console.log (typeof (parseInt(stringNumberInter)));
// Para conversão de uma string para valor float usamos parseFloat(variavel);
console.log (typeof (parseFloat(stringNumberFloat)));
// Para conversão sem especificar o tipo se é float ou inteiro.
// Utilizamos o Number(stringNumerica).
console.log(typeof (Number(stringNumberInter)));
console.log(typeof (Number(stringNumberFloat)));
// ----------------------------------------------------------------------------------------------------------------------
// Comandos window
// Os comandos window permite a manipulação direta do navegador
// CONFIRM()
// O comando confirma é semelhante ao alert() e também ao prompt(). Envia ao usuario um pop-up pedindo a confirmação
// de alguma mensagem, e o seu retorno é true (confirmar) ou false (cancelar).

//window.confirm('Comando Confirm()');

// PROMPT()
// O comando prompt() envia uma mensagem pop-up estilo alert(), no qual o usuario pode digitar qualquer valor no seu campo de entrada.
// Essa função retorna uma string com valores digitados pela usuario.

//alert(prompt('Seu NOME'));

// ----------------------------------------------------------------------------------------------------------------------
// Funções Strings
// .charAt()
// As strings são indexadas da esquerda para a direita, começando do index 0 até o tamnho maximo menos um.
// o ultimo index pode ser declarado nomeString.length-1 assim termos o valor do tamanho da string. 
// Caso esteja fora da string a função retorna vazio.
// Passamos a posição desejada e a função retorna o conteudo deste local.
console.log(varialvelComum.charAt(varialvelComum.length-1)); // Estou buscando a ultima posição da string.
// .charCodeAt ()
// Diferente do .charAt() o .charCodeAt() busca o valor daquela possição da string refrente a tabela ASCI.
// Se ele encontra na string a letra 's' ele retornara o valor dessa letra na tabela ASCI.
console.log(varialvelComum.charCodeAt(varialvelComum.length-1));
//.concat()
// Podemos concatenar strings atraves da função .concat().
console.log(varialvelComum.concat("Um texto aqui","",stringNumberFloat)); 
// Busca dentro da String
// Buscando valores desejado e em posição inicial desejada.
console.log(varialvelComum.indexOf('a', 6)); // Aqui queremos que busque pela letra a começando da posição 6, se encontrar retorna o valor caso contrario retorna -1.
console.log(varialvelComum.lastIndexOf('a', 2)); // Aqui queremos que busque pela letra a começando da posição, começando pelo ultima posição.

// Buscando valores com expressões regulares (RegExp)
// Retorna uma Array com Strings 
console.log(varialvelComum.match(/[a-z]/g)); // O g é a flag de retorno de todos os valores que esteja em minusculo. 
// Retorna o indice com os valores solicitados
console.log(varialvelComum.search(/a A /g));
// Substituir  um valor de string
varialvelComum.replace(/Nada de MAIS/g, 'Hoje o bailão vai comer souto');
console.log(varialvelComum);
// Saber o tamanho da string
console.log(varialvelComum.length);
// Para pegar um trecho de uma string
console.log(varialvelComum.slice(2, 9));
// Para dividir uma string e alocar em um array
console.log(varialvelComum.split(varialvelComum, ""));// Variavel e o separador. Omitindo o separador, retorna uma array de 1 elemento.
console.log(varialvelComum.split(varialvelComum));// Omitindo o separador, retorna uma array de 1 elemento.
// Deixar todas as letras Maiuscula
console.log(varialvelComum.toUpperCase());
// Deixar todas as letras Minuscula
console.log(varialvelComum.toLowerCase());
// ----------------------------------------------------------------------------------------------------------------------
// Escrevendo no HTML
// Podemos escrever no corpo do HTML atraves de document.write(). Basicamente escreve um valor ou texto dentro
// do body do HTML exibindo-o.
document.write('EUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
// Caso queira escrever num local especifico em HTML podemos usar o  .innerHTML para escrever quaquer coisa
// dentro do body e posteriomente estiliza-lo.
// Declaramos uma variavel:
let texto;
// Chamamos uma função que faça a busca por atributo dentro do HTML. Podemos fazer essa busca por:
// document.getElementById("Passamos o ID");
// document.getElementsByClassName("Passamos o nome da classe");
// document.getElementsByName("Passamos o nome do atributo");
// // Também podemos fazer a busca por seletores do CSS, para isso:
// document.querySelector("#passamos o ID");
// document.querySelector(".passamos class");
// document.querySelectorAll("#ID"); //Busca todos que tenhao essa ID.
// document.querySelectorAll(".class"); // Busca todos que tenham essa classe.
texto = document.querySelector("#refe"); //Vai me retornar o local da tag.
texto.innerHTML = varialvelComum; // Passa o valor de varialvelComum para o local da tag.
// ----------------------------------------------------------------------------------------------------------------------
// Concatenação de Numeros
// Para concatenar numeros temos que converter o mesmo para uma string, podemos fazer isso momentaneamente, 
// ou podemos guardar o valor em outra variavel.
let numero = 50;
console.log(numero.toString());
// Se passamos um parametro '2' dentro da função, exibirá o valor em binario.
console.log(numero.toString(2));
// Fixação de numero de casas
// Para exibir um numero flutuante com determinado numero de casas decimais usamos .toFixed()
let numeroFlutuante = (65/11564123156);
console.log(numeroFlutuante.toFixed(6));// Exibirá 6 casas apos a virgula.
// Number.isInteger() 
// Para saber se o numero é inteiro, ou infinito, ou é realmente um numero utilizamos as tres funções abaixo respectivamente.
// Verificando se o numero é inteiro.
console.log(Number.isInteger(numeroFlutuante)); //Retorna um valor boolean.
// Verifica se o valor é finito.
console.log(Number.isFinite(numeroFlutuante)); //Retorna um valor boolean.
// Verifica se o valor é numerico.
console.log(Number.isNaN(numeroFlutuante)); // Retorna um valor boolean.
// ----------------------------------------------------------------------------------------------------------------------
// Precisão
// O JS não é tão preciso, ou seja, não exibe valores como realmente deveriam.
// Exemplo:
let numero1 = 0.7;
let numero2 = 0.1;
console.log(numero1 + numero2); // valor exibido 0.799999999999999
// Mas como deixo esse valor preciso, ou seja, 0.8? A resposta é simples tem formas diferente de fazer, mas
// prefiro o metodo matematico.
console.log(((numero1*100)+(numero2*100))/100); // Valor aqui será exibido exatamente 0.8
// Objeto Math
// Para arredondamento para cima usamos:
console.log(Math.floor(numero1));
// Para arredondamento para baixo usamos:
console.log(Math.ceil(numero1));
// Para arredondamento em geral:
console.log(Math.round(numero1));
// Para saber o maior valor de uma sequencia
console.log(Math.max(0.6 , 36 , 65 , 3 , 0.4556 , 959));
// Para saber o menor valor de uma sequencia
console.log(Math.min(0.6 , 36 , 65 , 3 , 0.4556 , 959));
// Gerar numeros aleatórios de [0 - 1).
console.log(Math.random());
// ----------------------------------------------------------------------------------------------------------------------
// Arrays
// Usado paara armazenar um consjunto de dados
const alunos = ['Luiz', 10, 50.63, true, null, obj{}];
console.log(alunos);
console.log(alunos[0]);
// Adicionando mais elementos a uma array pelo fim
const array1 = [1,3,6,669,8756];
// Passando elemento depois do ultimo indice
array1[6] = 36; //array1 = [1,3,6,669,8756,36];
// Por função
array1.push(36); //array1 = [1,3,6,669,8756,36];
// Adicionando a partir do começo
array1.unshift(36); //array1 = [36,1,3,6,669,8756];
// Removendo o ultimo elemento
array1.pop();
// Armazenando o removido
const removido = array1.pop();
// Removendo o primeiro elemento
array1.shift();
// Deletando sem alterar os indices
delete.array1[2] // valor 6 removido e o indice vazio
// Podemos acessar indices inexistentes da array
// Fatiando um array
array1.slice(0,1); //Fatia do indice retornando os valores do indices 0 e 1;
// Sabendo se a variavel é um instancia de array
console.log(array1 instanceof Array); //Retorna valor booleanos. 
// ----------------------------------------------------------------------------------------------------------------------
// Funcções
// Criação da função
function nomeDaFunção(VariaveisDeParametros){
    // Blocos de comandos
    // retorno do resultados
    return VariaveisDeParametros;
}//Não precisa dechar com ;
// Execução da Função
// Armazenando o valor de retorno de uma função.
// As funções podem ser varias, sem parametros e/ou sem retorno
const armazemDoValorDaFunção = nomeDaFunção(valorOuVariavel);
// Outro modo de criar função
const raiz = function(){ //Função anonima
    // Bloco de comandos
}; //precisa fechar ;
// Outro modo de criar função
const raiz = (variavel) =>{
    // Blocos de comando
};
// Caso tenha um parametro e uma linha de comando
// Arrow function
const raiz = variavel => /* Blocos de comando em uma linha */ ;
// ----------------------------------------------------------------------------------------------------------------------
// Object
// Conjunto de dados com atributos
// Não confuda obejtos{} com array []
const arrowArray = [2,3,36,6]; //Array
console.log(arrowArray[index])
const arrowArray = {
    nome: 25,
    telefone: 36,
    metodo: 'pao'
}; //Objetos
console.log(arrowArray.atributo);
// Outro modo de criar objeto
function criaPessoas(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
} //Podemos omitir os nomes do atributos caso sejam iguais
// Chamando o objeto
const pessoa = criaPessoas(argumento1, argumento2, argumento3);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);
// Quando passamos um função dentro de um objeto
// Podemos referenciar pela palavra this
function criaPessoas(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade,
        Imprime(){
            console.log(`${this.nome}`);//Lmebrando que this refrencia ao objetoem questão.
            ++this.idade;
            this.idade++;
        }
    };   
}
// ----------------------------------------------------------------------------------------------------------------------
// Valores primitivos e valores por referencia
// Tipos de dados primitivos(imutaveis): Strings, number, boolean, undefined, null, bigint e symbol 
// Referencias (mutaveis) - array, objetos e funções
let a = [1,2,3]; //A independente de b
let b = [...a]; // B independente de a (cópia independente)
// Serve tbm para objetos
let x = {};
let obj = {...x}
// Valores primitivos vão são ser copiados
// Valores por referencia vão ser copiados independente.
// ----------------------------------------------------------------------------------------------------------------------
form.onsubmit = function(evento){ //Verifica alteração no submit
    evento.preventDefault(); // Envia ao navegador  comando para não realizar rotinas predefinida
}
// Outro modo
form.addEventListener('submit', funçãoQualqeru);
// ----------------------------------------------------------------------------------------------------------------------
// Operadores Logicos
// && -> e ( ambas tem que ser verdadeira para ser verdadeira);
// || -> ou (Pelo menos uma tem que ser verdadeira para ser verdadeira);
// ! -> not ( Nega a senteça, se for verdadeira passa ser falso e versus.);
//-------------------------------------------------------------------------------------------------
// Operadores de compraração 
// > maior que 
// >= maior ou igual que
// < menor que
// <= menor ou igual que
// = atribuição
// == igualdade de valor
// === igualdada de valor e tipo
// != diferente de valor
// !== diferente de valor e tipo
//-------------------------------------------------------------------------------------------------
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
if (condição){
    bloco de codigo
}else{
    bloco de codigo
}
// ********************************************************************
// Declaração com retorno podemos omitir o else
if (condição){
    return variavel;
}
if(condição){
    return variavel
}
// ********************************************************************
// Cascata de if
if (condição){

}else if (condição){

}else{
    
}
// ********************************************************************
//-------------------------------------------------------------------------------------------------
function IMC(){
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('#resultado');
    function dadosIMC(event){
        event.preventDefault();
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');
        peso = parseFloat(peso.value);
        altura = parseFloat(altura.value);
        let result;
        function calcIMC(peso, altura){
            const imc = (peso/Math.pow(altura,2));
            return imc.toFixed(2);
        };
        result = calcIMC(peso, altura);
        if(result <= 18.5){
            resultado.innerHTML = `<p>Abaixo do Peso: <strong>${result}</strong></p>`
            resultado.classList.add('rest');
        }else if(result >= 18.5 && result <= 24.9){
            resultado.innerHTML = `<p>Peso Normal: <strong>${result}</strong></p>`
            resultado.classList.add('rest');
        }else if(result >= 25.0 && result <= 29.9){
            resultado.innerHTML = `<p>Sobrepeso: <strong>${result}</strong></p>`
            resultado.classList.add('rest');
        }else if(result >= 30.0 && result <= 34.9){
            resultado.innerHTML = `<p>Obesidade Grau #1: <strong>${result}</strong></p>`
            resultado.classList.add('rest');
        }else if(result >= 35.0 && result <= 39.9){
            resultado.innerHTML = `<p>Obesidade Grau #2: <strong>${result}</strong></p>`
            resultado.classList.add('rest');
        }else{
            resultado.innerHTML = `<p>Obesidade Grau #3: <strong>${result}</strong></p>`
            resultado.classList.add('rest');
        }
    }
    form.addEventListener('submit', dadosIMC);
    
};
IMC();
// ---------------------------------------------------------------------------------------------------------------------------------------------
const form = document.querySelector('.formulario');
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Stopped');
    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if(!peso){
        setResultado('Peso invalido', false);
        return;
    }
    if(!altura){
        setResultado('Altura invalida', false);
        return;
    }
    const imc =getImc(peso, altura);
    const nivelImc = getLevelImc(imc);
    const msg = `Seu IMC é ${imc} ${nivelImc} .`;
    setResultado( msg, true);
});
function getLevelImc(imc){
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 
    'Obesidade G1', 'Obesidade G2', 'Obesidade G3'];
    if(imc >= 39.9) return nivel[5];
    if(imc >=34.9) return nivel[4];
    if(imc >=29.9) return nivel[3];
    if(imc >=24.9) return nivel[2];
    if(imc >=18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}
function getImc(peso, altura){
    const imc =(peso/Math.pow(altura,2));
    return imc.toFixed(2);
}
function criaParagrafo(){
     // Criando um paragrafo.
     const p = document.createElement('p');
     return p;
}
function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    // Limpando resultado
    resultado.innerHTML = '';
    const p = criaParagrafo();
    if(isValid){
         p.classList.add('ok');
    }else{
        p.classList.add('NoOk');
    }
    p.innerHTML = msg;
    // Insirindo o valor de p no resultado
    resultado.appendChild(p);
}
//-------------------------------------------------------------------------------------------------
// Operador Ternario
// Tem objetivo de resumir um condicional if/else para uma simples linha de codigo.
//  (condição) ? (Valor para verdadeiro) : (Valor para falso) ;

const pontua = 999;
// Condicional Padrão
if (pontua >= 1000){
    console.log('VIP');
}else{
    console.log('Não VIP');
}
// Operação Ternaria
const resultado = pontua >= 1000? 'VIP' : 'Não VIP';
// Pode ser 'aplicado similarmente' quando não temos um requisição de um valor, ou quando queremos estabelecer um valor padrão
// para alguma função da aplicação.
// Padrão de valores (faulback)
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
//-------------------------------------------------------------------------------------------------
// Date
// Date é uma função que mostra o horario 
// Função construtora sempre começa com letra maiuscula e pressendido do objeto new
const data = new Date(); //Cria um data nesse momento.
// Data( ano, mes[0-11], dia, hora, minutos, segundos, milesimos); Capturando datas exatas
console.log(data.toString());
// Obtendo datas especificas
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth()); //[0-11]
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milesimos', data.getMilliseconds());
console.log('Semana', data.getDay());// [0 (domingo) - 6 (Sábado)]
// Data em milesimos de segundos.
console.log(data.now()); //Pega da data desde o 1970 em segundos.
// Adicionando zeroEsquerda
function zeroEsquerda(num){
    return num >= 10 ? num: `0${num}`;
}
//-------------------------------------------------------------------------------------------------
// Exibe a data formatada de acordo com o local.
const h1 = document.querySelector('');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR',{dataStyle: 'full', timeStyle:'short'});
//-------------------------------------------------------------------------------------------------
// Switch/Case
// Semelhando ao If/else. Condicional de escolha.
const data = new Date();
let diaSemana = data.getDay();
switch(diaSemana){
    case 0: 
        console.log('domingo');
        break;
    case 1: 
        console.log('Segunda');
        break;
    default:
        console.log('Qualquer dia desses');
        break;
}
//-------------------------------------------------------------------------------------------------
// Atribuição via desestruturação (array)
// const numero = [1, 2, 3];
// const [a, b, c] = numero;
// Rest operator (...) // Spreed operator(...)
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeira, segundo, ...resto] = numero;
// primeira = 1, segundo = 2, resto = [3, 4, 5, 6 ,7 ,8, 9];
// Pode pular indices deixando somente espaços vazios.
const numero =[[1,2,3],[4,5,6],[7,8,9]];
// Acessando valores da matriz
console.log(numero[1][1]); // 5
//-------------------------------------------------------------------------------------------------
// Atribuição via desestruturação (objeto)
const pessoa = {
    nome: 'emerson',
    sobrenome: 'patryck',
    idade: 25,
    endereco:{
        rua: 'São Paulo',
        numero: 320
    }
};
const nome = pessoa.nome; //Atribuição normal.
console.log(pessoa.nome);
const {nome, sobrenome, idade} = pessoa; //Atribuição desestruturado
console.log(nome, sobrenome, idade);
// Ou
const {nome: teste, sobrenome: teste2, idade: teste3}  = pessoa;
console.log(teste, teste2, teste3);

const {endereco:{ rua, numero }}  = pessoa;
console.log(rua, numero);

const {endereco:{ rua: r, numero: num}}  = pessoa; //Pode atribuit valores padrão dentro das novas variariaveis
console.log(r, num);
// Podemos utilizar o ...resto igual aos arrays
//-------------------------------------------------------------------------------------------------
// Estrutura de repetição for
for(let i = 0; i <=100; i++){
    console.log(`linha ${i}`);
}
// Utilizado quando sabemos quantas interações será preciso para execução do bloco.
// Outro tipo de for
const frutas = ['Pera', 'maçao', 'Uva'];
const frutas = { nome: 'Pera', idade: 'maçao', pai: 'Uva'};
// For Clássico
// Retorna o indice
// Strings e Array
for( let i = 0; i <frutas.length; i++){
    console.log(frutas[i]);
}
// For in
// Lê o indices ou chaves do objeto.
// Retorna o indice
// Strings, Objetos e Array
for (let i in frutas){
    console.log(frutas[i]);
}
// Objetos e Array
for (let chave in frutas){
    console.log(i);
    console.log(chave);
    // Objeto dentro de objeto.
    console.log(fruta[chave]);
}
// For of - Objetos iteraveis
// Returna o valor do indice
// Arrays e Strings.
const nome = 'Emerson'; //Possui indices
for (const valor of nome) {
    console.log(valor);
    
}
// forEach
// Retorna valores, indices e também a array.
frutas.forEach(function(elemento, indice, array){
    console.log(elemento, indice, array);
})
//-------------------------------------------------------------------------------------------------
const paragrafos = document.querySelector('.paragrafos');
const ps =  paragrafos.querySelectorAll('p');
const estilos = getComputedStyle(document.body); // Pega os estilos do computados do html
// Pegando o background do body
const backgroundColorBody = estilos.backgroundColor;
// console.log(backgroundColorBody)

for( let pel of ps){
    pel.style.backgroundColor = backgroundColorBody;
    pel.style.color = '#ffffff'; 
}
//-------------------------------------------------------------------------------------------------
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];
const container = document.querySelector('.container');
const div = document.createElement('div');
for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    // tagCriada.innerHTML = texto; // adição de conteudo (tags + texto)
    // tagCriada.innerText = texto; // para adição de texto pois não há adição de tags no html
    let textNode = document.createTextNode(texto);
    tagCriada.appendChild(textNode);
    div.appendChild(tagCriada);
}
container.appendChild(div);

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
// While e Do While
// variavel de controle
// let  controle = 0;
// // Condição
// while( controle <= 10){
// // Bloco de instruções
//     controle ++;
// }
// while
function random(min, max){
    const r = Math.random() *(max-min) - min;
    return r;
}
let rand = random(1,50);
 console.log(rand);

 while(rand !==10){
     rand = random(1,50);
     console.log(rand)
 }
//  Do While
do {
    rand = random(1,50);
    console.log(rand)
} while (rand !==10);
//-------------------------------------------------------------------------------------------------
// Break e Continue
const numeros = [1,2,3,4,5,6,7,8,9];
for(let numero of numeros){
    if (numero===2){
        continue; //Pula para proxima interação do laço
    }
    if (numero === 7){
        break; //Para o laço 
    }
    console.log(numero);
}
//-------------------------------------------------------------------------------------------------
// Tratamento de erro (try, catch, throw)
// Try tenta executar esse bloco se não cai no catch
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
//-------------------------------------------------------------------------------------------------
// setInterval e setTimeout
// setInterval (function referencia , tempo de execução);
// executa um função no tempo( Sempre executara)
function mostrarHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{hour12:false});
}
const timer = setInterval(function (){
    console.log(mostrarHora());
},1000); // executa a função mostrar hora a cada 1segundo

setTimeout(function(){ //Executa a função uma vez depois de um determinado tempo.
    clearInterval(timer); // Para a execução setInterval
},5000);
setTimeout(()=>{
    console.log('Ola mundo');
},5000);
//-------------------------------------------------------------------------------------------------
// Declaração de função
// Function hoisting -> eleva as declaração de funções e variaveis com var.
// Chamando antes
falaOI()// Isso vai funcionar
function falaOI(){
    console.log('Oie');
}
// Neste tipo de declaração a função é elevada de modo que pode chamar ela antes ou depois da sua declaração
falaOI(); //Isso tbm vai funcionar

// As funções são first-class object -> Pode ser tratada como dado.
// function expression (termologia)
const nome = function(){
    console.log('nome');
};
nome();
// Isso implica que podemos jogar uma função dentro da função
function execut (funcao) {
    funcao();
}
execut(nome);//Passagem por referencia.

// Arrow Functions
const arrow = () => {
    console.log('Arrow function');
}
 arrow();

//  Todas as funções são first-class object.
// Quando passar um função para ontra Passamos por reeferencia para não ser executada novamente.
// Pode ter função dentro do objeto (chamado de method)
const obj ={
    fala: function () {
        console.log('nada');
    },
    outroModo(){
        console.log('Outro mode');
    }
};
obj.fala();

// Parametro da função 
function funcao () {
    arguments[0];
}
funcao(pao);
// Quando passamos qualquer parametro para função mesmo que a função não receba
// o js guarda os valores dentro de um objeto chamada 'arguments'.

// Definindo valores padrão
function funcao (a, b = 0, c=4) {
    // b = b || 0;
    console.log(a + b); // 2
    console.log(a + b + c); // 2
}
funcao(2, undefined, 20);
// Atrbiuição via desestruturação
function name({nome, sobrenome, idade}) {
    console.log( nome, sobrenome,idade);
}
// name({nome: 'eme', sobrenome:'part', idade:20});
let obj ={nome: 'eme', sobrenome:'part', idade:20};
name(obj);
// Similiar ao vetores tbm
// Podemos usar o rest operator, sempre tem que ser o ultimo 
function conta(operador,acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
    
}
conta('+', 0,20,20,40,90); //Array[20,20,40,90];

// Returnos de funções
// Retorna um valor e termina a função/ou bloco
function falaFrase(comeco){
    function falaresto(resto){
        return comeco +' ' + resto;
    }
    return falaresto; //retorna a função
}
const olaMundo = falaFrase('Ola');
console.log(olaMundo('mundo!')); // Por isso olaMundo se torna um função

// Função closer
function falaFrase(comeco){
    return function (resto){
        return comeco +' ' + resto;
    };    
};

// Escope lexico
// Busca as informações proximas ele até o escopo global.
const nome = 'eme';
function falaNome(){
    console.log(nome);
};
falaNome();

// Closures -> Habilidade de ter acesso aos seus  escopos lexicos
// Escopo global
function retornaFuncao(){
    // Escopo Clouser
    const nome = 'jaiminho';
    return function(){
        // Escopo Script
        return nome;

    };
}

// função de callback
// São executadas quando um ação finaliza.
function f1(callback){
    setTimeout(function(){
        console.log('1');
        if (callback)callback();
    }, rand());
    
}
function f2(callback){
    setTimeout(function(){
        console.log('1');
        if (callback)callback();
    }, rand());
}
function f3(callback){
    setTimeout(function(){
        console.log('1');
        if (callback)callback();
    }, rand());
}
// Agora será executado em ordem.
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Ola mundo');
        });
    });
});
// OU
f1(f1Callback);
function f1Callback(){
    f2(f2Callback);
}
function f2Callback (){
    f3(f3Callback);
}
function f3Callback(){
    console.log('Ola mundo')
}
// Gera numero aleatorio para o tempo
function rand(min =1000, max = 3000){
    const num = Math.random() *(max-min) + min;
    return Math.floor(num);
}
// Funções Imediatas (funcções auto-invocadas) 
// IIFE - immediately invoked function expression
// Quando queremos que as nossas funções não recorra ao escopo global para executalas.
function qualquerCoisa(){
    console.log(12313132);
};
qualquerCoisa(); //Toca os escopo global
// IIFE - Pode ser escrita qualquer coisa
(function(){
    console.log(123231231);
})();
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
