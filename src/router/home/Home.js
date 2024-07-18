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
      setSlider(data);
    }

    async function fetchData() {
      const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/menu?lang=${currentLanguage}`);
      const data = await response.json();
      setData(data);
    }

    async function getStatic() {
      const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/statistic-category?lang=${currentLanguage}`);
      const data = await response.json();
      setStatic(data);
    }

    fetchSlider();
    fetchData();
    getStatic();
  }, [currentLanguage]); // Fetch data whenever currentLanguage changes

  return (
    <div className='home'>
      {/* Language selection buttons
      <button onClick={() => changeLanguage('kuz')}>English</button>
      <button onClick={() => changeLanguage('luz')}>O'zbekcha</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button> */}

      <div className='container'>
        <ul className='collaction'>
          <Link to={'/'} className='link lo'>
            <img className='banner_img' src={homeImgOne} alt='' />
          </Link>
          {/* Mapping over data for dropdown menu */}
          {data.map((item, index) => (
            <li key={index} onClick={() => toggleDropdown(index)} className='item rod'>
              <ArrowBottom /> {t(item.name[currentLanguage])} {/* Display name based on current language */}
            </li>
          ))}
          {/* Dropdown content */}
          {data.map((item, index) => (
            activeDropdown === index && (
              <div className='faoliyat_ro faoliyat_back' key={index}>
                <ul className='banner_collaction'>
                  {item.menus.map((subItem, inx) => (
                    <Link className='link' to={`/${subItem.type.label}/${subItem.item}`} key={inx}>
                      <li className='banner_item faoliyat_roo'>{subItem.name[currentLanguage]}</li> {/* Display name based on current language */}
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
          <h3 className='logo'>{t('Yangiliklar')}</h3> {/* Translate static text using t function */}
          <div className='three_div'>{/* Display news or other content dynamically */}</div>
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
        {/* Displaying government portals dynamically */}
      </div>
    </div>
  );
}

export default Home;
