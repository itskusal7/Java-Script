
var user = {
    firstName : "Kushal",
    lastName : "Sapkota",
    role : "Admin",
    loginCount : 32,
    facebookSignIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);
