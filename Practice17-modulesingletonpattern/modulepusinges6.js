export class createdModule {
  #privateVar = 10;

  #privateMethod() {
    console.log("This is private variable :", this.#privateVar);
  }
  publicMethod() {
    console.log("I am public");
    this.#privateMethod();
  }
}
