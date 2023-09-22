var swiper = new Swiper(".main_slide", {
  loop: true,
  pagination: {
    el: ".main_slide_wrap .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".main_slide_wrap .swiper-button-next",
    prevEl: ".main_slide_wrap .swiper-button-prev",
  },
});