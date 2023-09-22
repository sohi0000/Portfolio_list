var swiper = new Swiper(".sc4_slider_wrap .slider_wrap", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  pagination: false,
  navigation: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: ".sc4_slider_wrap .swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".sc4_slider_wrap .swiper-button-next",
        prevEl: ".sc4_slider_wrap .swiper-button-prev"
      },
    },
  },
});