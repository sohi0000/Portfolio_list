/* toggleBtn */
// 버튼 지정해
let toggleBtn = document.querySelectorAll('.toggleBtn button');
let faqContent = document.querySelector('.faqContent');
let noticeContent = document.querySelector('.noticeContent');

toggleBtn.forEach((item)=>{
  item.addEventListener('click', ()=>{
    // button active 제거
    toggleBtn.forEach((otherItem)=>{
      otherItem.classList.remove('active');
    })

    // content active 제거
    faqContent.classList.remove('active');
    noticeContent.classList.remove('active');

    // button active 추가
    item.classList.add('active');

    let target = item.dataset.target;
    // 해당 콘텐츠 active 추가
    if(target==='faq'){
      faqContent.classList.add('active');
    } else if (target==='notice'){
      noticeContent.classList.add('active');
    }

  });
});

/* accordion */
let question = document.querySelectorAll('.faqContent ul li');

question.forEach((item)=>{
  item.addEventListener('click',()=>{
    let answer = item.querySelector('.answer');
    let ansOpen = answer.classList.contains('open');
    let arrowImg = item.querySelector('.downArrow');

    // 다른 거 다 닫힘
    question.forEach((otherItem)=>{
      let otherAnswer = otherItem.querySelector('.answer');
      let otherArrow = otherItem.querySelector('.downArrow');
        otherAnswer.style.height = '0px';
        otherAnswer.classList.remove('open');
        otherArrow.classList.remove('rotate');
    });
    
    // 누른 거 열림
    if (ansOpen) {
      answer.style.height= '0';
      answer.classList.remove('open');
      arrowImg.classList.remove('rotate');
    } else {
      answer.style.height = answer.scrollHeight + 'px';
      answer.classList.add('open');
      arrowImg.classList.add('rotate');
    }

  });
});

/* pagination */
let pagination = document.querySelectorAll('.pagination .number');

pagination.forEach((item)=>{
  item.addEventListener('click', ()=>{
    let numberActive = item.classList.contains('active');
    // 다른 거 다 active 뗌
    pagination.forEach((otherItem)=>{
      otherItem.classList.remove('active');
    });
    // 누른 거 active 붙임
    if(numberActive){
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
  });

});