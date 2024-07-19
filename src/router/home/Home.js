import React, { useState, useEffect } from 'react';
import './Home.css'; // Ensure this imports necessary styles
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img from '../../assets/Rectangle 56.png'
import ArrowBottom from '../../icons/arrowBottom';
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import { useTranslation } from 'react-i18next'; // Ensure this imports necessary translation hooks

function Home() {
  const [slider, setSlider] = useState([]);
  const [data, setData] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [staticc, setStatic] = useState([]);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('luz'); // Default language is Uzbek
  const [service, setService] = useState([]);
  const [news, setNews] = useState([]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language using i18next hook
    setCurrentLanguage(lng); // Update current language state
  };

  useEffect(() => {
    async function fetchSlider() {
      const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/slider/list?lang=${currentLanguage}`);
      const data = await response.json();
      console.log('Slider data:', data);
      setSlider(data);
    }

    async function fetchData() {
      const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/menu?lang=${currentLanguage}`);
      const data = await response.json();
      console.log('Menu data:', data);
      setData(data);
    }

    async function getStatic() {
      const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/statistic-category?lang=${currentLanguage}`);
      const data = await response.json();
      console.log('Static data:', data);
      setStatic(data);
    }
    
    async function getService() {
      const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/service/list?lang=${currentLanguage}`);
      const data = await response.json();
      console.log('Service data:', data);
      setService(data);
    }

    async function getNews() {
      const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/article?lang=${currentLanguage}`);
      const data = await response.json();
      console.log('News data:', data);
      setNews(data);
    }

    fetchSlider();
    fetchData();
    getStatic();
    getService();
    getNews();
  }, [currentLanguage]); // Fetch data whenever currentLanguage changes

  return (
    <div className='home'>
      {/* Language selection buttons */}
      <button onClick={() => changeLanguage('kuz')}>English</button>
      <button onClick={() => changeLanguage('luz')}>O'zbekcha</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>

      <div className='container'>
        <ul className='collaction'>
          <Link to={'/'} className='link lo'>
            <img className='banner_img' src={homeImgOne} alt='' />
          </Link>
          {/* Mapping over data for dropdown menu */}
          {data.map((item, index) => (
            <li key={index} onClick={() => toggleDropdown(index)} className='item rod'>
              <ArrowBottom /> {item.name[currentLanguage] || item.name['luz']} {/* Display name based on current language */}
            </li>
          ))}
          {/* Dropdown content */}
          {data.map((item, index) => (
            activeDropdown === index && item.menus && (
              <div className='faoliyat_ro faoliyat_back' key={index}>
                <ul className='banner_collaction'>
                  {item.menus.map((subItem, inx) => (
                    <Link className='link' to={`/${subItem.type.label}/${subItem.item}`} key={inx}>
                      <li className='banner_item faoliyat_roo'>{subItem.name[currentLanguage] || subItem.name['luz']}</li> {/* Display name based on current language */}
                    </Link>
                  ))}
                </ul>
              </div>
            )
          ))}
        </ul>
      </div>

      {/* Slider component */}
      <Swiper
        spaceBetween={0}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {slider.map((item, inx) => (
          <SwiperSlide key={inx}>
            <div className='container med'>
              <img className='banner_photo' src={item.photo} alt='' />
              <img className='banner_photo_two' src={img} alt='' />
              <div className='ul_flex '></div>
              <h1 className='banner_h1'>{item.title[currentLanguage]}</h1> {/* Display title based on current language */}
              <button className='home_btn'>Batafsil</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Other sections and components with language-specific content */}
      {/* Ensure to replace content accordingly */}

      <div className='container'>
        <div className='banner'></div>
        <div className='banner_two'>
        <h3 className='logo'>Yangiliklar</h3>
          <div className='two_div'>

            <div className='two_div_imgs'>
              <img className='two_div_img' src={''} alt="" />
            </div>

            <div className='two_div_text '>
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

            {
              Array.isArray(news) && news.length > 0 && news.map((item, inx) => (
                Array.isArray(item.items) && item.items.length > 0 && item.items.map((subItem, subInx) => (
                  <div className='three_div' key={subInx}>
                    <div className='three_cart'>
                      <img src={subItem.photo} alt="" />
                      <div className='icon_flex'>
                        <h3 className='three_cart_h3'>{subItem.published_at}</h3>
                      </div>
                      <h4 className='three_cart_h4'>{subItem.title[currentLanguage]}</h4>
                      <p className='three_cart_p'>Joriy yil 8-aprel kuni O‘zbekistonda Global akseleratorning ustuvor yo‘nalishlarini muhokama qilish va tasdiqlash bo‘yicha Maslahat seminari bo‘lib o‘tdi, unda akseleratsiya nuqtalari va sektorning potentsial...</p>
                    </div>
                  </div>
                ))
              ))
            }
          </div>
        </div>
        <Link className='link' to={'/batafsil'}>
          <button className='home_btn_two'>{t('Batafsil')}</button> {/* Translate button text using t function */}
        </Link>
      </div>

      {/* Example of displaying static categories */}
      <div className='banner_three '>
        <div className='container'>
          <h3 className='three_h3'>{t('O‘rganilgan obyektlar')}</h3> {/* Translate static text using t function */}
          <div className='three_flex'>
            {staticc.map((item, inx) => (
              <Link className='link' to={`/qulay-muhit/${item.id}`} key={inx}>
                <div className='flex_box'>
                  <div className='circle'>
                    <h2 className='circle_h2'>80</h2>
                  </div>
                  <p className='flex_p'>{item.name[currentLanguage]}</p> {/* Display name based on current language */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <h4 className='home_h4 container'>{t('Hukumat portallari')}</h4> {/* Translate static text using t function */}
      <div className='banner_small container'>
       {
        service.map((item, inx) => (
          <div className='flex_img' key={inx}>
            <img className='img' src={item.photo} alt="" />
            <button className='flex_btn'>{item.title.luz}</button>
          </div>
        ))
       }
      </div>
    </div>
  );
}

export default Home;
