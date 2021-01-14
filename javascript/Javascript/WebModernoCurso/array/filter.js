const produtos = [
    {nome: 'Notebook', preco:24600, fragil:true},
    {nome: 'Copo', preco:600, fragil:true},
    {nome: 'Balão', preco:240, fragil:true},
    {nome: 'Rocha', preco:2460000, fragil:false}
];
console.log(produtos.filter(function(p){
    const pipoca = (p.preco >= 300) ?  true : false;
    return pipoca;
}));

// Implementando um filter
Array.prototype.filter2 = function(callback){
    const newArray = [];
    for(let i; i< this.length; i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i]);
        };
    };
    return newArray;
};