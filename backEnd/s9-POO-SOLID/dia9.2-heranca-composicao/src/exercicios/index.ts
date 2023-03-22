import Person from './exercicio1';
import Student from './student';

// exercício 1
const ligia = new Person('Ligia da Consolação', new Date('1989/04/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(ligia);
console.log(luiza);

// // Validation name
// const invalidPersonName = new Person('An', new Date('2000/06/07'));
// console.log('Invalid name', invalidPersonName.name);

// // Validation birthDay
// const invalidPersonBDay = new Person('Ana Vitória', new Date('2023/06/07'));

// // Validation Age
// const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));

// exercício 2

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);

// deve retornar erro
// fernando.assignmentsGrades = [45, 42, 47];

