// Illustration of (==) operator
let x = 5;
let y = '5';

// Checking of operands
console.log(x == 5);
console.log(y == 5);        
console.log(x == y);

console.log();

// Check against special values
console.log(NaN == NaN);
console.log(0 == false);   
console.log(0 == null);



//The Strict equality Operator is used to compare the equality of two operands with type.

// Illustration of (===) operator
let a = 5;
let b = '5';

// Checking of operands
console.log(a === 6);
console.log(b === '5');        
console.log(a === b);

console.log();

// Check against special values
console.log(NaN === NaN);   
console.log(0 === false);   
console.log(0 === null);
