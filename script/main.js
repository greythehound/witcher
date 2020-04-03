var user = 10;
var swiper = new Swiper('.swiper-container', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        // when window width is >= 540px
        540: {
          slidesPerView: 2
        }
    }
  })

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');


menuButton.addEventListener('click', function(){
    menu.classList.toggle('header-active');
    menuButton.classList.toggle('menu-button-active');
});

