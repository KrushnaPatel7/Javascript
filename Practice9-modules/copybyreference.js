const obj1 = { name: 'Krushna', age: 23 };  
const obj2 = obj1;        //new object obj2 is created that points to obj1 memory location              
obj2.age = 30;            //so new change made to obj2 will also be reflected in obj1              

console.log(obj1.age);  
console.log(obj2.age);  