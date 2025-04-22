
var user = {
    firstName : "Kushal",
    lastName : "Sapkota",
    role : "Admin",
    loginCount : 32,
    facebookSignIn: true,
    courseList: [], 
    buycourse: function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firsrtName} is enrolled in total of ${this.courseList.length} course`; 
    },
}

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buycourse("React JS course");
user.buycourse("Angular course");
console.log(user.getCourseCount());

