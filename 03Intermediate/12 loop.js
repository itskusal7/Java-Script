
 // for (let i = 0; i <= 10; i++) {
 //     console.log(i);
 // }

var states = [
    "Rajastan",
     "Delhi",
      "Gujrat",
      1976, 
      "Mumbai",
     ];

// for (let i = 0; i<=states.length; i++){
//     if ( typeof states [i] !== "string") break;
//     console.log(states[i]);
//  }


// while(i<states.length){
    
//     console.log(states[i]);
//     i++;
// }
// let i=20;

// do{
//      console.log(i);
//     i++;
// }while(i<10);

// do while loop is used to run atleast one time although there is run 

let i= 0;

while(i<states.length){
    i++;  //here we have used increament i before the declaration ...so it will remove first array and start to show from second array like here rajastan will be removed and start from Delhi.
    console.log(states[i]);
}