//5
const nomeUsuario = prompt("Digite seu nome:");
console.log(`Bem-vindo, ${nomeUsuario}!`);
//6
const idadeUsuarioTexto = prompt("Digite sua idade:");
const idadeUsuario = parseInt(idadeUsuarioTexto!, 10);
console.log(`Sua idade em número inteiro é: ${idadeUsuario}`);
//7
const numeroInteiroTexto = prompt("Digite um número inteiro:");
const numeroDecimal = parseFloat(numeroInteiroTexto!);
console.log(`Seu número em decimal é: ${numeroDecimal}`);

//8
const primeiroNumeroTexto = prompt("Digite o primeiro número inteiro:");
const segundoNumeroTexto = prompt("Digite o segundo número inteiro:");
const primeiroNumero = parseInt(primeiroNumeroTexto!, );
const segundoNumero = parseInt(segundoNumeroTexto!, );
const soma = primeiroNumero + segundoNumero;
console.log(`A soma dos dois números é: ${soma}`);

//9
const numeroDecimalTexto = prompt("Digite um número decimal:");
const numeroDecimal2 = parseFloat(numeroDecimalTexto!);
const quadrado = numeroDecimal * numeroDecimal2;
console.log(`O quadrado do seu número é: ${quadrado}`);
//10
const anoNascimentoTexto = prompt("Digite o seu ano de nascimento:");
const anoNascimento = parseInt(anoNascimentoTexto!, 10);
const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNascimento;
console.log(`Você tem ${idade} anos.`);







