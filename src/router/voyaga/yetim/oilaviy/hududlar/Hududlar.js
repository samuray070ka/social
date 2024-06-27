import React from 'react'
import '../../Yetim.css'
import { Link } from 'react-router-dom'
import Home from '../../../../home/Home'
import Build from '../../../../../assets/building 2.png'
import Factory from '../../../../../assets/factory 1.png'
import Public from '../../../../../assets/public-transport 1.png'

function Hududlar() {
  return (
    <div>
        <Home/>
        <div className='soha'>
            <div className='container sohaa'>
                <Link className='link' to={'/'}>
                    <h6 className='soha-h6'>Qulay muhit obyektlari</h6>
                </Link>
            <div className='soha_flex'>
                <div className='soha_small o'>Jami</div>
                <div className='soha_small on '>
                    <h6 className='soha_h6'>I Chorak</h6>
                </div>
                <div className='soha_small on '>
                    <h6 className='soha_h6'>II Chorak</h6>
                </div>
                <div className='soha_small on'>
                    <h6 className='soha_h6'>III Chorak</h6>
                </div>
                <div className='soha_small on'>
                    <h6 className='soha_h6'>IV Chorak</h6>
                </div>
                <div className='soha_small on'>
                    <h6 className='soha_h6'>2023-yilda</h6>
                </div>
            </div>
            <div className="box_fle">
           <div className='saha_biig'>
            <Link to={'/voyaga/mehribon/hududlar'} className='link'>
                    <div className='biig_flex'>
                        <img className='biig_img' src={Build} alt="" />
                        <h6 className='biig_h6'>Yetim va ota-ona qaramogʻidan mahrum boʻlgan bolalar uchun koʻrsatiladigan ijtimoiy yordam va xizmatlar</h6>
                    </div>
                </Link>
                <Link className='link' to={'/voyaga/psixologik/hududlar'}>
                <div className='biig_flex'>
                    <img className='biig_img' src={Factory} alt="" />
                    <h6 className='biig_h6'>Alohida taʼlim ehtiyojlari boʻlgan bolalar uchun koʻrsatiladigan ijtimoiy yordam va xizmatlar</h6>
                </div>
                </Link>
                <Link className='link' to={'/voyaga/inson/hududlar'}>

                <div className='biig_flex'>
                    <img className='biig_img' src={Public} alt="" />
                    <h6 className='biig_h6'>Nazoratsiz va qarovsiz qolgan bolalar uchun koʻrsatiladigan ijtimoiy xizmatlar</h6>
                </div>
                </Link>
            </div>
            <div className='big_box'>
                <table className='table '>
                    <tr>
                    <Link className='link tooo' to={'/voyaga/mehribon/hududlar'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td className='one_td'>Mehribonlik uylari</td>
                    </Link>
                    </tr>
                   
                    <tr>
                    <Link className='link  tooo' to={'/voyaga/bolalar/hududlar'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td className='one_td'>Bolalar uylari</td>
                    </Link>
                    </tr>
                    

                        <tr>
                        <Link className='link tooo' to={'/voyaga/yetim-first/hududlar'}>
                            <th className='one_th'>208 ta</th>
                            <div className='table_hr'></div>
                            <td  className='one_td'>Yetim va ota-ona qarmogʻidan mahrum boʻlgan bolalarni uy-joy bilan taʼminlash</td>
                        </Link>
                        </tr>
                     

                    <tr>
                    <Link className='link tooo' to={'/voyaga/oilaviy'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Oilaviy bolalar uylarida koʻrsatiladigan ijtimoiy yordamlar va xizmatlar</td>
                    </Link>
                    </tr>
                    <table className='table_color'>
                   <tr>
                        <td className='three_th'>Yangi yo‘l shahri</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>0 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>103 ta ta</td>
                    </tr>
                   <tr>
                        <td className='three_th'>Yangi yo‘l shahri</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>0 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>103 ta ta</td>
                    </tr>
                   <tr>
                        <td className='three_th'>Yangi yo‘l shahri</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>0 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>103 ta ta</td>
                    </tr>
                   <tr>
                        <td className='three_th'>Yangi yo‘l shahri</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>0 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>103 ta ta</td>
                    </tr>
                   <tr>
                        <td className='three_th'>Yangi yo‘l shahri</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>0 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>103 ta ta</td>
                    </tr>
                   <tr>
                        <td className='three_th'>Yangi yo‘l shahri</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>0 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>103 ta ta</td>
                    </tr>
                   <tr>
                        <td className='three_th'>Yangi yo‘l shahri</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>0 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>103 ta ta</td>
                    </tr>
                   <tr>
                        <td className='three_th'>Yangi yo‘l shahri</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>0 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>103 ta ta</td>
                    </tr>
                   <tr>
                        <td className='three_th'>Yangi yo‘l shahri</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>0 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>103 ta ta</td>
                    </tr>
                   <tr>
                        <td className='three_th'>Yangi yo‘l shahri</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>0 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>103 ta ta</td>
                    </tr>
                   
                   </table>
                    <tr>
                    <Link className='link tooo' to={'/voyaga/yetim-second/hududlar'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Yetim va ota-ona qarmogʻidan mahrum boʻlgan bolalarga vasiy yoki homiy tayinlash</td>
                    </Link>
                    </tr>


                    <tr>
                   <Link className='link tooo' to={'/voyaga/yetim-third/hududlar'}> 
                        <th className='one_th'>0 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Yetim va ota-ona qarmogʻidan mahrum boʻlgan bolalarni patronatga (oilaga tarbiyaga) olish </td>
                   </Link>
                    </tr>


                    <tr>
                    <Link className='link tooo' to={'/voyaga/mehr/hududlar'}>
                        <th className='one_th'>0 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>“Mehr daftari” boʻyicha  koʻrsatiladigan jtimoiy yordam va xizmatlar</td>
                    </Link>
                    </tr>

                </table>
            </div>
           </div>
            </div>
        </div>
    </div>
  )
}

export default Hududlar