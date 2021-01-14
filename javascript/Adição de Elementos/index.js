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
