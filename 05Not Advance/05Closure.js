function init() {
    var firstName = "Kushal";
    console.log("I am init");
    
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}

var value = init();

value();