// Closures é escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas a função

const c = 'global';
function fora(){
    const c = 'local';
    function dentro(){
        return c;
    }
    return dentro;
}
const minhafuncao = fora();
console.log(minhafuncao());
