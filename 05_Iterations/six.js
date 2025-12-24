//filter=>

//const coding = ["Js", "ruby", "java", "python", "cpp", "css"]

// const values = coding.forEach((item)=>{
//    // console.log(item);
//    return item //it means forEach loop cannot return values

// })
// console.log(values); // // EXPLANATION: forEach is designed to 'do something' (side effects), not to 'return something'.
// // It always returns 'undefined', which is why we need filter/map for creating new arrays.

// const myNums = [1, 2, 3, 45, 6, 7, 5]
// const newNums = myNums.filter((num) => num > 5)
// console.log(newNums);  //[ 45, 6, 7 ]
// // EXPLANATION: This is a 'Short-hand' or 'Implicit' return.
// // Since there are no curly braces, the result of (num > 5) is automatically returned to the filter.

// const myNums = [1, 2, 3, 45, 6, 7, 5]
// const newNums = myNums.filter((num) => num)
// console.log(newNums);  //[ 45, 6, 7 ]
// [
//   1, 2, 3, 45,
//   6, 7, 5
// ]


// const myNums = [1, 2, 3, 45, 6, 7, 5]

// const newNums = myNums.filter((num) => {
//     num > 4 //now we have used {} so we have to return because we have open the scope
//     return num
// })

//console.log(newNums);  //[]
// // EXPLANATION: In your code above, 'num > 4' is just a statement. It doesn't tell filter "True" or "False".
// // To fix this, you would need to write 'return num > 4'.

/* NOTE: THE FILTER PROTOCOL
   Filter works based on Booleans (True/False).
   1. If your function returns 'true' for an item -> Item is KEPT.
   2. If your function returns 'false' for an item -> Item is DROPPED.
*/


//if we are using only forearch loop
const myNumsArr = [1, 2, 3, 4, 5, 6] // Changed name slightly to avoid conflict
const newNumsResult = []

myNumsArr.forEach((num) => {
    if (num > 4) {
        newNumsResult.push(num);
    }
})

// console.log(newNumsResult) //in this conditioned is being checked
// // EXPLANATION: This is the manual way of doing what .filter() does automatically.
// // Filter is cleaner because it handles the array creation and 'pushing' internally.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === 'History');
// console.log(userBooks)

/* NOTE: FILTERING OBJECTS
   When filtering an array of objects, 'bk' represents the whole object.
   We use 'bk.genre' to access the specific property we want to test.
*/

// const userBooks1 = books.filter((bk) => bk.publish === 2011);
// console.log(userBooks1)
//or simple overwrite values

// userBooks = books.filter((bk) => bk.publish >= 2000);
// console.log(userBooks)
// [
//   {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   },
//   {
//     title: 'Book Eight',
//     genre: 'Science',
//     publish: 2011,
//     edition: 2016
//   }
// ]

userBooks = books.filter((bk) =>{ return bk.publish >= 2000});
console.log(userBooks)
// // EXPLANATION: Notice the 'return' keyword here.
// // Because you opened the scope with { }, you MUST use 'return' to pass the true/false result back to filter.

/* NOTE: REAL-WORLD LOGIC (DATABASE QUERIES)
   In professional backend development (like using MongoDB or SQL), filtering looks very similar.
   When a user searches for "Science books" on a website, the frontend code runs a .filter()
   exactly like this to update the UI without reloading the page.
*/