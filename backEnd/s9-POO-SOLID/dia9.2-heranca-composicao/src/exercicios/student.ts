// EXERCÍCIO 2 

import Person from "./exercicio1";

export default class Student extends Person{
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];
  
  constructor(name: string, birthDate: Date){
    // O super é basicamente uma referência à superclasse. 
    // Ao ser invocado como uma função, está invocando o construtor da superclasse.
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  //esse método gera um id de inscrição aleatório baseado na data de cadastro da pessoa estudante
  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = value;
  }
  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');

    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');

    this._assignmentsGrades = value;
  }
}