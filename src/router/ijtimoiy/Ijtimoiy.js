import React from 'react'
import './Ijtimoiy.css'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../icons/arrowBottom'
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../icons/search'

function Ijtimoiy() {
  return (
    <div className='ijtimoiy'>
      <div className='container'>
        <div className="ijtimoiy_logo">
          <img src={homeImgOne} alt="" />
          <h2 className='ijtimoiy_h2'>Ijtimoiy inspeksiya</h2>
          <input type="text" /> <Search/>
        </div>
        <hr  className='ijtimoiy_hr'/>
        <ul className='ijtimoiy_collaction'>
        {/* <Link to={'/ijtimoiy'} className='link'> */}
                  <li className='ijtimoiy_item'><ArrowBottom/> Ijtimoiy inspeksiya</li>
                {/* </Link> */}
                {/* <Link to={'/faoliyat'} className='link'> */}
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/> Faoliyat</li>
                {/* </Link> */}
                {/* <Link to={'/normativ'} className='link'> */}
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Normativ hujjatlar</li>
                {/* </Link> */}
                {/* <Link to={'/jamoatchilik'} className='link'> */}
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Jamoatchilik</li>
                {/* </Link> */}
                {/* <Link to={'/statistica'} className='link'> */}
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Statistika</li>
                {/* </Link> */}
                {/* <Link to={'/ochiq'} className='link'> */}
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Ochiq ma'lumotlar</li>
                {/* </Link> */}
                {/* <Link to={'/aloqa'} className='link'> */}
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Aloqa</li>
                {/* </Link> */}
        </ul>
        <div className="ijtimoiy_banner">
          <div className='banner_big'>
            <h3>O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiya</h3>

            <p>O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiya (keyingi o‘rinlarda Inspeksiya deb yuritiladi) O‘zbekiston Respublikasi Prezidentining 2023-yil 1-iyundagi “Aholiga sifatli ijtimoiy xizmat va yordam ko‘rsatish hamda uning samarali nazorat tizimini yo‘lga qo‘yish bo‘yicha kompleks chora-tadbirlar to‘g‘risida”gi Farmoni bilan tashkil etilgan.
            </p>

            <p>Inspeksiya ijtimoiy himoya sohasida huquqbuzarliklar profilaktikasini, aholini ijtimoiy himoya qilish va ijtimoiy xizmatlarva yordam ko‘rsatish sohasida qonunchilik hujjatlari talablariga rioya etilishi ustidan davlat nazoratini amalga oshiruvchi vakolatli davlat boshqaruvi organi hisobalanadi.</p>

            <h2>Ijtimoiy inspeksiyaning vazifalari</h2>
            <ul className='text_collaction'>
              
              <li className='text_item'><span>ijtimoiy himoya sohasiga doir </span>  qonunchilikka rioya etilishi ustidan <span>davlat nazoratini amalga oshirish;</span></li>

              <li className='text_item'><span>nogironligi bo‘lgan shaxslarga</span>  ijtimoiy xizmatlar va yordam ko‘rsatishga doir <span>talab va standartlarga rioya etilishini nazorat qilish;</span></li>
              
              <li className='text_item'><span>voyaga yetmaganlarga</span>  ijtimoiy xizmatlar va yordam ko‘rsatishga doir <span>talab va standartlarga rioya etilishini nazorat qilish;</span></li>
              
              <li className='text_item'>imkoniyati cheklangan va nogironligi bo‘lgan shaxslarga <span> to‘siqsiz muhit</span> yaratishga doir qonunchilik hujjatlari  <span>talablariga rioya etilishini nazorat qilish;</span></li>
              
              <li className='text_item'>o‘zgalar parvarishiga muhtoj yolg‘iz yashovchi <span> keksalar</span>  hamda <span> yolg‘iz keksalar</span> va <span>nogironligi bo‘lgan shaxslarga</span> ijtimoiy xizmatlar va yordam ko‘rsatishga doir <span> talab va standartlarga rioya etilishini nazorat qilish;</span></li>
              
              <li className='text_item'> odam savdosi jabrdiydalari, tazyiq va zo‘ravonlikdan jabr ko‘rgan xotin-qizlar va voyaga yetmaganlar hamda muayyan yashash joyiga ega bo‘lmagan shaxslarga ijtimoiy xizmatlar va yordam ko‘rsatishga doir <span>talab va standartlarga rioya etilishini nazorat qilish;</span></li>
              
              <li className='text_item'></li>
              <li className='text_item'></li>
              <li className='text_item'></li>
            </ul>
          </div>
          <div className='banner_text'></div>
        </div>


      </div>
    </div>
  )
}

export default Ijtimoiy