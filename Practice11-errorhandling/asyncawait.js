import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});
function userID(inp){
let mypromise= new Promise((resolve,reject)=>{
    rl.question(inp, (numInput) => {
    if(isNaN(numInput)){
        reject(new Error("Input is not a number"));
    }
    else{
        resolve(numInput);
    }
   });
});
return mypromise;
}

async function employee(){
    try{
        const emp=await userID("Enter your ID :");
        console.log("Welcome to the site");
    }
    catch(error){
        console.error(error.message);
    }
    finally{
        rl.close();
    }
}
employee();
