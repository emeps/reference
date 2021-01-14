const escola = [
    { nome: 'Turma A', alunos: [{ nome: 'Gus', nota: 6.7 }, { nome: 'but', nota: 6.6 }] },
    { nome: 'Turma B', alunos: [{ nome: 'jens', nota: 3.6 }, { nome: 'not', nota: 4.6 }] }
];
const getNota = aluno => aluno.nota;
const getNotaTurma = turma => turma.alunos.map(getNota);

const nota1 = escola.map(getNotaTurma);
console.log(nota1);
// Esse é o resutaldo
console.log([].concat([ 6.7, 6.6 ], [ 3.6, 4.6 ]));

// Esse é outro modo de acessar esse resultado
Array.prototype.flapMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback));
}
const nota2 = escola.flapMap(getNotaTurma);
console.log(nota2);