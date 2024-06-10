import React from 'react'
import './Home.css'
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import banner from '../../assets/Rectangle 3.png'
import img from '../../assets/Rectangle 12.png'
import imgTwo  from '../../assets/Rectangle 11.png'
import threeImg from '../../assets/Rectangle 9.png'
import threeImg2 from '../../assets/Rectangle 10.png'
import threeImg3 from '../../assets/Rectangle 8.png'
import group27 from '../../assets/Group 27.png'
import group26 from '../../assets/Group 26.png'
import group25 from '../../assets/Group 25.png'
import group24 from '../../assets/Group 24.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Home() {
  return (
    <div className='home'>
      <img className='banner_photo' src={banner} alt="" />
      <img className='banner_photo_two' src={img} alt="" />
      {/* <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='banner_photo' src={banner} alt="" />
          <img className='banner_photo_two' src={img} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='banner_photo' src={banner} alt="" />
          <img className='banner_photo_two' src={img} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='banner_photo' src={banner} alt="" />
          <img className='banner_photo_two' src={img} alt="" />
        </SwiperSlide>
      </Swiper> */}
      <div className="container">
        <div className='banner'>
         <div className='ul_flex'>
         <img className='banner_img' src={homeImgOne} alt="" />
          <ul className='collaction'>
            <li className='item'>^Ijtimoiy inspeksiya</li>
            <li className='item'>^Faoliyat</li>
            <li className='item'>^Normativ hujjatlar</li>
            <li className='item'>^Jamoatchilik</li>
            <li className='item'>^Statistika</li>
            <li className='item'>^Ochiq ma'lumotlar</li>
            <li className='item'>^Aloqa</li>
          </ul>
         </div>
          <h1 className='banner_h1'>Nogironlarga qulay muhit va to'siqsiz sharoitlar yaratilishi, paralimpiya sport turlari jalb qilinishi hamda ularga ajratilgan ish va o'qish o'rinlari</h1>
        </div>
        <button className='home_btn'>Batafsil</button>

        <div className="banner_two">
        <h3 className='logo'>Yangiliklar</h3>
          <div className='two_div'>

            <div className='two_div_imgs'>
              <img className='two_div_img' src={imgTwo} alt="" />
            </div>

            <div className='two_div_text'>
              <h3 className='div_text_h3'>Ijtimoiy xizmatlar ko‘rsatish sifatini oshirish
              maqsadida hamkorlik memorandumi imzolandi</h3>
              <div className='hr'></div>
              <p className='div_text_p'>Joriy yilning 28-dekabr kuni Ijtimoiy himoya milliy agentligi hamda O‘zbekiston
                volontyorlari assotsiatsiyasi o‘rtasida hamkorlik memorandumi imzolandi.
                Hamkorlikning asosiy maqsadi o‘zgalar parvarishiga muhtoj bo‘lgan yolg‘iz yashovchi
                yoki yolg‘iz keksa va nogironligi bo‘lgan shaxslarni aniqlashga, “Inson” ijtimoiy xizmatlar markazlariga tashrif buyuradigan aholiga markazdagi mavjud...</p>
              <div className='div_text_icons'>
                <h4 className='text_icon'>15:12 / 01.01.2024</h4>
              </div>
            </div>
          </div>
          <div className='three_div'>
            <div className='three_cart'>
              <img src={threeImg3} alt="" />
              <h3 className='three_cart_h3'>15:18 / 04.04.2024</h3>
              <h4 className='three_cart_h4'>O‘zbekistonda Global akseleratorning ustuvor yo‘nalishlarini muhokama qilish va tasdiqlash bo‘yicha Maslahat seminari bo‘lib o‘tdi</h4>
              <p className='three_cart_p'>Joriy yil 8-aprel kuni O‘zbekistonda Global akseleratorning ustuvor yo‘nalishlarini muhokama qilish va tasdiqlash bo‘yicha Maslahat seminari bo‘lib o‘tdi, unda akseleratsiya nuqtalari va sektorning potentsial...</p>
            </div>
            <div className='three_cart'>
              <img src={threeImg} alt="" />
              <h3 className='three_cart_h3'>12:05 / 03.02.2024</h3>
              <h4 className='three_cart_h4'>BMTning oziq-ovqat va qishloq xo'jaligi tashkiloti (FAO) ning O'zbekiston Respublikasidagi vakolatxonasi vakillari bilan uchrashuv bo'lib o'tdi</h4>
              <p className='three_cart_p'>5-mart kuni Ijtimoiy himoya milliy agentligida BMTning oziq-ovqat va qishloq xo’jaligi tashkiloti (FAO) ning O’zbekiston Respublikasidagi vakolatxonasi rahbari o’rinbosari Sherzod Umarov bilan...</p>
            </div>
            <div className='three_cart'>
              <img src={threeImg2} alt="" />
              <h3 className='three_cart_h3'>15:12 / 01.01.2024</h3>
              <h4 className='three_cart_h4'>“Siyosiy ma’rifat soati” doirasida  xodimlar ishtirokida navbatdagi “Ma’naviyat soati” tashkil etildi</h4>
              <p className='three_cart_p'>Haftaning eng muhim va dolzarb mavzulari yuzasidan “Siyosiy ma’rifat soati” doirasida  xodimlar ishtirokida navbatdagi “Ma’naviyat soati” tashkil etildi...</p>
            </div>
          </div>
        </div>
        <button className='home_btn_two'>Batafsil</button>

        <div className="banner_three">
          <h3 className='three_h3'>O‘rganilgan obyektlar</h3>
          <div className='three_flex container'>
            <div className='flex_box'>
              <div className='circle'>
                <h2 className='circle_h2'>80</h2>
              </div>
              <p className='flex_p'>Qulay muhit</p>
            </div>
            <div className='flex_box'>
              <div className='circle'>
                <h2 className='circle_h2'>185</h2>
              </div>
              <p className='flex_p'>Katta yoshdagilar</p>
            </div>
            <div className='flex_box'>
              <div className='circle'>
                <h2 className='circle_h2'>365</h2>
              </div>
              <p className='flex_p'>Voyaga yetmaganlar</p>
            </div>
            <div className='flex_box'>
              <div className='circle'>
                <h2 className='circle_h2'>985</h2>
              </div>
              <p className='flex_p'>Nogironlikni belgilash</p>
            </div>
          </div>
        </div>
        <h4 className='home_h4'>Hukumat portallari</h4>
        <div className="banner_small">
          <div className='flex_img'>
            <img className='img' src={group27} alt="" />
            <button className='flex_btn'></button>
          </div>
          <div className='flex_img'>
            <img className='img' src={group26} alt="" />
            <button className='flex_btn'></button>
          </div>
          <div className='flex_img'>
            <img className='img' src={group25} alt="" />
            <button className='flex_btn'></button>
          </div>
          <div className='flex_img'>
            <img className='img' src={group24} alt="" />
            <button className='flex_btn'></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home