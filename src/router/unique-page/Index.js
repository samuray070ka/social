import React from 'react'
import './Index.css'
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

const param = useParams
let oneItem = PRODUCTS.find((item)=> item.id === param.proID)

function Index() {
  return (
    <div>
         <div className='container'>
        <div className="ijtimoiy_logo">
          <Link to={`/ijtimoiy/hamkorlik`} className='ijtimoiy_logo link to'>
            <img src={homeImgOne} alt="" />
            <h2 className='ijtimoiy_h2'>Ijtimoiy inspeksiya</h2>
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
            <div className='ols  container'>
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
              <li className='banner_item one'>Ijtimoiy inspeksiya</li>
              <hr />
              <Link to={'/ijtimoiy'} className='link'>
                <li className='banner_item '>Inspeksiya haqida</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/nizom'} className='link'>
                <li className='banner_item '>Nizom</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/tuzilma'} className='link'>
                <li className='banner_item '>Tuzilma</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/rahbaryat'} className='link'>
                <li className='banner_item '>Rahbariyat</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/markaziy'} className='link'>
                <li className='banner_item '>Markaziy apparat</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/hududiy'} className='link'>
                <li className='banner_item '>Hududiy boshqarmalar</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/hamkorlik'} className='link'>
                <li className='banner_item '>Hamkorlik</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/ish-orni'} className='link'>
                <li className='banner_item '>Bo'sh ish o'rnlari</li>
              </Link>
            </ul>
          </div>
            </div>
    </div>
  )
}

export default Index