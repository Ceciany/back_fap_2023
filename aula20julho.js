var n=9;

if (n>0){
    console.log("o número é positivo")
}
    else{
        console.log("o número é negativo")
    }

if (n%2==0){
    console.log(" o número é par")
}
else{
    console.log("o número é ímpar")
}

var exerc=("vazia")
if (exerc==""){
    console.log("a string é vazia")
}
else{
    console.log(exerc)
}


if (n>10){
    console.log("o número é maior que 10")
}
else{
    console.log("o número é menor que 10. Sua multiplicação por 2 é " + n*2)
}


var fazSol=true
if((typeof fazSol) == "boolean"){
    console.log("é boleano");
}
else{
    fazSol=false
    console.log(fazSol)
}

console.log("############################################");

var n1=10;
if (n1>0){
    console.log("O número é positivo.");
}
else if (n1==0){
    console.log("O número é igual a zero.");
}
else {
    console.log("O número é negativo");
}

if (n1%2==0){
    console.log("O número é divisível por 2.");
}
else if (n1%3==0){
    console.log("O número é divisível por 3.");
}
else if (n1%5==0){
    console.log("O número é divisível por 5");
}