let languages = ["HTML", "CSS", "JavaScript"];

console.log(languages instanceof Array);
console.log(languages instanceof Object);
console.log(languages instanceof String);
console.log(languages instanceof Number);


let myString = new String();
let myDate = new Date();

console.log(myString instanceof Object);
console.log(myString instanceof Date);
console.log(myString instanceof String);
console.log(myDate instanceof Date);
console.log(myDate instanceof Object);
console.log(myDate instanceof String);
