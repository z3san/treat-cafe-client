import React from 'react';
import {FaThumbsUp } from 'react-icons/fa';


const Chefs = ({singleCard}) => {

    const {picture, name, experience, total_recipes, likes, id } = singleCard 


    return (
  <div>
  <div className="card  bg-base-100 shadow-xl">
  <figure><img className='w-full h-full' src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{experience} Years</div>
    </h2>
    <p>Total recipes:  {total_recipes}</p>
    <div className="card-actions justify-between">
          <div className="flex justify-center items-center gap-3">
            <FaThumbsUp></FaThumbsUp> {likes}
          </div>
          <div className="badge badge-primary">View Recipe</div>
        </div>
  </div>
</div>
  </div>
    );
};

export default Chefs;