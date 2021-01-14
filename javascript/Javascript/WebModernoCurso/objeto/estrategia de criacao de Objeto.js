// Usando a notação literal
const obj = {}

// Object em JS 
const objt = new Object;

// Funções construtoreas
function produto ( nome, preco, modelo){
    // Atributo publico
    this.nome = nome;  
    this.getPrice = ()=>{
        return preco*(1-modelo);
    }
}
const p1 = new produto('Caneta' ,7.99 ,0.15);
const p2 = new produto('Canela' ,99 ,0.5);

// Função factory
function criarFunc(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return(salario/30)*(30-faltas);
        }
    }
}

// Object.create
const filha = Object.create(null);
filha.nome = 'Jana';

// Função que retorna um objeto
const fromJson = JSON.parse('{"info":"nada", "Pao":"delo"}');


const nomeAttr = 'nota';
const valorAtt = 236;

objeto[nomeAttr]= valorAtt;
