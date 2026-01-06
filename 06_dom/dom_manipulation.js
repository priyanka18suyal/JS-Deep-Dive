/**
 * DOM MANIPULATION
 * Changing styles, attributes, and text
 */

const box = document.querySelector('#box');

// 1. Changing Text Content
box.textContent = "New content here"; // Safer than innerHTML
box.innerText = "Visible text";       // Respects CSS visibility

// 2. Changing Styles (Inline)
box.style.backgroundColor = 'teal';
box.style.padding = '20px';
box.style.borderRadius = '5px';

// 3. Class Manipulation (The Recommended Way)
box.classList.add('highlight');
box.classList.remove('old-class');
box.classList.toggle('active'); // Adds if missing, removes if present

// 4. Attributes
box.setAttribute('title', 'This is a tooltip');
const idValue = box.getAttribute('id');