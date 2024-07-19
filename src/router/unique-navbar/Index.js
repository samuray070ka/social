import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './index.css';
import ArrowBottom from '../../icons/arrowBottom';
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png';
import Search from '../../icons/search';
import useBreadcrumbs from "use-react-router-breadcrumbs";

function Index() {
  const { slug } = useParams(); // useParams yordamida slugni olish
  const [data, setData] = useState([]);
  const [pageContent, setPageContent] = useState(null);
  const [menuContent, setMenuContent] = useState(null);

  // Menyu ma'lumotlarini olish
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/menu');
        const data = await response.json();
        console.log("Menyu ma'lumotlari:", data); // Ma'lumotlarni tekshirish uchun log
        setData(data);
      } catch (error) {
        console.error("Menyu ma'lumotlarini olishda xatolik:", error);
      }
    }

    fetchData();
  }, []);
  console.log(data);

  // Sahifa mazmunini olish
  useEffect(() => {
    async function fetchPageContent() {
      try {
        const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/page/view?slug=${slug}&expand=body,photo,keywords,description,meta_title`);
        const data = await response.json();
        console.log("Sahifa mazmuni:", data); // Ma'lumotlarni tekshirish uchun log
        setPageContent(data);
      } catch (error) {
        console.error("Sahifa mazmunini olishda xatolik:", error);
      }
    }

    if (slug) {
      fetchPageContent();
    }
  }, [slug]);

  useEffect(() => {
    async function fetchMenuContent() {
      try {
        const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/page/view?slug=${slug}&expand=body,photo,keywords,description,meta_title`);
        const data = await response.json();
        console.log("Sahifa mazmuni:", data); // Ma'lumotlarni tekshirish uchun log
        setMenuContent(data);
      } catch (error) {
        console.error("Sahifa mazmunini olishda xatolik:", error);
      }
    }

    if (slug) {
      fetchMenuContent();
    }
  }, [slug]);

  const breadcrumbs = useBreadcrumbs();

  return (
    <div>
      <div className='ijtimoiy'>
        <div className='container'>
          <div className="ijtimoiy_logo">
            <Link to={'/'} className='ijtimoiy_logo link to'>
              <img src={homeImgOne} alt="" />
              <h2 className='ijtimoiy_h2'>Ijtimoiy inspeksiya</h2>
            </Link>
            <input type="text" /> <Search />
          </div>
          <hr className='ijtimoiy_hr' />
          <ul className='ijtimoiy_collaction'>
            {data.map((item, inx) => (
              <Link to={`/page/${item.slug}`} className='link' key={inx}>
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
        <div className='container ols'>
          <div className='banner_big'>
            {pageContent && (
              <div>
                <h1>{pageContent.title?.luz}</h1>
                <p dangerouslySetInnerHTML={{ __html: pageContent.body?.luz }}></p>
              </div>
            )}
          </div>
          <div className='banner_text'>
            {
              data.map((item, inx) => (
                <React.Fragment key={inx}>
                  <li className='banner_item one'>{item.name.luz}</li>
                  {item.menus && item.menus.map((subItem, subInx) => (
                    <Link className='link' to={`/${subItem.type.label}/${subItem.item}`} key={subInx}>
                      <hr />
                      <li className='banner_item'>{subItem.name.luz}</li>
                    </Link>
                  ))}
                  <hr />
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
