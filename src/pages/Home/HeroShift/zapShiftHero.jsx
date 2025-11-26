import React from 'react';
import  merchantIMg from '../../../assets/brands/location-merchant.png'
const ZapShiftHero = () => {
  return (
    <div className="relative overflow-hidden bg-[#0A3837] text-white py-16 sm:py-20 lg:py-24 rounded-lg mx-auto my-8 max-w-screen-xl">
      {/* Wave/Pattern Background (ছবির মতো প্যাটার্ন তৈরি করতে একটি SVG/CSS Gradient ব্যবহার করা যেতে পারে) */}
      {/* এটি ছবির উপরের ঢেউ খেলানো প্যাটার্নকে প্রতিনিধিত্ব করে */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23FFFFFF" fill-opacity="1" d="M0,192L48,160C96,128,192,64,288,74.7C384,85,480,171,576,197.3C672,224,768,192,864,181.3C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0.15, // হালকা করার জন্য
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content Area */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <button className="px-8 py-3 font-semibold rounded-full text-[#0A3837] bg-[#B9F544] hover:bg-yellow-400 transition duration-300 shadow-lg whitespace-nowrap">
                Become a Merchant
              </button>
              <button className="px-8 py-3 font-semibold rounded-full text-[#B9F544] border-2 border-[#265D5E] bg-transparent hover:bg-[#265D5E] transition duration-300 whitespace-nowrap">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right Illustration/Icon Area */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            {/* ছবির মতো স্কেচ ডিজাইনটি SVG অথবা একটি PNG/JPEG ইমেজ হিসেবে ব্যবহার করা যেতে পারে */}
            {/* এখানে ছবির স্কেচের মতো দেখতে একটি কাস্টম SVG দেওয়া হলো */}

          <img src={merchantIMg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZapShiftHero;