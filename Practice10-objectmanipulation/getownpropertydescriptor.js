const person = { name: 'Krushna', age: 23 };

const obj1 = Object.getOwnPropertyDescriptor(person, 'name');
console.log(obj1);
//give us writable, configurable

//--------------------------------------------------------------------------------------------------
const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames);

//-------------------------------------------------------------------------------------------------


console.log(Object.hasOwn(person, 'name')); // Output: true
console.log(Object.hasOwn(person, 'lastname'));  // Output: false
//--------------------------------------------------------------------------------------------------
const keysobj = Object.keys(person);

console.log(keysobj);

//--------------------------------------------------------------------------------------------------
const valuesobj = Object.values(person);

console.log(valuesobj);