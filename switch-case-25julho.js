function limpar (){console.clear()}
const readline = require("readline-sync");

let diaSemana = readline.questionInt("Digite o número referente ao dia da semana: ");

switch(diaSemana) {
    case 1:
        console.log("O número digitado foi o 1, equivale ao DOMINGO.")
        break
    
    case 2:
        console.log("O número digitado foi o 2, equivale à SEGUNDA-FEIRA.")
        break
    
    case 3:
        console.log("O número digitado foi o 3, equivale à TERÇA-FEIRA.")
        break

    case 4:
        console.log("O número digitado foi o 4, equivale à QUARTA-FEIRA.")
        break

    case 5:
        console.log("O número digitado foi o 5, equivale à QUINTA-FEIRA.")
        break

    case 6:
        console.log("O número digitado foi o 6, equivale à SEXTA-FEIRA.")
        break
    
    case 7:
        console.log("O número digitado foi o 7, equivale ao SÁBADO.")
        break

    default:
        console.log("Opção digitada incorreta.");

}

setTimeout(limpar, 2000);

let mesAno = readline.questionInt("Digite o número referente ao mês: ");

switch(mesAno) {
    case 1:
        console.log("O número digitado foi o 1, equivale ao mês de JANEIRO.")
        break
    
    case 2:
        console.log("O número digitado foi o 2, equivale ao mês de FEVEREIRO.")
        break
    
    case 3:
        console.log("O número digitado foi o 3, equivale ao mês de MARÇO.")
        break

    case 4:
        console.log("O número digitado foi o 4, equivale ao mês de ABRIL.")
        break

    case 5:
        console.log("O número digitado foi o 5, equivale ao mês de MAIO.")
        break

    case 6:
        console.log("O número digitado foi o 6, equivale ao mês de JUNHO.")
        break
    
    case 7:
        console.log("O número digitado foi o 7, equivale ao mês de JULHO.")
        break

    case 8:
        console.log("O número digitado foi o 8, equivale ao mês de AGOSTO.")
        break

    case 9:
        console.log("O número digitado foi o 9, equivale ao mês de SETEMBRO.")
        break

    case 10:
        console.log("O número digitado foi o 10, equivale ao mês de OUTUBRO.")
        break

    case 11:
        console.log("O número digitado foi o 11, equivale ao mês de NOVEMBRO.")
        break

    case 12:
        console.log("O número digitado foi o 12, equivale ao mês de DEZEMBRO.")
        break

    default:
        console.log("Opção digitada incorreta.");

}

setTimeout(limpar, 2000);

let estadoCivil = readline.questionInt(`Qual o seu estado civil?
Selecione a opção deseja:
1. Solteiro
2. Casado
3. Divorciado
4. Outro
`)
    switch(estadoCivil){
        case 1:
            console.log("O seu estado civil é solteiro.");
            break
        case 2:
            console.log("O seu estado civil é casado.");
            break
        case 3:
            console.log("O seu estado civil é divorciado.");
            break
        case 4:
            console.log("O seu estado civil é outro.");
            break
        default:
            console.log("Opção digitada inválida.");
    }

    setTimeout(limpar, 2000);

let animal = readline.questionInt(`
Selecione o tipo de animal:
1. Cachorro
2. Gato
3. Pássaro
4. Outro
`)
    switch(animal){
        case 1:
            console.log("O animal selecionado foi cachorro.");
            break
        case 2:
            console.log("O animal selecionado foi gato.");
            break
        case 3:
            console.log("O animal selecionado foi pássaro.");
            break
        case 4:
            console.log("O animal selecionado foi outro.");
            break
        default:
            console.log("Opção digitada inválida.");
    }

setTimeout(limpar, 2000);

let numero1 = readline.questionInt("Digite o primeiro número: ")
let numero2 = readline.questionInt("Digite o segundo número: ")
let operacaoMatematica = readline.questionInt(`Agora selecione a operação matemática que deseja: 
1. Soma
2. Subtração
3. Multiplicação
4. Divisão
`)
switch(operacaoMatematica){
    case 1:
        console.log(`A soma dos número é: ${numero1 + numero2} `);
        break
    case 2:
        console.log(`A subtração dos número é: ${numero1 - numero2} `);
        break
    case 3:
        console.log(`A multiplicação dos número é: ${numero1 * numero2} `);
        break
    case 4:
        console.log(`A divisão dos número é: ${numero1 / numero2} `);
        break
    default:
        console.log("Opção digitada está inváliva.");
}