const p1 = {
  name: "Krushna",
  greeting: greet,
};
const p2 = {
  name: "Swati",
};
function greet() {
  console.log(`Hello my name is ${this.name}`);
}

greet();
p1.greeting();
greet.call(p2);
//call(), apply(), and bind() can reassign this to any desired object
