// const obj1 = { nameF: 'Krushna',nameL:'Patel', age: 23 ,address:{city:"Pune"}};
// const obj2={...obj1};
// obj2.age=24;
// obj2.address.city="Mumbai";
// console.log(obj2);
// console.log(obj1);
//to avoid this
//----------------------------------------------------------------------------
const obj3 = {
  nameF: "Krushna",
  nameL: "Patel",
  age: 23,
  address: { city: "Pune" },
  add: function () {
    console.log("Hello world");
  },
};
const obj4 = JSON.parse(JSON.stringify(obj3));
const obj8 = Object.assign(obj3);
obj4.age = 24;
obj4.address.city = "Mumbai";
obj4.add = function () {
  console.log("Hello world modified");
};

obj8.add = function () {
  console.log("Hello world modified by krushna");
};

console.log(obj4.add());
console.log(obj8.add());
console.log(obj3.add());
console.log(obj3);
console.log(obj4);

const _ = require("lodash");
const obj5 = {
  nameF: "Krushna",
  nameL: "Patel",
  age: 23,
  address: { city: "Pune" },
};
const obj6 = _.cloneDeep(obj5);
obj6.age = 24;
obj6.address.city = "Mumbai";
console.log(obj5);
console.log(obj6);
