const readline = require ("readline-sync");

// function saudacao(){
//     console.log("Olá, mundo!");
// }

// saudacao();

// function dobro (num){
//     console.log(num*2);
// }

// let numero = readline.questionInt("Insira um número inteiro. ")
// dobro(numero);

// function mostrarNumeros (x,y){
//     for (let i=x; i<=y;i++){
//         console.log(i);
//     }
// }

// let inicio = readline.questionInt("Vai começar em qual número? ");
// let fim = readline.questionInt("Qual o fim? ")
// mostrarNumeros(inicio,fim)

// function verificarPar(x){
//     if (x%2==0) {
//         console.log("Onúmero é par.");
//     }
//     else{
//         console.log("O número é ímpar.");
//     }
// }

// let verificaPar =readline.questionInt("Insira um número. ")
// verificarPar(verificaPar)

function imprimirLista (array){
    for (let i=0; i<array.length; i++){
    console.log(array[i]);}
}

const lista = ["azul", "amarelo", "branco"];
imprimirLista(lista);