const emailUsuario = prompt("Digite seu endereço de e-mail:");

if (emailUsuario) {
  console.log(`Muito obrigado por fornecer seu e-mail, ${emailUsuario}! Ficamos felizes em te ver aqui.`);
} else {
  console.log("Oops! Parece que você não inseriu um endereço de e-mail válido.");
}
