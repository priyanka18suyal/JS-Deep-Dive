// how to declare variables and constant
const accountId = 12345;
let accountEmail = "priyanka@gmail.com"
var accountPassword = "12345"
accountCity=  "Uttrakhand"
//without variable but it should not use but this is also the method
let accountState; //this is undefined


// lets change the value of let and var
//  accountId = 2
// console.log(accountId)
//cannot change const

accountEmail = "hi"
console.log(accountEmail)

accountPassword = "6789"
console.log(accountPassword)

accountCity = "New York"
console.log(accountCity)

//this is one of the method to print all values at a single time
console.table([accountId,accountEmail,accountPassword,accountCity])

/*
prefer not to use var
because of issue in block scope and functonal scope
*/
