
import React from 'react';

import liveTracking from '../../../assets/brands/live-tracking.png'
import SafeDeliveryImg   from '../../../assets/brands/safe-delivery.png'



const highlightsData = [
    {
        title: "Live Parcel Tracking",
        description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        
        imageSrc: SafeDeliveryImg, 
        imageAlt: "Illustration of Live Parcel Tracking",
    },
    {
        title: "100% Safe Delivery",
        description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      
        imageSrc: SafeDeliveryImg, 
        imageAlt: "Illustration of 100% Safe Delivery",
    },
    {
        title: "24/7 Call Center Support",
        description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
     
        imageSrc: liveTracking , 
        imageAlt: "Illustration of 24/7 Call Center Support",
    },
];


const ServiceHighlightItem = ({ highlight, isLast }) => (
    <React.Fragment>
        <div className="flex flex-col md:flex-row items-center py-8 px-4 sm:px-6 lg:px-8">
            
            {/* গ্রাফিক/ইমেজ এরিয়া */}
            <div className="flex-shrink-0 w-full max-w-[150px] md:w-1/4 md:max-w-[200px] mb-6 md:mb-0 md:mr-10">
                <img
                    src={highlight.imageSrc} 
                    alt={highlight.imageAlt}
                    className="w-full h-auto block opacity-50" // ডামি ইমেজের জন্য opacity কমানো হয়েছে, আসল ইমেজে এটি তুলে দিন
                />
            </div>

            {/* কন্টেন্ট এরিয়া */}
            <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {highlight.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                    {highlight.description}
                </p>
            </div>
        </div>
        
       
        {!isLast && (
            <hr className="my-0 border-t border-cyan-100" />
        )}
    </React.Fragment>
);

// --- মূল কম্পোনেন্ট ---
const ServiceHighlights = () => {
    return (
        // p-2 md:p-4 এবং border-blue-200 দিয়ে বাইরের বর্ডার তৈরি করা হয়েছে
        <section className="p-2 md:p-4 border border-blue-200"> 
            {/* max-w-6xl mx-auto দিয়ে কন্টেন্টকে মাঝখানে আনা হয়েছে */}
            <div className="max-w-6xl mx-auto bg-white">
                {highlightsData.map((item, index) => (
                    <ServiceHighlightItem 
                        key={index}
                        highlight={item}
                        isLast={index === highlightsData.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServiceHighlights;