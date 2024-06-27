import React from 'react'
import '../../Tibbiy.css'
import { Link } from 'react-router-dom'
import Home from '../../../../home/Home'
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
            <div className='box_fle'>
            <div className='saha_biig'>
                <Link to={'/nogiron'} className='link'>
                    <div className='biig_flex'>
                        <h6  className='katta_li'>7 ta</h6>
                        <li className='biig_h6 katta_h6'>Tibbiy-ijtimoiy ekspert komissiyalari</li>
                    </div>
                </Link>
                <Link className='link' to={'/nogiron/reabilitatsiya'}>
                <div className='biig_flex'>
                    <h6 className='katta_li'>11 ta</h6>
                    <li className='biig_h6 katta_h6'>Reabilitatsiya markazlari</li>
                </div>
                </Link>
                <Link className='link' to={'/nogiron/muruvvat'}>

                <div className='biig_flex'>
                    <h6 className='katta_li'>29 ta</h6>
                    <li className='biig_h6 katta_h6'>Muruvvat uylari</li>
                </div>
                </Link>

                <Link className='link' to={'/nogiron/inson'}>

                <div className='biig_flex'>
                    <h6 className='katta_li'>208 ta</h6>
                    <li className='biig_h6 katta_h6'>Inson ijtimoiy xizmatlar markazlari</li>
                </div>
                </Link>
            </div>
            <div className='big_box'>
                <table className='table onlinee'>
                    <tr>
                    <Link className='link tooo' to={'/nogiron/online/hududlar'}>
                        <td className='one_td online'>“ONLAYN” NAZORAT “Tibbiy-ijtimoiy ekspertiza” AT orqali</td>
                    </Link>
                    </tr>
                    <tr>
                    <Link className='link  tooo' to={'/nogiron/offline'}>
                        <td className='one_td online'>“OFLAYN” NAZORAT Joyiga chiqqan holda</td>
                    </Link>
                    </tr>
                    <tr>
                        <th className='two_th'>Hududlar</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>O‘ganishlar</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>Kamchiliklar</td>
                    </tr>


                        <tr>
                        <th className='two_th'>Qashqadaryo viloyati</th>
                            <div className='table_hr'></div>
                            <td className='two_td'>1 ta</td>
                            <div className='table_hr'></div>
                            <td className='two_td'>1 ta</td>
                        </tr>

                        <tr>
                        <li className='three_th'>G‘uzor tumani</li>
                            <div className='table_hr'></div>
                            <td className='three_td'>1 ta</td>
                            <div className='table_hr'></div>
                            <td className='three_td'>8 ta</td>
                        </tr>
                        <tr>
                        <th className='two_th'>Farg‘ona viloyati</th>
                            <div className='table_hr'></div>
                            <td className='two_td'>1 ta</td>
                            <div className='table_hr'></div>
                            <td className='two_td'>1 ta</td>
                        </tr>

                        <tr>
                        <li className='three_th'>Dang‘ara tumani</li>
                            <div className='table_hr'></div>
                            <td className='three_td'>1 ta</td>
                            <div className='table_hr'></div>
                            <td className='three_td'>8 ta</td>
                        </tr>
                        <tr>
                        <th className='two_th'>Samarqand viloyati</th>
                            <div className='table_hr'></div>
                            <td className='two_td'>1 ta</td>
                            <div className='table_hr'></div>
                            <td className='two_td'>1 ta</td>
                        </tr>

                        <tr>
                        <li className='three_th'>Urgut tumani</li>
                            <div className='table_hr'></div>
                            <td className='three_td'>1 ta</td>
                            <div className='table_hr'></div>
                            <td className='three_td'>8 ta</td>
                        </tr>
                        <tr>
                        <th className='two_th'>Xorazm viloyati</th>
                            <div className='table_hr'></div>
                            <td className='two_td'>1 ta</td>
                            <div className='table_hr'></div>
                            <td className='two_td'>1 ta</td>
                        </tr>

                        <tr>
                        <li className='three_th'>Urganch shahar</li>
                            <div className='table_hr'></div>
                            <td className='three_td'>1 ta</td>
                            <div className='table_hr'></div>
                            <td className='three_td'>8 ta</td>
                        </tr>
                        <tr>
                        <th className='two_th'>Jizzax viloyati</th>
                            <div className='table_hr'></div>
                            <td className='two_td'>1 ta</td>
                            <div className='table_hr'></div>
                            <td className='two_td'>1 ta</td>
                        </tr>

                        <tr>
                        <li className='three_th'>G‘allaorol tumani</li>
                            <div className='table_hr'></div>
                            <td className='three_td'>1 ta</td>
                            <div className='table_hr'></div>
                            <td className='three_td'>8 ta</td>
                        </tr>

                    <tr>
                        <th className='two_th'>Jami</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>2 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>32 ta</td>
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