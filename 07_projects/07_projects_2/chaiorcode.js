// BMI Calculator Logic
// 1. We select the form because we listen for a 'submit' event, not just a button click.
const form = document.querySelector('form');

// 2. We add an Event Listener for the 'submit' event.
form.addEventListener('submit', function (e) {
    // 3. e.preventDefault() stops the default form action (sending data to server/refreshing page).
    e.preventDefault();

    // 4. Extracting values from inputs inside the event so we get them at the moment of submission.
    // parseInt converts the string value from the input into a number.
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // 5. Validation Checks: Ensuring the inputs are valid numbers and greater than zero.
    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please! Give a valid Height ${height}`;
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please! Give a valid Weight ${weight}`;
    }
    else {
        // 6. The Math: (weight / height squared).
        // We divide by 10,000 to convert height from CM to Meters squared.
        // .toFixed(2) limits the result to 2 decimal places.
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // 7. BMI Category Logic: Checking the calculated BMI against standard ranges.
        if (bmi < 18.6) {
            results.innerHTML = `<span>${bmi}</span> : Under Weight`;
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>${bmi}</span> : Normal Range Weight`;
        }
        else {
            results.innerHTML = `<span>${bmi}</span> : OverWeight`;
        }
    }
});

/* =========================================
      EXPLANATION FOR YOUR NOTES
=========================================

LINE-BY-LINE BREAKDOWN:

1. const form = document.querySelector('form'):
   Targets the form element. We use the form instead of the button so that "Enter" key submissions also work.

2. e.preventDefault():
   Standard method used in events to stop the browser from reloading. Since we are doing calculations in the browser (frontend), we don't want the page to refresh.

3. parseInt(...value):
   Input fields always give data as "Strings" (text). Math requires "Numbers". parseInt turns "180" into the actual number 180.

4. isNaN(height):
   A built-in function that checks "is it Not a Number?". If a user types "abc", this catches it and stops the calculation from breaking.

5. (weight / ((height * height) / 10000)):
   The BMI formula is kg/m². Since the user enters CM, dividing by 10,000 converts cm² to m².

6. .toFixed(2):
   A Number method that rounds the result to two decimal points (e.g., 22.45 instead of 22.45683).

7. results.innerHTML:
   This property allows us to "write" directly into the HTML <div>. Using backticks (``) allows us to inject variables using the ${} syntax.
*/