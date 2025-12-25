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

function checkPassword(pass){
    if(pass.length < 6){
        return "Weak Password";
    }
    let hasNumber = false;
    for(let i = 0 ;i < 10 ;i++){
    if(pass[i]>='0' && pass[i]<='10'){
        hasNumber = true;
        break;
    }
    }
    if(!hasNumber){
        return "Rejected! Add a numeric value "
    }

    if(!pass.includes("@") && !pass.includes(".")){
        return "Rejected! Add a Symbolic value"
    }

    let hasUppercase = false;
    for(let i = 'A' ;i<='Z';i++){
    if(pass[i]>='A' && pass[i]>='Z' ){
          let hasUppercase = true;
          break;

    }
    }
    if(!hasUppercase){
        return "Rejected! Add at least a UpperCase";
    }

}
console.log(checkPassword("Priyanka"));
console.log(checkPassword("123"));            // Should fail length
console.log(checkPassword("Priyanka123"));    // Should fail symbol
console.log(checkPassword("priyanka@123"));   // Should pass!
console.log(checkPassword("hellothere"));




