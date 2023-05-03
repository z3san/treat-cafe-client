import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import OurPartners from '../../Oursection/OurPartners';
import Reviews from '../../Review/Review';
import CustomerReviews from '../../Review/Review';


const Home = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chefs').then(res=>res.json()).then(data=>setData(data))
    },[])


    return (
        <div>
           <Banner></Banner>
           <div className='my-container text-center my-10'>
            <h1 className='text-4xl font-bold '>Our Chefs</h1>
            <p className='my-5 text-bold text-xl italic'>  
 We have the finest chefs for American cuisine</p>
           </div>
          <div className='grid sm:grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 my-container'>
          {
            data.map(singleCard=><Chefs singleCard={singleCard} key={singleCard.id} ></Chefs>)
           }
          </div>
          <Reviews></Reviews>
          <OurPartners></OurPartners>

        </div>
    );
};

export default Home;