// This acessa a variavel do objeto que pertença
const pessoa = {
    saudacoe: 'bondia',
    falar(){
        console.log(this.saudacoe);
    }
}
pessoa.falar();
const fala = pessoa.falar;
fala(); // conflito entre prog. funcional e OO

// resolvendo o conflito
const falaPessoa = pessoa.falar.bind(pessoa);
falaPessoa();

// **************************************************
