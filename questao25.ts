
const numDecimal = parseFloat(prompt("Digite um número decimal:")!);
if (!isNaN(numeroDecimal)) {
  const numeroInteiro = Math.floor(numeroDecimal);
  console.log(`O número inteiro equivalente a ${numeroDecimal} é: ${numeroInteiro}.`);
} else {
  console.log("Valor inválido para número decimal.");
}
