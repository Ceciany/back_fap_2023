// const numeros = [3, 7, 2, 9, 5];
// for (let i in numeros){
//     console.log(numeros[i]);
// }

// const numeros = {
//      a: 10 ,
//      b: 20 ,
//      c: 30 ,
//      d: 40 ,
// };

// let soma = 0
// for (let i in numeros) {
//     soma = soma + numeros[i];
// }
// console.log(soma)

// const numeros = [12, 5, 8, 21, 16, 7];
// const numerosPares = [];
// for (let i in numeros){
//     if (i%2==0){
//         numerosPares.push(numeros[i])
//     }
// }
// console.log(numerosPares);

// const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 };
// for (let i in estudantes){
//     if (estudantes[i]==19){
//         console.log(`Nome: ${i} idade: ${estudantes[i]}`);
//     }
// }

const pontos = [ 
    [2, 5, 8], 
    [3, 9, 12], 
    [4, 6, 10] 
];
let soma = 0;
for (let i in pontos){
    for (let j in pontos[i]){
       soma = soma + pontos[i][j];
    }
}
console.log(soma);