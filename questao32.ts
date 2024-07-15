const numero= parseInt(prompt("Digite um número inteiro:")!);

if (!isNaN(numeroInteiro)) {
  const dobroNumero = numeroInteiro * 2;
  console.log(`Legal! O dobro de ${numeroInteiro} é ${dobroNumero}.`);
} else {
  console.log("Ops! Parece que você não digitou um número inteiro válido.");
}
