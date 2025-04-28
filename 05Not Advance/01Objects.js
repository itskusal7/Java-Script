var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount= function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstname= function () {
    console.log(`Your firstname is: ${this.firstName}`);
    
}

var kushal = new User("hitesh", 2);
kushal.getCourseCount();
kushal.getFirstname();
// console.log(kushal);

var sam = new User("sam",1);
sam.getCourseCount();
sam.getFirstname();
// console.log(sam);
