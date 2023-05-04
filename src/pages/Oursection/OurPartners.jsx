import React from "react";
import Marquee from "react-fast-marquee";

const OurPartners = () => {
  return (
 
     <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Our Partners</h2>
          <p className="mt-2 text-sm text-gray-500">
            Some of the companies we work with
          </p>
        </div>
        <Marquee>
        <div className="flex justify-center mt-10">
       
    
          <div className="mx-4">
            <img src="https://seeklogo.com/images/F/foodpanda-logo-551BD51321-seeklogo.com.png" alt="Mastercard" className="h-16" />
            
          </div>
          <div className="mx-4">
            <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png" alt="Mastercard" className="h-16" />
            
          </div>
          <div className="mx-4">
            <img src="https://www.freepnglogos.com/uploads/visa-logo-png-image-4.png" alt="Mastercard" className="h-16" />
         
          </div>
          <div className="mx-4">
            <img src="https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-original-logo-hd-0.png" alt="McDonald's" className="h-16" />
            
          </div>
          <div className="mx-4">
            <img src="https://www.freepnglogos.com/uploads/burger-king-png-logo/burger-king-png-logo-0.png" alt="Burger King" className="h-16" />
          
          </div>
          <div className="mx-4">
            <img src="https://www.freepnglogos.com/uploads/starbucks-logo-png-transparent-0.png" alt="Star bucks" className="h-16" />
          
          </div>
          <div className="mx-4">
            <img src="https://www.freepnglogos.com/uploads/paypal-logo-png-3.png" alt="Paypal" className="h-16" />
            
          </div>
          <div className="mx-4">
            <img src="https://www.logo.wine/a/logo/Wendy's/Wendy's-Logo.wine.svg" alt="wendys" className="h-16" />
            
          </div>
          <div className="mx-4">
            <img src="https://e7.pngegg.com/pngimages/651/153/png-clipart-kfc-logo-kfc-logo-icons-logos-emojis-iconic-brands-thumbnail.png" alt="wendys" className="h-16" />
            
          </div>
        </div>
        </Marquee>
      </div>
    
    </section>

  );
};

export default OurPartners;
