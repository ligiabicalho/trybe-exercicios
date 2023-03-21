import Person from './exercicio1';

// exercício 1
const ligia = new Person('Ligia da Consolação', new Date('1989/04/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(ligia);
console.log(luiza);

// Validation name
const invalidPersonName = new Person('An', new Date('2000/06/07'));
console.log('Invalid name', invalidPersonName.name);

// Validation birthDay
const invalidPersonBDay = new Person('Ana Vitória', new Date('2023/06/07'));

// Validation Age
const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));
