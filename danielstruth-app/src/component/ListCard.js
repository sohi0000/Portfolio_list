import React from 'react'

function ListCard({item}) {
  return (
    <div className='ListCard'>
      <img src={`${process.env.PUBLIC_URL}/img/${item.img}`} alt={item.title} />
      <div className='text'>
        <p className='title'>{item.title}</p>
        <p className='price'>{item.price}원</p>
      </div>
      <p></p>
    </div>
  )
}

export default ListCard