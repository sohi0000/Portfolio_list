import React from 'react'

function Login() {
  return (
    <div className='login'>
      <div className='login_inner inner'>
        <label>Email address</label>
        <input type="eamil" placeholder='Enter email' />
        <label>Password</label>
        <input type="password" placeholder='Password' />
        <input type="submit" value="Login" />
      </div>
    </div>
  )
}

export default Login