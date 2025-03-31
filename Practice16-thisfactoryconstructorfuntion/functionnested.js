const obj1 = {
  name: "Krushna",
  age: 23,
  increment: function () {
    this.age += 1;
  },
  message: function () {
    console.log("Hello World");
  },
};
const _ = require("lodash");
const obj2 = _.cloneDeep(obj1);
obj2.name = "Patel";
obj2.increment();
obj2.message = function () {
  console.log("Hello world modified");
};

console.log("Updated message function in obj2:");
obj2.message();
console.log("Original message in obj:");
obj1.message();

console.log("Original obj:", obj1);
console.log("New obj:", obj2);
