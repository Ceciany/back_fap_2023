const meuArray = [10,20,30,40,50];
let segundoElemento = meuArray[1];
console.log(segundoElemento);

const frutas = ["maçã", "banana", "laranja", "uva", "manga"];
console.log(frutas.length);
frutas[frutas.length+1]= "pera";
console.log(frutas);
frutas.splice(0,1);
console.log(frutas);

const numeros = [10,20,30,40,50];
if (numeros.includes(25)){
    console.log("Valor encontrado.");
}
else{
    console.log("Valor não encontrado.");
}