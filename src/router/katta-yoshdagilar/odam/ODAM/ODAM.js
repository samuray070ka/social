import React from 'react'
import '../../ijtimoiy/Ijtimoiy.css'
import Home from '../../../home/Home'
import {Link} from 'react-router-dom'
function ODAM() {
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
                <Link to={'/katta-yoshdagilar/IjtimoIy'} className='link'>
                    <div className='biig_flex'>
                        <h6  className='katta_li'>7 ta</h6>
                        <li className='biig_h6 katta_h6'>Ijtimoiy qo‘llab-quvvatlash markazlari</li>
                    </div>
                </Link>
                <Link className='link' to={'/katta-yoshdagilar/Keksa'}>
                <div className='biig_flex'>
                    <h6 className='katta_li'>11 ta</h6>
                    <li className='biig_h6 katta_h6'>Keksa va nogironligi bo‘lgan shaxslar, urush va mehnat faxriylari uchun  sanatoriylar</li>
                </div>
                </Link>
                <Link className='link' to={'/katta-yoshdagilar/Ayollar'}>

                <div className='biig_flex'>
                    <h6 className='katta_li'>29 ta</h6>
                    <li className='biig_h6 katta_h6'>Ayollar reabilitatsiya qilish va moslashtirish markazlari</li>
                </div>
                </Link>

                <Link className='link' to={'/katta-yoshdagilar/Inson'}>

                <div className='biig_flex'>
                    <h6 className='katta_li'>208 ta</h6>
                    <li className='biig_h6 katta_h6'>Inson ijtimoiy xizmatlar markazlari</li>
                </div>
                </Link>

                <Link className='link' to={'/katta-yoshdagilar'}>

                <div className='biig_flex'>
                    <h6 className='katta_li'>1 ta</h6>
                    <li className='biig_h6 katta_h6'>Odam savdosi jabrdiydalariga yordam berish bo‘yicha respublika reabilitatsiya markazi</li>
                </div>
                </Link>

                <Link className='link' to={'/katta-yoshdagilar/Muayyan'}>

                <div className='biig_flex'>
                    <h6 className='katta_li'>11 ta</h6>
                    <li className='biig_h6 katta_h6'>Muayyan yashash joyiga ega bo‘lmagan shaxslarni reabilitatsiya qilish markazi</li>
                </div>
                </Link>

            </div>
            <div className='big_box'>
                <table className='table'>
                       


                    <tr>
                        <th className='two_th'>Hududlar</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>O‘ganishlar</td>
                        <div className='table_hr'></div>
                        <td className='two_td'>Kamchiliklar</td>
                    </tr>


                        <tr>
                    <Link className='link too e' to={'/katta-yoshdagilar'}>
                            <th className='two_th'>Toshkent shahri</th>
                            <div className='table_hr'></div>
                            <td className='two_td'>16 ta</td>
                            <div className='table_hr'></div>
                            <td className='two_td'>70 ta</td>
                    </Link>
                        </tr>

                    <tr>
                        <th className='two_th'>Jami</th>
                        <div className='table_hr'></div>
                        <td className='two_td'>16 ta</td>
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

export default ODAM