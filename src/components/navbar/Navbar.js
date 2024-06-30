import React from 'react'
import './Navbar.css'
import Phone from '../../icons/phone'
import Visible from '../../icons/visible'
import Map from '../../icons/map'
import Location from '../../icons/location'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Reordar from '../../icons/reordar'

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='navbar'>
      <div className="container">
        <div className='navbar_flex'>
          <div className='svg'>
            <Reordar/>
          </div>
            
          <div className='navbar_loc'>
          <Phone/>
            <h2 className='navbar_h2'> +998 77 207 97 98</h2>
          </div>
          <div className='navbar_locc'>
          <Location/> 
            <p className='navbar_p'>Manzil: Toshkent shahar, Chilonzor tumani, Nurxon ko'chasi 21-uy</p>
          </div>
          <div className='navbar_loccc'>
          <Link className='link tooo' to={'/zaif'}>
          <Visible/>
          <h3  className='navbar_h3' id='visibility'> Zarif ko'ruvchilar uchun</h3>
          </Link>
          </div>
          <div className='navbar_locccc'>
          <Map/>
          <Link className='link ' to={'/xarita'}>
            <h4 className='navbar_h4'>Sayt xaritasi</h4>
          </Link>
          </div>
          <button className='navbar_btn'>Uz</button>
          {/* <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ru')}>Русский</button>
          <button onClick={() => changeLanguage('uz')}>O'zbekcha</button>
          <h1>{t('assalomu')}</h1>
        <p>{}</p> */}

        </div>
      </div>
      {/* <div id="color-container" style="display: none;">
          <div class="color-box" style={'background-color: red;'} onclick={changeBackgroundColor('red')}></div>
          <div class="color-box" style={"background-color: blue;"} onclick={changeBackgroundColor('blue')}></div>
          <div class="color-box" style={"background-color: green;"} onclick={changeBackgroundColor('green')}></div>
          <div class="color-box" style={"background-color: yellow;"} onclick={changeBackgroundColor('yellow')}></div>
      </div> */}
    </div>
  )
}

export default Navbar