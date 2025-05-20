// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

console.log("MENU:");
console.log("1 - Dizer Olá");
console.log("2 - Mostrar data atual");
console.log("3 - Sair");

const opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

switch (opcao) {
    case '1':
        console.log("Olá! Bem-vindo(a)!");
        break;
    case '2':
        console.log("Data atual:", new Date().toLocaleDateString());
        break;
    case '3':
        console.log("Encerrando o programa.");
        break;
    default:
        console.log("Opção inválida!");
}