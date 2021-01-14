//-------------------------------------------------------------------------------------------------
// While e Do While
// variavel de controle
let  controle = 0;
// // Condição
while( controle <= 10){
// Bloco de instruções
    controle ++;
}
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
