//desenvolver um jogo de adivinhacao


//informar usuario sobre onde ele esta (nome do jogo)

//gerar um numero aleatorio .Math.random

//solicitar a entrada de um número (numero da sorte/entrada usario)

//ver se ele ganhou
    //caso sim, jogo encerra (mensagem de boa)

    //caso não, jogo retorna para mais uma tentiva (criar variavel com o maximo de tentativas)

    //terminou tentativas jogo encerra


let welcomeMessage = alert('##### Jogo Adivinhação #####');

let numberSecret = (Math.random() * 100 + 1);
console.log(numberSecret);

let numberShot = prompt('Qual seu número da sorte entre 1 a 100?');

let numberTry = 3;

while(numberTry > 0 ){
    if (numberShot === numberSecret) {
        alert('ganho')
        
    } else if (numberShot != numberSecret) {
        alert('perdeu');        
    }else {
        alert('acabou as chances')
    }
    numberTry--;
}



