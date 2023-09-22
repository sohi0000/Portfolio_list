import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_inner inner'>
        <nav>
          <Link>회사소개</Link>
          <Link>이용약관</Link>
          <Link>개인정보처리방침</Link>
          <Link>이용안내</Link>
          <Link>기업 구매 안내</Link>
        </nav>
        <div className='footer_infomation'>
          <img className='footer_logo' src={`${process.env.PUBLIC_URL}/img/danielstruth.gif`} alt='로고'/>
          <div className='footer_infomation_text'>
            <p>
            주식회사 디엠코스메틱스 코리아 서울특별시 중구 동호로 8길 24, 포스에비뉴 101호
            </p>
            <p>
            대표 : LEEDANIELNCHANG  사업자등록번호 : 158-86-02223 <Link>사업자번호조회 ▶ </Link>   통신판매업신고번호: 제 2021-서울성동-01928 호  개인정보관리자 : LEEDANIELNCHANG
            </p>
            <p>
            대표번호 : 02-466-7941 팩스번호 : 02-467-7941  메일 : sales@dmcosmetics.co
            </p>
            <p>
            Copyright. 2022. DM Cosmetics Korea INC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer