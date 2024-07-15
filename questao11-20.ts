// 11. 
const primeiroNome = prompt("Digite seu primeiro nome:");
const sobrenome = prompt("Digite seu sobrenome:");
const nomeCompleto = `${primeiroNome} ${sobrenome}`;
console.log(`Seu nome completo é: ${nomeCompleto}`);

// 12
const sequenciaNumeros = prompt("Digite uma sequência de números separados por espaço:");
if (sequenciaNumeros) {
  const numerosArray = sequenciaNumeros.split(' ');
  const quantidadeNumeros = numerosArray.length;
  console.log(`Você digitou ${quantidadeNumeros} números.`);
} else {
  console.log("Nenhuma sequência de números foi digitada.");
}

// 13 
const nomeAnimal = prompt("Digite o nome de um animal:");
console.log(`Você digitou: ${nomeAnimal}`);

// 14
const primeiroNomeInvertido = prompt("Digite seu primeiro nome:");
const sobrenomeInvertido = prompt("Digite seu sobrenome:");
const nomeCompletoInvertido = `${sobrenomeInvertido}, ${primeiroNomeInvertido}`;
console.log(`Seu nome completo invertido é: ${nomeCompletoInvertido}`);

// 15
const stringUsuario = prompt("Digite uma string:");
if (stringUsuario) {
  const tamanhoString = stringUsuario.length;
  console.log(`O tamanho da string digitada é: ${tamanhoString} caracteres.`);
} else {
  console.log("Nenhuma string foi digitada.");
}

// 16
const numeroInteiro = parseInt(prompt ("Digite um número inteiro:")!, 10);
if (!isNaN(numeroInteiro)) {
  const parOuImpar = (numeroInteiro % 2 === 0) ? "par" : "ímpar";
  console.log(`O número ${numeroInteiro} é ${parOuImpar}.`);
} else {
  console.log("O valor digitado não é um número inteiro válido.");
}

// 17
const numeroPositivoOuNegativo = parseInt(prompt("Digite um número inteiro:")!, 10);
if (!isNaN(numeroPositivoOuNegativo)) {
  const positivoOuNegativo = (numeroPositivoOuNegativo >= 0) ? "positivo" : "negativo";
  console.log(`O número ${numeroPositivoOuNegativo} é ${positivoOuNegativo}.`);
} else {
  console.log("O valor digitado não é um número inteiro válido.");
}

// 18
const numero4 = parseFloat(prompt("Digite o primeiro número:")!);
const numero5 = parseFloat(prompt("Digite o segundo número:")!);
if (!isNaN(numero1) && !isNaN(numero2)) {
  const maiorNumero = (numero1 > numero2) ? numero1 : numero2;
  console.log(`O maior número digitado é: ${maiorNumero}.`);
} else {
  console.log("Um ou ambos os valores digitados não são números válidos.");
}

// 19. Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.
const altura = parseFloat(prompt("Digite sua altura em metros:")!);
const peso = parseFloat(prompt("Digite seu peso em quilogramas:")!);
if (!isNaN(altura) && !isNaN(peso) && altura > 0) {
  const imc = peso / (altura * altura);
  console.log(`Seu IMC é: ${imc.toFixed(2)}`);
} else {
  console.log("Valores inválidos para altura ou peso.");
}

// 20. Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
const nomeParaVerificar = prompt("Digite seu nome:");
if (nomeParaVerificar) {
  const nomeLongo = (nomeParaVerificar.length > 5) ? "mais de 5 caracteres" : "5 ou menos caracteres";
  console.log(`Seu nome tem ${nomeLongo}.`);
} else {
  console.log("Nenhum nome foi digitado.");
}







