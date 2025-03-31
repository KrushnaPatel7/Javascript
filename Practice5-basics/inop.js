let languages = ["HTML", "CSS", "JavaScript"];

// true (index 1 exists in the array)
console.log(1 in languages);

// false (index 3 doesn't exist in the array)
console.log(3 in languages); 


const Data = {
    name: "Krushna",
    age: 23,
    city: "Pune"
};

// true ("name" property exists in the object)
console.log("name" in Data);

// false ("address" property doesn't exist in the object)
console.log("address" in Data);
