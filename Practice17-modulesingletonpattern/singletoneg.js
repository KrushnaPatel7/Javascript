class Singleton {
  constructor(data) {
    if (!Singleton.obj) {
      Singleton.obj = this;
      this.data = data;
    }
    return Singleton.obj;
  }

  myMethod() {
    console.log("This is practice method");
    console.log("Data in the Singleton instance:", this.data);
  }
}

const obj1 = new Singleton("First instance data");
const obj2 = new Singleton("Second instance data");
const obj3 = new Singleton("Third instance data");

console.log(obj1 === obj2 && obj2 === obj3 && obj1 === obj3);

obj1.myMethod();
obj2.myMethod();
obj3.myMethod();
