import { MailFilled, WhatsAppOutlined } from '@ant-design/icons'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='bg-secondary d-flex flex-column justify-content-between'style={{height:"100vh"}}>
        <h1 className='bg-dark text-light p-3'>RenTen</h1>
        <div className='text-start m-5'>
            <h3>About</h3>
            <p className='text-light'>Renten is the product rental site. Our site is the one of the leading rental product selling page and we offer products at low cost with more added benifits.</p>
            <h3>Contact Us</h3>
            <p className='text-light'>If you are facing any issue or you need to know more about our website you can reach out through </p>
            <p className='text-primary'><WhatsAppOutlined/> <a href='https://api.whatsapp.com/send/?phone=%2B918778354776&text&type=phone_number&app_absent=0'>Contact Us</a></p>
            <p><MailFilled /> abdulwasimsmech@gmail.com</p>
        </div>
        <a className='text-white' href='/'>Return to home page</a>
        <footer className='px-3 py-5 text-white bg-dark'>copyrights @ renten.pvt.ltd</footer>
    </div>
  )
}

export default ContactUs