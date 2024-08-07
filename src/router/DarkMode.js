import React, {useState, useEffect} from 'react'
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
  async function fetchSilider() {
    const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/slider/list');
    const data = await response.json();
    return data;
}
const [silider, setSilider] = useState([]);

useEffect(() => {
    async function getData() {
        const result = await fetchSilider();
        setSilider(result);
    }
    
    getData();
    console.log(silider);
}, []);
const [isDropdownVisible, setDropdownVisible] = useState(false);

const toggleDropdown = () => {
  setDropdownVisible(!isDropdownVisible);
  setDropdownVisible(!setDropdown() && !isDropdownVisible && !setFive() && !setSix() && !setThree() && !setSeven()   && !setFour())
}
const [DropdownVisible, setDropdown] = useState(false);

const toggleDropdowntwo = () => {
  setDropdown(!DropdownVisible );
  setDropdown(!setDropdownVisible() && !DropdownVisible && !setFive() && !setSix() && !setThree() && !setSeven()   && !setFour())
}
const [three, setThree] = useState(false);

const toggleDropdownthree = () => {
  setThree(!three );
  setThree(!setDropdownVisible() && !three && !setDropdown() && !setFive() && !setSix() && !setSeven()   && !setFour())
}
const [four, setFour] = useState(false);

const toggleDropdownFour = () => {
  setFour(!four );
  setFour(!setDropdownVisible() && !setThree() && !four && !setFive() && !setSix() && !setSeven()   && !setDropdown())
}

const [five, setFive] = useState(false);


const toggleDropdownFive = () => {
  setFive(!five );
  setFive(!setDropdownVisible() && !setThree() && !setFour() && !five && !setSix()  && !setSeven()   && !setDropdown())
}

const [six, setSix] = useState(false);

const toggleDropdownSix = () => {
  setSix(!six );
  setSix(!setDropdownVisible() && !setThree() && !setFour() && !setFive() && !six && !setSeven()  && !setDropdown())
}

const [seven, setSeven] = useState(false);

