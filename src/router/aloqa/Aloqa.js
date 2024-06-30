import React,{useState} from 'react'
import './Aloqa.css'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../icons/arrowBottom'
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Search from '../../icons/search'

function Aloqa() {
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


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    comment: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/appeal/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response from server:', data);

      // Formni muvaffaqiyatli yuborishdan keyin tozalash
      setFormData({
        name: '',
        email: '',
        phone_number: '',
        comment: ''
      });
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };
  return (
    <div>
      <div className='container'>
        <div className="ijtimoiy_logo">
          <Link to={'/'} className='ijtimoiy_logo link to'>
            <img src={homeImgOne} alt="" />
            <h2 className='ijtimoiy_h2'>Aloqa</h2>
          </Link>
          <input type="text" /> <Search/>
        </div>
        <hr  className='ijtimoiy_hr'/>
        <ul className='ijtimoiy_collaction'>
                <Link to={'/ijtimoiy'} className='link'>
                  <li className='ijtimoiy_item'><ArrowBottom/> Ijtimoiy inspeksiya</li>
                </Link>
                <Link to={'/faoliyat'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/> Faoliyat</li>
                </Link>
                <Link to={'/normativ'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Normativ hujjatlar</li>
                </Link>
                <Link to={'/jamoatchilik'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Jamoatchilik</li>
                </Link>
                <Link to={'/statistica'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Statistika</li>
                </Link>
                <Link to={'/ochiq'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Ochiq ma'lumotlar</li>
                </Link>
                <Link to={'/aloqa'} className='link'>
                  <li className='ijtimoiy_item ijtimoiy_item_ml'><ArrowBottom/>Aloqa</li>
                </Link>
        </ul>
        </div>
       <div className='exs container'>
       <div className='container tor'>
          {breadcrumbs.map(({ match, breadcrumb }) => (
          <Link className='link tod' key={match.pathname}  to={match.pathname}>
            { breadcrumb}
          </Link>
        ))}
          </div>
          <div>
          <Link className='link' to={'/aloqa/offline'}>
            <button className='end'>ex</button>
          </Link>
          </div>
       </div>
        <div className=' ols  container '>
          <div className='online_murojat'>
            <div className='murojat_img_flex'>
              <img className='img_fle_img' src={homeImgOne} alt="" />
              <h6 className='img_flex_h6'>Sizda shikoyat yoki taklif bormi?
              Bizga online murojaat qiling.</h6>
            </div>
            <div className='murojat_flex_inp'>
              <div className='flex_inp_box'>
                <h6>F.I.O</h6>
                      <input
                      placeholder='Ism sharifingizni kiriting'
                      className='muojat_inp'
                      type='text'
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      />
              </div>
              <div className='flex_inp_box'>
                <h6 className='h66'>E-mail@.ru</h6>
                <input className='muojat_inp2'
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 placeholder='E-mail@.ru'/>
              </div>
              <div className='flex_inp_box'>
                <h6  className='h66'>Telefon raqam:</h6>
                <input className='muojat_inp3'
                 type="tel"
                 name="phone_number"
                 value={formData.phone_number}
                 onChange={handleChange}
                 placeholder='+998 90-000-00-00'/>
              </div>
            </div>
           <div className='clas'>
           <h6 className='hh6'>Shikoyat yoki takliflar uchun:</h6>
           <textarea className='murojat-desc'
             name="comment"
             value={formData.comment}
             onChange={handleChange}
            placeholder='Shikoyat yoki takliflaringizni online yuboring.'/>
           </div>
            <br />
            <Link className='link' to={'/togri'}>
              <button className='murojat_btn' type='submit'>Yuborish</button>
            </Link>
          </div>
          
        </div>
    </div>
  )
}

export default Aloqa