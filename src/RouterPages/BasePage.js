import React from 'react'
import { Outlet} from 'react-router'
import { NavLink } from 'react-router-dom';
import ProductsPage from './ProductsPage';

const BasePage = () => {
  return (
    <>
    <header className='w-100 bg-dark p-2'>
      <div className='d-flex pt-2 align-items-center justify-content-between mx-3'>
      <h1 className='text-white '>RenTen</h1>
      <NavLink className='text-white' to='/login'>Admin Login</NavLink>
      </div>
    </header>
    <div className='container-fluid bg-secondary'>
    <h3 className='text-white pt-5 pb-4'>Take products for rent at affordable price</h3>
    <Outlet />
    </div>
    <ProductsPage/>

    <footer className='px-3 py-5 text-white bg-dark'>copyrights @ renten.pvt.ltd</footer>
    </>
  )
}

export default BasePage