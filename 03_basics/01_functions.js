//functions in js

function sayMyname() {
  console.log("hi");
  console.log("H");
  console.log("1");
  console.log("w");
  console.log("f");
  console.log("e");
}

//calling the function
//sayMyname is refernce and sayMyname() is execution
// sayMyname()

// function addTwoNumber(number1, number2) {  //input in the function defination is called as parameters
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
  //    let result = number1 + number2
  //    return result

  return number1 + number2;
  //console.log("priyanka") //it will never print after the return statemnet because return only works once and it will not let anything print after it
}
//addTwoNumber(); //NaN
//addTwoNumber(2,3); //5  //aarguments=>passing the values in the function calling

// addTwoNumber(2,"4"); //24

// addTwoNumber("3",2); //32

// addTwoNumber("3","3"); //33

// addTwoNumber(2,null); //2 because null is considered as 0
const result = addTwoNumber(3, 4); //7

//console.log("Result: ",result); //Result:  undefined //if we do not pass result in the main function so we have to pass result
//and // the function
// console.log("Result: ",result);

//function loginUserMsg(username){
function loginUserMsg(username = "prii") {
  //default parameter value if we do not pass any value it will take prii as default value

  if (username === undefined) {
    //of if(!username)
    console.log("Please enter a username");
    return; //to stop the function exectuion only give undefined
  }
  return `${username} just logged in`;
}
//console.log(loginUserMsg("priyanka") ) //priyanka
//console.log(loginUserMsg("") ) // just logged in
console.log(loginUserMsg()); //undefined just logged in
