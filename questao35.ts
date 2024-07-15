const baseTriangulo = parseFloat(prompt("Digite a base do triângulo em metros:")!);
const alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo em metros:")!);

if (!isNaN(baseTriangulo) && !isNaN(alturaTriangulo) && baseTriangulo > 0 && alturaTriangulo > 0) {
  const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
  console.log(`Legal! A área desse triângulo é ${areaTriangulo.toFixed(2)} metros quadrados.`);
} else {
  console.log("Hmm, algo deu errado. Verifique se os valores que você inseriu são válidos.");
}
