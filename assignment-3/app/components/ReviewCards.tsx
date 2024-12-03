"use client";

import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

interface Review {
  id: string;
  customer_name: string;
  review: string;
}

export default function ReviewCards() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*');

      if (error) {
        console.error('Error fetching reviews:', error.message || error);
      } else {
        console.log('Fetched reviews:', data);  // Add this line
        setReviews(data || []);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className='py-16 text-center w-screen'>
      <p className='text-2xl'>Reviews from first users</p>
      <div className='flex justify-center gap-4 px-24 py-8'>
        {reviews.map((review) => (
          <div key={review.id} className="review-card bg-white-30 text-white p-6 rounded-3xl">
            <h3 className='text-xl bold-font pb-4'>{review.customer_name}</h3>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>

  );
}
