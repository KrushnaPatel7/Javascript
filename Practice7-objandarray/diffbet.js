//Difference Between Normal Function and Arrow Function
// function myFunction() {
//   }
  
// const myFunction = () => {
    
// }

//----------------------------------------------------------------------------------------------------------------
// Normal Function


function NormalFunction() {
    this.value = 1;
    console.log(this.value);  
  }
  
const obj1 = new NormalFunction();  // Creates a new object 'obj1' and calls the function with 'this' pointing to 'obj1'
console.log(obj1);

  
  // Arrow Function
const ArrowFunction = () => {
    this.value = 2;
    console.log(this.value);  // "this" refers to the surrounding lexical context (global object)
  }
  
//const obj2 = new ArrowFunction(); //Normal functions can be used as constructors with new, but arrow functions cannot.

//------------------------------------------------------------------------------------------------

//console.log(sub(3,1));
const a=function add(a, b) {

    return a + b; //explicit use of return
  }
  console.log(a(1,2));
//console.log(add(1,2));
const sub = (a, b) => a - b; // can omit return
console.log(sub(3,1));
//--------------------------------------------------------------------------------------------------
//Regular functions have access to the arguments object, which contains all the arguments passed to the function, 
// even if they’re not explicitly defined in the parameter list.
function my() {
    console.log(arguments);
  }
my(1,2,3);

