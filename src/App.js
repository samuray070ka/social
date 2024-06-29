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
import DAvlat from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/Davlat'
import HUdudlar from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/Hududlar'
import An from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/an'
import Fa from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/fa'
import Bu from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/bu'
import Ji from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/ji'
import Na from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/na'
import Nav from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/nav'
import Qa from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/qa'
import Qo from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/qo'
import Sa from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/sa'
import Si from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/si'
import Su from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/su'
import Ts from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/ts'
import Tv from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/tv'
import Xo from './router/qulay-muhit/Ijtimoiy soha obyektlari/davlat-xizmat/hududlar/viloyat/xo'
import Chorraha from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/Chorraha';
import HududlaR from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/Hududlar'
import AN from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/an'
import FA from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/fa'
import BU from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/bu'
import JI from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/ji'
import NA from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/na'
import NAV from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/nav'
import QA from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/qa'
import QO from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/qo'
import SA from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/sa'
import SI from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/si'
import SU from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/su'
import TS from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/ts'
import TV from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/tv'
import XO from './router/qulay-muhit/Infratuzilma obyektlari/chorraha/hududlar/viloyat/xo'

import ANA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/an'
import FAA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/fa'
import BUA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/bu'
import JIA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/ji'
import NAA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/na'
import NAVA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/nav'
import QAA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/qa'
import QOA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/qo'
import SAA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/sa'
import SIA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/si'
import SUA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/su'
import TSA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/ts'
import TVA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/tv'
import XOA from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/viloyat/xo'
import Avtobus from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/Avtobus';
import HUDUDLAR from './router/qulay-muhit/Infratuzilma obyektlari/avtobus/hududlar/Hududlar'
import HUDUDLAr from './router/qulay-muhit/Infratuzilma obyektlari/metro/hududlar/Hududlar'

