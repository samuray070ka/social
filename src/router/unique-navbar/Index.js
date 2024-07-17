import React, { useState, useEffect } from 'react';
import './index.css';
import { Link, useParams } from 'react-router-dom';
import ArrowBottom from '../../icons/arrowBottom';
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png';
import Search from '../../icons/search';
import useBreadcrumbs from "use-react-router-breadcrumbs";

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
  console.log(data);

  async function fetchInspeksiya(slug) {
    const response = await fetch(`https://ijtimoiyinspeksiya.uz/api/v1/page/view?slug=${slug}&expand=body,photo,keywords,description,meta_title`);
    const data = await response.json();
    return data;
  }
  const [inspeksiya, setInspeksiya] = useState(null); // Initially null

  useEffect(() => {
    async function getIns() {
      const result = await fetchInspeksiya();
      // API dan kelayotgan ma'lumotlarni tekshirish
      console.log(result);
      // Agar ma'lumot array bo'lsa, o'zgaruvchiga saqlash
      if (Array.isArray(result)) {
        setInspeksiya(result);
      } else {
        setInspeksiya([result]); // Agar massiv bo'lmasa, uni massivsimon qilib o'zgartirish
      }
    }
    getIns();
  }, []);

  const param = useParams();
  let oneItem = data.find((item) => item.id === param.proID);

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
            <input type="text" /> <Search />
          </div>
          <hr className='ijtimoiy_hr' />
          <ul className='ijtimoiy_collaction'>
            {
              data.map((item, inx) =>
                <Link to={``} className='link' key={inx}>
                  <li className='ijtimoiy_item go'><ArrowBottom /> {item.name.luz}</li>
                </Link>
              )
            }
          </ul>
        </div>
        <div className='container tor'>
          {breadcrumbs.map(({ match, breadcrumb }) => (
            <Link className='link tod' key={match.pathname} to={match.pathname}>
              {breadcrumb}
            </Link>
          ))}
        </div>
        <div className='container ols'>
          <div className='banner_big'>
            {
              inspeksiya && inspeksiya.map((item, inx) => // inspeksiya mavjudligini tekshirish
                <div key={inx}>
                  <h1>{item.title?.luz}</h1>
                  <p>{item.body?.luz}</p>
                </div>
              )
            }
          </div>
          
          <div className='banner_text'>
            <ul className='banner_collaction'>
              {
                data.map((item, inx) => (
                  <React.Fragment key={inx}>
                    <li className='banner_item one'>{item.name.luz}</li>
                    {
                      item.menus.map((subItem, subInx) => (
                        <Link className='link' to={`/${subItem.type.label}/${subItem.item}`} key={subInx}>
                          <hr />
                          <li className='banner_item '>{subItem.name.luz}</li>
                        </Link>
                      ))
                    }
                    <hr />
                  </React.Fragment>
                ))
              }
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Index;
