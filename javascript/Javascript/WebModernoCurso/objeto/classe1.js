class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends avo{
    constructor(sobrenome, profissao = 'Prof'){
        super(sobrenome);
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho;
console.log(filho);
 