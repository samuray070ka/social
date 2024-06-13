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
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
