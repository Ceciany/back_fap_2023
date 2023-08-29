let pessoa = {
    nome: "João"
}
console.log(pessoa.nome);

let usuario = {
    idade: 15
}
console.log(usuario.idade);

let produto = {
    preco: 50
}

produto.preco = 75;
console.log(produto.preco);

let contato = {
    nome: "José",
    email: "josesm@email.com"
}

delete contato.email;

console.log(contato);

let cliente ={
    nome: "cliente",
    telefone: 9876698
}

cliente.endereco = "Rua A, 123";
console.log(cliente);

let empresa = {
    departamentos : ["adm","copa","salao"]
}

console.log(empresa.departamentos[0]);

let aluno = {
    notas: [85,90,78],
}

aluno.notas[1]=95
console.log(aluno);

let dados = {
    valores: [10, 20, 30],
}

dados.valores.splice(1,1);
console.log(dados);

let livro = {
    titulo: "Livro",
    autor: "Maria"
}
console.log(livro);