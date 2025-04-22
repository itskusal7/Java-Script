
var getUserRole= function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            
        case "subadmin":
            return `${name} is sub-admin with all access to create and delete course`
            
        case "testprep":
            return `${name} is testprep with all access create and delete test`
            
        case "user":
            return `${name} is user to consume content`
            
    
        default:
            return`${name} is a trial user`;
            
    }
}

// var getRole = getUserRole("Kushal", "user");
// console.log(getRole);

console.log(getUserRole("Ram", "admin"));