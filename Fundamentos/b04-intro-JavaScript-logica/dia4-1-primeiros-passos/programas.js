let a = 3;
let b = 7;

//1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

    // let adicao = a + b;
    // console.log(adicao);

    // let subtração = a - b;
    // console.log(subtração)

    // let multiplicacao = a * b;
    // console.log(multiplicacao);

    // let divisao = a / b;
    // console.log(divisao);

    // let modulo = a % b;
    // console.log(modulo);


//2. Faça um programa que retorne o maior de dois números.

    // if (a > b) {
    //     console.log(a);
    // } else {
    //     console.log(b);
    // }


//3. Faça um programa que retorne o maior de três números.

    // const c = 1;
    // if (a > b) {
    //     console.log(a);
    // } else if (b > c) {
    //     console.log(b);
    // } else {
    //     console.log(c);
    // }


//4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. 
// const d = 1

    // if (d > 0) {
    //     console.log('Positivo');
    // } else if (d < 0) {
    //     console.log('Negativo');
    // } else {
    //     console.log('Zero');
    // }

//5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 
    // const ang1 = 60;
    // const ang2 = 50;
    // const ang3 = -1;
    // const triangulo = ang1 + ang2 + ang3;
    // if (ang1 && ang2 && ang3 > 0) {
    //     if (triangulo === 180) {
    //         console.log('true');
    //     } else if (triangulo !== 180) {
    //         console.log('false');
    //     }
    // } else {
    //     console.log('Erro: ângulo inválido!');
    // }

//6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. 

    // let pecaXadrez = 'Bispoo';
    // switch (pecaXadrez.toLowerCase()) {
    //     case 'peão': console.log('Avança uma casa para frente. Pode atacar para diagonal. Não pode recuar.');
    //         break;
    //     case 'bispo': console.log('Diagonais.');
    //         break;
    //     case 'cavalo': console.log('Se move em "L". O único que pode saltar sobre outra peça.');
    //         break;
    //     case 'torre': console.log('Horizontais ou verticais.');
    //         break;
    //     case 'dama': console.log('Diagonais, horizontais ou verticais.');
    //         break;
    //     case 'rei': console.log('Uma casa, para qualquer direção');
    //         break;
    //     default: console.log('Opção inválida');
    // }

//7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

    // let nota = 99;
    // let resultado;
    // if (nota >= 0 && nota <= 100) {
    //     if (nota >= 90) {
    //         resultado = 'Conceito A';
    //     } else if (nota >= 80) {
    //         resultado = 'Conceito B';
    //     } else if (nota >= 70) {
    //         resultado = 'Conceito C';
    //     } else if (nota >= 60) {
    //         resultado = 'Conceito D';
    //     } else if (nota >= 50) {
    //         resultado = 'Conceito E';
    //     } else {
    //         resultado = 'Conceito F';
    //     }
    // } else {
    //     resultado = 'Nota inválida, insira um valor maior que 0 e menor que 100.'
    // }
    // console.log(resultado)

//8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

    // function algumPar(num1, num2, num3) {
    //     if ((num1 % 2 == 0) ||
    //         (num2 % 2 == 0) ||
    //         (num3 % 2 == 0)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // console.log(algumPar(5, 3, 2));


//9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

    // function algumImpar(num1, num2, num3) {
    //     if ((num1 % 2 == 1) ||
    //         (num2 % 2 == 1) ||
    //         (num3 % 2 == 1)) {
    //         return true;
    //     } else {
    //         return false;
    //       }
    // }
    // console.log(algumImpar(6, 4, 1)); 

// 10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto) 

    // function lucroMil (valorCusto, valorVenda){
    //     if(valorCusto < 0 || valorVenda < 0){
    //         return "Erro! Os valores devem ser maior que zero";
    //     } else {
    //         let vendas = 1;
    //         let impostoSobreOCusto = valorCusto * 0.2;
    //         let valorCustoTotal = valorCusto + impostoSobreOCusto;
    //         let lucro = valorVenda - valorCustoTotal;
    //         return vendas * lucro;
            
    //     }
    // }
    // console.log(lucroMil(60, 100)

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

function salarioCLT (salarioBruto){
    let salarioBase = 0;
    let salarioLiquido = 0;
    let valorIR = 0;
    if (salarioBruto <= 1556.94) {
        salarioBase = salarioBruto * 0.92;
    } else if (salarioBruto <= 2594.92) {
        salarioBase = salarioBruto * 0.91;
    } else if (salarioBruto <= 5189.82) {
        salarioBase = salarioBruto * 0.89;
    } else {
        salarioBase = salarioBruto - 570.88;
    }
    if (salarioBase <= 1903.98) {
       salarioLiquido = salarioBase;
    } else if (salarioBase <= 2826.65) {
        valorIR = (salarioBase * 0.075) - 142.80;
        salarioLiquido = salarioBase - valorIR;
    } else if (salarioBase <= 3751.05) {
        valorIR = (salarioBase * 0.15) - 354.80;
        salarioLiquido = salarioBase - valorIR;
    } else if (salarioBase <= 4664.68) {
        valorIR = (salarioBase * 0.225) - 636.13;
        salarioLiquido = salarioBase - valorIR;
    }else {
        valorIR = (salarioBase * 0.275) - 869.36;
        salarioLiquido = salarioBase - valorIR;
    } 
      return salarioLiquido;
//   let descontandoTrybe = salarioLiquido * 0.83;
//   return descontandoTrybe;
}
console.log(salarioCLT(6000.00)); 

