import React from 'react'
import '../ijtimoiy/Ijtimoiy.css'
import { Link } from 'react-router-dom'
import Home from '../../home/Home'
function Odam() {
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
            <div className='saha_biig'>
                <Link to={'/katta-yoshdagilar/Ijtimoiy'} className='link'>
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
            </div>
        </div>
    </div>
  )
}

export default Odam