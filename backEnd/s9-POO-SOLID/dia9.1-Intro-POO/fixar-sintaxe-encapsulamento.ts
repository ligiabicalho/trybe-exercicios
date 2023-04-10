class Person {
  name: string; //public
  private _weight: number; // underline: boa prática atributo private
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

// esta sintaxe permite acessar o valor retornado via person.getWeight()
// por ser private não é possível acessar via person.weight
  getWeight() {
    return this._weight;
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() {
    return this._age;
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
// mesmo que esteja ocorrendo uma validação internamente
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

}

const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);

console.log('p1 name:', p1.name);
// atributo publico, pode ser alterado diretamente:
p1.name = 'Mariah';
console.log('p1 update name:', p1.name);

console.log('p2 idade:', p2.age);
// Acesso a método público que manipula atributo privado
p2.birthday();
console.log('p2 idade após p2.birthday():', p2.age);
p2.age = 300; 
// age: atributo privado que possui validação para ser atualizado.
console.log('p2 idade após p2.age = 300:', p2.age);

p1.height;