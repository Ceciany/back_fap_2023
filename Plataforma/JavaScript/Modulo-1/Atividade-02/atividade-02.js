const readline = require ("readline-sync");

let nota1= readline.questionFloat("Insira a primeira nota: ");
let nota2= readline.questionFloat("Insira a segunda nota: ");
let nota3= readline.questionFloat("Insira a terceira nota: ");

let media = (nota1+nota2+nota3)/3;
console.log(`Sua média é ${media}.`);