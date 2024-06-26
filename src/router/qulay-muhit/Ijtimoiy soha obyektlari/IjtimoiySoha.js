import React, {useState, useEffect} from 'react'
import './IjtimoiySoha.css'
// import homeImgOne from '../../../assets/IJTIMOIY logo 2 1.png'
// import banner from '../../../assets/Rectangle 3.png'
// import img from '../../../assets/Rectangle 12.png'
// import imgTwo from '../../../assets/Rectangle 11.png'
// import threeImg from '../../../assets/Rectangle 9.png'
// import threeImg2 from '../../../assets/Rectangle 10.png'
// import threeImg3 from '../../../assets/Rectangle 8.png'
// import group27 from '../../../assets/Group 27.png'
// import group26 from '../../../assets/Group 26.png'
// import group25 from '../../../assets/Group 25.png'
// import group24 from '../../../assets/Group 24.png'
// import grandfather from '../../../assets/grandfather.jpg'
// import child from '../../../assets/yosh bolalar.jpg'
// import invalid from '../../../assets/nogironlar.jpg'
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom' 
import Build from '../../../assets/building 2.png'
import Factory from '../../../assets/factory 1.png'
import Public from '../../../assets/public-transport 1.png'
import Graduation from '../../../assets/graduation 1.png'
import Suitcase from '../../../assets/suitcase 1.png'
import Paralimpic from '../../../assets/paralympic 1.png'
import Home from '../../home/Home'

// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import ArrowBottom from '../../../icons/arrowBottom'
// import Calendar from '../../../icons/calendar'

function IjtimoiySoha() {
    // const pagination = {
    //     clickable: true,
    //     // renderBullet: function (index, className) {
    //     //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     // },
    //   };
    async function fetchCategory() {
        const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/statistic-category');
        const data = await response.json();
        return data;
    }
    const [category, setCategory] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await fetchCategory();
            setCategory(result);
        }
        
        getData();
        console.log(category);
    }, []);
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
                {
                    category.map((item, inx) => 
                <Link to={`?id=${item.id}`} className='link'>
                    <div className='biig_flex'>
                        <img className='biig_img' src={Build} alt="" />
                        <h6 className='biig_h6'>{item.name.luz}</h6>
                    </div>
                </Link>
                    )
                }
                
                {/* <Link className='link' to={'/qulay-muhit/chorraha'}>
                <div className='biig_flex'>
                    <img className='biig_img' src={Factory} alt="" />
                    <h6 className='biig_h6'>Infratuzilma obyektlari</h6>
                </div>
                </Link>
                <Link className='link' to={'/qulay-muhit/chorraha'}>

                <div className='biig_flex'>
                    <img className='biig_img' src={Public} alt="" />
                    <h6 className='biig_h6'>Transport va transport kommunikatsiya obyektlari</h6>
                </div>
                </Link>

                <Link className='link' to={'/qulay-muhit/chorraha'}>

                <div className='biig_flex'>
                    <img className='biig_img' src={Graduation} alt="" />
                    <h6 className='biig_h6'>O‘qish kvotalari</h6>
                </div>
                </Link>

                <Link className='link' to={'/qulay-muhit/chorraha'}>

                <div className='biig_flex'>
                    <img className='biig_img' src={Suitcase} alt="" />
                    <h6 className='biig_h6'>ish o‘rinlari</h6>
                </div>
                </Link>

                <Link className='link' to={'/qulay-muhit/chorraha'}>

                <div className='biig_flex'>
                    <img className='biig_img' src={Paralimpic} alt="" />
                    <h6 className='biig_h6'>paralimpiyaga jalb qilish</h6>
                </div>
                </Link> */}

            </div>
            </div>
        </div>
    </div>
  )
}

export default IjtimoiySoha