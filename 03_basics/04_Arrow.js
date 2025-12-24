// We create an object to group related data + behavior
// WHY object?
// → Because user-related data (username, price) and actions (welcomeMessage)
//   logically belong together
const user = {

    // 'username' stores data related to the user
    // WHY property?
    // → To keep user-specific information inside the object
    username: "hitesh",

    // Another property
    price: 999,

    // A METHOD (function inside an object)
    // WHY method?
    // → Because this function operates on the object's own data
    welcomeMessage: function() {

        // WHY use 'this' here?
        // → 'this' refers to the CURRENT object that calls the method
        // → When we call user.welcomeMessage(), 'this' === user
        // → This allows dynamic access to object data
        console.log(`${this.username} , welcome to website`);

        // WHY console.log(this)?
        // → To see what 'this' is pointing to
        // → Helps debug and understand context
        console.log(this);
    }
}

// user.welcomeMessage()
// WHY this works?
// → Because welcomeMessage is called THROUGH the object
// → JS automatically sets 'this' to the object before the dot


// user.username = "sam"
// WHY this works?
// → Objects are mutable
// → We can change properties anytime

// user.welcomeMessage()
// Now 'this.username' becomes "sam"
// WHY?
// → 'this' always refers to the object AT CALL TIME


// console.log(this)
// WHY check this?
// → To understand global execution context
// In browser: this === window
// In Node.js: this === {} (module scope)


// Normal function declaration
// WHY normal function?
// → Traditional way to define reusable logic
// function chai(){
//     let username = "hitesh"

//     // WHY this.username is undefined?
//     // → 'this' does NOT point to local variables
//     // → 'this' depends on HOW the function is called
//     // → Here, chai() is called directly, not via object
//     console.log(this.username);
// }

// chai()


// Function expression
// WHY function expression?
// → Functions can be stored in variables
// → Useful for callbacks and flexibility
// const chai = function () {
//     let username = "hitesh"

//     // Same reason as above
//     // 'this' is NOT the function itself
//     console.log(this.username);
// }


// Arrow function
// WHY arrow function?
// → Shorter syntax
// → Predictable 'this' behavior
const chai = () => {

    let username = "hitesh"

    // WHY 'this' behaves differently here?
    // → Arrow functions DO NOT have their own 'this'
    // → They borrow 'this' from surrounding scope (lexical this)
    // → This prevents accidental context loss
    console.log(this);
}

// chai()


// Arrow function with block body
// WHY return keyword needed?
// → When {} is used, JS assumes function body
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Arrow function with implicit return
// WHY remove return?
// → Cleaner syntax for simple expressions
// const addTwo = (num1, num2) => num1 + num2


// Parentheses version
// WHY parentheses?
// → Improves readability for expressions
// const addTwo = (num1, num2) => ( num1 + num2 )


// Returning an object from arrow function
// WHY parentheses REQUIRED?
// → Without (), JS thinks {} is function body
// → With (), JS understands it's an object literal
const addTwo = (num1, num2) => ({ username: "hitesh" })


// WHY parameters if not used?
// → Example to show syntax
// → Real code would use num1 and num2

console.log(addTwo(3, 4))
// Output: { username: "hitesh" }


// Array declaration
// WHY array?
// → To store ordered list of values
// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
// WHY forEach needs a function?
// → forEach executes a CALLBACK on each element
// → Without a function, JS doesn't know what to do
