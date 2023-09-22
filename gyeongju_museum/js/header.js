let navMenu = document.querySelector(".nav"),
    slidedownMenuArea = document.querySelector(".slidedown_menu_area"),
    menuBtn = document.querySelector(".menu_btn"),
    menuBg = document.querySelector(".menu_bg");

/* 반응형 */
function windowResize() {
  let windowSize = window.innerWidth;

  if (windowSize >= 1025) {
    /* slidedown_menu_area */
    // 리셋
    slidedownMenuArea.style.height = "0";
    navMenu.removeEventListener("click", toggleMenu);
    navMenu.removeEventListener("mouseenter", showMenu);
    slidedownMenuArea.removeEventListener("mouseleave", hideMenu);

    navMenu.addEventListener("mouseenter", showMenu);
    slidedownMenuArea.addEventListener("mouseleave", hideMenu);

  } else if (windowSize >= 787 && windowSize <= 1024) {
    /* slidedown_menu_area */
    // 리셋
    slidedownMenuArea.style.height = "0";
    navMenu.removeEventListener("click", toggleMenu);
    navMenu.removeEventListener("mouseenter", showMenu);
    slidedownMenuArea.removeEventListener("mouseleave", hideMenu);

    navMenu.addEventListener("click", toggleMenu);

  }
  else if (windowSize <= 786) {
    /* slidedown_menu_area */
    // 리셋
    slidedownMenuArea.style.height = "0";
    navMenu.removeEventListener("click", toggleMenu);
    navMenu.removeEventListener("mouseenter", showMenu);
    slidedownMenuArea.removeEventListener("mouseleave", hideMenu);

    slidedownMenuArea.style.height = "100vh";
    menuBtn.addEventListener("click", toggleMobileMenu);

  }
}

windowResize();

window.addEventListener('resize', windowResize);

/* 데스크탑 메뉴 */
function showMenu() {
  slidedownMenuArea.style.height = "350px";
  // 검색창 닫힘
  searchArea.style.height = "0";
}

function hideMenu() {
  slidedownMenuArea.style.height = "0";
}

/* 태블릿 메뉴 */
function toggleMenu() {
  if (slidedownMenuArea.style.height !== "430px") {
    slidedownMenuArea.style.height = "430px";
    menuBg.classList.add("fade");
    // 검색창 닫힘
    searchArea.style.height = "0";
  } else {
    slidedownMenuArea.style.height = "0";
    menuBg.classList.remove("fade");
  }
}

/* 모바일 메뉴 */
function toggleMobileMenu() {
  slidedownMenuArea.style.height = "100vh";
  let hasActive = slidedownMenuArea.classList.contains("active");
  if (!hasActive) {
    // 검색창 닫힘
    searchArea.style.height = "0";

    slidedownMenuArea.classList.add("active");
    menuBtn.classList.add("active");
    menuBg.classList.add("fade");
    
  } else {
    slidedownMenuArea.classList.remove("active");
    menuBtn.classList.remove("active");
    menuBg.classList.remove("fade");
  }
}

/* menuBg 누르면 닫힘 */
function menuBgTabClose() {
  menuBg.classList.remove("fade");
  menuBtn.classList.remove("active");

  //검색창
  searchArea.style.height = "0";
  let windowSize = window.innerWidth;
  if (windowSize >= 787) {
    slidedownMenuArea.style.height = "0";
  } else if (windowSize <= 786) {
    slidedownMenuArea.classList.remove("active");
  }
}
menuBg.addEventListener("click", menuBgTabClose);

/* 모바일 2차메뉴 */
let mobileslidedownMenu = document.querySelectorAll(".slidedown_menu > ul > li > a"),
    mobileSubmenuList = document.querySelectorAll(".submenu"),
    submenuCount = mobileslidedownMenu.length;

for (let i = 0; i < submenuCount; i++) {
  mobileslidedownMenu[i].addEventListener("click", function(){
    for (let j = 0; j < submenuCount; j++) {
      mobileSubmenuList[j].classList.remove('active');
    }
    mobileSubmenuList[i].classList.add('active');
  });

}

/* 검색창 */
let searchIcon = document.querySelector(".gnb_area .search"),
    searchArea = document.querySelector(".search_area");
function searchToggleMenu() {
  hideMenu();
  
  let windowSize = window.innerWidth;
  if (windowSize >= 1025) {
    if (searchArea.style.height !== "250px") {
      searchArea.style.height = "250px";
      slidedownMenuArea.classList.remove("active");
      menuBtn.classList.remove("active");
    } else if (searchArea.style.height !== "0") {
      searchArea.style.height = "0";
    }

  } else if (windowSize >= 787 && windowSize <= 1024) {
    if (searchArea.style.height !== "250px") {
      searchArea.style.height = "250px";
      menuBg.classList.add("fade");
      slidedownMenuArea.classList.remove("active");
      menuBtn.classList.remove("active");
    } else if (searchArea.style.height !== "0") {
      searchArea.style.height = "0";
      menuBg.classList.remove("fade");
    }
  } else if (windowSize <= 786) {
    if (searchArea.style.height !== "200px") {
      searchArea.style.height = "200px";
      menuBg.classList.add("fade");
      slidedownMenuArea.classList.remove("active");
      menuBtn.classList.remove("active");
    } else if (searchArea.style.height !== "0") {
      searchArea.style.height = "0";
      menuBg.classList.remove("fade");
    }
  }
}
searchIcon.addEventListener("click", searchToggleMenu);