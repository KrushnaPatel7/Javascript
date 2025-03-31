const arr = [2, 3, 6];
function isEven(num){
    if(num%2===0){
        return num;
    }
}
const allEven = arr.every(isEven);
console.log(allEven);
