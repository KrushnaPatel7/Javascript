//Array declaration using literals
let a=[10,20,30];
console.log(a);

//-------------------------------------------------------------------------------------------------
//Array declaration using new keyword
let a1 =new Array(1,2,3,4,5);
console.log(a1);
//--------------------------------------------------------------------------------------------------
//Accessing Elements of an Array
const b=["Krushna","Diya","Raj","Siya"];
console.log(b[0]);
delete b[3];
console.log(b[3]);

//--------------------------------------------------------------------------------------------------
//Accessing first element of Array
let fst=b[0];
const x=b;
x[0]="xyz";
console.log("First element:",b);
//--------------------------------------------------------------------------------------------------
//Accessing last element of Array
let lst=b[b.length-1];
console.log("last element:",lst);

//--------------------------------------------------------------------------------------------------
//Modifying elements
console.log(b);
(b[3]="Khushi");
console.log("After modifying",b);
console.log("Length of array:",b.length);

//--------------------------------------------------------------------------------------------------
//Adding elements to the array
b.push("Swati");      //end
b.unshift("Priya");  //Start
console.log(b);

//---------------------------------------------------------------------------------------------------
//Removing elements from the array
b.pop() //last
b.shift() //start
console.log(b);

b.splice(1,2) //will remove element from index 1 and 2
console.log(b);


