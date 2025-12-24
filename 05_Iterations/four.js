// for in loop
// we use for in loop particularly for objects and key/index values because ?
// EXPLANATION: Because objects do not have a built-in iterator.
// for...in iterates over the "enumerable" properties (the keys) of an object.

/* NOTE: ENUMERABLE vs ITERABLE
   - Enumerable: Properties that are "discoverable" when you loop over an object.
     Objects use the for...in loop to look at these property names (keys).
   - Iterable: Data structures that have a built-in "Symbol.iterator" (like Arrays, Strings, Maps).
     They have a defined order and are designed for the for...of loop.
*/

// so it means that array and strings are ?
// EXPLANATION: Arrays and Strings are "Iterables".
// This means they have a built-in "order" or "sequence" that JavaScript understands.



const myObject = {
    js:'javascipt',
    cpp: 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

// you can define anything in the place of key
for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
//OUTPUT
// js shortcut is for javascipt
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

/* NOTE: DYNAMIC KEY ACCESS
   In the loop above, 'key' is just a string representing the property name.
   To get the value, we use myObject[key]. This is called "Square Bracket Notation"
   and it is essential when the property name is stored in a variable.
*/

//for Arrays
const programming = ["js","rb","py","java","cpp"]

 for(const key in programming){
    // console.log(programming[key]);
 }
// js
// rb
// py
// java
// cpp

/* NOTE: WHY FOR...IN GIVES INDEXES IN ARRAYS
   In JavaScript, Arrays are technically objects where the "keys" are 0, 1, 2...
   When you use for...in on an array, it returns these numeric keys (as strings).
   This is why for...of is usually preferred for arrays—it skips the keys and
   gives you the values directly.
*/

//for map

const map = new Map()
//this is the way of declaring a map ,map is object & it only teakes unique values
map.set('In',"India")
map.set('Fr',"France")
map.set('Usa',"Uniated states of America")

for(const key in map){
    //console.log(key);
    // This will NOT execute/print anything.
    // EXPLANATION: Maps are "Iterables", not "Enumerables".
    // for...in only looks for property names. Since Map stores data
    // internally, it doesn't show any properties to for...in.
}

/* NOTE: MAPS vs PLAIN OBJECTS
   A Map is an "Object" but it does not behave like one for loops.
   It is designed specifically for performance and order. Because its entries
   are hidden behind the .set() and .get() methods, for...in cannot "see" them.
*/



// THE CORRECT WAY:
for (const [key, value] of map) {
     console.log(key, ':-', value);
    // EXPLANATION: Maps have a built-in iterator, so we MUST use for...of.
}

/* NOTE: DESTRUCTURING IN LOOPS
   The syntax [key, value] is called Array Destructuring.
   Each entry in a Map is actually an array like ['In', 'India'].
   The loop pulls those two items out and assigns them to 'key' and 'value'
   instantly, making the code much cleaner.
*/