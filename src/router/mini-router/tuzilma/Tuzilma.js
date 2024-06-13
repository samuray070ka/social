import React from 'react'
import '../../ijtimoiy/Ijtimoiy.css'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../../icons/arrowBottom'
import homeImgOne from '../../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../../icons/search'
import TuzulmaImg from '../../../assets/image 1.png'

function Tuzilma() {
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
            <h1 className='tuzilma_h1'>Tuzilma</h1>
           <img className='tuzilma_img' src={TuzulmaImg} alt="" />
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

export default Tuzilma