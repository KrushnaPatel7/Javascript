const science={                          //mixins 1
    sci(){
        console.log("Can pursue Science");
    }
}
const commerce={                           //mixins 2
    com(){
        console.log("Can pursue Commerce");
    }
}

class Student{
    nameF;
    constructor(){
        this.nameF=nameF;
    }
}

class studCourse extends Student{
    nameFirst;
    constructor(){
        super(nameF);
    }
    greet(){
        console.log(`Hi everyone , I am ${this.name}`);
    }
}

Object.assign(studCourse.prototype,science,commerce);

const s1=new studCourse("Krushna Patel");
s1.greet();
s1.sci();
s1.com();