// ==========================================
// 1. THE FILTER METHOD (The "Security Guard")
// ==========================================
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // EXPLANATION: .filter() is for selection.
// // It creates a NEW array; if the condition is TRUE, the item is pushed into the new array.
const newNums = myNumbers.filter( (num) => {
    return num > 4
} )

/* NOTE: SCOPE & EXPLICIT RETURN
   When you use { }, you create a 'block scope'. In JavaScript, inside a block
   scope, you MUST use the 'return' keyword to send the value back.
   Without {}, it's an 'implicit return' where it returns automatically.
*/

// ==========================================
// 2. THE MAP METHOD (The "Transformer")
// ==========================================
const myNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // EXPLANATION: .map() is for transformation.
// // It goes through every element and changes it based on your logic.
const addedTen = myNumbers2.map( (num) => num + 10 )
// // Result: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

/* NOTE: MAP VS FOREACH
   A 'forEach' just performs an action (like console.log).
   A 'map' actually returns a new modified array that you can store and use later.
*/



// ==========================================
// 3. THE REDUCE METHOD (The "Bill Collector")
// ==========================================
const myNums = [1, 2, 3, 4]

// // EXPLANATION: .reduce() is for accumulation.
// // It takes multiple values and boils them down to one single result.
const myTotal = myNums.reduce(function (acc, current) {
    // console.log(`${acc} and ${current}`)
    return acc + current
}, 0)
// // EXPLANATION: 'acc' (Accumulator) is the running total.
// // 'current' is the current value in the loop.
// // '0' is the initial value where the accumulator starts.

/* NOTE: ACCUMULATOR LOGIC
   If you don't provide the '0', the loop starts at index 1 and uses
   the first element as the 'acc'. This can break your code if your
   array contains objects. Always provide the starting value for safety.
*/



// ==========================================
// 4. PRACTICAL LOGIC (Processing Object Data)
// ==========================================
const shoppingCard = [
    { itemName: "js course", price: 2999 },
    { itemName: "python course", price: 5999 },
    { itemName: "data science course", price: 12999 },
]

// // EXPLANATION: 'item' represents the whole object.
// // item.price pulls the numeric value needed for the math.
const priceToPay = shoppingCard.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); // Output: 21997

/* NOTE: CHAINING (Combining Powers)
   In real production code, we often chain these.
   Example: myNumbers.map(n => n * 2).filter(n => n > 10).reduce((a, b) => a + b, 0)
   1. Multiply all by 2. 2. Filter out small numbers. 3. Total the rest.
*/