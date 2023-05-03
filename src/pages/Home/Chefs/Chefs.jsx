import React from 'react';
import {FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Chefs = ({singleCard}) => {

    const {picture, name, experience, total_recipes, likes, id } = singleCard 


    return (
  <div>
  <div className="card  bg-base-100 shadow-xl">
  <figure><img className='w-full h-full' src={picture} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{experience} Years</div>
    </h2>
    <p>Total recipes:  {total_recipes}</p>
    <div className="card-actions justify-between">
          <div className="flex justify-center items-center gap-3">
            <FaThumbsUp className='text-blue-500'></FaThumbsUp> {likes}
          </div>
          <Link to={`/chefdetails/${id}`} className="badge badge-primary">View Recipe</Link>
        </div>
  </div>
</div>
  </div>
    );
};

export default Chefs;