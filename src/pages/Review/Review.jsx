import React from 'react';
import { FaBookmark, FaIdBadge, FaRegBookmark, FaRegStar, FaStar,  } from 'react-icons/fa';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Rating from 'react-rating';


const reviews = [
  {
    name: 'Delicious Burger',
    rating: 4.5,
    review:
      'This burger is amazing! The meat is so juicy and flavorful. The bun is perfectly toasted and the toppings are fresh and tasty. Highly recommend!',
    imageUrl:
      'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
    date: 'May 4, 2023',
  },
  {
    name: 'Satisfying Pizza',
    rating: 4.0,
    review:
      'This pizza is so good! The crust is crispy on the outside and chewy on the inside, and the sauce and toppings are perfectly balanced. Would definitely order again.',
    imageUrl:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'April 30, 2023',
  },
  {
    name: 'Hearty Salad',
    rating: 4.0,
    review:
      'This salad is surprisingly filling! The greens are fresh and the toppings are delicious. The dressing is a bit too tangy for my taste, but overall it was a great meal.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1663852297521-b1b7183b4b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'April 28, 2023',
  },
];





const Review = () => {
  return (
    <div className='my-container'>
        <h1 className=' my-16 text-center font-bold text-3xl'>Customer Feedback</h1>
        <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((review) => (

<div className="card card-compact w-96 bg-base-100 shadow-xl">
<figure><img src={review.imageUrl} alt="Shoes" /></figure>
<div className="card-body">
  <h2 className="card-title">{review.name}</h2>
  <p className='italic'>{review.review}</p>
  <div className="card-actions justify-end">
  <Rating
        readonly
  placeholderRating={review.rating}
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className="text-warning"/>}
  fullSymbol={<FaStar/>}
/>
            <span className='font-bold'>{review.rating}</span>
  </div>
</div>
</div>
  

      ))}
    </div>
        </div>
        
    </div>
  );
};

export default Review;