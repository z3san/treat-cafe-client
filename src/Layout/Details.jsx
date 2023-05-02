import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Foooter/Footer';

const Details = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Details;