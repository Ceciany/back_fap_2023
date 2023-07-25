const readline = require("readline-sync")

let carta1 = readline.questionInt("Qual o valor da carta 1 do jogador? ")
let carta2= readline.questionInt("Qual o valor da carta 2 do jogador? ")
let soma = (carta1+carta2)
let bancoCarta1 = readline.questionInt ("Qual o valor da carta 1 do banco? ")
let bancoCarta2 = readline.questionInt ("Qual o valor da carta 2 do banco? ")
let bancoCarta3 = readline.questionInt ("Qual o valor da carta 3 do banco? ")
let bancoCarta4 = readline.questionInt ("Qual o valor da carta 4 do banco? ")
let somaBanco =  (bancoCarta1 + bancoCarta2 + bancoCarta3 + bancoCarta4)

if (somaBanco>21) {
    if ((soma<=21) && (soma>somaBanco)) {
        console.log("Você venceu!");
    }
    else {
        console.log("Ninguém venceu!");
    }
}
else if (somaBanco<=21){
    if ((soma<=21) && (soma>somaBanco)) {
        console.log("Você venceu!");
    }
    else {
        console.log("Banco venceu!");
}
}



/*
if (soma>21){
    console.log("Você perdeu.")
}
else{
    console.log("Você venceu!");
}
console.log("A soma das cartas é " + soma + ".");
*/