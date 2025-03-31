class Prac1{
    add(...args:number[]):number;
    add(...args:string[]):string;

    add(...args:(number|string)[]):string|number{
        if (typeof args[0] === 'number') {
            let sum = 0;
            for (let i = 0; i < args.length; i++) {
              sum += args[i] as number;  
            }
            return sum;
        }
        else if (typeof args[0] === 'string') {
            let result = '';
            for (let i = 0; i < args.length; i++) {
              result += args[i] as string;  
            }
        return result;
        }
        else{
            throw new Error('Invalid input types');
        }
    }

}
let obj1=new Prac1();
console.log(obj1.add(2,4,5,6));
console.log("Hello","Krushna","Patel");