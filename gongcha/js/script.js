$(function () {

    function visual_slide__init() {
        var swiper = new Swiper('#visual .slider-wrap1 .swiper-container', {
            navigation: {
                nextEl: '#visual .slider-wrap1 .swiper-container .swiper-button-next',
                prevEl: '#visual .slider-wrap1 .swiper-container .swiper-button-prev',
            },
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '#visual .slider-wrap1 .swiper-container .swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    var text = '';

                    if (index == 0) {
                        text = '2021 다이어리 프로모션';
                    } else if (index == 1) {
                        text = '쿠팡이츠 3천원 할인';
                    } else if (index == 2) {
                        text = '배달의민족 2천원 할인';
                    } else if (index == 3) {
                        text = '토피넛&다츠초코 신메뉴';
                    } else if (index == 4) {
                        text = '타로&흑임자 신메뉴';
                    } else if (index == 5) {
                        text = 'NEW 베스트 콤비네이션';
                    }

                    return '<span class="' + className + '">' + text + '</span>';
                },
            },
        });
    }

    visual_slide__init();


    function section1_slide__init() {

        var swiper = new Swiper('#section1 .slider-wrap2 .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: 'fade',
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '#section1 .slider-wrap2 .swiper-container .swiper-pagination',
                clickable: true,
                autoplay: 3000,
            },
        });



    }

    section1_slide__init();


    function section3_slider__init() {
        var swiper = new Swiper('#section3 .right .slider-wrap3 .swiper-container', {
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '#section3 .right .slider-wrap3 .swiper-container .button-next',
                prevEl: '#section3 .right .slider-wrap3 .swiper-container .button-prev',
            },
        });
    }

    section3_slider__init();

    
    function TabBox__init() {
  $('[data-tab-head-item-name]').click(function() {
    var $this = $(this);
    var tabName = $this.attr('data-tab-name');
    var itemName = $this.attr('data-tab-head-item-name');
    // [for]
    // 모든 것을 숨기고
    $('[data-tab-name="' + tabName + '"]').removeClass('active');
    
    $('[data-tab-name="' + tabName + '"][data-tab-head-item-name="' + itemName + '"]').addClass('active');
    $('[data-tab-name="' + tabName + '"][data-tab-body-item-name="' + itemName + '"]').addClass('active');
  });
}

    TabBox__init();

});
