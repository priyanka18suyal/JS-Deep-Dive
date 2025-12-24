// //numbers

// let score = 400;
// console.log(score);  //400

// let balance = new Number(400);
// console.log(balance); // [Number: 400]

// console.log(balance.toString());
// // to convert number to string = '400'
// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));
// // to convert number to 2 decimal places = 400.00
// // toFixed method is used to format a number using fixed-point notation.

// const otherNumber = 23.56789;
// console.log(otherNumber.toPrecision(4));
// // to convert number to specified length = 23.57
// // toPrecision method formats a number to a specified length.

// const hundeads = 100000;
// console.log(hundeads.toLocaleString('en-IN'));
// // to convert number to local string = 100,000 for india locale
// // toLocaleString method converts a number into a string, using local language format.

//maths
console.log(Math);
console.log(Math.abs(-4));
// absolute value = 4
console.log(Math.round(4.5));
// round to nearest integer = 5
console.log(Math.ceil(4.5));
// round up to next integer = 5
console.log(Math.floor(4.5));
// round down to previous integer = 4
console.log(Math.min(4,1,5,2,8,3));
// minimum value = 1
console.log(Math.max(4,1,5,2,8,3));
// maximum value = 8
console.log(Math.sqrt(16));
// square root = 4
console.log(Math.pow(2,3));
// power = 8 (2^3=8)


//random =>important use
console.log(Math.random());
// generates random number between 0 and 1


console.log(Math.random()*10);
// generates random number between 0 and 10


console.log(Math.random()*10+1);
// generates random number between 1 and 10
//and reason is 1 is added to shift the range from (0-9.999) to (1-10.999)


console. log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
//now the above code generates random integer between 1 and 10
// Math.floor is used to round down the decimal value to nearest integer
// addition of +1 is done after flooring to ensure the range starts from 1 instead of 0
//it is better to use parenthesis for better readability as it clearly shows the intended order of operations



console.log(Math.random()*100);
// generates random number between 0 and 100

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1)+min));
// generates random number between 10 and 20
// formula to generate random number between min and max is Math.random() * (max - min + 1) + min
// addition of +1 is done to include the max value in the range
//and min is added to ensure that range starts from min value instead of 0
//math.floor is used to round down the decimal value to nearest integer

