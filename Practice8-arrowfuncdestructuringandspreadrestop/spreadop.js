//Spread Operator used to expand an iterable into individual elements
// This makes it easier for us to work with the individual items rather than
//  dealing with the entire array as a single entity.
function myfunc(a, b, c) {
    return a + b + c;
    }
    
console.log(myfunc(...[1, 2, 3])); 

    
//-------------------------------------------------------------------------------------
//Making shallow copy
let arr=[2,3,4,5];
let arr1=[...arr];
console.log(arr1);

const per={name1:"Krushna",city:"Pune"};
const per1={...per};
console.log(per1);

//------------------------------------------------------------------------------
//updating objs
let person = { name: "Krushna", age: 23 };
let updatedPerson = { ...person, age: 24 };  
console.log(updatedPerson);  

//------------------------------------------------------------------------------
//Merging 
const p1={nameF:"Krushna",nameL:"Patel"};
const p2={age:23};
const p3={...p1,...p2};
console.log(p3);

let a1=[1,2,3];
let a2=[3,4,5,6];
let a3=[...a1, ...a2];
console.log(a3);