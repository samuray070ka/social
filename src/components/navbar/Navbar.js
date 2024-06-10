import React from 'react'
import './Navbar.css'
import {FaPhone} from 'react-icons/fa'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className='navbar_flex'>
            <h2 className='navbar_h2'>{}+998 77 207 97 98</h2>
            <p className='navbar_p'>{} Manzil: Toshkent shahar, Chilonzor tumani, Nurxon ko'chasi 21-uy</p>
            <h3 className='navbar_h3'>{} Zarif ko'ruvchilar uchun</h3>
            <h4 className='navbar_h4'>{} Sayt xaritasi</h4>
            <button className='navbar_btn'>Uz</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar