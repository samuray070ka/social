import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useState, useEffect } from 'react';
// const [data, setData] = useState([]);
// useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/menu');
//       const data = await response.json();
//       setData(data);
//     }

//     fetchData();
//     console.log(data);
//   }, []);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n