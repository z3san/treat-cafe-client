import React from "react";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <div
      className="hero h-screen"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 md:text-xl lg:text-5xl font-bold">
            {" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Welcome to TreatCafe")

                  .pauseFor(1000)
                  .deleteAll(100)
                  .typeString("Elevating classic american dishes with a modern twist.")
                  .start();
              }}
            />
          </h1>
        </div>
      </div>
    </div>

    /*  <div
  className="lg:flex my-container hero-overlay lg:flex-row-reverse justify-center items-center p-7 mx-auto relative"
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
    <h1 className="text-5xl text-neutral-content font-bold"> <h1 className="mb-5 md:text-xl lg:text-5xl font-bold">      <Typewriter

onInit={(typewriter)=> {

typewriter
 
.typeString("Welcome to TreatCafe")
  
.pauseFor(1000)
.deleteAll(100)
.typeString("Elevating classic dishes with a modern twist.")
.start();
}}
/></h1></h1>
    
    <div className="absolute inset-0  opacity-60"></div>
  </div>

</div> */

  );
};

export default Banner;
