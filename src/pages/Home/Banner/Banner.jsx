import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Banner = () => {
    return (
    <Container>
    <section className="mt-5 d-block">
    <div className='mx-auto' style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1623848932096-b196440bb57b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` , backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw', objectFit: 'contain'
    }}>
          <div className="text-left p-4">
            <h1 className="text-black fw-bold">We make delicious meals <br/> Enjoy our food</h1>
            <p className="text-black fw-bold">There are many variations of passages of Lorem Ipsum available, but the majority <br/> have suffered alteration in some form, by injected humour.</p>
            <div className="d-flex">
          
            </div>
          </div>
        </div>
      </section>
    </Container>
    );
};

export default Banner;