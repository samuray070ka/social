import React, {useState } from 'react'
import './Nizom.css'
import {Link} from 'react-router-dom'
import ArrowBottom from '../../../icons/arrowBottom'
import homeImgOne from '../../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../../icons/search'
import useBreadcrumbs from "use-react-router-breadcrumbs";

function Nizom() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const userNamesById = { 1: "John" };
  
  const DynamicUserBreadcrumb = ({ match }) => (
    <span>{userNamesById[match.params.userId]}</span>
  );
  
  const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
  
  // define custom breadcrumbs for certain routes.
  // breadcrumbs can be components or strings.
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
    <div className='nizom'>
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
      <div className="ijtimoiy_banner ">
        <div className='ijti_ban  container'>
          <div className='banner_big '> 
            <b className='nizom_h3'>Ijtimoiy inspeksiya nizomi</b>
            <br />

            <b className='p_oriq'>O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi direktorining 2023-yil “07”-avgustdagi 17-son buyrug‘iga
            1-ilova
            </b>
            <br />

            <b className='p_qalin'>O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi  Ijtimoiy inspeksiya to‘g‘risidag</b>
            <br />

            <b className='h3_qalin'>NIZOM</b>
            <br />

            <b className='p_qalin'>1-bob. Umumiy qoidalar</b>
            <br />

            <b className='h2_oriq'>1-bob. Umumiy qoidalar 1. Ushbu Nizom O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiyaning (keyingi o‘rinlarda – Inspeksiya) va uning hududiy boshqarmalarining maqomini, vazifalari va funksiyalari, huquqlari va javobgarligini hamda faoliyatini tashkil etish tartibini belgilaydi. </b>

            <br />

            <b className='h2_oriq'>
            2. Inspeksiya ijtimoiy himoya sohasida davlat organlari va tashkilotlari tomonidan sodir etiladigan huquqbuzarliklar profilaktikasini, aholiga ijtimoiy xizmatlar va yordam ko‘rsatishini, fuqarolardan murojaatlarni qabul qilishini, ko‘rib chiqishini, kafolatlangan ijtimoiy xizmatlar o‘z vaqtida va sifatli ko‘rsatilishini,  ijtimoiy sohaga ajratilgan yoki ajratiladigan mablag‘larning maqsadli sarflanishini,  ijtimoiy himoya sohasidagi qonunchilik hujjatlariga, shuningdek, vasiylik va homiylik, ayollarni zo‘ravonlik va jinsiy zo‘ravonlik ta’qibidan himoya qilish,  oilalarga ijtimoiy xizmat va yordam ko‘rsatish, psixosotsial xizmat ko‘rsatish, yakka yolg‘iz va keksalar bilan ishlash hamda ijtimoiy sug‘urta tizimiga rioya etilishi ustidan nazoratni amalga oshiruvchi vakolatli davlat organi hisoblanadi</b>
            <br />

            <b className='h2_oriq'>
            3. Inspeksiya o‘z faoliyatida O‘zbekiston Respublikasi Konstitutsiyasiga,  O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, qonun hujjatlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) direktorining buyruq va farmoyishlariga, ushbu Nizomga, shuningdek, boshqa qonunchilik hujjatlariga amal qiladi.</b>
            <br />

            <b className='h2_oriq'>4. Inspeksiyaning o‘z vakolatlari doirasida qabul qilingan qarorlari davlat boshqaruvi organlari va xo‘jalik birlashmalari, mahalliy ijro etuvchi hokimiyat organlari, boshqa tashkilotlar va ularning mansabdor shaxslari hamda fuqarolar tomonidan bajarilishi majburiy hisoblanadi.</b>
            <br />

            <b className='h2_oriq'>
                5. Inspeksiya idoraviy jihatdan Agentlikka huzuridagi davlat boshqaruvi organi hisoblanadi va o‘z faoliyatida bevosita Agentlik direktoriga bo‘ysunadi va hisobot beradi.
            </b>
            <br />

            <b className='h2_oriq'>6. Inspeksiya yuridik shaxs hisoblanadi, mustaqil balansga, O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi G‘aznachilik xizmati qo‘mitasida shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga va blankalarga ega bo‘ladi.</b>
            <br />
              
            <b className='h2_oriq'>7. Inspeksiyaning rasmiy nomi: a) davlat tilida: to‘liq nomi: O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya  milliy agentligi huzuridagi Ijtimoiy inspeksiya, qisqartirilgan nomi – Ijtimoiy  inspeksiya; b) ingliz tilida:  to‘liq nomi – Social inspection under the National Agency for Social  Protection under the President of the Republic of Uzbekistan; qisqartirilgan nomi – Social inspection; v) rus tilida:  to‘liq nomi – Sotsialnaya inspeksiya pri Natsionalnom agentstve sotsialnoy zashiti pri Prezidente Respubliki Uzbekistan, qisqartirilgan nomi – Sotsialnaya inspeksiya.</b>
             
            <br />

             <b className='h2_oriq'>8. Inspeksiyaning joylashgan manzili (pochta manzili): 115, Toshkent shahri, Chilonzor tumani, Nurxon ko‘chasi, 21-uy</b>
            <br />

             <b className='h2_oriq'>9. Inspeksiya tizimig</b>
            <br />

            <b className='h2_oriq'>Ijtimoiy inspeksiyaning funksiyalari</b>
            <br />

            <b className='h3_qalin'>2-bob.</b>
            <br />

            <p className='p_qalin'>Inspeksiya va uning hududiy boshqarmalarining vazifalari  va funksiyalari</p>
            <br />

            <b className='h2_oriq'>1-bob. Umumiy qoidalar 1. Ushbu Nizom O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiyaning (keyingi o‘rinlarda – Inspeksiya) va uning hududiy boshqarmalarining maqomini, vazifalari va funksiyalari, huquqlari va javobgarligini hamda faoliyatini tashkil etish tartibini belgilaydi. </b>

            <br />

            <b className='h2_oriq'>
            2. Inspeksiya ijtimoiy himoya sohasida davlat organlari va tashkilotlari tomonidan sodir etiladigan huquqbuzarliklar profilaktikasini, aholiga ijtimoiy xizmatlar va yordam ko‘rsatishini, fuqarolardan murojaatlarni qabul qilishini, ko‘rib chiqishini, kafolatlangan ijtimoiy xizmatlar o‘z vaqtida va sifatli ko‘rsatilishini,  ijtimoiy sohaga ajratilgan yoki ajratiladigan mablag‘larning maqsadli sarflanishini,  ijtimoiy himoya sohasidagi qonunchilik hujjatlariga, shuningdek, vasiylik va homiylik, ayollarni zo‘ravonlik va jinsiy zo‘ravonlik ta’qibidan himoya qilish,  oilalarga ijtimoiy xizmat va yordam ko‘rsatish, psixosotsial xizmat ko‘rsatish, yakka yolg‘iz va keksalar bilan ishlash hamda ijtimoiy sug‘urta tizimiga rioya etilishi ustidan nazoratni amalga oshiruvchi vakolatli davlat organi hisoblanadi</b>
            <br />

            <b className='h2_oriq'>
            3. Inspeksiya o‘z faoliyatida O‘zbekiston Respublikasi Konstitutsiyasiga,  O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, qonun hujjatlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) direktorining buyruq va farmoyishlariga, ushbu Nizomga, shuningdek, boshqa qonunchilik hujjatlariga amal qiladi.</b>
            <br />

            <b className='h2_oriq'>4. Inspeksiyaning o‘z vakolatlari doirasida qabul qilingan qarorlari davlat boshqaruvi organlari va xo‘jalik birlashmalari, mahalliy ijro etuvchi hokimiyat organlari, boshqa tashkilotlar va ularning mansabdor shaxslari hamda fuqarolar tomonidan bajarilishi majburiy hisoblanadi.</b>
            <br />

            <b className='h2_oriq'>
                5. Inspeksiya idoraviy jihatdan Agentlikka huzuridagi davlat boshqaruvi organi hisoblanadi va o‘z faoliyatida bevosita Agentlik direktoriga bo‘ysunadi va hisobot beradi.
            </b>
            <br />

            <b className='h2_oriq'>6. Inspeksiya yuridik shaxs hisoblanadi, mustaqil balansga, O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi G‘aznachilik xizmati qo‘mitasida shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga va blankalarga ega bo‘ladi.</b>
            <br />
              
            <b className='h2_oriq'>7. Inspeksiyaning rasmiy nomi: a) davlat tilida: to‘liq nomi: O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya  milliy agentligi huzuridagi Ijtimoiy inspeksiya, qisqartirilgan nomi – Ijtimoiy  inspeksiya; b) ingliz tilida:  to‘liq nomi – Social inspection under the National Agency for Social  Protection under the President of the Republic of Uzbekistan; qisqartirilgan nomi – Social inspection; v) rus tilida:  to‘liq nomi – Sotsialnaya inspeksiya pri Natsionalnom agentstve sotsialnoy zashiti pri Prezidente Respubliki Uzbekistan, qisqartirilgan nomi – Sotsialnaya inspeksiya.</b>
            <br />

            <b className='h2_oriq'>1-bob. Umumiy qoidalar 1. Ushbu Nizom O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiyaning (keyingi o‘rinlarda – Inspeksiya) va uning hududiy boshqarmalarining maqomini, vazifalari va funksiyalari, huquqlari va javobgarligini hamda faoliyatini tashkil etish tartibini belgilaydi. </b>

            <br />

            <b className='h2_oriq'>
            2. Inspeksiya ijtimoiy himoya sohasida davlat organlari va tashkilotlari tomonidan sodir etiladigan huquqbuzarliklar profilaktikasini, aholiga ijtimoiy xizmatlar va yordam ko‘rsatishini, fuqarolardan murojaatlarni qabul qilishini, ko‘rib chiqishini, kafolatlangan ijtimoiy xizmatlar o‘z vaqtida va sifatli ko‘rsatilishini,  ijtimoiy sohaga ajratilgan yoki ajratiladigan mablag‘larning maqsadli sarflanishini,  ijtimoiy himoya sohasidagi qonunchilik hujjatlariga, shuningdek, vasiylik va homiylik, ayollarni zo‘ravonlik va jinsiy zo‘ravonlik ta’qibidan himoya qilish,  oilalarga ijtimoiy xizmat va yordam ko‘rsatish, psixosotsial xizmat ko‘rsatish, yakka yolg‘iz va keksalar bilan ishlash hamda ijtimoiy sug‘urta tizimiga rioya etilishi ustidan nazoratni amalga oshiruvchi vakolatli davlat organi hisoblanadi</b>
            <br />

            <b className='h2_oriq'>
            3. Inspeksiya o‘z faoliyatida O‘zbekiston Respublikasi Konstitutsiyasiga,  O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, qonun hujjatlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) direktorining buyruq va farmoyishlariga, ushbu Nizomga, shuningdek, boshqa qonunchilik hujjatlariga amal qiladi.</b>
            <br />

            <b className='h2_oriq'>4. Inspeksiyaning o‘z vakolatlari doirasida qabul qilingan qarorlari davlat boshqaruvi organlari va xo‘jalik birlashmalari, mahalliy ijro etuvchi hokimiyat organlari, boshqa tashkilotlar va ularning mansabdor shaxslari hamda fuqarolar tomonidan bajarilishi majburiy hisoblanadi.</b>
            <br />

            <b className='h2_oriq'>
                5. Inspeksiya idoraviy jihatdan Agentlikka huzuridagi davlat boshqaruvi organi hisoblanadi va o‘z faoliyatida bevosita Agentlik direktoriga bo‘ysunadi va hisobot beradi.
            </b>
            <br />

            <b className='h2_oriq'>6. Inspeksiya yuridik shaxs hisoblanadi, mustaqil balansga, O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi G‘aznachilik xizmati qo‘mitasida shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga va blankalarga ega bo‘ladi.</b>
            <br />
              
            <b className='h2_oriq'>7. Inspeksiyaning rasmiy nomi: a) davlat tilida: to‘liq nomi: O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya  milliy agentligi huzuridagi Ijtimoiy inspeksiya, qisqartirilgan nomi – Ijtimoiy  inspeksiya; b) ingliz tilida:  to‘liq nomi – Social inspection under the National Agency for Social  Protection under the President of the Republic of Uzbekistan; qisqartirilgan nomi – Social inspection; v) rus tilida:  to‘liq nomi – Sotsialnaya inspeksiya pri Natsionalnom agentstve sotsialnoy zashiti pri Prezidente Respubliki Uzbekistan, qisqartirilgan nomi – Sotsialnaya inspeksiya.</b>
            <br />

            <b className='h3_qalin'>3-bob.</b>
            <br />

            <p className='p_qalin'>Inspeksiya va uning hududiy boshqarmalarining huquqlari va majburiyatlari</p>
            <br />

            <b className='h2_oriq'>
            2. Inspeksiya ijtimoiy himoya sohasida davlat organlari va tashkilotlari tomonidan sodir etiladigan huquqbuzarliklar profilaktikasini, aholiga ijtimoiy xizmatlar va yordam ko‘rsatishini, fuqarolardan murojaatlarni qabul qilishini, ko‘rib chiqishini, kafolatlangan ijtimoiy xizmatlar o‘z vaqtida va sifatli ko‘rsatilishini,  ijtimoiy sohaga ajratilgan yoki ajratiladigan mablag‘larning maqsadli sarflanishini,  ijtimoiy himoya sohasidagi qonunchilik hujjatlariga, shuningdek, vasiylik va homiylik, ayollarni zo‘ravonlik va jinsiy zo‘ravonlik ta’qibidan himoya qilish,  oilalarga ijtimoiy xizmat va yordam ko‘rsatish, psixosotsial xizmat ko‘rsatish, yakka yolg‘iz va keksalar bilan ishlash hamda ijtimoiy sug‘urta tizimiga rioya etilishi ustidan nazoratni amalga oshiruvchi vakolatli davlat organi hisoblanadi</b>
            <br />

            <b className='h2_oriq'>
            3. Inspeksiya o‘z faoliyatida O‘zbekiston Respublikasi Konstitutsiyasiga,  O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, qonun hujjatlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) direktorining buyruq va farmoyishlariga, ushbu Nizomga, shuningdek, boshqa qonunchilik hujjatlariga amal qiladi.</b>
            <br />

            <b className='h2_oriq'>4. Inspeksiyaning o‘z vakolatlari doirasida qabul qilingan qarorlari davlat boshqaruvi organlari va xo‘jalik birlashmalari, mahalliy ijro etuvchi hokimiyat organlari, boshqa tashkilotlar va ularning mansabdor shaxslari hamda fuqarolar tomonidan bajarilishi majburiy hisoblanadi.</b>
            <br />

            <b className='h2_oriq'>
                5. Inspeksiya idoraviy jihatdan Agentlikka huzuridagi davlat boshqaruvi organi hisoblanadi va o‘z faoliyatida bevosita Agentlik direktoriga bo‘ysunadi va hisobot beradi.
            </b>
            <br />

            <b className='h2_oriq'>6. Inspeksiya yuridik shaxs hisoblanadi, mustaqil balansga, O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi G‘aznachilik xizmati qo‘mitasida shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga va blankalarga ega bo‘ladi.</b>
            <br />
              
            <b className='h2_oriq'>7. Inspeksiyaning rasmiy nomi: a) davlat tilida: to‘liq nomi: O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya  milliy agentligi huzuridagi Ijtimoiy inspeksiya, qisqartirilgan nomi – Ijtimoiy  inspeksiya; b) ingliz tilida:  to‘liq nomi – Social inspection under the National Agency for Social  Protection under the President of the Republic of Uzbekistan; qisqartirilgan nomi – Social inspection; v) rus tilida:  to‘liq nomi – Sotsialnaya inspeksiya pri Natsionalnom agentstve sotsialnoy zashiti pri Prezidente Respubliki Uzbekistan, qisqartirilgan nomi – Sotsialnaya inspeksiya.</b>
            <br />

            <b className='h2_oriq'>1-bob. Umumiy qoidalar 1. Ushbu Nizom O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiyaning (keyingi o‘rinlarda – Inspeksiya) va uning hududiy boshqarmalarining maqomini, vazifalari va funksiyalari, huquqlari va javobgarligini hamda faoliyatini tashkil etish tartibini belgilaydi. </b>

            <br />

            <b className='h2_oriq'>
            2. Inspeksiya ijtimoiy himoya sohasida davlat organlari va tashkilotlari tomonidan sodir etiladigan huquqbuzarliklar profilaktikasini, aholiga ijtimoiy xizmatlar va yordam ko‘rsatishini, fuqarolardan murojaatlarni qabul qilishini, ko‘rib chiqishini, kafolatlangan ijtimoiy xizmatlar o‘z vaqtida va sifatli ko‘rsatilishini,  ijtimoiy sohaga ajratilgan yoki ajratiladigan mablag‘larning maqsadli sarflanishini,  ijtimoiy himoya sohasidagi qonunchilik hujjatlariga, shuningdek, vasiylik va homiylik, ayollarni zo‘ravonlik va jinsiy zo‘ravonlik ta’qibidan himoya qilish,  oilalarga ijtimoiy xizmat va yordam ko‘rsatish, psixosotsial xizmat ko‘rsatish, yakka yolg‘iz va keksalar bilan ishlash hamda ijtimoiy sug‘urta tizimiga rioya etilishi ustidan nazoratni amalga oshiruvchi vakolatli davlat organi hisoblanadi</b>
            <br />

            <b className='h2_oriq'>
            3. Inspeksiya o‘z faoliyatida O‘zbekiston Respublikasi Konstitutsiyasiga,  O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, qonun hujjatlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) direktorining buyruq va farmoyishlariga, ushbu Nizomga, shuningdek, boshqa qonunchilik hujjatlariga amal qiladi.</b>
            <br />

            <b className='h2_oriq'>4. Inspeksiyaning o‘z vakolatlari doirasida qabul qilingan qarorlari davlat boshqaruvi organlari va xo‘jalik birlashmalari, mahalliy ijro etuvchi hokimiyat organlari, boshqa tashkilotlar va ularning mansabdor shaxslari hamda fuqarolar tomonidan bajarilishi majburiy hisoblanadi.</b>
            <br />

            <b className='h2_oriq'>
                5. Inspeksiya idoraviy jihatdan Agentlikka huzuridagi davlat boshqaruvi organi hisoblanadi va o‘z faoliyatida bevosita Agentlik direktoriga bo‘ysunadi va hisobot beradi.
            </b>
            <br />

            <b className='h2_oriq'>6. Inspeksiya yuridik shaxs hisoblanadi, mustaqil balansga, O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi G‘aznachilik xizmati qo‘mitasida shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga va blankalarga ega bo‘ladi.</b>
            <br />
              
            <b className='h2_oriq'>7. Inspeksiyaning rasmiy nomi: a) davlat tilida: to‘liq nomi: O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya  milliy agentligi huzuridagi Ijtimoiy inspeksiya, qisqartirilgan nomi – Ijtimoiy  inspeksiya; b) ingliz tilida:  to‘liq nomi – Social inspection under the National Agency for Social  Protection under the President of the Republic of Uzbekistan; qisqartirilgan nomi – Social inspection; v) rus tilida:  to‘liq nomi – Sotsialnaya inspeksiya pri Natsionalnom agentstve sotsialnoy zashiti pri Prezidente Respubliki Uzbekistan, qisqartirilgan nomi – Sotsialnaya inspeksiya.</b>
            <br />

            <b className='h3_qalin'>4-bob.</b>
            <br />

            <b className='p_qalin'>
            Inspeksiya va uning hududiy boshqarmalari faoliyatining tashkil etish</b>
            <br />

            <b className='h2_oriq'>
            2. Inspeksiya ijtimoiy himoya sohasida davlat organlari va tashkilotlari tomonidan sodir etiladigan huquqbuzarliklar profilaktikasini, aholiga ijtimoiy xizmatlar va yordam ko‘rsatishini, fuqarolardan murojaatlarni qabul qilishini, ko‘rib chiqishini, kafolatlangan ijtimoiy xizmatlar o‘z vaqtida va sifatli ko‘rsatilishini,  ijtimoiy sohaga ajratilgan yoki ajratiladigan mablag‘larning maqsadli sarflanishini,  ijtimoiy himoya sohasidagi qonunchilik hujjatlariga, shuningdek, vasiylik va homiylik, ayollarni zo‘ravonlik va jinsiy zo‘ravonlik ta’qibidan himoya qilish,  oilalarga ijtimoiy xizmat va yordam ko‘rsatish, psixosotsial xizmat ko‘rsatish, yakka yolg‘iz va keksalar bilan ishlash hamda ijtimoiy sug‘urta tizimiga rioya etilishi ustidan nazoratni amalga oshiruvchi vakolatli davlat organi hisoblanadi</b>
            <br />

            <b className='h2_oriq'>
            3. Inspeksiya o‘z faoliyatida O‘zbekiston Respublikasi Konstitutsiyasiga,  O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, qonun hujjatlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) direktorining buyruq va farmoyishlariga, ushbu Nizomga, shuningdek, boshqa qonunchilik hujjatlariga amal qiladi.</b>
            <br />

            <b className='h2_oriq'>4. Inspeksiyaning o‘z vakolatlari doirasida qabul qilingan qarorlari davlat boshqaruvi organlari va xo‘jalik birlashmalari, mahalliy ijro etuvchi hokimiyat organlari, boshqa tashkilotlar va ularning mansabdor shaxslari hamda fuqarolar tomonidan bajarilishi majburiy hisoblanadi.</b>
            <br />

            <b className='h2_oriq'>
                5. Inspeksiya idoraviy jihatdan Agentlikka huzuridagi davlat boshqaruvi organi hisoblanadi va o‘z faoliyatida bevosita Agentlik direktoriga bo‘ysunadi va hisobot beradi.
            </b>
            <br />

            <b className='h2_oriq'>6. Inspeksiya yuridik shaxs hisoblanadi, mustaqil balansga, O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi G‘aznachilik xizmati qo‘mitasida shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga va blankalarga ega bo‘ladi.</b>
            <br />
              
            <b className='h2_oriq'>7. Inspeksiyaning rasmiy nomi: a) davlat tilida: to‘liq nomi: O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya  milliy agentligi huzuridagi Ijtimoiy inspeksiya, qisqartirilgan nomi – Ijtimoiy  inspeksiya; b) ingliz tilida:  to‘liq nomi – Social inspection under the National Agency for Social  Protection under the President of the Republic of Uzbekistan; qisqartirilgan nomi – Social inspection; v) rus tilida:  to‘liq nomi – Sotsialnaya inspeksiya pri Natsionalnom agentstve sotsialnoy zashiti pri Prezidente Respubliki Uzbekistan, qisqartirilgan nomi – Sotsialnaya inspeksiya.</b>
            <br />

            <b className='h2_oriq'>1-bob. Umumiy qoidalar 1. Ushbu Nizom O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiyaning (keyingi o‘rinlarda – Inspeksiya) va uning hududiy boshqarmalarining maqomini, vazifalari va funksiyalari, huquqlari va javobgarligini hamda faoliyatini tashkil etish tartibini belgilaydi. </b>
            <br />


            <b className='h2_oriq'>
            2. Inspeksiya ijtimoiy himoya sohasida davlat organlari va tashkilotlari tomonidan sodir etiladigan huquqbuzarliklar profilaktikasini, aholiga ijtimoiy xizmatlar va yordam ko‘rsatishini, fuqarolardan murojaatlarni qabul qilishini, ko‘rib chiqishini, kafolatlangan ijtimoiy xizmatlar o‘z vaqtida va sifatli ko‘rsatilishini,  ijtimoiy sohaga ajratilgan yoki ajratiladigan mablag‘larning maqsadli sarflanishini,  ijtimoiy himoya sohasidagi qonunchilik hujjatlariga, shuningdek, vasiylik va homiylik, ayollarni zo‘ravonlik va jinsiy zo‘ravonlik ta’qibidan himoya qilish,  oilalarga ijtimoiy xizmat va yordam ko‘rsatish, psixosotsial xizmat ko‘rsatish, yakka yolg‘iz va keksalar bilan ishlash hamda ijtimoiy sug‘urta tizimiga rioya etilishi ustidan nazoratni amalga oshiruvchi vakolatli davlat organi hisoblanadi</b>
            <br />

            <b className='h2_oriq'>
            3. Inspeksiya o‘z faoliyatida O‘zbekiston Respublikasi Konstitutsiyasiga,  O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, qonun hujjatlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) direktorining buyruq va farmoyishlariga, ushbu Nizomga, shuningdek, boshqa qonunchilik hujjatlariga amal qiladi.</b>
            <br />

            <b className='h2_oriq'>4. Inspeksiyaning o‘z vakolatlari doirasida qabul qilingan qarorlari davlat boshqaruvi organlari va xo‘jalik birlashmalari, mahalliy ijro etuvchi hokimiyat organlari, boshqa tashkilotlar va ularning mansabdor shaxslari hamda fuqarolar tomonidan bajarilishi majburiy hisoblanadi.</b>
            <br />

            <b className='h2_oriq'>
                5. Inspeksiya idoraviy jihatdan Agentlikka huzuridagi davlat boshqaruvi organi hisoblanadi va o‘z faoliyatida bevosita Agentlik direktoriga bo‘ysunadi va hisobot beradi.
            </b>
            <br />

            <b className='h2_oriq'>6. Inspeksiya yuridik shaxs hisoblanadi, mustaqil balansga, O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi G‘aznachilik xizmati qo‘mitasida shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga va blankalarga ega bo‘ladi.</b>
            <br />
              
            <b className='h2_oriq'>7. Inspeksiyaning rasmiy nomi: a) davlat tilida: to‘liq nomi: O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya  milliy agentligi huzuridagi Ijtimoiy inspeksiya, qisqartirilgan nomi – Ijtimoiy  inspeksiya; b) ingliz tilida:  to‘liq nomi – Social inspection under the National Agency for Social  Protection under the President of the Republic of Uzbekistan; qisqartirilgan nomi – Social inspection; v) rus tilida:  to‘liq nomi – Sotsialnaya inspeksiya pri Natsionalnom agentstve sotsialnoy zashiti pri Prezidente Respubliki Uzbekistan, qisqartirilgan nomi – Sotsialnaya inspeksiya.</b>
            <br />

            <b className='h2_oriq'>
            2. Inspeksiya ijtimoiy himoya sohasida davlat organlari va tashkilotlari tomonidan sodir etiladigan huquqbuzarliklar profilaktikasini, aholiga ijtimoiy xizmatlar va yordam ko‘rsatishini, fuqarolardan murojaatlarni qabul qilishini, ko‘rib chiqishini, kafolatlangan ijtimoiy xizmatlar o‘z vaqtida va sifatli ko‘rsatilishini,  ijtimoiy sohaga ajratilgan yoki ajratiladigan mablag‘larning maqsadli sarflanishini,  ijtimoiy himoya sohasidagi qonunchilik hujjatlariga, shuningdek, vasiylik va homiylik, ayollarni zo‘ravonlik va jinsiy zo‘ravonlik ta’qibidan himoya qilish,  oilalarga ijtimoiy xizmat va yordam ko‘rsatish, psixosotsial xizmat ko‘rsatish, yakka yolg‘iz va keksalar bilan ishlash hamda ijtimoiy sug‘urta tizimiga rioya etilishi ustidan nazoratni amalga oshiruvchi vakolatli davlat organi hisoblanadi</b>
            <br />

            <b className='h2_oriq'>
            3. Inspeksiya o‘z faoliyatida O‘zbekiston Respublikasi Konstitutsiyasiga,  O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, qonun hujjatlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) direktorining buyruq va farmoyishlariga, ushbu Nizomga, shuningdek, boshqa qonunchilik hujjatlariga amal qiladi.</b>
            <br />

            <b className='h2_oriq'>4. Inspeksiyaning o‘z vakolatlari doirasida qabul qilingan qarorlari davlat boshqaruvi organlari va xo‘jalik birlashmalari, mahalliy ijro etuvchi hokimiyat organlari, boshqa tashkilotlar va ularning mansabdor shaxslari hamda fuqarolar tomonidan bajarilishi majburiy hisoblanadi.</b>
            <br />

            <b className='h2_oriq'>
                5. Inspeksiya idoraviy jihatdan Agentlikka huzuridagi davlat boshqaruvi organi hisoblanadi va o‘z faoliyatida bevosita Agentlik direktoriga bo‘ysunadi va hisobot beradi.
            </b>
            <br />

            <b className='h2_oriq'>6. Inspeksiya yuridik shaxs hisoblanadi, mustaqil balansga, O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi G‘aznachilik xizmati qo‘mitasida shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga va blankalarga ega bo‘ladi.</b>
            <br />
              
            <b className='h2_oriq'>7. Inspeksiyaning rasmiy nomi: a) davlat tilida: to‘liq nomi: O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya  milliy agentligi huzuridagi Ijtimoiy inspeksiya, qisqartirilgan nomi – Ijtimoiy  inspeksiya; b) ingliz tilida:  to‘liq nomi – Social inspection under the National Agency for Social  Protection under the President of the Republic of Uzbekistan; qisqartirilgan nomi – Social inspection; v) rus tilida:  to‘liq nomi – Sotsialnaya inspeksiya pri Natsionalnom agentstve sotsialnoy zashiti pri Prezidente Respubliki Uzbekistan, qisqartirilgan nomi – Sotsialnaya inspeksiya.</b>
            <br />

            <b className='h2_oriq'>1-bob. Umumiy qoidalar 1. Ushbu Nizom O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiyaning (keyingi o‘rinlarda – Inspeksiya) va uning hududiy boshqarmalarining maqomini, vazifalari va funksiyalari, huquqlari va javobgarligini hamda faoliyatini tashkil etish tartibini belgilaydi. </b>

            <br />

            <b className='h2_oriq'>
            2. Inspeksiya ijtimoiy himoya sohasida davlat organlari va tashkilotlari tomonidan sodir etiladigan huquqbuzarliklar profilaktikasini, aholiga ijtimoiy xizmatlar va yordam ko‘rsatishini, fuqarolardan murojaatlarni qabul qilishini, ko‘rib chiqishini, kafolatlangan ijtimoiy xizmatlar o‘z vaqtida va sifatli ko‘rsatilishini,  ijtimoiy sohaga ajratilgan yoki ajratiladigan mablag‘larning maqsadli sarflanishini,  ijtimoiy himoya sohasidagi qonunchilik hujjatlariga, shuningdek, vasiylik va homiylik, ayollarni zo‘ravonlik va jinsiy zo‘ravonlik ta’qibidan himoya qilish,  oilalarga ijtimoiy xizmat va yordam ko‘rsatish, psixosotsial xizmat ko‘rsatish, yakka yolg‘iz va keksalar bilan ishlash hamda ijtimoiy sug‘urta tizimiga rioya etilishi ustidan nazoratni amalga oshiruvchi vakolatli davlat organi hisoblanadi</b>
            <br />

            <b className='h2_oriq'>
            3. Inspeksiya o‘z faoliyatida O‘zbekiston Respublikasi Konstitutsiyasiga,  O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, qonun hujjatlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) direktorining buyruq va farmoyishlariga, ushbu Nizomga, shuningdek, boshqa qonunchilik hujjatlariga amal qiladi.</b>
            <br />

            <b className='h2_oriq'>4. Inspeksiyaning o‘z vakolatlari doirasida qabul qilingan qarorlari davlat boshqaruvi organlari va xo‘jalik birlashmalari, mahalliy ijro etuvchi hokimiyat organlari, boshqa tashkilotlar va ularning mansabdor shaxslari hamda fuqarolar tomonidan bajarilishi majburiy hisoblanadi.</b>
            <br />

            <b className='h2_oriq'>
                5. Inspeksiya idoraviy jihatdan Agentlikka huzuridagi davlat boshqaruvi organi hisoblanadi va o‘z faoliyatida bevosita Agentlik direktoriga bo‘ysunadi va hisobot beradi.
            </b>
            <br />

            <b className='h2_oriq'>6. Inspeksiya yuridik shaxs hisoblanadi, mustaqil balansga, O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi G‘aznachilik xizmati qo‘mitasida shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga va blankalarga ega bo‘ladi.</b>
              
            <br />

            <b className='h3_qalin'>5-bob.</b>
            <br />

            <b className='p_qalin'>Inspeksiya va uning hududiy boshqarmalari xodimlarining ish haqi va ularni moddiy rag‘batlantirish</b>
            <br />

            <b className='h2_oriq'>4. Inspeksiyaning o‘z vakolatlari doirasida qabul qilingan qarorlari davlat boshqaruvi organlari va xo‘jalik birlashmalari, mahalliy ijro etuvchi hokimiyat organlari, boshqa tashkilotlar va ularning mansabdor shaxslari hamda fuqarolar tomonidan bajarilishi majburiy hisoblanadi.</b>
            <br />

            <b className='h2_oriq'>
                5. Inspeksiya idoraviy jihatdan Agentlikka huzuridagi davlat boshqaruvi organi hisoblanadi va o‘z faoliyatida bevosita Agentlik direktoriga bo‘ysunadi va hisobot beradi.
            </b>
            <br />

            <b className='h2_oriq'>6. Inspeksiya yuridik shaxs hisoblanadi, mustaqil balansga, O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi G‘aznachilik xizmati qo‘mitasida shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga va blankalarga ega bo‘ladi.</b>
              
            <br />
            <b className='h2_oriq'>7. Inspeksiyaning rasmiy nomi: a) davlat tilida: to‘liq nomi: O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya  milliy agentligi huzuridagi Ijtimoiy inspeksiya, qisqartirilgan nomi – Ijtimoiy  inspeksiya; b) ingliz tilida:  to‘liq nomi – Social inspection under the National Agency for Social  Protection under the President of the Republic of Uzbekistan; qisqartirilgan nomi – Social inspection; v) rus tilida:  to‘liq nomi – Sotsialnaya inspeksiya pri Natsionalnom agentstve sotsialnoy zashiti pri Prezidente Respubliki Uzbekistan, qisqartirilgan nomi – Sotsialnaya inspeksiya.</b>
            <br />
            <b className='h3_qalin'>6-bob.</b>
            <br />
            <b className='p_qalin'>Yakunlovchi qoidalar</b>
            <br />
            
            <b className='h2_oriq'>
                5. Inspeksiya idoraviy jihatdan Agentlikka huzuridagi davlat boshqaruvi organi hisoblanadi va o‘z faoliyatida bevosita Agentlik direktoriga bo‘ysunadi va hisobot beradi.
            </b>
            <br />

            <b className='h2_oriq'>6. Inspeksiya yuridik shaxs hisoblanadi, mustaqil balansga, O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi G‘aznachilik xizmati qo‘mitasida shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga va blankalarga ega bo‘ladi.</b>
            <br />
              
            <b className='h2_oriq'>7. Inspeksiyaning rasmiy nomi: a) davlat tilida: to‘liq nomi: O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya  milliy agentligi huzuridagi Ijtimoiy inspeksiya, qisqartirilgan nomi – Ijtimoiy  inspeksiya; b) ingliz tilida:  to‘liq nomi – Social inspection under the National Agency for Social  Protection under the President of the Republic of Uzbekistan; qisqartirilgan nomi – Social inspection; v) rus tilida:  to‘liq nomi – Sotsialnaya inspeksiya pri Natsionalnom agentstve sotsialnoy zashiti pri Prezidente Respubliki Uzbekistan, qisqartirilgan nomi – Sotsialnaya inspeksiya.</b>
          </div>



          <div className='banner_text '>
            <ul className='banner_collaction'>
              <li className='banner_item one'>Ijtimoiy inspeksiya</li>
              <hr />
              <Link to={'/ijtimoiy'} className='link'>
                <li className='banner_item'>Inspeksiya haqida</li>
              </Link>
              <hr />
              <Link to={'/ijtimoiy/nizom'} className='link'>
                <li className='banner_item'>Nizom</li>
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
    </div>
  )
}

export default Nizom