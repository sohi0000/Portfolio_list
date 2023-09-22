$(document).ready(function () {

    $(".visual-wrap").slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    }); //슬릭슬라이더



    
    
    $(".visual-btn-pause").click(function(){
    $(".visual-wrap").slick("slickPause")
    $(".visual-btn-pause").removeClass("active");
    $(".visual-btn-play").addClass("active");
  });
  
$(".visual-btn-play").click(function(){
    $(".visual-wrap").slick("slickPlay")
    $(".visual-btn-play").removeClass("active");
    $(".visual-btn-pause").addClass("active");
  }); //슬라이드 버튼
    
    
    

    $(window).scroll(function () {

        var num = $(this).scrollTop(); //중요중요

        console.log(num);

        if (num > 100) {
            $(".header-fixed").css({
                display: "block"
            });
        } else {
            $(".header-fixed").css({
                display: "none"
            });
        }

        if (num < 100) {
            $(".header-basic").css({
                display: "block"
            });
        } else {
            $(".header-basic").css({
                display: "none"
            });
        }

    }); //윈도우.스크롤



    
//    $(".small-hamburger").click(function(){
//        $(".small-hamburger").addClass("active");
//        $(".header-small > .small-in").addClass("active");
//    });
    

    $(".small-hamburger").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active")
            $(".header-small > .small-in").removeClass("active");
            
        } else {
            $(this).addClass("active");
            $(".header-small > .small-in").addClass("active");
        }
    });
    
    
    $(".small-menu > ul > li").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active")
        } else {
            $(".small-menu > ul > li").removeClass("active")
            $(this).addClass("active")
        }
    }); //작아지면 나타나는 메뉴 2차메뉴 클릭

    
    
    $(".ft-hd-info").click(function(){
        $(".ft-hd-info-in").toggleClass("active");
        $(".ft-hd-info > p").toggleClass("active");
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});

























    
    
    
    
    
    
    
    
    
    