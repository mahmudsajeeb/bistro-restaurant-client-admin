import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../component/SectionTitle'
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
 

// import required modules
import { Navigation } from "swiper";


function Testimonial() {
  const [reviews,setReview] = useState([]) 

  useEffect(()=>{
    fetch('http://localhost:1000/reviews')
    .then(res =>res.json())
    .then(data =>{
      setReview(data)
    })
  },[])
  return (
    <div>
    <SectionTitle subHeading={' What Our Clients Say '} heading={'TESTIMONIALS'}></SectionTitle>
    <div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
        {
          reviews.map(review =><SwiperSlide key={review._id}>

            <div className='flex flex-col items-center mx-24 my-16 text-center'>
            <Rating
            style={{ maxWidth: 180 }}
            value={reviews.rating}
            readOnly
            
    />
            <p className='py-8'>{review.details}</p>
            <h2 className='text-2xl text-yellow-500'> {review.name}</h2>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
    </div>
  )
}

export default Testimonial