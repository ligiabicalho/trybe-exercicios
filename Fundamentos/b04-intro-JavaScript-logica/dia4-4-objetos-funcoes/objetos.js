// Objetos para fixar 01

let student = {
  name: 'Lígia',
  lastName: 'Bicalho',
  age: 33,
  class: 25,
}


console.log('A estudante ' + student.name + ' ' + student.lastName + 'tem ' + student.age + ' anos de idade.');

student.awards = [2014, 2022, 2023];

for (let index in student){
  
}

console.log('A estudante ' + student.name + ' ' + student.lastName + ' foi eleita a melhor do mundo ' + student.awards.length + ' vezes');

// for/in Para fixar

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for ( let index in names) {
// //  console.log('Olá', names[index]);
// }

// for/in Para fixar 02

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let index in car){
//   console.log(index + ': ' + car[index]);
// }