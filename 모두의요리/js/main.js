/* main slide */
var Mainswiper = new Swiper(".mainSlide .mySwiper", {
  navigation: {
    nextEl: ".mainSlide .swiper .nextBtn",
    prevEl: ".mainSlide .swiper .prevBtn",
  },
  slidesPerView: 'auto',
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
});

/* my chef slide */
var swiper = new Swiper(".mychefSlide .mySwiper", {
  pagination: {
    el: ".fractionBtn .fraction",
    type: "fraction",
  },
  navigation: {
    nextEl: ".fractionBtn .nextBtn",
    prevEl: ".fractionBtn .prevBtn",
  },
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  /* custom pagination */
  on: {
    init(swiper) {
      updatePaginationBar(swiper);
    },
    slideChange(swiper) {
      updatePaginationBar(swiper);
    },
  }
});

/* custom pagination */
function updatePaginationBar(swiper) {
  let bar = document.querySelector(".customPagination .bar");
  let total = swiper.slides.length;
  let current = swiper.realIndex + 1;

  let percent = current / total;

  bar.style.width = `${100 / total}%`;
  bar.style.transform = `translateX(${(current - 1) * 100}%)`;
}

/* iconMenu */
let iconMenu = document.querySelectorAll('.iconMenu li');

iconMenu.forEach((el, idx)=>{
  el.addEventListener('click', ()=>{
    el.classList.toggle('active');
  });
});

/* bookmark */
let bookMark = document.querySelectorAll('.bookmark');

bookMark.forEach((el, idx)=>{
  el.addEventListener('click', ()=>{
    el.classList.toggle('active');
  });
});




















