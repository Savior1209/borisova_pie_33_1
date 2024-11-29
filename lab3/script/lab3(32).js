// Получаем элементы слайдера 
const sliderP = document.querySelector('.slider-popular'); 
const prevButtonP = document.querySelector('.prev-buttonP'); 
const nextButtonP = document.querySelector('.next-buttonP'); 
const slidesP = Array.from(sliderP.querySelectorAll('figure')); 
const slideCountP = slidesP.length; 
let slideIndexP = 0; 
const slidesToShow = 3; // Количество отображаемых слайдов

// Устанавливаем обработчики событий для кнопок 
prevButtonP.addEventListener('click', showPreviousSlideP); 
nextButtonP.addEventListener('click', showNextSlideP); 

// Функция для показа предыдущего слайда 
function showPreviousSlideP() { 
  slideIndexP = (slideIndexP - 1 + slideCountP) % slideCountP; 
  updateSliderP(); 
} 

// Функция для показа следующего слайда 
function showNextSlideP() { 
  slideIndexP = (slideIndexP + 1) % slideCountP; 
  updateSliderP(); 
} 

// Функция для обновления отображения слайдера 
function updateSliderP() { 
  slidesP.forEach((slide, index) => { 
    // Вычисляем, нужно ли показывать этот слайд
    const showIndex = (slideIndexP + index) % slideCountP; 

    // Если индекс слайда текущий, показываем его в пределах sс अलावा 3
    if (index >= slideIndexP && index < slideIndexP + slidesToShow) { 
      slide.classList.remove('hidden');
    } else { 
      slide.classList.add('hidden'); 
    } 
  }); 
}

// Инициализация слайдера 
updateSliderP(); 