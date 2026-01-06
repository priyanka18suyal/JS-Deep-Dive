/**
 * DOM SELECTORS
 * Used to find elements in the document
 */

// 1. By ID: Returns a single element (Highest Performance)
const mainTitle = document.getElementById('title');

// 2. By Class: Returns an HTMLCollection (Live)
const cards = document.getElementsByClassName('card');

// 3. By Tag: Returns an HTMLCollection
const allParagraphs = document.getElementsByTagName('p');

// 4. QuerySelector: Returns first element matching CSS selector
const firstButton = document.querySelector('.btn-primary');

// 5. QuerySelectorAll: Returns a static NodeList of all matches
const allListItems = document.querySelectorAll('ul > li');

// Tip: You can iterate over a NodeList directly
allListItems.forEach(item => {
    item.style.color = 'blue';
});