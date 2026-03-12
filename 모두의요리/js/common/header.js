fetch('/include/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    // ⭐ header가 DOM에 추가된 후 실행
    initHeader();
  })
  .catch(error => console.error('Header 불러오기 실패:', error));



function initHeader() {
  /* account */
  let accountMenu = document.querySelector('.accountMenu');
  let userName = document.querySelector('.userName');

  userName.addEventListener('click', ()=>{
    accountMenu.classList.toggle('active');
  });

  /* notiList */
  let notiList = document.querySelector('.notiList');
  let noti = document.querySelector('.notiIcon');

  noti.addEventListener('click', ()=>{
    notiList.classList.toggle('active');
  });
  

  /* login */
  let logout = document.querySelector('.logout');
  let login = document.querySelector('.login');
  let loginBtn =  document.querySelector('.loginBtn');
  let logoutBtn =  document.querySelector('.logoutBtn');

  loginBtn.addEventListener('click', ()=>{
    logout.classList.remove('active');
    login.classList.add('active');
  });
  logoutBtn.addEventListener('click', ()=>{
    logout.classList.add('active');
    login.classList.remove('active');
    accountMenu.classList.remove('active');
    notiList.classList.remove('active');
  });
}
