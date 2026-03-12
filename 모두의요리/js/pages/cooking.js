/* iconMenu */
let iconMenu = document.querySelectorAll('.iconMenu li');

iconMenu.forEach((el)=>{
  el.addEventListener('click', ()=>{
    iconMenu.forEach((item)=>{
      item.classList.remove('active');
    });
    el.classList.toggle('active');
  });
});

/* cooklisdtpage */
import { data } from '../mock/mockProducts.js';

let cooklist = document.querySelector('.allDishes ul');

// console.log(data)

function listPage(list) {
  cooklist.innerHTML = list.map(item => `
  <li class="cooklistPage" data-id="${item.id}">
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
  </li>
`).join('');
}

/* goDetail */
function goDetail(id) {
  location.href = `detail.html?id=${id}`;
}

cooklist.addEventListener('click', (e) => {
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
  let item = e.target.closest('.cooklistPage');
  if (!item) return;

  let id = item.dataset.id;
  goDetail(id);
});


/* pagination */
$('#pagination').pagination({
  dataSource: data,
  pageSize: 16,
  callback: function(pageData) {
    listPage(pageData);
  }
});
