const stud ={
    isStudying:true,
    rollno:1,
    intro: function (){
      console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
}

const s1=Object.create(stud);

s1.name="Krushna";
s1.intro();
s1.rollno=2;
console.log(stud);
console.log(s1);
// The JavaScript Object.create() Method creates a new object.

//Object.create() is used to create a new object that inherits properties from an existing object , 
// and we can tweak or add new properties to the new object.