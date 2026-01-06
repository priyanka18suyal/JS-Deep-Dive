// PROJECT 1 — Password Strength Checker (VERY SMALL)
// Why this first: strings, conditions, functions, confidence boost.
// Features
// Input: password (string)
// Output:
// Weak / Medium / Strong
// Rules:
// length < 6 → Weak
// contains number → +1
// contains uppercase → +1
// contains special char → +1
// Concepts Used
// strings
// if–else
// functions
// loops
// Step 1: Define the logic

function checkPassword(pass) {
    let error = [];
    if (pass.length < 6) {
        error.push("Weak Password");
    }
    let hasNumber = false;


    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= '0' && pass[i] <= '10') {
            hasNumber = true;
            break;
        }

    }
    if (!hasNumber) {
        error.push("Rejected! Add a numeric value ");
        // console.log("Medium Password");
    }

    if (!pass.includes("@") && !pass.includes(".")) {
        error.push("Rejected! Add a  special char ");
        //  console.log("Medium Password");
    }

    let hasUppercase = false;
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] != pass[i].toLowerCase()) {
            hasUppercase = true;
            break;

        }
    }
    if (!hasUppercase) {
        error.push("Rejected! Add at least a UpperCase");
        //  console.log("Medium Password");
    }


    if (error.length === 0) {
        error.push("Strong password");
        // console.log("Strong Password");
    }
    return error;


}
 console.log("1.",checkPassword("Priyanka"));

 console.log("2.",checkPassword("123"));
console.log("3.",checkPassword("Priyanka@123"));
 console.log("4.",checkPassword("priyanka@123"));
  console.log("5.",checkPassword("hellothere"));