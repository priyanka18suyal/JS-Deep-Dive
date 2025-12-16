//******************// Operations in JavaScript //
let value = 3
let negValue = - value
console.log(negValue);


//arthmetic
console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);
console.log(3 % 2); // modulus = 1
console.log(3 ** 2); // exponentiation = 9
console.log(3 + 2 * 5); // operator precedence = 13

let str1 = "hello"
let str2 = " priyanka"
let str3 = str1 + str2;
console.log(str3);

//the problem is when we add number and string
let str4 = "5"
let num1 = 3
let str5 = str4 + num1; // it will convert number to string and concatenate
console.log(str5); // "53"

//to avoid this we can use parseInt or parseFloat
let str6 = "5.7"
let num2 = 3
let sum1 = parseFloat(str6) + num2;
console.log(sum1); // 8.7


console.log("1"+2); // it will convert number to string and concatenate = "12"
console.log(1+"2"); // it will convert number to string and concatenate = "12"
console.log("1"+2+2); //because of left to right evaluation = "122"
console.log(1+2+"2"); // be careful with this because the reason is first 1+2 =3 then "3"+"2" = "32"

console.log(+true); // it will convert boolean to number = 1
console.log(+false); // it will convert boolean to number = 0

//assignment
console.log(+""); // it will convert empty string to number = 0
console.log(+" "); // it will convert space string to number = 0

//increment and decrement
//postfix decrement
let counter = 2;
counter++;
console.log(counter); // 3
counter--;
console.log(counter); // 2 because of post decrement

//prefix increment
let counter2 = 2;
let newCounter = ++counter2; // first increment then assign
console.log(newCounter); // 3 because of pre increment
console.log(counter2); // 3 because of pre increment

//postfix increment
let counter3 = 2;
let newCounter2 = counter3++; // first assign then increment
console.log(newCounter2); // 2 because of post increment
console.log(counter3); // 3 because of post increment

//compound assignment
let a = 5;
a += 3; // a = a + 3
console.log(a); // 8
a -= 2; // a = a - 2
console.log(a); // 6
a *= 4; // a = a * 4
console.log(a); // 24
a /= 6; // a = a / 6
console.log(a); // 4
a %= 3; // a = a % 3
console.log(a); // 1
a **= 4; // a = a ** 4
console.log(a); // 1

//comparison operators
console.log(3 > 2); // true
console.log(3 < 2); // false
console.log(3 >= 2); // true
console.log(3 <= 2); // false
console.log(3 == 2); // false
console.log(3 != 2); // true

//strict equality and inequality
console.log(3 === "3"); // false
console.log(3 !== "3"); // true

//logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
console.log(!false); // true

//type conversion
console.log(Number("123")); // 123
console.log(String(123)); // "123"
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
//******************// End of Operations in JavaScript //******************//