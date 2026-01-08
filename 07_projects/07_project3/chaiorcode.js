const clock = document.getElementById('clock');

// const clock = document.querySelector('#clock');
// let date = new Date();
// console.log(date.toDateString());

setInterval(function () {
    let date = new Date();
    // console.log(date.toDateString()); // we have to update the node
    //we cannot console it so we will use the innerHTML for printing with date method
    // date.innerHTML = date.toDateString();
    //wi; give erro coz
    clock.innerHTML = date.toDateString();
    clock.innerHTML = date.toLocaleString();
   // clock.innerHTML = date.toTimeString();
}, 1000)

/* NOTES ON SETINTERVAL FUNCTIONALITY:
  ----------------------------------
  1. DEFINITION: setInterval() is a built-in JavaScript method that calls a
     function or runs a code snippet repeatedly, with a fixed time delay
     between each call.

  2. THE TWO ARGUMENTS:
     - The first argument is the "Callback Function": This is the code you
       want to run (the code that gets the date and updates the HTML).
     - The second argument is the "Delay": This is the time in milliseconds.
       Since 1000ms = 1 second, your clock updates exactly every second.

  3. EXECUTION FLOW:
     - The function does NOT run immediately when the page loads; it waits for
       the first 1000ms to pass before starting.
     - Once started, it continues forever (as long as the page is open) unless
       stopped using 'clearInterval()'.

  4. WHY WE USE IT HERE: Without setInterval, your clock would show the time
     only once when the page is refreshed. By putting 'new Date()' inside the
     interval, you are capturing a fresh "snapshot" of the time every single second.
*/
/* NOTES & KEY CONCEPTS:
  ---------------------
  1. DOM SELECTION: 'document.getElementById' grabs the specific HTML element
     where the time will be displayed. This allows JavaScript to "talk" to your HTML.

  2. THE DATE OBJECT: 'new Date()' creates a new instance of the date object
     containing the current year, month, day, hour, minute, and second at the
     exact moment it is called.

  3. SETINTERVAL: This is a timing function that runs the code inside it
     repeatedly. The '1000' represents 1000 milliseconds (1 second). This is
     what makes the clock "tick."

  4. DOM VS OBJECT: You cannot use 'date.innerHTML' because 'date' is just data
     in memory. You must use 'clock.innerHTML' because 'clock' is the actual
     box (DOM node) on your screen.

  5. FORMATTING METHODS:
     - .toDateString(): Returns only the date (Day Month Date Year).
     - .toLocaleTimeString(): Returns only the time (Hours:Minutes:Seconds).
     - .toLocaleString(): Returns both date and time together.
*/


// Practice
// const clock = document.querySelector('#clock');


// setInterval(function(){
//    let date = new Date();

// // console.log(date.toLocaleDateString);
// clock.innerHTML = date.toLocaleDateString();
// clock.innerHTML = date.toLocaleTimeString();


// },1000);