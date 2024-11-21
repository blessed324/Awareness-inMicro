// Get the hamburger icon and menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Add click event listener to the hamburger icon to toggle the menu
hamburger.addEventListener('click', function() {
    menu.classList.toggle('open');
});
