function repeatHello(callback) {
    const timer = setInterval(callback,1000);
    setTimeout(()=>clearInterval(timer),5000);
}

const sayHello = () =>{
    console.log("hello")
}

repeatHello(sayHello);
