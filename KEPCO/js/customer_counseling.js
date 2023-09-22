//   resLength = doc.getElementsByTagName("body")[0].clientWidth;
const resMenu = document.querySelector(".for_open"),
  resMenuSecond = doc.getElementById("res_second_menu"),
  insideResMenu = doc.getElementById("ombusman"),
  insideResMenuChild = doc.getElementById("res_third_menu"),
  lnbFriend1 = doc.getElementsByClassName("customer_sub_menu")[0],
  lnbFriend2 = doc.getElementsByClassName("customer_sub_menu")[1],
  menuPC = doc.getElementsByClassName("accordian"),
  menuPCSub = doc.querySelectorAll(".customer_sub_menu"),
  doNotOut = doc.querySelector(".counseling_menu"),
  menuPC2 = doc.getElementById("kepco_ombusman"),
  menuPCSub2 = doc.querySelector(".sub_menu_second");
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
function resetPCLnb() {
  menuPCSub2.classList.remove("slider_pc_up");
  menuPCSub2.classList.remove("slider_pc_down");
  lnbFriend1.classList.remove("slider_pc_up");
  lnbFriend1.classList.remove("slider_pc_down");
  lnbFriend2.classList.remove("slider_pc_up");
  lnbFriend2.classList.remove("slider_pc_down");
  for (i = 0; i < menuPC.length; i++) {
    menuPC[i].style.backgroundColor = "#fff";
  }
}
function resetModal() {
  modal.classList.remove("on");
  personalRadio.checked = true;
  checkboxCancel();
}
// 로드 시 초기화
window.onload = function () {
  resLength = doc.getElementsByTagName("body")[0].clientWidth;
  if (resLength < 768) {
    resetLnb();
    resetModal();
  } else {
    resetPCLnb();
    resetModal();
  }
};
// window.resize 초기화 (위와 거의 동일)
window.addEventListener("resize", function (e) {
  resetLnb();
  resetPCLnb();
  resetModal();
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
// 메뉴 열기 함수
for (i = 0; i < menuPC.length; i++) {
  menuPC[i].addEventListener("mouseenter", function (e) {
    e.target.style.backgroundColor = "#e7e8f0";
    let willOpened = e.target.nextElementSibling;
    willOpened.classList.add("slider_pc_down");
    willOpened.classList.remove("slider_pc_up");
  });
}
menuPC2.addEventListener("mouseenter", function (e) {
  let classContain = menuPCSub2.classList.contains("slider_pc_down");
  if (classContain == true) {
    menuPCSub2.classList.remove("slider_pc_up");
    menuPCSub2.classList.remove("slider_pc_down");
    menuPCSub2.classList.add("slider_pc_up");
  } else {
    menuPCSub2.classList.add("slider_pc_down");
    menuPCSub2.classList.remove("slider_pc_up");
  }
});
menuPCSub2.addEventListener("mouseleave", function (e) {
  menuPCSub2.classList.remove("slider_pc_up");
  menuPCSub2.classList.remove("slider_pc_down");
  menuPCSub2.classList.add("slider_pc_up");
  // lnbFriend1.classList.remove("slider_pc_down");
  // lnbFriend1.classList.remove("slider_pc_up");
  // lnbFriend1.classList.add("slider_pc_up");
  // menuPC[0].style.backgroundColor = "#fff";
});
// 메뉴 닫기 함수
lnbFriend2.addEventListener("mouseleave", function (e) {
  e.target.classList.remove("slider_pc_up");
  e.target.classList.remove("slider_pc_down");
  e.target.classList.add("slider_pc_up");
  menuPC[1].style.backgroundColor = "#fff";
});
lnbFriend1.addEventListener("mouseenter", function (e) {
  let classContain = menuPCSub2.classList.contains("slider_pc_down");
  if (classContain == true) {
    menuPCSub2.classList.remove("slider_pc_down");
    menuPCSub2.classList.remove("slider_pc_up");
    menuPCSub2.classList.add("slider_pc_up");
  }
});
lnbFriend1.addEventListener("mouseleave", function (e) {
  const classContain = menuPCSub2.classList.contains("slider_pc_down");
  if (classContain == true) {
  } else {
    e.target.classList.remove("slider_pc_up");
    e.target.classList.remove("slider_pc_down");
    e.target.classList.add("slider_pc_up");
    menuPC[0].style.backgroundColor = "#fff";
  }
});
/* 글쓰기 모달창 처리 */
const modal = doc.querySelector(".modal");
const openModal = doc.querySelector(".write_post");
const closeModal = doc.querySelector("#close_modal");
const personalRadio = doc.querySelector("#personal + label");
const companyRadio = doc.querySelector("#company + label");
openModal.addEventListener("click", function (e) {
  let classConfirm = modal.classList.contains("on");
  console.log(classConfirm);
  if (classConfirm == false) {
    modal.classList.remove("on");
    modal.classList.add("on");
  } else {
    modal.classList.remove("on");
    personalRadio.checked = true;
  }
});
closeModal.addEventListener("click", function (e) {
  modal.classList.remove("on");
  personalRadio.checked = true;
  checkboxCancel();
});
// 체크박스 해제처리
function checkboxCancel() {
  const checkbox = doc.querySelector("#more_over");
  console.log(checkbox);
  checkbox.checked = false;
}
companyRadio.addEventListener("click", function (e) {
  checkboxCancel();
});
