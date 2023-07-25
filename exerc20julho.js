const readline = require("readline-sync");

let numero = readline.question("Digite um número: ")
if (numero>0){
    console.log("O número digitado é positivo.");
}
else if (numero<0){
    console.log("O número digitado é negativo.");
}
else {
    console.log("O número digitado foi o zero.");
}

if (numero%2==0){
    console.log("O número é divisível por 2.");
}
else if (numero%3==0){
    console.log("O número é divisível por 3.");
}
else if (numero%5==0){
    console.log("O número é divisível por 5");
}

let tipoVariavelA = 8
let tipoVariavelB = "fulano"
let tipoVariavelC = true
let tipoVariavelD = 
console.log (typeof tipoVariavelA)
console.log (typeof tipoVariavelB)
console.log (typeof tipoVariavelC)
console.log (typeof tipoVariavelD)

if (tipoVariavelA==typeof number){
    console.log("O tipo de variável é " + (typeof tipoVariavelA))
}
else if (tipoVariavelA==typeof string){
    console.log("O tipo de variável é " + typeof tipoVariavelA )
}
else if (tipoVariavelA==typeof boolean){
    console.log("O tipo de variável é " + typeof tipoVariavelA )
}
else {
    console.log("O tipo de variável é " + typeof tipoVariavelA )
}