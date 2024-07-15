
const raioCircunferencia = parseFloat(prompt("Digite o raio da circunferência em metros:")!);
const pi = 3.14159; // Valor aproximado de π

if (!isNaN(raioCircunferencia) && raioCircunferencia > 0) {
  const perimetroCircunferencia = 2 * pi * raioCircunferencia;
  console.log(`O perímetro dessa circunferência é ${perimetroCircunferencia.toFixed(2)} metros.`);
} else {
  console.log("Oops! Parece que o raio que você digitou não é válido.");
}
