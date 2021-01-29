const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("I completed successfully");
        reject("I failed");
    }, 500);
});

myPromise
.then(done => {
    console.log(done);
})
.catch(err => {
    console.log(err);
});