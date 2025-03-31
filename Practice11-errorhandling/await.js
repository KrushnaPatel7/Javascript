//Promises give you the flexibility to control and sequence asynchronous tasks in the way you want.
// async/await makes handling promises more manageable.

let mypromise=new Promise((resolve,reject)=>{
    let success=80;
    if(success===50){
        resolve("Task done sucessfully");
    }
    else{
        reject("Task rejected");
    }

});
async function fetchData() {
    try {
      let result = await mypromise;  
      console.log(result);  
    } catch (error) {
      console.log(error);  
    }
  }
  
  fetchData();


  