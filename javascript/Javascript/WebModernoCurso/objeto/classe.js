class Lacamento{
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}
class cicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLacamentos(...lancamentos){
        lancamentos.forEach(l=> this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidade = 0
        this.lancamentos.forEach(l =>{
            valorConsolidade += l.valor
        })
        return valorConsolidade;
    }
}

const salario = new Lacamento('Salario', 45000);
console.log(``);
