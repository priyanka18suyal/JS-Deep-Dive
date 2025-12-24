var a = 100; //global scope // we can access this variable anywhere in the file
//console.log(a);//200
let b = 300; //

if (true) {
    var a = 200; //so all avoid to use var instead use let or const
    //console.log(a)
    let b = 100;
    console.log("Inner", b); //100

}
//console.log(a)
///console.log("Outside" = b); //300block scope // we can access this variable only inside this block
//200

function one() {
    const username = "PRiyanka"; //function scope // we can access this variable only inside this function

    function Two() {
        const website = "Learn with Priyanka";
        console.log(username); //PRiyanka // we can access parent function variable inside child function
    }
    //console.log(website); //Error: website is not defined // we cannot access child function variable inside parent function
    Two();
}
one();
//console.log(username); //Error: username is not defined // we cannot access function variable outside the function


/// intersting ///////

console.log(add(3)); // it will give error if we use let or const instead of var
//becuase this is function declaration type and it is allowed to call before initialization

function add(num) { //function scope is actually the {}
    return num + 5;
}
//output = > 8

//console.log(addTwo(5)); // it will give error if we use let or const instead of var
//becuase this is function expression type and it is not allowed to call before initialization
//this is expression type function in which we are storing function inside a variable
const addTwo = function (num) {
    return num + 5;
}
addTwo(5); //nothing will happen as it just return the value but we are not doing anything with that value so use console for printing
console.log(addTwo(5)); //output = > 10
