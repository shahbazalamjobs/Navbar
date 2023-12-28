
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const barsIcon = document.querySelector('.navbar__bar-icon');
    const centerNav = document.querySelector('.center');

    barsIcon.addEventListener('click', function (event) {
        event.stopPropagation(); // Stop the event from propagating to document
        centerNav.classList.toggle('show');
    });

    document.body.addEventListener('click', function (event) {
        if (!barsIcon.contains(event.target)) {
            centerNav.classList.remove('show'); // Hide the menu on body click outside the icon
        }
    });
});

