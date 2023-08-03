const readline = require("readline-sync");

// let i =1
// while (i<=10){
//     console.log(i);
//     i++
// }

// let i=1
// let soma = 0;
// while (i<=100){
//     soma += i
//     i++
// }
// console.log(soma);

// let i =1
// soma = 0
// while (i<=50){
//     if (i%2==0){
//         console.log(i);
//         soma+=i
//         i++  
//     }
//     else {
//         i++
//     }
// }
// console.log(soma);

// let i = 57
// while(i<1000){
//     i*=2
// }
// console.log(i);


// numero = readline.question("digite o número ");
// let i=2;
// let primo = true
// while (i<numero){
//     if (numero%i==0){
//         console.log("Não é um número primo");
//         primo=false;
//         break
//     }
//     i++
// }
// if (primo){
// console.log("É um número primo");
// }


// senha = 12345
// usuario = readline.question("Digite a senha: ")
// while (senha!=usuario){
//     usuario = readline.question("Digite a senha: ")
// }

// console.log("Senha correta.");

// let i =1
// soma = 0
// while (i<=30){
//     if (i%3==0){
//         console.log(i);
//         i++  
//     }
//     else {
//         i++
//     }
// }

// const listaNumeros = [1,2,3,4,5];
// let i = 0;
// let soma = 0;


//     while (i<listaNumeros.length){
//         soma+=listaNumeros[i];
//         i++;
//     }
// const media = soma / listaNumeros.length;
// console.log("A soma é:", soma);
// console.log("A média é:", media);

// let numero = readline.question("insira o numero ");
// let resultado = 1;
// while (numero>1){
//     resultado*=numero;
//     numero--;
// }
// console.log(resultado);


let i = 10;
do {
    console.log(i);
    i--;
    }
    while (i > 0);