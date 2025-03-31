const arr = Object.freeze([1, 2, 3]);
arr[0] = 100;  
delete arr[1];
console.log(arr);  