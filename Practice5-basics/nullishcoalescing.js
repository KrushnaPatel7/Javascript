let x = 12;
let y = null;

let z = 13;

// The value of x will become 
// unchanged because x is not nullish. 
x ??= z;

// The value of y will be 
// changed because y is nullish. 
y ??= z;

console.log(x) // 12 
console.log(y) // 13
