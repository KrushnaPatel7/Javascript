let mypromise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
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
  