const toggleDropdownSeven = () => {
  setSeven(!seven );
  setSeven(!setDropdownVisible() && !setThree() && !setFour() && !setFive() && !setSix() && !seven  && !setDropdown())
}
  return (
    <div>
         <div className='home dark-mode'>
         <div className='navbar transform edas'>
      <div className="container">
        <div className='navbar_flex'>
          <div className='navbar_loc'>
          <Phone/>
            <h2 className='navbar_h2'> +998 77 207 97 98</h2>
          </div>
          <div className='navbar_locc'>
          <Location/> 
            <p className='navbar_p'>Manzil: Toshkent shahar, Chilonzor tumani, Nurxon ko'chasi 21-uy</p>
          </div>
          <div className='navbar_loccc'>
          <Link className='link tooo' to={'/dark-mode/zaif'}>
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
                <Link to={'/'} className='link lo'>
      <img className=' banner_img' src={homeImgOne} alt="" />
                </Link>
                {/* {
                  data.map((item,inx) => 
                    <Link to={`${item.id}`} className='link' key={inx}>
                        <li className='item'><ArrowBottom/> {item.name.uzl}</li>
                    </Link>
                )
                } */}
                  <li  onClick={toggleDropdown} className='item rod'><ArrowBottom/> Ijtimoiy</li>
                  {isDropdownVisible && (
                <div className='faoliyat_ro faoliyat_back dark-mode'>
                <ul className='banner_collaction'>
                  <Link className='link' to={'/ijtimoiy'}>
              <li className='banner_item  faoliyat_roo'>Inspeksiya haqida</li>
                  </Link>
              <Link to={'/ijtimoiy/nizom'} className='link'>
                <li className='banner_item  faoliyat_roo'>Nizom</li>
              </Link>
              <Link to={'/ijtimoiy/tuzilma'} className='link'>
                <li className='banner_item  faoliyat_roo'>Tuzilma</li>
              </Link>
              <Link to={'/ijtimoiy/rahbaryat'} className='link'>
                <li className='banner_item  faoliyat_roo'>Rahbariyat</li>
              </Link>
              <Link to={'/ijtimoiy/markaziy'} className='link'>
                <li className='banner_item  faoliyat_roo'>Markaziy apparat</li>
              </Link>
              <Link to={'/ijtimoiy/hududiy'} className='link'>
                <li className='banner_item faoliyat_roo '>Hududiy boshqarmalar</li>
              </Link>
              <Link to={'/ijtimoiy/hamkorlik'} className='link'>
                <li className='banner_item  faoliyat_roo'>Hamkorlik</li>
              </Link>
              <Link to={'/ijtimoiy/ish-orni'} className='link'>
                <li className='banner_item  faoliyat_roo'>Bo'sh ish o'rnlari</li>
              </Link>
            </ul>
                </div>
)}
                  <li className='item ro' onClick={toggleDropdowntwo}><ArrowBottom/> Faoliyat</li>
                {DropdownVisible && (
                <div className='faoliyat_ro faoliyat_back qu dark-mode'>
                <ul className='banner_collaction'>
                  <Link className='link' to={'/faoliyat'}>
              <li className='banner_item  faoliyat_roo '>Qulay muhit</li>
                  </Link>
              <Link to={'/faoliyat/katta-yoshdagilar'} className='link'>
                <li className='banner_item  faoliyat_roo'>Katta yoshdagilar</li>
              </Link>
              <Link to={'/faoliyat/voyaga'} className='link'>
                <li className='banner_item  faoliyat_roo'>Voyaga yetmaganlar</li>
              </Link>
              <Link to={'/faoliyat/nogironlik'} className='link'>
                <li className='banner_item  faoliyat_roo'>Nogironlikni belgilash</li>
              </Link>
              <Link to={'/faoliyat/korupsiya'} className='link'>
                <li className='banner_item  faoliyat_roo'>Korrupsiyaga qarshi kurash</li>
              </Link>
            </ul>
                </div>
)}
                  <li className='item ro' onClick={toggleDropdownthree}><ArrowBottom/>Normativ hujjatlar</li>
                {three && (
                <div className='faoliyat_ro faoliyat_back xa dark-mode'>
                <ul className='banner_collaction'>
                <Link to={'/normativ'} className='link'>
                <li className='banner_item faoliyat_roo'>Xalqaro normativ hujjatlar</li>
              </Link>
              <Link to={'/normativ/ozbekiston'} className='link'>
                <li className='banner_item faoliyat_roo'>O‘zbekiston Respublikasi qonunlari</li>
              </Link>
              <Link to={'/normativ/prezident'} className='link'>
                <li className='banner_item faoliyat_roo'>Prezident farmon va qarorlari</li>
              </Link>
              <Link to={'/normativ/vazirlar'} className='link'>
                <li className='banner_item faoliyat_roo'>Vazirlar mahkamasi qarorlari</li>
              </Link>
              <Link to={'/normativ/idoraviy'} className='link'>
                <li className='banner_item faoliyat_roo'>Idoraviy normativ-huquqiy hujjatlar</li>
              </Link>
            </ul>
                </div>
)}
                  <li className='item ro' onClick={toggleDropdownFour}><ArrowBottom/>Jamoatchilik</li>
                {four && (
                <div className='faoliyat_ro faoliyat_back ya dark-mode'>
                <ul className='banner_collaction'>
                <Link to={'/jamoatchilik'} className='link'>
                <li className='banner_item faoliyat_roo'>Yangiliklar</li>
              </Link>
              <Link to={'/jamoatchilik/pressreliz'} className='link'>
                <li className='banner_item faoliyat_roo'>Pressreliz</li>
              </Link>
              <Link to={'/jamoatchilik/videodarsliklar'} className='link'>
                <li className='banner_item faoliyat_roo'>Videodarsliklar</li>
              </Link>
              <Link to={'/jamoatchilik/videoroliklar'} className='link'>
                <li className='banner_item faoliyat_roo'>Videoroliklar</li>
              </Link>
              <Link to={'/jamoatchilik/elonlar'} className='link'>
                <li className='banner_item faoliyat_roo'>E’lonlar</li>
              </Link>
            </ul>
                </div>
)}
                  <li className='item ro' onClick={toggleDropdownFive}><ArrowBottom/>Statistika</li>
                  {five && (
                <div className='faoliyat_ro faoliyat_back te dark-mode'>
                <ul className='banner_collaction'>
                {/* <Link to={'/jamoatchilik'} className='link'> */}
                <li className='banner_item faoliyat_roo'>Tekshiruv va profilaktika ishlari</li>
              {/* </Link> */}
              {/* <Link to={'/jamoatchilik/pressreliz'} className='link'> */}
                <li className='banner_item faoliyat_roo'>Murojaatlarni ko‘rib chiqish</li>
              {/* </Link> */}
              {/* <Link to={'/jamoatchilik/videodarsliklar'} className='link'> */}
                <li className='banner_item faoliyat_roo'>OAVda chiqishlar</li>
              {/* </Link> */}
            </ul>
                </div>
)}
                
                  <li className='item ro' onClick={toggleDropdownSix}><ArrowBottom/>Ochiq ma'lumotlar</li>
                {six && (
                <div className='faoliyat_ro faoliyat_back da dark-mode'>
                <ul className='banner_collaction'>
                {/* <Link to={'/jamoatchilik'} className='link'> */}
                <li className='banner_item faoliyat_roo '>Davlat xaridlari</li>
              {/* </Link> */}
              {/* <Link to={'/jamoatchilik/pressreliz'} className='link'> */}
                <li className='banner_item faoliyat_roo '>Moliyaviy</li>
              {/* </Link> */}
              {/* <Link to={'/jamoatchilik/videodarsliklar'} className='link'> */}
                <li className='banner_item faoliyat_roo '>Inspeksiya faoliyati</li>
              {/* </Link> */}
            </ul>
                </div>
)}
      
                  <li className='item ro' onClick={toggleDropdownSeven}><ArrowBottom/>Aloqa</li>
                  {seven && (
                <div className='faoliyat_ro faoliyat_back onn dark-mode'>
                <ul className='banner_collaction'>
                <Link to={'/aloqa'} className='link to'>
                <li className='banner_item faoliyat_roo'>Online murojaat</li>
              </Link>
              <Link to={'/aloqa/offline'} className='link'>
                <li className='banner_item faoliyat_roo'>Offline murojaat</li>
              </Link>
              <Link to={'/aloqa/boglanish'} className='link'>
                <li className='banner_item faoliyat_roo'>Biz bilan bog‘lanish</li>
              </Link>
            </ul>
                </div>
)}
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
        {
          silider.map((item, inx) =>  
          <SwiperSlide>
          <div className='container ' key={inx} >
            <img className='banner_photo' src={item.photo} alt="" />
            <img className='banner_photo_two' src={ImG} alt="" />
            <div className='ul_flex '>
            </div>
            <h1 className='banner_h1'>{item.title.luz}</h1>
            <button className='home_btn'>Batafsil</button>
          </div>
        </SwiperSlide>)
        }
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