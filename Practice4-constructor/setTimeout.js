function x(){
   for ( var i=1;i<=5;i++){
    function close(x){
    setTimeout(function(){
        console.log(x);
      },x*3000);
    }
    close(i);
   } 
    console.log("Namaste Javascript");
}
x();

