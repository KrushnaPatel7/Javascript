const person={
    name:"Krushna",
    age:23,
    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);

    }
};
person.greet();

//this keyword refers to the object itself here