
const firstPromise = (isLogged) => new Promise((resolve,reject) => {
    if(isLogged) {
        setTimeout(() => {
            resolve(Math.random());
        },1000)
    } else {
        reject(new Error("User is not logged in"));
    }
});

const secondPromise = (number) => {
    return new Promise((resolve, reject)=> {
        if(number > 0.5) {
            setTimeout(()=> {
                resolve({name : "John", age: 24});
            },1000);
        } else {
            reject(new Error("Number is not greater than 0.5"));
        }
    })
};

const isLogged = true;
firstPromise(isLogged)
.then((randomNumber)=> {
    console.log(randomNumber)
    return secondPromise(randomNumber);
})
.then((userData)=> {
    console.log(userData);
})
.catch((error) => console.log(error.message))
.finally(()=> console.log("Execution completed."))