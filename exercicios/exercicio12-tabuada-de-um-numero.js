// 12. Crie um programa que exibe a tabuada de um número fornecidopelousuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite um número para ver a tabuada: "));

console.log(`Tabuada do ${numero}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}