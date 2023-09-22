$(Document).ready(function () {

    $(".menu-fixed .menu-ul").mousemove(function () {
        $(".menu-fixed").addClass("ov");
    });
    $(".menu-fixed .menu-ul").mouseleave(function () {
        $(".menu-fixed").removeClass("ov");
    });

    $(".menu-hamburger").click(function () {
        $(".menu-hamburger").toggleClass("active")

        $(".allmenu").toggleClass("active");

        $(".allmenu-bg").toggleClass("active");

    });



    $(".sec3-ul").slick({
        slidesToShow: 3,

        responsive: [
      // 반응형 웹 구현 옵션
            {
                breakpoint: 1100, //화면 사이즈 
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2,
                    arrows: true,
                }
      },
            {
                breakpoint: 767, //화면 사이즈 
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1,
                    arrows: true,
                }
      }
    ]

    });

    $("#content").fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [
//      'Main',
//      'Business',
//      'Portfolio',
//      'Community'
    ],


    });


    setTimeout(function () {
        $("#fp-nav").css({
            "transform": "translate3d(0,-50%,0)"
        });
    }, 1000);



    setTimeout(function () {
        setInterval(function () {
            if ($("#footer").hasClass("active")) {
                $("#fp-nav").css({
                    "transform": "translate(200px,-50%)"
                });
            } else {
                $("#fp-nav").css({
                    "transform": "translate(0,-50%)"
                });
            }
        }, 100);
    }, 2000);


    setInterval(function () {
        if ($("#footer").hasClass("active")) {
            $(".scroll").addClass("active");
            $(".inner ul li").css({
                "opacity": 1
            });
            $(".inner .sec-txt").css({
                "opacity": 1
            });


        } else {
            $(".scroll").removeClass("active");
        }
    }, 300);






   



    $("#fp-nav ul li:first-child a").append("<div class='text'>Main</div>");
    $("#fp-nav ul li:nth-child(2) a").append("<div class='text'>Business</div>");
    $("#fp-nav ul li:nth-child(3) a").append("<div class='text'>Portfolio</div>");
    $("#fp-nav ul li:nth-child(4) a").append("<div class='text'>Community</div>");


    
    
    
    
    
    
    
    
    





});
