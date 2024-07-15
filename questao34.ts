

const numero1 = parseInt(prompt("Digite o primeiro número inteiro:")!);
const numero2 = parseInt(prompt("Digite o segundo número inteiro:")!);

if (!isNaN(numero1) && !isNaN(numero2)) {
  const soma = numero1 + numero2;
  const diferenca = numero1 - numero2;
  const produto = numero1 * numero2;
  const quociente = Math.floor(numero1 / numero2); // Divisão inteira
  console.log(`Vamos ver... A soma é ${soma}, a diferença é ${diferenca}, o produto é ${produto} e o quociente (divisão inteira) é ${quociente}.`);
} else {
  console.log("Ops! Parece que um dos números que você digitou não é válido.");
}
