//A Promise is like a placeholder for a value that will be available later (maybe after some time, like fetching data from a server).
let mypromise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Task done sucessfully");
    }
    else{
        reject("Task rejected");
    }

});

mypromise.then(result =>{console.log(result)}).catch(error =>{console.log(error)});
