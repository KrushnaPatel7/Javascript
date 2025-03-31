class Singleton {
  constructor() {
    if (!Singleton.obj) {
      Singleton.obj = this;
    }
    return Singleton.obj;
  }
  myMethod() {
    console.log("This is practice method");
  }
}

const obj1 = new Singleton();
const obj2 = new Singleton();
const obj3 = new Singleton();
console.log(obj1 === obj2 && obj2 === obj3 && obj1 === obj3);

obj1.myMethod();
obj2.myMethod();
