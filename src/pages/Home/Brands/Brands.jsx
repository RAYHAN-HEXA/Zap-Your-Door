import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';

const brandsLogos = [amazon_vector,amazon, casio,moonstar,randstad,star,start_people];




const Brands = () => {
    return (
      <Swiper className='mt-5 mb-5'
      slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
         loop={true}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        

      >
        {
          brandsLogos.map(logo =>  <SwiperSlide><img src= {logo}alt="" /></SwiperSlide> )
        }
       
    
      </Swiper>
    );
};

export default Brands;