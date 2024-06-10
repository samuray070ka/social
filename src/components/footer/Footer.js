import React from 'react'
import './Footer.css'
import {FaYoutube, FaInstagram, FaFacebook, FaTelegram} from 'react-icons/fa'
import img from '../../assets/Rectangle 54.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer_flex">
          <div className='footer_box'>
            <p className='footer_p'>O‘zbekiston Respunlikasi Prezidenti huzuridagi
            Ijtimoiy himoya milliy agentligi huzuridagi</p>
            <h1>IJTIMOIY INSPEKSIYA</h1>
            <img className='footer_img' src={img} alt="" />
          </div>
          <div className="footer_box leftt">
            <h2 className='footer_h2'>Biz bilan bog'lanish</h2>
            <p className='footer_box_p'>Toshkent shahar, Chilonzor tumani, Nurxon ko‘chasi 21-uy</p>
            <p className='footer_box_p'>info@ijtimoiyins.@uzexat.uz</p>
            <p className='footer_box_p'>+998 71 207 97 98</p>
            <p className='footer_box_p'>+998 71 207 97 98</p>
          </div>
          <div className="footer_box leftt">
            <h4 className='footer_h4'>Ijtimoiy tarmoqlarimiz</h4>
            <div className='footer_icons'>
                <button className='footer_icon'>{FaYoutube()}</button>
                <button className='footer_icon left'>{FaInstagram()}</button>
                <button className='footer_icon left'>{FaFacebook()}</button>
                <button className='footer_icon left '>{FaTelegram()}</button>
            </div>
            <h5 className='footer_h5'>Sayt maʼlumotlaridan foydalanilganda
                  www.ijtimoiy inspeksiya.uz manbasi
                  koʻrsatilishi shart!
            </h5>
          </div>
        </div>
      </div>
      <div className='footer_hr'></div>
      <p className='p'>2024. Barcha huquqlar himoyalangan</p>
    </div>
  )
}

export default Footer