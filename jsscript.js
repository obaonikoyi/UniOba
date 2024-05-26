//jsscript.js

var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
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

let slideIndex = 0;
const slides = document.querySelectorAll('.testimonial-col');
const totalSlides = slides.length;

function showSlides() {
    const testimonialSlide = document.querySelector('.testimonial-slide');
    testimonialSlide.style.transform = `translateX(-${slideIndex * (100 / 3)}%)`;
}

function plusSlides(n) {
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    showSlides();
}

// Initial display
showSlides();