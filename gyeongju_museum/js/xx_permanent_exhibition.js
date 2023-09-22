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
let floorLocationIcon = document.querySelectorAll(".floor_location.active i"); // floor_location.active i
let floorTextBtn = document.querySelectorAll(".floor_text.active p"); // floor_text.active p 
let floorTextBtnIcon = document.querySelectorAll(".floor_text.active p i"); // floor_text.active p i


// floor icon을 누를 때
floorLocationIcon[0].addEventListener("click", (e)=>{
  numOneClick()
});

function numOneClick() {
  if(floorLocationIcon[0].classList.contains("num1")) {
    let floorOne = document.querySelector(".floor_01");
    let numOne = floorOne.querySelector(".num1");
    console.log(numOne);
    numOne.parentNode.classList.add("active");
  }
}
floorLocationIcon[1].addEventListener("click", (e)=>{
  numTwoClick()
});
function numTwoClick() {
  if(floorLocationIcon[1].classList.contains("num2")) {
    let floor = document.querySelector(".floor_01");
    let num = floor.querySelector(".num2");
    console.log(num);
    num.parentNode.classList.add("active");
  }
}



/* function thridClickAction(e){
  if(e.target.className === `num3`){
    그자식.classList.add(active);
  }

fkdjfkljalf.add이벤트리스너('click',function(){
  thridClickAction();
})
fkdjfkljalf.add이벤트리스너('click',thridClickAction)

} */

















// floor text에서 누를 때










// floor text에서 누를 시 floor icon에서 크기 커짐
