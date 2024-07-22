import React, { useState, useEffect } from 'react';
import './index.css';
import { Link, useParams } from 'react-router-dom';
import ArrowBottom from '../../icons/arrowBottom';
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png';
import Search from '../../icons/search';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Mail from '../../icons/mail';
import Phone from '../../icons/phone';
import Reorder from '../../icons/reordar';

function Index() {
    const [data, setData] = useState([]);
    const [staff, setStaff] = useState([]);
    const [menuContent, setMenuContent] = useState(null);
    const { type } = useParams();
    const breadcrumbs = useBreadcrumbs();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/menu');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Menu ma'lumotlarini olishda xatolik:", error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchStaff() {
          try {
            const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/staff/list?type=${type}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Xodimlar ma'lumotlari:", data); // Ma'lumotlarni tekshirish uchun log
            setStaff(data.items || []);
          } catch (error) {
            console.error("Xodimlar ma'lumotlarini olishda xatolik:", error);
          }
        }
        if (type) {
            fetchStaff();
        }
    }, [type]);

    useEffect(() => {
        async function fetchMenuContent() {
            try {
                const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/menu/sidebar?item=${type}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const menuData = await response.json();
                setMenuContent(menuData);
                console.log("Sahifa mazmuni:", menuData);
            } catch (error) {
                console.error("Sahifa mazmunini olishda xatolik:", error);
            }
        }
        if (type) {
            fetchMenuContent();
        }
    }, [type]);



    return (
        <div>
            <div className='ijtimoiy'>
                <div className='container'>
                    <div className="ijtimoiy_logo">
                        <Link to={'/'} className='ijtimoiy_logo link to'>
                            <img src={homeImgOne} alt="logo" />
                            <h2 className='ijtimoiy_h2'>Ijtimoiy inspeksiya</h2>
                        </Link>
                        <input type="text" /> <Search />
                    </div>
                    <hr className='ijtimoiy_hr' />
                    <div className='re'>
                        <Reorder />
                    </div>
                    <ul className='ijtimoiy_collaction'>
                        {data.map((item, inx) => (
                            <Link to={`/${item}`} className='link' key={inx}>
                                <li className='ijtimoiy_item go'><ArrowBottom /> {item.name.luz}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className='container tor'>
                    {breadcrumbs.map(({ match, breadcrumb }) => (
                        <Link className='link tod' key={match.pathname} to={match.pathname}>
                            {breadcrumb}
                        </Link>
                    ))}
                </div>
                <div className='ols container'>
                    <div className="banner_big">
                        <h1 className='tuzilma_h1'>Staff</h1> {/* Display the type */}
                            {staff.map((item, inx) => (
                                <div className='rahbar_flex' key={inx}>
                                    <div className='rahbar_img'>
                                        <img src={item.photo} alt="staff" />
                                    </div>
                                    <div className='rahbar_text'>
                                        <h6>{item.name.luz}</h6>
                                        <h5 className='rahbar_h6'>{item.role.luz}</h5>
                                        <div className='rahbar_hr'></div>
                                        <div className='rahbar_icons'>
                                            <div className='icon_one'>
                                                <Mail />
                                                <p>{item.description.date.luz}</p>
                                            </div>
                                            <div className='icon_one'>
                                                <Phone />
                                                <p>{item.description.phone}</p>
                                            </div>
                                            <div className='icon_one'>
                                                <Mail />
                                                <p>{item.description.mail}</p>
                                            </div>
                                        </div>
                                        <div className='rahbar_hr'></div>
                                        <div className='rahbar_icon'></div>
                                        <button className='rahbar_btn'>Tarjimai hol</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className='banner_text'>
                        {menuContent && menuContent.parent && (
                            <div>
                                <li className='banner_item one'>{menuContent.parent.name.luz}</li>
                                {menuContent.parent.menus.map((item, inx) => (
                                    <Link className='link' to={`/${item.type.label}/${item.item}`} key={inx}>
                                        <hr />
                                        <li className='banner_item'>{item.name.luz}</li>
                                    </Link>
                                ))}
                                <hr />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;