const pilotos= ['Vet', 'alo', 'Raik', 'Mass'];
// Remover o ultimo elemento do array
pilotos.pop();

// Adiciona um elemento a ultima posição do array
pilotos.push('Alb');

// Remove o primeiro elemento do array
pilotos.shift();

// Adiciona um elemento a primeira posição do array
pilotos.unshift('Groej');

// Adiciona e remove elementos na array
// Adição (apartir do index 0)
pilotos.splice(0,0,'Bottas', 'Fitipald');
// Remove elementos (Remove apartir do index 3, 1 elemento);
pilotos.splice(3,1);

// Cortando um array apartir da posição de indice, retornando um novo array
// Cortando a lista apartir da posição 2
const algPilotos = pilotos.slice(2);

// Cortando uma lista da posiçao 1 até o tamanho total do array
const algoP = pilotos.splice(1, pilotos.length + 1); 
// Cortando uma lista da posiçao 1 até a posição 4
const algoP = pilotos.splice(1, 4); 