import React from 'react';
import {FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GiCampCookingPot, GiCook, GiBriefcase } from "react-icons/gi";
import { FcBriefcase} from "react-icons/fc";
const Chefs = ({singleCard}) => {

    const {picture, name, experience, total_recipes, likes, id } = singleCard 


    return (
  <div>
  <div className="card card-compact w-full max-h-96 bg-base-100 shadow-xl">
  <figure><img className='w-full h-full' src={picture} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
    </h2>
      <div className="flex items-center gap-2"><FcBriefcase className='text-xl'></FcBriefcase> 
       <p>Experience: {experience} Years</p></div>
        <div className='flex items-center gap-2'>
        <GiCook className='text-lg text-green-800'></GiCook><span>Total Recipes:</span>{total_recipes}
        </div>

    <div className="card-actions justify-between">
          <div className="flex justify-center items-center gap-3">
            <FaThumbsUp className='text-blue-500'></FaThumbsUp> {likes}
          </div>
          <Link to={`/chefdetails/${id}`} className="btn btn-sm  hover:btn-outline badge-warning">View Recipe</Link>
        </div>
  </div>
</div>
  </div>
    );
};

export default Chefs;