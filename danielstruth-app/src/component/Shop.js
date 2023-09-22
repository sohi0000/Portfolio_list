import ListCard from './ListCard';
import React, { useState } from 'react'

function Shop({data}) {

  let [dataList, setDataList] = useState(data);

  let oil = data.filter((item) => item.category === "oil");
  let hand = data.filter((item) => item.category === "hand");
  let difuser = data.filter((item) => item.category === "difuser");

  return (
    <div className='shop'>
      <div className='shop_inner inner'>
        <nav className='shop_category'>
          <button onClick={()=>{
            setDataList(data);
          }}>전체</button>
          <button onClick={()=>{
            setDataList(oil)
          }}>오일 퍼퓸</button>
          <button onClick={()=>{
            setDataList(hand)
          }}>핸드 퍼퓸</button>
          <button onClick={()=>{
            setDataList(difuser)
          }}>디퓨저</button>
        </nav>
        <div className='ShopList'>
          <ul className='listContainer'>
            {
              dataList.map((item)=>{
                return (
                  <li className='ShopListItem' key={item._id}>
                    <ListCard item={item} />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Shop