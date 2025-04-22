

var myname = "Kushal"
if (myname === window.myname)  //here window.myname is a globle context where nodejs doesnot support  
     {
    console.log("This is a true statement");
}
