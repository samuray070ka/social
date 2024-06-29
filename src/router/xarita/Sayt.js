import React from 'react'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../icons/arrowBottom'
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Search from '../../icons/search'
import './Sayt.css'
function Sayt() {
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
            <h2 className='ijtimoiy_h2'>Sayt xaritasi</h2>
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
          <div className='banner_big sayt_big'>
            <h6 className='tuzilma_h1'>Sayt xaritasi</h6>
            <h6 className='log'>Ijtimoiy inspeksiya</h6>
            <ul className='sayt_collaction'>
              <li className='sayt_item'>Inspeksiya haqida</li>
              <li className='sayt_item'>Nizom</li>
              <li className='sayt_item'>Tuzilma</li>
              <li className='sayt_item'>Rahbariyat</li>
              <li className='sayt_item'>Markaziy apparat</li>
              <li className='sayt_item'>Hududiy boshqarmalar</li>
              <li className='sayt_item'>Xalqaro hamkorlik</li>
              <li className='sayt_item'>Bo‘sh ish o‘rinlari</li>
            </ul>
            <h6 className='log'>Faoliyat</h6>
            <ul className='sayt_collaction'>
              <li className='sayt_item'>Qulay muhit</li>
              <li className='sayt_item'>Katta yoshdagilar </li>
              <li className='sayt_item'>Voyaga yetmagan</li>
              <li className='sayt_item'>Nogironlikni belgilash</li>
            </ul>
            <h6 className='log'>Normatif huquqiy hujjatlar</h6>
            <ul className='sayt_collaction'>
              <li className='sayt_item'>O‘zbekiston Respublikasi qonunlari</li>
              <li className='sayt_item'>Prezidenti qaror va farmovlari    </li>
              <li className='sayt_item'>Vazirlar mahkamasi qarorlaro</li>
              <li className='sayt_item'>Idoraviy hujjatlar</li>
              <li className='sayt_item'>O‘z kuchini yo‘qotgan hujjatlar  </li>
            </ul>
            <h6 className='log'>Jamoatchilik</h6>
            <ul className='sayt_collaction'>
              <li className='sayt_item'>Yangiliklar</li>
              <li className='sayt_item'>Press-reliz   </li>
              <li className='sayt_item'>Videqollanma</li>
              <li className='sayt_item'>Rahbariyat ma’ruzalari</li>
              <li className='sayt_item'>Videoroliklar  </li>
            </ul>
            <h6 className='log'>Statistika</h6>
            <ul className='sayt_collaction'>
              <li className='sayt_item'>Tekshiruv va profilaktika ishlari</li>
              <li className='sayt_item'>Murojaatlarni ko‘rib chiqsh   </li>
              <li className='sayt_item'>OAVda chiqishlar</li>
            </ul>
            <h6 className='log'>Ochiq ma’lumotlar</h6>
            <ul className='sayt_collaction'>
              <li className='sayt_item'>Davlat xaridlari</li>
              <li className='sayt_item'>Moliyaviy </li>
              <li className='sayt_item'>Inspeksiya faoliyati</li>
            </ul>
            <h6 className='log'>Aloqa</h6>
            <ul className='sayt_collaction'>
              <li className='sayt_item'>Onlayin murojjat</li>
              <li className='sayt_item'>Oflayin murojjat</li>
              <li className='sayt_item'>Biz bilan bog'lanish</li>
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Sayt