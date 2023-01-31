// FUNÇÃO COM PROMISE - TRATANDO ERROS DE FORMA ASSÍNCRONA

function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) 
      reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

/* note que a função dividirNumeros retorna uma Promise, ou seja, ela promete que vai dividir os números. 
Caso não consiga realizar a divisão, ela rejeita essa promessa, utilizando a função reject. Caso ocorra tudo certo, ela resolve a promessa, utilizando a função resolve. */


//AO CHAMAR A FUNÇÃO:
dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

/* 
function withPromise(par1, par2) {
  
  const promise = new Promise((resolve, reject) => {

    caso de falha: reject(new Error("..."))

    caso de sucesso: resolve()
  })

  return promise;
} 

withPromise(par1, par2)
  .then((result) => );
  .catch((err) => )
*/