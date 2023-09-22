import React from 'react'
import {
  Link,
  NavLink,
} from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <div className='header_inner inner'>
        <Link to="/" className='logo'>
          <img src={`${process.env.PUBLIC_URL}/img/danielstruth.gif`} alt="로고" />
        </Link>
        <nav>
          <Link to="/" >Main</Link>
          <Link to="/Login" >Login</Link>
          <Link to="/Shop" >Shop</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header