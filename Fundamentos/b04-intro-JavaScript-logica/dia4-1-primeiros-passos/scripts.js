/* Exercício fixação variáveis
const myName = "Lígia";
const birthCity = "Belo Horizonte";
let birthYear = 1989;

console.log(myName);

birthYear = 2030;
console.log(birthYear);

// birthCity = "Rio";
console.log(birthCity); */


/* Exercício 1 fixação tipos primitivos, tipagem dinâmica e operações aritméticas
let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
  const patientEmail = 'ana@email.com';
};

console.log(typeof patientId);
console.log(typeof patientAge); */

/* Exercício 2 fixação tipos primitivos, tipagem dinâmica e operações aritméticas 
const base = 5;
const height = 8;
const area = base * height;
console.log(area);
const perimeter = 2 * (base + height);
console.log(perimeter); */


/* Switch e Case */

/* mes = 'Trybe';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno); // 'Outono' */

/* Switch e Case 2*/

let resultadoProcessoSeletivo = 'aprovada';
let mensagem = '?';

switch (resultadoProcessoSeletivo) {
    case 'aprovada': mensagem = "Parabéns! A pessoa está aprovada no processo seletivo da Trybe";
        break;
    case 'reprovada': mensagem = "Não foi dessa vez que conseguiu aprovação no processo seletivo. Tente novamente.";
        break;
    case 'lista': mensagem = "Na trave! Você está na lista de espera das pessoas aprovadas no processo seletivo. Aguarde novas informações.";
        break;
    default: mensagem = 'Não se aplica.';
}
console.log(mensagem)