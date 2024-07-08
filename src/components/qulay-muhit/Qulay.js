import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import Build from '../../assets/building 2.png'
import './Qulay.css'
function Qulay() {
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

async function fetchStatic() {
  const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/statistic-category');
  const data = await response.json();
  return data;
}
const [staticc, setStatic] = useState([]);

useEffect(() => {
  async function getData() {
      const result = await fetchStatic();
      setStatic(result);
  }
  
  getData();
  console.log(staticc);
}, []);
const [activeDiv, setActiveDiv] = useState('div5');

  const handleButtonClick = (divName) => {
    setActiveDiv(divName);
  };

  const renderDiv = () => {
    switch (activeDiv) {
      case 'div1':
        return <div>sdasdasdasda</div>
      case 'div2':
        // return <Nogiron/>
      case 'div3':
        // return <Voyaga/>
      case 'div4':
        // return <Katta/>
      case 'div5':
        return <div></div>
      default:
    }
  };
  return (
    <div>
      <div className='soha'>
            <div className='container sohaa'>
                <Link className='link' to={'/'}>
                    <h6  className='soha-h6'>Qulay muhit obyektlari</h6>
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
                {
                    category.map((item, inx) => 
                    <div className='biig_flex' key={inx}>
                        <img className='biig_img' src={item.items[0].icon} alt="" />
                        <h6 className='biig_h6'>{item.items[0].name.luz}</h6>
                    </div>
                    )
                }
                
                </div>
                <div className='big_box'>
                {/* <div>{renderDiv()}</div> */}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Qulay