const readline = require("readline-sync");

function exibirSaudacao (nome, idade, dia, mes, ano) {
    console.log(`Olá, ${nome}, seja bem vindo(a)!
Notei que você tem ${idade} anos.
Hoje é ${dia} de ${mes} de ${ano}.`)
}

let nome = readline.question("Qual o seu nome? ");
let idade = readline.questionInt("Qual a sua idade? ");
let dia = readline.questionInt("Qual a data de hoje? Digite o dia ");
let mes = readline.question("Digite o mês ");
let ano = readline.question ("Ano ");
exibirSaudacao(nome, idade, dia, mes, ano);