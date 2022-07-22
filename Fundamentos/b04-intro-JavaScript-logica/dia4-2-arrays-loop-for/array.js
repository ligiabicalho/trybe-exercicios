let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [6, 10, 4, 20, 70, 8, 100, 2];

//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
    // for(let index = 0; index < numbers.length; index += 1){
    //     console.log(numbers[index]);
    // }

//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
    // let somaTodos = 0;
    // for (let index = 0; index < numbers.length; index += 1) {
    //     somaTodos = somaTodos + numbers[index];
    // }
    // console.log(somaTodos);

//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
    // let somaTodos = 0;
    // for (let index = 0; index < numbers.length; index += 1) {
    //     somaTodos = somaTodos + numbers[index];
    //     mediaArit = somaTodos / numbers.length;
    // }
    // console.log(mediaArit);

//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
    // let somaTodos = 0;
    // for (let index = 0; index < numbers.length; index += 1) {
    //     somaTodos = somaTodos + numbers[index];
    //     mediaArit = somaTodos / numbers.length
    // }
    // if (mediaArit > 20) {
    //     console.log("valor maior que 20");
    // } else {
    //     console.log("valor menor ou igual a 20"); 
    // }

//5. 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
    // let maior = numbers[0];
    // for (let index = 1; index < numbers.length; index += 1) {
    //     if (numbers[index] > maior) {
    //         maior = numbers[index];
    //     }
    // }
    // console.log(maior);

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
    // let qntosImpares = 0;
    // for (let index = 0; index < numbers.length; index += 1) {
    //     if (numbers[index] % 2 == 1) {
    //         qntosImpares += 1;
    //     }
    // } 
    // if (qntosImpares > 0){
    //     console.log(qntosImpares);
    // } else {
    //     console.log("nenhum valor ímpar encontrado");
    //   }
    
//7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;
    // let menor = numbers[0];
    // for (let index = 1; index < numbers.length; index += 1) {
    //     if (numbers[index] < menor) {
    //         menor = numbers[index];
    //     }
    // }
    // console.log(menor);

//8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
    let array = [1];
    for (let index = 2; index < 26; index += 1) {
        array.push(index);
    }
    console.log(array);

//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let arrayDivisao = [];
    for(let index2 = 0; index2 < array.length; index2 +=1){
    divisao = array[index2] / 2;
    arrayDivisao.push(divisao);
    }
console.log(arrayDivisao);
