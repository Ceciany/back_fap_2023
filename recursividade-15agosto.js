// function fatorial(n) {
//     if (n===0 || n===1){
//         return 1;
//     }
//     else{
//         return n * fatorial(n-1);
//     }
// }

const readline = require("readline-sync");
// const numero = Number(readline.question("Insira o número: "));
// console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);

function somaRecursiva(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    else {
        return n + somaRecursiva(n - 1);
    }
}

// const numero = Number(readline.question("Insira o número: "));
// console.log(`A soma recursiva de ${numero} é ${somaRecursiva(numero)}`);


function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const numero = Number(readline.question("Digite um valor maior que zero: "));
console.log(`O ${numero}º termo de fibonacci é ${fibonacci(numero)}`);
