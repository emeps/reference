// Para imprimir no console
// const nome = 'Vector';
// console.log(nome);

// Para limpar o console
// console.clear();

// Contar quantas vezes foi impresso no console
// const oragens = ['orange','orange','orange','orange'];
// const apples = ['Apple'];
// oragens.forEach(fruit =>{
//     console.count(fruit);
// });
// apples.forEach( apple =>{
//     console.count(apple);
// })

// Imprimir o rastreamento da pilha
// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()

// Calcular o tempos gasto em execução de uma função
// const doSome = ()=> console.log('teste');
// const mensureSome = () =>{
//     console.time('doSome()');
//     doSome()
//     console.timeEnd('doSome()');
// }
// mensureSome();

// Imprime fluxo de erro
// console.error('Não foi possivel executa. Erro: 0x2566');

// Imprimindo colorido no console
// npm install chalk
// const chalk = require('chalk');
// console.log(chalk.red('Erro:404! Falta de conexão'));
// const miles = 18;
// const calculateFeet = miles => miles * 5280;
 
// console.log(chalk`
//     There are {bold 5280 feet} in a mile.
//     In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
// `);
/* ********Styles********
********Modifiers********
reset - Resets the current color chain.
bold - Make text bold.
dim - Emitting only a small amount of light.
italic - Make text italic. (Not widely supported)
underline - Make text underline. (Not widely supported)
inverse- Inverse background and foreground colors.
hidden - Prints the text, but makes it invisible.
strikethrough - Puts a horizontal line through the center of the text. (Not widely supported)
visible- Prints the text only when Chalk has a color level > 0. Can be useful for things that are purely cosmetic.

********Colors********
black
red
green
yellow
blue
magenta
cyan
white
blackBright (alias: gray, grey)
redBright
greenBright
yellowBright
blueBright
magentaBright
cyanBright
whiteBright
********Background colors********
bgBlack
bgRed
bgGreen
bgYellow
bgBlue
bgMagenta
bgCyan
bgWhite
bgBlackBright (alias: bgGray, bgGrey)
bgRedBright
bgGreenBright
bgYellowBright
bgBlueBright
bgMagentaBright
bgCyanBright
bgWhiteBright*/

// Criando Barra de progresso
// Instalando 
// npm install progress

const progressBarra = require('progress');
const bar = new progressBarra(':bar', {total:10});
const timer = setInterval(()=>{
    bar.tick()
    if (bar.complete){
        clearInterval(timer);
    }
},1010);