import React from 'react'
import { useState, useEffect } from 'react';

function API() {
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


    // swiper API
    async function fetchSilider() {
        const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/slider/list');
        const data = await response.json();
        return data;
    }
    const [silider, setSilider] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await fetchSilider();
            setSilider(result);
        }
        
        getData();
        console.log(silider);
    }, []);

    async function fetchCategory() {
        const response = await fetch('https://ijtimoiyinspeksiya.uz/api/v1/statistic-category');
        const data = await response.json();
        return data;
    }
    const [category, setCategory] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await fetchCategory();
            setCategory(result);
        }
        
        getData();
        console.log(category);
    }, []);
    
  return (
    <div>
         <h1>API Ma'lumotlari</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name.ru}</li>
                ))}
            </ul>
    </div>
  )
}

export default API