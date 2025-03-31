//Hoisting in JS is a concept where u can access the function and variable even before u have initialized it.
getName();
console.log(x);

var x=7;
function getName(){
    console.log("Namaste JavaScript");
}