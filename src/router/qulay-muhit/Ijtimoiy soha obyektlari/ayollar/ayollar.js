import React, {useState, useEffect} from 'react'
import '../IjtimoiySoha.css'
import Build from '../../../../assets/building 2.png'
import Factory from '../../../../assets/factory 1.png'
import Public from '../../../../assets/public-transport 1.png'
import Graduation from '../../../../assets/graduation 1.png'
import Suitcase from '../../../../assets/suitcase 1.png'
import Paralimpic from '../../../../assets/paralympic 1.png'
import {Link} from 'react-router-dom'
import homeImgOne from '../../../../assets/IJTIMOIY logo 2 1.png'
import img from '../../../../assets/Rectangle 12.png'
import threeImg from '../../../../assets/Rectangle 9.png'
import threeImg2 from '../../../../assets/Rectangle 10.png'
import threeImg3 from '../../../../assets/Rectangle 8.png'
import group27 from '../../../../assets/Group 27.png'
import group26 from '../../../../assets/Group 26.png'
import group25 from '../../../../assets/Group 25.png'
import group24 from '../../../../assets/Group 24.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'; 
import ArrowBottom from '../../../../icons/arrowBottom'
import Calendar from '../../../../icons/calendar'
function Ayollar() {
    async function fetchSilider() {
        const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/slider/list');
        const data = await response.json();
        return data;
    }
    const [silider, setSilider] = useState([]);
    
    useEffect(() => {
        async function getData() {
            const result = await fetchSilider();
            setSilider(result);
        }
        
        getData();
        console.log(silider);
    }, []);
    
    async function fetchData() {
      const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/menu');
      const data = await response.json();
      return data;
    }
    const [data, setData] = useState([]);
    
    useEffect(() => {
      async function getData() {
          const result = await fetchData();
          setData(result);
      }
      getData();
      console.log(data);
    }, []);
    async function fetchData() {
      const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/statistic-category');
      const data = await response.json();
      return data;
    }
    const [muhit, setMuhit] = useState([]);
    
    useEffect(() => {
      async function getData() {
          const result = await fetchData();
          setMuhit(result);
      }
      getData();
      console.log(muhit);
    }, []);
    
    async function fetchYangilik() {
      const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/article');
      const data = await response.json();
      return data;
    }
    const [yangilik, setYangilik] = useState([]);
    
    useEffect(() => {
      async function getData() {
          const result = await fetchYangilik();
          setYangilik(result);
      }
      getData();
      console.log(yangilik);
    }, []);
    
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    
    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
      setDropdownVisible(!setDropdown() && !isDropdownVisible && !setFive() && !setSix() && !setThree() && !setSeven()   && !setFour())
    }
    const [DropdownVisible, setDropdown] = useState(false);
    
    const toggleDropdowntwo = () => {
      setDropdown(!DropdownVisible );
      setDropdown(!setDropdownVisible() && !DropdownVisible && !setFive() && !setSix() && !setThree() && !setSeven()   && !setFour())
    }
    const [three, setThree] = useState(false);
    
    const toggleDropdownthree = () => {
      setThree(!three );
      setThree(!setDropdownVisible() && !three && !setDropdown() && !setFive() && !setSix() && !setSeven()   && !setFour())
    }
    const [four, setFour] = useState(false);
    
    const toggleDropdownFour = () => {
      setFour(!four );
      setFour(!setDropdownVisible() && !setThree() && !four && !setFive() && !setSix() && !setSeven()   && !setDropdown())
    }
    
    const [five, setFive] = useState(false);
    
    
    const toggleDropdownFive = () => {
      setFive(!five );
      setFive(!setDropdownVisible() && !setThree() && !setFour() && !five && !setSix()  && !setSeven()   && !setDropdown())
    }
    
    const [six, setSix] = useState(false);
    
    const toggleDropdownSix = () => {
      setSix(!six );
      setSix(!setDropdownVisible() && !setThree() && !setFour() && !setFive() && !six && !setSeven()  && !setDropdown())
    }
    
    
    const [seven, setSeven] = useState(false);
    
    const toggleDropdownSeven = () => {
      setSeven(!seven );
      setSeven(!setDropdownVisible() && !setThree() && !setFour() && !setFive() && !setSix() && !seven  && !setDropdown())
    }
  return (
    <div>
          <div className='home'>
      <div className='container'>

      <ul className=' collaction'> 
                <Link to={'/'} className='link lo'>
      <img className=' banner_img' src={homeImgOne} alt="" />
                </Link>
                {/* {
                  data.map((item, inx) =>
                    <Link to={`/ijtimoiy/inspeksiya/${item.id}`} className='link' key={inx}>
                      <li className='item'><ArrowBottom/> {item.name.luz}</li>
                    </Link> 
              )
                } */}
                
                  <li  onClick={toggleDropdown} className='item rod'><ArrowBottom/> Ijtimoiy</li>
                  {isDropdownVisible && (
                <div className='faoliyat_ro faoliyat_back'>
                <ul className='banner_collaction'>
                  <Link className='link' to={'/ijtimoiy'}>
              <li className='banner_item  faoliyat_roo'>Inspeksiya haqida</li>
                  </Link>
              <Link to={'/ijtimoiy/nizom'} className='link'>
                <li className='banner_item  faoliyat_roo'>Nizom</li>
              </Link>
              <Link to={'/ijtimoiy/tuzilma'} className='link'>
                <li className='banner_item  faoliyat_roo'>Tuzilma</li>
              </Link>
              <Link to={'/ijtimoiy/rahbaryat'} className='link'>
                <li className='banner_item  faoliyat_roo'>Rahbariyat</li>
              </Link>
              <Link to={'/ijtimoiy/markaziy'} className='link'>
                <li className='banner_item  faoliyat_roo'>Markaziy apparat</li>
              </Link>
              <Link to={'/ijtimoiy/hududiy'} className='link'>
                <li className='banner_item faoliyat_roo '>Hududiy boshqarmalar</li>
              </Link>
              <Link to={'/ijtimoiy/hamkorlik'} className='link'>
                <li className='banner_item  faoliyat_roo'>Hamkorlik</li>
              </Link>
              <Link to={'/ijtimoiy/ish-orni'} className='link'>
                <li className='banner_item  faoliyat_roo'>Bo'sh ish o'rnlari</li>
              </Link>
            </ul>
                </div>
)}
                  <li className='item ro' onClick={toggleDropdowntwo}><ArrowBottom/> Faoliyat</li>
                {DropdownVisible && (
                <div className='faoliyat_ro faoliyat_back qu'>
                <ul className='banner_collaction'>
                  <Link className='link' to={'/faoliyat'}>
              <li className='banner_item  faoliyat_roo '>Qulay muhit</li>
                  </Link>
              <Link to={'/faoliyat/katta-yoshdagilar'} className='link'>
                <li className='banner_item  faoliyat_roo'>Katta yoshdagilar</li>
              </Link>
              <Link to={'/faoliyat/voyaga'} className='link'>
                <li className='banner_item  faoliyat_roo'>Voyaga yetmaganlar</li>
              </Link>
              <Link to={'/faoliyat/nogironlik'} className='link'>
                <li className='banner_item  faoliyat_roo'>Nogironlikni belgilash</li>
              </Link>
              <Link to={'/faoliyat/korupsiya'} className='link'>
                <li className='banner_item  faoliyat_roo'>Korrupsiyaga qarshi kurash</li>
              </Link>
            </ul>
                </div>
)}
                  <li className='item ro' onClick={toggleDropdownthree}><ArrowBottom/>Normativ hujjatlar</li>
                {three && (
                <div className='faoliyat_ro faoliyat_back xa'>
                <ul className='banner_collaction'>
                <Link to={'/normativ'} className='link'>
                <li className='banner_item faoliyat_roo'>Xalqaro normativ hujjatlar</li>
              </Link>
              <Link to={'/normativ/ozbekiston'} className='link'>
                <li className='banner_item faoliyat_roo'>O‘zbekiston Respublikasi qonunlari</li>
              </Link>
              <Link to={'/normativ/prezident'} className='link'>
                <li className='banner_item faoliyat_roo'>Prezident farmon va qarorlari</li>
              </Link>
              <Link to={'/normativ/vazirlar'} className='link'>
                <li className='banner_item faoliyat_roo'>Vazirlar mahkamasi qarorlari</li>
              </Link>
              <Link to={'/normativ/idoraviy'} className='link'>
                <li className='banner_item faoliyat_roo'>Idoraviy normativ-huquqiy hujjatlar</li>
              </Link>
            </ul>
                </div>
)}
                  <li className='item ro' onClick={toggleDropdownFour}><ArrowBottom/>Jamoatchilik</li>
                {four && (
                <div className='faoliyat_ro faoliyat_back ya'>
                <ul className='banner_collaction'>
                <Link to={'/jamoatchilik'} className='link'>
                <li className='banner_item faoliyat_roo'>Yangiliklar</li>
              </Link>
              <Link to={'/jamoatchilik/pressreliz'} className='link'>
                <li className='banner_item faoliyat_roo'>Pressreliz</li>
              </Link>
              <Link to={'/jamoatchilik/videodarsliklar'} className='link'>
                <li className='banner_item faoliyat_roo'>Videodarsliklar</li>
              </Link>
              <Link to={'/jamoatchilik/videoroliklar'} className='link'>
                <li className='banner_item faoliyat_roo'>Videoroliklar</li>
              </Link>
              <Link to={'/jamoatchilik/elonlar'} className='link'>
                <li className='banner_item faoliyat_roo'>E’lonlar</li>
              </Link>
            </ul>
                </div>
)}
                  <li className='item ro' onClick={toggleDropdownFive}><ArrowBottom/>Statistika</li>
                  {five && (
                <div className='faoliyat_ro faoliyat_back te'>
                <ul className='banner_collaction'>
                <li className='banner_item faoliyat_roo'>Tekshiruv va profilaktika ishlari</li>
                <li className='banner_item faoliyat_roo'>Murojaatlarni ko‘rib chiqish</li>
                <li className='banner_item faoliyat_roo'>OAVda chiqishlar</li>
              </ul>
                </div>
)}
                
                  <li className='item ro' onClick={toggleDropdownSix}><ArrowBottom/>Ochiq ma'lumotlar</li>
                {six && (
                <div className='faoliyat_ro faoliyat_back da'>
                <ul className='banner_collaction'>
                <li className='banner_item faoliyat_roo '>Davlat xaridlari</li>
                <li className='banner_item faoliyat_roo '>Moliyaviy</li>
                <li className='banner_item faoliyat_roo '>Inspeksiya faoliyati</li>
            </ul>
                </div>
)}
      
                  <li className='item ro' onClick={toggleDropdownSeven}><ArrowBottom/>Aloqa</li>
                  {seven && (
                <div className='faoliyat_ro faoliyat_back onn'>
                <ul className='banner_collaction'>
                <Link to={'/aloqa'} className='link to'>
                <li className='banner_item faoliyat_roo'>Online murojaat</li>
              </Link>
              <Link to={'/aloqa/offline'} className='link'>
                <li className='banner_item faoliyat_roo'>Offline murojaat</li>
              </Link>
              <Link to={'/aloqa/boglanish'} className='link'>
                <li className='banner_item faoliyat_roo'>Biz bilan bog‘lanish</li>
              </Link>
            </ul>
                </div>
)}
              </ul>
      </div>

      <Swiper
     spaceBetween={0}
     pagination={{
       clickable: true,
     }}
     modules={[Pagination]}
     className="mySwiper"
      >
        {
          silider.map((item, inx) =>  
          <SwiperSlide>
          <div className='container med' key={inx} >
            <img className='banner_photo' src={item.photo} alt="" />
            <img className='banner_photo_two' src={img} alt="" />
            <div className='ul_flex '>
            </div>
            <h1 className='banner_h1'>{item.title.luz}</h1>
            <button className='home_btn'>Batafsil</button>
          </div>
        </SwiperSlide>)
        }
      </Swiper>
      <div className="container">
        <div className='banner'>
        </div>

        <div className="banner_two">
          <h3 className='logo'>Yangiliklar</h3>
         {/* {
          yangilik.map((item, inx) => 
            <div className='two_div' key={inx}>

          <div className='two_div_imgs'>
            <img className='two_div_img' src={imgTwo} alt="" /> 
          </div>

          <div className='two_div_text '>
            <h3 className='div_text_h3'>{item.items[4].title.luz}</h3>
            <div className='hr'></div>
            <p className='div_text_p'>Joriy yilning 28-dekabr kuni Ijtimoiy himoya milliy agentligi hamda O‘zbekiston
              volontyorlari assotsiatsiyasi o‘rtasida hamkorlik memorandumi imzolandi.
              Hamkorlikning asosiy maqsadi o‘zgalar parvarishiga muhtoj bo‘lgan yolg‘iz yashovchi
              yoki yolg‘iz keksa va nogironligi bo‘lgan shaxslarni aniqlashga, “Inson” ijtimoiy xizmatlar markazlariga tashrif buyuradigan aholiga markazdagi mavjud...</p>
            <div className='div_text_icons'>
              <Calendar/>
              <h4 className='text_icon'>15:12 / 01.01.2024</h4>
            </div>
          </div>
        </div>
        )
         } */}
          <div className='three_div'>
            <div className='three_cart'>
              <img src={threeImg3} alt="" />
              <div className='icon_flex'>
                <Calendar/>
                <h3 className='three_cart_h3'>15:18 / 04.04.2024</h3>
              </div>
              <h4 className='three_cart_h4'>O‘zbekistonda Global akseleratorning ustuvor yo‘nalishlarini muhokama qilish va tasdiqlash bo‘yicha Maslahat seminari bo‘lib o‘tdi</h4>
              <p className='three_cart_p'>Joriy yil 8-aprel kuni O‘zbekistonda Global akseleratorning ustuvor yo‘nalishlarini muhokama qilish va tasdiqlash bo‘yicha Maslahat seminari bo‘lib o‘tdi, unda akseleratsiya nuqtalari va sektorning potentsial...</p>
            </div>
            <div className='three_cart'>
              <img src={threeImg} alt="" />
              <div className='icon_flex'>
              <Calendar/>
                <h3 className='three_cart_h3'>12:05 / 03.02.2024</h3>
              </div>
              <h4 className='three_cart_h4'>BMTning oziq-ovqat va qishloq xo'jaligi tashkiloti (FAO) ning O'zbekiston Respublikasidagi vakolatxonasi vakillari bilan uchrashuv bo'lib o'tdi</h4>
              <p className='three_cart_p'>5-mart kuni Ijtimoiy himoya milliy agentligida BMTning oziq-ovqat va qishloq xo’jaligi tashkiloti (FAO) ning O’zbekiston Respublikasidagi vakolatxonasi rahbari o’rinbosari Sherzod Umarov bilan...</p>
            </div>
            <div className='three_cart'>
              <img src={threeImg} alt="" />
              <div className='icon_flex'>
              <Calendar/>
                <h3 className='three_cart_h3'>12:05 / 03.02.2024</h3>
              </div>
              <h4 className='three_cart_h4'>BMTning oziq-ovqat va qishloq xo'jaligi tashkiloti (FAO) ning O'zbekiston Respublikasidagi vakolatxonasi vakillari bilan uchrashuv bo'lib o'tdi</h4>
              <p className='three_cart_p'>5-mart kuni Ijtimoiy himoya milliy agentligida BMTning oziq-ovqat va qishloq xo’jaligi tashkiloti (FAO) ning O’zbekiston Respublikasidagi vakolatxonasi rahbari o’rinbosari Sherzod Umarov bilan...</p>
            </div>
            <div className='three_cart'>
              <img src={threeImg2} alt="" />
              <div className='icon_flex'>
              <Calendar/>
                <h3 className='three_cart_h3'>15:12 / 01.01.2024</h3>
              </div>
              <h4 className='three_cart_h4'>“Siyosiy ma’rifat soati” doirasida  xodimlar ishtirokida navbatdagi “Ma’naviyat soati” tashkil etildi</h4>
              <p className='three_cart_p'>Haftaning eng muhim va dolzarb mavzulari yuzasidan “Siyosiy ma’rifat soati” doirasida  xodimlar ishtirokida navbatdagi “Ma’naviyat soati” tashkil etildi...</p>
            </div>
          </div>
        </div>
        <Link className='link' to={'/batafsil'}>
        <button className='home_btn_two'>Batafsil</button>
        </Link>
        
      </div>
      <div>
      <div className="banner_three ">
          <div className='container'>
          <h3 className='three_h3'>O‘rganilgan obyektlar</h3>
          <div className='three_flex'>
            <Link className='link' to={'/'}>
                    <div className='flex_box'>
                  <div className='circle'>
                    <h2 className='circle_h2'>80</h2>
                  </div>
                  <p className='flex_p'>Qulay-muhit</p>
                </div>
            </Link>
            <Link className='link' to={'/katta-yoshdagilar'}>
                <div className='flex_box'>
                    <div className='circle'>
                      <h2 className='circle_h2'>185</h2>
                    </div>
                    <p className='flex_p'>Katta yoshdagilar</p>
                </div>
            </Link>
            <Link className='link' to={'/voyaga'}>
           <div className='flex_box'>
              <div className='circle'>
                <h2 className='circle_h2'>365</h2>
              </div>
              <p className='flex_p'>Voyaga yetmaganlar</p>
            </div>
            </Link>
            <Link className='link' to={'/nogiron'}>
           <div className='flex_box'>
              <div className='circle'>
                <h2 className='circle_h2'>985</h2>
              </div>
              <p className='flex_p'>Nogironlikni belgilash</p>
            </div>
            </Link>
          </div>
          </div>
        </div>
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
                <Link className='link' to={'/qulay-muhit/chorraha'}>
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
                    <Link className='link tooo' to={'/qulay-muhit/inson/hududlar'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td className='one_td'>Inson” ijtimoiy xizmatlar markazlari</td>
                    </Link>
                    </tr>
                        <tr>
                   <Link className='link tooo' to={'/qulay-muhit/davlat/davlat'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td className='one_td'>Davlat xizmatlari markazlari</td>
                   </Link>
                        </tr>
                    <tr>
                   <Link to={'/qulay-muhit/ayollar/hud'} className='link tooo'>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Ayollarni reabilitatsiya qilish va moslashtirish markazlari</td>
                   </Link>
                    </tr>
                    <tr>
                        <Link className='link tooo' to={'/qulay-muhit/bolalar/hududd'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Bolalar va Mehribonlik uylari</td>
                        </Link>
                    </tr>
                    <tr>
                        <Link className='link tooo' to={'/qulay-muhit/saxovat/hudd'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Saxovat, Muruvvat, Sanatoriy va protezlash markazlari binolari</td>
                        </Link>
                    </tr>
                    <tr>
                        <Link className='link tooo' to={'/qulay-muhit/talim/hududlar'}>
                        <th className='one_th'>0 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Ta’lim obyektlari </td>
                        </Link>
                    </tr>
                    <tr>
                        <Link className='link tooo' to={'/qulay-muhit/sogliq/hud'}>
                        <th className='one_th'>0 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Sog‘liqni saqlash obyektlari</td>
                        </Link>
                    </tr>
                    <tr>
                        <Link className='link tooo' to={'/qulay-muhit/ishga-marhamat/hud'}>
                        <th className='one_th'>208 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Ishga marxamat monomarkazlari obyektlari</td>
                        </Link>
                    </tr>
                    <tr>
                        <Link className='link tooo' to={'/qulay-muhit/davlat-xizmat/hududlar'}>
                        <th className='one_th'>14 ta</th>
                        <div className='table_hr'></div>
                        <td  className='one_td'>Davlat xizmatini rivojlantirish agentligi obyektlari</td>
                        </Link>
                    </tr>
                </table>
            </div>
            </div>
            </div>
        </div>
        <h4 className='home_h4 container'>Hukumat portallari</h4>
        <div className="banner_small container">
          <div className='flex_img'>
            <img className='img' src={group27} alt="" />
            <button className='flex_btn'></button>
          </div>
          <div className='flex_img'>
            <img className='img' src={group26} alt="" />
            <button className='flex_btn'></button>
          </div>
          <div className='flex_img'>
            <img className='img' src={group25} alt="" />
            <button className='flex_btn'></button>
          </div>
          <div className='flex_img'>
            <img className='img' src={group24} alt="" />
            <button className='flex_btn'></button>
          </div>
        </div>
        
      </div>
    </div>
       
    </div>
  )
}

export default Ayollar