// herança sintaxe geral

export class SuperClass{
  constructor(public isSuper = true){
  }

  sayHello(){
    console.log('Olá Mundo!');
  };
}

export class SubClass extends SuperClass{
}

  function myFunc(obj: SuperClass){
    obj.sayHello();
  };

  const obj1 = new SuperClass();
  const obj2 = new SubClass();

  myFunc(obj1);
  myFunc(obj2);