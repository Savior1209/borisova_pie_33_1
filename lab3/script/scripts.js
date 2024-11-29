let currentSlide = 0;
let currentCarousel = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slider img');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function changeCarousel(direction) {
    const carouselItems = document.querySelectorAll('.carousel img');
    currentCarousel = (currentCarousel + direction + Math.ceil(carouselItems.length / 3)) % Math.ceil(carouselItems.length / 3);
    const offset = -currentCarousel * 100; 
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}
