let label = document.querySelector(".label");
let label2 = document.querySelector(".label2");

// console.log(options);

let menu = document.querySelector(".moblie_menu .menu");
let subMenu = document.querySelector(".moblie_menu .sub_menu");
// 라벨을 클릭시 옵션 목록이 열림/닫힘
label.addEventListener("click", function(){
  if(label.classList.contains("active")) {
    label.classList.remove("active");
  } else {
    label.classList.add("active");
  }
  if(menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
});
label2.addEventListener("click", function(){
  if(label2.classList.contains("active")) {
    label2.classList.remove("active");
  } else {
    label2.classList.add("active");
  }
  if(subMenu.classList.contains("active")) {
    subMenu.classList.remove("active");
  } else {
    subMenu.classList.add("active");
  }
});


/* 
let options = document.querySelectorAll(".moblie_menu .menu li");
let options2 = document.querySelectorAll(".moblie_menu .sub_menu li");

let handleSelect = function(item){
  label.innerHTML = item.textContent;
  label.parentNode.classList.remove("active");
}
let handleSelect2 = function(item){
  label2.innerHTML = item.textContent;
  label2.parentNode.classList.remove("active");
}
 */
// 옵션 클릭시 클릭한 옵션을 넘김
/* 
options.forEach(function(option){
  option.addEventListener("click", function(){
    handleSelect(option);
    if (option.classList.contains("active")) {
      option.classList.remove("active");
    } else {
      option.classList.add("active");
    }
  })
})
options2.forEach(function(option2){
  option2.addEventListener("click", function(){
    handleSelect2(option2);
    if (option2.classList.contains("active")) {
      option2.classList.remove("active");
    } else {
      option2.classList.add("active");
    }
  })
})
 */
/* 
https://wazacs.tistory.com/34
코드 출처
*/