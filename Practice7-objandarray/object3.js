//Converting JSON Text to a JavaScript object we use JSON.parse() method.
const jsonString='{"name":"Krushna","age":23}';
const jsonObject=JSON.parse(jsonString);
console.log(jsonObject.name);
console.log(jsonObject.age);