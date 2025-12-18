//primitive data types - 7 types

//1.number
let num = 42;
console.log(typeof num); // "number"

//2.string
let str = "Hello, World!";
console.log(typeof str); // "string"

//3.boolean
let bool = true;
console.log(typeof bool); // "boolean"

//4.undefined
let undef;
console.log(typeof undef); // "undefined"

//5.null
let nul = null;
console.log(typeof nul); // "object" (this is a known quirk in JavaScript)

//6.symbol
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"

//7.bigint
let bigIntNum = 9007199254740991n; //for large numbers beyond the safe integer limit
console.log(typeof bigIntNum); // "bigint"

//non-primitive data type or reference data type
//1.object
let obj =
 {
    name: "Alice",
    age: 30
}; // this is done using object literal syntax,object literal
// is a comma-separated list of name-value pairs wrapped in curly braces
//done for grouping related data and functionality in a single entity
console.log(typeof obj); // "object"

//2.array (which is a type of object)
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true
//isArray used to check if the variable is an array

//3.function (which is also a type of object)
let func = function() {  // function declaration
    return "Hello!";
};
console.log(typeof func); // "function"
//functions are used to encapsulate reusable code blocks

//4.date object
let date = new Date();
console.log(typeof date); // "object"
//date objects are used to work with dates and times

//5.regular expression object
let regex = /ab+c/;
console.log(typeof regex); // "object"
//regular expressions are used for pattern matching within strings

//6.map object
let map = new Map();
map.set("key1", "value1");
console.log(typeof map); // "object"
//maps are used to store key-value pairs with keys of any type

//7.set object
let set = new Set();
set.add(1);
set.add(2);
console.log(typeof set); // "object"
//sets are used to store unique values of any type

//8.weakmap object
let weakMap = new WeakMap();
let objKey = {};
weakMap.set(objKey, "value");
console.log(typeof weakMap); // "object"
//weakmaps are similar to maps but allow for garbage collection of keys

//9.weakset object
let weakSet = new WeakSet();
let objValue = {};
weakSet.add(objValue);
console.log(typeof weakSet); // "object"
//weaksets are similar to sets but allow for garbage collection of values
//usage of different data types in real-world scenarios
//-storing user information in an object
//-using arrays to manage lists of items
//-using functions to perform operations on data
//-using dates for timestamps and scheduling
//-using maps for efficient key-value storage
//-using sets to maintain unique collections of items
//-using regular expressions for input validation and text processing
//understanding these data types is crucial for effective programming in JavaScript
//******************// End of Data Types in JavaScript //******************//

//data types return values
//number = number
//string = string
//boolean = true or false
//undefined = undefined
//null = object
//object = object
//array = object
//function = function
//bigint = bigint
//symbol = symbol value

//end of 05-datatypes.js