import ViloyaT from './router/qulay-muhit/Infratuzilma obyektlari/metro/hududlar/viloyat/Viloyat'
import Metro from './router/qulay-muhit/Infratuzilma obyektlari/metro/Metro';
import Chilonzor from './router/qulay-muhit/Infratuzilma obyektlari/metro/hududlar/viloyat/Chilonzor';
import Yunusobod from './router/qulay-muhit/Infratuzilma obyektlari/metro/hududlar/viloyat/Yunusobod';
import Yer from './router/qulay-muhit/Infratuzilma obyektlari/metro/hududlar/viloyat/Yer';
import OzbekistoN from './router/qulay-muhit/Infratuzilma obyektlari/metro/hududlar/viloyat/Ozbekiston';
import Transport from './router/qulay-muhit/Infratuzilma obyektlari/transport/Transport'
import HUDuDlar from './router/qulay-muhit/Infratuzilma obyektlari/transport/hududlar/Hududlar'
import TOsh from './router/qulay-muhit/Infratuzilma obyektlari/transport/hududlar/viloyat/TOsh';
import Sayt from './router/xarita/Sayt'
import IjtimoIy from './router/katta-yoshdagilar/ijtimoiy/Ijtimoiy'
import IJTIMOIY from './router/katta-yoshdagilar/ijtimoiy/IJTIMOIY/IJTIMOIY';
import KEKSA from './router/katta-yoshdagilar/keksa/KEKSA/KEKSA';
import Keksa from './router/katta-yoshdagilar/keksa/Keksa';
import AyollaR from './router/katta-yoshdagilar/ayollar/Ayollar'
import AYOLLAR from './router/katta-yoshdagilar/ayollar/AYOLLAR/AYOLLAR';
import INSON from './router/katta-yoshdagilar/inson/INSON/INSON';
import InsoN from './router/katta-yoshdagilar/inson/Inson'
import Odam from './router/katta-yoshdagilar/odam/Odam';
import ODAM from './router/katta-yoshdagilar/odam/ODAM/ODAM';
import Muayyan from './router/katta-yoshdagilar/muayyan/Muayyan';
import MUAYYAN from './router/katta-yoshdagilar/muayyan/MUAYYAN/MUAYYAN';
import Batafsil from './router/batafsil/Batafsil';
import Tibbiy from './router/nogiron/tibbiy/Tibbiy';
import OnlinE from './router/nogiron/tibbiy/online/Online';
import HUDUDlar from './router/nogiron/tibbiy/online/hududlar/Hududlar'
import OfflinE from './router/nogiron/tibbiy/offline/Offline'
import HUDUDlaR from './router/nogiron/tibbiy/offline/hududlar/Hududlar'
import Reabilitatsiya from './router/nogiron/reabilitatsiya/Reabilitatsiya';
import Ishlatilmagan from './router/nogiron/reabilitatsiya/ishlatilmagan/Ishlatilmagan';
import HuDudlar from './router/nogiron/reabilitatsiya/ishlatilmagan/hududlar/Hududlar'
import HUDUDLArr from './router/nogiron/reabilitatsiya/markazda/hududlar/Hududlar'
import Markazda from './router/nogiron/reabilitatsiya/markazda/Markazda'
import HUDUDlArr from './router/nogiron/reabilitatsiya/takroriy/hududlar/Hududlar'
import Takroriy from './router/nogiron/reabilitatsiya/takroriy/Takroriy'
import Muruvvat from './router/nogiron/muruvvat/Muruvvat';
import Erkak from './router/nogiron/muruvvat/erkak/Erkak';
import Huududlar from './router/nogiron/muruvvat/erkak/hududlar/Hududlar'
import Huuduudlar from './router/nogiron/muruvvat/ayol/hududlar/Hududlar'
import Huuduudlaar from './router/nogiron/muruvvat/bola/hududlar/Hududlar'
import Ayol from './router/nogiron/muruvvat/ayol/Ayol'
import Bola from './router/nogiron/muruvvat/bola/Bola'
import RTV from './router/nogiron/inson/RTV/RTV';
import JizzaX from './router/nogiron/inson/RTV/hududlar/viloyat/jizzax';
import SirdaryO from './router/nogiron/inson/RTV/hududlar/viloyat/sirdaryo';
import ToshkenTT from './router/nogiron/inson/RTV/hududlar/viloyat/toshkent';
import Yetim from './router/voyaga/yetim/Yetim';
import Mehribon from './router/voyaga/yetim/mehribon/Mehribon';
import HududlAR from './router/voyaga/yetim/mehribon/hududlar/Hududlar'
import BolalaR from './router/voyaga/yetim/bolalar/Bolalar'
import HududLAR from './router/voyaga/yetim/bolalar/hududlar/Hududlar'
import HuduDLAR from './router/voyaga/yetim/yetim-first/hududlar/Hududlar'
import YetimFirst from './router/voyaga/yetim/yetim-first/YetimFirst';
import Oilaviy from './router/voyaga/yetim/oilaviy/Oilaviy';
import HuDuDLAR from './router/voyaga/yetim/oilaviy/hududlar/Hududlar'
import HUDudlar from './router/voyaga/yetim/yetim-second/hududlar/Hududlar'
import YetimSecond from './router/voyaga/yetim/yetim-second/YetimSecond';
import YetimThird from './router/voyaga/yetim/yetim-third/YetimThird';
import HudUDlAr from './router/voyaga/yetim/yetim-third/hududlar/Hududlar'
import HuDudLARR from './router/voyaga/yetim/mehr/hududlar/Hududlar'
import Mehr from './router/voyaga/yetim/mehr/Mehr'
import Alohida from './router/voyaga/alohida/Alohida';
import Psixologik from './router/voyaga/alohida/psixologik/Psixologik';
import InsoNN from './router/voyaga/nazoratsiz/inson/Inson'
import InsoNHududlar from './router/voyaga/nazoratsiz/inson/hududlar/Hududlar'
import VoyagA from './router/voyaga/nazoratsiz/voyaga/Voyaga'
import VoyagAHududlar from './router/voyaga/nazoratsiz/voyaga/hududlar/Hududlar'
import OquV from './router/voyaga/nazoratsiz/oquv/Oquv'
import OquVHududlar from './router/voyaga/nazoratsiz/oquv/hududlar/Hududlar'
import DarkMode from './router/DarkMode';
import Zaif from './router/zaif/Zaif';
import DarkZaif from './router/dark-zaif/DarkZaif';
import PinkMode from './router/PinkMode';
import PinkZaif from './router/pink-zaif/PinkZaif';
import Togri from './router/aloqa/Togri';




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
        <Route path='/xarita' element={<Sayt/>}/>
        <Route path='/nogiron' element={<Tibbiy/>}/>
        <Route path='/nogiron/online' element={<OnlinE/>}/>
        <Route path='/nogiron/reabilitatsiya' element={<Reabilitatsiya/>}/>
        <Route path='/nogiron/muruvvat' element={<Muruvvat/>}/>

        <Route path='/nogiron/erkak' element={<Erkak/>}/>
        <Route path='/nogiron/erkak/hududlar' element={<Huududlar/>}/>

        <Route path='/nogiron/ayol' element={<Ayol/>}/>
        <Route path='/nogiron/ayol/hududlar' element={<Huuduudlar/>}/>

        <Route path='/nogiron/bola' element={<Bola/>}/>
        <Route path='/nogiron/bola/hududlar' element={<Huuduudlaar/>}/>

        <Route path='/nogiron/ishlatilmagan' element={<Ishlatilmagan/>}/>
        <Route path='/nogiron/ishlatilmagan/hududlar' element={<HuDudlar/>}/>
        <Route path='/nogiron/online/hududlar' element={<HUDUDlar/>}/>
        <Route path='/nogiron/offline' element={<OfflinE/>}/>
        <Route path='/nogiron/offline/hududlar' element={<HUDUDlaR/>}/>
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
        <Route path='/qulay-muhit/davlat-xizmat' element={<DAvlat/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar' element={<HUdudlar/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/an' element={<An/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/fa' element={<Fa/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/ji' element={<Ji/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/na' element={<Na/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/bu' element={<Bu/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/xo' element={<Xo/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/nav' element={<Nav/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/qa' element={<Qa/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/qo' element={<Qo/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/sa' element={<Sa/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/si' element={<Si/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/su' element={<Su/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/ts' element={<Ts/>}/>
        <Route path='/qulay-muhit/davlat-xizmat/hududlar/tv' element={<Tv/>}/>

        <Route path='/qulay-muhit/chorraha' element={<Chorraha/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar' element={<HududlaR/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/an' element={<AN/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/fa' element={<FA/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/bu' element={<BU/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/ji' element={<JI/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/na' element={<NA/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/nav' element={<NAV/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/qa' element={<QA/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/qo' element={<QO/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/sa' element={<SA/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/si' element={<SI/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/su' element={<SU/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/ts' element={<TS/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/tv' element={<TV/>}/>
        <Route path='/qulay-muhit/chorraha/hududlar/xo' element={<XO/>}/>

        <Route path='/qulay-muhit/avtobus' element={<Avtobus/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar' element={<HUDUDLAR/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/an' element={<ANA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/fa' element={<FAA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/bu' element={<BUA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/ji' element={<JIA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/na' element={<NAA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/nav' element={<NAVA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/qa' element={<QAA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/qo' element={<QOA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/sa' element={<SAA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/si' element={<SIA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/su' element={<SUA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/ts' element={<TSA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/tv' element={<TVA/>}/>
        <Route path='/qulay-muhit/avtobus/hududlar/xo' element={<XOA/>}/>

        <Route path='/qulay-muhit/metro' element={<Metro/>}/>
        <Route path='/qulay-muhit/metro/hududlar' element={<HUDUDLAr/>}/>
        <Route path='/qulay-muhit/metro/hududlar/viloyat' element={<ViloyaT/>}/>
        <Route path='/qulay-muhit/metro/hududlar/viloyat/chilonzor' element={<Chilonzor/>}/>
        <Route path='/qulay-muhit/metro/hududlar/viloyat/ozbekiston' element={<OzbekistoN/>}/>
        <Route path='/qulay-muhit/metro/hududlar/viloyat/yunusobod' element={<Yunusobod/>}/>
        <Route path='/qulay-muhit/metro/hududlar/viloyat/yer' element={<Yer/>}/>

        <Route path='/qulay-muhit/transport' element={<Transport/>}/>
        <Route path='/qulay-muhit/transport/hududlar' element={<HUDuDlar/>}/>
        <Route path='/qulay-muhit/transport/hududlar/TOsh' element={<TOsh/>}/>

        <Route path='/katta-yoshdagilar' element={<IjtimoIy/>}/>
        <Route path='/katta-yoshdagilar/IJTIMOIY' element={<IJTIMOIY/>}/>

        <Route path='/katta-yoshdagilar/KEKSA' element={<KEKSA/>}/>
        <Route path='/katta-yoshdagilar' element={<Keksa/>}/>

        <Route path='/katta-yoshdagilar' element={<AyollaR/>}/>
        <Route path='/katta-yoshdagilar/AYOLLAR' element={<AYOLLAR/>}/>

        <Route path='/katta-yoshdagilar' element={<InsoN/>}/>
        <Route path='/katta-yoshdagilar/INSON' element={<INSON/>}/>

        <Route path='/katta-yoshdagilar' element={<Odam/>}/>
        <Route path='/katta-yoshdagilar/ODAM' element={<ODAM/>}/>

        <Route path='/katta-yoshdagilar' element={<Muayyan/>}/>
        <Route path='/katta-yoshdagilar/MUAYYAN' element={<MUAYYAN/>}/>
        <Route path='/batafsil' element={<Batafsil/>}/>

        <Route path='/nogiron/markazda' element={<Markazda/>}/>
        <Route path='/nogiron/markazda/hududlar' element={<HUDUDLArr/>}/>

        <Route path='/nogiron/takroriy' element={<Takroriy/>}/>
        <Route path='/nogiron/takroriy/hududlar' element={<HUDUDlArr/>}/>

        <Route path='/nogiron/rtv' element={<RTV/>}/>
        <Route path='/nogiron/rtv/hududlar/jizzax' element={<JizzaX/>}/>
        <Route path='/nogiron/rtv/hududlar/sirdaryo' element={<SirdaryO/>}/>
        <Route path='/nogiron/rtv/hududlar/toshkent' element={<ToshkenTT/>}/>
        <Route path='/voyaga' element={<Yetim/>}/>
        <Route path='/voyaga/mehribon' element={<Mehribon/>}/>
        <Route path='/voyaga/mehribon/hududlar' element={<HududlAR/>}/>
        <Route path='/voyaga/bolalar' element={<BolalaR/>}/>
        <Route path='/voyaga/bolalar/hududlar' element={<HududLAR/>}/>
        <Route path='/voyaga/yetim-first' element={<YetimFirst/>}/>
        <Route path='/voyaga/yetim-first/hududlar' element={<HuduDLAR/>}/>
        <Route path='/voyaga/oilaviy' element={<Oilaviy/>}/>
        <Route path='/voyaga/oilaviy/hududlar' element={<HuDuDLAR/>}/>
        <Route path='/voyaga/yetim-second' element={<YetimSecond/>}/>
        <Route path='/voyaga/yetim-second/hududlar' element={<HUDudlar/>}/>
        <Route path='/voyaga/yetim-third' element={<YetimThird/>}/>
        <Route path='/voyaga/yetim-third/hududlar' element={<HudUDlAr/>}/>
        <Route path='/voyaga/mehr' element={<Mehr/>}/>
        <Route path='/voyaga/mehr/hududlar' element={<HuDudLARR/>}/>
        <Route path='/voyaga' element={<Alohida/>}/>
        <Route path='/voyaga/psixologik' element={<Psixologik/>}/>
        <Route path='/voyaga/inson' element={<InsoNN/>}/>
        <Route path='/voyaga/inson/hududlar' element={<InsoNHududlar/>}/>
        <Route path='/voyaga/voyaga' element={<VoyagA/>}/>
        <Route path='/voyaga/voyaga/hududlar' element={<VoyagAHududlar/>}/>
        <Route path='/voyaga/oquv' element={<OquV/>}/>
        <Route path='/voyaga/oquv/hududlar' element={<OquVHududlar/>}/>
        <Route path='/dark-mode' element={<DarkMode/>}/>
        <Route path='/zaif' element={<Zaif/>}/>
        <Route path='/dark-mode/zaif' element={<DarkZaif/>}/>
        <Route path='/pink-mode' element={<PinkMode/>}/>
        <Route path='/pink-mode/zaif' element={<PinkZaif/>}/>
        <Route path='/togri'element={<Togri/>}/>







        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
