import './App.css';
import Home from './router/home/Home';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import {Routes, Route} from "react-router-dom"
import NavbarBottom from './components/navbarBottom/NavbarBottom';
import Aloqa from './router/aloqa/Aloqa'
import Faoliyat from './router/faoliyat/Faoliyat'
import Ijtimoiy from './router/ijtimoiy/Ijtimoiy'
import Jamoatchilik from './router/jamoatchilik/Jamoatchilik'
import Normativ from './router/normativ/Normativ'
import Ochiq from './router/ochiq/Ochiq'
import Nizom from './router/mini-router/nizom/Nizom'
import Statistica from './router/statistica/Statistica'
import Hamkorlik from './router/mini-router/hamkorlik/Hamkorlik'
import Hududiy from './router/mini-router/hududiy/Hududiy'
import Markaziy from './router/mini-router/markaziy-aparat/Markaziy'
import Rahbaryat from './router/mini-router/rahbaryat/Rahbaryat'
import IshOrni from './router/mini-router/ish-orni/IshOrni'
import Tuzilma from './router/mini-router/tuzilma/Tuzilma'
import KattaYoshdagilar from './router/faoliyat-router/katta-yoshdagilar/Katta'
import Korupsiya from './router/faoliyat-router/korupsiya/Korupsiya';
import Nogironlik from './router/faoliyat-router/nogironlik/Nogironlik';
import Qulay from './router/faoliyat-router/qulay-muhit/Qulay';
import Voyaga from './router/faoliyat-router/voyaga/Voyaga';
import Idoraviy from './router/normativ-router/idoraviy/Idoraviy';
import Ozbekiston from './router/normativ-router/ozbekiston/Ozbekiston'
import Prezident from './router/normativ-router/president/Prezident'
import Vazirlar from './router/normativ-router/vazirlar/Vazirlar'
import Xalqaro from './router/normativ-router/xalqaro/Xalqaro'
import Yangiliklar from './router/jamoatchilik-router/yangiliklar/Yangiliklar';
import Pressreliz from './router/jamoatchilik-router/Pressreliz/Pressreliz';
import Elonlar from './router/jamoatchilik-router/E’lonlar/Elonlar';
import VideoDars from './router/jamoatchilik-router/Videodarsliklar/VideoDars';
import VideoRolik from './router/jamoatchilik-router/Videoroliklar/VideoRolik';
import UniquePage from './router/unique-page/Index'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavbarBottom/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aloqa' element={<Aloqa/>}/>
        <Route path='/faoliyat' element={<Faoliyat/>}/>
        <Route path='/ijtimoiy' element={<Ijtimoiy/>}/>
        <Route path='/jamoatchilik' element={<Jamoatchilik/>}/>
        <Route path='/normativ' element={<Normativ/>}/>
        <Route path='/ochiq' element={<Ochiq/>}/>
        <Route path='/statistica' element={<Statistica/>}/>
        <Route path='/ijtimoiy/nizom' element={<Nizom/>}/>
        <Route path='/ijtimoiy/hamkorlik' element={<Hamkorlik/>}/>
        <Route path='/ijtimoiy/rahbaryat' element={<Rahbaryat/>}/>
        <Route path='/ijtimoiy/hududiy' element={<Hududiy/>}/>
        <Route path='/ijtimoiy/tuzilma' element={<Tuzilma/>}/>
        <Route path='/ijtimoiy/ish-orni' element={<IshOrni/>}/>
        <Route path='/ijtimoiy/markaziy' element={<Markaziy/>}/>
        <Route path='/faoliyat/katta-yoshdagilar' element={<KattaYoshdagilar/>}/>
        <Route path='/faoliyat/korupsiya' element={<Korupsiya/>}/>
        <Route path='/faoliyat/nogironlik' element={<Nogironlik/>}/>
        <Route path='/faoliyat/qulay' element={<Qulay/>}/>
        <Route path='/faoliyat/voyaga' element={<Voyaga/>}/>
        <Route path='/normativ/ozbekiston' element={<Ozbekiston/>}/>
        <Route path='/normativ/prezident' element={<Prezident/>}/>
        <Route path='/normativ/vazirlar' element={<Vazirlar/>}/>
        <Route path='/normativ/idoraviy' element={<Idoraviy/>}/>
        <Route path='/normativ/xalqaro' element={<Xalqaro/>}/>
        <Route path='/jamoatchilik/yangiliklar' element={<Yangiliklar/>}/>
        <Route path='/jamoatchilik/pressreliz' element={<Pressreliz/>}/>
        <Route path='/jamoatchilik/videodarsliklar' element={<VideoDars/>}/>
        <Route path='/jamoatchilik/videoroliklar' element={<VideoRolik/>}/>
        <Route path='/jamoatchilik/elonlar' element={<Elonlar/>}/>
        <Route path='/hamkorlik/:proID' element={<UniquePage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
