import React from 'react'
import './Ochiq.css'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../icons/arrowBottom'
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Search from '../../icons/search'

function Ochiq() {
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
            <h2 className='ijtimoiy_h2'>Ochiq ma'lumotlar</h2>
          </Link>
          <input type="text" /> <Search/>
        </div>
        <hr  className='ijtimoiy_hr'/>
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
      <div className="ijtimoiy_banner ">
        <div className='ijti_ban  container'>
          <div className='banner_big'>
            <h6>Ochiq ma'lumotlar</h6>
          </div>
          <div className='banner_text '>
            <ul className='banner_collaction'>
              <li className='banner_item one'>Ijtimoiy inspeksiya</li>
              <hr />
              <li className='banner_item '>Inspeksiya haqida</li>
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
    </div>
  )
}

export default Ochiq