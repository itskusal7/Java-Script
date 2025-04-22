
var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

// if (isLoggedIn) {
//     console.log("LoggedIn Success");
//     if (isEmailVerified) {
//         console.log("Email is verified");
//         if(cardInfo) {
//             console.log("You can make your purchase");

//         }
        
//     }  
// }

//if (isLoggedIn || isEmailVerified || cardInfo) {
if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to make purchase");
} else{
    console.log("Not allow to purchase");
}


//here in and all the value should be true  .......
// and in or only one value should be true to allow