import React from 'react'
import './Navbar.css'
import Phone from '../../icons/phone'
import Visible from '../../icons/visible'
import Map from '../../icons/map'
import Location from '../../icons/location'
import {Link} from 'react-router-dom'

function Navbar() {

  return (
    <div className='navbar'>
      <div className="container">
        <div className='navbar_flex'>
          <div className='navbar_loc'>
          <Phone/>
            <h2 className='navbar_h2'> +998 77 207 97 98</h2>
          </div>
          <div className='navbar_loc'>
          <Location/> 
            <p className='navbar_p'>Manzil: Toshkent shahar, Chilonzor tumani, Nurxon ko'chasi 21-uy</p>
          </div>
          <div className='navbar_loc'>
          <Visible/>
            <h3 className='navbar_h3' id='visibility'> Zarif ko'ruvchilar uchun</h3>
          </div>
          <div className='navbar_loc'>
          <Map/>
          <Link className='link ' to={'/xarita'}>
            <h4 className='navbar_h4'>Sayt xaritasi</h4>
          </Link>
          </div>
          <button className='navbar_btn'>Uz</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar