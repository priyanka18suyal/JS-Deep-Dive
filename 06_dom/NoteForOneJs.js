/**
 * DOM Manipulation Notes
 * Focus: Selecting, Attributes, Styles, and Content
 */

// 1. The Global Window Object
// console.log(window);
// 'window' is the global object for the browser. It contains everything:
// the document, location, history, and browser-specific functions.

// 2. Selecting an Element
const title = document.getElementById("title");

// 3. Why 'className' and not 'class'?
// In JavaScript, 'class' is a reserved keyword (used to create classes/blueprints).
// To avoid conflict, the DOM uses 'className' to refer to the HTML class attribute.
console.log(title.className); // Returns the class string (e.g., 'heading')

// 4. Getting and Setting Attributes
// .getAttribute('attr') returns the value of any attribute.
console.log(title.getAttribute("id")); // 'title'
console.log(title.getAttribute("class")); // 'test' (or whatever is currently set)

// .setAttribute('name', 'value') overwrites the existing attribute.
title.setAttribute("class", "test-new"); // This replaces 'heading' with 'test-new'

// 5. Manipulating Styles
// Styles applied via .style are added as "inline styles" in the HTML.
title.style.backgroundColor = "green";
title.style.padding = "15px";
title.style.borderRadius = "15px";

/**
 * 6. Accessing Content: The Differences
 * Suppose your HTML is:
 * <h1 id="title">DOM Learning <span style="display: none;">test text</span></h1>
 */

// A. .innerText
// Only shows the "rendered" text. If something is hidden with CSS (display: none),
// .innerText will NOT show it. It mimics what the user actually sees.
console.log(title.innerText); // Output: "DOM Learning"

// B. .textContent
// Shows all text contained in the element, even if it is hidden by CSS.
// It is slightly faster than innerText because it doesn't care about layout.
console.log(title.textContent); // Output: "DOM Learning test text"

// C. .innerHTML
// Returns the full HTML structure inside the element, including tags like <span> or <b>.
console.log(title.innerHTML); // Output: "DOM Learning <span style="...">test text</span>"

//Query selector
x;
document.getElementsByClassName("heading"); // Purpose: Finds all elements with class 'heading' | Output: HTMLCollection [h1#title.heading]

document.querySelector("h1"); // Purpose: Finds the first <h1> tag | Output: <h1 id="title" class="heading">...</h1>

document.querySelector("h2"); // Purpose: Finds the first <h2> tag | Output: <h2>Lorem ipsum...</h2>

document.querySelector("#title"); // Purpose: Finds element by ID 'title' | Output: <h1 id="title" class="heading">...</h1>

document.querySelector(".heading"); // Purpose: Finds first element with class 'heading' | Output: <h1 id="title" class="heading">...</h1>

document.querySelector("input"); // Purpose: Finds the first <input> tag | Output: <input type="password"...>

const myUrl = document.querySelector("ul"); // Purpose: Stores the <ul> element in a variable | Output: undefined (variable assignment)

const turnGreen = myUrl.querySelector("li"); // Purpose: Finds the first <li> inside that <ul> | Output: undefined (variable assignment)

turnGreen.style.backgroundColor = "green"; // Purpose: Changes the <li> background to green | Output: "green"

turnGreen.style.padding = "10px"; // Purpose: Adds 10px padding to the <li> | Output: "10px"

turnGreen.innerText = "five"; // Purpose: Changes the <li> text to "five" | Output: "five"

/**
 * Advanced Element Selection with querySelector
 * Focus: Attribute Selectors, Pseudo-Selectors, Nested Selection, and Dynamic Styling
 */
// 1. SELECTING BY ATTRIBUTE
document.querySelector('input[type="password"]');
// Finds the first input element where the type is 'password'

// 2. CSS PSEUDO-SELECTORS
document.querySelector("p:first-child");
// Returns 'null' because the <p> in your HTML is NOT the first child of its parent (the <h1> and <h2> come first)

// 3. SELECTING LISTS
document.querySelector("ul");
// Finds the first <ul> (unordered list) on the page

document.querySelector("li");
// Finds the first <li> (list item) on the entire page

// 4. HANDLING SYNTAX ERRORS
// consy myUrl = document.querySelector('ul');
// Error: 'consy' is not a keyword. JavaScript throws an 'Unexpected identifier' error.

const myUrl = document.querySelector("ul");
// Correctly stores the <ul> element in a variable named 'myUrl'

// 5. NESTED SELECTION (Searching inside an element)
myUrl.querySelector("li");
// Instead of searching the whole document, this only searches INSIDE the <ul> for an <li>

const turnGreen = myUrl.querySelector("li");
// Stores that specific first list item into a variable for styling

// 6. DYNAMIC STYLING
turnGreen.style.backgroundColor = "green";
// Changes the background color of that specific <li> to green

turnGreen.style.backgroundColor = "10px";
// This line fails silently! '10px' is not a valid color, so the background won't change.

turnGreen.style.backgroundColor = "20px";
// This also fails because '20px' is a measurement, not a color value.

turnGreen.style.padding = "10px";
// Correct usage: Padding requires a measurement like '10px', so the spacing increases.

// 7. UPDATING CONTENT
console.log(turnGreen.innerText);
// Reads the current visible text of the <li> (which was 'one')

turnGreen.innerText = "five";
// Replaces the text 'one' with 'five' on the actual webpage
