//----------------------------------------------------------------------------
//Syntax Error,Reference error , Type error 
try{
    console.log(x);
}
catch(error){
    console.error("Caught an error (please define x variable before using):",error.message);
}
finally{
    console.log("Excecuted irrespective of error has occured or not");
}

//console.log(x);

console.log("Type Error");
//---------------------------------------------------------------------------------
try{
    let num=71;
    console.log(num.toUpperCase());
}
catch(error){
    console.error("String methods cannot be used on a number : ",error.message);
}
finally{
    console.log("Excecuted irrespective of error has occured or not");
}