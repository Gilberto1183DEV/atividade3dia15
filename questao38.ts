const numero13 = parseFloat(prompt("Digite o primeiro número decimal:")!);
const numero23 = parseFloat(prompt("Digite o segundo número decimal:")!);
const numero3 = parseFloat(prompt("Digite o terceiro número decimal:")!);

if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
  const media = (numero1 + numero2 + numero3) / 3;
  console.log(`Legal! A média dos números ${numero1}, ${numero2} e ${numero3} é ${media.toFixed(2)}.`);
} else {
  console.log("Hmm, parece que um dos valores que você inseriu não é válido.");
}
