import React from 'react'
import Build from '../../../../../../assets/building 2.png'
import Factory from '../../../../../../assets/factory 1.png'
import Public from '../../../../../../assets/public-transport 1.png'
import Graduation from '../../../../../../assets/graduation 1.png'
import Suitcase from '../../../../../../assets/suitcase 1.png'
import Paralimpic from '../../../../../../assets/paralympic 1.png'
import Home from '../../../../../home/Home'
import {Link} from 'react-router-dom'
import '../../../Infratuzilma.css'
function Viloyat() {
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
                <Link className='link' to={'/qulay-muhit'}>
                <div className='biig_flex  biiig_flex'>
                    <img className='biig_img' src={Factory} alt="" />
                    <h6 className='biig_h6'>Infratuzilma obyektlari</h6>
                </div>
                </Link>
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
                    <Link className='link tooo' to={'/qulay-muhit/chorraha/hududlar'}>
                        <th className='one_th'>44 ta</th>
                        <div className='table_hr'></div>
                        <td className='one_td'>Chorrahalar</td>
                    </Link>
                    </tr>

                    <tr>
                    <Link className='link  tooo' to={'/qulay-muhit/avtobus/hududlar'}>
                        <th className='one_th'>971 ta</th>
                        <div className='table_hr'></div>
                        <td className='one_td'>Avtobus bekatlari</td>
                    </Link>
                    </tr>

                    <tr>
                        <Link className='link tooo' to={'/qulay-muhit/metro'}>
                            <th className='one_th'>50 ta</th>
                            <div className='table_hr'></div>
                            <td  className='one_td'>Metro bekatlari</td>
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
                        <Link className='link too' to={'/qulay-muhit/metro/hududlar'}>
                        <th className='two_th'>Toshkent Shahri</th>
                            <div className='table_hr'></div>
                            <td className='two_td'>16 ta</td>
                            <div className='table_hr'></div>
                            <td className='two_td'>70 ta</td>
                        </Link>
                        </tr>

                    <tr>
                        <Link className='link tooo too ' to={'/qulay-muhit/metro/hududlar/viloyat/chilonzor'}>
                        <li className='three_th'>Chilonzor yo‘li</li>
                        <div className='table_hr'></div>
                        <td className='three_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>70 ta</td>
                        </Link>
                    </tr>
                    <tr>
                        <Link className='link tooo too ' to={'/qulay-muhit/metro/hududlar/viloyat/ozbekiston'}>
                        <li className='three_th'>O‘zbekiston yo‘li</li>
                        <div className='table_hr'></div>
                        <td className='three_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>70 ta</td>
                        </Link>
                    </tr>
                    <tr>
                    <Link className='link tooo too ' to={'/qulay-muhit/metro/hududlar/viloyat/yunusobod'}>
                        <li className='three_th'>Yunusobod yo‘li</li>
                        <div className='table_hr'></div>
                        <td className='three_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>70 ta</td>
                        </Link>
                    </tr>
                    <tr>
                    <Link className='link tooo too ' to={'/qulay-muhit/metro/hududlar/viloyat/yer'}>
                        <li className='three_th'>Yer usti yo‘li</li>
                        <div className='table_hr'></div>
                        <td className='three_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='three_td'>70 ta</td>
                        </Link>
                    </tr>



                  

                    <tr>
                        <th className='two_th'>Jami</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>16 ta</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>32 ta</td>
                    </tr>



                   

                        

                    <tr>
                    <Link className='link tooo' to={'/qulay-muhit/transport/hududlar'}>
                        <th className='one_th'>1 944 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Toshkent shahridagi jamoat transporti (avtobus)</td>
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

export default Viloyat