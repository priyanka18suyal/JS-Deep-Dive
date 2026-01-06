// 1. Select all elements with the class 'button'
// querySelectorAll returns a static NodeList (a collection of elements)
const buttons = document.querySelectorAll('.button');

// 2. Select the 'body' element
// We need this because we want to change its style when a button is clicked
const body = document.querySelector('body');

// 3. Loop through each button in the NodeList
// Since 'buttons' is a collection, we use .forEach to attach logic to every individual button
buttons.forEach(function (button) {

    // 4. Attach an Event Listener to the current button
    // This 'listens' for a 'click' event. When clicked, the callback function runs.
    button.addEventListener('click', function (e) {

        // 'e' is the Event Object. It contains metadata about the click.
        // console.log(e); // Shows the full PointerEvent object

        // 'e.target' refers to the specific element that was clicked (the button)
        // console.log(e.target);

        // 5. Logic to change background color based on the ID of the clicked button
        // We check the 'id' property of the target element (e.target.id)

        if (e.target.id === 'grey') {
            // Access the .style object of the body to change its CSS property
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    });
});