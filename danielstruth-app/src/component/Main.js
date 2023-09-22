import React from 'react'

function Main() {
  return (
    <div className='main'>
      <img src={`${process.env.PUBLIC_URL}/img/main.jpg`} alt="메인이미지" />
    </div>
  )
}

export default Main