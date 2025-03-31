//To manage asynchronous actions in JavaScript, promises are used.
// fulfilled,rejected,pending,settled 
let mypromise=new Promise((resolve,reject)=>{
    const x=10;
    const y="10";
    if(x===y){
        resolve();
    }
    else{
        reject();
    }

});

mypromise.then(
    function (){console.log("Number same checked ,Task completed")})
    .catch(function (){console.log("Some error")});