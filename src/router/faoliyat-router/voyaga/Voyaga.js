import React from 'react'
import '../../faoliyat/Faoliyat.css'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../../icons/arrowBottom'
import homeImgOne from '../../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../../icons/search'

function Voyaga() {
  return (
    <div>
      <div className='container'>
        <div className="ijtimoiy_logo">
          <Link to={'/'} className='ijtimoiy_logo link to'>
            <img src={homeImgOne} alt="" />
            <h2 className='ijtimoiy_h2'>Faoliyat</h2>
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
          <div className='banner_big'>
            <h6>Voyaga yetmaganlar</h6>
          </div>
          <div className='banner_text '>
            <ul className='banner_collaction'>
              <li className='banner_item one'>Faoliyat</li>
              <hr />
              <Link to={'/faoliyat'} className='link'>
                <li className='banner_item '>Qulat muhit</li>
              </Link>
              <hr />
              <Link to={'/faoliyat/katta-yoshdagilar'} className='link'>
                <li className='banner_item '>Katta yoshdagilar</li>
              </Link>
              <hr />
              <Link to={'/faoliyat/voyaga'} className='link'>
                <li className='banner_item '>Voyaga yetmaganlar</li>
              </Link>
              <hr />
              <Link to={'/faoliyat/nogironlik'} className='link'>
                <li className='banner_item '>Nogironlikni belgilash</li>
              </Link>
              <hr />
              <Link to={'/faoliyat/korupsiya'} className='link'>
                <li className='banner_item '>Korrupsiyaga qarshi kurash</li>
              </Link>
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Voyaga