//File has .mjs extension as it treated as ES Modules by Node.js, allowing the use of import and export
export let arr=[1,2,3,4,5,6];
//console.log(arr);
export function greeting(){
    console.log("Hello Everyone");

}
//greeting();
export class Greeting{
    constructor(nameF){
        this.name=nameF;
    }
    greeting1(){
        console.log("Hello " +this.name);
    }
}

// let greet=new Greeting("Krushna");
// greet.greeting1();