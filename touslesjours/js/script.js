$(document).ready(function () {

$(".slider-wrap1").slick({

    slidesToShow: 4,
    infinite: true,
    arrows: true

});

$(".slider-wrap2").slick({

    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true

});


$(window).scroll(function () {


    console.log($(this).scrollTop());

    if ($(this).scrollTop() > 900) {
        $("#header").css({
            display: "none"
        });
        $("#header-color").css({
            display: "block"
        });
    } else {
        $("#header").css({
            display: "block"
        });
        $("#header-color").css({
            display: "none"
        });
    }


});









});
