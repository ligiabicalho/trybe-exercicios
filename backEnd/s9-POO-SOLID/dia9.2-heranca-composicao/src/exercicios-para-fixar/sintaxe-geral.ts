// herança: sintaxe geral

export class SuperClass{
  constructor(public isSuper = true){
  }

  public sayHello(){
    console.log('Olá Mundo!');
  };
}

export class SubClass extends SuperClass{
  constructor(public isSuper = true){
    super(isSuper = false);
  }
  // public sayHello2(){
  //   this.sayHello(); // pofr ser chamado se estiver public ou protected.
  // };
}

  function myFunc(obj: SuperClass){
    if(obj.isSuper){
      console.log("Super:");
    } else console.log("Sub:");
    obj.sayHello();
  };

  const obj1 = new SuperClass();
  const obj2 = new SubClass();

  myFunc(obj1);
  myFunc(obj2);


