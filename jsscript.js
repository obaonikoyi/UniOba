//jsscript.js

var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.visibility = "visible";
    navLinks.style.opacity = "1";
}

function hideMenu() {
    navLinks.style.opacity = "0";
    setTimeout(() => {
        navLinks.style.visibility = "hidden";
    }, 500); // Match the transition duration in CSS
}

const images = [
    'images/headoffice.jpg',
    'images/headoffice2.jpg',
    'images/headoffice3.jpg',
    'images/headoffice4.jpg',
    'images/headoffice5.jpg'
];

let currentImageIndex = 0;
const imageElement = document.getElementById('headOfficeImage');

function changeImage() {
    imageElement.style.opacity = 0; // Start fade-out
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];
        imageElement.style.opacity = 1; // Start fade-in
    }, 1000); // Duration of fade-out (1 second)
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
