const hello=()=>{
    return "Hello World!";

}
console.log(hello());

const hello1 = () => "Hello Everyone";
console.log(hello1());

const hello2=(x)=>"Hello "+x;
console.log(hello2("Krushna"));

const hello3 =x1=>"Hello "+x1; //only if one parameter
console.log(hello3("Krushna"));

const a=function normalFunction() {
    console.log(arguments);  // You can access arguments as an array-like object
  }
  
console.log(a(5, 10, 15));  

const arrowFunction = () => {
    console.log(arguments);  // This will cause an Reference error!
  };
  
console.log(arrowFunction(5, 10, 15));  
  