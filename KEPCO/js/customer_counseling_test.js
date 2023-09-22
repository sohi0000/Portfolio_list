//   resLength = doc.getElementsByTagName("body")[0].clientWidth;
const resMenu = document.querySelector(".for_open");
const resMenuSecond = doc.getElementById("res_second_menu");
const insideResMenu = doc.getElementById("ombusman");
const insideResMenuChild = doc.getElementById("res_third_menu");
// 반응형용 메뉴 스위치
let menuSwitch1 = 0; // lnb 초기
let menuSwitch2 = 0; // lnb 세부 메뉴
// 초기화 함수
function resetLnb() {
  // 첫메뉴 초기화
  resMenuSecond.classList.remove("res_slide_down");
  resMenuSecond.classList.remove("res_slide_up");
  resMenuSecond.style.height = 0;
  resMenu.style.backgroundColor = "#fff";
  // 이중메뉴 초기화
  insideResMenuChild.classList.remove("res_slide_down");
  insideResMenuChild.classList.remove("res_slide_up");
  insideResMenuChild.style.height = 0;
  insideResMenu.style.backgroundColor = "#f3f4f8";
  menuSwitch1 = 0;
  menuSwitch2 = 0;
  return menuSwitch1, menuSwitch2;
}
function resetPCLnb() {}
// 로드 시 초기화
window.onload = function () {
  resLength = doc.getElementsByTagName("body")[0].clientWidth;
  if (resLength < 768) {
    resetLnb();
  } else {
    resetPCLnb();
  }
};
// window.resize 초기화 (위와 거의 동일)
window.addEventListener("resize", function (e) {
  resetLnb();
  resetPCLnb();
});
// 클릭 시 메뉴 오픈 (res_menu)
resMenu.addEventListener("click", function (e) {
  console.log("스위치1은 현재 " + menuSwitch1 + "입니다.");
  if (menuSwitch1 == 0) {
    resMenu.style.backgroundColor = "#f3f4f8";
    resMenuSecond.classList.add("res_slide_down");
    resMenuSecond.style.height = "fit-content";
    resMenuSecond.classList.remove("res_slide_up");
    menuSwitch1 = 1;
    return menuSwitch1;
  } else {
    resMenu.style.backgroundColor = "#fff";
    resMenuSecond.classList.remove("res_slide_down");
    insideResMenuChild.classList.remove("res_slide_up");
    insideResMenuChild.classList.add("res_slide_up");
    insideResMenuChild.style.height = "0";
    resMenuSecond.classList.add("res_slide_up");
    resMenuSecond.style.height = "fit-content";
    insideResMenu.style.backgroundColor = "#f3f4f8";
    menuSwitch1 = 0;
    menuSwitch2 = 0;
    return menuSwitch1, menuSwitch2;
  }
});
// 클릭 시 메뉴 오픈 (inside res Menu)
insideResMenu.addEventListener("click", function (e) {
  console.log("스위치2는 현재 " + menuSwitch2 + "입니다.");
  if (menuSwitch2 == 0) {
    insideResMenu.style.backgroundColor = "#fff";
    insideResMenuChild.classList.add("res_slide_down");
    insideResMenuChild.style.height = "fit-content";
    insideResMenuChild.classList.remove("res_slide_up");
    menuSwitch2 = 1;
    return menuSwitch2;
  } else {
    insideResMenu.style.backgroundColor = "#f3f4f8";
    insideResMenuChild.classList.remove("res_slide_down");
    insideResMenuChild.style.height = "fit-content";
    insideResMenuChild.classList.add("res_slide_up");
    menuSwitch2 = 0;
    return menuSwitch2;
  }
});
//호버시 메뉴 오픈 (PC)
/* 
메뉴 닫을 곳 지정
mouseover: sidebar / counseling_head / header
mouseout: window / inner / main
 */
const menuPC = doc.getElementsByClassName("accordian");
const menuPCSub = doc.querySelectorAll(".customer_sub_menu");
const doNotOut = doc.querySelector(".counseling_menu");
// 메뉴 열기 함수
for (i = 0; i < menuPC.length; i++) {
  menuPC[i].addEventListener("mouseenter", function (e) {
    e.target.style.backgroundColor = "#e7e8f0";
    let willOpened = e.target.nextElementSibling;
    willOpened.classList.add("slider_pc_down");
    willOpened.style.height = "350px";
    willOpened.classList.remove("slider_pc_up");
  });
}
// 메뉴 닫기 함수
function menuClosingPC() {
  // 메인 첫 메뉴 컬러 #fff / list 두가지 전부 close / 내부 메뉴도 close
  for (i = 0; i < menuPC.length; i++) {
    menuPC[i].style.backgroundColor = "#fff";
    let willClosed = e.target.nextElementSibling;
    willClosed.style.height = 0;
    // 만일 menu에 class가 있다면(true 반환 시) slide up 그게 아니면 단순 0처리
  }
}
// 메뉴 닫기 함수 객체
doNotOut.addEventListener("mouseout", function (e) {
  for (i = 0; i < menuPC.length; i++) {
    menuPC[i].style.backgroundColor = "#fff";
    let willClosed = menuPC[i].nextElementSibling;
    console.log(willClosed);
    // 만일 menu에 class가 있다면(true 반환 시) slide up 그게 아니면 단순 0처리
  }
  willOpened.classList.remove("slider_pc_up");
  willOpened.classList.remove("slider_pc_down");
  willClosed.style.height = 0;
});
