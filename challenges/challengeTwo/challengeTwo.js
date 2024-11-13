alert('teste')
let weekDay = promt('Qual é o dia da semana? ');

if(weekDay === 'Sábado' || weekDay === 'Domingo'){
    alert('Bom fim de semana!');

}else{
    alert('Boa semana!');
}



let numberEvaluation = prompt('Digite um número: ');

if(numberEvaluation != 0 && numberEvaluation > 0){
    alert(`O número digitado ${numberEvaluation} é positivo!`);

}else if (numberEvaluation != 0 && numberEvaluation < 0){
    alert(`O número digitado ${numberEvaluation} é negativo!`);

}else {
    alert('Escolha um número diferente de 0');
}



let gameScore = prompt('Qual é sua XP no Dota2? ');

if(gameScore != 0 && gameScore >= 100){
    alert(`Total de pontos ${gameScore}. Elo Vencedor!`);

}else {
    alert(`Total de pontos ${gameScore}. Elo Gordox!`);
}


let totalBalance = 5000;

alert(`Salto Total: ${totalBalance}`);


let userName = prompt('Digite seu nome: ');
alert(`Bem-Vindo ${userName}!`)


//Desafios

// - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

// - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

// - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

// - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
