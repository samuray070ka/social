import React from 'react'
import YangilikImg from '../../../assets/Rectangle 59.png'
import YangilikImg2 from '../../../assets/Rectangle 60.png'
import YangilikImg3 from '../../../assets/Rectangle 61.png'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../../icons/arrowBottom'
import homeImgOne from '../../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../../icons/search'

function Yangiliklar() {
  return (
    <div>
              <div className='container'>
        <div className="ijtimoiy_logo">
          <Link to={'/'} className='ijtimoiy_logo link to'>
            <img src={homeImgOne} alt="" />
            <h6 className='ijtimoiy_h2'>Jamoatchilik</h6>
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
            <h6>Jamoatchilik</h6>
          </div>
          <div className='banner_text '>
            <ul className='banner_collaction'>
              <li className='banner_item one'>Jamoatchilik</li>
              <hr />
              <Link to={'/jamoatchilik'} className='link'>
                <li className='banner_item '>Yangiliklar</li>
              </Link>
              <hr />
              <Link to={'/jamoatchilik/pressreliz'} className='link'>
                <li className='banner_item '>Pressreliz</li>
              </Link>
              <hr />
              <Link to={'/jamoatchilik/videodarsliklar'} className='link'>
                <li className='banner_item '>Videodarsliklar</li>
              </Link>
              <hr />
              <Link to={'/jamoatchilik/videoroliklar'} className='link'>
                <li className='banner_item '>Videoroliklar</li>
              </Link>
              <hr />
              <Link to={'/amoatchilik/elonlar'} className='link'>
                <li className='banner_item '>E’lonlar</li>
              </Link>
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Yangiliklar