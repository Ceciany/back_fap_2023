// Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
// 1: Soma
// 2: Subtração
// 3: Multiplicação
// 4: Divisão
// 0: Sair
// Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.
// Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 
// É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 

const readline = require("readline-sync");

while (true){
    let operacao = Number(readline.question(`Qual operacao deseja realizar? 
    1. Soma
    2. Subtracao
    3. Multiplicacao
    4. Divisao
    0. Sair

    Digite a opcao correspondente: `));

        if (operacao==0){
            break;
        }

        else if (operacao>=1 && operacao<=4){
            let numero1 = Number(readline.question("Insira o primeiro numero: "));
            let numero2 = Number(readline.question("Insira o segundo número: "));
            if (operacao==1){
                console.log("Soma", numero1 + numero2)}
                    
            else if (operacao==2){
                console.log("Subtracao", numero1 - numero2)}
                    
            else if (operacao==3){
                console.log("Multiplicacao", numero1 * numero2)}
                    
            else if (operacao==4){
                console.log("Divisao", numero1 / numero2)}
        }

        else {
             console.log("Essa opcao nao existe")}
            }