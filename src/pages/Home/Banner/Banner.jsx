import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';


import { BsArrowRight } from 'react-icons/bs'; 

const Banner = () => {
   
    const slides = [
        {
            img: bannerImg1,
           
            description: 'Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.',
        },
        {
            img: bannerImg2,
          
            description: 'Experience peace of mind with our secure and speedy delivery options, ensuring your items reach their destination safely.',
        },
        {
            img: bannerImg3,
           
            description: 'Manage your deliveries with ease. Track, reschedule, and customize your delivery preferences for ultimate convenience.',
        },
    ];

    return (
        <Carousel
            showArrows={true} 
            showStatus={false} 
            showThumbs={false} 
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            // Custom indicator logic remains the same
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            className="inline-block h-1 w-8 bg-lime-500 mx-1 cursor-pointer transition-all duration-300"
                            aria-label={`Selected slide ${label} ${index + 1}`}
                            tabIndex={0}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                        />
                    );
                }
                return (
                    <li
                        className="inline-block h-1 w-5 bg-gray-300 mx-1 cursor-pointer transition-all duration-300"
                        aria-label={`Slide ${label} ${index + 1}`}
                        tabIndex={0}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                    />
                );
            }}
        >
            {slides.map((slide, index) => (
                <div key={index} className="relative w-full h-auto">
                    {/* Background Image */}
                    <img src={slide.img} alt={`Banner ${index + 1}`} className="w-full object-cover" />

                    
                    <div className="absolute top-0 left-0 h-full w-full flex items-end justify-start pb-24 md:pb-32 lg:pb-40 p-6 md:p-10 lg:p-16 xl:p-20">
                        <div className="text-left max-w-lg lg:max-w-xl xl:max-w-2xl ml-4 md:ml-8 lg:ml-12">
                            
                            
                            {/* Description (Size reduced) */}
                            <p className="text-gray-600 mb-6 md:mb-8 text-xs md:text-sm max-w-xs md:max-w-sm">
                                {slide.description}
                            </p>

                            {/* Buttons Container */}
                            <div className="flex items-center space-x-3"> 
                                
                                {/* Track Your Parcel Button (Icon pushed to the right) */}
                                <button className="flex items-center justify-between bg-lime-400 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-lime-500 transition duration-300 shadow-md w-48"> 
                                    
                                    {/* 1. Button Text */}
                                    <span className="text-sm">Track Your Parcel</span> 
                                    
                                    {/* 2. Icon Container: Black circle with white arrow (Right Corner) */}
                                    <span className="bg-gray-900 rounded-full p-1 ml-4"> 
                                        <BsArrowRight className="text-white w-3 h-3" /> 
                                    </span>
                                </button>

                                {/* Be A Rider Button (Size reduced) */}
                                <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300 border border-gray-300 shadow-sm text-sm"> 
                                    Be A Rider
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;