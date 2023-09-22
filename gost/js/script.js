/* gototop */
let goToTop = document.querySelector(".gototop");
let docElem = document.documentElement,
    scrollAmount;

window.addEventListener("scroll", function(){
  scrollAmount = docElem.scrollTop;
  if(scrollAmount > 80) {
    goToTop.classList.add("visible");
  } else {
    goToTop.classList.remove("visible");
  }
});
goToTop.addEventListener("click", function(e){
  e.preventDefault();
  let scrollInterval = setInterval(function(){
    if(scrollAmount != 0) {
      window.scrollBy(0, -100);
    } else {
      clearInterval(scrollInterval);
    }
  }, 20);
});

/* menu */
let menuBtn = document.querySelector(".menu_btn");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", ()=>{
  if(!menu.classList.contains("active")){
    menu.classList.add("active");
    menuBtn.classList.add("xBtn");
  } else {
    menu.classList.remove("active");
    menuBtn.classList.remove("xBtn");
  }
});

/* skew */
let agencyImg = document.querySelector(".agency_img");
let agencyImgTop = agencyImg.offsetTop;

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY <= 700) {
    agencyImg.classList.add("skew");
  } else if (window.scrollY >= 800) {
    agencyImg.classList.remove("skew");
  }
});

/* cursor */
const cursorParent = document.getElementById('mouse-cursor');
const cursorChild = cursorParent.children[0];
window.addEventListener('mousemove', mousemove);

let scale = 1;
let stage = '';
let cursorX = 0, cursorY = 0;

function mousemove(e) {
  cursorX = e.pageX - cursorParent.offsetWidth / 2
  cursorY = e.pageY - cursorParent.offsetHeight / 2
  cursorParent.style.transform =
    `translate3d(${cursorX}px, ${cursorY}px, 0)`
    // console.log(cursorX, cursorY);

    switch (e.target.getAttribute('data-cursor')) {
      case 'link':
        if (stage === 'link') return
        scale = 3
        stage = 'link'
        break
      default:
        if (stage === '') return
        scale = 1
        stage = ''
        break
    }
    cursorChild.style.setProperty('--cursor-scale', scale)
}
