const fs = require('fs').promises;

async function writeData() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão escrito');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

writeData();