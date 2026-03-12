import { data } from "../mock/mockProducts.js";

/* URL에서 id 가져오기 */

/* URLSearchParams 인터페이스는 URL의 쿼리 문자열을 대상으로 작업할 수 있는 유틸리티 메서드 */
let params = new URLSearchParams(location.search);
/* Number() 함수를 사용하여 숫자로 바꿀 수 있다. */
let id = Number(params.get("id"));

/* 해당 상품 찾기 */
let product = data.find(item => item.id === id);

// console.log(product)

/* category 렌더링 */
if (product) {
  document.querySelector('.category .item').innerHTML = `
    ${product.title}
  `
}

/* food 렌더링 */
if (product) {
  document.querySelector("#detail").innerHTML = `
  <div class="foodImg">
    <img src="${product.img}" alt="food img">
  </div>
  <div class="foodDesc flexBetween flexCol">
    <p class="short">${product.text}</p>
    <div class="foodName flex">
      <p>${product.title}</p>
      <span class="bookmark ${product.bookmark ? 'active' : ''}"></span>
    </div>
    <div class="user flexBetween flexCol">
      <div class="userInfo flex">
        <div class="pic">
          <img src="/img/icon/user.png" alt="user icon">
        </div>
        <p class="userName">${product.userName}</p>
        <button class="subBtn">구독</button>
      </div>
      <div class="reactionBtn flex">
        <button class="like flexCenter">
          <img src="/img/icon/loveC.png" alt="heart icon">
        </button>
        <button class="share flexCenter">
          <img src="/img/icon/share.png" alt="share icon">
        </button>
      </div>
      <div class="reaction flex">
        <span class="viewIcon"><img src="/img/icon/viewC.png" alt="view icon"></span>
        <span class="view">${product.view}</span>
        <span class="heartIcon"><img src="/img/icon/loveC.png" alt="heart icon"></span>
        <span class="heart">${product.heart}</span>
        <span class="chatIcon"><img src="/img/icon/chatC.png" alt="chat cion"></span>
        <span class="chat">${product.chat}</span>
      </div>
    </div>
    <div class="recipeIntro">
      계란은 단백질이 풍부하고 칼로리가 낮아 다이어트에 좋은 식품! 또 계란 노른자에는 루테인 성분이 풍부하여 눈 건강에도 도움이 되며 탈모 예방에도 효과적이라고 해요. 이렇게 몸에 좋은 두 가지 재료를 함께 볶아낸다면 얼마나 맛있게요? ​시금치 계란 볶음 레시피 바로 시작할게요.
    </div>
    <div class="recipeInfo">
      <p class="title2Text">조리 정보</p>
      <div class="flex">
        <div class="standard flex">
          <img src="/img/icon/cook_1.png" alt="cook icon">
          <p class="flexCol">
            <span class="small">기준</span>
            <span>4인분</span>
          </p>
        </div>
        <div class="cookingTime flex">
          <img src="/img/icon/cook_2.png" alt="cook icon">
          <p class="flexCol">
            <span class="small">조리 시간</span>
            <span>30분 이내</span>
          </p>
        </div>
        <div class="diffLevel flex">
          <img src="/img/icon/cook_3.png" alt="cook icon">
          <p class="flexCol">
            <span class="small">난이도</span>
            <span class="star">
              <span class="color"></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  `;
}

/* bookmark */
let bookmark = document.querySelector('.bookmark');

bookmark.addEventListener('click', ()=>{
  bookmark.classList.toggle('active')
});