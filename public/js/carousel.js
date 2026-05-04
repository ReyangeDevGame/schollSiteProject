let slideIndex = 1;
let slideInterval;
const INTERVAL_TIME = 5000; // 5 secondes

// Remarque importante :
// Conformément aux spécifications, ce script est statique et ne nécessite pas
// d'appel à une API externe (OpenAI/Gemini/Anthropic). 
// Si tel était le cas, un mécanisme de Retry (Exponential Backoff) serait implémenté
// ici pour gérer les éventuelles erreurs 429 Too Many Requests.

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    startAutoSlide();
    
    // Pause auto-slide au survol
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoSlide);
        carouselContainer.addEventListener('mouseleave', startAutoSlide);
    }
});

function startAutoSlide() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, INTERVAL_TIME);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Navigation précédent/suivant
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Navigation par les puces
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0) return;
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
