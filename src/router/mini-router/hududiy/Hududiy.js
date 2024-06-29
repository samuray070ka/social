import React from 'react'
import '../../ijtimoiy/Ijtimoiy.css'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../../icons/arrowBottom'
import homeImgOne from '../../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../../icons/search'
import Mail from '../../../icons/mail'
import Phone from '../../../icons/phone'
// import Clock from '../../../icons/clock'
import HududiyImg from '../../../assets/account_box (1).png'
import HududiyImg2 from '../../../assets/Mask group (11).png'
import HududiyImg3 from '../../../assets/Mask group (12).png'
import MaskGroupImg from '../../../assets/Mask group.png'
import MaskGroupImg1 from '../../../assets/Mask group (1).png'
import MaskGroupImg2 from '../../../assets/Mask group (2).png'
import MaskGroupImg3 from '../../../assets/Mask group (3).png'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Location from '../../../icons/location'

 
function Hududiy() {
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
          <div className='banner_big '>
            <h1 className='tuzilma_h1'>Hududiy boshqarmalar</h1>
            <div className='rahbar_flex'>
            <div className='rahbar_img'>
              <img src={HududiyImg} alt="" />
            </div>
            <div className='rahbar_text'>
              <h6>Vakant </h6>
              <h5 className='rahbar_h6'>Ijtimoiy inspeksiya Qoraqolpog‘iston Respublikasi boshqarma Boshlig‘i</h5>
              <div className='rahbar_hr'></div>
              <div className='rahbar_icons'>
                <div className='icon_one'>
                  <Mail/>
                  <p>ii@.exat.uz</p>
                </div>
                <div className='icon_one'>
                  <Phone/>
                  <p>+998 71 207 97 98</p>
                </div>
                <div className='icon_one'>
                  <Mail/>
                  <p>Chorshanba: 11:00 - 16:00</p>
                </div>
              </div>
              <div className='rahbar_hr'></div>
              <div className='rahbar_icon location'>
                <Location/>
                <h6>Nukus tumani, A.Dosnazarov ko‘chasi, 97a-uy</h6>
              </div>
            </div>

          </div>
            <div className='rahbar_flex'>
            <div className='rahbar_img'>
              <img src={HududiyImg2} alt="" />
            </div>
            <div className='rahbar_text'>
              <h6>Xamdamov Yorqinjon Satvoldiyevich</h6>
              <p className='rahbar_h6'>Ijtimoiy inspeksiya Toshkent shahar boshqarma Boshlig‘i</p>
              <div className='rahbar_hr'></div>
              <div className='rahbar_icons'>
                <div className='icon_one'>
                  <Mail/>
                  <p>X.Yaxyobek@ii.uz</p>
                </div>
                <div className='icon_one'>
                  <Phone/>
                  <p>+998 71 207 97 98</p>
                </div>
                <div className='icon_one'>
                  <Mail/>
                  <p>Chorshanba: 11:00 - 16:00</p>
                </div>
              </div>
              <div className='rahbar_hr'></div>
              <div className='rahbar_icon location'>
               <Location/>
               <h6>Toshkent shahar, Chilonzor tumani, Nurxon ko‘chasi 21-uy</h6>
              </div>
            </div>
            </div>
            <div className='rahbar_flex'>
            <div className='rahbar_img'>
              <img src={HududiyImg3} alt="" />
            </div>
            <div className='rahbar_text'>
              <h6>Azizov Tulanboy Turg‘unovich</h6>
              <h5 className='rahbar_h6'>Ijtimoiy inspeksiya Toshkent viloyati boshqarma Boshlig‘i</h5>
              <div className='rahbar_hr'></div>
              <div className='rahbar_icons'>
                <div className='icon_one'>
                  <Mail/>
                  <p>K.Zoxid@ii.uz</p>
                </div>
                <div className='icon_one'>
                  <Phone/>
                  <p>+998 71 207 97 98</p>
                </div>
                <div className='icon_one'>
                  <Mail/>
                  <p>Chorshanba: 11:00 - 16:00</p>
                </div>
              </div>
              <div className='rahbar_hr'></div>
              <div className='rahbar_icon location'>
              <Location/>
              <h6>Toshkent shahar, Bektemir tumani, Yangihayot MFY, Bektemir ko‘chasi 44-uy</h6>
              </div>
            </div>

            </div>
            <div className='rahbar_flex'>
            <div className='rahbar_img'>
              <img src={HududiyImg} alt="" />
            </div>
            <div className='rahbar_text'>
              <h6>Vakant</h6>
              <p className='rahbar_p'>Ijtimoiy inspeksiya Andijon viloyati boshqarma Boshlig‘i</p>
              <div className='rahbar_hr'></div>
              <div className='rahbar_icons'>
                <div className='icon_one'>
                  <Mail/>
                  <p>B.Oybek@ii.uz</p>
                </div>
                <div className='icon_one'>
                  <Phone/>
                  <p>+998 71 207 97 98</p>
                </div>
                <div className='icon_one'>
                  <Mail/>
                  <p>Chorshanba: 11:00 - 16:00</p>
                </div>
              </div>
              <div className='rahbar_hr'></div>
              <div className='rahbar_icon location'>
              <Location/>
              <h6>Andijon shahar, A.Navoiy shox ko‘chasi, 86 A-uy</h6>
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
    </div>
  )
}

export default Hududiy