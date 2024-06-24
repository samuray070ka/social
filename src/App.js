import './App.css';
import Home from './router/home/Home';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import {Routes, Route } from "react-router-dom"
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
import UniqueJamoat from './router/unique-jamoat/index'
import Online from './router/aloqa-router/online/Online';
import Offline from './router/aloqa-router/offline/Offline';
import Boglanish from './router/aloqa-router/boglanish/Boglanish';
import Andijon from './router/aloqa-router/andijon/Andijon';
import Namangan from './router/aloqa-router/namangan/Namangan';
import Fargona from './router/aloqa-router/fagona/Fargona';
import Sirdaryo from './router/aloqa-router/sirdaryo/Sirdaryo';
import Jizzax from './router/aloqa-router/jizzax/Jizzax';
import Samarqand from './router/aloqa-router/samarqand/Samarqand';
import Surxondaryo from './router/aloqa-router/surxondaryo/Surxondaryo';
import Qashqadaryo from './router/aloqa-router/qashqadaryo/Qashqadaryo';
import Navoiy from './router/aloqa-router/navoiy/Navoiy';
import Buxoro from './router/aloqa-router/buxoro/Buxoro';
import ToshkentViloyat from './router/aloqa-router/toshkent-viloyat/ToshkentViloyat';
import ToshkentShahri from './router/aloqa-router/toshkent-shahri/ToshkentShahri';
import Xorazm from './router/aloqa-router/xorazm/Xorazm';
import Qoraqalpoq from './router/aloqa-router/qoraqalpoq/Qoraqalpoq';
import Api from './components/navbar/Api';
import IjtimoiySoha from './router/qulay-muhit/Ijtimoiy soha obyektlari/IjtimoiySoha';
import Inson from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/Inson';
import Hududlar from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/Hududlar';
import Viloyat from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/Viloyat';
import Nnamangan from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/Nnamangan';
import Fargonaa from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/fargona';
import Sirdaryoo from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/sirdaryo';
import Jizzaxx from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/jizzax';
import Samarqandd from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/samarqand';
import Surxondaryoo from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/surxondaryo';
import Qashqadaryoo from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/qashqadaryo';
import Navoiyy from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/navoiy';
import Buxoroo from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/buxoro';
import ToshkentShahrii from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/toshkentShahri';
import ToshkentViloyatii from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/toshkentViloyati';
import Xorazmm from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/xorazm';
import Qoraqalpoqq from './router/qulay-muhit/Ijtimoiy soha obyektlari/inson/hududlar/viloyat/qoraqalpoq';
import Davlat from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat/Davlat';
import Hududlarr from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat/hududlarr/Hududlarr';
import Ayollar from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/ayollar';
import Hud from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/Hud';
import Anjan from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/anjan';
import Far from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/far';
import Bux from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/bux';
import Jiz from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/jiz';
import Nam from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/nam';
import Navo from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/navo';
import Qash from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/qash';
import Qor from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/qor';
import Sam from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/sam';
import Xor from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/xor';
import ToshVilo from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/toshVilo';
import Tosh from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/tosh';
import Sur from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/sur';
import Sir from './router/qulay-muhit/Ijtimoiy soha obyektlari/ayollar/hud/viloyat/sir';
import Bolalar from './router/qulay-muhit/Ijtimoiy soha obyektlari/bolalar/Bolalar';
import Hududd from './router/qulay-muhit/Ijtimoiy soha obyektlari/bolalar/hududd/Hududd';
import Farg from './router/qulay-muhit/Ijtimoiy soha obyektlari/bolalar/hududd/viloyat/farg';
import Qashq from './router/qulay-muhit/Ijtimoiy soha obyektlari/bolalar/hududd/viloyat/qashq';
import Qora from './router/qulay-muhit/Ijtimoiy soha obyektlari/bolalar/hududd/viloyat/qora';
import Sama from './router/qulay-muhit/Ijtimoiy soha obyektlari/bolalar/hududd/viloyat/sama';
import ToshSh from './router/qulay-muhit/Ijtimoiy soha obyektlari/bolalar/hududd/viloyat/toshSh';
import ToshVil from './router/qulay-muhit/Ijtimoiy soha obyektlari/bolalar/hududd/viloyat/toshVil';
import Saxovat from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/Saxovat'
import Hudd from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/Hudd'
import Andi from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/andi'
import Buxo from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/buxo'
import Fargo from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/fargo'
import Jizz from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/jizz'
import Nama from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/nama'
import Navoi from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/navoi'
import Qashqa from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/qashqa'
import Qoraq from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/qoraq'
import Samar from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/samar'
import Sird from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/sird'
import Surx from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/surx'
import ToSh from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/toSh'
import ToshViloy from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/toshViloy'
import Xoraz from './router/qulay-muhit/Ijtimoiy soha obyektlari/saxovat/hudd/viloyat/xoraz'
import Talim from './router/qulay-muhit/Ijtimoiy soha obyektlari/talim/Talim';
import HududLar from './router/qulay-muhit/Ijtimoiy soha obyektlari/talim/hududlar/Hududlar'
import MMT from './router/qulay-muhit/Ijtimoiy soha obyektlari/talim/hududlar/viloyat/MMT';
import OTM from './router/qulay-muhit/Ijtimoiy soha obyektlari/talim/hududlar/viloyat/OTM';
import Maktab from './router/qulay-muhit/Ijtimoiy soha obyektlari/talim/hududlar/viloyat/Maktab';
import Sogliq from "./router/qulay-muhit/Ijtimoiy soha obyektlari/sog'liq/Sogliq"
import Huud from "./router/qulay-muhit/Ijtimoiy soha obyektlari/sog'liq/hud/Hud"
import TOSH from "./router/qulay-muhit/Ijtimoiy soha obyektlari/sog'liq/hud/viloyat/TOSH"
import Anjann from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/anjann';
import Buxx from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/buxx';
import Farr from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/farr';
import Jizzz from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/jizzz';
import Namm from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/namm';
import Sirr from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/sirr';
import Navoo from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/navoo';
import Surr from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/surr';
import Toshsh from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/toshsh';
import Toshvilo from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/toshvilo';
import Xorr from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/xorr';
import Qorr from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/qorr';
import Qashsh from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/qashsh';
import Samm from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/viloyat/samm';
import Ishga from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/Ishga'
import Huuud from './router/qulay-muhit/Ijtimoiy soha obyektlari/ishga-marhamat/hud/Hud'

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
        <Route path='/ijtimoiy/products/:proID' element={<UniquePage/>}/>
        <Route path='/jamoatchilik/products/:proID' element={<UniqueJamoat/>}/>
        <Route path='/aloqa/online' element={<Online/>}/>
        <Route path='/aloqa/offline' element={<Offline/>}/>
        <Route path='/aloqa/boglanish' element={<Boglanish/>}/>
        <Route path='/aloqa/andijon' element={<Andijon/>}/>
        <Route path='/aloqa/namangan' element={<Namangan/>}/>
        <Route path='/aloqa/fargona' element={<Fargona/>}/>
        <Route path='/aloqa/sirdaryo' element={<Sirdaryo/>}/>
        <Route path='/aloqa/jizzax' element={<Jizzax/>}/>
        <Route path='/aloqa/samarqand' element={<Samarqand/>}/>
        <Route path='/aloqa/surxondaryo' element={<Surxondaryo/>}/>
        <Route path='/aloqa/qashqadaryo' element={<Qashqadaryo/>}/>
        <Route path='/aloqa/navoiy' element={<Navoiy/>}/>
        <Route path='/aloqa/buxoro' element={<Buxoro/>}/>
        <Route path='/aloqa/toshkent-viloyat' element={<ToshkentViloyat/>}/>
        <Route path='/aloqa/toshkent-shahri' element={<ToshkentShahri/>}/>
        <Route path='/aloqa/xorazm' element={<Xorazm/>}/>
        <Route path='/aloqa/qoraqalpoq' element={<Qoraqalpoq/>}/>
        <Route path='/qulay-muhit' element={<IjtimoiySoha/>}/>
        <Route path='/qulay-muhit/inson' element={<Inson/>}/>
        <Route path='/qulay-muhit/inson/hududlar' element={<Hududlar/>}/>
        <Route path='/qulay-muhit/inson/hududlar/viloyat' element={<Viloyat/>}/>
        <Route path='/qulay-muhit/inson/hududlar/namangan' element={<Nnamangan/>}/>
        <Route path='/qulay-muhit/inson/hududlar/fargona' element={<Fargonaa/>}/>
        <Route path='/qulay-muhit/inson/hududlar/sirdaryo' element={<Sirdaryoo/>}/>
        <Route path='/qulay-muhit/inson/hududlar/jizzax' element={<Jizzaxx/>}/>
        <Route path='/qulay-muhit/inson/hududlar/samarqand' element={<Samarqandd/>}/>
        <Route path='/qulay-muhit/inson/hududlar/surxondaryo' element={<Surxondaryoo/>}/>
        <Route path='/qulay-muhit/inson/hududlar/qashqadaryo' element={<Qashqadaryoo/>}/>
        <Route path='/qulay-muhit/inson/hududlar/navoiy' element={<Navoiyy/>}/>
        <Route path='/qulay-muhit/inson/hududlar/buxoro' element={<Buxoroo/>}/>
        <Route path='/qulay-muhit/inson/hududlar/toshkent-viloyati' element={<ToshkentViloyatii/>}/>
        <Route path='/qulay-muhit/inson/hududlar/toshkent-shahri' element={<ToshkentShahrii/>}/>
        <Route path='/qulay-muhit/inson/hududlar/xorazm' element={<Xorazmm/>}/>
        <Route path='/qulay-muhit/inson/hududlar/qoraqalpoq' element={<Qoraqalpoqq/>}/>
        <Route path='/qulay-muhit/davlat/davlat' element={<Davlat/>}/>
        <Route path='/qulay-muhit/davlat/hududlarr' element={<Hududlarr/>}/>
        <Route path='/qulay-muhit/ayollar' element={<Ayollar/>}/>
        <Route path='/qulay-muhit/ayollar/hud' element={<Hud/>}/>
        <Route path='/qulay-muhit/ayollar/hud/anjan' element={<Anjan/>}/>
        <Route path='/qulay-muhit/ayollar/hud/bux' element={<Bux/>}/>
        <Route path='/qulay-muhit/ayollar/hud/far' element={<Far/>}/>
        <Route path='/qulay-muhit/ayollar/hud/jiz' element={<Jiz/>}/>
        <Route path='/qulay-muhit/ayollar/hud/nam' element={<Nam/>}/>
        <Route path='/qulay-muhit/ayollar/hud/navo' element={<Navo/>}/>
        <Route path='/qulay-muhit/ayollar/hud/qash' element={<Qash/>}/>
        <Route path='/qulay-muhit/ayollar/hud/qor' element={<Qor/>}/>
        <Route path='/qulay-muhit/ayollar/hud/sam' element={<Sam/>}/>
        <Route path='/qulay-muhit/ayollar/hud/sir' element={<Sir/>}/>
        <Route path='/qulay-muhit/ayollar/hud/sur' element={<Sur/>}/>
        <Route path='/qulay-muhit/ayollar/hud/tosh' element={<Tosh/>}/>
        <Route path='/qulay-muhit/ayollar/hud/toshVilo' element={<ToshVilo/>}/>
        <Route path='/qulay-muhit/ayollar/hud/xor' element={<Xor/>}/>
        <Route path='/qulay-muhit/bolalar' element={<Bolalar/>}/>
        <Route path='/qulay-muhit/bolalar/hududd' element={<Hududd/>}/>
        <Route path='/qulay-muhit/bolalar/hududd/farg' element={<Farg/>}/>
        <Route path='/qulay-muhit/bolalar/hududd/qashq' element={<Qashq/>}/>
        <Route path='/qulay-muhit/bolalar/hududd/qora' element={<Qora/>}/>
        <Route path='/qulay-muhit/bolalar/hududd/sama' element={<Sama/>}/>
        <Route path='/qulay-muhit/bolalar/hududd/toshVil' element={<ToshVil/>}/>
        <Route path='/qulay-muhit/bolalar/hududd/toshSh' element={<ToshSh/>}/>
        <Route path='/qulay-muhit/saxovat' element={<Saxovat/>}/>
        <Route path='/qulay-muhit/saxovat/hudd' element={<Hudd/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/andi' element={<Andi/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/fargo' element={<Fargo/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/buxo' element={<Buxo/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/jizz' element={<Jizz/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/nama' element={<Nama/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/navoi' element={<Navoi/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/qashqa' element={<Qashqa/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/qoraq' element={<Qoraq/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/sama' element={<Samar/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/sird' element={<Sird/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/surx' element={<Surx/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/toSh' element={<ToSh/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/toshViloy' element={<ToshViloy/>}/>
        <Route path='/qulay-muhit/saxovat/hudd/xoraz' element={<Xoraz/>}/>
        <Route path='/qulay-muhit/talim' element={<Talim/>}/>
        <Route path='/qulay-muhit/talim/hududlar' element={<HududLar/>}/>
        <Route path='/qulay-muhit/talim/hududlar/mmt' element={<MMT/>}/>
        <Route path='/qulay-muhit/talim/hududlar/otm' element={<OTM/>}/>
        <Route path='/qulay-muhit/talim/hududlar/maktab' element={<Maktab/>}/>
        <Route path='/qulay-muhit/sogliq' element={<Sogliq/>}/>
        <Route path='/qulay-muhit/sogliq/hud' element={<Huud/>}/>
        <Route path='/qulay-muhit/sogliq/TOSH' element={<TOSH/>}/>
        <Route path='/qulay-muhit/ishga-marhamat' element={<Ishga/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud' element={<Huuud/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/anjann' element={<Anjann/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/buxx' element={<Buxx/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/farr' element={<Farr/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/jizzz' element={<Jizzz/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/namm' element={<Namm/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/navoo' element={<Navoo/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/qashsh' element={<Qashsh/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/qorr' element={<Qorr/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/samm' element={<Samm/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/sirr' element={<Sirr/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/surr' element={<Surr/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/toshsh' element={<Toshsh/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/toshvilo' element={<Toshvilo/>}/>
        <Route path='/qulay-muhit/ishga-marhamat/hud/xorr' element={<Xorr/>}/>





        
      </Routes>
      <Footer/>
      <Api/>
    </div>
  );
}

export default App;
