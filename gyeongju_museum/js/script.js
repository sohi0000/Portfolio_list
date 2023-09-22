/* 관람안내 sticky 변수 */
let container = document.querySelector(".index_container"),
    stickyViewInfo = container.querySelector(".sticky_view_information"),
    windowSection = window,
    sticky = stickyViewInfo.offsetHeight + container.offsetTop + 300; // 383

/* 관람안내 sticky */
window.addEventListener("scroll", function(){
  if (windowSection.scrollY > sticky) {
    stickyViewInfo.classList.add("sticky");
  } else {
    stickyViewInfo.classList.remove("sticky");
  }
});

/* 교육프로그램 스와이퍼 슬라이드*/
eduSwiper = new Swiper(".educational_program_swiper .edu_slide_wrap", {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: ".educational_program_swiper .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    769: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1025: {
      slidesPerView: 1,
      spaceBetween: 3,
    },
  },
  /* navigation: {
    nextEl: ".educational_program_swiper .swiper-button-next",
    prevEl: ".educational_program_swiper .swiper-button-prev",
  }, */
});

/* 상설전시관 */
let targetLink = document.querySelectorAll(".exhibition_tabmenu .tab_menu a"),
    tabContent = document.querySelectorAll(".permanent_exhibition_section .tab_content > div");

for (let i = 0; i < targetLink.length; i++) {
  targetLink[i].addEventListener("click", function(e){
    e.preventDefault();

    let orgTarget = targetLink[i].getAttribute("href");
    let tabTarget = orgTarget.replace("#", "");

    console.log(tabTarget);
    for (let j = 0; j < tabContent.length; j++) {
      tabContent[j].style.display = "none";
    }

    document.getElementById(tabTarget).style.display = "block";

    for (let x = 0; x < targetLink.length; x++) {
      targetLink[x].classList.remove("active");
      targetLink[i].classList.add("active");
    }
  });
  
}
/* 학술정보 */
infoSwiper = new Swiper(".academic_information_swiper .info_slide_wrap", {
  slidesPerView: 3,
  spaceBetween: 80,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".academic_information_swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".academic_information_swiper .swiper-button-next",
    prevEl: ".academic_information_swiper .swiper-button-prev",
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: 200,
      loop: true,
      autoplay: false,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 60,
      loop: true,
      autoplay: false,
    },
  },
});

/* 멈춤버튼 */
let stopBtn = 0;
let stopClick = document.querySelectorAll(".swiper-pagination");
  
stopClick[0].addEventListener("click", function(){
  if (stopBtn == 0) {
    stopClick[0].classList.add("on");
    eduSwiper.autoplay.stop();
    stopBtn = 1;
  } else {
    stopClick[0].classList.remove("on");
    eduSwiper.autoplay.start();
    stopBtn = 0;
  }
});
stopClick[1].addEventListener("click", function(){
  if (stopBtn == 0) {
    stopClick[1].classList.add("on");
    infoSwiper.autoplay.stop();
    stopBtn = 1;
  } else {
    stopClick[1].classList.remove("on");
    infoSwiper.autoplay.start();
    stopBtn = 0;
  }
});

