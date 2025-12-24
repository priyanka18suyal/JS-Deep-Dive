//for of
//["" ," "] // array
{
  " ", " ";
} //objects // EXPLANATION: Objects aren't iterable with for...of directly.

/* NOTE: THE ITERABLE PROTOCOL
   for...of only works on objects that have a built-in [Symbol.iterator].
   Arrays, Strings, and Maps have this. Plain Objects {} do not, which
   is why for...of will throw a "TypeError: is not iterable" if used on them.
*/

const arr = [1, 2, 3, 4, 5];

//for loop

// for(let index = 0 ; index < arr.length ; index++){
//     const element = arr[index];
//     console.log(element); // 1 2 3 4 5

// }

//for of

for (const num of arr) {
  //console.log(num);
  //this will give me the values of array 'arr'
  // EXPLANATION: 'num' is a variable that holds the current element value.
}

/* NOTE: FOR...OF vs TRADITIONAL FOR
   The traditional for loop is "Index-based" (needs 'i').
   The for...of loop is "Value-based." It is cleaner and prevents
   "Off-by-one" errors where you might accidentally go past the array length.
*/



const greetings = "Hello World!";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
  //this will give me each index value of hello world
  // EXPLANATION: In a string, for...of loops through every single character.
}

/* NOTE: STRING ITERATION
   Strings are treated as a collection of characters. for...of
   handles spaces and special characters just like letters.
*/

//Maps

const map = new Map();
map.set("In", "India");
map.set("USA", "United states of America");
map.set("Fr", "France");
map.set("In", "India"); // EXPLANATION: Map keys are unique; this updates the 'In' key.

//console.log(map)
// output in the form of objects
// Map(3) {
//   'In' => 'India',
//   'USA' => 'United states of America',
//   'Fr' => 'France'
// }

/* NOTE: MAP ORDERING
   Unlike regular Objects, Maps remember the "Insertion Order."
   When you loop through a Map, the items always come out in the
   exact same order you put them in.
*/



for (const [key, value] of map) {
  //console.log(key,':-' , value)
  // EXPLANATION: [key, value] is destructuring the Map entry into two variables.
}

/* NOTE: ARRAY DESTRUCTURING IN LOOPS
   Internally, Map.entries() returns an array for each step, like ['In', 'India'].
   The [key, value] syntax "unpacks" that array immediately so you
   don't have to write 'item[0]' and 'item[1]'.
*/

//output
// In :- India
// USA :- United states of America
// Fr :- France

//Objects  without in array form
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const [key, value1] of map) {
  console.log(key, "- ", value1);
  // EXPLANATION: You are iterating the 'map' here. for...of won't work on 'myObject'.
}

/* NOTE: WHY OBJECTS FAIL HERE
   Objects are "Enumerable" (can be counted) but not "Iterable" (no defined sequence).
   To loop over 'myObject' using for...of, you would first have to convert it
   using Object.keys(myObject) or Object.entries(myObject).
*/

//output
// In -  India
// USA -  United states of America
// Fr -  France