
var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

//console.log(testArray.fill("h", 2, 5));//for inclusive ans exclusive

const Mynumber = [23, 24, 25, 55, 60 ,77, 87, 90];

const result =  Mynumber.filter((num) => num != 55);

console.log(result);


//Slice and Splice

var user = ["Ted", "Tim", "Ton", "Sam", "Sor"];

console.log(user.slice(1,4));
console.log(user.length -1);


user.splice(1,3,"Hi");
console.log(user);
