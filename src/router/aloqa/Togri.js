import React,{useState} from 'react'
import './Aloqa.css'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../icons/arrowBottom'
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Search from '../../icons/search'
import done_all from '../../assets/done_all.png'

function Togri() {
    const userNamesById = { 1: "John" };
  
    const DynamicUserBreadcrumb = ({ match }) => (
      <span>{userNamesById[match.params.userId]}</span>
    );
    
    const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
    
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
            <h2 className='ijtimoiy_h2'>Aloqa</h2>
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
          <div className='online_murojat'>
            <div className='murojat_img_flex'>
              <img className='img_fle_img' src={homeImgOne} alt="" />
              <h6 className='img_flex_h6'>Sizda shikoyat yoki taklif bormi?
              Bizga online murojaat qiling.</h6>
            </div>
            
           
            <div className='mor'>
                <img src={done_all} alt="" />
                <button className='muroja'>Sizning arizangiz muvaffaqiyatli yuborildi!</button>
            </div>
            <h6 className='d'>Mutaxassislarimiz belgilangan muddatda murojaatingizni ko’rib siz bilan bog‘lanadilar.</h6>
              <div className='hu'>
                <Link className='link' to={'/aloqa'}>
                    <button className='murojat_btn_qa' type='submit'>Yangi murojaat yuborish</button>
                </Link>
                <Link className='link' to={'/'}>
                    <button className='murojat_btn' type='submit'>Bosh sahifaga o‘tish</button>
                </Link>
              </div>
          </div>
        </div>
        </div>
  )
}

export default Togri