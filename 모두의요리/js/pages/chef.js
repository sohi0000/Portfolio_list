import { chafData } from '../mock/mockChefs.js';

let chefMenu = document.querySelector('.chefList ul');

function chefList(list) {
  chefMenu.innerHTML = list.map(item => `
    <li class="chefListPage" data-id="${item.id}">
          <a href="#none" class="chefImg">
            <img src="${item.img}" alt="chef image">
          </a>
          <a href="#none" class="chefName headlineText">${item.name}</a>
          <button class="footerText subBtn ${item.sub ? 'active' : ''}">
          ${item.sub ? '구독중' : '구독'}
          </button>
        </li>
    `).join('');
}
/* goChefDetail */
function goChefDetail(id) {
  location.href = `chefDetail.html?id=${id}`
}


chefMenu.addEventListener('click', (e)=>{

  let subBtn = e.target.closest('.subBtn');
  if (subBtn) {
    /* e.stopPropagation 는 상위 엘리먼트들로의 이벤트 전파를 중단 */
    e.stopPropagation();
    // 북마크 토글 처리
    subBtn.classList.toggle('active');
    if (subBtn.classList.contains('active')) {
      subBtn.innerHTML = '구독중'
    } else {
      subBtn.innerHTML = '구독'
    }
    /* return : 함수 본문에서 return 명령문에 도달하면 함수의 실행은 그 지점에서 중단 */
    return;
  }

  let item = e.target.closest('.chefListPage');
  if (!item) return;

  let id = item.dataset.id;
  goChefDetail(id);
});

/* pagination */
$('#pagination').pagination({
  dataSource: chafData,
  pageSize: 20,
  callback: function(pageData) {
    chefList(pageData);
  }
});

/* bestChef sub */
let subMark = document.querySelectorAll('.bestChef .subBtn');

subMark.forEach((el)=>{
  el.addEventListener('click', ()=>{
    el.classList.toggle('active');


    if (el.classList.contains('active')) {
      el.textContent = '구독중';
    } else {
      el.textContent = '구독';
    }
  });
});

/* chefTitle count */
let chefCount = document.querySelector('.chefCount');
let count = chafData.length;

chefCount.innerHTML = count;






