var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let smapleTest1 = document.querySelector('.smapleTest1');
let smapleTest2 = document.querySelector('.smapleTest2');
let smapleTest3 = document.querySelector('.smapleTest3');
let smapleTest4 = document.querySelector('.smapleTest4');

let smapleTest1Btn = document.querySelector('.smapleTest1 .smapleTest1Btn');
let smapleTest2BackBtn = document.querySelector('.smapleTest2 .smapleTest2BackBtn');
let smapleTest2Btn = document.querySelector('.smapleTest2 .smapleTest2Btn');
let smapleTest3Btn = document.querySelector('.smapleTest3 .smapleTest3Btn');
let homeBtn = document.querySelector('.smapleTest4 .homeBtn');
let smapleTest4Btn = document.querySelector('.smapleTest4 .smapleTest4Btn');

smapleTest1Btn.addEventListener('click', ()=>{
  smapleTest1.classList.remove('active');
  smapleTest2.classList.add('active');
});
smapleTest2BackBtn.addEventListener('click', ()=>{
  smapleTest2.classList.remove('active');
  smapleTest1.classList.add('active');
});
smapleTest2Btn.addEventListener('click', ()=>{
  smapleTest2.classList.remove('active');
  smapleTest3.classList.add('active');
});
smapleTest3Btn.addEventListener('click', ()=>{
  smapleTest3.classList.remove('active');
  smapleTest4.classList.add('active');
});
homeBtn.addEventListener('click', ()=>{
  location.href = '/main.html';
});
smapleTest4Btn.addEventListener('click', ()=>{
  smapleTest4.classList.remove('active');
  smapleTest1.classList.add('active');
});