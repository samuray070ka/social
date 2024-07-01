import React from 'react'
import '../../faoliyat/Faoliyat.css'
import {Link} from 'react-router-dom'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import ArrowBottom from '../../../icons/arrowBottom'
import homeImgOne from '../../../assets/IJTIMOIY logo 2 1.png'
import Search from '../../../icons/search'

function Voyaga() {
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
    <div>
      <div className='container'>
        <div className="ijtimoiy_logo">
          <Link to={'/'} className='ijtimoiy_logo link to'>
            <img src={homeImgOne} alt="" />
            <h2 className='ijtimoiy_h2'>Faoliyat</h2>
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
        <div className='ols  container'>
          <div className='banner_big'>
            <h6 className='tuzilma_h1'>Voyaga yetmaganlar</h6>
            <div className='right_flex'>
            <h6 className='right'>Ijtimoiy inspeksiya boshligʻining 2024-yil __-fevraldagi _____-son buyrugʻiga 2-ilova</h6>
            </div>
            <h6 className='faoliyat_h6 width'>Katta yoshdagilar uchun ijtimoiy xizmatlar koʻrsatilishini   nazorat qilish boʻlimi toʻgʻrisida
            NIZOM</h6>

            <h6 className='faoliyat_oriq'>1. Ushbu Nizom Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiyaning (keyingi oʻrinlarda – Inspeksiya) Nogironligi boʻlgan shaxslarga qulay va toʻsiqsiz sharoitlar yaratilishi, paralimpiya sport turlariga jalb qilinishi hamda ularga ajratilgan ish va oʻqish oʻrinlarini nazorat qilish boʻlimi (keyingi oʻrinlarda – Boʻlim) vazifalari, funksiyalari, huquq va majburiyatlari hamda javobgarliklarini belgilaydi.</h6>
            
            <h6 className='faoliyat_oriq'>2. Boʻlim Inspeksiyaning markaziy apparati tarkibiy boʻlinmasi hisoblanadi.</h6>

            <h6 className='faoliyat_oriq'>3. Boʻlim oʻz faoliyatida Oʻzbekiston Respublikasi Konstitutsiyasi va qonunlariga, Oʻzbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, Oʻzbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, Oʻzbekiston Respublikasining Vazirlar Mahkamasining qarorlariga, boshqa qonunchilik hujjatlariga, shuningdek Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi direktori buyruqlari va koʻrsatmalariga, Inspeksiya boshligʻi buyruqlariga va mazkur Nizomga amal qiladi.</h6>
            
            <h6 className='faoliyat_oriq'>4. Boʻlim oʻz faoliyatini Inspeksiyaning boshqa tarkibiy boʻlinmalari, Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) markaziy apparati, uning hududiy boshqarmalari hamda tuman (shahar) “Inson” ijtimoiy xizmatlar markazlari bilan hamkorlikda amalga oshiradi.</h6>

            <h6 className='faoliyat_h6'>II. Boʻlimning vazifa va funksiyalari</h6>

            <h6 className='faoliyat_oriq'>1. Ushbu Nizom Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiyaning (keyingi oʻrinlarda – Inspeksiya) Nogironligi boʻlgan shaxslarga qulay va toʻsiqsiz sharoitlar yaratilishi, paralimpiya sport turlariga jalb qilinishi hamda ularga ajratilgan ish va oʻqish oʻrinlarini nazorat qilish boʻlimi (keyingi oʻrinlarda – Boʻlim) vazifalari, funksiyalari, huquq va majburiyatlari hamda javobgarliklarini belgilaydi.</h6>
            
            <h6 className='faoliyat_oriq'>2. Boʻlim Inspeksiyaning markaziy apparati tarkibiy boʻlinmasi hisoblanadi.</h6>

            <h6 className='faoliyat_oriq'>3. Boʻlim oʻz faoliyatida Oʻzbekiston Respublikasi Konstitutsiyasi va qonunlariga, Oʻzbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, Oʻzbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, Oʻzbekiston Respublikasining Vazirlar Mahkamasining qarorlariga, boshqa qonunchilik hujjatlariga, shuningdek Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi direktori buyruqlari va koʻrsatmalariga, Inspeksiya boshligʻi buyruqlariga va mazkur Nizomga amal qiladi.</h6>
            
            <h6 className='faoliyat_oriq'>4. Boʻlim oʻz faoliyatini Inspeksiyaning boshqa tarkibiy boʻlinmalari, Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) markaziy apparati, uning hududiy boshqarmalari hamda tuman (shahar) “Inson” ijtimoiy xizmatlar markazlari bilan hamkorlikda amalga oshiradi.</h6>

            <h6 className='faoliyat_h6'>III. Boʻlimning huquq va majburiyatlari</h6>
            <h6 className='faoliyat_oriq'>1. Ushbu Nizom Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiyaning (keyingi oʻrinlarda – Inspeksiya) Nogironligi boʻlgan shaxslarga qulay va toʻsiqsiz sharoitlar yaratilishi, paralimpiya sport turlariga jalb qilinishi hamda ularga ajratilgan ish va oʻqish oʻrinlarini nazorat qilish boʻlimi (keyingi oʻrinlarda – Boʻlim) vazifalari, funksiyalari, huquq va majburiyatlari hamda javobgarliklarini belgilaydi.</h6>
            
            <h6 className='faoliyat_oriq'>2. Boʻlim Inspeksiyaning markaziy apparati tarkibiy boʻlinmasi hisoblanadi.</h6>

            <h6 className='faoliyat_oriq'>3. Boʻlim oʻz faoliyatida Oʻzbekiston Respublikasi Konstitutsiyasi va qonunlariga, Oʻzbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, Oʻzbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, Oʻzbekiston Respublikasining Vazirlar Mahkamasining qarorlariga, boshqa qonunchilik hujjatlariga, shuningdek Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi direktori buyruqlari va koʻrsatmalariga, Inspeksiya boshligʻi buyruqlariga va mazkur Nizomga amal qiladi.</h6>
            
            <h6 className='faoliyat_oriq'>4. Boʻlim oʻz faoliyatini Inspeksiyaning boshqa tarkibiy boʻlinmalari, Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) markaziy apparati, uning hududiy boshqarmalari hamda tuman (shahar) “Inson” ijtimoiy xizmatlar markazlari bilan hamkorlikda amalga oshiradi.</h6>


            <h6 className='faoliyat_oriq'>1. Ushbu Nizom Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiyaning (keyingi oʻrinlarda – Inspeksiya) Nogironligi boʻlgan shaxslarga qulay va toʻsiqsiz sharoitlar yaratilishi, paralimpiya sport turlariga jalb qilinishi hamda ularga ajratilgan ish va oʻqish oʻrinlarini nazorat qilish boʻlimi (keyingi oʻrinlarda – Boʻlim) vazifalari, funksiyalari, huquq va majburiyatlari hamda javobgarliklarini belgilaydi.</h6>
            
            <h6 className='faoliyat_oriq'>2. Boʻlim Inspeksiyaning markaziy apparati tarkibiy boʻlinmasi hisoblanadi.</h6>

            <h6 className='faoliyat_oriq'>3. Boʻlim oʻz faoliyatida Oʻzbekiston Respublikasi Konstitutsiyasi va qonunlariga, Oʻzbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, Oʻzbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, Oʻzbekiston Respublikasining Vazirlar Mahkamasining qarorlariga, boshqa qonunchilik hujjatlariga, shuningdek Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi direktori buyruqlari va koʻrsatmalariga, Inspeksiya boshligʻi buyruqlariga va mazkur Nizomga amal qiladi.</h6>
            
            <h6 className='faoliyat_oriq'>4. Boʻlim oʻz faoliyatini Inspeksiyaning boshqa tarkibiy boʻlinmalari, Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) markaziy apparati, uning hududiy boshqarmalari hamda tuman (shahar) “Inson” ijtimoiy xizmatlar markazlari bilan hamkorlikda amalga oshiradi.</h6>
            <h6 className='faoliyat_oriq'>2. Boʻlim Inspeksiyaning markaziy apparati tarkibiy boʻlinmasi hisoblanadi.</h6>

            <h6 className='faoliyat_oriq'>3. Boʻlim oʻz faoliyatida Oʻzbekiston Respublikasi Konstitutsiyasi va qonunlariga, Oʻzbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, Oʻzbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, Oʻzbekiston Respublikasining Vazirlar Mahkamasining qarorlariga, boshqa qonunchilik hujjatlariga, shuningdek Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi direktori buyruqlari va koʻrsatmalariga, Inspeksiya boshligʻi buyruqlariga va mazkur Nizomga amal qiladi.</h6>
            
            <h6 className='faoliyat_oriq'>4. Boʻlim oʻz faoliyatini Inspeksiyaning boshqa tarkibiy boʻlinmalari, Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) markaziy apparati, uning hududiy boshqarmalari hamda tuman (shahar) “Inson” ijtimoiy xizmatlar markazlari bilan hamkorlikda amalga oshiradi.</h6>

            <h6 className='faoliyat_h6'>IV. Boʻlim faoliyatini tashkil etish</h6>

            <h6 className='faoliyat_oriq'>1. Ushbu Nizom Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi huzuridagi Ijtimoiy inspeksiyaning (keyingi oʻrinlarda – Inspeksiya) Nogironligi boʻlgan shaxslarga qulay va toʻsiqsiz sharoitlar yaratilishi, paralimpiya sport turlariga jalb qilinishi hamda ularga ajratilgan ish va oʻqish oʻrinlarini nazorat qilish boʻlimi (keyingi oʻrinlarda – Boʻlim) vazifalari, funksiyalari, huquq va majburiyatlari hamda javobgarliklarini belgilaydi.</h6>
            
            <h6 className='faoliyat_oriq'>2. Boʻlim Inspeksiyaning markaziy apparati tarkibiy boʻlinmasi hisoblanadi.</h6>

            <h6 className='faoliyat_oriq'>3. Boʻlim oʻz faoliyatida Oʻzbekiston Respublikasi Konstitutsiyasi va qonunlariga, Oʻzbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, Oʻzbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, Oʻzbekiston Respublikasining Vazirlar Mahkamasining qarorlariga, boshqa qonunchilik hujjatlariga, shuningdek Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi direktori buyruqlari va koʻrsatmalariga, Inspeksiya boshligʻi buyruqlariga va mazkur Nizomga amal qiladi.</h6>
            
            <h6 className='faoliyat_oriq'>4. Boʻlim oʻz faoliyatini Inspeksiyaning boshqa tarkibiy boʻlinmalari, Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) markaziy apparati, uning hududiy boshqarmalari hamda tuman (shahar) “Inson” ijtimoiy xizmatlar markazlari bilan hamkorlikda amalga oshiradi.</h6>
            <h6 className='faoliyat_oriq'>2. Boʻlim Inspeksiyaning markaziy apparati tarkibiy boʻlinmasi hisoblanadi.</h6>

            <h6 className='faoliyat_oriq'>3. Boʻlim oʻz faoliyatida Oʻzbekiston Respublikasi Konstitutsiyasi va qonunlariga, Oʻzbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, Oʻzbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, Oʻzbekiston Respublikasining Vazirlar Mahkamasining qarorlariga, boshqa qonunchilik hujjatlariga, shuningdek Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi direktori buyruqlari va koʻrsatmalariga, Inspeksiya boshligʻi buyruqlariga va mazkur Nizomga amal qiladi.</h6>
            
            <h6 className='faoliyat_oriq'>4. Boʻlim oʻz faoliyatini Inspeksiyaning boshqa tarkibiy boʻlinmalari, Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) markaziy apparati, uning hududiy boshqarmalari hamda tuman (shahar) “Inson” ijtimoiy xizmatlar markazlari bilan hamkorlikda amalga oshiradi.</h6>
            <h6 className='faoliyat_h6'>V. Yakuniy qoidalar</h6>
            <h6 className='faoliyat_oriq'>3. Boʻlim oʻz faoliyatida Oʻzbekiston Respublikasi Konstitutsiyasi va qonunlariga, Oʻzbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, Oʻzbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, Oʻzbekiston Respublikasining Vazirlar Mahkamasining qarorlariga, boshqa qonunchilik hujjatlariga, shuningdek Oʻzbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi direktori buyruqlari va koʻrsatmalariga, Inspeksiya boshligʻi buyruqlariga va mazkur Nizomga amal qiladi.</h6>
            
            <h6 className='faoliyat_oriq'>4. Boʻlim oʻz faoliyatini Inspeksiyaning boshqa tarkibiy boʻlinmalari, Ijtimoiy himoya milliy agentligi (keyingi o‘rinlarda – Agentlik) markaziy apparati, uning hududiy boshqarmalari hamda tuman (shahar) “Inson” ijtimoiy xizmatlar markazlari bilan hamkorlikda amalga oshiradi.</h6>
          </div>
          <div className='banner_text '>
            <ul className='banner_collaction'>
              <li className='banner_item one'>Faoliyat</li>
              <hr />
              <Link to={'/faoliyat'} className='link'>
                <li className='banner_item '>Qulat muhit</li>
              </Link>
              <hr />
              <Link to={'/faoliyat/katta-yoshdagilar'} className='link'>
                <li className='banner_item '>Katta yoshdagilar</li>
              </Link>
              <hr />
              <Link to={'/faoliyat/voyaga'} className='link'>
                <li className='banner_item '>Voyaga yetmaganlar</li>
              </Link>
              <hr />
              <Link to={'/faoliyat/nogironlik'} className='link'>
                <li className='banner_item '>Nogironlikni belgilash</li>
              </Link>
              <hr />
              <Link to={'/faoliyat/korupsiya'} className='link'>
                <li className='banner_item '>Korrupsiyaga qarshi kurash</li>
              </Link>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Voyaga