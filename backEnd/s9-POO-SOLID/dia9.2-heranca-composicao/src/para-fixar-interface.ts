// implementando interfaces

interface MyInterface{
  myNumber: number,
  myFunc(myParam: number): string,
}

class MyClass implements MyInterface{
  constructor(public myNumber: number){
  }

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;
    return `${sum}`;
  }
}

const myObject = new MyClass(5);
console.log('Result myFunc:', myObject.myFunc(3));