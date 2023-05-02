import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';


const Home = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chefs').then(res=>res.json()).then(data=>setData(data))
    },[])


    return (
        <div>
           <Banner></Banner>
           <div className='my-container text-center'>
            <h1 className='text-4xl font-bold'>Our Chefs</h1>
            
           </div>
          <div className='grid sm:grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 my-container'>
          {
            data.map(singleCard=><Chefs singleCard={singleCard} key={singleCard.id} ></Chefs>)
           }
          </div>
        </div>
    );
};

export default Home;