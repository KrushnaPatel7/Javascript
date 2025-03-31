import { myModule } from "./modulepattern.js";

myModule.publicFunction();
console.log(myModule().privateVariable);
console.log(myModule.privateVariable); //will give undefined
//myModule.privateFunction(); //error not a function

console.log(myModule.getPrivateVariable());
// Changing private variable using setter
myModule.setPrivateVariable("New private variable");
console.log(myModule.getPrivateVariable());
