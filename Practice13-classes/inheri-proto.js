//parent constructor funtion prototype
function Person(name){
    this.name=name;
}
//method of parent prototype
Person.prototype.greeting=function(){
    console.log(`Hello I am ${this.name}.`);
}

//child constructor function prototype
function Extrainfo(name,age,city){
    Person.call(this,name);
    this.age=age;
    this.city=city;
}

//method of child prototype
Extrainfo.prototype=new Person();
Extrainfo.prototype.information=function(){
    console.log(`Hello, I am ${this.name}, a ${this.age}-year-old from ${this.city}.`);
}
//overriding
Extrainfo.prototype.greeting=function(){
    console.log(`Hi Everyone!!!!! I am ${this.name}.`);
}
//child2 constructor function prototype(Hirerchical)
function Address(name,state,country){
   Person.call(this,name);
   this.state=state;
   this.country=country;
}
//method of child2 prototype
Address.prototype=new Person();
Address.prototype.stateInfo=function(){
    console.log(`Hello, I am ${this.name}, I stay in ${this.state},${this.country}`);
}


let p1 = new Extrainfo("Krushna Patel", 23, "Pune");
p1.greeting();      
p1.information();  


let p2 = new Address("Krushna Patel", "Maharashtra", "India");
p2.greeting();      
p2.stateInfo();     
