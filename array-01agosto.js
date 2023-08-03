const array1 = [1,2,3,4,5];
const array2 = [1,2,3,4,5];
const array3 = array1.concat(array2);
console.log(array3);

const numeros = [1,2,3,4,5,6,7,8,9,10];
const numerosPares = [];
for (let i = 1; i <= numeros.length; i++) {
    if (i % 2 == 0) {
        numerosPares.push(i)
    }
}
console.log(numerosPares);

const numeros2 = [3,1,4,1,5,9,2,6,5,3,5];
console.log(numeros2.sort());

const frutas = ["maçã", "banana", "laranja", "uva", "manga"]
console.log(frutas.indexOf("laranja"));

function verifica (parametro){
    return Array.isArray(parametro)
}

let nome = "Ceciany"

console.log(verifica(numeros2));