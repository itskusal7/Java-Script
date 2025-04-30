// Destructure is whatever the datatype is in right hand side similar the data type should be in lefthand side.

// const user = ["Kushal", 3, "admin"];
// var role = user[2];
// var name = user[0];

// var [name, courseCount, role] = user;

// console.log(role);

const MyUser = {
    name: "kushal",
    courseCount: 3,
    role : "admin",
};

console.log(MyUser.courseCount);//this is how we can excess each of the value.

const{name, courseCount, role} = MyUser;
console.log(role);



