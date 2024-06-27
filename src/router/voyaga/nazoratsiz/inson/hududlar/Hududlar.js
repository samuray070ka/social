import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../../../home/Home'
import Build from '../../../../../assets/building 2.png'
import Factory from '../../../../../assets/factory 1.png'
import Public from '../../../../../assets/public-transport 1.png'
import '../../../alohida/Alohida.css'

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
                    <Link className='link tooo' to={'/voyaga/inson'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td className='one_td'>“Inson” ijtimoiy xizmatlar koʻrsatish markazlari (bolalarni himoya qilish shuʼbalari)</td>
                    </Link>
                    </tr>
                    <table className='table_color'>
                   <tr>
                        <td className='three_th hud'>Yangi yo‘l shahri</td>
                    </tr>
                   <tr>
                        <td className='three_th hud'>Yangi yo‘l shahri</td>
                    </tr>
                   <tr>
                        <td className='three_th hud'>Yangi yo‘l shahri</td>
                    </tr>
                   <tr>
                        <td className='three_th hud'>Yangi yo‘l shahri</td>
                    </tr>
                   <tr>
                        <td className='three_th hud'>Yangi yo‘l shahri</td>
                    </tr>
                   <tr>
                        <td className='three_th hud'>Yangi yo‘l shahri</td>
                    </tr>
                   <tr>
                        <td className='three_th hud'>Yangi yo‘l shahri</td>
                    </tr>
                   <tr>
                        <td className='three_th hud'>Yangi yo‘l shahri</td>
                    </tr>
                   <tr>
                        <td className='three_th hud'>Yangi yo‘l shahri</td>
                    </tr>
                   <tr>
                        <td className='three_th hud'>Yangi yo‘l shahri</td>
                    </tr>
                   
                   </table>
                   
                    <tr>
                    <Link className='link  tooo' to={'/voyaga/voyaga/hududlar'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td className='one_td'>Voyaga yetmaganlarga ijtimoiy-huquqiy yordam koʻrsatish markazlari</td>
                    </Link>
                    </tr>

                        <tr> 
                        <Link className='link tooo' to={'/voyaga/oquv/hududlar'}>
                            <th className='one_th'>208 ta</th>
                            <div className='table_hr'></div>
                            <td  className='one_td'>Oʻquv tarbiya muassasalari</td>
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