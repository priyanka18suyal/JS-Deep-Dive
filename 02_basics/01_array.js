//array in js
const myArray = [0, 1, 2, 3, 4, 4, 7]; //array literal syntax

//console.log(myArray[3]);
const myArr2 = new Array(1, 2, 3, 4); //array constructor syntax
console.log(myArr2[3]);


//methods in array
//1.push
myArray.push(1);
console.log(myArray);


//2.pop
myArray.pop();
console.log(myArray); //last value removed

//3.unshift
myArray.unshift(9);
console.log(myArray); //adds value at start but not prefered to use for large arrys

//4.shift
myArray.shift();
console.log(myArray); //removes first value

//5.indexOf

console.log(myArray.indexOf(4)); //gives first index of value

//6.includes
console.log(myArr2.includes(3)); //gives true/false if value is present

//7.join

const newArr3 = myArr2.join();
console.log(myArr2)
console.log(typeof myArr2);
console.log(newArr3); //converts array to string
console.log(typeof newArr3);

//8.slice

console.log("A ", myArray);
const mynewArr = myArray.slice(1, 4); //does not change original array
//just gives a portion of array from start index to end index-1
console.log("sliced ", mynewArr);
console.log("after slice ", myArray);

//9.splice
//changes original array
//used to add/remove elements in array
//first argument is starting index
//second argument is number of elements to be removed
//subsequent arguments are the elements to be added
console.log("B ", myArray);
const myewarr3 = myArray.splice(1, 3);
console.log("C ", myArray);
console.log("spliced ", myewarr3);