const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.carousel-slide img');

let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.transform = 'translateX(0)';
        } else {
            slide.style.transform = 'translateX(-100%)';
        }
    });
}

function goToPrevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide();
}

function goToNextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
}

prevBtn.addEventListener('click', goToPrevSlide);
nextBtn.addEventListener('click', goToNextSlide);

showSlide();