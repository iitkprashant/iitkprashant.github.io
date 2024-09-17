// Select the toggle button and the navigation menu
const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Toggle the 'show' class on the navigation menu to display or hide it
    navMenu.classList.toggle('show');
});
