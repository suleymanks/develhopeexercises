function printAsynceName (callback, name) {

    setInterval (callback, 1000);

    setTimeout(()=>console.log(name), 2000);
}

function Hi () {
    console.log("Hello");
}

printAsynceName(Hi, "Suleyman");