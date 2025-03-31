const person = { name: 'Krushna', age: 23 };
console.log(Object.isExtensible(person)); 

person.namel="Patel";
console.log(person);

Object.preventExtensions(person); //properties can still be deleted or modified
person.city="Pune";
person.name="Swati";
console.log(person);
console.log(Object.isExtensible(person));