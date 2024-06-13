import React from 'react'
import '../../ijtimoiy/Ijtimoiy.css'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../../icons/arrowBottom'
import homeImgOne from '../../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../../icons/search'
import Mail from '../../../icons/mail'
import Phone from '../../../icons/phone'
// import Clock from '../../../icons/clock'
import RahbarImg from '../../../assets/208A3050 1.png'
import RahbarImgTwo from '../../../assets/208A3050 2.png'
import Twitter from '../../../assets/twitter.png'
import Facebook from '../../../assets/facebook.png'
import LinkEdin from '../../../assets/Group.png'
import MaskGroupImg from '../../../assets/Mask group.png'
import MaskGroupImg1 from '../../../assets/Mask group (1).png'
import MaskGroupImg2 from '../../../assets/Mask group (2).png'
import MaskGroupImg3 from '../../../assets/Mask group (3).png'
function Markaziy() {
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
      <div className="ijtimoiy_banner ">
        <div className='ijti_ban  container'>
          <div className='banner_big '>
          <h1 className='tuzilma_h1'>Markaziy apparat</h1>
            <div className='rahbar_flex'>
            <div className='rahbar_img'>
              <img src={MaskGroupImg} alt="" />
            </div>
            <div className='rahbar_text'>
              <h6>Abdulazizov Joʻrabek Fahriddinovich</h6>
              <h5 className='rahbar_h6'>Axborot tahlil va ijro intizomi boʻyicha sho‘basi bosh mutaxassisi</h5>
              <div className='rahbar_hr'></div>
              <div className='rahbar_icons'>
                <div className='icon_one'>
                  <Mail/>
                  <p>A.Jo‘rabek@ii.uz</p>
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
              <div className='rahbar_icon'>
                <img className='icon_img' src={Facebook} alt="" />
                <img className='icon_img ml' src={Twitter} alt="" />
                <img className='icon_img ml ' src={LinkEdin} alt="" />
              </div>
            </div>

            </div>
            <div className='rahbar_flex'>
            <div className='rahbar_img'>
              <img src={MaskGroupImg1} alt="" />
            </div>
            <div className='rahbar_text'>
              <h6>Xasanov Yaxyobek Yaqubjon oʻgʻli</h6>
              <p className='rahbar_h6'>Bosh yurist</p>
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
              <div className='rahbar_icon'>
                <img className='icon_img' src={Facebook} alt="" />
                <img className='icon_img ml' src={Twitter} alt="" />
                <img className='icon_img ml' src={LinkEdin} alt="" />
              </div>
            </div>
            </div>
            <div className='rahbar_flex'>
            <div className='rahbar_img'>
              <img src={MaskGroupImg2} alt="" />
            </div>
            <div className='rahbar_text'>
              <h6>Kamilov Zoxid Xamidjanovich</h6>
              <h5 className='rahbar_h6'>Inson resurslarini rivojlantirish va boshqarish sho‘basi bosh mutaxassisi</h5>
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
              <div className='rahbar_icon'>
                <img className='icon_img' src={Facebook} alt="" />
                <img className='icon_img ml' src={Twitter} alt="" />
                <img className='icon_img ml ' src={LinkEdin} alt="" />
              </div>
            </div>

            </div>
            <div className='rahbar_flex'>
            <div className='rahbar_img'>
              <img src={MaskGroupImg3} alt="" />
            </div>
            <div className='rahbar_text'>
              <h6>Boltaboyev Oybek Toshpo‘latjon O‘g‘li </h6>
              <p className='rahbar_p'>Jamoatchilik bilan ishlash sho‘basi bosh mutaxassisi</p>
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
              <div className='rahbar_icon'>
                <img className='icon_img' src={Facebook} alt="" />
                <img className='icon_img ml' src={Twitter} alt="" />
                <img className='icon_img ml' src={LinkEdin} alt="" />
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

export default Markaziy