window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) { // Change 50 to the desired scroll position
        navbar.classList.add('white'); // Add the class to change color
    } else {
        navbar.classList.remove('white'); // Remove the class when at the top
    }
});


// script.js

// Select the hamburger icon and the menu
const icon = document.querySelector('.icon');
const menu = document.querySelector('.menu');

// Add an event listener to the icon
icon.addEventListener('click', function() {
    // Toggle the display of the menu
    menu.classList.toggle('active');
});