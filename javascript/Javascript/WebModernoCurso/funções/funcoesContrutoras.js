// Cria instancias.
function carros(velocidade = 200, delta =5 ){
    // Atributo privado.
    let VelocidadeAtual = 0;
    // metodo Publico.
    this.acelerar = function(){
        if(VelocidadeAtual + delta <= velocidade){
            VelocidadeAtual += delta;
        }else{
            VelocidadeAtual = velocidade;
        }
    }
    // Metodo publico permite puxar a função para fora do bloco.
    this.getVelocidadeAtual = function(){
        return VelocidadeAtual;
    }
}

const uno = new carros;
uno.acelerar();
console.log(`${uno.getVelocidadeAtual}`);


const ferrari = new carros(350, 20);
ferrari.acelerar();
console.log(`${ferrari.getVelocidadeAtual()}`);

// ******************************************************************
