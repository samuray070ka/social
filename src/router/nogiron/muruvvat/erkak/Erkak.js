import React from 'react'
import '../../tibbiy/Tibbiy.css'
import { Link } from 'react-router-dom'
import Home from '../../../home/Home'
function Erkak() {
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
                <Link to={'/nogiron/online'} className='link'>
                    <div className='biig_flex'>
                        <h6  className='katta_li'>7 ta</h6>
                        <li className='biig_h6 katta_h6'>Tibbiy-ijtimoiy ekspert komissiyalari</li>
                    </div>
                </Link>
                <Link className='link' to={'/nogiron/ishlatilmagan'}>
                <div className='biig_flex'>
                    <h6 className='katta_li'>11 ta</h6>
                    <li className='biig_h6 katta_h6'>Reabilitatsiya markazlari</li>
                </div>
                </Link>
                <Link className='link' to={'/nogiron'}>

                <div className='biig_flex'>
                    <h6 className='katta_li'>29 ta</h6>
                    <li className='biig_h6 katta_h6'>Muruvvat uylari</li>
                </div>
                </Link>

                <Link className='link' to={'/nogiron/rtv'}>

                <div className='biig_flex'>
                    <h6 className='katta_li'>208 ta</h6>
                    <li className='biig_h6 katta_h6'>Inson ijtimoiy xizmatlar markazlari</li>
                </div>
                </Link>
            </div>
            <div className='big_box'>
                <table className='table onlinee'>
                    <tr>
                    <Link className='link tooo' to={'/nogiron/erkak/hududlar'}>
                        <td className='one_td online'>Erkaklar uchun</td>
                    </Link>
                    </tr>
                    <tr>
                    <Link className='link  tooo' to={'/nogiron/ayol/hududlar'}>
                        <td className='one_td online'>Ayollar uchun</td>
                    </Link>
                    </tr>
                    <tr>
                    <Link className='link  tooo' to={'/nogiron/bola/hududlar'}>
                        <td className='one_td online'>Bolalar uchun</td>
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

export default Erkak