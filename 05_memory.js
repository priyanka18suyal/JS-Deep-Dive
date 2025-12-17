//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console. log (myYoutubename);
console. log (anothername);

let userOne = {
email: "user@google.com",
upi:"user@skl",
}

//update email
let usertwo = userOne
usertwo.email = "priyanka@google.com"

console.log(userOne.email);
console.log(usertwo.email);
//both will reflect the updated email because both are referring to the same object in heap memory

//to avoid this we can create a shallow copy of the object
let userThree = Object.assign({}, userOne)
userThree.email = "hia@google.com"
console.log(userOne.email); // will not reflect the updated email
console.log(userThree.email); // will reflect the updated email

