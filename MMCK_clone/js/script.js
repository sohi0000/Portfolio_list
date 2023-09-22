$(document).ready(function () {

    var currentIndex = 0;


    setInterval(function () {


        if (currentIndex > 3) {
            currentIndex = 0;
        }


        $(".slide-box > .slide").removeClass("active")
        $(".slide-box > .slide").eq(currentIndex).addClass("active");


        $(".slide-wrap > .slide-dot > .dot").removeClass("active")
        $(".slide-wrap > .slide-dot > .dot").eq(currentIndex).addClass("active");




        currentIndex++;

    }, 3000);




    //    마우스오버


    $(".menu > ul > li").mouseenter(function () {

        var $this = $(this);

        //        alert($this.index());

        var index = $this.index();


        if ($this.siblings().hasClass("active")) {
            $this.siblings().removeClass("active");
            $(".depth").removeClass("active");
        }

        $this.addClass("active");
        $(".depth").eq(index).addClass("active");


    });



    $(".depth").mouseleave(function () {
        var $this = $(this);
        $this.removeClass("active");
        $(".menu > ul > li").removeClass("active");
    });








    $(".all-menu").click(function () {

        $(".all-menu-in").toggleClass("active");



    });


    //    슬릭슬라이더


    $(".slide-wrap").slick({
        dots: true,
        pauseOnHover: true,
        prevArrow: "<div class='triangle-left'></div>",
        nextArrow: "<div class='triangle-right'></div>",
        autoplay: true,
        fade: true,
        autoplaySpeed: 1000

    });
    
    
//    올메뉴 클릭
    
    $(".all-menu").click(function(){
        
        $(".all-menu").toggleClass("active");
        
        
        
    });
    
//    검색 클릭
    
    $(".sch-click").click(function(){
        
        $(".search").addClass("active");
        
    });
    
    $(".sch-close").click(function(){
        
        $(".search").removeClass("active");
        
    });




});
