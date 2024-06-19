import React from 'react'
import './index.css'
import {Link, useParams} from 'react-router-dom'
import ArrowBottom from '../../icons/arrowBottom'
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../icons/search'
import {PRODUCTS, UNIQUEPAGE} from '../../static/Index'
import Youtube from '../../assets/youtube.png'
import Telegram from '../../assets/telegram.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Calendar from '../../icons/calendar'
import Img from '../../assets/Rectangle 69.png'

function index() {
  return (
    <div>
         <div className='container'>
        <div className="ijtimoiy_logo">
          <Link to={`/jamoatchilik`} className='ijtimoiy_logo link to'>
            <img src={homeImgOne} alt="" />
            <h2 className='ijtimoiy_h2'>Jamoatchilik</h2>
          </Link>
          <input type="text" /> <Search/>
        </div>
        <hr  className='ijtimoiy_hr'/>
        <ul className='ijtimoiy_collaction'>
        <Link to={'/ijtimoiy'} className='link'>
                  <li className='ijtimoiy_item'><ArrowBottom/> Ijtimoiy inspeksiya</li>
                </Link>
                <Link to={'/faoliyat'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/> Faoliyat</li>
                </Link>
                <Link to={'/normativ'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Normativ hujjatlar</li>
                </Link>
                <Link to={'/jamoatchilik'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Jamoatchilik</li>
                </Link>
                <Link to={'/statistica'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Statistika</li>
                </Link>
                <Link to={'/ochiq'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Ochiq ma'lumotlar</li>
                </Link>
                <Link to={'/aloqa'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Aloqa</li>
                </Link>
        </ul>
        </div>
        <div className="ijtimoiy_banner ">
            <div className='ijti_ban  container'>
                <div className='banner_big '>
                  <img src={Img} className='unique_img' alt="" />
                  <h6 className='big_h6'>UNFPA O‘zbekistonda 2021-2025 yillarga mo‘ljallangan beshinchi mamlakat dasturini amalga oshirmoqda</h6>
                  <div className='unique_flex'>
                    <Calendar/>
                    <h6 className='flex_h6'>09-04.2023</h6>
                  </div>
                  <h6 className='unique_h6'>Barqaror rivojlanish maqsadlari sari olg‘a siljish va UNFPAning ulkan transformatsion natijalariga erishishda Markaziy Osiyo mintaqasidagi strategik rejasini samaradorligini baholashga qaratilgan ekspert O‘zbekistonga tashrif buyurdi. Ketrin Luiza Tong xonim bugun Ayollarni reabilitatsiya qilish va moslashtirish respublika markazi faoliyati bilan tanishdi.</h6>
                  <h6 className='unique_h6'>Bo‘lib o‘tgan uchrashuvda Ayollar reabilitatsiya qilish va moslashtirish respublika markazi rahbari M.Rasulova markaz faoliyati, yaratilgan sharoitlar, kadrlarni malakasini oshirish, UNFPA bilan yo‘lga qo‘yilgan hamkorlik masalalariga alohida to‘xtalib o‘tdi. Shuningdek uchrashuv davomida ekspertga UNFPA bilan yana qanday sohalarda hamkorlikni kuchaytirish mumkinligi muhokama qilindi.</h6>
                  <h6 className='unique_h6'>Uchrashuv yakunida Ketrin Luiza Tong xonim Toshkent shahar bo‘limining vaqtincha boshpanasida yaratilgan shart-sharoitlar bilan tanishdi.</h6>
                  <h6 className='unique_h6'>
                  Ma’lumot uchun: O‘zbekiston Respublikasi Prezidentining 2023-yil 1-iyundagi PF-82-sonli farmoniga asosan, 2023-yil 15-iyundan boshlab Ayollar reabilitatsiya qilish va moslashtirish respublika markazi Agentlik tasarrufiga o’tkazildi. Ma’lumot uchun: O‘zbekiston Respublikasi Prezidentining 2023-yil 1-iyundagi PF-82-sonli farmoniga asosan, 2023-yil 15-iyundan boshlab Ayollar reabilitatsiya qilish va moslashtirish respublika markazi Agentlik tasarrufiga o’tkazildi. Ma’lumot uchun: O‘zbekiston Respublikasi Prezidentining 2023-yil 1-iyundagi PF-82-sonli farmoniga asosan, 2023-yil 15-iyundan boshlab Ayollar reabilitatsiya qilish va moslashtirish respublika markazi Agentlik tasarrufig</h6>

                  <div className='youtbe_flex'>
                    <img src={Youtube} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Telegram} alt="" />
                    <img src={Facebook} alt="" />
                  </div>
                  <button className='unique_btn'>Ijtimoiy tarmoqlarimizga azo bo‘ling.</button>
                  <button className='unique_btn_one'>Ijtimoiy tarmoqlarimizga azo bo‘ling.</button>
                  
                  
                </div>
                <div className='banner_text '>
            <ul className='banner_collaction'>
              <li className='banner_item one'>Jamoatchilik</li>
              <hr />
              <Link to={'/jamoatchilik'} className='link'>
                <li className='banner_item '>Yangiliklar</li>
              </Link>
              <hr />
              <Link to={'/jamoatchilik/pressreliz'} className='link'>
                <li className='banner_item '>Pressreliz</li>
              </Link>
              <hr />
              <Link to={'/jamoatchilik/videodarsliklar'} className='link'>
                <li className='banner_item '>Videodarsliklar</li>
              </Link>
              <hr />
              <Link to={'/jamoatchilik/videoroliklar'} className='link'>
                <li className='banner_item '>Videoroliklar</li>
              </Link>
              <hr />
              <Link to={'/jamoatchilik/elonlar'} className='link'>
                <li className='banner_item '>E’lonlar</li>
              </Link>
            </ul>
          </div>
            </div>
        </div>
    </div>
  )
}

export default index