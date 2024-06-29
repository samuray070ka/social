import React from 'react'
import '../../aloqa/Aloqa.css'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../../icons/arrowBottom'
import homeImgOne from '../../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../../icons/search'
import sideImg from '../../../assets/Rectangle 69.png'
import sideImgOne from '../../../assets/Rectangle 103.png'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Phone from '../../../icons/phone'
import Mail from '../../../icons/mail'
import Clock from '../../../assets/access_time.png'
import Location from '../../../icons/location'
function Xorazm() {
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
          <Link to={'/aloqa'} className='ijtimoiy_logo link to'>
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
      <div className="ijtimoiy_banner ">
        <div className='ijti_ban  container sidee'>
          <div className='sidebar'>
            <h1>Hududiy manzillarimiz:</h1>
            <ul className='side_collaction'>
              <Link to={'/aloqa/andijon'} className='link'>
                <li className='side_item'>Andijon viloyati</li>
              </Link>
              <Link to={'/aloqa/namangan'} className='link'>
                <li className='side_item'>Namangan viloyati</li>
              </Link>
              <Link to={'/aloqa/fargona'} className='link'>
                <li className='side_item'>Farg‘ona viloyati</li>
              </Link>
              <Link to={'/aloqa/sirdaryo'} className='link'>
                <li className='side_item'>Sirdaryo viloyati</li>
              </Link>
              <Link to={'/aloqa/jizzax'} className='link'>
                <li className='side_item'>Jizzax viloyati</li>
              </Link>
              <Link to={'/aloqa/samarqand'} className='link'>
                <li className='side_item'>Samarqand viloyati</li>
              </Link>
              <Link to={'/aloqa/surxondaryo'} className='link'>
                <li className='side_item'>Surxondaryo viloyati</li>
              </Link>
              <Link to={'/aloqa/qashqadaryo'} className='link'>
                <li className='side_item'>Qashqadaryo viloyati</li>
              </Link>
              <Link to={'/aloqa/navoiy'} className='link'>
                <li className='side_item'>Navoiy viloyati</li>
              </Link>
              <Link to={'/aloqa/buxoro'} className='link'>
                <li className='side_item'>Buxoro viloyati</li>
              </Link>
              <Link to={'/aloqa/toshkent-viloyat'} className='link'>
                <li className='side_item'>Toshkent viloyati</li>
              </Link>
              <Link to={'/aloqa/toshkent-shahri'} className='link'>
                <li className='side_item'>Toshkent shahri</li>
              </Link>
              <Link to={'/aloqa/xorazm'} className='link'>
                <li className='side_item'>Xorazm viloyati</li>
              </Link>
              <Link to={'/aloqa/qoraqalpoq'} className='link'>
                <li className='side_item'>Qoraqalpog‘iston Respublikasi</li>
              </Link>

            </ul>
          </div>
         <div className='side'>
         <div className=' sidebar_big mt'>
          <img className='side_img' src={sideImg} alt="" />
          <div className='yashil'>
            <h6 className='yashil_h6'>Sizda shikoyat yoki taklif bormi?
            Bizga offline murojaat qiling.</h6>
          </div>
          </div>
          <div className='sidebar_big'>
            <div className='pt'>
            <img className='big_img' src={sideImgOne} alt="" />
            <div className='big_side'>
              <div className='child_side'>
                  <img src={Clock} alt="" />
                  <span>Qabul kunlari:</span>
                  <h6>Dushanba: 11:00 - 16:00</h6>
              </div>
              <div className='child_side'>
                <Phone/>
                  <span>Telefon raqam:</span>
                  <h6>+998 71 266 02 23</h6>
              </div>
              <div className='child_side'>
                <Mail/>
                  <span>info@ijtimoiyins.@uzexat.uz</span>
              </div>
            </div>
            </div>
            <h6 className='nim'>Ism familiya otasining ismi</h6>
            <h6 className='big_span'>Ijtimoiy inspeksiya Andijon viloyati boshqarmasi mas’ul xodimi</h6>
            <hr className='side_hr'></hr>
            <div className='flex_sid'>
              <Location/>
              <h6>Manzil: <span>Andijon shahar, A.Navoiy shox ko‘chasi, 86 A-uy</span></h6>
            </div>
          </div>
         </div>
          <div className='banner_text '>
            <ul className='banner_collaction'>
              <li className='banner_item one'>Aloqa</li>
              <hr />
              <Link to={'/aloqa'}  className='link to'>
                <li className='banner_item '>Online murojaat</li>
              </Link>
              <hr />
              <Link to={'/aloqa/offline'} className='link'>
                <li className='banner_item '>Offline murojaat</li>
              </Link>
              <hr />
              <Link to={'/aloqa/boglanish'} className='link'>
                <li className='banner_item '>Biz bilan bog‘lanish</li>
              </Link>
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Xorazm