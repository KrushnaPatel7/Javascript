class Prac{
    add(a:number,b:number):number  //just declare signatures fisrt
        //return a+b;
    
    add(a:string,b:string):string
       // return a+b;

    add(a:any,b:any):any{       //give only one implemetation method
        return a+b;
    }
}
let obj=new Prac();
console.log(obj.add(2,3));
console.log(obj.add("Krushna ","Patel"));
