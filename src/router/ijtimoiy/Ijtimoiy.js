import React from 'react'
import './Ijtimoiy.css'
import {Link, useLocation} from 'react-router-dom'
import ArrowBottom from '../../icons/arrowBottom'
import homeImgOne from '../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../icons/search'
import useBreadcrumbs from "use-react-router-breadcrumbs";

function Ijtimoiy() {
  
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
          <div className='container tor'>
          {breadcrumbs.map(({ match, breadcrumb }) => (
          <Link className='link tod' key={match.pathname}  to={match.pathname}>
            { breadcrumb}
          </Link>
        ))}
          </div>
        <div className=' container ols'>
          <div className='banner_big '>
            <h3 className='oz'>O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiya</h3>

            <p className='ps'>O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiya (keyingi o‘rinlarda Inspeksiya deb yuritiladi) O‘zbekiston Respublikasi Prezidentining 2023-yil 1-iyundagi “Aholiga sifatli ijtimoiy xizmat va yordam ko‘rsatish hamda uning samarali nazorat tizimini yo‘lga qo‘yish bo‘yicha kompleks chora-tadbirlar to‘g‘risida”gi Farmoni bilan tashkil etilgan.
            </p>

            <p className='ps'>Inspeksiya ijtimoiy himoya sohasida huquqbuzarliklar profilaktikasini, aholini ijtimoiy himoya qilish va ijtimoiy xizmatlarva yordam ko‘rsatish sohasida qonunchilik hujjatlari talablariga rioya etilishi ustidan davlat nazoratini amalga oshiruvchi vakolatli davlat boshqaruvi organi hisobalanadi.</p>

            <h2 className='oz'>Ijtimoiy inspeksiyaning vazifalari</h2>
            <ul className='text_collaction'>
              
              <li className='text_item'><span>ijtimoiy himoya sohasiga doir </span>  qonunchilikka rioya etilishi ustidan <span>davlat nazoratini amalga oshirish;</span></li>

              <li className='text_item'><span>nogironligi bo‘lgan shaxslarga</span>  ijtimoiy xizmatlar va yordam ko‘rsatishga doir <span>talab va standartlarga rioya etilishini nazorat qilish;</span></li>
              
              <li className='text_item'><span>voyaga yetmaganlarga</span>  ijtimoiy xizmatlar va yordam ko‘rsatishga doir <span>talab va standartlarga rioya etilishini nazorat qilish;</span></li>
              
              <li className='text_item'>imkoniyati cheklangan va nogironligi bo‘lgan shaxslarga <span> to‘siqsiz muhit</span> yaratishga doir qonunchilik hujjatlari  <span>talablariga rioya etilishini nazorat qilish;</span></li>
              
              <li className='text_item'>o‘zgalar parvarishiga muhtoj yolg‘iz yashovchi <span> keksalar</span>  hamda <span> yolg‘iz keksalar</span> va <span>nogironligi bo‘lgan shaxslarga</span> ijtimoiy xizmatlar va yordam ko‘rsatishga doir <span> talab va standartlarga rioya etilishini nazorat qilish;</span></li>
              
              <li className='text_item'> odam savdosi jabrdiydalari, tazyiq va zo‘ravonlikdan jabr ko‘rgan xotin-qizlar va voyaga yetmaganlar hamda muayyan yashash joyiga ega bo‘lmagan shaxslarga ijtimoiy xizmatlar va yordam ko‘rsatishga doir <span>talab va standartlarga rioya etilishini nazorat qilish;</span></li>
              
              <li className='text_item'>aholining ijtimoiy himoyaga muhtoj qatlamlariga <span>ish o‘rinlarining eng kam soni belgilanishi va o‘qish uchun kvotalar ajratilishini nazorat qilish;</span></li>
              
              <li className='text_item'>imkoniyati cheklangan va nogironligi bo‘lgan shaxslarni  <span>parasport turlariga jalb qilinishini nazorat qilish;</span></li>
              
              <li className='text_item'>ijtimoiy himoyaga muhtoj aholini muhofaza qilish zaruriyati, talab va shartlari to‘g‘risida keng  <span>jamoatchilik o‘rtasida axborot-tushuntirish va targ‘ibot tadbirlarini tashkil etish va o‘tkazish.</span></li>
            </ul>
            <br />
            <h4>Ijtimoiy inspeksiyaning funksiyalari</h4>
            <div className='nimadur'>
              <h1 className=''>I. Ijtimoiy sohaga oid qonunchilik hujjatlariga rioya etilishi ustidan davlat nazoratini amalga oshirish sohasida:</h1>
              <ul className='funksiya_collaction'>

                <li className='funksiya_item'>ijtimoiy xizmatlar va yordam ko‘rsatish   sohasida qonunchilik hujjatlari talablariga rioya etilishini nazorat qilish;</li>

                <li className='funksiya_item'>POM va RTV bilan ta’minlash jarayonlarida   qonunchilikda belgilangan talablarga rioya etilishi nazorat qilish</li>
                
                <li className='funksiya_item'>shaxslarni “Muruvvat” internat uylari,   Agentlik tizimidagi sanatoriylar hamda Ijtimoiy qo‘llab-quvvatlash markazlariga   joylashtirish va ularda ijtimoiy xizmatlar va yordam ko‘rsatishda qonunchilikda belgilangan talablarga rioya etilishini nazorat   qilish</li>

                <li className='funksiya_item'>

                kafolatlangan ijtimoiy xizmatlar va yordam   standartlariga rioya etilishini nazorat qilish</li>

                <li className='funksiya_item'>bolalarga nisbatan zo‘ravonlik holatlarining   oldini olish bo‘yicha ishlab chiqilgan dasturlar ijrosini nazorat qiladi;</li>

                <li className='funksiya_item'>Agentlik tomonidan muvofiqlashtiriladigan va   monitoring qilinadigan faoliyat yo‘nalishlari bo‘yicha ijtimoiy himoyaga   muhtoj aholiga ijtimoiy xizmatlar va yordam ko‘rsatish faoliyatini o‘rganadi   va takliflar ishlab chiqadi;</li>

                <li className='funksiya_item'>
                ijtimoiy himoya sohasida huquqbuzarlik sodir   etilishi xavfi yuqori bo‘lgan davlat organlari va tashkilotlarida ijtimoiy   sohaga oid tushuntirish ishlarini olib boradi.</li>
              </ul>
            </div>
            <div className='nimadur'>
              <h1>II. Ijtimoiy sohaga oid qonunchilik hujjatlariga rioya etilishi ustidan davlat nazoratini amalga oshirish sohasida:</h1>
              <ul className='funksiya_collaction'>

                <li className='funksiya_item'>ijtimoiy xizmatlar va yordam ko‘rsatish   sohasida qonunchilik hujjatlari talablariga rioya etilishini nazorat qilish;</li>

                <li className='funksiya_item'>POM va RTV bilan ta’minlash jarayonlarida   qonunchilikda belgilangan talablarga rioya etilishi nazorat qilish</li>
                
                <li className='funksiya_item'>shaxslarni “Muruvvat” internat uylari,   Agentlik tizimidagi sanatoriylar hamda Ijtimoiy qo‘llab-quvvatlash markazlariga   joylashtirish va ularda ijtimoiy xizmatlar va yordam ko‘rsatishda qonunchilikda belgilangan talablarga rioya etilishini nazorat   qilish</li>

                <li className='funksiya_item'>

                kafolatlangan ijtimoiy xizmatlar va yordam   standartlariga rioya etilishini nazorat qilish</li>

                <li className='funksiya_item'>bolalarga nisbatan zo‘ravonlik holatlarining   oldini olish bo‘yicha ishlab chiqilgan dasturlar ijrosini nazorat qiladi;</li>

                <li className='funksiya_item'>Agentlik tomonidan muvofiqlashtiriladigan va   monitoring qilinadigan faoliyat yo‘nalishlari bo‘yicha ijtimoiy himoyaga   muhtoj aholiga ijtimoiy xizmatlar va yordam ko‘rsatish faoliyatini o‘rganadi   va takliflar ishlab chiqadi;</li>

                <li className='funksiya_item'>
                ijtimoiy himoya sohasida huquqbuzarlik sodir   etilishi xavfi yuqori bo‘lgan davlat organlari va tashkilotlarida ijtimoiy   sohaga oid tushuntirish ishlarini olib boradi.</li>
              </ul>
            </div>
            <div  className='nimadur'>
              <h1>III. Ijtimoiy sohaga oid qonunchilik hujjatlariga rioya etilishi ustidan davlat nazoratini amalga oshirish sohasida:</h1>
              <ul className='funksiya_collaction'>

                <li className='funksiya_item'>ijtimoiy xizmatlar va yordam ko‘rsatish   sohasida qonunchilik hujjatlari talablariga rioya etilishini nazorat qilish;</li>

                <li className='funksiya_item'>POM va RTV bilan ta’minlash jarayonlarida   qonunchilikda belgilangan talablarga rioya etilishi nazorat qilish</li>
                
                <li className='funksiya_item'>shaxslarni “Muruvvat” internat uylari,   Agentlik tizimidagi sanatoriylar hamda Ijtimoiy qo‘llab-quvvatlash markazlariga   joylashtirish va ularda ijtimoiy xizmatlar va yordam ko‘rsatishda qonunchilikda belgilangan talablarga rioya etilishini nazorat   qilish</li>

                <li className='funksiya_item'>

                kafolatlangan ijtimoiy xizmatlar va yordam   standartlariga rioya etilishini nazorat qilish</li>

                <li className='funksiya_item'>bolalarga nisbatan zo‘ravonlik holatlarining   oldini olish bo‘yicha ishlab chiqilgan dasturlar ijrosini nazorat qiladi;</li>

                <li className='funksiya_item'>Agentlik tomonidan muvofiqlashtiriladigan va   monitoring qilinadigan faoliyat yo‘nalishlari bo‘yicha ijtimoiy himoyaga   muhtoj aholiga ijtimoiy xizmatlar va yordam ko‘rsatish faoliyatini o‘rganadi   va takliflar ishlab chiqadi;</li>

                <li className='funksiya_item'>
                ijtimoiy himoya sohasida huquqbuzarlik sodir   etilishi xavfi yuqori bo‘lgan davlat organlari va tashkilotlarida ijtimoiy   sohaga oid tushuntirish ishlarini olib boradi.</li>
              </ul>
            </div>
            <div   className='nimadur'>
              <h1>IV. Ijtimoiy sohaga oid qonunchilik hujjatlariga rioya etilishi ustidan davlat nazoratini amalga oshirish sohasida:</h1>
              <ul className='funksiya_collaction'>

                <li className='funksiya_item'>ijtimoiy xizmatlar va yordam ko‘rsatish   sohasida qonunchilik hujjatlari talablariga rioya etilishini nazorat qilish;</li>

                <li className='funksiya_item'>POM va RTV bilan ta’minlash jarayonlarida   qonunchilikda belgilangan talablarga rioya etilishi nazorat qilish</li>
                
                <li className='funksiya_item'>shaxslarni “Muruvvat” internat uylari,   Agentlik tizimidagi sanatoriylar hamda Ijtimoiy qo‘llab-quvvatlash markazlariga   joylashtirish va ularda ijtimoiy xizmatlar va yordam ko‘rsatishda qonunchilikda belgilangan talablarga rioya etilishini nazorat   qilish</li>

                <li className='funksiya_item'>

                kafolatlangan ijtimoiy xizmatlar va yordam   standartlariga rioya etilishini nazorat qilish</li>

                <li className='funksiya_item'>bolalarga nisbatan zo‘ravonlik holatlarining   oldini olish bo‘yicha ishlab chiqilgan dasturlar ijrosini nazorat qiladi;</li>

                <li className='funksiya_item'>Agentlik tomonidan muvofiqlashtiriladigan va   monitoring qilinadigan faoliyat yo‘nalishlari bo‘yicha ijtimoiy himoyaga   muhtoj aholiga ijtimoiy xizmatlar va yordam ko‘rsatish faoliyatini o‘rganadi   va takliflar ishlab chiqadi;</li>

                <li className='funksiya_item'>
                ijtimoiy himoya sohasida huquqbuzarlik sodir   etilishi xavfi yuqori bo‘lgan davlat organlari va tashkilotlarida ijtimoiy   sohaga oid tushuntirish ishlarini olib boradi.</li>
              </ul>
            </div>
            <div   className='nimadur'>
              <h1>V. Ijtimoiy sohaga oid qonunchilik hujjatlariga rioya etilishi ustidan davlat nazoratini amalga oshirish sohasida:</h1>
              <ul className='funksiya_collaction'>

                <li className='funksiya_item'>ijtimoiy xizmatlar va yordam ko‘rsatish   sohasida qonunchilik hujjatlari talablariga rioya etilishini nazorat qilish;</li>

                <li className='funksiya_item'>POM va RTV bilan ta’minlash jarayonlarida   qonunchilikda belgilangan talablarga rioya etilishi nazorat qilish</li>
                
                <li className='funksiya_item'>shaxslarni “Muruvvat” internat uylari,   Agentlik tizimidagi sanatoriylar hamda Ijtimoiy qo‘llab-quvvatlash markazlariga   joylashtirish va ularda ijtimoiy xizmatlar va yordam ko‘rsatishda qonunchilikda belgilangan talablarga rioya etilishini nazorat   qilish</li>

                <li className='funksiya_item'>

                kafolatlangan ijtimoiy xizmatlar va yordam   standartlariga rioya etilishini nazorat qilish</li>

                <li className='funksiya_item'>bolalarga nisbatan zo‘ravonlik holatlarining   oldini olish bo‘yicha ishlab chiqilgan dasturlar ijrosini nazorat qiladi;</li>

                <li className='funksiya_item'>Agentlik tomonidan muvofiqlashtiriladigan va   monitoring qilinadigan faoliyat yo‘nalishlari bo‘yicha ijtimoiy himoyaga   muhtoj aholiga ijtimoiy xizmatlar va yordam ko‘rsatish faoliyatini o‘rganadi   va takliflar ishlab chiqadi;</li>

                <li className='funksiya_item'>
                ijtimoiy himoya sohasida huquqbuzarlik sodir   etilishi xavfi yuqori bo‘lgan davlat organlari va tashkilotlarida ijtimoiy   sohaga oid tushuntirish ishlarini olib boradi.</li>
              </ul>
            </div>
            <div   className='nimadur'>
              <h1>VI. Ijtimoiy sohaga oid qonunchilik hujjatlariga rioya etilishi ustidan davlat nazoratini amalga oshirish sohasida:</h1>
              <ul className='funksiya_collaction'>

                <li className='funksiya_item'>ijtimoiy xizmatlar va yordam ko‘rsatish   sohasida qonunchilik hujjatlari talablariga rioya etilishini nazorat qilish;</li>

                <li className='funksiya_item'>POM va RTV bilan ta’minlash jarayonlarida   qonunchilikda belgilangan talablarga rioya etilishi nazorat qilish</li>
                
                <li className='funksiya_item'>shaxslarni “Muruvvat” internat uylari,   Agentlik tizimidagi sanatoriylar hamda Ijtimoiy qo‘llab-quvvatlash markazlariga   joylashtirish va ularda ijtimoiy xizmatlar va yordam ko‘rsatishda qonunchilikda belgilangan talablarga rioya etilishini nazorat   qilish</li>

                <li className='funksiya_item'>

                kafolatlangan ijtimoiy xizmatlar va yordam   standartlariga rioya etilishini nazorat qilish</li>

                <li className='funksiya_item'>bolalarga nisbatan zo‘ravonlik holatlarining   oldini olish bo‘yicha ishlab chiqilgan dasturlar ijrosini nazorat qiladi;</li>

                <li className='funksiya_item'>Agentlik tomonidan muvofiqlashtiriladigan va   monitoring qilinadigan faoliyat yo‘nalishlari bo‘yicha ijtimoiy himoyaga   muhtoj aholiga ijtimoiy xizmatlar va yordam ko‘rsatish faoliyatini o‘rganadi   va takliflar ishlab chiqadi;</li>

                <li className='funksiya_item'>
                ijtimoiy himoya sohasida huquqbuzarlik sodir   etilishi xavfi yuqori bo‘lgan davlat organlari va tashkilotlarida ijtimoiy   sohaga oid tushuntirish ishlarini olib boradi.</li>
              </ul>
            </div>
            <div   className='nimadur'>
              <h1>VII. Ijtimoiy sohaga oid qonunchilik hujjatlariga rioya etilishi ustidan davlat nazoratini amalga oshirish sohasida:</h1>
              <ul className='funksiya_collaction'>

                <li className='funksiya_item'>ijtimoiy xizmatlar va yordam ko‘rsatish   sohasida qonunchilik hujjatlari talablariga rioya etilishini nazorat qilish;</li>

                <li className='funksiya_item'>POM va RTV bilan ta’minlash jarayonlarida   qonunchilikda belgilangan talablarga rioya etilishi nazorat qilish</li>
                
                <li className='funksiya_item'>shaxslarni “Muruvvat” internat uylari,   Agentlik tizimidagi sanatoriylar hamda Ijtimoiy qo‘llab-quvvatlash markazlariga   joylashtirish va ularda ijtimoiy xizmatlar va yordam ko‘rsatishda qonunchilikda belgilangan talablarga rioya etilishini nazorat   qilish</li>

                <li className='funksiya_item'>

                kafolatlangan ijtimoiy xizmatlar va yordam   standartlariga rioya etilishini nazorat qilish</li>

                <li className='funksiya_item'>bolalarga nisbatan zo‘ravonlik holatlarining   oldini olish bo‘yicha ishlab chiqilgan dasturlar ijrosini nazorat qiladi;</li>

                <li className='funksiya_item'>Agentlik tomonidan muvofiqlashtiriladigan va   monitoring qilinadigan faoliyat yo‘nalishlari bo‘yicha ijtimoiy himoyaga   muhtoj aholiga ijtimoiy xizmatlar va yordam ko‘rsatish faoliyatini o‘rganadi   va takliflar ishlab chiqadi;</li>

                <li className='funksiya_item'>
                ijtimoiy himoya sohasida huquqbuzarlik sodir   etilishi xavfi yuqori bo‘lgan davlat organlari va tashkilotlarida ijtimoiy   sohaga oid tushuntirish ishlarini olib boradi.</li>
              </ul>
            </div>
            <div   className='nimadur'>
              <h1>VIII. Ijtimoiy sohaga oid qonunchilik hujjatlariga rioya etilishi ustidan davlat nazoratini amalga oshirish sohasida:</h1>
              <ul className='funksiya_collaction'>

                <li className='funksiya_item'>ijtimoiy xizmatlar va yordam ko‘rsatish   sohasida qonunchilik hujjatlari talablariga rioya etilishini nazorat qilish;</li>

                <li className='funksiya_item'>POM va RTV bilan ta’minlash jarayonlarida   qonunchilikda belgilangan talablarga rioya etilishi nazorat qilish</li>
                
                <li className='funksiya_item'>shaxslarni “Muruvvat” internat uylari,   Agentlik tizimidagi sanatoriylar hamda Ijtimoiy qo‘llab-quvvatlash markazlariga   joylashtirish va ularda ijtimoiy xizmatlar va yordam ko‘rsatishda qonunchilikda belgilangan talablarga rioya etilishini nazorat   qilish</li>

                <li className='funksiya_item'>

                kafolatlangan ijtimoiy xizmatlar va yordam   standartlariga rioya etilishini nazorat qilish</li>

                <li className='funksiya_item'>bolalarga nisbatan zo‘ravonlik holatlarining   oldini olish bo‘yicha ishlab chiqilgan dasturlar ijrosini nazorat qiladi;</li>

                <li className='funksiya_item'>Agentlik tomonidan muvofiqlashtiriladigan va   monitoring qilinadigan faoliyat yo‘nalishlari bo‘yicha ijtimoiy himoyaga   muhtoj aholiga ijtimoiy xizmatlar va yordam ko‘rsatish faoliyatini o‘rganadi   va takliflar ishlab chiqadi;</li>

                <li className='funksiya_item'>
                ijtimoiy himoya sohasida huquqbuzarlik sodir   etilishi xavfi yuqori bo‘lgan davlat organlari va tashkilotlarida ijtimoiy   sohaga oid tushuntirish ishlarini olib boradi.</li>
              </ul>
            </div>
          </div>
          <div className='banner_text '>
            <ul className='banner_collaction'>
              <li className='banner_item one'>Ijtimoiy inspeksiya</li>
              <hr />
              <li className='banner_item '>Inspeksiya haqida</li>
              <hr />
              <Link to={'/ijtimoiy/nizom'} className='link'>
                <li className='banner_item '>Nizom</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/tuzilma'} className='link'>
                <li className='banner_item '>Tuzilma</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/rahbaryat'} className='link'>
                <li className='banner_item '>Rahbariyat</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/markaziy'} className='link'>
                <li className='banner_item '>Markaziy apparat</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/hududiy'} className='link'>
                <li className='banner_item '>Hududiy boshqarmalar</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/hamkorlik'} className='link'>
                <li className='banner_item '>Hamkorlik</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/ish-orni'} className='link'>
                <li className='banner_item '>Bo'sh ish o'rnlari</li>
              </Link>
            </ul>
          </div>
        </div>
    </div>
  )
}
export default Ijtimoiy