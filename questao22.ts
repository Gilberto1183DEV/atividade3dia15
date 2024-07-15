const baseRetangulo = parseFloat(prompt("Digite a base do retângulo em metros:")!);
const alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo em metros:")!);
if (!isNaN(baseRetangulo) && !isNaN(alturaRetangulo)) {
  const areaRetangulo = baseRetangulo * alturaRetangulo;
  console.log(`A área do retângulo é: ${areaRetangulo} metros quadrados.`);
} else {
  console.log("Valores inválidos para base ou altura do retângulo.");
}
