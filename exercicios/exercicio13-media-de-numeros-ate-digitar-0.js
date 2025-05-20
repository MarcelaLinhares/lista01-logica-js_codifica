// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer amédiaaritmética desses números.

const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;

while (true) {
    const numero = parseFloat(prompt("Digite um número (ou 0 para sair): "));

    if (numero === 0) {
        break;
    }

    soma += numero;
    contador++;
}

if (contador > 0) {
    const media = soma / contador;
    console.log(`Média dos números digitados: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número válido foi digitado.");
}