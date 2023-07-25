const readline = require("readline-sync");

let numero = readline.question ("Informe um número: ");

for (let cont=1; cont<=10; cont++){
    console.log (numero + " x " + cont + " = " + (numero*cont))
}