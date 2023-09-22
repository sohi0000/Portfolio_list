var section5Swiper = new Swiper("#sec5 .section5_slider .slide_wrap", {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: "#sec5 .section5_slider .swiper-button-next",
        prevEl: "#sec5 .section5_slider .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: true,
        },
      },
    });
    let stopBtn = 0;
    $("section.section5_slider .btn_pause").click(function(){
      if (stopBtn == 0) {
        $("section.section5_slider .btn_pause").addClass("on");
        section5Swiper.autoplay.stop();
        stopBtn = 1;
      } else {
        $(".section5_slider .btn_pause").removeClass("on");
        section5Swiper.autoplay.start();
        stopBtn = 0;
      }
    });