let btn = document.querySelectorAll('.tab_menu a'), /* 탭메뉴의 a를 다 가져옴 = 버튼*/
  content=document.querySelectorAll('.tab_content > div'); /* 탭컨텐츠의 div를 다 가져옴 = desc*/
//ul li(버튼)를 클릭시
for(let i=0; i<btn.length;i++){ // btn이 3개. 차례대로 
  btn[i].addEventListener('click', function(e){
    e.preventDefault(); /* link 기본동작을 중지 a값 기본이 #해서 top으로 올라가는거라 기본으로 써줘야 편함*/
    let orgTarget = e.target.getAttribute('href'),//해당 요소의 속성 가져옴 (href 속성 가져옴)
        tabTarget = orgTarget.replace('#',''); //href 요소안에있는 #__의 값 들을 치환
    for(let a = 0; a<content.length; a++){
      content[a].style.display = 'none'; //desc 2개 none
    }
    document.getElementById(tabTarget).style.display='block';
    //href 속성의 #tab숫자 들을 불러서 화면에 보이게함
    for(let j = 0; j<btn.length; j++){
      btn[j].classList.remove('active'); //다른 버튼 누를때 active 제거
    }
    e.target.classList.add('active'); //e.target을 통해서 클릭된 a에 접근하여 active 클래스를 추가
    console.log(btn);
  });
}
document.getElementById('tab1').style.display='block';
//replace(searchValue, newValue) 문자열 치환

