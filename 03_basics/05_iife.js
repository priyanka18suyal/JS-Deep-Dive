/**
 * DAY 10 - IIFE (Immediately Invoked Function Expression)
 *
 * Learning Objectives:
 * - Understand what IIFE is and why it's used
 * - Learn different patterns of writing IIFE
 * - Understand scope isolation and namespace pollution prevention
 * - Practice named and anonymous IIFE patterns
 *
 * What is IIFE?
 * IIFE is a JavaScript pattern that involves a function that is defined and immediately invoked in one step.
 * It's useful for creating a local scope, avoiding global namespace pollution, and encapsulating variables/functions.
 */

// Example 1: Regular Function Definition and Invocation (NOT a true IIFE)
function chai(){ // Function is defined
    // console.group(`DB Connected`); // Grouping console messages
}
chai(); // Function is called separately

// Example 2: Correct Anonymous IIFE Pattern
// The function is wrapped in parentheses and immediately invoked with ()
// (function(){
//     console.log(`DB Connected`);
// })()

/**
 * Example 3: Named IIFE
 * This is also a valid IIFE pattern with a named function inside the expression.
 * The semicolon at the end ensures proper statement termination.
 */

(function chai() {
    console.log(`DB Connected`); // Named IIFE - logs the message
})();

// Example 4: IIFE with Arrow Function
// Arrow functions can also be used in IIFE pattern:
// (() => {
//     console.log(`DB Connected using Arrow Function`);
// })()

// Example 5: IIFE with Parameters
// IIFE can accept parameters just like regular functions
((name)=>{
    console.log(`DB Connected to ${name}`);
})('Priyanka'); // Passing 'Priyanka' as an argument to the IIFE

/**
 * Key Takeaways:
 * 1. IIFE = Function Expression + Immediate Invocation
 * 2. Syntax: (function() { ... })() or (() => { ... })()
 * 3. Used for: Scope isolation, avoiding global namespace pollution, data privacy
 * 4. Can be anonymous or named
 * 5. Can accept parameters like regular functions
 * 6. Semicolon at the end helps prevent issues with automatic semicolon insertion
 */