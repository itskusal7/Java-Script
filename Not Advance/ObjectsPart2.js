var User = {
    name: "",
    getUserName:function (){
        console.log(`User name is : ${this.name}`);
    },
};

var kushal =Object.create(User);
console.log(kushal);
kushal.name = "Kushal Sapkota"
kushal.getUserName();