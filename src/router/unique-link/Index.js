import React, { useState, useEffect } from 'react';
import './inde.css';
import { Link, useParams } from 'react-router-dom';
import ArrowBottom from '../../icons/arrowBottom';
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png';
import Search from '../../icons/search';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Reorder from '../../icons/reordar';

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

  async function fetchArticle() {
    const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/article');
    const data = await response.json();
    return data;
  }
  const [article, setArticle] = useState([]);

  useEffect(() => {
    async function getArticle() {
      const result = await fetchArticle();
      console.log(result); // API dan kelayotgan ma'lumotlarni tekshirish
      if (Array.isArray(result)) {
        setArticle(result); // Agar massiv bo'lsa, to'g'ridan-to'g'ri saqlash
      } else {
        setArticle([result]); // Agar massiv bo'lmasa, uni massivsimon qilib o'zgartirish
      }
    }
    getArticle();
  }, []);
  console.log(article);

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
          <div className='re'>
            <Reorder />
          </div>
          <ul className='ijtimoiy_collaction'>
            {
              data.map((item, inx) =>
                <Link to={`/${item}`} className='link' key={inx}>
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
        <div className='ols container'>
          <div className="banner_big ">
            <div className="jamo_wrapper">
              {
                article.map((item, inx) =>
                  <div key={inx} className='jamo_box'>
                    <Link to={`/jamoatchilik/products/${item?.items[5].id}`}>
                      <img className='hamkor_img' src={item?.items[5].thumbnail_path} alt="" />
                    </Link>
                    <h6 className='box_h6'>{item?.items[5].title.luz}</h6>
                    <div className='jamo_flex'>
                      <h6 className='jamo_h6'>{item?.items[5].published_at}</h6>
                      <img src={''} alt="" />
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
  );
}

export default Index;