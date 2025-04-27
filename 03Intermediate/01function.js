
function sayhello(name) {
    console.log("Hello, Kushal");
    console.log(`Hello, ${name}. How are you`);
}

// sayhello("Kushal");
// sayhello("Nischal");

function namastey() {
    return "How are you";
}

var greeting = namastey()
console.log(greeting);
console.log(namastey());

// if we are executing two function at a time then the last function will be executed...first function will be ignored.