$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin: 50,
    navText:["<img src='images/minu/chevron.svg'/>", "<img src='images/minu/right.svg'/>"],
    loop:true,
    nav:true,

    items:2,
    responsive:{
      0:{
        nav:true,
        items:1,
        dots:false,
      },
      
      550:{
        items:2,
      },
      
      770:{
        items:3,
      },
      
      1050:{
        items:4
      }

    }
  });
});



let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initial setup
showSlide(currentSlide);

// Auto play
setInterval(nextSlide, 3000); // Change slide every 3 seconds



$(document).ready(function(){
  $(".owl-carousel-1").owlCarousel();
});