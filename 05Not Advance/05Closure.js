// function init() {
//     var firstName = "Kushal";
//     console.log("I am init");
    
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// var value = init();

// value();

function doAddition(x) {
    return function (y) {
        return x+y;
    };
}
    
var add5 = doAddition(4);
console.log(add5(5));

// clouser are the bundel of functions in a function within a enclouse environment.