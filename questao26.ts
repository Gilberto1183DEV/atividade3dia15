// Receba uma string contendo um número inteiro e some 10 a esse número,
// convertendo-o novamente para uma string antes de exibi-lo.
const numeroString = prompt("Digite um número inteiro como string:");
const numInteiro = parseInt(numeroString!, 10)!;
if (!isNaN(numeroInteiro)) {
  const resultado = (numeroInteiro + 10).toString();
  console.log(`O número ${numeroString} mais 10 é: ${resultado}`);
} else {
  console.log("Valor inválido para número inteiro.");
}
