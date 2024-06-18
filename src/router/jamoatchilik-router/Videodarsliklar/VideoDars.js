import React from 'react'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../../icons/arrowBottom'
import homeImgOne from '../../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../../icons/search'
import YangilikImg from '../../../assets/Rectangle 59 (2).png'
import YangilikImg2 from '../../../assets/Rectangle 60 (2).png'
import YangilikImg3 from '../../../assets/Rectangle 61 (2).png'
import YangilikImg4 from '../../../assets/Rectangle 68.png'
import YangilikImg5 from '../../../assets/Rectangle 69.png'
import YangilikImg6 from '../../../assets/Rectangle 70.png'
import JamoArrow from '../../../assets/arrow_right_alt.png'
function VideoDars() {
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
            <h6 className='tuzilma_h1'>Videodarsliklar</h6>
            <div className="jamo_wrapper">
              <div className="jamo_box">
                <img src={YangilikImg} alt="" />
                <h6 className='box_h6'> Ijtimoiy inspeksiya faoliyati bilan bog‘liq yangiliklar jamlanadigan page hisoblanadi. Qatorlardan 3 tadan boshlanadi...</h6>
                <div className='jamo_flex'>
                  <h6 className='jamo_h6'>09-04.2023</h6>
                  <img src={JamoArrow} alt="" />
                </div>
              </div>
              <div className="jamo_box">
                <img src={YangilikImg2} alt="" />
                <h6 className='box_h6'> Ijtimoiy inspeksiya faoliyati bilan bog‘liq yangiliklar jamlanadigan page hisoblanadi. Qatorlardan 3 tadan boshlanadi...</h6>
                <div className='jamo_flex'>
                  <h6 className='jamo_h6'>09-04.2023</h6>
                  <img src={JamoArrow} alt="" />
                </div>
              </div>
              <div className="jamo_box">
                <img src={YangilikImg3} alt="" />
                <h6 className='box_h6'> Ijtimoiy inspeksiya faoliyati bilan bog‘liq yangiliklar jamlanadigan page hisoblanadi. Qatorlardan 3 tadan boshlanadi...</h6>
                <div className='jamo_flex'>
                  <h6 className='jamo_h6'>09-04.2023</h6>
                  <img src={JamoArrow} alt="" />
                </div>
              </div>
              <div className="jamo_box">
                <img src={YangilikImg4} alt="" />
                <h6 className='box_h6'> Ijtimoiy inspeksiya faoliyati bilan bog‘liq yangiliklar jamlanadigan page hisoblanadi. Qatorlardan 3 tadan boshlanadi...</h6>
                <div className='jamo_flex'>
                  <h6 className='jamo_h6'>09-04.2023</h6>
                  <img src={JamoArrow} alt="" />
                </div>
              </div>
              <div className="jamo_box">
                <img src={YangilikImg5} alt="" />
                <h6 className='box_h6'> Ijtimoiy inspeksiya faoliyati bilan bog‘liq yangiliklar jamlanadigan page hisoblanadi. Qatorlardan 3 tadan boshlanadi...</h6>
                <div className='jamo_flex'>
                  <h6 className='jamo_h6'>09-04.2023</h6>
                  <img src={JamoArrow} alt="" />
                </div>
              </div>
              <div className="jamo_box">
                <img src={YangilikImg6} alt="" />
                <h6 className='box_h6'> Ijtimoiy inspeksiya faoliyati bilan bog‘liq yangiliklar jamlanadigan page hisoblanadi. Qatorlardan 3 tadan boshlanadi...</h6>
                <div className='jamo_flex'>
                  <h6 className='jamo_h6'>09-04.2023</h6>
                  <img src={JamoArrow} alt="" />
                </div>
              </div>
            </div>
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
              <Link to={'/jamoatchilik/elonlar'} className='link'>
                <li className='banner_item '>E’lonlar</li>
              </Link>
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}

export default VideoDars