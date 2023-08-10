// function criarMensagemDeSaudacao(nome="joao"){
//     const mensagem = `Hello, ${nome}.`;
//     return mensagem;
// }

const readline = require("readline-sync");
// let nome = readline.question("Qual o seu nome? ");
// console.log(`Essa mensagem é automática: ${criarMensagemDeSaudacao(nome)}`);

// function somar (x,y){
//     return x+y;
// }

// console.log(somar(2,4));

// function ehPar (num){
//     if (num%2==0){
//         return true;
//     }
//     return false;
// }

// console.log(ehPar(12));

// function maiorNumero (x,y,z){
//     if (x>y && x>z){
//         return (`${x} é o maior número.`)
//     }
//     else if (y>x && y>z){
//         return (`${y} é o maior número.`)
//     }
//     return (`${z} é o maior número.`)
// }

// console.log(maiorNumero(17,15,13));

function calcularIMC (peso, altura){
    imc = peso / (altura*altura);
    if (imc>=185 && imc<=24.9){
        return `${imc} peso normal`
    }
    else if (imc>=25 && imc<=29.9){
        return `${imc} sobrepeso`
    }
}

let peso = Number(readline.question("Insira o seu peso: "));
let altura = Number(readline.question("Insira a sua altura em metros: "));
console.log(calcularIMC(peso,altura));