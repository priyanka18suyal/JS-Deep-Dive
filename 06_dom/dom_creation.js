/**
 * DOM CREATION & APPENDING
 * Creating elements in memory and adding them to the page
 */

function buildList() {
    const listContainer = document.querySelector('#tech-list');

    // Using a DocumentFragment for performance (prevents multiple screen repaints)
    const fragment = document.createDocumentFragment();
    const stack = ['JavaScript', 'React', 'Node.js', 'Python'];

    stack.forEach(tech => {
        // 1. Create element
        const li = document.createElement('li');

        // 2. Add text via TextNode (Security Best Practice)
        const text = document.createTextNode(tech);
        li.appendChild(text);

        // 3. Add to fragment
        fragment.appendChild(li);
    });

    // 4. Append the fragment once to the real DOM
    listContainer.appendChild(fragment);
}

buildList();
