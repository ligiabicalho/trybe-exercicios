export default class Person{
  constructor(protected _name: string, protected _birthDate: Date){
    // se não for validar, não é necessário as linhas seguintes, a declaração pode ser direto no constructor.
    this.name = _name; // passa pela validação do set ao instanciar.
    this.birthDate = _birthDate;
  }

  get name(): string{
    return this._name;
  }

  set name(newName){
    if(newName.length < 3){
      // console.error não quebra a aplicação como 'throw new Error', desse modo não é feita a validação de fato, pois a (última) linha 18 será lida, ou seja, o set será feito. 
      console.error('O nome deve ter mais que 3 caracteres'); 
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    /* O if poderia ser substituído por um método private de validação  */
    this._name = newName;
  }

  get birthDate(): Date{
    return this._birthDate;
  }
  
  getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  set birthDate(newbirthDate: Date){
    if(newbirthDate.getTime() > new Date().getTime()){
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (this.getAge(newbirthDate) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
    this._birthDate = newbirthDate;
  }
}