// ==========================================
// 1. BASICS OF .map()
// ==========================================
const MyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

//const newNums = MyNumbers.map((num)=>num+10)
//automaticlly return value
//console.log(newNums);

// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 30
// ]

//this is aslo a method when we put { } so we have to definately put return for scope otherwise it will give errors
//const newNums1 = MyNumbers.map((num)=>{return num+10} )
//automaticlly return value
//console.log(newNums1);

/* NOTE: IMPLICIT vs EXPLICIT RETURN
   - Implicit Return: When you don't use { }, JS assumes you want to return the result of that line.
   - Explicit Return: When you open a "Scope" using { }, you create a block.
     JS will NOT send anything out of that block unless you manually use the 'return' keyword.
*/

// ==========================================
// 2. CHAINING (Pipeline Processing)
// ==========================================
// const newNums = MyNumbers
//     .map((num) => num * 10)
//     .map((num) => num+1)

// console.log(newNums)
// output
//[
//   11, 21, 31, 41,  51,
//   61, 71, 81, 91, 201
// ]

/* NOTE: HOW CHAINING WORKS INTERNALLY
   In chaining, the second method does NOT work on the original array (MyNumbers).
   It works on the "Resulting Array" produced by the first method.
   It’s like a factory assembly line where each station modifies the product
   before passing it to the next station.
*/


// ==========================================
// 3. APPLYING FILTER IN THE CHAIN
// ==========================================
const newNums = MyNumbers
    .map((num) => num * 10) // Step 1: Multiply original by 10 [10, 20, 30...]
    .map((num) => num+1)    // Step 2: Add 1 to the results of Step 1 [11, 21, 31...]
    .filter((num)=>num>=40) // Step 3: Check condition on results of Step 2

console.log(newNums)
// output
// [
//   41, 51,  61, 71,
//   81, 91, 201
// ]

/* NOTE: PERFORMANCE LOGIC
   While chaining is very readable, remember that every .map() or .filter()
   creates a completely NEW array in memory.
   In professional development, if you are handling millions of data points,
   you might combine these into a single loop to save memory, but for most
   web applications, chaining is preferred because it's much easier to debug.
*/

/* NOTE: WHY FILTER AT THE END?
   Filtering at the end of a chain is common when you need to transform data
   first to see if it meets a certain criteria.
   However, filtering at the START of a chain is often more efficient because
   it reduces the number of items the subsequent .map() functions have to process.
*/