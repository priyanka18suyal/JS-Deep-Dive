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

// This would cause an error if uncommented
// Because 'element' was declared inside the loop block
// console.log(element);



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
