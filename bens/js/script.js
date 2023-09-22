/* 기능 */
function SliderK__show($slider, index) {
    var $currentSlide = $slider.find('.slides > div.active');
    var $postSlide = $slider.find('.slides > div').eq(index);

    $currentSlide.removeClass('active');
    $postSlide.addClass('active');

    $slider.find('.page-nav > div > div > div.active').removeClass('active');
    $slider.find('.page-nav > div > div > div').eq(index).addClass('active');

    var $pageBtnUnderline = $slider.find('.page-nav > div > section');

    var $postPageBtn = $slider.find('.page-nav > div > div > div.active');
    var pageBtnUnderlineWidth = $postPageBtn.outerWidth();
    var pageBtnUnderlinePosition = $postPageBtn.position();

    $pageBtnUnderline.css({
        width: pageBtnUnderlineWidth,
        left: pageBtnUnderlinePosition.left
    });

}

function SliderK__showPrev($slider) {
    SliderK__showPost($slider, -1);
}

function SliderK__showNext($slider) {
    SliderK__showPost($slider, 1);
}

function SliderK__showPost($slider, change) {
    var $currentSlide = $slider.find('.slides > div.active');
    var $postSlide = null;
    var $firstSlide = $slider.find('.slides > div:first-child');
    var $lastSlide = $slider.find('.slides > div:last-child');

    if (change == 1) {
        $postSlide = $currentSlide.next();

        if ($postSlide.length == 0) {
            $postSlide = $firstSlide;
        }
    } else if (change == -1) {
        $postSlide = $currentSlide.prev();

        if ($postSlide.length == 0) {
            $postSlide = $lastSlide;
        }
    }

    SliderK__show($slider, $postSlide.index());
}

/* 초기화 */
function SliderK__init() {
    $('.slider-k').each(function (index, node) {
        var $slider = $(node);

        SliderK__initPageNav($slider);
        SliderK__initSideBtns($slider);
        SliderK__initAutoplay($slider);
        SliderK__show($slider, 0);
    });
}

// 페이지 내비를 자동으로 만들어줍니다.
function SliderK__initPageNav($slider) {
    var currentIndex = $slider.find('.slides > div.active').index();
    var slidesCount = $slider.find('.slides > div').length;

    var html = '';

    for (var i = 0; i < slidesCount; i++) {
        if (i == currentIndex) {
            html += '<div class="active"><span>' + '</span></div>';
        } else {
            html += '<div><span>' + '</span></div>';
        }
    }

    html = '<div class="page-nav"><div><div>' + html + '</div><section></section></div></div>';
    $slider.append(html);

    $slider.find('.page-nav > div > div > div').click(function () {
        SliderK__show($slider, $(this).index());
    });
}

// 사이드 버튼에 이벤트를 겁니다.
function SliderK__initSideBtns($slider) {
    $slider.find('.side-btns > div').click(function () {
        var index = $(this).index();

        if (index == 0) {
            SliderK__showPrev($slider);
        } else {
            SliderK__showNext($slider);
        }
    });
}

function SliderK__initAutoplay($slider) {
    var autoplay = $slider.data('autoplay');

    $slider.data('autoplay-now-work', 'Y');

    $slider.mouseenter(function () {
        $slider.data('autoplay-now-work', 'N');
    });

    $slider.mouseleave(function () {
        $slider.data('autoplay-now-work', 'Y');
    });

    if (autoplay != 'Y') {
        return false;
    }

    var autoplayInterval = $slider.data('autoplay-interval');

    if (typeof autoplayInterval == 'undefined') {
        autoplayInterval = 3000;
    } else {
        // 문자열을 숫자화
        autoplayInterval = autoplayInterval * 1;
    }

    var autoplayDirIsLeft = $slider.data('autoplay-dir') == 'left';

    setInterval(function () {
        if ($slider.data('autoplay-now-work') == 'Y') {
            if (autoplayDirIsLeft) {
                SliderK__showPrev($slider);
            } else {
                SliderK__showNext($slider);
            }
        }
    }, autoplayInterval);
}

$(document).ready(function () {



    $(".hd-tp-right ul li:last-child div").click(function () {
        $(".hd-tp-right ul li:last-child").addClass("active");
    });
    $(".hd-tp-right ul li:last-child .cancel-icon").click(function () {
        $(".hd-tp-right ul li:last-child").removeClass("active");
    });

    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        fade: true,
        infinite: true,
        arrows: true,
        customPaging: function (slick, index) {
            return '<div class="page-btn"></div>';
        }
    });

    $('#section5 .sec-5-slider').slick();

    $('#section6 .slider-wrap').slick({
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('#section9 .slider-wrap').slick({
        slidesToShow:   3,
        slidesToScroll: 1,
        margin:20
    });



    console.clear();
    var $html = $('html');

    function TopBar_init() {

        var $topBar = $('#header .hd-bt');
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 90) {
                $html.addClass('top2-bar-fly');
            } else {
                $html.removeClass('top2-bar-fly');
            }
        });
    }

    TopBar_init();



    SliderK__init();
});
