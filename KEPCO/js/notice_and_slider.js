/* Tab Menu Reset */
$(".tab_menu_content").hide();
$("#tab_menu_content1").show();
/* Click Sequence */
$(".direction_title").click(function (e) {
  // Get Attribute [href]
  e.preventDefault();
  var tab = $("a", this).attr("href");
  console.log(tab);
  $(".tab_menu_content").hide();
  $(".direction_title > a").removeClass("tab_on");
  $(tab).fadeIn();
  $("a", this).addClass("tab_on");
});

var swiper = new Swiper(".bs_slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
