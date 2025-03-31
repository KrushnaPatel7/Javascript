//Function statement/Declaration
function a(){
  console.log("Hello");   
}
a();
//Function expression
var b = function(){
    console.log("World");
}
b();

//Anonymous function
// function (){

// }

//Named Function Expression
var b = function xyz(){
    console.log("Hiiiiii");
}
b();

//First Class Functions-The ability of fuctions to be used as value,they can be returned to a function.
var c=function(para1){
    return function d(){
      return para1*2;
    }
}
console.log(c(5)());
