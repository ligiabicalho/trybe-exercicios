// herança sintaxe geral - para fixar 1

export class SuperClass{
  constructor(public isSuper = true){
  }

  protected sayHello(){
    console.log('Olá Mundo!');
  };
}

export class SubClass extends SuperClass{
  public sayHello2(){
    this.sayHello();
  };
}

  function myFunc(obj: SubClass){
    obj.sayHello2();
  };

  // const obj1 = new SuperClass();
  const obj2 = new SubClass();

  // myFunc(obj1);
  myFunc(obj2);

  // herança sintaxe geral - para fixar 2