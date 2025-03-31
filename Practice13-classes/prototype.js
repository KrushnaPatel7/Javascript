// Prototype in JavaScript allows objects to inherit properties and methods,
//  enabling shared behavior and reducing memory usage.

function Person(name){
    this.name=name;
}

Person.prototype.greeting=function(){
    console.log(`Hi Everyone , i am ${this.name}.`);
};

let p1=new Person("Krushna");
let p2=new Person("Swati");
p1.greeting();
p2.greeting();
