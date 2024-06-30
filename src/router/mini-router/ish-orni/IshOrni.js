import React from 'react'
import '../../ijtimoiy/Ijtimoiy.css'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../../icons/arrowBottom'
import homeImgOne from '../../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../../icons/search'
import IshImg from '../../../assets/208A3050 13.png'
import Location from '../../../icons/location'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Phone from '../../../icons/phone'
import Reorder from '../../../icons/reordar'

function IshOrni() {
  const userNamesById = { 1: "John" };
  
  const DynamicUserBreadcrumb = ({ match }) => (
    <span>{userNamesById[match.params.userId]}</span>
  );
  
  const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
  
  // define custom breadcrumbs for certain routes.
  // breadcrumbs can be components or strings.
  const routes = [
    { path: "/users/:userId", breadcrumb: DynamicUserBreadcrumb },
    { path: "/example", breadcrumb: "Custom Example" },
    {
      path: "/custom-props",
      breadcrumb: CustomPropsBreadcrumb,
      props: { someProp: "Hi" },
    },
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <div>
      <div className='container'>
        <div className="ijtimoiy_logo">
          <Link to={'/'} className='ijtimoiy_logo link to'>
            <img src={homeImgOne} alt="" />
            <h2 className='ijtimoiy_h2'>Ijtimoiy inspeksiya</h2>
          </Link> 
          <input type="text" /> <Search/>
        </div>
        <hr  className='ijtimoiy_hr'/>
        <div className='re'>
        <Reorder/>

        </div>
        <ul className='ijtimoiy_collaction'>
        <Link to={'/ijtimoiy'} className='link'>
                  <li className='ijtimoiy_item'><ArrowBottom/> Ijtimoiy inspeksiya</li>
                </Link>
                <Link to={'/faoliyat'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/> Faoliyat</li>
                </Link>
                <Link to={'/normativ'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Normativ hujjatlar</li>
                </Link>
                <Link to={'/jamoatchilik'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Jamoatchilik</li>
                </Link>
                <Link to={'/statistica'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Statistika</li>
                </Link>
                <Link to={'/ochiq'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Ochiq ma'lumotlar</li>
                </Link>
                <Link to={'/aloqa'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Aloqa</li>
                </Link>
        </ul>
        </div>
        <div className='container tor'>
          {breadcrumbs.map(({ match, breadcrumb }) => (
          <Link className='link tod' key={match.pathname}  to={match.pathname}>
            { breadcrumb}
          </Link>
        ))}
          </div>
        <div className='ols  container'>
          <div className='banner_big '>
            <h1 className='tuzilma_h1'>Bo'sh ish o'rnlari</h1>
            <div className='ish_flex'>
              <div className='ish_img'>
                <img src={IshImg} alt="" />
              </div>
              <div className="ish_text">
                <h6 className='ish_text_h6'>Jizzax viloyati boshqarmasi</h6>
                <h6 className='ish_text_h6_oriq'>Katta yoshdagilarga ijtimoiy xizmatlar ko’rsatilinishi ustidan nazorat qilish bo‘limi bosh mutaxassisi</h6>
                <div className='rahbar_hr'></div>
                <div className='ish_icons'>
                  <div className='ish_icon'>
                    <Location/>
                    <h6 className='ish_icon_h6'>Jizzax shahar, A.Navoiy shox ko‘chasi, 4 uy</h6>
                  </div>
                  <div className='ish_icon end'>
                    <Phone/>
                    <h6 className='ish_icon_h6'>+998 71 207 97 98</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='banner_text '>
            <ul className='banner_collaction'>
              <li className='banner_item one'>Ijtimoiy inspeksiya</li>
              <hr />
              <Link to={'/ijtimoiy'} className='link'>
                <li className='banner_item '>Inspeksiya haqida</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/nizom'} className='link'>
                <li className='banner_item '>Nizom</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/tuzilma'} className='link'>
                <li className='banner_item '>Tuzilma</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/rahbaryat'} className='link'>
                <li className='banner_item '>Rahbariyat</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/markaziy'} className='link'>
                <li className='banner_item '>Markaziy apparat</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/hududiy'} className='link'>
                <li className='banner_item '>Hududiy boshqarmalar</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/hamkorlik'} className='link'>
                <li className='banner_item '>Hamkorlik</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/ish-orni'} className='link'>
                <li className='banner_item '>Bo'sh ish o'rnlari</li>
              </Link>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default IshOrni