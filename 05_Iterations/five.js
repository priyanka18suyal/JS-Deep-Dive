//for each loop ->In JavaScript, the forEach loop is not actually a
// loop like for...of or for...in—it is a method specifically designed for Arrays.
// It allows you to run a function for every single element in that array.

/* NOTE: HIGHER-ORDER FUNCTIONS
   forEach is a 'Higher-Order Function' because it takes another function (callback)
   as an argument. It abstracts away the manual 'for' loop logic.
*/

const coding = ["Js", "ruby", "java", "python", "cpp", "css"]

// coding.forEach() -> This is a built-in method of the Array object.
// function(val)    -> This is a "callback function".
//                     It doesn't need a name because it's only used here.

coding.forEach(function (val) {
    //console.log(val);
})
// In this case, function(val) {... } is the callback function. You are giving it to forEach,
// and forEach is responsible for "calling it back" for every item in the array.
/* EXPLANATION:
   1. The forEach method starts at the first index of the array ("Js").
   2. It takes that value and passes it into your function as the variable 'val'.
   3. It executes the code inside the curly braces { } (printing "Js").
   4. It then automatically moves to the next index ("ruby") and repeats.
   5. It stops automatically when it reaches the end of the array.
*/

// 1. You define a separate function called printMe.
// It expects one parameter (item).
function printMe(item) {
        //console.log(item);
    }

// 2. You pass the function name 'printMe' into forEach.
// IMPORTANT: You do NOT write printMe() with parentheses here.
coding.forEach(printMe)

/* EXPLANATION:
   - When you write coding.forEach(printMe), you are telling the array:
     "Hey, for every item you find, please go and execute the printMe function."
   - JavaScript automatically takes the current element of the array
     and passes it into your printMe function as the 'item' argument.
*/

/* NOTE: PASSING BY REFERENCE
   When you pass 'printMe' without (), you are passing the 'reference' of the function.
   If you added (), the function would execute immediately and pass its RESULT
   to forEach, which is not what we want.
*/

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

/* NOTE: ARROW FUNCTIONS & PARAMETERS
   Using arrow functions (=>) is the modern industry standard.
   JavaScript's engine is designed to pass 3 arguments to this callback
   automatically, even if you only choose to use one of them.
*/

coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);
})

/* EXPLANATION:
   1. item:  This is the first parameter. It represents the actual value
             of the element (e.g., "Js").
   2. index: This is the second parameter. It represents the position
             of the element (e.g., 0, 1, 2...).
   3. arr:   This is the third parameter. It represents the entire array
             being looped through (["Js", "ruby", ...]).
*/
// Js 0 [ 'Js', 'ruby', 'java', 'python', 'cpp', 'css' ]
// ruby 1 [ 'Js', 'ruby', 'java', 'python', 'cpp', 'css' ]
// java 2 [ 'Js', 'ruby', 'java', 'python', 'cpp', 'css' ]
// python 3 [ 'Js', 'ruby', 'java', 'python', 'cpp', 'css' ]
// cpp 4 [ 'Js', 'ruby', 'java', 'python', 'cpp', 'css' ]
// css 5 [ 'Js', 'ruby', 'java', 'python', 'cpp', 'css' ]



coding.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

// Output:
// 1. Js
// 2. ruby
// 3. java ...


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {

    console.log(item.languageName);
})

/* EXPLANATION:
   1. The 'item' parameter now represents the WHOLE object inside the array.
   2. In the first loop, 'item' is: { languageName: "javascript", languageFileName: "js" }.
   3. We use "dot notation" (item.languageName) to reach inside that object
      and grab just the value we want.
   4. The loop then moves to the second object and repeats.
*/

/* NOTE: ITERATING COMPLEX DATA
   In professional projects (like EcoCycle-AI), your data will look exactly like this.
   forEach is the most efficient way to 'map' these objects into UI elements
   without needing manual index counters (i++).
*/

// Why this is the "Gold Standard" in Development:
// Handling API Data: When you fetch data (like a list of waste items for your EcoCycle-AI project), the server sends an array of objects. You use this exact forEach pattern to display each item on your website.

// Accessing Multiple Properties: Inside the same loop, you can access multiple pieces of information from the same object:

myCoding.forEach((item) => {
    console.log(`${item.languageName} uses the extension .${item.languageFileName}`);
});

/* NOTE: THE LIMITATION OF FOREACH
   Engineering fact: forEach does NOT return a value. If you try to do
   'const result = coding.forEach(...)', result will be 'undefined'.
   If you need a new array, use .map() or .filter().
*/