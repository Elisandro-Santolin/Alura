console.log('Seja Bem-Vindo!');


let nameConsole = 'Nome Sobrenome';
console.log(`Olá ${nameConsole}!`);


let nameAlert = 'Nome Sobrenome';
alert(`Olá ${nameAlert}!`);


let favoriteLanguage = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`Sua linguagem de programação favorita é: ${favoriteLanguage}`);


let valueSum1 = 15;
let valueSum2 = 10;

let resultSum = (valueSum1 + valueSum2);
console.log(`A soma de ${valueSum1} e ${valueSum2} é igual a ${resultSum}.`);


let valueSubt1 = 15;
let valueSubt2 = 10;

let resultSubt = (valueSubt1 - valueSubt2);
console.log(`A diferença entre ${valueSubt1} e ${valueSubt2} é igual a ${resultSubt}`);


let ageUser = prompt('Digite a sua idade: ');
let verificationAge = ageUser > 18 ? 'Maior de Idade!' : 'Menor de Idade!';

console.log(`Idade informada ${ageUser}. Você é ${verificationAge}!`);


let number = prompt('Digite um número: ');
if(number > 0){
    alert('O número digitado é positivo!');

}else if(number < 0){
    alert('O número digitado é negativo!');

}else{
    alert('O número digitado é Zero!');
}


let numberWhile = 1;

while(numberWhile <= 10){
    console.log(numberWhile);
    numberWhile++;
}

let note = 7;
let validationNote = note >= 7 ? 'Aluno Aprovado!' : 'Aluno Reprovado!';


let testOne = Math.random();
console.log(`${testOne}`);


let testTwo = parseInt(Math.random * 10 + 1);
console.log(`${testTwo}`);

let testThree = parseInt(Math.random * 1000 + 1);
console.log(`${testThree}`);

//Desafios finais

// - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

// - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

// - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

// - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

// - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

// - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

// - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

// - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

// - Use um loop while para imprimir os números de 1 a 10 no console.

// - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

// - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

// - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

// - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
