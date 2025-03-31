function Chatbot(name) {
  this.name = name;
}

Chatbot.prototype.speak = function () {
  console.log("Hi, I am chatbot " + this.name);
};

const chatbot1 = new Chatbot("Finance dept");
const chatbot2 = new Chatbot("HR dept");

chatbot1.speak();
chatbot2.speak();

//more suited for cases where we need inheritance, prototypes,
//or when the objects start becoming more complex and need to have shared methods.
