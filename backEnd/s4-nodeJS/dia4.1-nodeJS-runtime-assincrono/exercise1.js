// FUNÇÃO SEM PROMISE - TRATANDO ERROS DE FORMA SÍNCRONA

function dividirNumeros(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  const resultado = num1 / num2; 
  return resultado;
}

// dividirNumeros(2, 1); // CLI: node exercise1.js > quebra e  "Error ..."

try {
  const resultado = dividirNumeros(2, 1);
  // se (2, 0): node exercise1.js > não quebra "erro: ..."
  // se (2, 1): node exercise1.js > "resultado: ..."
  console.log(`resultado: ${resultado}`);
} catch (e) {
  console.log(`erro: ${e.message}`);
}


