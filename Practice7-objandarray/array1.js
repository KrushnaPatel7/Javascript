//-----------------------------------------------------
//looping through an array

let b1=[10,20,30,40,50];
for(let i = 0; i < b1.length; i++){
    console.log(b1[i]);
}

b1.forEach(function myfunc(x){
       console.log(x);
});
//----------------------------------------------------------------------
//Concatenation
let a=[10,20,30,40];
let b=["Krushna","Diya","Swati"];
let c=a.concat(b);
console.log(c);

//--------------------------------------------------------------------------
//Conversion of Array to string
let a1=[10,20,30,40];
console.log(a1.toString());
let b2=["Krushna","Diya","Swati"];
console.log(b2.toString());
console.log(typeof a1);
console.log(typeof b2);
console.log("Is b2 an array :", Array.isArray(b2));
