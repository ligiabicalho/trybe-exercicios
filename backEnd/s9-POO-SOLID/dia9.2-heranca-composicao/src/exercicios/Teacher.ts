import Employee from "./iEmployee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee{
  private _admissionDate = new Date();
  private _registration = String(); // tipando e atribuindo valor?
  // private _registration: string; => APENAS TIPANDO;

  constructor(name: string, birthDate: Date, private _subject: Subject, private _salary: number){
    super(name, birthDate)
    // this._admissionDate = new Date(); // gera a data que foi instanciado.
    this.registration = this.generateRegistration(); // aqui chama o set com a validação.
  }

  generateRegistration(): string{
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    // str.replace(regexp|substr, newSubStr|function)
    return `abc${randomStr}`;
  }
  
  get registration(): string{
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

    this._registration = value;
  }
  
  get admissionDate(): Date{
    return this._admissionDate;
  }

  set admissionDate(newDate: Date){
    if (newDate.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');
    this._admissionDate = newDate;
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(newSubject: Subject){
    this._subject = newSubject;
  }

  get salary(): number{
    return this._salary;
  }

  set salary(newSalary: number){
    if (newSalary < 0) throw new Error('O salário não pode ser negativo.');
    this._salary = newSalary;
  }

}