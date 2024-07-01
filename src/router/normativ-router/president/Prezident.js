import React from 'react'
import '../../normativ/Normativ.css'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../../icons/arrowBottom'
import homeImgOne from '../../../assets/IJTIMOIY logo 2 1.png'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Search from '../../../icons/search'
import ChildImg from '../../../assets/text 24.png'
function Prezident() {
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
            <h2 className='ijtimoiy_h2'>Normativ hujjatlar</h2>
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
        <div className='ols  container'>
          <div className='banner_big'>
            <h6 className='tuzilma_h1'>Prezident farmon va qarorlari</h6>
            <div className='flex_wrapper'>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
              <div className='flex_child'>
                <div className='child_imgs'>
                  <img className='child_img' src={ChildImg} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>“Женевская декларация прав ребёнка”, принятая Пятой Ассамблеей Лиги Наций</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='banner_text '>
            <ul className='banner_collaction'>
              <li className='banner_item one'>Ijtimoiy inspeksiya</li>
              <hr />
              <Link to={'/normativ'} className='link'>
                <li className='banner_item '>Xalqaro normativ hujjatlar</li>
              </Link>
              <hr />
              <Link to={'/normativ/ozbekiston'} className='link'>
                <li className='banner_item '>O‘zbekiston Respublikasi qonunlari</li>
              </Link>
              <hr />
              <Link to={'/normativ/prezident'} className='link'>
                <li className='banner_item '>Prezident farmon va qarorlari</li>
              </Link>
              <hr />
              <Link to={'/normativ/vazirlar'} className='link'>
                <li className='banner_item '>Vazirlar mahkamasi qarorlari</li>
              </Link>
              <hr />
              <Link to={'/normativ/idoraviy'} className='link'>
                <li className='banner_item '>Idoraviy normativ-huquqiy hujjatlar</li>
              </Link>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Prezident