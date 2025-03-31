let mypromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const x = 10;
        const y = 10;

        if (x === y) {
            resolve();
        } else {
            reject();
        }
    }, 3000);  
});
console.log(mypromise);

mypromise
    .then(result => {
        console.log("Promise is settled successfully");
    })
    .catch(error => {de
        console.log("Promise is settled with error");
    });
