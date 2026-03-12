import { chafData } from '../mock/mockChefs.js';

/* URLSearchParams 인터페이스는 URL의 쿼리 문자열을 대상으로 작업할 수 있는 유틸리티 메서드 */
let params = new URLSearchParams(location.search);
/* Number() 함수를 사용하여 숫자로 바꿀 수 있다. */
let id = Number(params.get("id"));

/* 해당 상품 찾기 */
let chef = chafData.find(item => item.id === id);

console.log(chef);

/* 렌더링 */
if (chef) {
  document.querySelector('.userInfo').innerHTML = `
    <div class="userImg">
        <img src="/img/icon/userB.png" alt="user img">
      </div>
      <div class="info">
        <div class="flex">
          <span class="userName">${chef.name}</span>
          <button class="subBtn ${chef.sub ? 'active' : ''}">
            ${chef.sub ? '구독중' : '구독'}
          </button>
        </div>
        <p>안녕하세요. 한식위주로 레시피 올려요. 아직 많이 부족합니다</p>
      </div>
      <div class="recipeSub flex">
        <div class="flexCenter flexCol line">
          <p>레시피</p>
          <p class="count">${chef.recipeCount}</p>
        </div>
        <div class="flexCenter flexCol">
          <p>구독자</p>
          <p class="count">${chef.subCount}</p>
        </div>
      </div>
  `
}

/* sub */
let subMark = document.querySelectorAll('.subBtn');

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

/* cooklisdtpage */
import { data } from '../mock/mockProducts.js';

let recipeCon = document.querySelector('.recipeCon');

// console.log(data)

function listPage(list) {
  recipeCon.innerHTML = list.map(item => `
  <div class="recipePage" data-id="${item.id}">
    <a href="#none">
      <img src="${item.img}" alt="food img">
      <span class="user flexBetween">
        <span class="userIcon"></span>
        <span class="userName">${item.userName}</span>
        <span class="reaction">
          <span class="viewIcon"></span>
          <span class="view">${item.view}</span>
          <span class="heartIcon"></span>
          <span class="heart">${item.heart}</span>
          <span class="chatIcon"></span>
          <span class="chat">${item.chat}</span>
        </span>
      </span>
    </a>

    <div class="flexBetween">
      <p class="flexCol">
        <span>${item.text}</span>
        <span class="headlineText">${item.title}</span>
      </p>
      <span class="bookmark ${item.bookmark ? 'active' : ''}"></span>
    </div>
  </div>
`).join('');
}

/* goDetail */
function goDetail(id) {
  location.href = `detail.html?id=${id}`;
}

recipeCon.addEventListener('click', (e) => {
  /* closest() 메서드는 주어진 CSS 선택자와 일치하는 요소를 찾을 때까지, 자기 자신을 포함해 위쪽(부모 방향, 문서 루트까지)으로 문서 트리를 순회합니다. */
  let bookmark = e.target.closest('.bookmark');
  if (bookmark) {
    /* e.stopPropagation 는 상위 엘리먼트들로의 이벤트 전파를 중단 */
    e.stopPropagation();
    // 북마크 토글 처리
    bookmark.classList.toggle('active');
    /* return : 함수 본문에서 return 명령문에 도달하면 함수의 실행은 그 지점에서 중단 */
    return;
  }

  let user = e.target.closest('.user');
  if (user) {
    e.stopPropagation();
    return;
  }

  /* 나머지 li 클릭 >> 상세페이지 이동 */
  let item = e.target.closest('.recipePage');
  if (!item) return;

  let id = item.dataset.id;
  goDetail(id);
});

/* pagination */
$('#pagination').pagination({
  dataSource: data,
  pageSize: 8,
  callback: function(pageData) {
    listPage(pageData);
  }
});