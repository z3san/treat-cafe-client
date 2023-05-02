import React from 'react';


const Banner = () => {
    return (
<div
  className="lg:flex my-container lg:flex-row-reverse justify-center items-center p-7 mx-auto relative"
  style={{
    backgroundImage: `url(https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px'
  }}
>
  <img
    src="https://images.unsplash.com/photo-1595257841889-eca2678454e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    className="rounded-lg opacity-0"
  />
  <div className="relative mb-9">
    <h1 className="text-5xl text-neutral-content font-bold">Elevating classic dishes with a modern twist.</h1>
    <p className="py-6 font-bold text-3xl text-neutral-content">
      Where every meal is a celebration of flavors and friendship.
    </p>
    <div className="absolute inset-0  opacity-60"></div>
  </div>
</div>












    
    );
};

export default Banner;