//Destructuring does not change the original object.
//-------------------------------------------------------------------------------------------
// Destructuring allows us to extract multiple properties or elements in one line of code, 
// reducing the need for multiple assignments.
const arr = [1, 2, 3];
const [a, b, c] = arr; 
console.log(a,b,c);

const person = { Fname: 'Krushna', age: 23, city: 'Pune' };
const { Fname, age, city } = person; 
console.log(Fname,age,city);
//-------------------------------------------------------------------------------------------------
//Destructuring makes it easy to swap the values of two variables without needing a temporary variable.

let a1=1,b1=2;
console.log("Before:",a1,b1);
[a1,b1]=[b1,a1];
console.log("After:",a1,b1);

//----------------------------------------------------------------------------------------------------
//We can destructure deeply nested objects or arrays in a single line, making the code more readable.
const p1 = { Firstname: 'Krushna', address: { City: 'Pune', country: 'India' } };
const { Firstname, address: { City, country } } = p1;
// console.log(p1.address.City);
// console.log(p1.address.country);
console.log(City,country); 

//---------------------------------------------------------------------------------------------------
//Destructuring is used inside the function parameter to directly extract properties
//  from the object passed to the function.

function person1({nameF,nameL,age=23}){
    console.log(`Hello i am ${nameF} ${nameL}.I am ${age} years old.`);
}
const p2={nameF:"Krushna",nameL:"Patel",age:24};
person1(p2);

