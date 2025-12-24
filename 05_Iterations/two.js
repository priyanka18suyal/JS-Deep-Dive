// ==========================================
// 1. THE WHILE LOOP (Entry-Controlled)
// ==========================================
let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

/* NOTE: WHILE LOOP LOGIC
   The 'while' loop is an "Entry-Controlled" loop. This means it checks the
   condition FIRST. If the condition is false at the very beginning,
   the code inside the { } will NEVER run.
*/

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

/* NOTE: TERMINATION CONDITION
   In the example above, 'arr < myArray.length' is the termination condition.
   If you forget 'arr = arr + 1', you create an "Infinite Loop" because
   the condition will always be true, eventually crashing your browser/engine.
*/



// ==========================================
// 2. THE DO-WHILE LOOP (Exit-Controlled)
// ==========================================
let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
//Score is 11

/* NOTE: THE "DO-WHILE" EXCEPTION
   The 'do-while' loop is "Exit-Controlled." Unlike the while loop, it
   executes the code block FIRST, and checks the condition AFTERWARDS.

   Logic breakdown of your code:
   1. 'score' is 11.
   2. 'do' block runs immediately: Prints "Score is 11" and increments score to 12.
   3. 'while' checks: Is 12 <= 10? No.
   4. Loop stops.

   ENGINEERING RULE: Use 'do-while' when you need the code to run AT LEAST ONCE,
   regardless of whether the condition is true or false.
*/



// ==========================================
// 3. COMPARISON FOR ENGINEERING
// ==========================================

/* NOTE: WHICH ONE TO USE?
   1. while: Use when you don't know exactly how many times you need to loop,
      but you want to check the condition before starting.
   2. do-while: Use specifically for scenarios like "Menu Systems" where
      you want to show the menu at least once before checking if the user wants to quit.
   3. for-loop: Use when you know exactly how many times the loop should run
      (like the length of an array).
*/