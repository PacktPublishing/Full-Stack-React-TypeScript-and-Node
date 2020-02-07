function canDrive(usr) {
    console.log("user is", usr.name);
    if (usr.age >= 16) {
        console.log("allow to drive");
    }
    else {
        console.log("do not allow to drive");
    }
}
// let’s pretend sometime later someone else uses the function canDrive 
// with the user tom that has no age property     
var tom = {
    name: "tom",
    age: 25
};
canDrive(tom);
