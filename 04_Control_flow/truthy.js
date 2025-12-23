//Day 12 =truthy and falsy values


// const userEmail = "Priyanka@.com"; //truthy value
// const userEmail = ""; //falsy value

const userEmail = [] //array is empty
if (userEmail) {
    console.log("User Email is verified");

} else {
    console.log("Please verify your email");

}
//falsy values
//false , 0 ,-0,BigInt 0n, "" , null, undefined ,NaN

//truthy values
//All values which are not falsy are truthy
//"0" ->0 inside string is truly
//'false' -> false inside string is truly
// [] -> empty array is truly
// {} -> empty object is truly
// " "
// function(){} : this is also truthy values


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {

    console.log('Object is empty'); // Object is empty


}

// Nullish Coalescing Operator ( ?? ) : null undefined
//ONLY MADE for undefinded and null
let val1;
//vall = 5 ?? 10
//val1 = nulu ?? 10
//val1 = undefined ?? 15 //15

//console. log(val1) ;

val1 = null ?? 10 ?? 20 //still 10
console.log(val1)

//ternary opertor

let num1 = 12;
let num2 = 14;

//condition ? num1:num2
num1 > num2 ? console.log("num1 is greater than num2") : console.log("num2 is greater than num2");



