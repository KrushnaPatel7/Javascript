const person={};
Object.defineProperty(person,"nameF",{value:"Krushna",writable:true});
console.log(person.nameF);
person.nameF="Patel";
console.log(person.nameF);
console.log();
console.log();
//------------------------------------------------------------------------------------------

const per = {};

// Define multiple properties on the car object
Object.defineProperties(per, {nameF1: {value: "Krushna",writable: true},age: {value: 23,
    writable: false,  // Can't modify this property
  }});

console.log(per.nameF1); 
console.log(per.age);  


per.age = 24;
console.log(per.age);  //wont change
