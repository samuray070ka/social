import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import ArrowBottom from '../../icons/arrowBottom'
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../icons/search'
import useBreadcrumbs from "use-react-router-breadcrumbs";
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

    async function fetchDocument() {
        const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/document?document_category_id=1');
        const data = await response.json();
        return data;
      }
      const [document, setDocument] = useState([]);
      
      useEffect(() => {
        async function getDocument() {
            const result = await fetchDocument();
            setDocument(result);
        }
        getDocument();
        console.log(document);
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
          <div className='flex_wrapper'>
            {
                document.map((item, inx) => 
                    <div className='flex_child' key={inx}>
                <div className='child_imgs'>
                  <img className='child_img' src={item.icon} alt="" />
                </div>
                <div className='child_text'>
                  <h6 className='text_h6'>{item.name.luz}</h6>
                </div>
              </div>
                )
            }
            </div>
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