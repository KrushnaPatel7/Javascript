setTimeout(()=>{
    for(let i=0;i<=3;i++){
    console.log(i);

    }
},3000);
console.log("Hello");
const startTime = Date.now();
 
for (let i = 0; Date.now() - startTime < 3000; i++) {
    console.log(i);
}
 
console.log("3 seconds have passed.");