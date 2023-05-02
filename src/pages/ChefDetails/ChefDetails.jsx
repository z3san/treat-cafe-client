import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
const detailData = useLoaderData()

const {picture, name, experience, total_recipes, likes, id, bio} = detailData;
console.log(detailData);

    return (
        <div className="card my-container lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{name}</h2>
          <p>
            <span className='text-gray-500 font-bold italic'>{bio}</span> <br />
           <span className='font-bold '> Number Of recipes: {total_recipes}</span>
           <br />
           <span> <span className='font-bold'> Years of experience: {experience}</span></span>
          </p>

          <div className="card-actions justify-end">
            <div className="flex items-center">
              <FaThumbsUp className="text-blue-500 mx-2 animate-pulse"></FaThumbsUp>{" "}
              <p className="font-bold">{likes}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ChefDetails;