//day 3
"use strict"; //treat all js code as modern js
//alert (3+3) // we are using strict mode so alert is not allowed here

console.log(3+3); //code read and execute line by line

//modern js variable declaration
//1. var (don't use this now, because of issues in block scope and functional scope)
//2. let (use this when value is changing)
//3. const (use this when value is constant and not changing)

//documentation of alert
//ecma is the standard of javascript
//mdn is the documentation of javascript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/alert

let name = "Priyanka";
let age = 21;
let isloggedIn = false; //boolean value

//number =>2 to power 53
//bigint => larger than 2 to power 53
let bigNumber = 1234567890123456789012345678901234567890n;

//string => "" or '' or ``
let string1 = "this is a string double quotes";
let string2 = 'this is a'

//boolean=>true or false
let isLoggedIn = true;
let isLoggedOut = false;

//null =>standalone value and empty value and we are using null to assign empty value to a variable
let nullVar = null;


//undefined => it means value is not assigned
let undefVar = undefined;
//or
let undefVar2;//by default it is undefined
console.log(undefVar2);



//symbol => unique value
let sym1 = Symbol("this is a symbol");
let sym2 = Symbol("this is a symbol");
console.log(sym1===sym2); //false because both are unique



//object => key value pair


console.log(typeof age);
console.log(typeof bigNumber);
console.log(typeof string1);
console.log(typeof isLoggedIn);
console.log(typeof nullVar); //this is a bug in js it shows object but it should be null
console.log(typeof undefVar); //undefined
console.log(typeof sym1);

/*output
6
undefined
false
number
bigint
string
boolean
object
undefined
symbol */

