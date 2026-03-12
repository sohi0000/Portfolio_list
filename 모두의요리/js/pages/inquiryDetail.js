import { customer } from '../mock/mockCustomer.js';

let params = new URLSearchParams(location.search);

let id = Number(params.get("id"));

let inquiry = customer.find(item => item.id === id);

if (inquiry) {
  document.querySelector('.inquiry').innerHTML = `
  <div class="inquiryCon">
        <div class="title flexCenter">
          <p class="tag">가입 문의</p>
          <p class="inquiryTitle">${inquiry.title}</p>
          <p class="status ${inquiry.response ? 'ans' : ''}">${inquiry.response ? '답변완료' : '대기중'}</p>
        </div>
        <div class="postUser flexCenter">
          <p class="written">작성자</p>
          <p class="userName">${inquiry.user}</p>
          <p class="date">${inquiry.date}</p>
        </div>
        <div class="content">
          ${inquiry.content}
        </div>
      </div>
      <div class="responseCon ${inquiry.response ? 'active' : ''}">
        <p class="respondent">
          <span>${inquiry.respondent}</span>
          <span class="replyDate">${inquiry.replyDate}</span>
        </p>
        <p class="content">
          ${inquiry.response}
        </p>
      </div>
      <div class="btnList flexCenter">
        <button class="listBtn">목록</button>
        <button class="editBtn">수정</button>
        <button class="delBtn">삭제</button>
      </div>
  `;
}

let listBtn = document.querySelector('.listBtn');

listBtn.addEventListener('click', ()=> {
  location.href = "/pages/customerInquiry.html";
})