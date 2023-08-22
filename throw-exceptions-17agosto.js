const readline = require("readline-sync");

let numero1 = Number(readline.question(`digite um numero: `));
let numero2 = Number(readline.question(`digite o numero que deseja dividir:`));

try {
    if (numero2===0){
        console.log("Ocorreu um erro.");
    }
} catch (error) {
    console.log("Não é possível dividir por zero." + error);
}