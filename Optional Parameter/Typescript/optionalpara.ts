function greet1(name: string, age?: number): void {
    if (age) {
        console.log(`Hello, ${name}. You are ${age} years old.`);
    } else {
        console.log(`Hello, ${name}.`);
    }
}

greet1("Krushna", 23);  
greet1("Diya");         
