const p1 = {
  name: "Krushna",
  city: "Pune",
};

const p2 = {
  name: "Swati",
  city: "Mumbai",
};

function greeting() {
  console.log(`Hello my name is ${this.name}.I am from ${this.city}`);
}

greeting.apply(p1);
const newgreet = greeting.bind(p2);
newgreet();
