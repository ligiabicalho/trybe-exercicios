let a = 3;
let b = 7;

//1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

/* let adicao = a + b;
console.log(adicao);

let subtração = a - b;
console.log(subtração)

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo); 


//2. Faça um programa que retorne o maior de dois números.

if(a > b){
    console.log(a);
} else{
    console.log(b);
 } 

//3. Faça um programa que retorne o maior de três números.

const c = 12;
 if(a > b){
    console.log(a);
}else if(b > c){
    console.log(b);
 }else{
    console.log(c);
 } 

//4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. 
const d = 1

if(d > 0){
    console.log('Positivo');
}else if(d < 0){
    console.log('Negativo');
}else{
    console.log('Zero');
} 

//5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 
const ang1 = 60;
const ang2 = 50;
const ang3 = -1;
const triangulo = ang1 + ang2 + ang3;
if(ang1 && ang2 && ang3 > 0){
    if(triangulo === 180){
        console.log('true');
    }else if(triangulo !== 180){
        console.log('false');
    }
}else{
    console.log('Erro: ângulo inválido!');
}
//6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. */

let pecaXadrez = 'Bispoo';
switch (pecaXadrez.toLowerCase()) {
    case 'peão': console.log('Avança uma casa para frente. Pode atacar para diagonal. Não pode recuar.');
        break;
    case 'bispo': console.log('Diagonais.');
        break;
    case 'cavalo': console.log('Se move em "L". O único que pode saltar sobre outra peça.');
        break;
    case 'torre': console.log('Horizontais ou verticais.');
        break;
    case 'dama': console.log('Diagonais, horizontais ou verticais.');
        break;
    case 'rei': console.log('Uma casa, para qualquer direção');
        break;
    default: console.log('Opção inválida');
}
