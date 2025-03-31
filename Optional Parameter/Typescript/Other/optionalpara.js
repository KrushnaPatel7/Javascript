function greet(name, age) {
    if (age) {
        console.log("Hello, ".concat(name, ". You are ").concat(age, " years old."));
    }
    else {
        console.log("Hello, ".concat(name, "."));
    }
}
greet("Krushna", 23);
greet("Diya");
