function stud(fname,department){
    this.fname=fname;
    this.department=department;

}

let student=new stud("Krushna","Comp");
console.log(student.fname);
console.log(student["department"]);