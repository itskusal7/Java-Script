const kushal = {
    firstName : "Kushal",
    lastName : "Sapkota",
    role : "Admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is  ${this.role}
            and he is studying ${this.courseCount} courses  
        `);
        
    }
}

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4,
};

// kushal.getInfo();
// dj.getInfo();

// var djInfo = kushal.getInfo.bind(dj);
// djInfo();

// bind always give you a reference back and you have to manually call the method.

kushal.getInfo.call(dj);

// but call directly calls it.