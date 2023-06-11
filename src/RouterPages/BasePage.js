import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom';

const BasePage = () => {
    const navTo=useNavigate();
    const[state,setState]=useState(true);
    function clicking(){
      setState(false);
      navTo('/productslist')
    }
  return (
    <>
    <header className='w-100 bg-dark p-2'>
      <div className='d-flex pt-2 align-items-center justify-content-between mx-3'>
      <h1 className='text-white '>RenTen</h1>
      <NavLink className='text-white' to='/login'>Admin Login</NavLink>
      </div>
    </header>
    <div className='container-fluid bg-secondary'>
    <h3 className='text-white pt-5'>Take products for rent at affordable price</h3>
    <Outlet />
    {state &&<div className='pb-3 pt-3' style={{height:"60vh"}}>
       <a className='text-white' onClick={()=>clicking()}>see products</a>
    </div>}
    </div>

    <footer className='px-3 py-5 text-white bg-dark'>copyrights @ renten.pvt.ltd</footer>
    </>
  )
}

export default BasePage