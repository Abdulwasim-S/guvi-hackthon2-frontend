import React from 'react'
import { useNavigate } from 'react-router'

const BasePage = () => {
    const navTo=useNavigate();
  return (
    <header>
        <button className='btn btn-success' type='submit' onClick={()=>navTo('login')}>Admin Login</button>
    </header>
  )
}

export default BasePage