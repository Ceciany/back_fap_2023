function imprimirLista (array){
    for (let elemento of array){
    console.log(elemento, array[elemento]);}
}

const lista = ["azul", "amarelo", "branco"];
imprimirLista(lista);