
var name = "Kushal";
console.log("Line number 3", name);

function sayName() {
    var name = "Mr. K";
    console.log("Line number 4", name); 

    function sayNametwo() {
        // var name = "Mr. X";
        console.log("Line number 5", name);  
    }
    sayNametwo();
}

sayName();