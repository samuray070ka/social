import React from 'react'
import './DarkMode.css'
import homeImgOne from '../assets/IJTIMOIY logo 2 1.png'
import banner from '../assets/Rectangle 3.png'
import imgTwo from '../assets/Rectangle 11.png'
import threeImg from '../assets/Rectangle 9.png'
import threeImg2 from '../assets/Rectangle 10.png'
import threeImg3 from '../assets/Rectangle 8.png'
import group27 from '../assets/Group 27.png'
import group26 from '../assets/Group 26.png'
import group25 from '../assets/Group 25.png'
import group24 from '../assets/Group 24.png'
import grandfather from '../assets/grandfather.jpg'
import child from '../assets/yosh bolalar.jpg'
import invalid from '../assets/nogironlar.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import IMG from '../assets/Rectangle 7.png'
import ImG from '../assets/Rectangle 61.png'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ArrowBottom from '../icons/arrowBottom'
import Calendar from '../icons/calendar'
import Map from '../icons/map'
import Phone from '../icons/phone'
import Visible from '../icons/visible'
import Location from '../icons/location'
import img from '../assets/Rectangle 54.png'
import Mail from '../icons/mail'
import Print from '../icons/print'
function DarkMode() {
  return (
    <div>
         <div className='home dark-mode'>
         <div className='navbar transform'>
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
          <Link className='link tooo' to={'/zaif'}>
          <Visible/>
          <h3  className='navbar_h3' id='visibility'> Zarif ko'ruvchilar uchun</h3>
          </Link>
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
      {/* <div id="color-container" style="display: none;">
          <div class="color-box" style={'background-color: red;'} onclick={changeBackgroundColor('red')}></div>
          <div class="color-box" style={"background-color: blue;"} onclick={changeBackgroundColor('blue')}></div>
          <div class="color-box" style={"background-color: green;"} onclick={changeBackgroundColor('green')}></div>
          <div class="color-box" style={"background-color: yellow;"} onclick={changeBackgroundColor('yellow')}></div>
      </div> */}
    </div>
      <div className='container'>

      <ul className=' collaction'>
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
              </ul>
      </div>

      <Swiper
     spaceBetween={0}
     pagination={{
       clickable: true,
     }}
     modules={[Pagination]}
     className="mySwiper dark-mode"
      >
        <SwiperSlide>
          <div className='container ' >
            <img className='banner_photo' src={banner} alt="" />
            <img className='banner_photo_two' src={IMG} alt="" />
            <div className='ul_flex '>
            </div>
            <h1 className='banner_h1'>Nogironlarga qulay muhit va to'siqsiz sharoitlar yaratilishi, paralimpiya sport turlari jalb qilinishi hamda ularga ajratilgan ish va o'qish o'rinlari</h1>
            <button className='home_btn'>Batafsil</button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='container'>
            <img className='banner_photo' src={grandfather} alt="" />
            <img className='banner_photo_two' src={IMG} alt="" />
            <div className='ul_flex '>
            </div>
            <h1 className='banner_h1 '>Katta yoshdagilarga ijtiomoiy xizmatlar
              ko‘rsatilishi ustidan nazorat qilish</h1>
            <button className='home_btn'>Batafsil</button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='container'>
            <img className='banner_photo' src={child} alt="" />
            <img className='banner_photo_two' src={IMG} alt="" />
            <div className='ul_flex '>
            </div>
            <h1 className='banner_h1 '>Voyaga yetmaganlar uchun ijtimoiy
              xizmatlar koʻrsatilishini nazorat qilish</h1>
            <button className='home_btn'>Batafsil</button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='container'>
            <img className='banner_photo' src={invalid} alt="" />
            <img className='banner_photo_two' src={IMG} alt="" />
            <div className='ul_flex '>
            </div>
            <h1 className='banner_h1 '>Nogironligi boʻlgan shaxslarga ijtimoiy
              xizmatlar koʻrsatilishini nazorat qilish</h1>
            <button className='home_btn'>Batafsil</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container'>
            <img className='banner_photo' src={banner} alt="" />
            <img className='banner_photo_two' src={IMG} alt="" />
            <div className='ul_flex '>
            </div>
            <h1 className='banner_h1'>Nogironlarga qulay muhit va to'siqsiz sharoitlar yaratilishi, paralimpiya sport turlari jalb qilinishi hamda ularga ajratilgan ish va o'qish o'rinlari</h1>
              <button className='home_btn'>Batafsil</button>
            
          </div>

        </SwiperSlide>
      </Swiper>
      <div className="container">
        <div className='banner'>
        </div>

        <div className="banner_two">
          <h3 className='logo'>Yangiliklar</h3>
          <div className='two_div'>

            <div className='two_div_imgs'>
              <img className='two_div_img' src={imgTwo} alt="" />
            </div>

            <div className='two_div_text dark-mode'>
              <h3 className='div_text_h3'>Ijtimoiy xizmatlar ko‘rsatish sifatini oshirish
                maqsadida hamkorlik memorandumi imzolandi</h3>
              <div className='hr'></div>
              <p className='div_text_p'>Joriy yilning 28-dekabr kuni Ijtimoiy himoya milliy agentligi hamda O‘zbekiston
                volontyorlari assotsiatsiyasi o‘rtasida hamkorlik memorandumi imzolandi.
                Hamkorlikning asosiy maqsadi o‘zgalar parvarishiga muhtoj bo‘lgan yolg‘iz yashovchi
                yoki yolg‘iz keksa va nogironligi bo‘lgan shaxslarni aniqlashga, “Inson” ijtimoiy xizmatlar markazlariga tashrif buyuradigan aholiga markazdagi mavjud...</p>
              <div className='div_text_icons'>
                <Calendar/>
                <h4 className='text_icon'>15:12 / 01.01.2024</h4>
              </div>
            </div>
          </div>
          <div className='three_div'>
            <div className='three_cart'>
              <img src={threeImg3} alt="" />
              <div className='icon_flex'>
                <Calendar/>
                <h3 className='three_cart_h3'>15:18 / 04.04.2024</h3>
              </div>
              <h4 className='three_cart_h4'>O‘zbekistonda Global akseleratorning ustuvor yo‘nalishlarini muhokama qilish va tasdiqlash bo‘yicha Maslahat seminari bo‘lib o‘tdi</h4>
              <p className='three_cart_p'>Joriy yil 8-aprel kuni O‘zbekistonda Global akseleratorning ustuvor yo‘nalishlarini muhokama qilish va tasdiqlash bo‘yicha Maslahat seminari bo‘lib o‘tdi, unda akseleratsiya nuqtalari va sektorning potentsial...</p>
            </div>
            <div className='three_cart'>
              <img src={threeImg} alt="" />
              <div className='icon_flex'>
              <Calendar/>
                <h3 className='three_cart_h3'>12:05 / 03.02.2024</h3>
              </div>
              <h4 className='three_cart_h4'>BMTning oziq-ovqat va qishloq xo'jaligi tashkiloti (FAO) ning O'zbekiston Respublikasidagi vakolatxonasi vakillari bilan uchrashuv bo'lib o'tdi</h4>
              <p className='three_cart_p'>5-mart kuni Ijtimoiy himoya milliy agentligida BMTning oziq-ovqat va qishloq xo’jaligi tashkiloti (FAO) ning O’zbekiston Respublikasidagi vakolatxonasi rahbari o’rinbosari Sherzod Umarov bilan...</p>
            </div>
            <div className='three_cart'>
              <img src={threeImg2} alt="" />
              <div className='icon_flex'>
              <Calendar/>
                <h3 className='three_cart_h3'>15:12 / 01.01.2024</h3>
              </div>
              <h4 className='three_cart_h4'>“Siyosiy ma’rifat soati” doirasida  xodimlar ishtirokida navbatdagi “Ma’naviyat soati” tashkil etildi</h4>
              <p className='three_cart_p'>Haftaning eng muhim va dolzarb mavzulari yuzasidan “Siyosiy ma’rifat soati” doirasida  xodimlar ishtirokida navbatdagi “Ma’naviyat soati” tashkil etildi...</p>
            </div>
          </div>
        </div>
        <Link className='link' to={'/batafsil'}>
        <button className='home_btn_two dark-mode'>Batafsil</button>
        </Link>
        
      </div>
      <div>
      <div className="banner_three dark-mode ">
          <div className='container'>
          <h3 className='three_h3'>O‘rganilgan obyektlar</h3>
          <div className='three_flex'>
            <Link to={'/qulay-muhit'} className='link'>
                <div className='flex_box dark-mode-old'>
                  <div className='circle dark-mode-old dark-circle'>
                    <h2 className='circle_h2'>80</h2>
                  </div>
                  <p className='flex_p'>Qulay muhit</p>
                </div>
            </Link>
           <Link className='link' to={'/katta-yoshdagilar'}>
                <div className='flex_box dark-mode-old' >
                    <div className='circle dark-mode-old dark-circle'>
                      <h2 className='circle_h2'>185</h2>
                    </div>
                    <p className='flex_p'>Katta yoshdagilar</p>
                </div>
           </Link>
           <Link className='link' to={'/voyaga'}>
           <div className='flex_box dark-mode-old'>
              <div className='circle dark-mode-old dark-circle'>
                <h2 className='circle_h2'>365</h2>
              </div>
              <p className='flex_p'>Voyaga yetmaganlar</p>
            </div>
           </Link>
           <Link className='link' to={'/nogiron'}>
           <div className='flex_box dark-mode-old'>
              <div className='circle dark-mode-old dark-circle'>
                <h2 className='circle_h2'>985</h2>
              </div>
              <p className='flex_p'>Nogironlikni belgilash</p>
            </div>
           </Link>
          </div>
          </div>
        </div>
        <h4 className='home_h4 container'>Hukumat portallari</h4>
        <div className="banner_small container">
          <div className='flex_img'>
            <img className='img' src={ImG} alt="" />
            <button className='flex_btn'></button>
          </div>
          <div className='flex_img'>
            <img className='img' src={ImG} alt="" />
            <button className='flex_btn'></button>
          </div>
          <div className='flex_img'>
            <img className='img' src={ImG} alt="" />
            <button className='flex_btn'></button>
          </div>
          <div className='flex_img'>
            <img className='img' src={ImG} alt="" />
            <button className='flex_btn'></button>
          </div>
        </div>
      </div>
    </div>
    <div className='footer trans'>
      <div className="container">
        <div className="footer_flex">
          <div className='footer_box'>
            <p className='footer_p tra'>O‘zbekiston Respunlikasi Prezidenti huzuridagi
            Ijtimoiy himoya milliy agentligi huzuridagi</p>
            <h1>IJTIMOIY INSPEKSIYA</h1>
            <img className='footer_img' src={img} alt="" />
          </div>
          <div className="footer_box leftt">
            <h2 className='footer_h2'>Biz bilan bog'lanish</h2>
            <div className='footer_'>
            <Location/>
            <p className='footer_box_p'>Toshkent shahar, Chilonzor tumani, Nurxon ko‘chasi 21-uy</p>
            </div>
            <div className='footer_'>
            
            <Mail/>
            <p className='footer_box_p'>info@ijtimoiyins.@uzexat.uz</p>
            </div>
            <div className='footer_'>
          
            <Phone/>
            <p className='footer_box_p'>+998 71 207 97 98</p>
            </div>
            <div className='footer_'>
           
            <Print/>
            <p className='footer_box_p'>+998 71 207 97 98</p>
            </div>
          </div>
          <div className="footer_box leftt">
            <h4 className='footer_h4'>Ijtimoiy tarmoqlarimiz</h4>
            <div className='footer_icons'>
                <button className='footer_icon'>{}</button>
                <button className='footer_icon left'>{}</button>
                <button className='footer_icon left'>{}</button>
                <button className='footer_icon left '>{}</button>
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
    </div>
  )
}

export default DarkMode