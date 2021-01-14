function Aula ( nome, videos){
    this.nome = nome;
    this.videos = videos;
}
// const aula1 = new Aula('BV', 5689);
// const aula2 = new Aula('asf', 4545);
// console.log(aula1, aula2);

// Simulando new
function novo(f, ...params){
    const objeto = {};
    objeto.__proto__ = f.prototype;
    f.apply(objeto, params);
    return objeto;
}

const aula1 = novo(Aula,'BV', 5689);
const aula2 = novo(Aula,'asf', 4545);
console.log(aula1, aula2);