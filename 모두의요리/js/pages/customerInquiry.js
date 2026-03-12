import { customer } from '../mock/mockCustomer.js';

let inquiryList = document.querySelector('.inquiryList ul');

function listPage(list) {
  inquiryList.innerHTML = list.map(item => `
    <li class="tableList flex" data-id="${item.id}">
      <p class="postNum">${item.id+1}</p>
      <p class="postTitle">${item.title}</p>
      <p class="postUser">${item.user}</p>
      <p class="postDate">${item.date}</p>
      <p class="postStatus ${item.response ? 'ans' : ''}">${item.response ? '답변완료' : '대기중'}</p>
    </li>
  `).join('');
}

$('#pagination').pagination({
  dataSource: customer,
  pageSize: 8,
  callback: function(pageData) {
    listPage(pageData);
  }
});

/* goDetail */
function goDetail(id) {
  location.href = `inquiryDetail.html?id=${id}`;
}

let inquiryCon = document.querySelector('.inquiryList ul');

inquiryCon.addEventListener('click', (e) => {
  let item = e.target.closest('.tableList');
  if (!item) return;

  let id = item.dataset.id;
  goDetail(id);
});