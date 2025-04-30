var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);


// for of loop is a classic way of iterating the loop .
// for of loop is going to give you key first.
for(let[key,value] of myMap){
    console.log(`Key is : ${key} and value is ${value}`);
}
// forEach loop it will be doing with values not the keys or indexes.
// if we want both of them in forEach loop then we can write(v,k).
// forEach loop is going to give you value first.
myMap.forEach((v,k) => console.log(`${v} and key is ${k}`));

myMap.delete(2);  //to delete a value whose key is 2
console.log(myMap);
