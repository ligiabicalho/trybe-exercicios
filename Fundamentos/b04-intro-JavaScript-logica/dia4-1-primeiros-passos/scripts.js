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

mes = 'Trybe';
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

console.log(estacaoDoAno); // 'Outono'