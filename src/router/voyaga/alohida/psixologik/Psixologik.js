import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../../home/Home'
import Build from '../../../../assets/building 2.png'
import Factory from '../../../../assets/factory 1.png'
import Public from '../../../../assets/public-transport 1.png'
function Psixologik() {
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
            <Link to={'/voyaga'} className='link'>
                    <div className='biig_flex'>
                        <img className='biig_img' src={Build} alt="" />
                        <h6 className='biig_h6'>Yetim va ota-ona qaramogʻidan mahrum boʻlgan bolalar uchun koʻrsatiladigan ijtimoiy yordam va xizmatlar</h6>
                    </div>
                </Link>
                <Link className='link' to={'/voyaga'}>
                <div className='biig_flex'>
                    <img className='biig_img' src={Factory} alt="" />
                    <h6 className='biig_h6'>Alohida taʼlim ehtiyojlari boʻlgan bolalar uchun koʻrsatiladigan ijtimoiy yordam va xizmatlar</h6>
                </div>
                </Link>
                <Link className='link' to={'/voyaga/inson'}>

                <div className='biig_flex'>
                    <img className='biig_img' src={Public} alt="" />
                    <h6 className='biig_h6'>Nazoratsiz va qarovsiz qolgan bolalar uchun koʻrsatiladigan ijtimoiy xizmatlar</h6>
                </div>
                </Link>
            </div>
            <div className='big_box'>
                <table className='table'>
                    <tr>
                    {/* <Link className='link tooo' to={'/voyaga/mehribon/hududlar'}> */}
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td className='one_td'>Psixologik–tibbiy-pedagogik komissiyalar</td>
                    {/* </Link> */}
                    </tr>
                    <tr>
                    {/* <Link className='link  tooo' to={'/voyaga/bolalar/hududlar'}> */}
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td className='one_td'>Ixtisoslashtirilgan sanatoriy turidagi maktab-internatlar</td>
                    {/* </Link> */}
                    </tr>

                        <tr>
                        {/* <Link className='link tooo' to={'/voyaga/yetim-first/hududlar'}> */}
                            <th className='one_th'>208 ta</th>
                            <div className='table_hr'></div>
                            <td  className='one_td'>Alohida taʼlim ehtiyojlari boʻlgan bolalar uchun ixtisoslashtirilgan maktab va maktab-internatlari </td>
                        {/* </Link> */}
                        </tr>

                    <tr>
                    {/* <Link className='link tooo' to={'/voyaga/oilaviy/hududlar'}> */}
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Sogʻliqni saqlash vazirligi tarkibidagi bolalar uylari</td>
                    {/* </Link> */}
                    </tr>
                    
                    <tr>
                    {/* <Link className='link tooo' to={'/voyaga/yetim-second/hududlar'}> */}
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Imkoniyati cheklangan shaxslar uchun ixtisoslashtirilgan kasb-hunar maktablari</td>
                    {/* </Link> */}
                    </tr>


                    <tr>
                   {/* <Link className='link tooo' to={'/voyaga/yetim-third/hududlar'}>  */}
                        <th className='one_th'>0 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Inklyuziv taʼlimga jalb qilish</td>
                   {/* </Link> */}
                    </tr>


                    <tr>
                    {/* <Link className='link tooo' to={'/voyaga/mehr/hududlar'}> */}
                        <th className='one_th'>0 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Uyda yakka tartibda taʼlim olayotgan bolalar uchun koʻrsatiladigan ijtimoiy yordam va xizmatlar</td>
                    {/* </Link> */}
                    </tr>


                    <tr>
                    {/* <Link className='link tooo' to={'/voyaga/mehr/hududlar'}> */}
                        <th className='one_th'>0 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Mehrli maktab</td>
                    {/* </Link> */}
                    </tr>

                </table>
            </div>
           </div>
            </div>
        </div>
    </div>
  )
}

export default Psixologik