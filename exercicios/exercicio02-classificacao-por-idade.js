//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')();

const idade = parseInt(prompt("Digite a sua idade: "));

if (idade < 12) {
    console.log("Você é uma CRIANÇA.");
} else if (idade < 18) {
    console.log("Você é um ADOLESCENTE.");
} else if (idade < 60) {
    console.log("Você é um ADULTO.");
} else {
    console.log("Você é um IDOSO.");
}