import Person from './Person';
import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';

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

// Validação quantidade de trabalhos
// fernando.assignmentsGrades = [45, 42, 47];

// EXERCÍCIO 5 

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), math, 2000);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), history, 2000);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), philosophy, 2000);

console.log(marta);
console.log(joao);
console.log(lucio);

// deve retornar erro
//const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

// deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;


