"use client";

import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules'; 
import Image from 'next/image';

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
    <div className="2xl:px-64 xl:px-24 lg:px-16 md:px-12 px-8 text-center w-screen pt-16">
      <p className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl">Reviews from first users</p>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        breakpoints={{
          1440: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
          1024: { 
            slidesPerView: 3,
          },
          680: {
            slidesPerView: 2,
          },
          425: { 
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
          }
        }}
      >

        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card text-white p-6 rounded-3xl 2xl:min-h-[300px] xl:min-h-[300px] lg:min-h-[300px] md:max-h-[288px] sm:h-fit mt-8">
              <h3 className="2xl:text-xl xl:text-xl lg-text-xl md:text-lg sm:text-lg bold-font pb-4">{review.customer_name}</h3>
              <p className="2xl:text-lg xl:text-lg lg-text-lg md:text-base sm:text-base">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='flex gap-4 m-auto justify-center pt-4'>
      <div className="custom-prev">
        <button><Image src='./images/Arrow-left.svg' alt='arrow-left' height={8} width={8}></Image></button>
      </div>
      <div className="custom-next">
      <button><Image src='./images/Arrow-right.svg' alt='arrow-right' height={8} width={8}></Image></button>
      </div>
      </div>
     
    </div>
  );
}
