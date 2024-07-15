const numero1Decimal = parseFloat(prompt("Digite o primeiro número decimal:")!);
const numero2Decimal = parseFloat(prompt("Digite o segundo número decimal:")!);
if (!isNaN(numero1Decimal) && !isNaN(numero2Decimal)) {
  const restoDivisao = numero1Decimal % numero2Decimal;
  console.log(`O resto da divisão entre ${numero1Decimal} e ${numero2Decimal} é: ${restoDivisao}.`);
} else {
  console.log("Valores inválidos para os números decimais.");
}
