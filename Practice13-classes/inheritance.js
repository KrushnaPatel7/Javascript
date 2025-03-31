class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greeting(){
    console.log(`Hello I am ${this.name} and I am ${this.age} years old.`);
    }
}

class Extrainfo extends Person{
    constructor(name,age,city,country){
        super(name,age);
        this.city=city;
        this.country=country;
    }
    greeting() {
        console.log(`Hello, I am ${this.name}, a ${this.age}-year-old from ${this.city}, ${this.country}.`);
    }
    information(){
        console.log(`I am from ${this.city},${this.country}.`);
    }
}

let p1= new Extrainfo("Krushna Patel",23,"Pune","India");
p1.greeting();
p1.information();