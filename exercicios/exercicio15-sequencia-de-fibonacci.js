// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let anterior = 0;
let atual = 1;

console.log("Sequência de Fibonacci (10 primeiros números):");

for (let i = 1; i <= 10; i++) {
    console.log(anterior);
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}