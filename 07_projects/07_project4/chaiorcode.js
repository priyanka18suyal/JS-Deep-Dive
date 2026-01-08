let RandomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHigh = document.querySelector('.loworHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true; //game is being played

//to check the availability of the game
if (playGame) {
    submit.addEventListener('click', function (e) {
        //event listener on submit button
        // and now this is a form and we have to prevent its default behaviour but it  became form because of button type submit
        e.preventDefault(); //to prevent the default behaviour of the form

        const guess = parseInt(userInput.value); //getting value from input field and converting it to integer and we are taking that value in guess variable
        console.log(guess);
        validateGuess(guess); //calling validate guess function with guess as argument because we have to validate the guess
    });
}

function validateGuess(guess) {
    //to validate guess
    if (isNaN(guess)) {
        alert('Please Enter a valid number');
    } else if (guess < 1) {
        alert("Please Enter a  number more than 1");
    } else if (guess > 100) {
        alert("Please Enter a number less than 100");
    } else {
        prevGuess.push(guess);
        //pushing value to array the previous one
        //and now check that may be its the last chance of user or the Game over
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over.Random number was ${RandomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    //msg printing function
    if (guess === RandomNumber) {
        displayMessage(`You guesses it right`);
        endGame();
    } else if (guess < RandomNumber) {
        displayMessage(`Number is tooo low`);
        // endGame();
    } else if (guess > RandomNumber) {
        displayMessage(`Number is tooo high`);
        // endGame();
    }
}

function displayGuess(guess) {
    //it will display guess or cleanup method
    userInput.value = ''; //cleaning the input field
    guessSlot.innerHTML += `${guess} ,  `; //displaying the guess
    numGuess++; //increasing the number of guess
    remaining.innerHTML = `${11 - numGuess} `; //displaying remaining number of guess
}

function displayMessage(message) {
    //it will display message
    loworHigh.innerHTML = `<h2> ${message}</h2>`;
}

function endGame() {
    userInput.value = ''; //cleaning the input field
    userInput.setAttribute('disabled', ''); //disabling the input field
    p.classList.add('button'); //adding class to p element because we have to style it
    p.innerHTML = `<h2 id="newGame" > Start new Game </h2>`;
    startOver.appendChild(p); //appending p to startover parent element p
    playGame = false; //making playgame false because game is ended
    newGame();

    //it will end the game
}
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
            playGame = true; //making playgame true because game is started
            RandomNumber = parseInt(Math.random() * 100 + 1); //generating new random number
            prevGuess = []; //cleaning the previous guess array
            numGuess = 1; //making number of guess to 1
            guessSlot.innerHTML = ''; //cleaning the guess slot
            remaining.innerHTML = `${11 - numGuess}`; //displaying remaining number of guess
            userInput.removeAttribute('disabled'); //enabling the input field
            startOver.removeChild(p); //removing p from startover parent element p
            playGame = true;
        });
}
//it will start a new game

/* =========================================================
   WHY WE USE document.querySelector()
   ========================================================= */

/*
document.querySelector() is used to SELECT elements from the HTML
so that JavaScript can READ, UPDATE, or CONTROL them.

JavaScript cannot directly see HTML elements.
querySelector() creates a CONNECTION between JS and HTML.
*/

/*
Example:
const submit = document.querySelector('#subt');

Meaning:
→ Find the element in HTML with id="subt"
→ Store it in a variable
→ Now JS can add events, change text, disable it, etc.
*/

/*
WHY querySelector() IS PREFERRED:

1) It uses CSS-style selectors
   - '#id'
   - '.class'
   - 'tag'

2) One method works for everything
   - id
   - class
   - tag
   - nested elements

3) Cleaner, modern, and widely used
*/

/* =========================================================
   WHAT ELSE CAN WE USE (ALTERNATIVES)
   ========================================================= */

/*
1) document.getElementById('subt')

   - Selects ONLY by id
   - Faster
   - Older method
   Example:
   const submit = document.getElementById('subt');
*/

/*
2) document.getElementsByClassName('guesses')

   - Returns an HTMLCollection (like an array)
   - Needs index access
   Example:
   const guesses = document.getElementsByClassName('guesses')[0];
*/

/*
3) document.getElementsByTagName('p')

   - Selects by HTML tag
   - Returns multiple elements
*/

/*
4) document.querySelectorAll('.guesses')

   - Returns NodeList (multiple elements)
   - Used when you want to loop
*/

/* =========================================================
   WHY WE USED querySelector() IN THIS PROJECT
   ========================================================= */

/*
We used querySelector() because:

✔ Simple and readable
✔ Works with id and class
✔ No need to remember many methods
✔ Best for beginners and real projects
*/

/* =========================================================
   WHY WE CREATE ELEMENTS USING document.createElement()
   ========================================================= */

/*
document.createElement() is used when elements do NOT exist in HTML
and need to be created dynamically using JavaScript.

Example:
const p = document.createElement('p');

This creates a new <p> tag in memory.
It appears on the page only after appendChild().
*/

/* =========================================================
   IMPORTANT MENTAL MODEL (REMEMBER THIS)
   ========================================================= */

/*
HTML → Structure (what exists)
CSS  → Design (how it looks)
JS   → Logic   (how it behaves)

querySelector() = bridge between HTML and JS
*/
