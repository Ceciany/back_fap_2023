let loop = true;

const aluno1 = {
    matricula: 1,
    nome: "Maria Helena",
    notas: [10, 9, 8],
};

const aluno2 = {
    matricula: 2,
    nome: "Maria Eduarda",
    notas: [8, 9, 10],
};

let gerador_matricula = 2;

const alunos = [aluno1, aluno2];

while (loop) {
    console.clear();
    console.log(`=== CADASTRO DE ALUNOS ===`);
    console.log(`========== MENU ==========`);
    console.log(`0 - Sair do sistema`);
    console.log(`1 - Listar todos os alunos`);
    console.log(`2 - Cadastrar um novo aluno`);
    console.log(`3 - Buscar um aluno`);
    console.log(`4 - Alterar um aluno`);
    console.log(`5 - Remover um aluno`);
    console.log(`==========================`);

    const readline = require("readline-sync");
    let opcao = readline.questionInt("Escolha uma opção: ");
    switch (opcao) {
        case 0:
            console.log("Você saiu do sistema.");
            loop = false;
            break
        case 1:
            console.log("----- LISTANDO ALUNOS -----");
            for (const aluno of alunos) {
                let soma = 0;
                console.log(`Matrícula: ${aluno.matricula}`);
                console.log(`Nome: ${aluno.nome}`);
                for (let i = 0; i < aluno.notas.length; i++) {
                    console.log(`Nota ${i + 1}: ${aluno.notas[i]}`);
                    soma += aluno.notas[i];
                }
                let media = soma / aluno.notas.length;
                console.log(`Média: ${media}`);
            }
            readline.keyInPause();
            break
        case 2:
            let nomeAluno = readline.question(`Digite o nome do aluno: `);
            let notasAluno = [];
            for (let i = 0; i < 3; i++) {
                notasAluno[i] = readline.questionFloat(`Digite a nota${i + 1}: `);
            }
            const aluno = {
                matricula: ++gerador_matricula,
                nome: nomeAluno,
                notas: notasAluno,
            }
            alunos.push(aluno);
            console.log(`Aluno cadastrado com sucesso.`);
            readline.keyInPause();
            break
        case 3:
            let matriculaBusca = readline.questionInt(
                "Matricula do aluno que deseja buscar: "
            );
            for (const aluno of alunos) {
                if (aluno.matricula === matriculaBusca) {
                    console.log("Resultado da busca");
                    console.log("------------------------");
                    console.log(`Matricula: ${aluno.matricula}`);
                    console.log(`Nome: ${aluno.nome}`);
                    for (let i = 0; i < aluno.notas.length; i++) {
                        console.log(`\t- Nota ${i + 1}: ${aluno.notas[i]}`);
                    }
                }
            }
            readline.keyInPause();
            break;
        case 4:
            matriculaBusca = readline.questionInt(
                "Matricula do aluno que deseja alterar: "
            );
            for (const aluno of alunos) {
                if (aluno.matricula === matriculaBusca) {
                    console.log(aluno.nome);
                    aluno.nome = readline.question("Digite o nome do aluno:");
                    for (let i = 0; i < aluno.notas.length; i++) {
                        aluno.notas[i] = readline.questionFloat(`Digite a nota ${i + 1}: `);
                        console.log("Aluno alterado com sucesso!");
                    }
                }
                else {
                    console.log(`Matrícula inválida.`);
                    break;
                }
            }
            readline.keyInPause();
            break;
        case 5:
            matriculaBusca = readline.questionInt(
                "Matricula do aluno que deseja alterar: "
            );
            for (const aluno of alunos) {
                if (aluno.matricula === matriculaBusca) {
                    console.log(aluno.nome);
                    console.log(`Excluido aluno ${aluno.nome} do sistema..."`);
                    alunos.splice(aluno, 1);
                }
            }
            console.log("Aluno excluído com sucesso!");
            readline.keyInPause();
            break;
        default:
            console.log("Opção selecionada é inválida.");
            break;
    }
}