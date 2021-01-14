/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  Equilátero: 
Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação 
quanto ao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo). */
const triangulo = {
    verticeA: 50,
    verticeB: 540,
    verticeC: 510
}

function verificarTriangulo(vertices){
    if((vertices.verticeA === vertices.verticeB)&&(vertices.verticeB === vertices.verticeC)){
        ImprimeTriangula('iguais','Equilatero');
    }else if((vertices.verticeA !== vertices.verticeB)&&(vertices.verticeA !== vertices.verticeC)&&
    (vertices.verticeB !== vertices.verticeC)){
        ImprimeTriangula('Diferentes','Escaleno');
    }else if((vertices.verticeA !== vertices.verticeB)||(vertices.verticeA === vertices.verticeC)||
    (vertices.verticeB!==vertices.verticeC)){
        ImprimeTriangula('Diferentes','Isoceles');
    }
}

function ImprimeTriangula(vertices, triangulo){
    console.log(`Esse triangulo é ${triangulo}. Lados:${vertices}`);
}
verificarTriangulo(triangulo);

