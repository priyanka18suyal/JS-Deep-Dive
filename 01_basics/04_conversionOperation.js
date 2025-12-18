//conversion operation
let score = "33abs"

console.log(typeof score); //string
console.log(typeof (score)); //string

let valueNumber = Number(score); //conversion from string to number
console.log(typeof valueNumber); //number
console.log(valueNumber); //NaN => not a number because "abs" is not a number
//NaN is a type of number in js and it occurs when we try to convert a non number string to number

let score2 = NaN;
console.log(typeof score2); //number=0

let score3 = undefined;
console.log(typeof score3); //undefined

let score4 = true
console.log(typeof score4); //boolean

let score5 = "priyanka";
//conversion from string to number
let valueNumber2 = Number(score5);
console.log(typeof valueNumber2); //number
console.log(valueNumber2); //NaN

//"33" = >33
//"33abc" =>NaN not a number
//"abc33" =>NaN not a number
//"abc" =>NaN not a number
//true =>1
//false =>0

let isLoggedIn = 1; //1 means true
//conversion from number to boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); //boolean
console.log(booleanIsLoggedIn); //true

let isloggedIn = "";
//conversion from string to boolean
let booleanIsloggedIn = Boolean(isloggedIn);
console.log(typeof booleanIsloggedIn); //boolean
console.log(booleanIsloggedIn); //false because empty string is considered as false

//"" =>false
//"priyanka" =>true
//0 =>false
//1 =>true
//any other number except 0 =>true
//null =>false
//undefined =>false

let someNumber = 33

let stringNumber = String(someNumber); //conversion from number to string
console.log(typeof stringNumber); //string
console.log(stringNumber); //33