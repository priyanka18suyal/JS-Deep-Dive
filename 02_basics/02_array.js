const marvelHeros = ["Ironman", "Spiderman", "Thor", "Hulk"];


const dcHeros = ["lionel" , "batman" , "flash"];

marvelHeros.push(dcHeros);

console.log(marvelHeros); //dcHeros added as array at last index not as elements in array
console.log(marvelHeros.length); //5
console.log(marvelHeros[4].length); //3 because dcHeros is added as an array at index 4

//concat is also used to merge two arrays but it does not change original arrays
const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);
console.log(allHeros.length); //8

//to add elements of one array into another array we can use spread operator
//therefore we will use spread operator to add elements of dcHeros array into marvelHeros array
const all_new_heros = [...marvelHeros,...dcHeros];
console.log(all_new_heros);
console.log(all_new_heros.length); //8

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array. flat (Infinity)
console. log(real_another_array);
//flattens the array to any depth and gives a single level array


console. log(Array. isArray ("Hitesh") )
console. log(Array. from("Hitesh") )
console. log(Array. from({name: "hitesh"} ) ) // interesting

let score1 = 100
let score2= 200
console. log(Array. of(score1, score2, score3)); // creates array from the given arguments

