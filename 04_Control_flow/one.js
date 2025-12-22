//Control flow
//1.if

//const isUserloggedIn = true;

if(isUserloggedIn){
    {
        console.log("User is logged in");
    }
}
//2. if...else
const hasSubscription = false;

if(hasSubscription){
    console.log("Access granted to premium content");
} else {
    console.log("Please subscribe to access premium content");
}

//3. if...else if...else
const score = 85;

if(score >= 90){
    console.log("Grade: A");
} else if(score >= 80){
    console.log("Grade: B");
} else if(score >= 70){
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

//4. switch
const day = 3;
let dayName;

switch(day){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Today is: " + dayName);\


// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}