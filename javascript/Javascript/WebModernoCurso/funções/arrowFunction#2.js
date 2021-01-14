function pessoa(){
    this.idade = 0;
    setInterval(()=>{
        this.idade++;
        console.log(this.idade);  
    },1000);
}
// Instanciando o objeto
new pessoa;

// ************************************************************************************
let comparaThis = function(param){
    console.log(this === param);
}
comparaThis(global);
//------------------------------------------------------------------------------------
const objt = {
}
comparaThis() = comparaThis.bind(objt);
comparaThis(objt);
//------------------------------------------------------------------------------------
let comparaThiArrow = param => console.log(this ===param);
comparaThiArrow(global);
comparaThiArrow(module.exports);
//------------------------------------------------------------------------------------
comparaThiArrow = comparaThiArrow.bind(objt);
comparaThiArrow(objt);
comparaThiArrow(module.exports);
// This na função arrow essa associado aonde a função foi escrita. (não muda com bind)