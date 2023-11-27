const figlet = require("figlet");

function alarm(message) {
    console.log(`The alarm message: ${message}`)
}

figlet("Hello World!", function (err, data){
    if(err) {
        console.log("someth went wrong")
        console.log(err)
        return;
    }
    alarm(data)
})


