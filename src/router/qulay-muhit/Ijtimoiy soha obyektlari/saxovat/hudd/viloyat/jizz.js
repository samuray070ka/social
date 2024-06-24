import React from 'react'
import '../../../IjtimoiySoha.css'
import Build from '../../../../../../assets/building 2.png'
import Factory from '../../../../../../assets/factory 1.png'
import Public from '../../../../../../assets/public-transport 1.png'
import Graduation from '../../../../../../assets/graduation 1.png'
import Suitcase from '../../../../../../assets/suitcase 1.png'
import Paralimpic from '../../../../../../assets/paralympic 1.png'
import Home from '../../../../../home/Home'
import {Link} from 'react-router-dom'

function jizz() {
  return (
    <div>
                <Home/>
        <div className='soha'>
            <div className='container sohaa'>
            <Link className='link' to={'/qulay-muhit'}>
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
                <Link to={'/qulay-muhit'} className='link'>
                    <div className='biig_flex biiig_flex'>
                        <img className='biig_img' src={Build} alt="" />
                        <h6 className='biig_h6'>Ijtimoiy soha obyektlari</h6>
                    </div>
                </Link>
                <div className='biig_flex  biiig_flex'>
                    <img className='biig_img' src={Factory} alt="" />
                    <h6 className='biig_h6'>Infratuzilma obyektlari</h6>
                </div>
                <div className='biig_flex  biiig_flex'>
                    <img className='biig_img' src={Public} alt="" />
                    <h6 className='biig_h6'>Transport va transport kommunikatsiya obyektlari</h6>
                </div>
                <div className='biig_flex  biiig_flex'>
                    <img className='biig_img' src={Graduation} alt="" />
                    <h6 className='biig_h6'>O‘qish kvotalari</h6>
                </div>
                <div className='biig_flex  biiig_flex'>
                    <img className='biig_img' src={Suitcase} alt="" />
                    <h6 className='biig_h6'>ish o‘rinlari</h6>
                </div>
                <div className='biig_flex  biiig_flex'>
                    <img className='biig_img' src={Paralimpic} alt="" />
                    <h6 className='biig_h6'>paralimpiyaga jalb qilish</h6>
                </div>
            </div>
            <div className='big_box'>
                <table className='table'>
                    <tr>
                    <Link className='link  tooo ' to={'/qulay-muhit/inson'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td className='one_td'>Inson” ijtimoiy xizmatlar markazlari</td>
                    </Link>
                    </tr>

                   <tr>
                   <Link className='link tooo ' to={'/qulay-muhit/davlat/davlat'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td className='one_td'>Davlat xizmatlari markazlari</td>
                   </Link>
                    </tr>
                    <tr>
                        <Link className='link tooo ' to={'/qulay-muhit/ayollar/hud'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Ayollarni reabilitatsiya qilish va moslashtirish markazlari</td>
                        </Link>
                    </tr>
                    <tr>
                    <Link className='link  tooo' to={'/qulay-muhit/bolalar/hududd'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Bolalar va Mehribonlik uylari</td>
                    </Link>
                    </tr>
                    <tr>
                    <Link className='link tooo ' to={'/qulay-muhit/saxovat/hudd'} >
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Saxovat, Muruvvat, Sanatoriy va protezlash markazlari binolari</td>
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
                    <Link className='link tooo too' to={'/qulay-muhit/saxovat/hudd/andi'}>
                        <th className='two_th'>Andijon viloyati</th>
                            <div className='table_hr'></div>
                            <td className='two_td'>16 ta</td>
                            <div className='table_hr'></div>
                            <td className='two_td'>70 ta</td>
                    </Link>
                        </tr>

                  


                    <tr>
                    <Link className='link tooo too' to={'/qulay-muhit/saxovat/hudd/nama'}>
                        <th className='two_th'>Namangan viloyati</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>14 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>120 ta</td>
                    </Link>
                    </tr>
                    <tr>
                    <Link className='link tooo too' to={'/qulay-muhit/saxovat/hudd/fargo'}>
                        <th className='two_th'>Farg‘ona viloyati</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>19 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>147 ta</td>
                    </Link>
                    </tr>
                        <tr>
                    <Link className='link tooo too' to={'/qulay-muhit/saxovat/hudd/sird'}>
                            <th className='two_th'>Sirdaryo viloyati</th>
                            <div className='table_hr'></div>
                            <td className='two_td'>11 ta</td>
                            <div className='table_hr'></div>
                            <td className='two_td'>30 ta</td>
                    </Link>
                        </tr>
                    <tr>
                    <Link className='link tooo too' to={'/qulay-muhit/saxovat/hudd'}>
                        <th className='two_th'>Jizzax viloyati</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>13 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>111 ta</td>
                    </Link>
                    </tr>
                    <tr>
                        <li className='three_th'>Buxoro shahri</li>
                        <div className='table_hr'></div>
                        <td className='three_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>70 ta</td>
                    </tr>
                    <tr>
                        <li className='three_th'>Namangan tumani</li>
                        <div className='table_hr'></div>
                        <td className='three_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>70 ta</td>
                    </tr>
                    <tr>
                        <li className='three_th'>Asaka tumani</li>
                        <div className='table_hr'></div>
                        <td className='three_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>70 ta</td>
                    </tr>
                    <tr>
                        <li className='three_th'>Baliqchi tumani</li>
                        <div className='table_hr'></div>
                        <td className='three_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>70 ta</td>
                    </tr>
                    

                    

                    <tr>
                    <Link className='link tooo too' to={'/qulay-muhit/saxovat/hudd/samar'}>
                        <th className='two_th'>Samarqand viloyati</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>72 ta</td>
                    </Link>
                    </tr>


                    <tr>
                    <Link className='link tooo too' to={'/qulay-muhit/saxovat/hudd/surx'}>
                        <th className='two_th'>Surxondaryo viloyati</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>15 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>106 ta</td>
                    </Link>
                    </tr>
                    
                    <tr>
                    <Link className='link tooo too' to={'/qulay-muhit/saxovat/hudd/qashqa'}>
                        <th className='two_th'>Qashqadaryo viloyati</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>32 ta</td>
                    </Link>
                    </tr>

                    <tr>
                    <Link className='link tooo too' to={'/qulay-muhit/saxovat/hudd/navoi'}>
                        <th className='two_th'>Navoiy viloyati</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>32 ta</td>
                    </Link>
                    </tr>
                    
                    <tr>
                    <Link className='link tooo too' to={'/qulay-muhit/saxovat/hudd/buxo'}>
                        <th className='two_th'>Buxoro viloyati</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>32 ta</td>
                    </Link>
                    </tr>
                    
                    
                    <Link className='link' to={'/qulay-muhit/saxovat/hudd/toshViloy'}>
                    <tr>
                        <th className='two_th'>Toshkent viloyati</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>32 ta</td>
                    </tr>
                    </Link>
                    <Link className='link' to={'/qulay-muhit/saxovat/hudd/toSh'}>

                    <tr>
                        <th className='two_th'>Toshkent shahri</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>32 ta</td>
                    </tr>
                    </Link>
                    <Link className='link' to={'/qulay-muhit/saxovat/hudd/xoraz'}>

                    <tr>
                        <th className='two_th'>Xorazm viloyati</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>32 ta</td>
                    </tr>
                    </Link>
                    <Link className='link' to={'/qulay-muhit/saxovat/hudd/qoraq'}>
                    <tr>
                        <th className='two_th'>Qoraqalpog‘iston Respublikasi</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>32 ta</td>
                    </tr>
                    </Link>
                    <tr>
                        <th className='two_th'>Jami</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>32 ta</td>
                    </tr>



                    
                    <tr>
                        <th className='one_th'>0 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Ta’lim obyektlari </td>
                    </tr>
                    <tr>
                        <th className='one_th'>0 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Sog‘liqni saqlash obyektlari</td>
                    </tr>
                    <tr>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Ishga marxamat monomarkazlari obyektlari</td>
                    </tr>
                    <tr>
                        <th className='one_th'>14 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Davlat xizmatini rivojlantirish agentligi obyektlari</td>
                    </tr>
                </table>
            </div>
            </div>
            </div>
        </div>  
    </div>
  )
}

export default jizz