import React, { useState } from 'react';
import { FaBookmark, FaRegBookmark, FaRegStar, FaStar,  } from 'react-icons/fa';

import { GiCampCookingPot, GiCook, GiBriefcase } from "react-icons/gi";
import { FcBriefcase} from "react-icons/fc";

import Rating from 'react-rating';
import Swal from 'sweetalert2'
const Recipe = ({recipe}) => {
    const {recipe_name, ingredients, cooking_method, rating} = recipe
    
    const [block, setBlock] = useState(true)
    const handleBookmark = () =>{
        if(block === true){
            setBlock(false)
            Swal.fire(
                'Bookmarked Successfully!',
                ' ',
                'success'
              )
        }
    }
   

    return (
<div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button onClick={handleBookmark} disabled={false}>
            {block ? (
              <FaRegBookmark></FaRegBookmark>
            ) : (
              <FaBookmark></FaBookmark>
            )}
          </button>
        </div>
        <p className='font-bold'>{recipe_name}</p>
        <p><span className='font-bold'>Ingredients:</span> {ingredients}</p>
               
               <span><GiCampCookingPot className='text-xl'/>{cooking_method}</span> 
               
                <div className="flex items-center justify-start gap-1">
        <Rating
        readonly
  placeholderRating={rating}
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className="text-warning"/>}
  fullSymbol={<FaStar/>}
/>
            <span className='font-bold'>{rating}</span>
        </div>
      </div>
    </div>
    );
};

export default Recipe;