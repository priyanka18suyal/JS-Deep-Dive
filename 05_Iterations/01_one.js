// for loop example

// Loop starts with i = 0
// Loop will run as long as i <= 10
// After each iteration, i increases by 1
for (let i = 0; i <= 10; i++) {

    // element stores the current value of i
    // This variable is block-scoped (only inside this loop)
    const element = i;

    // Check if the current value is equal to 5
    if (element == 5) {
        // This line is commented, so it will NOT execute
        // console.log("5 is best number");
    }

    // This would print the value of element
    // But it is commented, so nothing is printed
    // console.log(element);
}

/* NOTE: SCOPE & CONST IN LOOPS
   Even though 'element' is declared with 'const', it doesn't cause an error
   on the next loop. This is because every iteration of the loop creates
   a NEW block scope. The old 'element' variable is destroyed, and a
   fresh one is created for the next number.
*/

// This would cause an error if uncommented
// Because 'element' was declared inside the loop block
// console.log(element); // ReferenceError: element is not defined



// Nested for loop example

// Outer loop runs from 1 to 10
for (let i = 1; i <= 10; i++) {

    // This would print the outer loop value
    // console.log(`Outer loop value: ${i}`);

    // Inner loop also runs from 1 to 10
    for (let j = 1; j <= 10; j++) {

        // This would print inner loop value with outer loop value
        // console.log(`Inner loop value ${j} and inner loop ${i}`);

        // This would print multiplication table
        // Example: 2 * 3 = 6
        // console.log(i + '*' + j + ' = ' + i*j );
    }
}

/* NOTE: TIME COMPLEXITY (Big O)
   A loop inside a loop is called "Nested Iteration."
   In engineering terms, this has a Time Complexity of O(n²).
   If the outer loop runs 10 times and the inner loop runs 10 times,
    the code inside the inner loop executes 100 times total.
*/




// Array declaration
let myArray = ["flash", "batman", "superman"]

// This would print the length of the array (3)
// console.log(myArray.length);

// Loop runs from index 0 to last index of array
for (let index = 0; index < myArray.length; index++) {

    // element stores the value at current index
    const element = myArray[index];

    // This would print each element of the array
    // console.log(element);
}

/* NOTE: INDEX vs VALUE
   In a traditional for-loop, you have access to the 'index' (the position).
   This is useful if you need to modify the array at a specific position,
   unlike 'for...of' which gives you the value but not the index directly.
*/



// break and continue examples

// break example (commented out)
// break stops the loop completely when condition is met

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break   // exits the loop when index is 5
//     }
//    console.log(`Value of i is ${index}`);
// }

/* NOTE: THE BREAK KEYWORD
   Think of 'break' as an "Emergency Exit." Once the engine hits 'break',
   it jumps completely out of the loop and moves to the code AFTER the loop.
*/


// continue example
// continue skips the current iteration and moves to next one

for (let index = 1; index <= 20; index++) {

    // Check if index is 5
    if (index == 5) {
        console.log(`Detected 5`);

        // continue skips printing below line for index = 5
        continue
    }

    // This prints value of index for all values except 5
    console.log(`Value of i is ${index}`);

}

/* NOTE: THE CONTINUE KEYWORD
   Think of 'continue' as a "Skip This Step." It stops the current round
   of the loop and immediately goes back to the top to start the next number.
   In this code, "Value of i is 5" is NEVER printed because the loop
   skipped that part of the code.
*/