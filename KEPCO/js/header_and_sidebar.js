/* doc 간소화, black filter를 위한 변수 지정 */
let doc = document,
  bFilter = doc.getElementById("black_filter");
/* 반응형을 위한 body width 측정 */
let hbg = doc.getElementById("hamburger");
let resLength = doc.getElementsByTagName("body")[0].clientWidth;
$(window).resize(function () {
  resLength = doc.getElementsByTagName("body")[0].clientWidth;
  console.log(resLength);
  /* 크기 변경 시 초기화 */
  if (resLength >= 768) {
    /* PC 시 초기화 */
    $(".gnb_first_menu_item").off("click");
    $("#hamburger").off("click");
    $("#gnb").css("display", "flex");
    $("#hamburger").removeClass("clicked");
    $("body").removeClass("stop_scroll");
    $(bFilter).removeClass("black_on");
    $(".header_menu_area").css("display", "none");
    $(".gnb_first_menu_item").removeClass("menu_clicked");
    /* PC상태 */
    $("#gnb").removeClass("clicked");
    $("#gnb").css("display", "flex");
    $(".gnb_first_menu_item").hover(
      function (e) {
        $(bFilter).addClass("black_on");
        $("body").addClass("stop_scroll");
        $("+.header_menu_area", this).stop().fadeIn(100);
      },
      function (e) {
        $(bFilter).removeClass("black_on");
        $("body").removeClass("stop_scroll");
        $(".second_items").css("display", "none");
        $(".subtitle").css("color", "#1d2b98");
        $(".subtitle").css("backgroundColor", "#fff");
        $(".second_item > a").css("borderBottom", "none");
        $("+.header_menu_area", this).stop().fadeOut(100);
      }
    );
    $(".header_menu_area").hover(
      function (e) {
        $(bFilter).addClass("black_on");
        $("body").addClass("stop_scroll");
        $(this).stop().fadeIn(100);
      },
      function (e) {
        $(bFilter).removeClass("black_on");
        $("body").removeClass("stop_scroll");
        $(".second_items").css("display", "none");
        $(".subtitle").css("color", "#1d2b98");
        $(".subtitle").css("backgroundColor", "#fff");
        $(".second_item > a").css("borderBottom", "none");
        $(this).stop().fadeOut(100);
      }
    );
    $(".subtitle").hover(function (e) {
      /* 첫메뉴 초기화 */
      $(".subtitle").css("color", "#1d2b98");
      $(".subtitle").css("backgroundColor", "#fff");
      /* 호버 표현 */
      $(this).css("color", "#fff");
      $(this).css("backgroundColor", "var(--pointColor)");
      let countingSubtitle = $(this).parent(".first_items");
      let cSubtitle = countingSubtitle.children(".subtitle").length;
      let counting = $("+.second_items", this).children();
      if (cSubtitle >= 7) {
        $(".second_items").css("display", "none");
        if (counting.length > 5) {
          /* 이중 메뉴가 5개 초과면 grid */
          $("+.second_items", this).css("display", "grid");
          $("+.second_items", this).addClass("over_seven");
        } else {
          /* 5개 이하면 일반 block */
          $("+.second_items", this).css("display", "grid");
          $("+.second_items", this).addClass("less_seven");
        }
      } else {
        /* 소제목 갯수가 적을 때이중메뉴 표현 */
        $(".second_items").css("display", "none");
        if (counting.length > 5) {
          /* 이중 메뉴가 5개 초과면 grid */
          $("+.second_items", this).css("display", "grid");
          $("+.second_items", this).addClass("item_grid");
        } else {
          /* 5개 이하면 일반 block */
          $("+.second_items", this).css("display", "block");
        }
      }
      /* 소제목 갯수가 많을 때 이중 메뉴 표현 */
      $(".second_item").hover(function (e) {
        $(".second_item > a").removeClass("liner");
        $("a", this).addClass("liner");
      });
    });
  } else {
    /* 반응형 시 초기화 */
    $("#gnb").off("mouseenter mouseleave");
    $(".header_menu_area").off("mouseenter mouseleave");
    $(".subtitle").off("mouseenter mouseleave");
    $(".gnb_first_menu_item").off("mouseenter mouseleave");
    $(".second_item").off("mouseenter mouseleave");
    $("#gnb").css("display", "none");
    $("#hamburger").removeClass("clicked");
    $("body").removeClass("stop_scroll");
    $(bFilter).removeClass("black_on");
    $(".header_menu_area").css("display", "none");
    $(".gnb_first_menu_item").removeClass("menu_clicked");
    $("#gnb").css("display", "none");
    /* 햄버거 클릭 시 */
    $("#hamburger").click(function (e) {
      $(this).toggleClass("clicked");
      $("+.gnb > #gnb", this).stop().fadeToggle(450);
      $(bFilter).toggleClass("black_on");
      $("body").toggleClass("stop_scroll");
    });
    $(".gnb_first_menu_item")
      .stop()
      .click(function (e) {
        resLength = doc.getElementsByTagName("body")[0].clientWidth;
        if (resLength < 768) {
          $(".gnb_first_menu_item").removeClass("menu_clicked");
          $(this).addClass("menu_clicked");
          $(".header_menu_area").stop().slideUp();
          $("+.header_menu_area", this).stop().slideToggle(350);
        }
      });
    console.log("@media on");
  }
});
if (resLength >= 768) {
  /* PC상태 */
  $("#gnb").removeClass("clicked");
  $(".gnb_first_menu_item").off("click");
  $("#hamburger").off("click");
  $("#gnb").css("display", "flex");
  $("#hamburger").removeClass("clicked");
  $("body").removeClass("stop_scroll");
  $(bFilter).removeClass("black_on");
  $(".header_menu_area").css("display", "none");
  $(".gnb_first_menu_item").removeClass("menu_clicked");
  $(".gnb_first_menu_item").hover(
    function (e) {
      $(bFilter).addClass("black_on");
      $("body").addClass("stop_scroll");
      $("+.header_menu_area", this).stop().fadeIn(100);
    },
    function (e) {
      $(bFilter).removeClass("black_on");
      $("body").removeClass("stop_scroll");
      $(".second_items").css("display", "none");
      $(".subtitle").css("color", "#1d2b98");
      $(".subtitle").css("backgroundColor", "#fff");
      $(".second_item > a").css("borderBottom", "none");
      $("+.header_menu_area", this).stop().fadeOut(100);
    }
  );
  $(".header_menu_area").hover(
    function (e) {
      $(bFilter).addClass("black_on");
      $("body").addClass("stop_scroll");
      $(this).stop().fadeIn(100);
    },
    function (e) {
      $(bFilter).removeClass("black_on");
      $("body").removeClass("stop_scroll");
      $(".second_items").css("display", "none");
      $(".subtitle").css("color", "#1d2b98");
      $(".subtitle").css("backgroundColor", "#fff");
      $(".second_item > a").css("borderBottom", "none");
      $(this).stop().fadeOut(100);
    }
  );
  $(".subtitle").hover(function (e) {
    /* 첫메뉴 초기화 */
    $(".subtitle").css("color", "#1d2b98");
    $(".subtitle").css("backgroundColor", "#fff");
    /* 호버 표현 */
    $(this).css("color", "#fff");
    $(this).css("backgroundColor", "var(--pointColor)");
    /* 소제목 메뉴 갯수 측정 - 7개 이상이면 grid 변경 진행 예정*/
    let countingSubtitle = $(this).parent(".first_items");
    let cSubtitle = countingSubtitle.children(".subtitle").length;
    let counting = $("+.second_items", this).children();
    if (cSubtitle >= 7) {
      $(".second_items").css("display", "none");
      if (counting.length > 5) {
        /* 이중 메뉴가 5개 초과면 grid */
        $("+.second_items", this).css("display", "grid");
        $("+.second_items", this).addClass("over_seven");
      } else {
        /* 5개 이하면 일반 block */
        $("+.second_items", this).css("display", "grid");
        $("+.second_items", this).addClass("less_seven");
      }
    } else {
      /* 소제목 갯수가 적을 때이중메뉴 표현 */
      $(".second_items").css("display", "none");
      if (counting.length > 5) {
        /* 이중 메뉴가 5개 초과면 grid */
        $("+.second_items", this).css("display", "grid");
        $("+.second_items", this).addClass("item_grid");
      } else {
        /* 5개 이하면 일반 block */
        $("+.second_items", this).css("display", "block");
      }
    }
    /* 소제목 갯수가 많을 때 이중 메뉴 표현 */
    $(".second_item").hover(function (e) {
      $(".second_item > a").removeClass("liner");
      $("a", this).addClass("liner");
    });
  });
} else {
  $("#gnb").off("mouseenter mouseleave");
  $("#gnb").css("display", "none");
  $(".header_menu_area").off("mouseenter mouseleave");
  $(".subtitle").off("mouseenter mouseleave");
  $(".gnb_first_menu_item").off("mouseenter mouseleave");
  $(".second_item").off("mouseenter mouseleave");
  /* 햄버거 클릭 시 */
  $("#hamburger").click(function (e) {
    if ($(this).hasClass("clicked") == true) {
      $(this).removeClass("clicked");
    } else {
      $(this).addClass("clicked");
    }
    $(".gnb_first_menu_item").removeClass("menu_clicked");
    $(".header_menu_area").stop().slideUp();
    // $(this).toggleClass("clicked");
    $("+.gnb > #gnb", this).stop().fadeToggle(450);
    $(bFilter).toggleClass("black_on");
    $("body").toggleClass("stop_scroll");
  });
  $(".gnb_first_menu_item").click(function (e) {
    resLength = doc.getElementsByTagName("body")[0].clientWidth;
    if (resLength < 768) {
      $(".gnb_first_menu_item").removeClass("menu_clicked");
      $(this).addClass("menu_clicked");
      $(".header_menu_area").stop().slideUp();
      $("+.header_menu_area", this).stop().slideToggle(350);
    }
  });
  console.log("@media on");
}
