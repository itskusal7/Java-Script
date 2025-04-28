// lexical scoping is a classical way of writing javascript.

function init() {
    var firstName = "Kushal";
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
}
init();