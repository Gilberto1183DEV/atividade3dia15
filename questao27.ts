
const data = prompt("Digite uma data no formato dd/mm/aaaa:");
const partesData = data!.split('/');
if (partesData.length === 3) {
  const dia = parseInt(partesData[0], 10);
  const mes = parseInt(partesData[1], 10);
  const ano = parseInt(partesData[2], 10);
  console.log(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`);
} else {
  console.log("Formato de data inválido.");
}
