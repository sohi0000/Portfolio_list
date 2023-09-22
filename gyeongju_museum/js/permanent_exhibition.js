let tabMenu = document.querySelectorAll(".exhibition_tab_btn a");
let tabContent = document.querySelectorAll(".exhibition_box");
let tabBorder = document.querySelector(".tab_border"); 
// 탭메뉴
tabMenu.forEach(function(item, index){
  item.addEventListener("click", (x)=>{
    x.preventDefault();
    showcontent(index);
    addClass(index);
    underLine(index);
  })
});
// 콘텐츠 보이고 숨기기
function showcontent(num){
  tabContent.forEach(function(item){
    item.style.display = "none"
  });
  tabContent[num].style.display = "grid"
}
// 메뉴 클릭시 메뉴 active 추가
function addClass(num){
  tabMenu.forEach((item)=>{
    item.classList.remove("active");
  });
  tabMenu[num].classList.add("active");
}
// 따라다니는 언더바
function underLine(num){
  tabBorder.style.left = "0"
  let tabLeft = tabMenu[num].offsetLeft;
  tabBorder.style.left = tabLeft + "px";
}
// 모달창
// 변수지정
let floorPlan = document.querySelectorAll(".exhibition_floor_plan_img img"); // 도면 img
let modalWrap = document.querySelector(".modal_wrap"); // 모달창
let modalCloseBtn = document.querySelector(".modal_close"); // 엑스
let modalImg = document.querySelector(".modal_img img"); // 바뀌는 이미지
let floorTextBox = document.querySelectorAll(".floor_explanation .floor_text"); // floor text
let floorLocation = document.querySelectorAll(".modal_img .floor_location") //floor_location
/* 도면 클릭시 모달창 */
floorPlan.forEach(function(item, idx){
  item.addEventListener("click", ()=>{
    modalWrap.classList.add("open");
    floorplanImg(item);
    floorText(idx);
    floorIconShow(idx);
  });
})
// 모달창 닫기
modalCloseBtn.addEventListener("click", ()=>{
  modalWrap.classList.remove("open");
  floorTextRemoveClass();
});
// 이미지 불러오기
function floorplanImg(item){
  let newImg = item.getAttribute("data-img");
  modalImg.setAttribute("src", newImg);
}
// floor text 뜨게 하기
function floorText(item){
  floorTextBox.forEach((num)=>{
    num.classList.remove("active");
  });
  floorTextBox[item].classList.add("active");
}
// floor 도면 위 아이콘 뜨게 하기
function floorIconShow(item){
  floorLocation.forEach((num)=>{
    num.classList.remove("active");
  });
  floorLocation[item].classList.add("active");
}

// floor plan 클릭 효과
// 변수지정
let floorLocationIcon = document.querySelectorAll(".floor_location i"); // floor_location i
let floorTextBtn = document.querySelectorAll(".floor_text p"); // floor_text p 
let floorTextBtnIcon = document.querySelectorAll(".floor_text p i"); // floor_text p i

// floor_location i 눌렀을 때
floorLocationIcon.forEach((item, idx)=>{
  item.addEventListener("click", ()=>{
    floorTextAddClass(idx);
  });
});
// floor_text 반응
function floorTextAddClass(num){
  floorTextBtn.forEach((item, idx)=>{
    item.classList.remove("active");
    floorLocationIcon[idx].classList.remove("active");
  });
  floorTextBtn[num].classList.add("active");
  floorLocationIcon[num].classList.add("active");
}
// floor_text p 눌렀을 때
floorTextBtn.forEach((item, idx)=>{
  item.addEventListener("click", ()=>{
    floorLocationAddClass(idx);
  });
});
// floor_location 반응
function floorLocationAddClass(num){
  floorLocationIcon.forEach((item, idx)=>{
    item.classList.remove("active");
    floorTextBtn[idx].classList.remove("active");
  });
  floorLocationIcon[num].classList.add("active");
  floorTextBtn[num].classList.add("active");
}
// floor 엑스 눌렀을 때 다 닫기
function floorTextRemoveClass(){
  floorTextBtn.forEach((item, idx)=>{
    item.classList.remove("active");
    floorLocationIcon[idx].classList.remove("active");
  });
}