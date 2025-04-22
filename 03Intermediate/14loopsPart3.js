const name = ["youtube", "facebook", "instagram", "amazon"]

//here for and of is for array
for (const n of name){
    console.log(n);
    
}

const symbols = {
    yt:"youtube",
    ig:"instagram",
    fb:"facebook"
};
// here for in is for object
for (const n in symbols){
    console.log(`Keys is: ${n} and value is: ${symbols[n]}`);
    // here symbols[n] is used for accesing value from an object
     
}