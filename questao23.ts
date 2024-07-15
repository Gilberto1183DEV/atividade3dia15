const cidade = prompt("Digite o nome da sua cidade:");
if (cidade && cidade.charAt(0).toUpperCase() === 'S') {
  console.log(`O nome da sua cidade começa com a letra "S".`);
} else {
  console.log(`O nome da sua cidade não começa com a letra "S".`);
}
