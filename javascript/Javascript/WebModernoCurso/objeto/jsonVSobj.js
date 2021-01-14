const objeto = {
    a:1,
    b:6,
    c:5,
    soma(){return a + b + c}
};
// Converte um objeto em JSON
console.log(JSON.stringify(objeto));
// Formato textual

// Converte um JSON em objeto
// console.log(JSON.parse("{a:1, b:2, c:3}"));
console.log(JSON.parse('{"a":1, "b":2, "c":3}'));
console.log(JSON.parse('{"a":1, "b":"String", "c":true, "d":{}, "e":[]}'));
