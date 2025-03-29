
function tipper(a) {
    var bill = a;
    console.log(bill + 5);
}

tipper(5);


var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill + 15);
}
bigTipper(15);

// If your are declaring the variable than the code should be at the first and declarition should be at last 
// But in function it doesnot matter ....as it scan the entire code and give the proper result.

