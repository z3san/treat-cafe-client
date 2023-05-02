import React from 'react';
import { FaHamburger } from 'react-icons/fa';
const AboutUs = () => {
    return (
        <div className="flex flex-col justify-center   items-center my-container">
     <FaHamburger className=' text-7xl text-yellow-400'></FaHamburger>
      <h1 className="text-4xl font-bold mb-4">Welcome to Treatcafe</h1>
      <p className="text-lg text-center mb-8">Treatcafe was founded in 2010 by a group of food enthusiasts who wanted to share their love for delicious, high-quality food with the community. Our founders were passionate about using fresh, locally sourced ingredients and preparing each dish with care to ensure the highest quality and taste. Since then, we have been committed to serving our customers with the best food, drinks, and desserts, and we take pride in the positive feedback we've received from our satisfied customers. Our dedication to quality has also earned us recognition in local food and drink publications, and we continue to strive for excellence in everything we do.</p>
      <div className="grid grid-cols-2 gap-8">
        <div className="p-4 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-lg">Treatcafe was founded in 2010 by a group of food enthusiasts who wanted to share their love for delicious, high-quality food with the community. Since then, we have been committed to serving our customers with the best food, drinks, and desserts.
          At Treatcafe, we take great pride in our menu. We believe that the key to great food is starting with high-quality ingredients, and we source our produce and meat from local farms and suppliers whenever possible. Our chefs are trained in a variety of cuisines and techniques, and they work tirelessly to create dishes that are both beautiful and delicious.

We also offer a wide variety of drinks, including beer, wine, cocktails, and non-alcoholic beverages. Our bartenders are experts in mixology, and they're always happy to recommend a drink that will pair perfectly with your meal.



We believe that dining is about more than just eating - it's about creating memories with the people you care about. That's why we offer a variety of dining options, from cozy tables for two to large communal tables for groups.


We're proud of our commitment to excellence in all aspects of our business, and we're dedicated to providing our customers with an exceptional dining experience. So come visit us at Treatcafe and see for yourself why we're one of the most beloved restaurants in town!






          </p>
        </div>
        <div className="p-4 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">Our mission at Treatcafe is more than just serving high-quality food, drinks, and desserts. We aim to create a dining experience that is truly exceptional, one that is memorable and enjoyable for all of our customers. We believe that food is more than just sustenance - it's an experience that should be savored and enjoyed. That's why we put so much care into every aspect of our menu, from selecting the freshest ingredients to crafting beautiful and delicious dishes that are sure to delight your taste buds.

But we also know that a truly great dining experience is about more than just the food. That's why we strive to create a warm and welcoming atmosphere where everyone feels at home. Whether you're dining alone, with friends, or with family, we want you to feel comfortable and relaxed. O





So come visit us at Treatcafe and experience our mission in action. We're excited to share our passion for great food, exceptional service, and a warm and welcoming atmosphere with you.</p>
        </div>
      </div>
    </div>
    );
};

export default AboutUs;