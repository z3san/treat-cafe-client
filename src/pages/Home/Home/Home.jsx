import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import { Row } from 'react-bootstrap';

const Home = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chefs').then(res=>res.json()).then(data=>setData(data))
    },[])


    return (
        <div>
           <Banner></Banner>
          <Row xs={1} md={2} lg={3}>
          {
            data.map(singleCard=><Chefs singleCard={singleCard} key={singleCard.id} ></Chefs>)
           }
          </Row>
        </div>
    );
};

export default Home;