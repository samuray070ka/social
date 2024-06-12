import React from 'react'
import '../navbar/Navbar.css'
import ArrowBottom from '../../icons/arrowBottom'
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import {Link} from "react-router-dom"
function NavbarBottom() {
  return (
    <div className='navbar_bottom'>
        <div className="container">
              {/* <ul className=' collaction'>
                <Link to={'/'} className='link'>
      <img className=' banner_img' src={homeImgOne} alt="" />
                </Link>
                <Link to={'/ijtimoiy'} className='link'>
                  <li className='item'><ArrowBottom/> Ijtimoiy inspeksiya</li>
                </Link>
                <Link to={'/faoliyat'} className='link'>
                  <li className='item'><ArrowBottom/> Faoliyat</li>
                </Link>
                <Link to={'/normativ'} className='link'>
                  <li className='item'><ArrowBottom/>Normativ hujjatlar</li>
                </Link>
                <Link to={'/jamoatchilik'} className='link'>
                  <li className='item'><ArrowBottom/>Jamoatchilik</li>
                </Link>
                <Link to={'/statistica'} className='link'>
                  <li className='item'><ArrowBottom/>Statistika</li>
                </Link>
                <Link to={'/ochiq'} className='link'>
                  <li className='item'><ArrowBottom/>Ochiq ma'lumotlar</li>
                </Link>
                <Link to={'/aloqa'} className='link'>
                  <li className='item'><ArrowBottom/>Aloqa</li>
                </Link>
              </ul> */}
      </div>
    </div>
  )
}

export default NavbarBottom