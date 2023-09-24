const number = 5;

const OurPromise = new Promise ((resolve,reject)=> {
    if(number>10){
        return resolve("Your number is greater");
    }
    else reject("Your number must be greater 10");
})

OurPromise.then((resolve)=> console.log(resolve)).catch((reject)=> console.log(reject));