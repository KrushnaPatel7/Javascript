let person={
    name:"Krushna",
    city:"Pune",
    country:"India"
};

console.log(person);
//---------------------------------------------------------------
//Accessing properties of object using dot and square bracs
console.log(person.city);
console.log(person["country"]);
//---------------------------------------------------------------
// Modifying propeties and adding new prop to an object
person.city="Pune City";
console.log(person);
person.lastname="Patel";
console.log(person);
//---------------------------------------------------------------
//Deleting porp from an object
delete person.lastname;
console.log(person);
//----------------------------------------------------------------
//Finding the length i.e the number of properties in an object
console.log("The number of properties in the object:",Object.keys(person).length);
//----------------------------------------------------------------------------------
//Checking if object has that property
console.log("lastname" in person);
console.log(person.hasOwnProperty("name"));


//----------------------------------------------------------------------------------------------
let person2= new Object();
person2.name="Diya";
person2.city="Mumbai";
person2.country="India1";
console.log(person2);

for(let key in person2){
    console.log(key+" : "+person2[key]); 
}

//--------------------------------------------------------------------------------
// Merging Objects
let person3={class:9,school:"abc"};
let person4={board:"ICSE"};
let person5={...person3,...person4};
console.log(person5);

//--------------------------------------------------------------------------------
//Using typeof to check type of object
console.log(typeof person5=== "object" && person5!==null);