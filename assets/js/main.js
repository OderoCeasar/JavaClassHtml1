
// Wait for the DOM to fully load before adding the event listener
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    const javaclass = document.getElementById('colorButton');

    // Add a click event listener to the button
    javaclass.addEventListener('click', function() {

        // change the color of the button
        javaclass.style.backgroundColor = javaclass.style.backgroundColor==='red' ? '#4CAF50':'red'
    });

});

