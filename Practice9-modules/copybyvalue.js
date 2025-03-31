let a = 10;  
let b = a;   //value of a is assigned to b ,means copy of value is done 
console.log(b); 
b = 20;      

console.log(a);  
console.log(b);  
//since copy of value is done there will be no change in value of a 

//-----------------------------------------------------------------------------------------------------
//To achieve copybyvalue in array to create shallow copy but shallow copy means nested part will still be referenced 
const originalArray = [1, 2, 3];
const copyArray = originalArray.slice();
copyArray[0] = 100;
console.log(originalArray); 
console.log(copyArray);   

const Array1 = [1, 2, 3];
const copiedArray = [...Array1];
copiedArray[1] = 100;
console.log(Array1); 
console.log(copiedArray);   


//--------------------------------------------------------------------------------
//To achive copybyvalue in object , create shallow copy but shallow copy means nested part still follows copybyreference
const p1={Fname:"Krushna",Lname:"Patel",age:23};
const p2=Object.assign({},p1);
p2.age=24;
console.log(p2);
console.log(p1);

const p3={Fname:"Krushna",Lname:"Patel",age:23};
const p4={...p3};
p4.Fname="Swati";
console.log(p3);
console.log(p4);

