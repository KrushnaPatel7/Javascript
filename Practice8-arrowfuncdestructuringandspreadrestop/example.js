function expensecal(x,y,...arr1){
    let totalexpense= x-y;
    for(let expense of arr1){
        totalexpense -=expense;
    }
    return totalexpense;
}
console.log(expensecal(...[1000,200,300,200])); 
