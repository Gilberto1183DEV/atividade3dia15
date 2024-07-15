const baseRetangulo1 = parseFloat(prompt("Digite a base do retângulo em metros:")!);
const alturaRetangulo2 = parseFloat(prompt("Digite a altura do retângulo em metros:")!);

if (!isNaN(baseRetangulo) && !isNaN(alturaRetangulo) && baseRetangulo > 0 && alturaRetangulo > 0) {
  const perimetroRetangulo = 2 * (baseRetangulo + alturaRetangulo);
  console.log(`Aí está! O perímetro desse retângulo é ${perimetroRetangulo.toFixed(2)} metros.`);
} else {
  console.log("Ops! Parece que um dos valores que você digitou não é válido.");
}
