    // Chamando um script (npm run dev)

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

// Filtrar os chineses
const chineses = f => f.pais === 'China';
// Filtrar as mulheres
const mulheres = f=> f.genero === 'F';
// Filtar menor salario
const menorSalario = (func, funcAtual) =>{
    return func.salario > funcAtual.salario ? func : funcAtual ;
}

axios.get(url).then(response =>{
    const funcioarios = response.data;
    // console.log(funcioarios);
    const func = funcioarios.filter(chineses).filter(mulheres).reduce(menorSalario);
    console.log(func);
});
