class Counter{
     count;
    constructor(){
        this.count=0;
    }

    incrementCounter(){
        this.count++;
        console.log(this.count);
    }
    decrementCounter(){
        this.count--;
        console.log(this.count);
    }
}

var counter1=new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

var counter2=new Counter();
counter2.incrementCounter();
counter2.decrementCounter();


// The this keyword in the class methods ensures that count is tied to the specific instance of the class (whether it’s counter1 or counter2).