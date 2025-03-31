let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let sum = a1.reduce(
    function (total, elem) {
        return total + elem;
    });

console.log(sum);
