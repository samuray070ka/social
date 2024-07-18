import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Phone from '../../icons/phone';
import Visible from '../../icons/visible';
import Map from '../../icons/map';
import Location from '../../icons/location';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reordar from '../../icons/reordar';

function Navbar() {
  const [slider, setSlider] = useState([]);
  const [data, setData] = useState([]);
  const [staticc, setStatic] = useState([]);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('luz'); // Default language is Uzbek

 

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
  }, [currentLanguage]);

  const [activeDropdown, setActiveDropdown] = useState(false);

  const toggleDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  return (
    <div className='navbar'>
      <div className="container">
        <div className='navbar_flexe'>
          <div className='svg'>
            <Reordar />
          </div>
          <div className='navbar_flex'>
            <div className='navbar_loc'>
              <Phone />
              <h2 className='navbar_h2'>+998 77 207 97 98</h2>
            </div>
            <div className='navbar_locc'>
              <Location />
              <p className='navbar_p'>Manzil: Toshkent shahar, Chilonzor tumani, Nurxon ko'chasi 21-uy</p>
            </div>
            <div className='navbar_loccc'>
              <Link className='link tooo' to={'/zaif'}>
                <Visible />
                <h3 className='navbar_h3' id='visibility'>Zarif ko'ruvchilar uchun</h3>
              </Link>
            </div>
            <div className='navbar_locccc'>
              <Map />
              <Link className='link' to={'/xarita'}>
                <h4 className='navbar_h4'>Sayt xaritasi</h4>
              </Link>
            </div>
          </div>
          <div className='til'>
          <button className='navbar_btn' onClick={toggleDropdown}>Uz</button>
          {activeDropdown && (
            <div className='dropdown'>
              <ul className='dropdown_menu'>
                <li className='dropdown_item' onClick={() => changeLanguage('luz')}>UZ</li>
                <li className='dropdown_item' onClick={() => changeLanguage('ru')}>RU</li>
                <li className='dropdown_item' onClick={() => changeLanguage('kuz')}>EN</li>
              </ul>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
