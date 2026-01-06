function calculateCartPrice(...num1) {
  // rest parameter
  //function calculateCartPrice(val1,val2,...num1){ //[ 499 ]
  return num1;
}
// console.log(calculateCartPrice(2)); //[2]

// console.log(calculateCartPrice(200,400,499));
// //when we have multiple arguments it will return an array of those arguments
//[ 200, 400, 499 ]

const user = {
  username: "priyanka",
  price: 199,
};
//how to pass object properties as arguments to function
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
  //Username is priyanka and price is 199
  //if we run the function handleObject(user);
  //but if we run just handleObject(); it will give =>Username is pri and price is 2099
}
// handleObject(user);

//direct object passing
handleObject({
  username: "pri",
  price: 2099,
});
const mynewArr = [12, 44, 555, 556];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(mynewArr)); //44

//how to pass array as arguments to function
function handleArray(anyarray) {

    //function handleArray() { //if we don't want to pass any argument then also it will not give error
        //in that case we can access arguments object
    //const anyarray = arguments[0]; //arguments is an array like object
     //console.log(arguments); //{ '0': [ 12, 44, 555, 556 ] }
     //[Arguments] { '0': [ 100, 200, 300, 400 ] }


  //console.log(`First value is ${anyarray[0]} and second value is ${anyarray[1]}`);
  //First value is 12 and second value is 44
  //if we run the function handleArray(mynewArr);
  //but if we run just handleArray(); it will give => First value is undefined and second value is undefined

}
// handleArray(mynewArr);

//direct array passing
handleArray([100, 200, 300, 400]); //First value is 100 and second value is 200
