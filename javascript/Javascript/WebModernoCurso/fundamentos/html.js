// ----------------------------------------------------------------------------------------------------------------------
// Escrevendo no HTML
// Podemos escrever no corpo do HTML atraves de document.write(). Basicamente escreve um valor ou texto dentro
// do body do HTML exibindo-o.
document.write('EUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
// Caso queira escrever num local especifico em HTML podemos usar o  .innerHTML para escrever quaquer coisa
// dentro do body e posteriomente estiliza-lo.
// Declaramos uma variavel:
let textoHTML = 'binhas';
// Chamamos uma função que faça a busca por atributo dentro do HTML. Podemos fazer essa busca por:
document.getElementById("Passamos o ID");
document.getElementsByClassName("Passamos o nome da classe");
document.getElementsByName("Passamos o nome do atributo");
// // Também podemos fazer a busca por seletores do CSS, para isso:
document.querySelector("#passamos o ID");
document.querySelector(".passamos class");
document.querySelectorAll("#ID"); //Busca todos que tenhao essa ID.
document.querySelectorAll(".class"); // Busca todos que tenham essa classe.
textoHTML = document.querySelector("#refe"); //Vai me retornar o local da tag.
textoHTML.innerHTML = texto; // Passa o valor de varialvelComum para o local da tag.
// ----------------------------------------------------------------------------------------------------------------------
//Verifica alteração no submit
form.onsubmit = function(evento){
    // Envia ao navegador  comando para não realizar rotinas predefinida
    evento.preventDefault(); 
}
// Outro modo
form.addEventListener('submit', funçãoQualqeru);
// ----------------------------------------------------------------------------------------------------------------------
function criaParagrafo(){
    // Criando um paragrafo.
    const p = document.createElement('p');
    return p;
}
criaParagrafo().innerHTML;
// ----------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------

