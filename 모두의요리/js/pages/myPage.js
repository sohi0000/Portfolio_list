import { myData } from "../mock/mockMyPage.js";

let menuList = document.querySelectorAll('.sideMenu li');
let content = document.querySelector('.content');

/* userInfo */
let userInfo = document.querySelector('.userInfo');

if (myData) {
  userInfo.innerHTML = myData.map(item => `
    <div class="userImg">
      <img src="/img/icon/userB.png" alt="user img">
    </div>
    <div class="info">
      <div class="flex">
        <span class="userName">${item.userName}</span>
      </div>
      <p>${item.userDesc}</p>
    </div>
    <div class="recipeSub flex">
      <div class="flexCenter flexCol line">
        <p>레시피</p>
        <p class="count">${item.myRecipe.length}</p>
      </div>
      <div class="flexCenter flexCol">
        <p>구독자</p>
        <p class="count">${item.subscribers.length}</p>
      </div>
    </div>
  `).join('');
}


/* data-page */
document.addEventListener('DOMContentLoaded', ()=>{
  
  function pageLoad(page){
    fetch(`/pages/myPage/${page}.html`)
      .then(res=>{
        if (!res.ok) throw new Error('페이지 없음');
        return res.text();
      })
      .then(data=>{
        content.innerHTML = data;
        pageScript(page);
      })
      .catch(()=>{
        content.innerHTML = '페이지를 찾을 수 없습니다.';
      });

      /* menu active */
      menuList.forEach(item=>{
        item.classList.remove('active');
      });
      document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
  }

  /* page Script */
  function pageScript(page) {
    if (page === 'myRecipe') {

      let titleNum1 = document.querySelector('.myPageTitle .number');
      titleNum1.innerHTML = `${myData[0].myRecipe.length}`;
      
      let myRecipeContent = document.querySelector('.myRecipeContent ul');
      
      function myRecipeFunc(list){
        myRecipeContent.innerHTML = list.map(item => `
        <li class="recipeListPage" data-id="${item.id}">
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
          </div>
        </li>

        `).join('');
      }

        /* pagination */
        $('#myRecipePagination').pagination({
          dataSource: myData[0].myRecipe,
          pageSize: 6,
          callback: function(pageData) {
            myRecipeFunc(pageData);
          }
        });

    } else if (page === 'subRecipe') {

      let titleNum2 = document.querySelector('.myPageTitle .number');
      titleNum2.innerHTML = `${myData[0].subRecipe.length}`;

      let subRecipeContent = document.querySelector('.subRecipeContent ul');
      
      function subRecipeFunc(list){
        subRecipeContent.innerHTML = list.map(item => `
        <li class="recipeListPage" data-id="${item.id}">
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

        /* pagination */
        $('#subRecipePagination').pagination({
          dataSource: myData[0].subRecipe,
          pageSize: 6,
          callback: function(pageData) {
            subRecipeFunc(pageData);
          }
        });

    } else if (page === 'subscribers') {

      let titleNum3 = document.querySelector('.myPageTitle .number');
      titleNum3.innerHTML = `${myData[0].subscribers.length}`;

      let subscribersContent = document.querySelector('.subscribersContent ul');
      
      function subscribersFunc(list){
        subscribersContent.innerHTML = list.map(item => `
        <li class="subscribersList flex"> 
          <img src="/img/icon/userB.png" alt="user img">
          <span>${item}</span>
        </li>
        `).join('');
      }

        /* pagination */
        $('#subscribersPagination').pagination({
          dataSource: myData[0].subscribers,
          pageSize: 10,
          callback: function(pageData) {
            subscribersFunc(pageData);
          }
        });

    } else if (page === 'myPost') {

      let titleNum4 = document.querySelector('.myPageTitle .number');
      titleNum4.innerHTML = `${myData[0].myPost.length}`;

      let myPostContent = document.querySelector('.myPostContent ul');
      
      function myPostFunc(list){
        myPostContent.innerHTML = list.map(item => `
        <li class="tableList flex">
          <p class="postTitle">
            <span>${item.title}</span>
            <span class="comment">
              ${item.comment ? "(" + item.comment + ")" : ''}
            </span>
          </p>
          <p class="postDate">${item.date}</p>
          <p class="postView">${item.view}</p>
        </li>
        `).join('');
      }

        /* pagination */
        $('#myPostPagination').pagination({
          dataSource: myData[0].myPost,
          pageSize: 8,
          callback: function(pageData) {
            myPostFunc(pageData);
          }
        });

    } else if (page === 'myAsk') {

      let titleNum5 = document.querySelector('.myPageTitle .number');
      titleNum5.innerHTML = `${myData[0].myAsk.length}`;

      let myAskContent = document.querySelector('.myAskContent ul');
      
      function myAskFunc(list){
        myAskContent.innerHTML = list.map(item => `
        <li class="tableList flex">
          <p class="postNum">${item.id + 1}</p>
          <p class="postTitle">
            ${item.lock ? '<img src="/img/icon/lock.png" alt="lock icon">' : ''}
            <span>${item.title}</span>
          </p>
          <p class="postDate">${item.date}</p>
          <p class="postStatus ${item.status ? 'active' : ''}">
            ${item.status ? '답변완료' : '대기중'}
          </p>
        </li>
        `).join('');
      }

        /* pagination */
        $('#myAskPagination').pagination({
          dataSource: myData[0].myAsk,
          pageSize: 8,
          callback: function(pageData) {
            myAskFunc(pageData);
          }
        });

    } else if (page === 'myNoti') {
      let selectBtn = document.querySelector('.selectBtn');
      let selectList = document.querySelector('.selectWrap ul');
      let selectSpan = document.querySelector('.selectBtn span');
      let basicOption = document.querySelector('.selectListBtn');
      
      selectSpan.textContent = basicOption.textContent;

      selectBtn.addEventListener('click', ()=>{
        selectList.classList.toggle('active')
      });

      let selectListBtn = document.querySelectorAll('.selectListBtn');

      selectListBtn.forEach((el)=>{
        el.addEventListener('click', (e)=>{
          selectSpan.textContent = e.target.textContent;
          selectList.classList.remove('active')
        });
      });

      let myNotiContent = document.querySelector('.myNotiContent ul');
      
      function myNotiFunc(list){
        myNotiContent.innerHTML = list.map(item => `
        <li class="tableList flex">
          <p class="postDivision">${item.division}</p>
          <p class="postContent">${item.contents}</p>
          <p class="postDate">${item.date}</p>
          <p class="postDel">
            <img src="/img/icon/delete1.png" alt="delete icon">
          </p>
        </li>
        `).join('');
      }

      /* myNotiPagination */
      $('#myNotiPagination').pagination({
        dataSource: myData[0].myNoti,
        pageSize: 8,
        callback: function(pageData) {
          myNotiFunc(pageData);
        }
      });

    }
  }
  
  menuList.forEach(item=>{
    item.addEventListener('click', ()=>{
      let page = item.dataset.page;
      pageLoad(page);
    });
  });

  pageLoad('myRecipe');

});


