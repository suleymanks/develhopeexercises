function repeatHello(callback) {
    setInterval(callback,1000);
}

const sayHello = () =>{
    console.log("hello")
}

repeatHello(sayHello);

//arrow functions includes this so that could be useful for us but its not certain condition.