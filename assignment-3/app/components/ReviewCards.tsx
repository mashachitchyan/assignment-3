"use client";

import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules'; 

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
        console.log('Fetched reviews:', data);
        setReviews(data || []);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="p-16 text-center w-screen">
      <p className="text-2xl">Reviews from first users</p>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
      >

        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card bg-white-10 text-white p-6 rounded-3xl min-h-64 mt-4">
              <h3 className="text-xl bold-font pb-4">{review.customer_name}</h3>
              <p>{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='flex gap-4 m-auto justify-center pt-4'>
      <div className="custom-prev">
        <button><img src='/images/Arrow-left.svg'></img></button>
      </div>
      <div className="custom-next">
      <button><img src='/images/Arrow-right.svg'></img></button>
      </div>
      </div>
     
    </div>
  );
}
