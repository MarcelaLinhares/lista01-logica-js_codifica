//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

const quantidade = parseInt(prompt("Quantas maçãs você deseja comprar? "));

let precoUnitario;

if (quantidade < 12) {
    precoUnitario = 0.30;
} else {
    precoUnitario = 0.25;
}

const total = quantidade * precoUnitario;

console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);