var a=100;
let b=200;
const c=300;
function x(){
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);

}
x();
console.log(a);
console.log(b);
console.log(c);
// let and const are block scoped
let g=null;
