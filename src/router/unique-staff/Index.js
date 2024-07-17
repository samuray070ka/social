import React, {useState, useEffect} from 'react'
import './index.css'
import {Link, useParams} from 'react-router-dom'
import ArrowBottom from '../../icons/arrowBottom'
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../icons/search'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Mail from '../../icons/mail'
import Phone from '../../icons/phone'
import Reorder from '../../icons/reordar'

function Index() {
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

    async function fetchStaff() {
        const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/staff/list?type=1100');
        const data = await response.json();
        return data;
      }
      const [staff, setStaff] = useState([]);
      
      useEffect(() => {
        async function getStaff() {
            const result = await fetchStaff();
            setStaff(result);
        }
        getStaff();
        console.log(staff);
    }, []);



    
      
          const param = useParams
          let oneItem = data.find((item)=> item.id === param.proID)
      
          const userNamesById = { 1: "John" };
         
        const DynamicUserBreadcrumb = ({ match }) => (
          <span>{userNamesById[match.params.userId]}</span>
        );
        
        const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
        
        const routes = [
          { path: "/users/:userId", breadcrumb: DynamicUserBreadcrumb },
          { path: "/example", breadcrumb: "Custom Example" },
          {
            path: "/custom-props",
            breadcrumb: CustomPropsBreadcrumb,
            props: { someProp: "Hi" }, 
          },
        ];
        const breadcrumbs = useBreadcrumbs(routes);
  return (
    <div>
        <div className='ijtimoiy'>
          <div className='container'>
        <div className="ijtimoiy_logo">
          <Link to={'/'} className='ijtimoiy_logo link to'>
            <img src={homeImgOne} alt="" />
            <h2 className='ijtimoiy_h2'>Ijtimoiy inspeksiya</h2>
          </Link>
          <input type="text" /> <Search/>
        </div>
        <hr  className='ijtimoiy_hr'/>
        <div className='re'>
        <Reorder/>

        </div>
        <ul className='ijtimoiy_collaction'>
            {
                data.map((item, inx) =>
                    <Link to={`/${item}`} className='link' key={inx}>
                        <li className='ijtimoiy_item go'><ArrowBottom/> {item.name.luz}</li>
                    </Link>
                )
            }
        
        </ul>
        </div>
        <div className='container tor'>
          {breadcrumbs.map(({ match, breadcrumb }) => (
          <Link className='link tod' key={match.pathname}  to={match.pathname}>
            { breadcrumb}
          </Link>
        ))}
          </div>
        <div className='ols  container'>
          
          <div className="banner_big ">
            <h1 className='tuzilma_h1'>Rahbaryat</h1>
            {
                staff.map((item,inx) => 
                    <div className='rahbar_flex' key={inx}>
            <div className='rahbar_img'>
              <img src={item.photo} alt="" />
            </div>
            <div className='rahbar_text'>
              <h6>{item.name.luz}</h6>
              <h5 className='rahbar_h6'>{item.role.luz}</h5>
              <div className='rahbar_hr'></div>
              <div className='rahbar_icons'>
                <div className='icon_one'>
                  <Mail/>
                  <p>{item.description.mail}</p>
                </div>
                <div className='icon_one'>
                  <Phone/>
                  <p>{item.description.phone}</p>
                </div>
                <div className='icon_one'>
                  <Mail/>
                  <p>{item.description.date.luz}</p>
                </div>
              </div>
              <div className='rahbar_hr'></div>
              <div className='rahbar_icon'>
                {/* <img className='icon_img' src={item.description.links[0].icon} alt="" />
                <img className='icon_img ml' src={item.description.links[1].icon} alt="" />
                <img className='icon_img ml ' src={item.description.links[2].icon} alt="" />
                <img className='icon_img ml ' src={item.description.links[3].icon} alt="" /> */}
              </div>
              <button className='rahbar_btn'>Tarjimai hol</button>
            </div>

            </div>
                )
            }
            
          </div>
            <div className='banner_text '>
            <ul className='banner_collaction'>
              <li className='banner_item one'>Ijtimoiy inspeksiya</li>
              <hr />
              <Link to={'/ijtimoiy'} className='link'>
                <li className='banner_item '>Inspeksiya haqida</li>
              </Link>
              <hr />
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Index