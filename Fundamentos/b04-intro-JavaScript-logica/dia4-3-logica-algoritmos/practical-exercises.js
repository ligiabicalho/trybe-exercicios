//1. O fatorial é representado pelo sinal !:  4! = 4 x 3 x 2 x 1 = 24.
// Crie um algoritmo que retorne o fatorial de 10.

// OPÇÃO 1 - crescente
// function factorization (factorial) {
//   let result = 1;
//   for (let index = 2; index <= factorial; index += 1) {
//       result = result * index;    
//   }
//   return result;
// } 
// console.log(factorization(10)); 

// // OPÇÃO 2 - decrescente
// function factorization (factorial) {
//   let result = factorial;
//   for (let index = factorial -1; index >= 1; index -= 1) {
//       result = result * index;    
//   }
//   return result;
// } 
// console.log(factorization(10)); 

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'trybe';
// let reverse = '';
// for (let index = 0; index < word.length; index++) {
//     reverse = word[index] + reverse;
// }
// console.log(reverse);



// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.


// function comparacao(item1, item2){
//   return item1.length - item2.length;
// }
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let arraySort = array.sort(comparacao);
// let big = arraySort[arraySort.length -1];
// let small = arraySort[0];
// console.log('Maior palavra:', big);
// console.log('Menor palavra:', small);

//4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let numPrimo = [];
let maiorPrimo;
for (let num = 3; num < 50; num+=1) {
  let ehPrimo = true;
  for(let divisor = 2; divisor < num; divisor+=1){
    if(num % divisor === 0){
      ehPrimo = false;
    }
  } 
  if(ehPrimo){
    numPrimo.push(num);
  } 
maiorPrimo = numPrimo[numPrimo.length - 1]
}
console.log(maiorPrimo);