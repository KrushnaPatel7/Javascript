const obj1={name:"Krushna",age:23,
    increment:function (){
        this.age +=1;
    },
    message:function(){
        console.log("Hello World");
    }
};

const obj2=structuredClone(obj1);
obj2.name="Patel";
obj2.increment();
obj2.message=function(){
    console.log("Hello world modified");
};
console.log("Original obj:",obj1);
console.log("New obj:",obj2);
