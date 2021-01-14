// Estrategia 1 para gerar valor padrão
function soma1 ( a, b, c){
    a = a ||1
    b = b ||1
    c = c ||1
    return a + b + c;
}
// Essa estrategia quando passa os valores 0 a, b e c recebe 1

// Estrategia 2
function soma2 (a, b, c){
    a = a !== undefined ? a : 1;
    b = b !== undefined ? b : 1;
    c = c !== undefined ? c : 1;
    return a + b + c;
}

// Estrategia 3
function soma3 (a, b, c){
    a = 1 in arguments ? a : 1;
    b = 1 in arguments ? b : 1;
    c = 1 in arguments ? c : 1;
    return a + b + c;
}
// Estrategia 4
function soma4 (a, b, c){
    a = isNaN(a) ? 1 : a;
    b = isNaN(b) ? 1 : b;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

// Valor padrão do es2015 A MELHOR 
function soma5 ( a = 1, b = 1, c = 1){
    return a + b + c;
}