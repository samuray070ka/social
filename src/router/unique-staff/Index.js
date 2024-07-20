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
        const { slug } = useParams(); 
        const [menuContent, setMenuContent] = useState(null);
        const breadcrumbs = useBreadcrumbs(routes);
        useEffect(() => {
          async function fetchMenuContent() {
            try {
              const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/menu/sidebar?item=${slug}`);
              const stafff = await response.json();
              console.log("Sahifa mazmuni:", stafff); // Ma'lumotlarni tekshirish uchun log
              setMenuContent(stafff);
            } catch (error) {
              console.error("Sahifa mazmunini olishda xatolik:", error);
            }
          }
      
          if (slug) {
            fetchMenuContent();
          }
        }, [slug]);
        
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
            <h1 className='tuzilma_h1'>dasdadas</h1>
            {
    Array.isArray(staff) && staff.map((item, inx) => 
      <div className='rahbar_flex' key={inx}>
           
               <div className='rahbar_img' key={inx}>
                <img src={item.items[0].photo} alt="" />
            </div>
            <div className='rahbar_text'>
                <h6>{item.items[0].name.luz}</h6>
                <h5 className='rahbar_h6'>{item.tems[0].role.luz}</h5>
                <div className='rahbar_hr'></div>
                <div className='rahbar_icons'>
                    <div className='icon_one'>
                        <Mail/>
                        <p>{item.items[0].description.date.luz}</p>
                    </div>
                    <div className='icon_one'>
                        <Phone/>
                        <p>{item.items[0].description.phone}</p>
                    </div>
                    <div className='icon_one'>
                        <Mail/>
                        <p>{item.items[0].description.mail}</p>
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
           {
              menuContent && (
                  <div>
                    <li className='banner_item one'>{menuContent.parent.name.luz}</li>
                    {menuContent.parent.menus.map((item, inx) => (
                      <Link className='link' to={`/${item.type.label}/${item.item}`} key={inx}>
                        <hr />
                        <li className='banner_item'>{item.name.luz}</li>
                      </Link>
                    ))}
                  <hr />
                  </div>
            )}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Index