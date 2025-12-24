//STRING
//1st method to declare string
const name ="Priyanka";
const repocount = 20;

console.log(`Name is : ${name}, Repocount is = ${repocount}`);

//2nd method to declare string using new keyword

const name2 = new String('priyanka');
console.log(name2);

console.log(name2[4]);
console.log(name2.__proto__); // to check prototype of string

console.log(name.length); // to check length of string
console.log(name.charAt(3)); // to check character at index 3 = y;
console.log(name.indexOf('y')); // to check index of character 'y'
//console.log(name.indexOf(y)); // this will give error as y is not defined
console.log(name.includes('ka')); // to check if string includes 'ka'

console.log(name.toUpperCase()); // to convert string to uppercase
console.log(name.toLowerCase()); // to convert string to lowercase




const gameName = new String('hiteshhc')
const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(-8, 4) // it will count from last if we give negative index
console.log(anotherString);

//trim
const greeting = "     Hello World     ";
console.log(greeting.trim()); // it will remove extra spaces from start and end

//split
const phrase = "Hello, how are you?";
const words = phrase.split(" "); // split by space
console.log(words);

const chars = phrase.split(""); // split by each character
console.log(chars);

const csv = "apple,banana,cherry";
const fruits = csv.split(","); // split by comma
console.log(fruits);

//replace
const url = "https://www.%20example.com";
console.log(url.replace("%20", "-"));

//concatenate
const str1 = "Hello";
const str2 = "World";
const concatenated = str1.concat(" ", str2, "!"); // using concat method
console.log(concatenated);

const concatenated2 = str1 + " " + str2 + "!"; // using + operator
console.log(concatenated2);

const concatenated3 = `${str1} ${str2}!`; // using template literals
console.log(concatenated3);

//repeat
const repeatStr = "Ha! ";
console.log(repeatStr.repeat(3)); // repeats the string 3 times

console.log(gameName);
console.log(gameName.split('-')); // if separator not found, returns array with original string

