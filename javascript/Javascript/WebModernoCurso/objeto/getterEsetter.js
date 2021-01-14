const sequencia = {
    _valor:1, //convenção que essa variavel sera acessada apenas internamente dentro do objt
    get valor(){
        return this._valor++;
    },
    // Validação
    set valor(valor){
        if(valor> this._valor){
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
