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
