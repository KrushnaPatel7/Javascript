//Rest operator catches any extra arguments passed to the function
function my(a,...arr){
     return [a,...arr];
}
console.log(my(1,2,2,4,5));

function m1(b,...xyz){
    return [b,...xyz];
}
console.log(m1("Krushna","Patel","Diya","Swati",1,2,3,4,5));