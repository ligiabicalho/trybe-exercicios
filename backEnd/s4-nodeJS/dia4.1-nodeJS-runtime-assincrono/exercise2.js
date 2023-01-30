function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) 
      reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

/* 
function withPromise() {
  
  const promise = new Promise((resolve, reject) => {

    caso de falha: reject(new Error("..."))

    caso de sucesso: resolve()
  })

  return promise;
} 

withPromise()
  .then((result) => );
  .catch((err) => )
*/