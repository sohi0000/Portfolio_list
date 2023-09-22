$(document).ready(function () {


    new fullpage('#fullpage', {
        autoScrolling: true,
        //        navigation: true,
        //        navigationPosition: 'right',


    });


    function BottomLine__init() {
        var $itemBottomLine = $('.hd-box > .menu > .bottom-line');

        $('.hd-box > .menu > ul > li').mouseenter(function () {
            var $this = $(this);
            var left = $this.position().left;
            var width = $this.width();
            $itemBottomLine.css('left', left);
            $itemBottomLine.css('width', width);
            $itemBottomLine.css('transition', '0.3s');
        });

        $('.hd-box > .menu > ul > li').eq(0).mouseenter();

        $('.hd-box > .menu > ul').mouseleave(function () {
            $itemBottomLine.css('left', '');
            $itemBottomLine.css('width', '');
            $itemBottomLine.css('transition', '1s');
        });
    };

    BottomLine__init();


    function slide1__init() {
        var swiper = new Swiper('#visual .swiper-container', {
            centeredSlides: true,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '#visual .swiper-container .swiper-button-next',
                prevEl: '#visual .swiper-container .swiper-button-prev',
            },
            pagination: {
                el: '#visual .swiper-container .swiper-pagination',
                clickable: true,
            },
            keyboard: true,
        });
    };

    slide1__init();


    function slide2__init() {
        var swiper1 = new Swiper('.section1-wrap .slide-wrap .swiper-container', {
            loop: true,
            speed: 800,
            //            autoplay: {
            //                delay: 5000,
            //                disableOnInteraction: false,
            //            },
            navigation: {
                nextEl: '.section1-wrap .button-next',
                prevEl: '.section1-wrap .button-prev',
            },
            pagination: {
                el: '.section1-wrap .swiper-pagination',
                clickable: true,
            },
            mousewheel: false,
            keyboard: true,
        });

        var swiper2 = new Swiper('.section1-wrap .slide-wrap2 .swiper-container', {
            loop: true,
            speed: 800,
            //            autoplay: {
            //                delay: 5000,
            //                disableOnInteraction: false,
            //            },

            pagination: {
                el: '.section1-wrap .swiper-pagination',
                clickable: true,
            },
            mousewheel: false,
            keyboard: true,
        });

        swiper1.controller.control = [swiper2];

        swiper2.controller.control = [swiper1];
    };

    slide2__init();


    function slide3__init() {
        var swiper3 = new Swiper('.section2-wrap > .left > .left-slide .swiper-container', {
            loop: true,
        });

        var swiper4 = new Swiper('.section2-wrap > .right > .right-slide .swiper-container', {
            loop: true,
            effect: 'fade',
            pagination: {
                el: '.section2-wrap > .right > .right-slide .swiper-container .swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.section2-wrap > .right > .right-slide .swiper-container .button-next',
                prevEl: '.section2-wrap > .right > .right-slide .swiper-container .button-prev',
            },
        });

        swiper3.controller.control = [swiper4];

        swiper4.controller.control = [swiper3];
    };

    slide3__init();


    function TabBox__init() {
        $('[data-tab-head-item-name]').click(function () {
            var $this = $(this);
            var tabName = $this.attr('data-tab-name');
            var itemName = $this.attr('data-tab-head-item-name');
            // [for]
            // 모든 것을 숨기고
            $('[data-tab-name="' + tabName + '"]').removeClass('active');

            $('[data-tab-name="' + tabName + '"][data-tab-head-item-name="' + itemName + '"]').addClass('active');
            $('[data-tab-name="' + tabName + '"][data-tab-body-item-name="' + itemName + '"]').addClass('active');
        });
    };

    TabBox__init();

    function text__init() {
        $('.sec4-tp').marquee({
            speed: 50,
            gap: 50,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            delayBeforeStart: 0
            //            pauseOnHover: true
        });
    };

    setTimeout(text__init, 500);


    function text2__init() {
        $('.sec4-bt').marquee({
            speed: 50,
            gap: 50,
            delayBeforeStart: 0,
            direction: 'right',
            duplicated: true,
            delayBeforeStart: 0
            //            pauseOnHover: true
        });
    };

    setTimeout(text2__init, 500);


    function slide4__init() {
        var swiper5 = new Swiper('#section5 .slide-wrap > .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
                1500: {
                    slidesPerView: 4,
                }
            },
            loop: true,
            navigation: {
                nextEl: '#section5 .slide-wrap > .button-next',
                prevEl: '#section5 .slide-wrap > .button-prev',
            },
        });
    };

    slide4__init();







});
