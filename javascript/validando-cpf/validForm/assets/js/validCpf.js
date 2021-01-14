class ValidaCPF{
    constructor(cpfenviado){
        Object.defineProperty(this, 'cpfLimpo',{
            writable: false,
            enumerable:true,
            configurable: false,
            value: cpfenviado.replace(/\D+/g, '')
        })
    }
    valida(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequence())  return false
        this.geraNovoCPF()

        return this.novoCPF === this.cpfLimpo
    }
    isSequence(){
        // Repete o primeiro caractere pelo tamanho da string
        return this.cpfLimpo.charAt(0).repeat(11) == this.cpfLimpo
    }
    geraNovoCPF(){
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digitOne = ValidaCPF.geraDigito(cpfParcial)
        const digitOne2 = ValidaCPF.geraDigito(cpfParcial + digitOne)
        this.novoCPF = cpfParcial + digitOne + digitOne2
    }
    static geraDigito(cpfSemDigitos){
        let total = 0
        let reverse = cpfSemDigitos.length + 1
        for (let strNum of cpfSemDigitos){
            total += reverse * Number(strNum)
            reverse--
        }
        const digito = 11 - (total % 11)
        return digito <= 9? String(digito) :'0';
    }
}
/* let validaCPF = new ValidaCPF('012.345.678-90')
if(validaCPF.valida()){
    console.log('CPF válido')
}else{
    console.log('CPF inválido');
} */