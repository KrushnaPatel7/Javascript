const person={
    name:"Krushna",
    city:"Pune",
    country:"India"
};
Object.freeze(person);
person.name="Swati";
delete person.city;
console.log(person);
console.log(Object.isFrozen(person));
//to unfreeze create shallow copy
const per={...person};
per.name="Swati";
console.log(per)