class Subject {
  observers = [];
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  notify(message) {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].update(message);
    }
  }
}

class Observer {
  nameF;
  constructor(nameF) {
    this.nameF = nameF;
  }
  update(message) {
    console.log(this.nameF + " received message: " + message);
  }
}

const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
const observer3 = new Observer("Observer 3");

subject.add(observer1);
subject.add(observer2);
subject.add(observer3);

subject.notify("New Price Plan for 2025!");

subject.remove(observer2);
subject.notify(
  "Discount avaliable please lookup for steps how to avail it on portal"
);
