import React, {useState, useEffect} from 'react'
import './index.css'
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import img from '../../assets/Rectangle 12.png'
import threeImg from '../../assets/Rectangle 9.png'
import threeImg2 from '../../assets/Rectangle 10.png'
import threeImg3 from '../../assets/Rectangle 8.png'
import group27 from '../../assets/Group 27.png'
import group26 from '../../assets/Group 26.png'
import group25 from '../../assets/Group 25.png'
import group24 from '../../assets/Group 24.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'; 
import ArrowBottom from '../../icons/arrowBottom'
import Calendar from '../../icons/calendar'

function Home() {
//   async function fetchSilider() {
//     const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/slider/list');
//     const data = await response.json();
//     return data;
// }
// const [silider, setSilider] = useState([]);

// useEffect(() => {
//     async function getData() {
//         const result = await fetchSilider();
//         setSilider(result);
//     }
    
//     getData();
//     console.log(silider);
// }, []);

const [slider, setSlider] = useState([]);
  const [data, setData] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    async function fetchSlider() {
      const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/slider/list');
      const data = await response.json();
      setSlider(data);
    }

    async function fetchData() {
      const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/menu');
      const data = await response.json();
      setData(data);
    }

    fetchSlider();
    fetchData();
    console.log(data);
  }, []);


  async function fetchStatic() {
    const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/statistic-category');
    const data = await response.json();
    return data;
  }
  const [staticc, setStatic] = useState([]);

  useEffect(() => {
    async function getStatic() {
      const result = await fetchStatic();
      setStatic(result);
    }
    getStatic();
  }, []);
  console.log(staticc);
  
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className='home'>
      <div className='container'>

      <ul className=' collaction'> 
                <Link to={'/'} className='link lo'>
      <img className=' banner_img' src={homeImgOne} alt="" />
                </Link>
                {data.map((item, index) => (
            <li key={index} onClick={() => toggleDropdown(index)} className='item rod'>
              <ArrowBottom /> {item.name.luz}
            </li>
          ))}

          {data.map((item, index) => (
            activeDropdown === index && (
              <div className='faoliyat_ro faoliyat_back' key={index}>
                <ul className='banner_collaction'>
                  {item.menus.map((item, inx) => (
                    <Link className='link' to={`/${item.type.label}/${item.item}`}>
                      <li className='banner_item faoliyat_roo' key={inx}>{item.name.luz}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            )
          ))}
              </ul>
      </div>

      <Swiper
     spaceBetween={0}
     pagination={{
       clickable: true,
     }}
     modules={[Pagination]}
     className="mySwiper"
      >
        {
          slider.map((item, inx) =>  
          <SwiperSlide>
          <div className='container med' key={inx} >
            <img className='banner_photo' src={item.photo} alt="" />
            <img className='banner_photo_two' src={img} alt="" />
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
         {/* {
          yangilik.map((item, inx) => 
            <div className='two_div' key={inx}>

          <div className='two_div_imgs'>
            <img className='two_div_img' src={imgTwo} alt="" /> 
          </div>

          <div className='two_div_text '>
            <h3 className='div_text_h3'>{item.items[4].title.luz}</h3>
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
        )
         } */}
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
        <button className='home_btn_two'>Batafsil</button>
        </Link>
        
      </div>
      <div>
      <div className="banner_three ">
          <div className='container'>
          <h3 className='three_h3'>O‘rganilgan obyektlar</h3>
          <div className='three_flex'>
            {
              staticc.map((item, inx) =>
                <Link className='link' to={`/qulay-muhit/${item.id}`} key={inx}>
                      <div className='flex_box'>
                    <div className='circle'>
                      <h2 className='circle_h2'>80</h2>
                    </div>
                    <p className='flex_p'>{item.name.luz}</p>
                  </div>
              </Link>
              )
            }
          </div>
          </div>
        </div>
        <div className='soha'>
            <div className='container sohaa'>
            <Link className='link' to={'/'}>
                    <h6 className='soha-h6'>Qulay muhit obyektlari</h6>
                </Link>
            <div className='soha_flex'>
                <div className='soha_small o'>Jami</div>
                <div className='soha_small on '>
                    <h6 className='soha_h6'>I Chorak</h6>
                </div>
                <div className='soha_small on '>
                    <h6 className='soha_h6'>II Chorak</h6>
                </div>
                <div className='soha_small on'>
                    <h6 className='soha_h6'>III Chorak</h6>
                </div>
                <div className='soha_small on'>
                    <h6 className='soha_h6'>IV Chorak</h6>
                </div>
                <div className='soha_small on'>
                    <h6 className='soha_h6'>2023-yilda</h6>
                </div>
            </div>
            <div className='box_fle'>
            <div className='saha_biig'>
                {
                  staticc.map((item, inx) => 
                    <div key={inx}>
                  {
                    item.items.map((item,inx) => (
                      <Link to={`/qulay-muhit/${item.id}`} className='link' key={inx}>
                      <div className='biig_flex biiig_flex'>
                      <img className='biig_img' alt="" src={item.icon}/>
                      <h6 className='biig_h6'>{item.name.luz}</h6>
                      </div>
                  </Link>
                     ))
                  }
                  </div>
                  )
                }
                
            </div>
            </div>
            </div>
        </div>
        <h4 className='home_h4 container'>Hukumat portallari</h4>
        <div className="banner_small container">
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