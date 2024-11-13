let counterAsc = 1;

while(counterAsc <= 10){
    console.log(`Imprimindo número: ${counterAsc}`);

    counterAsc++;
}


let counterDesc = 10;

while(counterDesc >= 0){
    console.log(`Imprimindo número: ${counterDesc}`);

    counterDesc--;
}


let countDownAsc = prompt('Digite o número de contagem: ');

if(countDownAsc !== 0){
    while(countDownAsc >= 0){
        alert(`Imprimindo número em console`);
        console.log(`Imprimindo console ${countDownAsc}`);

        countDownAsc--;

    }
}else {
    alert('Digite um número válido!');
}


let countDownDesc = prompt('Digite o número de contagem: ');
let counterInitial = 0;

if(countDownDesc !== 0){
    while(counterInitial <= countDownDesc){
        alert(`Imprimindo número: ${counterInitial}`);
        console.log(`Imprimindo em console: ${counterInitial}`);

        counterInitial++;

    }
}else {
    alert('Digite um número válido!');
}





// - Desafios

// - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

// - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

// - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

// - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
